/* Grapevine payment check -- a small program that runs on Cloudflare (a "Worker"), not on the website.

   WHAT IT DOES: after someone pays, Stripe sends them to paid.html with a receipt number in the link
   (session_id=cs_...). paid.html sends that number here. This program asks Stripe, using your secret
   Stripe key, whether that receipt is real and fully paid, and which of your Payment Links it came
   through. It answers with the plan that was ACTUALLY paid for. The website never sees your Stripe key,
   and typing paid.html?plan=complete into a browser no longer unlocks anything.

   SETUP: see HOW-TO-EDIT.txt, section 3d. The short version: paste this whole file into a new Cloudflare
   Worker, add your Stripe key as a secret named STRIPE_SECRET_KEY, and paste the Worker's address into
   js/plans.js (GV_PAYMENT_CHECK_URL).

   THE ONE LIST YOU EDIT: PAYMENT_LINKS below says which plan each Stripe Payment Link sells. It must list
   the same links as js/checkout.js. When you switch from test links to live links, add the live ones here
   too (you can leave the test ones in), then click Deploy again in Cloudflare. */

var PAYMENT_LINKS = {
  /* TEST-MODE links (fake cards only) */
  'https://buy.stripe.com/test_9B6fZh6SW3gz4aB0AJ5EY00': { plan: 'will', household: 'single' },
  'https://buy.stripe.com/test_00wbJ17X07wPbD36Z75EY01': { plan: 'will', household: 'couple' },
  'https://buy.stripe.com/test_5kQ3cv4KO3gzePfcjr5EY02': { plan: 'essentials', household: 'single' },
  'https://buy.stripe.com/test_5kQ8wPa582cvcH7dnv5EY03': { plan: 'essentials', household: 'couple' },
  'https://buy.stripe.com/test_3cI3cv7X0eZhcH7cjr5EY04': { plan: 'complete', household: 'single' },
  'https://buy.stripe.com/test_6oUaEX9149EXcH783b5EY05': { plan: 'complete', household: 'couple' },
  'https://buy.stripe.com/test_28E9ATelo4kD36x0AJ5EY06': { plan: 'doc', household: 'single' },
  'https://buy.stripe.com/test_dRm14n5OS3gzcH76Z75EY07': { plan: 'doc', household: 'couple' },
  'https://buy.stripe.com/test_fZu8wPelo7wP0Yp3MV5EY08': { plan: 'health', household: 'single' },
  'https://buy.stripe.com/test_eVq9AT5OS04n6iJ0AJ5EY09': { plan: 'health', household: 'couple' },
  'https://buy.stripe.com/test_bJefZh0uycR9fTj83b5EY0a': { plan: 'trustpaper', household: 'single' },
  'https://buy.stripe.com/test_28EdR9cdgeZh9uV97f5EY0b': { plan: 'trustpaper', household: 'couple' }

  /* LIVE links go here when you go live, one per line, same pattern, for example:
  , 'https://buy.stripe.com/abc123': { plan: 'will', household: 'single' } */
};

/* the web addresses allowed to ask this program about payments: your live site, plus your own computer
   for testing. Add your own domain here if you move the site to one. */
var ALLOWED_SITES = ['https://gdm805.github.io', 'http://localhost:8000', 'http://127.0.0.1:8000'];

/* true = only unlock payments where the customer ticked Stripe's "I agree to the Terms of Service" box. That box
   appears only on Payment Links with "Require customers to accept your terms of service" switched on, so switch
   it on for EVERY link before setting this to true, or payments through a link without it won't unlock. */
var REQUIRE_TERMS = true;

/* the documents that can be bought one at a time (must match "singles" in js/plans.js) */
var SINGLE_DOCS = ['dpoa', 'hcd', 'dementia', 'hipaa', 'finalwishes', 'schedulea', 'cert', 'affidavit', 'assignment'];

/* ---------- nothing below here needs editing ---------- */

export default {
  async fetch(request, env) {
    var origin = request.headers.get('Origin') || '';
    var cors = {
      'Access-Control-Allow-Origin': ALLOWED_SITES.indexOf(origin) > -1 ? origin : ALLOWED_SITES[0],
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Vary': 'Origin',
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json'
    };
    function reply(body, status) { return new Response(JSON.stringify(body), { status: status || 200, headers: cors }); }

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'GET') return reply({ ok: false, reason: 'method' }, 405);
    if (!env.STRIPE_SECRET_KEY) return reply({ ok: false, reason: 'setup', message: 'STRIPE_SECRET_KEY is not set in Cloudflare.' }, 500);

    var session = new URL(request.url).searchParams.get('session_id') || '';
    if (!/^cs_(test|live)_[A-Za-z0-9]{10,200}$/.test(session)) return reply({ ok: false, reason: 'bad_session' }, 400);

    var res = await fetch('https://api.stripe.com/v1/checkout/sessions/' + session + '?expand[]=payment_link', {
      headers: { Authorization: 'Bearer ' + env.STRIPE_SECRET_KEY }
    });
    if (res.status === 404) return reply({ ok: false, reason: 'not_found' }, 404);
    if (!res.ok) return reply({ ok: false, reason: 'stripe_error', status: res.status }, 502);
    var s = await res.json();

    /* 'no_payment_required' = a 100%-off promotion code (beta testers) brought the total to $0 */
    if (s.status !== 'complete' || (s.payment_status !== 'paid' && s.payment_status !== 'no_payment_required')) return reply({ ok: false, reason: 'not_paid' }, 402);
    if (REQUIRE_TERMS && !(s.consent && s.consent.terms_of_service === 'accepted')) return reply({ ok: false, reason: 'no_terms' }, 403);

    var link = s.payment_link && typeof s.payment_link === 'object' ? s.payment_link.url : '';
    var sold = PAYMENT_LINKS[link];
    if (!sold) return reply({ ok: false, reason: 'unknown_link' }, 404);

    /* for a single document, checkout.html records which one in the payment (client_reference_id, such as
       "doc_single_hcd"), so one payment always unlocks the same one document */
    var doc = '';
    if (sold.plan === 'doc') {
      var parts = String(s.client_reference_id || '').split('_');
      if (SINGLE_DOCS.indexOf(parts[2]) > -1) doc = parts[2];
    }

    return reply({ ok: true, plan: sold.plan, household: sold.household, doc: doc, session: session });
  }
};

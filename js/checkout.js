(function () {
  'use strict';

  /* ------------------------------------------------------------------
     TURNING ON REAL PAYMENTS: the one place to paste your Stripe Payment Links.
     A Payment Link is a ready-made, Stripe-hosted checkout page -- no code on your part beyond
     pasting the URL here.

     Each plan now has TWO prices -- single and couple (see js/plans.js) -- so Stripe needs TWO
     Payment Links per plan, six total.

     1. In your Stripe Dashboard, create a Payment Link for each plan/household combination, at the
        matching price in js/plans.js (Products > Add a Payment Link, one per row below).
     2. In that Payment Link's settings, under "After payment", choose "Redirect customers to a website"
        and enter, for the Will plan's single-person link:
          https://www.grapevinedocs.com/paid.html?plan=will&household=single&session_id={CHECKOUT_SESSION_ID}
        Swap "will" and "single" for the matching plan/household on each link. Type {CHECKOUT_SESSION_ID}
        exactly like that -- Stripe
        fills it in automatically; it is not something you type in yourself.
     3. Paste the six Payment Link URLs below.

     Until a plan/household's link is filled in, its "Continue to secure payment" button is replaced
     with a plain notice, so the page never looks broken while you're getting Stripe set up.

     TO TEST: once the payment check is set up (GV_PAYMENT_CHECK_URL in js/plans.js, HOW-TO-EDIT.txt 3d),
     pay through a test link with Stripe's fake card 4242 4242 4242 4242. Typing paid.html?plan=will only
     unlocks anything while GV_PAYMENT_CHECK_URL is still empty.

     IMPORTANT: every link below must also be listed in PAYMENT_LINKS in cloudflare/payment-check.js, or
     payments through it can't be confirmed.
     ------------------------------------------------------------------ */
  /* TEST-MODE links (Stripe sandbox): these take fake cards only, such as 4242 4242 4242 4242. When you
     go live, replace each with the matching link from your live Stripe account. */
  var PAYMENT_LINKS = {
    will: { single: 'https://buy.stripe.com/test_9B6fZh6SW3gz4aB0AJ5EY00', couple: 'https://buy.stripe.com/test_00wbJ17X07wPbD36Z75EY01' },
    essentials: { single: 'https://buy.stripe.com/test_5kQ3cv4KO3gzePfcjr5EY02', couple: 'https://buy.stripe.com/test_5kQ8wPa582cvcH7dnv5EY03' },
    complete: { single: 'https://buy.stripe.com/test_3cI3cv7X0eZhcH7cjr5EY04', couple: 'https://buy.stripe.com/test_6oUaEX9149EXcH783b5EY05' },
    /* the smaller offers from "Just need one document?" -- paste each Stripe link between the quotes.
       "doc" is used for every single document (they all cost the same); the checkout page remembers which
       document was chosen and paid.html unlocks that one. Until a link is filled in, the checkout page
       shows the "Payments aren't turned on yet" notice for that offer. */
    doc: { single: 'https://buy.stripe.com/test_28E9ATelo4kD36x0AJ5EY06', couple: 'https://buy.stripe.com/test_dRm14n5OS3gzcH76Z75EY07' },
    health: { single: 'https://buy.stripe.com/test_fZu8wPelo7wP0Yp3MV5EY08', couple: 'https://buy.stripe.com/test_eVq9AT5OS04n6iJ0AJ5EY09' },
    trustpaper: { single: 'https://buy.stripe.com/test_bJefZh0uycR9fTj83b5EY0a', couple: 'https://buy.stripe.com/test_28EdR9cdgeZh9uV97f5EY0b' }
  };

  function qs(name) { try { return new URLSearchParams(location.search).get(name); } catch (e) { return null; } }
  function money(n) { return '$' + n.toLocaleString('en-US'); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  var GV = window.GV_PLANS || { order: [], prices: {}, plans: {} };
  var RETURN_LABELS = { 'will.html': 'your will', 'pour-over.html': 'your pour-over will', 'dpoa.html': 'your power of attorney', 'dementia.html': 'your care preferences', 'hcd.html': 'your health care directive', 'hipaa.html': 'your HIPAA authorization', 'trust.html': 'your living trust', 'trust-joint.html': 'your joint living trust', 'cert.html': 'your certification of trust', 'affidavit.html': 'your affidavit of trustee', 'assignment.html': 'your assignment of personal property', 'finalwishes.html': 'your final wishes', 'contacts.html': 'your important contacts', 'schedulea.html': 'your Schedule A' };
  var RETURN_DOC = { 'will.html': 'will', 'pour-over.html': 'pourover', 'dpoa.html': 'dpoa', 'dementia.html': 'dementia', 'hcd.html': 'hcd', 'hipaa.html': 'hipaa', 'trust.html': 'trust', 'trust-joint.html': 'trustjoint', 'cert.html': 'cert', 'affidavit.html': 'affidavit', 'assignment.html': 'assignment', 'finalwishes.html': 'finalwishes', 'contacts.html': 'contacts', 'schedulea.html': 'schedulea' };

  var root = document.getElementById('checkout');
  if (!root) return;

  var plan = qs('plan'); if (!GV.plans[plan]) plan = 'essentials';
  var ret = qs('return') || '';
  var validReturn = Object.prototype.hasOwnProperty.call(RETURN_LABELS, ret) ? ret : '';

  /* household (single or couple) -- the URL wins if present; otherwise fall back to whatever was last
     chosen on the pricing page in this browser, so the choice survives the trip through a builder. */
  var household = qs('household');
  if (household !== 'single' && household !== 'couple') {
    try { household = sessionStorage.getItem('gv.household') === 'couple' ? 'couple' : 'single'; } catch (e) { household = 'single'; }
  }
  try { sessionStorage.setItem('gv.household', household); } catch (e) {}

  /* location.pathname (not a hardcoded filename) so this link works however this page is actually served */
  function switchLink(k) { return location.pathname + '?plan=' + k + '&household=' + household + (validReturn ? '&return=' + encodeURIComponent(validReturn) : ''); }
  function householdLink(h) { return location.pathname + '?plan=' + plan + '&household=' + h + (validReturn ? '&return=' + encodeURIComponent(validReturn) : ''); }

  function switcher() {
    return '<div class="plan-switch" role="group" aria-label="Choose a plan">' + GV.order.map(function (k) {
      var p = GV.plans[k], on = k === plan;
      return '<a class="switch-pill' + (on ? ' on' : '') + '" href="' + switchLink(k) + '" aria-current="' + (on ? 'true' : 'false') + '">' + esc(p.name) + ' <span>' + money(GV.priceFor(k, household)) + '</span></a>';
    }).join('') + '</div>';
  }

  function householdToggle() {
    return '<div class="plan-switch household-switch" role="group" aria-label="Household size">' +
      '<a class="switch-pill' + (household === 'single' ? ' on' : '') + '" href="' + householdLink('single') + '" aria-current="' + (household === 'single' ? 'true' : 'false') + '">Just me</a>' +
      '<a class="switch-pill' + (household === 'couple' ? ' on' : '') + '" href="' + householdLink('couple') + '" aria-current="' + (household === 'couple' ? 'true' : 'false') + '">Me and my spouse or partner</a>' +
      '</div>';
  }

  function render() {
    var docLabel = RETURN_LABELS[validReturn];
    var docKey = RETURN_DOC[validReturn];
    /* one document per trust: a couple pays the same $49 as one person for these, using the single link */
    var payHousehold = (plan === 'doc' && docKey && (GV.trustSide || []).indexOf(docKey) > -1) ? 'single' : household;
    var p = GV.plans[plan], price = GV.priceFor(plan, payHousehold);
    /* trust documents are priced per TRUST: the same price covers a couple's joint trust, but a couple with two
       separate trusts buys once for each trust */
    var perTrust = plan === 'trustpaper' || (plan === 'doc' && docKey && (GV.trustSide || []).indexOf(docKey) > -1);

    if (docKey && window.GVPay && window.GVPay.hasPaid(docKey)) {
      root.innerHTML =
        '<p class="overline">Checkout</p>' +
        '<h1>You’ve already unlocked ' + esc(docLabel) + '</h1>' +
        '<p class="lead">This browser shows you’ve already paid for a plan that includes this document. No need to pay again.</p>' +
        '<div class="order-card"><a class="btn btn-primary btn-lg" href="' + esc(window.GVUrl(validReturn)) + '">Continue to ' + esc(docLabel) + ' <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a></div>';
      return;
    }

    /* a single-document purchase: remember which document, so paid.html can unlock exactly that one */
    if (plan === 'doc' && docKey) { try { localStorage.setItem('grapevine.pending.doc', docKey); } catch (e) {} }
    var includes = (plan === 'doc' && docKey && window.GVFlow) ? [window.GVFlow.baseLabel(docKey)] : p.includes;
    var link = ((PAYMENT_LINKS[plan] || {})[payHousehold] || '').trim();
    var payHref = '#';
    if (link) { payHref = link + (link.indexOf('?') > -1 ? '&' : '?') + 'client_reference_id=' + encodeURIComponent(plan + '_' + payHousehold + (plan === 'doc' && docKey ? '_' + docKey : '')); }
    /* beta testers: Stripe applies the 100%-off code for them (see GV_BETA in js/plans.js) */
    if (link && betaTester()) payHref += '&prefilled_promo_code=' + encodeURIComponent(window.GV_BETA.code);

    root.innerHTML =
      '<p class="overline">Checkout</p>' +
      '<h1>' + (docLabel ? 'Unlock ' + esc(docLabel) : 'Choose your plan') + '</h1>' +
      (docLabel
        ? '<p class="lead">Your answers are already saved in this browser. Pay once for ' + (plan === 'doc' ? 'this document' : 'the ' + esc(p.name) + ' plan') + ' and you can download and print ' + esc(docLabel) + ' right away.</p>'
        : '<p class="lead">Every price is one-time. Pick the plan that fits, then continue to secure payment.</p>') +
      (docLabel
        /* arrived from a document with a plan already chosen: show what they're buying, not the pickers */
        ? '<p class="household-label">' + (household === 'couple' ? 'Pricing for you and your spouse or partner' : 'Pricing for one person') + ' &middot; <a href="' + window.GVUrl('pricing.html') + '?household=' + household + '">Choose a different plan</a></p>'
        : '<p class="household-label">Pricing for</p>' + householdToggle() + switcher()) +
      '<div class="order-card">' +
        '<div class="order-head"><h2>' + esc(p.name) + '</h2><p class="price"><span class="amt">' + money(price) + '</span><span class="per">one-time' + (payHousehold === 'couple' ? ', for a couple' : '') + '</span></p></div>' +
        '<p class="plan-lead">' + esc(p.lead === 'Just your will' ? p.lead : 'Includes') + '</p>' +
        '<ul class="includes">' + includes.map(function (x) { return '<li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>' + esc(x) + '</li>'; }).join('') + '</ul>' +
        (perTrust ? '<p class="per-trust">Priced per trust. One purchase covers one trust, including a married couple’s joint trust. If you and your spouse or partner each have your own separate trust, you’ll need one for each trust.</p>' : '') +
        (link
          ? betaSurvey() + termsFold() + (betaTester() && !surveyDone()
            ? '<button class="btn btn-primary btn-lg" type="button" disabled>Complete the survey above to continue</button>'
            : '<a class="btn btn-primary btn-lg" href="' + payHref + '">' + (betaTester() ? 'Continue to get your free documents' : 'Continue to secure payment') + ' <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>')
          : '<div class="pay-off"><p><strong>Payments aren’t turned on yet.</strong> Add a Stripe Payment Link for the ' + esc(p.name) + ' plan (' + household + ') in <code>js/checkout.js</code>, or open <code>paid.html?plan=' + plan + '&household=' + household + '</code> to try the unlocked view.</p></div>') +
        '<p class="secure-note"><svg class="ico" aria-hidden="true"><use href="#i-lock"/></svg>Handled by Stripe on their own secure page. We never see or store your card details.</p>' +
      '</div>' +
      '<p class="keep-drafting">Not ready to pay? <a href="' + window.GVUrl(validReturn || p.goesTo) + '">Keep drafting for free</a> — your answers stay saved in this browser, and you can come back to pay whenever you like.</p>';
  }

  /* ---------- the beta test (GV_BETA in js/plans.js) ----------
     A beta tester is someone who arrived through the ?beta=1 invitation link while the beta is on. Before paying,
     they complete the feedback survey (a Tally form embedded here); Tally tells this page when it has been
     submitted, which unlocks the payment button, and Stripe then applies the 100%-off code. Remembered in this
     browser, so a tester who buys more than once takes the survey once. */
  function betaTester() {
    var b = window.GV_BETA;
    if (!b || !b.on || !b.code || !b.survey) return false;
    /* one free checkout per tester: after it (paid.js sets grapevine.beta.used), checkout is back to normal */
    try { return localStorage.getItem('grapevine.beta') === '1' && localStorage.getItem('grapevine.beta.used') !== '1'; } catch (e) { return false; }
  }
  function surveyDone() { try { return localStorage.getItem('grapevine.beta.survey') === '1'; } catch (e) { return false; } }
  function betaSurvey() {
    if (!betaTester()) return '';
    if (surveyDone()) return '<div class="beta-box done"><p><strong>Thank you for your feedback.</strong> As a beta tester your documents are free: the discount is applied for you on the payment page, so the total shows $0.00.</p></div>';
    var src = 'https://tally.so/embed/' + encodeURIComponent(window.GV_BETA.survey) + '?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';
    return '<div class="beta-box"><p class="beta-kicker">Beta tester</p>' +
      '<h3>One step before your free documents</h3>' +
      '<p>Please answer our short feedback survey (about 5 minutes). When you submit it, the button below unlocks and your documents are free.</p>' +
      '<iframe class="beta-survey" data-tally-src="' + src + '" loading="lazy" width="100%" height="700" frameborder="0" title="Grapevine beta tester survey"></iframe></div>';
  }
  /* Tally's own embed script sizes the survey to its full height (no scrolling inside the box). If it can't
     load, the survey still shows, just at a fixed height. */
  function loadSurvey() {
    var f = root.querySelector('.beta-survey');
    if (!f) return;
    function fallback() { if (!f.getAttribute('src')) f.setAttribute('src', f.getAttribute('data-tally-src')); }
    if (window.Tally && window.Tally.loadEmbeds) { window.Tally.loadEmbeds(); setTimeout(fallback, 3000); return; }
    var sc = document.createElement('script');
    sc.src = 'https://tally.so/widgets/embed.js';
    sc.onload = function () { if (window.Tally && window.Tally.loadEmbeds) window.Tally.loadEmbeds(); setTimeout(fallback, 3000); };
    sc.onerror = fallback;
    document.head.appendChild(sc);
  }
  window.addEventListener('message', function (e) {
    if (!betaTester() || !/^https:\/\/tally\.so$/.test(e.origin)) return;
    var d = e.data;
    if (typeof d === 'string' && d.indexOf('Tally.FormSubmitted') > -1) {
      try { localStorage.setItem('grapevine.beta.survey', '1'); } catch (x) {}
      render();
      /* bring the thank-you note and the now-unlocked button into view */
      var done = root.querySelector('.beta-box.done');
      if (done && done.scrollIntoView) done.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  /* the Terms and Conditions, readable right here before paying. The text itself lives only in terms.html
     (its <div class="prose">) and is loaded into this fold-down the first time it's opened, so there is one
     copy to edit. Agreeing happens on Stripe's page: each Payment Link has "require customers to accept your
     terms of service" switched on, and the Cloudflare payment check refuses payments without that consent. */
  function termsFold() {
    var url = window.GVUrl('terms.html');
    return '<p class="terms-note">By continuing to payment, you agree to our <a href="' + url + '" target="_blank" rel="noopener">Terms and Conditions</a>.</p>' +
      '<details class="terms-fold"><summary>Read the Terms and Conditions</summary>' +
      '<div class="terms-box" data-terms tabindex="0">Loading…</div>' +
      '<p class="terms-open"><a href="' + url + '" target="_blank" rel="noopener">Open the terms in a new tab</a></p></details>';
  }
  root.addEventListener('toggle', function (e) {
    var d = e.target;
    if (!d.classList || !d.classList.contains('terms-fold') || !d.open) return;
    var box = d.querySelector('[data-terms]');
    if (!box || box.getAttribute('data-loaded')) return;
    fetch(window.GVUrl('terms.html')).then(function (r) { return r.text(); }).then(function (html) {
      var prose = new DOMParser().parseFromString(html, 'text/html').querySelector('.prose');
      if (!prose) throw new Error('no terms');
      box.innerHTML = prose.innerHTML;
      box.setAttribute('data-loaded', '1');
    }).catch(function () {
      box.innerHTML = '<p>The terms couldn’t load here. <a href="' + window.GVUrl('terms.html') + '" target="_blank" rel="noopener">Open them in a new tab</a>.</p>';
    });
  }, true);

  render();
  loadSurvey();
})();

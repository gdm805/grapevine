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
          https://YOURDOMAIN/paid.html?plan=will&household=single&session_id={CHECKOUT_SESSION_ID}
        Swap "will" and "single" for the matching plan/household on each link, and swap YOURDOMAIN for
        your real domain once the site is live. Type {CHECKOUT_SESSION_ID} exactly like that -- Stripe
        fills it in automatically; it is not something you type in yourself.
     3. Paste the six Payment Link URLs below.

     Until a plan/household's link is filled in, its "Continue to secure payment" button is replaced
     with a plain notice, so the page never looks broken while you're getting Stripe set up.

     TO TEST WITHOUT STRIPE: open paid.html?plan=will in your browser. It marks the Will plan as paid in
     this browser, the same way a real payment would, so you can see how the unlocked builder behaves.
     ------------------------------------------------------------------ */
  /* TEST-MODE links (Stripe sandbox): these take fake cards only, such as 4242 4242 4242 4242. When you
     go live, replace each with the matching link from your live Stripe account. */
  var PAYMENT_LINKS = {
    will: { single: 'https://buy.stripe.com/test_9B6fZh6SW3gz4aB0AJ5EY00', couple: 'https://buy.stripe.com/test_00wbJ17X07wPbD36Z75EY01' },
    essentials: { single: 'https://buy.stripe.com/test_5kQ3cv4KO3gzePfcjr5EY02', couple: 'https://buy.stripe.com/test_5kQ8wPa582cvcH7dnv5EY03' },
    complete: { single: 'https://buy.stripe.com/test_3cI3cv7X0eZhcH7cjr5EY04', couple: 'https://buy.stripe.com/test_6oUaEX9149EXcH783b5EY05' }
  };

  function qs(name) { try { return new URLSearchParams(location.search).get(name); } catch (e) { return null; } }
  function money(n) { return '$' + n.toLocaleString('en-US'); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  var GV = window.GV_PLANS || { order: [], prices: {}, plans: {} };
  var RETURN_LABELS = { 'will.html': 'your will', 'pour-over.html': 'your pour-over will', 'dpoa.html': 'your power of attorney', 'dementia.html': 'your care preferences', 'hcd.html': 'your health care directive', 'hipaa.html': 'your HIPAA authorization', 'trust.html': 'your living trust', 'trust-joint.html': 'your joint living trust', 'cert.html': 'your certification of trust', 'affidavit.html': 'your affidavit of trustee', 'assignment.html': 'your assignment of personal property', 'finalwishes.html': 'your final wishes', 'contacts.html': 'your important contacts' };
  var RETURN_DOC = { 'will.html': 'will', 'pour-over.html': 'pourover', 'dpoa.html': 'dpoa', 'dementia.html': 'dementia', 'hcd.html': 'hcd', 'hipaa.html': 'hipaa', 'trust.html': 'trust', 'trust-joint.html': 'trustjoint', 'cert.html': 'cert', 'affidavit.html': 'affidavit', 'assignment.html': 'assignment', 'finalwishes.html': 'finalwishes', 'contacts.html': 'contacts' };

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
    var p = GV.plans[plan], price = GV.priceFor(plan, household);
    var docLabel = RETURN_LABELS[validReturn];
    var docKey = RETURN_DOC[validReturn];

    if (docKey && window.GVPay && window.GVPay.hasPaid(docKey)) {
      root.innerHTML =
        '<p class="overline">Checkout</p>' +
        '<h1>You’ve already unlocked ' + esc(docLabel) + '</h1>' +
        '<p class="lead">This browser shows you’ve already paid for a plan that includes this document. No need to pay again.</p>' +
        '<div class="order-card"><a class="btn btn-primary btn-lg" href="' + esc(window.GVUrl(validReturn)) + '">Continue to ' + esc(docLabel) + ' <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a></div>';
      return;
    }

    var link = ((PAYMENT_LINKS[plan] || {})[household] || '').trim();
    var payHref = '#';
    if (link) { payHref = link + (link.indexOf('?') > -1 ? '&' : '?') + 'client_reference_id=' + encodeURIComponent(plan + '_' + household); }

    root.innerHTML =
      '<p class="overline">Checkout</p>' +
      '<h1>' + (docLabel ? 'Unlock ' + esc(docLabel) : 'Choose your plan') + '</h1>' +
      (docLabel
        ? '<p class="lead">Your answers are already saved in this browser. Pay once for the ' + esc(p.name) + ' plan and you can download and print ' + esc(docLabel) + ' right away.</p>'
        : '<p class="lead">Every price is one-time. Pick the plan that fits, then continue to secure payment.</p>') +
      '<p class="household-label">Pricing for</p>' + householdToggle() +
      switcher() +
      '<div class="order-card">' +
        '<div class="order-head"><h2>' + esc(p.name) + '</h2><p class="price"><span class="amt">' + money(price) + '</span><span class="per">one-time' + (household === 'couple' ? ', for a couple' : '') + '</span></p></div>' +
        '<p class="plan-lead">' + esc(p.lead === 'Just your will' ? p.lead : 'Includes') + '</p>' +
        '<ul class="includes">' + p.includes.map(function (x) { return '<li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>' + esc(x) + '</li>'; }).join('') + '</ul>' +
        (link
          ? '<a class="btn btn-primary btn-lg" href="' + payHref + '">Continue to secure payment <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>'
          : '<div class="pay-off"><p><strong>Payments aren’t turned on yet.</strong> Add a Stripe Payment Link for the ' + esc(p.name) + ' plan (' + household + ') in <code>js/checkout.js</code>, or open <code>paid.html?plan=' + plan + '&household=' + household + '</code> to try the unlocked view.</p></div>') +
        '<p class="secure-note"><svg class="ico" aria-hidden="true"><use href="#i-lock"/></svg>Handled by Stripe on their own secure page. We never see or store your card details.</p>' +
      '</div>' +
      '<p class="keep-drafting">Not ready to pay? <a href="' + window.GVUrl(validReturn || p.goesTo) + '">Keep drafting for free</a> — your answers stay saved in this browser, and you can come back to pay whenever you like.</p>';
  }

  render();
})();

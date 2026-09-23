(function () {
  'use strict';

  /* This is the page Stripe sends someone back to right after they pay (see the instructions in
     js/checkout.js for how that's configured). It reads the plan from the link Stripe redirected to,
     marks that plan as paid in this browser using js/entitlements.js, and sends the person on to their
     document. Opening this page directly, as in paid.html?plan=will, does the same thing -- that's the
     quickest way to try the unlocked view before you've set up real payments. */
  function qs(name) { try { return new URLSearchParams(location.search).get(name); } catch (e) { return null; } }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function money(n) { return '$' + n.toLocaleString('en-US'); }

  var root = document.getElementById('paid');
  if (!root) return;

  var GV = window.GV_PLANS || { plans: {} };
  var KNOWN_PAGES = ['will.html', 'pour-over.html', 'dpoa.html', 'dementia.html', 'hcd.html', 'hipaa.html', 'trust.html', 'trust-joint.html', 'cert.html', 'affidavit.html', 'assignment.html', 'finalwishes.html', 'contacts.html'];
  var plan = qs('plan');
  var session = qs('session_id') || '';
  var ret = qs('return');
  if (KNOWN_PAGES.indexOf(ret) === -1) ret = '';
  var household = qs('household');
  if (household !== 'single' && household !== 'couple') {
    try { household = sessionStorage.getItem('gv.household') === 'couple' ? 'couple' : 'single'; } catch (e) { household = 'single'; }
  }

  if (!GV.plans[plan] || !window.GVPay) {
    root.innerHTML =
      '<div class="paid-card">' +
      '<h1>We couldn’t confirm that payment</h1>' +
      '<p class="lead paid-error">This page is missing the plan it needs. If you just paid, check the confirmation email from Stripe, or return to checkout and try again.</p>' +
      '<div class="paid-actions"><a class="btn btn-primary" href="checkout.html">Back to checkout</a></div>' +
      '</div>';
    return;
  }

  window.GVPay.markPaid(plan, { session: session });

  var p = GV.plans[plan];
  var goTo = ret || p.goesTo;
  var unlockedNames = { will: 'your will', pourover: 'your pour-over will', dpoa: 'your power of attorney', dementia: 'your care preferences', hcd: 'your health care directive', hipaa: 'your HIPAA authorization', trust: 'your living trust', trustjoint: 'your joint living trust', cert: 'your certification of trust', affidavit: 'your affidavit of trustee', assignment: 'your assignment of personal property', finalwishes: 'your final wishes', contacts: 'your important contacts' };
  var unlocked = (p.unlocks || []).map(function (k) { return unlockedNames[k] || k; });

  root.innerHTML =
    '<div class="paid-card">' +
    '<div class="paid-badge"><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg></div>' +
    '<h1>Payment received</h1>' +
    '<p class="lead">Thank you. Your ' + esc(p.name) + ' plan is unlocked in this browser, so you can download and print ' + unlocked.join(' and ') + ' right away.</p>' +
    '<div class="paid-summary">' +
    '<div class="sum-row"><span class="sum-l">Plan</span><span class="sum-v">' + esc(p.name) + '</span></div>' +
    '<div class="sum-row"><span class="sum-l">Amount</span><span class="sum-v">' + money(GV.priceFor(plan, household)) + ', one-time</span></div>' +
    '</div>' +
    '<div class="paid-actions"><a class="btn btn-primary btn-lg" href="' + esc(window.GVUrl(goTo)) + '">Continue to your document <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a></div>' +
    '<p class="paid-note">This unlocks on this device and browser. If you switch devices or clear your browser data, keep your payment confirmation email handy — there’s no account system yet to look purchases up automatically.</p>' +
    '</div>';
})();

/* Grapevine entitlements: remembers, in this browser, which plan someone paid for, and which builders
   (will, pour-over, dpoa) that unlocks. Written to by paid.html right after payment. Read by js/will.js
   to decide whether the Download and Print buttons work, or send the person to checkout instead.

   This is a browser-only check, not a server-side one -- there is no account system yet (see
   js/checkout.js for how payment itself works). It is enough to stop someone from casually downloading
   without paying, but a technical visitor could bypass it. Real enforcement needs a small backend that
   generates the file only after checking payment with Stripe, which is a later step for this project. */
window.GVPay = (function () {
  var PREFIX = 'grapevine.paid.';

  function plansData() { return (window.GV_PLANS && window.GV_PLANS.plans) || {}; }
  function order() { return (window.GV_PLANS && window.GV_PLANS.order) || ['will', 'essentials', 'complete']; }

  function paidPlans() {
    return order().filter(function (p) {
      try { return !!localStorage.getItem(PREFIX + p); } catch (e) { return false; }
    });
  }

  function unlocksFor(plan) {
    var p = plansData()[plan];
    return (p && p.unlocks) || [];
  }

  /* doc is one of the builder kinds: 'will', 'pourover', 'dpoa' */
  function hasPaid(doc) {
    var plans = paidPlans();
    for (var i = 0; i < plans.length; i++) { if (unlocksFor(plans[i]).indexOf(doc) > -1) return true; }
    return false;
  }

  /* the cheapest plan that unlocks a given document, for pointing someone to checkout */
  function planForDoc(doc) {
    var list = order();
    for (var i = 0; i < list.length; i++) { if (unlocksFor(list[i]).indexOf(doc) > -1) return list[i]; }
    return 'essentials';
  }

  function markPaid(plan, info) {
    if (!plansData()[plan]) return false;
    try {
      localStorage.setItem(PREFIX + plan, JSON.stringify({ at: new Date().toISOString(), session: (info && info.session) || '' }));
      return true;
    } catch (e) { return false; }
  }

  return { hasPaid: hasPaid, planForDoc: planForDoc, markPaid: markPaid, paidPlans: paidPlans };
})();

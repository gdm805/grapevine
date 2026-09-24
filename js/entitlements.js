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
  function allPlans() { return order().concat((window.GV_PLANS && window.GV_PLANS.extra) || []); }

  function paidPlans() {
    return allPlans().filter(function (p) {
      try { return !!localStorage.getItem(PREFIX + p); } catch (e) { return false; }
    });
  }

  /* the "single document" plan unlocks only the document(s) actually bought, remembered here */
  function singleDocs() {
    try { return (JSON.parse(localStorage.getItem(PREFIX + 'doc')) || {}).docs || []; } catch (e) { return []; }
  }

  function unlocksFor(plan) {
    if (plan === 'doc') return singleDocs();
    var p = plansData()[plan];
    return (p && p.unlocks) || [];
  }

  /* doc is one of the builder kinds: 'will', 'pourover', 'dpoa' */
  function hasPaid(doc) {
    var plans = paidPlans();
    for (var i = 0; i < plans.length; i++) { if (unlocksFor(plans[i]).indexOf(doc) > -1) return true; }
    return false;
  }

  /* the cheapest plan that unlocks a given document, for pointing someone to checkout. A document that
     can be bought by itself points to the single-document plan, which is cheaper than any package. */
  function planForDoc(doc) {
    var singles = (window.GV_PLANS && window.GV_PLANS.singles) || [];
    if (singles.indexOf(doc) > -1) return 'doc';
    var list = order();
    for (var i = 0; i < list.length; i++) { if (unlocksFor(list[i]).indexOf(doc) > -1) return list[i]; }
    return 'essentials';
  }

  function markPaid(plan, info) {
    if (!plansData()[plan]) return false;
    try {
      if (plan === 'doc') {
        /* add this document to the list of single documents bought in this browser */
        var docs = singleDocs();
        var d = info && info.doc;
        if (d && docs.indexOf(d) === -1) docs.push(d);
        localStorage.setItem(PREFIX + 'doc', JSON.stringify({ at: new Date().toISOString(), session: (info && info.session) || '', docs: docs }));
        return true;
      }
      localStorage.setItem(PREFIX + plan, JSON.stringify({ at: new Date().toISOString(), session: (info && info.session) || '' }));
      return true;
    } catch (e) { return false; }
  }

  return { hasPaid: hasPaid, planForDoc: planForDoc, markPaid: markPaid, paidPlans: paidPlans };
})();

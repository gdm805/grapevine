/* Grapevine "package" flow: lets someone answer every document in their Will, Essentials, or
   Complete package back to back, instead of finding each builder on their own. Every plan now
   starts a flow -- the order for each plan is FLOWS below, and matches what js/plans.js promises
   each plan includes. Say the word if you want the order changed, or another document added.

   Read by js/will.js, which shows the "document X of Y" progress track and the "Continue to your
   ..." button at the end of each document, and the final "package is complete" screen.
   Started by any link with a data-plan="will"/"essentials"/"complete" attribute -- see the
   "Start your will"/"Start with Essentials/Complete" buttons in pricing.html and js/pricing.js.
   Complete's trust document depends on household size (js/pricing.js's "Just me" / "Me and my
   spouse or partner" toggle, read the same way pricing.js and checkout.js read it): a single
   person gets the single-trustmaker Trust, a couple gets the Joint Trust -- decided the moment the
   flow starts, from sessionStorage['gv.household']. */
window.GVFlow = (function () {
  var KEY = 'grapevine.flow.v1';
  var FLOWS = {
    will: ['will', 'finalwishes', 'contacts'],
    essentials: ['will', 'dpoa', 'hcd', 'dementia', 'hipaa', 'finalwishes', 'contacts'],
    complete: ['pourover', 'dpoa', 'hcd', 'dementia', 'hipaa', 'trust', 'cert', 'affidavit', 'assignment', 'finalwishes', 'contacts']
  };
  var PAGES = {
    will: 'will.html', pourover: 'pour-over.html', dpoa: 'dpoa.html', hcd: 'hcd.html', dementia: 'dementia.html', hipaa: 'hipaa.html',
    trust: 'trust.html', trustjoint: 'trust-joint.html', cert: 'cert.html', affidavit: 'affidavit.html', assignment: 'assignment.html',
    finalwishes: 'finalwishes.html', contacts: 'contacts.html'
  };
  var LABELS = {
    will: 'Will', pourover: 'Pour-Over Will', dpoa: 'Power of Attorney', hcd: 'Health Care Directive', dementia: 'Dementia Care Preferences', hipaa: 'HIPAA Authorization',
    trust: 'Living Trust', trustjoint: 'Living Trust', cert: 'Certification of Trust', affidavit: 'Affidavit of Trustee', assignment: 'Assignment of Property',
    finalwishes: 'Final Wishes', contacts: 'Important Contacts'
  };

  function household() {
    try { return sessionStorage.getItem('gv.household') === 'couple' ? 'couple' : 'single'; } catch (e) { return 'single'; }
  }
  function read() {
    try { var s = localStorage.getItem(KEY); return s ? JSON.parse(s) : null; } catch (e) { return null; }
  }
  function write(f) { try { localStorage.setItem(KEY, JSON.stringify(f)); } catch (e) { /* ignore */ } }

  function start(plan) {
    var docs = FLOWS[plan];
    if (!docs) { clear(); return null; }
    if (plan === 'complete' && household() === 'couple') {
      docs = docs.map(function (k) { return k === 'trust' ? 'trustjoint' : k; });
    }
    var f = { plan: plan, docs: docs, done: [] };
    write(f);
    return f;
  }
  function current() { return read(); }
  function markDone(kind) {
    var f = read(); if (!f || f.docs.indexOf(kind) === -1) return;
    if (f.done.indexOf(kind) === -1) { f.done.push(kind); write(f); }
  }
  function clear() { try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } }
  function pageFor(kind) { return PAGES[kind] || '#'; }
  function labelFor(kind) { return LABELS[kind] || kind; }

  /* Start (or clear) a flow the moment someone clicks a plan's "Start" button, before the browser
     follows the link. */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-plan]');
    if (!a) return;
    var plan = a.getAttribute('data-plan');
    if (FLOWS[plan]) start(plan); else clear();
  });

  return { start: start, current: current, markDone: markDone, clear: clear, pageFor: pageFor, labelFor: labelFor, plans: FLOWS };
})();

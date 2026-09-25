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
    /* Complete starts with the TRUST: the pour-over will asks about the trust (its name, date, trustee), so the
       trust has to exist in the person's mind -- and in their answers -- first. ALL trust documents (the trust and
       its paperwork) come before the pour-over will; then the personal documents. (Changed 25 Sep 2026; it used to start with the pour-over will.) */
    complete: ['trust', 'cert', 'affidavit', 'assignment', 'pourover', 'dpoa', 'hcd', 'dementia', 'hipaa', 'finalwishes', 'contacts'],
    /* the two short packages sold from "Just need one document?" on the pricing page */
    health: ['hcd', 'dementia', 'hipaa', 'finalwishes'],
    trustpaper: ['schedulea', 'cert', 'affidavit', 'assignment']
  };
  var PAGES = {
    will: 'will.html', pourover: 'pour-over.html', dpoa: 'dpoa.html', hcd: 'hcd.html', dementia: 'dementia.html', hipaa: 'hipaa.html',
    trust: 'trust.html', trustjoint: 'trust-joint.html', cert: 'cert.html', affidavit: 'affidavit.html', assignment: 'assignment.html',
    finalwishes: 'finalwishes.html', contacts: 'contacts.html', schedulea: 'schedulea.html'
  };
  var LABELS = {
    will: 'Will', pourover: 'Pour-Over Will', dpoa: 'Power of Attorney', hcd: 'Health Care Directive', dementia: 'Dementia Care Preferences', hipaa: 'HIPAA Authorization',
    trust: 'Living Trust', trustjoint: 'Living Trust', cert: 'Certification of Trust', affidavit: 'Affidavit of Trustee', assignment: 'Assignment of Property',
    finalwishes: 'Final Wishes', contacts: 'Important Contacts', schedulea: 'Schedule A (Trust Property)'
  };

  /* Documents each person signs for themselves. For a couple, each of these is answered TWICE in a row
     (first person, then the second person, id "dpoa:2"), and the second copy can be a "mirror image"
     of the first (see the mirror box in js/will.js). Trust-side documents and Important Contacts
     are shared by the household, so they appear once. */
  var PER_PERSON = ['will', 'pourover', 'dpoa', 'hcd', 'dementia', 'hipaa', 'finalwishes'];
  function baseOf(id) { return String(id).split(':')[0]; }

  function household() {
    try { return sessionStorage.getItem('gv.household') === 'couple' ? 'couple' : 'single'; } catch (e) { return 'single'; }
  }
  function read() {
    try { var s = localStorage.getItem(KEY); return s ? JSON.parse(s) : null; } catch (e) { return null; }
  }
  function write(f) { try { localStorage.setItem(KEY, JSON.stringify(f)); } catch (e) { /* ignore */ } }

  /* start(plan) begins one of the packages above. start('doc', 'dpoa') begins a single document, bought on
     its own -- for a couple, the personal documents still come twice (one per person), the trust-side
     ones once. */
  function start(plan, oneDoc) {
    var docs = plan === 'doc' && PAGES[oneDoc] ? [oneDoc] : FLOWS[plan];
    if (!docs) { clear(); return null; }
    if (plan === 'complete' && household() === 'couple') {
      docs = docs.map(function (k) { return k === 'trust' ? 'trustjoint' : k; });
    }
    var couple = plan !== null && household() === 'couple';
    if (couple) {
      var doubled = [];
      docs.forEach(function (k) { doubled.push(k); if (PER_PERSON.indexOf(k) > -1) doubled.push(k + ':2'); });
      docs = doubled;
    }
    var f = { plan: plan, docs: docs, done: [], couple: couple };
    write(f);
    return f;
  }
  function current() { return read(); }
  function markDone(kind) {
    var f = read(); if (!f || f.docs.indexOf(kind) === -1) return;
    if (f.done.indexOf(kind) === -1) { f.done.push(kind); write(f); }
  }
  function clear() { try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } }
  function pageFor(id) { var p = PAGES[baseOf(id)] || '#'; return /:2$/.test(id) ? p + '?spouse=2' : p; }
  function readProfileNames() { try { return JSON.parse(localStorage.getItem('grapevine.profile.v1') || '{}') || {}; } catch (e) { return {}; } }
  function labelFor(id) {
    var base = baseOf(id), label = LABELS[base] || base;
    var f = read();
    if (PER_PERSON.indexOf(base) === -1 || !(f && f.couple)) return label;
    var pr = readProfileNames();
    return label + ' \u2014 ' + (/:2$/.test(id) ? (pr.name2 || 'second person') : (pr.name || 'first person'));
  }

  /* Start (or clear) a flow the moment someone clicks a plan's "Start" button, before the browser
     follows the link. */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-plan]');
    if (!a) return;
    var plan = a.getAttribute('data-plan');
    var f = null;
    if (plan === 'doc') f = start('doc', a.getAttribute('data-doc'));
    else if (FLOWS[plan]) f = start(plan); else clear();
    /* send the click to the flow's FIRST document (for Complete: the trust, or the joint trust for a couple),
       whatever page the link itself names, keeping its ?household= and other settings */
    if (f && f.docs.length && a.getAttribute('href')) {
      try {
        var to = new URL(pageFor(f.docs[0]), location.href), from = new URL(a.getAttribute('href'), location.href);
        from.searchParams.forEach(function (v, k) { to.searchParams.set(k, v); });
        a.setAttribute('href', to.href);
      } catch (err) { /* keep the link as it was */ }
    }
  });

  return { start: start, current: current, markDone: markDone, clear: clear, baseOf: baseOf, baseLabel: function (id) { return LABELS[baseOf(id)] || baseOf(id); }, pageFor: pageFor, labelFor: labelFor, plans: FLOWS };
})();

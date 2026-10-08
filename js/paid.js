(function () {
  'use strict';

  /* This is the page Stripe sends someone back to right after they pay (see the instructions in
     js/checkout.js for how that's configured). Stripe adds a receipt number to the link (session_id).
     When the payment check is set up (GV_PAYMENT_CHECK_URL in js/plans.js), this page sends that number to
     the Cloudflare payment check, which asks Stripe what was really paid for; the plan, household and
     document come from Stripe's answer, never from the link, so typing paid.html?plan=complete unlocks
     nothing. Only while GV_PAYMENT_CHECK_URL is empty does it trust the link, as it used to. */
  function qs(name) { try { return new URLSearchParams(location.search).get(name); } catch (e) { return null; } }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function money(n) { return '$' + n.toLocaleString('en-US'); }

  var root = document.getElementById('paid');
  if (!root) return;

  var GV = window.GV_PLANS || { plans: {} };
  var KNOWN_PAGES = ['package.html', 'will.html', 'pour-over.html', 'dpoa.html', 'dementia.html', 'hcd.html', 'hipaa.html', 'trust.html', 'trust-joint.html', 'cert.html', 'affidavit.html', 'assignment.html', 'finalwishes.html', 'contacts.html', 'schedulea.html'];
  var plan = qs('plan');
  var session = qs('session_id') || '';
  var ret = qs('return');
  if (KNOWN_PAGES.indexOf(ret) === -1) ret = '';
  var household = qs('household');
  if (household !== 'single' && household !== 'couple') {
    try { household = sessionStorage.getItem('gv.household') === 'couple' ? 'couple' : 'single'; } catch (e) { household = 'single'; }
  }

  function problem(msg, retry) {
    root.innerHTML =
      '<div class="paid-card">' +
      '<h1>We couldn’t confirm that payment</h1>' +
      '<p class="lead paid-error">' + msg + '</p>' +
      '<div class="paid-actions">' + (retry ? '<a class="btn btn-primary" href="' + esc(location.href) + '">Try again</a> ' : '') +
      '<a class="btn ' + (retry ? 'btn-secondary' : 'btn-primary') + '" href="' + esc(window.GVUrl('checkout.html')) + '">Back to checkout</a></div>' +
      '</div>';
  }

  var CHECK_URL = String(window.GV_PAYMENT_CHECK_URL || '').trim();
  var ASK_EMAIL = ' If you were charged, reply to your Stripe receipt email and we’ll unlock your documents by hand.';

  if (!window.GVPay) { problem('This page didn’t load properly. Please refresh it.', true); return; }

  if (!CHECK_URL) {
    /* payment check not set up yet: trust the link, as before */
    if (!GV.plans[plan]) { problem('This page is missing the plan it needs. If you just paid, check the confirmation email from Stripe, or return to checkout and try again.'); return; }
    finish(false);
    return;
  }

  if (!/^cs_(test|live)_/.test(session)) {
    problem('This page only unlocks documents when you arrive here straight from Stripe’s payment page.' + ASK_EMAIL);
    return;
  }

  root.innerHTML = '<div class="paid-card"><h1>Confirming your payment…</h1><p class="lead">This takes a few seconds. Please keep this page open.</p></div>';
  fetch(CHECK_URL.replace(/\/+$/, '') + '/?session_id=' + encodeURIComponent(session), { cache: 'no-store' })
    .then(function (r) { return r.json().catch(function () { return { ok: false, reason: 'bad_reply' }; }); })
    .then(function (ans) {
      if (!ans || !ans.ok || !GV.plans[ans.plan]) {
        var why = ans && ans.reason;
        if (why === 'not_paid') problem('Stripe says this payment hasn’t gone through. If you just paid, wait a minute and try again.', true);
        else if (why === 'no_terms') problem('This payment didn’t record your agreement to our Terms and Conditions, so we can’t unlock your documents automatically.' + ASK_EMAIL);
        else if (why === 'stripe_error' || why === 'setup' || why === 'bad_reply') problem('We couldn’t reach Stripe just now. Please try again in a minute.' + ASK_EMAIL, true);
        else problem('Stripe doesn’t recognize this payment.' + ASK_EMAIL);
        return;
      }
      /* Stripe's answer, not the link, decides what gets unlocked */
      plan = ans.plan;
      household = ans.household === 'couple' ? 'couple' : 'single';
      /* a beta tester's free checkout: one per tester, so retire the beta discount in this browser */
      if (ans.free) { try { localStorage.setItem('grapevine.beta.used', '1'); } catch (x) {} }
      wasFree = !!ans.free;
      finish(true, ans.doc || '');
    })
    .catch(function () { problem('We couldn’t reach the payment check. Check your internet connection and try again.' + ASK_EMAIL, true); });

  var wasFree = false;
  function finish(verified, confirmedDoc) {
    /* a single-document purchase unlocks just the document that was chosen at checkout (remembered in this
       browser); if it can't be found -- say, someone paid on a different device -- ask which one it was */
    var docKey = '';
    if (plan === 'doc') {
      /* a confirmed payment names its own document; only an older payment without one falls back */
      docKey = confirmedDoc || qs('doc') || '';
      if (!docKey) { try { docKey = localStorage.getItem('grapevine.pending.doc') || ''; } catch (e) { docKey = ''; } }
      if ((GV.singles || []).indexOf(docKey) === -1) {
        var hh = household;
        root.innerHTML =
          '<div class="paid-card"><h1>Payment received</h1>' +
          '<p class="lead">Thank you. Which document did you buy?</p>' +
          '<div class="paid-actions">' + (GV.singles || []).map(function (k) {
            return '<a class="btn btn-secondary" href="' + esc(location.pathname) + '?plan=doc&doc=' + k + '&household=' + hh + '&session_id=' + encodeURIComponent(session) + '">' + esc(window.GVFlow ? window.GVFlow.baseLabel(k) : k) + '</a>';
          }).join(' ') + '</div></div>';
        return;
      }
    }
    window.GVPay.markPaid(plan, { session: session, doc: docKey, verified: verified });

    var p = GV.plans[plan];
    /* inside a package, "Download your documents" goes to the package summary, which has the Download all button.
       The package is normally still saved in this browser. If it isn't, or it's saved as a different plan or
       household than the one Stripe says was bought (say, the package was restarted, or "Just me" was still
       selected), it's rebuilt here from Stripe's answer, and every document already answered counts as done --
       so this button never sends someone back to the start of their first document. */
    var fl = window.GVFlow && window.GVFlow.current();
    if (plan !== 'doc' && window.GVFlow && (!fl || fl.plan !== plan || !!fl.couple !== (household === 'couple'))) {
      fl = window.GVFlow.rebuild(plan, household) || fl;
    }
    var goTo = (fl && fl.plan === plan && plan !== 'doc') ? 'package.html' : (ret || (plan === 'doc' && window.GVFlow ? window.GVFlow.pageFor(docKey) : p.goesTo));
    var unlockedNames = { will: 'your will', pourover: 'your pour-over will', dpoa: 'your power of attorney', dementia: 'your care preferences', hcd: 'your health care directive', hipaa: 'your HIPAA authorization', trust: 'your living trust', trustjoint: 'your joint living trust', cert: 'your certification of trust', affidavit: 'your affidavit of trustee', assignment: 'your assignment of personal property', finalwishes: 'your final wishes', contacts: 'your important contacts', schedulea: 'your Schedule A' };
    var unlocked = (plan === 'doc' ? [docKey] : (p.unlocks || [])).map(function (k) { return unlockedNames[k] || k; });

    /* back to the finished documents, with the download box brought into view (js/will.js reads ?download=all) */
    var downloadHref = window.GVUrl(goTo) + (goTo.indexOf('?') > -1 ? '&' : '?') + 'download=all';
    /* and straight to the signing steps: a package's are all on its summary; a single document's are on its own page */
    var signHref = window.GVUrl(goTo) + '#how-to-sign';
    var what = plan === 'doc' ? esc(window.GVFlow ? window.GVFlow.baseLabel(docKey) : 'Your document') : 'Your ' + esc(p.name) + ' package';
    var amount = wasFree ? '$0 (beta tester)' : money(GV.priceFor(plan, (plan === 'doc' && (GV.trustSide || []).indexOf(docKey) > -1) ? 'single' : household)) + ', one-time';
    root.innerHTML =
      '<div class="paid-card">' +
      '<div class="paid-badge"><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg></div>' +
      '<h1>You’re all set</h1>' +
      '<p class="lead">' + what + ' is unlocked. Download ' + (plan === 'doc' ? 'it' : 'your documents') + ' now, then follow the signing steps for each one.</p>' +
      '<div class="paid-actions"><a class="btn btn-primary btn-lg" href="' + esc(downloadHref) + '">Download your ' + (plan === 'doc' ? 'document' : 'documents') + ' <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>' +
      '<a class="btn btn-secondary btn-lg" href="' + esc(signHref) + '">How to sign ' + (plan === 'doc' ? 'it' : 'your documents') + '</a></div>' +
      '<p class="paid-sign"><strong>Don’t sign yet.</strong> ' + (plan === 'doc' ? 'Your document has' : 'Each document has') + ' its own signing steps, such as who must be there when you sign. Read them first.</p>' +
      '<div class="paid-summary">' +
      '<div class="sum-row"><span class="sum-l">' + (plan === 'doc' ? 'Document' : 'Plan') + '</span><span class="sum-v">' + esc(plan === 'doc' && window.GVFlow ? window.GVFlow.baseLabel(docKey) : p.name) + '</span></div>' +
      '<div class="sum-row"><span class="sum-l">Amount</span><span class="sum-v">' + amount + '</span></div>' +
      '</div>' +
      '<p class="paid-note"><strong>Save your files right away.</strong> Your purchase is remembered only in this browser on this device. If you switch devices or clear your browser data, email support@grapevinedocs.com with your Stripe receipt and we’ll help you get back in.</p>' +
      '</div>';
  }
})();

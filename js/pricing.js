(function () {
  'use strict';

  /* Prices and plan details live in js/plans.js (window.GV_PLANS), so the pricing page and the payment
     page always agree. To change what a plan costs or includes, edit that file, not this one. */
  var GV = window.GV_PLANS;
  var PLANS = GV.plans;

  function money(n) { return '$' + n.toLocaleString('en-US'); }

  /* Single vs. couple: one toggle controls every price on the page. Defaults to "single"; remembered
     in this browser (sessionStorage) so it survives normal navigation but resets in a new tab. */
  var household = 'single';
  try { household = sessionStorage.getItem('gv.household') === 'couple' ? 'couple' : 'single'; } catch (e) {}
  /* ?household=couple|single in the address (the home page's questions send it) wins, and is remembered */
  try {
    var hq = new URLSearchParams(location.search).get('household');
    if (hq === 'couple' || hq === 'single') { household = hq; sessionStorage.setItem('gv.household', household); }
  } catch (e) {}

  function setHousehold(h) {
    household = h === 'couple' ? 'couple' : 'single';
    try { sessionStorage.setItem('gv.household', household); } catch (e) {}
    paint();
  }

  function paint() {
    /* every price on the page, whichever plan it belongs to, plus the "one-time" label right after it */
    Object.keys(GV.prices).forEach(function (k) {
      var amt = money(GV.priceFor(k, household));
      document.querySelectorAll('[data-price="' + k + '"]').forEach(function (el) {
        el.textContent = amt;
        var per = el.parentElement && el.parentElement.querySelector('.per');
        if (per) per.textContent = (household === 'couple' && GV.prices[k].single !== GV.prices[k].couple) ? 'one-time, for a couple' : 'one-time';
      });
    });
    /* the toggle's own pressed state */
    document.querySelectorAll('[data-household]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-household') === household ? 'true' : 'false');
    });
    /* carry the choice into every "start"/"continue" link so checkout shows the right price too.
       Keep url.href (the full resolved URL), not just url.pathname -- on the real site these hrefs
       are relative ("will.html") and pathname alone is fine, but on a published artifact preview
       they're already absolute claude.ai links, and pathname alone silently drops the origin,
       turning "https://claude.ai/artifact/xxx" into a broken "/artifact/xxx" -- a real bug that
       shipped once already; url.href resolves correctly either way. */
    document.querySelectorAll('a[data-cta]').forEach(function (a) {
      try {
        /* a card whose couple version is a different page (Living Trust: the joint trust) */
        if (!a.hasAttribute('data-single-href')) a.setAttribute('data-single-href', a.getAttribute('href'));
        var base = household === 'couple' && a.getAttribute('data-couple-href') ? a.getAttribute('data-couple-href') : a.getAttribute('data-single-href');
        var url = new URL(base, location.href);
        url.searchParams.set('household', household);
        a.setAttribute('href', url.href);
      } catch (e) {}
    });
    if (form) render();
  }

  document.querySelectorAll('[data-household]').forEach(function (btn) {
    btn.addEventListener('click', function () { setHousehold(btn.getAttribute('data-household')); });
  });

  /* (26 Oct 2026) the "which plan fits" questions and the "Often chosen in similar situations" label were removed:
     the home page now shows a neutral comparison of what each document does, with no suggestion. */
  paint();
})();

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
        if (per) per.textContent = household === 'couple' ? 'one-time, for a couple' : 'one-time';
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
        var url = new URL(a.getAttribute('href'), location.href);
        url.searchParams.set('household', household);
        a.setAttribute('href', url.href);
      } catch (e) {}
    });
    if (form) render();
  }

  document.querySelectorAll('[data-household]').forEach(function (btn) {
    btn.addEventListener('click', function () { setHousehold(btn.getAttribute('data-household')); });
  });

  /* Which plan fits */
  var form = document.getElementById('picker');
  var out = document.getElementById('pick-result');
  function render() {
    if (!form || !out) return;
    var el = form.querySelector('input[name="need"]:checked');
    var key = el ? el.value : 'essentials';
    var p = PLANS[key];
    out.innerHTML =
      '<p class="pick-kicker">We suggest</p>' +
      '<div class="pick-line"><h3>' + p.name + '</h3><p class="pick-price"><span>' + money(GV.priceFor(key, household)) + '</span> one-time' + (household === 'couple' ? ', for a couple' : '') + '</p></div>' +
      '<p class="pick-why">' + p.why + '</p>' +
      '<a class="btn btn-primary" href="' + window.GVUrl(p.goesTo) + '?household=' + household + '" data-cta data-plan="' + key + '">' + p.cta + '</a>';
  }
  if (form) form.addEventListener('change', render);

  /* the home page's "answer a few quick questions" finder sends its recommendation here as
     ?need=will|essentials|complete -- pre-select that plan in the picker below and scroll to it,
     so someone doesn't have to answer the same question about themselves twice. */
  try {
    var needed = new URLSearchParams(location.search).get('need');
    if (form && needed) {
      var radio = form.querySelector('input[name="need"][value="' + needed + '"]');
      if (radio) {
        radio.checked = true;
        setTimeout(function () { form.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 50);
      }
    }
  } catch (e) {}

  paint();
})();

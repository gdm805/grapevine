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

  /* Which plan fits: the same six questions as the home page's finder. Real estate, wanting to skip
     probate, and owning property in more than one state are the usual reasons a trust is worth adding
     to a will -- any one of them points at Complete. Otherwise wanting help with money or medical
     decisions points at Essentials; a plain will covers the rest. */
  var form = document.getElementById('picker');
  var out = document.getElementById('pick-result');
  function ans(name) {
    var el = form.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value === 'y' : false;
  }
  function render() {
    if (!form || !out) return;
    var kids = ans('kids'), home = ans('home'), probate = ans('probate'), multistate = ans('multistate'), money = ans('money'), care = ans('care');
    var wantsTrust = home || probate || multistate;
    var key = wantsTrust ? 'complete' : (money || care ? 'essentials' : 'will');
    var p = PLANS[key];
    var docs = [kids ? 'Last Will and Testament, with a guardian for your children' : 'Last Will and Testament'];
    if (wantsTrust) docs.push('Revocable Living Trust, so your property passes privately');
    if (money) docs.push('Durable Power of Attorney, for someone to handle your money');
    if (care) docs.push('Health Care Directive, for someone to make medical decisions');
    var why = wantsTrust
      ? 'Owning real estate, wanting to avoid probate, or owning property in more than one state are the usual reasons a trust is worth adding to a will.'
      : (money || care
        ? 'On top of a will, this adds the paperwork that lets someone act for you, with your money and your medical care, while you’re alive.'
        : 'A will covers naming a guardian for your children and saying who receives what you own.');
    out.innerHTML =
      '<p class="pick-kicker">Based on your answers, we suggest</p>' +
      '<div class="pick-line"><h3>' + p.name + '</h3><p class="pick-price"><span>' + money_(GV.priceFor(key, household)) + '</span> one-time' + (household === 'couple' ? ', for a couple' : '') + '</p></div>' +
      '<p class="pick-why">' + why + '</p>' +
      '<ul class="pick-docs">' + docs.map(function (d) { return '<li>' + d + '</li>'; }).join('') + '</ul>' +
      '<a class="btn btn-primary" href="' + window.GVUrl(p.goesTo) + '?household=' + household + '" data-cta data-plan="' + key + '">' + p.cta + '</a>';
  }
  function money_(n) { return money(n); }
  if (form) form.addEventListener('change', render);

  /* the home page's finder sends its recommendation here as ?need=will|essentials|complete -- set the
     matching answers below and scroll to them, so someone doesn't answer the same questions twice. */
  try {
    var needed = new URLSearchParams(location.search).get('need');
    if (form && needed && PLANS[needed]) {
      var set = { will: { home: 'n', probate: 'n', multistate: 'n', money: 'n', care: 'n' }, essentials: { home: 'n', probate: 'n', multistate: 'n', money: 'y', care: 'y' }, complete: { home: 'y', probate: 'n', multistate: 'n', money: 'y', care: 'y' } }[needed];
      Object.keys(set).forEach(function (n) { var r = form.querySelector('input[name="' + n + '"][value="' + set[n] + '"]'); if (r) r.checked = true; });
      setTimeout(function () { form.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 50);
    }
  } catch (e) {}

  /* the home page's finder sends its recommendation as ?need=will|essentials|complete: highlight that plan's
     card and bring it into view */
  try {
    var need = new URLSearchParams(location.search).get('need');
    var cta = need && !form && document.querySelector('.plan [data-plan="' + need + '"]');
    var card = cta && cta.closest('.plan');
    if (card) {
      card.classList.add('picked');
      setTimeout(function () { card.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 80);
    }
  } catch (e) {}

  paint();
})();

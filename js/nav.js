(function () {
  'use strict';

  /* The menu button (three lines) that phones and tablets see instead of the full menu: tap it to open
     the menu below the header, tap again, press Escape, or pick a page to close it. */
  var header = document.querySelector('.site-header');
  var btn = header && header.querySelector('.menu-btn');
  if (!btn) return;

  function set(open) {
    header.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
  }
  btn.addEventListener('click', function () { set(!header.classList.contains('open')); });
  header.addEventListener('click', function (e) { if (e.target.closest('.primary a')) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && header.classList.contains('open')) { set(false); btn.focus(); } });
  window.addEventListener('resize', function () { if (window.innerWidth > 960) set(false); });
})();

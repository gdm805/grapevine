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

/* BETA BANNER (temporary): a thin strip above the header for beta testers only -- people who arrived through
   an address ending in ?beta=1 (remembered in this browser). It turns itself off after BETA_UNTIL, so nothing
   needs to be removed when the beta ends (though this block can be deleted then). */
(function () {
  'use strict';
  var BETA_UNTIL = new Date('2026-10-13T00:00:00');   /* the day AFTER the beta ends (BETA2026 expires Oct 12) */
  var EMAIL = 'support@grapevinedocs.com';
  if (new Date() >= BETA_UNTIL) return;
  var tester = false;
  try {
    if (/[?&]beta=1\b/.test(location.search)) localStorage.setItem('grapevine.beta', '1');
    tester = localStorage.getItem('grapevine.beta') === '1';
  } catch (e) { /* storage blocked: no banner */ }
  var header = document.querySelector('.site-header');
  if (!tester || !header) return;
  var bar = document.createElement('div');
  bar.className = 'beta-bar';
  bar.innerHTML = '<div class="container"><strong>Beta tester?</strong> Questions, problems or ideas: email <a href="mailto:' + EMAIL + '?subject=Grapevine%20beta">' + EMAIL + '</a>. Thank you for helping!</div>';
  header.parentNode.insertBefore(bar, header);
})();

/* WELCOME BACK: someone who closed the site in the middle of a package sees a strip at the top of the home,
   pricing and other pages that takes them straight back to the next unfinished document (or, when every
   document is answered, to the package summary). Answers are saved in this browser as they go. Not shown
   on the document pages themselves, which already restore the answers. */
(function () {
  'use strict';
  if (document.querySelector("[data-kind]") || /(package|about-you)\.html$/.test(location.pathname)) return;
  var f = null;
  try { f = JSON.parse(localStorage.getItem('grapevine.flow.v1') || 'null'); } catch (e) { f = null; }
  if (!f || !f.docs || !f.docs.length) return;
  var PAGES = { will: 'will.html', pourover: 'pour-over.html', dpoa: 'dpoa.html', hcd: 'hcd.html', dementia: 'dementia.html', hipaa: 'hipaa.html',
    trust: 'trust.html', trustjoint: 'trust-joint.html', cert: 'cert.html', affidavit: 'affidavit.html', assignment: 'assignment.html',
    finalwishes: 'finalwishes.html', contacts: 'contacts.html', schedulea: 'schedulea.html' };
  var NAMES = { will: 'Will', essentials: 'Essentials', complete: 'Complete', health: 'Health Care', trustpaper: 'Trust Paperwork' };
  var done = f.done || [];
  var nextId = f.docs.filter(function (k) { return done.indexOf(k) === -1; })[0];
  var href = 'package.html', prof = {};
  try { prof = JSON.parse(localStorage.getItem('grapevine.profile.v1') || '{}') || {}; } catch (e) { prof = {}; }
  if (!prof.aboutDone) nextId = nextId || 'about';
  if (!prof.aboutDone) href = 'about-you.html';
  else if (nextId) {
    var base = String(nextId).split(':')[0];
    href = (PAGES[base] || 'package.html') + (/:2$/.test(nextId) ? '?spouse=2' : '');
  }
  if (window.GVUrl) href = window.GVUrl(href.split('?')[0]) + (href.indexOf('?') > -1 ? href.slice(href.indexOf('?')) : '');
  var what = f.plan === 'doc' ? 'your document' : 'your ' + (NAMES[f.plan] || '') + ' package';
  var header = document.querySelector('.site-header');
  if (!header) return;
  var bar = document.createElement('div');
  bar.className = 'resume-bar';
  bar.innerHTML = '<div class="container"><span>Welcome back. Your answers are saved in this browser (' + done.length + ' of ' + f.docs.length + ' documents answered).</span> ' +
    '<a href="' + href + '">' + (nextId ? 'Continue ' + what : 'Review ' + what) + ' &rarr;</a></div>';
  header.parentNode.insertBefore(bar, header);
})();

/* "Need help?" button, bottom-right of every page: opens a small panel with the Questions page and our support
   email. No outside chat service (so nothing new for the Privacy Policy). It helps with using the site, not with
   anyone's legal situation -- the panel says so. When live chat is added after launch (launch checklist), it can
   replace the email line here. */
(function () {
  'use strict';
  if (document.getElementById('gv-help')) return;
  function url(p) { return window.GVUrl ? window.GVUrl(p) : p; }
  var wrap = document.createElement('div');
  wrap.id = 'gv-help';
  wrap.className = 'gv-help';
  wrap.innerHTML =
    '<button type="button" class="gv-help-btn" aria-expanded="false" aria-controls="gv-help-panel">Need help?</button>' +
    '<div class="gv-help-panel" id="gv-help-panel" role="dialog" aria-label="Help" hidden>' +
      '<button type="button" class="gv-help-x" aria-label="Close">&times;</button>' +
      '<p class="gv-help-h">How can we help?</p>' +
      '<a class="gv-help-link" href="' + url('questions.html') + '">Common questions &rarr;</a>' +
      '<a class="gv-help-link" href="mailto:support@grapevinedocs.com?subject=Grapevine%20help">Email support@grapevinedocs.com &rarr;</a>' +
      '<p class="gv-help-note">We help with using Grapevine, such as finding your documents, downloading and printing. We can’t give legal advice about your situation.</p>' +
    '</div>';
  function mount() { document.body.appendChild(wrap); }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
  var btn = wrap.querySelector('.gv-help-btn'), panel = wrap.querySelector('.gv-help-panel');
  function set(open) { panel.hidden = !open; btn.setAttribute('aria-expanded', open ? 'true' : 'false'); if (open) { var l = panel.querySelector('a'); if (l) l.focus(); } }
  btn.addEventListener('click', function () { set(panel.hidden); });
  wrap.querySelector('.gv-help-x').addEventListener('click', function () { set(false); btn.focus(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { set(false); btn.focus(); } });
  document.addEventListener('click', function (e) { if (!panel.hidden && !wrap.contains(e.target)) set(false); });
})();

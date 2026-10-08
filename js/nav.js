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

/* "Need help?" button, bottom-right of every page: opens a small panel with the signing steps, the Questions page
   and our support email -- and, once switched on, the AI help chat (cloudflare/help-chat.js). It helps with
   using the site, not with anyone's legal situation -- the panel says so.

   THE HELP CHAT SWITCH:
     url  the web address of the Cloudflare help-chat program, e.g. 'https://grapevine-help-chat.gdm805.workers.dev'
     on   false = the chat shows only in TEST MODE: in a browser that has opened any page with ?chat=1 at the end
          of its address (?chat=0 turns test mode off again). true = everyone sees it. Before setting true:
          the Privacy Policy must mention the chat (launch checklist 11d). */
var GV_CHAT = { url: 'https://grapevine-help-chat.gdm805.workers.dev', on: true };
(function () {
  'use strict';
  if (document.getElementById('gv-help')) return;
  var navSrc = document.currentScript && document.currentScript.src;
  try {
    if (/[?&]chat=1\b/.test(location.search)) localStorage.setItem('grapevine.chat', '1');
    if (/[?&]chat=0\b/.test(location.search)) localStorage.removeItem('grapevine.chat');
  } catch (e) { /* storage blocked */ }
  var chatOn = false;
  try { chatOn = !!GV_CHAT.url && (GV_CHAT.on || localStorage.getItem('grapevine.chat') === '1'); } catch (e) { chatOn = !!GV_CHAT.url && GV_CHAT.on; }
  function url(p) { return window.GVUrl ? window.GVUrl(p) : p; }
  /* "How do I sign?": someone with a package in progress goes straight to its signing steps (package summary);
     anyone else to the Questions page answer, which says where the steps are */
  function signHref() {
    var f = null;
    try { f = JSON.parse(localStorage.getItem('grapevine.flow.v1') || 'null'); } catch (e) { f = null; }
    return f && f.plan && f.plan !== 'doc' ? url('package.html') + '#how-to-sign' : url('questions.html') + '#how-to-sign';
  }
  var wrap = document.createElement('div');
  wrap.id = 'gv-help';
  wrap.className = 'gv-help';
  wrap.innerHTML =
    '<button type="button" class="gv-help-btn" aria-expanded="false" aria-controls="gv-help-panel">Need help?</button>' +
    '<div class="gv-help-panel" id="gv-help-panel" role="dialog" aria-label="Help" hidden>' +
      '<button type="button" class="gv-help-x" aria-label="Close">&times;</button>' +
      '<p class="gv-help-h">How can we help?</p>' +
      (chatOn ? '<div class="gv-chat"><div class="gv-chat-log" aria-live="polite"></div>' +
        '<form class="gv-chat-form"><label class="gv-sr" for="gv-chat-in">Your question</label>' +
        '<textarea id="gv-chat-in" rows="2" maxlength="1500" placeholder="Type your question"></textarea>' +
        '<button type="submit" class="gv-chat-send">Send</button></form>' +
        '<p class="gv-help-note gv-chat-note">An automated assistant answers here. It helps with using Grapevine and can\u2019t give legal advice. Please don\u2019t type account numbers or Social Security numbers.</p></div>' : '') +
      '<a class="gv-help-link" href="' + signHref() + '">How do I sign my documents? &rarr;</a>' +
      '<a class="gv-help-link" href="' + url('questions.html') + '">Common questions &rarr;</a>' +
      '<a class="gv-help-link" href="mailto:support@grapevinedocs.com?subject=Grapevine%20help">Email support@grapevinedocs.com &rarr;</a>' +
      '<p class="gv-help-note">We help with using Grapevine, such as finding your documents, downloading and printing. We can’t give legal advice about your situation.</p>' +
    '</div>';
  function mount() { document.body.appendChild(wrap); }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
  var btn = wrap.querySelector('.gv-help-btn'), panel = wrap.querySelector('.gv-help-panel');
  function set(open) { panel.hidden = !open; btn.setAttribute('aria-expanded', open ? 'true' : 'false'); if (open) { var l = panel.querySelector('#gv-chat-in') || panel.querySelector('a'); if (l) l.focus(); } }
  btn.addEventListener('click', function () { set(panel.hidden); });
  if (chatOn) {
    chat(wrap);
    /* the chat's "seek a qualified attorney" sentence gets the person's state bar link (js/lawyer-links.js),
       which some pages don't load on their own */
    if (!window.GVLawyerLinks && navSrc) { var ll = document.createElement('script'); ll.src = navSrc.replace(/nav\.js/, 'lawyer-links.js'); document.head.appendChild(ll); }
  }
  wrap.querySelector('.gv-help-x').addEventListener('click', function () { set(false); btn.focus(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { set(false); btn.focus(); } });
  document.addEventListener('click', function (e) { if (!panel.hidden && !wrap.contains(e.target)) set(false); });

  /* THE HELP CHAT: the conversation is kept for this browser tab only (sessionStorage), so it follows the person
     from page to page and is gone when the tab closes. Each question goes to the Cloudflare program, which
     answers with Claude under Greg's no-legal-advice instructions. */
  function chat(root) {
    var KEY = 'gv.chat.v1', EMAIL = 'support@grapevinedocs.com';
    var GREETING = 'Hi! I can help with using Grapevine: finding your documents, paying, downloading, printing and signing steps. I can\u2019t give legal advice about your situation.';
    var log = root.querySelector('.gv-chat-log'), form = root.querySelector('.gv-chat-form'), input = root.querySelector('#gv-chat-in');
    var sendBtn = root.querySelector('.gv-chat-send');
    var state = { id: '', messages: [] };
    try { state = JSON.parse(sessionStorage.getItem(KEY) || 'null') || state; } catch (e) { /* new chat */ }
    function save() { try { sessionStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ } }
    function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
    /* plain text, with web addresses on grapevinedocs.com and the support email made into links */
    function format(s) {
      return esc(s).replace(/(https?:\/\/)?(www\.grapevinedocs\.com[^\s<),]*)/g, function (_, p, u) {
        var href = 'https://' + u.replace(/[.]$/, ''), tail = /[.]$/.test(u) ? '.' : '';
        return '<a href="' + href + '">' + u.replace(/[.]$/, '') + '</a>' + tail;
      }).replace(new RegExp(EMAIL.replace(/[.]/g, '\\.'), 'g'), '<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>').replace(/\n/g, '<br>');
    }
    function bubble(role, text) {
      var d = document.createElement('div');
      d.className = 'gv-chat-msg gv-chat-' + (role === 'user' ? 'me' : 'bot');
      d.innerHTML = format(text);
      log.appendChild(d); log.scrollTop = log.scrollHeight;
      return d;
    }
    function render() {
      log.innerHTML = '';
      bubble('assistant', GREETING);
      state.messages.forEach(function (m) { bubble(m.role, m.content); });
    }
    render();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = input.value.trim();
      if (!q || sendBtn.disabled) return;
      input.value = '';
      state.messages.push({ role: 'user', content: q }); save();
      bubble('user', q);
      var wait = bubble('assistant', 'Typing\u2026'); wait.classList.add('gv-chat-wait');
      sendBtn.disabled = true;
      fetch(GV_CHAT.url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: state.id, messages: state.messages }) })
        .then(function (r) { return r.json(); })
        .then(function (a) { return a; }, function () { return null; })
        .then(function (a) {
          var text = a && a.reply ? a.reply : 'Sorry, I can\u2019t answer right now. Please email ' + EMAIL + '.';
          if (a && a.id) state.id = a.id;
          state.messages.push({ role: 'assistant', content: text }); save();
          wait.remove(); bubble('assistant', text);
        })
        .then(function () { sendBtn.disabled = false; input.focus(); });
    });
    /* Enter sends; Shift+Enter starts a new line */
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit')); } });
  }
})();

/* a link to a question on the Questions page (questions.html#how-to-sign) opens that answer */
(function () {
  'use strict';
  function openHash() {
    var id = location.hash.slice(1), el = id && /^[\w-]+$/.test(id) && document.getElementById(id);
    if (el && el.tagName === 'DETAILS') { el.open = true; setTimeout(function () { el.scrollIntoView({ block: 'start' }); }, 150); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', openHash); else openHash();
  window.addEventListener('hashchange', openHash);
})();

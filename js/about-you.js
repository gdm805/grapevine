/* Grapevine "About you" (about-you.html): the first screen of every package and single-document purchase.
   Collects the personal information every document uses -- full legal name, home address with state and
   county, phone, and date of birth (and the same for a spouse or partner in a couple's package) -- once, and
   saves it to the shared profile (grapevine.profile.v1) that js/will.js reads to fill in each document.
   All fields are required. Then it continues to the package's next unfinished document. */
(function () {
  'use strict';
  var root = document.getElementById('about-you');
  if (!root) return;
  var KEY = 'grapevine.profile.v1';
  var F = window.GVFlow;
  var flow = F && F.current();
  var couple = !!(flow && flow.couple);
  try { if (!flow && sessionStorage.getItem('gv.household') === 'couple') couple = true; } catch (e) { /* ignore */ }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function clean(s) { return String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); }
  function url(p) { return window.GVUrl ? window.GVUrl(p) : p; }
  function read() { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } }
  function write(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* storage blocked */ } }

  var p = read();
  var ABBR = window.HCD_STATE_ABBR || {}, COUNTIES = window.HCD_COUNTY_DATA || {};
  var states = Object.keys(ABBR).sort();
  var errors = [];

  /* where to go next: the ?next= page, else the package's first unfinished document, else the summary */
  function nextHref() {
    var q = new URLSearchParams(location.search).get('next');
    if (q && /^[\w-]+\.html(\?[\w=&-]*)?$/.test(q)) return url(q.split('?')[0]) + (q.indexOf('?') > -1 ? q.slice(q.indexOf('?')) : '');
    if (flow && flow.docs && flow.docs.length) {
      var done = flow.done || [];
      var id = flow.docs.filter(function (k) { return done.indexOf(k) === -1; })[0];
      if (!id) return url('package.html');
      var pg = F.pageFor(id), i = pg.indexOf('?');
      return i > -1 ? url(pg.slice(0, i)) + pg.slice(i) : url(pg);
    }
    return url('pricing.html');
  }

  function field(label, html, hint) {
    return '<div class="f"><label>' + label + '</label>' + html + (hint ? '<span class="hint">' + hint + '</span>' : '') + '</div>';
  }
  function input(k, type, ph, auto) {
    return '<input class="input" type="' + (type || 'text') + '" data-k="' + k + '" value="' + esc(p[k] || '') + '" placeholder="' + esc(ph || '') + '" autocomplete="' + (auto || 'off') + '">';
  }
  /* each state's value is its two-letter code: a browser filling in a saved address gives the state as "WA",
     which must match Washington exactly -- with full names only, "WA" matched the first name containing
     those letters, DelaWAre, and the state change wiped out the county (8 Oct 2026). Saved as the full name. */
  var NAME_OF = {};
  states.forEach(function (s) { NAME_OF[ABBR[s]] = s; });
  function valueOf(el) {
    if (el.type === 'checkbox') return el.checked;
    return el.getAttribute('data-k') === 'state' ? (NAME_OF[el.value] || el.value) : el.value;
  }
  function stateSelect() {
    return '<select class="input" data-k="state" data-redraw autocomplete="address-level1">' + '<option value="">Choose your state</option>' +
      states.map(function (s) { return '<option value="' + esc(ABBR[s]) + '"' + (p.state === s ? ' selected' : '') + '>' + esc(s) + '</option>'; }).join('') + '</select>';
  }
  function countySelect() {
    var list = COUNTIES[ABBR[p.state]] || [];
    if (!list.length) return '<select class="input" data-k="county" disabled><option>Choose your state first</option></select>';
    var cur = clean(p.county).toLowerCase().replace(/\s+(county|parish|borough|census area|municipality)$/, '');
    return '<select class="input" data-k="county"><option value="">Choose your county</option>' + list.map(function (c) {
      var hit = p.county === c || (cur && c.toLowerCase().replace(/\s+(county|parish|borough|census area|municipality)$/, '') === cur);
      if (hit) p.county = c;
      return '<option value="' + esc(c) + '"' + (hit ? ' selected' : '') + '>' + esc(c.replace(/ County$/, '')) + '</option>';
    }).join('') + '</select>';
  }
  function person(prefix, who) {
    var n = prefix === '2' ? '2' : '';
    return (couple ? '<h3 class="about-who">' + who + '</h3>' : '') +
      field('Full legal name', input('name' + n, 'text', 'As it appears on your ID')) +
      field('Phone', input('phone' + n, 'tel', 'Phone number', 'off')) +
      field('Date of birth', input('dob' + n, 'date', '')) +
      '<label class="check"><input type="checkbox" data-k="ageOk' + n + '"' + (p['ageOk' + n] ? ' checked' : '') + '><span>' + (n ? 'They are' : 'I am') + ' 18 or older.</span></label>' +
      '<label class="check"><input type="checkbox" data-k="freeOk' + n + '"' + (p['freeOk' + n] ? ' checked' : '') + '><span>' + (n ? 'They are making their documents of their own free will.' : 'I am making my documents of my own free will.') + '</span></label>';
  }
  function draw() {
    var err = errors.length ? '<div class="errs" role="alert"><strong>Almost there.</strong><ul>' + errors.map(function (m) { return '<li>' + esc(m) + '</li>'; }).join('') + '</ul></div>' : '';
    root.innerHTML = err +
      '<h2 class="q-title">' + (couple ? 'About the two of you' : 'About you') + '</h2>' +
      '<p class="q-sub">Every field is used in your documents, now or later.</p>' +
      person('1', 'You') +
      '<h3 class="about-who">' + (couple ? 'Where you live' : 'Where you live') + '</h3>' +
      field('Street address', input('street', 'text', 'Street and unit number', 'address-line1')) +
      field('City', input('city', 'text', '', 'address-level2')) +
      field('State', stateSelect()) +
      field('County', countySelect()) +
      field('ZIP code', input('zip', 'text', '5-digit ZIP', 'postal-code')) +
      (couple ? person('2', 'Your spouse or partner') : '') +
      '<div class="nav-row"><span></span><button type="button" class="btn btn-primary" data-save>Continue <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></button></div>';
  }
  function validate() {
    var e = [];
    function need(k, msg) { if (!clean(p[k])) e.push(msg); }
    need('name', 'Enter your full legal name.');
    need('phone', 'Enter your phone number.');
    if (clean(p.phone) && String(p.phone).replace(/\D/g, '').length < 10) e.push('Your phone number looks incomplete.');
    need('dob', 'Enter your date of birth.');
    if (!p.ageOk) e.push('Confirm that you are 18 or older.');
    if (!p.freeOk) e.push('Confirm that you are making your documents of your own free will.');
    need('street', 'Enter your street address.');
    need('city', 'Enter your city.');
    need('state', 'Choose your state.');
    if (p.state === 'Arizona') e.push("Grapevine isn't available in Arizona yet. We're confirming Arizona's rules for online document services and hope to offer Arizona documents soon.");
    need('county', 'Choose your county.');
    need('zip', 'Enter your ZIP code.');
    if (clean(p.zip) && !/^\d{5}(-\d{4})?$/.test(clean(p.zip))) e.push('Your ZIP code should be 5 digits.');
    if (couple) {
      need('name2', 'Enter your spouse or partner’s full legal name.');
      need('phone2', 'Enter your spouse or partner’s phone number.');
      if (clean(p.phone2) && String(p.phone2).replace(/\D/g, '').length < 10) e.push('Your spouse or partner’s phone number looks incomplete.');
      need('dob2', 'Enter your spouse or partner’s date of birth.');
      if (!p.ageOk2) e.push('Confirm that your spouse or partner is 18 or older.');
      if (!p.freeOk2) e.push('Confirm that your spouse or partner is making their documents of their own free will.');
    }
    return e;
  }
  /* every answer is saved as it's typed, so nothing is lost if the person leaves this page before finishing
     (Back button, a menu link, a reload). "aboutDone" is still set only by Continue, once everything is filled in. */
  root.addEventListener('input', function (e) {
    var k = e.target.getAttribute('data-k'); if (!k) return;
    p[k] = valueOf(e.target);
    write(p);
  });
  var shownState = p.state || '';
  root.addEventListener('change', function (e) {
    var k = e.target.getAttribute('data-k'); if (!k) return;
    p[k] = valueOf(e.target);
    /* the county list depends on the state: only when the state really changes is the county cleared and the
       list redrawn (browser autofill can report a "change" to the same state) */
    if (k === 'state' && p.state !== shownState) { shownState = p.state; p.county = ''; write(p); draw(); return; }
    write(p);
  });
  root.addEventListener('click', function (e) {
    if (!e.target.closest('[data-save]')) return;
    errors = validate();
    if (errors.length) { draw(); root.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    /* the one-line address the documents print: "street, city, ST 12345" */
    p.address = clean(p.street) + ', ' + clean(p.city) + ', ' + (ABBR[p.state] || p.state) + ' ' + clean(p.zip);
    p.name = clean(p.name); if (p.name2) p.name2 = clean(p.name2);
    p.aboutDone = true;
    write(p);
    location.href = nextHref();
  });
  draw();
})();

/* Grapevine will builder.
   You should not need to edit this file. The words of the will live in
   will/will-template.js, the signing steps in will/signing-instructions.js,
   and the state rules in will/states.js. */
(function () {
  'use strict';

  var LS_KEY, KIND, buildVars;
  var LABELS = {
    name: 'your full name', name_caps: 'YOUR FULL NAME', city: 'your city', county: 'your county', state: 'your state',
    spouse: 'spouse\u2019s name', guardian: 'guardian', alt_guardian: 'alternate guardian',
    executor: 'personal representative', successor: 'successor', gift: 'gift', recipient: 'recipient',
    beneficiary: 'beneficiary', share: 'share', cont_name: 'contingent beneficiary',
    child: 'child\u2019s name', trust_name: 'name of your trust', trust_date: 'date of your trust', other_trustmaker: 'other trustmaker',
    co_pr: 'co-personal representative', applies_to: 'child', alternate: 'alternate guardian', prop_fid: 'property fiduciary', prop_alt: 'alternate'
  };
  var MARK = { fill: '\u0001', close: '\u0002', blank: '\u0003', refOpen: '\u0004', refClose: '\u0005' };
  var ARTICLES = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN'];
  var WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  var SURVIVAL = { 30: 'thirty', 45: 'forty-five', 60: 'sixty', 90: 'ninety', 120: 'one hundred twenty' };

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function clean(s) {
    return String(s == null ? '' : s).replace(/[\r\n\t]+/g, ' ').replace(/[*|]/g, '').replace(/^[#@\s]+/, '').replace(/\s{2,}/g, ' ').trim();
  }
  /* a phone/email doesn't have to be filled in, but if someone starts typing one we check it looks
     like a whole one before letting them move on -- catches a dropped digit or a cut-off address
     rather than silently saving something nobody could actually call or write to */
  function isCompletePhone(s) { return String(s).replace(/\D/g, '').length >= 10; }
  function isCompleteEmail(s) { return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(String(s).trim()); }
  function numWord(n) { return WORDS[n] || String(n); }
  function capWord(n) { var w = numWord(n); return w.charAt(0).toUpperCase() + w.slice(1); }
  function pad(n) { return n < 10 ? '0' + n : String(n); }
  function truthy(v) {
    if (Array.isArray(v)) return v.length > 0;
    if (typeof v === 'string') return v !== '' && v !== 'false' && v !== 'no';
    return !!v;
  }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function longDate(iso) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || ''); return m ? MONTHS[+m[2] - 1] + ' ' + (+m[3]) + ', ' + m[1] : ''; }
  function setPath(obj, path, value) { var p = path.split('.'), o = obj; for (var i = 0; i < p.length - 1; i++) { if (o[p[i]] == null) o[p[i]] = {}; o = o[p[i]]; } o[p[p.length - 1]] = value; }

  /* ---------- shared profile: the answers that mean the same thing on every document in a package
     (your own name, address, county, phone, DOB) so someone doing several documents back to back
     only types them once. This pre-fills -- it never hides a step -- so a later document can still
     freely correct a value without having to go back and edit the very first place it was typed.
     PROFILE_MAP's target is either a flat answers[] key, or "list[index].field" for a document whose
     "your name" question is actually an array row (Certification of Trust's trustmakers list). */
  var PROFILE_KEY = 'grapevine.profile.v1';
  var PROFILE_MAP = {
    will: { name: 'name', county: 'county' },
    pourover: { name: 'name', county: 'county' },
    dpoa: { name: 'name', county: 'county' },
    dementia: { name: 'name' },
    hcd: { name: 'name', address: 'address', phone: 'phone', dob: 'dob' },
    hipaa: { name: 'name' },
    trust: { name: 'name' },
    trustjoint: { name: 'name1', name2: 'name2' },
    cert: { name: 'trustmakers[0].name', name2: 'trustmakers[1].name' },
    affidavit: { name: 'tm1Name', name2: 'tm2Name' },
    assignment: { name: 'tm1Name', name2: 'tm2Name' },
    finalwishes: { name: 'name' },
    schedulea: { name: 'tm1Name', name2: 'tm2Name' },
    contacts: { name: 'name' }
  };
  function readProfile() {
    try { return JSON.parse(localStorage.getItem(PROFILE_KEY) || '{}') || {}; } catch (e) { return {}; }
  }
  function writeProfile(patch) {
    try {
      var p = readProfile();
      Object.keys(patch).forEach(function (k) { if (patch[k]) p[k] = patch[k]; });
      localStorage.setItem(PROFILE_KEY, JSON.stringify(p));
    } catch (e) { /* storage unavailable: this document still works on its own */ }
  }
  function profileTargetGet(a, target) {
    var m = /^(\w+)\[(\d+)\]\.(\w+)$/.exec(target);
    if (!m) return a[target];
    return ((a[m[1]] || [])[+m[2]] || {})[m[3]];
  }
  function profileTargetSet(a, kind, target, value) {
    var m = /^(\w+)\[(\d+)\]\.(\w+)$/.exec(target);
    if (!m) { if (!a[target]) a[target] = value; return; }
    var listKey = m[1], idx = +m[2], field = m[3];
    a[listKey] = a[listKey] || [];
    while (a[listKey].length <= idx) a[listKey].push(clone((kind.rows || {})[listKey] || {}));
    if (!a[listKey][idx][field]) a[listKey][idx][field] = value;
  }
  /* the second person's copy of a document reads and writes the profile's second-person name
     (name2), not the first person's name -- and never their date of birth or phone number */
  function profileMapFor(kind) {
    var m = PROFILE_MAP[kind.key]; if (!m || !SPOUSE2) return m;
    var out = {};
    Object.keys(m).forEach(function (f) {
      if (f === 'name') out.name2 = m[f];
      else if (f === 'county' || f === 'address') out[f] = m[f];
    });
    return out;
  }
  function applyProfile(a, kind) {
    var map = profileMapFor(kind); if (!map) return;
    var p = readProfile();
    /* Important Contacts is a household list: for a couple it starts as "First & Second" */
    if (kind.key === 'contacts' && p.name2 && p.name && !a.name) { a.name = p.name + ' & ' + p.name2; return; }
    Object.keys(map).forEach(function (profileField) {
      if (p[profileField]) profileTargetSet(a, kind, map[profileField], p[profileField]);
    });
  }
  function saveProfile(a, kind) {
    if (kind.key === 'contacts') return; /* a household list must never overwrite one person's own name */
    var map = profileMapFor(kind); if (!map) return;
    var patch = {};
    Object.keys(map).forEach(function (profileField) {
      var v = profileTargetGet(a, map[profileField]);
      if (v) patch[profileField] = v;
    });
    writeProfile(patch);
  }

  /* ---------- state rules ---------- */
  function parseStates(txt) {
    var map = {}, list = [];
    String(txt || '').split('\n').forEach(function (line) {
      line = line.trim();
      if (!line || line.indexOf('//') === 0) return;
      var p = line.split('|').map(function (x) { return x.trim(); });
      if (p.length < 4) return;
      var s = { name: p[0], witnesses: parseInt(p[1], 10) || 2, selfProving: /^y/i.test(p[2]), supported: /^y/i.test(p[3]), note: p[4] || '', community: (p[5] || 'none').toLowerCase() };
      map[s.name] = s; list.push(s);
    });
    return { map: map, list: list };
  }

  /* ---------- template engine ---------- */
  function parseTemplate(raw) {
    var settings = {};
    var text = String(raw || '').replace(/\r/g, '');
    text = text.replace(/^[ \t]*\/\/.*$\n?/gm, '');
    text = text.replace(/^[ \t]*@set[ \t]+(\w+)[ \t]*=[ \t]*(.*)$\n?/gm, function (_, k, v) { settings[k] = v.trim(); return ''; });
    text = text.replace(/^[ \t]*(\[\[(?:if|elif|else|end|each|include)[^\]]*\]\])[ \t]*\n/gm, '$1');
    var parts = text.split(/(\[\[[^\]]*\]\])/);
    var root = [], stack = [{ nodes: root }];
    parts.forEach(function (p) {
      var m = /^\[\[\s*(if|elif|else|end|each|pagebreak|ref|tail|include)\b\s*(.*?)\s*\]\]$/.exec(p);
      var top = stack[stack.length - 1];
      if (!m) { if (p) top.nodes.push({ t: 'text', v: p }); return; }
      if (m[1] === 'if') { var n = { t: 'if', c: m[2], a: [], b: [] }; top.nodes.push(n); stack.push({ node: n, nodes: n.a }); }
      else if (m[1] === 'each') { var e = { t: 'each', l: m[2], body: [] }; top.nodes.push(e); stack.push({ node: e, nodes: e.body }); }
      else if (m[1] === 'elif') { if (top.node && top.node.t === 'if') { var n2 = { t: 'if', c: m[2], a: [], b: [] }; top.node.b.push(n2); stack[stack.length - 1] = { node: n2, nodes: n2.a }; } }
      else if (m[1] === 'include') { top.nodes.push({ t: 'include', k: m[2] }); }
      else if (m[1] === 'else') { if (top.node && top.node.t === 'if') top.nodes = top.node.b; }
      else if (m[1] === 'end') { if (stack.length > 1) stack.pop(); }
      else if (m[1] === 'ref') { top.nodes.push({ t: 'ref', k: m[2] }); }
      else if (m[1] === 'tail') { top.nodes.push({ t: 'tail' }); }
      else if (m[1] === 'pagebreak') { top.nodes.push({ t: 'text', v: '\n\n@pagebreak\n\n' }); }
    });
    return { settings: settings, nodes: root };
  }
  function cond(c, scope) {
    c = c.trim();
    var m = /^(.+?)\s*(!=|=)\s*(.+)$/.exec(c);
    if (m) {
      var left = scope[m[1].trim()];
      var eq = String(left == null ? '' : left) === m[3].trim();
      return m[2] === '=' ? eq : !eq;
    }
    if (/^not\s+/.test(c)) return !truthy(scope[c.replace(/^not\s+/, '').trim()]);
    return truthy(scope[c]);
  }
  function renderNodes(nodes, scope) {
    var out = '';
    nodes.forEach(function (n) {
      if (n.t === 'text') {
        out += n.v.replace(/\{\{\s*(\w+)\s*\}\}/g, function (_, k) {
          var v = scope[k];
          if (v == null || v === '' || Array.isArray(v)) return MARK.blank + '[' + (LABELS[k] || k.replace(/_/g, ' ')) + ']' + MARK.close;
          return MARK.fill + v + MARK.close;
        });
      } else if (n.t === 'include') {
        var sh = (window.DPOA_SHARED || {})[n.k] || (window.TRUST_SHARED || {})[n.k] || (window.CERT_SHARED || {})[n.k] || (window.AFFIDAVIT_SHARED || {})[n.k] || (window.FINALWISHES_SHARED || {})[n.k];
        if (sh) out += '\n\n' + renderNodes(parseTemplate(sh).nodes, scope) + '\n\n';
      } else if (n.t === 'tail') {
        out += renderNodes(scope.__tail || [], scope);
      } else if (n.t === 'ref') {
        out += MARK.refOpen + n.k + MARK.refClose;
      } else if (n.t === 'if') {
        out += renderNodes(cond(n.c, scope) ? n.a : n.b, scope);
      } else if (n.t === 'each') {
        (scope[n.l] || []).forEach(function (item) { out += renderNodes(n.body, Object.assign({}, scope, item)); });
      }
    });
    return out;
  }

  /* text with simple codes -> simple blocks (used for the screen, the PDF and the Word file) */
  var HEAD = /^(#!|##|#)\s+(.*?)(?:\s*\{#(\w+)\})?$/;
  function titleCase(w) { return w.charAt(0) + w.slice(1).toLowerCase(); }
  function dropEmptyHeadings(lines) {
    var dead = {};
    function level(l) { var m = HEAD.exec(l.trim()); return m ? m[1] : ''; }
    function filled(i, stops) {
      for (var j = i + 1; j < lines.length; j++) {
        var l = lines[j].trim();
        if (!l || dead[j] || l === '@skipnum' || l === '@pagebreak') continue;
        var lv = level(l);
        if (lv) { if (stops.indexOf(lv) >= 0) return false; continue; }
        return true;
      }
      return false;
    }
    lines.forEach(function (l, i) { if (level(l) === '##' && !filled(i, ['#', '##', '#!'])) dead[i] = true; });
    lines.forEach(function (l, i) {
      if (level(l) !== '#') return;
      for (var j = i + 1; j < lines.length; j++) {
        var x = lines[j].trim();
        if (!x || x === '@skipnum' || x === '@pagebreak') continue;
        var lv = level(x);
        if (lv === '#' || lv === '#!') { dead[i] = true; return; }
        if (lv === '##' && dead[j]) continue;
        return;
      }
      dead[i] = true;
    });
    return lines.filter(function (l, i) { return !dead[i]; });
  }
  function toBlocks(text) {
    text = text.replace(/\n{3,}/g, '\n\n').trim();
    var lines = text.split('\n');
    /* "@dropempty" (used by the power of attorney): a heading with nothing under it is left out */
    if (lines.some(function (l) { return l.trim() === '@dropempty'; })) lines = dropEmptyHeadings(lines.filter(function (l) { return l.trim() !== '@dropempty'; }));

    /* pass 1: work out every number, so [[ref x]] can say "Article Six" or "Section 6.05" */
    var refs = {}, a = 0, s = 0;
    lines.forEach(function (l) {
      if (l.trim() === '@skipnum') { a++; s = 0; return; }
      var h = HEAD.exec(l.trim());
      if (!h) return;
      if (h[1] === '#') { a++; s = 0; if (h[3]) refs[h[3]] = 'Article ' + titleCase(ARTICLES[a - 1] || String(a)); }
      else if (h[1] === '##') { s++; if (h[3]) refs[h[3]] = 'Section ' + a + '.' + pad(s); }
    });
    function fix(t) { return t.replace(/(\w+)/g, function (_, k) { return refs[k] || '[reference]'; }); }

    var blocks = [], para = [], ul = [];
    a = 0; s = 0;
    function flush() {
      if (para.length) {
        var t = fix(para.join(' '));
        blocks.push({ k: /^\(([a-z]|\d+)\)\s/.test(t) ? 'hang' : 'para', t: t });
        para = [];
      }
      if (ul.length) { blocks.push({ k: 'ul', items: ul.map(fix) }); ul = []; }
    }
    lines.forEach(function (raw) {
      var line = raw.trim(), m;
      if (!line) { flush(); return; }
      if ((m = HEAD.exec(line))) {
        flush();
        if (m[1] === '#!') blocks.push({ k: 'plain', t: fix(m[2]) });
        else if (m[1] === '#') { a++; s = 0; blocks.push({ k: 'article', n: 'ARTICLE ' + (ARTICLES[a - 1] || a), t: fix(m[2]).toUpperCase() }); }
        else { s++; blocks.push({ k: 'section', n: 'Section ' + a + '.' + pad(s), t: fix(m[2]) }); }
      }
      else if (line === '@pagebreak') { flush(); blocks.push({ k: 'break' }); }
      else if (line === '@skipnum') { flush(); a++; s = 0; }
      else if ((m = /^@center\s+(.*)$/.exec(line))) { flush(); blocks.push({ k: 'center', t: fix(m[1]) }); }
      else if ((m = /^@sub\s+(.*)$/.exec(line))) { flush(); blocks.push({ k: 'sub', t: fix(m[1]) }); }
      else if ((m = /^@line\s+(.*)$/.exec(line))) { flush(); blocks.push({ k: 'line', t: fix(m[1]) }); }
      else if ((m = /^@item\s+(.*)$/.exec(line))) { flush(); blocks.push({ k: 'item', t: fix(m[1]) }); }
      else if ((m = /^@row\s+(.*)$/.exec(line))) {
        flush();
        var i = m[1].lastIndexOf('|');
        blocks.push({ k: 'row', l: fix((i < 0 ? m[1] : m[1].slice(0, i)).trim()), r: i < 0 ? '' : fix(m[1].slice(i + 1).trim()) });
      }
      else if ((m = /^@sign\s+(.*)$/.exec(line))) { flush(); blocks.push({ k: 'sign', t: fix(m[1]) }); }
      else if ((m = /^-\s+(.*)$/.exec(line))) { if (para.length) flush(); ul.push(m[1]); }
      else { if (ul.length) flush(); para.push(line); }
    });
    flush();
    return blocks;
  }
  function blocksToHtml(blocks) {
    function inline(t) {
      var h = esc(t).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      return h.replace(//g, '<span class="fill">').replace(//g, '<span class="blank">').replace(//g, '</span>');
    }
    return blocks.map(function (b) {
      switch (b.k) {
        case 'plain': return '<h2 class="art-h plain"><span class="art-t">' + inline(b.t) + '</span></h2>';
        case 'article': return '<h2 class="art-h"><span class="art-n">' + b.n + '</span><span class="art-t">' + inline(b.t) + '</span></h2>';
        case 'section': return '<h3 class="sec-h"><span class="sec-n">' + b.n + '</span><span class="sec-t">' + inline(b.t) + '</span></h3>';
        case 'break': return '<div class="pagebreak"></div>';
        case 'center': return '<p class="c">' + inline(b.t) + '</p>';
        case 'sub': return '<p class="subh">' + inline(b.t) + '</p>';
        case 'line': return '<p class="ln">' + inline(b.t) + '</p>';
        case 'item': return '<p class="item">' + inline(b.t) + '</p>';
        case 'row': return '<div class="row2"><span class="l">' + inline(b.l) + '</span>' + (b.r ? '<span class="dots"></span><span class="r">' + inline(b.r) + '</span>' : '') + '</div>';
        case 'sign': return '<div class="sig"><span class="sigline"></span><span class="siglabel">' + inline(b.t) + '</span></div>';
        case 'ul': return '<ul>' + b.items.map(function (x) { return '<li>' + inline(x) + '</li>'; }).join('') + '</ul>';
        case 'hang': return '<p class="hang">' + inline(b.t) + '</p>';
        default: return '<p>' + inline(b.t) + '</p>';
      }
    }).join('');
  }
  function toHtml(text) { return blocksToHtml(toBlocks(text)); }

  /* the words that change from state to state (pour-over will) */
  function parseStateText(raw) {
    var map = {};
    String(raw || '').replace(/\r/g, '').replace(/^[ \t]*\/\/.*$\n?/gm, '').split(/^=== +/m).slice(1).forEach(function (chunk) {
      var nl = chunk.indexOf('\n'), name = chunk.slice(0, nl).trim(), rest = chunk.slice(nl + 1);
      var cut = rest.search(/^--- tail\s*$/m);
      if (cut < 0) return;
      var d = { community: 'none', no_contest: 'yes', witnesses: '2', notary: 'no' };
      rest.slice(0, cut).split('\n').forEach(function (l) { var m = /^(\w+):\s*(.*)$/.exec(l.trim()); if (m) d[m[1]] = m[2].trim(); });
      var body = rest.slice(cut).replace(/^--- tail\s*\n/, ''), alt = body.search(/^--- tail-will\s*$/m);
      if (alt >= 0) { d.tailWill = parseTemplate(body.slice(alt).replace(/^--- tail-will\s*\n/, '')).nodes; body = body.slice(0, alt); }
      d.tail = parseTemplate(body).nodes;
      map[name] = d;
    });
    return map;
  }

  /* ---------- answers -> blanks ---------- */
  function buildVarsWill(a, states, settings) {
    var v = {}, st = states.map[a.state] || null;
    var kids = (a.children || []).map(function (c) { return { child: clean(c.name), minor: !!c.minor }; }).filter(function (c) { return c.child; });
    var hasKids = a.hasChildren === 'yes' && kids.length > 0;
    v.name = clean(a.name); v.name_caps = v.name.toUpperCase(); v.city = clean(a.city);
    v.county = clean(a.county).replace(/\s+county$/i, '');
    v.state = st ? st.name : '';
    v.marital = a.marital ? (a.marital === 'married' ? 'married' : 'unmarried') : ''; v.has_spouse = a.marital === 'married'; v.spouse = clean(a.spouse);
    v.children_answered = a.hasChildren === 'yes' || a.hasChildren === 'no';
    v.has_children = hasKids; v.has_minor_children = hasKids && kids.some(function (c) { return c.minor; });
    v.children = kids;
    v.guardian = clean(a.guardian); v.alt_guardian = clean(a.altGuardian); v.has_alt_guardian = !!v.alt_guardian;
    v.executor = clean(a.executor);
    v.successors = (a.successors || []).map(function (x) { return { successor: clean(x.name) }; }).filter(function (x) { return x.successor; });
    v.has_successors = v.successors.length > 0;
    v.gifts = (a.gifts || []).map(function (g) { return { gift: clean(g.item), recipient: clean(g.recipient) }; }).filter(function (g) { return g.gift && g.recipient; });
    v.has_gifts = a.wantsGifts === 'yes' && v.gifts.length > 0;
    v.beneficiaries = (a.beneficiaries || []).filter(function (b) { return clean(b.name); }).map(function (b) {
      var c = b.contingent || 'descendants';
      return { beneficiary: clean(b.name), share: clean(b.share), cont_name: clean(b.contName), cont_descendants: c === 'descendants', cont_named: c === 'named', cont_charity: c === 'charity', cont_others: c === 'others' };
    });
    var days = parseInt(settings.survival_days, 10) || 30;
    v.survival_days = String(days);
    v.survival_words = (SURVIVAL[days] || String(days)) + ' (' + days + ')';
    v.survival_word = SURVIVAL[days] || String(days);
    var w = st ? st.witnesses : 2;
    v.witness_count = numWord(w); v.two_witnesses = w === 2;
    v.witness_slots = []; for (var i = 1; i <= w; i++) v.witness_slots.push({ n: i, n_word: capWord(i) });
    v.self_proving = st ? st.selfProving : false;
    v.state_note = st ? st.note : '';
    var sx = stateText[a.state] || null;
    v.cp_quasi = !!sx && sx.community === 'quasi'; v.cp_plain = !!sx && sx.community === 'plain'; v.homestead = !!sx && sx.community === 'homestead';
    v.no_contest_yes = sx ? sx.no_contest !== 'no' : true;
    v.__tail = sx ? (sx.tailWill || sx.tail) : [];
    return v;
  }

  /* ---------- what the person is asked ---------- */
  var EMPTY_WILL = {
    state: '', ageOk: false, freeOk: false,
    name: '', county: '', marital: '', spouse: '',
    hasChildren: '', children: [{ name: '', minor: false }],
    guardian: '', altGuardian: '',
    executor: '', successors: [{ name: '' }],
    wantsGifts: '', gifts: [{ item: '', recipient: '' }],
    residuary: '', beneficiaries: [{ name: '', share: '', contingent: 'descendants', contName: '' }]
  };
  var ROWS_WILL = {
    children: { name: '', minor: false }, successors: { name: '' }, gifts: { item: '', recipient: '' },
    beneficiaries: { name: '', share: '', contingent: 'descendants', contName: '' }
  };
  function hasMinor(a) {
    return a.hasChildren === 'yes' && (a.children || []).some(function (c) { return clean(c.name) && c.minor; });
  }
  var STEPS_WILL = [
    { id: 'start', label: 'Where you live' },
    { id: 'about', label: 'About you' },
    { id: 'children', label: 'Children' },
    { id: 'guardian', label: 'Guardian', show: hasMinor },
    { id: 'executor', label: 'Personal representative' },
    { id: 'gifts', label: 'Special gifts' },
    { id: 'residuary', label: 'Everything else' },
    { id: 'review', label: 'Review and sign' }
  ];
  function visibleSteps(a) { return KIND.steps.filter(function (s) { return !s.show || s.show(a); }); }

  /* ---------- boot ---------- */
  var root = document.getElementById('will-app');
  if (!root) return;

  var kindKey = { pourover: 'pourover', dpoa: 'dpoa', dementia: 'dementia', hcd: 'hcd', hipaa: 'hipaa', trust: 'trust', trustjoint: 'trustjoint', cert: 'cert', affidavit: 'affidavit', assignment: 'assignment', finalwishes: 'finalwishes', contacts: 'contacts', schedulea: 'schedulea' }[root.getAttribute('data-kind')] || 'will';
  var SPOUSE2 = false;
  try { SPOUSE2 = new URLSearchParams(location.search).get('spouse') === '2' && ['will', 'pourover', 'dpoa', 'hcd', 'dementia', 'hipaa', 'finalwishes'].indexOf(kindKey) > -1; } catch (e) { /* first-person copy */ }
  var docId = kindKey + (SPOUSE2 ? ':2' : '');
  var GLOBALS = { will: ['WILL_STATES', 'WILL_TEMPLATE', 'WILL_SIGNING'], pourover: ['WILL_STATES', 'WILL_POUR_OVER_TEMPLATE', 'WILL_POUR_OVER_SIGNING'], dpoa: ['WILL_STATES', 'DPOA_TEMPLATE', 'DPOA_SIGNING'], dementia: ['WILL_STATES', 'DEMENTIA_TEMPLATE', 'DEMENTIA_SIGNING'], hcd: ['WILL_STATES', 'HCD_TEMPLATE', 'HCD_SIGNING'], hipaa: ['WILL_STATES', 'HIPAA_TEMPLATE', 'HIPAA_SIGNING'], trust: ['WILL_STATES', 'TRUST_TEMPLATE', 'TRUST_SIGNING'], trustjoint: ['WILL_STATES', 'TRUST_JOINT_TEMPLATE', 'TRUST_SIGNING'], cert: ['WILL_STATES', 'CERT_TEMPLATE', 'CERT_SIGNING'], affidavit: ['WILL_STATES', 'AFFIDAVIT_TEMPLATE', 'AFFIDAVIT_SIGNING'], assignment: ['WILL_STATES', 'ASSIGNMENT_TEMPLATE', 'ASSIGNMENT_SIGNING'], finalwishes: ['WILL_STATES', 'FINALWISHES_TEMPLATE', 'FINALWISHES_SIGNING'], contacts: ['WILL_STATES', 'CONTACTS_TEMPLATE', 'CONTACTS_SIGNING'], schedulea: ['WILL_STATES', 'SCHEDULEA_TEMPLATE', 'SCHEDULEA_SIGNING'] }[kindKey];
  var states = parseStates(window[GLOBALS[0]]);
  var tpl = parseTemplate(window[GLOBALS[1]]);
  var sign = parseTemplate(window[GLOBALS[2]]);
  var stateText = parseStateText(window.WILL_STATE_TEXT);
  /* the watermark: GV_SAMPLE_WATERMARK in js/plans.js -- 'unpaid' means only until this document is paid for */
  var wmSetting = window.GV_SAMPLE_WATERMARK;
  var wmOn = wmSetting === 'unpaid' ? !(window.GVPay && window.GVPay.hasPaid(kindKey)) : wmSetting !== false;
  var draft = wmOn && /^y/i.test(tpl.settings.draft_watermark || 'yes');
  var draftLabel = tpl.settings.draft_label || 'SAMPLE - NOT FOR SIGNING';

  var stepEl = document.getElementById('will-step');
  var progEl = document.getElementById('will-progress');
  var docEl = document.getElementById('will-doc');
  var layout = document.getElementById('will-layout');
  var draftBar = document.getElementById('draft-bar');
  if (draftBar) draftBar.hidden = !draft;

  /* ---------- the document ---------- */
  function docText() {
    if (kindKey === 'dpoa') {
      var gs = dpGov(answers);
      if (!gs) return '@center Choose your state and your power of attorney will appear here.';
      var st = DP_CACHE[gs];
      if (!st) return '@center ' + (DP_FAIL[gs] ? 'We could not load the ' + gs + ' document. Please refresh the page.' : 'Loading the ' + gs + ' document...');
      return renderNodes(st.nodes, buildVars(answers, states, tpl.settings));
    }
    if (kindKey === 'hcd') {
      if (!answers.state) return '@center Choose your state and your health care directive will appear here.';
      var hst = HCD_CACHE[answers.state];
      if (!hst) return '@center ' + (HCD_FAIL[answers.state] ? 'We could not load the ' + answers.state + ' document. Please refresh the page.' : 'Loading the ' + answers.state + ' document...');
      return renderNodes(hst.nodes, buildVars(answers, states, tpl.settings));
    }
    if (kindKey === 'hipaa') {
      if (!answers.state) return '@center Choose your state and your HIPAA authorization will appear here.';
      var hpst = HIPAA_CACHE[answers.state];
      if (!hpst) return '@center ' + (HIPAA_FAIL[answers.state] ? 'We could not load the ' + answers.state + ' document. Please refresh the page.' : 'Loading the ' + answers.state + ' document...');
      return renderNodes(hpst.nodes, buildVars(answers, states, tpl.settings));
    }
    return renderNodes(tpl.nodes, buildVars(answers, states, tpl.settings));
  }
  function renderDoc() {
    docEl.innerHTML = (draft ? '<div class="wm-print" aria-hidden="true">' + esc(draftLabel) + '</div>' : '') + toHtml(docText(), 'screen');
    docEl.classList.toggle('draft', draft);
    if (draft) {
      var svg = "<svg xmlns='http://www.w3.org/2000/svg' width='460' height='300'><text x='230' y='150' text-anchor='middle' transform='rotate(-28 230 150)' font-family='Arial,sans-serif' font-weight='700' font-size='24' fill='%23583785' fill-opacity='0.24'>" + esc(draftLabel) + "</text></svg>";
      docEl.style.setProperty('--wm', 'url("data:image/svg+xml,' + encodeURIComponent(svg).replace(/'/g, '%27') + '")');
    }
  }
  var timer = null;
  function schedulePreview() { clearTimeout(timer); timer = setTimeout(renderDoc, 60); }

  /* the joint trust has two Trustmakers instead of one answers.name, and the Certification of
     Trust is named for the trust itself rather than a person -- handle both for the printed
     footer and the export filename/footer below */
  function footerName() {
    if (KIND.key === 'trustjoint') return [clean(answers.name1), clean(answers.name2)].filter(Boolean).join(' and ').replace(/["\\]/g, '');
    if (KIND.key === 'cert') return clean(answers.trustName).replace(/["\\]/g, '');
    if (KIND.key === 'affidavit') return clean(answers.affiantName).replace(/["\\]/g, '');
    if (KIND.key === 'assignment' || KIND.key === 'schedulea') return clean(answers.trustName).replace(/["\\]/g, '');
    return clean(answers.name).replace(/["\\]/g, '');
  }

  /* running footer on every printed page: "Last Will and Testament of NAME - Page 3 of 14" */
  function setFooter() {
    var n = footerName() || 'Testator';
    var el = document.getElementById('will-footer-css');
    if (!el) { el = document.createElement('style'); el.id = 'will-footer-css'; document.head.appendChild(el); }
    el.textContent = '@page{@bottom-center{content:"' + KIND.footer(n) + ' \u2014 Page " counter(page) " of " counter(pages);font:9pt "Times New Roman",Times,serif;color:#555}}';
  }
  window.addEventListener('beforeprint', setFooter);

  /* ---------- small html builders ---------- */
  function val(x) { return esc(x == null ? '' : x); }
  function field(label, html, hint, extra) {
    return '<div class="f' + (extra ? ' ' + extra : '') + '"><label>' + label + '</label>' + html + (hint ? '<span class="hint">' + hint + '</span>' : '') + '</div>';
  }
  function text(k, ph, opts) {
    opts = opts || {};
    return '<input class="input" type="text" data-k="' + k + '" value="' + val(answers[k]) + '" placeholder="' + esc(ph || '') + '"' + (opts.auto ? ' autocomplete="' + opts.auto + '"' : ' autocomplete="off"') + '>';
  }
  function textarea(k, ph) {
    return '<textarea class="input" data-k="' + k + '" placeholder="' + esc(ph || '') + '" rows="3">' + val(answers[k]) + '</textarea>';
  }
  function pills(k, options, rerender) {
    return '<div class="pills" role="radiogroup">' + options.map(function (o) {
      return '<label class="pill"><input type="radio" name="' + k + '" value="' + o[0] + '" data-k="' + k + '"' + (rerender ? ' data-rerender' : '') + (answers[k] === o[0] ? ' checked' : '') + '><span>' + o[1] + '</span></label>';
    }).join('') + '</div>';
  }
  function cards(k, options) {
    return '<div class="needs">' + options.map(function (o) {
      return '<label class="need"><input type="radio" name="' + k + '" value="' + o[0] + '" data-k="' + k + '" data-rerender' + (answers[k] === o[0] ? ' checked' : '') + '><span><strong>' + o[1] + '</strong><span>' + o[2] + '</span></span></label>';
    }).join('') + '</div>';
  }
  function stepHead(title, sub) { return '<h2 class="q-title">' + title + '</h2>' + (sub ? '<p class="q-sub">' + sub + '</p>' : ''); }
  function rm(list, i, label, show) {
    return show ? '<button type="button" class="rm" data-remove="' + list + '" data-i="' + i + '" aria-label="Remove ' + label + '">&times;</button>' : '';
  }
  function fmtShare(n) { return String(Math.round(n * 100) / 100); }
  function equalShares(n) {
    var each = Math.floor(10000 / n), extra = 10000 - each * n, out = [];
    for (var i = 0; i < n; i++) out.push(fmtShare((each + (i < extra ? 1 : 0)) / 100));
    return out;
  }
  function applyPreset(mode) {
    var v = buildVars(answers, states, tpl.settings);
    if (mode === 'spouse') answers.beneficiaries = [{ name: v.spouse, share: '100', contingent: 'descendants', contName: '' }];
    else if (mode === 'children') {
      var sh = equalShares(v.children.length);
      answers.beneficiaries = v.children.map(function (c, i) { return { name: c.child, share: sh[i], contingent: 'descendants', contName: '' }; });
    } else if (mode === 'named' && !answers.beneficiaries.some(function (b) { return clean(b.name); })) answers.beneficiaries = [clone(ROWS_WILL.beneficiaries)];
  }

  /* ---------- the questions ---------- */
  var RENDER_WILL = {
    start: function () {
      var opts = '<option value="">Choose your state</option>' + states.list.map(function (s) {
        return '<option value="' + esc(s.name) + '"' + (answers.state === s.name ? ' selected' : '') + (s.supported ? '' : ' disabled') + '>' + esc(s.name) + (s.supported ? '' : ' (not available yet)') + '</option>';
      }).join('');
      return stepHead('First, where do you live?', 'Your state\u2019s rules decide how a will must be signed.') +
        field('State', '<select class="input" data-k="state" data-rerender>' + opts + '</select>') +
        '<div class="checks">' +
        '<label class="check"><input type="checkbox" data-k="ageOk"' + (answers.ageOk ? ' checked' : '') + '><span>I am 18 or older.</span></label>' +
        '<label class="check"><input type="checkbox" data-k="freeOk"' + (answers.freeOk ? ' checked' : '') + '><span>I am making this will of my own free will.</span></label>' +
        '</div>';
    },
    about: function () {
      return stepHead('About you', 'Use your name as it appears on your ID.') +
        field('Your full legal name', text('name', 'For example, Maria Elena Alvarez', { auto: 'name' })) +
        field('County where you live', countySelect('county')) +
        field('Are you married or in a registered domestic partnership?', pills('marital', [['unmarried', 'No'], ['married', 'Yes']], true)) +
        (answers.marital === 'married' ? field('Your spouse\u2019s or domestic partner\u2019s full legal name', text('spouse', '')) : '');
    },
    children: function () {
      var rows = '';
      if (answers.hasChildren === 'yes') {
        rows = '<div class="rowset">' + answers.children.map(function (c, i) {
          return '<div class="rowitem"><input class="input" data-list="children" data-i="' + i + '" data-f="name" value="' + val(c.name) + '" placeholder="Child\u2019s full name" aria-label="Child ' + (i + 1) + ' name">' +
            '<label class="check sm"><input type="checkbox" data-list="children" data-i="' + i + '" data-f="minor" data-rerender' + (c.minor ? ' checked' : '') + '><span>Under 18</span></label>' +
            rm('children', i, 'child ' + (i + 1), answers.children.length > 1) + '</div>';
        }).join('') + '</div><button type="button" class="btn btn-secondary btn-sm" data-add="children">+ Add another child</button>';
      }
      return stepHead('Do you have children?', 'Include adopted children. Stepchildren are not included unless you name them later.') +
        pills('hasChildren', [['yes', 'Yes'], ['no', 'No']], true) + rows;
    },
    guardian: function () {
      return stepHead('Who should look after your children under 18?', 'This person would care for them if you couldn\u2019t. A court still has the final say.') +
        field('Guardian\u2019s full name', text('guardian', '')) +
        field('A backup guardian <em>(optional)</em>', text('altGuardian', ''), 'Used if your first choice can\u2019t serve.');
    },
    executor: function () {
      var rows = '<div class="rowset">' + answers.successors.map(function (s, i) {
        return '<div class="rowitem"><input class="input" data-list="successors" data-i="' + i + '" data-f="name" value="' + val(s.name) + '" placeholder="Backup ' + (i + 1) + ' full name" aria-label="Backup ' + (i + 1) + '">' +
          rm('successors', i, 'backup ' + (i + 1), answers.successors.length > 1) + '</div>';
      }).join('') + '</div><button type="button" class="btn btn-secondary btn-sm" data-add="successors">+ Add another backup</button>';
      return stepHead('Who should carry out your will?', 'This person pays your debts, handles the paperwork, and gives your property to the people you name. Your will calls this person your Personal Representative. Some states call it an executor.') +
        field('Personal representative\u2019s full name', text('executor', '')) +
        field('Backups <em>(optional)</em>', rows, 'If your first choice can\u2019t serve, the first backup takes over, then the next.');
    },
    gifts: function () {
      var rows = '';
      if (answers.wantsGifts === 'yes') {
        rows = '<div class="rowset">' + answers.gifts.map(function (g, i) {
          return '<div class="rowitem stack"><input class="input" data-list="gifts" data-i="' + i + '" data-f="item" value="' + val(g.item) + '" placeholder="What (for example, my grandmother\u2019s ring)" aria-label="Gift ' + (i + 1) + ' item">' +
            '<input class="input" data-list="gifts" data-i="' + i + '" data-f="recipient" value="' + val(g.recipient) + '" placeholder="Who receives it" aria-label="Gift ' + (i + 1) + ' recipient">' +
            rm('gifts', i, 'gift ' + (i + 1), answers.gifts.length > 1) + '</div>';
        }).join('') + '</div><button type="button" class="btn btn-secondary btn-sm" data-add="gifts">+ Add another gift</button>';
      }
      return stepHead('Is there anything you want a specific person to have?', 'For example, jewelry, a car, or a sum of money. You can skip this. Everything else is covered next.') +
        pills('wantsGifts', [['yes', 'Yes, add a gift'], ['no', 'No, skip this']], true) + rows;
    },
    residuary: function () {
      var a = answers, v = buildVars(a, states, tpl.settings), opts = [];
      if (v.has_spouse) opts.push(['spouse', 'All to my spouse', 'Everything goes to ' + (v.spouse || 'your spouse') + '.']);
      if (v.has_children) opts.push(['children', 'Equally to my children', 'Each child receives the same share.']);
      opts.push(['named', 'To specific people or organizations', 'You choose who receives it and what share each gets.']);
      if (a.residuary && !opts.some(function (o) { return o[0] === a.residuary; })) a.residuary = '';
      var table = '';
      if (a.residuary) {
        var total = a.beneficiaries.reduce(function (t, b) { return t + (parseFloat(b.share) || 0); }, 0);
        var multi = a.beneficiaries.filter(function (b) { return clean(b.name); }).length > 1;
        table = '<div class="bens">' + a.beneficiaries.map(function (b, i) {
          var c = b.contingent || 'descendants';
          var sel = '<select class="input" data-list="beneficiaries" data-i="' + i + '" data-f="contingent" data-rerender aria-label="If ' + val(b.name || 'this person') + ' does not survive me">' +
            '<option value="descendants"' + (c === 'descendants' ? ' selected' : '') + '>Their descendants take their share</option>' +
            '<option value="named"' + (c === 'named' ? ' selected' : '') + '>A person I name takes it</option>' +
            '<option value="charity"' + (c === 'charity' ? ' selected' : '') + '>A charity I name takes it</option>' +
            '<option value="others"' + (c === 'others' ? ' selected' : '') + (multi ? '' : ' disabled') + '>The others on this list share it</option></select>';
          return '<div class="ben"><div class="rowitem"><input class="input" data-list="beneficiaries" data-i="' + i + '" data-f="name" value="' + val(b.name) + '" placeholder="Person or organization" aria-label="Beneficiary ' + (i + 1) + '">' +
            '<span class="pct"><input class="input" inputmode="decimal" data-list="beneficiaries" data-i="' + i + '" data-f="share" value="' + val(b.share) + '" placeholder="50" aria-label="Share ' + (i + 1) + ' percent"><b>%</b></span>' +
            rm('beneficiaries', i, 'beneficiary ' + (i + 1), a.beneficiaries.length > 1) + '</div>' +
            '<div class="cont"><span class="cont-l">If they do not survive me</span>' + sel +
            ((c === 'named' || c === 'charity') ? '<input class="input" data-list="beneficiaries" data-i="' + i + '" data-f="contName" value="' + val(b.contName) + '" placeholder="' + (c === 'charity' ? 'Name of the charity' : 'Name of the person') + '" aria-label="Contingent beneficiary ' + (i + 1) + '">' : '') +
            '</div></div>';
        }).join('') + '</div><button type="button" class="btn btn-secondary btn-sm" data-add="beneficiaries">+ Add another</button>' +
          '<p class="hint" id="pct-total">Shares add up to ' + fmtShare(total) + '%. They need to add up to 100%.</p>';
      }
      return stepHead('Who gets everything else?', 'This covers your home, money, and belongings, after any special gifts. Start with a choice below, then adjust it.') +
        cards('residuary', opts) + table;
    },
    review: function () {
      var v = buildVars(answers, states, tpl.settings);
      var instr = toHtml(renderNodes(sign.nodes, v), 'signing').replace(/<span class="(?:fill|blank)">/g, '<span>');
      function row(label, value, goto) {
        return '<div class="sum-row"><div><span class="sum-l">' + label + '</span><span class="sum-v">' + (value || '<em>Not answered</em>') + '</span></div><button type="button" class="link" data-goto="' + goto + '">Change</button></div>';
      }
      var bens = v.beneficiaries.map(function (b) { return esc(b.beneficiary) + ' (' + esc(b.share) + '%)'; }).join(', ');
      var pr = esc(v.executor) + (v.has_successors ? '. Backups: ' + esc(v.successors.map(function (x) { return x.successor; }).join(', ')) : '');
      return stepHead('Your will is ready to review', 'Read every word. Then print it and follow the signing steps below.') +
        '<div class="sum">' +
        row('Lives in', esc([v.county ? v.county + ' County' : '', v.state].filter(Boolean).join(', ')), 'start') +
        row('Name', esc(v.name) + (v.has_spouse ? ', married to ' + esc(v.spouse) : ''), 'about') +
        row('Children', v.has_children ? esc(v.children.map(function (c) { return c.child; }).join(', ')) : 'None', 'children') +
        (v.has_minor_children ? row('Guardian', esc(v.guardian), 'guardian') : '') +
        row('Personal representative', pr, 'executor') +
        row('Special gifts', v.has_gifts ? v.gifts.length + (v.gifts.length === 1 ? ' gift' : ' gifts') : 'None', 'gifts') +
        row('Everything else', bens, 'residuary') + '</div>' +
        '<div class="actions">' +
        '<button type="button" class="btn btn-primary" data-pdf>Download PDF</button>' +
        '<button type="button" class="btn btn-secondary" data-word>Download for Word</button>' +
        '<button type="button" class="btn btn-secondary" data-print>Print</button>' +
        '<button type="button" class="btn btn-secondary see-doc" data-pane="p">View your will</button></div>' +
        '<p class="hint export-status" id="export-status" role="status">The PDF and Word files have \u201cPage X of Y\u201d at the bottom of every page. If you print straight from the browser, some browsers leave the page numbers off, so the PDF is the better choice.</p>' +
        (draft ? '<p class="draft-inline">This is a sample version, so it can\u2019t be signed yet.</p>' : '') +
        '<div class="instr">' + instr + '</div>' +
        '<p class="reset"><button type="button" class="link" data-reset>Start over</button></p>';
    }
  };

  /* ---------- checks before moving on ---------- */
  function validateWill(id) {
    var a = answers, e = [], st = states.map[a.state];
    if (id === 'start') {
      if (!st) e.push('Choose your state.');
      else if (!st.supported) e.push(st.note || 'We can\u2019t offer a will in that state yet.');
      if (!a.ageOk) e.push('Confirm that you are 18 or older.');
      if (!a.freeOk) e.push('Confirm that you are making this will of your own free will.');
    } else if (id === 'about') {
      if (clean(a.name).length < 2) e.push('Enter your full legal name.');
      if (!clean(a.county)) e.push('Enter your county.');
      if (!a.marital) e.push('Tell us whether you are married or in a registered domestic partnership.');
      if (a.marital === 'married' && !clean(a.spouse)) e.push('Enter your spouse\u2019s or domestic partner\u2019s name.');
    } else if (id === 'children') {
      if (!a.hasChildren) e.push('Tell us whether you have children.');
      if (a.hasChildren === 'yes' && !a.children.some(function (c) { return clean(c.name); })) e.push('Enter at least one child\u2019s name.');
    } else if (id === 'guardian') {
      if (!clean(a.guardian)) e.push('Enter the name of the person who should be guardian.');
    } else if (id === 'executor') {
      if (!clean(a.executor)) e.push('Enter the name of your personal representative.');
    } else if (id === 'gifts') {
      if (!a.wantsGifts) e.push('Choose whether to add a special gift.');
      if (a.wantsGifts === 'yes') {
        var rows = a.gifts.filter(function (g) { return clean(g.item) || clean(g.recipient); });
        if (!rows.length) e.push('Add a gift, or choose \u201cNo, skip this.\u201d');
        if (rows.some(function (g) { return !clean(g.item) || !clean(g.recipient); })) e.push('Each gift needs both what it is and who receives it.');
      }
    } else if (id === 'residuary') {
      if (!a.residuary) e.push('Choose who gets everything else.');
      else {
        var bs = a.beneficiaries.filter(function (b) { return clean(b.name) || clean(b.share); });
        var tot = bs.reduce(function (t, b) { return t + (parseFloat(b.share) || 0); }, 0);
        if (!bs.length) e.push('Add at least one person or organization.');
        else if (bs.some(function (b) { return !clean(b.name) || !(parseFloat(b.share) > 0); })) e.push('Each one needs a name and a share.');
        else if (Math.abs(tot - 100) > 0.05) e.push('The shares add up to ' + fmtShare(tot) + '%. They must add up to 100%.');
        if (bs.some(function (b) { return (b.contingent === 'named' || b.contingent === 'charity') && !clean(b.contName); })) e.push('Enter who takes the share when someone does not survive you.');
        if (bs.length === 1 && bs[0].contingent === 'others') e.push('There are no others on the list to share it. Choose a different option.');
      }
    }
    return e;
  }

  /* ================= POUR-OVER WILL (for use with a trust) ================= */
  var EMPTY_PO = {
    state: '', ageOk: false, freeOk: false, trustOk: false,
    name: '', county: '', marital: '', spouse: '', revokeSpouse: 'yes',
    hasChildren: '', children: [{ name: '', minor: false }],
    trustName: '', trustDate: '', jointTrust: '', otherTrustmaker: '',
    prMode: 'successive', executor: '', successors: [{ name: '' }], coPRs: [{ name: '' }, { name: '' }],
    guardianMode: 'same', guardian: '', gAlt1: '', gAlt2: '', eachGuardian: {},
    propFid: '', propFidName: '', propAlt1: ''
  };
  var ROWS_PO = { children: { name: '', minor: false }, successors: { name: '' }, coPRs: { name: '' } };
  var STEPS_PO = [
    { id: 'start', label: 'Where you live' },
    { id: 'about', label: 'About you' },
    { id: 'children', label: 'Children' },
    { id: 'trust', label: 'Your trust' },
    { id: 'executor', label: 'Personal representative' },
    { id: 'guardian', label: 'Guardian', show: hasMinor },
    { id: 'propfid', label: 'Property for a minor', show: hasMinor },
    { id: 'review', label: 'Review and sign' }
  ];
  function minorsOf(a) {
    return (a.children || []).map(function (c, i) { return { child: clean(c.name), minor: !!c.minor, idx: i }; }).filter(function (c) { return c.child && c.minor; });
  }
  function altList(names) {
    return names.map(clean).filter(Boolean).map(function (x) { return { alternate: x }; });
  }
  function buildVarsPO(a, states, settings) {
    var v = {}, st = states.map[a.state] || null;
    var kids = (a.children || []).map(function (c) { return { child: clean(c.name) }; }).filter(function (c) { return c.child; });
    var hasKids = a.hasChildren === 'yes' && kids.length > 0;
    var minors = hasKids ? minorsOf(a) : [];
    v.name = clean(a.name); v.name_caps = v.name.toUpperCase();
    v.county = clean(a.county).replace(/\s+county$/i, '');
    v.state = st ? st.name : '';
    v.marital = a.marital || ''; v.unmarried = a.marital === 'unmarried'; v.married_or_dp = a.marital === 'married';
    v.spouse = clean(a.spouse); v.revoke_spouse = a.revokeSpouse !== 'no';
    v.children_answered = a.hasChildren === 'yes' || a.hasChildren === 'no';
    v.children_yes = hasKids; v.children = kids; v.minor_children_yes = minors.length > 0;
    v.trust_name = clean(a.trustName); v.trust_date = longDate(a.trustDate);
    v.joint_trust = a.jointTrust === 'yes'; v.other_trustmaker = clean(a.otherTrustmaker);
    v.pr_co = a.prMode === 'co'; v.pr_successive = !v.pr_co;
    v.executor = clean(a.executor);
    v.successors = (a.successors || []).map(function (x) { return { successor: clean(x.name) }; }).filter(function (x) { return x.successor; });
    v.co_prs = (a.coPRs || []).map(function (x) { return { co_pr: clean(x.name) }; }).filter(function (x) { return x.co_pr; });
    if (a.guardianMode === 'each' && minors.length > 1) {
      v.guardian_nominations = minors.map(function (m) {
        var g = (a.eachGuardian || {})[m.idx] || {};
        return { applies_to: m.child, guardian: clean(g.name), alternates: altList([g.alt1]) };
      });
    } else {
      v.guardian_nominations = [{ applies_to: minors.length === 1 ? minors[0].child : 'any Child of mine', guardian: clean(a.guardian), alternates: altList([a.gAlt1, a.gAlt2]) }];
    }
    v.prop_fid_yes = a.propFid === 'yes'; v.prop_fid = clean(a.propFidName);
    v.prop_alternates = [a.propAlt1].map(clean).filter(Boolean).map(function (x) { return { prop_alt: x }; });
    var days = parseInt(settings.survival_days, 10) || 30;
    v.survival_days = String(days);
    v.survival_words = (SURVIVAL[days] || String(days)) + ' (' + days + ')';
    v.survival_word = SURVIVAL[days] || String(days);
    var w = st ? st.witnesses : 2;
    v.witness_count = numWord(w); v.two_witnesses = w === 2;
    v.witness_slots = []; for (var i = 1; i <= w; i++) v.witness_slots.push({ n: i, n_word: capWord(i) });
    v.self_proving = st ? st.selfProving : false;
    v.state_note = st ? st.note : '';
    var sx = stateText[a.state] || null;
    v.cp_quasi = !!sx && sx.community === 'quasi'; v.cp_plain = !!sx && sx.community === 'plain'; v.homestead = !!sx && sx.community === 'homestead';
    v.no_contest_yes = sx ? sx.no_contest !== 'no' : true;
    v.__tail = sx ? sx.tail : [];
    return v;
  }

  function addBtn(list, label) { return '<button type="button" class="btn btn-secondary btn-sm" data-add="' + list + '">' + label + '</button>'; }
  function nameRows(list, ph, min) {
    return '<div class="rowset">' + answers[list].map(function (s, i) {
      return '<div class="rowitem"><input class="input" data-list="' + list + '" data-i="' + i + '" data-f="name" value="' + val(s.name) + '" placeholder="' + ph + ' ' + (i + 1) + ' full name" aria-label="' + ph + ' ' + (i + 1) + '">' +
        rm(list, i, ph.toLowerCase() + ' ' + (i + 1), answers[list].length > min) + '</div>';
    }).join('') + '</div>';
  }
  var RENDER_PO = {
    start: function () {
      var opts = '<option value="">Choose your state</option>' + states.list.map(function (s) {
        return '<option value="' + esc(s.name) + '"' + (answers.state === s.name ? ' selected' : '') + (s.supported ? '' : ' disabled') + '>' + esc(s.name) + (s.supported ? '' : ' (not available yet)') + '</option>';
      }).join('');
      return stepHead('First, where do you live?', 'Your state’s rules decide how a will must be signed.') +
        field('State', '<select class="input" data-k="state" data-rerender>' + opts + '</select>') +
        '<div class="checks">' +
        '<label class="check"><input type="checkbox" data-k="ageOk"' + (answers.ageOk ? ' checked' : '') + '><span>I am 18 or older.</span></label>' +
        '<label class="check"><input type="checkbox" data-k="freeOk"' + (answers.freeOk ? ' checked' : '') + '><span>I am making this will of my own free will.</span></label>' +
        '<label class="check"><input type="checkbox" data-k="trustOk"' + (answers.trustOk ? ' checked' : '') + '><span>I have already created my living trust, or I will sign it at the same time as this will.</span></label>' +
        '</div>';
    },
    about: function () {
      return stepHead('About you', 'Use your name as it appears on your ID.') +
        field('Your full legal name', text('name', 'For example, Maria Elena Alvarez', { auto: 'name' })) +
        field('County where you live', countySelect('county')) +
        field('Are you married or in a registered domestic partnership?', pills('marital', [['unmarried', 'No'], ['married', 'Yes']], true)) +
        (answers.marital === 'married'
          ? field('Your spouse’s or domestic partner’s full legal name', text('spouse', '')) +
            field('If your marriage or partnership ends before you die, should everything in this will about that person be cancelled?', pills('revokeSpouse', [['yes', 'Yes, cancel it'], ['no', 'No, keep it']]), 'Most people choose yes. Either way, the law of your state may decide.')
          : '');
    },
    children: function () { return RENDER_WILL.children(); },
    trust: function () {
      return stepHead('Tell us about your trust', 'Your pour-over will sends anything left outside your trust into it. Copy these details from your signed trust document.') +
        field('Name of your trust', text('trustName', 'For example, The Alvarez Family Trust'), 'Type it exactly as it appears on your trust.') +
        field('Date your trust was first signed', '<input class="input" type="date" data-k="trustDate" value="' + val(answers.trustDate) + '">', 'Use the original date, not the date of any later amendment.') +
        field('Is it a joint trust, created by you and another person?', pills('jointTrust', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.jointTrust === 'yes' ? field('The other person’s full legal name', text('otherTrustmaker', '')) : '');
    },
    executor: function () {
      var co = answers.prMode === 'co';
      return stepHead('Who should carry out your will?', 'This person pays your debts and handles the paperwork for the property that isn’t in your trust. Your will calls this person your Personal Representative. Some states call it an executor.') +
        cards('prMode', [['successive', 'One at a time', 'Your first choice serves. If they can’t, the next person on your list steps in.'], ['co', 'Two or more together', 'They serve together as co-personal representatives.']]) +
        (co ? field('Co-personal representatives', nameRows('coPRs', 'Co-personal representative', 2) + addBtn('coPRs', '+ Add another'), 'Enter at least two people.')
            : field('Personal representative’s full name', text('executor', ''))) +
        field('Backups <em>(optional)</em>', nameRows('successors', 'Backup', 1) + addBtn('successors', '+ Add another backup'), 'If your first choice can’t serve, the first backup takes over, then the next.');
    },
    guardian: function () {
      var minors = minorsOf(answers), multi = minors.length > 1, each = multi && answers.guardianMode === 'each';
      var body;
      if (!each) {
        body = field('Guardian’s full name', text('guardian', '')) +
          field('A backup guardian <em>(optional)</em>', text('gAlt1', ''), 'Used if your first choice can’t serve.') +
          field('A second backup <em>(optional)</em>', text('gAlt2', ''));
      } else {
        body = minors.map(function (m) {
          var g = (answers.eachGuardian || {})[m.idx] || {};
          return '<div class="ben"><strong>' + esc(m.child) + '</strong>' +
            field('Guardian’s full name', '<input class="input" data-path="eachGuardian.' + m.idx + '.name" value="' + val(g.name) + '" autocomplete="off" aria-label="Guardian for ' + val(m.child) + '">') +
            field('A backup guardian <em>(optional)</em>', '<input class="input" data-path="eachGuardian.' + m.idx + '.alt1" value="' + val(g.alt1) + '" autocomplete="off" aria-label="Backup guardian for ' + val(m.child) + '">') + '</div>';
        }).join('');
      }
      return stepHead('Who should look after your children under 18?', 'This person would care for them if you couldn’t. A court still has the final say.') +
        (multi ? field('Should the same person look after all of them?', pills('guardianMode', [['same', 'Yes, the same person'], ['each', 'No, a different person for each child']], true)) : '') + body;
    },
    propfid: function () {
      return stepHead('If a child under 18 inherits directly, who should manage it?', 'Most of your property goes to your trust. But some can pass to a child directly, for example under the fallback rules in your will. You can choose someone to manage it for the child, or skip this.') +
        pills('propFid', [['yes', 'Yes, choose someone'], ['no', 'No, skip this']], true) +
        (answers.propFid === 'yes' ? field('Who should manage it?', text('propFidName', '')) + field('A backup <em>(optional)</em>', text('propAlt1', '')) : '');
    },
    review: function () {
      var v = buildVarsPO(answers, states, tpl.settings);
      var instr = toHtml(renderNodes(sign.nodes, v), 'signing').replace(/<span class="(?:fill|blank)">/g, '<span>');
      function row(label, value, goto) {
        return '<div class="sum-row"><div><span class="sum-l">' + label + '</span><span class="sum-v">' + (value || '<em>Not answered</em>') + '</span></div><button type="button" class="link" data-goto="' + goto + '">Change</button></div>';
      }
      var pr = v.pr_co ? 'Together: ' + esc(v.co_prs.map(function (x) { return x.co_pr; }).join(', ')) : esc(v.executor);
      if (v.successors.length) pr += '. Backups: ' + esc(v.successors.map(function (x) { return x.successor; }).join(', '));
      var guardians = v.guardian_nominations.map(function (g) { return (v.guardian_nominations.length > 1 ? esc(g.applies_to) + ': ' : '') + esc(g.guardian); }).join('; ');
      return stepHead('Your pour-over will is ready to review', 'Read every word. Then print it and follow the signing steps below.') +
        '<div class="sum">' +
        row('Lives in', esc([v.county ? v.county + ' County' : '', v.state].filter(Boolean).join(', ')), 'start') +
        row('Name', esc(v.name) + (v.married_or_dp ? ', with ' + esc(v.spouse) : ''), 'about') +
        row('Children', v.children_yes ? esc(v.children.map(function (c) { return c.child; }).join(', ')) : 'None', 'children') +
        row('Your trust', esc(v.trust_name) + (v.trust_date ? ', dated ' + esc(v.trust_date) : '') + (v.joint_trust ? ' (joint with ' + esc(v.other_trustmaker) + ')' : ''), 'trust') +
        row('Personal representative', pr, 'executor') +
        (v.minor_children_yes ? row('Guardian', guardians, 'guardian') : '') +
        (v.minor_children_yes ? row('Manages a minor’s property', v.prop_fid_yes ? esc(v.prop_fid) : 'Not chosen', 'propfid') : '') + '</div>' +
        '<div class="actions">' +
        '<button type="button" class="btn btn-primary" data-pdf>Download PDF</button>' +
        '<button type="button" class="btn btn-secondary" data-word>Download for Word</button>' +
        '<button type="button" class="btn btn-secondary" data-print>Print</button>' +
        '<button type="button" class="btn btn-secondary see-doc" data-pane="p">View your will</button></div>' +
        '<p class="hint export-status" id="export-status" role="status">The PDF and Word files have \u201cPage X of Y\u201d at the bottom of every page. If you print straight from the browser, some browsers leave the page numbers off, so the PDF is the better choice.</p>' +
        (draft ? '<p class="draft-inline">This is a sample version, so it can’t be signed yet.</p>' : '') +
        '<div class="instr">' + instr + '</div>' +
        '<p class="reset"><button type="button" class="link" data-reset>Start over</button></p>';
    }
  };
  function validatePO(id) {
    var a = answers, e = [], st = states.map[a.state];
    if (id === 'start') {
      if (!st) e.push('Choose your state.');
      else if (!st.supported) e.push(st.note || 'We can’t offer a pour-over will in that state yet.');
      if (!a.ageOk) e.push('Confirm that you are 18 or older.');
      if (!a.freeOk) e.push('Confirm that you are making this will of your own free will.');
      if (!a.trustOk) e.push('A pour-over will works with a living trust. Confirm that you have created yours, or will sign it with this will.');
    } else if (id === 'about') {
      if (clean(a.name).length < 2) e.push('Enter your full legal name.');
      if (!clean(a.county)) e.push('Enter your county.');
      if (!a.marital) e.push('Tell us whether you are married or in a registered domestic partnership.');
      if (a.marital === 'married' && !clean(a.spouse)) e.push('Enter your spouse’s or domestic partner’s name.');
    } else if (id === 'children') {
      if (!a.hasChildren) e.push('Tell us whether you have children.');
      if (a.hasChildren === 'yes' && !a.children.some(function (c) { return clean(c.name); })) e.push('Enter at least one child’s name.');
    } else if (id === 'trust') {
      if (!clean(a.trustName)) e.push('Enter the name of your trust.');
      if (!/^\d{4}-\d{2}-\d{2}$/.test(a.trustDate || '')) e.push('Enter the date your trust was first signed.');
      if (!a.jointTrust) e.push('Tell us whether it is a joint trust.');
      if (a.jointTrust === 'yes' && !clean(a.otherTrustmaker)) e.push('Enter the other person’s name.');
    } else if (id === 'executor') {
      if (a.prMode === 'co') {
        if (a.coPRs.filter(function (x) { return clean(x.name); }).length < 2) e.push('Enter at least two co-personal representatives, or choose “One at a time.”');
      } else if (!clean(a.executor)) e.push('Enter the name of your personal representative.');
    } else if (id === 'guardian') {
      var minors = minorsOf(a);
      if (a.guardianMode === 'each' && minors.length > 1) {
        if (minors.some(function (m) { return !clean(((a.eachGuardian || {})[m.idx] || {}).name); })) e.push('Enter a guardian for each child.');
      } else if (!clean(a.guardian)) e.push('Enter the name of the person who should be guardian.');
    } else if (id === 'propfid') {
      if (!a.propFid) e.push('Choose whether to name someone to manage a minor’s property.');
      if (a.propFid === 'yes' && !clean(a.propFidName)) e.push('Enter the name of the person who should manage it.');
    }
    return e;
  }

  /* ================= DURABLE POWER OF ATTORNEY =================
     Each state has its own file (will/dpoa/alabama.js and so on) with your state document word for word.
     The page loads only the file for the state that was chosen. */

  /* ---------- MORE THAN ONE AGENT AT A TIME (Power of Attorney and Health Care Directive) ----------
     agentMode: 'single' (one agent, backups in order -- the default), 'separate' (co-agents, any one of
     whom may act alone), or 'together' (co-agents who must act together). The wording each choice adds
     lives in the state files (will/dpoa/*.js, will/hcd/*.js) under [[if has_co_agents]]. */
  function coAgentVars(a, v) {
    var mode = a.agentMode === 'separate' || a.agentMode === 'together' ? a.agentMode : 'single';
    var list = mode === 'single' ? [] : (a.coAgents || []).map(function (x) {
      return { co_agent: clean(x.name), co_agent_contact: [clean(x.phone), clean(x.email)].filter(Boolean).join(' | ') };
    }).filter(function (x) { return x.co_agent; });
    v.co_agents = list;
    v.has_co_agents = list.length > 0;
    v.co_separate = mode === 'separate';
  }
  function coAgentFields(withContact) {
    var h = field('Will more than one person serve as your agent at the same time?', pills('agentMode', [
      ['single', 'No — one agent, with backups if needed'],
      ['separate', 'Yes — any one of them may act alone'],
      ['together', 'Yes — they must act together']
    ], true), 'Backups, listed below, only step in if the person before them can’t serve, in the order you list them.');
    if (answers.agentMode === 'separate' || answers.agentMode === 'together') {
      h += field('Your other agent(s)', '<div class="rowset">' + answers.coAgents.map(function (b, i) {
        return '<div class="ben"><input class="input" data-list="coAgents" data-i="' + i + '" data-f="name" value="' + val(b.name) + '" placeholder="Agent ' + (i + 2) + ' full name" aria-label="Agent ' + (i + 2) + ' full name">' +
          (withContact ? '<input class="input" type="tel" data-list="coAgents" data-i="' + i + '" data-f="phone" value="' + val(b.phone) + '" placeholder="Phone" aria-label="Agent ' + (i + 2) + ' phone">' +
            '<input class="input" type="email" data-list="coAgents" data-i="' + i + '" data-f="email" value="' + val(b.email) + '" placeholder="Email (optional)" aria-label="Agent ' + (i + 2) + ' email">' : '') +
          rm('coAgents', i, 'agent ' + (i + 2), answers.coAgents.length > 1) + '</div>';
      }).join('') + '</div>' + addBtn('coAgents', '+ Add another agent'));
    }
    return h;
  }
  function coAgentErrors(a, e, withContact) {
    if (a.agentMode === 'separate' || a.agentMode === 'together') {
      if (!(a.coAgents || []).some(function (b) { return clean(b.name); })) e.push('Enter the name of the other agent, or choose that one person will serve.');
      if (withContact) (a.coAgents || []).forEach(function (b, i) {
        var who = clean(b.name) || 'agent ' + (i + 2);
        if (clean(b.phone) && !isCompletePhone(b.phone)) e.push('The phone number for ' + who + ' looks incomplete.');
        if (clean(b.email) && !isCompleteEmail(b.email)) e.push('The email address for ' + who + ' looks incomplete.');
      });
    }
  }

  var EMPTY_DP = {
    state: '', govState: '', ageOk: false, freeOk: false,
    name: '', county: '',
    agent: '', successors: [{ name: '' }],
    agentMode: 'single', coAgents: [{ name: '' }],
    effective: '', determiner: '', facility: ''
  };
  var ROWS_DP = { successors: { name: '' }, coAgents: { name: '' } };
  var DP_CACHE = {}, DP_FAIL = {}, DP_PENDING = {};
  function dpGov(a) { return a.govState || a.state || ''; }
  function dpSlug(n) { return String(n).toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, ''); }
  function dpLoad(name, done) {
    if (!name || DP_CACHE[name] || DP_FAIL[name]) { if (done) done(); return; }
    var have = (window.DPOA_STATES || {})[name];
    if (have) { DP_CACHE[name] = parseTemplate(have); if (done) done(); return; }
    if (DP_PENDING[name]) { DP_PENDING[name].push(done); return; }
    DP_PENDING[name] = [done];
    var s = document.createElement('script');
    function fin() {
      var raw = (window.DPOA_STATES || {})[name];
      if (raw) DP_CACHE[name] = parseTemplate(raw); else DP_FAIL[name] = true;
      var cbs = DP_PENDING[name]; delete DP_PENDING[name];
      cbs.forEach(function (f) { if (f) f(); });
    }
    s.src = 'will/dpoa/' + dpSlug(name) + '.js';
    s.onload = fin; s.onerror = fin;
    document.head.appendChild(s);
  }
  function dpSet(a, key) { var t = DP_CACHE[dpGov(a)]; return t ? t.settings[key] : undefined; }
  var STEPS_DP = [
    { id: 'start', label: 'Where you live' },
    { id: 'about', label: 'About you' },
    { id: 'agent', label: 'Your agent' },
    { id: 'effective', label: 'When it starts', show: function (a) { return dpSet(a, 'effective_choice') !== 'no'; } },
    { id: 'more', label: 'One more thing', show: function (a) { return (dpSet(a, 'ask_determiner') === 'yes' && a.effective === 'incapacity') || dpSet(a, 'ask_facility') === 'yes'; } },
    { id: 'review', label: 'Review and sign' }
  ];
  function buildVarsDP(a, states, settings) {
    var v = {}, st = states.map[a.state] || null, gs = states.map[dpGov(a)] || null;
    v.name = clean(a.name); v.name_caps = v.name.toUpperCase();
    v.county = clean(a.county).replace(/\s+county$/i, '');
    v.state = st ? st.name : ''; v.governing_state = gs ? gs.name : v.state;
    v.agent = clean(a.agent);
    v.successors = (a.successors || []).map(function (x) { return { successor: clean(x.name) }; }).filter(function (x) { return x.successor; });
    v.has_successors = v.successors.length > 0;
    coAgentVars(a, v);
    var choice = dpSet(a, 'effective_choice') !== 'no';
    v.upon_incapacity = choice && a.effective === 'incapacity'; v.effective_immediately = !v.upon_incapacity;
    v.determiner = clean(a.determiner) || v.agent;
    v.covered_facility = a.facility === 'yes';
    v.advanced_powers = false;   /* the standard power of attorney leaves out Article Seven (special powers) */
    v.has_notary = dpSet(a, 'has_notary') === 'yes'; v.has_witness = dpSet(a, 'has_witness') === 'yes'; v.exec_choice = dpSet(a, 'exec_choice') === 'yes';
    v.state_note = gs ? gs.note : '';
    if (window.__dpoaForce) Object.assign(v, window.__dpoaForce);   /* used only for testing */
    return v;
  }
  var RENDER_DP = {
    start: function () {
      function opts(sel, blank) {
        return '<option value="">' + blank + '</option>' + states.list.map(function (s) {
          return '<option value="' + esc(s.name) + '"' + (sel === s.name ? ' selected' : '') + (s.supported ? '' : ' disabled') + '>' + esc(s.name) + (s.supported ? '' : ' (not available yet)') + '</option>';
        }).join('');
      }
      return stepHead('First, where do you live?', 'A power of attorney is governed by state law. Each state has its own form, its own required notices and its own signing rules.') +
        field('State where you live', '<select class="input" data-k="state" data-rerender>' + opts(answers.state, 'Choose your state') + '</select>') +
        field('Which state’s power of attorney should we use?', '<select class="input" data-k="govState" data-rerender>' + opts(answers.govState, answers.state ? 'The state where I live (' + esc(answers.state) + ')' : 'The state where I live') + '</select>', 'Most people use the state where they live. Choose a different state only if you have a reason, such as owning property there or planning to move there.') +
        '<div class="checks">' +
        '<label class="check"><input type="checkbox" data-k="ageOk"' + (answers.ageOk ? ' checked' : '') + '><span>I am 18 or older.</span></label>' +
        '<label class="check"><input type="checkbox" data-k="freeOk"' + (answers.freeOk ? ' checked' : '') + '><span>I am making this document of my own free will.</span></label>' +
        '</div>';
    },
    about: function () {
      return stepHead('About you', 'Use your name as it appears on your ID.') +
        field('Your full legal name', text('name', 'For example, Maria Elena Alvarez', { auto: 'name' })) +
        field('County where you live', countySelect('county'));
    },
    agent: function () {
      return stepHead('Who should act for you?', 'Your agent handles your money and property if you can’t, or if you ask them to. Choose someone you trust completely. Your document calls this person your Agent.') +
        field('Your agent’s full name', text('agent', '')) +
        coAgentFields(false) +
        field('Backups <em>(optional)</em>', nameRows('successors', 'Backup', 1) + addBtn('successors', '+ Add another backup'), 'If your first choice can’t serve, the first backup takes over, then the next.');
    },
    effective: function () {
      return stepHead('When should your agent’s power start?', 'You can cancel this document at any time while you have capacity.') +
        cards('effective', [
          ['now', 'Right away', 'Your agent’s power starts when you sign, and continues if you later lose capacity. This is the simplest choice, and banks usually find it easiest to accept. You can still manage your own affairs.'],
          ['incapacity', 'Only if I become incapacitated', 'Your agent’s power starts only after your incapacity has been established the way your document describes. This can slow things down when your agent needs to act.']
        ]);
    },
    more: function () {
      var h = stepHead('One more thing for ' + esc(dpGov(answers)), 'Your state’s form asks for this.');
      if (dpSet(answers, 'ask_determiner') === 'yes' && answers.effective === 'incapacity') {
        h += field('Who decides whether you are incapacitated?', text('determiner', 'Leave blank to use your agent'), 'Your state’s form needs a named person for this. Most people name their agent or their doctor. If you leave it blank, we use your agent.');
      }
      if (dpSet(answers, 'ask_facility') === 'yes') {
        h += field('Do you live in, or are you about to move into, a hospital, assisted-living, nursing or similar care facility?', pills('facility', [['yes', 'Yes'], ['no', 'No']], true), 'Your state has an extra rule for people in a care facility.');
      }
      return h;
    },
    review: function () {
      var v = buildVarsDP(answers, states, tpl.settings);
      var instr = toHtml(renderNodes(sign.nodes, v), 'signing').replace(/<span class="(?:fill|blank)">/g, '<span>');
      function row(label, value, goto) {
        return '<div class="sum-row"><div><span class="sum-l">' + label + '</span><span class="sum-v">' + (value || '<em>Not answered</em>') + '</span></div><button type="button" class="link" data-goto="' + goto + '">Change</button></div>';
      }
      var agent = esc(v.agent) + (v.has_co_agents ? ' and ' + esc(v.co_agents.map(function (x) { return x.co_agent; }).join(', ')) + (v.co_separate ? ' (each may act alone)' : ' (must act together)') : '') + (v.has_successors ? '. Backups: ' + esc(v.successors.map(function (x) { return x.successor; }).join(', ')) : '');
      var starts = dpSet(answers, 'effective_choice') === 'no' ? 'Right away (the only option in ' + esc(v.governing_state) + ')' : (answers.effective === 'incapacity' ? 'Only if I become incapacitated' : (answers.effective === 'now' ? 'Right away' : ''));
      return stepHead('Your power of attorney is ready to review', 'Read every word. Then print it and follow the signing steps below.') +
        '<div class="sum">' +
        row('Lives in', esc([v.county ? v.county + ' County' : '', v.state].filter(Boolean).join(', ')), 'start') +
        row('Form used', esc(v.governing_state), 'start') +
        row('Name', esc(v.name), 'about') +
        row('Agent', agent, 'agent') +
        row('Starts', starts, dpSet(answers, 'effective_choice') === 'no' ? 'start' : 'effective') + '</div>' +
        '<div class="actions">' +
        '<button type="button" class="btn btn-primary" data-pdf>Download PDF</button>' +
        '<button type="button" class="btn btn-secondary" data-word>Download for Word</button>' +
        '<button type="button" class="btn btn-secondary" data-print>Print</button>' +
        '<button type="button" class="btn btn-secondary see-doc" data-pane="p">View your document</button></div>' +
        '<p class="hint export-status" id="export-status" role="status">The PDF and Word files have “Page X of Y” at the bottom of every page. If you print straight from the browser, some browsers leave the page numbers off, so the PDF is the better choice.</p>' +
        (draft ? '<p class="draft-inline">This is a sample version, so it can’t be signed yet.</p>' : '') +
        '<div class="instr">' + instr + '</div>' +
        '<p class="reset"><button type="button" class="link" data-reset>Start over</button></p>';
    }
  };
  function validateDP(id) {
    var a = answers, e = [], st = states.map[a.state], gs = a.govState ? states.map[a.govState] : null;
    if (id === 'start') {
      if (!st) e.push('Choose the state where you live.');
      else if (!st.supported) e.push(st.note || 'We can’t offer this document in that state yet.');
      if (gs && !gs.supported) e.push(gs.note || 'We can’t offer this document for that state yet.');
      if (!a.ageOk) e.push('Confirm that you are 18 or older.');
      if (!a.freeOk) e.push('Confirm that you are making this document of your own free will.');
    } else if (id === 'about') {
      if (clean(a.name).length < 2) e.push('Enter your full legal name.');
      if (!clean(a.county)) e.push('Enter your county.');
    } else if (id === 'agent') {
      if (!clean(a.agent)) e.push('Enter the name of your agent.');
      if (!a.agentMode) e.push('Answer whether more than one person will serve as your agent.');
      coAgentErrors(a, e, false);
    } else if (id === 'effective') {
      if (!a.effective) e.push('Choose when your agent’s power should start.');
    } else if (id === 'more') {
      if (dpSet(a, 'ask_facility') === 'yes' && !a.facility) e.push('Answer the care-facility question.');
    }
    return e;
  }

  /* ================= DEMENTIA AND COGNITIVE DECLINE CARE PREFERENCES =================
     A supplement to a health-care directive, not a stand-alone grant of authority (see the notes at the
     top of will/dementia-template.js). No state-specific legal text: it attaches to whatever health-care
     directive the person already has, so it asks fewer questions than the will or the power of attorney. */
  var EMPTY_DEM = {
    state: '', capableOk: false, capacityCheck: '',
    name: '',
    valueAutonomy: false, valueComfort: false, valueCustom: false, valueCustomText: '',
    approach: '', customizeStages: false, mildGoal: '', moderateGoal: '', advancedGoal: '',
    hospitalization: '', infection: '', polst: '',
    homePref: false, memoryCareOk: false, routinesText: '',
    anhText: '', burdensomeText: ''
  };
  var ROWS_DEM = {};
  var STEPS_DEM = [
    { id: 'start', label: 'About you' },
    { id: 'values', label: 'Your values' },
    { id: 'goals', label: 'Goals of care' },
    { id: 'choices', label: 'Practical choices' },
    { id: 'setting', label: 'Where you live' },
    { id: 'more', label: 'Anything else' },
    { id: 'review', label: 'Review and sign' }
  ];
  function bigCheck(k, label, desc, rerender) {
    return '<label class="check big"><input type="checkbox" data-k="' + k + '"' + (rerender ? ' data-rerender' : '') + (answers[k] ? ' checked' : '') + '><span><strong>' + label + '</strong><span>' + desc + '</span></span></label>';
  }
  var GOAL_LABELS = {
    FULL_TREATMENT: 'Prolong life',
    SELECTIVE_TREATMENT: 'Selective treatment',
    COMFORT_FOCUSED: 'Comfort-focused'
  };
  var APPROACH_MAP = {
    full: { mild: 'FULL_TREATMENT', moderate: 'FULL_TREATMENT', advanced: 'FULL_TREATMENT' },
    balanced: { mild: 'FULL_TREATMENT', moderate: 'SELECTIVE_TREATMENT', advanced: 'COMFORT_FOCUSED' },
    comfort: { mild: 'COMFORT_FOCUSED', moderate: 'COMFORT_FOCUSED', advanced: 'COMFORT_FOCUSED' }
  };
  function stageGoal(stage) {
    var explicit = { mild: answers.mildGoal, moderate: answers.moderateGoal, advanced: answers.advancedGoal }[stage];
    if (answers.customizeStages && explicit) return explicit;
    var m = APPROACH_MAP[answers.approach];
    return m ? m[stage] : '';
  }
  function buildVarsDementia(a, states, settings) {
    var v = {}, st = states.map[a.state] || null;
    v.name = clean(a.name); v.name_caps = v.name.toUpperCase();
    v.state = st ? st.name : '';
    v.value_autonomy = !!a.valueAutonomy; v.value_comfort = !!a.valueComfort;
    v.value_custom = !!a.valueCustom && !!clean(a.valueCustomText); v.value_custom_text = clean(a.valueCustomText);
    v.any_value = v.value_autonomy || v.value_comfort || v.value_custom;
    var mg = stageGoal('mild'), og = stageGoal('moderate'), ag = stageGoal('advanced');
    v.mild_full = mg === 'FULL_TREATMENT'; v.mild_selective = mg === 'SELECTIVE_TREATMENT'; v.mild_comfort = mg === 'COMFORT_FOCUSED';
    v.moderate_full = og === 'FULL_TREATMENT'; v.moderate_selective = og === 'SELECTIVE_TREATMENT'; v.moderate_comfort = og === 'COMFORT_FOCUSED';
    v.advanced_full = ag === 'FULL_TREATMENT'; v.advanced_selective = ag === 'SELECTIVE_TREATMENT'; v.advanced_comfort = ag === 'COMFORT_FOCUSED';
    v.hosp_beneficial = a.hospitalization === 'beneficial'; v.hosp_limit = a.hospitalization === 'limit';
    v.infect_ordinary = a.infection === 'ordinary'; v.infect_selective = a.infection === 'selective'; v.infect_comfort = a.infection === 'comfort';
    v.anh_guidance = !!clean(a.anhText); v.anh_text = clean(a.anhText);
    v.burdensome_guidance = !!clean(a.burdensomeText); v.burdensome_text = clean(a.burdensomeText);
    v.home_pref = !!a.homePref; v.memory_care_ok = !!a.memoryCareOk; v.any_setting = v.home_pref || v.memory_care_ok;
    v.routines_yes = !!clean(a.routinesText); v.routines_text = clean(a.routinesText);
    v.polst_yes = a.polst === 'yes';
    v.state_note = st ? st.note : '';
    return v;
  }
  var RENDER_DEM = {
    start: function () {
      var opts = '<option value="">Choose your state</option>' + states.list.map(function (s) {
        return '<option value="' + esc(s.name) + '"' + (answers.state === s.name ? ' selected' : '') + '>' + esc(s.name) + '</option>';
      }).join('');
      var h = stepHead('Let’s start with the basics', 'This document goes with your health-care directive. It doesn’t appoint anyone or change any powers on its own.') +
        field('Your full legal name', text('name', 'For example, Maria Elena Alvarez', { auto: 'name' })) +
        field('State where you live', '<select class="input" data-k="state">' + opts + '</select>') +
        '<div class="checks">' +
        '<label class="check"><input type="checkbox" data-k="capableOk"' + (answers.capableOk ? ' checked' : '') + '><span>I am 18 or older, and I am making this of my own free will.</span></label>' +
        '</div>' +
        field('Right now, are you able to understand this document and communicate your own wishes?', pills('capacityCheck', [['yes', 'Yes'], ['unsure', 'I’m not sure']], true));
      if (answers.capacityCheck === 'unsure') {
        h += '<div class="restored">That’s okay — this will be here whenever you’re ready. Consider talking with your doctor, or with a lawyer, before you complete or sign it.</div>';
      }
      return h;
    },
    values: function () {
      return stepHead('Which values matter most to you?', 'Select any that fit. These guide your agent when the exact situation can’t be predicted. This is optional.') +
        '<div class="checks big">' +
        bigCheck('valueAutonomy', 'Independence and familiarity', 'Preserving my autonomy, familiar routines, relationships, and say in decisions, as much as reasonably possible.') +
        bigCheck('valueComfort', 'Comfort first', 'Comfort and relief of pain and distress, avoiding treatment or care settings that impose real burden for little benefit.') +
        bigCheck('valueCustom', 'Something else', 'I want to add my own words.', true) +
        '</div>' +
        (answers.valueCustom ? field('In your own words', textarea('valueCustomText', 'What else matters to you?')) : '');
    },
    goals: function () {
      var h = stepHead('As memory or thinking problems get worse, what’s your overall approach to medical care?', 'You can pick one overall approach, or set it separately for mild, moderate and advanced decline if you’d rather.') +
        cards('approach', [
          ['full', 'Treat everything, at every stage', 'Medical care generally aimed at prolonging life, whatever stage I’m in.'],
          ['balanced', 'Balance treatment with comfort as it gets worse', 'Treat illness early on; as decline becomes more severe, shift the focus toward comfort. This is what most people choose.'],
          ['comfort', 'Comfort first, from the start', 'Comfort and quality of life come first, even at a mild stage.']
        ]);
      h += '<label class="check" style="margin-top:16px"><input type="checkbox" data-k="customizeStages"' + (answers.customizeStages ? ' checked' : '') + ' data-rerender><span>Set this separately for mild, moderate and advanced decline</span></label>';
      if (answers.customizeStages) {
        var goalOpts = [['FULL_TREATMENT', GOAL_LABELS.FULL_TREATMENT], ['SELECTIVE_TREATMENT', GOAL_LABELS.SELECTIVE_TREATMENT], ['COMFORT_FOCUSED', GOAL_LABELS.COMFORT_FOCUSED]];
        var m = APPROACH_MAP[answers.approach] || {};
        function stageField(key, label, desc) {
          if (!answers[key]) answers[key] = m[{ mildGoal: 'mild', moderateGoal: 'moderate', advancedGoal: 'advanced' }[key]] || '';
          return field(label, '<select class="input" data-k="' + key + '">' + goalOpts.map(function (o) { return '<option value="' + o[0] + '"' + (answers[key] === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select>', desc);
        }
        h += stageField('mildGoal', 'Mild cognitive decline', 'Noticeable memory or reasoning problems, but I can still communicate and take part in decisions.') +
          stageField('moderateGoal', 'Moderate cognitive decline', 'I need substantial help with daily activities and may be confused in unfamiliar settings.') +
          stageField('advancedGoal', 'Advanced cognitive decline', 'I am profoundly impaired and depend on others for most or all personal care.');
      }
      return h;
    },
    choices: function () {
      return stepHead('A few practical choices', 'These give your health-care agent and care team more specific guidance. Each is optional to answer, but we recommend making a choice.') +
        field('If cognitive decline makes unfamiliar settings especially hard, how do you feel about hospital transfers?', cards('hospitalization', [
          ['beneficial', 'Hospitalize when it helps', 'Permit hospital transfer when my agent and treating professionals believe it’s likely to meaningfully help.'],
          ['limit', 'Treat me where I am when possible', 'Prefer treatment in my current residence or care setting, and avoid transfers likely to cause distress or disorientation for limited benefit.']
        ])) +
        field('How should infections generally be treated?', cards('infection', [
          ['ordinary', 'Ordinary treatment', 'Treat infections normally whenever medically appropriate.'],
          ['selective', 'Treat when it helps', 'Treat infections when it’s likely to improve comfort or restore function; my agent may decline treatment that would mainly prolong dying.'],
          ['comfort', 'Comfort only once advanced', 'During advanced decline, focus on comfort and symptom relief rather than treating infections to prolong life.']
        ])) +
        field('Would you like your agent to consider discussing a POLST or similar medical order with your clinician if appropriate?', pills('polst', [['yes', 'Yes'], ['no', 'No']]), 'A POLST (or MOLST/POST) is a medical order completed with a clinician, not an estate-planning document.');
    },
    setting: function () {
      return stepHead('Where you’d prefer to live and be cared for', 'This records a preference. It doesn’t require anyone to provide care that isn’t safe or available.') +
        '<div class="checks big">' +
        bigCheck('homePref', 'Stay home as long as possible', 'I prefer to remain at home, or somewhere just as familiar, for as long as my needs can be safely met there.') +
        bigCheck('memoryCareOk', 'Care facilities are okay if needed', 'I accept assisted living, memory care, or skilled nursing when reasonably necessary for safety or care.') +
        '</div>' +
        field('Anything else — people, routines, activities, faith, culture, pets — you’d especially want preserved?', textarea('routinesText', 'For example: my dog, Sunday church, listening to jazz...'), 'Optional. Helps future caregivers understand what makes daily life feel familiar and comforting to you.');
    },
    more: function () {
      return stepHead('Anything else for your health-care agent?', 'Both of these are optional. Your health-care directive already covers the legally operative instructions on feeding tubes and life support — use these only to add dementia-specific guidance.') +
        field('Guidance about feeding tubes or artificial hydration, specific to advanced cognitive decline', textarea('anhText', 'Optional additional guidance...')) +
        field('Guidance about surgery, intensive care, or other burdensome treatment', textarea('burdensomeText', 'Optional additional guidance...'));
    },
    review: function () {
      var v = buildVarsDementia(answers, states, tpl.settings);
      var instr = toHtml(renderNodes(sign.nodes, v), 'signing').replace(/<span class="(?:fill|blank)">/g, '<span>');
      function row(label, value, goto) {
        return '<div class="sum-row"><div><span class="sum-l">' + label + '</span><span class="sum-v">' + (value || '<em>Not answered</em>') + '</span></div><button type="button" class="link" data-goto="' + goto + '">Change</button></div>';
      }
      var approachLabel = { full: 'Treat everything, at every stage', balanced: 'Balance treatment with comfort as it gets worse', comfort: 'Comfort first, from the start' }[answers.approach];
      return stepHead('Your care preferences are ready to review', 'Read every word. Then print it and attach it to your health-care directive.') +
        '<div class="sum">' +
        row('Name', esc(v.name), 'start') +
        row('State', esc(v.state), 'start') +
        row('Overall approach', esc(approachLabel || ''), 'goals') +
        row('Hospital transfer', answers.hospitalization === 'beneficial' ? 'Hospitalize when it helps' : (answers.hospitalization === 'limit' ? 'Treat me where I am when possible' : ''), 'choices') + '</div>' +
        '<div class="actions">' +
        '<button type="button" class="btn btn-primary" data-pdf>Download PDF</button>' +
        '<button type="button" class="btn btn-secondary" data-word>Download for Word</button>' +
        '<button type="button" class="btn btn-secondary" data-print>Print</button>' +
        '<button type="button" class="btn btn-secondary see-doc" data-pane="p">View your document</button></div>' +
        '<p class="hint export-status" id="export-status" role="status">The PDF and Word files have “Page X of Y” at the bottom of every page.</p>' +
        (draft ? '<p class="draft-inline">This is a sample version, so it can’t be signed yet.</p>' : '') +
        '<div class="instr">' + instr + '</div>' +
        '<p class="reset"><button type="button" class="link" data-reset>Start over</button></p>';
    }
  };
  function validateDementia(id) {
    var a = answers, e = [];
    if (id === 'start') {
      if (clean(a.name).length < 2) e.push('Enter your full legal name.');
      if (!a.state) e.push('Choose your state.');
      if (!a.capableOk) e.push('Confirm that you are 18 or older and acting of your own free will.');
    } else if (id === 'goals') {
      if (!a.approach) e.push('Choose an overall approach to care.');
    } else if (id === 'choices') {
      if (!a.hospitalization) e.push('Choose a hospital-transfer preference.');
      if (!a.infection) e.push('Choose how infections should generally be treated.');
    }
    return e;
  }

  /* ================= ADVANCE HEALTH CARE DIRECTIVE =================
     Each state has its own file (will/hcd/alabama.js and so on) with your state document word for word.
     The page loads only the file for the state that was chosen. Counties come from will/counties.js. */
  var EMPTY_HCD = {
    state: '', ageOk: false, freeOk: false,
    name: '', dob: '', phone: '', address: '',
    agent: '', agentPhone: '', agentEmail: '',
    agentMode: 'single', coAgents: [{ name: '', phone: '', email: '' }],
    successors: [{ name: '', phone: '', email: '' }],
    lifeSupport: '', nutrition: '', hydration: '',
    anatomicalGift: '', anatomicalGiftText: '',
    valuesYes: '', valuesText: '', limitationsYes: '', limitationsText: '', additionalYes: '', additionalText: '',
    caSkilledNursing: '', ctDmhas: '', ctDds: '', ctPregnancy: '', ctPregnancyText: '',
    azUnableToSign: '', azPsychAdmission: '', azFuneralAuthority: '', neSecondPhysician: '', ohUnconsciousAnh: '',
    signingCounty: '', signingDate: '', execRoute: ''
  };
  var ROWS_HCD = { successors: { name: '', phone: '', email: '' }, coAgents: { name: '', phone: '', email: '' } };
  var HCD_CACHE = {}, HCD_FAIL = {}, HCD_PENDING = {};
  function hcdSlug(n) { return String(n).toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, ''); }
  function hcdLoad(name, done) {
    if (!name || HCD_CACHE[name] || HCD_FAIL[name]) { if (done) done(); return; }
    var have = (window.HCD_STATES || {})[name];
    if (have) { HCD_CACHE[name] = parseTemplate(have); if (done) done(); return; }
    if (HCD_PENDING[name]) { HCD_PENDING[name].push(done); return; }
    HCD_PENDING[name] = [done];
    var s = document.createElement('script');
    function fin() {
      var raw = (window.HCD_STATES || {})[name];
      if (raw) HCD_CACHE[name] = parseTemplate(raw); else HCD_FAIL[name] = true;
      var cbs = HCD_PENDING[name]; delete HCD_PENDING[name];
      cbs.forEach(function (f) { if (f) f(); });
    }
    s.src = 'will/hcd/' + hcdSlug(name) + '.js';
    s.onload = fin; s.onerror = fin;
    document.head.appendChild(s);
  }
  function hcdSet(a, key) { var t = HCD_CACHE[a.state]; return t ? t.settings[key] : undefined; }
  function hcdAskAny(a) {
    return ['ca_skilled_nursing', 'ct_dmhas', 'ct_dds', 'ct_pregnancy', 'az_unable_to_sign', 'az_psych_admission',
      'az_funeral_authority', 'ne_second_physician', 'oh_unconscious_anh'].some(function (f) { return hcdSet(a, 'ask_' + f) === 'yes'; });
  }
  var STEPS_HCD = [
    { id: 'start', label: 'Where you live' },
    { id: 'about', label: 'About you' },
    { id: 'agent', label: 'Your health care agent' },
    { id: 'successor', label: 'Successor agent' },
    { id: 'treatment', label: 'Life-sustaining treatment' },
    { id: 'nutrition', label: 'Nutrition and hydration' },
    { id: 'gifts', label: 'Anatomical gifts' },
    { id: 'guidance', label: 'Additional guidance' },
    { id: 'special', label: 'One more thing', show: function (a) { return hcdAskAny(a); } },
    { id: 'signing', label: 'Signing' },
    { id: 'review', label: 'Review and sign' }
  ];
  function countySelect(k, disabledHint) {
    var abbr = (window.HCD_STATE_ABBR || {})[answers.state];
    var list = (window.HCD_COUNTY_DATA || {})[abbr] || [];
    if (!list.length) return '<select class="input" data-k="' + k + '" disabled><option>' + esc(disabledHint || 'Choose your state first') + '</option></select>';
    var opts = '<option value="">Choose your county</option>' + list.map(function (c) {
      var label = c.replace(/ County$/, '');
      return '<option value="' + esc(c) + '"' + (answers[k] === c ? ' selected' : '') + '>' + esc(label) + '</option>';
    }).join('');
    return '<select class="input" data-k="' + k + '">' + opts + '</select>';
  }
  function buildVarsHCD(a, states, settings) {
    var v = {}, st = states.map[a.state] || null;
    v.name = clean(a.name); v.name_caps = v.name.toUpperCase();
    v.dob = clean(a.dob); v.phone = clean(a.phone); v.address = clean(a.address);
    v.state = st ? st.name : '';
    v.county = clean(a.signingCounty).replace(/\s+county$/i, '');
    v.agent = clean(a.agent);
    v.agent_contact = [clean(a.agentPhone), clean(a.agentEmail)].filter(Boolean).join(' | ');
    v.successors = (a.successors || []).map(function (x) {
      return { successor: clean(x.name), successor_contact: [clean(x.phone), clean(x.email)].filter(Boolean).join(' | ') };
    }).filter(function (x) { return x.successor; });
    v.has_successors = v.successors.length > 0;
    coAgentVars(a, v);
    v.life_support = a.lifeSupport; v.nutrition = a.nutrition; v.hydration = a.hydration;
    v.anatomical_gift = a.anatomicalGift; v.anatomical_gift_text = clean(a.anatomicalGiftText);
    v.values_instructions = (a.valuesYes === 'yes' && clean(a.valuesText)) ? 'YES' : 'NO'; v.values_instructions_text = clean(a.valuesText);
    v.agent_limitations = (a.limitationsYes === 'yes' && clean(a.limitationsText)) ? 'YES' : 'NO'; v.agent_limitations_text = clean(a.limitationsText);
    v.additional_instructions = (a.additionalYes === 'yes' && clean(a.additionalText)) ? 'YES' : 'NO'; v.additional_instructions_text = clean(a.additionalText);
    v.has_custom_instructions = v.values_instructions === 'YES' || v.agent_limitations === 'YES' || v.additional_instructions === 'YES';
    v.ca_skilled_nursing = a.caSkilledNursing === 'yes';
    v.ct_dmhas = a.ctDmhas === 'yes'; v.ct_dds = a.ctDds === 'yes';
    v.ct_pregnancy = a.ctPregnancy; v.ct_pregnancy_text = clean(a.ctPregnancyText);
    v.az_unable_to_sign = a.azUnableToSign === 'yes'; v.az_psych_admission = a.azPsychAdmission === 'yes'; v.az_funeral_authority = a.azFuneralAuthority === 'yes';
    v.ne_second_physician = a.neSecondPhysician === 'yes'; v.oh_unconscious_anh = a.ohUnconsciousAnh === 'yes';
    v.sc_optional_notary = true;
    var choice = hcdSet(a, 'exec_choice') === 'yes';
    v.exec_route = choice ? a.execRoute : hcdSet(a, 'exec_route_default');
    v.exec_choice = choice; v.has_witness = hcdSet(a, 'has_witness') === 'yes'; v.has_notary = hcdSet(a, 'has_notary') === 'yes';
    v.state_note = st ? st.note : '';
    return v;
  }
  var HCD_ROUTE_LABELS = { WITNESSES: 'Two witnesses', WITNESS: 'One witness', NOTARY: 'A notary public', NOTARY_OR_JUSTICE_OF_PEACE: 'A notary public or justice of the peace', ACKNOWLEDGMENT: 'Notarized acknowledgment' };
  var RENDER_HCD = {
    start: function () {
      var opts = '<option value="">Choose your state</option>' + states.list.map(function (s) {
        return '<option value="' + esc(s.name) + '"' + (answers.state === s.name ? ' selected' : '') + '>' + esc(s.name) + '</option>';
      }).join('');
      return stepHead('First, where do you live?', 'A health care directive is governed by your state’s law, and the wording your state requires is different from every other state’s.') +
        field('State where you live', '<select class="input" data-k="state" data-rerender>' + opts + '</select>') +
        '<div class="checks">' +
        '<label class="check"><input type="checkbox" data-k="ageOk"' + (answers.ageOk ? ' checked' : '') + '><span>I am 18 or older.</span></label>' +
        '<label class="check"><input type="checkbox" data-k="freeOk"' + (answers.freeOk ? ' checked' : '') + '><span>I am making this document of my own free will.</span></label>' +
        '</div>';
    },
    about: function () {
      return stepHead('About you', 'This information identifies you on the document.') +
        field('Your full legal name', text('name', 'For example, Maria Elena Alvarez', { auto: 'name' })) +
        field('Date of birth', '<input class="input" type="date" data-k="dob" value="' + val(answers.dob) + '">') +
        field('Phone', text('phone', '', { auto: 'tel' })) +
        field('Home address', textarea('address', 'Street, city, state, ZIP'));
    },
    agent: function () {
      return stepHead('Who should make health care decisions for you?', 'Your health care agent can see your medical information and make treatment decisions if you’re unable to. Choose someone you trust completely.') +
        field('Your agent’s full name', text('agent', '')) +
        field('Agent’s phone', text('agentPhone', '', { auto: 'tel' })) +
        field('Agent’s email (optional)', text('agentEmail', '', { auto: 'email' })) +
        coAgentFields(true);
    },
    successor: function () {
      return stepHead('Backup agents', 'If your first choice can’t serve, the first backup takes over, then the next. This is optional but recommended.') +
        field('Backups', '<div class="rowset">' + answers.successors.map(function (b, i) {
          return '<div class="ben"><input class="input" data-list="successors" data-i="' + i + '" data-f="name" value="' + val(b.name) + '" placeholder="Backup ' + (i + 1) + ' full name" aria-label="Backup ' + (i + 1) + ' full name">' +
            '<input class="input" type="tel" data-list="successors" data-i="' + i + '" data-f="phone" value="' + val(b.phone) + '" placeholder="Phone" aria-label="Backup ' + (i + 1) + ' phone">' +
            '<input class="input" type="email" data-list="successors" data-i="' + i + '" data-f="email" value="' + val(b.email) + '" placeholder="Email (optional)" aria-label="Backup ' + (i + 1) + ' email">' +
            rm('successors', i, 'backup ' + (i + 1), answers.successors.length > 0) + '</div>';
        }).join('') + '</div>' + addBtn('successors', '+ Add another backup'));
    },
    treatment: function () {
      return stepHead('If you had a condition your directive covers, what should happen with life-sustaining treatment?', 'This is the central choice in your directive. “Life-sustaining treatment” means medical care that would sustain or prolong life, such as a ventilator, CPR, or dialysis.') +
        cards('lifeSupport', [
          ['DO_NOT_PROLONG', 'Let me go naturally', 'If I have an incurable or irreversible condition, am permanently unconscious, or am otherwise covered by my directive, I want to be allowed to die naturally, with comfort care.'],
          ['PROLONG', 'Prolong my life', 'I want medically appropriate life-sustaining treatment provided and continued, regardless of my condition or chance of recovery.'],
          ['AGENT_DECIDES', 'Let my agent decide', 'I want my health care agent to make this decision at the time, guided by my values and the standards in my directive.']
        ]);
    },
    nutrition: function () {
      return stepHead('Artificial nutrition and hydration', 'These are treated separately from other life-sustaining treatment: a feeding tube (nutrition) and IV fluids (hydration).') +
        field('Artificial nutrition (a feeding tube)', cards('nutrition', [
          ['WITHHOLD_WITHDRAW', 'Withhold or withdraw', 'Under the circumstances I selected above for life-sustaining treatment.'],
          ['CONTINUE', 'Provide or continue', 'Provide artificial nutrition even if other life-sustaining treatment is withheld.'],
          ['AGENT_DECIDES', 'Let my agent decide', '']
        ])) +
        field('Artificial hydration (IV fluids)', cards('hydration', [
          ['WITHHOLD_WITHDRAW', 'Withhold or withdraw', 'Under the circumstances I selected above for life-sustaining treatment.'],
          ['CONTINUE', 'Provide or continue', 'Provide artificial hydration even if other life-sustaining treatment is withheld.'],
          ['AGENT_DECIDES', 'Let my agent decide', '']
        ]));
    },
    gifts: function () {
      var h = stepHead('Anatomical gifts', 'This is about donating your organs and tissue after death. It has nothing to do with your health care agent’s authority while you’re alive.') +
        cards('anatomicalGift', [
          ['YES', 'Yes, I authorize a donation', ''],
          ['AGENT_DECIDES', 'Let my agent decide', ''],
          ['NO', 'No, I do not authorize a donation', '']
        ]);
      if (answers.anatomicalGift === 'YES') h += field('Anything specific about the donation? (optional)', textarea('anatomicalGiftText', 'For example: any organ or tissue needed, or only for transplantation'));
      return h;
    },
    guidance: function () {
      return stepHead('Anything else for your agent?', 'All three of these are optional.') +
        field('Values you want your agent to consider', pills('valuesYes', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.valuesYes === 'yes' ? textarea('valuesText', 'Religious, spiritual, cultural, or personal values...') : '') +
        field('Limits on your agent’s authority', pills('limitationsYes', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.limitationsYes === 'yes' ? textarea('limitationsText', 'For example: my agent may not authorize a specific treatment...') : '') +
        field('Other instructions not covered above', pills('additionalYes', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.additionalYes === 'yes' ? textarea('additionalText', 'Anything else you want in writing...') : '');
    },
    special: function () {
      var h = stepHead(esc(answers.state) + ' asks a few more questions', 'Your state’s document needs this to be complete.');
      if (hcdSet(answers, 'ask_ca_skilled_nursing') === 'yes') h += field('Are you currently a patient or resident in a skilled nursing facility?', pills('caSkilledNursing', [['yes', 'Yes'], ['no', 'No']]), 'California requires an extra witness statement from a patient advocate or ombudsman if so.');
      if (hcdSet(answers, 'ask_ct_dmhas') === 'yes') h += field('Are you currently a resident of a facility run by Connecticut’s Department of Mental Health and Addiction Services (DMHAS)?', pills('ctDmhas', [['yes', 'Yes'], ['no', 'No']]));
      if (hcdSet(answers, 'ask_ct_dds') === 'yes') h += field('Are you currently a resident of a facility run by Connecticut’s Department of Developmental Services (DDS)?', pills('ctDds', [['yes', 'Yes'], ['no', 'No']]));
      if (hcdSet(answers, 'ask_ct_pregnancy') === 'yes') {
        h += field('If you are pregnant when this directive would otherwise apply, what do you want to happen?', cards('ctPregnancy', [
          ['SUPPORT_LIVE_BIRTH', 'Support the pregnancy', 'Accept life-support if it would allow the pregnancy to reach a live birth.'],
          ['APPLY_WITHOUT_MODIFICATION', 'No change', 'Apply my directive without changes, to the extent Connecticut law permits.'],
          ['CUSTOM', 'Write my own instructions', '']
        ]));
        if (answers.ctPregnancy === 'CUSTOM') h += textarea('ctPregnancyText', 'Your instructions...');
      }
      if (hcdSet(answers, 'ask_az_unable_to_sign') === 'yes') h += field('Do you expect you may be physically unable to sign your own name, for example because of a disability?', pills('azUnableToSign', [['yes', 'Yes'], ['no', 'No']]), 'Arizona allows someone else to sign on your behalf, with a witness or notary verifying your wishes, if so.');
      if (hcdSet(answers, 'ask_az_psych_admission') === 'yes') h += field('Do you want to give your agent authority to consent to your admission to an inpatient psychiatric facility, if needed?', pills('azPsychAdmission', [['yes', 'Yes'], ['no', 'No']]));
      if (hcdSet(answers, 'ask_az_funeral_authority') === 'yes') h += field('Do you want to give your agent authority to arrange your funeral, burial, or cremation after your death?', pills('azFuneralAuthority', [['yes', 'Yes'], ['no', 'No']]));
      if (hcdSet(answers, 'ask_ne_second_physician') === 'yes') h += field('Do you want to require a second physician to confirm you lack capacity before your agent can act?', pills('neSecondPhysician', [['yes', 'Yes'], ['no', 'No']]));
      if (hcdSet(answers, 'ask_oh_unconscious_anh') === 'yes') h += field('Ohio law requires you to say this separately: do you want your agent to be able to withhold or withdraw artificial nutrition and hydration if you are permanently unconscious?', pills('ohUnconsciousAnh', [['yes', 'Yes'], ['no', 'No']]));
      return h;
    },
    signing: function () {
      var h = stepHead('Signing', 'This fills in the county on your document’s notary or witness section.') +
        field('County where you’ll sign', countySelect('signingCounty')) +
        field('Signing date', '<input class="input" type="date" data-k="signingDate" value="' + val(answers.signingDate) + '">');
      if (hcdSet(answers, 'exec_choice') === 'yes') {
        var routes = (hcdSet(answers, 'exec_routes') || '').split(',').filter(Boolean);
        h += field('How do you plan to sign?', pills('execRoute', routes.map(function (r) { return [r, HCD_ROUTE_LABELS[r] || r]; })), 'Your state offers more than one way. You can decide for sure when you sit down to sign.');
      }
      return h;
    },
    review: function () {
      var v = buildVarsHCD(answers, states, tpl.settings);
      var instr = toHtml(renderNodes(sign.nodes, v), 'signing').replace(/<span class="(?:fill|blank)">/g, '<span>');
      function row(label, value, goto) {
        return '<div class="sum-row"><div><span class="sum-l">' + label + '</span><span class="sum-v">' + (value || '<em>Not answered</em>') + '</span></div><button type="button" class="link" data-goto="' + goto + '">Change</button></div>';
      }
      return stepHead('Your health care directive is ready to review', 'Read every word. Then print it and follow the signing steps below.') +
        '<div class="sum">' +
        row('State', esc(v.state), 'start') +
        row('Name', esc(v.name), 'about') +
        row('Health care agent', esc(v.agent) + (v.has_co_agents ? ' and ' + esc(v.co_agents.map(function (x) { return x.co_agent; }).join(', ')) + (v.co_separate ? ' (each may act alone)' : ' (must act together)') : ''), 'agent') +
        row('Life-sustaining treatment', { DO_NOT_PROLONG: 'Let me go naturally', PROLONG: 'Prolong my life', AGENT_DECIDES: 'Let my agent decide' }[answers.lifeSupport] || '', 'treatment') + '</div>' +
        '<div class="actions">' +
        '<button type="button" class="btn btn-primary" data-pdf>Download PDF</button>' +
        '<button type="button" class="btn btn-secondary" data-word>Download for Word</button>' +
        '<button type="button" class="btn btn-secondary" data-print>Print</button>' +
        '<button type="button" class="btn btn-secondary see-doc" data-pane="p">View your document</button></div>' +
        '<p class="hint export-status" id="export-status" role="status">The PDF and Word files have “Page X of Y” at the bottom of every page.</p>' +
        (draft ? '<p class="draft-inline">This is a sample version, so it can’t be signed yet.</p>' : '') +
        '<div class="instr">' + instr + '</div>' +
        '<p class="reset"><button type="button" class="link" data-reset>Start over</button></p>';
    }
  };
  function validateHCD(id) {
    var a = answers, e = [], st = states.map[a.state];
    if (id === 'start') {
      if (!st) e.push('Choose your state.');
      else if (!st.supported) e.push(st.note || 'We can’t offer this document in that state yet.');
      if (!a.ageOk) e.push('Confirm that you are 18 or older.');
      if (!a.freeOk) e.push('Confirm that you are making this document of your own free will.');
    } else if (id === 'about') {
      if (clean(a.name).length < 2) e.push('Enter your full legal name.');
      if (clean(a.phone) && !isCompletePhone(a.phone)) e.push('Your phone number looks incomplete.');
    } else if (id === 'agent') {
      if (!clean(a.agent)) e.push('Enter the name of your health care agent.');
      if (clean(a.agentPhone) && !isCompletePhone(a.agentPhone)) e.push('Your agent’s phone number looks incomplete.');
      if (clean(a.agentEmail) && !isCompleteEmail(a.agentEmail)) e.push('Your agent’s email address looks incomplete.');
      if (!a.agentMode) e.push('Answer whether more than one person will serve as your health care agent.');
      coAgentErrors(a, e, true);
    } else if (id === 'successor') {
      (a.successors || []).forEach(function (b, i) {
        var who = clean(b.name) || 'backup ' + (i + 1);
        if (clean(b.phone) && !isCompletePhone(b.phone)) e.push('The phone number for ' + who + ' looks incomplete.');
        if (clean(b.email) && !isCompleteEmail(b.email)) e.push('The email address for ' + who + ' looks incomplete.');
      });
    } else if (id === 'treatment') {
      if (!a.lifeSupport) e.push('Choose your life-sustaining treatment preference.');
    } else if (id === 'nutrition') {
      if (!a.nutrition) e.push('Choose your artificial nutrition preference.');
      if (!a.hydration) e.push('Choose your artificial hydration preference.');
    } else if (id === 'gifts') {
      if (!a.anatomicalGift) e.push('Choose an anatomical-gift preference.');
    } else if (id === 'special') {
      if (hcdSet(a, 'ask_ca_skilled_nursing') === 'yes' && !a.caSkilledNursing) e.push('Answer the skilled-nursing-facility question.');
      if (hcdSet(a, 'ask_ct_dmhas') === 'yes' && !a.ctDmhas) e.push('Answer the DMHAS facility question.');
      if (hcdSet(a, 'ask_ct_dds') === 'yes' && !a.ctDds) e.push('Answer the DDS facility question.');
      if (hcdSet(a, 'ask_ct_pregnancy') === 'yes' && !a.ctPregnancy) e.push('Answer the pregnancy question.');
      if (hcdSet(a, 'ask_az_unable_to_sign') === 'yes' && !a.azUnableToSign) e.push('Answer the signing-ability question.');
      if (hcdSet(a, 'ask_az_psych_admission') === 'yes' && !a.azPsychAdmission) e.push('Answer the psychiatric-admission question.');
      if (hcdSet(a, 'ask_az_funeral_authority') === 'yes' && !a.azFuneralAuthority) e.push('Answer the funeral-authority question.');
      if (hcdSet(a, 'ask_ne_second_physician') === 'yes' && !a.neSecondPhysician) e.push('Answer the second-physician question.');
      if (hcdSet(a, 'ask_oh_unconscious_anh') === 'yes' && !a.ohUnconsciousAnh) e.push('Answer the permanently-unconscious question.');
    } else if (id === 'signing') {
      if (!clean(a.signingCounty)) e.push('Choose the county where you’ll sign.');
      if (hcdSet(a, 'exec_choice') === 'yes' && !a.execRoute) e.push('Choose how you plan to sign.');
    }
    return e;
  }

  /* ---------- HIPAA AUTHORIZATION ---------- */
  var EMPTY_HIPAA = {
    state: '', ageOk: false, freeOk: false,
    name: '', dob: '', address: '',
    recipients: [{ name: '', contact: '' }],
    agentName: '', agentAddress: '', agentContact: '', alt1Name: '', alt2Name: '',
    authPsych: '', psychRecipients: '', psychPurpose: '',
    authPart2: '', part2Recipients: '', part2Purpose: '', part2Expiration: '',
    authPart2Sud: '', part2SudRecipients: '', part2SudPurpose: '',
    authHivSti: '', authMentalHealth: '', authGenetic: '', geneticDescription: '',
    specialtyRecipients: '', specialtyPurpose: '',
    limitations: '',
    expirationType: '', expirationDate: '', expirationEvent: '', expirationText: '',
    signedByRep: '', repName: '', repAuthority: ''
  };
  var ROWS_HIPAA = { recipients: { name: '', contact: '' } };
  var HIPAA_CACHE = {}, HIPAA_FAIL = {}, HIPAA_PENDING = {};
  function hipaaSlug(n) { return String(n).toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, ''); }
  function hipaaLoad(name, done) {
    if (!name || HIPAA_CACHE[name] || HIPAA_FAIL[name]) { if (done) done(); return; }
    var have = (window.HIPAA_STATES || {})[name];
    if (have) { HIPAA_CACHE[name] = parseTemplate(have); if (done) done(); return; }
    if (HIPAA_PENDING[name]) { HIPAA_PENDING[name].push(done); return; }
    HIPAA_PENDING[name] = [done];
    var s = document.createElement('script');
    function fin() {
      var raw = (window.HIPAA_STATES || {})[name];
      if (raw) HIPAA_CACHE[name] = parseTemplate(raw); else HIPAA_FAIL[name] = true;
      var cbs = HIPAA_PENDING[name]; delete HIPAA_PENDING[name];
      cbs.forEach(function (f) { if (f) f(); });
    }
    s.src = 'will/hipaa/' + hipaaSlug(name) + '.js';
    s.onload = fin; s.onerror = fin;
    document.head.appendChild(s);
  }
  function hipaaSet(a, key) { var t = HIPAA_CACHE[a.state]; return t ? t.settings[key] : undefined; }
  function hipaaIsB(a) { return hipaaSet(a, 'format') === 'B'; }
  /* Maine and Massachusetts each ask one extra state-specific question (a separate HIV
     authorization with its own recipient and purpose) -- narrow enough that it isn't worth a
     settings flag of its own; see will/NOTES-ON-YOUR-HIPAA.txt. */
  function hipaaAskSpecialtyPurpose(a) { return a.state === 'Maine' || a.state === 'Massachusetts'; }
  var STEPS_HIPAA = [
    { id: 'start', label: 'Where you live' },
    { id: 'about', label: 'About you' },
    { id: 'recipients', label: 'Who can receive it' },
    { id: 'specialty', label: 'Specially protected records' },
    { id: 'expiration', label: 'How long it lasts' },
    { id: 'signing', label: 'Signing' },
    { id: 'review', label: 'Review and sign' }
  ];
  function buildVarsHipaa(a, states, settings) {
    var v = {}, st = states.map[a.state] || null;
    v.name = clean(a.name); v.name_caps = v.name.toUpperCase();
    v.dob = clean(a.dob); v.address = clean(a.address);
    v.state = st ? st.name : '';
    v.recipients = (a.recipients || []).map(function (r) {
      var contact = clean(r.contact);
      return { recip_name: clean(r.name), recip_contact: contact, recip_has_contact: !!contact };
    }).filter(function (r) { return r.recip_name; });
    v.agent_name = clean(a.agentName); v.agent_address = clean(a.agentAddress); v.agent_contact = clean(a.agentContact);
    v.alt1_name = clean(a.alt1Name); v.has_alt1 = !!v.alt1_name;
    v.alt2_name = clean(a.alt2Name); v.has_alt2 = !!v.alt2_name;
    v.authorize_psychotherapy = a.authPsych === 'yes';
    v.psych_recipients = clean(a.psychRecipients); v.psych_purpose = clean(a.psychPurpose);
    v.authorize_part2 = a.authPart2 === 'yes';
    v.part2_recipients = clean(a.part2Recipients); v.part2_purpose = clean(a.part2Purpose); v.part2_expiration = clean(a.part2Expiration);
    v.authorize_part2_sud_notes = a.authPart2Sud === 'yes';
    v.part2_sud_recipients = clean(a.part2SudRecipients); v.part2_sud_purpose = clean(a.part2SudPurpose);
    v.authorize_hiv_sti = a.authHivSti === 'yes';
    v.authorize_mental_health = a.authMentalHealth === 'yes';
    v.authorize_genetic = a.authGenetic === 'yes'; v.genetic_description = clean(a.geneticDescription);
    v.specialty_recipients = clean(a.specialtyRecipients); v.specialty_purpose = clean(a.specialtyPurpose);
    v.limitations = clean(a.limitations);
    v.expiration_type = a.expirationType; v.expiration_date = a.expirationDate ? longDate(a.expirationDate) : '';
    v.expiration_event = clean(a.expirationEvent); v.expiration_text = clean(a.expirationText);
    v.signed_by_rep = a.signedByRep === 'yes'; v.rep_name = clean(a.repName); v.rep_authority = clean(a.repAuthority);
    return v;
  }
  var RENDER_HIPAA = {
    start: function () {
      var opts = '<option value="">Choose your state</option>' + states.list.map(function (s) {
        return '<option value="' + esc(s.name) + '"' + (answers.state === s.name ? ' selected' : '') + '>' + esc(s.name) + '</option>';
      }).join('');
      return stepHead('First, where do you live?', 'A HIPAA authorization is governed by your state’s law as well as federal law, and a few states ask for more than HIPAA alone requires.') +
        field('State where you live', '<select class="input" data-k="state" data-rerender>' + opts + '</select>') +
        '<div class="checks">' +
        '<label class="check"><input type="checkbox" data-k="ageOk"' + (answers.ageOk ? ' checked' : '') + '><span>I am 18 or older.</span></label>' +
        '<label class="check"><input type="checkbox" data-k="freeOk"' + (answers.freeOk ? ' checked' : '') + '><span>I am making this authorization of my own free will.</span></label>' +
        '</div>';
    },
    about: function () {
      var h = stepHead('About you', 'This information identifies you on the document.') +
        field('Your full legal name', text('name', 'For example, Maria Elena Alvarez', { auto: 'name' }));
      if (hipaaIsB(answers)) {
        h += field('Date of birth', '<input class="input" type="date" data-k="dob" value="' + val(answers.dob) + '">') +
          field('Home address', textarea('address', 'Street, city, state, ZIP'));
      }
      return h;
    },
    recipients: function () {
      if (hipaaIsB(answers)) {
        return stepHead('Who can receive your health information?', 'Your state’s document ties this authorization to your health care agent.') +
          field('Primary recipient / health care agent', text('agentName', '')) +
          field('Agent’s address', text('agentAddress', '')) +
          field('Agent’s phone or email', text('agentContact', '')) +
          field('Alternate recipient/agent (optional)', text('alt1Name', '')) +
          field('Second alternate recipient/agent (optional)', text('alt2Name', ''));
      }
      var rows = '<div class="rowset">' + answers.recipients.map(function (r, i) {
        return '<div class="rowitem two">' +
          '<input class="input" data-list="recipients" data-i="' + i + '" data-f="name" value="' + val(r.name) + '" placeholder="Name, or a class such as ‘my physicians’" aria-label="Recipient ' + (i + 1) + ' name">' +
          '<input class="input" data-list="recipients" data-i="' + i + '" data-f="contact" value="' + val(r.contact) + '" placeholder="Contact information (optional)" aria-label="Recipient ' + (i + 1) + ' contact">' +
          rm('recipients', i, 'recipient ' + (i + 1), answers.recipients.length > 1) + '</div>';
      }).join('') + '</div>';
      return stepHead('Who can receive your health information?', 'List every person, or class of people (such as “my adult children”), you want authorized to receive it.') +
        field('Recipients', rows + addBtn('recipients', '+ Add another recipient'));
    },
    specialty: function () {
      if (hipaaIsB(answers)) {
        return stepHead('Any limits on this authorization?', 'Your state’s document leaves this open-ended. Leave it blank for the broadest authorization the law allows.') +
          field('Limitations (optional)', textarea('limitations', 'For example: does not include psychotherapy notes'));
      }
      var h = stepHead('A few specially protected kinds of records', 'Federal and state law treat these as more sensitive, so HIPAA requires a separate, specific authorization for each one you want included.') +
        field('Include psychotherapy notes?', pills('authPsych', [['yes', 'Yes'], ['no', 'No']], true));
      if (answers.authPsych === 'yes') h += field('Recipient(s) for psychotherapy notes', text('psychRecipients', '')) + field('Purpose', text('psychPurpose', ''));
      h += field('Include substance use disorder records (42 C.F.R. Part 2)?', pills('authPart2', [['yes', 'Yes'], ['no', 'No']], true));
      if (answers.authPart2 === 'yes') {
        h += field('Recipient(s) or class of recipients', text('part2Recipients', '')) +
          field('Purpose', text('part2Purpose', '')) +
          field('Expiration date or event (optional)', text('part2Expiration', '')) +
          field('Also include separate SUD counseling notes?', pills('authPart2Sud', [['yes', 'Yes'], ['no', 'No']], true));
        if (answers.authPart2Sud === 'yes') h += field('Recipient(s) for SUD counseling notes', text('part2SudRecipients', '')) + field('Purpose', text('part2SudPurpose', ''));
      }
      if (hipaaSet(answers, 'ask_hiv_sti') === 'yes') {
        h += field('Include HIV or sexually transmitted infection records?', pills('authHivSti', [['yes', 'Yes'], ['no', 'No']], true));
        if (answers.authHivSti === 'yes' && hipaaAskSpecialtyPurpose(answers)) {
          h += field('Recipient(s) for this specific HIV authorization', text('specialtyRecipients', '')) + field('Purpose', text('specialtyPurpose', ''));
        }
      }
      if (hipaaSet(answers, 'ask_mental_health') === 'yes') h += field('Include mental health records?', pills('authMentalHealth', [['yes', 'Yes'], ['no', 'No']], true));
      if (hipaaSet(answers, 'ask_genetic') === 'yes') {
        h += field('Include genetic information?', pills('authGenetic', [['yes', 'Yes'], ['no', 'No']], true));
        if (answers.authGenetic === 'yes') h += field('Describe the genetic information', text('geneticDescription', ''));
      }
      return h;
    },
    expiration: function () {
      if (hipaaIsB(answers)) {
        return stepHead('How long should this last?', 'Leave this blank and it stays in effect for as long as the law allows.') +
          field('Expiration date or event (optional)', text('expirationText', 'For example: one year from signing, or a specific date'));
      }
      var h = stepHead('How long should this authorization last?', '') +
        field('Choose one', pills('expirationType', [
          ['DATE', 'Until a specific date'],
          ['EVENT', 'Until a specific event'],
          ['DEATH_PLUS_ADMINISTRATION', 'For my lifetime, and as long as needed to administer my affairs after I die']
        ], true));
      if (answers.expirationType === 'DATE') h += field('Expiration date', '<input class="input" type="date" data-k="expirationDate" value="' + val(answers.expirationDate) + '">');
      if (answers.expirationType === 'EVENT') h += field('Expiration event', text('expirationEvent', 'For example: revocation of my health care directive'));
      return h;
    },
    signing: function () {
      return stepHead('Signing', '') +
        field('Will someone sign this on your behalf, as your legally authorized representative?', pills('signedByRep', [['yes', 'Yes'], ['no', 'No']], true));
      },
    review: function () {
      var v = buildVarsHipaa(answers, states, tpl.settings);
      var instr = toHtml(renderNodes(sign.nodes, v), 'signing').replace(/<span class="(?:fill|blank)">/g, '<span>');
      function row(label, value, goto) {
        return '<div class="sum-row"><div><span class="sum-l">' + label + '</span><span class="sum-v">' + (value || '<em>Not answered</em>') + '</span></div><button type="button" class="link" data-goto="' + goto + '">Change</button></div>';
      }
      return stepHead('Your HIPAA authorization is ready to review', 'Read every word. Then print it and sign it — no witness or notary is required.') +
        '<div class="sum">' +
        row('State', esc(v.state), 'start') +
        row('Name', esc(v.name), 'about') +
        row('Recipients', hipaaIsB(answers) ? esc(v.agent_name) : v.recipients.map(function (r) { return esc(r.recip_name); }).join(', '), 'recipients') + '</div>' +
        '<div class="actions">' +
        '<button type="button" class="btn btn-primary" data-pdf>Download PDF</button>' +
        '<button type="button" class="btn btn-secondary" data-word>Download for Word</button>' +
        '<button type="button" class="btn btn-secondary" data-print>Print</button>' +
        '<button type="button" class="btn btn-secondary see-doc" data-pane="p">View your document</button></div>' +
        '<p class="hint export-status" id="export-status" role="status">The PDF and Word files have “Page X of Y” at the bottom of every page.</p>' +
        (draft ? '<p class="draft-inline">This is a sample version, so it can’t be signed yet.</p>' : '') +
        '<div class="instr">' + instr + '</div>' +
        '<p class="reset"><button type="button" class="link" data-reset>Start over</button></p>';
    }
  };
  function validateHipaa(id) {
    var a = answers, e = [], st = states.map[a.state];
    if (id === 'start') {
      if (!st) e.push('Choose your state.');
      else if (!st.supported) e.push(st.note || 'We can’t offer this document in that state yet.');
      if (!a.ageOk) e.push('Confirm that you are 18 or older.');
      if (!a.freeOk) e.push('Confirm that you are making this document of your own free will.');
    } else if (id === 'about') {
      if (clean(a.name).length < 2) e.push('Enter your full legal name.');
    } else if (id === 'recipients') {
      if (hipaaIsB(a)) { if (!clean(a.agentName)) e.push('Enter who should receive your health information.'); }
      else if (!(a.recipients || []).some(function (r) { return clean(r.name); })) e.push('Add at least one recipient.');
    } else if (id === 'specialty') {
      if (!hipaaIsB(a)) {
        if (a.authPsych === 'yes' && !clean(a.psychRecipients)) e.push('Enter who should receive your psychotherapy notes.');
        if (a.authPart2 === 'yes' && !clean(a.part2Recipients)) e.push('Enter who should receive your substance use disorder records.');
      }
    } else if (id === 'expiration') {
      if (!hipaaIsB(a)) {
        if (!a.expirationType) e.push('Choose how long this authorization should last.');
        if (a.expirationType === 'DATE' && !a.expirationDate) e.push('Enter the expiration date.');
        if (a.expirationType === 'EVENT' && !clean(a.expirationEvent)) e.push('Enter the expiration event.');
      }
    } else if (id === 'signing') {
      if (a.signedByRep === 'yes' && !clean(a.repName)) e.push('Enter the name of your legally authorized representative.');
    }
    return e;
  }

  /* ---------- REVOCABLE LIVING TRUST (single trustmaker) ---------- */
  var EMPTY_TRUST = {
    state: '', ageOk: false, freeOk: false,
    trustName: '', trustType: 'NEW', origTrustName: '', origTrustDate: '',
    name: '',
    maritalStatus: '', spouse: '', partner: '',
    children: [{ name: '' }],
    excluded: [{ name: '', relationship: '' }],
    trusteeMode: 'SUCCESSIVE', successors: [{ name: '' }], cotrustees: [{ name: '' }],
    poaReservedPowers: '',
    gifts: [{ description: '', beneficiary: '', contingent: 'DESCENDANTS', contingentName: '' }],
    residuary: [{ name: '', pct: '' }],
    assetRealProperty: '', realProperty: [{ address: '', ownership: '', countyState: '', deedReference: '' }],
    assetBank: '', bankAccounts: [{ institution: '', type: '', last4: '', ownership: '' }],
    assetBrokerage: '', brokerageAccounts: [{ institution: '', type: '', last4: '', ownership: '' }],
    assetBusiness: '', businessInterests: [{ name: '', interest: '', state: '', ownership: '' }],
    assetTangible: '',
    signingCounty: '', signingDate: ''
  };
  var ROWS_TRUST = {
    children: { name: '' }, excluded: { name: '', relationship: '' },
    successors: { name: '' }, cotrustees: { name: '' },
    gifts: { description: '', beneficiary: '', contingent: 'DESCENDANTS', contingentName: '' },
    residuary: { name: '', pct: '' },
    realProperty: { address: '', ownership: '', countyState: '', deedReference: '' },
    bankAccounts: { institution: '', type: '', last4: '', ownership: '' },
    brokerageAccounts: { institution: '', type: '', last4: '', ownership: '' },
    businessInterests: { name: '', interest: '', state: '', ownership: '' }
  };
  function trustSlug(n) { return String(n).toUpperCase().replace(/\s+/g, '_').replace(/_OF_/g, '_'); }
  var TRUST_WITNESS_STATES = { Florida: true, Delaware: true };
  var STEPS_TRUST = [
    { id: 'start', label: 'Where you live' },
    { id: 'about', label: 'About you' },
    { id: 'family', label: 'Family' },
    { id: 'trustee', label: 'Successor trustee' },
    { id: 'powers', label: 'While you’re incapacitated' },
    { id: 'gifts', label: 'Specific gifts' },
    { id: 'residuary', label: 'Everything else' },
    { id: 'assets', label: 'Trust property' },
    { id: 'signing', label: 'Signing' },
    { id: 'review', label: 'Review and sign' }
  ];
  function buildVarsTrust(a, states, settings) {
    var v = {}, st = states.map[a.state] || null;
    v.name = clean(a.name); v.name_caps = v.name.toUpperCase();
    v.state = st ? st.name : '';
    /* the document text adds its own "County"/"Parish" word around this -- strip a trailing one
       off if someone typed it themselves (e.g. "Orleans Parish"), so it doesn't double up */
    v.county = clean(a.signingCounty).replace(/\s+(county|parish)$/i, '');
    v.signing_date = a.signingDate ? longDate(a.signingDate) : '';
    v.signing_state = v.state ? trustSlug(v.state) : '';
    v.trust_name = clean(a.trustName) || (v.name ? v.name + ' Living Trust' : '');
    /* the title line already says "TRUST AGREEMENT FOR" -- add "THE" only when the name someone
       typed doesn't already start with it themselves (e.g. "The Smith Family Trust"), so the title
       never reads "...FOR THE THE Smith..." and never reads "...FOR Smith..." either */
    v.trust_starts_with_the = /^the\s/i.test(v.trust_name) ? 'YES' : 'NO';
    v.trust_type = a.trustType === 'RESTATEMENT' ? 'RESTATEMENT' : 'NEW';
    v.orig_trust_name = clean(a.origTrustName); v.orig_trust_date = a.origTrustDate ? longDate(a.origTrustDate) : '';
    v.marital_status = a.maritalStatus === 'MARRIED' ? 'MARRIED' : (a.maritalStatus === 'PARTNER' ? 'PARTNER' : 'UNMARRIED');
    v.spouse = clean(a.spouse); v.partner = clean(a.partner);
    v.is_married = v.marital_status !== 'UNMARRIED';
    v.children = (a.children || []).map(function (c) { return { child: clean(c.name) }; }).filter(function (c) { return c.child; });
    v.has_children = v.children.length > 0;
    v.excluded = (a.excluded || []).map(function (x) { return { excluded_name: clean(x.name), excluded_relationship: clean(x.relationship) }; }).filter(function (x) { return x.excluded_name; });
    v.has_excluded = v.excluded.length > 0;
    v.trustee_mode = a.trusteeMode === 'COTRUSTEES' ? 'COTRUSTEES' : 'SUCCESSIVE';
    v.is_cotrustees = v.trustee_mode === 'COTRUSTEES';
    v.successors = (a.successors || []).map(function (s) { return { successor: clean(s.name) }; }).filter(function (s) { return s.successor; });
    v.cotrustees = (a.cotrustees || []).map(function (s) { return { cotrustee: clean(s.name) }; }).filter(function (s) { return s.cotrustee; });
    v.poa_reserved_powers = a.poaReservedPowers === 'yes';
    v.gifts = (a.gifts || []).map(function (g) {
      return {
        gift_description: clean(g.description), gift_beneficiary: clean(g.beneficiary),
        gift_contingent: g.contingent || 'DESCENDANTS', gift_contingent_name: clean(g.contingentName)
      };
    }).filter(function (g) { return g.gift_description && g.gift_beneficiary; });
    v.has_gifts = v.gifts.length > 0;
    v.residuary = (a.residuary || []).map(function (r) { return { residuary_name: clean(r.name), residuary_pct: clean(r.pct) }; }).filter(function (r) { return r.residuary_name; });
    v.asset_real_property = a.assetRealProperty === 'yes';
    v.real_property = (a.realProperty || []).map(function (p) {
      return { real_property_address: clean(p.address), real_property_ownership: clean(p.ownership), real_property_county_state: clean(p.countyState), real_property_deed_reference: clean(p.deedReference) };
    }).filter(function (p) { return p.real_property_address; });
    v.asset_bank = a.assetBank === 'yes';
    v.bank_accounts = (a.bankAccounts || []).map(function (p) {
      return { bank_institution: clean(p.institution), bank_type: clean(p.type), bank_last4: clean(p.last4), bank_ownership: clean(p.ownership) };
    }).filter(function (p) { return p.bank_institution; });
    v.asset_brokerage = a.assetBrokerage === 'yes';
    v.brokerage_accounts = (a.brokerageAccounts || []).map(function (p) {
      return { brokerage_institution: clean(p.institution), brokerage_type: clean(p.type), brokerage_last4: clean(p.last4), brokerage_ownership: clean(p.ownership) };
    }).filter(function (p) { return p.brokerage_institution; });
    v.asset_business = a.assetBusiness === 'yes';
    v.business_interests = (a.businessInterests || []).map(function (p) {
      return { business_name: clean(p.name), business_interest: clean(p.interest), business_state: clean(p.state), business_ownership: clean(p.ownership) };
    }).filter(function (p) { return p.business_name; });
    v.asset_tangible = a.assetTangible === 'yes';
    v.has_witness = !!TRUST_WITNESS_STATES[v.state];
    v.state_note = st ? st.note : '';
    return v;
  }
  var GIFT_CONTINGENT_LABELS = { DESCENDANTS: 'To that beneficiary’s descendants', NAMED: 'To another named person', CHARITY: 'To a charity', LAPSE: 'Becomes part of everything else' };
  var RENDER_TRUST = {
    start: function () {
      var opts = '<option value="">Choose your state</option>' + states.list.map(function (s) {
        return '<option value="' + esc(s.name) + '"' + (answers.state === s.name ? ' selected' : '') + '>' + esc(s.name) + '</option>';
      }).join('');
      return stepHead('First, where do you live?', 'This is the state whose law will govern your trust, and where you’ll sign it. Florida and Delaware ask for two witnesses in addition to a notary; every other state asks for a notary only.') +
        field('State', '<select class="input" data-k="state" data-rerender>' + opts + '</select>') +
        field('Name your trust', text('trustName', 'For example, Maria Elena Alvarez Living Trust'), 'You can change this later. Many people use their own name.') +
        field('Is this a brand-new trust, or a restatement of one you already signed?', pills('trustType', [['NEW', 'A new trust'], ['RESTATEMENT', 'A restatement']], true)) +
        (answers.trustType === 'RESTATEMENT' ? field('Name of your original trust', text('origTrustName', '')) + field('Date your original trust was signed', '<input class="input" type="date" data-k="origTrustDate" value="' + val(answers.origTrustDate) + '">') : '') +
        '<div class="checks">' +
        '<label class="check"><input type="checkbox" data-k="ageOk"' + (answers.ageOk ? ' checked' : '') + '><span>I am 18 or older.</span></label>' +
        '<label class="check"><input type="checkbox" data-k="freeOk"' + (answers.freeOk ? ' checked' : '') + '><span>I am creating this trust of my own free will.</span></label>' +
        '</div>';
    },
    about: function () {
      return stepHead('About you', 'You’re the Trustmaker — the person creating the trust.') +
        field('Your full legal name', text('name', 'For example, Maria Elena Alvarez', { auto: 'name' }));
    },
    family: function () {
      var h = stepHead('Your family', '') +
        field('Marital status', pills('maritalStatus', [['UNMARRIED', 'Unmarried'], ['MARRIED', 'Married'], ['PARTNER', 'Registered domestic partner']], true));
      if (answers.maritalStatus === 'MARRIED') h += field('Spouse’s full name', text('spouse', ''));
      if (answers.maritalStatus === 'PARTNER') h += field('Partner’s full name', text('partner', ''));
      h += field('Children', nameRows('children', 'Child', 0) + addBtn('children', '+ Add a child'), 'Leave blank if you have no children.');
      h += field('Anyone you want to intentionally exclude? (optional)', '<div class="rowset">' + answers.excluded.map(function (x, i) {
        return '<div class="rowitem two"><input class="input" data-list="excluded" data-i="' + i + '" data-f="name" value="' + val(x.name) + '" placeholder="Full name">' +
          '<input class="input" data-list="excluded" data-i="' + i + '" data-f="relationship" value="' + val(x.relationship) + '" placeholder="Relationship">' +
          rm('excluded', i, 'excluded person ' + (i + 1), answers.excluded.length > 1) + '</div>';
      }).join('') + '</div>' + addBtn('excluded', '+ Add another'));
      return h;
    },
    trustee: function () {
      var h = stepHead('Who should manage your trust if you can’t?', 'Your successor trustee takes over if you resign, become incapacitated, or die. You are the initial Trustee.') +
        field('If you name more than one, should they serve one at a time, or together?', pills('trusteeMode', [['SUCCESSIVE', 'One at a time'], ['COTRUSTEES', 'Together, as Co-Trustees']], true));
      if (answers.trusteeMode === 'COTRUSTEES') h += field('Co-Trustees', nameRows('cotrustees', 'Co-Trustee', 0) + addBtn('cotrustees', '+ Add another'));
      else h += field('Successor Trustees, in order', nameRows('successors', 'Successor', 0) + addBtn('successors', '+ Add another'));
      return h;
    },
    powers: function () {
      return stepHead('If you become incapacitated', 'You already have full control over your trust while you’re able to manage your own affairs. This is about someone else acting for you if you can’t.') +
        field('If you also sign a power of attorney, should that agent be able to amend, revoke, or restate this trust on your behalf?', pills('poaReservedPowers', [['yes', 'Yes'], ['no', 'No — only I can amend or revoke my trust']], true), 'Most people choose no. Your successor trustee can still manage trust property either way — this is only about changing the trust’s terms.');
    },
    gifts: function () {
      var h = stepHead('Specific gifts', 'Leave specific items or amounts to specific people before everything else is divided. This is optional.') +
        field('Gifts', '<div class="rowset">' + answers.gifts.map(function (g, i) {
          return '<div class="rowitem two"><input class="input" data-list="gifts" data-i="' + i + '" data-f="description" value="' + val(g.description) + '" placeholder="What (e.g., $5,000, or my piano)">' +
            '<input class="input" data-list="gifts" data-i="' + i + '" data-f="beneficiary" value="' + val(g.beneficiary) + '" placeholder="To whom">' +
            rm('gifts', i, 'gift ' + (i + 1), answers.gifts.length > 1) + '</div>';
        }).join('') + '</div>' + addBtn('gifts', '+ Add another gift'), 'If a gift’s recipient doesn’t survive you, it goes to that person’s descendants by default — you can change that per gift below.');
      return h;
    },
    residuary: function () {
      return stepHead('Who gets everything else?', 'After any specific gifts, this is how the rest of your trust is divided.') +
        field('Beneficiaries', '<div class="rowset">' + answers.residuary.map(function (r, i) {
          return '<div class="rowitem two"><input class="input" data-list="residuary" data-i="' + i + '" data-f="name" value="' + val(r.name) + '" placeholder="Full name">' +
            '<input class="input" data-list="residuary" data-i="' + i + '" data-f="pct" value="' + val(r.pct) + '" placeholder="%" inputmode="decimal" style="max-width:90px">' +
            rm('residuary', i, 'beneficiary ' + (i + 1), answers.residuary.length > 1) + '</div>';
        }).join('') + '</div>' + addBtn('residuary', '+ Add another'), 'Percentages should add up to 100%.');
    },
    assets: function () {
      function assetBlock(flagKey, label, listKey, cols, ph) {
        var h = field(label, pills(flagKey, [['yes', 'Yes'], ['no', 'No']], true));
        if (answers[flagKey] === 'yes') {
          h += '<div class="rowset">' + answers[listKey].map(function (row, i) {
            return '<div class="rowitem two">' + cols.map(function (c) {
              return '<input class="input" data-list="' + listKey + '" data-i="' + i + '" data-f="' + c.f + '" value="' + val(row[c.f]) + '" placeholder="' + c.ph + '">';
            }).join('') + rm(listKey, i, label.toLowerCase() + ' ' + (i + 1), answers[listKey].length > 1) + '</div>';
          }).join('') + '</div>' + addBtn(listKey, '+ Add another');
        }
        return h;
      }
      return stepHead('What are you funding your trust with?', 'This becomes Schedule A, your trust’s property list. You can also transfer property to your trust later — listing it here doesn’t replace a deed or account-retitling.') +
        assetBlock('assetRealProperty', 'Real estate', 'realProperty', [{ f: 'address', ph: 'Address' }, { f: 'ownership', ph: 'Ownership (e.g., sole owner)' }]) +
        assetBlock('assetBank', 'Bank or credit union accounts', 'bankAccounts', [{ f: 'institution', ph: 'Institution' }, { f: 'last4', ph: 'Last 4 digits' }]) +
        assetBlock('assetBrokerage', 'Investment or brokerage accounts', 'brokerageAccounts', [{ f: 'institution', ph: 'Institution' }, { f: 'last4', ph: 'Last 4 digits' }]) +
        assetBlock('assetBusiness', 'Business interests', 'businessInterests', [{ f: 'name', ph: 'Business name' }, { f: 'interest', ph: 'Your interest (e.g., 50% member)' }]) +
        field('Household goods and other tangible personal property', pills('assetTangible', [['yes', 'Yes'], ['no', 'No']], true), 'Furniture, jewelry, art, and similar belongings, as a group.');
    },
    signing: function () {
      return stepHead('Signing', '') +
        field('County where you’ll sign', countySelect('signingCounty')) +
        field('Signing date', '<input class="input" type="date" data-k="signingDate" value="' + val(answers.signingDate) + '">');
    },
    review: function () {
      var v = buildVarsTrust(answers, states, tpl.settings);
      var instr = toHtml(renderNodes(sign.nodes, v), 'signing').replace(/<span class="(?:fill|blank)">/g, '<span>');
      function row(label, value, goto) {
        return '<div class="sum-row"><div><span class="sum-l">' + label + '</span><span class="sum-v">' + (value || '<em>Not answered</em>') + '</span></div><button type="button" class="link" data-goto="' + goto + '">Change</button></div>';
      }
      return stepHead('Your trust is ready to review', 'Read every word. Then print it and follow the signing steps below.') +
        '<div class="sum">' +
        row('Trust name', esc(v.trust_name), 'start') +
        row('State', esc(v.state), 'start') +
        row('Trustmaker', esc(v.name), 'about') +
        row('Successor trustee', v.is_cotrustees ? v.cotrustees.map(function (c) { return esc(c.cotrustee); }).join(', ') : v.successors.map(function (s) { return esc(s.successor); }).join(', '), 'trustee') + '</div>' +
        '<div class="actions">' +
        '<button type="button" class="btn btn-primary" data-pdf>Download PDF</button>' +
        '<button type="button" class="btn btn-secondary" data-word>Download for Word</button>' +
        '<button type="button" class="btn btn-secondary" data-print>Print</button>' +
        '<button type="button" class="btn btn-secondary see-doc" data-pane="p">View your trust</button></div>' +
        '<p class="hint export-status" id="export-status" role="status">The PDF and Word files have “Page X of Y” at the bottom of every page.</p>' +
        (draft ? '<p class="draft-inline">This is a sample version, so it can’t be signed yet.</p>' : '') +
        '<div class="instr">' + instr + '</div>' +
        '<p class="reset"><button type="button" class="link" data-reset>Start over</button></p>';
    }
  };
  function validateTrust(id) {
    var a = answers, e = [], st = states.map[a.state];
    if (id === 'start') {
      if (!st) e.push('Choose your state.');
      else if (!st.supported) e.push(st.note || 'We can’t offer a trust in that state yet.');
      if (!clean(a.trustName)) e.push('Name your trust.');
      if (a.trustType === 'RESTATEMENT') {
        if (!clean(a.origTrustName)) e.push('Enter the name of your original trust.');
        if (!a.origTrustDate) e.push('Enter the date your original trust was signed.');
      }
      if (!a.ageOk) e.push('Confirm that you are 18 or older.');
      if (!a.freeOk) e.push('Confirm that you are creating this trust of your own free will.');
    } else if (id === 'about') {
      if (clean(a.name).length < 2) e.push('Enter your full legal name.');
    } else if (id === 'family') {
      if (!a.maritalStatus) e.push('Choose your marital status.');
      if (a.maritalStatus === 'MARRIED' && !clean(a.spouse)) e.push('Enter your spouse’s name.');
      if (a.maritalStatus === 'PARTNER' && !clean(a.partner)) e.push('Enter your partner’s name.');
    } else if (id === 'trustee') {
      var list = a.trusteeMode === 'COTRUSTEES' ? a.cotrustees : a.successors;
      if (!(list || []).some(function (x) { return clean(x.name); })) e.push('Name at least one successor trustee.');
    } else if (id === 'powers') {
      if (!a.poaReservedPowers) e.push('Answer the power-of-attorney question.');
    } else if (id === 'residuary') {
      if (!(a.residuary || []).some(function (r) { return clean(r.name); })) e.push('Add at least one beneficiary for the rest of your trust.');
    } else if (id === 'signing') {
      if (!clean(a.signingCounty)) e.push('Enter the county where you’ll sign.');
    }
    return e;
  }

  /* ---------- REVOCABLE LIVING TRUST (joint -- married couple or domestic partners) ---------- */
  var EMPTY_TRUST_JOINT = {
    state: '', ageOk: false, freeOk: false,
    trustName: '', trustType: 'NEW', origTrustName: '', origTrustDate: '',
    name1: '', name2: '',
    maritalStatus: '',
    children: [{ name: '' }],
    excluded: [{ name: '', relationship: '' }],
    trusteeMode: 'SUCCESSIVE', successors: [{ name: '' }], cotrustees: [{ name: '' }],
    firstDeathGifts: [{ description: '', beneficiary: '', contingent: 'DESCENDANTS', contingentName: '' }],
    survivorDeathGifts: [{ description: '', beneficiary: '', contingent: 'DESCENDANTS', contingentName: '' }],
    residuary: [{ name: '', pct: '' }],
    assetRealProperty: '', realProperty: [{ address: '', ownership: '' }],
    assetBank: '', bankAccounts: [{ institution: '', last4: '' }],
    assetBrokerage: '', brokerageAccounts: [{ institution: '', last4: '' }],
    assetBusiness: '', businessInterests: [{ name: '', interest: '' }],
    assetTangible: '',
    signingCounty: '', signingDate: ''
  };
  var ROWS_TRUST_JOINT = {
    children: { name: '' }, excluded: { name: '', relationship: '' },
    successors: { name: '' }, cotrustees: { name: '' },
    firstDeathGifts: { description: '', beneficiary: '', contingent: 'DESCENDANTS', contingentName: '' },
    survivorDeathGifts: { description: '', beneficiary: '', contingent: 'DESCENDANTS', contingentName: '' },
    residuary: { name: '', pct: '' },
    realProperty: { address: '', ownership: '' },
    bankAccounts: { institution: '', last4: '' },
    brokerageAccounts: { institution: '', last4: '' },
    businessInterests: { name: '', interest: '' }
  };
  var STEPS_TRUST_JOINT = [
    { id: 'start', label: 'Where you live' },
    { id: 'about', label: 'About you both' },
    { id: 'family', label: 'Family' },
    { id: 'trustee', label: 'Successor trustee' },
    { id: 'gifts', label: 'Specific gifts' },
    { id: 'residuary', label: 'Everything else' },
    { id: 'assets', label: 'Trust property' },
    { id: 'signing', label: 'Signing' },
    { id: 'review', label: 'Review and sign' }
  ];
  function buildVarsTrustJoint(a, states, settings) {
    var v = {}, st = states.map[a.state] || null;
    v.name1 = clean(a.name1); v.name2 = clean(a.name2);
    v.state = st ? st.name : '';
    /* the document text adds its own "County"/"Parish" word around this -- strip a trailing one
       off if someone typed it themselves (e.g. "Orleans Parish"), so it doesn't double up */
    v.county = clean(a.signingCounty).replace(/\s+(county|parish)$/i, '');
    v.signing_date = a.signingDate ? longDate(a.signingDate) : '';
    v.signing_state = v.state ? trustSlug(v.state) : '';
    v.is_joint = true;
    v.trust_name = clean(a.trustName) || ((v.name1 && v.name2) ? v.name1 + ' and ' + v.name2 + ' Living Trust' : '');
    /* the title line already says "TRUST AGREEMENT FOR" -- add "THE" only when the name someone
       typed doesn't already start with it themselves (e.g. "The Smith Family Trust"), so the title
       never reads "...FOR THE THE Smith..." and never reads "...FOR Smith..." either */
    v.trust_starts_with_the = /^the\s/i.test(v.trust_name) ? 'YES' : 'NO';
    v.trust_type = a.trustType === 'RESTATEMENT' ? 'RESTATEMENT' : 'NEW';
    v.orig_trust_name = clean(a.origTrustName); v.orig_trust_date = a.origTrustDate ? longDate(a.origTrustDate) : '';
    v.marital_status = a.maritalStatus === 'PARTNER' ? 'PARTNER' : 'MARRIED';
    v.children = (a.children || []).map(function (c) { return { child: clean(c.name) }; }).filter(function (c) { return c.child; });
    v.has_children = v.children.length > 0;
    v.excluded = (a.excluded || []).map(function (x) { return { excluded_name: clean(x.name), excluded_relationship: clean(x.relationship) }; }).filter(function (x) { return x.excluded_name; });
    v.has_excluded = v.excluded.length > 0;
    v.trustee_mode = a.trusteeMode === 'COTRUSTEES' ? 'COTRUSTEES' : 'SUCCESSIVE';
    v.is_cotrustees = v.trustee_mode === 'COTRUSTEES';
    v.successors = (a.successors || []).map(function (s) { return { successor: clean(s.name) }; }).filter(function (s) { return s.successor; });
    v.cotrustees = (a.cotrustees || []).map(function (s) { return { cotrustee: clean(s.name) }; }).filter(function (s) { return s.cotrustee; });
    v.first_death_gifts = (a.firstDeathGifts || []).map(function (g) {
      return { gift_description: clean(g.description), gift_beneficiary: clean(g.beneficiary), gift_contingent: g.contingent || 'DESCENDANTS', gift_contingent_name: clean(g.contingentName) };
    }).filter(function (g) { return g.gift_description && g.gift_beneficiary; });
    v.has_first_death_gifts = v.first_death_gifts.length > 0;
    v.survivor_death_gifts = (a.survivorDeathGifts || []).map(function (g) {
      return { gift_description: clean(g.description), gift_beneficiary: clean(g.beneficiary), gift_contingent: g.contingent || 'DESCENDANTS', gift_contingent_name: clean(g.contingentName) };
    }).filter(function (g) { return g.gift_description && g.gift_beneficiary; });
    v.has_survivor_death_gifts = v.survivor_death_gifts.length > 0;
    v.has_any_gifts = v.has_first_death_gifts || v.has_survivor_death_gifts;
    v.residuary = (a.residuary || []).map(function (r) { return { residuary_name: clean(r.name), residuary_pct: clean(r.pct) }; }).filter(function (r) { return r.residuary_name; });
    v.asset_real_property = a.assetRealProperty === 'yes';
    v.real_property = (a.realProperty || []).map(function (p) {
      return { real_property_address: clean(p.address), real_property_reference: clean(p.reference), real_property_ownership: clean(p.ownership) };
    }).filter(function (p) { return p.real_property_address; });
    v.asset_bank = a.assetBank === 'yes';
    v.bank_accounts = (a.bankAccounts || []).map(function (p) {
      return { bank_institution: clean(p.institution), bank_type: clean(p.type), bank_last4: clean(p.last4), bank_ownership: clean(p.ownership) };
    }).filter(function (p) { return p.bank_institution; });
    v.asset_brokerage = a.assetBrokerage === 'yes';
    v.brokerage_accounts = (a.brokerageAccounts || []).map(function (p) {
      return { brokerage_institution: clean(p.institution), brokerage_type: clean(p.type), brokerage_last4: clean(p.last4), brokerage_ownership: clean(p.ownership) };
    }).filter(function (p) { return p.brokerage_institution; });
    v.asset_business = a.assetBusiness === 'yes';
    v.business_interests = (a.businessInterests || []).map(function (p) {
      return { business_name: clean(p.name), business_interest: clean(p.interest), business_ownership: clean(p.ownership) };
    }).filter(function (p) { return p.business_name; });
    v.asset_tangible = a.assetTangible === 'yes';
    v.has_witness = !!TRUST_WITNESS_STATES[v.state];
    v.state_note = st ? st.note : '';
    return v;
  }
  var RENDER_TRUST_JOINT = {
    start: function () {
      var opts = '<option value="">Choose your state</option>' + states.list.map(function (s) {
        return '<option value="' + esc(s.name) + '"' + (answers.state === s.name ? ' selected' : '') + '>' + esc(s.name) + '</option>';
      }).join('');
      return stepHead('First, where do you live?', 'This is the state whose law will govern your trust, and where you’ll sign it. Florida and Delaware ask for two witnesses in addition to a notary; every other state asks for a notary only.') +
        field('State', '<select class="input" data-k="state" data-rerender>' + opts + '</select>') +
        field('Name your trust', text('trustName', 'For example, The Alvarez Family Trust'), 'You can change this later.') +
        field('Is this a brand-new trust, or a restatement of one you already signed?', pills('trustType', [['NEW', 'A new trust'], ['RESTATEMENT', 'A restatement']], true)) +
        (answers.trustType === 'RESTATEMENT' ? field('Name of your original trust', text('origTrustName', '')) + field('Date your original trust was signed', '<input class="input" type="date" data-k="origTrustDate" value="' + val(answers.origTrustDate) + '">') : '') +
        '<div class="checks">' +
        '<label class="check"><input type="checkbox" data-k="ageOk"' + (answers.ageOk ? ' checked' : '') + '><span>We are both 18 or older.</span></label>' +
        '<label class="check"><input type="checkbox" data-k="freeOk"' + (answers.freeOk ? ' checked' : '') + '><span>We are creating this trust of our own free will.</span></label>' +
        '</div>';
    },
    about: function () {
      return stepHead('About you both', 'You’re both Trustmakers — the people creating the trust together.') +
        field('First Trustmaker’s full legal name', text('name1', 'For example, Maria Elena Alvarez', { auto: 'name' })) +
        field('Second Trustmaker’s full legal name', text('name2', 'For example, John Michael Alvarez'));
    },
    family: function () {
      var h = stepHead('Your family', '') +
        field('Marital status', pills('maritalStatus', [['MARRIED', 'Married'], ['PARTNER', 'Registered domestic partners']], true));
      h += field('Children', nameRows('children', 'Child', 0) + addBtn('children', '+ Add a child'), 'Leave blank if you have no children.');
      h += field('Anyone you want to intentionally exclude? (optional)', '<div class="rowset">' + answers.excluded.map(function (x, i) {
        return '<div class="rowitem two"><input class="input" data-list="excluded" data-i="' + i + '" data-f="name" value="' + val(x.name) + '" placeholder="Full name">' +
          '<input class="input" data-list="excluded" data-i="' + i + '" data-f="relationship" value="' + val(x.relationship) + '" placeholder="Relationship">' +
          rm('excluded', i, 'excluded person ' + (i + 1), answers.excluded.length > 1) + '</div>';
      }).join('') + '</div>' + addBtn('excluded', '+ Add another'));
      return h;
    },
    trustee: function () {
      var h = stepHead('Who should manage your trust if neither of you can?', 'Each of you serves as an initial Trustee, and while both of you can, you act together. Your successor trustee takes over once neither of you is able to serve.') +
        field('If you name more than one, should they serve one at a time, or together?', pills('trusteeMode', [['SUCCESSIVE', 'One at a time'], ['COTRUSTEES', 'Together, as Co-Trustees']], true));
      if (answers.trusteeMode === 'COTRUSTEES') h += field('Co-Trustees', nameRows('cotrustees', 'Co-Trustee', 0) + addBtn('cotrustees', '+ Add another'));
      else h += field('Successor Trustees, in order', nameRows('successors', 'Successor', 0) + addBtn('successors', '+ Add another'));
      return h;
    },
    gifts: function () {
      function giftBlock(listKey, heading, hint) {
        return field(heading, '<div class="rowset">' + answers[listKey].map(function (g, i) {
          return '<div class="rowitem two"><input class="input" data-list="' + listKey + '" data-i="' + i + '" data-f="description" value="' + val(g.description) + '" placeholder="What (e.g., $5,000, or my piano)">' +
            '<input class="input" data-list="' + listKey + '" data-i="' + i + '" data-f="beneficiary" value="' + val(g.beneficiary) + '" placeholder="To whom">' +
            rm(listKey, i, 'gift ' + (i + 1), answers[listKey].length > 1) + '</div>';
        }).join('') + '</div>' + addBtn(listKey, '+ Add another gift'), hint);
      }
      return stepHead('Specific gifts', 'Leave specific items or amounts to specific people before everything else is divided. Both are optional.') +
        giftBlock('firstDeathGifts', 'Gifts when the first of you dies', 'Distributed before the rest passes into the survivor’s trust.') +
        giftBlock('survivorDeathGifts', 'Gifts after both of you have died', 'Distributed before everything else is divided among your final beneficiaries.');
    },
    residuary: function () {
      return stepHead('Who gets everything else?', 'After any specific gifts and after both of you have died, this is how the rest of your trust is divided.') +
        field('Beneficiaries', '<div class="rowset">' + answers.residuary.map(function (r, i) {
          return '<div class="rowitem two"><input class="input" data-list="residuary" data-i="' + i + '" data-f="name" value="' + val(r.name) + '" placeholder="Full name">' +
            '<input class="input" data-list="residuary" data-i="' + i + '" data-f="pct" value="' + val(r.pct) + '" placeholder="%" inputmode="decimal" style="max-width:90px">' +
            rm('residuary', i, 'beneficiary ' + (i + 1), answers.residuary.length > 1) + '</div>';
        }).join('') + '</div>' + addBtn('residuary', '+ Add another'), 'Percentages should add up to 100%.');
    },
    assets: function () {
      function assetBlock(flagKey, label, listKey, cols, ph) {
        var h = field(label, pills(flagKey, [['yes', 'Yes'], ['no', 'No']], true));
        if (answers[flagKey] === 'yes') {
          h += '<div class="rowset">' + answers[listKey].map(function (row, i) {
            return '<div class="rowitem two">' + cols.map(function (c) {
              return '<input class="input" data-list="' + listKey + '" data-i="' + i + '" data-f="' + c.f + '" value="' + val(row[c.f]) + '" placeholder="' + c.ph + '">';
            }).join('') + rm(listKey, i, label.toLowerCase() + ' ' + (i + 1), answers[listKey].length > 1) + '</div>';
          }).join('') + '</div>' + addBtn(listKey, '+ Add another');
        }
        return h;
      }
      return stepHead('What are you funding your trust with?', 'This becomes Schedule A, your trust’s property list. You can also transfer property to your trust later — listing it here doesn’t replace a deed or account-retitling.') +
        assetBlock('assetRealProperty', 'Real estate', 'realProperty', [{ f: 'address', ph: 'Address' }, { f: 'ownership', ph: 'Ownership (e.g., joint tenants)' }]) +
        assetBlock('assetBank', 'Bank or credit union accounts', 'bankAccounts', [{ f: 'institution', ph: 'Institution' }, { f: 'last4', ph: 'Last 4 digits' }]) +
        assetBlock('assetBrokerage', 'Investment or brokerage accounts', 'brokerageAccounts', [{ f: 'institution', ph: 'Institution' }, { f: 'last4', ph: 'Last 4 digits' }]) +
        assetBlock('assetBusiness', 'Business interests', 'businessInterests', [{ f: 'name', ph: 'Business name' }, { f: 'interest', ph: 'Your interest (e.g., 50% member)' }]) +
        field('Household goods and other tangible personal property', pills('assetTangible', [['yes', 'Yes'], ['no', 'No']], true), 'Furniture, jewelry, art, and similar belongings, as a group.');
    },
    signing: function () {
      return stepHead('Signing', '') +
        field('County where you’ll sign', countySelect('signingCounty')) +
        field('Signing date', '<input class="input" type="date" data-k="signingDate" value="' + val(answers.signingDate) + '">');
    },
    review: function () {
      var v = buildVarsTrustJoint(answers, states, tpl.settings);
      var instr = toHtml(renderNodes(sign.nodes, v), 'signing').replace(/<span class="(?:fill|blank)">/g, '<span>');
      function row(label, value, goto) {
        return '<div class="sum-row"><div><span class="sum-l">' + label + '</span><span class="sum-v">' + (value || '<em>Not answered</em>') + '</span></div><button type="button" class="link" data-goto="' + goto + '">Change</button></div>';
      }
      return stepHead('Your trust is ready to review', 'Read every word. Then print it and follow the signing steps below.') +
        '<div class="sum">' +
        row('Trust name', esc(v.trust_name), 'start') +
        row('State', esc(v.state), 'start') +
        row('Trustmakers', esc(v.name1) + (v.name2 ? ' and ' + esc(v.name2) : ''), 'about') +
        row('Successor trustee', v.is_cotrustees ? v.cotrustees.map(function (c) { return esc(c.cotrustee); }).join(', ') : v.successors.map(function (s) { return esc(s.successor); }).join(', '), 'trustee') + '</div>' +
        '<div class="actions">' +
        '<button type="button" class="btn btn-primary" data-pdf>Download PDF</button>' +
        '<button type="button" class="btn btn-secondary" data-word>Download for Word</button>' +
        '<button type="button" class="btn btn-secondary" data-print>Print</button>' +
        '<button type="button" class="btn btn-secondary see-doc" data-pane="p">View your trust</button></div>' +
        '<p class="hint export-status" id="export-status" role="status">The PDF and Word files have “Page X of Y” at the bottom of every page.</p>' +
        (draft ? '<p class="draft-inline">This is a sample version, so it can’t be signed yet.</p>' : '') +
        '<div class="instr">' + instr + '</div>' +
        '<p class="reset"><button type="button" class="link" data-reset>Start over</button></p>';
    }
  };
  function validateTrustJoint(id) {
    var a = answers, e = [], st = states.map[a.state];
    if (id === 'start') {
      if (!st) e.push('Choose your state.');
      else if (!st.supported) e.push(st.note || 'We can’t offer a trust in that state yet.');
      if (!clean(a.trustName)) e.push('Name your trust.');
      if (a.trustType === 'RESTATEMENT') {
        if (!clean(a.origTrustName)) e.push('Enter the name of your original trust.');
        if (!a.origTrustDate) e.push('Enter the date your original trust was signed.');
      }
      if (!a.ageOk) e.push('Confirm that you are both 18 or older.');
      if (!a.freeOk) e.push('Confirm that you are creating this trust of your own free will.');
    } else if (id === 'about') {
      if (clean(a.name1).length < 2) e.push('Enter the first Trustmaker’s full legal name.');
      if (clean(a.name2).length < 2) e.push('Enter the second Trustmaker’s full legal name.');
    } else if (id === 'family') {
      if (!a.maritalStatus) e.push('Choose whether you are married or registered domestic partners.');
    } else if (id === 'trustee') {
      var list = a.trusteeMode === 'COTRUSTEES' ? a.cotrustees : a.successors;
      if (!(list || []).some(function (x) { return clean(x.name); })) e.push('Name at least one successor trustee.');
    } else if (id === 'residuary') {
      if (!(a.residuary || []).some(function (r) { return clean(r.name); })) e.push('Add at least one beneficiary for the rest of your trust.');
    } else if (id === 'signing') {
      if (!clean(a.signingCounty)) e.push('Enter the county where you’ll sign.');
    }
    return e;
  }

  /* ---------- CERTIFICATION OF TRUST ---------- */
  var EMPTY_CERT = {
    state: '',
    trustName: '', origTrustDate: '', trustRestated: '', restatementDate: '',
    hasAmendments: '', amendments: [{ title: '', date: '' }],
    trustmakers: [{ name: '' }],
    trustees: [{ name: '', address: '' }],
    trusteeRule: 'ANY_ONE', minSignatures: '',
    revocability: 'REVOCABLE', revocablePortion: '', irrevocablePortion: '',
    hasLimitations: '', limitationsSummary: '',
    titleFormat: '',
    signingCounty: '', signingDate: ''
  };
  var ROWS_CERT = {
    amendments: { title: '', date: '' },
    trustmakers: { name: '' },
    trustees: { name: '', address: '' }
  };
  var STEPS_CERT = [
    { id: 'start', label: 'Your trust' },
    { id: 'trustmakers', label: 'Trustmakers' },
    { id: 'trustees', label: 'Current trustees' },
    { id: 'authority', label: 'Trustee authority' },
    { id: 'revocability', label: 'Revocability' },
    { id: 'powers', label: 'Limitations' },
    { id: 'title', label: 'Manner of taking title' },
    { id: 'signing', label: 'Signing' },
    { id: 'review', label: 'Review and sign' }
  ];
  function buildVarsCert(a, states, settings) {
    var v = {}, st = states.map[a.state] || null;
    v.state = st ? st.name : '';
    /* the document text adds its own "County"/"Parish" word around this -- strip a trailing one
       off if someone typed it themselves (e.g. "Orleans Parish"), so it doesn't double up */
    v.county = clean(a.signingCounty).replace(/\s+(county|parish)$/i, '');
    v.signing_date = a.signingDate ? longDate(a.signingDate) : '';
    v.signing_state = v.state ? trustSlug(v.state) : '';
    v.trust_name = clean(a.trustName);
    v.orig_trust_date = a.origTrustDate ? longDate(a.origTrustDate) : '';
    v.trust_restated = a.trustRestated === 'yes';
    v.restatement_date = a.restatementDate ? longDate(a.restatementDate) : '';
    v.amendments = (a.amendments || []).map(function (x) { return { amendment_title: clean(x.title), amendment_date: x.date ? longDate(x.date) : '' }; }).filter(function (x) { return x.amendment_title; });
    v.has_amendments = a.hasAmendments === 'yes' && v.amendments.length > 0;
    v.trustmakers = (a.trustmakers || []).map(function (x) { return { trustmaker_name: clean(x.name) }; }).filter(function (x) { return x.trustmaker_name; });
    v.trustees = (a.trustees || []).map(function (x) { return { trustee_name: clean(x.name), trustee_address: clean(x.address) }; }).filter(function (x) { return x.trustee_name; });
    v.single_trustee = v.trustees.length <= 1;
    v.trustee_rule = a.trusteeRule || 'ANY_ONE';
    v.min_signatures = clean(a.minSignatures);
    v.trustee_count = String(v.trustees.length);
    v.revocability = a.revocability === 'IRREVOCABLE' ? 'IRREVOCABLE' : (a.revocability === 'PARTIAL' ? 'PARTIAL' : 'REVOCABLE');
    /* the power to revoke is held by the Trustmaker(s) themselves, same as Grapevine's own trust builders --
       no separate question needed */
    v.revocation_holders = v.trustmakers.map(function (t) { return { holder_name: t.trustmaker_name }; });
    v.revocable_portion = clean(a.revocablePortion);
    v.irrevocable_portion = clean(a.irrevocablePortion);
    v.has_limitations = a.hasLimitations === 'yes' && !!clean(a.limitationsSummary);
    v.limitations_summary = clean(a.limitationsSummary);
    /* no literal "the" before the trust name -- a trust name commonly starts with "The" itself
       (e.g. "The Alvarez Family Trust"), which would otherwise double up */
    v.title_format = clean(a.titleFormat) || (v.trustees[0] ? v.trustees[0].trustee_name + ', Trustee of ' + v.trust_name : '');
    v.certification_date = v.signing_date;
    v.certifying_trustee = v.trustees[0] ? v.trustees[0].trustee_name : '';
    v.state_note = st ? st.note : '';
    return v;
  }
  var RENDER_CERT = {
    start: function () {
      var opts = '<option value="">Choose your state</option>' + states.list.map(function (s) {
        return '<option value="' + esc(s.name) + '"' + (answers.state === s.name ? ' selected' : '') + '>' + esc(s.name) + '</option>';
      }).join('');
      return stepHead('First, tell us about your trust', 'This is the state whose law governs your trust, and where you’ll sign this Certification in front of a notary.') +
        field('State', '<select class="input" data-k="state" data-rerender>' + opts + '</select>') +
        field('Name of your trust', text('trustName', 'For example, The Alvarez Family Trust'), 'Type it exactly as it appears on your trust.') +
        field('Date your trust was originally signed', '<input class="input" type="date" data-k="origTrustDate" value="' + val(answers.origTrustDate) + '">') +
        field('Has your trust been restated since then?', pills('trustRestated', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.trustRestated === 'yes' ? field('Date of the most recent restatement', '<input class="input" type="date" data-k="restatementDate" value="' + val(answers.restatementDate) + '">') : '') +
        field('Has your trust been amended, without a full restatement?', pills('hasAmendments', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.hasAmendments === 'yes' ? field('Amendments', '<div class="rowset">' + answers.amendments.map(function (a, i) {
          return '<div class="rowitem two"><input class="input" data-list="amendments" data-i="' + i + '" data-f="title" value="' + val(a.title) + '" placeholder="Title (e.g., First Amendment)">' +
            '<input class="input" data-list="amendments" data-i="' + i + '" data-f="date" type="date" value="' + val(a.date) + '">' +
            rm('amendments', i, 'amendment ' + (i + 1), answers.amendments.length > 1) + '</div>';
        }).join('') + '</div>' + addBtn('amendments', '+ Add another')) : '');
    },
    trustmakers: function () {
      return stepHead('Trustmakers', 'The person or people who created the trust.') +
        field('Trustmaker(s)', nameRows('trustmakers', 'Trustmaker', 0) + addBtn('trustmakers', '+ Add another'));
    },
    trustees: function () {
      return stepHead('Current trustees', 'Everyone currently serving as Trustee right now — not a successor trustee who hasn’t stepped in yet.') +
        field('Trustees', '<div class="rowset">' + answers.trustees.map(function (t, i) {
          return '<div class="rowitem two"><input class="input" data-list="trustees" data-i="' + i + '" data-f="name" value="' + val(t.name) + '" placeholder="Full legal name">' +
            '<input class="input" data-list="trustees" data-i="' + i + '" data-f="address" value="' + val(t.address) + '" placeholder="Address (street, city, state, ZIP)">' +
            rm('trustees', i, 'trustee ' + (i + 1), answers.trustees.length > 1) + '</div>';
        }).join('') + '</div>' + addBtn('trustees', '+ Add another trustee'));
    },
    authority: function () {
      if (answers.trustees.filter(function (t) { return clean(t.name); }).length <= 1) {
        return stepHead('Trustee authority', '') + '<p class="hint">With a single Trustee, that Trustee may act alone. There’s nothing else to answer here.</p>';
      }
      var h = stepHead('Trustee authority', 'With more than one Trustee currently serving, how do they act together?') +
        field('Action and signature rule', pills('trusteeRule', [['ANY_ONE', 'Any one may act alone'], ['ALL', 'All must act jointly'], ['MAJORITY', 'A majority may act']], true));
      if (answers.trusteeRule === 'MAJORITY') h += field('Minimum number of Trustees required to act', text('minSignatures', 'For example, 2'));
      return h;
    },
    revocability: function () {
      var h = stepHead('Revocability', '') +
        field('Is your trust revocable or irrevocable?', pills('revocability', [['REVOCABLE', 'Revocable'], ['IRREVOCABLE', 'Irrevocable'], ['PARTIAL', 'Partly both']], true), 'Most living trusts are fully revocable while the Trustmaker is alive and able.');
      if (answers.revocability === 'PARTIAL') {
        h += field('Describe the revocable portion', text('revocablePortion', ''));
        h += field('Describe the irrevocable portion', text('irrevocablePortion', ''));
      }
      return h;
    },
    powers: function () {
      return stepHead('Limitations on the Trustee', 'Optional. Most trusts have none of these.') +
        field('Does anything limit, direct, or require special consent for the Trustee’s authority?', pills('hasLimitations', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.hasLimitations === 'yes' ? field('Describe the limitation, direction, or required consent', text('limitationsSummary', '')) : '');
    },
    title: function () {
      return stepHead('Manner of taking title', 'How property is typically titled in the name of your trust.') +
        field('Title format', text('titleFormat', 'For example, Maria Elena Alvarez, Trustee of The Alvarez Family Trust'), 'Leave blank to use your first trustee’s name and trust name.');
    },
    signing: function () {
      return stepHead('Signing', '') +
        field('County where you’ll sign', countySelect('signingCounty')) +
        field('Signing date', '<input class="input" type="date" data-k="signingDate" value="' + val(answers.signingDate) + '">');
    },
    review: function () {
      var v = buildVarsCert(answers, states, tpl.settings);
      var instr = toHtml(renderNodes(sign.nodes, v), 'signing').replace(/<span class="(?:fill|blank)">/g, '<span>');
      function row(label, value, goto) {
        return '<div class="sum-row"><div><span class="sum-l">' + label + '</span><span class="sum-v">' + (value || '<em>Not answered</em>') + '</span></div><button type="button" class="link" data-goto="' + goto + '">Change</button></div>';
      }
      return stepHead('Your Certification is ready to review', 'Read every word. Then print it and follow the signing steps below.') +
        '<div class="sum">' +
        row('Trust name', esc(v.trust_name), 'start') +
        row('State', esc(v.state), 'start') +
        row('Trustmaker(s)', v.trustmakers.map(function (t) { return esc(t.trustmaker_name); }).join(', '), 'trustmakers') +
        row('Current trustee(s)', v.trustees.map(function (t) { return esc(t.trustee_name); }).join(', '), 'trustees') + '</div>' +
        '<div class="actions">' +
        '<button type="button" class="btn btn-primary" data-pdf>Download PDF</button>' +
        '<button type="button" class="btn btn-secondary" data-word>Download for Word</button>' +
        '<button type="button" class="btn btn-secondary" data-print>Print</button>' +
        '<button type="button" class="btn btn-secondary see-doc" data-pane="p">View your document</button></div>' +
        '<p class="hint export-status" id="export-status" role="status">The PDF and Word files have “Page X of Y” at the bottom of every page.</p>' +
        (draft ? '<p class="draft-inline">This is a sample version, so it can’t be signed yet.</p>' : '') +
        '<div class="instr">' + instr + '</div>' +
        '<p class="reset"><button type="button" class="link" data-reset>Start over</button></p>';
    }
  };
  function validateCert(id) {
    var a = answers, e = [], st = states.map[a.state];
    if (id === 'start') {
      if (!st) e.push('Choose your state.');
      else if (!st.supported) e.push(st.note || 'We can’t offer a Certification of Trust in that state yet.');
      if (!clean(a.trustName)) e.push('Name your trust.');
      if (!a.origTrustDate) e.push('Enter the date your trust was originally signed.');
      if (!a.trustRestated) e.push('Answer whether your trust has been restated.');
      if (a.trustRestated === 'yes' && !a.restatementDate) e.push('Enter the date of the most recent restatement.');
      if (!a.hasAmendments) e.push('Answer whether your trust has been amended.');
    } else if (id === 'trustmakers') {
      if (!(a.trustmakers || []).some(function (t) { return clean(t.name); })) e.push('Name at least one Trustmaker.');
    } else if (id === 'trustees') {
      if (!(a.trustees || []).some(function (t) { return clean(t.name); })) e.push('Name at least one currently acting Trustee.');
    } else if (id === 'authority') {
      var count = (a.trustees || []).filter(function (t) { return clean(t.name); }).length;
      if (count > 1 && !a.trusteeRule) e.push('Choose how your Trustees act together.');
      if (count > 1 && a.trusteeRule === 'MAJORITY' && !clean(a.minSignatures)) e.push('Enter the minimum number of Trustees required to act.');
    } else if (id === 'revocability') {
      if (!a.revocability) e.push('Choose whether your trust is revocable or irrevocable.');
    } else if (id === 'powers') {
      if (answers.hasLimitations === 'yes' && !clean(a.limitationsSummary)) e.push('Describe the limitation, or answer No.');
    } else if (id === 'signing') {
      if (!clean(a.signingCounty)) e.push('Enter the county where you’ll sign.');
    }
    return e;
  }

  /* ---------- AFFIDAVIT OF TRUSTEE ---------- */
  var EMPTY_AFFIDAVIT = {
    state: '',
    trustType: 'SINGLE',
    trustName: '', origTrustDate: '', trustRestated: '', restatementDate: '',
    tm1Name: '', tm2Name: '',
    trustmakerStatus: 'LIVING',
    jointPhase: 'BOTH_LIVING', adminShare: '', adminShareType: 'SURVIVORS_TRUST',
    affiantName: '', affiantIsSuccessor: '',
    trustees: [{ name: '' }],
    trusteeRule: 'ANY_ONE',
    hasTransaction: '', transactionAuthority: '', hasRestriction: '', transactionRestriction: '',
    signingCity: '', signingCounty: '', signingDate: ''
  };
  var ROWS_AFFIDAVIT = {
    trustees: { name: '' }
  };
  var STEPS_AFFIDAVIT = [
    { id: 'start', label: 'Your trust' },
    { id: 'trustmakers', label: 'Trustmakers' },
    { id: 'affiant', label: 'About you' },
    { id: 'trustees', label: 'Current trustees' },
    { id: 'authority', label: 'Trustee authority' },
    { id: 'transaction', label: 'Transaction' },
    { id: 'signing', label: 'Signing' },
    { id: 'review', label: 'Review and sign' }
  ];
  function buildVarsAffidavit(a, states, settings) {
    var v = {}, st = states.map[a.state] || null;
    v.state = st ? st.name : '';
    /* the jurat text appends its own "County"/"Parish" word after this -- strip one off if
       someone typed it themselves (e.g. "Orleans Parish"), so it doesn't double up */
    v.county = clean(a.signingCounty).replace(/\s+(county|parish)$/i, '');
    v.signing_city = clean(a.signingCity);
    v.signing_date = a.signingDate ? longDate(a.signingDate) : '';
    v.signing_state = v.state ? trustSlug(v.state) : '';
    v.trust_type = a.trustType === 'JOINT' ? 'JOINT' : 'SINGLE';
    v.trust_name = clean(a.trustName);
    v.orig_trust_date = a.origTrustDate ? longDate(a.origTrustDate) : '';
    v.trust_restated = a.trustRestated === 'yes';
    v.restatement_date = a.restatementDate ? longDate(a.restatementDate) : '';
    v.tm1_name = clean(a.tm1Name);
    v.tm2_name = clean(a.tm2Name);
    v.trustmaker_status = a.trustmakerStatus === 'DECEASED' ? 'DECEASED' : 'LIVING';
    v.joint_phase = a.jointPhase === 'FIRST_DECEASED' ? 'FIRST_DECEASED' : (a.jointPhase === 'BOTH_DECEASED' ? 'BOTH_DECEASED' : 'BOTH_LIVING');
    v.admin_share = clean(a.adminShare) || (a.adminShareType === 'FAMILY_TRUST' ? 'Family Trust' : (a.adminShareType === 'SURVIVORS_TRUST' ? "Survivor's Trust" : ''));
    v.admin_share_type = a.adminShareType || 'SURVIVORS_TRUST';
    v.affiant_is_successor = a.affiantIsSuccessor === 'yes';
    v.affiant_name = clean(a.affiantName);
    v.affiant_capacity = v.affiant_is_successor ? 'Successor Trustee' : 'Trustee';
    v.trustees = (a.trustees || []).map(function (t) { return { trustee_name: clean(t.name) }; }).filter(function (t) { return t.trustee_name; });
    v.single_trustee = v.trustees.length <= 1;
    v.trustee_name = v.trustees[0] ? v.trustees[0].trustee_name : '';
    v.trustee_rule = a.trusteeRule || 'ANY_ONE';
    v.has_transaction = a.hasTransaction === 'yes' && !!clean(a.transactionAuthority);
    v.transaction_authority = clean(a.transactionAuthority);
    v.has_restriction = a.hasRestriction === 'yes' && !!clean(a.transactionRestriction);
    v.transaction_restriction = clean(a.transactionRestriction);
    v.state_note = st ? st.note : '';
    return v;
  }
  var RENDER_AFFIDAVIT = {
    start: function () {
      var opts = '<option value="">Choose your state</option>' + states.list.map(function (s) {
        return '<option value="' + esc(s.name) + '"' + (answers.state === s.name ? ' selected' : '') + '>' + esc(s.name) + '</option>';
      }).join('');
      return stepHead('First, tell us about your trust', 'This is the state whose law governs your trust, and where you’ll sign this Affidavit in front of a notary.') +
        field('State', '<select class="input" data-k="state" data-rerender>' + opts + '</select>') +
        field('Is this a single-trustmaker trust or a joint trust?', pills('trustType', [['SINGLE', 'Single trustmaker'], ['JOINT', 'Joint (married couple or partners)']], true)) +
        field('Name of the trust', text('trustName', 'For example, The Alvarez Family Trust'), 'Type it exactly as it appears on the trust.') +
        field('Date the trust was originally signed', '<input class="input" type="date" data-k="origTrustDate" value="' + val(answers.origTrustDate) + '">') +
        field('Has the trust been restated since then?', pills('trustRestated', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.trustRestated === 'yes' ? field('Date of the most recent restatement', '<input class="input" type="date" data-k="restatementDate" value="' + val(answers.restatementDate) + '">') : '');
    },
    trustmakers: function () {
      var h = stepHead('Trustmakers', '');
      if (answers.trustType === 'JOINT') {
        h += field('First Trustmaker’s full legal name', text('tm1Name', ''));
        h += field('Second Trustmaker’s full legal name', text('tm2Name', ''));
        h += field('What is the trust’s current administrative phase?', pills('jointPhase', [['BOTH_LIVING', 'Both Trustmakers living'], ['FIRST_DECEASED', 'One deceased, one living'], ['BOTH_DECEASED', 'Both deceased']], true));
        if (answers.jointPhase === 'FIRST_DECEASED') {
          h += field('Which trust or share does this Affidavit concern?', pills('adminShareType', [['SURVIVORS_TRUST', "Survivor's Trust"], ['FAMILY_TRUST', 'Family Trust'], ['OTHER', 'Something else']], true));
          if (answers.adminShareType === 'OTHER') h += field('Describe the trust or share', text('adminShare', ''));
        }
      } else {
        h += field('Trustmaker’s full legal name', text('tm1Name', ''));
        h += field('Is the Trustmaker living or deceased?', pills('trustmakerStatus', [['LIVING', 'Living'], ['DECEASED', 'Deceased']], true));
      }
      return h;
    },
    affiant: function () {
      return stepHead('About you', 'You’re the Affiant — the Trustee swearing to the facts in this Affidavit.') +
        field('Your full legal name', text('affiantName', '', { auto: 'name' })) +
        field('Are you a successor trustee (did you step in after the original Trustee)?', pills('affiantIsSuccessor', [['yes', 'Yes'], ['no', 'No']], true));
    },
    trustees: function () {
      return stepHead('Current trustees', 'Everyone currently serving as Trustee right now — not a successor trustee who hasn’t stepped in yet.') +
        field('Trustees', nameRows('trustees', 'Trustee', 0) + addBtn('trustees', '+ Add another'));
    },
    authority: function () {
      var count = answers.trustees.filter(function (t) { return clean(t.name); }).length;
      if (count <= 1) {
        return stepHead('Trustee authority', '') + '<p class="hint">With a single Trustee, that Trustee may act alone. There’s nothing else to answer here.</p>';
      }
      return stepHead('Trustee authority', 'With more than one Trustee currently serving, how do they act together?') +
        field('Action and decision rule', pills('trusteeRule', [['ANY_ONE', 'Any one may act alone'], ['ALL', 'All must act jointly'], ['MAJORITY', 'A majority may act']], true));
    },
    transaction: function () {
      return stepHead('Is this for a specific transaction?', 'Optional. Leave this as No if you just want to confirm your general status and authority as Trustee.') +
        field('Is there a specific pending transaction?', pills('hasTransaction', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.hasTransaction === 'yes' ? field('What is the Trustee authorized to do for this transaction?', text('transactionAuthority', 'For example, sell the property at 123 Main St')) : '') +
        (answers.hasTransaction === 'yes' ? field('Any restriction or limitation on this transaction? (optional)', pills('hasRestriction', [['yes', 'Yes'], ['no', 'No']], true)) : '') +
        (answers.hasTransaction === 'yes' && answers.hasRestriction === 'yes' ? field('Describe the restriction', text('transactionRestriction', '')) : '');
    },
    signing: function () {
      return stepHead('Signing', '') +
        field('City where you’ll sign', text('signingCity', '')) +
        field('County where you’ll sign', countySelect('signingCounty')) +
        field('Signing date', '<input class="input" type="date" data-k="signingDate" value="' + val(answers.signingDate) + '">');
    },
    review: function () {
      var v = buildVarsAffidavit(answers, states, tpl.settings);
      var instr = toHtml(renderNodes(sign.nodes, v), 'signing').replace(/<span class="(?:fill|blank)">/g, '<span>');
      function row(label, value, goto) {
        return '<div class="sum-row"><div><span class="sum-l">' + label + '</span><span class="sum-v">' + (value || '<em>Not answered</em>') + '</span></div><button type="button" class="link" data-goto="' + goto + '">Change</button></div>';
      }
      return stepHead('Your Affidavit is ready to review', 'Read every word. Then print it and follow the signing steps below — it must be sworn before a notary, not just signed.') +
        '<div class="sum">' +
        row('Trust name', esc(v.trust_name), 'start') +
        row('State', esc(v.state), 'start') +
        row('Affiant', esc(v.affiant_name), 'affiant') +
        row('Current trustee(s)', v.trustees.map(function (t) { return esc(t.trustee_name); }).join(', '), 'trustees') + '</div>' +
        '<div class="actions">' +
        '<button type="button" class="btn btn-primary" data-pdf>Download PDF</button>' +
        '<button type="button" class="btn btn-secondary" data-word>Download for Word</button>' +
        '<button type="button" class="btn btn-secondary" data-print>Print</button>' +
        '<button type="button" class="btn btn-secondary see-doc" data-pane="p">View your document</button></div>' +
        '<p class="hint export-status" id="export-status" role="status">The PDF and Word files have “Page X of Y” at the bottom of every page.</p>' +
        (draft ? '<p class="draft-inline">This is a sample version, so it can’t be signed yet.</p>' : '') +
        '<div class="instr">' + instr + '</div>' +
        '<p class="reset"><button type="button" class="link" data-reset>Start over</button></p>';
    }
  };
  function validateAffidavit(id) {
    var a = answers, e = [], st = states.map[a.state];
    if (id === 'start') {
      if (!st) e.push('Choose your state.');
      else if (!st.supported) e.push(st.note || 'We can’t offer an Affidavit of Trustee in that state yet.');
      if (!clean(a.trustName)) e.push('Name the trust.');
      if (!a.origTrustDate) e.push('Enter the date the trust was originally signed.');
      if (!a.trustRestated) e.push('Answer whether the trust has been restated.');
      if (a.trustRestated === 'yes' && !a.restatementDate) e.push('Enter the date of the most recent restatement.');
    } else if (id === 'trustmakers') {
      if (!clean(a.tm1Name)) e.push(a.trustType === 'JOINT' ? 'Enter the first Trustmaker’s full legal name.' : 'Enter the Trustmaker’s full legal name.');
      if (a.trustType === 'JOINT' && !clean(a.tm2Name)) e.push('Enter the second Trustmaker’s full legal name.');
    } else if (id === 'affiant') {
      if (clean(a.affiantName).length < 2) e.push('Enter your full legal name.');
      if (!a.affiantIsSuccessor) e.push('Answer whether you are a successor trustee.');
    } else if (id === 'trustees') {
      if (!(a.trustees || []).some(function (t) { return clean(t.name); })) e.push('Name at least one currently acting Trustee.');
    } else if (id === 'authority') {
      var count = (a.trustees || []).filter(function (t) { return clean(t.name); }).length;
      if (count > 1 && !a.trusteeRule) e.push('Choose how your Trustees act together.');
    } else if (id === 'transaction') {
      if (answers.hasTransaction === 'yes' && !clean(a.transactionAuthority)) e.push('Describe what the Trustee is authorized to do, or answer No.');
    } else if (id === 'signing') {
      if (!clean(a.signingCity)) e.push('Enter the city where you’ll sign.');
      if (!clean(a.signingCounty)) e.push('Enter the county where you’ll sign.');
    }
    return e;
  }

  /* ---------- GENERAL ASSIGNMENT OF PERSONAL PROPERTY TO TRUST ---------- */
  var EMPTY_ASSIGNMENT = {
    state: '',
    trustType: 'SINGLE',
    trustName: '', origTrustDate: '', trustRestated: '', restatementDate: '',
    tm1Name: '', tm2Name: '',
    revocability: 'FULLY_REVOCABLE',
    hasProperty: '', property: [{ description: '' }],
    wantsNotary: '',
    signingCounty: '', signingDate: ''
  };
  var ROWS_ASSIGNMENT = {
    property: { description: '' }
  };
  var STEPS_ASSIGNMENT = [
    { id: 'start', label: 'Your trust' },
    { id: 'trustmakers', label: 'Trustmakers' },
    { id: 'revocability', label: 'Revocability' },
    { id: 'property', label: 'Specific property' },
    { id: 'notary', label: 'Notarization' },
    { id: 'signing', label: 'Signing' },
    { id: 'review', label: 'Review and sign' }
  ];
  function buildVarsAssignment(a, states, settings) {
    var v = {}, st = states.map[a.state] || null;
    v.state = st ? st.name : '';
    /* the execution line adds its own "County" word after this -- strip a trailing one
       off if someone typed it themselves (e.g. "Orleans Parish"), so it doesn't double up */
    v.county = clean(a.signingCounty).replace(/\s+(county|parish)$/i, '');
    v.county_label = v.state === 'Louisiana' ? 'Parish' : 'County';
    v.signing_date = a.signingDate ? longDate(a.signingDate) : '';
    v.trust_type = a.trustType === 'JOINT' ? 'JOINT' : 'SINGLE';
    v.trust_name = clean(a.trustName);
    v.orig_trust_date = a.origTrustDate ? longDate(a.origTrustDate) : '';
    v.trust_restated = a.trustRestated === 'yes';
    v.restatement_date = a.restatementDate ? longDate(a.restatementDate) : '';
    v.tm1_name = clean(a.tm1Name);
    v.tm2_name = clean(a.tm2Name);
    v.trustee_caption = (v.trust_type === 'JOINT' && v.tm2_name) ? (v.tm1_name + ' and ' + v.tm2_name) : v.tm1_name;
    v.revocability = a.revocability || 'FULLY_REVOCABLE';
    v.property = (a.property || []).map(function (p) { return { property_description: clean(p.description) }; }).filter(function (p) { return p.property_description; });
    v.has_property = v.property.length > 0;
    v.wants_notary = a.wantsNotary === 'yes';
    v.state_note = st ? st.note : '';
    return v;
  }
  var RENDER_ASSIGNMENT = {
    start: function () {
      var opts = '<option value="">Choose your state</option>' + states.list.map(function (s) {
        return '<option value="' + esc(s.name) + '"' + (answers.state === s.name ? ' selected' : '') + '>' + esc(s.name) + '</option>';
      }).join('');
      return stepHead('First, tell us about your trust', 'No state requires anything special to sign this document, so this is just for the header and the execution line.') +
        field('State', '<select class="input" data-k="state" data-rerender>' + opts + '</select>') +
        field('Is this a single-trustmaker trust or a joint trust?', pills('trustType', [['SINGLE', 'Single trustmaker'], ['JOINT', 'Joint (married couple or partners)']], true)) +
        field('Name of the trust', text('trustName', 'For example, The Alvarez Family Trust'), 'Type it exactly as it appears on the trust.') +
        field('Date the trust was originally signed', '<input class="input" type="date" data-k="origTrustDate" value="' + val(answers.origTrustDate) + '">') +
        field('Has the trust been restated since then?', pills('trustRestated', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.trustRestated === 'yes' ? field('Date of the most recent restatement', '<input class="input" type="date" data-k="restatementDate" value="' + val(answers.restatementDate) + '">') : '');
    },
    trustmakers: function () {
      var h = stepHead('Trustmakers', '');
      if (answers.trustType === 'JOINT') {
        h += field('First Trustmaker’s full legal name', text('tm1Name', ''));
        h += field('Second Trustmaker’s full legal name', text('tm2Name', ''));
      } else {
        h += field('Trustmaker’s full legal name', text('tm1Name', ''));
      }
      return h;
    },
    revocability: function () {
      return stepHead('Is the trust revocable?', 'This is about the trust receiving the property, not this Assignment itself.') +
        field('Right now, is the trust...', pills('revocability', [['FULLY_REVOCABLE', 'Fully revocable'], ['PARTIALLY_REVOCABLE', 'Revocable as to part, irrevocable as to the rest'], ['IRREVOCABLE', 'Irrevocable']], true));
    },
    property: function () {
      return stepHead('Specific property (optional)', 'This Assignment already covers your personal property in general. List specific items here only if you want them called out by name — for example, because a particular item matters to you or a recipient wants it itemized.') +
        field('Is there specific property you want to list by name?', pills('hasProperty', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.hasProperty === 'yes' ? field('Property', '<div class="rowset">' + answers.property.map(function (p, i) {
          return '<div class="rowitem"><input class="input" data-list="property" data-i="' + i + '" data-f="description" value="' + val(p.description) + '" placeholder="For example, my grandmother’s writing desk">' +
            rm('property', i, 'item ' + (i + 1), answers.property.length > 1) + '</div>';
        }).join('') + '</div>' + addBtn('property', '+ Add another item')) : '');
    },
    notary: function () {
      return stepHead('Notarization', 'No state requires this document to be notarized. Add it only if a specific bank, brokerage, or title company asked for a notarized signature, or you’d simply like one.') +
        field('Add an optional notary acknowledgment page?', pills('wantsNotary', [['yes', 'Yes'], ['no', 'No — just the signature']], true));
    },
    signing: function () {
      return stepHead('Signing', '') +
        field('County where you’ll sign', countySelect('signingCounty')) +
        field('Signing date', '<input class="input" type="date" data-k="signingDate" value="' + val(answers.signingDate) + '">');
    },
    review: function () {
      var v = buildVarsAssignment(answers, states, tpl.settings);
      var instr = toHtml(renderNodes(sign.nodes, v), 'signing').replace(/<span class="(?:fill|blank)">/g, '<span>');
      function row(label, value, goto) {
        return '<div class="sum-row"><div><span class="sum-l">' + label + '</span><span class="sum-v">' + (value || '<em>Not answered</em>') + '</span></div><button type="button" class="link" data-goto="' + goto + '">Change</button></div>';
      }
      return stepHead('Your Assignment is ready to review', 'Read every word, then print it and sign — no witness or notary is required unless you chose to add one.') +
        '<div class="sum">' +
        row('Trust name', esc(v.trust_name), 'start') +
        row('State', esc(v.state), 'start') +
        row('Trustmaker(s)', [v.tm1_name, v.tm2_name].filter(Boolean).map(esc).join(' and '), 'trustmakers') + '</div>' +
        '<div class="actions">' +
        '<button type="button" class="btn btn-primary" data-pdf>Download PDF</button>' +
        '<button type="button" class="btn btn-secondary" data-word>Download for Word</button>' +
        '<button type="button" class="btn btn-secondary" data-print>Print</button>' +
        '<button type="button" class="btn btn-secondary see-doc" data-pane="p">View your document</button></div>' +
        '<p class="hint export-status" id="export-status" role="status">The PDF and Word files have “Page X of Y” at the bottom of every page.</p>' +
        (draft ? '<p class="draft-inline">This is a sample version, so it can’t be signed yet.</p>' : '') +
        '<div class="instr">' + instr + '</div>' +
        '<p class="reset"><button type="button" class="link" data-reset>Start over</button></p>';
    }
  };
  function validateAssignment(id) {
    var a = answers, e = [], st = states.map[a.state];
    if (id === 'start') {
      if (!st) e.push('Choose your state.');
      if (!clean(a.trustName)) e.push('Name the trust.');
      if (!a.origTrustDate) e.push('Enter the date the trust was originally signed.');
      if (!a.trustRestated) e.push('Answer whether the trust has been restated.');
      if (a.trustRestated === 'yes' && !a.restatementDate) e.push('Enter the date of the most recent restatement.');
    } else if (id === 'trustmakers') {
      if (!clean(a.tm1Name)) e.push(a.trustType === 'JOINT' ? 'Enter the first Trustmaker’s full legal name.' : 'Enter the Trustmaker’s full legal name.');
      if (a.trustType === 'JOINT' && !clean(a.tm2Name)) e.push('Enter the second Trustmaker’s full legal name.');
    } else if (id === 'revocability') {
      if (!a.revocability) e.push('Answer whether the trust is revocable.');
    } else if (id === 'property') {
      if (!a.hasProperty) e.push('Answer whether you want to list specific property.');
    } else if (id === 'notary') {
      if (!a.wantsNotary) e.push('Answer whether you want the optional notary page.');
    } else if (id === 'signing') {
      if (!clean(a.signingCounty)) e.push('Enter the county where you’ll sign.');
    }
    return e;
  }

  /* ---------- FINAL WISHES ---------- */
  var UNOFFERED_FINALWISHES_STATES = { 'Mississippi': 1, 'South Carolina': 1 };
  var EMPTY_FINALWISHES = {
    state: '', signingDate: '',
    name: '',
    disposition: '', dispositionOtherText: '',
    hasLocation: '', location: '',
    hasRemainsDetails: '', remainsDetails: '',
    service: '', hasServiceDetails: '', serviceDetails: '',
    hasPersonalRequests: '', personalRequests: '',
    hasPrepaid: '', provider: '', providerLocation: '', reference: '',
    hasDocumentLocation: '', documentLocation: '',
    hasAgent: '', agentName: '', hasAltAgent: '', altAgentName: ''
  };
  var ROWS_FINALWISHES = {};
  var STEPS_FINALWISHES = [
    { id: 'start', label: 'Your state' },
    { id: 'you', label: 'About you' },
    { id: 'disposition', label: 'Disposition of remains' },
    { id: 'service', label: 'Funeral or memorial' },
    { id: 'personal', label: 'Personal requests' },
    { id: 'prearrangements', label: 'Prearrangements' },
    { id: 'agent', label: 'Who decides' },
    { id: 'signing', label: 'Signing' },
    { id: 'review', label: 'Review and sign' }
  ];
  function buildVarsFinalWishes(a, states, settings) {
    var v = {}, st = states.map[a.state] || null;
    v.state = st ? st.name : '';
    v.signing_state = v.state ? trustSlug(v.state) : '';
    v.signing_date = a.signingDate ? longDate(a.signingDate) : '';
    v.name = clean(a.name);
    v.has_disposition = !!a.disposition;
    v.disposition = a.disposition || '';
    v.disposition_other_text = clean(a.dispositionOtherText);
    v.has_location = a.hasLocation === 'yes' && !!clean(a.location);
    v.location = clean(a.location);
    v.has_remains_details = a.hasRemainsDetails === 'yes' && !!clean(a.remainsDetails);
    v.remains_details = clean(a.remainsDetails);
    v.has_service = !!a.service;
    v.service = a.service || '';
    v.has_service_details = a.hasServiceDetails === 'yes' && !!clean(a.serviceDetails);
    v.service_details = clean(a.serviceDetails);
    v.has_personal_requests = a.hasPersonalRequests === 'yes' && !!clean(a.personalRequests);
    v.personal_requests = clean(a.personalRequests);
    v.has_prepaid = a.hasPrepaid === 'yes' && !!clean(a.provider);
    v.provider = clean(a.provider);
    v.provider_location = clean(a.providerLocation);
    v.reference = clean(a.reference);
    v.has_document_location = a.hasDocumentLocation === 'yes' && !!clean(a.documentLocation);
    v.document_location = clean(a.documentLocation);
    v.has_agent = a.hasAgent === 'yes' && !!clean(a.agentName);
    v.no_agent = !v.has_agent;
    v.agent_name = clean(a.agentName);
    v.has_alt_agent = v.has_agent && a.hasAltAgent === 'yes' && !!clean(a.altAgentName);
    v.alt_agent_name = clean(a.altAgentName);
    v.state_note = st ? st.note : '';
    return v;
  }
  var RENDER_FINALWISHES = {
    start: function () {
      var opts = '<option value="">Choose your state</option>' + states.list.map(function (s) {
        return '<option value="' + esc(s.name) + '"' + (answers.state === s.name ? ' selected' : '') + '>' + esc(s.name) + '</option>';
      }).join('');
      return stepHead('First, where do you live?', 'This is the state whose law governs how these Final Wishes are signed.') +
        field('State', '<select class="input" data-k="state" data-rerender>' + opts + '</select>') +
        (UNOFFERED_FINALWISHES_STATES[answers.state] ? '<p class="hint">We can’t offer Final Wishes in ' + esc(answers.state) + ' yet — that state’s own rules for this kind of document need a specific state-prescribed form or route that isn’t available here. Talk to a local attorney, or a funeral home familiar with ' + esc(answers.state) + ' law, about your options.</p>' : '');
    },
    you: function () {
      return stepHead('About you', '') +
        field('Your full legal name', text('name', '', { auto: 'name' }));
    },
    disposition: function () {
      return stepHead('Disposition of remains', 'What happens to your body. This is optional — you can leave it to whoever is authorized to decide.') +
        field('Your preference', pills('disposition', [['BURIAL', 'Burial'], ['CREMATION', 'Cremation'], ['GREEN_BURIAL', 'Natural or green burial'], ['DONATION', 'Body donation'], ['OTHER', 'Something else'], ['NO_PREFERENCE', 'No preference — I leave it to them']], true)) +
        (answers.disposition === 'OTHER' ? field('Describe your preference', text('dispositionOtherText', '')) : '') +
        field('Is there a place you’d like this to happen? (optional)', pills('hasLocation', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.hasLocation === 'yes' ? field('Place', text('location', 'For example, Oakwood Cemetery in Springfield')) : '') +
        field('Any other instructions about your remains? (optional)', pills('hasRemainsDetails', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.hasRemainsDetails === 'yes' ? field('Instructions', text('remainsDetails', '')) : '');
    },
    service: function () {
      return stepHead('Funeral, memorial, or celebration of life', 'Optional.') +
        field('Your preference', pills('service', [['FUNERAL', 'Funeral service'], ['MEMORIAL', 'Memorial service'], ['CELEBRATION', 'Celebration of life'], ['NONE', 'No formal service'], ['NO_PREFERENCE', 'No preference — I leave it to them']], true)) +
        field('Any other wishes about a service or gathering? (optional)', pills('hasServiceDetails', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.hasServiceDetails === 'yes' ? field('Details', text('serviceDetails', '')) : '');
    },
    personal: function () {
      return stepHead('Personal requests', 'Anything else you want said or done — music, readings, who’s invited, and so on. Optional.') +
        field('Do you have personal requests to add?', pills('hasPersonalRequests', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.hasPersonalRequests === 'yes' ? field('Requests', text('personalRequests', '')) : '');
    },
    prearrangements: function () {
      return stepHead('Prearrangements and records', 'Optional — only if you’ve already made or prepaid arrangements.') +
        field('Have you made or prepaid any arrangements?', pills('hasPrepaid', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.hasPrepaid === 'yes' ? field('Provider', text('provider', 'Funeral home, cemetery, or other provider')) : '') +
        (answers.hasPrepaid === 'yes' ? field('Provider’s location', text('providerLocation', '')) : '') +
        (answers.hasPrepaid === 'yes' ? field('Reference or contract number (optional)', text('reference', '')) : '') +
        field('Are there supporting records someone should know where to find?', pills('hasDocumentLocation', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.hasDocumentLocation === 'yes' ? field('Where they’re located', text('documentLocation', '')) : '');
    },
    agent: function () {
      return stepHead('Who is authorized to decide', 'Optional. To the extent your state allows it, you can name someone to control disposition of your remains and carry out these wishes.') +
        field('Do you want to name that person here?', pills('hasAgent', [['yes', 'Yes'], ['no', 'No — leave it to applicable law']], true)) +
        (answers.hasAgent === 'yes' ? field('Their full legal name', text('agentName', '')) : '') +
        (answers.hasAgent === 'yes' ? field('Name a backup, in case they can’t or won’t serve? (optional)', pills('hasAltAgent', [['yes', 'Yes'], ['no', 'No']], true)) : '') +
        (answers.hasAgent === 'yes' && answers.hasAltAgent === 'yes' ? field('Backup’s full legal name', text('altAgentName', '')) : '');
    },
    signing: function () {
      return stepHead('Signing', '') +
        field('Signing date', '<input class="input" type="date" data-k="signingDate" value="' + val(answers.signingDate) + '">');
    },
    review: function () {
      var v = buildVarsFinalWishes(answers, states, tpl.settings);
      var instr = toHtml(renderNodes(sign.nodes, v), 'signing').replace(/<span class="(?:fill|blank)">/g, '<span>');
      function row(label, value, goto) {
        return '<div class="sum-row"><div><span class="sum-l">' + label + '</span><span class="sum-v">' + (value || '<em>Not answered</em>') + '</span></div><button type="button" class="link" data-goto="' + goto + '">Change</button></div>';
      }
      return stepHead('Your Final Wishes are ready to review', 'Read every word, then follow the signing steps below for your state.') +
        '<div class="sum">' +
        row('Your name', esc(v.name), 'you') +
        row('State', esc(v.state), 'start') +
        row('Disposition preference', esc(v.disposition || ''), 'disposition') + '</div>' +
        '<div class="actions">' +
        '<button type="button" class="btn btn-primary" data-pdf>Download PDF</button>' +
        '<button type="button" class="btn btn-secondary" data-word>Download for Word</button>' +
        '<button type="button" class="btn btn-secondary" data-print>Print</button>' +
        '<button type="button" class="btn btn-secondary see-doc" data-pane="p">View your document</button></div>' +
        '<p class="hint export-status" id="export-status" role="status">The PDF and Word files have “Page X of Y” at the bottom of every page.</p>' +
        (draft ? '<p class="draft-inline">This is a sample version, so it can’t be signed yet.</p>' : '') +
        '<div class="instr">' + instr + '</div>' +
        '<p class="reset"><button type="button" class="link" data-reset>Start over</button></p>';
    }
  };
  function validateFinalWishes(id) {
    var a = answers, e = [], st = states.map[a.state];
    if (id === 'start') {
      if (!st) e.push('Choose your state.');
      else if (UNOFFERED_FINALWISHES_STATES[a.state]) e.push('We can’t offer Final Wishes in ' + a.state + ' yet.');
    } else if (id === 'you') {
      if (clean(a.name).length < 2) e.push('Enter your full legal name.');
    } else if (id === 'disposition') {
      if (!a.disposition) e.push('Choose a disposition preference, or “No preference.”');
      if (a.disposition === 'OTHER' && !clean(a.dispositionOtherText)) e.push('Describe your preference, or choose a different option.');
      if (a.hasLocation === 'yes' && !clean(a.location)) e.push('Enter a place, or answer No.');
      if (a.hasRemainsDetails === 'yes' && !clean(a.remainsDetails)) e.push('Enter your additional instructions, or answer No.');
    } else if (id === 'service') {
      if (!a.service) e.push('Choose a service preference, or “No preference.”');
      if (a.hasServiceDetails === 'yes' && !clean(a.serviceDetails)) e.push('Enter your additional wishes, or answer No.');
    } else if (id === 'personal') {
      if (a.hasPersonalRequests === 'yes' && !clean(a.personalRequests)) e.push('Enter your requests, or answer No.');
    } else if (id === 'prearrangements') {
      if (a.hasPrepaid === 'yes' && !clean(a.provider)) e.push('Enter the provider, or answer No.');
      if (a.hasDocumentLocation === 'yes' && !clean(a.documentLocation)) e.push('Enter where the records are located, or answer No.');
    } else if (id === 'agent') {
      if (!a.hasAgent) e.push('Answer whether you want to name someone here.');
      if (a.hasAgent === 'yes' && !clean(a.agentName)) e.push('Enter that person’s full legal name.');
      if (a.hasAgent === 'yes' && a.hasAltAgent === 'yes' && !clean(a.altAgentName)) e.push('Enter the backup’s full legal name, or answer No.');
    } else if (id === 'signing') {
      if (!a.signingDate) e.push('Enter the date you’ll sign.');
    }
    return e;
  }

  /* ---------- IMPORTANT CONTACTS ---------- */
  var EMPTY_CONTACTS = {
    name: '',
    contacts: [{ name: '', relationship: '', phone: '', email: '' }]
  };
  var ROWS_CONTACTS = {
    contacts: { name: '', relationship: '', phone: '', email: '' }
  };
  var STEPS_CONTACTS = [
    { id: 'contacts', label: 'Your contacts' },
    { id: 'review', label: 'Review and print' }
  ];
  function buildVarsContacts(a, states, settings) {
    var v = {};
    v.name = clean(a.name);
    v.contacts = (a.contacts || []).map(function (c) {
      return {
        contact_name: clean(c.name),
        relationship: clean(c.relationship),
        has_relationship: !!clean(c.relationship),
        phone: clean(c.phone),
        has_phone: !!clean(c.phone),
        email: clean(c.email),
        has_email: !!clean(c.email)
      };
    }).filter(function (c) { return c.contact_name; });
    v.has_contacts = v.contacts.length > 0;
    return v;
  }
  var CONTACT_PLACEHOLDERS = ['Estate attorney', 'Executor', 'Primary doctor', 'Sister', 'Financial advisor'];
  var RENDER_CONTACTS = {
    contacts: function () {
      return stepHead('Your important contacts', 'Anyone who handles your affairs might need to reach them — professionals, people named in your documents, and close family.') +
        field('Prepared for', text('name', '', { auto: 'name' })) +
        field('Contacts', '<div class="rowset">' + answers.contacts.map(function (c, i) {
          var ph = CONTACT_PLACEHOLDERS[i % CONTACT_PLACEHOLDERS.length];
          return '<div class="rowitem grid4"><input class="input" data-list="contacts" data-i="' + i + '" data-f="name" value="' + val(c.name) + '" placeholder="Name (' + ph + ')">' +
            '<input class="input" data-list="contacts" data-i="' + i + '" data-f="relationship" value="' + val(c.relationship) + '" placeholder="Relationship">' +
            '<input class="input" data-list="contacts" data-i="' + i + '" data-f="phone" value="' + val(c.phone) + '" placeholder="Phone" type="tel">' +
            '<input class="input" data-list="contacts" data-i="' + i + '" data-f="email" value="' + val(c.email) + '" placeholder="Email" type="email">' +
            rm('contacts', i, 'contact ' + (i + 1), answers.contacts.length > 1) + '</div>';
        }).join('') + '</div>' + addBtn('contacts', '+ Add another contact'), 'A name is all that’s required for each row — fill in whatever else you have.');
    },
    review: function () {
      var v = buildVarsContacts(answers, states, tpl.settings);
      var instr = toHtml(renderNodes(sign.nodes, v), 'signing').replace(/<span class="(?:fill|blank)">/g, '<span>');
      return stepHead('Your Important Contacts list is ready', 'Print it and keep it with your other documents.') +
        '<div class="sum">' +
        '<div class="sum-row"><div><span class="sum-l">Prepared for</span><span class="sum-v">' + (esc(v.name) || '<em>Not answered</em>') + '</span></div><button type="button" class="link" data-goto="contacts">Change</button></div>' +
        '<div class="sum-row"><div><span class="sum-l">Contacts listed</span><span class="sum-v">' + v.contacts.length + '</span></div><button type="button" class="link" data-goto="contacts">Change</button></div></div>' +
        '<div class="actions">' +
        '<button type="button" class="btn btn-primary" data-pdf>Download PDF</button>' +
        '<button type="button" class="btn btn-secondary" data-word>Download for Word</button>' +
        '<button type="button" class="btn btn-secondary" data-print>Print</button>' +
        '<button type="button" class="btn btn-secondary see-doc" data-pane="p">View your document</button></div>' +
        '<p class="hint export-status" id="export-status" role="status">The PDF and Word files have “Page X of Y” at the bottom of every page.</p>' +
        '<div class="instr">' + instr + '</div>' +
        '<p class="reset"><button type="button" class="link" data-reset>Start over</button></p>';
    }
  };
  function validateContacts(id) {
    var a = answers, e = [];
    if (id === 'contacts') {
      if (clean(a.name).length < 2) e.push('Tell us who this list is prepared for.');
      if (!(a.contacts || []).some(function (c) { return clean(c.name); })) e.push('Add at least one contact.');
      (a.contacts || []).forEach(function (c, i) {
        var who = clean(c.name) || 'contact ' + (i + 1);
        var phone = clean(c.phone), email = clean(c.email);
        if (phone && !isCompletePhone(phone)) e.push('The phone number for ' + who + ' looks incomplete.');
        if (email && !isCompleteEmail(email)) e.push('The email address for ' + who + ' looks incomplete.');
      });
    }
    return e;
  }


  /* ---------- SCHEDULE A (TRUST PROPERTY), as its own document ---------- */
  var EMPTY_SCHEDA = {
    trustType: 'SINGLE',
    trustName: '', origTrustDate: '', trustRestated: '', restatementDate: '',
    tm1Name: '', tm2Name: '',
    assetRealProperty: '', realProperty: [{ address: '', ownership: '', countyState: '', deedReference: '' }],
    assetBank: '', bankAccounts: [{ institution: '', type: '', last4: '', ownership: '' }],
    assetBrokerage: '', brokerageAccounts: [{ institution: '', type: '', last4: '', ownership: '' }],
    assetBusiness: '', businessInterests: [{ name: '', interest: '', state: '', ownership: '' }],
    assetTangible: ''
  };
  var ROWS_SCHEDA = {
    realProperty: { address: '', ownership: '', countyState: '', deedReference: '' },
    bankAccounts: { institution: '', type: '', last4: '', ownership: '' },
    brokerageAccounts: { institution: '', type: '', last4: '', ownership: '' },
    businessInterests: { name: '', interest: '', state: '', ownership: '' }
  };
  var STEPS_SCHEDA = [
    { id: 'start', label: 'Your trust' },
    { id: 'trustmakers', label: 'Trustmakers' },
    { id: 'assets', label: 'Trust property' },
    { id: 'review', label: 'Review and sign' }
  ];
  function buildVarsScheduleA(a, states, settings) {
    var v = {};
    v.trust_type = a.trustType === 'JOINT' ? 'JOINT' : 'SINGLE';
    v.trust_name = clean(a.trustName);
    v.orig_trust_date = a.origTrustDate ? longDate(a.origTrustDate) : '';
    v.trust_restated = a.trustRestated === 'yes';
    v.restatement_date = a.restatementDate ? longDate(a.restatementDate) : '';
    v.tm1_name = clean(a.tm1Name);
    v.tm2_name = clean(a.tm2Name);
    v.asset_real_property = a.assetRealProperty === 'yes';
    v.real_property = (a.realProperty || []).map(function (p) {
      return { real_property_address: clean(p.address), real_property_ownership: clean(p.ownership), real_property_county_state: clean(p.countyState), real_property_deed_reference: clean(p.deedReference) };
    }).filter(function (p) { return p.real_property_address; });
    v.asset_bank = a.assetBank === 'yes';
    v.bank_accounts = (a.bankAccounts || []).map(function (p) {
      return { bank_institution: clean(p.institution), bank_type: clean(p.type), bank_last4: clean(p.last4), bank_ownership: clean(p.ownership) };
    }).filter(function (p) { return p.bank_institution; });
    v.asset_brokerage = a.assetBrokerage === 'yes';
    v.brokerage_accounts = (a.brokerageAccounts || []).map(function (p) {
      return { brokerage_institution: clean(p.institution), brokerage_type: clean(p.type), brokerage_last4: clean(p.last4), brokerage_ownership: clean(p.ownership) };
    }).filter(function (p) { return p.brokerage_institution; });
    v.asset_business = a.assetBusiness === 'yes';
    v.business_interests = (a.businessInterests || []).map(function (p) {
      return { business_name: clean(p.name), business_interest: clean(p.interest), business_state: clean(p.state), business_ownership: clean(p.ownership) };
    }).filter(function (p) { return p.business_name; });
    v.asset_tangible = a.assetTangible === 'yes';
    return v;
  }
  var RENDER_SCHEDA = {
    start: function () {
      return stepHead('First, tell us about your trust', 'Schedule A belongs to a trust you already have, so we need its name and date to identify it.') +
        field('Is this a single-trustmaker trust or a joint trust?', pills('trustType', [['SINGLE', 'Single trustmaker'], ['JOINT', 'Joint (married couple or partners)']], true)) +
        field('Name of the trust', text('trustName', 'For example, The Alvarez Family Trust'), 'Type it exactly as it appears on the trust.') +
        field('Date the trust was originally signed', '<input class="input" type="date" data-k="origTrustDate" value="' + val(answers.origTrustDate) + '">') +
        field('Has the trust been restated since then?', pills('trustRestated', [['yes', 'Yes'], ['no', 'No']], true)) +
        (answers.trustRestated === 'yes' ? field('Date of the most recent restatement', '<input class="input" type="date" data-k="restatementDate" value="' + val(answers.restatementDate) + '">') : '');
    },
    trustmakers: function () {
      var h = stepHead('Trustmakers', '');
      if (answers.trustType === 'JOINT') {
        h += field('First Trustmaker’s full legal name', text('tm1Name', ''));
        h += field('Second Trustmaker’s full legal name', text('tm2Name', ''));
      } else {
        h += field('Trustmaker’s full legal name', text('tm1Name', ''));
      }
      return h;
    },
    assets: function () {
      function assetBlock(flagKey, label, listKey, cols) {
        var h = field(label, pills(flagKey, [['yes', 'Yes'], ['no', 'No']], true));
        if (answers[flagKey] === 'yes') {
          h += '<div class="rowset">' + answers[listKey].map(function (row, i) {
            return '<div class="rowitem two">' + cols.map(function (c) {
              return '<input class="input" data-list="' + listKey + '" data-i="' + i + '" data-f="' + c.f + '" value="' + val(row[c.f]) + '" placeholder="' + c.ph + '">';
            }).join('') + rm(listKey, i, label.toLowerCase() + ' ' + (i + 1), answers[listKey].length > 1) + '</div>';
          }).join('') + '</div>' + addBtn(listKey, '+ Add another');
        }
        return h;
      }
      return stepHead('What is in your trust?', 'List what you have placed in the trust, or plan to. Listing something here doesn’t replace a deed or an account change. Never enter a full account number.') +
        assetBlock('assetRealProperty', 'Real estate', 'realProperty', [{ f: 'address', ph: 'Address' }, { f: 'ownership', ph: 'Ownership (e.g., sole owner)' }]) +
        assetBlock('assetBank', 'Bank or credit union accounts', 'bankAccounts', [{ f: 'institution', ph: 'Institution' }, { f: 'last4', ph: 'Last 4 digits' }]) +
        assetBlock('assetBrokerage', 'Investment or brokerage accounts', 'brokerageAccounts', [{ f: 'institution', ph: 'Institution' }, { f: 'last4', ph: 'Last 4 digits' }]) +
        assetBlock('assetBusiness', 'Business interests', 'businessInterests', [{ f: 'name', ph: 'Business name' }, { f: 'interest', ph: 'Your interest (e.g., 50% member)' }]) +
        field('Household goods and other tangible personal property', pills('assetTangible', [['yes', 'Yes'], ['no', 'No']], true), 'Furniture, jewelry, art, and similar belongings, as a group.');
    },
    review: function () {
      var v = buildVarsScheduleA(answers, states, tpl.settings);
      var instr = toHtml(renderNodes(sign.nodes, v), 'signing').replace(/<span class="(?:fill|blank)">/g, '<span>');
      function row(label, value, goto) {
        return '<div class="sum-row"><div><span class="sum-l">' + label + '</span><span class="sum-v">' + (value || '<em>Not answered</em>') + '</span></div><button type="button" class="link" data-goto="' + goto + '">Change</button></div>';
      }
      var counts = [];
      if (v.asset_real_property) counts.push(v.real_property.length + ' real estate');
      if (v.asset_bank) counts.push(v.bank_accounts.length + ' bank');
      if (v.asset_brokerage) counts.push(v.brokerage_accounts.length + ' investment');
      if (v.asset_business) counts.push(v.business_interests.length + ' business');
      if (v.asset_tangible) counts.push('household goods');
      return stepHead('Your Schedule A is ready to review', 'Read every word, then print it and sign. No witness or notary is required.') +
        '<div class="sum">' +
        row('Trust name', esc(v.trust_name), 'start') +
        row('Trustmaker(s)', [v.tm1_name, v.tm2_name].filter(Boolean).map(esc).join(' and '), 'trustmakers') +
        row('Property listed', esc(counts.join(', ')), 'assets') + '</div>' +
        '<div class="actions">' +
        '<button type="button" class="btn btn-primary" data-pdf>Download PDF</button>' +
        '<button type="button" class="btn btn-secondary" data-word>Download for Word</button>' +
        '<button type="button" class="btn btn-secondary" data-print>Print</button>' +
        '<button type="button" class="btn btn-secondary see-doc" data-pane="p">View your document</button></div>' +
        '<p class="hint export-status" id="export-status" role="status">The PDF and Word files have “Page X of Y” at the bottom of every page.</p>' +
        (draft ? '<p class="draft-inline">This is a sample version, so it can’t be signed yet.</p>' : '') +
        '<div class="instr">' + instr + '</div>' +
        '<p class="reset"><button type="button" class="link" data-reset>Start over</button></p>';
    }
  };
  function validateScheduleA(id) {
    var a = answers, e = [];
    if (id === 'start') {
      if (!clean(a.trustName)) e.push('Name the trust.');
      if (!a.origTrustDate) e.push('Enter the date the trust was originally signed.');
      if (!a.trustRestated) e.push('Answer whether the trust has been restated.');
      if (a.trustRestated === 'yes' && !a.restatementDate) e.push('Enter the date of the most recent restatement.');
    } else if (id === 'trustmakers') {
      if (!clean(a.tm1Name)) e.push(a.trustType === 'JOINT' ? 'Enter the first Trustmaker’s full legal name.' : 'Enter the Trustmaker’s full legal name.');
      if (a.trustType === 'JOINT' && !clean(a.tm2Name)) e.push('Enter the second Trustmaker’s full legal name.');
    } else if (id === 'assets') {
      var groups = [['assetRealProperty', 'realProperty', 'address', 'real estate'], ['assetBank', 'bankAccounts', 'institution', 'bank account'], ['assetBrokerage', 'brokerageAccounts', 'institution', 'investment account'], ['assetBusiness', 'businessInterests', 'name', 'business']];
      var any = a.assetTangible === 'yes';
      groups.forEach(function (g) {
        if (a[g[0]] === 'yes') {
          any = true;
          if (!(a[g[1]] || []).some(function (r) { return clean(r[g[2]]); })) e.push('Add at least one ' + g[3] + ', or answer No.');
        }
        if (!a[g[0]]) e.push('Answer whether you have a ' + g[3] + ' to list.');
      });
      if (!a.assetTangible) e.push('Answer whether to include household goods.');
      if (!any && !e.length) e.push('Choose at least one kind of property to list.');
    }
    return e;
  }

  /* ---------- put the chosen kind together ---------- */
  var KINDS = {
    will: { key: 'will', ls: 'grapevine.will.v2', file: 'Last-Will-and-Testament', footer: function (n) { return 'Last Will and Testament of ' + n; },
      empty: EMPTY_WILL, rows: ROWS_WILL, steps: STEPS_WILL, render: RENDER_WILL, validate: validateWill, buildVars: buildVarsWill },
    pourover: { key: 'pourover', ls: 'grapevine.pourover.v1', file: 'Pour-Over-Will', footer: function (n) { return 'Pour-Over Will For ' + n; },
      empty: EMPTY_PO, rows: ROWS_PO, steps: STEPS_PO, render: RENDER_PO, validate: validatePO, buildVars: buildVarsPO },
    dpoa: { key: 'dpoa', ls: 'grapevine.dpoa.v1', file: 'Durable-Power-of-Attorney', footer: function (n) { return 'Durable Power of Attorney of ' + n; },
      empty: EMPTY_DP, rows: ROWS_DP, steps: STEPS_DP, render: RENDER_DP, validate: validateDP, buildVars: buildVarsDP },
    dementia: { key: 'dementia', ls: 'grapevine.dementia.v1', file: 'Dementia-Care-Preferences', footer: function (n) { return 'Dementia and Cognitive Decline Care Preferences of ' + n; },
      empty: EMPTY_DEM, rows: ROWS_DEM, steps: STEPS_DEM, render: RENDER_DEM, validate: validateDementia, buildVars: buildVarsDementia },
    hcd: { key: 'hcd', ls: 'grapevine.hcd.v1', file: 'Health-Care-Directive', footer: function (n) { return 'Health Care Directive of ' + n; },
      empty: EMPTY_HCD, rows: ROWS_HCD, steps: STEPS_HCD, render: RENDER_HCD, validate: validateHCD, buildVars: buildVarsHCD },
    hipaa: { key: 'hipaa', ls: 'grapevine.hipaa.v1', file: 'HIPAA-Authorization', footer: function (n) { return 'HIPAA Authorization of ' + n; },
      empty: EMPTY_HIPAA, rows: ROWS_HIPAA, steps: STEPS_HIPAA, render: RENDER_HIPAA, validate: validateHipaa, buildVars: buildVarsHipaa },
    trust: { key: 'trust', ls: 'grapevine.trust.v1', file: 'Revocable-Living-Trust', footer: function (n) { return 'Revocable Living Trust of ' + n; },
      empty: EMPTY_TRUST, rows: ROWS_TRUST, steps: STEPS_TRUST, render: RENDER_TRUST, validate: validateTrust, buildVars: buildVarsTrust },
    trustjoint: { key: 'trustjoint', ls: 'grapevine.trustjoint.v1', file: 'Joint-Revocable-Living-Trust', footer: function (n) { return 'Revocable Living Trust of ' + n; },
      empty: EMPTY_TRUST_JOINT, rows: ROWS_TRUST_JOINT, steps: STEPS_TRUST_JOINT, render: RENDER_TRUST_JOINT, validate: validateTrustJoint, buildVars: buildVarsTrustJoint },
    cert: { key: 'cert', ls: 'grapevine.cert.v1', file: 'Certification-of-Trust', footer: function (n) { return 'Certification of Trust of ' + n; },
      empty: EMPTY_CERT, rows: ROWS_CERT, steps: STEPS_CERT, render: RENDER_CERT, validate: validateCert, buildVars: buildVarsCert },
    affidavit: { key: 'affidavit', ls: 'grapevine.affidavit.v1', file: 'Affidavit-of-Trustee', footer: function (n) { return 'Affidavit of Trustee of ' + n; },
      empty: EMPTY_AFFIDAVIT, rows: ROWS_AFFIDAVIT, steps: STEPS_AFFIDAVIT, render: RENDER_AFFIDAVIT, validate: validateAffidavit, buildVars: buildVarsAffidavit },
    assignment: { key: 'assignment', ls: 'grapevine.assignment.v1', file: 'Assignment-of-Personal-Property-to-Trust', footer: function (n) { return 'General Assignment of Personal Property to Trust of ' + n; },
      empty: EMPTY_ASSIGNMENT, rows: ROWS_ASSIGNMENT, steps: STEPS_ASSIGNMENT, render: RENDER_ASSIGNMENT, validate: validateAssignment, buildVars: buildVarsAssignment },
    finalwishes: { key: 'finalwishes', ls: 'grapevine.finalwishes.v1', file: 'Final-Wishes', footer: function (n) { return 'Final Wishes of ' + n; },
      empty: EMPTY_FINALWISHES, rows: ROWS_FINALWISHES, steps: STEPS_FINALWISHES, render: RENDER_FINALWISHES, validate: validateFinalWishes, buildVars: buildVarsFinalWishes },
    schedulea: { key: 'schedulea', ls: 'grapevine.schedulea.v1', file: 'Schedule-A-Trust-Property', footer: function (n) { return 'Schedule A to ' + n; },
      empty: EMPTY_SCHEDA, rows: ROWS_SCHEDA, steps: STEPS_SCHEDA, render: RENDER_SCHEDA, validate: validateScheduleA, buildVars: buildVarsScheduleA },
    contacts: { key: 'contacts', ls: 'grapevine.contacts.v1', file: 'Important-Contacts', footer: function (n) { return 'Important Contacts for ' + n; },
      empty: EMPTY_CONTACTS, rows: ROWS_CONTACTS, steps: STEPS_CONTACTS, render: RENDER_CONTACTS, validate: validateContacts, buildVars: buildVarsContacts }
  };
  KIND = KINDS[kindKey];
  buildVars = KIND.buildVars; LS_KEY = KIND.ls + (SPOUSE2 ? '.s2' : '');

  var answers = clone(KIND.empty), stepId = 'start', errors = [], restored = false;
  try {
    var saved = JSON.parse(localStorage.getItem(LS_KEY) || 'null');
    if (saved && saved.answers) { answers = Object.assign(clone(KIND.empty), saved.answers); stepId = saved.step || 'start'; restored = stepId !== 'start' || !!answers.state; }
  } catch (e) { /* storage unavailable: carry on without saving */ }
  applyProfile(answers, KIND);
  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify({ answers: answers, step: stepId })); } catch (e) { /* ignore */ }
    saveProfile(answers, KIND);
  }

  /* ---------- show the current step ---------- */
  function draw(focusSel) {
    if (kindKey === 'dpoa') {
      var gov = dpGov(answers);
      if (gov && !DP_CACHE[gov] && !DP_FAIL[gov] && !DP_PENDING[gov]) dpLoad(gov, function () { draw(focusSel); });
    }
    if (kindKey === 'hcd') {
      if (answers.state && !HCD_CACHE[answers.state] && !HCD_FAIL[answers.state] && !HCD_PENDING[answers.state]) hcdLoad(answers.state, function () { draw(focusSel); });
    }
    if (kindKey === 'hipaa') {
      if (answers.state && !HIPAA_CACHE[answers.state] && !HIPAA_FAIL[answers.state] && !HIPAA_PENDING[answers.state]) hipaaLoad(answers.state, function () { draw(focusSel); });
    }
    var flow = window.GVFlow && window.GVFlow.current();
    var inFlow = !!(flow && flow.docs.indexOf(docId) > -1 && !(flow.plan === 'doc' && flow.docs.length === 1));
    var flowIdx = inFlow ? flow.docs.indexOf(docId) : -1;
    var isLastInFlow = inFlow && flowIdx === flow.docs.length - 1;
    var nextKind = inFlow && !isLastInFlow ? flow.docs[flowIdx + 1] : null;

    var vis = visibleSteps(answers);
    if (!vis.some(function (s) { return s.id === stepId; })) stepId = vis[0].id;
    var idx = vis.map(function (s) { return s.id; }).indexOf(stepId);
    var pct = Math.round((idx / (vis.length - 1)) * 100);
    if (inFlow) paintPkgHero(flow, flowIdx);
    progEl.innerHTML = (inFlow ? renderPkgTrack(flow, flowIdx) : '') +
      '<div class="p-top"><span>' + esc(vis[idx].label) + '</span><span>Step ' + (idx + 1) + ' of ' + vis.length + '</span></div>' +
      '<div class="pbar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"><i style="width:' + Math.max(pct, 6) + '%"></i></div>';
    var err = errors.length ? '<div class="errs" role="alert"><strong>Almost there.</strong><ul>' + errors.map(function (m) { return '<li>' + esc(m) + '</li>'; }).join('') + '</ul></div>' : '';
    var note = (restored && stepId !== 'start') ? '<p class="restored">Welcome back. We restored your answers from this browser.</p>' : '';
    if (skipNote) {
      note = '<p class="restored">We used the name from your earlier answers: ' + esc(skipNote.name) + '. <button type="button" class="link" data-goto="' + esc(skipNote.id) + '">Change</button></p>';
      skipNote = null;
    }
    var st = states.map[answers.state];
    var unsupported = stepId === 'start' && st && !st.supported ? '<div class="errs"><strong>' + esc(st.name) + '</strong><p>' + esc(st.note || 'We can\u2019t offer a will in this state yet.') + '</p></div>' : '';
    var nav = stepId === 'review' ? '<div class="nav-row"><button type="button" class="btn btn-secondary" data-back>Back</button></div>' :
      '<div class="nav-row">' + (idx > 0 ? '<button type="button" class="btn btn-secondary" data-back>Back</button>' : '<span></span>') +
      '<button type="button" class="btn btn-primary" data-next>Continue <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></button></div>';
    stepEl.innerHTML = note + err + (SPOUSE2 && stepId === 'start' ? mirrorBox() : '') + unsupported + KIND.render[stepId]() + nav;
    if (stepId === 'review') {
      if (inFlow) {
        window.GVFlow.markDone(docId);
        if (isLastInFlow) {
          var actionsEl = stepEl.querySelector('.actions');
          if (actionsEl) insertHtmlBefore(renderPkgComplete(flow, kindKey), actionsEl);
          addPaywallBanner();
        } else if (!paidUp()) {
          /* Not paid yet: hide this document's own download buttons and point to the next
             document instead -- downloading unlocks once the whole package is answered and paid
             for, at the last document's review screen. Already paid (for example someone who
             bought the plan before, revisiting)? Leave this document's own buttons showing, since
             there's nothing left to wait for. */
          var actionsEl2 = stepEl.querySelector('.actions');
          if (actionsEl2 && nextKind) actionsEl2.outerHTML = renderPkgContinue(nextKind);
        }
      } else {
        addPaywallBanner();
      }
    }
    if (focusSel) { var f = stepEl.querySelector(focusSel); if (f) f.focus(); }
    renderDoc(); save();
  }

  /* ---------- "mirror image": the second person's copy of a document can start as a copy of the first
     person's, with the two people swapped -- wherever the first person named the second person
     (as agent, executor, trustee...), the copy names the first person instead. Anyone else (children,
     a sister as backup agent) stays exactly as entered. Date of birth, phone, and the "I am an adult /
     signing freely" confirmations are cleared so the second person answers those for themselves. ---------- */
  var mirrorOpen = false;
  function firstPersonAnswers() {
    try { var sv = JSON.parse(localStorage.getItem(KIND.ls) || 'null'); return sv && sv.answers && clean(sv.answers.name) ? sv.answers : null; } catch (e) { return null; }
  }
  /* Two spellings count as the same person when the first and last names match, ignoring capitals,
     punctuation, and middle names or initials -- "Lisa Merrill", "lisa l. merrill" and "Lisa L. Merrill" are
     one person, but "Allyson Merrill" is not. A single word only matches the same single word. */
  function nameTokens(x) {
    return String(x || '').toLowerCase().replace(/[^a-z0-9\s'-]/g, ' ').split(/\s+/).filter(Boolean);
  }
  function sameName(a, b) {
    var x = nameTokens(a), y = nameTokens(b);
    if (!x.length || !y.length) return false;
    if (x.length === 1 || y.length === 1) return x.join(' ') === y.join(' ');
    /* drop single-letter middle initials, then compare first and last */
    var xi = x.filter(function (t, i) { return t.length > 1 || i === 0 || i === x.length - 1; });
    var yi = y.filter(function (t, i) { return t.length > 1 || i === 0 || i === y.length - 1; });
    return xi[0] === yi[0] && xi[xi.length - 1] === yi[yi.length - 1];
  }
  function swapNames(v, n1, n2) {
    if (typeof v === 'string') {
      if (sameName(v, n2)) return n1;
      if (sameName(v, n1)) return n2;
      return v;
    }
    if (Array.isArray(v)) return v.map(function (x) { return swapNames(x, n1, n2); });
    if (v && typeof v === 'object') { var o = {}; Object.keys(v).forEach(function (k) { o[k] = swapNames(v[k], n1, n2); }); return o; }
    return v;
  }
  function mirrorBox() {
    if (answers._mirroredFrom) {
      return '<div class="mirror-box mirror-done"><p><strong>Mirrored from ' + esc(answers._mirroredFrom) + '\u2019s document.</strong> Everything is filled in with the two of you swapped. Step through and change anything that should be different.</p></div>';
    }
    var first = firstPersonAnswers();
    if (!first) {
      return '<div class="mirror-box"><p><strong>Want this to mirror the first person\u2019s document?</strong> Answer the first person\u2019s ' + esc(KIND.file.replace(/-/g, ' ')) + ' first (it comes right before this one), then come back here.</p></div>';
    }
    var n1 = clean(first.name);
    /* the second person's name, worked out for the user: what's already known about them (typed earlier, or
       named as spouse), else the person the first document names as its main agent or representative --
       shown as a guess to confirm, since that person is usually, but not always, the spouse */
    function notFirst(x) { x = clean(x); return x && !sameName(x, n1) ? x : ''; }
    var known = notFirst(answers.name) || notFirst(readProfile().name2) || notFirst(first.spouse) || notFirst(first.otherTrustmaker);
    var fromAgent = notFirst(first.agent) || notFirst(first.agentName) || notFirst(first.executor);
    var guess = known || fromAgent;
    var guessNote = !guess ? '' : (known
      ? '<p class="hint">We filled this in from your earlier answers. Change it if it isn’t right.</p>'
      : '<p class="hint">We guessed this from who ' + esc(n1) + ' named as their agent. Change it if that person isn’t the spouse or partner.</p>');
    return '<div class="mirror-box">' +
      '<label class="mirror-check"><input type="checkbox" id="mirror-on"' + (mirrorOpen ? ' checked' : '') + '> <span><strong>Mirror image of ' + esc(n1) + '\u2019s document</strong><br>' +
      'Copy ' + esc(n1) + '\u2019s answers and flip the roles, so whoever ' + esc(n1) + ' named as agent or executor is swapped with the other spouse or partner.</span></label>' +
      '<div class="mirror-panel" id="mirror-panel"' + (mirrorOpen ? '' : ' hidden') + '>' +
      '<label class="mirror-name" for="mirror-name">This copy is for (full legal name, exactly as ' + esc(n1) + ' typed it in their document)</label>' +
      '<input class="input" type="text" id="mirror-name" value="' + val(guess) + '" autocomplete="off">' +
      guessNote +
      '<button type="button" class="btn btn-secondary" data-mirror-apply>Copy and flip</button></div></div>';
  }
  function applyMirror() {
    var first = firstPersonAnswers(), input = document.getElementById('mirror-name');
    var n2 = input ? clean(input.value) : '';
    if (!first || n2.length < 2) { errors = ['Type the name this copy is for, then choose Copy and flip.']; mirrorOpen = true; draw(); return; }
    var n1 = clean(first.name);
    var src = swapNames(clone(first), n1, n2);
    src.name = n2;
    if ('spouse' in src && !clean(src.spouse)) src.spouse = n1;
    ['dob', 'phone'].forEach(function (k) { if (k in src) src[k] = ''; });
    ['ageOk', 'freeOk', 'trustOk'].forEach(function (k) { if (k in src) src[k] = false; });
    answers = Object.assign(clone(KIND.empty), src);
    answers._mirroredFrom = n1;
    errors = []; mirrorOpen = false;
    go('start', { quiet: true });
  }

  /* ---------- payment: downloading and printing unlock when the visitor has paid (see js/checkout.js
     and js/entitlements.js). The document itself previews for free at every step, including this one. */
  function paidUp() { return !window.GVPay || window.GVPay.hasPaid(kindKey); }
  function checkoutHref() {
    var f = window.GVFlow && window.GVFlow.current();
    var plan = (f && f.docs.indexOf(docId) > -1) ? f.plan : (window.GVPay ? window.GVPay.planForDoc(kindKey) : 'essentials');
    /* "return" must stay this document's plain filename (not GVUrl-resolved) -- checkout.js looks
       it up by that exact filename in its own RETURN_LABELS/RETURN_DOC tables and only resolves it
       to a real link at the point it's rendered. GVFlow.pageFor always returns the plain filename
       here since GVUrl is applied by callers, not inside pageFor itself. location.pathname would
       give the artifact's own address on a preview, not this document's filename -- pageFor is the
       correct source either way. */
    var backTo = window.GVFlow ? window.GVFlow.pageFor(kindKey) : (kindKey + '.html');
    return window.GVUrl('checkout.html') + '?plan=' + plan + '&return=' + encodeURIComponent(backTo);
  }

  /* ---------- package flow: Essentials/Complete answer every document back to back (js/flow.js
     tracks which plan and which documents; this just draws it). ---------- */
  function pageUrl(id) {
    var p = window.GVFlow.pageFor(id), q = '', i = p.indexOf('?');
    if (i > -1) { q = p.slice(i); p = p.slice(0, i); }
    return window.GVUrl(p) + q;
  }
  /* Inside a package, the page's own heading ("Let's write your pour-over will", "Don't have a trust yet?
     write a regular will instead") would contradict what the person is doing, so it's replaced with
     package wording and the alternative-document links are hidden. */
  function paintPkgHero(f, idx) {
    var hero = document.querySelector('.will-hero'); if (!hero || f.plan === 'doc') return;
    var over = hero.querySelector('.overline'), h1 = hero.querySelector('h1'), lead = hero.querySelector('.lead'), sw = hero.querySelector('.kind-switch');
    if (over) over.textContent = 'Document ' + (idx + 1) + ' of ' + f.docs.length + ' \u00b7 ' + window.GVFlow.labelFor(docId);
    if (h1) h1.textContent = 'Let\u2019s write your ' + pkgName(f) + ' package';
    if (lead) lead.textContent = 'You\u2019ll answer a few plain questions for each of the ' + f.docs.length + ' documents, one after another, and watch each take shape. Names and details you\u2019ve already given carry over, so you only type them once. Your answers stay in this browser.';
    if (sw) sw.hidden = true;
  }
  function pkgName(f) {
    var short = { health: 'Health Care', trustpaper: 'Trust Paperwork', doc: 'Document' };
    return short[f.plan] || (f.plan.charAt(0).toUpperCase() + f.plan.slice(1));
  }
  function renderPkgTrack(f, idx) {
    var steps = f.docs.map(function (k, i) {
      var cls = i < idx ? 'pkg-done' : (i === idx ? 'pkg-current' : 'pkg-upcoming');
      var label = (i < idx ? '✓ ' : '') + esc(window.GVFlow.labelFor(k));
      return '<a class="pkg-step ' + cls + '" href="' + esc(pageUrl(k)) + '">' + label + '</a>';
    }).join('<span class="pkg-sep">→</span>');
    var trackLabel = f.plan === 'doc' ? 'One document for each of you — ' + (idx + 1) + ' of ' + f.docs.length : pkgName(f) + ' package — document ' + (idx + 1) + ' of ' + f.docs.length;
    return '<div class="pkg-track"><span class="pkg-label">' + esc(trackLabel) + '</span>' +
      '<div class="pkg-steps">' + steps + '</div></div>';
  }
  function renderPkgContinue(nextKind) {
    var label = window.GVFlow.labelFor(nextKind), page = pageUrl(nextKind);
    return '<div class="actions pkg-continue">' +
      '<p class="pkg-continue-note">This document is answered. Next is your ' + esc(label) + '.</p>' +
      '<a class="btn btn-primary btn-lg" href="' + esc(page) + '">Continue to your ' + esc(label) + ' <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>' +
      '</div>';
  }
  function renderPkgComplete(f, thisKind) {
    var paid = paidUp();
    var rows = f.docs.map(function (k) {
      var label = window.GVFlow.labelFor(k);
      if (k === thisKind) return '<div class="pkg-done-row pkg-current-row"><span class="pkg-check">✓</span><span class="pkg-doc-name">Your ' + esc(label) + '</span><span class="pkg-here">You’re here</span></div>';
      return '<div class="pkg-done-row"><span class="pkg-check">✓</span><span class="pkg-doc-name">Your ' + esc(label) + '</span><a class="link" href="' + esc(pageUrl(k)) + '">' + (paid ? 'Open &amp; download' : 'Open') + '</a></div>';
    }).join('');
    var lede = paid ? 'Every document below is ready. Open each one to download or print it, or get the whole package in one PDF below.' :
      'Every document below is answered and ready. Downloading and printing unlock together, right after you pay.';
    var allPdfBtn = paid && f.docs.length > 1 ? '<button type="button" class="btn btn-primary" data-pkg-pdf>Download all ' + f.docs.length + ' documents as one PDF</button>' : '';
    return '<div class="pkg-complete"><h3>' + (f.plan === 'doc' ? 'Your documents are complete' : 'Your ' + esc(pkgName(f)) + ' package is complete') + '</h3>' +
      '<p>' + lede + '</p><div class="pkg-done-list">' + rows + '</div>' + allPdfBtn + '</div>';
  }
  function insertHtmlBefore(html, ref) {
    var div = document.createElement('div'); div.innerHTML = html;
    ref.parentNode.insertBefore(div.firstChild, ref);
  }
  function addPaywallBanner() {
    var actions = stepEl.querySelector('.actions');
    if (!actions || paidUp()) return;
    var banner = document.createElement('div');
    banner.className = 'unlock-banner';
    banner.innerHTML = '<p><strong>Your document is ready.</strong> Downloading and printing unlock once you choose a plan. Previewing and changing your answers stay free.</p>' +
      '<a class="btn btn-primary" href="' + checkoutHref() + '">See plans and continue <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>';
    actions.parentNode.insertBefore(banner, actions);
    /* not paid yet: the download buttons stay out of sight (they would only bounce to checkout) so the
       banner is the one clear next step; "View your document" and the answers stay available */
    stepEl.querySelectorAll('[data-print], [data-word], [data-pdf], [data-pkg-pdf], .export-status').forEach(function (el) { el.hidden = true; el.style.display = 'none'; });
  }
  function go(id, opts) {
    stepId = id; errors = [];
    draw(opts && opts.focus);
    if (!(opts && opts.quiet)) { var r = stepEl.getBoundingClientRect(); if (r.top < 0) window.scrollTo(0, window.scrollY + r.top - 100); }
  }
  /* "About you" (or "You") steps that only ask what is already answered -- typically the name, carried over
     from an earlier document -- are skipped on the way forward, with a note and a Change link on the next
     screen, so a name is never asked twice. A step with anything still unanswered (a spouse, a date of
     birth) is shown as usual. */
  var skipNote = null;
  var SKIPPABLE = ['about', 'you'];
  function next() {
    errors = KIND.validate(stepId);
    if (errors.length) { draw(); return; }
    var vis = visibleSteps(answers), i = vis.map(function (s) { return s.id; }).indexOf(stepId);
    var j = Math.min(i + 1, vis.length - 1), skipped = null;
    while (j < vis.length - 1 && SKIPPABLE.indexOf(vis[j].id) > -1 && !clean(KIND.validate(vis[j].id).join('')) && clean(answers.name || answers.name1 || answers.tm1Name)) {
      skipped = { id: vis[j].id, name: clean(answers.name || answers.name1 || answers.tm1Name) };
      j++;
    }
    skipNote = skipped;
    go(vis[j].id);
  }
  function back() {
    var vis = visibleSteps(answers), i = vis.map(function (s) { return s.id; }).indexOf(stepId);
    go(vis[Math.max(i - 1, 0)].id);
  }

  /* ---------- events ---------- */
  root.addEventListener('input', function (e) {
    var t = e.target;
    if (t.matches('input[type="text"], input[type="date"], input[type="tel"], input[type="email"], input:not([type]), input[inputmode], select, textarea')) {
      if (t.hasAttribute('data-path')) setPath(answers, t.getAttribute('data-path'), t.value);
      else if (t.hasAttribute('data-k')) answers[t.getAttribute('data-k')] = t.value;
      else if (t.hasAttribute('data-list')) answers[t.getAttribute('data-list')][+t.getAttribute('data-i')][t.getAttribute('data-f')] = t.value;
      if (t.getAttribute('data-f') === 'share') {
        var tot = answers.beneficiaries.reduce(function (s, b) { return s + (parseFloat(b.share) || 0); }, 0), p = document.getElementById('pct-total');
        if (p) p.textContent = 'Shares add up to ' + fmtShare(tot) + '%. They need to add up to 100%.';
      }
      save(); schedulePreview();
    }
  });
  root.addEventListener('change', function (e) {
    var t = e.target;
    if (!t.matches('input, select')) return;
    if (t.id === 'mirror-on') {
      mirrorOpen = t.checked;
      var mp = document.getElementById('mirror-panel'); if (mp) mp.hidden = !t.checked;
      return;
    }
    if (t.type === 'checkbox') {
      if (t.hasAttribute('data-k')) answers[t.getAttribute('data-k')] = t.checked;
      else if (t.hasAttribute('data-list')) answers[t.getAttribute('data-list')][+t.getAttribute('data-i')][t.getAttribute('data-f')] = t.checked;
    } else if (t.type === 'radio' || t.tagName === 'SELECT') {
      if (t.hasAttribute('data-k')) answers[t.getAttribute('data-k')] = t.value;
      else if (t.hasAttribute('data-list')) answers[t.getAttribute('data-list')][+t.getAttribute('data-i')][t.getAttribute('data-f')] = t.value;
      else if (t.hasAttribute('data-path')) setPath(answers, t.getAttribute('data-path'), t.value);
      if (KIND.key === 'will' && t.name === 'residuary') applyPreset(t.value);
    }
    if (t.hasAttribute('data-rerender')) {
      errors = [];
      var sel = t.type === 'radio' ? 'input[name="' + t.name + '"]:checked'
        : (t.hasAttribute('data-k') ? '[data-k="' + t.getAttribute('data-k') + '"]'
          : (t.hasAttribute('data-list') ? '[data-list="' + t.getAttribute('data-list') + '"][data-i="' + t.getAttribute('data-i') + '"][data-f="' + t.getAttribute('data-f') + '"]' : null));
      draw(sel);
    } else { save(); schedulePreview(); }
  });
  var resetArmed = false;
  root.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.hasAttribute('data-mirror-apply')) applyMirror();
    else if (b.hasAttribute('data-next')) next();
    else if (b.hasAttribute('data-back')) back();
    else if (b.hasAttribute('data-goto')) go(b.getAttribute('data-goto'));
    else if (b.hasAttribute('data-add')) {
      var k = b.getAttribute('data-add'); answers[k].push(clone(KIND.rows[k]));
      draw('[data-list="' + k + '"][data-i="' + (answers[k].length - 1) + '"]');
    } else if (b.hasAttribute('data-remove')) {
      var k2 = b.getAttribute('data-remove'); answers[k2].splice(+b.getAttribute('data-i'), 1); draw();
    } else if (b.hasAttribute('data-print') || b.hasAttribute('data-word') || b.hasAttribute('data-pdf')) {
      if (!paidUp()) { location.href = checkoutHref(); return; }
      if (b.hasAttribute('data-print')) printViaPdf();
      else if (b.hasAttribute('data-word')) runExport('docx');
      else runExport('pdf');
    }
    else if (b.hasAttribute('data-pkg-pdf')) {
      if (!paidUp()) { location.href = checkoutHref(); return; }
      var f = window.GVFlow && window.GVFlow.current();
      if (f) downloadPackagePdf(f);
    }
    else if (b.hasAttribute('data-pane')) { setPane(b.getAttribute('data-pane')); }
    else if (b.hasAttribute('data-reset')) {
      if (!resetArmed) { resetArmed = true; b.textContent = 'Click again to erase your answers'; setTimeout(function () { resetArmed = false; if (b.isConnected) b.textContent = 'Start over'; }, 4000); }
      else { answers = clone(KIND.empty); resetArmed = false; restored = false; try { localStorage.removeItem(LS_KEY); } catch (x) { /* ignore */ } go('start'); }
    }
  });

  /* mobile: switch between the questions and the document */
  function setPane(p) {
    layout.setAttribute('data-pane', p);
    document.querySelectorAll('.pane-tabs button').forEach(function (t) { t.setAttribute('aria-pressed', t.getAttribute('data-pane') === p ? 'true' : 'false'); });
    if (p === 'p') window.scrollTo(0, 0);
  }
  document.querySelector('.pane-tabs').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (b) setPane(b.getAttribute('data-pane'));
  });

  /* ---------- download the PDF or the Word file ---------- */
  function exportInfo() {
    var n = footerName();
    var who = (KIND.key === 'trustjoint' ? clean(answers.name1) : n).replace(/[^\w]+/g, '-').replace(/^-|-$/g, '');
    return { base: KIND.file + (who ? '-' + who : ''), footer: KIND.footer(n || (KIND.key === 'dpoa' ? 'Principal' : 'Testator')) };
  }
  function status(msg, bad) {
    var el = document.getElementById('export-status');
    if (el) { el.textContent = msg; el.className = 'hint export-status' + (bad ? ' bad' : ''); }
  }
  function anchorSave(blob, filename) {
    var url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = filename; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 1000);
    return Promise.resolve();
  }
  function deliver(blob, filename) {
    if (window.claude && window.claude.use) {
      return window.claude.use('downloads').then(function (d) { return d ? d.save({ filename: filename, data: blob }) : anchorSave(blob, filename); });
    }
    return anchorSave(blob, filename);
  }
  function exportOptions() {
    var info = exportInfo();
    return { footer: info.footer, draftLabel: draft ? draftLabel : '', title: info.footer, base: info.base };
  }
  /* Print opens the finished PDF (footer, "Page X of Y" and all) instead of printing the web page: browsers
     like Safari and DuckDuckGo ignore the page-footer instructions the web page's own print mode relies on,
     so a printout straight from the page came out with no footer. The PDF always has it. */
  function printViaPdf() {
    function pageFallback() { setFooter(); setPane('p'); setTimeout(function () { window.print(); }, 50); }
    if (!window.GVExport) { pageFallback(); return; }
    var w = null;
    try { w = window.open('', '_blank'); } catch (e) { w = null; }
    var opts = exportOptions();
    status('Preparing your printable PDF...');
    window.GVExport.pdf(toBlocks(docText()), opts).then(function (blob) {
      if (w && !w.closed) {
        w.location.href = URL.createObjectURL(blob);
        status('Your PDF opened in a new tab. Choose Print there.');
        return null;
      }
      return deliver(blob, opts.base + '.pdf').then(function () { status('Your PDF was saved. Open it and choose Print.'); });
    }).catch(function () { if (w && !w.closed) w.close(); status('', false); pageFallback(); });
  }
  function runExport(kind) {
    if (!window.GVExport) { status('The export tools did not load. Try Print instead.', true); return; }
    var opts = exportOptions(), blocks = toBlocks(docText());
    status(kind === 'pdf' ? 'Preparing your PDF...' : 'Preparing your Word file...');
    var work = kind === 'pdf' ? window.GVExport.pdf(blocks, opts) : Promise.resolve(window.GVExport.docx(blocks, opts));
    return work
      .then(function (blob) { return deliver(blob, opts.base + (kind === 'pdf' ? '.pdf' : '.docx')); })
      .then(function () { status('Done. Your file has page numbers on every page.'); })
      .catch(function (e) {
        if (e && e.code === 'declined') status('Cancelled.');
        else status('We could not create the file. Please try Print instead.', true);
      });
  }

  /* ---------- download a whole package as one PDF: reuses every OTHER document's own page to
     render itself (a hidden iframe per document), rather than re-implementing each document's
     per-state loading here -- each page already knows how to build its own blocks correctly.
     window.GrapevineWill.blocks()/.text() (below) is what a hidden iframe is read through. ---------- */
  function loadKindBlocks(kind) {
    return new Promise(function (resolve, reject) {
      var iframe = document.createElement('iframe');
      iframe.setAttribute('aria-hidden', 'true');
      iframe.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;left:-9999px;top:-9999px;';
      var settled = false;
      var giveUp = setTimeout(function () { finish(true); }, 8000);
      function cleanup() { clearTimeout(giveUp); if (iframe.parentNode) iframe.parentNode.removeChild(iframe); }
      function finish(useWhateverWeHave) {
        if (settled) return;
        var api = iframe.contentWindow && iframe.contentWindow.GrapevineWill;
        if (!api) { settled = true; cleanup(); if (useWhateverWeHave) resolve({ blocks: [], footer: '' }); else reject(new Error('no app for ' + kind)); return; }
        settled = true; var got = { blocks: api.blocks(), footer: api.exportOptions().footer }; cleanup(); resolve(got);
      }
      iframe.addEventListener('load', function () {
        var prevText = null, stableReads = 0, tries = 0;
        (function poll() {
          if (settled) return;
          var api = iframe.contentWindow && iframe.contentWindow.GrapevineWill;
          if (!api) { tries++; if (tries > 70) return finish(true); setTimeout(poll, 100); return; }
          var text = api.text();
          if (text === prevText) { stableReads++; if (stableReads >= 2) return finish(false); }
          else { stableReads = 0; prevText = text; }
          tries++;
          if (tries > 70) return finish(false);
          setTimeout(poll, 100);
        })();
      });
      iframe.src = pageUrl(kind);
      document.body.appendChild(iframe);
    });
  }
  function downloadPackagePdf(f) {
    if (!window.GVExport) { status('The export tools did not load. Try downloading each document instead.', true); return; }
    status('Preparing your package PDF... this can take a moment for a longer package.');
    Promise.all(f.docs.map(function (k) { return k === docId ? Promise.resolve({ blocks: toBlocks(docText()), footer: exportOptions().footer }) : loadKindBlocks(k); }))
      .then(function (allBlocks) {
        var combined = [];
        allBlocks.forEach(function (r, i) { if (i > 0) combined.push({ k: 'break', footer: r.footer }); combined.push.apply(combined, r.blocks); });
        var who = clean(readProfile().name || footerName());
        var file = who.replace(/[^\w]+/g, '-').replace(/^-|-$/g, '');
        var opts = { footer: (allBlocks[0] && allBlocks[0].footer) || (pkgName(f) + ' Package of ' + (who || 'Your Documents')), draftLabel: draft ? draftLabel : '', title: pkgName(f) + ' Package', base: 'Grapevine-' + pkgName(f) + '-Package' + (file ? '-' + file : '') };
        return window.GVExport.pdf(combined, opts).then(function (blob) { return deliver(blob, opts.base + '.pdf'); });
      })
      .then(function () { status('Done. Your package PDF has every document, with page numbers running all the way through.'); })
      .catch(function () { status('We could not build the combined PDF. Try downloading each document instead.', true); });
  }

  /* test hook: lets the page be checked without typing */
  window.GrapevineWill = {
    setAnswers: function (o) { Object.assign(answers, o); draw(); },
    load: function (name) { return new Promise(function (ok) { dpLoad(name, ok); }); },
    text: docText, html: function () { return toHtml(docText()); }, blocks: function () { return toBlocks(docText()); }, exportOptions: exportOptions,
    vars: function () { return buildVars(answers, states, tpl.settings); }, validate: function (id) { return KIND.validate(id); }, applyPreset: applyPreset
  };

  draw(null);
})();

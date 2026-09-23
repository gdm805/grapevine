/* Grapevine Learn section.
   You should not need to edit this file. Your articles live in learn/articles.js. */
(function () {
  'use strict';
  var app = document.getElementById('learn-app');
  if (!app) return;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }

  /* ---------- read the articles file ---------- */
  function parse(raw) {
    var text = String(raw || '').replace(/\r/g, '').replace(/^[ \t]*\/\/.*$\n?/gm, '');
    var list = [];
    text.split(/^=== +/m).slice(1).forEach(function (chunk) {
      var nl = chunk.indexOf('\n');
      var slug = chunk.slice(0, nl).trim();
      var rest = chunk.slice(nl + 1), cut = rest.search(/^---\s*$/m);
      if (cut < 0) return;
      var a = { slug: slug, title: slug, category: 'General', date: '', summary: '', body: rest.slice(cut).replace(/^---\s*\n/, '').trim() };
      rest.slice(0, cut).split('\n').forEach(function (l) {
        var m = /^(\w+):\s*(.*)$/.exec(l.trim());
        if (m && a.hasOwnProperty(m[1])) a[m[1]] = m[2].trim();
      });
      a.minutes = Math.max(1, Math.round(a.body.split(/\s+/).length / 200));
      list.push(a);
    });
    return list.sort(function (x, y) { return y.date.localeCompare(x.date); });
  }
  var articles = parse(window.LEARN_ARTICLES);

  /* ---------- article text -> html ---------- */
  function inline(s) {
    var h = esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    return h.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (m, label, url) {
      var u = url.replace(/&amp;/g, '&');
      return /^(https?:\/\/|mailto:|[\w#\-\/.?=&]+$)/.test(u) ? '<a href="' + esc(u) + '">' + label + '</a>' : label;
    });
  }
  function body(text) {
    var html = '', para = [], ul = [];
    function flush() {
      if (para.length) { html += '<p>' + inline(para.join(' ')) + '</p>'; para = []; }
      if (ul.length) { html += '<ul>' + ul.map(function (x) { return '<li>' + inline(x) + '</li>'; }).join('') + '</ul>'; ul = []; }
    }
    text.split('\n').forEach(function (raw) {
      var line = raw.trim(), m;
      if (!line) { flush(); return; }
      if ((m = /^##\s+(.*)$/.exec(line))) { flush(); html += '<h2>' + inline(m[1]) + '</h2>'; }
      else if ((m = /^-\s+(.*)$/.exec(line))) { if (para.length) flush(); ul.push(m[1]); }
      else { if (ul.length) flush(); para.push(line); }
    });
    flush();
    return html;
  }
  function fmtDate(d) {
    var p = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d);
    if (!p) return d;
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][+p[2] - 1] + ' ' + (+p[3]) + ', ' + p[1];
  }

  /* ---------- the two views ---------- */
  var filter = 'All';
  var baseTitle = document.title;
  var metaDesc = document.querySelector('meta[name="description"]');
  var baseDesc = metaDesc ? metaDesc.getAttribute('content') : '';

  function row(a) {
    return '<li><a href="#' + esc(a.slug) + '"><span class="post-main"><span class="post-cat">' + esc(a.category) + '</span><strong>' + esc(a.title) + '</strong><span>' + esc(a.summary) + '</span>' +
      '<span class="post-meta">' + esc(fmtDate(a.date)) + ' &middot; ' + a.minutes + ' min read</span></span>' +
      '<svg class="doc-go" aria-hidden="true"><use href="#i-arrow"/></svg></a></li>';
  }
  function listView() {
    var cats = ['All'].concat(articles.map(function (a) { return a.category; }).filter(function (c, i, arr) { return arr.indexOf(c) === i; }));
    if (cats.indexOf(filter) < 0) filter = 'All';
    var shown = articles.filter(function (a) { return filter === 'All' || a.category === filter; });
    var feat = shown[0], rest = shown.slice(1);
    return '<section class="learn-hero"><div class="container"><p class="overline">Learn</p><h1>Estate planning, <em>explained plainly.</em></h1>' +
      '<p class="lead">Short, clear guides to wills, trusts and the paperwork that protects your family. General information, written for people doing this for the first time.</p></div></section>' +
      '<section class="learn-body"><div class="container">' +
      '<div class="filters" role="group" aria-label="Filter by topic">' + cats.map(function (c) {
        return '<button type="button" class="chip" data-filter="' + esc(c) + '" aria-pressed="' + (c === filter ? 'true' : 'false') + '">' + esc(c) + '</button>';
      }).join('') + '</div>' +
      (feat ? '<a class="feat" href="#' + esc(feat.slug) + '"><span class="post-cat">' + esc(feat.category) + '</span><h2>' + esc(feat.title) + '</h2><p>' + esc(feat.summary) + '</p>' +
        '<span class="post-meta">' + esc(fmtDate(feat.date)) + ' &middot; ' + feat.minutes + ' min read</span><span class="feat-go">Read the article <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></span></a>' : '<p>No articles yet.</p>') +
      (rest.length ? '<ul class="post-list">' + rest.map(row).join('') + '</ul>' : '') +
      '</div></section>';
  }
  function articleView(a) {
    var related = articles.filter(function (x) { return x.slug !== a.slug && x.category === a.category; }).slice(0, 2);
    if (related.length < 2) related = related.concat(articles.filter(function (x) { return x.slug !== a.slug && related.indexOf(x) < 0; })).slice(0, 2);
    return '<article class="article"><div class="container narrow">' +
      '<a class="back" href="#"><svg class="ico flip" aria-hidden="true"><use href="#i-arrow"/></svg> All articles</a>' +
      '<p class="post-cat">' + esc(a.category) + '</p><h1>' + esc(a.title) + '</h1>' +
      '<p class="post-meta">' + esc(fmtDate(a.date)) + ' &middot; ' + a.minutes + ' min read</p>' +
      '<div class="prose">' + body(a.body) + '</div>' +
      '<p class="note"><strong>General information, not legal advice.</strong> Laws differ by state and change over time. Grapevine is not a law firm. For advice about your situation, talk to a licensed attorney in your state.</p>' +
      '<aside class="cta-card"><div><h2>Ready to put this into action?</h2><p>Answer a few plain questions and watch your will take shape.</p></div><a class="btn btn-primary" href="will.html" data-cta>Start your will <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a></aside>' +
      (related.length ? '<section class="related"><h3>Keep reading</h3><ul class="post-list">' + related.map(row).join('') + '</ul></section>' : '') +
      '</div></article>';
  }

  function route() {
    var slug = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    var a = articles.filter(function (x) { return x.slug === slug; })[0];
    if (a) {
      app.innerHTML = articleView(a);
      document.title = a.title + ' | Grapevine';
      if (metaDesc) metaDesc.setAttribute('content', a.summary);
    } else {
      app.innerHTML = listView();
      document.title = baseTitle;
      if (metaDesc) metaDesc.setAttribute('content', baseDesc);
    }
    window.scrollTo(0, 0);
  }
  app.addEventListener('click', function (e) {
    var b = e.target.closest('[data-filter]');
    if (b) { filter = b.getAttribute('data-filter'); app.innerHTML = listView(); }
  });
  window.addEventListener('hashchange', route);
  route();
})();

/* Grapevine package summary (package.html): the last stop in a package, before paying and downloading.
   Lists every document in the package (js/flow.js), shows which are answered, and lets the person jump
   back into any one to review or change the answers ("?review=1" opens that document at its review
   screen). Not paid yet: one "Continue to payment" button for the whole package. Paid: "Download all"
   builds one PDF from every document, the same way the last document used to (a hidden frame per
   document, read through window.GrapevineWill). */
(function () {
  'use strict';
  var root = document.getElementById('pkg-summary');
  if (!root) return;
  var F = window.GVFlow, GV = window.GV_PLANS;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function url(p) { return window.GVUrl ? window.GVUrl(p) : p; }
  /* a document's page, with extra settings added the right way whether or not it already has "?spouse=2" */
  function docHref(id, extra) {
    var p = F.pageFor(id), q = '', i = p.indexOf('?');
    if (i > -1) { q = p.slice(i + 1); p = p.slice(0, i); }
    var all = [q, extra].filter(Boolean).join('&');
    return url(p) + (all ? '?' + all : '');
  }

  /* documents opened from here show a "Back to your package summary" link (js/will.js) */
  try { sessionStorage.setItem('gv.fromSummary', '1'); } catch (e) { /* ignore */ }
  var f = F && F.current();
  if (!f || !f.docs || !f.docs.length) {
    root.innerHTML = '<div class="pkg-summary"><h1>No package in progress</h1>' +
      '<p class="lead">Choose a plan on the Pricing page to start. Your answers are saved in this browser as you go.</p>' +
      '<a class="btn btn-primary" href="' + url('pricing.html') + '">See plans and pricing</a></div>';
    return;
  }

  var names = { will: 'Will', essentials: 'Essentials', complete: 'Complete', health: 'Health Care', trustpaper: 'Trust Paperwork', doc: 'Document' };
  var pkg = names[f.plan] || f.plan;
  var household = f.couple ? 'couple' : 'single';
  var paid = window.GVPay ? f.docs.every(function (k) { return window.GVPay.hasPaid(F.baseOf(k)); }) : true;
  var done = f.done || [];
  var open = f.docs.filter(function (k) { return done.indexOf(k) === -1; });

  function beta() {
    try { return !!(window.GV_BETA && window.GV_BETA.on && localStorage.getItem('grapevine.beta') === '1' && localStorage.getItem('grapevine.beta.used') !== '1'); } catch (e) { return false; }
  }
  var price = GV && GV.priceFor ? GV.priceFor(f.plan, household) : 0;
  var checkoutHref = url('checkout.html') + '?plan=' + encodeURIComponent(f.plan) + '&household=' + household + '&return=package.html';

  var rows = f.docs.map(function (k) {
    var isDone = done.indexOf(k) > -1;
    return '<div class="pkg-sum-row' + (isDone ? '' : ' pkg-sum-open') + '">' +
      '<span class="pkg-check">' + (isDone ? '✓' : '•') + '</span>' +
      '<span class="pkg-doc-name">' + esc(F.labelFor(k)) + '<small>' + (isDone ? 'Answered' : 'Not finished yet') + '</small></span>' +
      '<a class="btn btn-secondary btn-sm" href="' + esc(docHref(k, isDone ? 'review=1' : '')) + '">' + (isDone ? (paid ? 'View, download or print' : 'Review or change') : 'Finish it') + '</a>' +
      '</div>';
  }).join('');

  var note = open.length ?
    '<p class="pkg-sum-warn"><strong>' + open.length + (open.length === 1 ? ' document still needs' : ' documents still need') + ' answers.</strong> Choose “Finish it” next to ' + (open.length === 1 ? 'it' : 'each one') + '.</p>' : '';

  var action;
  if (paid) {
    action = '<div class="pkg-sum-pay"><h2>Download your documents</h2>' +
      '<p>Everything is unlocked. Download or print all ' + f.docs.length + ' documents at once below. To get just one document, choose \u201cView, download or print\u201d next to it: it opens with its own Download PDF and Print buttons. Save your files now: your purchase is remembered only in this browser.</p>' +
      '<div class="pkg-sum-btns"><button type="button" class="btn btn-primary pay-btn" id="dl-all">Download all ' + f.docs.length + ' documents (PDF)</button>' +
      '<button type="button" class="btn btn-secondary" id="print-all">Print all ' + f.docs.length + ' documents</button></div>' +
      '<p class="pkg-status" id="pkg-status" role="status"></p><div class="pkg-save" id="pkg-save" hidden></div></div>';
  } else {
    var b = beta();
    action = '<div class="pkg-sum-pay"><h2>Ready to download?</h2>' +
      '<p>' + (b ? 'Last step: answer a short survey (about 5 minutes) and submit it. Then your documents are free to download and print.' : 'Pay ' + (price ? '$' + price : '') + ' once to download and print all ' + f.docs.length + ' documents.') +
      ' Previewing and changing your answers stay free, before and after.</p>' +
      '<a class="btn btn-primary pay-btn" href="' + esc(checkoutHref) + '">' + (b ? 'Take the survey' : 'Continue to payment') + ' <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a></div>';
  }

  var prof = {};
  try { prof = JSON.parse(localStorage.getItem('grapevine.profile.v1') || '{}') || {}; } catch (e) { prof = {}; }
  var aboutRow = '<div class="pkg-sum-row"><span class="pkg-check">' + (prof.aboutDone ? '✓' : '•') + '</span>' +
    '<span class="pkg-doc-name">Personal information<small>' + esc([prof.name, prof.name2].filter(Boolean).join(' and ') || 'Not finished yet') + '</small></span>' +
    '<a class="btn btn-secondary btn-sm" href="' + esc(url('about-you.html') + '?next=package.html') + '">' + (prof.aboutDone ? 'Review or change' : 'Finish it') + '</a></div>';
  rows = aboutRow + rows;
  root.innerHTML = '<div class="pkg-summary">' +
    '<p class="overline">Your ' + esc(pkg) + ' package' + (f.couple ? ' for both of you' : '') + '</p>' +
    '<h1>Review your package</h1>' +
    '<p class="lead">Here is every document in your package. Open any one to read it again or change an answer, then come back here. Your answers are saved in this browser.</p>' +
    note + '<div class="pkg-sum-list">' + rows + '</div>' + action + '</div>';

  /* ---------- Download all: one PDF built from every document ---------- */
  function status(msg, bad) {
    var el = document.getElementById('pkg-status');
    if (el) { el.textContent = msg; el.className = 'pkg-status' + (bad ? ' bad' : ''); }
  }
  function loadKindBlocks(id) {
    return new Promise(function (resolve) {
      var iframe = document.createElement('iframe');
      iframe.setAttribute('aria-hidden', 'true');
      iframe.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;left:-9999px;top:-9999px;';
      var settled = false, giveUp = setTimeout(function () { finish(); }, 12000);
      function finish() {
        if (settled) return; settled = true; clearTimeout(giveUp);
        var api = iframe.contentWindow && iframe.contentWindow.GrapevineWill, got = { blocks: [], footer: '' };
        try { if (api) got = { blocks: api.blocks(), footer: api.exportOptions().footer }; } catch (e) { /* keep empty */ }
        if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
        resolve(got);
      }
      iframe.addEventListener('load', function () {
        var prev = null, stable = 0, tries = 0;
        (function poll() {
          if (settled) return;
          var api = iframe.contentWindow && iframe.contentWindow.GrapevineWill;
          if (api) {
            var t = api.text();
            if (t === prev) { stable++; if (stable >= 2) return finish(); } else { stable = 0; prev = t; }
          }
          if (++tries > 90) return finish();
          setTimeout(poll, 100);
        })();
      });
      iframe.src = docHref(id, 'export=1');
      document.body.appendChild(iframe);
    });
  }
  function offerSave(blob, filename) {
    var box = document.getElementById('pkg-save'); if (!box) return;
    box.innerHTML = '<a class="btn btn-secondary" href="' + URL.createObjectURL(blob) + '" download="' + esc(filename) + '">Save the PDF again</a>' +
      '<span>If nothing downloaded, click this. The file is named <strong>' + esc(filename) + '</strong> and goes to your Downloads folder.</span>';
    box.hidden = false;
  }
  function autoSave(blob, filename) {
    var a = document.createElement('a'), u = URL.createObjectURL(blob);
    a.href = u; a.download = filename; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(u); a.remove(); }, 1500);
  }
  /* build one PDF from every document, one document at a time (so a phone or older computer isn't asked to
     build all of them at once); resolves to { blob, filename } */
  function buildPackage() {
    if (!window.GVExport) return Promise.reject(new Error('no export'));
    var out = [];
    return f.docs.reduce(function (p, id, i) {
      return p.then(function () {
        status('Preparing your package PDF... document ' + (i + 1) + ' of ' + f.docs.length + '.');
        return loadKindBlocks(id).then(function (r) { out.push(r); });
      });
    }, Promise.resolve()).then(function () {
      var combined = [];
      out.forEach(function (r, i) { if (i > 0) combined.push({ k: 'break', footer: r.footer }); combined.push.apply(combined, r.blocks); });
      var who = '';
      try { who = (JSON.parse(localStorage.getItem('grapevine.profile.v1') || '{}') || {}).name || ''; } catch (e) { who = ''; }
      var file = String(who).replace(/[^\w]+/g, '-').replace(/^-|-$/g, '');
      var opts = { footer: (out[0] && out[0].footer) || (pkg + ' Package'), draftLabel: '', title: pkg + ' Package', base: 'Grapevine-' + pkg.replace(/\s+/g, '-') + '-Package' + (file ? '-' + file : '') };
      return window.GVExport.pdf(combined, opts).then(function (blob) { return { blob: blob, filename: opts.base + '.pdf' }; });
    });
  }
  function busy(on) { ['dl-all', 'print-all'].forEach(function (id) { var b = document.getElementById(id); if (b) b.disabled = on; }); }
  /* California: written consent before the first delivery (js/ca-consent.js) */
  function consent(el) {
    if (window.GVCaConsent && window.GVCaConsent.needed()) { window.GVCaConsent.require(function () { el.click(); }); return false; }
    return true;
  }
  var btn = document.getElementById('dl-all');
  if (btn) btn.addEventListener('click', function () {
    if (!consent(btn)) return;
    if (!window.GVExport) { status('The download tools did not load. Open each document to download it instead.', true); return; }
    busy(true);
    status('Preparing your package PDF... this can take up to a minute for a large package.');
    buildPackage().then(function (r) {
      offerSave(r.blob, r.filename);
      autoSave(r.blob, r.filename);
      status('Done. Your package PDF is downloading to your Downloads folder. It has every document, with page numbers running all the way through.');
    }).catch(function () {
      status('We could not build the combined PDF. Open each document to download it instead.', true);
    }).then(function () { busy(false); });
  });
  var pbtn = document.getElementById('print-all');
  if (pbtn) pbtn.addEventListener('click', function () {
    if (!consent(pbtn)) return;
    if (!window.GVExport || !window.GVExport.printStart) { status('The print tools did not load. Open each document to print it instead.', true); return; }
    /* the new tab (where one is needed) must open inside this click, before the PDF is built */
    var job = window.GVExport.printStart();
    busy(true);
    status('Preparing your package to print... this can take up to a minute for a large package.');
    buildPackage().then(function (r) {
      return job.show(r.blob, r.filename, function (blob, name) { offerSave(blob, name); autoSave(blob, name); });
    }).then(function (msg) { status(msg); }).catch(function () {
      job.cancel();
      status('We could not build the combined PDF. Open each document to print it instead.', true);
    }).then(function () { busy(false); });
  });
  /* arriving from the payment page: bring the download box into view */
  if (/[?&]download=all\b/.test(location.search)) {
    var box = root.querySelector('.pkg-sum-pay');
    if (box) setTimeout(function () { box.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 300);
  }
})();

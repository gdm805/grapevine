/* Grapevine will exports: a real Word file (.docx) and a PDF, both with a running
   footer that says "... | Page X of Y". You should not need to edit this file.
   It is called by js/will.js with the will already broken into simple blocks. */
(function () {
  'use strict';

  function plain(s) { return String(s).replace(/[-]/g, ''); }
  function runs(s) {
    s = plain(s);
    var out = [], re = /\*\*(.+?)\*\*/g, last = 0, m;
    while ((m = re.exec(s))) {
      if (m.index > last) out.push({ t: s.slice(last, m.index), b: false });
      out.push({ t: m[1], b: true });
      last = re.lastIndex;
    }
    if (last < s.length) out.push({ t: s.slice(last), b: false });
    return out;
  }
  function unbold(s) { return plain(s).replace(/\*\*/g, ''); }

  /* ================= WORD (.docx) ================= */
  function xe(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function rXml(t, o) {
    o = o || {};
    var rp = (o.b ? '<w:b/>' : '') + (o.caps ? '<w:caps/>' : '') + (o.color ? '<w:color w:val="' + o.color + '"/>' : '') +
      (o.sp ? '<w:spacing w:val="' + o.sp + '"/>' : '') + (o.sz ? '<w:sz w:val="' + o.sz + '"/><w:szCs w:val="' + o.sz + '"/>' : '');
    return '<w:r>' + (rp ? '<w:rPr>' + rp + '</w:rPr>' : '') + '<w:t xml:space="preserve">' + xe(t) + '</w:t></w:r>';
  }
  function tabRun() { return '<w:r><w:tab/></w:r>'; }
  function ppr(o) {
    var s = '';
    if (o.keepNext) s += '<w:keepNext/>';
    if (o.keepLines) s += '<w:keepLines/>';
    if (o.pb) s += '<w:pageBreakBefore/>';
    if (o.bdr) s += o.bdr;
    if (o.tabs) s += '<w:tabs>' + o.tabs + '</w:tabs>';
    s += '<w:spacing w:before="' + (o.before || 0) + '" w:after="' + (o.after == null ? 160 : o.after) + '" w:line="' + (o.line || 264) + '" w:lineRule="auto"/>';
    if (o.left || o.hang || o.right) s += '<w:ind w:left="' + (o.left || 0) + '"' + (o.right ? ' w:right="' + o.right + '"' : '') + (o.hang ? ' w:hanging="' + o.hang + '"' : '') + '/>';
    s += '<w:jc w:val="' + (o.jc || 'both') + '"/>';
    return '<w:pPr>' + s + '</w:pPr>';
  }
  function P(inner, o) { return '<w:p>' + ppr(o || {}) + inner + '</w:p>'; }
  function runsXml(text, extra) {
    return runs(text).map(function (r) { return rXml(r.t, { b: r.b || (extra && extra.b), sz: extra && extra.sz }); }).join('');
  }

  function blockXml(b, pb, prevWasCenter, nextIsSign, nextK) {
    var pbo = pb ? { pb: true } : {};
    function o(x) { return Object.assign({}, x, pbo); }
    switch (b.k) {
      case 'center': {
        var dbl = function (side) { return '<w:' + side + ' w:val="double" w:sz="6" w:space="9" w:color="000000"/>'; };
        var isLastC = nextK !== 'center';
        return P(rXml(unbold(b.t).toUpperCase(), { b: true, sz: 32, sp: 20 }), o({
          jc: 'center', keepNext: true, after: isLastC ? 480 : 0,
          bdr: '<w:pBdr>' + (isLastC ? dbl('bottom') : '') + '</w:pBdr>'
        }));
      }
      case 'article':
        return P(rXml(b.n, { b: true, sz: 20, sp: 40 }) + '<w:r><w:br/></w:r>' + rXml(plain(b.t), { b: true, sz: 26, sp: 20 }),
          o({ jc: 'center', keepNext: true, keepLines: true, before: 480, after: 200 }));
      case 'plain':
        return P(rXml(plain(b.t), { b: true, sz: 26, sp: 20 }), o({ jc: 'center', keepNext: true, keepLines: true, before: 480, after: 200 }));
      case 'section':
        return P(rXml(b.n, { b: true, sz: 20 }) + tabRun() + rXml(plain(b.t), { b: true }),
          o({ jc: 'left', keepNext: true, keepLines: true, before: 280, after: 100, tabs: '<w:tab w:val="left" w:pos="1500"/>', left: 1500, hang: 1500 }));
      case 'hang':
        return P(runsXml(b.t), o({ jc: 'left', left: 720, hang: 360 }));
      case 'row':
        return P(rXml(unbold(b.l)) + (b.r ? tabRun() + rXml(unbold(b.r), { b: true }) : ''),
          o({ jc: 'left', left: 360, after: 100, keepLines: true, tabs: b.r ? '<w:tab w:val="right" w:leader="dot" w:pos="9360"/>' : '' }));
      case 'line':
        return P(rXml(unbold(b.t)), o({ jc: 'left', after: nextK === 'sign' ? 0 : 20, keepNext: nextK === 'sign' || nextK === 'line' }));
      case 'item':
        return P(runsXml(b.t), o({ left: 720, right: 720 }));
      case 'sub':
        return P(rXml(unbold(b.t), { b: true, caps: true, sp: 20, sz: 22 }), o({ jc: 'left', keepNext: true, before: 320, after: 120 }));
      case 'sign':
        return P(tabRun(), o({ jc: 'left', keepNext: true, before: 640, after: 0, tabs: '<w:tab w:val="left" w:leader="underscore" w:pos="5400"/>' })) +
          P(rXml(unbold(b.t), { sz: 20, color: '555555' }), { jc: 'left', keepLines: true, keepNext: !!nextIsSign, after: 160 });
      case 'ul':
        return b.items.map(function (it, i) {
          return P(rXml('•') + tabRun() + runsXml(it), Object.assign({ jc: 'left', left: 720, hang: 360, tabs: '<w:tab w:val="left" w:pos="720"/>' }, i === 0 ? pbo : {}));
        }).join('');
      default:
        return P(runsXml(b.t), o({ keepNext: nextK === 'sign' || nextK === 'line', keepLines: nextK === 'sign' || nextK === 'line' }));
    }
  }

  var CRC = (function () {
    var t = [], c, n, k;
    for (n = 0; n < 256; n++) { c = n; for (k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
    return t;
  })();
  function crc32(u8) { var c = 0xFFFFFFFF; for (var i = 0; i < u8.length; i++) c = CRC[(c ^ u8[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
  function zip(files, mime) {
    var enc = new TextEncoder(), parts = [], central = [], offset = 0;
    files.forEach(function (f) {
      var name = enc.encode(f.name), data = enc.encode(f.data), crc = crc32(data);
      var lh = new DataView(new ArrayBuffer(30));
      lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(12, 0x21, true);
      lh.setUint32(14, crc, true); lh.setUint32(18, data.length, true); lh.setUint32(22, data.length, true); lh.setUint16(26, name.length, true);
      parts.push(lh.buffer, name, data);
      var ch = new DataView(new ArrayBuffer(46));
      ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true); ch.setUint16(14, 0x21, true);
      ch.setUint32(16, crc, true); ch.setUint32(20, data.length, true); ch.setUint32(24, data.length, true); ch.setUint16(28, name.length, true); ch.setUint32(42, offset, true);
      central.push(ch.buffer, name);
      offset += 30 + name.length + data.length;
    });
    var cdSize = central.reduce(function (t, p) { return t + (p.byteLength != null ? p.byteLength : p.length); }, 0);
    var end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true); end.setUint32(12, cdSize, true); end.setUint32(16, offset, true);
    return new Blob(parts.concat(central, [end.buffer]), { type: mime });
  }

  var NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"';
  function docx(blocks, o) {
    var body = '', pb = false, prevCenter = false;
    blocks.forEach(function (b, bi) {
      if (b.k === 'break') { pb = true; return; }
      body += blockXml(b, pb, prevCenter, !!(blocks[bi + 1] && blocks[bi + 1].k === 'sign'), blocks[bi + 1] && blocks[bi + 1].k);
      prevCenter = b.k === 'center'; pb = false;
    });
    var draft = o.draftLabel ? true : false;
    var sect = '<w:sectPr>' + (draft ? '<w:headerReference w:type="default" r:id="rIdH"/>' : '') + '<w:footerReference w:type="default" r:id="rIdF"/>' +
      '<w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr>';
    var head = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
    var fld = function (instr) { return '<w:fldSimple w:instr=" ' + instr + ' "><w:r><w:rPr><w:sz w:val="18"/><w:szCs w:val="18"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple>'; };
    var footer = head + '<w:ftr ' + NS + '><w:p><w:pPr><w:pBdr><w:top w:val="single" w:sz="4" w:space="4" w:color="BEBEBE"/></w:pBdr><w:jc w:val="center"/></w:pPr>' + rXml(o.footer + ' | Page ', { sz: 18 }) + fld('PAGE') + rXml(' of ', { sz: 18 }) + fld('NUMPAGES') + '</w:p></w:ftr>';
    var header = draft ? head + '<w:hdr ' + NS + '><w:p><w:pPr><w:jc w:val="center"/></w:pPr>' + rXml(o.draftLabel, { b: true, sz: 20, color: 'C00000' }) + '</w:p></w:hdr>' : '';
    var files = [
      { name: '[Content_Types].xml', data: head + '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>' +
        '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
        '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>' +
        '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>' +
        (draft ? '<Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/>' : '') + '</Types>' },
      { name: '_rels/.rels', data: head + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>' },
      { name: 'word/document.xml', data: head + '<w:document ' + NS + '><w:body>' + body + sect + '</w:body></w:document>' },
      { name: 'word/_rels/document.xml.rels', data: head + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdS" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
        '<Relationship Id="rIdF" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>' +
        (draft ? '<Relationship Id="rIdH" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/>' : '') + '</Relationships>' },
      { name: 'word/styles.xml', data: head + '<w:styles ' + NS + '><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="Times New Roman" w:cs="Times New Roman"/><w:sz w:val="24"/><w:szCs w:val="24"/><w:lang w:val="en-US"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:widowControl/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style></w:styles>' },
      { name: 'word/footer1.xml', data: footer }
    ];
    if (draft) files.push({ name: 'word/header1.xml', data: header });
    return zip(files, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  }

  /* ================= PDF ================= */
  function loadScript(src, key) {
    return new Promise(function (resolve, reject) {
      var inline = document.querySelector('script[type="text/plain"][data-lib="' + key + '"]');
      var s = document.createElement('script');
      if (inline) { s.text = inline.textContent; document.head.appendChild(s); resolve(); return; }
      s.src = src; s.onload = resolve;
      s.onerror = function () { reject(new Error('Could not load ' + src)); };
      document.head.appendChild(s);
    });
  }
  function loadLibs() {
    return Promise.all([
      window.jspdf ? Promise.resolve() : loadScript('js/vendor/jspdf.umd.min.js', 'jspdf'),
      window.GV_FONTS ? Promise.resolve() : loadScript('js/vendor/tinos-fonts.js', 'fonts')
    ]);
  }

  function pdf(blocks, o) {
    /* the PDF font (Tinos) has no ballot-box character, so print "☐" as a drawn-looking "[  ]" */
    blocks = blocks.map(function (b) { return b.t && b.t.indexOf('\u2610') > -1 ? Object.assign({}, b, { t: b.t.replace(/\u2610/g, '[  ]') }) : b; });
    return loadLibs().then(function () {
      var doc = new window.jspdf.jsPDF({ unit: 'pt', format: 'letter' });
      doc.addFileToVFS('Tinos-Regular.ttf', window.GV_FONTS.regular); doc.addFont('Tinos-Regular.ttf', 'Tinos', 'normal');
      doc.addFileToVFS('Tinos-Bold.ttf', window.GV_FONTS.bold); doc.addFont('Tinos-Bold.ttf', 'Tinos', 'bold');
      doc.setProperties({ title: o.title || 'Will' });

      var PW = 612, PH = 792, M = 72, W = PW - 2 * M, BOTTOM = PH - 76, y = M;
      function font(b, size) { doc.setFont('Tinos', b ? 'bold' : 'normal'); doc.setFontSize(size); }
      function tw(str, b, size) { font(b, size); return doc.getTextWidth(str); }
      function newPage() { doc.addPage(); y = M; }
      function space(h) { if (y + h > BOTTOM) newPage(); }
      function base(size) { return y + size * 0.9; }

      function centered(str, size, bold, cs, color) {
        var width = tw(str, bold, size) + cs * (str.length - 1);
        doc.setTextColor(color || 0, color || 0, color || 0);
        doc.text(str, PW / 2 - width / 2, base(size), { charSpace: cs });
        doc.setTextColor(0, 0, 0);
      }
      function wrapCentered(str, size, bold, cs, color) {
        font(bold, size);
        var lines = doc.splitTextToSize(str, W), lh = size * 1.3;
        space(lh * lines.length);
        lines.forEach(function (l) { centered(l, size, bold, cs, color); y += lh; });
      }

      function toWords(rs) {
        var ws = [];
        rs.forEach(function (r) {
          r.t.split(/(\s+)/).forEach(function (tok) {
            if (!tok) return;
            if (/^\s+$/.test(tok)) { if (ws.length) ws[ws.length - 1].sp = true; }
            else ws.push({ t: tok, b: r.b, sp: false });
          });
        });
        return ws;
      }
      function layout(ws, size, firstW, restW) {
        var lines = [], cur = [], curW = 0, avail = firstW, sp = tw(' ', false, size);
        ws.forEach(function (w) {
          w.w = tw(w.t, w.b, size);
          var gap = cur.length && cur[cur.length - 1].sp ? sp : 0;
          if (cur.length && curW + gap + w.w > avail) { lines.push(cur); cur = []; curW = 0; avail = restW; gap = 0; }
          cur.push(w); curW += gap + w.w;
        });
        if (cur.length) lines.push(cur);
        return lines;
      }
      function drawLine(line, x, size, avail, justify) {
        var sp = tw(' ', false, size), nat = 0, gaps = 0;
        line.forEach(function (w, i) { nat += w.w; if (i < line.length - 1 && w.sp) { nat += sp; gaps++; } });
        var extra = justify && gaps ? Math.max(0, (avail - nat) / gaps) : 0, yy = base(size);
        line.forEach(function (w, i) {
          font(w.b, size); doc.text(w.t, x, yy);
          x += w.w; if (i < line.length - 1 && w.sp) x += sp + extra;
        });
      }
      function para(text, opt) {
        opt = opt || {};
        var size = opt.size || 12, lh = size * 1.34, left = opt.left || 0, first = opt.first || 0;
        var right = opt.right || 0, keep = opt.keep || 0;
        var lines = layout(toWords(runs(text)), size, W - left - right - first, W - left - right), i = 0;
        if (keep && lines.length * lh + keep < BOTTOM - M && y + lines.length * lh + keep > BOTTOM) newPage();
        while (i < lines.length) {
          var remain = lines.length - i, fit = Math.floor((BOTTOM - y) / lh), take = remain;
          if (fit < 1) { newPage(); continue; }
          if (remain > fit) {
            take = fit;
            if (remain - take < 2) take = remain - 2;
            if (take < 2) { newPage(); continue; }
          }
          for (var j = 0; j < take; j++) {
            var last = i + j === lines.length - 1, isFirst = i + j === 0;
            drawLine(lines[i + j], M + left + (isFirst ? first : 0), size, (isFirst ? W - left - right - first : W - left - right), opt.justify !== false && !last);
            y += lh;
          }
          i += take;
          if (i < lines.length) newPage();
        }
        y += opt.after == null ? 8 : opt.after;
      }

      /* how tall is a block? Used to keep a small heading with the lines that belong under it */
      function nlines(text, left, right, first) { return layout(toWords(runs(text)), 12, W - left - right - first, W - left - right).length; }
      function est(b) {
        switch (b.k) {
          case 'sign': return 48;
          case 'line': return 18;
          case 'row': return 22;
          case 'ul': return b.items.length * 24;
          case 'hang': return nlines(b.t, 36, 0, -24) * 16.1 + 8;
          case 'item': return nlines(b.t, 36, 36, 0) * 16.1 + 8;
          default: return nlines(b.t || '', 0, 0, 0) * 16.1 + 8;
        }
      }
      /* height of the small heading at blocks[bi] plus what has to stay with it: a short group stays whole,
         a long one keeps the heading with its first few lines */
      function groupNeed(bi) {
        var head = 36, k = bi + 1;
        if (blocks[k] && blocks[k].k === 'sub') return head + groupNeed(k);
        var full = 0, first = 0, n = 0;
        for (; k < blocks.length; k++) {
          var nb = blocks[k];
          if (/^(sub|article|plain|section|break|center)$/.test(nb.k)) break;
          var eh = est(nb); full += eh; if (!n) first = eh; n++;
        }
        return full <= 330 ? head + full : head + Math.min(first, 58);
      }

      var prevCenter = false;
      /* a combined package PDF marks where each document starts ({k:'break', footer:...}), so every
         document gets its own footer and its own "Page X of Y" */
      var sections = [{ start: 1, footer: o.footer }];
      blocks.forEach(function (b, bi) {
        switch (b.k) {
          case 'center': {
            /* double rule below the title, GAP below the capitals:
               a 16pt line is drawn with its baseline 14.4pt down and capitals ~10.6pt tall, so capitals
               start 3.8pt below the line's top; GAP is the visible space from each rule to the capitals */
            var GAP = 12, CAPTOP = 3.8, BASE = 14.4;
            if (!prevCenter) space(70);
            wrapCentered(unbold(b.t).toUpperCase(), 16, true, 1.4);
            if (!(blocks[bi + 1] && blocks[bi + 1].k === 'center')) {
              var lineH = 16 * 1.3, capBottom = y - lineH + BASE, ry = capBottom + GAP;
              doc.setLineWidth(0.8); doc.line(M, ry, M + W, ry); doc.line(M, ry + 3, M + W, ry + 3);
              y = ry + 3 + 24;
            }
            break;
          }
          case 'article':
            y += 24; space(170);
            centered(b.n, 9, true, 2.4, 70); y += 14;
            wrapCentered(plain(b.t), 13, true, 0.8);
            doc.setDrawColor(150, 150, 150); doc.setLineWidth(0.8); doc.line(PW / 2 - 20, y + 2, PW / 2 + 20, y + 2); doc.setDrawColor(0, 0, 0);
            y += 16; break;
          case 'plain':
            y += 24; space(blocks[bi + 1] && blocks[bi + 1].k === 'sub' ? 60 + groupNeed(bi + 1) : 120); wrapCentered(plain(b.t), 13, true, 0.8); y += 10; break;
          case 'section': {
            y += 12; space(64);
            font(true, 12);
            var tl = doc.splitTextToSize(plain(b.t), W - 96), lh = 12 * 1.3;
            doc.setTextColor(60, 60, 60); font(true, 9); doc.text(b.n, M, base(12) - 1); doc.setTextColor(0, 0, 0);
            font(true, 12);
            tl.forEach(function (l) { doc.text(l, M + 96, base(12)); y += lh; });
            y += 3; break;
          }
          case 'hang': para(b.t, { left: 36, first: -24, justify: false }); break;
          case 'line': {
            var nk2 = blocks[bi + 1] && blocks[bi + 1].k;
            if (nk2 === 'sign') space(80);
            para(b.t, { justify: false, after: 1 }); break;
          }
          case 'item': para(b.t, { left: 36, right: 36 }); break;
          case 'row': {
            var lh2 = 12 * 1.34; space(lh2 + 8);
            font(false, 12); var lt = unbold(b.l), yy = base(12), x1 = M + 22;
            doc.text(lt, x1, yy);
            if (b.r) {
              var rt = unbold(b.r), rw = tw(rt, true, 12); font(true, 12); doc.text(rt, M + W - rw, yy);
              var lx = x1 + tw(lt, false, 12) + 6, rx = M + W - rw - 6;
              if (rx > lx) { doc.setLineWidth(0.7); doc.setLineDashPattern([0.7, 2.6], 0); doc.line(lx, yy - 3, rx, yy - 3); doc.setLineDashPattern([], 0); }
            }
            y += lh2 + 4; break;
          }
          case 'sub': {
            var signs = 0; for (var q = bi + 1; q < blocks.length && blocks[q].k === 'sign'; q++) signs++;
            y += 16; space(Math.max(40 + signs * 54, groupNeed(bi))); font(true, 10.5); doc.text(unbold(b.t).toUpperCase(), M, base(10.5), { charSpace: 1 }); y += 18; break;
          }
          case 'sign':
            y += 26; space(48);
            doc.setLineWidth(0.7); doc.line(M, y, M + 270, y);
            font(false, 9.5); doc.setTextColor(85, 85, 85); doc.text(unbold(b.t), M, y + 12); doc.setTextColor(0, 0, 0);
            y += 22; break;
          case 'ul':
            b.items.forEach(function (it) { space(30); font(false, 12); doc.text('•', M + 12, base(12)); para(it, { left: 36, justify: false, after: 5 }); });
            y += 3; break;
          case 'break':
            /* only a package's document boundary (a break that carries its own footer) restarts "Page X of Y";
               an ordinary page break inside one document (such as before EXECUTION) keeps counting */
            newPage(); if (b.footer) sections.push({ start: doc.getNumberOfPages(), footer: b.footer }); break;
          default: {
            var nk = blocks[bi + 1] && blocks[bi + 1].k;
            para(b.t, { keep: (nk === 'sign' || nk === 'line') ? 80 : 0, justify: !/_{4}/.test(b.t) });
          }
        }
        prevCenter = b.k === 'center';
      });

      /* footer (and sample watermark) on every page */
      var n = doc.getNumberOfPages();
      for (var i = 1; i <= n; i++) {
        doc.setPage(i);
        if (o.draftLabel) {
          doc.saveGraphicsState(); doc.setGState(new doc.GState({ opacity: 0.09 }));
          doc.setTextColor(88, 55, 133); font(true, 34);
          var wl = doc.getTextWidth(o.draftLabel), ang = 35 * Math.PI / 180;
          doc.text(o.draftLabel, PW / 2 - (wl / 2) * Math.cos(ang), PH / 2 + (wl / 2) * Math.sin(ang), { angle: 35 });
          doc.restoreGraphicsState(); doc.setTextColor(0, 0, 0);
        }
        doc.setDrawColor(190, 190, 190); doc.setLineWidth(0.5); doc.line(M, PH - 47, PW - M, PH - 47); doc.setDrawColor(0, 0, 0);
        font(false, 9); doc.setTextColor(70, 70, 70);
        var si = 0;
        for (var q = 0; q < sections.length; q++) if (sections[q].start <= i) si = q;
        var sec = sections[si], secEnd = sections[si + 1] ? sections[si + 1].start - 1 : n;
        var label = sec.footer + ' | Page ' + (i - sec.start + 1) + ' of ' + (secEnd - sec.start + 1);
        doc.text(label, PW / 2 - doc.getTextWidth(label) / 2, PH - 36);
        doc.setTextColor(0, 0, 0);
      }
      return doc.output('blob');
    });
  }

  window.GVExport = { docx: docx, pdf: pdf, runs: runs };
})();

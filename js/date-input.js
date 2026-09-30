/* Grapevine date boxes. Browsers' own date pickers behave differently everywhere (and the year part of
   Safari's and Chrome's is easy to get tangled in), so every <input type="date"> on the site is shown as a
   plain box typed as MM/DD/YYYY: type the numbers and the slashes are added for you, so after two digits the
   cursor is already in the next part. The original date input stays in the page, hidden, and keeps the
   date in the usual YYYY-MM-DD form, so everything that reads or saves answers works as before. The hidden
   input is updated (with an "input" and "change" event) only when a complete, real date has been typed, or
   emptied when the box is cleared. */
(function () {
  'use strict';
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function toShow(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    return m ? m[2] + '/' + m[3] + '/' + m[1] : '';
  }
  /* digits typed so far -> "MM/DD/YYYY" with the slashes filled in. A single digit month above 1 (say "5")
     becomes "05/", and a single digit day above 3 becomes "0x/", so the cursor moves on right away. */
  function format(raw) {
    var d = String(raw || '').replace(/\D/g, '');
    if (d.length === 1 && +d > 1) d = '0' + d;
    if (d.length === 3 && +d.charAt(2) > 3) d = d.slice(0, 2) + '0' + d.charAt(2);
    d = d.slice(0, 8);
    var out = d.slice(0, 2);
    if (d.length >= 2) out += '/' + d.slice(2, 4);
    if (d.length >= 4) out += '/' + d.slice(4, 8);
    return out;
  }
  function toIso(show) {
    var m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(show || '');
    if (!m) return '';
    var mo = +m[1], da = +m[2], yr = +m[3];
    if (yr < 1900 || yr > 2100 || mo < 1 || mo > 12 || da < 1) return '';
    if (da > new Date(yr, mo, 0).getDate()) return '';
    return yr + '-' + pad(mo) + '-' + pad(da);
  }
  function fire(el) {
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }
  function upgrade(orig) {
    if (orig.getAttribute('data-date-done')) return;
    orig.setAttribute('data-date-done', '1');
    var box = document.createElement('input');
    box.type = 'text';
    box.className = orig.className;
    box.setAttribute('inputmode', 'numeric');
    box.setAttribute('autocomplete', orig.getAttribute('autocomplete') || 'off');
    box.setAttribute('placeholder', 'MM/DD/YYYY');
    box.setAttribute('maxlength', '10');
    box.setAttribute('data-date-for', '1');
    if (orig.getAttribute('aria-label')) box.setAttribute('aria-label', orig.getAttribute('aria-label'));
    if (orig.id) { box.id = orig.id; orig.removeAttribute('id'); }
    box.value = toShow(orig.value);
    /* stays a date input (the pages' own code only reads date inputs), just out of sight */
    orig.hidden = true; orig.style.display = 'none'; orig.setAttribute('tabindex', '-1'); orig.setAttribute('aria-hidden', 'true');
    orig.parentNode.insertBefore(box, orig);
    var hint = null;
    function note(msg) {
      if (!msg) { if (hint) { hint.remove(); hint = null; } return; }
      if (!hint) { hint = document.createElement('span'); hint.className = 'hint date-hint'; box.parentNode.insertBefore(hint, orig.nextSibling); }
      hint.textContent = msg;
    }
    box.addEventListener('input', function (e) {
      /* deleting a slash deletes the digit before it, so backspacing never gets stuck */
      var deleting = e.inputType && e.inputType.indexOf('delete') === 0;
      var v = deleting ? box.value.replace(/\/$/, '') : format(box.value);
      if (!deleting && /^\d{2}(\/\d{2})?$/.test(v)) v += '/';
      if (box.value !== v) box.value = v;
      var iso = toIso(v);
      if (iso && iso !== orig.value) { orig.value = iso; fire(orig); }
      if (!v && orig.value) { orig.value = ''; fire(orig); }
      note(v.length === 10 && !iso ? 'Please check this date. Type it as MM/DD/YYYY, for example 03/21/2005.' : '');
    });
    box.addEventListener('blur', function () {
      if (box.value && !toIso(box.value)) note('Please finish this date as MM/DD/YYYY, for example 03/21/2005.');
      if (box.value && !toIso(box.value) && orig.value) { orig.value = ''; fire(orig); }
    });
  }
  function scan(root) {
    Array.prototype.forEach.call((root || document).querySelectorAll('input[type="date"]'), upgrade);
  }
  window.GVDateInput = { scan: scan, toIso: toIso, format: format };
  function start() {
    scan(document);
    /* re-check only when something outside the document preview changes (the preview has no date boxes) */
    if (window.MutationObserver) new MutationObserver(function (list) {
      if (list.every(function (m) { var t = m.target; return t.nodeType === 1 && t.closest && t.closest('.doc'); })) return;
      scan(document);
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

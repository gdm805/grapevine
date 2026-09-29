/* Grapevine phone boxes: as a U.S. phone number is typed, it's shaped as (206) 555-1234 -- the parentheses
   around the area code, the space and the dash are added for you. Works on every phone box on the site
   (type="tel", or marked autocomplete="tel"). Runs before the page's own code saves the answer, so the saved
   answer is the formatted number. A number starting with + (an international number) is left as typed, and
   deleting is never reformatted, so backspacing doesn't get stuck on a parenthesis or dash. */
(function () {
  'use strict';
  function isPhone(el) {
    return !!el && el.tagName === 'INPUT' && (el.type === 'tel' || el.getAttribute('autocomplete') === 'tel');
  }
  function format(v) {
    v = String(v || '');
    if (/^\s*\+/.test(v)) return v;                       /* international: leave it alone */
    var d = v.replace(/\D/g, '');
    if (d.length === 11 && d.charAt(0) === '1') d = d.slice(1);   /* a leading 1 (country code) */
    if (d.length > 10) return v;                          /* more digits than a U.S. number: leave it alone */
    if (!d.length) return '';
    if (d.length < 3) return '(' + d;
    if (d.length === 3) return '(' + d + ') ';
    if (d.length <= 6) return '(' + d.slice(0, 3) + ') ' + d.slice(3);
    return '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6);
  }
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (!isPhone(t)) return;
    if (e.inputType && e.inputType.indexOf('delete') === 0) return;
    var f = format(t.value);
    if (f !== t.value) t.value = f;
  }, true);
  /* when leaving the box: tidy a number typed some other way (pasted, or older answers) */
  document.addEventListener('blur', function (e) {
    var t = e.target;
    if (!isPhone(t) || !t.value) return;
    var f = format(t.value).replace(/[\s(]+$/, '');
    if (f !== t.value) { t.value = f; t.dispatchEvent(new Event('input', { bubbles: true })); }
  }, true);
  window.GVPhoneInput = { format: format };
})();

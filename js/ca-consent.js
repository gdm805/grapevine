/* California written consent before delivery (Cal. Bus. & Prof. Code 6410(f)). A California customer may cancel
   within 24 hours and get their payment back "except fees for services that were actually, necessarily, and
   reasonably performed on the client's behalf ... with the client's knowing and express written consent."
   Delivering the documents (download or print) is that service, so before the FIRST download or print, a
   California customer (state on the "About you" screen) is asked for that consent: a checkbox plus their
   typed full name as an electronic signature. The consent is remembered in this browser with the date and
   time, and a copy of the wording, so it is asked only once.
   Used by js/will.js and js/package.js: GVCaConsent.require(fn) runs fn right away if no consent is needed or
   it was already given, otherwise after the customer agrees. */
window.GVCaConsent = (function () {
  'use strict';
  var KEY = 'grapevine.ca.consent';
  var TEXT = 'I ask Grapevine to deliver my documents now, and I consent to that service being performed for me. ' +
    'I understand that once my documents are delivered, the fee for that service is not refundable under my 24-hour cancellation right.';

  function profile() { try { return JSON.parse(localStorage.getItem('grapevine.profile.v1') || '{}') || {}; } catch (e) { return {}; } }
  function isCA() { return profile().state === 'California'; }
  function given() { try { return !!(JSON.parse(localStorage.getItem(KEY) || 'null') || {}).at; } catch (e) { return false; } }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function require(fn) {
    if (!isCA() || given()) { fn(); return; }
    var old = document.getElementById('ca-consent'); if (old) old.remove();
    var wrap = document.createElement('div');
    wrap.id = 'ca-consent'; wrap.className = 'ca-consent-wrap';
    wrap.setAttribute('role', 'dialog'); wrap.setAttribute('aria-modal', 'true'); wrap.setAttribute('aria-labelledby', 'ca-consent-h');
    wrap.innerHTML = '<div class="ca-consent">' +
      '<h2 id="ca-consent-h">Before your documents are delivered</h2>' +
      '<p>As a California customer, you may cancel within 24 hours of purchase and get your payment back, except fees for services performed for you with your knowing and express written consent. Downloading or printing your documents is that service.</p>' +
      '<label class="check"><input type="checkbox" id="ca-consent-ok"><span>' + esc(TEXT) + '</span></label>' +
      '<label class="ca-consent-name" for="ca-consent-name">Type your full name as your signature</label>' +
      '<input class="input" type="text" id="ca-consent-name" autocomplete="off" value="">' +
      '<p class="ca-consent-err" id="ca-consent-err" role="alert"></p>' +
      '<div class="ca-consent-btns"><button type="button" class="btn btn-secondary" data-ca-no>Not now</button>' +
      '<button type="button" class="btn btn-primary" data-ca-yes>Agree and continue</button></div></div>';
    document.body.appendChild(wrap);
    var box = wrap.querySelector('#ca-consent-ok'), name = wrap.querySelector('#ca-consent-name'), err = wrap.querySelector('#ca-consent-err');
    box.focus();
    wrap.addEventListener('click', function (e) {
      if (e.target.closest('[data-ca-no]') || e.target === wrap) { wrap.remove(); return; }
      if (!e.target.closest('[data-ca-yes]')) return;
      var typed = String(name.value || '').replace(/\s+/g, ' ').trim();
      if (!box.checked) { err.textContent = 'Please tick the box to give your consent.'; return; }
      if (typed.length < 3) { err.textContent = 'Please type your full name.'; return; }
      try { localStorage.setItem(KEY, JSON.stringify({ name: typed, at: new Date().toISOString(), text: TEXT })); } catch (x) { /* storage blocked: still continue */ }
      wrap.remove();
      fn();
    });
    document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { wrap.remove(); document.removeEventListener('keydown', esc); } });
  }
  return { require: require, needed: function () { return isCA() && !given(); }, text: TEXT };
})();

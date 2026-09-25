(function () {
  'use strict';

  /* The Documents page: fills in the price line beside each document from js/plans.js, so a price change
     there shows up here automatically. Couple prices are on the pricing page. */
  var GV = window.GV_PLANS;
  if (!GV) return;
  function money(n) { return '$' + n.toLocaleString('en-US'); }
  var singles = GV.singles || [];

  function priceLine(doc) {
    if (singles.indexOf(doc) > -1) return '<b>' + money(GV.priceFor('doc', 'single')) + '</b> on its own';
    if (doc === 'will') return '<b>' + money(GV.priceFor('will', 'single')) + '</b> Will plan';
    if (doc === 'contacts') return 'Free with every plan';
    /* the pour-over will and both trusts come with the Complete plan */
    return 'In <b>Complete</b>, ' + money(GV.priceFor('complete', 'single'));
  }

  Array.prototype.forEach.call(document.querySelectorAll('.doc-price[data-doc]'), function (el) {
    el.innerHTML = priceLine(el.getAttribute('data-doc'));
  });
})();

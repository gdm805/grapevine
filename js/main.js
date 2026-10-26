(function () {
  'use strict';

  /* Hero: pick a guardian and watch the document update */
  var guardians = [
    { name: 'Lucía Alvarez', rel: 'my sister' },
    { name: 'Marcus Reyes', rel: 'my brother' },
    { name: 'Priya Nair', rel: 'a close friend' }
  ];
  var chips = document.getElementById('chips');
  var gName = document.getElementById('g-name');
  var gRel = document.getElementById('g-rel');
  if (chips && gName && gRel) {
    chips.addEventListener('click', function (e) {
      var b = e.target.closest('.chip');
      if (!b) return;
      var g = guardians[+b.getAttribute('data-i')];
      chips.querySelectorAll('.chip').forEach(function (c) {
        c.setAttribute('aria-checked', c === b ? 'true' : 'false');
      });
      gName.textContent = g.name;
      gRel.textContent = g.rel;
      gName.classList.remove('flash');
      void gName.offsetWidth;
      gName.classList.add('flash');
    });
    chips.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft' && e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      var all = Array.prototype.slice.call(chips.querySelectorAll('.chip'));
      var i = all.indexOf(document.activeElement);
      if (i < 0) return;
      var next = all[(i + (e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : all.length - 1)) % all.length];
      next.focus();
      next.click();
      e.preventDefault();
    });
  }

  /* Plain language: legal wording vs plain words */
  var seg = document.querySelector('.seg');
  if (seg) {
    seg.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      var mode = b.getAttribute('data-mode');
      seg.querySelectorAll('button').forEach(function (x) {
        x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
      });
      document.getElementById('mode-legal').hidden = mode !== 'legal';
      document.getElementById('mode-plain').hidden = mode !== 'plain';
    });
  }

  /* (26 Oct 2026) the six-question "What do people like me choose?" finder was replaced by a neutral
     comparison of what each document does (index.html#finder), so there is no finder code here any more. */
})();

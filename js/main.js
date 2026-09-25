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

  /* Finder: which package and documents fit. Real estate, wanting to skip probate, and owning
     property in more than one state are the classic reasons someone benefits from a trust on top
     of a will -- any one of those points at Complete, same as js/plans.js's own "why" for that
     plan. Otherwise, wanting help with money or medical decisions points at Essentials; a plain
     will covers everything else. */
  var form = document.getElementById('finder-form');
  var list = document.getElementById('results');
  var title = document.getElementById('results-title');
  var why = document.getElementById('results-why');
  var cta = document.getElementById('results-cta');
  var tick = '<span class="tick"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.500l3.200 3L13 4.500"/></svg></span>';
  var PLAN_NAMES = { will: 'Will', essentials: 'Essentials', complete: 'Complete' };
  function answer(name) {
    var el = form.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value === 'y' : false;
  }
  /* the six questions start unanswered; the suggestion appears once every one has an answer */
  var QUESTIONS = ['kids', 'home', 'probate', 'multistate', 'money', 'care'];
  var kicker = document.getElementById('results-kicker');
  function render() {
    var answered = QUESTIONS.filter(function (n) { return form.querySelector('input[name="' + n + '"]:checked'); }).length;
    var done = answered === QUESTIONS.length;
    if (kicker) kicker.hidden = !done;
    if (cta) cta.style.display = done ? '' : 'none';
    if (!done) {
      title.textContent = answered ? 'Answer all six to see your suggestion (' + answered + ' of 6 answered).' : 'Answer all six questions to see your suggestion.';
      if (why) why.textContent = '';
      list.innerHTML = '';
      return;
    }
    var kids = answer('kids'), home = answer('home'), probate = answer('probate'), multistate = answer('multistate'), money = answer('money'), care = answer('care');
    var wantsTrust = home || probate || multistate;
    var plan = wantsTrust ? 'complete' : (money || care ? 'essentials' : 'will');
    var out = [{
      t: 'Last Will and Testament',
      w: kids ? 'Start here. It lets you name a guardian for your children and say who carries out your wishes.'
              : 'Start here. It says who receives what you own and who carries out your wishes.'
    }];
    if (wantsTrust) out.push({ t: 'Revocable Living Trust', w: 'Helps your home and property pass to your family privately, without going through probate.' });
    if (money) out.push({ t: 'Durable Power of Attorney', w: 'Names someone to pay bills and handle paperwork if you can’t.' });
    if (care) out.push({ t: 'Health Care Directive', w: 'Records your medical wishes and names who speaks for you when you can’t.' });
    title.textContent = PLAN_NAMES[plan] + ' — ' + out.length + (out.length === 1 ? ' document' : ' documents');
    if (why) {
      why.textContent = wantsTrust
        ? 'Owning real estate, wanting to avoid probate, or owning property in more than one state are the usual reasons a trust is worth adding to a will.'
        : (money || care
          ? 'On top of a will, this adds the paperwork that lets someone act for you — with your money and your medical care — while you’re alive.'
          : 'A will covers naming a guardian for your children and saying who receives what you own.');
    }
    list.innerHTML = out.map(function (r) {
      return '<li>' + tick + '<span><strong>' + r.t + '</strong><span class="why">' + r.w + '</span></span></li>';
    }).join('');
    if (cta) {
      /* build on the link's own existing href rather than a hardcoded relative string -- on an
         artifact preview that href is already the pricing artifact's real absolute URL (rewritten
         at publish time), and overwriting it from scratch would silently break it back into a
         relative path that only works on the real multi-file site (same class of bug as the
         household toggle in js/pricing.js). */
      try {
        var u = new URL(cta.getAttribute('href'), location.href);
        u.searchParams.set('need', plan);
        cta.setAttribute('href', u.href);
      } catch (e) {}
    }
  }
  if (form && list && title) {
    form.addEventListener('change', render);
    /* a browser's Back button can bring answers back; show the matching suggestion if so */
    window.addEventListener('pageshow', render);
    render();
  }
})();

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

  /* Finder: which package and documents fit. Owning real estate or wanting to keep the estate out of
     probate points at Complete (a will plus a living trust). Otherwise, wanting someone to handle money or
     medical decisions points at Essentials; a plain will covers everything else. "Are you married?" doesn't
     change the plan -- it sends the visitor to couple pricing and names the joint versions. The explanation
     under the suggestion repeats only the answers this visitor actually gave "yes" to. */
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
  var QUESTIONS = ['married', 'kids', 'home', 'probate', 'money', 'care'];
  var kicker = document.getElementById('results-kicker');
  function joinAnd(a) { return a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + (a.length > 2 ? ',' : '') + ' and ' + a[a.length - 1]; }
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
    var married = answer('married'), kids = answer('kids'), home = answer('home'), probate = answer('probate'), money = answer('money'), care = answer('care');
    var wantsTrust = home || probate;
    var plan = wantsTrust ? 'complete' : (money || care ? 'essentials' : 'will');
    var each = married ? ' (one for each of you)' : '';
    var out = [];
    /* Complete: the trust comes first (the pour-over will refers to it), then the pour-over will */
    if (wantsTrust) {
      out.push({ t: married ? 'Joint Revocable Living Trust' : 'Revocable Living Trust',
        w: (home ? 'Lets your home and property pass ' : 'Lets your property pass ') + (married ? 'to your spouse and family' : 'to your family') + (probate ? ' privately, without going through probate.' : ' without going through probate.') });
      out.push({ t: 'Pour-Over Will' + each,
        w: 'Sends anything left outside the trust into it' + (kids ? ', and names a guardian for your children.' : '.') });
    } else {
      out.push({ t: 'Last Will and Testament' + each,
        w: kids ? 'Names a guardian for your children, says who receives what you own, and who carries out your wishes.'
                : 'Says who receives what you own and who carries out your wishes.' });
    }
    if (money) out.push({ t: 'Durable Power of Attorney' + each, w: 'Names someone to pay bills and handle paperwork if you can’t.' });
    if (care) out.push({ t: 'Health Care Directive' + each, w: 'Records your medical wishes and names who speaks for you when you can’t.' });
    title.textContent = PLAN_NAMES[plan] + (married ? ' for couples' : '') + ' — ' + out.length + (out.length === 1 ? ' document' : ' kinds of documents');
    if (why) {
      /* only the reasons this visitor gave */
      var reasons = [];
      if (married) reasons.push('are married');
      if (kids) reasons.push('have children under 18');
      if (home) reasons.push('own real estate');
      if (probate) reasons.push('want to keep your estate out of probate court');
      if (money) reasons.push('want someone to handle your money if you can’t');
      if (care) reasons.push('want someone to make medical decisions for you if you can’t');
      var planText = {
        complete: 'the Complete package, a will plus a living trust' + (married ? ' for the two of you' : '') + ', is a good option',
        essentials: 'the Essentials package, a will plus the documents that let someone act for you' + (married ? ', for each of you' : '') + ', is a good option',
        will: 'a will' + (married ? ' for each of you' : '') + ' is a good place to start'
      }[plan];
      why.textContent = reasons.length
        ? 'Because you ' + joinAnd(reasons) + ', ' + planText + '.'
        : 'Based on your answers, ' + planText + '.';
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
        u.searchParams.set('household', answer('married') ? 'couple' : 'single');
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

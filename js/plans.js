/* Grapevine plans.
   The one place to change plan names, prices, and what each plan includes.
   js/pricing.js (the pricing page) and js/checkout.js (the payment page) both read this file, so a change
   here shows up in both places. The three-column cards in pricing.html are still written by hand in HTML;
   if you change what a plan includes here, update the <ul class="includes"> lists there too so they match,
   and the compare table further down the same page.

   PRICING BY HOUSEHOLD: every plan has two prices -- "single" (one person) and "couple" (a married couple
   or domestic partners completing their documents together). A couple generally needs two of most
   documents (two wills, two powers of attorney, and so on) rather than one shared copy, which is why the
   couple price is higher. Read a price with GV_PLANS.priceFor(planKey, household) rather than reaching
   into .prices directly, so every page stays consistent if this shape ever changes again. */

/* Resolves a same-site page filename ("will.html") to the link that actually reaches it. On the real
   site this is the identity function -- the filename already is the right relative link. This file
   is also inlined into single-page claude.ai Artifact previews of each document, where a bare
   relative filename doesn't exist and 404s; building those previews replaces this one function with
   a real filename -> artifact-URL lookup, so every script that builds a same-site link from a plain
   filename should call window.GVUrl(path) rather than concatenating the filename directly -- that's
   the one seam the preview-builder needs to patch, instead of chasing every href by hand. */
window.GVUrl = function (path) { return path; };

/* THE SAMPLE WATERMARK: "SAMPLE - NOT FOR SIGNING" across a document (in the preview, the PDF, and Word) plus the
   "sample version" notices. Three settings:
     'unpaid'  the free preview is watermarked; once someone has paid for a document, it comes out clean (current)
     true      every document is watermarked, paid or not (use while the legal text is still being reviewed)
     false     no watermark anywhere, not even on the free preview */
window.GV_SAMPLE_WATERMARK = 'unpaid';

/* THE PAYMENT CHECK: the web address of your Cloudflare payment-check program (cloudflare/payment-check.js;
   setup steps are in HOW-TO-EDIT.txt section 3d). Once it is filled in, paid.html asks Stripe, through that
   program, whether each payment is real before unlocking anything, so typing paid.html?plan=... into a
   browser no longer works. Leave it empty ('') only while setting up; empty means the old, easy-to-bypass
   check. It looks like: 'https://grapevine-payment-check.YOURNAME.workers.dev' */
window.GV_PAYMENT_CHECK_URL = 'https://grapevine-payment-check.gdm805.workers.dev';

/* THE BETA TEST: while on is true, anyone who arrives through the beta invitation link (any page address
   ending in ?beta=1, for example https://www.grapevinedocs.com/pricing.html?beta=1) is a beta tester in
   that browser. At checkout a beta tester must complete the feedback survey (the Tally form below); when they
   submit it, "Continue to secure payment" unlocks and takes them to Stripe with the 100%-off promotion code
   already applied, so they pay $0 and get their documents. Everyone else checks out normally.
     on      true during the beta; set to false at public launch (turns all of this off)
     code    the Stripe PROMOTION CODE (the customer-facing code, e.g. BETA2026), 100% off; in Stripe give
             it a maximum number of redemptions and an expiry date
     survey  the Tally form's ID (the part after tally.so/r/ in its share link) */
window.GV_BETA = { on: true, code: 'BETA2026', survey: '445AKO' };
(function () {
  try {
    if (window.GV_BETA && window.GV_BETA.on && /[?&]beta=1\b/.test(location.search)) localStorage.setItem('grapevine.beta', '1');
  } catch (e) { /* storage blocked: not a beta tester in this browser */ }
})();

window.GV_PLANS = {
  order: ['will', 'essentials', 'complete'],
  prices: {
    will: { single: 119, couple: 199 },
    essentials: { single: 249, couple: 399 },
    complete: { single: 499, couple: 649 },
    /* the smaller offers: any one document, and two short packages (see also `extra` below) */
    doc: { single: 49, couple: 79 },
    /* trust-side single documents (Schedule A, Certification, Affidavit, Assignment) are priced per TRUST: the
       same price covers a couple's JOINT trust, but a couple with two separate trusts buys once for each trust
       (the pricing page and checkout say so). Display only: they are bought through the "doc" plan. */
    doctrust: { single: 49, couple: 49 },
    health: { single: 129, couple: 199 },
    trustpaper: { single: 129, couple: 129 }
  },
  /* plans that are sold from the "Just need one document?" part of the pricing page rather than as one of
     the three main plans. They are looked up like any plan (prices, checkout, unlocking) but stay out of
     `order`, which is the list the checkout page offers as "choose a different plan". */
  extra: ['doc', 'health', 'trustpaper'],
  /* the documents that can be bought one at a time, in the order the pricing page lists them */
  trustSide: ['schedulea', 'cert', 'affidavit', 'assignment'],
  singles: ['dpoa', 'hcd', 'dementia', 'hipaa', 'finalwishes', 'schedulea', 'cert', 'affidavit', 'assignment'],
  priceFor: function (planKey, household) {
    var p = this.prices[planKey];
    if (!p) return 0;
    return p[household === 'couple' ? 'couple' : 'single'];
  },
  plans: {
    will: {
      name: 'Will',
      tag: 'The one document almost everyone needs.',
      lead: 'Just your will',
      /* the full list of what this plan unlocks, always -- no trailing "and more". Keep this list and
         the plan's own <ul class="includes"> in pricing.html in sync. */
      includes: ['Last Will and Testament', 'Important Contacts', 'Final Wishes'],
      cta: 'Start your will',
      why: 'Start here if you mainly want to name a guardian for your children and say who receives what you own.',
      /* which builders this plan unlocks for download and print, by their data-kind:
         will | pourover | dpoa | dementia | hcd | hipaa | trust | trustjoint | cert | affidavit | assignment | finalwishes | contacts */
      unlocks: ['will', 'finalwishes', 'contacts'],
      goesTo: 'will.html'
    },
    essentials: {
      name: 'Essentials',
      tag: 'Your will, plus the documents that let someone act for you.',
      lead: 'Everything in Will, plus',
      includes: ['Last Will and Testament', 'Durable Power of Attorney', 'Health Care Directive', 'Dementia Care Preferences', 'HIPAA Authorization', 'Final Wishes', 'Important Contacts'],
      cta: 'Start with Essentials',
      why: 'Adds the documents that let someone speak and act for you, plus Final Wishes and Important Contacts.',
      unlocks: ['will', 'dpoa', 'dementia', 'hcd', 'hipaa', 'finalwishes', 'contacts'],
      goesTo: 'will.html'
    },
    complete: {
      name: 'Complete',
      tag: 'Everything in Essentials, plus a trust for your home and savings.',
      lead: 'Everything in Essentials, plus',
      includes: ['Revocable Living Trust (or a Joint Trust, for couples)', 'Certification of Trust', 'Affidavit of Trustee', 'General Assignment of Personal Property to Trust', 'Pour-Over Will', 'Durable Power of Attorney', 'Health Care Directive', 'Dementia Care Preferences', 'HIPAA Authorization', 'Final Wishes', 'Important Contacts'],
      cta: 'Start with Complete',
      why: 'Adds a trust and the paperwork that supports it, so your home and savings can pass on privately.',
      /* Complete customers get the pour-over will instead of the plain will, but nothing stops them from also
         wanting the plain one, so the top plan unlocks every builder that exists today. */
      unlocks: ['will', 'pourover', 'dpoa', 'dementia', 'hcd', 'hipaa', 'trust', 'trustjoint', 'cert', 'affidavit', 'assignment', 'finalwishes', 'contacts'],
      goesTo: 'trust.html'
    },
    doc: {
      name: 'Single document',
      tag: 'Any one document, on its own.',
      lead: 'The document you chose',
      includes: [],
      cta: 'Start this document',
      why: 'Just the one document you need.',
      /* filled in from what was bought -- see js/entitlements.js, which remembers which document(s) */
      unlocks: [],
      goesTo: 'hcd.html'
    },
    health: {
      name: 'Health Care Package',
      tag: 'The documents for medical decisions and final wishes.',
      lead: 'Everything for your health care wishes',
      includes: ['Health Care Directive', 'Dementia Care Preferences', 'HIPAA Authorization', 'Final Wishes'],
      cta: 'Start the Health Care Package',
      why: 'For someone who needs their medical decisions and final wishes in writing.',
      unlocks: ['hcd', 'dementia', 'hipaa', 'finalwishes'],
      goesTo: 'hcd.html'
    },
    trustpaper: {
      name: 'Trust Paperwork',
      tag: 'The supporting documents for a trust you already have.',
      lead: 'The paperwork that goes with a trust',
      includes: ['Schedule A (Trust Property)', 'Certification of Trust', 'Affidavit of Trustee', 'General Assignment of Personal Property to Trust'],
      cta: 'Start Trust Paperwork',
      why: 'For someone who already has a trust and needs the documents that go with it.',
      unlocks: ['schedulea', 'cert', 'affidavit', 'assignment'],
      goesTo: 'schedulea.html'
    }
  }
};

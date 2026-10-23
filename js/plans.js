/* Tovakin plans.
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

/* THE SAMPLE WATERMARK: "Preview - Not for Signing" across a document (in the preview, the PDF, and Word) plus the
   "sample version" notices. Three settings:
     'unpaid'  the free preview is watermarked; once someone has paid for a document, it comes out clean (current)
     true      every document is watermarked, paid or not (use while the legal text is still being reviewed)
     false     no watermark anywhere, not even on the free preview */
window.GV_SAMPLE_WATERMARK = 'unpaid';

/* THE FREE PREVIEW (23 Oct 2026, Greg): the whole document is readable before paying, so the customer sees exactly
   what they're buying (several states expect the template or the finished document to be viewable before purchase).
   It stays marked "Preview - Not for Signing," and its text can't be selected, copied or printed; the clean copy comes
   only by paying and downloading. true = the old way: standard wording blurred after the opening, answers readable. */
window.GV_PREVIEW_BLUR = false;

/* THE PAYMENT CHECK: the web address of your Cloudflare payment-check program (cloudflare/payment-check.js;
   setup steps are in HOW-TO-EDIT.txt section 3d). Once it is filled in, paid.html asks Stripe, through that
   program, whether each payment is real before unlocking anything, so typing paid.html?plan=... into a
   browser no longer works. Leave it empty ('') only while setting up; empty means the old, easy-to-bypass
   check. It looks like: 'https://grapevine-payment-check.YOURNAME.workers.dev' */
window.GV_PAYMENT_CHECK_URL = 'https://grapevine-payment-check.gdm805.workers.dev';

/* THE BETA TEST: while on is true, anyone who arrives through the beta invitation link (any page address
   ending in ?beta=1, for example https://www.tovakin.com/pricing.html?beta=1) is a beta tester in
   that browser. At checkout a beta tester must complete the feedback survey (the Tally form below); when they
   submit it, "Continue to secure payment" unlocks and takes them to Stripe with the 100%-off promotion code
   already applied, so they pay $0 and get their documents. Everyone else checks out normally.
     on      true during the beta; set to false at public launch (turns all of this off)
     code    the Stripe PROMOTION CODE (the customer-facing code, e.g. BETANOV), 100% off; in Stripe give
             it a maximum number of redemptions and an expiry date
     survey  the Tally form's ID (the part after tally.so/r/ in its share link) */
/* CALIFORNIA (Cal. Bus. & Prof. Code 6410): California customers see the required notice at checkout and must
   tick that they've read it before paying. Once Tovakin is registered as a Legal Document Assistant, set
   registered to true and fill in the county clerk's details -- then the two registration statements appear too. */
window.GV_CA_LDA = { registered: false, county: '', clerkAddress: '', clerkPhone: '', clerkWebsite: '' };

/* STATES WHERE TOVAKIN ISN'T AVAILABLE: a customer who lives in one of these can't finish a document or pay.
   Checked on each document's first screen and at checkout (which asks every buyer's state). To open a state,
   delete its line. Arizona: certified legal document preparer rules (ACJA 7-208). Florida (18 Oct 2026, Greg):
   unlicensed practice of law is a felony there (Fla. Stat. 454.23), and the Florida Supreme Court has held that
   nonlawyers drafting living trusts practice law (613 So. 2d 426) -- off until a Florida attorney says otherwise. Missouri (18 Oct 2026, Greg): Janson v. LegalZoom (W.D. Mo.
   2011) let a class action over document software go forward, and Missouri lets buyers sue for three times the price. North Carolina (20 Oct 2026, Greg): G.S. 84-2.2 requires
   State Bar registration AND review of every template by an NC-licensed attorney -- off until that review is done. California (20 Oct 2026, Greg): Legal Document Assistant
   registration and bond (Bus. & Prof. Code 6400 and after) -- off until confirmed or registered. Ohio, Minnesota, Kentucky,
   Connecticut, New Jersey (22 Oct 2026, Greg): elevated UPL risk for answer-driven document software -- Ohio Board on UPL
   Adv. Op. 2008-03; Minn. Stat. 481.02 subd. 1 (wills/trusts for another); KBA U-63; Conn. UPL is a felony (C.G.S. 51-88);
   New Jersey: active UPL class actions against LegalZoom. Research: grapevine-private-notes/STATE-RULES-RESEARCH-OCT-2026.txt */
window.GV_CLOSED_STATES = {
  'California': 'Tovakin isn\u2019t available in California yet. We\u2019re confirming California\u2019s rules for online document services and hope to offer California documents soon.',
  'Arizona': 'Tovakin isn\u2019t available in Arizona yet. We\u2019re confirming Arizona\u2019s rules for online document services and hope to offer Arizona documents soon.',
  'Florida': 'Tovakin isn\u2019t available in Florida yet. We\u2019re confirming Florida\u2019s rules for online document services and hope to offer Florida documents soon.',
  'Missouri': 'Tovakin isn\u2019t available in Missouri yet. We\u2019re confirming Missouri\u2019s rules for online document services and hope to offer Missouri documents soon.',
  'North Carolina': 'Tovakin isn\u2019t available in North Carolina yet. We\u2019re confirming North Carolina\u2019s rules for online document services and hope to offer North Carolina documents soon.',
  'Ohio': 'Tovakin isn\u2019t available in Ohio yet. We\u2019re confirming Ohio\u2019s rules for online document services and hope to offer Ohio documents soon.',
  'Minnesota': 'Tovakin isn\u2019t available in Minnesota yet. We\u2019re confirming Minnesota\u2019s rules for online document services and hope to offer Minnesota documents soon.',
  'Kentucky': 'Tovakin isn\u2019t available in Kentucky yet. We\u2019re confirming Kentucky\u2019s rules for online document services and hope to offer Kentucky documents soon.',
  'Connecticut': 'Tovakin isn\u2019t available in Connecticut yet. We\u2019re confirming Connecticut\u2019s rules for online document services and hope to offer Connecticut documents soon.',
  'New Jersey': 'Tovakin isn\u2019t available in New Jersey yet. We\u2019re confirming New Jersey\u2019s rules for online document services and hope to offer New Jersey documents soon.'
};
window.GVClosedState = function (state) { return (window.GV_CLOSED_STATES || {})[state] || ''; };

window.GV_BETA = { on: true, code: 'BETANOV', survey: '445AKO' };   /* BETANOV replaced BETA2026 on 13 Oct 2026 (launch moved to Nov 13); expires Nov 12 */
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
    complete: { single: 429, couple: 549 },
    /* the smaller offers: any one document, and two short packages (see also `extra` below) */
    doc: { single: 49, couple: 79 },
    /* trust-side single documents (Schedule A, Certification, Affidavit, Assignment) are priced per TRUST: the
       same price covers a couple's JOINT trust, but a couple with two separate trusts buys once for each trust
       (the pricing page and checkout say so). Display only: they are bought through the "doc" plan. */
    doctrust: { single: 49, couple: 49 },
    /* lower-priced single documents (9 Oct 2026): Important Contacts and Schedule A at $19 (one list per household,
       one Schedule A per trust, so a couple pays the same), Dementia Care Preferences at $29 (one price for everyone).
       Each price has its own Stripe Payment Link in js/checkout.js and cloudflare/payment-check.js. */
    doc19: { single: 19, couple: 19 },
    doc29: { single: 29, couple: 29 },
    health: { single: 129, couple: 199 },
    trustpaper: { single: 129, couple: 129 },
    /* just a living trust, new or a restatement (21 Oct 2026, Greg): one person's trust, or a couple's joint trust */
    trustonly: { single: 349, couple: 429 }
  },
  /* plans that are sold from the "Need a smaller package?" part of the pricing page rather than as one of
     the three main plans. They are looked up like any plan (prices, checkout, unlocking) but stay out of
     `order`, which is the list the checkout page offers as "choose a different plan". */
  extra: ['doc', 'health', 'trustpaper', 'trustonly'],
  /* the documents that can be bought one at a time, in the order the pricing page lists them */
  trustSide: ['schedulea', 'cert', 'affidavit', 'assignment'],
  singles: ['dpoa', 'hcd', 'hipaa', 'finalwishes', 'contacts', 'schedulea', 'cert', 'affidavit', 'assignment'],
  /* a document that is NOT sold on its own goes to this package from its own page (19 Oct 2026, Greg: Dementia Care
     Preferences belong with the health care directive, so they come only with Essentials, Complete or Health Care) */
  docPlan: { dementia: 'health', trust: 'trustonly', trustjoint: 'trustonly' },
  /* which price a single document is sold at: 'doc' ($49 / $79), 'doctrust' ($49 per trust), 'doc19', 'doc29' */
  docTier: { contacts: 'doc19', schedulea: 'doc19' },
  docPriceKey: function (docKey) { return this.docTier[docKey] || ((this.trustSide || []).indexOf(docKey) > -1 ? 'doctrust' : 'doc'); },
  /* the price of one single document for this household */
  docPrice: function (docKey, household) { return this.priceFor(this.docPriceKey(docKey), household); },
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
      includes: ['Last Will and Testament', 'Important Contacts', 'A guardian for your minor children', 'Care of your pets (a caretaker named in your will, with money for their care)'],
      cta: 'Start your will',
      why: 'Start here if you mainly want to name a guardian for your children and say who receives what you own.',
      /* which builders this plan unlocks for download and print, by their data-kind:
         will | pourover | dpoa | dementia | hcd | hipaa | trust | trustjoint | cert | affidavit | assignment | finalwishes | contacts */
      unlocks: ['will', 'contacts'],
      goesTo: 'will.html'
    },
    essentials: {
      name: 'Essentials',
      tag: 'Your will, plus the documents that let someone act for you.',
      lead: 'Everything in Will, plus these additional documents:',
      includes: ['Last Will and Testament', 'Durable Power of Attorney', 'Health Care Directive', 'Dementia Care Preferences', 'HIPAA Authorization', 'Final Wishes', 'Important Contacts'],
      cta: 'Start with Essentials',
      why: 'Adds the documents that let someone speak and act for you, plus Final Wishes.',
      unlocks: ['will', 'dpoa', 'dementia', 'hcd', 'hipaa', 'finalwishes', 'contacts'],
      goesTo: 'will.html'
    },
    complete: {
      name: 'Complete',
      tag: 'Everything in Essentials, plus a trust for your home and savings.',
      lead: 'Everything in Essentials, plus these additional documents:',
      includes: ['Revocable Living Trust (or a Joint Trust, for couples)', 'Certification of Trust', 'Affidavit of Trustee', 'General Assignment of Personal Property to Trust', 'Pour-Over Will', 'Durable Power of Attorney', 'Health Care Directive', 'Dementia Care Preferences', 'HIPAA Authorization', 'Final Wishes', 'Important Contacts', 'Care of your pets (a caretaker named in your trust, with money for their care)'],
      cta: 'Start with Complete',
      why: 'Adds a trust and the paperwork that supports it, so your home and savings can pass on privately.',
      /* Complete customers get the pour-over will instead of the plain will, but nothing stops them from also
         wanting the plain one, so the top plan unlocks every builder that exists today. */
      unlocks: ['will', 'pourover', 'dpoa', 'dementia', 'hcd', 'hipaa', 'trust', 'trustjoint', 'schedulea', 'cert', 'affidavit', 'assignment', 'finalwishes', 'contacts'],
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
    },
    trustonly: {
      name: 'Living Trust',
      tag: 'Just a living trust, new or a restatement.',
      lead: 'Your living trust',
      includes: ['Revocable Living Trust (or a Joint Trust, for couples)', 'A new trust, or a restatement of a trust you already have', 'Schedule A (Trust Property), inside the trust'],
      cta: 'Start your living trust',
      why: 'For someone who wants a living trust on its own, without the other documents.',
      /* a single person writes trust.html; a couple writes the joint trust (trust-joint.html). Bought from either
         page directly (GV_PLANS.docPlan), not as a package flow. */
      unlocks: ['trust', 'trustjoint'],
      goesTo: 'trust.html'
    }
  }
};

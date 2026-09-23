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

window.GV_PLANS = {
  order: ['will', 'essentials', 'complete'],
  prices: {
    will: { single: 119, couple: 199 },
    essentials: { single: 249, couple: 399 },
    complete: { single: 499, couple: 649 }
  },
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
      includes: ['Pour-Over Will', 'Durable Power of Attorney', 'Health Care Directive', 'Dementia Care Preferences', 'HIPAA Authorization', 'Final Wishes', 'Important Contacts', 'Revocable Living Trust (or a Joint Trust, for couples)', 'Certification of Trust', 'Affidavit of Trustee', 'General Assignment of Personal Property to Trust'],
      cta: 'Start with Complete',
      why: 'Adds a trust and the paperwork that supports it, so your home and savings can pass on privately.',
      /* Complete customers get the pour-over will instead of the plain will, but nothing stops them from also
         wanting the plain one, so the top plan unlocks every builder that exists today. */
      unlocks: ['will', 'pourover', 'dpoa', 'dementia', 'hcd', 'hipaa', 'trust', 'trustjoint', 'cert', 'affidavit', 'assignment', 'finalwishes', 'contacts'],
      goesTo: 'pour-over.html'
    }
  }
};

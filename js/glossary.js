/* Tovakin GLOSSARY ("Terms explained") -- one source for three places:
     1. glossary.html (the searchable page),
     2. the document questions: key words get a dotted underline; tapping one shows its short definition
        (window.GVGlossary.decorate, called by js/will.js each time a screen is drawn),
     3. the help chat (cloudflare/help-chat.js carries a copy of the first sentence of each definition --
        if you change a definition here, ask Claude to refresh that copy and redeploy the chat).
   Reviewed by Greg 22 Oct 2026 (draft: grapevine-private-notes/GLOSSARY-DRAFT.txt). Every definition explains what
   a term MEANS, never which choice to make. "varies" = the rule differs from state to state. */
window.GV_GLOSSARY = [
 {
  "id": "estate",
  "term": "Estate",
  "aka": [],
  "topic": "Wills",
  "def": "Everything a person owns when they die: their home, money, investments, vehicles and belongings, minus what they owe. Some of it may pass through a will, some through a trust, and some directly to a named beneficiary.",
  "varies": false,
  "see": [
   "probate",
   "non-probate-asset"
  ],
  "learn": []
 },
 {
  "id": "last-will-and-testament",
  "term": "Last Will and Testament",
  "aka": [
   "Will"
  ],
  "topic": "Wills",
  "def": "A written document that says who receives a person's property when they die, who will handle their estate, and, for parents, who should care for their minor children. A will takes effect only at death and can be changed or replaced at any time before then. Each state sets rules for how a will must be signed.",
  "varies": true,
  "see": [
   "testator",
   "executor",
   "guardian-of-a-minor",
   "witness"
  ],
  "learn": [
   {
    "slug": "what-is-a-will",
    "title": "What is a will, and do I need one?",
    "date": "2026-09-22"
   }
  ]
 },
 {
  "id": "testator",
  "term": "Testator",
  "aka": [],
  "topic": "Wills",
  "def": "The person who makes a will. Some older documents use \"testatrix\" for a woman; today \"testator\" is used for everyone.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "executor",
  "term": "Executor",
  "aka": [
   "Personal Representative"
  ],
  "topic": "Wills",
  "def": "The person named in a will to manage the estate after death: gathering property, paying debts and taxes, and distributing what is left to the beneficiaries. Many states use the term \"personal representative\" instead.",
  "varies": true,
  "see": [
   "probate",
   "letters-testamentary"
  ],
  "learn": [
   {
    "slug": "choosing-an-executor",
    "title": "How to choose an executor",
    "date": "2026-09-19"
   }
  ]
 },
 {
  "id": "alternate",
  "term": "Alternate",
  "aka": [
   "Backup"
  ],
  "topic": "Wills",
  "def": "A person named to take a role, such as executor, trustee, agent or guardian, if the first person named can't or won't serve.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "beneficiary",
  "term": "Beneficiary",
  "aka": [],
  "topic": "Wills",
  "def": "A person or organization that receives property under a will, a trust, a life insurance policy or an account.",
  "varies": false,
  "see": [
   "contingent-beneficiary",
   "residuary-estate"
  ],
  "learn": []
 },
 {
  "id": "contingent-beneficiary",
  "term": "Contingent Beneficiary",
  "aka": [],
  "topic": "Wills",
  "def": "A backup beneficiary who receives property only if the first beneficiary has died or can't receive it.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "specific-gift",
  "term": "Specific Gift",
  "aka": [],
  "topic": "Wills",
  "def": "A particular item or amount left to a particular person, such as \"my piano to my niece\" or \"$5,000 to my church.\" Specific gifts are usually given out before the rest of the estate is divided.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "residuary-estate",
  "term": "Residuary Estate",
  "aka": [
   "Everything Else"
  ],
  "topic": "Wills",
  "def": "What remains of an estate after debts, expenses and specific gifts have been paid. A will or trust usually divides the residuary estate by percentages or among named people.",
  "varies": false,
  "see": [
   "specific-gift",
   "beneficiary"
  ],
  "learn": []
 },
 {
  "id": "per-stirpes",
  "term": "Per Stirpes",
  "aka": [],
  "topic": "Wills",
  "def": "A way of dividing property among descendants \"by branch.\" If a beneficiary has died, that person's share goes down to their own children in equal parts, rather than being split among the surviving beneficiaries.",
  "varies": false,
  "see": [
   "per-capita"
  ],
  "learn": []
 },
 {
  "id": "per-capita",
  "term": "Per Capita",
  "aka": [],
  "topic": "Wills",
  "def": "A way of dividing property \"by head,\" where each living person in a group receives an equal share. How a deceased person's share is handled depends on the exact wording used.",
  "varies": false,
  "see": [
   "per-stirpes"
  ],
  "learn": []
 },
 {
  "id": "lapse",
  "term": "Lapse",
  "aka": [],
  "topic": "Wills",
  "def": "What happens when a beneficiary dies before the person who made the will or trust. Unless the document or state law provides otherwise, that gift may fail and pass to someone else. Many states have \"anti-lapse\" rules that send the gift to the beneficiary's descendants in certain cases.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "intestate",
  "term": "Intestate / Intestacy",
  "aka": [],
  "topic": "Wills",
  "def": "Dying without a valid will. State law then decides who inherits, usually the closest relatives in a set order, and a court appoints someone to manage the estate.",
  "varies": true,
  "see": [],
  "learn": [
   {
    "slug": "dying-without-a-will",
    "title": "What happens if you die without a will?",
    "date": "2026-09-20"
   }
  ]
 },
 {
  "id": "probate",
  "term": "Probate",
  "aka": [],
  "topic": "Wills",
  "def": "The court-supervised process of settling an estate: proving the will is valid, appointing the executor, paying debts and distributing property. How long it takes and what it costs vary widely by state.",
  "varies": true,
  "see": [],
  "learn": [
   {
    "slug": "what-is-probate",
    "title": "What is probate, and why do people try to avoid it?",
    "date": "2026-10-26"
   },
   {
    "slug": "will-vs-living-trust",
    "title": "Will or living trust: which is right for you?",
    "date": "2026-09-21"
   }
  ]
 },
 {
  "id": "non-probate-asset",
  "term": "Non-Probate Asset",
  "aka": [],
  "topic": "Wills",
  "def": "Property that passes at death without going through probate, such as property held in a living trust, accounts with a named beneficiary, and property owned jointly with a right of survivorship.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "letters-testamentary",
  "term": "Letters Testamentary",
  "aka": [],
  "topic": "Wills",
  "def": "A court document that gives an executor official authority to act for the estate, for example to close accounts or sell property. (When there is no will, a similar document is often called \"letters of administration.\")",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "self-proving-affidavit",
  "term": "Self-Proving Affidavit",
  "aka": [],
  "topic": "Wills",
  "def": "A sworn statement signed by the will-maker and witnesses, usually in front of a notary, that can let a court accept a will without contacting the witnesses later. Not every state uses one.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "codicil",
  "term": "Codicil",
  "aka": [],
  "topic": "Wills",
  "def": "A separate document that changes part of an existing will. It must be signed with the same formalities as a will. Many people simply replace the whole will instead.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "holographic-will",
  "term": "Holographic Will",
  "aka": [],
  "topic": "Wills",
  "def": "A will written entirely, or in its important parts, in the will-maker's own handwriting. Only some states accept them.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "pour-over-will",
  "term": "Pour-Over Will",
  "aka": [],
  "topic": "Wills",
  "def": "A will used alongside a living trust. It \"pours\" any property that was left outside the trust into the trust at death, so that property ends up being handled under the trust's terms. Property that passes under a pour-over will may still go through probate.",
  "varies": false,
  "see": [
   "funding-a-trust"
  ],
  "learn": [
   {
    "slug": "what-is-a-pour-over-will",
    "title": "What is a pour-over will?",
    "date": "2026-09-23"
   }
  ]
 },
 {
  "id": "guardian-of-a-minor",
  "term": "Guardian of a Minor",
  "aka": [],
  "topic": "Wills",
  "def": "The person named, usually in a will, to raise a child under 18 if no parent is able to. A court makes the final appointment, and generally gives weight to the parent's choice.",
  "varies": true,
  "see": [
   "conservator",
   "custodian"
  ],
  "learn": [
   {
    "slug": "leaving-money-to-children",
    "title": "Leaving money to children under 18",
    "date": "2026-11-23"
   },
   {
    "slug": "choosing-a-guardian",
    "title": "How to choose a guardian for your children",
    "date": "2026-09-18"
   }
  ]
 },
 {
  "id": "conservator",
  "term": "Conservator",
  "aka": [
   "Guardian of the Estate"
  ],
  "topic": "Wills",
  "def": "A person appointed by a court to manage money or property for someone who can't manage it, such as a minor or an adult who has lost capacity. In some states this role has a different name.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "custodian",
  "term": "Custodian (UTMA)",
  "aka": [
   "UTMA custodian"
  ],
  "topic": "Wills",
  "def": "A person who manages property for a minor under a state's Uniform Transfers to Minors Act until the child reaches the age set by state law, often 18 or 21.",
  "varies": true,
  "see": [],
  "learn": [
   {
    "slug": "leaving-money-to-children",
    "title": "Leaving money to children under 18",
    "date": "2026-11-23"
   }
  ]
 },
 {
  "id": "pet-caretaker",
  "term": "Pet Caretaker",
  "aka": [],
  "topic": "Wills",
  "def": "The person named to take in a person's pets after they die. A will or trust can also leave that person money with a request that it be used for the pets' care.",
  "varies": false,
  "see": [],
  "learn": [
   {
    "slug": "planning-for-your-pets",
    "title": "Planning for your pets",
    "date": "2026-11-30"
   }
  ]
 },
 {
  "id": "trust",
  "term": "Trust",
  "aka": [],
  "topic": "Trusts",
  "def": "An arrangement in which one person or institution (the trustee) holds and manages property for the benefit of others (the beneficiaries), following written instructions in a trust document.",
  "varies": false,
  "see": [],
  "learn": [
   {
    "slug": "what-is-a-living-trust",
    "title": "What is a living trust?",
    "date": "2026-10-13"
   }
  ]
 },
 {
  "id": "revocable-living-trust",
  "term": "Revocable Living Trust",
  "aka": [],
  "topic": "Trusts",
  "def": "A trust created during a person's lifetime that they can change or cancel at any time. The person who creates it usually serves as their own trustee and beneficiary while alive. At death or incapacity, a successor trustee takes over. Property held in the trust generally passes without probate.",
  "varies": false,
  "see": [
   "funding-a-trust",
   "successor-trustee"
  ],
  "learn": [
   {
    "slug": "what-is-a-living-trust",
    "title": "What is a living trust?",
    "date": "2026-10-13"
   },
   {
    "slug": "why-a-living-trust",
    "title": "Living trust or will: six differences to know",
    "date": "2026-10-25"
   },
   {
    "slug": "will-vs-living-trust",
    "title": "Will or living trust: which is right for you?",
    "date": "2026-09-21"
   }
  ]
 },
 {
  "id": "joint-trust",
  "term": "Joint Trust",
  "aka": [],
  "topic": "Trusts",
  "def": "A single revocable living trust created by a married couple (or registered partners) together, holding property of both. Joint trusts often divide into separate shares when the first spouse dies.",
  "varies": false,
  "see": [
   "survivors-trust"
  ],
  "learn": []
 },
 {
  "id": "trustmaker",
  "term": "Trustmaker",
  "aka": [
   "Grantor",
   "Settlor",
   "Trustor"
  ],
  "topic": "Trusts",
  "def": "The person who creates a trust and puts property into it. Different documents and states use different words for the same role.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "trustee",
  "term": "Trustee",
  "aka": [],
  "topic": "Trusts",
  "def": "The person or institution that manages the property in a trust, following the trust's instructions and the law. A trustee must act in the beneficiaries' interests.",
  "varies": false,
  "see": [
   "fiduciary",
   "successor-trustee",
   "co-trustees"
  ],
  "learn": []
 },
 {
  "id": "successor-trustee",
  "term": "Successor Trustee",
  "aka": [],
  "topic": "Trusts",
  "def": "The person named to take over managing a trust when the current trustee dies, resigns or becomes unable to manage it.",
  "varies": false,
  "see": [],
  "learn": [
   {
    "slug": "what-is-a-living-trust",
    "title": "What is a living trust?",
    "date": "2026-10-13"
   }
  ]
 },
 {
  "id": "co-trustees",
  "term": "Co-Trustees",
  "aka": [],
  "topic": "Trusts",
  "def": "Two or more people serving as trustee at the same time. The trust document says whether they must act together or whether each may act alone.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "trust-estate",
  "term": "Trust Estate",
  "aka": [
   "Trust Property"
  ],
  "topic": "Trusts",
  "def": "Everything that is held in a trust at a given time.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "funding-a-trust",
  "term": "Funding a Trust",
  "aka": [],
  "topic": "Trusts",
  "def": "Moving property into a trust after it is signed, for example by retitling a home with a new deed or changing the owner of a bank account to the trustee. A trust controls only property that has actually been put into it.",
  "varies": false,
  "see": [
   "schedule-a"
  ],
  "learn": [
   {
    "slug": "how-to-fund-a-living-trust",
    "title": "How to fund a living trust (and why it matters)",
    "date": "2026-11-02"
   }
  ]
 },
 {
  "id": "schedule-a",
  "term": "Schedule A",
  "aka": [
   "Trust Property List"
  ],
  "topic": "Trusts",
  "def": "A list attached to a trust describing property the trustmaker intends to hold in the trust. Listing an item helps show intent, but some property, such as real estate and many accounts, still has to be formally retitled to be part of the trust.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "certification-of-trust",
  "term": "Certification of Trust",
  "aka": [
   "Certificate of Trust"
  ],
  "topic": "Trusts",
  "def": "A short document, signed by the trustee, that confirms a trust exists and who has authority to act for it, without showing the private details of the whole trust. Banks and title companies often ask for one.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "affidavit-of-trustee",
  "term": "Affidavit of Trustee",
  "aka": [],
  "topic": "Trusts",
  "def": "A sworn statement by a trustee about a fact concerning the trust, such as the death of a trustmaker or that the trustee has taken over. It is often used to show a change in who is managing the trust.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "general-assignment",
  "term": "General Assignment",
  "aka": [
   "Assignment of Personal Property"
  ],
  "topic": "Trusts",
  "def": "A document that transfers belongings that don't have a title, such as furniture, jewelry and household items, into a trust in one step.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "restatement",
  "term": "Restatement",
  "aka": [],
  "topic": "Trusts",
  "def": "A new version of an existing trust that replaces all of its terms while keeping the original trust in place, including its name and date. A restatement can avoid having to retitle property that is already in the trust.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "amendment",
  "term": "Amendment",
  "aka": [],
  "topic": "Trusts",
  "def": "A document that changes one or more parts of a trust while leaving the rest in place.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "beneficiary-trust",
  "term": "Beneficiary Trust",
  "aka": [
   "Distribution Ages"
  ],
  "topic": "Trusts",
  "def": "A separate share held in trust for a beneficiary, often a young person, with the trustee releasing it in stages at ages set in the trust, such as 25, 30 and 35. Until then the trustee may pay for things like health, education and support.",
  "varies": false,
  "see": [],
  "learn": [
   {
    "slug": "leaving-money-to-children",
    "title": "Leaving money to children under 18",
    "date": "2026-11-23"
   }
  ]
 },
 {
  "id": "special-needs-trust",
  "term": "Special Needs Trust",
  "aka": [
   "Supplemental Needs Trust"
  ],
  "topic": "Trusts",
  "def": "A trust that holds property for a person with a disability in a way designed to supplement, not replace, public benefits they receive. The rules for these trusts are technical and change over time.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "survivors-trust",
  "term": "Survivor's Trust / Family Trust",
  "aka": [],
  "topic": "Trusts",
  "def": "In some joint trusts, the shares the trust divides into when the first spouse dies. The survivor's trust typically stays under the surviving spouse's control, and a family trust (sometimes called a bypass or credit shelter trust) is often held for later beneficiaries.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "fiduciary",
  "term": "Fiduciary",
  "aka": [],
  "topic": "Trusts",
  "def": "A person who has a legal duty to act in someone else's best interests, such as a trustee, executor or agent under a power of attorney.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "community-property",
  "term": "Community Property",
  "aka": [],
  "topic": "Property",
  "def": "In some states, most property a married couple earns or acquires during the marriage is owned equally by both spouses. Community property states have special rules for wills, trusts and transfers.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "separate-property",
  "term": "Separate Property",
  "aka": [],
  "topic": "Property",
  "def": "Property owned by one spouse alone, often property owned before the marriage or received as a gift or inheritance. How it is defined depends on state law.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "joint-tenancy-with-right-of-survivorship",
  "term": "Joint Tenancy with Right of Survivorship",
  "aka": [],
  "topic": "Property",
  "def": "A way two or more people own property together where, when one owner dies, their share passes automatically to the surviving owner(s) without probate.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "tenancy-by-the-entirety",
  "term": "Tenancy by the Entirety",
  "aka": [],
  "topic": "Property",
  "def": "A form of joint ownership available only to married couples in some states, with survivorship and certain protections from one spouse's creditors.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "transfer-on-death",
  "term": "Transfer-on-Death (TOD) / Payable-on-Death (POD)",
  "aka": [
   "TOD",
   "POD"
  ],
  "topic": "Property",
  "def": "A designation on an account, investment or, in some states, real estate or a vehicle, that names who receives it at the owner's death without probate.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "beneficiary-designation",
  "term": "Beneficiary Designation",
  "aka": [],
  "topic": "Property",
  "def": "The form, kept by a bank, insurer or retirement plan, that names who receives an account or policy at death. It generally controls over what a will says.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "deed",
  "term": "Deed",
  "aka": [],
  "topic": "Property",
  "def": "The document that transfers ownership of real estate. Moving a home into a living trust is usually done with a new deed naming the trustee.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "power-of-attorney",
  "term": "Power of Attorney",
  "aka": [],
  "topic": "Powers of attorney",
  "def": "A document in which one person (the principal) gives another person (the agent) authority to act for them.",
  "varies": false,
  "see": [
   "durable-power-of-attorney",
   "health-care-directive"
  ],
  "learn": [
   {
    "slug": "power-of-attorney-and-health-care-directive",
    "title": "Power of attorney and health care directive: what's the difference?",
    "date": "2026-09-17"
   }
  ]
 },
 {
  "id": "principal",
  "term": "Principal",
  "aka": [],
  "topic": "Powers of attorney",
  "def": "The person who signs a power of attorney and gives someone else authority to act for them.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "agent",
  "term": "Agent",
  "aka": [
   "Attorney-in-Fact"
  ],
  "topic": "Powers of attorney",
  "def": "The person given authority under a power of attorney. The agent does not need to be a lawyer; \"attorney-in-fact\" is an older term for the same role.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "durable-power-of-attorney",
  "term": "Durable Power of Attorney",
  "aka": [],
  "topic": "Powers of attorney",
  "def": "A power of attorney that stays in effect if the principal later becomes unable to make decisions. In many states, a power of attorney is durable unless it says otherwise.",
  "varies": true,
  "see": [],
  "learn": [
   {
    "slug": "what-a-power-of-attorney-lets-someone-do",
    "title": "What does a power of attorney let someone do?",
    "date": "2026-11-09"
   }
  ]
 },
 {
  "id": "springing-power-of-attorney",
  "term": "Springing Power of Attorney",
  "aka": [],
  "topic": "Powers of attorney",
  "def": "A power of attorney that takes effect only when a stated event happens, usually the principal's incapacity, rather than as soon as it is signed. Some states limit or don't allow them.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "co-agents",
  "term": "Co-Agents",
  "aka": [],
  "topic": "Powers of attorney",
  "def": "Two or more agents named in a power of attorney. The document says whether they must act together or whether each may act alone.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "incapacity",
  "term": "Incapacity",
  "aka": [],
  "topic": "Powers of attorney",
  "def": "Being unable to manage one's own affairs or make or communicate decisions, as defined in the document or by state law. Documents often say how incapacity is determined, for example by a doctor's written statement.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "health-care-directive",
  "term": "Health Care Directive",
  "aka": [
   "Advance Directive"
  ],
  "topic": "Health care",
  "def": "A document that records a person's wishes about medical treatment and may name someone to make health care decisions if they can't. States use different names, including \"advance health care directive,\" \"living will\" and \"health care power of attorney.\"",
  "varies": true,
  "see": [],
  "learn": [
   {
    "slug": "power-of-attorney-and-health-care-directive",
    "title": "Power of attorney and health care directive: what's the difference?",
    "date": "2026-09-17"
   }
  ]
 },
 {
  "id": "health-care-agent",
  "term": "Health Care Agent",
  "aka": [
   "Proxy",
   "Surrogate"
  ],
  "topic": "Health care",
  "def": "The person named to make medical decisions for someone who can't make or communicate their own.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "living-will",
  "term": "Living Will",
  "aka": [],
  "topic": "Health care",
  "def": "Despite the name, not a will. A written statement of wishes about life-sustaining treatment near the end of life. In many states it is part of the health care directive.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "life-sustaining-treatment",
  "term": "Life-Sustaining Treatment",
  "aka": [],
  "topic": "Health care",
  "def": "Medical treatment that keeps a person alive without curing the underlying condition, such as a breathing machine, artificial nutrition and hydration, or dialysis.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "dnr",
  "term": "DNR / POLST",
  "aka": [],
  "topic": "Health care",
  "def": "A Do Not Resuscitate order or a POLST (Physician Orders for Life-Sustaining Treatment) is a medical order signed by a doctor or other clinician. It is different from a health care directive, which is signed by the patient.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "hipaa-authorization",
  "term": "HIPAA Authorization",
  "aka": [],
  "topic": "Health care",
  "def": "A signed form that lets named people receive a person's medical information from doctors, hospitals and insurers. It is named after the federal privacy law (HIPAA) and is separate from authority to make medical decisions.",
  "varies": false,
  "see": [],
  "learn": [
   {
    "slug": "what-is-a-hipaa-authorization",
    "title": "What is a HIPAA authorization, and why have one?",
    "date": "2026-11-16"
   }
  ]
 },
 {
  "id": "dementia-care-preferences",
  "term": "Dementia Care Preferences",
  "aka": [],
  "topic": "Health care",
  "def": "A written statement of wishes about care if a person develops dementia, such as where they would like to live and what matters most to them day to day. On Tovakin it goes with the health care directive.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "organ-and-tissue-donation",
  "term": "Organ and Tissue Donation",
  "aka": [],
  "topic": "Health care",
  "def": "A decision, often recorded on a driver's license, a state registry or in a health care directive, about donating organs or tissue at death.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "final-wishes",
  "term": "Final Wishes",
  "aka": [],
  "topic": "Health care",
  "def": "A written statement of preferences about a person's funeral, burial or cremation, service and related matters, to guide family. On Tovakin it records wishes only; it does not appoint anyone.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "witness",
  "term": "Witness",
  "aka": [],
  "topic": "Signing",
  "def": "An adult who watches a person sign a document and then signs to confirm it. Many states require witnesses for wills and some health care documents, and some limit who can be a witness, for example excluding beneficiaries or relatives.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "notary-public",
  "term": "Notary Public",
  "aka": [],
  "topic": "Signing",
  "def": "A person commissioned by the state to confirm the identity of someone signing a document and to take acknowledgments and oaths. A notary does not review whether a document is correct or give legal advice.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "acknowledgment",
  "term": "Acknowledgment",
  "aka": [],
  "topic": "Signing",
  "def": "A signer's formal statement to a notary that they signed a document willingly. The notary then completes a certificate on the document.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "attestation-clause",
  "term": "Attestation Clause",
  "aka": [],
  "topic": "Signing",
  "def": "The paragraph near the witnesses' signatures stating that they watched the signer sign and that the signer appeared to do so willingly.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "execute",
  "term": "Execute (a Document)",
  "aka": [],
  "topic": "Signing",
  "def": "To sign a document in the way the law requires, with any needed witnesses or notary, so that it takes effect.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "revoke",
  "term": "Revoke",
  "aka": [],
  "topic": "Signing",
  "def": "To cancel a document, such as a will, trust or power of attorney. Each type has its own ways of being revoked.",
  "varies": true,
  "see": [],
  "learn": []
 },
 {
  "id": "notarial-testament",
  "term": "Notarial Testament",
  "aka": [],
  "topic": "Louisiana",
  "def": "The formal Louisiana will, signed before a notary and two witnesses with a specific attestation, and signed by the testator on each separate page.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "forced-heirship",
  "term": "Forced Heirship",
  "aka": [
   "Legitime"
  ],
  "topic": "Louisiana",
  "def": "A Louisiana rule that reserves a portion of an estate for certain children, generally those 23 or younger or with certain disabilities. The reserved portion is called the legitime.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "usufruct",
  "term": "Usufruct / Naked Ownership",
  "aka": [],
  "topic": "Louisiana",
  "def": "In Louisiana, usufruct is the right to use property and receive its income for a time, often given to a surviving spouse; naked ownership is ownership of the property subject to that usufruct.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "tutor",
  "term": "Tutor / Tutorship",
  "aka": [],
  "topic": "Louisiana",
  "def": "The Louisiana term for the person responsible for a minor child, similar to a guardian in other states.",
  "varies": false,
  "see": [],
  "learn": []
 },
 {
  "id": "succession",
  "term": "Succession",
  "aka": [],
  "topic": "Louisiana",
  "def": "The Louisiana term for an estate and the process of settling it, similar to probate elsewhere.",
  "varies": false,
  "see": [],
  "learn": []
 }
];

/* words in the document questions that get a definition: phrase (lower case) -> glossary id. Longer phrases win
   ("successor trustee" before "trustee"). Each term is marked once per screen. */
window.GV_GLOSSARY_INLINE = {
 "personal representative": "executor",
 "executor": "executor",
 "contingent beneficiary": "contingent-beneficiary",
 "contingent beneficiaries": "contingent-beneficiary",
 "beneficiary": "beneficiary",
 "beneficiaries": "beneficiary",
 "per stirpes": "per-stirpes",
 "per capita": "per-capita",
 "probate": "probate",
 "residuary": "residuary-estate",
 "everything else": "residuary-estate",
 "specific gift": "specific-gift",
 "specific gifts": "specific-gift",
 "pour-over will": "pour-over-will",
 "self-proving": "self-proving-affidavit",
 "guardian": "guardian-of-a-minor",
 "conservator": "conservator",
 "custodian": "custodian",
 "trustmaker": "trustmaker",
 "trustmakers": "trustmaker",
 "successor trustee": "successor-trustee",
 "successor trustees": "successor-trustee",
 "co-trustee": "co-trustees",
 "co-trustees": "co-trustees",
 "trustee": "trustee",
 "trustees": "trustee",
 "restatement": "restatement",
 "schedule a": "schedule-a",
 "certification of trust": "certification-of-trust",
 "affidavit of trustee": "affidavit-of-trustee",
 "assignment of personal property": "general-assignment",
 "special needs trust": "special-needs-trust",
 "supplemental needs trust": "special-needs-trust",
 "survivor’s trust": "survivors-trust",
 "survivor's trust": "survivors-trust",
 "fiduciary": "fiduciary",
 "community property": "community-property",
 "separate property": "separate-property",
 "joint tenancy": "joint-tenancy-with-right-of-survivorship",
 "tenancy by the entirety": "tenancy-by-the-entirety",
 "transfer-on-death": "transfer-on-death",
 "payable-on-death": "transfer-on-death",
 "beneficiary designation": "beneficiary-designation",
 "durable": "durable-power-of-attorney",
 "springing": "springing-power-of-attorney",
 "co-agent": "co-agents",
 "co-agents": "co-agents",
 "incapacity": "incapacity",
 "incapacitated": "incapacity",
 "health care agent": "health-care-agent",
 "living will": "living-will",
 "life-sustaining treatment": "life-sustaining-treatment",
 "life-sustaining": "life-sustaining-treatment",
 "polst": "dnr",
 "hipaa": "hipaa-authorization",
 "witness": "witness",
 "witnesses": "witness",
 "notary": "notary-public",
 "notarized": "notary-public",
 "forced heir": "forced-heirship",
 "forced heirs": "forced-heirship",
 "legitime": "forced-heirship",
 "usufruct": "usufruct",
 "tutor": "tutor",
 "notarial testament": "notarial-testament",
 "funding": "funding-a-trust",
 "fund your trust": "funding-a-trust",
 "intestate": "intestate",
 "lapse": "lapse",
 "codicil": "codicil",
 "agent": "agent",
 "principal": "principal",
 "alternate": "alternate"
};

window.GVGlossary = (function () {
  var D = window.GV_GLOSSARY || [], BY = {};
  D.forEach(function (e) { BY[e.id] = e; });
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function url(path) { return window.GVUrl ? window.GVUrl(path) : path; }

  /* ---------- inside the document questions ---------- */
  var phrases = Object.keys(window.GV_GLOSSARY_INLINE || {}).sort(function (a, b) { return b.length - a.length; });
  var RX = phrases.length ? new RegExp('\\b(' + phrases.map(function (p) { return p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|') + ')\\b', 'i') : null;
  /* where definitions may appear: the screen's lead-in, question labels and hints -- never inside answers,
     buttons, links, or the clickable text of a checkbox or choice (a tap there must still pick the answer) */
  var WHERE = '.q-sub, .f > label, .hint, .cont-l';
  var SKIP = 'a, button, input, select, textarea, option, label.check, label.pill, label.need, .pill, .need, .gl-term, .errs, .pkg-track, .doc';
  function decorate(root) {
    if (!RX || !root) return;
    var used = {};
    root.querySelectorAll(WHERE).forEach(function (box) {
      if (box.closest(SKIP)) return;
      var walker = document.createTreeWalker(box, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) { return n.parentElement && !n.parentElement.closest(SKIP) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
      });
      var nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(function (node) {
        var text = node.nodeValue, m, out = null, last = 0, guard = 0;
        var rx = new RegExp(RX.source, 'gi');
        while ((m = rx.exec(text)) && guard++ < 20) {
          var id = window.GV_GLOSSARY_INLINE[m[1].toLowerCase()];
          if (!id || used[id] || !BY[id]) continue;
          if (id === 'agent' && used['health-care-agent']) continue;   /* on a health care screen, "agent" means the health care agent */
          used[id] = 1;
          out = out || document.createDocumentFragment();
          out.appendChild(document.createTextNode(text.slice(last, m.index)));
          var b = document.createElement('button');
          b.type = 'button'; b.className = 'gl-term'; b.setAttribute('data-gl', id); b.setAttribute('aria-expanded', 'false');
          b.setAttribute('aria-label', m[1] + ': show what this means');
          b.textContent = m[1];
          out.appendChild(b);
          last = m.index + m[1].length;
        }
        if (out) { out.appendChild(document.createTextNode(text.slice(last))); node.parentNode.replaceChild(out, node); }
      });
    });
  }
  var pop = null, openBtn = null;
  function close() {
    if (pop) { pop.remove(); pop = null; }
    if (openBtn) { openBtn.setAttribute('aria-expanded', 'false'); openBtn = null; }
  }
  function firstSentences(t) { var s = String(t).match(/[^.!?]+[.!?]+(\s|$)/g) || [t]; return s.slice(0, 2).join('').trim(); }
  function show(btn) {
    var e = BY[btn.getAttribute('data-gl')]; if (!e) return;
    close();
    pop = document.createElement('div');
    pop.className = 'gl-pop'; pop.setAttribute('role', 'dialog'); pop.setAttribute('aria-label', e.term);
    pop.innerHTML = '<p class="gl-pop-t">' + esc(e.term) + '</p><p>' + esc(firstSentences(e.def)) + '</p>' +
      (e.varies ? '<p class="gl-pop-v">The rules for this vary by state.</p>' : '') +
      '<p class="gl-pop-more"><a href="' + esc(url('glossary.html')) + '#' + esc(e.id) + '" target="_blank" rel="noopener">More in Terms Explained</a>' +
      '<button type="button" class="gl-pop-x" aria-label="Close">&times;</button></p>';
    document.body.appendChild(pop);
    var r = btn.getBoundingClientRect(), w = Math.min(340, window.innerWidth - 24);
    pop.style.width = w + 'px';
    var left = Math.max(12, Math.min(r.left + window.scrollX, window.scrollX + window.innerWidth - w - 12));
    pop.style.left = left + 'px';
    pop.style.top = (r.bottom + window.scrollY + 8) + 'px';
    btn.setAttribute('aria-expanded', 'true'); openBtn = btn;
  }
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('.gl-term');
    if (b) { ev.preventDefault(); ev.stopPropagation(); if (openBtn === b) close(); else show(b); return; }
    if (ev.target.closest && ev.target.closest('.gl-pop-x')) { close(); return; }
    if (pop && !(ev.target.closest && ev.target.closest('.gl-pop'))) close();
  }, true);
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape' && pop) { var b = openBtn; close(); if (b) b.focus(); } });
  window.addEventListener('resize', close);

  /* a Learn article whose date hasn't come yet is hidden on the Learn page (js/learn.js), so it isn't linked here
     until it's published; ?preview=1 shows every link, the same as the Learn page */
  var PREVIEW = /[?&]preview=1\b/.test(location.search);
  var TODAY = (function () { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); })();
  function published(l) { return PREVIEW || !l.date || l.date <= TODAY; }

  /* ---------- glossary.html ---------- */
  function renderPage(root) {
    var TOPICS = ['All'].concat(D.reduce(function (a, e) { if (a.indexOf(e.topic) === -1) a.push(e.topic); return a; }, []));
    var sorted = D.slice().sort(function (a, b) { return a.term.localeCompare(b.term); });
    var topic = 'All', q = '';
    root.innerHTML =
      '<div class="gl-tools"><input class="input gl-search" type="search" placeholder="Search terms, for example \u201ctrustee\u201d" aria-label="Search terms" autocomplete="off">' +
      '<div class="gl-topics" role="group" aria-label="Topics">' + TOPICS.map(function (t) { return '<button type="button" class="gl-chip" data-topic="' + esc(t) + '" aria-pressed="' + (t === 'All') + '">' + esc(t) + '</button>'; }).join('') + '</div>' +
      '<p class="gl-count" aria-live="polite"></p></div>' +
      '<div class="gl-list">' + sorted.map(function (e) {
        return '<article class="gl-entry" id="' + esc(e.id) + '" data-topic="' + esc(e.topic) + '" data-text="' + esc((e.term + ' ' + (e.aka || []).join(' ') + ' ' + e.def).toLowerCase()) + '">' +
          '<h3>' + esc(e.term) + (e.aka && e.aka.length ? ' <span class="gl-aka">also called ' + esc(e.aka.join(', ')) + '</span>' : '') + '</h3>' +
          '<p>' + esc(e.def) + '</p>' +
          (e.varies ? '<p class="gl-varies">The rules for this vary by state.</p>' : '') +
          ((e.see && e.see.length) || (e.learn || []).some(published) ? '<p class="gl-see">' +
            (e.see || []).filter(function (id) { return BY[id]; }).map(function (id) { return '<a href="#' + esc(id) + '">' + esc(BY[id].term) + '</a>'; }).concat(
            (e.learn || []).filter(published).map(function (l) { return '<a href="' + esc(url('learn.html')) + '#' + esc(l.slug) + '">Read: ' + esc(l.title) + '</a>'; })).join('<span aria-hidden="true"> \u00b7 </span>') + '</p>' : '') +
          '<p class="gl-topic">' + esc(e.topic) + '</p></article>';
      }).join('') + '</div><p class="gl-none" hidden>No terms match. Try a shorter word, or email <a href="mailto:support@tovakin.com">support@tovakin.com</a>.</p>';
    var input = root.querySelector('.gl-search'), count = root.querySelector('.gl-count'), none = root.querySelector('.gl-none');
    var items = Array.prototype.slice.call(root.querySelectorAll('.gl-entry'));
    function apply() {
      var n = 0, words = q.toLowerCase().split(/\s+/).filter(Boolean);
      items.forEach(function (el) {
        var ok = (topic === 'All' || el.getAttribute('data-topic') === topic) && words.every(function (w) { return el.getAttribute('data-text').indexOf(w) > -1; });
        el.hidden = !ok; if (ok) n++;
      });
      count.textContent = n + (n === 1 ? ' term' : ' terms');
      none.hidden = n > 0;
    }
    input.addEventListener('input', function () { q = input.value; apply(); });
    root.querySelectorAll('.gl-chip').forEach(function (c) {
      c.addEventListener('click', function () {
        topic = c.getAttribute('data-topic');
        root.querySelectorAll('.gl-chip').forEach(function (x) { x.setAttribute('aria-pressed', x === c ? 'true' : 'false'); });
        apply();
      });
    });
    /* following a link to one term (glossary.html#trustee): show it even if a filter would hide it, and mark it */
    function jump() {
      var id = decodeURIComponent(location.hash.slice(1)); var el = id && document.getElementById(id);
      if (!el || !el.classList.contains('gl-entry')) return;
      if (el.hidden) { q = ''; input.value = ''; topic = 'All'; root.querySelectorAll('.gl-chip').forEach(function (x) { x.setAttribute('aria-pressed', x.getAttribute('data-topic') === 'All' ? 'true' : 'false'); }); apply(); }
      items.forEach(function (x) { x.classList.remove('gl-hit'); }); el.classList.add('gl-hit');
      setTimeout(function () { el.scrollIntoView({ block: 'center' }); }, 50);
    }
    window.addEventListener('hashchange', jump);
    apply(); jump();
  }
  var pageRoot = document.getElementById('glossary');
  if (pageRoot) renderPage(pageRoot);

  return { decorate: decorate, close: close, entries: D };
})();

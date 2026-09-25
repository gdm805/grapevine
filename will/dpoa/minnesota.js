window.DPOA_STATES = window.DPOA_STATES || {};
window.DPOA_STATES["Minnesota"] = String.raw`
// ==========================================================================
//  GRAPEVINE  |  POWER OF ATTORNEY  |  MINNESOTA
//  The Minnesota STATUTORY SHORT FORM POWER OF ATTORNEY, Minn. Stat. § 523.23, subd. 1, word for word
//  (current text: Laws 2013, ch. 23, in effect for powers signed on or after January 1, 2014).
//  Subd. 3: the wording and content must be duplicated EXACTLY, with no modifications; parts First,
//  Second and Third must be completed; the principal's signature must be acknowledged. So: do not edit
//  the wording in this file. Only the fill-ins change: names come from the answers, and the check marks
//  are pre-filled to match Grapevine's standard durable power of attorney -- (N) all powers, SECOND
//  durable, THIRD no self-gifts, FOURTH accounting only on request. Addresses, the optional expiration
//  date and the principal's initials on the notice are completed by hand.
//  (The custom Grapevine document this replaced was kept outside the site, 25 Sep 2026.)
// ==========================================================================
@set effective_choice = no
@set ask_determiner = no
@set ask_facility = no
@set has_notary = yes
@set has_witness = no
@set exec_choice = no
@set statutory_form = yes
@set sign_note = Minnesota requires this exact state form. Before signing, read the IMPORTANT NOTICE TO THE PRINCIPAL and write your initials on the line at its end. Fill in your address and your attorney(s)-in-fact's addresses by hand. Sign in front of a notary. Your attorney(s)-in-fact must sign the acknowledgment page before acting for you (no notary needed for their signatures).

@center **STATUTORY SHORT FORM POWER OF ATTORNEY**

@center **MINNESOTA STATUTES, SECTION 523.23**

Before completing and signing this form, the principal must read and initial the IMPORTANT NOTICE TO PRINCIPAL that appears after the signature lines in this form. Before acting on behalf of the principal, the attorney(s)-in-fact must sign this form acknowledging having read and understood the IMPORTANT NOTICE TO ATTORNEY(S)-IN-FACT that appears after the notice to the principal.

**PRINCIPAL** (Name and Address of Person Granting the Power)

@line {{name}}
@line ______________________________________________________________
@line ______________________________________________________________

**ATTORNEY(S)-IN-FACT** (Name and Address)

@line {{agent}}
@line ______________________________________________________________
[[each co_agents]]
@line {{co_agent}}
@line ______________________________________________________________
[[end]]

**SUCCESSOR ATTORNEY(S)-IN-FACT** (Optional) To act if any named attorney-in-fact dies, resigns, or is otherwise unable to serve.

(Name and Address)

[[if has_successors]]
[[each successors]]
@line {{successor}}
@line ______________________________________________________________
[[end]]
[[else]]
@line First Successor ______________________________________________
@line ______________________________________________________________
@line Second Successor _____________________________________________
@line ______________________________________________________________
[[end]]

**EXPIRATION DATE** (Optional)

@line ________________________ , ______ , __________
@line Use Specific Month Day Year Only

NOTICE: If more than one attorney-in-fact is designated to act at the same time, make a check or "x" on the line in front of one of the following statements:

[[if has_co_agents]]
[[if co_separate]]
@line __X__ Each attorney-in-fact may independently exercise the powers granted.
@line _____ All attorneys-in-fact must jointly exercise the powers granted.
[[else]]
@line _____ Each attorney-in-fact may independently exercise the powers granted.
@line __X__ All attorneys-in-fact must jointly exercise the powers granted.
[[end]]
[[else]]
@line _____ Each attorney-in-fact may independently exercise the powers granted.
@line _____ All attorneys-in-fact must jointly exercise the powers granted.
[[end]]

I, (the above-named Principal) hereby appoint the above named Attorney(s)-in-Fact to act as my attorney(s)-in-fact:

FIRST: To act for me in any way that I could act with respect to the following matters, as each of them is defined in Minnesota Statutes, section 523.24:

(To grant to the attorney-in-fact any of the following powers, make a check or "x" on the line in front of each power being granted. You may, but need not, cross out each power not granted. Failure to make a check or "x" on the line in front of the power will have the effect of deleting the power unless the line in front of the power of (N) is checked or x-ed.)

@line _____ (A) real property transactions;
@line I choose to limit this power to real property in .............................. County, Minnesota, described as follows:
@line (Use legal description. Do not use street address.)
@line ______________________________________________________________
@line ______________________________________________________________
@line (If more space is needed, continue on the back or on an attachment.)
@line _____ (B) tangible personal property transactions;
@line _____ (C) bond, share, and commodity transactions;
@line _____ (D) banking transactions;
@line _____ (E) business operating transactions;
@line _____ (F) insurance transactions;
@line _____ (G) beneficiary transactions;
@line _____ (H) gift transactions;
@line _____ (I) fiduciary transactions;
@line _____ (J) claims and litigation;
@line _____ (K) family maintenance;
@line _____ (L) benefits from military service;
@line _____ (M) records, reports, and statements;
@line __X__ (N) all of the powers listed in (A) through (M) above and all other matters, other than health care decisions under a health care directive that complies with Minnesota Statutes, chapter 145C.

SECOND: (You must indicate below whether or not this power of attorney will be effective if you become incapacitated or incompetent. Make a check or "x" on the line in front of the statement that expresses your intent.)

@line __X__ This power of attorney shall continue to be effective if I become incapacitated or incompetent.
@line _____ This power of attorney shall not be effective if I become incapacitated or incompetent.

THIRD: My attorney(s)-in-fact MAY NOT make gifts to the attorney(s)-in-fact, or anyone the attorney(s)-in-fact are legally obligated to support, UNLESS I have made a check or an "x" on the line in front of the second statement below and I have written in the name(s) of the attorney(s)-in-fact. The second option allows you to limit the gifting power to only the attorney(s)-in-fact you name in the statement.

Minnesota Statutes, section 523.24, subdivision 8, clause (2), limits the annual gift(s) made to my attorney(s)-in-fact, or to anyone the attorney(s)-in-fact are legally obligated to support, to an amount, in the aggregate, that does not exceed the federal annual gift tax exclusion amount in the year of the gift.

@line __X__ I do not authorize any of my attorney(s)-in-fact to make gifts to themselves or to anyone the attorney(s)-in-fact have a legal obligation to support.
@line _____ I authorize .............................................. (write in name(s)), as my attorney(s)-in-fact, to make gifts to themselves or to anyone the attorney(s)-in-fact have a legal obligation to support.

FOURTH: (You may indicate below whether or not the attorney-in-fact is required to make an accounting. Make a check or "x" on the line in front of the statement that expresses your intent.)

@line __X__ My attorney-in-fact need not render an accounting unless I request it or the accounting is otherwise required by Minnesota Statutes, section 523.21.
@line _____ My attorney-in-fact must render ........................ (Monthly, Quarterly, Annual) accountings to me or ........................................ (Name and Address) during my lifetime, and a final accounting to the personal representative of my estate, if any is appointed, after my death.

In Witness Whereof I have hereunto signed my name this ................ day of ........................, ............

@line ______________________________________________________________
@line (Signature of Principal)

**(Acknowledgment of Principal)**

@line STATE OF MINNESOTA )
@line ) ss.
@line COUNTY OF ______________________ )

The foregoing instrument was acknowledged before me this ............. day of .........., ........, by {{name}}.
@line (Insert Name of Principal)

@line ______________________________________________________________
@line (Signature of Notary Public or other Official)

**Acknowledgement of notice to attorney(s)-in-fact and specimen signature of attorney(s)-in-fact.**

By signing below, I acknowledge I have read and understand the IMPORTANT NOTICE TO ATTORNEY(S)-IN-FACT required by Minnesota Statutes, section 523.23, and understand and accept the scope of any limitations to the powers and duties delegated to me by this instrument.

@line ______________________________________________________________ {{agent}}
[[each co_agents]]
@line ______________________________________________________________ {{co_agent}}
[[end]]
[[each successors]]
@line ______________________________________________________________ {{successor}}
[[end]]
@line (Notarization not required)

@line This instrument was drafted by:
@line ______________________________________________________________
@line ______________________________________________________________

@line Specimen Signature of Attorney(s)-in-Fact
@line (Notarization not required)
@line ______________________________________________________________ {{agent}}
[[each co_agents]]
@line ______________________________________________________________ {{co_agent}}
[[end]]
[[each successors]]
@line ______________________________________________________________ {{successor}}
[[end]]

@pagebreak

@center **IMPORTANT NOTICE TO THE PRINCIPAL**

READ THIS NOTICE CAREFULLY. The power of attorney form that you will be signing is a legal document. It is governed by Minnesota Statutes, chapter 523. If there is anything about this form that you do not understand, you should seek legal advice.

PURPOSE: The purpose of the power of attorney is for you, the principal, to give broad and sweeping powers to your attorney(s)-in-fact, who is the person you designate to handle your affairs. Any action taken by your attorney(s)-in-fact pursuant to the powers you designate in this power of attorney form binds you, your heirs and assigns, and the representative of your estate in the same manner as though you took the action yourself.

POWERS GIVEN: You will be granting the attorney(s)-in-fact power to enter into transactions relating to any of your real or personal property, even without your consent or any advance notice to you. The powers granted to the attorney(s)-in-fact are broad and not supervised. THIS POWER OF ATTORNEY DOES NOT GRANT ANY POWERS TO MAKE HEALTH CARE DECISIONS FOR YOU. TO GIVE SOMEONE THOSE POWERS, YOU MUST USE A HEALTH CARE DIRECTIVE THAT COMPLIES WITH MINNESOTA STATUTES, CHAPTER 145C.

DUTIES OF YOUR ATTORNEY(S)-IN-FACT: Your attorney(s)-in-fact must keep complete records of all transactions entered into on your behalf. You may request that your attorney(s)-in-fact provide you or someone else that you designate a periodic accounting, which is a written statement that gives reasonable notice of all transactions entered into on your behalf. Your attorney(s)-in-fact must also render an accounting if the attorney-in-fact reimburses himself or herself for any expenditure they made on behalf of you.

An attorney-in-fact is personally liable to any person, including you, who is injured by an action taken by an attorney-in-fact in bad faith under the power of attorney or by an attorney-in-fact's failure to account when the attorney-in-fact has a duty to account under this section. The attorney(s)-in-fact must act with your interests utmost in mind.

TERMINATION: If you choose, your attorney(s)-in-fact may exercise these powers throughout your lifetime, both before and after you become incapacitated. However, a court can take away the powers of your attorney(s)-in-fact because of improper acts. You may also revoke this power of attorney if you wish. This power of attorney is automatically terminated if the power is granted to your spouse and proceedings are commenced for dissolution, legal separation, or annulment of your marriage.

This power of attorney authorizes, but does not require, the attorney(s)-in-fact to act for you. You are not required to sign this power of attorney, but it will not take effect without your signature. You should not sign this power of attorney if you do not understand everything in it, and what your attorney(s)-in-fact will be able to do if you do sign it.

Please place your initials on the following line indicating you have read this IMPORTANT NOTICE TO THE PRINCIPAL: ..........

@center **IMPORTANT NOTICE TO THE ATTORNEY(S)-IN-FACT**

You have been nominated by the principal to act as an attorney-in-fact. You are under no duty to exercise the authority granted by the power of attorney. However, when you do exercise any power conferred by the power of attorney, you must:

(1) act with the interests of the principal utmost in mind;

(2) exercise the power in the same manner as an ordinarily prudent person of discretion and intelligence would exercise in the management of the person's own affairs;

(3) render accountings as directed by the principal or whenever you reimburse yourself for expenditures made on behalf of the principal;

(4) act in good faith for the best interest of the principal, using due care, competence, and diligence;

(5) cease acting on behalf of the principal if you learn of any event that terminates this power of attorney or terminates your authority under this power of attorney, such as revocation by the principal of the power of attorney, the death of the principal, or the commencement of proceedings for dissolution, separation, or annulment of your marriage to the principal;

(6) disclose your identity as an attorney-in-fact whenever you act for the principal by signing in substantially the following manner:

Signature by a person as "attorney-in-fact for (name of the principal)" or "(name of the principal) by (name of the attorney-in-fact) the principal's attorney-in-fact";

(7) acknowledge you have read and understood this IMPORTANT NOTICE TO THE ATTORNEY(S)-IN-FACT by signing the power of attorney form.

You are personally liable to any person, including the principal, who is injured by an action taken by you in bad faith under the power of attorney or by your failure to account when the duty to account has arisen.

The meaning of the powers granted to you is contained in Minnesota Statutes, chapter 523. If there is anything about this document or your duties that you do not understand, you should seek legal advice.
`;

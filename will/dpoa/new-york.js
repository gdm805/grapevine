window.DPOA_STATES = window.DPOA_STATES || {};
window.DPOA_STATES["New York"] = String.raw`
// ==========================================================================
//  GRAPEVINE  |  POWER OF ATTORNEY  |  NEW YORK
//  The POWER OF ATTORNEY NEW YORK STATUTORY SHORT FORM, N.Y. Gen. Oblig. Law § 5-1513, word for word
//  (revision in effect since June 13, 2021). An "Optional" section that isn't used is replaced by the
//  words "Intentionally Omitted", as § 5-1513 allows. Execution follows § 5-1501B(1): signed and dated
//  by the principal with the signature acknowledged, witnessed by two people (the notary may be one of
//  them), and the agent signs and has the signature acknowledged before acting. § 5-1501B(1)(a) also
//  requires type no smaller than 12 point -- so this file uses only plain paragraphs and @line
//  (12 point); do not use @sub or @sign here (they print smaller).
//  Grant of authority: the letters A through N are typed on line (P), as the form permits, and the
//  principal initials (P) by hand. Every other "( )" is for the principal's own initials.
//  (The custom Grapevine document this replaced was kept outside the site, 25 Sep 2026.)
// ==========================================================================
@set effective_choice = no
@set ask_determiner = no
@set ask_facility = no
@set has_notary = yes
@set has_witness = yes
@set exec_choice = no
@set statutory_form = yes
@set sign_note = New York requires this state form. Before you sign, initial the bracket at line (P) in the GRANT OF AUTHORITY section; the letters of the powers are already typed in. If you named more than one agent (or successor agent) and want them to be able to act separately, initial that line too; otherwise they must act together. Then sign in front of a notary and two witnesses who are not your agents (the notary can be one of the two). Each agent must sign the agent's page in front of a notary before acting for you.

@center **POWER OF ATTORNEY NEW YORK STATUTORY SHORT FORM**

(a) **CAUTION TO THE PRINCIPAL:** Your Power of Attorney is an important document. As the "principal," you give the person whom you choose (your "agent") authority to spend your money and sell or dispose of your property during your lifetime without telling you. You do not lose your authority to act even though you have given your agent similar authority.

When your agent exercises this authority, he or she must act according to any instructions you have provided or, where there are no specific instructions, in your best interest. "Important Information for the Agent" at the end of this document describes your agent's responsibilities.

Your agent can act on your behalf only after signing the Power of Attorney before a notary public.

You can request information from your agent at any time. If you are revoking a prior Power of Attorney, you should provide written notice of the revocation to your prior agent(s) and to any third parties who may have acted upon it, including the financial institutions where your accounts are located.

You can revoke or terminate your Power of Attorney at any time for any reason as long as you are of sound mind. If you are no longer of sound mind, a court can remove an agent for acting improperly.

Your agent cannot make health care decisions for you. You may execute a "Health Care Proxy" to do this.

The law governing Powers of Attorney is contained in the New York General Obligations Law, Article 5, Title 15. This law is available at a law library, or online through the New York State Senate or Assembly websites, www.nysenate.gov or www.nyassembly.gov.

If there is anything about this document that you do not understand, you should ask a lawyer of your own choosing to explain it to you.

(b) **DESIGNATION OF AGENT(S):**

@line I, {{name}}, ______________________________________________, hereby appoint:
@line name and address of principal
@line {{agent}}, ______________________________________________
[[each co_agents]]
@line {{co_agent}}, ______________________________________________
[[end]]
@line as my agent(s)
@line name(s) and address(es) of agent(s)

If you designate more than one agent above and you do not initial the statement below, they must act together.

@line (      ) My agents may act SEPARATELY.

[[if has_successors]]
(c) **DESIGNATION OF SUCCESSOR AGENT(S): (OPTIONAL)**

If any agent designated above is unable or unwilling to serve, I appoint as my successor agent(s):

[[each successors]]
@line {{successor}}, ______________________________________________
[[end]]
@line name(s) and address(es) of successor agent(s)

If you do not initial the statement below, successor agents designated above must act together.

@line (      ) My successor agents may act SEPARATELY.

You may provide for specific succession rules in this section. Insert specific succession provisions here:

@line ______________________________________________________________
[[else]]
(c) **DESIGNATION OF SUCCESSOR AGENT(S): (OPTIONAL)** Intentionally Omitted.
[[end]]

(d) This POWER OF ATTORNEY shall not be affected by my subsequent incapacity unless I have stated otherwise below, under "Modifications".

(e) This POWER OF ATTORNEY DOES NOT REVOKE any Powers of Attorney previously executed by me unless I have stated otherwise below, under "Modifications."

(f) **GRANT OF AUTHORITY:**

To grant your agent some or all of the authority below, either

(1) Initial the bracket at each authority you grant, or

(2) Write or type the letters for each authority you grant on the blank line at (P), and initial the bracket at (P). If you initial (P), you do not need to initial the other lines.

I grant authority to my agent(s) with respect to the following subjects as defined in sections 5-1502A through 5-1502N of the New York General Obligations Law:

@line (      ) (A) real estate transactions;
@line (      ) (B) chattel and goods transactions;
@line (      ) (C) bond, share, and commodity transactions;
@line (      ) (D) banking transactions;
@line (      ) (E) business operating transactions;
@line (      ) (F) insurance transactions;
@line (      ) (G) estate transactions;
@line (      ) (H) claims and litigation;
@line (      ) (I) personal and family maintenance. If you grant your agent this authority, it will allow the agent to make gifts that you customarily have made to individuals, including the agent, and charitable organizations. The total amount of all such gifts in any one calendar year cannot exceed five thousand dollars;
@line (      ) (J) benefits from governmental programs or civil or military service;
@line (      ) (K) financial matters related to health care; records, reports, and statements;
@line (      ) (L) retirement benefit transactions;
@line (      ) (M) tax matters;
@line (      ) (N) all other matters;
@line (      ) (O) full and unqualified authority to my agent(s) to delegate any or all of the foregoing powers to any person or persons whom my agent(s) select;
@line (      ) (P) EACH of the matters identified by the following letters: A, B, C, D, E, F, G, H, I, J, K, L, M, N.

You need not initial the other lines if you initial line (P).

(g) **CERTAIN GIFT TRANSACTIONS: (OPTIONAL)** Intentionally Omitted.

(h) **MODIFICATIONS: (OPTIONAL)** Intentionally Omitted.

(i) **DESIGNATION OF MONITOR(S): (OPTIONAL)** Intentionally Omitted.

(j) **COMPENSATION OF AGENT(S):**

Your agent is entitled to be reimbursed from your assets for reasonable expenses incurred on your behalf. If you ALSO wish your agent(s) to be compensated from your assets for services rendered on your behalf, and/or you wish to define "reasonable compensation", you may do so above, under "Modifications".

(k) **ACCEPTANCE BY THIRD PARTIES:** I agree to indemnify the third party for any claims that may arise against the third party because of reliance on this Power of Attorney. I understand that any termination of this Power of Attorney, whether the result of my revocation of the Power of Attorney or otherwise, is not effective as to a third party until the third party has actual notice or knowledge of the termination.

(l) **TERMINATION:** This Power of Attorney continues until I revoke it or it is terminated by my death or other event described in section 5-1511 of the General Obligations Law.

Section 5-1511 of the General Obligations Law describes the manner in which you may revoke your Power of Attorney, and the events which terminate the Power of Attorney.

(m) **SIGNATURE AND ACKNOWLEDGMENT:** In Witness Whereof I have hereunto signed my name on ___________, 20___.

@line PRINCIPAL signs here: ==> __________________________________________
@line {{name}}

@line (acknowledgment)
@line STATE OF NEW YORK )
@line ) ss.:
@line COUNTY OF ______________________ )

On the ______ day of ______________ in the year ______, before me, the undersigned, personally appeared {{name}}, personally known to me or proved to me on the basis of satisfactory evidence to be the individual whose name is subscribed to the within instrument and acknowledged to me that he/she/they executed the same in his/her/their capacity, and that by his/her/their signature on the instrument, the individual, or the person upon behalf of which the individual acted, executed the instrument.

@line __________________________________________
@line Notary Public

(n) **SIGNATURES OF WITNESSES:**

By signing as a witness, I acknowledge that the principal signed the Power of Attorney in my presence and in the presence of the other witness, or that the principal acknowledged to me that the principal's signature was affixed by him or her or at his or her direction. I also acknowledge that the principal has stated that this Power of Attorney reflects his or her wishes and that he or she has signed it voluntarily. I am not named herein as an agent or as a permissible recipient of gifts.

@line ______________________________________________________________
@line Signature of Witness 1
@line ______________________________________________________________
@line Date
@line ______________________________________________________________
@line Print name
@line ______________________________________________________________
@line Address
@line ______________________________________________________________
@line City, State, Zip Code

@line ______________________________________________________________
@line Signature of Witness 2
@line ______________________________________________________________
@line Date
@line ______________________________________________________________
@line Print name
@line ______________________________________________________________
@line Address
@line ______________________________________________________________
@line City, State, Zip Code

(o) **IMPORTANT INFORMATION FOR THE AGENT:**

When you accept the authority granted under this Power of Attorney, a special legal relationship is created between you and the principal. This relationship imposes on you legal responsibilities that continue until you resign or the Power of Attorney is terminated or revoked. You must:

(1) act according to any instructions from the principal, or, where there are no instructions, in the principal's best interest;

(2) avoid conflicts that would impair your ability to act in the principal's best interest;

(3) keep the principal's property separate and distinct from any assets you own or control, unless otherwise permitted by law;

(4) keep a record of all transactions conducted for the principal or keep all receipts of payments and transactions conducted for the principal; and

(5) disclose your identity as an agent whenever you act for the principal by writing or printing the principal's name and signing your own name as "agent" in either of the following manners: (Principal's Name) by (Your Signature) as Agent, or (your signature) as Agent for (Principal's Name).

You may not use the principal's assets to benefit yourself or anyone else or make gifts to yourself or anyone else unless the principal has specifically granted you that authority in the modifications section of this document or a Non-Statutory Power of Attorney. If you have that authority, you must act according to any instructions of the principal or, where there are no such instructions, in the principal's best interest. You may resign by giving written notice to the principal and to any co-agent, successor agent, monitor if one has been named in this document, or the principal's guardian if one has been appointed. If there is anything about this document or your responsibilities that you do not understand, you should seek legal advice.

Liability of agent:

The meaning of the authority given to you is defined in New York's General Obligations Law, Article 5, Title 15. If it is found that you have violated the law or acted outside the authority granted to you in the Power of Attorney, you may be liable under the law for your violation.

(p) **AGENT'S SIGNATURE AND ACKNOWLEDGMENT OF APPOINTMENT:**

It is not required that the principal and the agent(s) sign at the same time, nor that multiple agents sign at the same time.

I/we, {{agent_names}}, have read the foregoing Power of Attorney. I am/we are the person(s) identified therein as agent(s) for the principal named therein.

I/we acknowledge my/our legal responsibilities.

In Witness Whereof I have hereunto signed my name on ________________ 20_____.

@line Agent(s) sign(s) here: ==> __________________________________________ {{agent}}
[[each co_agents]]
@line Agent(s) sign(s) here: ==> __________________________________________ {{co_agent}}
[[end]]

@line (acknowledgment(s))
@line STATE OF NEW YORK )
@line ) ss.:
@line COUNTY OF ______________________ )

On the ______ day of ______________ in the year ______, before me, the undersigned, personally appeared {{agent_names}}, personally known to me or proved to me on the basis of satisfactory evidence to be the individual(s) whose name(s) is (are) subscribed to the within instrument and acknowledged to me that he/she/they executed the same in his/her/their capacity(ies), and that by his/her/their signature(s) on the instrument, the individual(s), or the person upon behalf of which the individual(s) acted, executed the instrument.

@line __________________________________________
@line Notary Public

[[if has_successors]]
(q) **SUCCESSOR AGENT'S SIGNATURE AND ACKNOWLEDGMENT OF APPOINTMENT:**

It is not required that the principal and the SUCCESSOR agent(s), if any, sign at the same time, nor that multiple SUCCESSOR agents sign at the same time. Furthermore, successor agents can not use this power of attorney unless the agent(s) designated above is/are unable or unwilling to serve.

I/we, {{successor_names}}, have read the foregoing Power of Attorney. I am/we are the person(s) identified therein as SUCCESSOR agent(s) for the principal named therein.

In Witness Whereof I have hereunto signed my name on ________________ 20_____.

[[each successors]]
@line Successor Agent(s) sign(s) here: ==> ______________________________ {{successor}}
[[end]]

@line (acknowledgment(s))
@line STATE OF NEW YORK )
@line ) ss.:
@line COUNTY OF ______________________ )

On the ______ day of ______________ in the year ______, before me, the undersigned, personally appeared {{successor_names}}, personally known to me or proved to me on the basis of satisfactory evidence to be the individual(s) whose name(s) is (are) subscribed to the within instrument and acknowledged to me that he/she/they executed the same in his/her/their capacity(ies), and that by his/her/their signature(s) on the instrument, the individual(s), or the person upon behalf of which the individual(s) acted, executed the instrument.

@line __________________________________________
@line Notary Public
[[else]]
(q) **SUCCESSOR AGENT'S SIGNATURE AND ACKNOWLEDGMENT OF APPOINTMENT:** Intentionally Omitted.
[[end]]
`;

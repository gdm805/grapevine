window.DPOA_STATES = window.DPOA_STATES || {};
window.DPOA_STATES["California"] = String.raw`
// ==========================================================================
//  GRAPEVINE  |  POWER OF ATTORNEY  |  CALIFORNIA
//  The UNIFORM STATUTORY FORM POWER OF ATTORNEY, Cal. Prob. Code § 4401, word for word as enacted by
//  Stats. 2011, ch. 113 (AB 1082), effective January 1, 2012 (the online code omits the form; the text
//  is from the chaptered bill). § 4402: the form must contain this exact wording, be signed, and be
//  acknowledged before a notary. § 4406 lets the agent compel a third party to honor it and recover
//  attorney's fees for an unreasonable refusal. Do not edit the wording.
//  Fill-ins from the answers: names, "SEPARATELY"/"JOINTLY" for co-agents, and the SPECIAL INSTRUCTIONS
//  (backup agents, and -- for "only if I become incapacitated" -- a springing clause with the person who
//  declares the incapacity under penalty of perjury, Prob. Code § 4129). The principal initials line (N)
//  by hand. The notary certificate is the Civil Code § 1189 all-purpose acknowledgment.
//  (The custom Grapevine document this replaced was kept outside the site, 25 Sep 2026.)
// ==========================================================================
@set effective_choice = yes
@set ask_determiner = yes
@set ask_facility = no
@set has_notary = yes
@set has_witness = no
@set exec_choice = no
@set statutory_form = yes
@set sign_note = California: this is California's Uniform Statutory Form. Before signing, initial the line in front of (N) to grant all of the powers listed (only lines you initial are granted). Fill in your address and your agent's address by hand. Sign in front of a notary public, who completes the acknowledgment.

@center **UNIFORM STATUTORY FORM POWER OF ATTORNEY**

@center (California Probate Code Section 4401)

NOTICE: THE POWERS GRANTED BY THIS DOCUMENT ARE BROAD AND SWEEPING. THEY ARE EXPLAINED IN THE UNIFORM STATUTORY FORM POWER OF ATTORNEY ACT (CALIFORNIA PROBATE CODE SECTIONS 4400–4465). THE POWERS LISTED IN THIS DOCUMENT DO NOT INCLUDE ALL POWERS THAT ARE AVAILABLE UNDER THE PROBATE CODE. ADDITIONAL POWERS AVAILABLE UNDER THE PROBATE CODE MAY BE ADDED BY SPECIFICALLY LISTING THEM UNDER THE SPECIAL INSTRUCTIONS SECTION OF THIS DOCUMENT. IF YOU HAVE ANY QUESTIONS ABOUT THESE POWERS, OBTAIN COMPETENT LEGAL ADVICE. THIS DOCUMENT DOES NOT AUTHORIZE ANYONE TO MAKE MEDICAL AND OTHER HEALTH-CARE DECISIONS FOR YOU. YOU MAY REVOKE THIS POWER OF ATTORNEY IF YOU LATER WISH TO DO SO.

@line I {{name}}, ______________________________________________
@line (your name and address)
@line appoint {{agent}}, ______________________________________________
[[each co_agents]]
@line {{co_agent}}, ______________________________________________
[[end]]
@line (name and address of the person appointed, or of each person appointed if you want to designate more than one)

as my agent (attorney-in-fact) to act for me in any lawful way with respect to the following initialed subjects:

TO GRANT ALL OF THE FOLLOWING POWERS, INITIAL THE LINE IN FRONT OF (N) AND IGNORE THE LINES IN FRONT OF THE OTHER POWERS.

TO GRANT ONE OR MORE, BUT FEWER THAN ALL, OF THE FOLLOWING POWERS, INITIAL THE LINE IN FRONT OF EACH POWER YOU ARE GRANTING.

TO WITHHOLD A POWER, DO NOT INITIAL THE LINE IN FRONT OF IT. YOU MAY, BUT NEED NOT, CROSS OUT EACH POWER WITHHELD.

@line INITIAL
@line ______ (A) Real property transactions.
@line ______ (B) Tangible personal property transactions.
@line ______ (C) Stock and bond transactions.
@line ______ (D) Commodity and option transactions.
@line ______ (E) Banking and other financial institution transactions.
@line ______ (F) Business operating transactions.
@line ______ (G) Insurance and annuity transactions.
@line ______ (H) Estate, trust, and other beneficiary transactions.
@line ______ (I) Claims and litigation.
@line ______ (J) Personal and family maintenance.
@line ______ (K) Benefits from social security, medicare, medicaid, or other governmental programs, or civil or military service.
@line ______ (L) Retirement plan transactions.
@line ______ (M) Tax matters.
@line ______ (N) ALL OF THE POWERS LISTED ABOVE.

YOU NEED NOT INITIAL ANY OTHER LINES IF YOU INITIAL LINE (N).

**SPECIAL INSTRUCTIONS:**

ON THE FOLLOWING LINES YOU MAY GIVE SPECIAL INSTRUCTIONS LIMITING OR EXTENDING THE POWERS GRANTED TO YOUR AGENT.

[[if has_successors]]
If any agent named above dies, becomes incapacitated, resigns, or refuses or is otherwise unable to act, I appoint the following as successor agent, each to act alone and successively, in the order named: {{successor_names}}. Each successor agent has the same powers as the agent named above.

[[end]]
[[if upon_incapacity]]
This power of attorney shall become effective only upon my incapacity. My incapacity shall be established by a written declaration under penalty of perjury by {{determiner}} that I am unable to manage my property and financial affairs. A third person may rely on that declaration.

[[end]]
@line ______________________________________________________________
@line ______________________________________________________________
@line ______________________________________________________________

UNLESS YOU DIRECT OTHERWISE ABOVE, THIS POWER OF ATTORNEY IS EFFECTIVE IMMEDIATELY AND WILL CONTINUE UNTIL IT IS REVOKED.

This power of attorney will continue to be effective even though I become incapacitated.

STRIKE THE PRECEDING SENTENCE IF YOU DO NOT WANT THIS POWER OF ATTORNEY TO CONTINUE IF YOU BECOME INCAPACITATED.

**EXERCISE OF POWER OF ATTORNEY WHERE MORE THAN ONE AGENT DESIGNATED**

[[if has_co_agents]]
[[if co_separate]]
@line If I have designated more than one agent, the agents are to act SEPARATELY.
[[else]]
@line If I have designated more than one agent, the agents are to act JOINTLY.
[[end]]
[[else]]
@line If I have designated more than one agent, the agents are to act ______________________.
[[end]]

IF YOU APPOINTED MORE THAN ONE AGENT AND YOU WANT EACH AGENT TO BE ABLE TO ACT ALONE WITHOUT THE OTHER AGENT JOINING, WRITE THE WORD "SEPARATELY" IN THE BLANK SPACE ABOVE. IF YOU DO NOT INSERT ANY WORD IN THE BLANK SPACE, OR IF YOU INSERT THE WORD "JOINTLY", THEN ALL OF YOUR AGENTS MUST ACT OR SIGN TOGETHER.

I agree that any third party who receives a copy of this document may act under it. A third party may seek identification. Revocation of the power of attorney is not effective as to a third party until the third party has actual knowledge of the revocation. I agree to indemnify the third party for any claims that arise against the third party because of reliance on this power of attorney.

@line Signed this ______ day of ____________________, 20____
@line ______________________________________________________________
@line (your signature)

@line State of California
@line County of ____________________

BY ACCEPTING OR ACTING UNDER THE APPOINTMENT, THE AGENT ASSUMES THE FIDUCIARY AND OTHER LEGAL RESPONSIBILITIES OF AN AGENT.

@pagebreak

@center **CERTIFICATE OF ACKNOWLEDGMENT OF NOTARY PUBLIC**

A notary public or other officer completing this certificate verifies only the identity of the individual who signed the document to which this certificate is attached, and not the truthfulness, accuracy, or validity of that document.

@line State of California
@line County of ____________________

On ____________________ before me, ______________________________ (insert name and title of the officer), personally appeared ______________________________, who proved to me on the basis of satisfactory evidence to be the person(s) whose name(s) is/are subscribed to the within instrument and acknowledged to me that he/she/they executed the same in his/her/their authorized capacity(ies), and that by his/her/their signature(s) on the instrument the person(s), or the entity upon behalf of which the person(s) acted, executed the instrument.

I certify under PENALTY OF PERJURY under the laws of the State of California that the foregoing paragraph is true and correct.

WITNESS my hand and official seal.

@line Signature ______________________________ (Seal)
`;

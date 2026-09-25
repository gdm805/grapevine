window.DPOA_STATES = window.DPOA_STATES || {};
window.DPOA_STATES["Alaska"] = String.raw`
// ==========================================================================
//  GRAPEVINE  |  POWER OF ATTORNEY  |  ALASKA
//  The Alaska GENERAL POWER OF ATTORNEY statutory form, AS 13.26.645, with the optional alternate-agent
//  provision of AS 13.26.650(1), word for word from the Alaska Statutes (2025). "Substantially the
//  following form" is the statute's test; the form's own NOTICE TO THIRD PARTIES makes a third party that
//  fails to honor a properly executed statutory form liable for a civil penalty plus damages, costs and fees.
//  Execution (AS 13.26.600): signed and acknowledged before a notary.
//  Boxes are pre-marked from the answers to match Grapevine's standard durable power: every power (A)-(N);
//  no "specific authority" acts; separately/jointly for co-agents; effective now and NOT affected by
//  incapacity (AS 13.26.660(3): if that box is left unmarked the power ENDS at incapacity) -- or, for
//  "only if I become incapacitated", effective on incapacity (established by affidavit, as the form's own notice says).
//  (The custom Grapevine document this replaced was kept outside the site, 25 Sep 2026.)
// ==========================================================================
@set effective_choice = yes
@set ask_determiner = no
@set ask_facility = no
@set has_notary = yes
@set has_witness = no
@set exec_choice = no
@set statutory_form = yes
@set sign_note = Alaska: this is Alaska's statutory General Power of Attorney. The boxes are already marked to match your answers; check them before you sign. Fill in your address and your agent's address by hand, and sign in front of a notary public.

@center **GENERAL POWER OF ATTORNEY**

THE POWERS GRANTED FROM THE PRINCIPAL TO THE AGENT OR AGENTS IN THE FOLLOWING DOCUMENT ARE VERY BROAD. THEY MAY INCLUDE THE POWER TO DISPOSE, SELL, CONVEY, AND ENCUMBER YOUR REAL AND PERSONAL PROPERTY. ACCORDINGLY, THE FOLLOWING DOCUMENT SHOULD ONLY BE USED AFTER CAREFUL CONSIDERATION. IF YOU HAVE ANY QUESTIONS ABOUT THIS DOCUMENT, YOU SHOULD SEEK COMPETENT ADVICE.

YOU MAY REVOKE THIS POWER OF ATTORNEY AT ANY TIME.

Pursuant to AS 13.26.600, 13.26.625 — 13.26.640, and 13.26.655 — 13.26.695, I, {{name}} (Name of principal), of ______________________________________________ (Address of principal), do hereby appoint {{agent_names}}, ______________________________________________ (Name and address of agent or agents), my agent(s) to act as indicated below in my name, place, and stead in any way which I myself could do, if I were personally present, with respect to the following matters, as each of them is defined in AS 13.26.665, to the full extent that I am permitted by law to act through an agent:

MARK THE BOXES BELOW TO INDICATE THE POWERS YOU WANT TO GIVE YOUR AGENT OR AGENTS. MARK THE BOX FOR "YES" THAT IS OPPOSITE A CATEGORY BELOW TO GIVE YOUR AGENT OR AGENTS THE POWER IN THAT CATEGORY. IF YOU DO NOT MARK A BOX OPPOSITE A CATEGORY, YOUR AGENT OR AGENTS WILL NOT HAVE THE POWER IN THAT CATEGORY.

@line YES
@line (A) real estate transactions ( X )
@line (B) transactions involving tangible personal property, chattels, and goods ( X )
@line (C) bonds, shares, and commodities transactions ( X )
@line (D) banking transactions ( X )
@line (E) business operating transactions ( X )
@line (F) insurance transactions ( X )
@line (G) estate transactions ( X )
@line (H) retirement plans ( X )
@line (I) claims and litigation ( X )
@line (J) personal relationships and affairs ( X )
@line (K) benefits from government programs and civil or military service ( X )
@line (L) records, reports, and statements ( X )
@line (M) voter registration and absentee ballot requests ( X )
@line (N) all other matters, including those specified as follows: ( X )
@line _________________________________________________________

**GRANT OF SPECIFIC AUTHORITY (OPTIONAL)**

The agent or agents you have appointed WILL NOT have the power to do any of the following acts UNLESS you MARK the box opposite that category:

@line create, amend, revoke, or terminate an inter vivos trust (   )
@line make a gift, subject to the limitations of AS 13.26.665(q) and any special instructions in this power of attorney (   )
@line create or change a beneficiary designation (   )
@line revoke a transfer on death deed made under AS 13.48 (   )
@line create or change rights of survivorship (   )
@line delegate authority granted under the power of attorney (   )
@line waive the principal's right to be a beneficiary of a joint and survivor annuity, including a survivor benefit under a retirement plan (   )
@line exercise fiduciary powers that the principal has authority to delegate (   )
@line exercise authority over the content of electronic communications, as that term is defined in 18 U.S.C. 2510(12), sent or received by the principal (   )

IF YOU HAVE APPOINTED MORE THAN ONE AGENT, MARK ONE OF THE FOLLOWING:

[[if has_co_agents]]
[[if co_separate]]
@line ( X ) Each agent may exercise the powers conferred separately, without the consent of any other agent.
@line (   ) All agents shall exercise the powers conferred jointly, with the consent of all other agents.
[[else]]
@line (   ) Each agent may exercise the powers conferred separately, without the consent of any other agent.
@line ( X ) All agents shall exercise the powers conferred jointly, with the consent of all other agents.
[[end]]
[[else]]
@line (   ) Each agent may exercise the powers conferred separately, without the consent of any other agent.
@line (   ) All agents shall exercise the powers conferred jointly, with the consent of all other agents.
[[end]]

TO INDICATE WHEN THIS DOCUMENT SHALL BECOME EFFECTIVE, MARK ONE OF THE FOLLOWING:

[[if upon_incapacity]]
@line (   ) This document shall become effective upon the date of my signature.
@line ( X ) This document shall become effective upon the date of my incapacity and shall not otherwise be affected by my incapacity.
[[else]]
@line ( X ) This document shall become effective upon the date of my signature.
@line (   ) This document shall become effective upon the date of my incapacity and shall not otherwise be affected by my incapacity.
[[end]]

IF YOU HAVE INDICATED THAT THIS DOCUMENT SHALL BECOME EFFECTIVE ON THE DATE OF YOUR SIGNATURE, MARK ONE OF THE FOLLOWING:

[[if upon_incapacity]]
@line (   ) This document shall not be affected by my subsequent incapacity.
[[else]]
@line ( X ) This document shall not be affected by my subsequent incapacity.
[[end]]
@line (   ) This document shall be revoked by my subsequent incapacity.

IF YOU HAVE INDICATED THAT THIS DOCUMENT SHALL BECOME EFFECTIVE UPON THE DATE OF YOUR SIGNATURE AND WANT TO LIMIT THE TERM OF THIS DOCUMENT, COMPLETE THE FOLLOWING:

@line This document shall only continue in effect for __________ years from the date of my signature.

YOU MAY DESIGNATE AN ALTERNATE AGENT. ANY ALTERNATE YOU DESIGNATE WILL BE ABLE TO EXERCISE THE SAME POWERS AS THE AGENT(S) YOU NAMED AT THE BEGINNING OF THIS DOCUMENT. IF YOU WISH TO DESIGNATE AN ALTERNATE OR ALTERNATES, COMPLETE THE FOLLOWING: If the agent(s) named at the beginning of this document is unable or unwilling to serve or continue to serve, then I appoint the following agent to serve with the same powers:

[[if has_successors]]
[[each successors]]
@line {{successor}}, ______________________________________________
[[end]]
@line (Name and address of alternate)
[[else]]
@line First alternate or successor agent ______________________________
@line (Name and address of alternate)
@line Second alternate or successor agent _____________________________
@line (Name and address of alternate)
[[end]]

**NOTICE OF REVOCATION OF THE POWERS GRANTED IN THIS DOCUMENT**

You may revoke one or more of the powers granted in this document. Unless otherwise provided in this document, you may revoke a specific power granted in this power of attorney by completing a special power of attorney that includes the specific power in this document that you want to revoke. Unless otherwise provided in this document, you may revoke all the powers granted in this power of attorney by completing a subsequent power of attorney.

**NOTICE TO THIRD PARTIES**

A third party who relies on the reasonable representations of an agent as to a matter relating to a power granted by a properly executed statutory form power of attorney does not incur any liability to the principal or to the principal's heirs, assigns, or estate as a result of permitting the agent to exercise the authority granted by the power of attorney. A third party who fails to honor a properly executed statutory form power of attorney may be liable to the principal, the agent, the principal's heirs, assigns, or estate for a civil penalty, plus damages, costs, and fees associated with the failure to comply with the statutory form power of attorney. If the power of attorney is one which becomes effective upon the incapacity of the principal, the incapacity of the principal is established by an affidavit, as required by law.

IN WITNESS WHEREOF, I have hereunto signed my name this _________ day of _________, _____.

@line ______________________________________________
@line {{name}}

@line Acknowledged before me at ______________________________________________ on ___________________.
@line ______________________________________________
@line Notary Public in and for the State of Alaska
@line My commission expires: ___________________

If a person other than the principal executes the signature for the principal, the person may not be a person who is appointed an agent in the power of attorney, and the following signature line and notary verification must also be completed:

IN WITNESS WHEREOF, I have hereunto signed my name this _________ day of _________, _____.

@line ___________________
@line Signature of person signing at the request of {{name}}
@line ___________________ Printed name of person signing
@line ___________________ Form of identification of person signing
@line Acknowledged before me at ______________________________________________ on ___________________.
@line ___________________
`;

window.ASSIGNMENT_SIGNING = String.raw`
// ==========================================================================
//  GRAPEVINE  |  SIGNING INSTRUCTIONS for the general assignment of personal property to trust.
//  Same rules as will-template.js (see the notes at the top of that file).
// ==========================================================================
#! HOW TO SIGN YOUR ASSIGNMENT

**Who must be there:** [[if signing_state=LOUISIANA]]a notary public and two adult witnesses, all at the same time, plus the trustee or trustees, who sign to accept the property for the trust. Louisiana requires this form, called an authentic act. Bring photo ID.[[elif wants_notary]]a notary public, because you chose to add a notary acknowledgment. Bring photo ID and sign in front of the notary.[[else]]no one. Just sign and date it.[[end]][[if trust_type=JOINT]] Each of you signs your own line.[[end]]
[[if spouse_consent]]

**Your spouse also signs:** {{spouse_name}} signs the Consent of Spouse in your document[[if signing_state=LOUISIANA]], at the same sitting, in front of the notary and witnesses[[end]]. It doesn't change who owns what; it only consents to the transfer.
[[end]]

**Afterward:** keep it with your trust documents.

**Titled property needs its own transfer.** Real estate, vehicles and financial accounts are moved into the trust by a new deed, title or account change, not by this Assignment.

If you have any legal questions about your particular circumstances we recommend that you seek a qualified attorney to assist you.
`;

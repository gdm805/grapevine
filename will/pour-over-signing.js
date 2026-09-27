window.WILL_POUR_OVER_SIGNING = String.raw`
// ==========================================================================
//  GRAPEVINE  |  SIGNING INSTRUCTIONS for the pour-over will.
//  Same rules as will-template.js (see the notes at the top of that file).
// ==========================================================================
#! HOW TO SIGN YOUR POUR-OVER WILL

**Who must be there:** [[if self_proving]]{{witness_count}} adult witnesses and a notary public, all at the same time.[[else]]{{witness_count}} adult witnesses, at the same time.[[end]] A witness should not receive anything under your will or trust, or be married to someone who does.

**When you sign:** sign and date your will in front of [[if self_proving]]everyone[[else]]the witnesses[[end]]. Each witness then signs and prints their name and address.[[if self_proving]] Last, you and the witnesses sign the notary section, and the notary completes it.[[end]]

**Afterward:** keep the signed original somewhere safe and tell {{executor}} where it is. Don't write on it after signing; to change it, make a new will.

**This will doesn't fund your trust.** Anything still in your own name when you die may go through probate before it reaches {{the_trust_name}}. Move your home and accounts into the trust while you're alive.

[[if state_note]]
{{state_note}}

[[end]]
If you have any legal questions about your particular circumstances we recommend that you seek a qualified attorney to assist you.
`;

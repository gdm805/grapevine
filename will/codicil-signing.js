window.CODICIL_SIGNING = String.raw`
// ==========================================================================
//  TOVAKIN  |  SIGNING INSTRUCTIONS for the Codicil.
//  A codicil is signed with the same formalities as a will, so these follow the will's own signing
//  instructions (will/signing-instructions.js). Same template rules as will-template.js.
// ==========================================================================
#! HOW TO SIGN YOUR CODICIL

**Who must be there:** [[if self_proving]]{{witness_count}} adult witnesses and a notary public, all at the same time.[[else]]{{witness_count}} adult witnesses, at the same time.[[end]] A witness should not receive anything under your will or this codicil, or be married to someone who does.

**When you sign:** sign and date your codicil in front of [[if self_proving]]everyone[[else]]the witnesses[[end]]. Each witness then signs and prints their name and address.[[if self_proving]] Last, you and the witnesses sign the notary section, and the notary completes it.[[end]]

**Afterward:** keep the signed codicil with your original will, and tell your personal representative where they are. Don't write on your will itself; a codicil is a separate document that changes it.

[[if state_note]]
{{state_note}}

[[end]]
If you have any legal questions about your particular circumstances we recommend that you seek a qualified attorney to assist you.
`;

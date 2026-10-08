window.FINALWISHES_SIGNING = String.raw`
// ==========================================================================
//  GRAPEVINE  |  SIGNING INSTRUCTIONS for Final Wishes.
//  Same rules as will-template.js (see the notes at the top of that file). Unlike most other
//  documents on this site, exactly what's required to sign this one genuinely depends on your
//  state -- some need only your signature, some need one or two witnesses, some need a notary,
//  some need both, and a few (Indiana, Iowa, Kentucky) build a second, separate declaration right
//  into this same document. Who must be there is worked out from the signing section of the person's own
//  document (fwSigningFacts in js/will.js), so these steps always match it.
// ==========================================================================
#! HOW TO SIGN YOUR FINAL WISHES

[[if fw_who]]
**Who must be there:** {{fw_who}}[[if fw_witness_note]] A witness should not be the person you named to handle your arrangements.[[end]]

**When you sign:** {{fw_when}}
[[if fw_accept]]

**The person you named:** {{fw_accept}}
[[end]]
[[else]]
**Who must be there:** follow the signing section at the end of your document, written for {{state}}. It shows whether you need witnesses, a notary, or neither. A witness should not be the person you named to handle your arrangements.
[[end]]
[[if signing_state=INDIANA]]

**Also sign the separate declaration** included in your document.
[[end]]
[[if signing_state=IOWA]]

**Also sign the separate declaration** included in your document.
[[end]]
[[if signing_state=KENTUCKY]]

**Also sign the separate declaration** included in your document.
[[end]]

**Afterward:** keep it where your family can find it, and give a copy to the person handling your arrangements.

[[if state_note]]
{{state_note}}

[[end]]
If you have any legal questions about your particular circumstances we recommend that you seek a qualified attorney to assist you.
`;

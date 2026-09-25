window.DPOA_SIGNING = String.raw`
// ==========================================================================
//  GRAPEVINE  |  SIGNING INSTRUCTIONS for the durable power of attorney.
//  Same rules as will-template.js (see the notes at the top of that file).
//  The lines about notaries and witnesses appear only when that state's document has them.
// ==========================================================================
#! HOW TO SIGN YOUR DURABLE POWER OF ATTORNEY

[[if statutory_form]]
Your power of attorney is not valid until it is signed correctly. Yours is {{governing_state}}'s own statutory form, which the law requires to be used word for word, so read the steps below and the form's notices before you sign.
[[else]]
Your power of attorney is not valid until it is signed correctly, and the rules are different in every state. Yours is the {{governing_state}} form. Read its signing section (headed EXECUTION, near the end) before you sign, and follow it exactly.
[[end]]

- Do not sign ahead of time. Sign when you are in front of the people your state requires.

[[if has_notary]]
- Your document has a notary section. A notary public completes it. Bring photo ID.

[[end]]
[[if has_witness]]
- Your document has witness lines. Ask your witnesses to read the statement above their lines before they sign.

[[end]]
[[if exec_choice]]
- Your state gives more than one way to sign, such as a notary or witnesses. Use the one that applies to you, as the form explains.

[[end]]
- Fill in the county and the date when you sign.
- Give the original to {{agent}}, or tell them where it is kept. Banks and other institutions may ask to see it, and some have their own forms.
- Do not add, cross out or change anything after you sign. To make a change, sign a new document.

[[if state_note]]
{{state_note}}

[[end]]
You can cancel your power of attorney at any time while you have capacity. Review it after a marriage, divorce, or a move to a new state, and if you no longer trust your agent.
`;

window.HCD_SIGNING = String.raw`
// ==========================================================================
//  GRAPEVINE  |  SIGNING INSTRUCTIONS for the health care directive.
//  Same rules as will-template.js (see the notes at the top of that file).
//  The lines below appear only when that state's document actually needs them.
// ==========================================================================
#! HOW TO SIGN YOUR HEALTH CARE DIRECTIVE

Your health care directive is not valid until it is signed correctly, and the rules are different in every state. In {{state}}, please check these before you sign:

[[if exec_choice]]
- Your document offers more than one way to sign. Use the one you chose on the review page.

[[end]]
[[if has_witness]]
- Your document has witness lines. Your witnesses should read the statement above their lines before they sign, and should meet whatever your state requires of a witness (often: an adult who is not your agent and does not stand to inherit from you).

[[end]]
[[if has_notary]]
- Your document has a notary section. Bring photo ID for the notary.

[[end]]
- Date the document when you sign it.
- Give a copy to your health care agent, and keep the original somewhere your family or caregivers can find it. Hospitals and doctors' offices may also want a copy on file.
- Do not add, cross out, or change anything after you sign. To make a change, sign a new document.

[[if state_note]]
{{state_note}}

[[end]]
You can cancel your health care directive at any time while you have capacity. Review it after a marriage, divorce, new diagnosis, or a move to a new state.
`;

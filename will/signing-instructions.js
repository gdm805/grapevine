window.WILL_SIGNING = String.raw`
// ==========================================================================
//  GRAPEVINE  |  SIGNING INSTRUCTIONS shown to the person at the end.
//  Same rules as will-template.js (see the notes at the top of that file).
// ==========================================================================
#! HOW TO SIGN YOUR WILL

Your will is not valid until it is signed correctly. In {{state}}, that generally means:

- Print your will on plain white paper. Do not staple anything to it or write on it.
[[if self_proving]]
- Arrange to sign with {{witness_count}} adult witnesses AND a notary public all present at the same time. Your will has a notary section at the end, and everyone completes it together at the same sitting, so don't sign anything before you are in front of the notary. Many banks, law offices and shipping stores have a notary who can also help find witnesses.
- A witness should not be anyone who receives property under your will, or the spouse of someone who does.
- In front of the witnesses and the notary, sign and date your will. Then each witness signs, in front of you and each other, and prints their name and address.
- Finally, you and the witnesses sign the notary section, and the notary completes it and adds their seal.
[[else]]
- Gather {{witness_count}} adults to act as witnesses. A witness should not be anyone who receives property under your will, or the spouse of someone who does.
- Sign and date your will in front of all {{witness_count}} witnesses.
- Have each witness sign in front of you and each other, and print their name and address.
[[end]]
- Keep the signed original in a safe place, and tell your executor, {{executor}}, where it is.
- Do not add, cross out or change anything after you sign. If your wishes change, make a new will.

[[if state_note]]
{{state_note}}

[[end]]
Review your will after a marriage, divorce, birth or adoption, a move to a new state, or a large change in what you own.
`;

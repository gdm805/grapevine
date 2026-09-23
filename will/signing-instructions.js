window.WILL_SIGNING = String.raw`
// ==========================================================================
//  GRAPEVINE  |  SIGNING INSTRUCTIONS shown to the person at the end.
//  Same rules as will-template.js (see the notes at the top of that file).
// ==========================================================================
#! HOW TO SIGN YOUR WILL

Your will is not valid until it is signed correctly. In {{state}}, that generally means:

- Print your will on plain white paper. Do not staple anything to it or write on it.
- Gather {{witness_count}} adults to act as witnesses. A witness should not be anyone who receives property under your will, or the spouse of someone who does.
- Sign and date your will in front of all {{witness_count}} witnesses.
- Have each witness sign in front of you and each other, and print their name and address.
[[if self_proving]]
- Your will has an affidavit or notary section at the end. Complete it in front of a notary public, together with your witnesses.
[[end]]
- Keep the signed original in a safe place, and tell your executor, {{executor}}, where it is.
- Do not add, cross out or change anything after you sign. If your wishes change, make a new will.

[[if state_note]]
{{state_note}}

[[end]]
Review your will after a marriage, divorce, birth or adoption, a move to a new state, or a large change in what you own.
`;

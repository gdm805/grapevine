window.TRUST_SIGNING = String.raw`
// ==========================================================================
//  GRAPEVINE  |  SIGNING INSTRUCTIONS for the revocable living trust.
//  Same rules as will-template.js (see the notes at the top of that file).
// ==========================================================================
#! HOW TO SIGN YOUR TRUST

Your trust takes effect when it is signed. In {{state}}, sign it in front of a notary public[[if has_witness]] and two witnesses[[end]]:

- Print your trust on plain white paper. Do not staple anything to it or write on it.
- Take it, unsigned, to a notary public, and bring a photo ID. Many banks, credit unions, law offices and shipping stores have a notary.
[[if has_witness]]
- Bring two adult witnesses. A witness should not be a beneficiary of your trust, or the spouse of one.
[[end]]
- Sign and date the trust in front of the notary[[if has_witness]] and both witnesses[[end]], on the signing date shown in your trust.[[if is_joint]] Both Trustmakers sign at the same appointment.[[end]]
[[if has_witness]]
- Each witness signs in front of you and each other, and prints their name and address.
[[end]]
- The notary completes the acknowledgment and adds their seal.
- Keep the signed original in a safe place, and tell your successor trustee where it is.
- Do not add, cross out or change anything after you sign. To make a change later, sign a written amendment or a restatement.
`;

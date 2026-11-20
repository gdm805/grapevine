window.TRUSTAMEND_SIGNING = String.raw`
// ==========================================================================
//  TOVAKIN  |  SIGNING INSTRUCTIONS for the Amendment to a Revocable Trust.
//  Same rules as will-template.js (see the notes at the top of that file). It signs the way the
//  Revocable Living Trust signs (will/trust-signing.js): a notary in every state, plus two witnesses
//  in Delaware (TRUST_WITNESS_STATES in js/will.js).
// ==========================================================================
#! HOW TO SIGN YOUR TRUST AMENDMENT

**Who must be there:** a notary public[[if has_witness]] and two adult witnesses (not people who receive anything under your trust, or their spouses)[[end]]. Bring photo ID.[[if is_joint]] Both of you sign at the same appointment.[[end]]

**When you sign:** sign and date the amendment in front of the notary[[if has_witness]] and witnesses[[end]]. The notary completes the acknowledgment.

**Check your trust first:** some trusts say exactly how they may be amended, for example by a signed writing delivered to the trustee, or with a notary. Read the amendment section of your trust and follow anything it requires in addition to these steps.

[[if not tm_is_trustee]]**Your trustee:** give a signed copy to {{current_trustee}}, who signs the acknowledgment at the end to show the trustee received it.

[[end]]**Afterward:** keep the signed amendment with your original trust and any earlier amendments, and tell your successor trustee where they are.

If you have any legal questions about your particular circumstances we recommend that you seek a qualified attorney to assist you.
`;

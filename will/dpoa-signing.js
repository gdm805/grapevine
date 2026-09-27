window.DPOA_SIGNING = String.raw`
// ==========================================================================
//  GRAPEVINE  |  SIGNING INSTRUCTIONS for the durable power of attorney.
//  Same rules as will-template.js (see the notes at the top of that file).
//  The lines about notaries and witnesses appear only when that state's document has them.
// ==========================================================================
#! HOW TO SIGN YOUR POWER OF ATTORNEY

**Who must be there:** [[if exec_choice]]your {{governing_state}} form allows more than one way to sign; follow the signing section at the end of the form.[[else]][[if has_notary]]a notary public[[if has_witness]] and the witnesses shown on your form[[end]]. Bring photo ID.[[else]][[if has_witness]]the witnesses shown on your form.[[else]]follow the signing section at the end of your form.[[end]][[end]][[end]] Don't sign ahead of time.
[[if statutory_form]]

**Your state's own form.** Read the form's notices before you sign.
[[end]]

**Afterward:** give the original to {{agent}}, or tell them where it's kept. To change it, sign a new document.

[[if state_note]]
{{state_note}}

[[end]]
If you have any legal questions about your particular circumstances we recommend that you seek a qualified attorney to assist you.
`;

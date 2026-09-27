window.HCD_SIGNING = String.raw`
// ==========================================================================
//  GRAPEVINE  |  SIGNING INSTRUCTIONS for the health care directive.
//  Same rules as will-template.js (see the notes at the top of that file).
//  The lines below appear only when that state's document actually needs them.
// ==========================================================================
#! HOW TO SIGN YOUR HEALTH CARE DIRECTIVE

**Who must be there:** [[if exec_route_label]]{{exec_route_label}}, the way you chose to sign.[[else]][[if has_notary]]a notary public[[if has_witness]] and the witnesses shown on your form[[end]].[[else]][[if has_witness]]the witnesses shown on your form.[[else]]no one; just sign and date it.[[end]][[end]][[end]][[if has_witness]] A witness should be an adult who is not your agent and won't inherit from you.[[end]][[if has_notary]] Bring photo ID.[[end]]

**Afterward:** give a copy to your health care agent and your doctors, and keep the original where your family can find it. To change it, sign a new document.

[[if state_note]]
{{state_note}}

[[end]]
If you have any legal questions about your particular circumstances we recommend that you seek a qualified attorney to assist you.
`;

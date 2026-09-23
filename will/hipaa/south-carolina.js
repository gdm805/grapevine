window.HIPAA_STATES = window.HIPAA_STATES || {};
window.HIPAA_STATES["South Carolina"] = String.raw`
// ==========================================================================
//  GRAPEVINE  |  HIPAA AUTHORIZATION  |  SOUTH CAROLINA
//  Converted word for word from your controlled state document. Same rules as
//  will/hipaa-template.js. To change this state, edit this file only.
// ==========================================================================
@set format = B
@set recipient_law_qualifier = no

@center **SOUTH CAROLINA HIPAA AUTHORIZATION**

This authorization is intended to satisfy the authorization requirements of the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and applicable state law. State-specific provisions below control if they impose a more specific requirement.

#! Authorization To Use And Disclose Protected Health Information

I authorize any physician, hospital, clinic, pharmacy, laboratory, health plan, insurer, nursing facility, assisted living facility, mental-health professional, counselor, therapist, social worker, health care provider, health care facility, government health program, electronic health-record system, health-information exchange, or other person or entity that has protected health information about me to use and disclose that information as provided in this authorization.

#! Person Whose Information May Be Disclosed

@line Name: {{name}}
@line Date of Birth: {{dob}}
@line Address: {{address}}

#! Persons Authorized To Receive Information

I authorize disclosure to the following person or persons:

@line Primary recipient/health care agent: {{agent_name}}
@line Address: {{agent_address}}
@line Telephone/Email: {{agent_contact}}

[[if has_alt1]]

@line Alternate recipient/agent: {{alt1_name}}

[[end]]
[[if has_alt2]]

@line Second alternate recipient/agent: {{alt2_name}}

[[end]]
I also authorize disclosure to any person or entity reasonably selected by an authorized recipient when necessary to assist that recipient in carrying out health care, benefits, insurance, claims, care-management, placement, or other responsibilities for me.

#! Information Covered

Unless I limit this authorization below, it covers all protected health information and medical records relating to my past, present, or future physical or mental health or condition; health care provided to me; prescriptions and pharmacy records; diagnostic and laboratory information; billing and payment information; insurance and benefit information; imaging; care plans; admission and discharge information; and other information maintained by a covered entity or business associate. Specially protected categories are included only to the extent expressly authorized below and permitted by applicable law.

#! Purpose

The purpose of this authorization is to permit the authorized recipient to obtain information needed to assist me, communicate with health care providers and health plans, make or support health care decisions when authorized to do so, arrange care or placement, address insurance and benefit matters, and carry out responsibilities under my estate-planning and health-care documents.

#! Authority Of Recipient

An authorized recipient may request, inspect, obtain, copy, transmit, and receive protected health information in paper, electronic, oral, or other available form. The recipient may sign provider-specific releases or acknowledgments that are reasonably required to obtain information, provided they are consistent with this authorization and applicable law.

#! Effective Date And Duration

This authorization is effective immediately upon signing unless a state-specific provision below states otherwise. It remains effective until the earliest of: (a) my written revocation to the extent effective under applicable law; (b) any expiration date or event stated below; or (c) any state-law termination rule that cannot lawfully be waived.

@line Optional expiration date/event: {{expiration_text}}

#! Right To Revoke

I may revoke this authorization by written notice to a person or entity relying on it. A revocation does not affect a use or disclosure already made in reliance on this authorization before the revocation was received, or any other reliance protected by law.

#! No Improper Conditioning

I understand that signing this authorization is voluntary and that, except as permitted by law, a provider or health plan generally may not condition treatment, payment, enrollment, or eligibility for benefits on my signing this authorization.

#! Redisclosure

I understand that information disclosed under this authorization may, in some circumstances, be redisclosed by the recipient and may no longer be protected by HIPAA. Information protected by a state confidentiality law or another federal law may remain subject to restrictions on redisclosure.

#! Limitations

The following limitations apply, if any: {{limitations}}

If no limitation is stated, the authorization is intended to be as broad as legally permitted, subject to the specific-consent rules stated in this document.

#! South Carolina State-Specific Provisions

The following provisions are incorporated into this authorization and apply in addition to the general authorization above.

#! South Carolina Statutory HIPAA Authority

When considering or making health care decisions for me, I authorize all individually identifiable health information and medical records to be released without restriction to my health care agent and any alternate health care agent I have named. This includes diagnostic, treatment, health care, insurance, and related financial records concerning any past, present, or future physical or mental condition, including HIV/AIDS, sexually transmitted diseases, mental illness, and drug or alcohol abuse, together with any written health opinion requested by my agent.

#! Effect Of Authorization

This authorization applies to health information and medical records governed by HIPAA. It is effective whether or not I am mentally competent. It has no expiration date and terminates only if I revoke this authority in writing and deliver the revocation to my health care provider, subject to actions already taken in reliance on the authorization.

#! Signature

I acknowledge that I have read and understand this authorization and intend it to be legally effective to the fullest extent permitted by applicable law.

@line Signature of Principal: ________________________________________________

@line Printed Name: {{name}}

@line Date: ______

[[if signed_by_rep]]

@line If signed by a legally authorized representative, name and authority: {{rep_name}}, {{rep_authority}}

[[else]]

@line If signed by a legally authorized representative, name and authority: ________________________________

[[end]]

#! Authority

S.C. Code Ann. § 62-5-504; 45 C.F.R. Parts 160 and 164.

`;

window.HIPAA_STATES = window.HIPAA_STATES || {};
window.HIPAA_STATES["Mississippi"] = String.raw`
// ==========================================================================
//  GRAPEVINE  |  HIPAA AUTHORIZATION  |  MISSISSIPPI
//  Converted word for word from your controlled state document. Same rules as
//  will/hipaa-template.js. To change this state, edit this file only.
// ==========================================================================
@set format = A
@set ask_hiv_sti = no
@set ask_mental_health = yes
@set ask_genetic = no

@center **HIPAA AUTHORIZATION**

#! I. AUTHORIZATION

I, {{name}}, hereby voluntarily authorize the use and disclosure of information from my health record as provided in this Authorization. This Authorization is intended to satisfy the requirements of the Health Insurance Portability and Accountability Act of 1996 (HIPAA), including 45 C.F.R. § 164.508, and other applicable federal health-information law.

This Authorization is effective immediately when signed. An authorized recipient may obtain information before any determination of my incapacity, including information reasonably necessary to determine whether a health-care or fiduciary authority has become effective. This Authorization remains independently effective even if another power of attorney or health-care directive has not yet become effective, unless I revoke this Authorization or applicable law requires otherwise.

#! II. THE INFORMATION IS TO BE DISCLOSED BY:

I authorize any physician, hospital, clinic, pharmacy, laboratory, health plan, insurer, mental-health professional, health-care facility, hospice, rehabilitation provider, nursing facility, home-health provider, health-information exchange, electronic health-record vendor, business associate, and any other person or entity that maintains my health information and is legally permitted to disclose it to make the disclosures authorized by this document.

#! III. AND IS TO BE PROVIDED TO:

The persons or classes of persons authorized to receive my information are:

[[each recipients]]

@item {{recip_name}}[[if recip_has_contact]] — {{recip_contact}}[[end]]

[[end]]

A Successor Health Care Agent, fiduciary, attorney, caregiver, or other person is authorized to receive information under this Authorization only if that person is specifically identified above or falls within a class of persons specifically identified above.

#! IV. THE PURPOSE OR NEED FOR THIS DISCLOSURE IS:

The purpose of the authorized use and disclosure is at my request and for health-care decision-making, incapacity planning, care coordination, estate and personal planning, administration of my affairs, and other lawful purposes requested by me or reasonably related to the authority of an authorized recipient.

#! V. THE INFORMATION TO BE DISCLOSED FROM MY HEALTH RECORD:

Except for information that requires a separate authorization or consent under applicable law, I authorize disclosure of my complete health and medical record, including information relating to diagnosis, treatment, prognosis, medications, laboratory and imaging results, billing and insurance information, care plans, consultations, hospital and facility records, and other protected health information maintained about me.

(a) This Authorization includes information created before or after the date I sign it, to the extent permitted by law.

(b) This Authorization includes records in paper, electronic, audio, video, image, and other forms.

(c) This Authorization does not by itself authorize disclosure of information for which federal or applicable state law requires a separate, more specific authorization, consent, election, initials, or signature.

[[if authorize_psychotherapy]]

Psychotherapy Notes — Separate Authorization. I separately authorize the use and disclosure of psychotherapy notes, as that term is defined by HIPAA, to the following specifically identified recipient or recipients and for the following purpose:

Recipient(s): {{psych_recipients}}

Purpose: {{psych_purpose}}

I understand that this authorization for psychotherapy notes is separate from the general authorization above and applies only to the psychotherapy notes specifically described here.

[[end]]

[[if authorize_part2]]

Substance Use Disorder Records — 42 C.F.R. Part 2. I authorize the use and disclosure of records protected by 42 C.F.R. Part 2 to the extent described below and permitted by federal law. This consent is intended to be interpreted consistently with the Part 2 requirements in effect on the date of disclosure.

Part 2 recipient(s) or class of recipients: {{part2_recipients}}

Part 2 purpose: {{part2_purpose}}

Part 2 expiration date or event: {{part2_expiration}}

I understand that Part 2 imposes special restrictions on the use and disclosure of substance-use-disorder records, including restrictions on use of those records in certain civil, criminal, administrative, and legislative proceedings against me without specific consent or a qualifying court order.

[[if authorize_part2_sud_notes]]

Separate consent for SUD counseling notes: I separately consent to the use and disclosure of SUD counseling notes to {{part2_sud_recipients}} for {{part2_sud_purpose}}.

[[end]]

[[end]]

#! State-Specific Authorization — Mississippi

This Authorization is intended to operate together with Mississippi confidentiality law governing medical and mental-health records.

[[if authorize_mental_health]]

I give written authorization for disclosure of hospital and treatment records and information protected by Miss. Code Ann. § 41-21-97 to the recipient(s) identified in this Authorization.

[[end]]

[[if authorize_part2]]

To the extent Mississippi substance-use treatment records are protected by Miss. Code Ann. § 41-30-33 in addition to federal 42 C.F.R. Part 2, I consent to disclosure as expressly described in the federal Part 2 portion of this Authorization.

[[end]]

#! VI. AUTHORIZATION

[[if expiration_type=DATE]]

This Authorization expires on {{expiration_date}}.

[[elif expiration_type=EVENT]]

This Authorization expires upon the following event: {{expiration_event}}.

[[elif expiration_type=DEATH_PLUS_ADMINISTRATION]]

This Authorization remains effective during my lifetime and after my death for so long as reasonably necessary to administer my estate, trust, health-care matters, insurance matters, claims, or other affairs for which disclosure is lawfully authorized, subject to any shorter period required by applicable law.

[[end]]

I understand that I may revoke this Authorization in writing at any time, except to the extent that a person or entity has already acted in reliance on it or as otherwise provided by law. A revocation should be delivered to the person or entity from whom I no longer authorize disclosure and, when appropriate, to the authorized recipient.

I understand that, except as permitted by law, a covered entity may not condition treatment, payment, enrollment in a health plan, or eligibility for benefits on my signing this Authorization.

I understand that information disclosed pursuant to this Authorization may be redisclosed by a recipient and may no longer be protected by the HIPAA Privacy Rule. Information protected by 42 C.F.R. Part 2 or other applicable law remains subject to any redisclosure restrictions that continue to apply under that law.

A copy, electronic copy, facsimile, or other accurate reproduction of this signed Authorization may be relied upon to the same extent as the original to the extent permitted by law. I authorize disclosure through secure electronic transmission, health-information exchange, portal access, mail, facsimile, or another lawful method selected by the disclosing person or entity.

This Authorization supplements, and does not automatically revoke, any separate health-information authorization, health-care directive, power of attorney, or other legally effective authorization that I have executed unless I expressly revoke that document or the documents cannot reasonably operate together.

#! SIGNATURE

I have read or had explained to me this Authorization. I understand its purpose and authorize the uses and disclosures described above. I understand that I am entitled to a copy of this signed Authorization.

@line Principal: {{name}}

@line Signature: ________________________________________________

@line Date: ______

[[if signed_by_rep]]

@line Personal Representative: {{rep_name}}

@line Authority to act for Principal: {{rep_authority}}

@line Signature: ________________________________________________

@line Date: ______

[[end]]

`;

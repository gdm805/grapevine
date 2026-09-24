window.HCD_STATES = window.HCD_STATES || {};
window.HCD_STATES["Arizona"] = String.raw`
// ==========================================================================
//  GRAPEVINE  |  HEALTH CARE DIRECTIVE  |  ARIZONA
//  Converted word for word from your file Grapevine_HCD_Arizona.docx (the controlled
//  state document). Same rules as will/dpoa-template.js. To change this state, edit this file only.
// ==========================================================================
@set exec_choice = yes
@set exec_route_default = 
@set exec_routes = NOTARY,WITNESS
@set ask_ca_skilled_nursing = no
@set ask_ct_dmhas = no
@set ask_ct_dds = no
@set ask_ct_pregnancy = no
@set ask_az_unable_to_sign = yes
@set ask_az_psych_admission = yes
@set ask_az_funeral_authority = yes
@set ask_ne_second_physician = no
@set ask_oh_unconscious_anh = no
@set ask_sc_optional_notary = no
@set ask_vt_facility_explanation = no
@set has_witness = yes
@set has_notary = yes

@center **HEALTH CARE POWER OF ATTORNEY WITH ATTACHED LIVING WILL**

# Declaration and Purpose

## Health Care Directive

This Arizona Health Care Power of Attorney states the Principal's health care instructions and appoints a Health Care Agent to make health care decisions when the Principal is unable to make or communicate those decisions. Articles Six through Eight constitute the Principal's attached Living Will and end-of-life instructions for purposes of Arizona law.

## Principal

The Principal is:

{{name}}

Address: {{address}}

## Intent

The Principal intends that this Directive:

@item (a) communicate the Principal's health care instructions, preferences, and values;

@item (b) authorize the Health Care Agent to make health care decisions for the Principal to the fullest extent authorized by this Directive and applicable law;

@item (c) provide health care providers and others with reliable evidence of the Principal's wishes;

@item (d) reduce uncertainty concerning the Principal's health care if the Principal is unable to make or communicate health care decisions; and

@item (e) remain effective notwithstanding the Principal's subsequent Incapacity, except as otherwise provided by the Principal or applicable law.

This Directive is intended to constitute a health care directive under Arizona Revised Statutes Title 36, Chapter 32, including a Health Care Power of Attorney under A.R.S. § 36-3221 and an attached Living Will under A.R.S. § 36-3261.

## Principal Retains Authority

While the Principal has capacity to make a health care decision, the Principal retains the right to make that decision.

No authority granted to a Health Care Agent under this Directive limits the Principal's right to make or communicate health care decisions while the Principal has capacity to do so.

# Appointment of Health Care Agent

## Appointment of Health Care Agent

The Principal appoints the following person to serve as Health Care Agent:

{{agent}}

[[if agent_contact]]

{{agent_contact}}

[[end]]

[[if has_co_agents]]

In addition to the Health Care Agent named above, I appoint the following persons to serve at the same time. Each person named in this paragraph is my Health Care Agent, and all of them together are my "co-agents":

[[each co_agents]]

{{co_agent}}

[[if co_agent_contact]]

{{co_agent_contact}}

[[end]]

[[end]]

[[if co_separate]]

Each co-agent may make health care decisions alone and independently, without the consent of any other co-agent, and a health care provider or other person may rely on the decision of any one co-agent.

[[else]]

My co-agents shall make health care decisions together. A decision requires the agreement of all co-agents then serving. If a decision cannot safely wait until all of them can be reached, any one of them may make that decision.

[[end]]

If a co-agent dies, resigns, or is unable or unwilling to serve, the remaining co-agents shall continue to serve. A successor named in this document serves, in the order listed, only if no co-agent is able to serve.

[[end]]

The Health Care Agent shall have the authority provided by this Directive when that authority becomes effective under Article Three.

[[if has_successors]]

## Successor Health Care Agents

If the Health Care Agent named in Section 2.01 dies, resigns, declines to serve, is unable or unwilling to serve, becomes legally disqualified, or otherwise ceases to serve, the following persons shall serve as Successor Health Care Agents in the order listed:

[[each successors]]

{{successor}}

[[if successor_contact]]

{{successor_contact}}

[[end]]

[[end]]

A Successor Health Care Agent shall have the same authority as the originally appointed Health Care Agent unless this Directive expressly provides otherwise.

[[end]]

[[if has_co_agents]]

## Simultaneous Authority

Except for the co-agents named above, only one person shall serve as my Health Care Agent at a time. The appointment of successors does not grant concurrent authority to more than one successor at a time, and a successor serves only if no co-agent is able to serve.

[[else]]

## No Simultaneous Authority

Only one Health Care Agent shall serve at a time.

The appointment of Successor Health Care Agents does not grant concurrent authority to more than one person.

[[end]]

## Eligibility to Serve

A person appointed as Health Care Agent may serve only if legally eligible under Arizona law. A person directly involved in providing health care to the Principal should not be selected to act in a manner prohibited by Arizona law, and a person whose professional fiduciary license has been suspended or revoked may not serve except as Arizona law permits.

If an appointed person is legally disqualified from serving, that person shall be treated as unable to serve, and the next eligible Successor Health Care Agent shall serve.

## Acceptance

No separate written acceptance by the Health Care Agent is required by this Directive. The appointed person may act when the authority granted by this Directive becomes exercisable under Arizona law.

# Effectiveness of Agent Authority

## Principal's Authority While Capable

The Principal shall make the Principal's own health care decisions while the Principal has capacity to make those decisions.

The Health Care Agent may assist the Principal, communicate the Principal's decisions, obtain information as authorized by this Directive, and otherwise act as permitted by the Principal and applicable law, but shall not override a health care decision made by the Principal while the Principal has capacity to make that decision.

## Effectiveness Upon Incapacity

The Health Care Agent's authority to make and communicate health care decisions becomes exercisable while the Principal is unable to make or communicate the health care decision at issue. The Principal retains decision-making authority whenever the Principal is able to make or communicate the applicable decision.

Health care providers and the Health Care Agent may rely on the Principal’s ability or inability to make or communicate the particular decision as determined in the course of the Principal’s care under Arizona law.

## Decision-Specific Capacity

The Principal's lack of capacity to make one health care decision does not establish lack of capacity to make every health care decision.

To the extent reasonably possible and consistent with applicable law, the Principal shall continue to participate in health care decisions and shall be informed of decisions made on the Principal's behalf.

## Restoration of Capacity

If the Principal regains capacity to make a health care decision, the Health Care Agent's authority to make that decision shall cease while the Principal retains that capacity.

A determination that the Principal has regained capacity shall be made as required by applicable law.

If the Principal later again lacks capacity, the Health Care Agent's authority may again become effective without the need to execute a new Health Care Directive.

## Health Information Authority

Before the Health Care Agent's decision-making authority becomes effective, the Agent may obtain health and medical information to the extent authorized by Article Ten and applicable law.

This limited early authority is intended to permit access to information reasonably necessary to determine whether the conditions for activation of the Agent's decision-making authority have occurred.

# Authority of Health Care Agent

## General Authority

Subject to the Principal's instructions and limitations in this Directive and applicable law, the Health Care Agent may make any health care decision that the Principal could make if the Principal had capacity to make that decision.

## Specific Powers

Without limiting the general authority granted by Section 4.01, the Health Care Agent may, to the extent permitted by applicable law:

@item (a) consent to, authorize, request, refuse, withhold, or withdraw health care;

@item (b) select, employ, discharge, and change physicians, nurses, therapists, hospitals, hospices, pharmacies, facilities, and other health care providers;

@item (c) authorize examinations, diagnostic procedures, medications, surgery, anesthesia, therapy, rehabilitation, nursing care, home health care, hospice care, palliative care, and other treatment;

@item (d) admit the Principal to, transfer the Principal between, and discharge the Principal from hospitals, nursing facilities, assisted living facilities, rehabilitation facilities, hospice programs, and other health care facilities;

@item (e) arrange for health care to be provided in the Principal's residence or another appropriate setting;

@item (f) consent to or refuse life-sustaining treatment as provided in this Directive;

@item (g) consent to or refuse artificial nutrition and hydration as provided in this Directive;

@item (h) authorize treatment intended to relieve pain, discomfort, anxiety, or suffering;

@item (i) obtain, review, receive, and disclose health information as provided in Article Ten;

@item (j) execute consents, releases, waivers, authorizations, facility documents, and other instruments reasonably necessary to carry out a health care decision;

@item (k) arrange consultations and obtain second opinions;

@item (l) transfer the Principal's care to another provider or facility when reasonably necessary to carry out the Principal's instructions or the Health Care Agent's authorized decision;

@item (m) authorize visitation and access to the Principal to the extent permitted by applicable law;

@item (n) communicate with health care providers and other persons concerning the Principal's care; and

@item (o) take any other lawful action reasonably necessary to implement a health care decision authorized by this Directive;

@item (p) request, discuss, consent to, sign when legally authorized, modify, or revoke medical orders concerning resuscitation or scope of treatment, including POLST, MOLST, MOST, POST, DNR, or comparable medical orders, to the extent permitted by applicable law. This Directive is not itself a medical order, and any such order must be completed, signed, certified, or entered by the health care professional or other person authorized by applicable law; and

@item (q) make personal-care and living-arrangement decisions reasonably related to the Principal's health, safety, treatment, or care, including decisions concerning diet, hygiene, supervision, and level or setting of care, to the extent permitted by applicable law.

## Contact With Significant Relationships

Unless inconsistent with the Principal’s express directions, the Health Care Agent shall encourage and allow reasonable contact between the Principal and persons who have a significant relationship with the Principal. The Health Care Agent may not limit, restrict, or prohibit reasonable contact without prior court approval unless this Directive expressly grants that authority, as provided by A.R.S. § 36-3211.

## Limitations on Authority

The Health Care Agent shall not:

@item (a) act contrary to an instruction of the Principal that is binding under this Directive and applicable law;

@item (b) exercise authority expressly withheld from the Health Care Agent by this Directive;

@item (c) make a decision that applicable law prohibits an agent from making; or

@item (d) exercise a power requiring specific authorization under applicable law unless that authorization is contained in this Directive.

## No Financial Authority

This Directive does not grant the Health Care Agent general authority over the Principal's property or financial affairs.

The Health Care Agent may execute health-care-related consents, admissions documents, releases, and similar instruments reasonably necessary to carry out an authorized health care decision to the extent permitted by applicable law. This limited authority does not independently grant the Health Care Agent general control over the Principal's accounts or property.

# Standard for Health Care Decisions

## Controlling Instructions

The Health Care Agent shall make health care decisions in accordance with the Principal's instructions contained in this Directive and any other health care instructions of the Principal that are known to the Agent and legally effective.

If a provision of this Directive conflicts with a later legally effective health care instruction of the Principal, the later instruction shall control to the extent of the conflict.

## Known Wishes and Values

If the Principal has not given a controlling instruction concerning a particular health care decision, the Health Care Agent shall make the decision in accordance with the Principal's wishes to the extent those wishes are reasonably known.

In determining the Principal's wishes, the Health Care Agent may consider the Principal's previously expressed preferences, personal values, religious or spiritual beliefs, treatment goals, attitudes toward independence and quality of life, and other information reasonably known to the Agent.

## Best Interests

If the Principal's wishes concerning a health care decision cannot reasonably be determined, the Health Care Agent shall act in the Principal's best interests.

In determining the Principal's best interests, the Health Care Agent may consider:

@item (a) the benefits and burdens of the proposed treatment;

@item (b) the likelihood and extent of recovery;

@item (c) the relief of pain, discomfort, or suffering;

@item (d) the preservation or restoration of function;

@item (e) the Principal's dignity, privacy, independence, and personal values;

@item (f) the risks associated with treatment or withholding treatment; and

@item (g) other circumstances reasonably relevant to the Principal's welfare.

## Participation of Principal

The Health Care Agent and health care providers shall, to the extent reasonably practicable, involve the Principal in health care decisions even when the Principal lacks full capacity to make the decision independently.

The Principal's presently expressed wishes and objections shall be respected to the extent required by applicable law.

## Relationship Between Instructions and Agent Authority

Specific health care instructions stated by the Principal are binding on the Health Care Agent and health care providers to the fullest extent permitted by applicable law.

Statements of the Principal's values, preferences, goals, and beliefs shall guide the Health Care Agent when applying those instructions and when making decisions not specifically addressed by the Principal.

The Health Care Agent may exercise reasonable judgment in interpreting an instruction and applying it to circumstances not expressly anticipated by the Principal but may not knowingly disregard a controlling instruction.

[[if has_custom_instructions]]

## Additional Instructions, Limitations, and Values

[[if additional_instructions=YES]]

Additional health care instructions:

{{additional_instructions_text}}

[[end]]

[[if agent_limitations=YES]]

Additional limitations on the authority of the Health Care Agent:

{{agent_limitations_text}}

[[end]]

[[if values_instructions=YES]]

Religious, spiritual, ethical, cultural, or personal values the Health Care Agent should consider:

{{values_instructions_text}}

[[end]]

If an additional instruction or limitation conflicts with another provision of this Directive, the more specific instruction shall control to the extent of the conflict unless applicable law requires otherwise.

[[end]]

# Attached Living Will — Life-Sustaining Treatment

## Purpose

This Article, together with Articles Seven and Eight, is the Principal's attached Living Will. It states the Principal's wishes concerning treatment when the Principal is unable to make or communicate the applicable health care decision, including end-of-life care, comfort care, and artificially administered food and fluids.

The instructions in this Article are subject to any conditions, definitions, certifications, or limitations required by applicable law.

## Treatment Choice

[[if life_support=DO_NOT_PROLONG]]

If the Principal has an incurable or irreversible condition, is permanently unconscious, has an end-stage condition, or is in another condition recognized under applicable law in which life-sustaining treatment would principally prolong the process of dying or provide no reasonable prospect of recovery acceptable to the Principal, the Principal directs that life-sustaining treatment be withheld or withdrawn.

The Principal wishes to be allowed to die naturally while receiving comfort care and treatment necessary to relieve pain, discomfort, anxiety, or suffering.

[[elif life_support=PROLONG]]

The Principal directs that medically appropriate life-sustaining treatment be provided and continued to prolong the Principal's life to the greatest extent reasonably possible within generally accepted health care standards, subject to any limitations expressly stated elsewhere in this Directive.

[[elif life_support=AGENT_DECIDES]]

The Principal authorizes the Health Care Agent to decide whether life-sustaining treatment should be provided, withheld, or withdrawn.

The Health Care Agent shall make that decision under Article Five after considering the Principal's medical condition, prognosis, likelihood of meaningful recovery, burdens and benefits of treatment, relief of suffering, and the Principal's known wishes and values.

[[end]]

## Trial of Treatment

When consistent with the Principal's controlling treatment instructions, a reasonable time-limited trial of a life-sustaining treatment may be undertaken if the likely benefit is uncertain and the Health Care Agent and health care providers reasonably believe the treatment may permit recovery or materially improve the Principal's condition.

If the treatment does not produce the reasonably anticipated benefit within a reasonable trial period, it may be withdrawn in accordance with this Directive and applicable law.

## Treatment Necessary for Comfort

Nothing in this Article requires the withholding or withdrawal of treatment reasonably necessary to maintain the Principal's comfort, relieve pain or suffering, preserve dignity, or provide ordinary care.

# Artificial Nutrition and Hydration

## Separate Instruction

The Principal intends the provision, withholding, or withdrawal of artificially administered nutrition and hydration to be determined separately from other forms of life-sustaining treatment to the extent permitted or required by applicable law.

## Artificial Nutrition

[[if nutrition=WITHHOLD_WITHDRAW]]

Under the circumstances in which the Principal has directed that life-sustaining treatment be withheld or withdrawn, the Principal also directs that artificially administered nutrition may be withheld or withdrawn.

[[elif nutrition=CONTINUE]]

The Principal directs that artificially administered nutrition be provided or continued notwithstanding the Principal's instructions concerning other life-sustaining treatment, except to the extent the treatment is medically inappropriate, ineffective, or prohibited by applicable law.

[[elif nutrition=AGENT_DECIDES]]

The Principal authorizes the Health Care Agent to decide whether artificially administered nutrition should be provided, continued, withheld, or withdrawn under the decision standards stated in Article Five.

[[end]]

## Artificial Hydration

[[if hydration=WITHHOLD_WITHDRAW]]

Under the circumstances in which the Principal has directed that life-sustaining treatment be withheld or withdrawn, the Principal also directs that artificially administered hydration may be withheld or withdrawn.

[[elif hydration=CONTINUE]]

The Principal directs that artificially administered hydration be provided or continued notwithstanding the Principal's instructions concerning other life-sustaining treatment, except to the extent the treatment is medically inappropriate, ineffective, or prohibited by applicable law.

[[elif hydration=AGENT_DECIDES]]

The Principal authorizes the Health Care Agent to decide whether artificially administered hydration should be provided, continued, withheld, or withdrawn under the decision standards stated in Article Five.

[[end]]

## Oral Food and Fluids

Nothing in this Article directs that food or fluids the Principal can safely take by mouth be withheld.

Food and fluids may be offered for comfort and enjoyment to the extent medically appropriate and consistent with the Principal's wishes.

## Comfort Administration

Unless the Principal expressly directs otherwise, artificial nutrition or hydration may be provided temporarily when reasonably necessary for comfort, symptom relief, medication administration, or another limited therapeutic purpose, even when the Principal has otherwise directed that such treatment be withheld or withdrawn.

# Comfort, Pain Relief, and Palliative Care

## Comfort Care

The Principal directs that appropriate measures be taken to maintain comfort and dignity and to relieve pain, shortness of breath, anxiety, agitation, nausea, or other distressing symptoms.

## Pain and Symptom Relief

The Principal authorizes medication and other treatment reasonably intended to relieve pain or suffering even if the treatment may:

@item (a) cause sedation;

@item (b) impair alertness or communication;

@item (c) create a risk of dependence or addiction; or

@item (d) foreseeably but unintentionally shorten the Principal's life.

This authorization does not authorize any act prohibited by applicable law.

## Hospice and Palliative Care

The Health Care Agent may authorize hospice care, palliative care, comfort-focused treatment, and other services designed primarily to promote comfort and quality of life when consistent with the Principal's instructions and medical circumstances.

## Personal Dignity and Care

To the extent reasonably practicable, the Principal wishes to receive appropriate hygiene, positioning, skin care, oral care, warmth, companionship, privacy, and other measures intended to preserve personal dignity and comfort.

## Place of Care

When medically appropriate and reasonably practicable, the Health Care Agent may consider the Principal's preference to receive care in the least restrictive and most comfortable setting suitable to the Principal's needs, including the Principal's home, hospice, assisted living facility, nursing facility, hospital, or other appropriate setting.

# Mental Health Care

## General Mental Health Authority

Under Arizona law, a Health Care Agent appointed under a health care power of attorney may make mental health treatment decisions while the Principal is incapable, subject to the Principal's instructions and the limits stated in this Article. Specialized authority to admit the Principal to an inpatient psychiatric facility must be expressly granted.

## Scope of Authority

To the extent permitted by applicable law, the Health Care Agent may:

@item (a) consent to or refuse evaluation, counseling, therapy, psychiatric treatment, and other mental or behavioral health services;

@item (b) consent to or refuse medications used for mental or behavioral health treatment;

@item (c) select, employ, discharge, or change mental health professionals and treatment providers;

@item (d) authorize admission to or discharge from an appropriate outpatient or non-inpatient mental or behavioral health treatment setting to the extent permitted by Arizona law;

@item (e) obtain, review, receive, and disclose mental health information as authorized by this Directive and applicable law; and

@item (f) take other lawful actions reasonably necessary to implement an authorized mental health care decision.

## Inpatient Psychiatric Facility Authority

[[if az_psych_admission=YES]]

The Principal expressly authorizes the Health Care Agent to consent to the Principal’s admission to an inpatient psychiatric facility licensed by the Arizona Department of Health Services when the authority may lawfully be exercised.

[[else]]

The Health Care Agent is not granted authority under this Directive to admit the Principal to an inpatient psychiatric facility.

[[end]]

## Separate Mental Health Directive

Arizona permits a separate Mental Health Care Power of Attorney for specialized mental health treatment decisions. If the Principal executes a separate Arizona Mental Health Care Power of Attorney, that specialized directive shall control mental health treatment decisions to the extent required by Arizona law.

A separate Arizona Mental Health Care Power of Attorney may be generated as a companion document when selected; it is not replaced by this general Health Care Power of Attorney.

# Health Information and Medical Records

## Health Information Authority

The Principal authorizes the Health Care Agent to request, inspect, review, receive, copy, and disclose health and medical information concerning the Principal to the extent reasonably necessary to carry out this Directive.

For purposes of the Health Insurance Portability and Accountability Act of 1996 and other applicable health-information laws, the Principal intends the acting Health Care Agent to be treated as the Principal's personal representative to the extent permitted by law.

## Immediate Information Access

The Health Care Agent may obtain health information before the Agent's health care decision-making authority becomes effective to the extent permitted by applicable law, including information reasonably necessary to determine whether the conditions for activation of that authority have occurred.

## Implementation

The Health Care Agent may execute releases, authorizations, consents, and other documents reasonably necessary to obtain or disclose health information and may share information with health care providers, fiduciaries, caregivers, attorneys, and other persons when reasonably necessary to carry out the Principal's health care, personal care, incapacity planning, or other lawful interests.

## Separate HIPAA Authorization

A separate HIPAA or medical-information authorization executed by the Principal shall remain independently effective according to its terms. This Article supplements that authorization unless the separate authorization expressly provides otherwise.

# Guardian or Personal Fiduciary Nomination

## Nomination

If a court determines that a guardian of the person or other court-appointed fiduciary responsible for the Principal's personal or health care decisions must be appointed, the Principal nominates the then-acting Health Care Agent to serve in that capacity to the extent permitted by applicable law.

If the acting Health Care Agent is unable, unwilling, or legally ineligible to serve, the Principal nominates the Successor Health Care Agents in the order designated in Article Two.

## Preference for Agent Authority

To the extent permitted by applicable law, the Principal prefers that the authority granted under this Directive remain effective and that appointment of a guardian or similar fiduciary not unnecessarily restrict or terminate the authority of the Health Care Agent.

## Coordination With Court-Appointed Fiduciary

If a guardian or comparable fiduciary is appointed, that fiduciary shall act consistently with this Directive and the Principal's known wishes to the extent required by applicable law.

# Anatomical Gifts and Post-Death Matters

## Effect of Authority at Death

Except for authority that survives the Principal's death under this Directive or applicable law, the Health Care Agent's authority to make health care decisions terminates upon the Principal's death.

## Anatomical Gifts

[[if anatomical_gift=YES]]

The Principal authorizes the donation of the Principal's organs, tissues, and other anatomical gifts after death as follows:

{{anatomical_gift_text}}

The Health Care Agent may take actions reasonably necessary to carry out the Principal's anatomical-gift instructions to the extent permitted by applicable law.

[[elif anatomical_gift=AGENT_DECIDES]]

The Principal authorizes the Health Care Agent to make decisions concerning anatomical gifts after the Principal's death to the extent permitted by applicable law.

[[elif anatomical_gift=NO]]

The Principal does not make an anatomical gift under this Directive. This provision does not revoke any separate legally effective anatomical-gift or donor designation.

[[end]]

## Preservation for Anatomical Gift

If an anatomical gift has been authorized, medical measures reasonably necessary to evaluate, preserve, or maintain organs or tissues for donation may be continued temporarily to the extent permitted by applicable law.

## Other Post-Death Authority

[[if az_funeral_authority=YES]]

The Principal authorizes the Health Care Agent to provide funeral and disposition arrangements after the Principal’s death to the extent authorized by A.R.S. § 36-3221 and consistent with any separate legally effective Final Wishes or disposition instructions of the Principal.

[[else]]

This Directive does not independently grant the Health Care Agent authority over funeral or disposition arrangements.

[[end]]

# Administrative Provisions

## Durability

This Directive shall not terminate because of the Principal's subsequent Incapacity.

## Revocation

The Principal may revoke this Directive or disqualify a surrogate as permitted by Arizona law, including by written revocation, oral notice to the Agent or a health care provider, or execution of a new health care directive. A separate Mental Health Care Power of Attorney is subject to the special revocation rules applicable to that instrument.

## Prior Health Care Directives

The Principal revokes all prior general health care powers of attorney and advance health care directives, except as expressly preserved below or as otherwise required by applicable law.

This revocation does not revoke a separate specialized document that the Principal intends to remain independently effective, including a mental health directive, anatomical-gift or donor designation, physician order concerning scope of treatment, or separate HIPAA Authorization, except to the extent that applicable law or the later document expressly provides otherwise.

## Effect of Marriage or Relationship Change

A change in the Principal's marital or domestic relationship shall affect the authority of an appointed Health Care Agent only as provided by applicable law or an express provision of this Directive.

## Copies and Electronic Records

A copy or electronically stored reproduction of this Directive may be relied upon to the same extent as the original to the extent permitted by applicable law.

## Reliance

A person who in good faith relies upon this Directive or upon a representation of the Health Care Agent concerning the Agent's authority may do so to the extent permitted by applicable law.

## No Liability for Health Care Costs

A person serving as Health Care Agent does not become personally responsible for the Principal's health care expenses solely because the person acts as Health Care Agent.

## Severability

If a provision of this Directive is determined to be invalid or unenforceable, the remaining provisions shall remain effective to the fullest extent permitted by applicable law.

## Interpretation

This Directive shall be interpreted to carry out the Principal's expressed health care instructions and to give the Health Care Agent the authority intended by the Principal to the fullest extent permitted by applicable law.

If valid health care directives conflict, Arizona law generally treats the most recent directive as representing the Principal’s wishes. This Directive shall be coordinated with any later legally effective directive or medical order in accordance with A.R.S. § 36-3209.

Execution follows on the next page.

#! EXECUTION

@sub Declaration of Principal

The Principal declares that this instrument is intended to create an Arizona Health Care Power of Attorney and attached Living Will; that the Principal understands its nature and purpose; and that the Principal executes it voluntarily.

@sub PRINCIPAL

@line Signature: ______________________________________________

@line Printed Name: {{name}}

@line Date: ______________________________

[[if az_unable_to_sign]]

Witness/Notary Verification: The principal of this document directly indicated to me that this Health Care Power of Attorney expresses their wishes and that they intend to adopt it at this time.

@line Witness/Notary Signature: ______________________________________________

@line Name Printed: __________________________________________

@line Date: __________________

[[end]]

[[if exec_route=WITNESS]]

@sub SIGNATURE OF WITNESS

I was present when this form was signed (or marked). The principal appeared to be of sound mind and was not forced to sign this form. I affirm that I meet the requirements to be a witness under Arizona law.

@line Witness Signature: _______________________________________

@line Date: __________________

@line Name Printed: ___________________________________________

@line Address: ________________________________________________

[[elif exec_route=NOTARY]]

@sub SIGNATURE OF NOTARY

@line NOTARIAL JURAT: Pertains to this State of Arizona Health Care Power of Attorney and attached Living Will dated __________________.

@line STATE OF ARIZONA ) ss

@line COUNTY OF {{county}}

{{name}}

@line Subscribed and sworn (or affirmed) before me this __________ day of __________________, 20______.

@line Notary Public Signature: ______________________________________________

@line My Commission Expires: ______________________________________________

[[end]]
`;

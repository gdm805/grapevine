window.HCD_STATES = window.HCD_STATES || {};
window.HCD_STATES["Georgia"] = String.raw`
// ==========================================================================
//  GRAPEVINE  |  HEALTH CARE DIRECTIVE  |  GEORGIA
//  Converted word for word from your file Grapevine_HCD_Georgia.docx (the controlled
//  state document). Same rules as will/dpoa-template.js. To change this state, edit this file only.
// ==========================================================================
@set exec_choice = no
@set exec_route_default = 
@set exec_routes = none
@set ask_ca_skilled_nursing = no
@set ask_ct_dmhas = no
@set ask_ct_dds = no
@set ask_ct_pregnancy = no
@set ask_az_unable_to_sign = no
@set ask_az_psych_admission = no
@set ask_az_funeral_authority = no
@set ask_ne_second_physician = no
@set ask_oh_unconscious_anh = no
@set ask_sc_optional_notary = no
@set ask_vt_facility_explanation = no
@set has_witness = yes
@set has_notary = yes

@center **ADVANCE DIRECTIVE FOR HEALTH CARE**

**This advance directive for health care has four parts:**

PART ONE — HEALTH CARE AGENT. This part allows you to choose someone to make health care decisions for you when you cannot (or do not want to) make health care decisions for yourself. The person you choose is called a health care agent. You may also have your health care agent make decisions for you after your death with respect to an autopsy, organ donation, body donation, and final disposition of your body. You should talk to your health care agent about this important role.

PART TWO — TREATMENT PREFERENCES. This part allows you to state your treatment preferences if you have a terminal condition or if you are in a state of permanent unconsciousness. PART TWO will become effective only if you are unable to communicate your treatment preferences. Reasonable and appropriate efforts will be made to communicate with you about your treatment preferences before PART TWO becomes effective. You should talk to your family and others close to you about your treatment preferences.

PART THREE — GUARDIANSHIP. This part allows you to nominate a person to be your guardian should one ever be needed.

PART FOUR — EFFECTIVENESS AND SIGNATURES. This part requires your signature and the signatures of two witnesses. You must complete PART FOUR if you have filled out any other part of this form.

You may fill out any or all of the first three parts listed above. You must fill out PART FOUR of this form in order for this form to be effective.

You should give a copy of this completed form to people who might need it, such as your health care agent, your family, and your physician. Keep a copy of this completed form at home in a place where it can easily be found if it is needed. Review this completed form periodically to make sure it still reflects your preferences. If your preferences change, complete a new advance directive for health care.

Using this form of advance directive for health care is completely optional. Other forms of advance directives for health care may be used in Georgia.

You may revoke this completed form at any time. This completed form will replace any advance directive for health care, durable power of attorney for health care, health care proxy, or living will that you have completed before completing this form.

# Declaration and Purpose

## Health Care Directive

This Health Care Directive states the Principal's instructions concerning health care and appoints a Health Care Agent to make health care decisions for the Principal when authorized by this Directive and applicable law.

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

This Directive is intended to constitute an Advance Directive for Health Care under O.C.G.A. Title 31, Chapter 32.

## Principal Retains Authority

While the Principal has capacity to make a health care decision, the Principal retains the right to make that decision.

No authority granted to a Health Care Agent under this Directive limits the Principal's right to make or communicate health care decisions while the Principal has capacity to do so.

# Appointment of Health Care Agent

## Appointment of Health Care Agent

The Principal appoints the following person to serve as Health Care Agent:

{{agent}}

{{agent_contact}}

The Health Care Agent shall have the authority provided by this Directive when that authority becomes effective under Article Three.

[[if has_successors]]

## Successor Health Care Agents

If the Health Care Agent named in Section 2.01 dies, resigns, declines to serve, is unable or unwilling to serve, becomes legally disqualified, or otherwise ceases to serve, the following persons shall serve as Successor Health Care Agents in the order listed:

[[each successors]]

{{successor}}

{{successor_contact}}

[[end]]

A Successor Health Care Agent shall have the same authority as the originally appointed Health Care Agent unless this Directive expressly provides otherwise.

[[end]]

## No Simultaneous Authority

Only one Health Care Agent shall serve at a time.

The appointment of Successor Health Care Agents does not grant concurrent authority to more than one person.

## Eligibility to Serve

A person appointed as Health Care Agent may serve only if legally eligible to serve under the law applicable when the person's authority is exercised.

If an appointed person is legally disqualified from serving, that person shall be treated as unable to serve, and the next eligible Successor Health Care Agent shall serve.

## Acceptance

A person appointed as Health Care Agent accepts the appointment by acting under this Directive unless applicable law requires another method of acceptance.

# Effectiveness of Agent Authority

## Principal's Authority While Capable

The Principal shall make the Principal's own health care decisions while the Principal has capacity to make those decisions.

The Health Care Agent may assist the Principal, communicate the Principal's decisions, obtain information as authorized by this Directive, and otherwise act as permitted by the Principal and applicable law, but shall not override a health care decision made by the Principal while the Principal has capacity to make that decision.

## Effectiveness Upon Incapacity

Except for authority that this Directive or applicable law permits to be exercised earlier, the Health Care Agent's authority to make health care decisions becomes effective when the Principal is determined to lack capacity to make the health care decision at issue.

The determination shall be made in the manner required by applicable law.

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

# Life-Sustaining Treatment

## Purpose

This Article states the Principal's wishes concerning medical treatment that would sustain or prolong life when the Principal is unable to make or communicate the applicable health care decision.

The instructions in this Article are subject to any conditions, definitions, certifications, or limitations required by applicable law.

## Treatment Choice

[[if life_support=DO_NOT_PROLONG]]

If the Principal is in a terminal condition or state of permanent unconsciousness, the Principal’s treatment election below applies to life-sustaining procedures and nourishment or hydration as authorized by Georgia law.

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

Subject to the Principal's instructions in this Directive and applicable law, the Health Care Agent may make decisions concerning the Principal's mental and behavioral health care to the extent such authority may lawfully be delegated to a health care agent.

## Scope of Authority

To the extent permitted by applicable law, the Health Care Agent may:

@item (a) consent to or refuse evaluation, counseling, therapy, psychiatric treatment, and other mental or behavioral health services;

@item (b) consent to or refuse medications used for mental or behavioral health treatment;

@item (c) select, employ, discharge, or change mental health professionals and treatment providers;

@item (d) authorize admission to or discharge from an appropriate mental or behavioral health treatment facility when legally permitted;

@item (e) obtain, review, receive, and disclose mental health information as authorized by this Directive and applicable law; and

@item (f) take other lawful actions reasonably necessary to implement an authorized mental health care decision.

## Special Procedures

This Directive does not authorize the Health Care Agent to consent to involuntary commitment, electroconvulsive treatment, psychosurgery, sterilization, or any other procedure requiring separate or specific authorization unless that authority is expressly granted by this Directive, a separate legally effective instrument, or applicable law.

## Separate Mental Health Directive

Applicable law may permit or require a separate Advance Mental Health Care Directive or similar instrument for certain mental health treatment decisions.

If the Principal has executed such a directive, the Health Care Agent shall act consistently with that directive to the extent required by applicable law.

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

Authority concerning autopsy, disposition of remains, or other post-death matters shall arise under this Directive only to the extent specifically provided by applicable law. Separate legally effective instructions or arrangements of the Principal shall control to the extent required by law.

# Administrative Provisions

## Durability

This Directive shall not terminate because of the Principal's subsequent Incapacity.

## Revocation

The Principal may revoke this Directive, an appointment made under it, or an instruction contained in it in any manner permitted by applicable law while the Principal has the legal capacity required to do so.

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

Execution follows on the next page.

#! EXECUTION

@sub Declaration of Principal

The Principal declares that the Principal understands the nature and purpose of this Directive and executes it voluntarily with the intent that it be effective according to its terms and applicable law.

@sub PRINCIPAL

@line Signature: ______________________________________________

@line Printed Name: {{name}}

@line Date: ______________________________

@sub WITNESSES

The declarant signed this form in my presence or acknowledged signing this form to me. Based upon my personal observation, the declarant appeared to be emotionally and mentally capable of making this advance directive for health care and signed this form willingly and voluntarily.

@line Signature of First Witness: ______________________________

@line Date: __________________

@line Print Name: _____________________________________________

@line Address: ________________________________________________

@line Signature of Second Witness: _____________________________

@line Date: __________________

@line Print Name: _____________________________________________

@line Address: ________________________________________________
`;

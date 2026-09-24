window.HCD_STATES = window.HCD_STATES || {};
window.HCD_STATES["Texas"] = String.raw`
// ==========================================================================
//  GRAPEVINE  |  HEALTH CARE DIRECTIVE  |  TEXAS
//  Converted word for word from your file Grapevine_HCD_Texas.docx (the controlled
//  state document). Same rules as will/dpoa-template.js. To change this state, edit this file only.
// ==========================================================================
@set exec_choice = yes
@set exec_route_default = 
@set exec_routes = NOTARY,WITNESSES
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

@center **MEDICAL POWER OF ATTORNEY AND DIRECTIVE TO PHYSICIANS**

**DISCLOSURE STATEMENT**

**THIS MEDICAL POWER OF ATTORNEY IS AN IMPORTANT LEGAL DOCUMENT. BEFORE SIGNING THIS DOCUMENT, YOU SHOULD KNOW THESE IMPORTANT FACTS:**

Except to the extent you state otherwise, this document gives the person you name as your agent the authority to make any and all health care decisions for you in accordance with your wishes, including your religious and moral beliefs, when you are unable to make the decisions for yourself. Because "health care" means any treatment, service, or procedure to maintain, diagnose, or treat your physical or mental condition, your agent has the power to make a broad range of health care decisions for you.

Your agent may consent, refuse to consent, or withdraw consent to medical treatment and may make decisions about withdrawing or withholding life-sustaining treatment. Your agent may not consent to voluntary inpatient mental health services, convulsive treatment, psychosurgery, or abortion. A physician must comply with your agent's instructions or allow you to be transferred to another physician.

Your agent's authority is effective when your doctor certifies that you lack the competence to make health care decisions.

Your agent is obligated to follow your instructions when making decisions on your behalf. Unless you state otherwise, your agent has the same authority to make decisions about your health care as you would have if you were able to make health care decisions for yourself.

It is important that you discuss this document with your physician or other health care provider before you sign the document to ensure that you understand the nature and range of decisions that may be made on your behalf. If you do not have a physician, you should talk with someone else who is knowledgeable about these issues and can answer your questions.

You do not need a lawyer's assistance to complete this document, but if there is anything in this document that you do not understand, you should ask a lawyer to explain it to you.

The person you appoint as agent should be someone you know and trust. The person must be 18 years of age or older or a person under 18 years of age who has had the disabilities of minority removed.

If you appoint your health or residential care provider (e.g., your physician or an employee of a home health agency, hospital, nursing facility, or residential care facility, other than a relative), that person has to choose between acting as your agent or as your health or residential care provider; the law does not allow a person to serve as both at the same time.

You should inform the person you appoint that you want the person to be your health care agent. You should discuss this document with your agent and your physician and give each a signed copy. You should indicate on the document itself the people and institutions that you intend to have signed copies. Your agent is not liable for health care decisions made in good faith on your behalf.

Once you have signed this document, you have the right to make health care decisions for yourself as long as you are able to make those decisions, and treatment cannot be given to you or stopped over your objection. You have the right to revoke the authority granted to your agent by informing your agent or your health or residential care provider orally or in writing or by your execution of a subsequent medical power of attorney.

Unless you state otherwise in this document, your appointment of a spouse is revoked if your marriage is dissolved, annulled, or declared void.

This document may not be changed or modified. If you want to make changes in this document, you must execute a new medical power of attorney.

You may wish to designate an alternate agent in the event that your agent is unwilling, unable, or ineligible to act as your agent. If you designate an alternate agent, the alternate agent has the same authority as the agent to make health care decisions for you.

**THIS POWER OF ATTORNEY IS NOT VALID UNLESS:**

**(1) YOU SIGN IT AND HAVE YOUR SIGNATURE ACKNOWLEDGED BEFORE A NOTARY PUBLIC; OR**

**(2) YOU SIGN IT IN THE PRESENCE OF TWO COMPETENT ADULT WITNESSES.**

**THE FOLLOWING PERSONS MAY NOT ACT AS ONE OF THE WITNESSES:**

(1) the person you have designated as your agent;

(2) a person related to you by blood or marriage;

(3) a person entitled to any part of your estate after your death under a will or codicil executed by you or by operation of law;

(4) your attending physician;

(5) an employee of your attending physician;

(6) an employee of a health care facility in which you are a patient if the employee is providing direct patient care to you or is an officer, director, partner, or business office employee of the health care facility or of any parent organization of the health care facility; or

(7) a person who, at the time this medical power of attorney is executed, has a claim against any part of your estate after your death.

By signing below, I acknowledge that I have read and understand the information contained in the above disclosure statement.

# Declaration and Purpose

## Health Care Directive

This Health Care Directive states the Principal's instructions concerning health care and appoints an Agent to make health care decisions for the Principal when authorized by this Directive and applicable law.

## Principal

The Principal is:

{{name}}

Address: {{address}}

## Intent

The Principal intends that this Directive:

@item (a) communicate the Principal's health care instructions, preferences, and values;

@item (b) authorize the Agent to make health care decisions for the Principal to the fullest extent authorized by this Directive and applicable law;

@item (c) provide health care providers and others with reliable evidence of the Principal's wishes;

@item (d) reduce uncertainty concerning the Principal's health care if the Principal is unable to make or communicate health care decisions; and

@item (e) remain effective notwithstanding the Principal's subsequent Incapacity, except as otherwise provided by the Principal or applicable law.

## Principal Retains Authority

While the Principal has capacity to make a health care decision, the Principal retains the right to make that decision.

No authority granted to an Agent under this Directive limits the Principal's right to make or communicate health care decisions while the Principal has capacity to do so.

# Appointment of Health Care Agent

## Appointment of Agent

The Principal appoints the following person to serve as Agent:

{{agent}}

[[if agent_contact]]

{{agent_contact}}

[[end]]

[[if has_co_agents]]

In addition to the Agent named above, I appoint the following persons to serve at the same time. Each person named in this paragraph is my Agent, and all of them together are my "co-agents":

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

The Agent shall have the authority provided by this Directive when that authority becomes effective under Article Three.

[[if has_successors]]

## Successor Agents

If the Agent named in Section 2.01 dies, resigns, declines to serve, is unable or unwilling to serve, becomes legally disqualified, or otherwise ceases to serve, the following persons shall serve as Successor Agents in the order listed:

[[each successors]]

{{successor}}

[[if successor_contact]]

{{successor_contact}}

[[end]]

[[end]]

A Successor Agent shall have the same authority as the originally appointed Agent unless this Directive expressly provides otherwise.

[[end]]

## No Simultaneous Authority

Only one Agent shall serve at a time.

The appointment of Successor Agents does not grant concurrent authority to more than one person.

## Eligibility to Serve

A person appointed as Agent may serve only if legally eligible to serve under the law applicable when the person's authority is exercised.

If an appointed person is legally disqualified from serving, that person shall be treated as unable to serve, and the next eligible Successor Agent shall serve.

## Acceptance

A person appointed as Agent accepts the appointment by acting under this Directive unless applicable law requires another method of acceptance.

# Effectiveness of Agent Authority

## Principal's Authority While Capable

The Principal shall make the Principal's own health care decisions while the Principal has capacity to make those decisions.

The Agent may assist the Principal, communicate the Principal's decisions, obtain information as authorized by this Directive, and otherwise act as permitted by the Principal and applicable law, but shall not override a health care decision made by the Principal while the Principal has capacity to make that decision.

## Effectiveness Upon Incapacity

Except for authority that this Directive or applicable law permits to be exercised earlier, the Agent's authority to make health care decisions becomes effective when the Principal is determined to lack capacity to make the health care decision at issue.

The determination shall be made in the manner required by applicable law.

## Decision-Specific Capacity

The Principal's lack of capacity to make one health care decision does not establish lack of capacity to make every health care decision.

To the extent reasonably possible and consistent with applicable law, the Principal shall continue to participate in health care decisions and shall be informed of decisions made on the Principal's behalf.

## Restoration of Capacity

If the Principal regains capacity to make a health care decision, the Agent's authority to make that decision shall cease while the Principal retains that capacity.

A determination that the Principal has regained capacity shall be made as required by applicable law.

If the Principal later again lacks capacity, the Agent's authority may again become effective without the need to execute a new Health Care Directive.

## Health Information Authority

Before the Agent's decision-making authority becomes effective, the Agent may obtain health and medical information to the extent authorized by Article Ten and applicable law.

This limited early authority is intended to permit access to information reasonably necessary to determine whether the conditions for activation of the Agent's decision-making authority have occurred.

# Authority of Health Care Agent

## General Authority

Subject to the Principal's instructions and limitations in this Directive and applicable law, the Agent may make any health care decision that the Principal could make if the Principal had capacity to make that decision.

## Specific Powers

Without limiting the general authority granted by Section 4.01, the Agent may, to the extent permitted by applicable law:

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

@item (l) transfer the Principal's care to another provider or facility when reasonably necessary to carry out the Principal's instructions or the Agent's authorized decision;

@item (m) authorize visitation and access to the Principal to the extent permitted by applicable law;

@item (n) communicate with health care providers and other persons concerning the Principal's care; and

@item (o) take any other lawful action reasonably necessary to implement a health care decision authorized by this Directive;

@item (p) request, discuss, consent to, sign when legally authorized, modify, or revoke medical orders concerning resuscitation or scope of treatment, including POLST, MOLST, MOST, POST, DNR, or comparable medical orders, to the extent permitted by applicable law. This Directive is not itself a medical order, and any such order must be completed, signed, certified, or entered by the health care professional or other person authorized by applicable law; and

@item (q) make personal-care and living-arrangement decisions reasonably related to the Principal's health, safety, treatment, or care, including decisions concerning diet, hygiene, supervision, and level or setting of care, to the extent permitted by applicable law.

## Limitations on Authority

The Agent shall not:

@item (a) act contrary to an instruction of the Principal that is binding under this Directive and applicable law;

@item (b) exercise authority expressly withheld from the Agent by this Directive;

@item (c) make a decision that applicable law prohibits an agent from making; or

@item (d) exercise a power requiring specific authorization under applicable law unless that authorization is contained in this Directive.

## No Financial Authority

This Directive does not grant the Agent general authority over the Principal's property or financial affairs.

The Agent may execute health-care-related consents, admissions documents, releases, and similar instruments reasonably necessary to carry out an authorized health care decision to the extent permitted by applicable law. This limited authority does not independently grant the Agent general control over the Principal's accounts or property.

# Standard for Health Care Decisions

## Controlling Instructions

The Agent shall make health care decisions in accordance with the Principal's instructions contained in this Directive and any other health care instructions of the Principal that are known to the Agent and legally effective.

If a provision of this Directive conflicts with a later legally effective health care instruction of the Principal, the later instruction shall control to the extent of the conflict.

## Known Wishes and Values

If the Principal has not given a controlling instruction concerning a particular health care decision, the Agent shall make the decision in accordance with the Principal's wishes to the extent those wishes are reasonably known.

In determining the Principal's wishes, the Agent may consider the Principal's previously expressed preferences, personal values, religious or spiritual beliefs, treatment goals, attitudes toward independence and quality of life, and other information reasonably known to the Agent.

## Best Interests

If the Principal's wishes concerning a health care decision cannot reasonably be determined, the Agent shall act in the Principal's best interests.

In determining the Principal's best interests, the Agent may consider:

@item (a) the benefits and burdens of the proposed treatment;

@item (b) the likelihood and extent of recovery;

@item (c) the relief of pain, discomfort, or suffering;

@item (d) the preservation or restoration of function;

@item (e) the Principal's dignity, privacy, independence, and personal values;

@item (f) the risks associated with treatment or withholding treatment; and

@item (g) other circumstances reasonably relevant to the Principal's welfare.

## Participation of Principal

The Agent and health care providers shall, to the extent reasonably practicable, involve the Principal in health care decisions even when the Principal lacks full capacity to make the decision independently.

The Principal's presently expressed wishes and objections shall be respected to the extent required by applicable law.

## Relationship Between Instructions and Agent Authority

Specific health care instructions stated by the Principal are binding on the Agent and health care providers to the fullest extent permitted by applicable law.

Statements of the Principal's values, preferences, goals, and beliefs shall guide the Agent when applying those instructions and when making decisions not specifically addressed by the Principal.

The Agent may exercise reasonable judgment in interpreting an instruction and applying it to circumstances not expressly anticipated by the Principal but may not knowingly disregard a controlling instruction.

[[if has_custom_instructions]]

## Additional Instructions, Limitations, and Values

[[if additional_instructions=YES]]

Additional health care instructions:

{{additional_instructions_text}}

[[end]]

[[if agent_limitations=YES]]

Additional limitations on the authority of the Agent:

{{agent_limitations_text}}

[[end]]

[[if values_instructions=YES]]

Religious, spiritual, ethical, cultural, or personal values the Agent should consider:

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

If the Principal has an incurable or irreversible condition, is permanently unconscious, has an end-stage condition, or is in another condition recognized under applicable law in which life-sustaining treatment would principally prolong the process of dying or provide no reasonable prospect of recovery acceptable to the Principal, the Principal directs that life-sustaining treatment be withheld or withdrawn.

The Principal wishes to be allowed to die naturally while receiving comfort care and treatment necessary to relieve pain, discomfort, anxiety, or suffering.

[[elif life_support=PROLONG]]

The Principal directs that medically appropriate life-sustaining treatment be provided and continued to prolong the Principal's life to the greatest extent reasonably possible within generally accepted health care standards, subject to any limitations expressly stated elsewhere in this Directive.

[[elif life_support=AGENT_DECIDES]]

The Principal authorizes the Agent to decide whether life-sustaining treatment should be provided, withheld, or withdrawn.

The Agent shall make that decision under Article Five after considering the Principal's medical condition, prognosis, likelihood of meaningful recovery, burdens and benefits of treatment, relief of suffering, and the Principal's known wishes and values.

[[end]]

## Trial of Treatment

When consistent with the Principal's controlling treatment instructions, a reasonable time-limited trial of a life-sustaining treatment may be undertaken if the likely benefit is uncertain and the Agent and health care providers reasonably believe the treatment may permit recovery or materially improve the Principal's condition.

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

The Principal authorizes the Agent to decide whether artificially administered nutrition should be provided, continued, withheld, or withdrawn under the decision standards stated in Article Five.

[[end]]

## Artificial Hydration

[[if hydration=WITHHOLD_WITHDRAW]]

Under the circumstances in which the Principal has directed that life-sustaining treatment be withheld or withdrawn, the Principal also directs that artificially administered hydration may be withheld or withdrawn.

[[elif hydration=CONTINUE]]

The Principal directs that artificially administered hydration be provided or continued notwithstanding the Principal's instructions concerning other life-sustaining treatment, except to the extent the treatment is medically inappropriate, ineffective, or prohibited by applicable law.

[[elif hydration=AGENT_DECIDES]]

The Principal authorizes the Agent to decide whether artificially administered hydration should be provided, continued, withheld, or withdrawn under the decision standards stated in Article Five.

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

The Agent may authorize hospice care, palliative care, comfort-focused treatment, and other services designed primarily to promote comfort and quality of life when consistent with the Principal's instructions and medical circumstances.

## Personal Dignity and Care

To the extent reasonably practicable, the Principal wishes to receive appropriate hygiene, positioning, skin care, oral care, warmth, companionship, privacy, and other measures intended to preserve personal dignity and comfort.

## Place of Care

When medically appropriate and reasonably practicable, the Agent may consider the Principal's preference to receive care in the least restrictive and most comfortable setting suitable to the Principal's needs, including the Principal's home, hospice, assisted living facility, nursing facility, hospital, or other appropriate setting.

# Mental Health Care

## General Mental Health Authority

Subject to the Principal's instructions in this Directive and applicable law, the Agent may make decisions concerning the Principal's mental and behavioral health care to the extent such authority may lawfully be delegated to a health care agent.

## Scope of Authority

To the extent permitted by applicable law, the Agent may:

@item (a) consent to or refuse evaluation, counseling, therapy, psychiatric treatment, and other mental or behavioral health services;

@item (b) consent to or refuse medications used for mental or behavioral health treatment;

@item (c) select, employ, discharge, or change mental health professionals and treatment providers;

@item (d) authorize admission to or discharge from an appropriate mental or behavioral health treatment facility when legally permitted;

@item (e) obtain, review, receive, and disclose mental health information as authorized by this Directive and applicable law; and

@item (f) take other lawful actions reasonably necessary to implement an authorized mental health care decision.

## Special Procedures

This Directive does not authorize the Agent to consent to involuntary commitment, electroconvulsive treatment, psychosurgery, sterilization, or any other procedure requiring separate or specific authorization unless that authority is expressly granted by this Directive, a separate legally effective instrument, or applicable law.

## Separate Mental Health Directive

Applicable law may permit or require a separate Advance Mental Health Care Directive or similar instrument for certain mental health treatment decisions.

If the Principal has executed such a directive, the Agent shall act consistently with that directive to the extent required by applicable law.

# Health Information and Medical Records

## Health Information Authority

The Principal authorizes the Agent to request, inspect, review, receive, copy, and disclose health and medical information concerning the Principal to the extent reasonably necessary to carry out this Directive.

For purposes of the Health Insurance Portability and Accountability Act of 1996 and other applicable health-information laws, the Principal intends the acting Agent to be treated as the Principal's personal representative to the extent permitted by law.

## Immediate Information Access

The Agent may obtain health information before the Agent's health care decision-making authority becomes effective to the extent permitted by applicable law, including information reasonably necessary to determine whether the conditions for activation of that authority have occurred.

## Implementation

The Agent may execute releases, authorizations, consents, and other documents reasonably necessary to obtain or disclose health information and may share information with health care providers, fiduciaries, caregivers, attorneys, and other persons when reasonably necessary to carry out the Principal's health care, personal care, incapacity planning, or other lawful interests.

## Separate HIPAA Authorization

A separate HIPAA or medical-information authorization executed by the Principal shall remain independently effective according to its terms. This Article supplements that authorization unless the separate authorization expressly provides otherwise.

# Guardian or Personal Fiduciary Nomination

## Nomination

If a court determines that a guardian of the person or other court-appointed fiduciary responsible for the Principal's personal or health care decisions must be appointed, the Principal nominates the then-acting Agent to serve in that capacity to the extent permitted by applicable law.

If the acting Agent is unable, unwilling, or legally ineligible to serve, the Principal nominates the Successor Agents in the order designated in Article Two.

## Preference for Agent Authority

To the extent permitted by applicable law, the Principal prefers that the authority granted under this Directive remain effective and that appointment of a guardian or similar fiduciary not unnecessarily restrict or terminate the authority of the Agent.

## Coordination With Court-Appointed Fiduciary

If a guardian or comparable fiduciary is appointed, that fiduciary shall act consistently with this Directive and the Principal's known wishes to the extent required by applicable law.

# Anatomical Gifts and Post-Death Matters

## Effect of Authority at Death

Except for authority that survives the Principal's death under this Directive or applicable law, the Agent's authority to make health care decisions terminates upon the Principal's death.

## Anatomical Gifts

[[if anatomical_gift=YES]]

The Principal authorizes the donation of the Principal's organs, tissues, and other anatomical gifts after death as follows:

{{anatomical_gift_text}}

The Agent may take actions reasonably necessary to carry out the Principal's anatomical-gift instructions to the extent permitted by applicable law.

[[elif anatomical_gift=AGENT_DECIDES]]

The Principal authorizes the Agent to make decisions concerning anatomical gifts after the Principal's death to the extent permitted by applicable law.

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

A change in the Principal's marital or domestic relationship shall affect the authority of an appointed Agent only as provided by applicable law or an express provision of this Directive.

## Copies and Electronic Records

A copy or electronically stored reproduction of this Directive may be relied upon to the same extent as the original to the extent permitted by applicable law.

## Reliance

A person who in good faith relies upon this Directive or upon a representation of the Agent concerning the Agent's authority may do so to the extent permitted by applicable law.

## No Liability for Health Care Costs

A person serving as Agent does not become personally responsible for the Principal's health care expenses solely because the person acts as Agent.

## Severability

If a provision of this Directive is determined to be invalid or unenforceable, the remaining provisions shall remain effective to the fullest extent permitted by applicable law.

## Interpretation

This Directive shall be interpreted to carry out the Principal's expressed health care instructions and to give the Agent the authority intended by the Principal to the fullest extent permitted by applicable law.

Section 4.05 — Texas Limitations on Agent Authority

The Agent may not consent on the Principal’s behalf to voluntary inpatient mental health services, convulsive treatment, psychosurgery, abortion, or the omission of care primarily intended to provide for the Principal’s comfort, except to the extent Texas law later expressly permits otherwise.

Execution follows on the next page.

#! EXECUTION

The Principal acknowledges having read and understood the disclosure statement above and executes this Medical Power of Attorney voluntarily.

@sub PRINCIPAL

@line I sign my name to this Medical Power of Attorney on __________ at ______________________________ (City and State).

@line Signature: ______________________________

@line Print Name: {{name}}

[[if exec_route=NOTARY]]

@sub SIGNATURE ACKNOWLEDGED BEFORE NOTARY

@line State of Texas

@line County of {{county}}

@line This instrument was acknowledged before me on __________ by {{name}}.

@line NOTARY PUBLIC, State of Texas: ______________________________

@line Notary's printed name: ______________________________

@line My commission expires: ____________________

[[elif exec_route=WITNESSES]]

@sub SIGNATURE IN PRESENCE OF TWO COMPETENT ADULT WITNESSES

@line I sign my name to this medical power of attorney on __________ day of __________ (month, year) at ______________________________ (City and State).

@line Signature: ______________________________

@line Print Name: {{name}}

@sub STATEMENT OF FIRST WITNESS.

I am not the person appointed as agent by this document. I am not related to the principal by blood or marriage. I would not be entitled to any portion of the principal's estate on the principal's death. I am not the attending physician of the principal or an employee of the attending physician. I have no claim against any portion of the principal's estate on the principal's death.

Furthermore, if I am an employee of a health care facility in which the principal is a patient, I am not involved in providing direct patient care to the principal and am not an officer, director, partner, or business office employee of the health care facility or of any parent organization of the health care facility.

@line Signature: ________________________________________________

@line Print Name: ___________________________________

@line Date: ______

@line Address: __________________________________________________

@sub SIGNATURE OF SECOND WITNESS.

@line Signature: ________________________________________________

@line Print Name: ___________________________________

@line Date: ______

@line Address: __________________________________________________

[[end]]
`;

window.DEMENTIA_TEMPLATE = String.raw`
// ==========================================================================
//  GRAPEVINE  |  DEMENTIA AND COGNITIVE DECLINE CARE PREFERENCES
//
//  The wording below is taken from your file "Grapevine_National_Dementia_Cognitive_Decline_Care_Preferences_V1_Coder_Ready.docx",
//  word for word, for every paragraph that isn't tied to a customer choice. Same rules as will/will-template.js.
//
//  WHAT THIS DOCUMENT IS: your baseline calls it an "optional AHCD supplement" -- guidance that goes with a
//  person's Advance Health Care Directive (their living will / health-care power of attorney), not a
//  replacement for it and not a separate grant of authority. Grapevine doesn't have an Advance Health Care
//  Directive builder yet, so this asks for the person's own name and state directly instead of pulling them
//  from that document (your baseline's Section 10.02 says to inherit them once that builder exists).
//
//  EXECUTION: your baseline gives two routes. The "integrated" route (Section 8.01) explicitly says not to
//  add a second signature, witness or notary block -- sign and date, and attach this to the health-care
//  directive. The "standalone" route (Section 8.02) requires a state-by-state execution ruleset your baseline
//  doesn't spell out (it points at a token, [[STATE_EXECUTION:DEMENTIA_CARE_PREFERENCES]], not at real words),
//  and your own guardrail (Section 10.04) says never to substitute a generic block for that. So this uses the
//  integrated route's rule for every state: sign, date, attach it to the health-care directive. The signing
//  steps say plainly that some states may want it witnessed or notarized alongside that directive.
//
//  SHORTENED QUESTIONS: your baseline's Article Nine has 11 questions (Q-DCP-001 to Q-DCP-011). Q-DCP-001
//  (whether to add this at all) is answered just by starting this builder, so it isn't asked again. The three
//  near-identical "goal of care by stage" questions (Q-DCP-003/004/005) become one overall-approach question,
//  with an optional "set each stage separately" toggle for anyone who wants the original three-question detail.
//  Everything else your baseline asks (Q-DCP-002, 006 through 011) is still here, just grouped onto fewer
//  screens. Section 5.04 (surgery/intensive care) has no numbered question in your baseline at all -- added
//  a short optional field for it, grouped with the similar artificial-nutrition question.
// ==========================================================================
@set draft_watermark = yes
@set draft_label = SAMPLE - NOT FOR SIGNING

@center **DEMENTIA AND COGNITIVE DECLINE CARE PREFERENCES**

@center **OF {{name_caps}}**

@center A supplement to my Advance Health Care Directive

This document records my preferences and values for future health care if Alzheimer's disease, another form of dementia, or another condition causes substantial cognitive decline. It is designed to supplement, not replace, my applicable Advance Health Care Directive, health-care power of attorney, living will, or comparable state-authorized health-care directive.

My health-care agent receives no authority from this document beyond authority granted by applicable law and my controlling health-care directive. This document does not create medical orders and does not replace a POLST, MOLST, POST, DNR order, or other clinician-signed medical order when one is required or appropriate.

# Purpose, Relationship, and Use

## Purpose

The purpose of these Care Preferences is to give my health-care agent, family, caregivers, and health-care professionals additional guidance about my goals, values, and treatment preferences if cognitive decline later limits my ability to understand, evaluate, or communicate health-care decisions.

## Principal Controls While Capable

Nothing in these Care Preferences limits my right to make or communicate my own health-care decisions while I have decision-making capacity for the decision at issue. My contemporaneous capable decision controls over an earlier preference expressed here.

## Relationship to Controlling Health-Care Documents

These Care Preferences shall be read together with my controlling health-care directive and any valid medical orders. They are intended to guide the exercise of authority already granted to my health-care agent and to provide evidence of my wishes and values. If applicable law requires a particular statutory form, execution method, medical order, or provider determination before a preference may be implemented, that requirement controls.

## No Diagnosis by This Document

The descriptive stages used below are practical planning categories only. They are not medical diagnoses and do not authorize my health-care agent, Grapevine, or any non-clinician to diagnose dementia, determine capacity, or decide that a particular clinical stage has been reached. Those determinations are made under applicable law and ordinary clinical practice.

# Guiding Values and Decision Standard

## General Guidance to Health-Care Agent

When my health-care agent is authorized to act, I request that the agent use these Care Preferences together with my other known wishes, values, religious or spiritual beliefs, prior statements, current circumstances, and the advice of treating professionals. The agent should seek to honor my expressed preferences to the extent permitted by law and consistent with the agent's legal duties.

[[if any_value]]

## Preserving Autonomy and Familiarity

[[if value_autonomy]]

I place a high value on preserving autonomy, familiar routines, meaningful relationships, and participation in decisions to the greatest extent reasonably possible.

[[end]]
[[if value_comfort]]

I place a high value on comfort, relief of pain and distress, and avoiding treatments or care settings that would impose substantial burden without a meaningful benefit consistent with my goals.

[[end]]
[[if value_custom]]

Additional values important to me: {{value_custom_text}}

[[end]]
[[end]]

# Planning Stages for Cognitive Decline

## Mild Cognitive Decline

For planning purposes, mild cognitive decline means I have noticeable memory, reasoning, or executive-function problems but generally remain able to communicate preferences, recognize important people, participate meaningfully in decisions, and perform many ordinary activities with limited assistance.

## Moderate Cognitive Decline

For planning purposes, moderate cognitive decline means I need substantial help with daily activities or safety, have significant difficulty understanding or retaining information, may become confused in unfamiliar settings, and may no longer be able to make some health-care decisions independently.

## Advanced Cognitive Decline

For planning purposes, advanced cognitive decline means I am profoundly impaired in memory, communication, recognition, judgment, or daily functioning and am dependent on others for most or all personal care. I may have little ability to understand medical interventions or unfamiliar environments.

# Goals of Medical Care by Stage

## Mild Cognitive Decline

[[if mild_full]]

If I have mild cognitive decline, I prefer medical treatment generally directed toward prolonging life, restoring function, treating reversible illness, and maintaining independence, subject to my contemporaneous capable choices.

[[elif mild_selective]]

If I have mild cognitive decline, I prefer treatment of reversible illness and conditions likely to preserve meaningful function, while avoiding interventions whose expected burdens substantially outweigh their likely benefit to me.

[[elif mild_comfort]]

If I have mild cognitive decline, I prefer that comfort and quality of life receive priority over treatment whose principal purpose is prolonging life.

[[end]]

## Moderate Cognitive Decline

[[if moderate_full]]

If I have moderate cognitive decline, I prefer treatment generally directed toward prolonging life and treating reversible illness, while minimizing avoidable disorientation and distress.

[[elif moderate_selective]]

If I have moderate cognitive decline, I prefer treatment of reversible conditions when the expected benefit is meaningful and the burden of treatment, transfer, restraint, sedation, or hospitalization is not disproportionate to that benefit.

[[elif moderate_comfort]]

If I have moderate cognitive decline, I prefer care primarily focused on comfort, symptom relief, familiar surroundings, and avoidance of burdensome interventions intended mainly to prolong life.

[[end]]

## Advanced Cognitive Decline

[[if advanced_full]]

If I have advanced cognitive decline, I prefer medically appropriate treatment generally directed toward prolonging life, subject to my controlling health-care directive and any valid medical orders.

[[elif advanced_selective]]

If I have advanced cognitive decline, I prefer treatment of conditions that can reasonably be expected to restore me to my prior level of function or relieve substantial suffering, while avoiding interventions whose burdens are disproportionate to likely benefit.

[[elif advanced_comfort]]

If I have advanced cognitive decline, I prefer comfort-focused care and relief of pain, breathlessness, anxiety, agitation, and other distress rather than interventions whose primary purpose is prolonging life.

[[end]]

# Specific Treatment and Care Preferences

## Hospital Transfer

[[if hosp_beneficial]]

I permit hospital transfer when my health-care agent and treating professionals reasonably believe hospitalization is likely to provide a meaningful benefit consistent with my selected goals of care.

[[elif hosp_limit]]

I prefer treatment in my current residence or care setting when reasonably available and consistent with safe, effective care, and prefer to avoid hospital transfer when the likely benefit is limited or the transfer is expected to cause substantial distress or disorientation.

[[end]]

## Antibiotics and Treatment of Infections

[[if infect_ordinary]]

I prefer ordinary treatment of infections when medically appropriate.

[[elif infect_selective]]

I prefer treatment of infections when treatment is reasonably expected to improve comfort or restore meaningful function, but permit my agent to decline burdensome treatment when it would primarily prolong the dying process or conflict with my selected goals of care.

[[elif infect_comfort]]

During advanced cognitive decline, I prefer treatment directed to comfort and symptom relief rather than antimicrobial treatment whose principal purpose is life prolongation, to the extent permitted by my controlling directive and applicable law.

[[end]]

## Artificial Nutrition and Hydration

My legally operative instructions concerning feeding tubes, artificial nutrition, artificial hydration, and related life-sustaining treatment are governed by my controlling Advance Health Care Directive and applicable law.

[[if anh_guidance]]

As additional guidance in the setting of advanced cognitive decline, I state: {{anh_text}}

[[end]]

[[if burdensome_guidance]]

## Surgery, Intensive Care, and Other Burdensome Treatment

When authorized to decide, my health-care agent should weigh whether surgery, intensive care, mechanical ventilation, invasive testing, physical restraint, or comparable burdensome intervention is likely to restore meaningful function or materially improve comfort, considering my selected stage-specific goals of care. {{burdensome_text}}

[[end]]

## Pain, Agitation, Anxiety, and Other Distress

I request appropriate treatment of pain, breathlessness, agitation, anxiety, fear, and other distress. I permit reasonable symptom-relief measures consistent with applicable law and my controlling health-care directive, even when such measures may involve sedation or other side effects, provided the purpose is relief of suffering and not the intentional causing of death.

# Living Environment and Personal Care Priorities

[[if any_setting]]

## Preferred Care Setting

[[if home_pref]]

I prefer to remain at home, or in the most home-like and familiar setting reasonably available, for as long as my needs can be safely and practically met there.

[[end]]
[[if memory_care_ok]]

I accept assisted living, memory care, skilled nursing, or another residential care setting when reasonably necessary for safety, care needs, or caregiver sustainability.

[[end]]
[[end]]

[[if routines_yes]]

## Familiar People, Routines, and Activities

I ask caregivers to preserve, when reasonably possible, the following people, routines, activities, music, foods, spiritual practices, cultural practices, pets, or other sources of familiarity and comfort: {{routines_text}}

[[end]]

## Safety and Independence

I ask that restrictions on movement, activities, residence, communication, or personal choices be no greater than reasonably necessary for safety and care, recognizing that I value dignity, privacy, familiar relationships, and participation in daily life.

# Agent Guidance, Changed Circumstances, and Medical Orders

## Use of Preferences by Agent

These Care Preferences are intended to reduce uncertainty, not eliminate reasonable judgment. When circumstances were not anticipated, my health-care agent should choose the course the agent reasonably believes most closely reflects my expressed wishes and values, subject to applicable law and the agent's legal duties.

## Changed or Later-Expressed Wishes

A later valid directive, medical order, or capable expression by me may modify or supersede an earlier preference to the extent provided by applicable law. My health-care agent and providers should use the most current legally effective information reasonably available.

[[if polst_yes]]

## POLST and Comparable Medical Orders

When my condition makes a POLST, MOLST, POST, DNR order, or similar portable medical order appropriate, I encourage my health-care agent and treating professionals to discuss whether such an order should be completed or updated so that current medical orders are consistent with my goals and controlling health-care directive.

[[end]]

## No Assisted-Death Authorization

Nothing in these Care Preferences independently authorizes medical aid in dying, euthanasia, assisted suicide, or any act prohibited by applicable law. Any separately lawful end-of-life option is governed only by the law and procedures specifically applicable to that option.

# Execution

## Attachment to My Health-Care Directive

These Care Preferences should be attached to, and read together with, my state-compliant Advance Health Care Directive, so that its execution formalities and health-care-agent framework remain controlling. They do not require a separate witness or notary block of their own.

## Principal Signature

I sign these Care Preferences to record my present wishes and values concerning future care in the event of substantial cognitive decline.

@line Date: ____________________

@sign {{name}}, Principal
`;

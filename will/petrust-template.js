window.PETRUST_TEMPLATE = String.raw`
// ==========================================================================
//  TOVAKIN  |  COMPANION ANIMAL TRUST (pet trust): a revocable trust for the care of the Trustmaker's animals
//  Made 20 Nov 2026 to match the Revocable Living Trust (will/trust-template.js): same title block, same
//  defined terms (Trust Agreement, Trustmaker, Trustee, Trust Estate, Incapacity), same governing-law and
//  execution sections, and the living trust's own state signing page ([[include trust_execution]]).
//  It follows the state statutes on trusts for the care of animals (most are based on Uniform Trust Code
//  408 or Uniform Probate Code 2-907). What differs by state -- the statute citation, which animals the
//  trust may cover, and how long it may last -- comes from PET_TRUST_LAW in js/will.js.
//  Same template rules as will/will-template.js (see the notes at the top of that file).
//  DRAFT: review every word before turning off the preview mark.
// ==========================================================================
@set draft_watermark = yes
@set draft_label = Preview - Not for Signing

[[if trust_starts_with_the=YES]]
@center **TRUST AGREEMENT FOR**
[[else]]
@center **TRUST AGREEMENT FOR THE**
[[end]]

@center **{{trust_name}}**

This Companion Animal Trust Agreement (the "Trust Agreement") is made by {{name}} (the "Trustmaker").

The Trustmaker creates this trust for the care of the Trustmaker's animals. The trust created by this Trust Agreement shall be known as {{trust_name}} (the "Trust").

# TRUST CREATION

## Declaration of Capacity

The Trustmaker executes this Trust Agreement freely and voluntarily and declares that the Trustmaker is at least eighteen (18) years of age, possesses the legal capacity to create this Trust, understands the nature and effect of this Trust Agreement, and intends to establish the Trust according to its terms.

## Nature of the Trust

This Trust is a trust for the care of animals under the laws of {{state}}, including {{pet_statute}}, and shall be construed to be valid and enforceable under those laws to the fullest extent possible.

## Trust Purposes

The purposes of this Trust are:

(a) to hold and manage the Trust Estate during the Trustmaker's lifetime;

(b) to provide for the care of the Covered Animals during any period of the Trustmaker's Incapacity; and

(c) to provide for the care, maintenance, health, and comfort of each Covered Animal for the rest of its life after the Trustmaker's death.

Whenever this Trust Agreement refers to the "purposes of this Trust," it refers to the purposes stated in this Section. No part of the Trust Estate may be used for any other purpose, except as this Trust Agreement or applicable law allows.

## Effective Date

This Trust is established, and this Trust Agreement becomes effective, when the Trustmaker signs this Trust Agreement and property is transferred to or otherwise held by the Trustee as Trust property.

## Trust Property

The Trust Estate consists of {{initial_funding}}, which the Trustmaker transfers to the Trustee when signing this Trust Agreement, and all property later transferred to or acquired by the Trust.

## Initial Trustee

The Trustmaker shall serve as the initial Trustee.

The Trustmaker accepts the office of Trustee and shall hold, administer, and distribute the Trust Estate according to this Trust Agreement.

## Governing Law

This Trust shall be governed by the laws of {{state}}, except to the extent federal law controls.

# REVOCATION AND AMENDMENT

## Right to Revoke or Amend

During the Trustmaker's lifetime, and while the Trustmaker is not Incapacitated, the Trustmaker may revoke or amend this Trust Agreement, in whole or in part, by a signed writing delivered to the Trustee then serving.

## Withdrawal of Property

During the same period, the Trustmaker may withdraw any part of the Trust Estate by a signed writing delivered to the Trustee then serving.

## Irrevocability After Death

Upon the Trustmaker's death, this Trust becomes irrevocable and may not be amended, except as applicable law allows.

# THE ANIMALS

## Covered Animals {#animals}

The animals cared for under this Trust (the "Covered Animals") are:

[[each animals]]
- {{animal_line}}
[[end]]

The Covered Animals also include any other animal owned by the Trustmaker at the time of the Trustmaker's death or Incapacity, to the extent permitted by {{pet_statute}}.

## Care Standard

Each Covered Animal shall receive a standard of care, comfort, and companionship reasonably comparable to that provided by the Trustmaker, including food, shelter, exercise, grooming, and routine and emergency veterinary care.

[[if has_care_instructions]]
## The Trustmaker's Instructions for Care

The Trustmaker requests that the Caregiver and the Trustee follow these instructions as closely as reasonably practicable:

{{care_instructions}}
[[end]]

[[if has_vet]]
## Veterinarian

The Trustmaker's veterinarian is {{vet}}. The Caregiver may continue with that veterinarian or choose another licensed veterinarian.
[[end]]

# THE CAREGIVER

## Appointment of Caregiver

Upon the Trustmaker's death or Incapacity, the Trustee shall deliver the Covered Animals to {{caregiver}} (the "Caregiver"), if {{caregiver}} is able and willing to care for them.[[if has_alt_caregiver]] If {{caregiver}} is unable or unwilling to serve or stops serving, the Trustee shall deliver the Covered Animals to {{alt_caregiver}}, who shall then be the Caregiver.[[end]]

## If No Named Caregiver Serves

If no person named as Caregiver is able and willing to serve, the Trustee shall place each Covered Animal with a person or organization that the Trustee reasonably believes will provide it a good home and appropriate care, and that person or organization shall then be the Caregiver. The Trustee may place the Covered Animals together or separately, as the Trustee believes best serves their welfare.

## Visits

The Trustee and the Enforcer may, on reasonable notice, visit the Covered Animals to confirm that they are receiving appropriate care.

# THE TRUSTEE

## Successor Trustee

Upon the Trustmaker's death, Incapacity, or resignation as Trustee, {{trustee}} shall serve as successor Trustee.[[if has_alt_trustee]] If {{trustee}} is unable or unwilling to serve or stops serving, {{alt_trustee}} shall serve as successor Trustee.[[end]]

If no named Trustee is able and willing to serve, the Enforcer may appoint a successor Trustee by a signed writing. If the Enforcer does not do so, a court of competent jurisdiction may appoint a successor Trustee.

## Payments for Care

The Trustee shall pay from the Trust Estate the reasonable costs of caring for the Covered Animals, either to the Caregiver as reimbursement or directly to the provider. These costs include food, supplies, grooming, boarding, training, medication, pet insurance, and routine and emergency veterinary care.

[[if has_caregiver_pay]]
## Payment to the Caregiver

In addition to the costs of care, the Trustee shall pay the Caregiver {{caregiver_pay}} each month for the Caregiver's services, for as long as the Caregiver cares for at least one Covered Animal and to the extent the Trust Estate is sufficient after paying the costs of care.
[[end]]

## Trustee Compensation

[[if trustee_paid]]
The Trustee shall be entitled to reasonable compensation for services as Trustee and to reimbursement of reasonable expenses properly incurred.
[[else]]
The Trustee shall serve without compensation but shall be reimbursed for reasonable expenses properly incurred.
[[end]]

## Bond

No Trustee shall be required to furnish bond, to the extent permitted by applicable law.

## Records and Reports

The Trustee shall keep accurate records of the Trust Estate and of all receipts and payments. At least once each year after the Trustmaker's death or Incapacity, and when the Trust ends, the Trustee shall give the Enforcer a written report of the Trust Estate, the receipts and payments since the last report, and the condition and whereabouts of each Covered Animal.

## Trustee Powers

The Trustee shall have all powers conferred on trustees by the laws of {{state}}, to be exercised in a fiduciary capacity to carry out the purposes of this Trust, including the powers to hold, invest, and reinvest the Trust Estate, to keep cash in insured accounts, to pay expenses, and to sign any document needed to administer the Trust.

## Resignation

A Trustee may resign by giving written notice to the Enforcer and to the next successor Trustee named or appointed.

# THE ENFORCER

## Appointment of Enforcer

{{enforcer}} is appointed to enforce this Trust (the "Enforcer").[[if has_alt_enforcer]] If {{enforcer}} is unable or unwilling to serve or stops serving, {{alt_enforcer}} shall be the Enforcer.[[end]] If no named Enforcer is able and willing to serve, a court of competent jurisdiction may appoint a person to enforce this Trust, as applicable law provides.

## Role of the Enforcer

The Enforcer may receive the Trustee's reports, request information about the Trust Estate and the Covered Animals, and take any action, including a court proceeding, to enforce this Trust and to see that the Trust Estate is used only for the purposes of this Trust.[[if has_enforcer_note]] {{enforcer_note}}[[end]] The Enforcer shall serve without compensation but may be reimbursed from the Trust Estate for reasonable expenses of enforcement.

# FUNDING

## Additions to the Trust

The Trustmaker or any other person may add property to the Trust at any time, during the Trustmaker's lifetime or at death, by will, by beneficiary designation, or by transfer, if the Trustee accepts it. This includes any gift under the Trustmaker's will to the Trustee of this Trust.

[[if has_intended_amount]]
## Intended Amount

The Trustmaker intends that the Trust Estate be about {{intended_amount}} for the care of the Covered Animals. This statement of intent does not by itself transfer any property to the Trust.
[[end]]

## Property Exceeding What Is Needed

If a court determines that the value of the Trust Estate substantially exceeds the amount required to carry out the purposes of this Trust, the excess shall be distributed as provided in [[ref remainder]], to the extent the court and applicable law allow.

# TERMINATION

## When the Trust Ends

This Trust shall end upon the death of the last surviving Covered Animal[[if has_duration_limit]]{{duration_limit}}[[end]].

## Limit on Duration

If a rule against perpetuities or any other limit on the duration of trusts applies to this Trust under the laws of {{state}}, this Trust shall end no later than the last day permitted by that rule or limit, and the remaining Trust Estate shall then be distributed as provided in [[ref remainder]].

## Final Arrangements

When a Covered Animal dies, the Trustee may pay the reasonable costs of its [[if final=BURIAL]]burial[[elif final=CREMATION]]cremation[[else]]burial or cremation, as the Caregiver chooses[[end]].

## End-of-Life Care

A Covered Animal shall not be euthanized except on the written recommendation of a licensed veterinarian that euthanasia is necessary to relieve suffering from an illness or injury that cannot reasonably be treated.

## Distribution of Remaining Property {#remainder}

When this Trust ends, the Trustee shall distribute any remaining Trust Estate, after paying the final expenses of the Trust,
[[if remainder=PERSON]]
to {{remainder_name}}, if then living, and if not, to the Trustmaker's estate.
[[elif remainder=CHARITY]]
to {{remainder_name}}, or if that organization is not then in existence or is not then a charitable organization, to a charitable organization with similar purposes selected by the Trustee.
[[else]]
to the Trustmaker's estate, to pass under the Trustmaker's will or, if there is none, to the Trustmaker's heirs under the laws of {{state}}.
[[end]]

# DEFINITIONS AND GENERAL PROVISIONS

## Incapacity

A person is "Incapacitated" when the person is unable to effectively manage property or financial affairs, or to care for the Covered Animals, because of illness, injury, mental or physical condition, cognitive impairment, or other cause, as determined under applicable law, by a court of competent jurisdiction, or by the written opinion of a licensed physician. While the Trustmaker is Incapacitated, the Trustee shall administer this Trust for the care of the Covered Animals as provided for after the Trustmaker's death.

## No Interest of Others

No Caregiver, Trustee, Enforcer, or other person has any interest in the Trust Estate except as this Trust Agreement expressly provides. To the fullest extent permitted by applicable law, no interest in the Trust may be assigned or reached by creditors before it is distributed.

## Severability

If any provision of this Trust Agreement is held invalid or unenforceable, the remaining provisions shall continue in full force and effect.

## Headings

Article titles and section headings are provided solely for convenience and shall not affect the interpretation of this Trust Agreement.

## Gender and Number

Unless the context clearly requires otherwise, words used in the singular include the plural, words used in the plural include the singular, and words of one gender include every other gender.

# EXECUTION

## Execution

The Trustmaker executes this Trust Agreement as of the date stated below, in {{county_state}}, as Trustmaker and as initial Trustee, and declares that this instrument constitutes the Trustmaker's Companion Animal Trust.

The Trustmaker acknowledges having read this Trust Agreement, or having had it read and explained to the Trustmaker, and declares that it accurately reflects the Trustmaker's intentions.

@line Date: ______

@line Signature: ________________________________________________

@line {{name}}, Trustmaker and Initial Trustee

[[include trust_execution]]
[[pagebreak]]

@center **ACCEPTANCES**

These acceptances are optional when the Trust Agreement is signed. A person named here may also accept later, by signing below or by a separate signed writing.

@sub Successor Trustee

I have read {{trust_name}} and agree to serve as successor Trustee when called on to do so.

@line Date: ______________________

@line Signature: ________________________________________________

@line {{trustee}}, Successor Trustee

@sub Caregiver

I have read {{trust_name}} and agree to care for the Covered Animals when called on to do so.

@line Date: ______________________

@line Signature: ________________________________________________

@line {{caregiver}}, Caregiver

@sub Enforcer

I have read {{trust_name}} and agree to serve as Enforcer.

@line Date: ______________________

@line Signature: ________________________________________________

@line {{enforcer}}, Enforcer
`;

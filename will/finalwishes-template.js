window.FINALWISHES_TEMPLATE = String.raw`
// ==========================================================================
//  TOVAKIN  |  FINAL WISHES
//  A STATEMENT OF WISHES ONLY (19 Oct 2026, Greg). It no longer appoints anyone to control disposition
//  of remains: that appointment is what each state regulates with its own form, witnesses or notary
//  (and Mississippi and South Carolina require state forms), so it was taken out, along with the
//  state-specific provisions and signing sections that only served it. One version now serves every
//  state; the person signs and dates it. The old state text is still in will/finalwishes-state-text.js,
//  unused, and the earlier template is in git history.
// ==========================================================================
@set draft_watermark = yes
@set draft_label = Preview - Not for Signing

@center **FINAL WISHES**

# STATEMENT OF FINAL WISHES

## Purpose

{{name}} (the “Declarant”) states the following wishes concerning the care and disposition of the Declarant's remains and the arrangements following death, to guide the Declarant's family and the persons who make those arrangements.

## Nature of These Wishes

These Final Wishes are a statement of the Declarant's wishes. They do not appoint any person to control the disposition of the Declarant's remains. The person who has authority under applicable law to make those decisions is asked to follow these wishes as closely as reasonably practicable.

## No Change to Estate Distributions

These Final Wishes do not dispose of property under the Declarant's trust or will, change a beneficiary designation, or alter any fiduciary's powers.

[[if has_disposition]]
# DISPOSITION OF REMAINS

## The Declarant's Wishes

[[if disposition=BURIAL]]

The Declarant wishes to be buried.

[[elif disposition=CREMATION]]

The Declarant wishes to be cremated.

[[elif disposition=GREEN_BURIAL]]

The Declarant wishes to have a natural or green burial, to the extent lawful and reasonably available.

[[elif disposition=DONATION]]

The Declarant wishes to donate the Declarant's body for anatomical, medical, educational, or scientific purposes, to the extent separately authorized and accepted under applicable law.

[[elif disposition=OTHER]]

The Declarant states the following wish concerning disposition of remains: {{disposition_other_text}}.

[[elif disposition=NO_PREFERENCE]]

The Declarant does not state a preference concerning the method of disposition and leaves that decision to the person who has authority under applicable law to make it.

[[end]]

[[if has_location]]
## Place of Disposition

If reasonably practicable, the Declarant would like burial, interment, scattering, placement, donation, or other disposition to occur at or in connection with: {{location}}.

[[end]]
[[if has_remains_details]]
## Additional Wishes Concerning Remains

The Declarant states the following additional wishes concerning the Declarant's remains: {{remains_details}}.

[[end]]
## Practical Limits

These wishes are subject to applicable law and reasonable practical limits, including availability, timing, public-health requirements, and available funds. The person making the arrangements may make only those adjustments reasonably necessary to carry out the Declarant's wishes as closely as practicable.

[[end]]
[[if has_service]]
# FUNERAL, MEMORIAL, AND PERSONAL WISHES

## Funeral, Memorial, or Celebration

[[if service=FUNERAL]]

The Declarant would like a funeral service.

[[elif service=MEMORIAL]]

The Declarant would like a memorial service.

[[elif service=CELEBRATION]]

The Declarant would like a celebration of life.

[[elif service=NONE]]

The Declarant would like no formal funeral, memorial service, or celebration of life to be held.

[[elif service=NO_PREFERENCE]]

The Declarant leaves the nature of any funeral, memorial, celebration, or gathering to the person arranging it.

[[end]]

[[if has_service_details]]
## Additional Service Details

The Declarant expresses the following additional wishes concerning any service or gathering: {{service_details}}.

[[end]]
[[end]]
[[if has_personal_requests]]
## Personal Requests

The Declarant expresses the following additional personal requests concerning final arrangements: {{personal_requests}}.

[[end]]
[[if has_prepaid_or_records]]
# PREARRANGEMENTS AND RECORDS

[[if has_prepaid]]
## Prearranged or Prepaid Arrangements

The Declarant has indicated that funeral, burial, cremation, cemetery, memorial, donation, or related arrangements may have been made or prepaid with {{provider}}, located at {{provider_location}}, reference {{reference}}. The person handling final arrangements should contact the identified provider to determine the current terms and status of any arrangement.

[[end]]
[[if has_document_location]]
## Location of Supporting Records

Supporting records concerning the Declarant's final arrangements may be located at: {{document_location}}.

[[end]]
[[end]]
# SIGNATURE

## Declarant Signature

The Declarant signs these Final Wishes to confirm the wishes stated in them.

@line Dated: {{signing_date}}

@line ________________________________________
@line {{name}}, Declarant
`;

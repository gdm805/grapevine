window.FINALWISHES_TEMPLATE = String.raw`
// ==========================================================================
//  GRAPEVINE  |  FINAL WISHES
//  Drafted from your national baseline (Grapevine_Final_Wishes_National_Master_Single_V7...docx)
//  plus your 51 controlled Final_Wishes_<State>.docx files. Articles One through Five (this
//  document's actual wishes and preferences) are word-for-word identical across all 51 of your
//  state files -- only Article Six/Seven's state routing note and execution formalities vary,
//  taken word for word from each state's own controlled file. See will/finalwishes-state-text.js
//  for that, and will/NOTES-ON-YOUR-FINAL-WISHES.txt for what was left out and why (including the
//  two states your own source material flags as needing a form Grapevine doesn't have on file).
// ==========================================================================
@set draft_watermark = yes
@set draft_label = SAMPLE - NOT FOR SIGNING

@center **FINAL WISHES**

# GENERAL DECLARATION OF FINAL WISHES

## Purpose

{{name}} (the “Declarant”) makes the following directions and states the following wishes concerning the care and disposition of the Declarant's remains and the arrangements following death. These provisions are intended to express and, to the extent permitted by applicable law, carry out the Declarant's directions and wishes.

## Governing Law

These Final Wishes shall be interpreted and given effect under the law governing disposition of the Declarant's remains.

## No Change to Estate Distributions

These Final Wishes do not dispose of property under the Declarant's trust or will, change a beneficiary designation, or alter a fiduciary's powers except to the limited extent that applicable law gives a designated person authority over disposition of remains or final arrangements.

# DISPOSITION OF REMAINS

## Declarant's Direction

[[if has_disposition]]

The Declarant directs or, where applicable law treats the following as nonbinding, expresses the preference that the Declarant's remains be handled as follows:

[[if disposition=BURIAL]]

The Declarant prefers burial.

[[elif disposition=CREMATION]]

The Declarant prefers cremation.

[[elif disposition=GREEN_BURIAL]]

The Declarant prefers natural or green burial, to the extent lawful and reasonably available.

[[elif disposition=DONATION]]

The Declarant prefers donation of the Declarant's body for anatomical, medical, educational, or scientific purposes to the extent separately authorized and accepted under applicable law.

[[elif disposition=OTHER]]

The Declarant states the following other preference concerning disposition of remains: {{disposition_other_text}}.

[[elif disposition=NO_PREFERENCE]]

The Declarant does not state a preference concerning the method of disposition and leaves that decision to the person legally authorized to control disposition of the Declarant's remains.

[[end]]

[[end]]

## Place of Disposition

[[if has_location]]

If reasonably practicable, the Declarant prefers that burial, interment, scattering, placement, donation, or other disposition occur at or in connection with: {{location}}.

[[end]]

## Additional Instructions Concerning Remains

[[if has_remains_details]]

The Declarant states the following additional instructions concerning the Declarant's remains: {{remains_details}}.

[[end]]

## Practical and Lawful Performance

A direction is subject to applicable law and reasonable practical limits, including availability, timing, public-health requirements, and available funds. A person acting under this document may make only those adjustments reasonably necessary to carry out the Declarant's intent as closely as practicable.

# FUNERAL, MEMORIAL, AND PERSONAL WISHES

## Funeral, Memorial, or Celebration

[[if has_service]]

[[if service=FUNERAL]]

The Declarant prefers a funeral service.

[[elif service=MEMORIAL]]

The Declarant prefers a memorial service.

[[elif service=CELEBRATION]]

The Declarant prefers a celebration of life.

[[elif service=NONE]]

The Declarant prefers that no formal funeral, memorial service, or celebration of life be held.

[[elif service=NO_PREFERENCE]]

The Declarant leaves the nature of any funeral, memorial, celebration, or gathering to the person arranging it.

[[end]]

[[end]]

## Additional Service Details

[[if has_service_details]]

The Declarant expresses the following additional wishes concerning any service or gathering: {{service_details}}.

[[end]]

## Personal Requests

[[if has_personal_requests]]

The Declarant expresses the following additional personal requests concerning final arrangements: {{personal_requests}}.

[[end]]

# PREARRANGEMENTS AND RECORDS

## Prearranged or Prepaid Arrangements

[[if has_prepaid]]

The Declarant has indicated that funeral, burial, cremation, cemetery, memorial, donation, or related arrangements may have been made or prepaid with {{provider}}, located at {{provider_location}}, reference {{reference}}. The person handling final arrangements should contact the identified provider to determine the current terms and status of any arrangement.

[[end]]

## Location of Supporting Records

[[if has_document_location]]

Supporting records concerning the Declarant's final arrangements may be located at: {{document_location}}.

[[end]]

# PERSON AUTHORIZED TO CONTROL DISPOSITION

## Designation

[[if has_agent]]

To the extent permitted by applicable law, the Declarant designates {{agent_name}} to control disposition of the Declarant's remains and final arrangements, subject to the directions stated in this document.

[[if has_alt_agent]]

If that person cannot or will not serve, the Declarant designates {{alt_agent_name}} as successor.

[[end]]

[[end]]

## No Designation

[[if no_agent]]

If the Declarant has not made an effective designation of a person to control disposition, applicable law will determine authority.

[[end]]

# STATE-SPECIFIC PROVISIONS

## Governing State Provisions

The provisions of this Article apply under the law of the Declarant's governing state and control over any inconsistent general language in this document.

[[include finalwishes_state]]

# EXECUTION

## Declarant Signature

The Declarant signs these Final Wishes to confirm the directions, wishes, and appointments stated in this instrument.

@line Dated: {{signing_date}}

@line ________________________________________
@line {{name}}, Declarant

[[include finalwishes_execution]]
`;

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

The Trustmaker makes the following directions and states the following wishes concerning the care and disposition of the Trustmaker's remains and the arrangements following death. These provisions are intended to express and, to the extent permitted by applicable law, carry out the Trustmaker's directions and wishes.

## Governing Law

These Final Wishes shall be interpreted and given effect under the law governing disposition of the Trustmaker's remains.

## No Change to Estate Distributions

These Final Wishes do not dispose of property under the Trustmaker's trust or will, change a beneficiary designation, or alter a fiduciary's powers except to the limited extent that applicable law gives a designated person authority over disposition of remains or final arrangements.

# DISPOSITION OF REMAINS

## Trustmaker's Direction

[[if has_disposition]]

The Trustmaker directs or, where applicable law treats the following as nonbinding, expresses the preference that the Trustmaker's remains be handled as follows:

[[if disposition=BURIAL]]

The Trustmaker prefers burial.

[[elif disposition=CREMATION]]

The Trustmaker prefers cremation.

[[elif disposition=GREEN_BURIAL]]

The Trustmaker prefers natural or green burial, to the extent lawful and reasonably available.

[[elif disposition=DONATION]]

The Trustmaker prefers donation of the Trustmaker's body for anatomical, medical, educational, or scientific purposes to the extent separately authorized and accepted under applicable law.

[[elif disposition=OTHER]]

The Trustmaker states the following other preference concerning disposition of remains: {{disposition_other_text}}.

[[elif disposition=NO_PREFERENCE]]

The Trustmaker does not state a preference concerning the method of disposition and leaves that decision to the person legally authorized to control disposition of the Trustmaker's remains.

[[end]]

[[end]]

## Place of Disposition

[[if has_location]]

If reasonably practicable, the Trustmaker prefers that burial, interment, scattering, placement, donation, or other disposition occur at or in connection with: {{location}}.

[[end]]

## Additional Instructions Concerning Remains

[[if has_remains_details]]

The Trustmaker states the following additional instructions concerning the Trustmaker's remains: {{remains_details}}.

[[end]]

## Practical and Lawful Performance

A direction is subject to applicable law and reasonable practical limits, including availability, timing, public-health requirements, and available funds. A person acting under this document may make only those adjustments reasonably necessary to carry out the Trustmaker's intent as closely as practicable.

# FUNERAL, MEMORIAL, AND PERSONAL WISHES

## Funeral, Memorial, or Celebration

[[if has_service]]

[[if service=FUNERAL]]

The Trustmaker prefers a funeral service.

[[elif service=MEMORIAL]]

The Trustmaker prefers a memorial service.

[[elif service=CELEBRATION]]

The Trustmaker prefers a celebration of life.

[[elif service=NONE]]

The Trustmaker prefers that no formal funeral, memorial service, or celebration of life be held.

[[elif service=NO_PREFERENCE]]

The Trustmaker leaves the nature of any funeral, memorial, celebration, or gathering to the person arranging it.

[[end]]

[[end]]

## Additional Service Details

[[if has_service_details]]

The Trustmaker expresses the following additional wishes concerning any service or gathering: {{service_details}}.

[[end]]

## Personal Requests

[[if has_personal_requests]]

The Trustmaker expresses the following additional personal requests concerning final arrangements: {{personal_requests}}.

[[end]]

# PREARRANGEMENTS AND RECORDS

## Prearranged or Prepaid Arrangements

[[if has_prepaid]]

The Trustmaker has indicated that funeral, burial, cremation, cemetery, memorial, donation, or related arrangements may have been made or prepaid with {{provider}}, located at {{provider_location}}, reference {{reference}}. The person handling final arrangements should contact the identified provider to determine the current terms and status of any arrangement.

[[end]]

## Location of Supporting Records

[[if has_document_location]]

Supporting records concerning the Trustmaker's final arrangements may be located at: {{document_location}}.

[[end]]

# PERSON AUTHORIZED TO CONTROL DISPOSITION

## Designation

[[if has_agent]]

To the extent permitted by applicable law, the Trustmaker designates {{agent_name}} to control disposition of the Trustmaker's remains and final arrangements, subject to the directions stated in this document.

[[if has_alt_agent]]

If that person cannot or will not serve, the Trustmaker designates {{alt_agent_name}} as successor.

[[end]]

[[end]]

## No Designation

[[if no_agent]]

If the Trustmaker has not made an effective designation of a person to control disposition, applicable law will determine authority.

[[end]]

# STATE-SPECIFIC PROVISIONS

## State Route Controls

Only the provisions for the Trustmaker's governing state shall render. The selected state route controls over inconsistent general language in this document. State-specific execution language is supplied through Grapevine's State Execution Library.

[[include finalwishes_state]]

# EXECUTION

## Trustmaker Signature

The Trustmaker signs these Final Wishes to confirm the directions, wishes, and appointments stated in this instrument.

@line Dated: {{signing_date}}

@line ________________________________________
@line {{name}}, Trustmaker

[[include finalwishes_execution]]
`;

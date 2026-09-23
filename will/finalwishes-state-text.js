window.FINALWISHES_SHARED = window.FINALWISHES_SHARED || {};
// ==========================================================================
//  GRAPEVINE  |  FINAL WISHES  |  STATE-SPECIFIC PROVISIONS
//  Taken word for word from each state's own controlled Final_Wishes_<State>.docx file. Two
//  named blocks, spliced into will/finalwishes-template.js via [[include finalwishes_state]]
//  (the short Article Six note explaining how that state routes disposition authority) and
//  [[include finalwishes_execution]] (the actual signature/witness/notary formalities, in
//  Article Seven). Mississippi and South Carolina are NOT offered here -- your own source
//  material flags both as needing a state-prescribed form/route Grapevine doesn't have on file
//  (a [[HARD_STOP]] in the coder notes, not a judgment call) -- see
//  will/NOTES-ON-YOUR-FINAL-WISHES.txt. Where a state permits more than one execution method
//  (for example, one witness OR a notary), Grapevine defaults to the notary route, matching the
//  choice your own 51 controlled state files already made -- these are not a Grapevine
//  simplification, they're what your controlled files actually contain.
// ==========================================================================
window.FINALWISHES_SHARED['finalwishes_state'] = String.raw`
[[if signing_state=ALABAMA]]
The Trustmaker intends the directions in this instrument to be considered together with any Alabama-compliant designation of an authorizing agent. The state execution route controls any operative appointment.

[[elif signing_state=ALASKA]]
The Trustmaker intends this instrument to state final-disposition directions and, if selected, to designate the person authorized to carry them out under Alaska law.

[[elif signing_state=ARIZONA]]
The Trustmaker intends these written final-disposition directions to be effective under Arizona law. If authority is conferred on a health-care agent in another Grapevine instrument, that appointment controls over any inconsistent designation here.

[[elif signing_state=ARKANSAS]]
The Trustmaker intends this instrument to operate as the Trustmaker's written declaration concerning final disposition to the fullest extent permitted by Arkansas law.

[[elif signing_state=CALIFORNIA]]
The Trustmaker intends these written directions to be followed to the fullest extent permitted by California law, subject to applicable requirements concerning definiteness, payment, and lawful performance.

[[elif signing_state=COLORADO]]
The Trustmaker intends the disposition directions and any selected designee in this instrument to be given effect under Colorado law.

[[elif signing_state=CONNECTICUT]]
The Trustmaker intends these written directions and any selected disposition agent to be given effect under Connecticut law, subject to Connecticut execution requirements.

[[elif signing_state=DELAWARE]]
The Trustmaker intends this instrument to state the Trustmaker's directions concerning disposition and ceremonial arrangements and, if selected, to designate the person authorized to act.

[[elif signing_state=DISTRICT_COLUMBIA]]
The Trustmaker intends this dated and signed written instrument to state final-disposition directions and, if applicable, designate a disposition representative under District of Columbia law.

[[elif signing_state=FLORIDA]]
The Trustmaker states these written inter vivos directions concerning final disposition. If no separate legally effective appointment controls, authority shall be determined under Florida law.

[[elif signing_state=GEORGIA]]
Disposition authority is coordinated with the Trustmaker's Georgia advance directive for health care. These Final Wishes state the Trustmaker's directions and do not create a conflicting second appointment unless expressly permitted and selected.

[[elif signing_state=HAWAII]]
The Trustmaker intends any designation of a person to control disposition to be effective only through the Hawaii-compliant execution route rendered with this instrument.

[[elif signing_state=IDAHO]]
If disposition authority is granted in the Trustmaker's health-care power of attorney or durable power of attorney, that express grant controls. These Final Wishes state the Trustmaker's directions and preferences.

[[elif signing_state=ILLINOIS]]
The Trustmaker intends this instrument to state final-disposition directions and any selected delegation of authority under the Illinois Disposition of Remains Act, subject to the Illinois execution route.

[[elif signing_state=INDIANA]]
Any operative Indiana funeral-planning declaration shall be rendered as the separate declaration contained in this document. The national Final Wishes portion remains the Trustmaker's substantive statement of wishes.

[[elif signing_state=IOWA]]
Any operative Iowa appointment of a final-disposition designee shall be rendered as the separate declaration contained in this document. The Trustmaker's substantive wishes remain stated in the national Final Wishes portion.

[[elif signing_state=KANSAS]]
If the Trustmaker grants final-disposition authority to a health-care agent, the express grant in the applicable health-care power of attorney controls. These Final Wishes state the Trustmaker's directions and preferences.

[[elif signing_state=KENTUCKY]]
Any operative Kentucky Funeral Planning Declaration shall be rendered as the separate declaration contained in this document and executed under the Kentucky-specific route.

[[elif signing_state=LOUISIANA]]
Any designation of a person to control disposition shall be effective only if made through a Louisiana-recognized notarial or testamentary route. These Final Wishes state the Trustmaker's directions and preferences.

[[elif signing_state=MAINE]]
The Trustmaker intends any selected person to have custody and control of the Trustmaker's remains to the extent provided by Maine law and the state-specific execution route.

[[elif signing_state=MARYLAND]]
The Trustmaker intends these written final-disposition directions and any selected agent designation to be effective under Maryland law subject to the Maryland witness requirements.

[[elif signing_state=MASSACHUSETTS]]
The Trustmaker intends these written final-arrangement wishes to be followed to the fullest extent recognized under Massachusetts law, subject to any controlling preneed agreement or other lawful arrangement. Any Will or estate-administration route controlling authority remains separate.

[[elif signing_state=MICHIGAN]]
If the Trustmaker designates a Funeral Representative, the designation shall be effective only through the Michigan-compliant execution route. The Funeral Representative shall follow the lawful written directions stated here.

[[elif signing_state=MINNESOTA]]
The Trustmaker intends any selected controller and these final-disposition directions to be evidenced by this dated written instrument and executed through the Minnesota route.

[[elif signing_state=MISSISSIPPI]]
These Final Wishes state the Trustmaker's directions concerning final arrangements. Any operative disposition-agent or priority language shall be supplied only by the current Mississippi Self-Directed Disposition Authorization route validated for the production date.

[[elif signing_state=MISSOURI]]
If the Trustmaker grants right-of-sepulcher or final-disposition authority in a durable power of attorney, that express grant controls. These Final Wishes state the Trustmaker's directions and preferences.

[[elif signing_state=MONTANA]]
Any designation of another person to control final disposition shall be effective only through the Montana-compliant written instrument and execution route. Separate written disposition directions are subject to Montana witness requirements.

[[elif signing_state=NEBRASKA]]
The Trustmaker intends these final-disposition directions to be carried out through the Nebraska-recognized affidavit route rendered with this instrument.

[[elif signing_state=NEVADA]]
If the Trustmaker selects a person to order burial or cremation, the designation shall be effective through the Nevada-specific affidavit route rendered with this instrument.

[[elif signing_state=NEW_HAMPSHIRE]]
The Trustmaker intends any selected person to have custody and control of the Trustmaker's remains to the extent provided by New Hampshire law and this signed designation.

[[elif signing_state=NEW_JERSEY]]
Any appointment of a person to control final disposition shall be rendered only through the New Jersey board-approved appointment route. These Final Wishes state the Trustmaker's substantive directions and preferences.

[[elif signing_state=NEW_MEXICO]]
The Trustmaker intends these written final-disposition directions to be followed under New Mexico law. If cremation is selected, the New Mexico cremation-direction execution route controls. No broad generic disposition-agent appointment is created by this document.

[[elif signing_state=NEW_YORK]]
Any appointment of an agent to control disposition shall be rendered through the New York statutory Appointment of Agent to Control Disposition of Remains architecture, including successor and acceptance provisions.

[[elif signing_state=NORTH_CAROLINA]]
The Trustmaker intends these final-disposition directions and any authorized delegation to operate through the North Carolina statutory hierarchy. Any separate written-statement route is subject to the North Carolina witness requirements.

[[elif signing_state=NORTH_DAKOTA]]
The Trustmaker intends this signed and dated written statement to direct lawful disposition and, when applicable, to assign the duty of final disposition to the person identified in this instrument.

[[elif signing_state=OHIO]]
Any appointment of a representative for disposition shall be rendered through the Ohio statutory written-declaration architecture, including required content, successor provisions, preferences, and execution.

[[elif signing_state=OKLAHOMA]]
The Trustmaker intends these directions and any representative appointment to operate only through the Oklahoma-compliant written and witnessed route or other controlling state-recognized instrument.

[[elif signing_state=OREGON]]
Any appointment of a person to make decisions concerning disposition of remains shall be rendered through the Oregon statutory or substantially similar appointment route, with lawful written directions preserved.

[[elif signing_state=PENNSYLVANIA]]
These Final Wishes preserve the Trustmaker's written directions and evidence of intent. Any disposition authority created through a Will or other Pennsylvania-recognized route remains governed by that separate instrument and applicable law.

[[elif signing_state=RHODE_ISLAND]]
Any appointment of a Funeral Planning Agent shall be rendered through the Rhode Island statutory designation architecture, including the required agent acceptance and execution package.

[[elif signing_state=SOUTH_CAROLINA]]
Any operative designation for cremation or disposition shall be made through a Will or a separately approved South Carolina verified-and-attested document. These Final Wishes preserve the Trustmaker's directions without converting a bare signature into a statutory appointment.

[[elif signing_state=SOUTH_DAKOTA]]
Any designation of another person to control final disposition shall be rendered through the South Dakota notarized affidavit route. Specific lawful directions may be attached to the affidavit.

[[elif signing_state=TENNESSEE]]
The Trustmaker intends these written final-disposition directions to operate under Tennessee law. If no controlling directions or pre-need arrangement exists, the applicable statutory priority remains separate.

[[elif signing_state=TEXAS]]
Any appointment of an agent for disposition of remains shall be rendered through the Texas statutory appointment architecture, including successor-agent logic and the required acceptance before an agent acts.

[[elif signing_state=UTAH]]
The Trustmaker intends these written directions and any selected first-priority designee to operate through the Utah disposition route. An ordinary power of attorney that terminates at death is not substituted for this designation.

[[elif signing_state=VERMONT]]
Disposition-of-remains and funeral-goods or funeral-services instructions are routed through the Vermont advance-directive architecture. This Final Wishes output does not create a competing standalone disposition-agent instrument.

[[elif signing_state=VIRGINIA]]
Any standalone designation of a person to arrange the funeral and disposition shall be rendered through the Virginia signed-and-notarized route with the designee's written acceptance.

[[elif signing_state=WASHINGTON]]
The Trustmaker intends these written wishes and any designated-agent appointment to operate through the Washington witnessed route. Any controlling prearrangement or military route remains separately governed.

[[elif signing_state=WEST_VIRGINIA]]
Any standalone designation of a person to control final disposition shall be rendered through the West Virginia notarized-affidavit route. Specific lawful directions may be attached.

[[elif signing_state=WISCONSIN]]
Any Authorization for Final Disposition shall be rendered through the Wisconsin architecture, including a representative, required successor representative or representatives, special directions, and signed acceptance by each appointee.

[[elif signing_state=WYOMING]]
The Trustmaker intends this signed written instrument to state final-disposition directions and, if applicable, a written designation recognized under Wyoming law.

[[end]]
`;

window.FINALWISHES_SHARED['finalwishes_execution'] = String.raw`
[[if signing_state=ALABAMA]]
These Final Wishes are wishes/instructions only under the current Alabama route. The acknowledgment below is included as the Grapevine execution standard and is not represented as changing statutory priority or as required for validity.
@sub Optional Notarial Acknowledgment
@line State of Alabama
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=ALASKA]]
Alaska disposition-document route: the principal signs and the instrument is acknowledged before a notary public.
@line State of Alaska
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=ARIZONA]]
Arizona permits either one qualified adult witness or notarization. Grapevine uses the notary alternative in this state file.
@line State of Arizona
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=ARKANSAS]]
Arkansas requires the declarant signature and two witnesses for the Declaration of Final Disposition. A generic notary acknowledgment is not substituted for the witness requirement.

We attest that {{name}} signed or acknowledged this Declaration of Final Disposition in our presence and appeared to act voluntarily.
@sub Witness 1
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Witness 2
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________

[[elif signing_state=CALIFORNIA]]
California written directions are coordinated with the health-care-agent priority rules and statutory conditions governing binding written directions. The acknowledgment below is included as a Grapevine execution standard; it does not itself establish that the directions satisfy every condition of California Health and Safety Code section 7100.1.

@sub Optional California Notarial Acknowledgment

A notary public or other officer completing this certificate verifies only the identity of the individual who signed the document to which this certificate is attached, and not the truthfulness, accuracy, or validity of that document.
@line State of California
@line County of ____________________
@line On ____________________ before me, ________________________________, personally appeared ________________________________, who proved to me on the basis of satisfactory evidence to be the person(s) whose name(s) is/are subscribed to the instrument and acknowledged execution in the authorized capacity(ies), and that by the signature(s) on the instrument the person(s), or the entity upon behalf of which the person(s) acted, executed the instrument.
@line I certify under PENALTY OF PERJURY under the laws of the State of California that the foregoing paragraph is true and correct.
@line WITNESS my hand and official seal.
@line ____________________________________
@line Signature

[[elif signing_state=COLORADO]]
Colorado permits either notarization or one adult witness confirming presence at signing. Grapevine uses the notary alternative in this state file.
@line State of Colorado
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=CONNECTICUT]]
Connecticut requires two attesting witnesses for the written disposition document. A notary is not substituted.

We attest that {{name}} subscribed this written disposition document in our presence and appeared to be of sound mind and acting voluntarily.
@sub Witness 1
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Witness 2
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________

[[elif signing_state=DELAWARE]]
Delaware requires a written, dated, signed declaration; acknowledgment is optional. Grapevine includes the notary acknowledgment as its default execution standard.
@sub Optional Notarial Acknowledgment
@line State of Delaware
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=DISTRICT_COLUMBIA]]
District of Columbia requires the written directions/designation to be dated and signed. No universal witness or notary validity requirement applies to this route. The acknowledgment below is optional and included as the Grapevine execution standard.
@sub Optional Notarial Acknowledgment
@line State of District of Columbia
@line District of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=FLORIDA]]
Florida recognizes written inter vivos directions within its statutory priority framework. The acknowledgment below is included as Grapevine's default execution standard and is not represented as a separate statutory validity requirement.
@sub Optional Notarial Acknowledgment
@line State of Florida
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=GEORGIA]]
Georgia first reuses the Health Care Agent for disposition priority. Only if the customer chooses a different disposition designee should the separate Georgia disposition affidavit and its notarial execution render.

[[if has_agent]]
@sub Georgia Disposition Affidavit — Notarial Execution

The separate Georgia disposition affidavit shall substantially follow the current statutory form and shall state whether specific directions are attached. The affidavit is executed before a notary public.
@line State of Georgia
@line County of ________________________________
@line Sworn to and subscribed before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal: __________________________________________

[[end]]

[[elif signing_state=HAWAII]]
Hawaii standalone disposition directions/designation use the notarial execution route.
@line State of Hawaii
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=IDAHO]]
Idaho disposition designation must be acknowledged in the manner required for a real-property conveyance instrument.
@line State of Idaho
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=ILLINOIS]]
Illinois standalone disposition authorization uses the signed and notarized execution route.
@line State of Illinois
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=INDIANA]]
Indiana uses a separate Funeral Planning Declaration executed with at least two qualified adult witnesses.

The following declaration is a separate legal instrument within this Word file.
@sub Funeral Planning Declaration

The Declarant, {{name}}, makes this Funeral Planning Declaration concerning the Declarant's funeral, ceremony, and disposition of remains.

[[if has_agent]]The Declarant designates {{agent_name}} to carry out this Declaration. [[if has_alt_agent]]If that person does not serve, {{alt_agent_name}} is designated as successor.[[end]][[end]]

The Declarant directs that the disposition and final arrangements selected in the Final Wishes portion of this package be carried out to the fullest extent permitted by law.

Dated: {{signing_date}}
@line ________________________________________
@line {{name}}, Declarant

I certify that the Declarant signed or acknowledged this Indiana Funeral Planning Declaration in my presence, appeared to understand the nature of the declaration, and acted voluntarily. I am not the Declarant's designee and satisfy all other witness qualifications imposed by Indiana law.
@sub Witness 1
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Witness 2
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________

[[elif signing_state=IOWA]]
Iowa uses a separate declaration of designee for final disposition. Iowa permits two mutual witnesses or notarial acknowledgment; Grapevine uses the notary alternative in this state file.

The following designation is a separate legal instrument within this Word file.
@sub Declaration of Designee for Final Disposition

The Declarant, {{name}}, designates {{agent_name}} as the person authorized to control final disposition as provided by Iowa law.

[[if has_alt_agent]]If that person does not serve, the Declarant designates {{alt_agent_name}} as alternate designee.[[end]]

This declaration appoints the designee only. The Declarant's funeral, ceremony, and disposition wishes are stated separately in the Final Wishes portion of this package.

Dated: {{signing_date}}
@line ________________________________________
@line {{name}}, Declarant
@line State of Iowa
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=KANSAS]]
Kansas disposition-agent authority is not created by this Final Wishes document. Any first-priority authority granted to a health-care decision agent must appear in the applicable Kansas health-care instrument. The acknowledgment below is included as the Grapevine execution standard for these written wishes and is not represented as creating disposition-agent priority.
@sub Optional Notarial Acknowledgment
@line State of Kansas
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=KENTUCKY]]
@sub FUNERAL PLANNING DECLARATION

The Declarant, {{name}}, makes this Funeral Planning Declaration concerning the Declarant's funeral, ceremony, and disposition of remains.

[[if has_agent]]The Declarant designates {{agent_name}} to carry out this Declaration. [[if has_alt_agent]]If that person does not serve, {{alt_agent_name}} is designated as successor.[[end]][[end]]

The Declarant adopts the disposition and final-arrangement selections stated in the Final Wishes portion of this package as the Declarant's directions for this Declaration.

Dated: {{signing_date}}
@line ________________________________________
@line {{name}}, Declarant

Kentucky requires BOTH two competent adult witnesses AND acknowledgment before a notary public or other authorized oath officer.

Each witness confirms that the Declarant voluntarily executed this Funeral Planning Declaration in the witness's presence and that the witness is legally qualified to serve.
@sub Witness 1
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Witness 2
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Kentucky Notarial Acknowledgment
@line State of Kentucky
@line County of _________________________________________

The Declarant appeared before me and acknowledged that the Declarant voluntarily dated and signed this Funeral Planning Declaration, or directed it to be signed and dated in the Declarant's presence.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=LOUISIANA]]
The standalone Louisiana declaration route is written and notarized. A controlling notarial-testament route, if selected, uses the testament execution package instead.
@sub Notarial Acknowledgment
@line State of Louisiana
@line Parish of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=MAINE]]
Maine requires the designation/instructions used under this route to be written and signed. No universal witness or notary requirement is imposed by the disposition provisions used for this ruleset. The acknowledgment below is optional and included as the Grapevine execution standard.
@sub Optional Notarial Acknowledgment
@line State of Maine
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=MARYLAND]]
Maryland requires the individual and ONE witness to sign in each other's presence. A notary is not substituted for this witness requirement.

I witnessed {{name}} sign this document in my presence, and I sign this document in the presence of {{name}}.
@sub Witness 1
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________

[[elif signing_state=MASSACHUSETTS]]
This document preserves written funeral and burial wishes; it does not create a standalone statutory disposition-agent appointment. Any controlling Will or estate-administration route remains separate. The acknowledgment below is optional and included as the Grapevine execution standard for the written wishes.
@sub Optional Notarial Acknowledgment
@line State of Massachusetts
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=MICHIGAN]]
Michigan permits EITHER two qualified witnesses OR acknowledgment before a notary for a Funeral Representative designation. Grapevine uses the notarial route here unless the witness route is separately selected.
@sub Notarial Acknowledgment
@line State of Michigan
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=MINNESOTA]]
Minnesota advance arrangements must be written, dated, signed, and witnessed. A dated written instrument signed by the decedent may appoint the person with the right to control disposition. This execution page includes a witness for the directions and an optional acknowledgment for added evidentiary formality.

I witnessed {{name}} sign and date these written final-disposition directions.
@sub Witness 1
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Optional Notarial Acknowledgment
@line State of Minnesota
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=MISSISSIPPI]]
Mississippi uses the current Self-Directed Disposition Authorization architecture. Grapevine must load and validate the current state-prescribed/approved execution asset before an operative authorization is produced. A generic witness or notary block is not substituted.

[[elif signing_state=MISSOURI]]
Missouri disposition authority under this route is created through a durable power of attorney expressly granting the right of sepulcher. This Final Wishes document does not create that authority. The acknowledgment below is optional and applies only to these written wishes.
@sub Optional Notarial Acknowledgment
@line State of Missouri
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=MONTANA]]
Montana uses separate execution concepts: a controller designation is notarized, while written disposition directions require TWO adult witnesses (unless a qualifying statutory video route is used). Because this file contains both concepts, both blocks are provided and must be routed to the applicable content.
@sub Controller Designation — Notarial Acknowledgment
@line State of Montana
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________
@sub Disposition Directions — Two Witnesses

We witnessed {{name}} sign the written disposition directions and are adults qualified to witness under Montana law.
@sub Witness 1
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Witness 2
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________

[[elif signing_state=NEBRASKA]]
The Nebraska standalone right-of-disposition designation is made by affidavit before a notary public in substantially the statutory form. Attached lawful directions may be incorporated into that route.
@sub Notarial Acknowledgment
@line State of Nebraska
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=NEVADA]]
The Nevada standalone designation route uses a statutory affidavit before a notary public. A Will or DPOA route, if selected instead, uses that instrument's execution rules.
@sub Notarial Acknowledgment
@line State of Nevada
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=NEW_HAMPSHIRE]]
New Hampshire requires the designation and instructions used under this route to be written and signed. No universal witness or notary validity requirement is stated in the controlling disposition provisions. The acknowledgment below is optional and included as the Grapevine execution standard.
@sub Optional Notarial Acknowledgment
@line State of New Hampshire
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=NEW_JERSEY]]
The operative standalone appointment must use the current New Jersey board-approved appointment form. That form requires the individual to sign in the presence of TWO witnesses and a notary. The national generic appointment language does not replace the board-approved form.

We witnessed {{name}} execute the appointment voluntarily in our presence.
@sub Witness 1
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Witness 2
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Notarial Acknowledgment
@line State of New Jersey
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=NEW_MEXICO]]
For the New Mexico cremation-statement route, the principal signs and uses EITHER notarization OR two witnesses. Grapevine uses the notarial route here by default. Other written directions remain subject to the state ruleset.
@sub Notarial Acknowledgment
@line State of New Mexico
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=NEW_YORK]]
New York requires the principal to sign and date the statutory appointment in the presence of TWO adult witnesses. The appointed agent must also sign the statutory acceptance/assumption section.

We witnessed {{name}} sign and date the Appointment of Agent to Control Disposition of Remains.
@sub Witness 1
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Witness 2
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Agent Acceptance / Assumption

I, {{agent_name}}, accept the appointment stated in this instrument and agree to act subject to applicable law and the directions stated in this document.
@line Signature: ________________________________________
@line Date: _____________________________________________

[[elif signing_state=NORTH_CAROLINA]]
The separate North Carolina written-statement route requires the principal's signature plus TWO adult witnesses. A notary is not substituted for the witness requirement.

We are adults age 18 or older and witnessed {{name}} sign this written disposition statement.
@sub Witness 1
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Witness 2
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________

[[elif signing_state=NORTH_DAKOTA]]
North Dakota requires the statement to be signed and dated. No universal witness or notary requirement applies to this route. The acknowledgment below is optional and included as the Grapevine execution standard.
@sub Optional Notarial Acknowledgment
@line State of North Dakota
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=OHIO]]
Ohio requires the statutory declaration content and permits EITHER notarization OR two witnesses. Grapevine uses the notarial route here by default.
@sub Notarial Acknowledgment
@line State of Ohio
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=OKLAHOMA]]
Oklahoma representative appointments require an executed and witnessed written document. A generic signature or notary alone is not substituted for the state-specific witnessed-document overlay.

We witnessed {{name}} execute this written disposition/representative appointment.
@sub Witness 1
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Witness 2
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________

[[elif signing_state=OREGON]]
Oregon permits EITHER acknowledgment before a notary OR two competent adult witnesses for the statutory or substantially similar appointment. Grapevine uses the notarial route here by default.
@sub Notarial Acknowledgment
@line State of Oregon
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=PENNSYLVANIA]]
Pennsylvania does not use this document as a generic standalone statutory agent appointment. If disposition authority is placed in a Will, the Will execution package controls. The acknowledgment below is optional for these written wishes only.
@sub Optional Notarial Acknowledgment
@line State of Pennsylvania
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=RHODE_ISLAND]]
Rhode Island uses the statutory Funeral Planning Agent Designation architecture. The execution package includes the principal, a witness, agent acceptance, and notarization.

I witnessed {{name}} execute this Funeral Planning Agent Designation.
@sub Witness 1
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Funeral Planning Agent Acceptance

I, {{agent_name}}, accept the appointment stated in this instrument and agree to act subject to applicable law and the directions stated in this document.
@line Signature: ________________________________________
@line Date: _____________________________________________
@sub Notarial Acknowledgment
@line State of Rhode Island
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=SOUTH_CAROLINA]]
South Carolina requires the operative designation to be in a Will or another approved verified-and-attested document. A bare signature or generic notary block is not substituted.

[[elif signing_state=SOUTH_DAKOTA]]
South Dakota requires the standalone designation affidavit to be executed before a notary public in substantially statutory form.
@sub Notarial Acknowledgment
@line State of South Dakota
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=TENNESSEE]]
Tennessee permits EITHER notarization OR two qualified adult witnesses for the written directions route. Grapevine uses the notarial route here by default.
@sub Notarial Acknowledgment
@line State of Tennessee
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=TEXAS]]
Texas requires the principal's signature to be acknowledged. The appointment is valid without the agent's signature, but each agent or successor agent must sign an acceptance before acting.
@sub Notarial Acknowledgment
@line State of Texas
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________
@sub Primary Agent Acceptance

I, {{agent_name}}, accept the appointment stated in this instrument and agree to act subject to applicable law and the directions stated in this document.
@line Signature: ________________________________________
@line Date: _____________________________________________
[[if has_alt_agent]]

@sub Successor Agent Acceptance

I, {{alt_agent_name}}, accept the appointment stated in this instrument and agree to act subject to applicable law and the directions stated in this document.
@line Signature: ________________________________________
@line Date: _____________________________________________

[[end]]

[[elif signing_state=UTAH]]
Utah permits EITHER acknowledgment before a notary OR execution with Will formalities. Grapevine uses the notarial route here by default.
@sub Notarial Acknowledgment
@line State of Utah
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=VERMONT]]
Vermont routes disposition instructions through the advance-directive architecture. The advance directive must be dated and executed with TWO adult witnesses using the required affirmation. This execution block is the HCD-integrated route, not a competing standalone appointment.

We affirm that the Principal appeared to understand the nature of this advance-directive disposition instruction and acted free from duress or undue influence.
@sub Witness 1
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________
@sub Witness 2
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________

[[elif signing_state=VIRGINIA]]
Virginia requires a signed and NOTARIZED writing for the standalone designee route, plus written acceptance by the designee.
@sub Notarial Acknowledgment
@line State of Virginia
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________
@sub Designee Written Acceptance

I, {{agent_name}}, accept the appointment stated in this instrument and agree to act subject to applicable law and the directions stated in this document.
@line Signature: ________________________________________
@line Date: _____________________________________________

[[elif signing_state=WASHINGTON]]
Washington requires the direct wishes to be signed in the presence of ONE witness. A designated-agent document must also be signed and dated in the presence of ONE witness.

I witnessed {{name}} sign this written final-disposition instrument.
@sub Witness 1
@line Signature: ________________________________________
@line Printed Name: _____________________________________
@line Address: __________________________________________
@line Date: _____________________________________________

[[elif signing_state=WEST_VIRGINIA]]
West Virginia requires the standalone disposition-control affidavit to be executed before a notary public in substantially statutory form.
@sub Notarial Acknowledgment
@line State of West Virginia
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[elif signing_state=WISCONSIN]]
Wisconsin permits EITHER two qualified witnesses OR notarization for the principal. Grapevine uses the notarial route here by default. Each representative and successor representative must separately sign acceptance.
@sub Notarial Acknowledgment
@line State of Wisconsin
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________
@sub Representative Acceptance

I, {{agent_name}}, accept the appointment stated in this instrument and agree to act subject to applicable law and the directions stated in this document.
@line Signature: ________________________________________
@line Date: _____________________________________________
[[if has_alt_agent]]

@sub Successor Representative Acceptance

I, {{alt_agent_name}}, accept the appointment stated in this instrument and agree to act subject to applicable law and the directions stated in this document.
@line Signature: ________________________________________
@line Date: _____________________________________________

[[end]]

[[elif signing_state=WYOMING]]
Wyoming uses a signed written instrument. No universal witness or notary validity formality is stated for this route. The acknowledgment below is optional and included as the Grapevine execution standard.
@sub Optional Notarial Acknowledgment
@line State of Wyoming
@line County of _________________________________________
@line This instrument was acknowledged before me on __________________, 20____, by {{name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal (if required): _____________________________

[[end]]
`;

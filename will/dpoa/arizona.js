window.DPOA_STATES = window.DPOA_STATES || {};
window.DPOA_STATES["Arizona"] = String.raw`
// ==========================================================================
//  GRAPEVINE  |  DURABLE POWER OF ATTORNEY  |  ARIZONA
//  Converted word for word from your file Grapevine_DPOA_Arizona.docx (the controlled
//  state document). Same rules as will/dpoa-template.js. To change this state, edit this file only.
//  Article Seven (special powers) is kept below but switched off: the standard DPOA leaves it out.
// ==========================================================================
@set effective_choice = yes
@set ask_determiner = no
@set ask_facility = no
@set has_notary = yes
@set has_witness = yes
@set exec_choice = no

@dropempty

@center **DURABLE POWER OF ATTORNEY**

@center **OF {{name_caps}}**

@center **ARIZONA**

# Declaration and Purpose

## Durable Power of Attorney

I, {{name}}, of {{county}} County, {{state}}, execute this instrument as my Durable Power of Attorney and appoint the Agent designated in this instrument to act for me with respect to the powers expressly granted by this Power of Attorney and any authority incidental to those powers under applicable law.

## Durability and Personal Authority

This Power of Attorney shall not terminate because of my subsequent Incapacity. While I have legal capacity, I retain the right to manage my own property and affairs and to exercise any power granted to my Agent.

## Relationship to Estate-Planning Documents

This Power of Attorney is intended to operate consistently with my trust, Will, beneficiary designations, health care documents, and other estate-planning arrangements. It does not revoke or replace any such instrument merely because it is executed later. Authority concerning gifts, trusts, beneficiary designations, survivorship rights, disclaimers, or other estate-plan-changing matters exists only to the extent expressly granted by this Power of Attorney and permitted by applicable law.

# Appointment of Agent

## Appointment

I appoint {{agent}} to serve as my Agent.

If that Agent dies, resigns, becomes incapacitated, is unwilling or unable to serve, or is otherwise ineligible, I appoint the following persons to serve successively in the order listed:

[[each successors]]

{{successor}}

[[end]]

A successor Agent shall have the same authority as the original Agent unless this Power of Attorney expressly provides otherwise.

## Acceptance, Resignation, and Vacancy

A person appointed as Agent is not required to serve and accepts appointment only in the manner permitted or required by applicable law. An Agent may resign by written notice to me while I have capacity, or if I am incapacitated, to the next designated successor Agent, any court-appointed fiduciary for me, or another person entitled to notice under applicable law. A vacancy shall be filled by the next willing and eligible successor Agent designated by me.

## Compensation and Expenses

My Agent is entitled to reimbursement of reasonable expenses properly incurred and to reasonable compensation to the extent permitted by applicable law and not otherwise limited by this Power of Attorney.

# Effectiveness and Incapacity

## Effective Authority

[[if effective_immediately]]

This Power of Attorney becomes effective when I execute it and remains effective during any later Incapacity. My ability to act for myself is not affected merely because my Agent also has authority to act for me.

[[elif upon_incapacity]]

My Agent's authority becomes effective only after my Incapacity has been established under this Article. Until that determination has been made, my Agent shall not exercise authority under this Power of Attorney except to the extent applicable law permits action necessary to establish my Incapacity.

[[end]]

## Determination of Incapacity

[[if upon_incapacity]]
[[include shared_incapacity]]
[[end]]

[[if upon_incapacity]]

For purposes of a springing Power of Attorney, Incapacity means that I am unable to manage my property or financial affairs because of illness, injury, cognitive or physical impairment, or another disabling condition. Incapacity shall be established by written statements from two licensed physicians or by an order of a court of competent jurisdiction, unless this Power of Attorney expressly provides another lawful determination method.

[[end]]

## Restoration of Capacity

[[if upon_incapacity]]
[[include shared_restoration]]
[[end]]

[[if upon_incapacity]]

If I was previously determined to be incapacitated, I shall be considered to have regained capacity upon written statements from two licensed physicians who have examined me and determine that I am able to effectively manage my property and financial affairs, or upon an order of a court of competent jurisdiction determining that I have regained capacity. Any authority that arose solely because of my Incapacity shall then cease while I have capacity, without revoking this Power of Attorney.

[[end]]

# Duties and General Authority of Agent

## Fiduciary Duties

My Agent acts in a fiduciary capacity and shall act in good faith, within the authority granted by this instrument, with the care, competence, and diligence required by applicable law, and consistently with my known objectives to the extent reasonably ascertainable. The Agent shall not use my property for the Agent's own benefit or for another person except as expressly authorized.

## Records, Professionals, and Delegation

My Agent shall maintain records reasonably sufficient to identify material transactions and provide records or accountings as required by applicable law. The Agent may employ and compensate attorneys, accountants, investment advisers, brokers, appraisers, property managers, tax professionals, technology professionals, custodians, contractors, and other persons reasonably necessary to exercise granted authority. Ministerial or professional functions may be delegated when permitted by law, but discretionary authority that must be personally exercised may not be delegated.

## Preservation of Estate Plan and Separation of Property

My Agent shall consider my known estate plan when exercising authority and, to the extent reasonably practicable and consistent with my best interests based on information reasonably available to the Agent, preserve its intended operation. My property shall be kept separate from the Agent's property except where property is already jointly owned or applicable law otherwise permits commingling. Nothing in this Section independently grants a special power requiring express authorization.

# Financial and Property Powers

## General Financial Authority

Subject to the limitations of this Power of Attorney, my Agent may manage, protect, preserve, invest, sell, exchange, lease, transfer, encumber, collect, receive, and otherwise deal with my property and financial affairs to the fullest extent expressly authorized and permitted by applicable law. In exercising these powers, my Agent may sign, acknowledge, deliver, file, and record documents and take acts reasonably incidental to the granted authority.

## Banking, Investments, and Financial Accounts

My Agent may open, maintain, access, modify, transfer, consolidate, and close bank, brokerage, cash-management, and other financial accounts; deposit, withdraw, transfer, and receive funds; sign checks and payment instructions; conduct electronic and wire transfers; obtain records and statements; endorse instruments; retain, acquire, sell, exchange, invest, and reinvest securities and other investments; and exercise voting, conversion, redemption, subscription, and other investment rights, subject to applicable fiduciary standards.

## Real and Tangible Personal Property

My Agent may acquire, possess, manage, insure, repair, improve, maintain, lease, exchange, partition, subdivide, mortgage, refinance, encumber, sell, convey, transfer, store, or otherwise deal with my real and tangible personal property; execute deeds, leases, assignments, mortgages, easements, title documents, registrations, disclosures, and escrow instructions; collect rents; pay taxes, assessments, utilities, insurance, and expenses; and employ appropriate professionals.

## Business and Contract Interests

My Agent may exercise my rights in any sole proprietorship, partnership, limited liability company, corporation, professional entity, joint venture, or other business organization, subject to governing documents and law. The Agent may operate, continue, manage, reorganize, merge, dissolve, liquidate, sell, vote, contribute capital, receive distributions, examine records, and enter into, modify, enforce, settle, or terminate contracts and obligations within the Agent's authority.

## Borrowing, Insurance, Retirement, and Benefits

My Agent may borrow money when reasonably necessary for my benefit or administration of my affairs; renew, extend, refinance, or satisfy indebtedness; and pledge or encumber my property as security. The Agent may administer insurance and annuities, including premiums, claims, policy values, settlement options, and proceeds payable to me; administer retirement and employee-benefit plans, including contributions, investment selections, distributions, rollovers, payment methods, and tax withholding; and apply for, receive, manage, and appeal Social Security, Medicare, Medicaid, veterans, disability, and other governmental benefits. Unless expressly authorized elsewhere, this authority does not permit changing beneficiary designations or making gifts.

## Taxes, Claims, and Administrative Matters

My Agent may prepare, sign, file, amend, obtain, contest, compromise, settle, and pay federal, state, local, and foreign tax returns, elections, claims, liabilities, interest, penalties, refunds, and related matters, and execute separate tax authorizations when required. The Agent may assert, defend, settle, arbitrate, mediate, release, or abandon claims or legal proceedings involving me or my property; access safe-deposit boxes and storage facilities; receive and redirect mail; obtain records; receive property and payments due me; and take reasonable actions to preserve, protect, insure, maintain, and safeguard my property.

# Trust and Estate-Planning Powers

## General Limitation and Administrative Trust Authority

My Agent has no authority to create, amend, revoke, restate, terminate, fund, withdraw property from, or otherwise alter a trust or my estate plan except as expressly authorized by this Power of Attorney and permitted by applicable law. The Agent may communicate with a Trustee, obtain trust information, deliver property to a trust, receive property distributable to me, and perform administrative acts reasonably necessary to coordinate my financial affairs with an existing trust.

## Funding and Retitling to Revocable Trust

My Agent may transfer, assign, convey, retitle, or deliver my property to a revocable trust created by me or for my benefit if the trust is then in existence, I possess the power to revoke it, and the transfer is consistent with my known estate plan. The Agent may execute deeds, assignments, account forms, certifications, and other documents necessary to complete the transfer. Such funding authority does not itself authorize a gift or a material change in beneficial interests.

## Reserved Trust Powers

Any exercise by my Agent of a power reserved to me under a trust, including amendment, restatement, revocation, withdrawal of trust property, creation of a trust, or removal or appointment of a Trustee, is governed by the express-power provisions of this Power of Attorney. No reserved trust power is implied from general financial, funding, or trust-administration authority.

## No Implied Change in Beneficial Interests

Authority concerning a trust does not, by itself, authorize my Agent to add or remove a beneficiary, change a beneficiary's share or contingent disposition, convert an outright distribution to a trust or vice versa, alter a beneficiary trust distribution schedule, reduce protective trust provisions, make a gift, change a beneficiary designation or survivorship right, or otherwise materially alter the beneficial disposition of my property. Such authority must be separately and expressly granted.

## Will and Irrevocable Trusts

My Agent has no authority to execute, amend, revoke, or replace my Will. The Agent may review my Will solely to understand and preserve my known estate plan. My Agent may create, fund, modify, terminate, or otherwise act with respect to an irrevocable trust only if that authority is expressly granted and permitted by applicable law.

[[if advanced_powers]]

# Special and Express Powers

## Special-Power Rule

Each power described in this Article may be granted, withheld, or limited separately. The grant of one special power does not imply another, and no general provision elsewhere in this Power of Attorney shall be construed to grant a power for which applicable law requires express authority.

[[if gifting_authority]]

## Gifts

My Agent may make gifts to persons or organizations to the extent permitted by applicable law. In exercising gifting authority, the Agent shall consider my known history of giving, estate plan, foreseeable needs and obligations, tax consequences, public-benefit eligibility, and the interests of persons I have historically supported.

[[if continue_established_giving]]

My Agent may continue an established pattern of support, charitable contributions, tuition or medical payments, or other gifts, adjusted reasonably for my resources, needs, tax laws, and circumstances.

[[end]]

[[if gifts_to_agent_authorized]]

My Agent may make gifts to or for the benefit of the Agent only to the extent permitted by applicable law. Such authority does not include gratuitous forgiveness of debt owed by the Agent unless that authority is separately selected below.

[[if forgive_agent_debt]]

My Agent may gratuitously forgive debt owed to me by the Agent to the extent permitted by applicable law.

[[end]]

[[end]]

[[end]]

[[if beneficiary_survivorship_authority]]

## Beneficiary Designations, Survivorship, and Joint Ownership

My Agent may create, continue, modify, or revoke beneficiary designations, payable-on-death or transfer-on-death arrangements, joint ownership, or rights of survivorship to the extent permitted by applicable law. Unless broader authority is expressly granted elsewhere in this Power of Attorney, the Agent shall not use this authority to materially alter my known estate plan or to add or increase the Agent's own beneficial interest.

[[end]]

[[if disclaimers_powers_of_appointment]]

## Disclaimers and Powers of Appointment

My Agent may disclaim, renounce, refuse, or release property or an interest in property that I would otherwise be entitled to receive, and may exercise, release, or disclaim a power of appointment held by me, to the extent permitted by the governing instrument and applicable law. The Agent may consider tax consequences, my estate plan, financial needs, and public-benefit eligibility.

[[end]]

[[if any_special_trust_power]]

## Trust Amendment, Restatement, Revocation, and Trustee Changes

The following reserved or estate-planning trust powers are granted only when selected below and only to the extent the governing instrument and applicable law permit delegation:

[[if trust_power_amend]]

@item My Agent may amend my revocable trust.

[[end]]

[[if trust_power_restate]]

@item My Agent may restate my revocable trust.

[[end]]

[[if trust_power_revoke]]

@item My Agent may revoke my revocable trust.

[[end]]

[[end]]

My Agent may terminate an inter vivos trust to the extent expressly permitted by the governing trust instrument and applicable law.

[[if trust_power_terminate_inter_vivos]]

[[if trust_power_withdraw]]

@item My Agent may withdraw property from my revocable trust.

[[end]]

[[if trust_power_create_revocable]]

@item My Agent may create a revocable trust for my benefit.

[[end]]

[[if trust_power_create_irrevocable]]

@item My Agent may create an irrevocable trust for my benefit.

[[end]]

[[if trust_power_fund_irrevocable]]

@item My Agent may fund an irrevocable trust.

[[end]]

[[if trust_power_remove_appoint_trustee]]

@item My Agent may exercise a power reserved to me to remove a Trustee and appoint a successor Trustee.

[[end]]

@item Unless broader authority is expressly granted, my Agent shall not use any trust power granted under this Section to materially change beneficial interests or appoint the Agent personally as Trustee.

[[end]]

[[if public_benefit_planning_authority]]

## Public-Benefit and Long-Term-Care Planning

My Agent may take actions reasonably intended to establish, maintain, or preserve my eligibility for Medicaid, veterans' benefits, or other means-tested public benefits, but only through transactions otherwise authorized by this Power of Attorney and permitted by applicable law. This Section does not independently grant gifting, trust-creation, beneficiary-designation, or survivorship authority.

[[end]]

## Support

My Agent may use my property for the reasonable support, maintenance, education, health care, and welfare of persons whom I am legally obligated to support. This authority does not independently authorize gifts to any other person.

## Self-Dealing and Conflicts

My Agent may not use a special power to create in the Agent, or in a person whom the Agent is legally obligated to support, an interest in my property unless that result is expressly authorized by this Power of Attorney and permitted by applicable law. Other transactions involving a conflict of interest remain subject to the Agent's fiduciary duties. No general authority waives those duties or authorizes self-dealing.

[[if other_express_fiduciary_powers]]

## Other Express Fiduciary and Retirement Powers

To the extent selected by me and permitted by applicable law, my Agent may exercise the following expressly granted fiduciary or retirement powers:

[[if delegate_discretionary_authority]]

@item My Agent may delegate authority granted under this Power of Attorney beyond ministerial or professional functions to the extent permitted by applicable law.

[[end]]

[[if waive_survivor_annuity]]

@item My Agent may waive my right to be a beneficiary of a joint-and-survivor annuity or survivor benefit to the extent permitted by applicable law.

[[end]]

[[if exercise_delegable_fiduciary_powers]]

@item My Agent may exercise fiduciary powers that I possess and may lawfully delegate.

[[end]]

No such authority is implied from the general administrative or retirement-plan powers granted elsewhere in this instrument.

[[end]]

[[end]]

# Digital Assets, Records, and Information

## Digital Assets and Electronic Communications

To the fullest extent permitted by applicable law, my Agent may access, obtain, control, manage, preserve, copy, transfer, sell, distribute, abandon, delete, close, or otherwise administer my Digital Assets and digital accounts to the same extent I could act personally, but only with respect to matters otherwise within the scope of this Power of Attorney. I expressly authorize my Agent to access and receive the content and catalog of my electronic communications and other information that I may lawfully authorize a custodian to disclose.

## Accounts, Devices, Credentials, and Digital Property

My Agent may access and administer online financial, email, cloud-storage, social-media, subscription, e-commerce, loyalty, domain-name, website, cryptocurrency, virtual-currency, token, digital-wallet, intellectual-property, and comparable accounts or assets; access and manage computers and electronic devices; and obtain or use passwords, passcodes, authentication credentials, encryption keys, private keys, seed phrases, recovery information, and other access information reasonably necessary to exercise granted authority. The Agent shall use reasonable care to protect confidential access information.

## Electronic Records, Signatures, and Custodians

My Agent may create, obtain, inspect, copy, store, transmit, sign, acknowledge, certify, archive, and destroy electronic records; use lawful electronic signatures and transaction systems; communicate with custodians and service providers; and employ technology or cybersecurity professionals. Access to a digital account does not independently grant substantive authority over the underlying property or transaction.

## Health and Capacity Information

Nothing in this Article authorizes my Agent to make health care decisions. My Agent may obtain protected health information only to the extent authorized by applicable law, a separate HIPAA authorization, health care directive, or other valid authorization. The Agent may obtain information reasonably necessary to determine whether authority under this Power of Attorney has become effective or ceased because of a change in my capacity.

# Third-Party Reliance and Agent Protections

## Reliance and Certifications

A person or entity may rely in good faith upon this Power of Attorney, or a legally sufficient copy, and upon my Agent's certification of identity, acceptance, continuing authority, occurrence of a condition affecting authority, or other fact reasonably necessary to establish authority, to the extent permitted by applicable law. A person dealing with my Agent is not required to investigate the propriety of the Agent's actions absent actual knowledge that the Agent is exceeding or improperly exercising authority.

## Additional Evidence and Enforcement

A person may request reasonable evidence of authority to the extent permitted by law, including identification, certification, evidence of Incapacity when relevant, or an opinion of counsel when legally permitted and reasonably necessary. If this Power of Attorney is improperly refused, my Agent may provide certifications, employ counsel, seek judicial relief, or pursue another lawful remedy to establish or enforce authority.

## Good-Faith Protection and Reliance by Agent

To the fullest extent permitted by applicable law, a person who accepts and relies upon this Power of Attorney in good faith and without actual knowledge of invalidity or misuse shall be protected from liability arising solely from that reliance. An Agent acting in good faith within granted authority may reasonably rely upon account statements, title records, tax returns, valuations, professional advice, governmental records, capacity information lawfully obtained, estate-planning documents, and other information reasonably believed reliable, and shall not be liable for a good-faith exercise or nonexercise of discretion except as applicable law provides.

## Successor Agent and Court Instructions

A successor Agent may rely in good faith upon records and information received from a predecessor unless the successor has actual knowledge of a material inaccuracy or facts requiring further inquiry. The successor has no general duty to investigate a predecessor except as required by law. Any Agent may seek court instructions, approval, interpretation, or confirmation of authority when reasonably necessary, with reasonable expenses payable from my property to the extent permitted by law.

## Bond

No Agent appointed by me shall be required to furnish bond or other security except to the extent required by applicable law or ordered by a court that does not permit waiver. Any required bond premium may be paid from my property.

# Conservatorship, Revocation, and Termination

## Nomination of Conservator or Guardian

If a court determines that a conservator, guardian of my estate or property, or other court-appointed fiduciary should be appointed, I nominate my Agent then serving and, if that person cannot serve, the next willing and eligible successor Agent. I prefer that my affairs be managed through this Power of Attorney and my voluntary estate-planning arrangements rather than a court-supervised proceeding to the extent appropriate and permitted by law.

## Revocation and Amendment

While I have legal capacity, I may revoke or amend this Power of Attorney in any manner permitted by applicable law. A later power of attorney does not automatically revoke this instrument unless the later instrument expressly does so or applicable law provides otherwise. A partial revocation or limitation leaves the remaining provisions effective to the extent they can operate independently.

## Termination of Agent Authority

An Agent's authority terminates upon the Agent's death, resignation, Incapacity, removal, legal ineligibility, termination of this Power of Attorney, or another event recognized by applicable law. The next willing and eligible successor Agent then becomes entitled to serve. A successor has no authority before the prior Agent ceases or is unable to serve and any applicable conditions are satisfied.

## Death and Protective Proceedings

This Power of Attorney terminates upon my death. Thereafter my Agent has no authority to administer my probate estate or act in place of my Personal Representative or Trustee, except for limited acts protected by applicable law when taken without actual knowledge of my death or necessary to transfer property or records to the person legally entitled to receive them. The commencement of a guardianship, conservatorship, or similar proceeding affects this Power of Attorney only as provided by applicable law or court order.

## Delivery and Final Records

When authority terminates, the Agent shall deliver property, records, account information, access credentials, and other materials under the Agent's control to me or the person legally entitled to receive them, and shall provide a final accounting or records to the extent required by applicable law. Duties concerning confidentiality, return of property, records, and liability for prior conduct survive termination.

## Marriage, Divorce, and Change in Relationship

If my Agent is my spouse or domestic partner, the effect of marriage, divorce, dissolution, legal separation, termination of the relationship, or the filing of a proceeding concerning that relationship upon the Agent's appointment or authority shall be determined by applicable law. Nothing in this Section preserves an appointment or authority that applicable law terminates or suspends.

# General Provisions and Definitions

## Governing Law; Validity; Severability

This Power of Attorney shall be governed and construed according to the law of Arizona, except where another jurisdiction necessarily governs a particular transaction or property interest. I intend it to be recognized to the fullest extent permitted in other jurisdictions. If any provision or grant of authority is invalid or unenforceable, the remaining provisions shall continue to the fullest extent they can operate independently.

## Construction

Headings are for convenience only. Singular includes plural and plural includes singular as context requires. References to law include applicable successor provisions. Powers are cumulative unless otherwise stated, but a specific limitation controls over a general grant. No provision grants a special power that applicable law requires to be expressly or specifically granted unless the required authority appears in this Power of Attorney.

## Copies, Electronic Records, and Prior Acts

To the extent permitted by law, this Power of Attorney and related certifications, acceptances, amendments, or revocations may be maintained or transmitted electronically and in counterparts. Execution of this Power of Attorney shall comply with Arizona law. A legally sufficient copy may evidence authority. I ratify lawful acts undertaken by my Agent within granted authority, but not acts exceeding that authority or incapable of lawful ratification.

## Definitions

"Principal" means the individual executing this Power of Attorney. "Agent" or "Attorney-in-Fact" means a person authorized to act for me under this instrument, including a successor while serving. "Property" includes any real or personal, tangible or intangible, legal or equitable interest owned by or payable to me. "Digital Assets" means electronic records, accounts, communications, electronically stored information, digital property, virtual currency, digital wallets, intellectual property, and comparable digital rights or interests. "Trust" means a trust in which I am a settlor, trustmaker, grantor, beneficiary, Trustee, holder of a power, or other interested person, as context requires. "Estate Plan" includes my trust, Will, beneficiary designations, survivorship arrangements, transfer-on-death or payable-on-death designations, gifting plans, and other arrangements concerning ownership, management, or disposition of my property. "Applicable Law" means the law governing the validity, interpretation, execution, recognition, or exercise of the particular provision or power at issue. "Actual knowledge" means actual awareness of the relevant fact and does not impose an independent duty of investigation unless applicable law provides otherwise.

#! EXECUTION

@sub Declaration and Execution of Principal

I declare that I understand the nature and purpose of this Power of Attorney, that I execute it voluntarily, and that I intend to grant my Agent the authority stated here subject to its limitations and applicable law.

@line Executed in ____________________ County, Arizona.

@line DATED: ____________________, 20____

@sign {{name}}, Principal

@sub Witness and Notarial Attestation

I, {{name}}, sign or direct the signing of this Power of Attorney willingly as my free and voluntary act, and declare that I am at least eighteen years of age, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Principal

I, ______________________________, as witness, declare that the Principal signed or directed the signing of this Power of Attorney willingly, and that I signed as witness in the Principal's presence and hearing. I am not the Agent, the Agent's spouse or child, or the notary public.

@sign Witness

@line STATE OF ARIZONA

@line County of ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, Principal, and subscribed and sworn to before me by ______________________________, Witness, on ____________________.

@sign Notary Public

@line My commission expires: ____________________
`;

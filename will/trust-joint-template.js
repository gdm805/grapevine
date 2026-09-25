window.TRUST_JOINT_TEMPLATE = String.raw`
// ==========================================================================
//  GRAPEVINE  |  REVOCABLE LIVING TRUST  |  JOINT (MARRIED / DOMESTIC PARTNERS)
//  Converted word for word from your file Grapevine_Coder_Ready_V12_Joint_RLT_All_Section_Numbers_Fully_Corrected.docx
//  (the controlled document), with a few articles left out for now to keep the document to a
//  reasonable length -- see will/NOTES-ON-YOUR-JOINT-TRUST.txt for exactly what and why.
//  The state-specific signing page is shared with the single trust: will/trust-state-text.js.
// ==========================================================================
@set draft_watermark = yes
@set draft_label = SAMPLE - NOT FOR SIGNING

[[if trust_starts_with_the=YES]]
@center **TRUST AGREEMENT FOR**
[[else]]
@center **TRUST AGREEMENT FOR THE**
[[end]]
@center **{{trust_name}}**

This Revocable Living Trust Agreement (the "Trust Agreement") is made by {{name1}} and {{name2}} (collectively, the "Trustmakers").

[[if trust_type=NEW]]

The Trustmakers create this Joint Revocable Living Trust for the management and administration of the Trust Estate during their lifetimes, during any period of Incapacity, upon the death of the first Trustmaker to die, and after the death of the surviving Trustmaker.

The Trust created by this Trust Agreement shall be known as {{trust_name}} (the "Trust").

[[else]]

The Trustmakers execute this Trust Agreement as a complete restatement of the trust originally established as {{orig_trust_name}} on {{orig_trust_date}}.

This restatement replaces the prior governing provisions of that trust but does not create a new trust. The Trust retains its original date of creation, identity, continuity, and all property then held by or for the Trust.

The Trust shall continue to be known as {{trust_name}} (the "Trust").

[[end]]

# TRUST CREATION

## Declaration of Capacity

The Trustmakers execute this Trust Agreement freely and voluntarily. Each Trustmaker declares that the Trustmaker is at least eighteen (18) years of age, possesses the legal capacity to create or continue this Trust, understands the nature and effect of this Trust Agreement, and intends to establish or continue the Trust according to its terms.

## Trust Purposes

The purposes of this Trust are:

(a) to hold, manage, invest, protect, and administer the Trust Estate during the Trustmakers' lifetimes;

(b) to provide for the management of the Trust Estate during any period of either Trustmaker's Incapacity;

(c) to provide for the Trustmakers during their lifetimes and to provide for administration following the death of the first Trustmaker to die; and

(d) to provide for the administration and distribution of the Trust Estate after the death of the surviving Trustmaker.

Whenever this Trust Agreement refers to the "purposes of this Trust," it refers to the purposes stated in this Section.

## Effective Date

[[if trust_type=NEW]]

This Trust is established, and this Trust Agreement becomes effective, when the Trustmakers sign this Trust Agreement and property is transferred to or otherwise held by the Trustee as Trust property.

[[else]]

This restatement becomes effective when signed by the Trustmakers. The Trust itself continues from its original date of creation.

[[end]]

## Trust Property

[[if trust_type=NEW]]

The Trust Estate consists of property transferred, assigned, conveyed, retitled, delivered, or otherwise lawfully made subject to this Trust, including property identified on Schedule A to the extent effectively transferred to the Trust.

Property later transferred to or acquired by the Trust shall also become part of the Trust Estate.

[[else]]

All property held by or for the Trust immediately before this restatement shall continue to be held under this Trust Agreement without requiring a new transfer solely because of this restatement.

Property later transferred to or acquired by the Trust shall also become part of the Trust Estate.

[[end]]

## Property Characterization {#sec_property_characterization}

@sub Preservation of Property Character

Property transferred to this Trust shall retain the same character it had immediately before the transfer, including as the separate property of either Trustmaker, jointly owned property of both Trustmakers, or community, quasi-community, or marital property, as applicable. Proceeds, substitutions, exchanges, and reinvestments of such property shall retain that character to the extent provided by applicable law. The transfer of property to this Trust shall not, by itself, change its character.

@sub Authority Over Property

The Trustee's authority over separate property, jointly owned property, and community, quasi-community, or marital property shall be subject to the respective ownership rights of the Trustmakers and applicable law. Creation of this Trust and transfer of property to it shall not, by themselves, enlarge the rights of either Trustmaker in property owned by the other Trustmaker or alter either Trustmaker's ownership interest in jointly owned or community, quasi-community, or marital property.

@sub Records and Segregation

The Trustee shall maintain records reasonably sufficient to identify and preserve the character of property held in the Trust and, when reasonably necessary for that purpose, shall separately account for or segregate property having different ownership characteristics. This requirement shall terminate upon the death of the first Trustmaker, except to the extent continued identification, accounting, or segregation is required for administration of the Trust or by applicable law.

## Initial Trustees

Each Trustmaker shall serve as an initial Trustee. While both Trustmakers are serving, they shall act as Co-Trustees subject to this Trust Agreement.

The Trustmakers accept the office of Trustee and shall hold, administer, and distribute the Trust Estate according to this Trust Agreement.

## Governing Law

This Trust shall be governed by the laws of {{state}}, except to the extent federal law controls.

## Principal Place of Administration

The Trustee may change the principal place of administration or situs of the Trust when permitted by applicable law and reasonably appropriate for the administration of the Trust.

A change in the principal place of administration or situs shall not, by itself, change the law governing the validity or construction of this Trust unless applicable law or a valid exercise of authority under this Trust provides otherwise.

# FAMILY

## Marital Status

[[if marital_status=MARRIED]]

The Trustmakers are married.

[[else]]

The Trustmakers are registered domestic partners.

[[end]]

## Children

[[if has_children]]

The Trustmakers have the following children:

[[each children]]

{{child}}

[[end]]

For purposes of this Trust Agreement, each person identified above is a Child of the Trustmakers.

[[else]]

The Trustmakers have no children.

[[end]]

[[if has_excluded]]

## Intentional Omission

The Trustmakers intentionally exclude the following person or persons from receiving any benefit under this Trust:

[[each excluded]]

{{excluded_name}} ({{excluded_relationship}}) shall be treated as having predeceased both Trustmakers.

[[end]]

[[end]]

## After-Born and Later-Adopted Children

Any child of either Trustmaker born or legally adopted after the execution of this Trust Agreement shall be treated as though specifically identified as a child of that Trustmaker under this Article.

# SUCCESSOR TRUSTEE

## Appointment of Successor Trustee

If both Trustmakers are serving as Co-Trustees and one Trustmaker dies, becomes incapacitated, resigns, or otherwise ceases to serve, the other Trustmaker shall continue to serve as sole Trustee while willing and able to serve.

If no Trustmaker is then willing and able to serve as Trustee, the following Successor Trustee or Successor Co-Trustees shall serve as provided below:

[[if trustee_mode=SUCCESSIVE]]

The following Successor Trustees shall serve, one at a time, in the order listed:

[[each successors]]

{{successor}}

[[end]]

[[else]]

## The following Successor Co-Trustees shall serve together:

[[each cotrustees]]

{{cotrustee}}

[[end]]

If any Co-Trustee ceases to serve, the remaining Co-Trustee or Co-Trustees shall continue to serve while willing and able to serve.

The Co-Trustees shall administer the Trust in accordance with [[ref sec_cotrustees]] through [[ref sec_written_dissent]].

[[end]]

## Removal and Appointment by Trustmakers

While both Trustmakers are living and have legal capacity, the Trustmakers acting together may remove any acting or designated Successor Trustee and appoint a different Successor Trustee by a written instrument signed by both Trustmakers.

If one Trustmaker is incapacitated, the Trustmaker having legal capacity may remove any acting or designated Successor Trustee and appoint a different Successor Trustee by a written instrument signed by that Trustmaker.

After the death of the first Trustmaker, the surviving Trustmaker may remove any acting or designated Successor Trustee and appoint a different Successor Trustee while the surviving Trustmaker has legal capacity, and any portion of the Trust remains revocable by the surviving Trustmaker.

A newly appointed Successor Trustee shall assume office upon accepting the appointment in writing or by undertaking the duties of Trustee.

## Appointment by Beneficiaries

If no Trustee is then serving and no designated Successor Trustee is willing and able to serve, a majority of the Vested Beneficiaries may appoint a Successor Trustee or one or more Co-Trustees by written instrument.

If the Trustee being replaced was required to satisfy Section 672(c) of the Internal Revenue Code, any Successor Trustee appointed under this Section must satisfy the same requirement.

If the Vested Beneficiaries fail to appoint a Successor Trustee within a reasonable time, any interested person may petition a court of competent jurisdiction to appoint a Trustee.

For purposes of this Section, charitable organizations shall not be considered beneficiaries.

## Vacancy in Trusteeship

A vacancy in the office of Trustee does not terminate this Trust. The Trust shall continue until a Successor Trustee assumes office under this Trust Agreement or is appointed by a court of competent jurisdiction.

# TRUSTMAKERS' RESERVED POWERS {#art_reserved_powers}

## General Reservation of Powers

While the Trust remains revocable, each Trustmaker reserves the rights and powers provided in this Article to the extent exercisable by that Trustmaker.

Each Trustmaker may independently exercise reserved powers with respect to that Trustmaker's separate property. Reserved powers affecting jointly owned property or community, quasi-community, or marital property shall be exercised by both Trustmakers, except to the extent otherwise permitted by applicable law.

## Amendment, Revocation, or Restatement While Both Trustmakers Have Capacity

While both Trustmakers are living and have legal capacity, either Trustmaker may amend or revoke this Trust Agreement with respect to that Trustmaker's separate property and provisions relating solely to that property.

Any amendment or revocation affecting jointly owned property, community, quasi-community, or marital property, or provisions applicable to both Trustmakers or the Trust generally must be made by both Trustmakers. Any restatement of this Trust Agreement must be made by both Trustmakers.

An amendment, revocation, or restatement must be made by a written instrument signed by each Trustmaker whose consent is required, clearly stating the intended action, and delivered to the Trustee.

If each Trustmaker whose consent is required is then serving as Trustee, signing the written instrument constitutes delivery.

A valid restatement replaces the governing provisions of this Trust Agreement while preserving the identity and continuity of the Trust.

## Withdrawal of Property

While a Trustmaker is living and has legal capacity, that Trustmaker may withdraw that Trustmaker's separate property from the Trust at any time.

Jointly owned property and community, quasi-community, or marital property may be withdrawn with the consent of both Trustmakers, except to the extent otherwise permitted by applicable law.

A withdrawal of property does not, by itself, amend or revoke any other provision of this Trust Agreement.

## Addition of Property

Either Trustmaker may transfer additional property to the Trust. Property added to the Trust shall retain its character as provided in this Trust Agreement.

## Incapacity of One Trustmaker

If one Trustmaker becomes incapacitated while the other Trustmaker has legal capacity, the Trustmaker having legal capacity may continue to exercise all reserved powers with respect to that Trustmaker's separate property.

The Trustmaker having legal capacity may exercise powers with respect to jointly owned property and community, quasi-community, or marital property only to the extent permitted by applicable law. The Trustmaker having legal capacity may not exercise a reserved power belonging to the incapacitated Trustmaker with respect to the incapacitated Trustmaker's separate property. Except as otherwise authorized by this Trust Agreement or applicable law, the incapacity of one Trustmaker does not transfer that Trustmaker's reserved powers to the other Trustmaker.

## Exercise of Reserved Powers During Incapacity

A reserved power belonging to an incapacitated Trustmaker may be exercised on behalf of that Trustmaker only to the extent authorized by this Trust Agreement and applicable law. No person acting on behalf of an incapacitated Trustmaker may amend, revoke, or restate this Trust Agreement unless the authority to exercise that power is expressly granted by a valid legal instrument and its exercise is permitted by applicable law.

## Restoration of Capacity {#def_restoration}

If an incapacitated Trustmaker regains legal capacity, that Trustmaker's reserved powers shall resume to the extent the Trust remains revocable, and those powers have not otherwise terminated.

## Death of First Trustmaker

Upon the death of the first Trustmaker, all powers reserved personally to the deceased Trustmaker terminate.

The surviving Trustmaker shall continue to possess and may exercise all powers reserved to the surviving Trustmaker to the extent those powers remain exercisable under this Trust Agreement and applicable law.

The surviving Trustmaker may not exercise a reserved power to alter any portion of the Trust that became irrevocable upon the first Trustmaker's death.

## Powers of Surviving Trustmaker

After the death of the first Trustmaker, the surviving Trustmaker may amend, revoke, or restate any portion of the Trust that remains revocable by the surviving Trustmaker and may withdraw property from that portion of the Trust.

Any amendment, revocation, or restatement must be made by a written instrument signed by the surviving Trustmaker that clearly states the intended action and is delivered to the Trustee. If the surviving Trustmaker is serving as Trustee, signing the written instrument constitutes delivery.

## Irrevocable Portions of Trust

No amendment, revocation, restatement, withdrawal, or other exercise of a reserved power may alter a portion of the Trust that has become irrevocable, except to the extent permitted by applicable law.

## Effect of Revocation

Upon revocation of all or any portion of the Trust, the Trustee shall transfer the affected Trust property to the person or persons entitled to receive it according to their respective ownership interests, unless the instrument of revocation validly directs otherwise.

## Termination of Reserved Powers

All remaining reserved powers terminate upon the death of the surviving Trustmaker. Thereafter, the Trust shall be administered and distributed according to its terms.

# OFFICE OF THE TRUSTEE

## Office of Trustee

The Trustee holds legal title to the Trust Estate solely in a fiduciary capacity and shall administer the Trust Estate according to this Trust Agreement.

## Qualification and Acceptance

A person nominated as Trustee is not required to serve. A person nominated as Trustee accepts the office by signing a written Acceptance of Trusteeship or by voluntarily performing the duties of Trustee.

## Resignation

A Trustee may resign at any time by delivering written notice to the other acting Trustee(s), if any, otherwise to the next designated Successor Trustee. The resignation becomes effective on the date stated in the notice or, if no date is stated, upon delivery to the other acting Trustee or Co-Trustee.

## Vacancy

If a Trustee ceases to serve and a designated Successor Trustee accepts the office, the Successor Trustee shall immediately assume the office of Trustee.

If no designated Successor Trustee is willing or able to serve, a Successor Trustee may be appointed as provided in this Trust Agreement. If no appointment is made, a court having jurisdiction over the Trust may appoint a Trustee.

## Transfer of Office

Upon assuming office, a Successor Trustee succeeds to all fiduciary rights, powers, duties, and responsibilities of the preceding Trustee, in the capacity of Trustee, without further conveyance, assignment, or court order.

## Successor Trustee and Prior Administration

A Successor Trustee is not liable for any act or omission of a predecessor Trustee occurring before the Successor Trustee assumes the office of Trustee unless otherwise provided by applicable law.

Upon accepting the office, the Successor Trustee shall take reasonable steps to obtain control of the Trust Estate and its administration. The Successor Trustee may rely in good faith upon the records, accounts, inventories, tax returns, reports, and other information received from the predecessor Trustee unless the Successor Trustee has actual knowledge of a breach of trust, material inaccuracy, or other circumstance requiring further inquiry.

A Successor Trustee has no duty to investigate the acts or omissions of a predecessor Trustee except to the extent required by applicable law or when the Successor Trustee has actual knowledge of facts that would cause a reasonably prudent Trustee to make further inquiry.

## Co-Trustees {#sec_cotrustees}

The provisions of this Section govern persons acting in the capacity of Co-Trustee and do not limit any power held by a Trustmaker in the capacity of Trustmaker under [[ref art_reserved_powers]].

Any Co-Trustee may perform Routine Administrative Acts independently.

Except for Routine Administrative Acts, as defined in [[ref def_routine]], no Co-Trustee may take unilateral action affecting the administration, investment, distribution, or ownership of the Trust Estate unless approved by a majority of the Co-Trustees then serving. If only two Co-Trustees are serving, both Co-Trustees must approve the action.

If the two Co-Trustees cannot agree on an action requiring their joint approval, they shall first attempt to resolve the disagreement through mediation. If mediation is unsuccessful, either Co-Trustee may petition a court having jurisdiction over the Trust for appropriate instructions.

## Delegation of Duties

The Co-Trustees may, by the approval required under [[ref sec_cotrustees]], delegate specific administrative duties to one or more Co-Trustees.

A delegation does not relieve any delegating Co-Trustee of the duty to act prudently, reasonably supervise the delegated duties, or take appropriate action to prevent or remedy a breach of trust.

A delegation may be modified or revoked by the approval required under [[ref sec_cotrustees]].

## Reliance Upon Another Co-Trustee

A Co-Trustee may rely in good faith upon information provided by another Co-Trustee concerning matters assigned to that Co-Trustee unless the relying Co-Trustee knows, or reasonably should know, that the information is inaccurate.

## Written Dissent {#sec_written_dissent}

A Co-Trustee who disagrees with a proposed action may record that disagreement in writing before the action is taken.

A Co-Trustee who timely records a written dissent shall not be liable for the action taken by the remaining Co-Trustee or Co-Trustees unless the dissenting Co-Trustee participated in, directed, concealed, or knowingly permitted a breach of trust.

## Trustee Compensation and Reimbursement

A Trustee is entitled to reasonable compensation for services performed in administering the Trust unless this Trust Agreement expressly provides otherwise.

A Trustee is also entitled to reimbursement from the Trust Estate for reasonable expenses properly incurred in the administration, protection, or preservation of the Trust.

# TRUSTEE POWERS

## General Authority

The Trustee shall have all powers conferred by this Trust Agreement, applicable law, and those necessary or appropriate to administer, protect, preserve, invest, manage, distribute, and dispose of the Trust Estate in accordance with the purposes of this Trust.

The powers granted by this Article are intended to supplement, and not limit, any powers otherwise granted by applicable law.

## Real Property

The Trustee may acquire, own, possess, improve, repair, maintain, lease, exchange, partition, subdivide, dedicate, mortgage, refinance, encumber, option, grant easements affecting, develop, abandon, or sell real property upon any terms the Trustee determines appropriate.

## Tangible Personal Property

The Trustee may retain, use, store, insure, repair, improve, lease, exchange, donate, distribute, sell, or otherwise dispose of tangible personal property.

## Financial Accounts

The Trustee may open, maintain, modify, transfer, consolidate, or close checking, savings, money market, brokerage, and other financial accounts and may deposit, withdraw, transfer, invest, or otherwise manage funds held in those accounts.

## Investments

The Trustee may retain existing investments or invest and reinvest Trust assets in any kind of real or personal property, security, investment, or financial product that the Trustee determines appropriate under the circumstances.

## Business Interests

The Trustee may acquire, retain, vote, exchange, contribute to, reorganize, merge, dissolve, liquidate, or dispose of any interest in a sole proprietorship, partnership, limited liability company, corporation, or other business entity.

## Borrowing

The Trustee may borrow money, refinance existing obligations, pledge or encumber Trust property as security, renew or extend indebtedness, and execute notes, deeds of trust, mortgages, security agreements, guarantees, and other financing documents.

## Taxes

The Trustee may prepare, sign, file, amend, contest, compromise, settle, and pay tax returns, tax liabilities, interest, penalties, and related obligations and may make elections permitted under applicable tax law.

The Trustee may allocate tax items among the Trust and its beneficiaries to the extent permitted by applicable law.

## Insurance

The Trustee may purchase, maintain, modify, renew, or terminate insurance of every kind protecting the Trust Estate, the Trustee, or any Trust property and may collect, compromise, or settle insurance claims.

## Claims and Litigation

The Trustee may assert, defend, compromise, settle, arbitrate, mediate, release, or abandon any claim or legal proceeding involving the Trust Estate and may execute releases, receipts, satisfactions, and other documents relating thereto.

## Employment of Professionals

The Trustee may employ and compensate attorneys, accountants, investment advisers, financial advisers, real estate brokers, appraisers, custodians, property managers, tax professionals, and other agents or professionals reasonably necessary for the administration of the Trust.

## Intellectual Property

The Trustee may acquire, protect, register, license, assign, enforce, compromise, or dispose of copyrights, trademarks, patents, trade names, domain names, royalties, and other intellectual property rights.

## Digital Assets

## The Trustee may:

(a) access, obtain, control, manage, use, preserve, archive, copy, transfer, sell, distribute, abandon, delete, close, or otherwise administer Digital Assets;

(b) access and manage computers, mobile devices, electronic storage devices, online accounts, cloud-storage accounts, digital wallets, and other systems or devices containing or providing access to Digital Assets;

(c) obtain usernames, passwords, authentication credentials, private keys, seed phrases, encryption keys, recovery information, and other information reasonably necessary to access or administer Digital Assets;

(d) request and obtain from a custodian or service provider any catalog, record, information, or content of electronic communications that the Trustmakers have authorized the Trustee to access or receive and that may lawfully be disclosed to the Trustee;

(e) consent to terms of service, privacy policies, authentication procedures, and other reasonable requirements imposed by a custodian or service provider;

(f) employ attorneys, accountants, technology professionals, digital-asset custodians, cybersecurity professionals, and other agents reasonably necessary to identify, secure, recover, value, access, or administer Digital Assets; and

(g) execute and deliver certifications, consents, releases, affidavits, instructions, and other documents reasonably necessary to exercise the powers granted under this Section.

The authority granted under this Section constitutes the Trustmakers' express consent and authorization for the Trustee to access and administer Digital Assets, including electronic communications, to the fullest extent permitted by applicable law.

## Methods of Distribution

The Trustee may make distributions in cash or in kind, divide or allocate property on a non-pro-rata basis, distribute undivided interests, establish reserves, obtain receipts, rely upon valuations reasonably believed to be accurate, and make equitable adjustments among beneficiaries when reasonably necessary to make or complete a distribution.

## Execution of Documents

The Trustee may execute, acknowledge, verify, certify, and deliver any document reasonably necessary or appropriate to carry out the purposes of this Trust and exercise the Trustee's powers.

## Environmental Powers

The Trustee may inspect property; conduct environmental assessments; remediate; comply with environmental laws; deal with governmental agencies; refuse/abandon property where legally permissible; allocate expenses; employ environmental professionals.

## Small Business

The Trustee may continue, operate, reorganize, incorporate, liquidate, sell, contribute capital to, borrow for, and otherwise manage a closely held business; exercise ownership and voting rights; retain concentrated interests; employ management.

## S-Corporation Stock

The Trustee may preserve S-election where appropriate; make permitted elections; establish or administer qualifying trusts such as QSST/ESBT where applicable; distribute or dispose of stock when necessary to avoid jeopardizing eligibility.

## Professional Practice

The Trustee may preserve value while complying with licensing law; employ qualified professionals; arrange temporary management; sell or transfer the practice or its assets to legally qualified persons or entities; wind down the practice when continuation is not permitted.

## Other Administrative Powers

The Trustee may execute contracts, receipts, releases, deeds, assignments, bills of sale, affidavits, certificates, elections, consents, and other instruments reasonably necessary to administer the Trust Estate.

# LIFETIME ADMINISTRATION

## Lifetime Control

While both Trustmakers are living and have legal capacity, each Trustmaker may use, manage, control, invest, withdraw, spend, distribute, gift, or otherwise deal with that Trustmaker's separate property held in the Trust, including income and principal, as though the Trust had not been created.

The Trustmakers may exercise those rights with respect to jointly owned property and community, quasi-community, or marital property according to their respective ownership rights and applicable law.

## Reliance on Trustmakers' Instructions

While both Trustmakers have legal capacity, the Trustee may rely upon instructions given by a Trustmaker concerning that Trustmaker's separate property without further inquiry.

The Trustee may rely upon instructions concerning jointly owned property or community, quasi-community, or marital property to the extent those instructions are authorized by both Trustmakers or otherwise permitted by applicable law.

The Trustee shall not be liable for acting in good faith in accordance with instructions authorized under this Section.

## Incapacity of One Trustmaker

If one Trustmaker becomes incapacitated as determined under [[ref def_incapacity]], the other Trustmaker shall continue to serve as Trustee while willing and able to serve.

The Trustee shall administer the incapacitated Trustmaker's separate property and the incapacitated Trustmaker's interest in jointly owned property and community, quasi-community, or marital property for the benefit of the incapacitated Trustmaker, subject to the rights and interests of the other Trustmaker and applicable law.

The Trustee may obtain medical evaluations reasonably necessary to determine the incapacitated Trustmaker's capacity and may pay the cost from the Trust Estate.

The Trustee may distribute as much of the income and principal available for the incapacitated Trustmaker as the Trustee determines appropriate for that Trustmaker's health, education, maintenance, support, comfort, and general welfare.

The Trustee may consider the incapacitated Trustmaker's other financial resources but is not required to do so.

The Trustee may make distributions directly to the incapacitated Trustmaker, reimburse expenses, purchase goods or services for the incapacitated Trustmaker, or pay expenses on that Trustmaker's behalf.

## Incapacity of Both Trustmakers

If both Trustmakers become incapacitated as determined under [[ref def_incapacity]], the Successor Trustee shall assume the office of Trustee and administer the Trust for the benefit of both Trustmakers.

The Trustee may obtain medical evaluations reasonably necessary to determine either Trustmaker's capacity and may pay the cost from the Trust Estate.

The Trustee may distribute as much of the income and principal available for either Trustmaker as the Trustee determines appropriate for that Trustmaker's health, education, maintenance, support, comfort, and general welfare.

The Trustee may consider either Trustmaker's other financial resources but is not required to do so.

The Trustee may make distributions directly to either Trustmaker, reimburse expenses, purchase goods or services for either Trustmaker, or pay expenses on that Trustmaker's behalf.

## Health Information Authorization

For purposes of determining a Trustmaker's Incapacity or Restoration of Capacity and administering this Trust during a Trustmaker's Incapacity, each Trustmaker authorizes the acting Trustee and any designated Successor Trustee to request, obtain, receive, and review that Trustmaker's protected health information and medical records to the extent reasonably necessary for those purposes.

This authorization includes information protected by the Health Insurance Portability and Accountability Act of 1996 ("HIPAA"), its implementing regulations, and other applicable federal or state health-information privacy laws.

Each Trustmaker intends that each person authorized under this Section be treated as a person authorized to receive that Trustmaker's protected health information to the fullest extent permitted by applicable law.

A health care provider, health plan, medical professional, facility, or other person or entity may rely upon a copy of this Trust Agreement or a certification of the authority granted under this Section.

## Personal Care

During a Trustmaker's incapacity, the Trustee may expend Trust assets available for that Trustmaker's benefit to provide for that Trustmaker's housing, health care, personal care, transportation, companionship, recreation, safety, and quality of life, even though those expenditures may reduce or eliminate the interests of remainder beneficiaries.

## Restoration of Capacity {#def_restoration}

Upon a Trustmaker's Restoration of Capacity as determined under [[ref def_restoration]], that Trustmaker shall resume the office of Trustee if legally entitled to serve.

A Successor Trustee serving solely because of the Incapacity of both Trustmakers shall cease serving when either Trustmaker has regained capacity and is willing and able to serve as Trustee, and shall promptly return possession and administration of the Trust Estate to that Trustmaker.

If one Trustmaker remained in office during the other Trustmaker's Incapacity, the restored Trustmaker shall resume serving as Co-Trustee with the other Trustmaker.

The acting Trustee shall execute any documents reasonably necessary to complete the transition unless otherwise ordered by a court or required by law.

## Standard of Lifetime Administration

During the joint lifetimes of the Trustmakers, the Trustee shall administer each Trustmaker's separate property for the benefit of that Trustmaker and shall administer jointly owned property and community, quasi-community, or marital property for the benefit of both Trustmakers, in each case according to their respective ownership rights and applicable law.

In administering property for a Trustmaker's benefit, the Trustee may use income and principal for that Trustmaker without regard to the interests of remainder beneficiaries.

# DEATH OF FIRST TRUSTMAKER

## Death of First Trustmaker

Upon the death of the first Trustmaker, the surviving Trustmaker shall continue to serve as Trustee if willing and able to serve.

If the surviving Trustmaker is unwilling or unable to serve, the designated Successor Trustee shall assume the office of Trustee as provided in this Trust Agreement.

## Administration Following First Death

The Trustee shall identify, collect, protect, preserve, manage, and value the Trust Estate and shall take all actions reasonably necessary to administer the Trust following the death of the first Trustmaker.

The Trustee may collect property payable to the Trust, maintain appropriate insurance, safeguard Trust property, obtain appraisals or other valuations, employ professionals, and establish reasonable reserves for expenses, taxes, liabilities, and costs of administration.

## Payment of Debts and Expenses

The Trustee shall pay or provide for expenses, debts, taxes, and other obligations properly payable from the Trust Estate in accordance with this Trust Agreement and applicable law.

In doing so, the Trustee shall comply with applicable creditor-claim procedures, statutory priorities, rights of reimbursement or contribution, and limitations upon the property from which an obligation may be paid.

## Determination of Property Interests

Before allocating the Trust Estate, the Trustee shall determine the respective property interests of the surviving Trustmaker and the deceased Trustmaker in accordance with [[ref sec_property_characterization]] and applicable law.

The Trustee may consider deeds, account records, property schedules, agreements between the Trustmakers, tax returns, purchase and contribution records, tracing evidence, and other information reasonably believed to be reliable.

The manner in which title is held may be considered but is not necessarily conclusive if other reliable evidence establishes a different property character or ownership interest.

In determining the net property interests of the Trustmakers, the Trustee shall take into account liabilities, reimbursement claims, and other obligations properly attributable to the property or either Trustmaker.

If the character, ownership, or proper allocation of property cannot be reasonably determined, the Trustee may obtain legal, tax, accounting, appraisal, or other professional assistance, resolve the matter by agreement with interested persons to the extent permitted by applicable law, or petition a court having jurisdiction over the Trust for instructions.

## Allocation of Trustmakers' Property

The Trustee shall allocate the surviving Trustmaker's separate property and the surviving Trustmaker's interest in jointly owned property, community, quasi-community, or marital property, and other property to the Survivor's Trust.

The deceased Trustmaker's separate property and the deceased Trustmaker's interest in jointly owned property, community, quasi-community, or marital property, and other property shall be allocated or distributed according to the first-death funding provisions of this Trust Agreement.

Property passing by right of survivorship, beneficiary designation, contract, or operation of law shall be treated according to the rights created by the governing instrument and applicable law.

A valid marital agreement, domestic-partnership agreement, community-property agreement, property-characterization agreement, or other enforceable agreement affecting ownership or disposition of property shall control to the extent required by applicable law.

## Valuation

The Trustee shall determine the value of property as reasonably necessary to administer and allocate the Trust Estate.

The Trustee may rely upon appraisals, account statements, professional valuations, tax valuations, or other reasonable methods of valuation.

## Allocation and Funding

After determining the respective property interests of the Trustmakers and paying or reserving for the expenses and obligations of administration, the Trustee shall make the allocations and distributions provided in this Section.

[[if has_first_death_gifts]]

Before allocating the deceased Trustmaker's remaining property to the Survivor's Trust or Family Trust, the Trustee shall distribute any Specific Gifts becoming distributable at the first Trustmaker's death under this Trust Agreement. Those gifts shall be charged against the deceased Trustmaker's property unless the governing gift provision expressly provides otherwise.

[[end]]

The Trustee shall allocate the surviving Trustmaker's property to the Survivor's Trust.

The Trustee shall allocate the deceased Trustmaker's property to the Family Trust and administer that property according to this Trust Agreement.

## Method of Allocation

The Trustee may allocate cash or property in kind, allocate undivided interests, and make non-pro-rata allocations among the trusts or distributions required under this Trust Agreement.

The Trustee may use values reasonably determined under this Article and may make adjustments necessary to account for differences in value, liabilities, tax basis, tax character, liquidity, or other relevant attributes of the property allocated.

An allocation need not divide each item of property proportionately if the aggregate value allocated to each trust or distribution satisfies the requirements of this Trust Agreement.

## Interim Administration

Until the required allocations and funding are completed, the Trustee may continue to hold and administer the Trust Estate as a single administrative fund.

The Trustee shall maintain records sufficient to identify the property, income, expenses, gains, losses, and liabilities properly attributable to the Survivor's Trust, any Family Trust required to be funded, and any other trust or beneficial interest.

## Tax Elections and Completion of Administration

The Trustee may make tax elections, allocations, divisions, and other tax-related decisions permitted by applicable law and may rely upon qualified tax professionals in making those decisions.

After completing the administration required under this Article, the Trustee shall administer the Survivor's Trust, any Family Trust funded under the applicable first-death funding provisions, and any other continuing trust according to their respective provisions.

Completion of administration under this Article does not terminate any continuing trust created under this Trust Agreement.

# SURVIVOR'S TRUST

## Creation and Funding of Survivor's Trust

Upon the death of the first Trustmaker, the Survivor's Trust shall consist of the property allocated to it under this Trust Agreement, together with all income, appreciation, reinvestments, and other property thereafter properly added to the Survivor's Trust.

The Survivor's Trust shall be separately accounted for and administered according to this Article.

## Revocability

During the surviving Trustmaker's lifetime and while having legal capacity, the surviving Trustmaker may amend, revoke, or restate the Survivor's Trust, in whole or in part.

Any amendment, revocation, or restatement shall apply only to the Survivor's Trust and shall not amend, revoke, alter, or affect the Family Trust.

## Control of Survivor's Trust

During the surviving Trustmaker's lifetime and while having legal capacity, the surviving Trustmaker may use, manage, control, invest, withdraw, spend, distribute, gift, or otherwise deal with the income and principal of the Survivor's Trust as though the Survivor's Trust had not been created.

The Trustee may rely upon the surviving Trustmaker's instructions concerning the administration or distribution of the Survivor's Trust without further inquiry.

## Additions to Survivor's Trust

The surviving Trustmaker may add property to the Survivor's Trust at any time.

Property subsequently transferred or allocated to the Survivor's Trust shall become part of the Survivor's Trust and shall be administered according to its terms.

## Incapacity of Surviving Trustmaker

If the surviving Trustmaker becomes incapacitated, the Trustee shall administer the Survivor's Trust for the benefit of the surviving Trustmaker.

During the surviving Trustmaker's incapacity, the Trustee may distribute to or for the benefit of the surviving Trustmaker as much of the income and principal of the Survivor's Trust as the Trustee determines advisable for the surviving Trustmaker's health, education, maintenance, and support.

The Trustee may make distributions directly to the surviving Trustmaker or apply them directly for the surviving Trustmaker's benefit.

The Trustee may consider other financial resources reasonably available to the surviving Trustmaker but is not required to do so.

## Restoration of Capacity {#def_restoration}

If the surviving Trustmaker's legal capacity is restored as determined under [[ref def_restoration]], the surviving Trustmaker shall resume the rights and powers provided under this Article.

## Separation from Family Trust

The Survivor's Trust and Family Trust are separate trusts after the death of the first Trustmaker.

Property allocated to the Survivor's Trust shall not become part of the Family Trust merely because the same Trustee administers both trusts.

Property allocated to the Family Trust shall not become part of the Survivor's Trust except pursuant to a distribution or other transfer expressly authorized by the terms of the Family Trust.

The Trustee shall maintain records sufficient to identify the property, income, expenses, distributions, and liabilities attributable to each trust.

## Death of Surviving Trustmaker

Upon the death of the surviving Trustmaker, the Survivor's Trust shall become irrevocable.

All powers reserved to the surviving Trustmaker over the Survivor's Trust shall terminate at that time.

The Trustee shall determine the then-remaining balance of the Survivor's Trust and shall pay or reserve from the Survivor's Trust for expenses, taxes, liabilities, and other obligations properly chargeable to the Survivor's Trust.

The Trustee shall maintain the identity of the Survivor's Trust separately from the Family Trust and any other trust or share then being administered.

# FAMILY TRUST

## Creation and Funding of Family Trust

Upon the death of the first Trustmaker, the Family Trust shall consist of the property allocated to it under this Trust Agreement, together with all income, appreciation, reinvestments, and other property thereafter properly added to the Family Trust.

The Family Trust shall be separately accounted for and administered according to this Article.

## Irrevocable Trust

Upon the death of the first Trustmaker, the Family Trust shall become irrevocable.

Except for an exercise of a power expressly granted under this Article, the surviving Trustmaker shall have no power to amend, revoke, terminate, or alter the beneficial interests in the Family Trust.

## Purpose

The Family Trust is established to preserve and administer the deceased Trustmaker's property for the benefit of the surviving Trustmaker during the surviving Trustmaker's lifetime and, after the surviving Trustmaker's death, for the deceased Trustmaker's descendants and other beneficiaries determined under this Article.

## Beneficial Enjoyment During Surviving Trustmaker's Lifetime

During the surviving Trustmaker's lifetime, the Trustee may distribute to or for the benefit of the surviving Trustmaker as much of the income and principal of the Family Trust as the Trustee determines advisable for the surviving Trustmaker's health, education, maintenance, and support.

In exercising this discretion, the Trustee may consider other financial resources reasonably available to the surviving Trustmaker but is not required to do so.

Any income or principal not distributed shall remain part of the Family Trust.

## Surviving Trustmaker Serving as Trustee

If the surviving Trustmaker serves as Trustee or Co-Trustee of the Family Trust, the surviving Trustmaker's authority to distribute income or principal to or for the surviving Trustmaker shall be limited to distributions for the surviving Trustmaker's health, education, maintenance, and support.

The surviving Trustmaker shall have no authority, solely by reason of serving as Trustee or Co-Trustee, to make distributions to or for the surviving Trustmaker beyond that standard.

## Preservation of Family Trust

Except as expressly authorized by this Article, the surviving Trustmaker may not withdraw, transfer, assign, pledge, encumber, appoint, or otherwise direct the disposition of property of the Family Trust.

The surviving Trustmaker's beneficial interest in the Family Trust does not give the surviving Trustmaker ownership of the Family Trust property or a right to compel distributions except as otherwise required by applicable law.

## Descendant Protection

The remaining Family Trust is intended to be preserved for the deceased Trustmaker's descendants.

The surviving Trustmaker shall have no general power of appointment over the Family Trust and shall have no power to appoint Family Trust property to the surviving Trustmaker, the surviving Trustmaker's estate, the surviving Trustmaker's creditors, or the creditors of the surviving Trustmaker's estate.

## Fixed Descendant Distribution

The surviving Trustmaker shall have no power to alter the persons entitled to receive the Family Trust after the surviving Trustmaker's death or the shares in which they are entitled to receive it.

## Administration at Death of Surviving Trustmaker

Upon the death of the surviving Trustmaker, the Trustee shall determine the then-remaining balance of the Family Trust and shall pay or reserve from the Family Trust for expenses, taxes, liabilities, and other obligations properly chargeable to the Family Trust.

The Trustee shall maintain the identity of the Family Trust separately from the Survivor's Trust and any other trust or share then being administered.

# DEATH OF SECOND TRUSTMAKER

## Assumption of Trusteeship

Upon the death of the surviving Trustmaker, the designated Successor Trustee who accepts the office shall assume responsibility for administering the Survivor's Trust, Family Trust, and any other trust or separate share then being administered under this Trust Agreement.

## Duties During Administration

The Trustee shall identify, collect, protect, preserve, manage, and value the property of each trust or separate share then being administered. The Trustee may collect property payable to the Trust, safeguard Trust assets, maintain appropriate insurance, obtain appraisals or other valuations when appropriate, employ professionals reasonably necessary for administration, and establish reasonable reserves for expenses, taxes, liabilities, and costs of administration.

## Payment of Debts and Expenses

The Trustee shall pay or provide for expenses, debts, taxes, and other obligations properly chargeable to each trust or separate share. In doing so, the Trustee shall comply with creditor-claim procedures, statutory priorities, rights of reimbursement or contribution, and limitations upon the property from which an obligation may be paid.

## Valuation

The Trustee shall determine the fair market value of property as of the surviving Trustmaker's date of death or another valuation date permitted by applicable law. The Trustee may rely upon appraisals, account statements, professional valuations, tax valuations, or any other reasonable method of valuation.

## Interim Distributions

The Trustee may make partial or interim distributions whenever the Trustee reasonably determines that doing so will not materially interfere with administration or the payment of lawful obligations.

## Completion and Distribution

After paying or making reasonable provision for lawful obligations, the Trustee shall complete administration and distribution of the Survivor's Trust under this Trust Agreement, the Family Trust under this Trust Agreement, and any other continuing trust or separate share according to its governing provisions. Specific Gifts becoming distributable at the surviving Trustmaker's death shall be made as provided under this Trust Agreement.

The Trustee shall preserve the separate identity of the Survivor's Trust, Family Trust, and any other separate trust or share and shall charge expenses, taxes, liabilities, gifts, and distributions to the property properly responsible for them under this Trust Agreement and applicable law.

## Final Distribution

After completing the administration required by this Article, the Trustee shall combine the then-remaining balances of the Survivor's Trust and the Family Trust and distribute the combined amount as follows:

[[each residuary]]

{{residuary_pct}}% to {{residuary_name}}, outright.

If {{residuary_name}} does not survive the surviving Trustmaker by the Required Survivorship Period, disclaims the share, or is otherwise ineligible to receive it,

[[if gift_contingent=DESCENDANTS]]

that share shall be distributed to that beneficiary's then-living descendants, by right of representation.

[[elif gift_contingent=NAMED]]

that share shall be distributed to {{gift_contingent_name}}.

[[elif gift_contingent=CHARITY]]

that share shall be distributed to {{gift_contingent_name}}.

[[else]]

that share shall be distributed under this Trust Agreement.

[[end]]

[[end]]

## Survivorship

A beneficiary must survive the surviving Trustmaker by thirty (30) days to receive a distribution under this Article.

A beneficiary who fails to survive the surviving Trustmaker by thirty (30) days shall be deemed to have predeceased the surviving Trustmaker for purposes of this distribution.

The share of a beneficiary deemed to have predeceased the surviving Trustmaker shall be distributed according to the applicable contingent distribution provisions for that beneficiary.

## Failure of Distribution

If neither a designated remainder beneficiary nor an applicable contingent beneficiary is entitled to receive property remaining in the combined trusts, the Trustee shall distribute that property to the persons who would then be the surviving Trustmaker's heirs under the intestacy laws of the state whose law governs the administration of the Trust, in the shares they would receive under those laws.

## Termination

The Survivor's Trust and the Family Trust shall each terminate when the Trustee has completed administration and distributed the combined remaining balance as provided in this Article.

The Trustee may retain reasonable reserves and complete any remaining administrative acts reasonably necessary before closing both trusts.

[[if has_any_gifts]]

# SPECIFIC GIFTS

[[if has_first_death_gifts]]

## Specific Gifts at First Death

Upon the death of the first Trustmaker to die, the Trustee shall distribute the Specific Gifts designated by that deceased Trustmaker to be made at that Trustmaker's death.

[[each first_death_gifts]]

{{gift_description}} to {{gift_beneficiary}}

If {{gift_beneficiary}} does not survive the first Trustmaker to die by the Required Survivorship Period, disclaims the Specific Gift, or is otherwise ineligible to receive it:

[[if gift_contingent=DESCENDANTS]]

the Specific Gift shall be distributed to that beneficiary's then-living descendants, by right of representation.

[[elif gift_contingent=NAMED]]

the Specific Gift shall be distributed to {{gift_contingent_name}}.

[[elif gift_contingent=CHARITY]]

the Specific Gift shall be distributed to {{gift_contingent_name}}.

[[else]]

the Specific Gift shall lapse and become part of the remainder of the Trust Estate.

[[end]]

[[end]]

[[end]]

[[if has_survivor_death_gifts]]

## Specific Gifts at Death of Surviving Trustmaker

Upon the death of the surviving Trustmaker, the Trustee shall make the following Specific Gifts from the Survivor's Trust:

[[each survivor_death_gifts]]

{{gift_description}} to {{gift_beneficiary}}

If {{gift_beneficiary}} does not survive the surviving Trustmaker by the Required Survivorship Period, disclaims the Specific Gift, or is otherwise ineligible to receive it:

[[if gift_contingent=DESCENDANTS]]

the Specific Gift shall be distributed to that beneficiary's then-living descendants, by right of representation.

[[elif gift_contingent=NAMED]]

the Specific Gift shall be distributed to {{gift_contingent_name}}.

[[elif gift_contingent=CHARITY]]

the Specific Gift shall be distributed to {{gift_contingent_name}}.

[[else]]

the Specific Gift shall lapse and become part of the remainder of the Trust Estate.

[[end]]

[[end]]

[[end]]

## Ademption

For a Specific Gift of identified property, the gift shall lapse if the property is not owned by the Trust when the gift becomes distributable, and the intended beneficiary shall have no right to receive substitute property or monetary compensation unless applicable law requires a different result.

## Encumbered Property

A beneficiary receiving specifically gifted property shall receive the property subject to any mortgage, lien, security interest, or other encumbrance existing when the gift becomes distributable.

## Abatement

If the property available for distribution is insufficient to satisfy all Specific Gifts that become distributable at the applicable Trustmaker's death after payment or provision for debts, expenses of administration, taxes, and other lawful obligations properly payable from that property, those Specific Gifts shall abate proportionately unless applicable law requires a different result.

## Indivisible Specific Gifts

If specifically gifted property cannot practicably be divided among the beneficiaries entitled to receive it, the Trustee may distribute undivided interests in the property or sell the property and distribute the net proceeds among those beneficiaries.

Nothing in this Section authorizes the Trustee to substitute other Trust property or monetary compensation for specifically gifted property that is not owned by the Trust when the gift becomes distributable.

## Beneficiary Disclaimer

A beneficiary may disclaim all or any portion of a Specific Gift as permitted by applicable law.

Unless an alternate disposition is provided for that Specific Gift, the disclaimed portion shall lapse and become part of the property otherwise distributable following the death at which the Specific Gift became distributable.

## Failure of Specific Gift

If a beneficiary of a Specific Gift fails to survive the applicable Trustmaker by the Required Survivorship Period, disclaims the gift, or is otherwise ineligible to receive it, and no alternate disposition is provided for that Specific Gift, the Specific Gift shall lapse and become part of the property otherwise distributable following the death at which the Specific Gift became distributable.

[[end]]

# DISTRIBUTION PROVISIONS

## Method of Distribution

Unless otherwise provided, the Trustee may make a distribution in cash, in kind, or partly in cash and partly in kind.

The Trustee may allocate particular assets among beneficiaries or trusts in satisfaction of their respective shares, using values determined by the Trustee as of a date reasonably related to the distribution.

## Beneficiary Unable to Receive Property

If an outright distribution is required for a beneficiary who is then a minor or incapacitated, the Trustee may apply the distribution directly for the beneficiary's benefit or pay or transfer it to a parent, legal guardian, custodian, caregiver, or other person or organization authorized to receive or apply property for the beneficiary's benefit.

The Trustee may make such a distribution without requiring the appointment of a legal guardian or other court-supervised fiduciary unless required by applicable law.

## Receipts and Releases

Before making a final distribution, the Trustee may require a beneficiary to execute a receipt, refunding agreement, or other appropriate acknowledgment.

No beneficiary shall be required to execute a release as a condition of receiving a distribution otherwise required by this Trust Agreement or applicable law.

## Completion of Distribution

Upon completing the distribution of a trust or separate share, the Trustee shall complete any remaining administrative acts reasonably necessary to close that trust or share.

# DEFINITIONS

## Trustmaker

Trustmaker means either person who creates this Trust. Together, they are the Trustmakers.

## Beneficiary

Beneficiary means any person or organization entitled to receive a benefit under this Trust Agreement.

## Survivor's Trust

Survivor's Trust means the separate revocable trust created upon the death of the first Trustmaker and funded with the property allocated to it under this Trust Agreement.

## Family Trust

Family Trust means the separate irrevocable trust created upon the death of the first Trustmaker and funded with the property allocated to it under this Trust Agreement.

## Child

Child means a person recognized as a Trustmaker's child under applicable law, including an adopted child.

A stepchild, foster child, or other person related only by marriage is not a Child unless specifically identified as a Child in this Trust Agreement.

## Descendants

Descendants mean all lineal descendants of an individual, regardless of generation.

Descendants include adopted persons and their descendants. Descendants do not include stepchildren, foster children, or persons related only by marriage unless specifically identified in this Trust Agreement.

## Digital Assets

Digital Assets include electronically stored information, online accounts, electronic communications, digital files, cryptocurrencies, digital wallets, domain names, websites, software, intellectual property, and other electronically maintained property or rights.

## Heirs

Heirs means the persons who would be entitled to inherit an individual's property under the laws of intestate succession of the applicable jurisdiction if that individual died without a valid will or other controlling estate-planning arrangement.

## Incapacity {#def_incapacity}

Incapacity means an individual's inability to effectively manage the individual's property or financial affairs because of illness, injury, mental or physical condition, cognitive impairment, or other cause.

An individual shall be considered incapacitated if incapacity is established by any of the following:

(a) Physician Determination

Two licensed physicians who have examined the individual provide written statements that, in their professional opinions, the individual is unable to effectively manage the individual's property or financial affairs;

(b) Court Determination

A court of competent jurisdiction determines that the individual is incapacitated, incompetent, or otherwise unable to manage the individual's property or financial affairs, or appoints a guardian or conservator of the individual's estate or property;

(c) Disappearance or Absence

The individual has disappeared or has been absent and cannot be located for a continuous period of at least 30 days, and the individual's whereabouts cannot be determined after reasonable inquiry; or

(d) Detention or Inability to Communicate

The individual is detained, confined, or otherwise unable to communicate or manage the individual's property or financial affairs under circumstances that make the individual's participation in administering the Trust impracticable.

## Required Survivorship Period

Required Survivorship Period means thirty (30) days unless a different period is expressly stated for a particular distribution.

## Restoration of Capacity {#def_restoration}

Restoration of Capacity means the restoration of an individual's ability to effectively manage the individual's property or financial affairs after the individual has previously been determined to be incapacitated.

## An individual's capacity shall be considered restored if:

(a) two licensed physicians who have examined the individual provide written statements that, in their professional opinions, the individual is able to effectively manage the individual's property or financial affairs; or

(b) a court of competent jurisdiction determines that the individual is no longer incapacitated or otherwise restores the individual's legal authority to manage the individual's property or financial affairs.

## Routine Administrative Acts {#def_routine}

Routine Administrative Acts means ordinary actions reasonably necessary for the day-to-day administration of the Trust that do not materially alter the beneficial interests of any beneficiary or involve a material exercise of discretion.

Routine Administrative Acts include depositing and transferring funds, paying ordinary expenses, maintaining records, obtaining information, communicating with financial institutions and professionals, signing routine administrative documents, and taking similar ministerial actions.

## Trust Estate

Trust Estate means all property held by the Trustee under this Trust Agreement at the applicable time, including income, appreciation, reinvestments, substitutions, and additions, except when the context refers specifically to the Survivor's Trust, Family Trust, or another separate trust or share.

## Trustee

Trustee means any person or entity then serving as Trustee under this Trust Agreement, whether as original Trustee, Successor Trustee, Co-Trustee, or Trustee of a separate trust or share, except when the context requires a more specific meaning.

## Vested Beneficiary {#def_vested}

Vested Beneficiary means a beneficiary who has a present, noncontingent right to receive all or a portion of the remainder of the Trust Estate or of a separate trust or share then being administered, whether outright or in further trust.

A beneficiary entitled only to a Specific Gift is not a Vested Beneficiary.

A minor or incapacitated Vested Beneficiary may act through the beneficiary's legally authorized representative.

# GENERAL ADMINISTRATIVE TERMS

## Severability

If any provision of this Trust Agreement is determined to be invalid, illegal, or unenforceable, the remaining provisions shall remain valid and enforceable to the fullest extent permitted by applicable law.

## Notices

Any notice required or permitted under this Trust Agreement shall be in writing and may be delivered personally, by United States mail, by a nationally recognized overnight delivery service, or by electronic transmission to the extent permitted by applicable law.

Unless applicable law requires otherwise, notice shall be effective when personally delivered, when deposited in the United States mail with postage prepaid, when delivered to the overnight delivery service, or when electronically transmitted to the recipient's last known electronic address.

## Electronic Records and Signatures

Electronic records, electronic signatures, and electronically executed documents shall have the same force and effect as original written documents and handwritten signatures to the extent permitted by applicable law.

## Certification of Trust

The Trustee may execute and deliver a Certification of Trust or other evidence of the Trustee's authority in lieu of furnishing a complete copy of this Trust Agreement whenever permitted by applicable law.

## Reliance by Third Parties

Any person dealing with the Trustee in good faith may rely upon a Certification of Trust, affidavit, certificate, or other written evidence of the Trustee's authority without further inquiry to the fullest extent permitted by applicable law.

## Trustee Records and Accounting

The Trustee shall maintain reasonably complete records of the administration of the Trust Estate and shall provide information and accountings to beneficiaries as required by applicable law and as the Trustee otherwise determines appropriate.

## Principal and Income

The Trustee shall allocate receipts and disbursements between principal and income in accordance with applicable law governing the allocation of trust receipts and disbursements.

To the extent permitted by applicable law, the Trustee may make reasonable adjustments between principal and income whenever the Trustee determines that doing so is necessary to administer the Trust Estate impartially, carry out the purposes of this Trust Agreement, or fulfill the Trustee's fiduciary duties.

The Trustee's good-faith allocation or adjustment shall be binding upon all interested persons absent manifest error or an abuse of discretion.

## Trustee Bond

No Trustee shall be required to furnish a bond unless required by a majority, by number, of the Vested Beneficiaries.

A minor or incapacitated Vested Beneficiary shall be included in determining the majority, and that beneficiary's vote may be exercised by the beneficiary's legally authorized representative.

A beneficiary entitled solely to a Specific Gift and a contingent beneficiary shall not be counted in determining the majority.

If a majority requires a bond, the Trustee shall furnish a bond in a reasonable amount sufficient to protect the Trust Estate. The reasonable cost of the bond shall be paid from the Trust Estate.

## No Contest Clause

To the fullest extent permitted by applicable law, if a beneficiary directly contests the validity of this Trust Agreement or any provision of it, or otherwise brings a proceeding to invalidate or defeat a provision of this Trust Agreement under circumstances in which a no-contest provision may lawfully be enforced, any gift, distribution, or other beneficial interest provided for that beneficiary shall be subject to the consequences permitted by applicable law.

This Section shall not apply to any contest, petition, proceeding, claim, or other action for which enforcement of a no-contest provision is prohibited by applicable law.

This Section shall be construed narrowly and shall not prevent a beneficiary from seeking an accounting, requesting instructions concerning the administration of the Trust, enforcing the Trustee's fiduciary duties, or pursuing any other remedy protected from enforcement of a no-contest provision by applicable law.

## Good Faith

The Trustee shall administer the Trust in good faith and in a manner reasonably calculated to carry out the Trustmakers' intent as expressed in this Trust Agreement.

## Headings

Article titles, section headings, captions, and the table of contents are provided solely for convenience and shall not affect the interpretation of this Trust Agreement.

## Gender and Number

Unless the context clearly requires otherwise, words used in the singular include the plural, words used in the plural include the singular, and words of one gender include every other gender.

## Rules of Construction

This Trust Agreement shall be construed as a whole to give effect to every provision whenever reasonably possible. No presumption shall arise in favor of or against any provision because of the identity of the person who drafted this Trust Agreement.

# EXECUTION

## Execution

The Trustmakers execute this Trust Agreement as of the date stated below, in {{county}}, {{state}}, and declare that this instrument constitutes their Joint Revocable Living Trust.

Each Trustmaker acknowledges having read this Trust Agreement, or having had it read and explained to that Trustmaker, and declares that it accurately reflects that Trustmaker's intentions.

Each Trustmaker further acknowledges executing this Trust Agreement voluntarily and with the intent that it be legally effective according to its terms.

@line Date: ______

@line Signature: ________________________________________________

@line {{name1}}, Trustmaker

@line Date: ______

@line Signature: ________________________________________________

@line {{name2}}, Trustmaker

[[include trust_execution]]
[[pagebreak]]

@center **SCHEDULE A**

@center **TRUST PROPERTY**

@sub Purpose

This Schedule A identifies property that the Trustmakers have designated for inclusion in the Trust Estate. Listing property on this Schedule A does not replace any deed, account registration, beneficiary designation, consent, endorsement, assignment, filing, or other transfer step required by law or by a financial institution, business entity, governmental agency, or other third party.

@sub Initial Trust Property

The Trustmakers assign, transfer, and deliver to the Trustee the property described below to the extent the property may be transferred by assignment and is not subject to additional transfer formalities. Property requiring additional transfer formalities is identified here for trust-funding purposes and becomes Trust property when those formalities are completed.

[[if asset_real_property]]

@sub Real Property

[[each real_property]]

@row Property|{{real_property_address}}
[[if real_property_reference]]
@row Description|{{real_property_reference}}
[[end]]
@row Ownership / Character|{{real_property_ownership}}

[[end]]

[[end]]

[[if asset_bank]]

@sub Bank and Cash Accounts

[[each bank_accounts]]

@row Institution|{{bank_institution}}
@row Account|{{bank_type}} ending in {{bank_last4}}
@row Ownership / Character|{{bank_ownership}}

[[end]]

[[end]]

[[if asset_brokerage]]

@sub Investment and Brokerage Accounts

[[each brokerage_accounts]]

@row Institution|{{brokerage_institution}}
@row Account|{{brokerage_type}} ending in {{brokerage_last4}}
@row Ownership / Character|{{brokerage_ownership}}

[[end]]

[[end]]

[[if asset_business]]

@sub Business Interests

[[each business_interests]]

@row Business / Entity|{{business_name}}
@row Interest|{{business_interest}}
@row Ownership / Character|{{business_ownership}}

[[end]]

[[end]]

[[if asset_tangible]]

@sub Tangible Personal Property

The Trustmakers assign to the Trustee their transferable household goods, furnishings, clothing, jewelry, artwork, collectibles, tools, equipment, and other tangible personal property intended for the Trust, subject to their respective ownership rights and property character, except property specifically excluded below or property requiring a separate certificate of title, registration, or other transfer formality.

[[end]]

@sub Additional Property

Additional property may be transferred to the Trust after the date of this Schedule A by deed, assignment, account registration, beneficiary designation where legally appropriate, or any other method permitted by applicable law and the governing instrument or institution.

@sub Trustmaker Confirmation

The Trustmakers confirm that this Schedule A reflects the property identified for inclusion in or funding of the Trust as of the date stated below.

Dated: {{signing_date}}

@line Signature: ________________________________________________

@line {{name1}}, Trustmaker

@line Signature: ________________________________________________

@line {{name2}}, Trustmaker
`;

window.TRUST_TEMPLATE = String.raw`
// ==========================================================================
//  GRAPEVINE  |  REVOCABLE LIVING TRUST  |  SINGLE TRUSTMAKER
//  Converted word for word from your file Grapevine_Coder_Ready_V12_Single_Trustmaker_RLT.docx
//  (the controlled document), with a few articles left out for now to keep the document to a
//  reasonable length -- see will/NOTES-ON-YOUR-TRUST.txt for exactly what and why.
//  The state-specific signing page is in will/trust-state-text.js.
// ==========================================================================
@set draft_watermark = yes
@set draft_label = SAMPLE - NOT FOR SIGNING

[[if trust_starts_with_the=YES]]
@center **TRUST AGREEMENT FOR**
[[else]]
@center **TRUST AGREEMENT FOR THE**
[[end]]
@center **{{trust_name}}**

This Revocable Living Trust Agreement (the "Trust Agreement") is made by {{name}} (the "Trustmaker").

[[if trust_type=NEW]]

The Trustmaker creates this Revocable Living Trust to manage and administer the Trust Estate during the Trustmaker's lifetime, during any period of Incapacity, and after the Trustmaker's death.

The Trust created by this Trust Agreement shall be known as {{trust_name}} (the "Trust").

[[else]]

The Trustmaker executes this Trust Agreement as a complete restatement of the trust originally established as {{orig_trust_name}} on {{orig_trust_date}}.

This restatement replaces the prior governing provisions of that trust but does not create a new trust. The Trust retains its original date of creation, identity, continuity, and all property then held by or for the Trust.

The Trust shall continue to be known as {{trust_name}} (the "Trust").

[[end]]

# TRUST CREATION

## Declaration of Capacity

The Trustmaker executes this Trust Agreement freely and voluntarily and declares that the Trustmaker is at least eighteen (18) years of age, possesses the legal capacity to create this Trust, understands the nature and effect of this Trust Agreement, and intends to establish or continue the Trust according to its terms.

## Trust Purposes

The purposes of this Trust are:

(a) to hold, manage, invest, protect, and administer the Trust Estate during the Trustmaker's lifetime;

(b) to provide for the management of the Trust Estate during any period of the Trustmaker's Incapacity;

(c) to provide for the Trustmaker's benefit during the Trustmaker's lifetime; and

(d) to provide for the administration and distribution of the Trust Estate after the Trustmaker's death.

Whenever this Trust Agreement refers to the "purposes of this Trust," it refers to the purposes stated in this Section.

## Effective Date

[[if trust_type=NEW]]

This Trust is established, and this Trust Agreement becomes effective, when the Trustmaker signs this Trust Agreement and property is transferred to or otherwise held by the Trustee as Trust property.

[[else]]

This restatement becomes effective when the Trustmaker signs it. The Trust itself continues from its original date of creation.

[[end]]

## Trust Property

[[if trust_type=NEW]]

The Trust Estate consists of property transferred, assigned, conveyed, retitled, delivered, or otherwise lawfully made subject to this Trust, including property identified on Schedule A to the extent effectively transferred to the Trust.

Property later transferred to or acquired by the Trust shall also become part of the Trust Estate.

[[else]]

All property held by or for the Trust immediately before this restatement shall continue to be held under this Trust Agreement without requiring a new transfer solely because of this restatement.

Property later transferred to or acquired by the Trust shall also become part of the Trust Estate.

[[end]]

## Initial Trustee

The Trustmaker shall serve as the initial Trustee.

The Trustmaker accepts the office of Trustee and shall hold, administer, and distribute the Trust Estate according to this Trust Agreement.

## Governing Law

This Trust shall be governed by the laws of {{state}}, except to the extent federal law controls.

## Principal Place of Administration

The Trustee may change the principal place of administration or situs of the Trust when permitted by applicable law and reasonably appropriate for the administration of the Trust.

A change in the principal place of administration or situs shall not, by itself, change the law governing the validity or construction of this Trust unless applicable law or a valid exercise of authority under this Trust provides otherwise.

# FAMILY

## Marital Status

[[if marital_status=UNMARRIED]]

The Trustmaker is unmarried and is the sole Trustmaker under this Trust Agreement.

[[elif marital_status=MARRIED]]

The Trustmaker is married to {{spouse}}. The Trustmaker is the sole Trustmaker under this Trust Agreement.

[[elif marital_status=PARTNER]]

The Trustmaker is in a registered domestic partnership with {{partner}}. The Trustmaker is the sole Trustmaker under this Trust Agreement.

[[end]]

## Children

[[if has_children]]

The Trustmaker has the following child or children:

[[each children]]

{{child}}

[[end]]

[[else]]

The Trustmaker has no children.

[[end]]

[[if has_excluded]]

## Intentionally Excluded Person(s)

The Trustmaker intentionally excludes the following person or persons from receiving any benefit under this Trust:

[[each excluded]]

{{excluded_name}} ({{excluded_relationship}}) shall be treated as having predeceased the Trustmaker.

[[end]]

[[end]]

## After-Born and Later-Adopted Children

Any child of the Trustmaker born or legally adopted after the execution of this Trust Agreement shall be treated as though specifically identified as a child of the Trustmaker under this Article.

[[if is_married]]

## Preservation of Property Character

Property transferred to or held under this Trust shall retain the same ownership and property character it had immediately before the transfer to the extent provided by applicable law, including separate, community, quasi-community, marital, jointly owned, or other recognized property interests. A transfer to this Trust shall not, by itself, change the character of property or the ownership rights of the Trustmaker, the Trustmaker's spouse, or the Trustmaker's registered domestic partner.

## Limit on Property Transferred

This Trust Agreement transfers or governs only the interest in property that the Trustmaker has legal authority to transfer or place under the Trust. Nothing in this Trust Agreement is intended to transfer, impair, enlarge, or extinguish an ownership interest of the Trustmaker's spouse or registered domestic partner that the Trustmaker does not have authority to transfer.

## No Transmutation by Trust Transfer

Placement of property in this Trust, identification of property on Schedule A, or administration of property by the Trustee shall not, by itself, constitute a transmutation, recharacterization, waiver, gift, partition, or agreement changing the property rights of the Trustmaker or the Trustmaker's spouse or registered domestic partner. Any change in property character must arise from a separate legally effective act or agreement or from applicable law.

## Protected Spousal or Partner Rights

Nothing in this Trust Agreement is intended to defeat or waive any right of a spouse or registered domestic partner that applicable law does not permit the Trustmaker to defeat or waive unilaterally, including any applicable rights relating to community or marital property, elective or statutory shares, homestead or protected residence, exempt property, family allowances, omitted-spouse or omitted-partner protections, or other mandatory property rights. Those rights shall be determined and applied under the law governing the affected property or proceeding.

## No Implied Waiver

The identification, omission, nomination, or beneficial treatment of the Trustmaker's spouse or registered domestic partner in this Trust Agreement shall not, by itself, constitute a waiver, release, consent, marital-property agreement, domestic-partnership agreement, or relinquishment of any statutory or property right. Any waiver or release must be established by a separate legally effective instrument or other legally sufficient act.

## Change in Relationship Status

If the Trustmaker's marriage or registered domestic partnership is terminated, dissolved, annulled, or otherwise legally ended before the Trustmaker's death, any nomination, gift, beneficial interest, or power granted under this Trust Agreement to the former spouse or former registered domestic partner shall be governed by the controlling law then applicable. To the fullest extent permitted by that law, the former spouse or former registered domestic partner shall be treated as having predeceased the Trustmaker unless the Trustmaker, after the relationship ended, executes a legally effective amendment or other instrument expressly reaffirming the affected provision.

[[end]]

# SUCCESSOR TRUSTEE {#art_successor_trustee}

## Appointment of Successor Trustee

[[if trustee_mode=SUCCESSIVE]]

The following Successor Trustees shall serve, one at a time, in the order listed:

[[each successors]]

{{successor}}

[[end]]

[[else]]

The following Successor Co-Trustees shall serve together:

[[each cotrustees]]

{{cotrustee}}

[[end]]

If any Co-Trustee ceases to serve, the remaining Co-Trustee or Co-Trustees shall continue to serve.

The Co-Trustees shall administer the Trust in accordance with this Article.

[[end]]

## Removal and Appointment by the Trustmaker

While this Trust remains revocable, the Trustmaker may remove any acting or designated Successor Trustee and appoint a replacement Successor Trustee by a written instrument signed by the Trustmaker.

## Appointment by Beneficiaries

If no Trustee is serving and no designated Successor Trustee is willing and able to serve, a majority of the Vested Beneficiaries, as defined in [[ref def_vested]], may appoint a Successor Trustee or Co-Trustees by written instrument.

If the Trustee being replaced was an Independent Trustee, any Successor Trustee appointed under this Section must satisfy the same requirement.

If the Vested Beneficiaries do not appoint a Successor Trustee within a reasonable time, any interested person may petition a court of competent jurisdiction to appoint a Trustee.

For purposes of this Section, a charitable organization shall not be considered a beneficiary.

## Vacancy in Trusteeship

A vacancy in the office of Trustee does not terminate this Trust.

# TRUSTMAKER'S RESERVED POWERS

## General Reservation of Powers

While the Trust remains revocable and the Trustmaker has legal capacity, the Trustmaker reserves all rights and powers with respect to this Trust and the Trust Estate, including the right to amend, revoke, restate, and withdraw property from the Trust.

## Right to Amend, Revoke, or Restate

The Trustmaker may amend, revoke, or restate this Trust Agreement, in whole or in part, by a written instrument signed by the Trustmaker that clearly states the Trustmaker's intent and is delivered to the Trustee.

If the Trustmaker is serving as Trustee, signing the written instrument constitutes delivery.

A valid restatement replaces the governing provisions of this Trust Agreement while preserving the identity and continuity of the Trust unless the restatement expressly provides otherwise.

## Effect of Incapacity

Upon the Trustmaker's Incapacity as determined under [[ref def_incapacity]], the Trustmaker may not personally exercise the powers reserved under this Article.

[[if poa_reserved_powers]]

## Exercise by Attorney-in-Fact

During the Trustmaker's Incapacity, an attorney-in-fact acting under a valid power of attorney may exercise the Trustmaker's powers to amend, revoke, restate, or withdraw property from this Trust only to the extent the applicable power is expressly granted by the power of attorney and permitted by applicable law.

[[end]]

## Personal Nature of Reserved Powers

The powers reserved under this Article are personal to the Trustmaker.

[[if poa_reserved_powers]]

Except as provided under the following Section or applicable law, no guardian, conservator, attorney-in-fact, Trustee, or other person may exercise the Trustmaker's reserved powers.

[[else]]

Except as permitted by applicable law, no guardian, conservator, attorney-in-fact, Trustee, or other person may exercise the Trustmaker's reserved powers.

[[end]]

## Termination of Reserved Powers

Upon the Trustmaker's death, all powers reserved under this Article terminate and the Trust becomes irrevocable.

## Exercise of Reserved Powers

The Trustmaker may exercise any reserved power at any time while the Trust remains revocable and the Trustmaker has legal capacity.

# OFFICE OF TRUSTEE

## Office of Trustee

The Trustee holds legal title to the Trust Estate solely in a fiduciary capacity and shall administer the Trust Estate according to this Trust Agreement.

## Qualification and Acceptance

A person nominated as Trustee is not required to serve. A person nominated as Trustee accepts the office by signing a written Acceptance of Trusteeship or by voluntarily performing the duties of Trustee.

## Resignation

A Trustee may resign at any time by written notice to any other acting Trustee or, if none, to the next designated Successor Trustee. The resignation becomes effective on the date stated in the notice or, if no date is stated, upon delivery of the notice.

## Filling a Vacancy

A vacancy in the office of Trustee shall be filled as provided in [[ref art_successor_trustee]], and the Successor Trustee shall assume office upon accepting the appointment as provided in this Article.

## Transfer of Office

Upon assuming office, a Successor Trustee succeeds to all rights, powers, duties, and responsibilities of the preceding Trustee without further conveyance, assignment, or court order.

## Successor Trustee and Prior Administration

A Successor Trustee is not liable for any act or omission of a predecessor Trustee occurring before the Successor Trustee assumes the office of Trustee unless otherwise provided by applicable law.

Upon accepting the office, the Successor Trustee shall take reasonable steps to obtain control of the Trust Estate and its administration. The Successor Trustee may rely in good faith upon the records, accounts, inventories, tax returns, reports, and other information received from the predecessor Trustee unless the Successor Trustee has actual knowledge of a breach of trust, material inaccuracy, or other circumstance requiring further inquiry.

A Successor Trustee has no duty to investigate the acts or omissions of a predecessor Trustee except to the extent required by applicable law or when the Successor Trustee has actual knowledge of facts that would cause a reasonably prudent Trustee to make further inquiry.

[[if is_cotrustees]]

## Co-Trustees

Any Co-Trustee may perform Routine Administrative Acts independently.

Except for Routine Administrative Acts, as defined in [[ref def_routine]], no Co-Trustee may take unilateral action affecting the administration, investment, distribution, or ownership of the Trust Estate unless approved by a majority of the Co-Trustees then serving. If only two Co-Trustees are serving, both Co-Trustees must approve the action.

If the two Co-Trustees cannot agree on an action requiring their joint approval, they shall first attempt to resolve the disagreement through mediation. If mediation is unsuccessful, either Co-Trustee may petition a court having jurisdiction over the Trust for appropriate instructions.

## Delegation of Duties

The Co-Trustees may, by the approval required under this Section, delegate specific Routine Administrative Acts to one or more Co-Trustees.

A delegation does not relieve any delegating Co-Trustee of the duty to act prudently, reasonably supervise the delegated duties, or take appropriate action to prevent or remedy a breach of trust.

A delegation may be modified or revoked by the approval required under this Section.

## Reliance Upon Another Co-Trustee

A Co-Trustee may rely in good faith upon information provided by another Co-Trustee concerning matters assigned to that Co-Trustee unless the relying Co-Trustee knows, or reasonably should know, that the information is inaccurate.

## Written Dissent

A Co-Trustee who disagrees with a proposed action may record that disagreement in writing before the action is taken.

A Co-Trustee who timely records a written dissent shall not be liable for the action taken by the remaining Co-Trustee or Co-Trustees unless the dissenting Co-Trustee participated in, directed, concealed, or knowingly permitted a breach of trust.

[[end]]

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

## Digital Assets {#sec_digital_assets}

The Trustee may:

(a) access, obtain, control, manage, use, preserve, archive, copy, transfer, sell, distribute, abandon, delete, close, or otherwise administer Digital Assets;

(b) access and manage computers, mobile devices, electronic storage devices, online accounts, cloud-storage accounts, digital wallets, and other systems or devices containing or providing access to Digital Assets;

(c) obtain usernames, passwords, authentication credentials, private keys, seed phrases, encryption keys, recovery information, and other information reasonably necessary to access or administer Digital Assets;

(d) request and obtain from a custodian or service provider any catalog, record, information, or content of electronic communications that the Trustmaker has authorized the Trustee to access or receive and that may lawfully be disclosed to the Trustee;

(e) consent to terms of service, privacy policies, authentication procedures, and other reasonable requirements imposed by a custodian or service provider;

(f) employ attorneys, accountants, technology professionals, digital-asset custodians, cybersecurity professionals, and other agents reasonably necessary to identify, secure, recover, value, access, or administer Digital Assets; and

(g) execute and deliver certifications, consents, releases, affidavits, instructions, and other documents reasonably necessary to exercise the powers granted under this Section.

The authority granted under this Section constitutes the Trustmaker's express consent and authorization for the Trustee to access and administer Digital Assets, including electronic communications, to the fullest extent permitted by applicable law.

## Methods of Distribution

The Trustee may make distributions in cash or in kind, divide or allocate property on a non-pro-rata basis, distribute undivided interests, establish reserves, obtain receipts, rely upon valuations reasonably believed to be accurate, and make equitable adjustments among beneficiaries when reasonably necessary to make or complete a distribution.

## Execution of Documents

The Trustee may execute, acknowledge, verify, certify, and deliver any document reasonably necessary or appropriate to carry out the purposes of this Trust and exercise the Trustee's powers.

## Environmental Powers

The Trustee may inspect property; conduct environmental assessments; remediate; comply with environmental laws; deal with governmental agencies; refuse/abandon property where legally permissible; allocate expenses; employ environmental professionals.

## Small Business

The Trustee may continue, operate, reorganize, incorporate, liquidate, sell, contribute capital to, borrow for, and otherwise manage a closely held business; exercise ownership and voting rights; retain concentrated interests; and employ management.

## S-Corporation Stock

The Trustee may preserve S-election where appropriate; make permitted elections; establish or administer qualifying trusts such as QSST/ESBT where applicable; distribute or dispose of stock when necessary to avoid jeopardizing eligibility.

## Professional Practice

The Trustee may preserve value while complying with licensing law; employ qualified professionals; arrange temporary management; sell or transfer the practice or its assets to legally qualified persons/entities; wind down the practice when continuation isn’t permitted.

## Other Administrative Powers

The Trustee may execute contracts, receipts, releases, deeds, assignments, bills of sale, affidavits, certificates, elections, consents, and other instruments reasonably necessary to administer the Trust Estate.

# LIFETIME ADMINISTRATION

## Lifetime Control

While living and having legal capacity, the Trustmaker may use, manage, control, invest, withdraw, spend, distribute, gift, or otherwise deal with the Trust Estate, including income and principal, as though this Trust had not been created.

## Reliance on Trustmaker's Instructions

While the Trustmaker has legal capacity, the Trustee may rely upon the Trustmaker's instructions concerning the administration of the Trust without further inquiry.

The Trustee shall not be liable for acting in good faith in accordance with those instructions.

## Incapacity {#def_incapacity}

If the Trustmaker becomes incapacitated as determined under [[ref def_incapacity]], the Successor Trustee shall assume the office of Trustee and administer the Trust for the benefit of the Trustmaker.

The Trustee may obtain medical evaluations reasonably necessary to determine the Trustmaker's capacity and may pay the cost from the Trust Estate.

The Trustee may distribute as much of the Trust income and principal as the Trustee determines appropriate for the Trustmaker's health, education, maintenance, support, comfort, and general welfare.

The Trustee may consider the Trustmaker's other financial resources but is not required to do so.

The Trustee may make distributions directly to the Trustmaker, reimburse expenses, purchase goods or services for the Trustmaker, or pay expenses on the Trustmaker's behalf.

## Health Information Authorization

For purposes of determining the Trustmaker's Incapacity or Restoration of Capacity and administering this Trust during the Trustmaker's Incapacity, the Trustmaker authorizes the acting Trustee and any designated Successor Trustee to request, obtain, receive, and review the Trustmaker's protected health information and medical records to the extent reasonably necessary for those purposes.

This authorization includes information protected by the Health Insurance Portability and Accountability Act of 1996 ("HIPAA"), its implementing regulations, and other applicable federal or state health-information privacy laws.

The Trustmaker intends that each person authorized under this Section be treated as a person authorized to receive the Trustmaker's protected health information to the fullest extent permitted by applicable law.

A health care provider, health plan, medical professional, facility, or other person or entity may rely upon a copy of this Trust Agreement or a certification of the authority granted under this Section.

## Personal Care

The Trustee may expend Trust assets to provide for the Trustmaker's housing, health care, personal care, transportation, companionship, recreation, safety, and quality of life, even though those expenditures may reduce or eliminate the interests of remainder beneficiaries.

## Restoration of Capacity {#def_restoration}

Upon Restoration of Capacity as determined under [[ref def_restoration]], the Trustmaker shall immediately resume the office of Trustee if legally entitled to serve.

A Successor Trustee serving solely because of the Trustmaker's Incapacity shall promptly return possession and administration of the Trust Estate to the Trustmaker and execute any document reasonably necessary to complete the transition unless otherwise ordered by a court or required by law.

## Standard of Lifetime Administration

During the Trustmaker’s lifetime, the Trustee shall administer the Trust for the benefit of the Trustmaker, without regard to the interests of the remainder beneficiaries.

# DEATH ADMINISTRATION

## Assumption of Trusteeship

Upon the Trustmaker's death, the designated Successor Trustee who accepts the office shall assume responsibility for administering the Trust Estate.

## Duties During Administration

The Trustee shall identify, collect, protect, preserve, manage, and value the Trust Estate.

The Trustee shall collect all property payable to the Trust, safeguard Trust assets, maintain appropriate insurance, obtain appraisals or other valuations when appropriate, employ professionals reasonably necessary for administration, and establish reasonable reserves for expenses, taxes, liabilities, and costs of administration.

## Payment of Debts and Expenses

The Trustee shall pay or provide for expenses, debts, taxes, and other obligations properly payable from the Trust Estate.

In doing so, the Trustee shall comply with creditor-claim procedures, statutory priorities, rights of reimbursement or contribution, and limitations upon the property from which an obligation may be paid.

## Valuation of the Trust Estate

The Trustee shall determine the fair market value of the Trust Estate as of the Trustmaker's date of death or another valuation date permitted by applicable law.

The Trustee may rely upon appraisals, account statements, professional valuations, tax valuations, or any other reasonable method of valuation.

## Interim Distributions

The Trustee may make partial or interim distributions whenever the Trustee reasonably determines that doing so will not materially interfere with the administration of the Trust Estate or the payment of its lawful obligations.

## Distribution of Trust Estate

[[if has_gifts]]

After paying or making reasonable provision for all lawful obligations of the Trust Estate, the Trustee shall make the Specific Gifts required in this Article.

[[end]]

[[if false]]

Thereafter, if the Family Trust is created under this Trust Agreement, the Trustee shall allocate the portion of the remaining Trust Estate required to fund that Family Trust.

[[end]]

After completing any Specific Gifts and any Family Trust allocation that apply, the Trustee shall distribute the balance of the Trust Estate as provided in [[ref art_final_distribution]].

## Receipts and Approval

The Trustee may request a receipt, release, refunding agreement, or other written acknowledgment from any beneficiary receiving a distribution.

The Trustee may request written approval of the Trustee's administration before making a final distribution, but no beneficiary shall be required to provide such approval as a condition of receiving a distribution otherwise required by this Trust Agreement or applicable law.

[[if has_gifts]]

# SPECIFIC GIFTS

## Specific Gifts

The Trustee shall distribute the Specific Gifts described in this Article as provided below.

[[each gifts]]

{{gift_description}} to {{gift_beneficiary}}

If {{gift_beneficiary}} does not survive the Trustmaker by the Required Survivorship Period, disclaims the Specific Gift, or is otherwise ineligible to receive it:

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

## Ademption

If specifically gifted property is not owned by the Trust at the Trustmaker's death, the gift shall lapse, and the intended beneficiary shall have no right to receive substitute property or monetary compensation unless applicable law requires a different result.

## Encumbered Property

A beneficiary receiving specifically gifted property shall receive the property subject to any mortgage, lien, security interest, or other encumbrance existing at the Trustmaker's death.

## Indivisible Specific Gifts

If specifically gifted property is owned by the Trust but cannot practicably be divided or distributed as directed, the Trustee may distribute undivided interests in the property or sell the property and distribute the net proceeds among the beneficiaries entitled to receive it.

Nothing in this Section authorizes the Trustee to substitute other Trust property or monetary compensation for specifically gifted property that is not owned by the Trust at the Trustmaker's death.

[[end]]

# FINAL DISTRIBUTION {#art_final_distribution}

## Final Distribution

After completing the administration of the Trust Estate, paying or reserving for all debts, expenses of administration, taxes, and other lawful obligations, and distributing all Specific Gifts, if any, the Trustee shall distribute the remaining Trust Estate as provided in this Article.

## Division of the Remaining Trust Estate

The remaining Trust Estate shall be distributed or allocated as follows:

[[each residuary]]

{{residuary_pct}}% to {{residuary_name}}

[[end]]

## Remote Contingent Distribution

If at any time property of the Trust Estate is required to be distributed and neither a beneficiary designated to receive that property nor any applicable contingent beneficiary is then entitled to receive it, the Trustee shall distribute that property to the persons who would then be the Trustmaker’s heirs under the intestacy laws of the state whose law governs the administration of the Trust, in the shares they would receive under those laws.

## Receipts and Releases

The Trustee may require a beneficiary receiving a distribution to provide a receipt, refunding agreement, or other reasonable acknowledgment of the distribution.

No beneficiary shall be required to execute a release of the Trustee as a condition of receiving a required distribution.

## Completion of Distribution

Upon completion of all required distributions, the Trustee may perform any remaining administrative acts reasonably necessary to complete the administration and close the Trust. Upon completion of those acts, the Trust shall terminate.

# DEFINITIONS

## Beneficiary

Beneficiary means any person or organization entitled to receive a benefit under this Trust Agreement.

## Beneficiary Trust

Beneficiary Trust means a trust established under this Trust Agreement to hold and administer all or any portion of a beneficiary's share of the Trust Estate.

## Child

Child means a person recognized as a Trustmaker's child under applicable law, including an adopted child.

A stepchild, foster child, or other person related only by marriage is not a Child unless specifically identified as a Child in this Trust Agreement.

## Descendants

Descendants mean all lineal descendants of an individual, regardless of generation.

Descendants include adopted persons and their descendants. Descendants do not include stepchildren, foster children, or persons related only by marriage unless specifically identified in this Trust Agreement.

## Digital Assets {#sec_digital_assets}

Digital Assets means electronically stored information, property, rights, records, accounts, and communications in which an individual has a right or interest, including:

(a) electronic communications, email accounts, text messages, messaging accounts, and social media accounts;

(b) digital files, photographs, videos, audio recordings, documents, databases, and other electronically stored information;

(c) online financial, banking, investment, payment, merchant, subscription, rewards, loyalty, gaming, and similar accounts;

(d) cryptocurrencies, virtual currencies, digital tokens, digital wallets, private keys, seed phrases, and other digital or blockchain-based assets or rights;

(e) domain names, websites, blogs, online businesses, cloud-storage accounts, and electronically maintained business records;

(f) software, source code, electronically maintained intellectual property, licenses, and other digital rights; and

(g) any other electronically stored property, account, record, information, communication, or right existing now or created in the future.

Digital Assets include the content of electronic communications to the extent authorized under [[ref sec_digital_assets]] and permitted by applicable law.

## Heirs

Heirs means the persons who would be entitled to inherit an individual's property under the laws of intestate succession of the applicable jurisdiction if that individual died without a valid will or other controlling estate-planning arrangement.

## Incapacity {#def_incapacity}

Incapacity means an individual's inability to effectively manage their property or financial affairs because of illness, injury, mental or physical condition, cognitive impairment, or other cause.

An individual shall be considered incapacitated if incapacity is established by any of the following:

(a) Physician Determination. Two licensed physicians who have examined the individual provide written statements that, in their professional opinions, the individual is unable to effectively manage the individual's property or financial affairs;

(b) Court Determination. A court of competent jurisdiction determines that the individual is incapacitated, incompetent, or otherwise unable to manage the individual's property or financial affairs, or appoints a guardian or conservator of the individual's estate or property;

(c) Disappearance or Absence. The individual has disappeared or has been absent and cannot be located for a continuous period of at least 30 days, and the individual's whereabouts cannot be determined after reasonable inquiry; or

(d) Detention or Inability to Communicate. The individual is detained, confined, or otherwise unable to communicate or manage the individual's property or financial affairs under circumstances that make the individual's participation in administering the Trust impracticable.

## Restoration of Capacity {#def_restoration}

An individual previously determined to be incapacitated shall be considered to have regained capacity upon:

(a) written statements from two licensed physicians who have examined the individual and determine that the individual is able to effectively manage the individual's property and financial affairs; or

(b) an order of a court of competent jurisdiction determining that the individual has regained capacity.

## Independent Trustee

Independent Trustee means a Trustee who is not a beneficiary of the trust being administered and who is not a related or subordinate party within the meaning of Section 672(c) of the Internal Revenue Code with respect to the person whose relationship is relevant to the exercise of the applicable power.

## Required Survivorship Period

Required Survivorship Period means the period a beneficiary must survive the Trustmaker to receive a distribution. The Required Survivorship Period is thirty (30) days unless a different period is expressly stated for a particular distribution.

## Routine Administrative Acts {#def_routine}

Routine Administrative Acts means routine actions taken in the ordinary administration of the Trust that do not materially affect the beneficiaries' beneficial interests or involve an extraordinary exercise of Trustee discretion.

Routine Administrative Acts may include paying ordinary expenses, depositing or transferring funds, maintaining financial accounts, obtaining routine professional services, maintaining insurance, preserving Trust property, preparing or filing ordinary tax or administrative documents, and taking similar actions reasonably necessary for the Trust's ongoing administration.

## Trustmaker

Trustmaker means the person who creates this Trust and contributes property to it.

## Trustee

Trustee means any individual or qualified entity having fiduciary authority and responsibility to hold, manage, administer, and distribute the Trust Estate in accordance with this Trust Agreement. The term includes one or more persons or entities acting in that capacity, whether originally appointed or later appointed.

## Trust Estate

Trust Estate means all property held by or for the Trust from time to time, including income, proceeds, replacements, reinvestments, and property later added to the Trust.

## Vested Beneficiary {#def_vested}

Vested Beneficiary means a beneficiary who has a present, noncontingent right to receive all or a portion of the remainder of the Trust Estate, whether outright or in further trust.

A beneficiary entitled only to a specific gift is not a Vested Beneficiary.

A minor or incapacitated Vested Beneficiary may act through the beneficiary's legally authorized representative.

# GENERAL ADMINISTRATION

## Severability

If any provision of this Trust Agreement is determined to be invalid, illegal, or unenforceable, the remaining provisions shall remain valid and enforceable to the fullest extent permitted by applicable law.

## Notices

Any notice required or permitted under this Trust Agreement shall be in writing and may be delivered personally, by United States mail, by a nationally recognized overnight delivery service, or by electronic transmission to the extent permitted by applicable law.

## Electronic Records and Signatures

Electronic records, electronic signatures, and electronically executed documents shall have the same force and effect as original written documents and handwritten signatures to the extent permitted by applicable law.

## Certification of Trust

The Trustee may execute and deliver a Certification of Trust or other evidence of the Trustee's authority in lieu of furnishing a complete copy of this Trust Agreement whenever permitted by applicable law.

## Reliance by Third Parties

Any person dealing with the Trustee in good faith may rely upon a Certification of Trust, affidavit, certificate, or other written evidence of the Trustee's authority without further inquiry to the fullest extent permitted by applicable law.

## Trustee Records and Accounting

The Trustee shall maintain reasonably complete records of the administration of the Trust Estate and shall provide information or accountings to beneficiaries only as required by this Trust Agreement or applicable law.

## Trustee Compensation

An individual Trustee serving under this Trust Agreement is entitled to reasonable compensation for services rendered and reimbursement for all reasonable expenses incurred in the administration of the Trust Estate.

A corporate Trustee is entitled to compensation according to its published fee schedule in effect when the services are performed unless otherwise agreed in writing.

## Trustee Bond

No Trustee shall be required to furnish a bond unless required by a majority, by number, of the Vested Beneficiaries.

A minor or incapacitated Vested Beneficiary shall be included in determining the majority, and that beneficiary’s vote may be exercised by the beneficiary’s legally authorized representative.

A beneficiary entitled solely to a specific gift and a contingent beneficiary are not Vested Beneficiaries and shall not be counted in determining the majority.

If a majority requires a bond, the Trustee shall furnish a bond in a reasonable amount sufficient to protect the Trust Estate. The reasonable cost of the bond shall be paid from the Trust Estate.

## Principal and Income

The Trustee shall allocate receipts and disbursements between principal and income in accordance with the Principal and Income Act or other applicable law of the governing jurisdiction.

To the extent permitted by applicable law, the Trustee may make reasonable adjustments between principal and income whenever the Trustee determines that doing so is necessary to administer the Trust Estate impartially, to carry out the purposes of this Trust or to fulfill the Trustee's fiduciary duties.

The Trustee's good-faith allocation or adjustment shall be binding upon all interested persons absent manifest error or an abuse of discretion.

## No Contest Clause

To the fullest extent permitted by applicable law, if a beneficiary directly contests the validity of this Trust Agreement or any provision of it, or otherwise brings a proceeding to invalidate or defeat a provision of this Trust Agreement under circumstances in which a no-contest provision may lawfully be enforced, any gift, distribution, or other beneficial interest provided for that beneficiary under this Trust Agreement shall be subject to the consequences permitted by applicable law.

This Section shall not apply to any contest, petition, proceeding, claim, or other action for which enforcement of a no-contest provision is prohibited by applicable law.

This Section shall be construed narrowly and shall not prevent a beneficiary from seeking an accounting, requesting instructions concerning the administration of the Trust, enforcing the Trustee's fiduciary duties, or pursuing any other remedy that applicable law protects from enforcement of a no-contest provision.

## Good Faith

The Trustee shall administer the Trust in good faith and in a manner reasonably calculated to carry out the Trustmaker's intent.

## Headings

Article titles, section headings, captions, and the table of contents are provided solely for convenience and shall not affect the interpretation of this Trust Agreement.

## Gender and Number

Unless the context clearly requires otherwise, words used in the singular include the plural, words used in the plural include the singular, and words of one gender include every other gender.

## Rules of Construction

This Trust Agreement shall be construed as a whole to give effect to every provision whenever reasonably possible. No presumption shall arise in favor of or against any provision because of the identity of the person who drafted this Trust Agreement.

# EXECUTION

## Execution

The Trustmaker executes this Trust Agreement as of the date stated below, in {{county}}, {{state}}, and declares that this instrument constitutes the Trustmaker's Revocable Living Trust.

The Trustmaker acknowledges having read this Trust Agreement, or having had it read and explained to the Trustmaker, and declares that it accurately reflects the Trustmaker’s intentions.

The Trustmaker further acknowledges executing this Trust Agreement voluntarily and with the intent that it be legally effective according to its terms.

@line Date: ______

@line Signature: ________________________________________________

@line {{name}}, Trustmaker

[[include trust_execution]]
[[pagebreak]]

@center **SCHEDULE A**

@center **TRUST PROPERTY**

@sub Purpose

This Schedule A identifies property that the Trustmaker has designated for inclusion in the Trust Estate. Listing property on this Schedule A does not replace any deed, account registration, beneficiary designation, consent, endorsement, assignment, filing, or other transfer step required by law or by a financial institution, business entity, governmental agency, or other third party.

@sub Initial Trust Property

The Trustmaker assigns, transfers, and delivers to the Trustee the property described below to the extent the property may be transferred by assignment and is not subject to additional transfer formalities. Property requiring additional transfer formalities is identified here for trust-funding purposes and becomes Trust property when those formalities are completed.

[[if asset_real_property]]

@sub Real Property

[[each real_property]]

@row Property|{{real_property_address}}
@row Ownership|{{real_property_ownership}}
@row County / State|{{real_property_county_state}}
[[if real_property_deed_reference]]
@row Reference|{{real_property_deed_reference}}
[[end]]

[[end]]

[[end]]

[[if asset_bank]]

@sub Bank and Cash Accounts

[[each bank_accounts]]

@row Financial Institution|{{bank_institution}}
@row Account Type|{{bank_type}}
@row Last Four|{{bank_last4}}
@row Ownership|{{bank_ownership}}

[[end]]

[[end]]

[[if asset_brokerage]]

@sub Investment and Brokerage Accounts

[[each brokerage_accounts]]

@row Financial Institution|{{brokerage_institution}}
@row Account Type|{{brokerage_type}}
@row Last Four|{{brokerage_last4}}
@row Ownership|{{brokerage_ownership}}

[[end]]

[[end]]

[[if asset_business]]

@sub Business Interests

[[each business_interests]]

@row Business / Entity|{{business_name}}
@row Interest|{{business_interest}}
@row State|{{business_state}}
@row Ownership|{{business_ownership}}

[[end]]

[[end]]

[[if asset_tangible]]

@sub Tangible Personal Property

The Trustmaker assigns to the Trustee the Trustmaker's transferable household goods, furnishings, clothing, jewelry, artwork, collectibles, tools, equipment, and other tangible personal property intended for the Trust, except property specifically excluded below or property requiring a separate certificate of title, registration, or other transfer formality.

[[end]]

@sub Additional Property

Additional property may be transferred to the Trust after the date of this Schedule A by deed, assignment, account registration, beneficiary designation where legally appropriate, or any other method permitted by applicable law and the governing instrument or institution.

@sub Trustmaker Confirmation

The Trustmaker confirms that this Schedule A reflects the property identified for inclusion in or funding of the Trust as of the date stated below.

@line Date: ______

@line Signature: ________________________________________________

@line {{name}}, Trustmaker

`;

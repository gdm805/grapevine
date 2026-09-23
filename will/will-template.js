window.WILL_TEMPLATE = String.raw`
// ==========================================================================
//  GRAPEVINE  |  LAST WILL AND TESTAMENT (without a trust)
//
//  This file holds the words of the will. Edit them like you would in Word,
//  save the file, and refresh the will page to see your change.
//  The wording below is taken from your own will. The parts that change from state to state (the community property
//  sentence, Florida's differences, and the execution, witness and notary text) are in will/state-text.js.
//  Where I added or changed
//  something, a note beginning "ADDED" or "CHANGED" says so.
//
//  THE RULES (there are only a few):
//   1. A line that starts with two slashes is a note to you. It never
//      appears in the will.
//   2. Double curly braces around a word, like {{name}}, are blanks that fill in
//      with what the person typed. The full list of blanks is at the bottom.
//   3. Show text only sometimes:
//          [[if has_children]]   text   [[else]]   other text   [[end]]
//      [[else]] is optional. Use [[if not has_children]] for the opposite.
//   4. Repeat text for every item in a list:
//          [[each children]]   {{child}}   [[end]]
//   5. Numbering is automatic, so sections that come and go never leave gaps:
//          # Title                    an Article (ARTICLE ONE, TWO, THREE...)
//          ## Title                   a Section (Section 1.01, 1.02...)
//          #! Title                   a heading with no number
//          # Title {#label}           gives the heading a nickname, so that
//          [[ref label]]              writes its number anywhere, like "Article Six"
//                                     or "Section 6.05", and stays right if numbers move.
//   6. Other formatting:
//          @center text     centered line          @sub text     bold sub-heading
//          @sign Label      signature line         @row Left | Right     two-column line
//          [[pagebreak]]    start a new page       **bold**      bold words
//          - text           bullet point
//   7. Put a blank line between paragraphs.
//   8. Never type the backtick key or a dollar sign followed by an opening
//      curly brace anywhere in this file. Everything else is fine.
//
//  SETTINGS (change the word after the equals sign):
//     draft_watermark = yes   shows "SAMPLE - NOT FOR SIGNING". Change to "no" when you approve the text.
// ==========================================================================
@set survival_days = 30
@set draft_watermark = yes
@set draft_label = SAMPLE - NOT FOR SIGNING

@center **LAST WILL AND TESTAMENT**
@center **OF {{name_caps}}**

# Declarations {#declarations}

## Declaration, Identification, and Capacity

I, {{name}}, a resident of {{county}} County, {{state}}, declare this instrument to be my Last Will and Testament (this "**Will**").

I am at least eighteen (18) years of age, possess the legal capacity to make this Will, understand the nature and effect of this Will, and execute it freely and voluntarily.

I intend this Will to control the disposition of my probate estate at my death, subject to applicable law.

## Revocation of Prior Wills and Codicils

I revoke all prior wills and codicils I previously executed.

This revocation does not revoke or alter any beneficiary designation, payable-on-death designation, transfer-on-death registration, survivorship arrangement, trust, contract, deed, or other nonprobate transfer unless the governing instrument or applicable law provides otherwise.

[[if marital]]
## Marital Status

[[if has_spouse]]
I am married to {{spouse}}.

[[else]]
I am not married.

[[end]]
[[end]]
[[if has_spouse]]
## Effect of Change in Marital Status

If, before my death, my marriage or legally recognized domestic partnership is terminated by divorce, dissolution, annulment, decree of legal separation, or other legally effective termination of the relationship, I intend every provision of this Will that identifies, benefits, nominates, or grants authority to my spouse or domestic partner to be revoked to the fullest extent permitted by applicable law. For purposes of this Will, my spouse or domestic partner shall be treated as having predeceased me with respect to each such provision, except to the extent applicable law requires a different result.

[[end]]
[[if children_answered]]
## Children

[[if has_children]]
For purposes of this Will, my children are:

[[each children]]
@row {{child}} |

[[end]]
[[else]]
I have no children.

[[end]]
[[end]]
[[if has_minor_children]]
// ADDED: your draft had no guardian clause (Section 1.06 is missing from the numbering).
// If that is where your guardian language belongs, replace the words below with yours.
## Guardian of Minor Children

If a guardian of the person is needed for any of my children who are under eighteen (18) years of age, I nominate {{guardian}} to serve as guardian.

[[if has_alt_guardian]]
If {{guardian}} is unwilling, unable, or ineligible to serve or ceases to serve, I nominate {{alt_guardian}} to serve as guardian.

[[end]]
No guardian nominated by me shall be required to furnish a bond or other security, to the extent permitted by applicable law.

[[end]]
[[if has_children]]
// Your draft has this section. It is shown only when the person has children. Move or remove it as you see fit.
## After-Born and Later-Adopted Children

Any child of mine born or legally adopted after I execute this Will shall not be treated as my Child for purposes of this Will unless I later execute a valid testamentary instrument specifically including that child, subject to rights that cannot lawfully be waived or defeated under applicable law.

[[end]]
## Construction of Family References

References in this Will to a Child, Descendant, spouse, or other family relationship shall be interpreted according to the definitions in this Will and applicable law.

A stepchild, foster child, or person related only by marriage is not treated as my Child or Descendant solely because of that relationship unless specifically identified as such in this Will or required by applicable law.

# Survivorship and Family Distribution Rules {#survivorship}

## Required Survivorship Period

Except where this Will expressly provides otherwise, a beneficiary must survive me by {{survival_words}} days to receive a gift or other beneficial interest under this Will.

A beneficiary who does not survive me by the Required Survivorship Period shall be treated as having predeceased me for purposes of that gift or interest.

## Evidence of Survival

My Personal Representative may rely upon death certificates, governmental records, court determinations, medical records, affidavits, or other evidence reasonably believed to be reliable in determining whether a beneficiary survived me for the Required Survivorship Period.

## Simultaneous or Uncertain Order of Death

If it cannot be established by sufficient evidence that a beneficiary survived me for the Required Survivorship Period, that beneficiary shall be treated as having predeceased me for purposes of this Will.

This Section does not alter any mandatory rule of applicable law.

## Descendants by Right of Representation

Whenever this Will directs property to a person's then-living descendants by right of representation, the property shall be divided into shares at the nearest generation having at least one living descendant.

Each living descendant at that generation shall receive one share.

The share of each deceased person at that generation who has then-living descendants shall be divided among that person's then-living descendants in the same manner.

# Personal Representative {#pr}

## Appointment of Personal Representative

I nominate the person or persons designated in this Will to serve as Personal Representative of my estate.

If a designated Personal Representative is unwilling, unable, or ineligible to serve or ceases to serve before completion of the administration of my estate, the next willing and eligible successor designated in this Will shall serve.

@row Primary Personal Representative: | {{executor}}

[[each successors]]
@row Successor Personal Representative: | {{successor}}

[[end]]
## Qualification and Acceptance

A person nominated as Personal Representative is not required to serve.

A nominee shall qualify and accept the office in the manner required by applicable law.

No nominee shall be disqualified solely because the nominee is a beneficiary under this Will, except to the extent applicable law provides otherwise.

## Authority of Personal Representative

My Personal Representative shall have the authority granted by this Will and applicable law to administer my estate, protect and preserve estate property, pay lawful obligations, resolve claims, make distributions, and complete the administration of my estate.

The powers granted by this Will supplement and do not limit powers otherwise available under applicable law.

## Independent Administration

To the fullest extent permitted by applicable law, I request that my Personal Representative be permitted to administer my estate with the least court supervision and intervention legally available.

My Personal Representative may seek court authority, instructions, approval, or protection whenever appropriate or required by law.

## Bond

No Personal Representative nominated by me shall be required to furnish a bond or other security except to the extent required by applicable law or ordered by a court that does not permit waiver.

If a bond is required, the reasonable cost of the bond shall be paid as an expense of administration.

## Compensation and Reimbursement

My Personal Representative is entitled to compensation for services and reimbursement of reasonable expenses as permitted by applicable law.

A professional or corporate fiduciary may receive compensation according to its applicable fee schedule or written agreement to the extent permitted by law.

## Resignation, Removal, and Vacancy

A Personal Representative may resign or may be removed in the manner provided by applicable law.

A vacancy shall be filled first by the next willing and eligible successor designated in this Will.

If no designated successor is willing and eligible to serve, a court having jurisdiction over my estate may appoint a Personal Representative as provided by applicable law.

## Successor Personal Representative

A successor Personal Representative shall succeed to the powers and responsibilities of the office to the extent provided by applicable law.

A successor Personal Representative may rely in good faith upon records, inventories, accountings, tax returns, reports, and other information received from a predecessor unless the successor has actual knowledge that the information is materially inaccurate.

# Estate Administration {#administration}

## Assumption of Office and General Duties

Upon my death, the Personal Representative who qualifies to serve shall take possession or control of my probate estate to the extent authorized by applicable law and shall administer my estate in accordance with this Will and applicable law.

The Personal Representative shall identify, collect, protect, preserve, manage, and value estate property and shall take such actions as are reasonably necessary to complete the administration of my estate.

## Payment of Expenses, Debts, and Lawful Obligations

My Personal Representative shall pay or make reasonable provision for expenses of administration, legally enforceable debts, taxes, and other obligations properly payable from my estate.

In doing so, the Personal Representative shall comply with applicable creditor-claim procedures, statutory priorities, rights of reimbursement or contribution, and limitations upon the property from which an obligation may be paid.

## Taxes

My Personal Representative may prepare, sign, file, amend, contest, compromise, settle, and pay tax returns, tax liabilities, interest, penalties, and related obligations arising from my death or the administration of my estate.

My Personal Representative may make elections, claims, allocations, and other tax decisions permitted under applicable law.

The apportionment and ultimate burden of any tax shall be determined under applicable law and any provision of this Will expressly governing that tax.

## Valuation of Estate Property

My Personal Representative shall determine the fair market value of estate property as of my date of death or another valuation date permitted by applicable law.

The Personal Representative may rely upon appraisals, account statements, professional valuations, tax valuations, market quotations, or any other reasonable method of valuation.

## Reserves

My Personal Representative may establish and maintain reasonable reserves for expenses, taxes, claims, liabilities, costs of administration, and other anticipated obligations before making final distributions.

Any unused reserve shall be distributed when the Personal Representative determines that it is no longer reasonably required.

## Interim Distributions

My Personal Representative may make partial or interim distributions whenever the Personal Representative reasonably determines that doing so will not materially interfere with the administration of my estate or the payment of its lawful obligations.

An interim distribution shall be charged against the share to which it relates.

My Personal Representative may require a reasonable refunding agreement or other protection in connection with an interim distribution to the extent permitted by applicable law.

## Order of Distribution

[[if has_gifts]]
After paying or making reasonable provision for the lawful obligations of my estate, my Personal Representative shall first make any Specific Gifts required by this Will and thereafter administer and distribute my Residuary Estate as provided in [[ref residuary]].

[[else]]
After paying or making reasonable provision for the lawful obligations of my estate, my Personal Representative shall administer and distribute my Residuary Estate as provided in [[ref residuary]].

[[end]]
A distribution may be deferred to the extent reasonably necessary to complete administration, determine liabilities, or maintain an appropriate reserve.

## Receipts and Refunding Agreements

My Personal Representative may request a receipt, refunding agreement, or other reasonable written acknowledgment from a person receiving a distribution.

No beneficiary shall be required to execute a general release of my Personal Representative as a condition of receiving a distribution otherwise required by this Will or applicable law.

# Powers of Personal Representative {#powers}

## General Authority

In addition to powers granted by applicable law, my Personal Representative shall have all powers reasonably necessary or appropriate to administer, protect, preserve, manage, invest, sell, distribute, and otherwise deal with my estate.

These powers supplement and do not limit powers otherwise available under applicable law and may be exercised without prior court approval to the fullest extent permitted by law.

## Real Property

My Personal Representative may possess, protect, insure, repair, improve, maintain, lease, exchange, partition, subdivide, dedicate, mortgage, refinance, encumber, grant easements affecting, develop, abandon where legally permissible, or sell real property upon such terms as the Personal Representative determines appropriate.

## Tangible Personal Property

My Personal Representative may retain, use, store, insure, repair, improve, lease, exchange, donate, distribute, sell, or otherwise dispose of tangible personal property, subject to any Specific Gift or other controlling disposition in this Will.

## Financial Accounts and Investments

My Personal Representative may open, maintain, modify, transfer, consolidate, or close checking, savings, money market, brokerage, and other financial accounts; deposit, withdraw, or transfer estate funds; retain existing investments; and acquire, sell, exchange, invest, or reinvest property as the Personal Representative determines appropriate under the circumstances and applicable fiduciary standards.

## Business Interests

My Personal Representative may retain, vote, operate, continue, reorganize, merge, dissolve, liquidate, sell, exchange, or otherwise dispose of an interest in a sole proprietorship, partnership, limited liability company, corporation, professional practice, or other business entity.

Any authority to own, continue, or operate a business or professional practice is subject to applicable ownership, licensing, professional, and regulatory requirements.

## Insurance

My Personal Representative may purchase, maintain, modify, renew, or terminate insurance reasonably appropriate to protect my estate, the Personal Representative, or estate property and may collect, compromise, or settle insurance claims.

## Claims and Litigation

My Personal Representative may assert, defend, compromise, settle, arbitrate, mediate, release, abandon, or otherwise resolve any claim or legal proceeding involving my estate and may execute releases, receipts, satisfactions, and other documents relating to such matters.

## Employment of Professionals

My Personal Representative may employ and compensate attorneys, accountants, investment advisers, financial advisers, real estate brokers, appraisers, custodians, property managers, tax professionals, technology professionals, and other agents or professionals reasonably necessary or appropriate for the administration of my estate.

## Digital Assets

To the fullest extent permitted by applicable law, my Personal Representative may access, obtain, control, manage, use, preserve, archive, copy, transfer, sell, distribute, abandon, delete, close, or otherwise administer my Digital Assets and any device, account, storage system, digital wallet, password, authentication credential, encryption key, private key, seed phrase, recovery information, or record necessary to identify, access, control, or administer those assets.

I expressly authorize my Personal Representative to request and obtain from any custodian or service provider any catalog, record, information, or content of electronic communications that I have authority to permit my Personal Representative to access or receive and that may lawfully be disclosed.

This Section constitutes my express consent and authorization for access to my Digital Assets and electronic communications to the fullest extent permitted by applicable law.

## Intellectual Property

My Personal Representative may acquire, protect, register, license, assign, enforce, compromise, sell, or otherwise dispose of copyrights, trademarks, patents, trade names, domain names, royalties, software, source code, and other intellectual property rights owned by my estate.

## Borrowing and Encumbrance

My Personal Representative may borrow money when reasonably necessary for administration, renew or extend indebtedness, and pledge or encumber estate property as security to the extent permitted by applicable law.

## Methods of Distribution

My Personal Representative may make distributions in cash or in kind, divide or allocate property on a non-pro-rata basis, distribute undivided interests, rely upon valuations reasonably believed to be accurate, and make equitable adjustments among beneficiaries when reasonably necessary to make or complete a distribution, provided that the economic value of each beneficiary's share is preserved as nearly as practicable.

## Distributions for a Minor or Incapacitated Recipient

If a distribution is payable outright to a beneficiary who is a minor or incapacitated, my Personal Representative may, to the extent permitted by applicable law, apply the property directly for the beneficiary's benefit or distribute it to a parent, guardian, conservator, custodian, caregiver, or other person or fiduciary legally authorized to receive or manage property for the beneficiary.

My Personal Representative may make such a distribution without requiring appointment of an additional court-supervised fiduciary unless required by applicable law.

## Execution of Documents and Other Administrative Powers

My Personal Representative may execute, acknowledge, verify, certify, and deliver contracts, deeds, assignments, bills of sale, affidavits, tax elections, consents, receipts, releases, certifications, and other documents reasonably necessary or appropriate to exercise the powers granted by this Will or complete the administration of my estate.

My Personal Representative may take any other administrative action reasonably necessary or appropriate to carry out the provisions of this Will and complete the administration of my estate, subject to applicable law and applicable fiduciary duties.

[[if has_gifts]]
// ADDED: your draft refers to "Specific Gifts" but has no article for them (nobody in that draft made one).
// Replace the words below with your own specific-gift language.
# Specific Gifts {#gifts}

## Specific Gifts

I make the following gifts (each, a "**Specific Gift**"). Each Specific Gift is made only if the recipient survives me for the Required Survivorship Period. A Specific Gift that fails shall become part of my Residuary Estate.

[[each gifts]]
I give {{gift}} to {{recipient}}.

[[end]]
[[end]]
# Residuary Estate {#residuary}

## Residuary Estate

I give all property comprising my probate estate that is not otherwise effectively disposed of by this Will, including any lapsed or failed gift that becomes part of my residuary estate, as provided in this Article.

This property is referred to in this Will as my "**Residuary Estate**."

## Distribution of Residuary Estate

I direct my Personal Representative to divide my Residuary Estate among the beneficiaries designated below in the percentages stated for them.

Each remainder beneficiary's share shall be distributed outright when that beneficiary becomes entitled to receive the share, subject to the provisions of this Will governing distributions to a minor or incapacitated recipient.

The percentages allocated to the remainder beneficiaries shall total one hundred percent (100%).

If a minor rounding or calculation discrepancy prevents the stated percentages from totaling exactly one hundred percent (100%), my Personal Representative may make the minimum adjustment reasonably necessary to correct the discrepancy while preserving the intended relative shares as nearly as practicable.

[[each beneficiaries]]
@row {{beneficiary}} | {{share}}%

**Contingent Disposition for {{beneficiary}}:**

[[if cont_descendants]]To that beneficiary's then-living descendants, by right of representation.[[end]][[if cont_named]]To {{cont_name}}.[[end]][[if cont_charity]]To {{cont_name}}, a charitable organization.[[end]][[if cont_others]]Among the other residuary beneficiaries then entitled to receive shares under this Article, in proportion to their respective shares.[[end]]

[[end]]
## Failure of a Residuary Gift

If a residuary beneficiary does not survive me for the Required Survivorship Period, disclaims the beneficiary's interest, is legally ineligible to receive it, or otherwise fails to receive the share, that share shall be distributed according to the contingent disposition designated for that beneficiary.

The contingent disposition may direct the share:

(a) to that beneficiary's then-living descendants, by right of representation;

(b) to one or more named contingent beneficiaries;

(c) to a designated charitable organization;

(d) among the other residuary beneficiaries then entitled to receive shares under this Article, in proportion to their respective shares; or

(e) under the remote contingent distribution provision of this Article.

A contingent beneficiary receiving a share under this Section must satisfy the Required Survivorship Period and any other condition expressly applicable to that disposition.

// CHANGED: your draft said "distributed under Article Six", which is the article this sentence is in.
// I pointed it to the Remote Contingent Distribution section. Please confirm that is what you meant.
If the designated contingent disposition cannot be completed, the share shall be distributed under [[ref remote]].

## Remote Contingent Distribution {#remote}

If property of my estate is required to be distributed and neither a beneficiary designated to receive that property nor any applicable contingent beneficiary is then entitled to receive it, my Personal Representative shall distribute that property as follows:

To the persons who would then be my heirs under the intestacy laws governing the distribution of my probate estate, in the shares they would receive under those laws.

## Completion of Distribution

After payment or reasonable provision for the lawful obligations of my estate and completion of the distributions required by this Will, my Personal Representative shall distribute any remaining property as part of my Residuary Estate and complete the administration of my estate.

# Definitions {#definitions}

## Beneficiary

"**Beneficiary**" means a person or organization entitled to receive a gift, distribution, or other beneficial interest under this Will.

## Child

"**Child**" means a person recognized as my child under applicable law, including a legally adopted child.

A stepchild, foster child, or other person related to me only by marriage is not my Child unless specifically identified as my Child in this Will or applicable law requires otherwise.

## Descendants

"**Descendants**" means the lineal descendants of a person recognized as descendants under applicable law, including legally adopted descendants.

Unless this Will expressly provides otherwise, a stepchild, foster child, or other person related only by marriage is not a Descendant solely because of that relationship.

## Digital Assets

"**Digital Assets**" means electronic records and electronically stored rights or interests in which I have a right or interest at my death, including digital files, electronic communications, email accounts, social-media accounts, online accounts, cloud-storage accounts, websites, domain names, digital photographs and videos, electronically stored documents, digital intellectual property, virtual currencies, cryptocurrency, tokens, digital wallets, electronically stored financial information, loyalty or rewards accounts, and other comparable digital property or records.

Digital Assets include any associated catalog, content, metadata, access information, authentication information, encryption information, private keys, seed phrases, recovery information, or other information that may lawfully be disclosed to or accessed by my Personal Representative.

## Heirs

"**Heirs**" means the persons who would be entitled to inherit property from me under the applicable laws of intestate succession at the time the determination is required.

## Incapacitated

A person is "**Incapacitated**" when the person is unable to effectively manage property or financial affairs because of illness, injury, mental or physical condition, cognitive impairment, or other cause, as determined under applicable law, by a court of competent jurisdiction, or by other legally sufficient evidence.

Minority alone does not constitute Incapacity for purposes of this definition.

## Personal Representative

"**Personal Representative**" means the fiduciary appointed to administer my probate estate, regardless of whether applicable law refers to that office as a personal representative, executor, executrix, administrator with the Will annexed, or another equivalent title.

## Required Survivorship Period

"**Required Survivorship Period**" means the {{survival_word}}-day period stated in [[ref survivorship]] or any different survivorship period expressly stated for a particular disposition.

## Routine Administrative Acts

"**Routine Administrative Acts**" means ministerial or ordinary-course actions that do not materially alter the ownership, investment, distribution, or beneficial enjoyment of property.

Routine Administrative Acts include depositing or transferring funds between existing accounts; paying ordinary expenses and previously approved obligations; obtaining statements, records, valuations, or information; communicating with financial institutions, beneficiaries, professionals, governmental agencies, and service providers; signing routine administrative documents; and taking similar actions necessary to carry out previously authorized decisions.

A sale or other disposition of substantial property, material investment decision, borrowing or encumbrance, settlement of a material claim, discretionary distribution, change in beneficial interests, or other material exercise of fiduciary discretion is not a Routine Administrative Act.

[[if has_spouse]]
## Surviving Spouse

"**Surviving Spouse**" means {{spouse}}, but only if that person is legally recognized as my spouse at my death and is not treated under applicable law, for purposes relevant to this Will, as having predeceased me or as no longer entitled to a disposition made to a spouse because of divorce, dissolution, annulment, legal separation, or another marital-status event to which applicable law gives that effect. A physical or informal separation that does not have that effect under applicable law does not, by itself, cause that person to cease being my Surviving Spouse.

[[end]]
# General Provisions {#general}

## Severability

If any provision of this Will is determined to be invalid, illegal, or unenforceable, the remaining provisions shall remain valid and enforceable to the fullest extent permitted by applicable law.

## Governing Law and Place of Administration

Except to the extent mandatory law provides otherwise, the validity, construction, interpretation, and administration of this Will and my probate estate shall be governed by the law applicable to the administration of my estate.

My Personal Representative may establish or change the principal place of administration of my estate to the extent permitted by applicable law and subject to the jurisdiction of the court having authority over my estate.

Nothing in this Section is intended to override mandatory law governing particular property, proceedings, or fiduciary duties.

## Mandatory Rights and Protected Property

Nothing in this Will is intended to dispose of property that I do not have the legal power to devise or to defeat any right that applicable law does not permit this Will to waive or defeat, including applicable rights relating to a surviving spouse, community or marital property, homestead or other protected property, exempt property, family allowances, or omitted family members. Any such right shall be determined and given effect under applicable law.

// The next sentences depend on the state (see will/state-text.js). CHANGED: your draft showed the community property
// sentence to every married person. It now appears only in your community property states (Arizona, California,
// Idaho, Louisiana, Nevada, New Mexico, Texas, Washington, Wisconsin), and only when the person is married.
// California says "community or quasi-community property"; the others say "community property".
// Florida gets a homestead sentence instead (taken from your Florida pour-over will).
[[if has_spouse]]
[[if cp_quasi]]
This Will disposes only of my interest in community or quasi-community property and does not dispose of any ownership interest belonging to my spouse or domestic partner.

[[end]]
[[if cp_plain]]
This Will disposes only of my interest in community property and does not dispose of any ownership interest belonging to my spouse or domestic partner.

[[end]]
[[end]]
[[if homestead]]
If Florida law governs rights in my homestead, nothing in this Will is intended to devise protected homestead except to the extent a devise is permitted by the Florida Constitution and applicable Florida law. Any invalid attempted devise of protected homestead shall be given the effect required by applicable law.

[[end]]
## Reliance by Third Parties

A person or entity dealing in good faith with my Personal Representative may rely upon the apparent authority of that fiduciary and is not required to inquire into the propriety of the fiduciary's actions or the application of money or property received from the fiduciary, except to the extent applicable law provides otherwise.

A written certification, affidavit, or other statement signed by the acting fiduciary concerning the fiduciary's authority or the provisions of this Will may be relied upon to the extent permitted by applicable law.

## Records and Accountings

My Personal Representative shall maintain records reasonably sufficient to identify property under the fiduciary's control and material receipts, disbursements, and distributions.

My Personal Representative shall provide accountings, reports, notices, or information to beneficiaries, courts, or other persons to the extent required by this Will or applicable law.

// Your Florida documents leave this section out, so it is shown only when the state text says no_contest: yes.
[[if no_contest_yes]]
## No-Contest Provision

To the fullest extent enforceable under applicable law, if a beneficiary directly contests the validity of this Will or seeks to invalidate a dispositive provision of this Will without probable cause or other legally protected basis, any gift or beneficial interest otherwise passing to that beneficiary under this Will shall be subject to the consequences permitted by applicable law.

This Section does not apply to a good-faith proceeding seeking an accounting, interpretation of this Will, instructions concerning administration, enforcement of fiduciary duties, removal or replacement of a fiduciary, or other relief that applicable law protects from enforcement of a no-contest provision.

This Section shall be applied only to the extent enforceable under the law governing the proceeding.

[[end]]
## Good-Faith Exercise of Fiduciary Authority

A Personal Representative acting in good faith may exercise the discretion granted by this Will subject to applicable fiduciary duties and shall not be liable for an exercise or nonexercise of discretion except to the extent liability may be imposed under applicable law.

Nothing in this Will excuses a fiduciary from liability that cannot lawfully be waived or limited.

## Headings

Article, Section, and paragraph headings are for convenience only and do not limit or alter the meaning of any provision of this Will.

## Gender and Number

Words used in any gender include all genders as the context requires.

Words used in the singular include the plural, and words used in the plural include the singular, when appropriate to the context.

## Construction

This Will shall be construed to carry out my expressed dispositive intentions to the fullest extent permitted by applicable law.

References to a statute, code provision, or other law include amendments, successor provisions, and substantially equivalent provisions applicable to the matter addressed.

If two provisions of this Will can reasonably be interpreted consistently, they shall be interpreted to give effect to both.

[[pagebreak]]
#! EXECUTION

// The execution, witness and notary text is different in every state. It comes from that state's section in
// will/state-text.js, taken from your Will_Pour_Over_<State>.docx files (the signing formalities are the same
// for a will with or without a trust). CHANGED: your regular will had only the California version.
[[tail]]

// ==========================================================================
//  THE BLANKS YOU CAN USE
//
//  Words and names:   name  name_caps (the name in ALL CAPS, used in the title)  county  state  spouse  marital
//                     executor (the primary personal representative)
//                     guardian  alt_guardian  survival_days  survival_words ("thirty (30)")
//                     witness_count (as a word)  state_note
//  Yes or no tests:   has_spouse  has_children  has_minor_children  children_answered
//                     has_alt_guardian  has_successors  has_gifts  two_witnesses  self_proving
//                     cp_quasi  cp_plain  homestead  no_contest_yes (these four come from will/state-text.js)
//  [[tail]] inserts the current state's execution, witness and notary text.
//  Lists:             children (child)   successors (successor)   gifts (gift, recipient)
//                     beneficiaries (beneficiary, share, cont_name, and the yes/no tests
//                                    cont_descendants  cont_named  cont_charity  cont_others)
//                     witness_slots (n, n_word)
// ==========================================================================
`;

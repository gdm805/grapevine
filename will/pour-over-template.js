window.WILL_POUR_OVER_TEMPLATE = String.raw`
// ==========================================================================
//  GRAPEVINE  |  POUR-OVER WILL (for use with a trust)  |  CALIFORNIA
//
//  The wording below is taken from your file Will_Pour_Over_California.docx, and matches it in every state.
//  The parts that change from state to state (community property, the no-contest section, and the execution, witness
//  and notary text) are in will/state-text.js, one section per state.
//  Save the file, then refresh the pour-over will page to see the change.
//  Where I added or changed something, a note beginning "ADDED" or "CHANGED" says so.
//
//  THE RULES are the same as in will/will-template.js. In short:
//   - A line that starts with two slashes is a note to you. It never appears in the will.
//   - {{name}} is a blank that fills in from the person's answers (list at the bottom).
//   - [[if x]] ... [[else]] ... [[end]] shows text only sometimes. [[if not x]] is the opposite.
//   - [[each list]] ... [[end]] repeats text for every item in a list.
//   - # Title = Article, ## Title = Section (numbers automatic), #! Title = heading with no number.
//   - Give a heading a nickname with {#label}, and write its number anywhere with [[ref label]].
//   - @center  @sub  @sign  @row Left | Right  [[pagebreak]]  **bold**  - bullet
//   - Never type the backtick key or a dollar sign followed by an opening curly brace.
//
//  YOUR TOKENS, TRANSLATED:  [[IF:X]] = [[if x]]   [[ELSE]] = [[else]]   [[END/IF]] = [[end]]
//                            [[REPEAT:X]] = [[each xs]]   [[TESTATOR_FULL_NAME]] = {{name}}
// ==========================================================================
@set survival_days = 30
@set draft_watermark = yes
@set draft_label = SAMPLE - NOT FOR SIGNING

@center **LAST WILL AND TESTAMENT**
@center **OF {{name_caps}}**

# Declarations {#declarations}

## Declaration, Identification, and Capacity

I, {{name}}, a resident of {{county}} County, {{state}}, declare this instrument to be my Last Will and Testament (this "**Will**"). I am at least eighteen (18) years of age, possess testamentary capacity, understand the nature and effect of this Will, and execute it freely and voluntarily. I intend this Will to control the disposition of my probate estate at my death, subject to applicable law.

## Revocation of Prior Wills and Codicils

I revoke all prior wills and codicils I previously executed. This revocation does not revoke or alter any beneficiary designation, payable-on-death designation, transfer-on-death registration, survivorship arrangement, trust, contract, deed, or other nonprobate transfer unless the governing instrument or applicable law provides otherwise.

## Family Information

[[if unmarried]]
I am unmarried and am not in a registered domestic partnership.

[[end]]
[[if married_or_dp]]
My spouse or domestic partner is {{spouse}}.

[[end]]
[[if children_answered]]
[[if children_yes]]
For purposes of this Will, my children are:

[[each children]]
@row {{child}} |

[[end]]
[[else]]
I have no children.

[[end]]
[[end]]
## Existing Trust

I have established or am a Trustmaker of {{the_trust_name}}, originally dated {{trust_date}} and, if applicable, amended or restated from time to time (the "**Trust**"). The Trust is intended to receive property from my probate estate under this Will.

[[if joint_trust]]
The Trust is a Joint Trust created by me and {{other_trustmaker}}. A reference in this Will to the Trust includes the Trust as it exists at my death and any separate trust or share then continuing under its terms that the Trust designates to receive property passing from my estate.

[[end]]
[[if married_or_dp]]
## Effect of Change in Marital Status

[[if revoke_spouse]]
If, before my death, my marriage or domestic partnership is dissolved, annulled, or subject to a decree of legal separation or other legally effective termination, I intend every provision of this Will that identifies, benefits, nominates, or grants authority to my spouse or domestic partner to be revoked to the fullest extent permitted by applicable law. For purposes of this Will, my spouse or domestic partner shall be treated as having predeceased me with respect to each such provision, except to the extent applicable law requires a different result.

[[else]]
If, before my death, my marriage or domestic partnership is dissolved, annulled, or subject to a decree of legal separation or other legally effective termination, I do not intend that event, by itself, to revoke a provision of this Will identifying, benefiting, nominating, or granting authority to my spouse or domestic partner, except to the extent applicable law requires otherwise.

[[end]]
[[end]]
# Personal Representative {#pr}

## Appointment

I nominate the person or persons designated below to serve as Personal Representative of my estate. If a designated Personal Representative is unwilling, unable, or ineligible to serve or ceases to serve before completion of administration, the next willing and eligible successor designated below shall serve.

[[if pr_successive]]
@row Primary Personal Representative: | {{executor}}

[[each successors]]
@row Successor Personal Representative: | {{successor}}

[[end]]
[[end]]
[[if pr_co]]
The following Co-Personal Representatives shall serve together:

[[each co_prs]]
@row {{co_pr}} |

[[end]]
[[each successors]]
@row Successor Personal Representative: | {{successor}}

[[end]]
[[end]]
## Qualification, Bond, Compensation, and Vacancy

A nominee is not required to serve and shall qualify and accept office in the manner required by applicable law. No Personal Representative nominated by me shall be required to furnish bond or other security except to the extent a waiver is not permitted by applicable law or the court requires bond. My Personal Representative is entitled to compensation and reimbursement of reasonable expenses as permitted by applicable law. A vacancy shall be filled first by the next willing and eligible successor designated in this Will and otherwise as provided by applicable law.

[[if pr_co]]
// CHANGED: your draft prints this heading even when there are no Co-Personal Representatives.
// Here the whole section appears only when they are chosen, so the numbering closes up.
## Co-Personal Representatives

If two or more Personal Representatives serve together, they shall act in the manner required by applicable law. To the extent this Will may control, any Co-Personal Representative may independently perform Routine Administrative Acts. Other material actions require approval of a majority of the Co-Personal Representatives then serving; if only two are serving, both must approve. If they cannot agree, any Co-Personal Representative may seek instructions from the court having jurisdiction over my estate.

[[end]]
[[if minor_children_yes]]
// CHANGED: same here. Your draft prints the Guardian article heading and section titles even when
// no child is a minor. Here the whole article appears only when a child is under 18.
# Guardian of Minor Children {#guardian}

## Nomination of Guardian

[[each guardian_nominations]]
If at my death {{applies_to}} is a minor and a guardian of that Child's person is needed, I nominate {{guardian}} to serve as guardian, subject to applicable law and the court's determination of the Child's best interests.

[[each alternates]]
If {{guardian}} is unwilling, unable, or ineligible to serve, I nominate {{alternate}} to serve as alternate guardian.

[[end]]
[[end]]
[[if prop_fid_yes]]
## Property of a Minor

If applicable law requires a guardian, conservator, custodian, or other fiduciary to hold or manage property passing directly under this Will to a minor Child, I nominate {{prop_fid}} to serve in that capacity.

[[each prop_alternates]]
If {{prop_fid}} is unwilling, unable, or ineligible to serve, I nominate {{prop_alt}} to serve as alternate property fiduciary.

[[end]]
[[end]]
## Bond

To the extent permitted by applicable law, I request that a guardian of a minor Child's person designated by me be permitted to serve without bond. Any bond concerning management of a minor's property remains subject to applicable law and court order.

[[end]]
# Estate Administration {#administration}

## General Duties

Upon my death, the Personal Representative who qualifies to serve shall identify, collect, protect, preserve, manage, and value my probate estate and shall take the actions reasonably necessary to complete its administration in accordance with this Will and applicable law.

## Expenses, Debts, Taxes, and Reserves

My Personal Representative shall pay or make reasonable provision for expenses of administration, legally enforceable debts, taxes, and other obligations properly payable from my probate estate, subject to applicable creditor procedures, statutory priorities, protected-property rules, tax-apportionment law, and rights of reimbursement or contribution from the Trust or other recipients when applicable. My Personal Representative may establish reasonable reserves before final distribution.

## Administrative Powers

In addition to powers granted by applicable law, my Personal Representative may retain, protect, insure, manage, invest, sell, exchange, lease, encumber, settle, distribute, or otherwise deal with estate property; operate or dispose of business interests subject to applicable ownership and licensing requirements; employ and compensate professionals; resolve claims and litigation; prepare and file tax returns and make permitted tax elections; administer Digital Assets and electronic communications to the fullest extent permitted by applicable law; make distributions in cash or in kind; and execute documents reasonably necessary or appropriate to administer my estate.

## Digital Assets

I expressly authorize my Personal Representative, to the fullest extent permitted by applicable law and any controlling online-tool designation or terms governing disclosure, to access, obtain, control, manage, preserve, copy, transfer, close, delete, or otherwise administer my Digital Assets and to request and obtain from custodians or service providers any catalog, record, information, or content of electronic communications that I have authority to permit my Personal Representative to access or receive and that may lawfully be disclosed.

## Independent Administration

To the fullest extent permitted by applicable law, I request that my Personal Representative administer my estate with the least court supervision and intervention legally available, while retaining the right to seek court authority, instructions, approval, or protection whenever appropriate or required.

# Pour-Over Distribution {#pourover}

## Pour-Over of Residuary Estate

All property comprising my probate estate that is not otherwise effectively disposed of by this Will, including any lapsed or failed gift that becomes part of the residue, constitutes my "**Residuary Estate**." After payment or reasonable provision for the lawful obligations of my estate, I give, devise, and bequeath my entire Residuary Estate to the then-acting Trustee of {{trust_name}}, to be added to, held, administered, and distributed as part of the Trust according to its terms as they exist at my death.

## Trust Terms Control

Property passing to the Trust under this Will shall be administered under the terms of the Trust as they exist at my death, including any valid amendment or restatement effective before my death. The terms of the Trust are not reproduced in this Will, and this Will does not create a separate testamentary copy of the Trust merely because property passes to it.

## Trust Amended, Restated, Renamed, or Divided

A valid amendment, complete restatement, change of name, change of Trustee, division into shares or subtrusts, or other modification of the Trust before my death shall not cause the devise under this Article to fail if the Trust or the appropriate continuing trust or share can reasonably be identified.

## Trust Revoked or Unable to Receive {#fallback}

If the Trust has been revoked, terminated, or otherwise is not in existence at my death, or if for another reason the devise to the Trust cannot lawfully or effectively be completed, I direct my Personal Representative to distribute my Residuary Estate according to the dispositive provisions of the Trust that would have governed distribution of the property attributable to me at my death if the Trust had remained in existence and capable of receiving the property, to the extent those provisions can be established and lawfully given testamentary effect.

If those dispositive provisions cannot be established or cannot lawfully be given effect, my Residuary Estate shall be distributed to the persons who would then be my heirs under the intestacy laws governing distribution of my probate estate, in the shares they would receive under those laws.

## Temporary Vacancy in Trusteeship

If no Trustee of the Trust is then serving or able to receive property, my Personal Representative may retain the property for a reasonable period while a successor Trustee is appointed or qualified under the Trust or applicable law. The devise shall not fail merely because of a temporary vacancy in the office of Trustee.

## Minor or Incapacitated Recipient

If a fallback distribution under this Article becomes payable outright to a minor or incapacitated recipient, my Personal Representative may, to the extent permitted by applicable law, apply the property directly for the recipient's benefit or distribute it to a parent, guardian, conservator, custodian, caregiver, or other person or fiduciary legally authorized to receive or manage property for the recipient.

# General Provisions {#general}

## Required Survivorship

Except where the Trust provisions applied under [[ref fallback]] provide otherwise, a person receiving property directly under this Will must survive me by {{survival_words}} days. A person who does not survive me by that period shall be treated as having predeceased me for purposes of the affected distribution.

## Mandatory Rights and Protected Property

Nothing in this Will is intended to dispose of property I do not have the legal power to devise or to defeat any right that applicable law does not permit this Will to waive or defeat, including rights relating to a surviving spouse, community or marital property, homestead or other protected property, exempt property, family allowances, or omitted family members. Any mandatory statutory right controls to the extent it cannot lawfully be altered by this Will.

// The sentence below depends on the state (see will/state-text.js). It appears in your community
// property states: Arizona, California, Idaho, Louisiana, Nevada, New Mexico, Texas, Washington and Wisconsin.
// California says "community or quasi-community property"; the others say "community property". Florida gets its
// homestead sentence instead. ADDED: your documents had this sentence only for California, Arizona and Idaho;
// I added it for the other community property states on your list. CHANGED: I show it only when the person has a
// spouse or domestic partner, since it speaks of one.
[[if cp_quasi]]
[[if married_or_dp]]
This Will disposes only of my interest in community or quasi-community property and does not dispose of any ownership interest belonging to my spouse or domestic partner.

[[end]]
[[end]]
[[if cp_plain]]
[[if married_or_dp]]
This Will disposes only of my interest in community property and does not dispose of any ownership interest belonging to my spouse or domestic partner.

[[end]]
[[end]]
[[if cp_marital]]
[[if married_or_dp]]
This Will disposes only of my interest in marital property and does not dispose of any ownership interest belonging to my spouse.

[[end]]
[[end]]
[[if homestead]]
If Florida law governs rights in my homestead, nothing in this Will is intended to devise protected homestead except to the extent a devise is permitted by the Florida Constitution and applicable Florida law. Any invalid attempted devise of protected homestead shall be given the effect required by applicable law.

[[end]]
[[if is_louisiana]]
Because Louisiana law governs this Will, the following also apply. (a) Each reference in this Will to a guardian of a minor child means a tutor, and my nomination of a guardian is my appointment of that person as tutor under Louisiana Civil Code article 257. (b) Each reference in this Will to my Personal Representative means my executor. I direct that my succession be administered as an independent administration under Louisiana Code of Civil Procedure articles 3396 through 3396.20, and that my executor serve without bond. (c) If at my death I have a forced heir, that forced heir shall receive the forced portion required by Louisiana law. The other gifts in this Will shall be reduced proportionally to the extent necessary to satisfy the forced portion.

[[end]]
## Reliance by Third Parties

A person or entity dealing in good faith with my Personal Representative may rely upon the apparent authority of that fiduciary and is not required to inquire into the propriety of the fiduciary's actions or the application of money or property received from the fiduciary, except to the extent applicable law provides otherwise.

## Severability and Construction

If any provision of this Will is invalid, illegal, or unenforceable, the remaining provisions shall remain valid and enforceable to the fullest extent permitted by applicable law. Headings are for convenience only. Words used in the singular include the plural and words used in any gender include all genders as the context requires.

// FORMATTING ONLY: your draft runs all the definitions together in one paragraph. I put each on its own line.
## Definitions

"**Child**" means a person recognized as my child under applicable law, including an adopted child.

"**Digital Assets**" means electronic records and electronically stored rights or interests in which I have a right or interest at my death, together with associated information that may lawfully be disclosed to or accessed by my Personal Representative.

"**Personal Representative**" means the fiduciary appointed to administer my probate estate, regardless of the title used by applicable law.

"**Routine Administrative Acts**" means ministerial or ordinary-course actions that do not materially alter ownership, distribution, or beneficial enjoyment of estate property.

"**Trustee**" means the person or entity then serving as Trustee or Co-Trustee of the Trust, including a successor Trustee.

// Your Florida document leaves this section out, so it is shown only when the state text says no_contest: yes.
[[if no_contest_yes]]
## No-Contest Provision

To the fullest extent enforceable under applicable law, if a beneficiary directly contests the validity of this Will or seeks to invalidate a dispositive provision without probable cause or another legally protected basis, any beneficial interest otherwise passing directly to that beneficiary under this Will shall be subject only to the consequences permitted by applicable law. This provision shall be construed narrowly and shall not apply where enforcement is prohibited or where applicable law protects the proceeding.

[[end]]
[[pagebreak]]
#! EXECUTION

// The execution, witness and notary text is different in every state. It comes from that state's section
// in will/state-text.js, taken from your Will_Pour_Over_<State>.docx.
[[tail]]

// ==========================================================================
//  THE BLANKS YOU CAN USE
//
//  Words and names:   name  name_caps (the name in ALL CAPS, used in the title)  county  state  spouse  trust_name  trust_date  other_trustmaker
//                     executor (the primary personal representative)  survival_words  witness_count
//  Yes or no tests:   unmarried  married_or_dp  revoke_spouse  children_answered  children_yes
//                     minor_children_yes  joint_trust  pr_successive  pr_co  prop_fid_yes
//                     two_witnesses  self_proving
//  Lists:             children (child)  successors (successor)  co_prs (co_pr)
//                     guardian_nominations (applies_to, guardian, and a list called alternates (alternate))
//                     prop_alternates (prop_alt)  witness_slots (n, n_word)
//  Also: prop_fid (the property fiduciary's name)   cp_quasi  cp_plain  homestead  no_contest_yes (from the state text)
//  [[tail]] inserts the current state's execution, witness and notary text.
// ==========================================================================
`;

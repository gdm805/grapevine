window.TRUSTAMEND_TEMPLATE = String.raw`
// ==========================================================================
//  TOVAKIN  |  AMENDMENT TO A REVOCABLE TRUST (made 20 Nov 2026)
//  Amends any revocable trust -- one made on Tovakin or elsewhere -- whose terms let the Trustmaker(s) amend it
//  by a signed writing. Only fixed kinds of change are offered (no free-typed legal text): the successor
//  trustee; who receives the remaining Trust Estate and in what shares; adding specific gifts; revoking
//  specific gifts. Same defined terms as the Revocable Living Trust (will/trust-template.js); signed like it,
//  before a notary (and two witnesses in Delaware), on the trust's own state signing page
//  ([[include trust_execution]] from will/trust-state-text.js). A joint trust's amendment is signed by both.
//  Same template rules as will/will-template.js (see the notes at the top of that file).
//  DRAFT: review every word before turning off the preview mark.
// ==========================================================================
@set draft_watermark = yes
@set draft_label = Preview - Not for Signing

@center **{{ordinal_caps}} AMENDMENT TO**

@center **{{trust_name}}**

This {{ordinal}} Amendment (the "Amendment") is made by {{trustmakers}} (the "{{tm_word}}") to amend {{trust_name}}, established under a trust agreement dated {{orig_date}}[[if is_restated]], as restated on {{restatement_date}}[[end]][[if has_prior]], and as previously amended by {{prior_list}}[[end]] (the "Trust Agreement").

# RECITALS

## Declaration of Capacity

[[if is_joint]]
The Trustmakers execute this Amendment freely and voluntarily. Each Trustmaker declares that the Trustmaker is at least eighteen (18) years of age, possesses the legal capacity to amend the Trust Agreement, understands the nature and effect of this Amendment, and intends that it be legally effective according to its terms.
[[else]]
The Trustmaker executes this Amendment freely and voluntarily and declares that the Trustmaker is at least eighteen (18) years of age, possesses the legal capacity to amend the Trust Agreement, understands the nature and effect of this Amendment, and intends that it be legally effective according to its terms.
[[end]]

## Right to Amend

The Trust Agreement reserves to the {{tm_word}} the right to amend it by a signed writing. The {{tm_word}} {{are}} living and {{are}} not Incapacitated, and [[if is_joint]]together exercise[[else]]exercises[[end]] that right by signing this Amendment.

## Purpose

The {{tm_word}} [[if is_joint]]amend[[else]]amends[[end]] the Trust Agreement as provided in this Amendment.

# AMENDMENTS

[[if do_trustee]]
## Successor Trustee

The provisions of the Trust Agreement naming the successor Trustee are amended to provide that, whenever a successor Trustee is to serve under the Trust Agreement, {{new_trustee}} shall serve as successor Trustee.[[if has_alt_trustee]] If {{new_trustee}} is unable or unwilling to serve or stops serving, {{alt_trustee}} shall serve as successor Trustee.[[end]]

[[if keep_prior_trustees]]
Any person named as a successor Trustee in the Trust Agreement before this Amendment shall serve, in the order named there, only if every person named in this Section is unable or unwilling to serve or stops serving.
[[else]]
Any person named as a successor Trustee in the Trust Agreement before this Amendment is removed as a successor Trustee.
[[end]]
[[end]]

[[if do_add_gifts]]
## Additional Specific Gifts

Upon the death of {{death_ref}}, and before the distribution of the remaining Trust Estate, the Trustee shall distribute the following gifts:

[[each add_gifts]]
- {{gift_item}} to {{gift_recipient}}.
[[end]]

A gift under this Section to a person who does not survive {{death_ref}}, or to an organization that is not in existence at the death of {{death_ref}}, lapses and passes as part of the remaining Trust Estate.
[[end]]

[[if do_remove_gifts]]
## Gifts Revoked

Each of the following gifts made in the Trust Agreement before this Amendment is revoked:

[[each remove_gifts]]
- {{gift_item}} to {{gift_recipient}}.
[[end]]

The property that was the subject of each revoked gift passes as part of the remaining Trust Estate.
[[end]]

[[if do_residue]]
## Distribution of the Remaining Trust Estate

The provisions of the Trust Agreement directing the distribution of the remaining Trust Estate upon the death of {{death_ref}} (after the payment of expenses, debts and taxes and the distribution of specific gifts) are amended to provide that the Trustee shall distribute the remaining Trust Estate to the following beneficiaries, in the shares stated:

[[each beneficiaries]]
- {{ben_name}}: {{ben_share}} percent ({{ben_share}}%)[[if ben_has_backup]]; if {{ben_name}} does not survive {{death_ref}}, to {{ben_backup}}, if {{ben_backup}} survives {{death_ref}}[[end]]
[[end]]

If a beneficiary named in this Section does not survive {{death_ref}}[[if any_ben_backup]] and no backup named for that beneficiary survives {{death_ref}}[[end]], that beneficiary's share shall pass [[if lapse=DESCENDANTS]]to that beneficiary's descendants who survive {{death_ref}}, per stirpes, and if there are none, to the other beneficiaries named in this Section who survive {{death_ref}}, in proportion to their shares[[else]]to the other beneficiaries named in this Section who survive {{death_ref}}, in proportion to their shares[[end]]. If no beneficiary named in this Section, and no one who would take a beneficiary's share under this paragraph, survives {{death_ref}}, the remaining Trust Estate shall pass as the Trust Agreement provided before this Amendment.

[[if do_young]]
[[ref young]] applies to a share distributable under this Section to a beneficiary who has not reached the age stated there. Any provision of the Trust Agreement for holding a share for a beneficiary with a disability continues to apply to a share distributable under this Section.
[[else]]
Any provision of the Trust Agreement for holding a beneficiary's share in further trust because of the beneficiary's age or disability continues to apply to a share distributable under this Section.
[[end]]
[[end]]

[[if do_backups]]
## Backup Beneficiaries

The Trust Agreement is amended to provide that if a beneficiary named below does not survive {{death_ref}}, any share of the remaining Trust Estate that beneficiary would have received under the Trust Agreement shall instead be distributed to the backup named for that beneficiary, if the backup survives {{death_ref}}:

[[each backups]]
- If {{bk_ben}} does not survive {{death_ref}}, to {{bk_backup}}.
[[end]]

If neither a beneficiary named in this Section nor that beneficiary's backup survives {{death_ref}}, that beneficiary's share shall pass as the Trust Agreement provided before this Amendment.
[[end]]

[[if do_young]]
## Property for Young Beneficiaries {#young}

The Trust Agreement is amended to provide that any property distributable from the Trust Estate after the death of {{death_ref}} to a beneficiary, other than a charitable organization, who has not reached age {{young_age_words}} shall instead be held by {{young_trustee}}[[if has_alt_young_trustee]], or if {{young_trustee}} is unwilling, unable, or ineligible to serve or ceases to serve, by {{alt_young_trustee}},[[end]] as trustee, in a separate trust for that beneficiary.

Until the beneficiary reaches age {{young_age_words}}, the trustee may distribute to or for the benefit of the beneficiary as much of the net income and principal as the trustee considers advisable for the beneficiary's health, education, maintenance, and support, taking into account other resources known to the trustee to be available to the beneficiary. Net income not distributed shall be added to principal. When the beneficiary reaches age {{young_age_words}}, the trustee shall distribute the balance of the trust to the beneficiary. If the beneficiary dies before reaching that age, the trustee shall distribute the balance to the beneficiary's descendants who survive the beneficiary, per stirpes, or if there are none, to the beneficiary's estate.

The trustee shall serve without bond to the extent permitted by law and shall have all powers given to trustees by applicable law and by the Trust Agreement. This Section replaces any provision of the Trust Agreement for holding a beneficiary's share because of the beneficiary's age, but not any provision for a beneficiary with a disability.
[[end]]

[[if do_pets]]
## Care of Pets

Upon the death of {{death_ref}}, the Trustee shall distribute any pets then held by the Trust or owned by {{pet_owner}}[[if has_pet_description]], including {{pet_description}},[[end]] to {{pet_caretaker}}, if {{pet_caretaker}} is then living and willing to accept them.[[if has_pet_alt]] If not, the Trustee shall distribute them to {{pet_alt_caretaker}}, if {{pet_alt_caretaker}} is then living and willing to accept them.[[end]]

[[if has_pet_gift]]
The Trustee shall distribute {{pet_gift}} from the Trust Estate to the person who accepts the pets under this Section. {{tm_request}} that this gift be used for the care of the pets. This request creates no trust and no legally enforceable obligation, and the gift belongs to that person outright.

[[end]]
If no person named in this Section accepts the pets, the Trustee may place them with a person or organization the Trustee believes will give them a good home, and may pay the reasonable costs of doing so from the Trust Estate. This Section replaces every provision of the Trust Agreement about the care of pets.
[[end]]

[[if do_exclude]]
## Persons Who Receive Nothing

The {{tm_word}} intentionally [[if is_joint]]make[[else]]makes[[end]] no provision in the Trust Agreement for the following persons, and each of them shall receive nothing under the Trust Agreement:

[[each excluded]]
- {{ex_name}}[[if ex_has_rel]] ({{ex_rel}})[[end]]
[[end]]

This Section does not change any gift to any other person, including a descendant of a person named in this Section, unless the Trust Agreement provides otherwise.
[[end]]

# GENERAL PROVISIONS

## Effect of Amendment

Except as amended by this Amendment, the Trust Agreement remains in full force and effect and is ratified and confirmed. If any provision of the Trust Agreement is inconsistent with this Amendment, this Amendment controls.

## Effective Date

This Amendment takes effect when it is signed by {{all_tm}}.

## Definitions

Capitalized terms used in this Amendment and not defined in it have the meanings given to them in the Trust Agreement.

## Governing Law

This Amendment is governed by the same law that governs the Trust Agreement.

# EXECUTION

## Execution

The {{tm_word}} [[if is_joint]]sign[[else]]signs[[end]] this Amendment as of the date stated below, in {{county_state}}, as {{tm_word}}[[if tm_is_trustee]] and as Trustee[[if is_joint]]s[[end]] then serving[[end]], and [[if is_joint]]declare[[else]]declares[[end]] that it accurately reflects [[if is_joint]]their[[else]]the {{tm_word}}'s[[end]] intentions.

@line Date: ______

@line Signature: ________________________________________________

@line {{name1}}, {{tm_title}}

[[if is_joint]]
@line Date: ______

@line Signature: ________________________________________________

@line {{name2}}, {{tm_title}}
[[end]]

[[include trust_execution]]

[[if not tm_is_trustee]]
[[pagebreak]]

@center **ACKNOWLEDGMENT BY TRUSTEE**

The undersigned, as Trustee of {{trust_name}}, acknowledges receipt of this Amendment.

@line Date: ______________________

@line Signature: ________________________________________________

@line {{current_trustee}}, Trustee
[[end]]
`;

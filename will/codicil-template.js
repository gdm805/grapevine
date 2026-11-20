window.CODICIL_TEMPLATE = String.raw`
// ==========================================================================
//  TOVAKIN  |  CODICIL TO A WILL (made 20 Nov 2026)
//  Changes a signed will -- one made on Tovakin or elsewhere -- with fixed kinds of change only (no free-typed
//  legal text): the Personal Representative (executor); the guardian of minor children; adding or revoking
//  specific gifts; and, for a regular will only, who receives the residuary estate. A codicil must be signed
//  with the same formalities as a will, so its signing pages are the will's own state pages ([[tail]] from
//  will/state-text.js). In those pages the Testator's own execution paragraph is changed to say "Codicil"
//  (codicilTail() in js/will.js); the statutory attestation and self-proving wording is left word for word,
//  and the "Signing Pages" section below says that "will" there refers to this Codicil.
//  First person, like the will (will/will-template.js). Same template rules (see the notes at the top of that file).
//  DRAFT: review every word before turning off the preview mark.
// ==========================================================================
@set draft_watermark = yes
@set draft_label = Preview - Not for Signing

@center **{{ordinal_caps}} CODICIL TO THE**

@center **{{will_title_caps}} OF**

@center **{{name_caps}}**

I, {{name}}, of {{county_state}}, make this {{ordinal}} Codicil to my {{will_title}} dated {{will_date}}[[if has_prior]], as previously amended by {{prior_list}}[[end]] (my "Will").

# DECLARATIONS

## Declaration of Capacity

I make this Codicil freely and voluntarily. I declare that I am at least eighteen (18) years of age, of sound mind, and under no constraint or undue influence, and that I understand the nature and effect of this Codicil.

## Purpose

I amend my Will as provided in this Codicil.

# CHANGES TO MY WILL

[[if do_executor]]
## Personal Representative

I amend my Will to nominate {{new_executor}} to serve as Personal Representative of my estate (called the executor in some states).[[if has_alt_executor]] If {{new_executor}} is unwilling, unable, or ineligible to serve or ceases to serve, I nominate {{alt_executor}} to serve as successor Personal Representative.[[end]]

[[if keep_prior_executors]]
Any person nominated as Personal Representative or successor Personal Representative in my Will before this Codicil shall serve, in the order named there, only if every person nominated in this Section is unwilling, unable, or ineligible to serve or ceases to serve.
[[else]]
This Section replaces every nomination of a Personal Representative or successor Personal Representative in my Will before this Codicil.
[[end]]
[[end]]

[[if do_guardian]]
## Guardian of My Minor Children

I amend my Will to nominate {{new_guardian}} as guardian of the person of each of my children who is a minor at my death.[[if has_alt_guardian]] If {{new_guardian}} is unwilling, unable, or ineligible to serve or ceases to serve, I nominate {{alt_guardian}} as guardian.[[end]] This Section replaces every nomination of a guardian of the person of my minor children in my Will before this Codicil.
[[end]]

[[if do_add_gifts]]
## Additional Specific Gifts

In addition to the gifts in my Will, I give:

[[each add_gifts]]
- {{gift_item}} to {{gift_recipient}}.
[[end]]

A gift under this Section to a person who does not survive me, or to an organization that is not in existence at my death, lapses and becomes part of my residuary estate.
[[end]]

[[if do_remove_gifts]]
## Gifts Revoked

I revoke each of the following gifts in my Will:

[[each remove_gifts]]
- {{gift_item}} to {{gift_recipient}}.
[[end]]

The property that was the subject of each revoked gift becomes part of my residuary estate.
[[end]]

[[if do_residue]]
## My Residuary Estate

I amend my Will to provide that I give my residuary estate (all property I own at my death that is not otherwise effectively disposed of by my Will) to the following beneficiaries, in the shares stated:

[[each beneficiaries]]
- {{ben_name}}: {{ben_share}} percent ({{ben_share}}%)[[if ben_has_backup]]; if {{ben_name}} does not survive me, to {{ben_backup}}, if {{ben_backup}} survives me[[end]]
[[end]]

If a beneficiary named in this Section does not survive me[[if any_ben_backup]] and no backup named for that beneficiary survives me[[end]], that beneficiary's share shall pass [[if lapse=DESCENDANTS]]to that beneficiary's descendants who survive me, per stirpes, and if there are none, to the other beneficiaries named in this Section who survive me, in proportion to their shares[[else]]to the other beneficiaries named in this Section who survive me, in proportion to their shares[[end]]. If no beneficiary named in this Section, and no one who would take a beneficiary's share under this paragraph, survives me, my residuary estate shall pass as my Will provided before this Codicil.

[[if do_young]]
[[ref young]] applies to a share distributable under this Section to a beneficiary who has not reached the age stated there. Any provision of my Will for holding or managing a share for a beneficiary with a disability continues to apply to a share distributable under this Section.
[[else]]
Any provision of my Will for holding a beneficiary's share in trust, or for a custodian or other fiduciary to manage it, because of the beneficiary's age or disability continues to apply to a share distributable under this Section.
[[end]]
[[end]]

[[if do_backups]]
## Backup Beneficiaries

I amend my Will to provide that if a beneficiary named below does not survive me, any share of my residuary estate that beneficiary would have received under my Will shall instead pass to the backup named for that beneficiary, if the backup survives me:

[[each backups]]
- If {{bk_ben}} does not survive me, to {{bk_backup}}.
[[end]]

If neither a beneficiary named in this Section nor that beneficiary's backup survives me, that beneficiary's share shall pass as my Will provided before this Codicil.
[[end]]

[[if do_young]]
## Property for Young Beneficiaries {#young}

I amend my Will to provide that any property distributable under my Will to a beneficiary, other than a charitable organization, who has not reached age {{young_age_words}} shall instead be distributed to {{young_trustee}}[[if has_alt_young_trustee]], or if {{young_trustee}} is unwilling, unable, or ineligible to serve or ceases to serve, to {{alt_young_trustee}},[[end]] as trustee, to be held as a separate trust for that beneficiary.

Until the beneficiary reaches age {{young_age_words}}, the trustee may distribute to or for the benefit of the beneficiary as much of the net income and principal as the trustee considers advisable for the beneficiary's health, education, maintenance, and support, taking into account other resources known to the trustee to be available to the beneficiary. Net income not distributed shall be added to principal. When the beneficiary reaches age {{young_age_words}}, the trustee shall distribute the balance of the trust to the beneficiary. If the beneficiary dies before reaching that age, the trustee shall distribute the balance to the beneficiary's descendants who survive the beneficiary, per stirpes, or if there are none, to the beneficiary's estate.

The trustee shall serve without bond to the extent permitted by law and shall have all powers given to trustees by applicable law. This Section replaces any provision of my Will for holding or managing property for a beneficiary because of the beneficiary's age, but not any provision for a beneficiary with a disability.
[[end]]

[[if do_pets]]
## Care of My Pets

I amend my Will to provide that I give any pets I own at my death[[if has_pet_description]], including {{pet_description}},[[end]] to {{pet_caretaker}}, if {{pet_caretaker}} survives me and is willing to accept them.[[if has_pet_alt]] If not, I give them to {{pet_alt_caretaker}}, if {{pet_alt_caretaker}} survives me and is willing to accept them.[[end]]

[[if has_pet_gift]]
I give {{pet_gift}} to the person who accepts my pets under this Section. I request, but do not require, that this gift be used for the care of my pets. This request creates no trust and no legally enforceable obligation, and the gift belongs to that person outright.

[[end]]
If no person named in this Section accepts my pets, my Personal Representative may place them with a person or organization my Personal Representative believes will give them a good home, and may pay the reasonable costs of doing so from my estate. This Section replaces every provision of my Will about the care of my pets.
[[end]]

[[if do_exclude]]
## Persons Who Receive Nothing

I intentionally make no provision in my Will for the following persons, and each of them shall receive nothing under my Will:

[[each excluded]]
- {{ex_name}}[[if ex_has_rel]] ({{ex_rel}})[[end]]
[[end]]

This Section does not change any gift to any other person, including a descendant of a person named in this Section, unless my Will provides otherwise.
[[end]]

# REPUBLICATION

## Republication of My Will

Except as changed by this Codicil, I ratify, confirm, and republish my Will. If any provision of my Will is inconsistent with this Codicil, this Codicil controls. My Will and this Codicil shall be read and construed together as one instrument.

## Terms

Words defined in my Will have the same meanings in this Codicil.

## Signing Pages

This Codicil is a will under applicable law. In the execution, attestation, and self-proving pages that follow, "will," "Will," and "Last Will and Testament" refer to this Codicil.

[[pagebreak]]
#! EXECUTION

[[tail]]
`;

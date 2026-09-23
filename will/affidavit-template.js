window.AFFIDAVIT_TEMPLATE = String.raw`
// ==========================================================================
//  GRAPEVINE  |  AFFIDAVIT OF TRUSTEE
//  Drafted from your national baseline (Grapevine_National_Affidavit_of_Trustee_V4_FORMATTING_MASTER.docx),
//  which is nearly word-for-word identical across all 51 of your state files -- only the jurat
//  (the state-specific sworn-oath block) actually varies. See will/affidavit-state-text.js for that,
//  taken word for word from each state's own controlled file. See
//  will/NOTES-ON-YOUR-AFFIDAVIT-OF-TRUSTEE.txt for what was left out and why.
// ==========================================================================
@set draft_watermark = yes
@set draft_label = SAMPLE - NOT FOR SIGNING

@center **AFFIDAVIT OF TRUSTEE**

# TRUST IDENTIFICATION AND AFFIANT

## Purpose

This Affidavit provides sworn evidence of the identity, status, and authority of a currently acting Trustee concerning the trust identified below. It is intended for use when a person, institution, or agency requests sworn confirmation of the Trustee's status and authority.

This Affidavit does not amend, revoke, restate, or otherwise alter the Trust Agreement and does not disclose dispositive provisions except to the extent independently required by applicable law or the pending transaction.

## Trust Identification

[[if trust_type=SINGLE]]

Trust Name: {{trust_name}}
Trustmaker / Settlor: {{tm1_name}}
Original Trust Date: {{orig_trust_date}}

[[if trust_restated]]

Most Recent Restatement Date: {{restatement_date}}

The Trust is a continuation and restatement of the trust originally established on {{orig_trust_date}}. The restatement did not create a new trust.

[[end]]

[[else]]

Trust Name: {{trust_name}}
Trustmakers / Settlors: {{tm1_name}} and {{tm2_name}}
Original Trust Date: {{orig_trust_date}}

[[if trust_restated]]

Most Recent Restatement Date: {{restatement_date}}

The Trust is a continuation and restatement of the trust originally established on {{orig_trust_date}}. The restatement did not create a new trust.

[[end]]

[[end]]

## Affiant

The Affiant is {{affiant_name}}, who is currently serving as {{affiant_capacity}} of the Trust and who makes this Affidavit from personal knowledge.

[[if affiant_is_successor]]

The Affiant became entitled to serve as Successor Trustee upon the occurrence of the event authorizing succession under the Trust Agreement and has accepted and assumed the office of Trustee.

[[end]]

# CURRENT TRUSTEE STATUS

## Currently Acting Trustee or Trustees

[[if single_trustee]]

{{trustee_name}} is the currently acting Trustee of the Trust.

[[else]]

The following persons are the currently acting Trustees of the Trust:

[[each trustees]]

{{trustee_name}} — Trustee

[[end]]

[[end]]

## Acceptance and Continuity of Office

Each person identified as a currently acting Trustee has accepted the office and, to the Affiant's knowledge, has not resigned, been removed, become disqualified, or otherwise ceased to serve.

## Co-Trustee Decision Rule

[[if single_trustee]]

Only one Trustee is currently acting. That Trustee may exercise the authority stated in this Affidavit subject to the Trust Agreement, applicable law, and any transaction-specific limitation.

[[else]]

The authority of the currently acting Trustees to act with respect to the pending transaction is governed by the Trust Agreement and applicable law.

[[if trustee_rule=ANY_ONE]]

The applicable decision rule is: any one currently acting Trustee may act alone.

[[elif trustee_rule=ALL]]

The applicable decision rule is: all currently acting Trustees must act jointly.

[[elif trustee_rule=MAJORITY]]

The applicable decision rule is: a majority of the currently acting Trustees may act.

[[end]]

The fact that this Affidavit is signed by fewer than all currently acting Trustees does not itself establish that fewer than all Trustees may complete the underlying transaction; the transaction-specific decision rule controls.

[[end]]

# ADMINISTRATIVE PHASE AND TRUST STATUS

[[if trust_type=SINGLE]]

## Single Trust Status

[[if trustmaker_status=LIVING]]

The Trustmaker is living. The Trust remains in existence and is revocable to the extent stated in the Trust Agreement and applicable law.

[[elif trustmaker_status=DECEASED]]

The Trustmaker is deceased. The Trust remains in existence and is being administered under the provisions that became irrevocable at the Trustmaker's death, subject to any continuing powers or separate shares expressly provided by the Trust Agreement.

[[end]]

[[else]]

## Joint Trust Administrative Phase

[[if joint_phase=BOTH_LIVING]]

Both Trustmakers are living. The Trust remains revocable to the extent provided by the Trust Agreement and applicable law.

[[elif joint_phase=FIRST_DECEASED]]

One Trustmaker is deceased and the surviving Trustmaker is living. The Trust is in post-first-death administration. The Affiant shall not characterize the entire Trust as revocable or irrevocable without identifying the particular trust, share, or property involved in the pending transaction.

Applicable trust/share for this Affidavit: {{admin_share}}.

[[if admin_share_type=SURVIVORS_TRUST]]

The Affidavit concerns the Survivor's Trust or other portion that remains revocable by the surviving Trustmaker to the extent provided by the Trust Agreement and applicable law.

[[elif admin_share_type=FAMILY_TRUST]]

The Affidavit concerns the Family Trust or other portion that is irrevocable following the first death, subject to the terms of the Trust Agreement and applicable law.

[[else]]

The Affidavit concerns the trust or share named above, whose present revocability and administration status shall be stated accurately from the operative Trust Agreement.

[[end]]

[[elif joint_phase=BOTH_DECEASED]]

Both Trustmakers are deceased. The Trust and any continuing separate trusts or shares are irrevocable except to the extent applicable law or the Trust Agreement provides a limited power of amendment or modification that does not make the Trust revocable.

[[end]]

[[end]]

## Current Validity

The Trust has not been revoked, terminated, modified, amended, restated, or otherwise changed in any manner that would cause a representation made in this Affidavit to be incorrect as of the date signed.

# TRUSTEE AUTHORITY

## General Fiduciary Authority

Subject to the Trust Agreement and applicable law, the Trustee is authorized to possess, manage, protect, preserve, invest, sell, exchange, lease, transfer, convey, assign, mortgage, pledge, encumber, distribute, and otherwise administer Trust property and to execute, acknowledge, verify, certify, deliver, file, and record documents reasonably necessary or appropriate to exercise that authority.

## Transaction-Specific Authority

[[if has_transaction]]

For the transaction for which this Affidavit is furnished, the currently acting Trustee or Trustees are authorized to {{transaction_authority}}.

[[if has_restriction]]

The following restriction or limitation is material to the pending transaction: {{transaction_restriction}}.

[[end]]

[[else]]

No particular transaction is identified. This Affidavit confirms only the Affiant's present status and general authority as Trustee and shall not be construed as a representation that a particular proposed transaction satisfies every trust, title, consent, recording, tax, contractual, or legal requirement.

[[end]]

## No Expansion of Authority

Nothing in this Affidavit expands the powers granted by the Trust Agreement or applicable law. If the Trust Agreement imposes a limitation material to the pending transaction, that limitation controls even if not restated here.

# AFFIANT REPRESENTATIONS

## Sworn Statements

The Affiant states under oath that:

(a) the Affiant is presently serving in the Trustee capacity identified in this Affidavit;

(b) the Affiant has not resigned, been removed, or otherwise ceased to serve;

(c) no event known to the Affiant has occurred that terminates or suspends the Affiant's authority to act as Trustee;

(d) the Trust remains in existence;

(e) the current administrative phase and revocability statements in this Affidavit are accurate for the trust or share identified;

(f) the transaction-specific authority statement, if any, is accurate to the Affiant's knowledge; and

(g) all statements contained in this Affidavit are true and correct as of the date signed.

## Penalty of Perjury

The Affiant declares under penalty of perjury under the laws applicable at the place of execution that the foregoing statements are true and correct, and further swears or affirms those statements before the officer administering the oath.

# RELIANCE AND LIMITATIONS

## Reliance

This Affidavit may be furnished to a person or entity requesting sworn evidence of the Trustee's identity, status, or authority. A person acting in good faith may rely upon the statements contained in this Affidavit to the extent permitted by applicable law.

## Relationship to Certification of Trust

This Affidavit is not a substitute for a statutory Certification of Trust, Certificate of Trust, Extract of Trust, Memorandum of Trust, or other state-specific trust-authentication vehicle when applicable law or the pending transaction requires that vehicle.

If the purpose of the request is merely to establish the existence of the Trust or the authority of the Trustee, a Certification of Trust may be the better fit -- see cert.html.

## No Dispositive Disclosure

This Affidavit does not disclose dispositive provisions of the Trust except to the extent independently required by law or necessary to establish the Trustee's authority in the pending transaction.

## Real Property and Recording

If this Affidavit will be recorded or used in connection with real property, the applicable real-property and recorder rules should be confirmed before relying on it. This Affidavit does not replace a recordable Certification, Memorandum, Extract, legal description, deed, or other instrument required by the jurisdiction where the property is located.

# EXECUTION

Because this document is an Affidavit, the Affiant must swear or affirm the truth of the statements before an authorized officer -- a notary won't accept a pre-filled jurat.

[[include affidavit_execution]]
`;

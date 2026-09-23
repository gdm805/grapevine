window.CERT_TEMPLATE = String.raw`
// ==========================================================================
//  GRAPEVINE  |  CERTIFICATION OF TRUST
//  Drafted from your national baseline (Grapevine_National_Certification_of_Trust_Baseline_V1_Coder_Ready.docx),
//  covering the core facts every state's certification-of-trust statute requires. Only the statutory
//  citation and the notary acknowledgment vary by state -- see will/cert-state-text.js, taken word for
//  word from each state's own controlled Cert_of_Trust_<State>.docx. See will/NOTES-ON-YOUR-CERT-OF-TRUST.txt
//  for why this uses one shared body instead of 51 separate documents.
// ==========================================================================
@set draft_watermark = yes
@set draft_label = SAMPLE - NOT FOR SIGNING

@center **CERTIFICATION OF TRUST**

This Certification states selected facts concerning the Trust and the authority of its currently acting Trustee or Trustees. It is not the Trust Agreement, does not amend or revoke the Trust, and does not transfer property to the Trust.

# TRUST IDENTIFICATION

## Trust Name and Date

The Trust is known as {{trust_name}} (the "Trust"). The Trust was originally executed on {{orig_trust_date}}.

[[if trust_restated]]

The Trust was most recently amended and restated on {{restatement_date}}.

[[end]]

[[if has_amendments]]

The Trust has been amended by the following currently operative amendment or amendments:

[[each amendments]]

{{amendment_title}}, dated {{amendment_date}}.

[[end]]

[[end]]

The Trust exists and is in full force and effect as of the date of this Certification.

## Trustmaker or Trustmakers

The Trust was created by the following person or persons, each referred to in this Certification as a "Trustmaker" and, where applicable, as a settlor, trustor, or grantor:

[[each trustmakers]]

{{trustmaker_name}}

[[end]]

## Governing Law

The Trust is governed by the laws of {{state}}, except to the extent applicable law requires otherwise for a particular transaction.

# CURRENT TRUSTEES AND AUTHORITY

## Currently Acting Trustees

The following person or persons are all of the currently acting Trustees of the Trust:

[[each trustees]]

@line {{trustee_name}}, Trustee
@line {{trustee_address}}

[[end]]

[[if single_trustee]]

The person identified above is the sole currently acting Trustee. No other person presently serves as Trustee.

[[else]]

The persons identified above are all of the currently acting Trustees. No other person presently serves as Trustee.

[[end]]

## Trustee Action and Signature Authority

[[if single_trustee]]

The sole Trustee may act alone and bind the Trust in exercising the authority described in this Certification.

[[elif trustee_rule=ANY_ONE]]

Any one currently acting co-Trustee may act alone and bind the Trust in exercising the authority described in this Certification.

[[elif trustee_rule=ALL]]

All currently acting co-Trustees must act jointly to bind the Trust in exercising the authority described in this Certification.

[[elif trustee_rule=MAJORITY]]

A majority of the currently acting co-Trustees may bind the Trust. At least {{min_signatures}} of the {{trustee_count}} currently acting co-Trustees must act or authorize the action.

[[end]]

# REVOCABILITY AND RESERVED POWERS

## Revocability Status

[[if revocability=REVOCABLE]]

The Trust is revocable. The current power to revoke the Trust is held by:

[[each revocation_holders]]

{{holder_name}}

[[end]]

[[elif revocability=IRREVOCABLE]]

The Trust is irrevocable.

[[elif revocability=PARTIAL]]

The Trust is revocable as to {{revocable_portion}} and irrevocable as to {{irrevocable_portion}}. The current power to revoke the revocable portion is held by:

[[each revocation_holders]]

{{holder_name}}

[[end]]

[[end]]

# TRUSTEE POWERS AND LIMITATIONS

## General Authority

Subject to the Trust Agreement, the Trustee action requirements stated above, and applicable law, the currently acting Trustee or Trustees have authority to hold, manage, invest, exchange, sell, transfer, and otherwise administer Trust property and to execute documents reasonably necessary to exercise powers granted by the Trust.

## Financial Accounts and Safe-Deposit Boxes

The Trustee may open, establish, maintain, modify, retitle, and close deposit, brokerage, investment, and other accounts in the name of the Trust; deposit funds and other property; endorse, collect, and negotiate instruments; make withdrawals and transfers; acquire, hold, manage, exchange, and sell investments held through those accounts; execute account agreements, signature cards, transfer instructions, tax forms, and other documents reasonably required to establish, maintain, or close an account for the Trust; and open, lease, maintain, access, and close safe-deposit boxes in the name of the Trust.

[[if has_limitations]]

## Directions, Consents, and Limitations

The following limitation, direction, or required consent applies to the Trustee authority described in this Certification: {{limitations_summary}}.

[[end]]

# IDENTIFICATION AND TITLE INFORMATION

## Taxpayer Identification Number

The applicable taxpayer identification number or Social Security number will be provided upon request.

## Manner of Taking Title

The following form may be used to title an account or other property interest in the name of the Trust: {{title_format}}.

# RELIANCE AND CONTINUING ACCURACY

## Limited Purpose

This Certification is furnished to confirm selected facts concerning the Trust and the authority of the currently acting Trustee or Trustees. It is not the Trust Agreement; does not amend, restate, revoke, or otherwise modify the Trust; does not transfer property to the Trust; and does not create any power not granted by the Trust Agreement.

This Certification does not state dispositive provisions or identify beneficiaries.

## Reliance and Additional Excerpts

A recipient may rely on this Certification to the extent permitted by applicable law. A recipient may request an additional excerpt from the Trust Agreement or an operative amendment only to the extent applicable law permits the recipient to require that excerpt for the proposed transaction.

## Continuing Accuracy

The Trust has not been revoked, terminated, modified, or amended in any manner that would cause a representation contained in this Certification to be incorrect as of {{certification_date}}.

# CERTIFICATION AND EXECUTION

## Certification

The undersigned certifies that the statements contained in this Certification are true and correct as of {{certification_date}}.

Any currently acting Trustee may sign this Certification unless the Trust Agreement, applicable law, or the receiving institution requires otherwise.

@line Signature: ________________________________________________

@line {{certifying_trustee}}, Trustee

@line Date: ______

[[include cert_execution]]
`;

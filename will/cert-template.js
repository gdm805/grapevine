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
@set draft_label = Preview - Not for Signing

@center **CERTIFICATION OF TRUST**

This Certification states selected facts concerning the Trust and the authority of its currently acting Trustee or Trustees. It is not the Trust Agreement, does not amend or revoke the Trust, and does not transfer property to the Trust.

# TRUST IDENTIFICATION

## Trust Identification

@line Trust Name: {{trust_name}}
[[if one_trustmaker]]
@line Trustmaker / Settlor: {{trustmaker_names}}
[[else]]
@line Trustmakers / Settlors: {{trustmaker_names}}
[[end]]
@line Original Trust Date: {{orig_trust_date}}

[[if trust_restated]]

@line Most Recent Restatement Date: {{restatement_date}}

The Trust is a continuation and restatement of the trust originally established on {{orig_trust_date}}. The restatement did not create a new trust.

[[end]]

[[if has_amendments]]

Currently operative amendments:

[[each amendments]]

{{amendment_title}}, dated {{amendment_date}}.

[[end]]

[[end]]

In this Certification, the trust identified above is called the "Trust," and each person named above as a Trustmaker is called a "Trustmaker" and, where applicable, a settlor, trustor, or grantor. The Trust exists and is in full force and effect as of the date of this Certification.

[[if cert_original]]
@line Original Trustee(s): {{original_trustees}}

[[end]]
[[if cert_sd_prior]]
@line Any previous name of the Trust: ______________________________ (write "none" if none)

[[end]]
[[if cert_court]]
@line ☐ The Trust is not supervised by any court.   ☐ The Trust is supervised by a court, and all required court approvals have been obtained.

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

[[if own_trust_rule]]
As provided in the Trust Agreement, any one currently acting co-Trustee may perform Routine Administrative Acts, as defined in the Trust Agreement, without the joinder of the other co-Trustee or co-Trustees.

[[end]]
[[if own_joint_spouses]]
As provided in the Trust Agreement, while both Trustmakers are serving as co-Trustees, each Trustmaker may act alone with respect to that Trustmaker's separate property held in the Trust. This does not apply to jointly owned property or to community, quasi-community, or marital property.

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

[[if cert_amend]]
## Power to Amend

[[if revocability=IRREVOCABLE]]
No person holds a power to amend or modify the Trust, except as applicable law may permit.

[[else]]
The power to amend or modify the Trust is held by the same person or persons who hold the power to revoke it, named above.

[[end]]
[[end]]
[[if cert_successors]]
## Successor Trustees

@line Successor Trustee(s) named in the Trust: {{successor_names}}

A successor Trustee serves when no prior Trustee is willing and able to serve, including because of death, incapacity, or resignation, as provided in the Trust Agreement. A third party may rely on the authority of a successor Trustee who signs a certification of trust without further proof of the conditions of succession, to the extent permitted by applicable law.

[[end]]
[[if cert_fl_direction]]
## Powers of Direction

@line ☐ The Trust does not contain any power of direction.

@line ☐ The Trust contains powers of direction. The current trust directors, the trustee powers subject to direction, and whether the directors have directed or authorized this transaction are: ______________________________

[[end]]
# TRUSTEE POWERS AND LIMITATIONS

## General Authority

Subject to the Trust Agreement, the Trustee action requirements stated above, and applicable law, the currently acting Trustee or Trustees have authority to hold, manage, invest, exchange, sell, transfer, and otherwise administer Trust property and to execute documents reasonably necessary to exercise powers granted by the Trust.

## Financial Accounts and Safe-Deposit Boxes

The Trustee may open, establish, maintain, modify, retitle, and close deposit, brokerage, investment, and other accounts in the name of the Trust; deposit funds and other property; endorse, collect, and negotiate instruments; make withdrawals and transfers; acquire, hold, manage, exchange, and sell investments held through those accounts; execute account agreements, signature cards, transfer instructions, tax forms, and other documents reasonably required to establish, maintain, or close an account for the Trust; and open, lease, maintain, access, and close safe-deposit boxes in the name of the Trust.

[[if cert_mn]]
## Minnesota Statements

The trustees are authorized by the trust instrument to sell, convey, pledge, mortgage, lease, or transfer title to any interest in real or personal property, except as limited by the following: [[if has_limitations]]{{limitations_summary}}[[else]]none[[end]].

There are no other provisions in the trust instrument or amendments to it that limit the powers of the trustees to sell, convey, pledge, mortgage, lease, or transfer title to interests in real or personal property.

[[end]]
[[if cert_vt_nolimits]]
[[if has_limitations]]
[[else]]
No provision of the Trust Agreement limits the authority described in this Certification.

[[end]]
[[end]]
[[if has_limitations]]

## Directions, Consents, and Limitations

The following limitation, direction, or required consent applies to the Trustee authority described in this Certification: {{limitations_summary}}.

[[end]]

# IDENTIFICATION AND TITLE INFORMATION

## Taxpayer Identification Number

[[if tin_required]]
@line {{tin_label}}: ______________________________

[[if tin_note]]
{{tin_note}}

[[end]]
[[else]]
The applicable taxpayer identification number or Social Security number will be provided upon request.

[[end]]

## Manner of Taking Title

The following form may be used to title an account or other property interest in the name of the Trust: {{title_format}}.

# RELIANCE AND CONTINUING ACCURACY

## Limited Purpose

This Certification is furnished to confirm selected facts concerning the Trust and the authority of the currently acting Trustee or Trustees. It is not the Trust Agreement; does not amend, restate, revoke, or otherwise modify the Trust; does not transfer property to the Trust; and does not create any power not granted by the Trust Agreement.

This Certification does not state dispositive provisions or identify beneficiaries.

[[if cert_title_note]]
{{cert_title_note}}

[[end]]
## Reliance and Additional Excerpts

A recipient may rely on this Certification to the extent permitted by applicable law. A recipient may request an additional excerpt from the Trust Agreement or an operative amendment only to the extent applicable law permits the recipient to require that excerpt for the proposed transaction.

## Continuing Accuracy

The Trust has not been revoked, terminated, modified, or amended in any manner that would cause a representation contained in this Certification to be incorrect as of {{certification_date}}.

# CERTIFICATION AND EXECUTION

## Certification

[[if cert_sworn]]
Each undersigned Trustee, being first duly sworn, states under oath that the statements contained in this Certification are true and correct as of {{certification_date}}.

[[elif cert_perjury]]
Each undersigned Trustee certifies that the statements contained in this Certification are true and correct as of {{certification_date}}, and declares under penalty of perjury under the laws of the State of {{state}} that the foregoing is true and correct.

[[elif cert_pains]]
Each undersigned Trustee certifies that the statements contained in this Certification are true and correct as of {{certification_date}}. Signed under the pains and penalties of perjury.

[[else]]
Each undersigned Trustee certifies that the statements contained in this Certification are true and correct as of {{certification_date}}.

[[end]]
Each currently acting Trustee has signed below; these are the signatures of all the currently acting Trustees.

[[each trustees]]
@line Signature: ________________________________________________

@line {{trustee_name}}, Trustee

@line Date: ______

[[end]]

[[include cert_execution]]
`;

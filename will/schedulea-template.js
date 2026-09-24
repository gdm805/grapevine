window.SCHEDULEA_TEMPLATE = String.raw`
// ==========================================================================
//  GRAPEVINE  |  SCHEDULE A (TRUST PROPERTY), as its own document
//  The wording of the property list is the same Schedule A that closes the Revocable Living Trust
//  (will/trust-template.js and will/trust-joint-template.js), with an identifying paragraph added at
//  the top so it can be signed and kept on its own -- for example, to update the list after buying a
//  house or opening an account. It needs no per-state text: no state requires anything special to
//  sign a schedule of property, so the signing instructions are one generic set.
//  This is starter text for attorney review, like everything else in this folder.
// ==========================================================================
@set draft_watermark = yes
@set draft_label = SAMPLE - NOT FOR SIGNING

@center **SCHEDULE A**

@center **TRUST PROPERTY**

@sub Trust

[[if trust_restated]]

This Schedule A is attached to and forms part of the {{trust_name}}, originally dated {{orig_trust_date}} and most recently restated on {{restatement_date}} (the "Trust").

[[else]]

This Schedule A is attached to and forms part of the {{trust_name}}, dated {{orig_trust_date}} (the "Trust").

[[end]]

[[if trust_type=JOINT]]

The Trustmakers are {{tm1_name}} and {{tm2_name}}.

[[else]]

The Trustmaker is {{tm1_name}}.

[[end]]

@sub Purpose

[[if trust_type=JOINT]]

This Schedule A identifies property that the Trustmakers have designated for inclusion in the Trust Estate. Listing property on this Schedule A does not replace any deed, account registration, beneficiary designation, consent, endorsement, assignment, filing, or other transfer step required by law or by a financial institution, business entity, governmental agency, or other third party.

[[else]]

This Schedule A identifies property that the Trustmaker has designated for inclusion in the Trust Estate. Listing property on this Schedule A does not replace any deed, account registration, beneficiary designation, consent, endorsement, assignment, filing, or other transfer step required by law or by a financial institution, business entity, governmental agency, or other third party.

[[end]]

@sub Initial Trust Property

[[if trust_type=JOINT]]

The Trustmakers assign, transfer, and deliver to the Trustee the property described below to the extent the property may be transferred by assignment and is not subject to additional transfer formalities. Property requiring additional transfer formalities is identified here for trust-funding purposes and becomes Trust property when those formalities are completed.

[[else]]

The Trustmaker assigns, transfers, and delivers to the Trustee the property described below to the extent the property may be transferred by assignment and is not subject to additional transfer formalities. Property requiring additional transfer formalities is identified here for trust-funding purposes and becomes Trust property when those formalities are completed.

[[end]]

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

[[if trust_type=JOINT]]

The Trustmakers assign to the Trustee the Trustmakers' transferable household goods, furnishings, clothing, jewelry, artwork, collectibles, tools, equipment, and other tangible personal property intended for the Trust, except property specifically excluded below or property requiring a separate certificate of title, registration, or other transfer formality.

[[else]]

The Trustmaker assigns to the Trustee the Trustmaker's transferable household goods, furnishings, clothing, jewelry, artwork, collectibles, tools, equipment, and other tangible personal property intended for the Trust, except property specifically excluded below or property requiring a separate certificate of title, registration, or other transfer formality.

[[end]]

[[end]]

@sub Additional Property

Additional property may be transferred to the Trust after the date of this Schedule A by deed, assignment, account registration, beneficiary designation where legally appropriate, or any other method permitted by applicable law and the governing instrument or institution.

@sub Confirmation

[[if trust_type=JOINT]]

The Trustmakers confirm that this Schedule A reflects the property identified for inclusion in or funding of the Trust as of the date stated below.

@line Date: ______

@line Signature: ________________________________________________

@line {{tm1_name}}, Trustmaker

@line Signature: ________________________________________________

@line {{tm2_name}}, Trustmaker

[[else]]

The Trustmaker confirms that this Schedule A reflects the property identified for inclusion in or funding of the Trust as of the date stated below.

@line Date: ______

@line Signature: ________________________________________________

@line {{tm1_name}}, Trustmaker

[[end]]
`;

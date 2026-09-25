window.ASSIGNMENT_TEMPLATE = String.raw`
// ==========================================================================
//  GRAPEVINE  |  GENERAL ASSIGNMENT OF PERSONAL PROPERTY TO TRUST
//  Drafted from your national baseline (Grapevine_National_Assignment_to_Trust_V3_Coder_Ready_State_Signing_Tokens.docx).
//  The token-resolution table in that file was checked for all 50 states and DC: every one resolves
//  to the same "signature only" execution requirement -- no state requires a witness, notary, or oath
//  for this document. So unlike the DPOA/HCD/HIPAA/trust builders, there's no per-state execution
//  library here -- the optional notary block below is one generic acknowledgment, not 51 of them.
//  See will/NOTES-ON-YOUR-ASSIGNMENT-OF-PERSONAL-PROPERTY.txt for what was left out and why.
// ==========================================================================
@set draft_watermark = yes
@set draft_label = SAMPLE - NOT FOR SIGNING

@center **GENERAL ASSIGNMENT OF PERSONAL PROPERTY TO TRUST**

# PARTIES, TRUST IDENTIFICATION, AND PURPOSE

## Assignor Identification

[[if trust_type=SINGLE]]

This General Assignment of Personal Property to Trust (this "Assignment") is made by {{tm1_name}}, the Trustmaker and Assignor ("Assignor").

[[else]]

This General Assignment of Personal Property to Trust (this "Assignment") is made by {{tm1_name}} and {{tm2_name}}, the Trustmakers and Assignors (collectively, the "Assignors" and individually, an "Assignor").

[[end]]

## Trust Identification

[[if trust_restated]]

The Trust receiving property under this Assignment is {{trust_name}}, originally dated {{orig_trust_date}} and most recently amended and restated on {{restatement_date}} (the "Trust").

[[else]]

The Trust receiving property under this Assignment is {{trust_name}}, dated {{orig_trust_date}} (the "Trust").

[[end]]

## Assignment Purpose

The purpose of this Assignment is to transfer to the Trustee of the Trust the Assignor's transferable right, title, and interest in personal property that may lawfully and effectively be transferred to the Trust by a general written assignment, without requiring a separate deed, certificate of title, account-registration change, beneficiary designation, transfer form, consent, or other asset-specific instrument.

# GENERAL ASSIGNMENT

## Present Assignment

[[if trust_type=SINGLE]]

The Assignor hereby assigns, transfers, conveys, and delivers to {{trustee_caption}}, as Trustee of the Trust, all of the Assignor's right, title, and interest in the personal property described in this Assignment, to the extent that property may lawfully and effectively be transferred by general assignment.

[[else]]

Each Assignor hereby assigns, transfers, conveys, and delivers to {{trustee_caption}}, as Trustee or Co-Trustees of the Trust, that Assignor's right, title, and interest in the personal property described in this Assignment, to the extent that property may lawfully and effectively be transferred by general assignment.

[[end]]

## After-Acquired Property

To the extent permitted by applicable law, this Assignment also applies to personal property of a type described in this Assignment that the Assignor later acquires while the Trust remains in existence. If applicable law does not permit a present assignment of after-acquired property, this provision expresses the Assignor's continuing intent to transfer such property to the Trustee upon acquisition to the fullest extent a general assignment may then be effective.

## Property Included

Subject to the exclusions and limitations in Article Three, property covered by this Assignment includes the Assignor's transferable ownership interests in the following categories:

(a) household goods, furnishings, appliances, clothing, jewelry, watches, artwork, antiques, collectibles, books, tools, sporting goods, musical instruments, electronics, and other tangible personal property not evidenced by a separate certificate of title or ownership registration;

(b) transferable rights in photographs, manuscripts, writings, records, files, intellectual-property interests, royalties, domain-name interests, and other intangible personal property, but only to the extent the Assignor owns the transferable property right and no separate transfer instrument, consent, filing, registration, or governing agreement is required;

(c) transferable ownership interests in digital property that are not held by a custodian under an account or terms-of-service arrangement requiring a separate transfer or access procedure; and

(d) insurance proceeds, warranties, refunds, claims, replacements, and other rights attributable to property effectively transferred under this Assignment, to the extent those rights are themselves assignable.

## Schedule of Specifically Identified Personal Property

[[if has_property]]

In addition to the general assignment above, the following specifically identified personal property is assigned to the Trustee, subject to the exclusions and transfer requirements of Article Three:

[[each property]]

{{property_description}}

[[end]]

[[else]]

No separate itemized schedule is required for the general assignment made under this instrument.

[[end]]

# EXCLUSIONS AND ASSET-SPECIFIC TRANSFER REQUIREMENTS

## General Limitation

This Assignment transfers only property that may be lawfully and effectively transferred to the Trust by this general written instrument. It does not substitute for a transfer method that applicable law, a governing agreement, a custodian, a registrar, a governmental agency, or another third party requires for a particular asset.

## Real Property

This Assignment does not convey real property or any interest that must be conveyed by deed or other real-property instrument. Real property must be transferred, if appropriate, by a separately prepared and properly executed deed or other instrument satisfying the law of the jurisdiction where the property is located.

## Titled or Registered Property

This Assignment does not, by itself, change record title to a motor vehicle, trailer, vessel, aircraft, manufactured home, or other property for which ownership is evidenced by a certificate of title, registration, governmental record, or comparable ownership document. Any such property must be transferred through the applicable title or registration process if the owner elects to place it in the Trust.

## Bank, Brokerage, Investment, and Other Registered Accounts

This Assignment does not, by itself, retitle a checking, savings, money-market, certificate-of-deposit, brokerage, mutual-fund, securities, annuity, custodial, or other account maintained on the records of a financial institution or other custodian. An account intended to be owned by the Trust must be transferred or retitled through the institution's applicable procedure and forms.

## Retirement and Tax-Qualified Accounts

This Assignment does not transfer ownership of an IRA, qualified retirement plan, pension, 401(k), 403(b), governmental plan, health savings account, or other tax-advantaged or retirement arrangement whose ownership or transfer is governed by tax law, plan terms, or custodian requirements. Nothing in this Assignment changes any beneficiary designation for such an arrangement.

## Beneficiary-Designation and Survivorship Assets

This Assignment does not alter or revoke any beneficiary designation, payable-on-death designation, transfer-on-death registration, survivorship designation, life-insurance beneficiary designation, annuity beneficiary designation, or similar nonprobate transfer arrangement. Any change to such an arrangement must be made through the method required by the governing contract, registration, plan, custodian, or applicable law.

## Business and Entity Interests

An interest in a corporation, limited liability company, partnership, professional practice, closely held business, or other entity is transferred by this Assignment only to the extent the interest is transferable by general assignment and the transfer does not require consent, an endorsement, a separate assignment, an amendment to governing documents, a filing, compliance with a buy-sell or transfer restriction, or satisfaction of licensing or professional-ownership requirements. If any such requirement applies, the interest is not effectively transferred by this Assignment until the required steps are completed.

## Digital Assets, Accounts, and Electronic Communications

This Assignment transfers only the Assignor's transferable ownership rights in digital property. It does not, by itself, transfer an online account, account access, electronic communications, credentials, authentication rights, or any right that is controlled by a custodian, terms-of-service agreement, online tool, federal law, state fiduciary-access law, or other applicable law. Trustee access and disclosure rights are governed by the Trust Agreement, applicable law, and any controlling custodian or online-tool procedure. Passwords, private keys, seed phrases, authentication codes, and similar security credentials shall not be printed in or attached to this Assignment.

## Nonassignable and Restricted Property

Property or a contractual right that is nonassignable, personal to the Assignor, subject to a legal prohibition on transfer, or subject to an enforceable restriction requiring consent or another transfer procedure is excluded from this Assignment to the extent necessary to avoid an ineffective or prohibited transfer.

## No Deemed Transfer of Record Ownership

No asset shall be treated as transferred solely because this Assignment expresses an intent to include it when applicable law or the governing ownership record requires a separate transfer step. Record ownership remains as shown by the controlling title, registration, account record, contract, or other ownership record until the legally required transfer is completed.

# OWNERSHIP CHARACTER AND JOINT TRUST RULES

## Assignment Limited to Assignor's Interest

Each Assignor transfers only that Assignor's actual right, title, and interest in property. This Assignment does not transfer an interest owned by another person and does not enlarge the Assignor's ownership interest.

## Preservation of Property Character

The transfer of property under this Assignment is intended to change the manner in which legal title is held for trust-administration purposes and is not intended, by itself, to change the property's separate, community, marital, jointly owned, tenancy, or other ownership character, except to the extent the Trust Agreement expressly provides otherwise and applicable law permits that result.

[[if trust_type=JOINT]]

## Joint Trust

For property owned by only one Trustmaker, only that Trustmaker's interest is assigned. For property owned by both Trustmakers, each Trustmaker assigns that Trustmaker's respective interest. Property transferred to the Joint Trust shall retain its pre-transfer ownership character to the extent provided by the Trust Agreement and applicable law. The fact that both Trustmakers sign this Assignment does not, by itself, convert one Trustmaker's separate property into property owned by the other Trustmaker or into community or marital property.

[[end]]

## Third-Party Interests

Nothing in this Assignment affects the rights of a co-owner, secured party, lienholder, lessor, beneficiary, custodian, or other third party except to the extent that person's rights are lawfully subject to the Assignor's transfer of the Assignor's own interest.

# EFFECT, RELIANCE, AND CONTINUING ADMINISTRATION

## Trust Agreement Controls

Property effectively transferred under this Assignment shall be held, administered, and distributed by the Trustee under the Trust Agreement as it exists from time to time. This Assignment does not amend, restate, revoke, or otherwise modify the Trust Agreement.

## No Expansion of Trustee Powers

This Assignment transfers ownership interests only. It does not create or expand a Trustee power that is not granted by the Trust Agreement or applicable law.

## Further Documents

The Assignor may execute additional assignments, bills of sale, account forms, title applications, transfer forms, consents, deeds, or other documents reasonably necessary to complete a transfer intended to be made to the Trust. The existence of this Assignment does not eliminate the need for an asset-specific document when one is required.

## Revocation or Withdrawal While Trust Remains Revocable

[[if revocability=FULLY_REVOCABLE]]

While the Trust remains revocable and the applicable Trustmaker has authority under the Trust Agreement, property effectively transferred under this Assignment remains subject to the Trustmaker's reserved rights to withdraw property from the Trust or otherwise exercise the powers reserved under the Trust Agreement.

[[elif revocability=PARTIALLY_REVOCABLE]]

Property effectively transferred under this Assignment is subject to the revocation, withdrawal, and reserved-power provisions applicable to the portion of the Trust receiving that property.

[[else]]

No right of revocation or withdrawal is created by this Assignment. Any right to remove or distribute property from the Trust is governed solely by the Trust Agreement and applicable law.

[[end]]

## Severability

If any provision of this Assignment is determined to be invalid, ineffective, or unenforceable as to a particular asset or circumstance, the remaining provisions and all transfers otherwise effectively made shall remain effective to the fullest extent permitted by applicable law.

# EXECUTION

## Execution

[[if trust_type=SINGLE]]

The Assignor executes this Assignment on {{signing_date}} in {{county}} {{county_label}}, {{state}}.

@line Signature: ________________________________________________

@line {{tm1_name}}, Trustmaker and Assignor

[[else]]

The Assignors execute this Assignment on {{signing_date}} in {{county}} {{county_label}}, {{state}}.

@line Signature: ________________________________________________

@line {{tm1_name}}, Trustmaker and Assignor

@line Signature: ________________________________________________

@line {{tm2_name}}, Trustmaker and Assignor

[[end]]

No state requires a witness, notary, or sworn oath for this Assignment -- a signature alone is enough everywhere in the United States. Some banks, brokerages, or title companies ask for a notarized signature anyway before they'll accept it. If yours does, or you'd simply like one, a general notary acknowledgment is included below; otherwise this Assignment is complete once signed.

[[if wants_notary]]

@sub Optional Notary Acknowledgment

@line State of {{state}}
@line County/Parish of ________________________________
@line This instrument was acknowledged before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line My Commission Expires: ____________________
@line (Seal)

[[end]]
`;

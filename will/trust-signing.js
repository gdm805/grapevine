window.TRUST_SIGNING = String.raw`
// ==========================================================================
//  GRAPEVINE  |  SIGNING INSTRUCTIONS for the revocable living trust.
//  Same rules as will-template.js (see the notes at the top of that file).
// ==========================================================================
#! HOW TO SIGN YOUR TRUST

**Who must be there:** a notary public[[if has_witness]] and two adult witnesses (not beneficiaries of your trust, or their spouses)[[end]]. Bring photo ID.[[if is_joint]] Both of you sign at the same appointment.[[end]]

**When you sign:** sign and date the trust in front of the notary[[if has_witness]] and witnesses[[end]]. The notary completes the acknowledgment.

**Afterward:** [[if trust_type = RESTATEMENT]]keep the signed restatement together with the original trust and any amendments, somewhere safe, and tell your successor trustee where they are.[[else]]keep the signed original somewhere safe and tell your successor trustee where it is.[[end]] To change it later, sign a written amendment or restatement.

**Funding your trust (after you sign):** the trust controls only the property that is actually in it. Moving property into it is called funding the trust. Property left in [[if is_joint]]your own names[[else]]your own name[[end]] may have to go through probate even though you have a trust.[[if trust_type = RESTATEMENT]] Property already in the trust stays in it after a restatement. Property acquired since the trust was made is in it only if it was titled to the trust or otherwise transferred to it.[[end]]

**How property is titled to the trust:** banks, title companies and the county recorder use wording like this:

{{title_line}}

**How each kind of property is usually moved:**

- **Your home and other real estate:** a new deed from you to [[if is_joint]]yourselves as Co-Trustees[[else]]yourself as Trustee[[end]], recorded with the county where the property is. A title company, a lawyer or the county recorder's office can tell you the local form and fee. Tell your home insurer and, if there is one, your mortgage lender.
- **Bank and credit union accounts:** the bank's own form retitles the account in the trust's name or opens a new account for the trust. Banks often ask for a Certification of Trust instead of the whole trust.
- **Investment and brokerage accounts:** the company's own form, the same way as a bank account.
- **Retirement accounts (IRA, 401(k), 403(b)):** these are usually not retitled to a trust, because changing the owner can have tax consequences. They pass by the beneficiary form on file with the plan.
- **Life insurance and payable-on-death accounts:** they pass to whoever is named on the company's beneficiary form. The trust can be named as a beneficiary on that form.
- **Business interests:** the company's records or an assignment, under the company's operating agreement or bylaws.
- **Household goods, jewelry, art and other belongings:** a written assignment of personal property to the trust.
- **Vehicles:** some people retitle them with the state motor vehicle office; many states have a simpler way to transfer a vehicle at death.
- **Property you get later:** a new home or account is in the trust only if it is titled in the trust's name or otherwise transferred to it.

**Keep a list:** a Schedule A lists the property you intend the trust to hold, which helps your successor trustee find everything. Listing an item on it does not replace a deed or an account change where one is needed.


If you have any legal questions about your particular circumstances we recommend that you seek a qualified attorney to assist you.
`;

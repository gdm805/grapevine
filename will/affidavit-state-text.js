window.AFFIDAVIT_SHARED = window.AFFIDAVIT_SHARED || {};
window.AFFIDAVIT_SHARED['affidavit_execution'] = String.raw`
// ==========================================================================
//  GRAPEVINE  |  AFFIDAVIT OF TRUSTEE  |  STATE-SPECIFIC JURAT
//  Taken word for word from each state's own controlled Affidavit_of_Trustee docx. An affidavit
//  needs a JURAT (the affiant swears to the truth of it before a notary), not just an
//  acknowledgment -- stricter than the notary page on the trust or the certification of trust.
//  The execution statement and signature line (first three lines of each state's block) are
//  filled in from your answers, same as every document's own signature block. Everything in the
//  jurat itself (county, date, the affiant's name as the notary verifies it) is left blank for
//  the notary to fill in by hand at the signing appointment -- a notary won't accept a
//  pre-filled jurat. DC has no county; Louisiana uses Parish -- both kept as in the source.
// ==========================================================================

[[if signing_state=ALABAMA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Alabama, no statutory jurat form; seal per Ala. Code 36-20-72
@line The State of Alabama
@line ____________________________ County
@line Subscribed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line My Commission Expires: ____________________
@line (Seal)


[[elif signing_state=ALASKA]]

@line Executed in {{signing_city}}, Alaska, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Alaska, AS 09.63.030(b) (jurat); seal and expiration per AS 09.63.030(c)
@line State of Alaska
@line ____________________________ Judicial District
@line Subscribed and sworn to or affirmed before me at ____________________ on ____________________.
@line ________________________________________
@line Signature of Person Taking Acknowledgment
@line Title or Rank: ____________________________
@line Serial Number, if any: __________________
@line My Commission Expires: ____________________
@line (Seal)


[[elif signing_state=ARIZONA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF ARIZONA
@line COUNTY OF ____________________________
@line Subscribed and sworn to (or affirmed) before me this ______ day of ______________, 20____, by ____________________________.
@line ________________________________________
@line NOTARY PUBLIC
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=ARKANSAS]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Arkansas, no statutory jurat form; seal and expiration per Ark. Code 21-14-107, 21-14-108
@line State of Arkansas
@line County of ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line My Commission Expires: ____________________
@line (Seal)


[[elif signing_state=CALIFORNIA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@box A notary public or other officer completing this certificate verifies only the identity of the individual who signed the document to which this certificate is attached, and not the truthfulness, accuracy, or validity of that document.
@line STATE OF CALIFORNIA
@line COUNTY OF ____________________________
@line Subscribed and sworn to (or affirmed) before me on this ____________________________, by ____________________________, proved to me on the basis of satisfactory evidence to be the person(s) who appeared before me.
@line ________________________________________
@line Signature of Notary Public
@line (Seal)


[[elif signing_state=COLORADO]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Colorado short form, C.R.S. 24-21-516(1)(c) (verification on oath)
@line State of Colorado
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=CONNECTICUT]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF CONNECTICUT
@line COUNTY OF ____________________________    ss. ______________ (town)
@line Subscribed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public / Commissioner of the Superior Court
@line Printed Name: ____________________
@line My Commission Expires (if Notary): ____________________


[[elif signing_state=DELAWARE]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Delaware short form, 29 Del. C. 4329 (verification on oath)
@line State of Delaware
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=DISTRICT_COLUMBIA]]

@line Executed in the District of Columbia on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// District of Columbia short form, D.C. Code 1-1231.15 (verification on oath)
@line District of Columbia
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Seal)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=FLORIDA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF FLORIDA
@line COUNTY OF ____________________________
@line Sworn to (or affirmed) and subscribed before me by means of ☐ physical presence or ☐ online notarization on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notary Public — State of Florida
@line Print, Type, or Stamp Commissioned Name of Notary Public: ____________________
@line (Seal)
@line Personally Known ☐  OR  Produced Identification ☐
@line Type of Identification Produced: ____________________


[[elif signing_state=GEORGIA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF GEORGIA
@line COUNTY OF ____________________________
@line Sworn to (or affirmed) and subscribed before me on ____________________________ by ____________________________.
@line ________________________________________
@line NOTARY PUBLIC
@line My Commission Expires: ____________________
@line (Seal)


[[elif signing_state=HAWAII]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Hawaii, no statutory jurat form; certificate elements per HRS 456-21
@line State of Hawaii
@line City and County of / County of ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Notary Public, State of Hawaii
@line Printed Name: ____________________________
@line ______________ Judicial Circuit
@line My Commission Expires: ____________________
@line (Seal)
@line Doc. Date: __________________   # Pages: ______
@line Document Description: Affidavit of Trustee


[[elif signing_state=IDAHO]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Idaho short form, Idaho Code 51-116(3) (verification on oath)
@line State of Idaho
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notary public
@line (Stamp)
@line My commission expires: ____________________


[[elif signing_state=ILLINOIS]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF ILLINOIS
@line COUNTY OF ____________________________
@line Signed and sworn (or affirmed) to before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notary Public
@line (Seal)


[[elif signing_state=INDIANA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Indiana, IC 33-42-9-12 (verification on oath; certificate elements per 33-42-9-12(a)-(b))
@line State of Indiana
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line Printed name: ____________________________
@line Title of office: ________________________________
@line Commission number: ____________________
@line My commission expires: ____________________
@line Indiana county of commission (or of employment, if a nonresident): ____________________
@line (Seal)


[[elif signing_state=IOWA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Iowa short form, Iowa Code 9B.16(3)
@line State of Iowa
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=KANSAS]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Kansas short form, K.A.R. 7-43-17(a)(3) (verify against official code)
@line State of Kansas
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Official stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=KENTUCKY]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF KENTUCKY
@line COUNTY OF ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public, State at Large, Kentucky
@line Commission Number: ____________________
@line My Commission Expires: ____________________


[[elif signing_state=LOUISIANA]]

@line Executed in {{signing_city}}, {{county}} Parish, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF LOUISIANA
@line PARISH OF ____________________________
@line SWORN TO AND SUBSCRIBED before me on ____________________________ by ____________________________.
@line ________________________________________
@line NOTARY PUBLIC
@line Printed Name: ____________________
@line Notary Identification / Bar Roll No.: ____________________


[[elif signing_state=MAINE]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Maine short form, 4 M.R.S. 1917(3)
@line State of Maine
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line Printed name: ________________________________
@line (Stamp, if any)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=MARYLAND]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Maryland short form, State Gov't 18-216(d)
@line State of Maryland
@line County/City of ____________________________
@line Signed and sworn to (or affirmed) before me on the _____ day of ____________________, 20____ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line Title of office: ________________________________
@line (Stamp)
@line My commission expires: ____________________


[[elif signing_state=MASSACHUSETTS]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Jurat
// M.G.L. c. 222, 15(c) jurat
@line Commonwealth of Massachusetts
@line County of ____________________________
@line On this ______ day of ____________________, 20____, before me, the undersigned notary public, ____________________________ (name of document signer) personally appeared, proved to me through satisfactory evidence of identification, which were ____________________________, to be the person who signed the preceding or attached document in my presence and who swore or affirmed to me that the contents of the document are truthful and accurate to the best of (his) (her) knowledge and belief.
@line ________________________________________
@line Official signature and seal of notary public
@line Printed name: ________________________________
@line My commission expires: ____________________
@line (Seal)


[[elif signing_state=MICHIGAN]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Jurat
// MCL 55.287(2) statements
@line State of Michigan
@line County of ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notary public
@line Printed name of notary public (exactly as on commission application): ________________________________
@line Notary public, State of Michigan, County of ____________________.
@line My commission expires ____________________.
@line Acting in the County of ____________________.
@line Date of notarial act: ____________________


[[elif signing_state=MINNESOTA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF MINNESOTA
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line (Seal)
@line Title (and Rank): ____________________
@line My Commission Expires: ____________________


[[elif signing_state=MISSISSIPPI]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF MISSISSIPPI
@line COUNTY OF ____________________________
@line SWORN TO AND SUBSCRIBED before me on ____________________________ by ____________________________.
@line ________________________________________
@line NOTARY PUBLIC
@line My Commission Expires: ____________________
@line (Seal)


[[elif signing_state=MISSOURI]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF MISSOURI
@line COUNTY (AND/OR CITY) OF ____________________________
@line On this ______ day of ______________, 20____, before me, the undersigned notary, personally appeared ____________________________ (name of document signer), (☐ personally known to me) (☐ proved to me through identification documents, which were ____________________) (☐ proved to me on the oath or affirmation of ____________________, who is personally known to me) to be the person who signed the preceding or attached document in my presence and who swore or affirmed to me that the contents of the document are truthful and accurate to the best of (his)(her) knowledge and belief.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=MONTANA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Montana short form, MCA 1-5-610(3) (jurat)
@line State of Montana
@line County of ____________________________
@line This record was signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Official stamp)
@line Printed name and title of officer (if not shown in stamp): ________________________________


[[elif signing_state=NEBRASKA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Jurat
// Nebraska has no statutory jurat short form; seal per 64-210
@line State of Nebraska
@line County of ____________________________
@line Subscribed and sworn to before me this ____________________ by ____________________________.
@line ________________________________________
@line Signature of notary public
@line Title or rank: ________________________________
@line (Seal)
@line My commission expires: ____________________


[[elif signing_state=NEVADA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Jurat
// Nevada short form, NRS 240.167
@line State of Nevada
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Seal, if any)
@line Title and rank (optional): ________________________________


[[elif signing_state=NEW_HAMPSHIRE]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// New Hampshire short form, RSA 456-B:8, III
@line State of New Hampshire
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Seal, if any)
@line Title (and Rank): ________________________________
@line My commission expires: ____________________


[[elif signing_state=NEW_JERSEY]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF NEW JERSEY
@line COUNTY OF ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=NEW_MEXICO]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// New Mexico short form, NMSA 1978 § 14-14A-15(C)
@line State of New Mexico
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line Commission number: ____________________
@line My commission expires: ____________________


[[elif signing_state=NEW_YORK]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// New York jurat (no statutory form); Executive Law § 137
@line State of New York
@line County of ____________________________
@line Sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed name: ____________________________
@line Notary Public, State of New York
@line Qualified in ____________________ County
@line Registration No.: ____________________
@line My commission expires: ____________________


[[elif signing_state=NORTH_CAROLINA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF NORTH CAROLINA
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Printed Name: ____________________, Notary Public
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=NORTH_DAKOTA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// North Dakota short form, N.D.C.C. § 44-06.1-19(3)
@line State of North Dakota
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=OHIO]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF OHIO
@line COUNTY OF ____________________________
@line Sworn to or affirmed and subscribed before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=OKLAHOMA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Oklahoma short form, 49 O.S. § 119(3); 49 O.S. § 5(A)
@line State of Oklahoma
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Seal)
@line Title (and Rank): ________________________________
@line Commission No.: ____________________
@line My commission expires: ____________________


[[elif signing_state=OREGON]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Oregon short form, ORS 194.285(3)
@line State of Oregon
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=PENNSYLVANIA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Pennsylvania short form, 57 Pa.C.S. § 316(3)
@line Commonwealth of Pennsylvania
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=RHODE_ISLAND]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF RHODE ISLAND
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ________________  Commission/ID No.: ________________
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=SOUTH_CAROLINA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// South Carolina jurat, S.C. Code § 26-1-90(F); §§ 26-1-60, 26-1-90(B)
@line State of South Carolina
@line County of ____________________________
@line Sworn to (or affirmed) and subscribed before me this ____________________ by ____________________________.
@line ________________________________________
@line Signature of notary public
@line Notary Public for South Carolina
@line Printed name: ____________________________
@line My commission expires: ____________________
@line (Seal)


[[elif signing_state=SOUTH_DAKOTA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// South Dakota jurat (no statutory form); seal and expiration, SDCL § 18-1-3.1
@line State of South Dakota
@line County of ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notary public
@line Printed name: ____________________________
@line (Seal)
@line Title of officer: ________________________________
@line My commission expires: ____________________


[[elif signing_state=TENNESSEE]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Jurat
// Tennessee jurat (no statutory form); seal and expiration per T.C.A. §§ 8-16-114, 8-16-115 (verify against official code)
@line State of Tennessee
@line County of ____________________________
@line Sworn to and subscribed before me on ____________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line My commission expires: ____________________
@line (Seal)


[[elif signing_state=TEXAS]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Jurat
// Texas jurat (no statutory short form); seal per Gov't Code § 406.013
@line State of Texas
@line County of ____________________________
@line Sworn to and subscribed before me on ____________________ by ____________________________.
@line ________________________________________
@line Notary Public, State of Texas
@line Notary's printed name: ________________________________
@line My commission expires: ____________________
@line (Seal)


[[elif signing_state=UTAH]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Jurat
// Utah form, Utah Code § 46-1-6.5(2)(b)
@line State of Utah
@line County of ____________________________
@line Subscribed and sworn to before me, ____________________________, on this ______ day of ____________________, in the year ________, by ____________________________.
@line ________________________________________
@line Notary Signature
@line (Notary's Official Seal)


[[elif signing_state=VERMONT]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Vermont short form, 26 V.S.A. § 5368(3); § 5367
@line State of Vermont
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notary public
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________
@line Printed name and commission number (if no stamp is affixed): ________________________________


[[elif signing_state=VIRGINIA]]

@line Executed in {{signing_city}}, {{county}}, Virginia, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Jurat
// Virginia Notary Handbook jurat; § 47.1-16
@line Commonwealth of Virginia
@line City/County of ____________________________
@line Subscribed and sworn to (or affirmed) before me this ______ day of __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Notary registration number: ____________________
@line My commission expires: ____________________
@line (Seal)


[[elif signing_state=WASHINGTON]]

@line Executed in {{signing_city}}, {{county}} County, Washington, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Washington short form, RCW 42.45.140(3)
@line State of Washington
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notary public
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=WEST_VIRGINIA]]

@line Executed in {{signing_city}}, {{county}} County, West Virginia, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// West Virginia short form, W. Va. Code § 39-4-16(3); § 39-4-15
@line State of West Virginia
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=WISCONSIN]]

@line Executed in {{signing_city}}, {{county}} County, Wisconsin, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Wisconsin short form, Wis. Stat. § 140.16(3); § 140.15
@line State of Wisconsin
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=WYOMING]]

@line Executed in {{signing_city}}, {{county}} County, Wyoming, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@sub Verification on Oath or Affirmation
// Wyoming short form, W.S. 32-3-115(a)(iii); § 32-3-114
@line State of Wyoming
@line County of ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________ by ____________________________.
@line ________________________________________
@line (Stamp)  Signature of notarial officer
@line Title (and Rank): ________________________________
@line My commission expires: ____________________

[[end]]
`;
window.CERT_SHARED = window.CERT_SHARED || {};
window.CERT_SHARED['cert_execution'] = String.raw`
// ==========================================================================
//  GRAPEVINE  |  CERTIFICATION OF TRUST  |  STATE-SPECIFIC SIGNING PAGE
//  Every state needs only a notary (no state in this document set requires witnesses).
//  Statutory citation and notary wording taken from each state's own controlled Cert_of_Trust_<State>.docx.
//  The notary's own blanks (county, date, signer's name) are filled in by hand at the notary
//  appointment, the same convention used on every other document on this site -- a notary won't
//  accept a pre-filled acknowledgment anyway. The trust name is filled in from your answers since
//  it's already known and isn't something the notary verifies. A literal "the" before the token
//  is dropped everywhere (several states' own source text had it) since a trust name commonly
//  starts with "The" itself, which would otherwise double up ("the The Alvarez Family Trust").
// ==========================================================================

[[if signing_state=ALABAMA]]

@sub Statutory Reference

Ala. Code § 19-3B-1013.

@sub Notary Acknowledgment

// Alabama, Ala. Code 35-4-29 (representative capacity acknowledgment); seal per Ala. Code 36-20-72
@line The State of Alabama
@line ____________________________ County
@line I, ____________________________, a Notary Public in and for said County in said State, hereby certify that ____________________________, whose name as Trustee of {{trust_name}} is signed to the foregoing instrument, and who is known to me, acknowledged before me on this day that, being informed of the contents of the instrument, he/she/they, in his/her/their capacity as such Trustee, executed the same voluntarily on the day the same bears date.
@line Given under my hand and official seal this ______ day of __________________, 20____.
@line ________________________________________
@line Notary Public
@line My Commission Expires: ____________________
@line (Seal)


[[elif signing_state=ALASKA]]

@sub Statutory Reference

Alaska Stat. § 13.36.079.

@sub Notary Acknowledgment

// Alaska, AS 09.63.100(a)(6) (trustee acknowledgment); seal and expiration per AS 09.63.100(b)
@line State of Alaska
@line ____________________________ Judicial District
@line The foregoing instrument was acknowledged before me this ______ day of __________________, 20____, by ____________________________, Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of Person Taking Acknowledgment
@line Title or Rank: ____________________________
@line Serial Number, if any: __________________
@line My Commission Expires: ____________________
@line (Seal)


[[elif signing_state=ARIZONA]]

@sub Statutory Reference

Ariz. Rev. Stat. § 14-11013.

@sub Notary Acknowledgment

@line STATE OF ARIZONA
@line COUNTY OF _______________________________
@line This record was acknowledged before me on __________________, 20____, by ________________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of Notarial Officer
@line Notary Public
@line My Commission Expires: __________________
@line (Seal)


[[elif signing_state=ARKANSAS]]

@sub Statutory Reference

Ark. Code § 28-73-1013.

@sub Notary Acknowledgment

// Arkansas, adapted from Ark. Code 16-47-107(c) (representative capacity; no trustee form exists); seal and expiration per Ark. Code 21-14-107, 21-14-108
@line State of Arkansas
@line County of ____________________________
@line On this the ______ day of __________________, 20____, before me, ____________________________, the undersigned officer, personally appeared ____________________________, known to me (or satisfactorily proven) to be the person whose name is subscribed as Trustee of {{trust_name}}, and acknowledged that he/she/they executed the same as Trustee of {{trust_name}} for the consideration, uses, and purposes therein contained.
@line IN TESTIMONY WHEREOF, I have hereunto set my hand and official seal this ______ day of __________________, 20____.
@line ________________________________________
@line Notary Public
@line My Commission Expires: ____________________
@line (Seal)


[[elif signing_state=CALIFORNIA]]

@sub Statutory Reference

Cal. Probate Code § 18100.5.

@sub Notary Acknowledgment

@box A notary public or other officer completing this certificate verifies only the identity of the individual who signed the document to which this certificate is attached, and not the truthfulness, accuracy, or validity of that document.
@line STATE OF CALIFORNIA
@line COUNTY OF _______________________________
@line On __________________ before me, ________________________________, personally appeared ________________________________, who proved to me on the basis of satisfactory evidence to be the person(s) whose name(s) is/are subscribed to the within instrument and acknowledged to me that he/she/they executed the same in his/her/their authorized capacity(ies), and that by his/her/their signature(s) on the instrument the person(s), or the entity upon behalf of which the person(s) acted, executed the instrument.
@line I certify under PENALTY OF PERJURY under the laws of the State of California that the foregoing paragraph is true and correct.
@line WITNESS my hand and official seal.
@line ________________________________________
@line Signature of Notary Public
@line (Seal)


[[elif signing_state=COLORADO]]

@sub Statutory Reference

Colo. Rev. Stat. § 15-5-1013.

@sub Notary Acknowledgment

// Colorado short form, C.R.S. 24-21-516(1)(b) (representative capacity)
@line State of Colorado
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=CONNECTICUT]]

@sub Statutory Reference

Conn. Gen. Stat. § 45a-499zzz.

@sub Notary Acknowledgment

@line STATE OF CONNECTICUT
@line COUNTY OF _______________________________
@line The foregoing instrument was acknowledged before me this _____ day of __________________, 20____, by ________________________________, Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of Person Taking Acknowledgment
@line ________________________________________
@line Title or Rank
@line Serial Number, if any: __________________


[[elif signing_state=DELAWARE]]

@sub Statutory Reference

12 Del. C. § 3591.

@sub Notary Acknowledgment

// Delaware short form, 29 Del. C. 4329 (representative capacity)
@line State of Delaware
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=DISTRICT_COLUMBIA]]

@sub Statutory Reference

D.C. Code § 19-1310.13.

@sub Notary Acknowledgment

// District of Columbia short form, D.C. Code 1-1231.15 (representative capacity)
@line District of Columbia
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Seal)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=FLORIDA]]

@sub Statutory Reference

Fla. Stat. § 736.1017.

@sub Notary Acknowledgment

@line STATE OF FLORIDA
@line COUNTY OF _______________________________
@line The foregoing instrument was acknowledged before me by means of ☐ physical presence or ☐ online notarization, this _____ day of __________________, 20____, by ________________________________, as Trustee for {{trust_name}}.
@line ________________________________________
@line Signature of Notary Public – State of Florida
@line ________________________________________
@line Print, Type, or Stamp Commissioned Name of Notary Public
@line Personally Known ☐  OR  Produced Identification ☐
@line Type of Identification Produced: ________________________________
@line (Seal)


[[elif signing_state=GEORGIA]]

@sub Statutory Reference

O.C.G.A. § 53-12-280.

@sub Notary Acknowledgment

@line STATE OF GEORGIA
@line COUNTY OF _______________________________
@line This certificate pertains to the foregoing Certification of Trust signed on __________________.
@line Acknowledged in my presence on __________________ by ________________________________, as Trustee of {{trust_name}}.
@line The signer ☐ is personally known to me or ☐ produced government-issued photo identification as required by applicable Georgia law.
@line ________________________________________
@line Signature of Notary Public
@line Notary Public, State of Georgia
@line My Commission Expires: __________________
@line (Seal)


[[elif signing_state=HAWAII]]

@sub Statutory Reference

Haw. Rev. Stat. § 554D-1013.

@sub Notary Acknowledgment

// Hawaii, HRS 502-41 (form 6) and 502-42 (representative capacity); certificate elements per HRS 456-21
@line State of Hawaii
@line City and County of / County of ____________________________
@line On ____________________, before me personally appeared ____________________________, to me personally known or proved to me through satisfactory evidence of identity, who, being by me duly sworn or affirmed, did say that such person executed the foregoing instrument as the free act and deed of such person, in the capacity shown, as Trustee of {{trust_name}}, having been duly authorized to execute such instrument in such capacity.
@line ________________________________________
@line Notary Public, State of Hawaii
@line Printed Name: ____________________________
@line ______________ Judicial Circuit
@line My Commission Expires: ____________________
@line (Seal)
@line Doc. Date: __________________   # Pages: ______
@line Document Description: Certification of Trust


[[elif signing_state=IDAHO]]

@sub Statutory Reference

Idaho Code §§ 68-114 to 68-116.

@sub Notary Acknowledgment

// Idaho short form, Idaho Code 51-116(2) (representative capacity)
@line State of Idaho
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notary public
@line (Stamp)
@line My commission expires: ____________________


[[elif signing_state=ILLINOIS]]

@sub Statutory Reference

760 ILCS 3/1013.

@sub Notary Acknowledgment

@line State of Illinois
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line Notary Public: ________________________________________
@line My Commission Expires: ________________________________
@line (Seal)


[[elif signing_state=INDIANA]]

@sub Statutory Reference

Ind. Code § 30-4-4-5.

@sub Notary Acknowledgment

// Indiana, IC 33-42-9-12 (representative capacity; certificate elements per 33-42-9-12(a)-(b))
@line State of Indiana
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line Printed name: ____________________________
@line Title of office: ________________________________
@line Commission number: ____________________
@line My commission expires: ____________________
@line Indiana county of commission (or of employment, if a nonresident): ____________________
@line (Seal)


[[elif signing_state=IOWA]]

@sub Statutory Reference

Iowa Code § 633A.4604.

@sub Notary Acknowledgment

// Iowa short form, Iowa Code 9B.16(2) (representative capacity)
@line State of Iowa
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=KANSAS]]

@sub Statutory Reference

K.S.A. § 58a-1013.

@sub Notary Acknowledgment

// Kansas short form, K.A.R. 7-43-17(a)(2) (representative capacity); K.S.A. 58a-1013(a) (verify against official code)
@line State of Kansas
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Official stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=KENTUCKY]]

@sub Statutory Reference

KRS § 386B.10-120.

@sub Notary Acknowledgment

@line Commonwealth of Kentucky
@line County of ________________________________
@line The foregoing instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line Notary Public: ________________________________________
@line Notary ID / Commission No.: ___________________________
@line My Commission Expires: ________________________________
@line (Seal)


[[elif signing_state=LOUISIANA]]

@sub Statutory Reference

La. R.S. § 9:2092.

@sub Notary Acknowledgment

@line State of Louisiana
@line Parish of ________________________________
@line Before me, the undersigned Notary Public, duly commissioned and qualified in and for the Parish and State aforesaid, personally came and appeared ____________________________, who acknowledged that the foregoing Certification of Trust / Extract of Trust was executed freely and voluntarily in the stated capacity for the purposes set forth herein.
@line Thus done and signed on __________________, 20____.
@line Notary Public: ________________________________________
@line Printed Name / Notary ID: _____________________________
@line (Seal)


[[elif signing_state=MAINE]]

@sub Statutory Reference

18-B M.R.S. § 1013.

@sub Notary Acknowledgment

// Maine short form, 4 M.R.S. 1917(2) (representative capacity)
@line State of Maine
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line Printed name: ________________________________
@line (Stamp, if any)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=MARYLAND]]

@sub Statutory Reference

Md. Code, Est. & Trusts § 14.5-910.

@sub Notary Acknowledgment

// Maryland short form, State Gov't 18-216(c) (representative capacity)
@line State of Maryland
@line County/City of ____________________________
@line This record was acknowledged before me on the _____ day of ____________________, 20____ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line Title of office: ________________________________
@line (Stamp)
@line My commission expires: ____________________


[[elif signing_state=MASSACHUSETTS]]

@sub Statutory Reference

Mass. Gen. Laws ch. 203E, § 1013.

@sub Notary Acknowledgment

// M.G.L. c. 222, 15(b) acknowledgment in a representative capacity
@line Commonwealth of Massachusetts
@line County of ____________________________
@line On this ______ day of ____________________, 20____, before me, the undersigned notary public, ____________________________ (name of document signer) personally appeared, proved to me through satisfactory evidence of identification, which were ____________________________, to be the person whose name is signed on the preceding or attached document, and acknowledged to me that (he) (she) signed it voluntarily for its stated purpose as Trustee for {{trust_name}}, a trust, as the voluntary act of the trust.
@line ________________________________________
@line Official signature and seal of notary public
@line Printed name: ________________________________
@line My commission expires: ____________________
@line (Seal)


[[elif signing_state=MICHIGAN]]

@sub Statutory Reference

MCL § 700.7913.

@sub Jurat

// MCL 700.7913(2) (certificate must be an affidavit); MCL 55.287(2) statements
@line State of Michigan
@line County of ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notary public
@line Printed name of notary public (exactly as on commission application): ________________________________
@line Notary public, State of Michigan, County of ____________________.
@line My commission expires ____________________.
@line Acting in the County of ____________________.
@line Date of notarial act: ____________________


[[elif signing_state=MINNESOTA]]

@sub Statutory Reference

Minn. Stat. § 501C.1013.

@sub Notary Acknowledgment

@line State of Minnesota
@line County of ________________________________
@line Signed and sworn to (or affirmed) before me on __________________, 20____, by ____________________________, ____________________________.
@line Notary Public / Authorized Officer: ___________________
@line My Commission Expires: ________________________________
@line (Seal)


[[elif signing_state=MISSISSIPPI]]

@sub Statutory Reference

Miss. Code § 91-8-1013.

@sub Notary Acknowledgment

@line State of Mississippi
@line County of ________________________________
@line Personally appeared before me, the undersigned notarial officer, ____________________________, ____________________________, who executed the foregoing Certification of Trust and whose signature and execution are hereby attested by me on this ______ day of __________________, 20____.
@line Notary Public: ________________________________________
@line My Commission Expires: ________________________________
@line (Seal)


[[elif signing_state=MISSOURI]]

@sub Statutory Reference

RSMo § 456.10-1013.

@sub Notary Acknowledgment

@line State of Missouri
@line County of ________________________________
@line On this ______ day of __________________, 20____, before me personally appeared ____________________________, known to me or proved to me to be the person whose name is subscribed to this instrument and acknowledged that the same was executed in the stated capacity as Trustee of {{trust_name}}.
@line Notary Public: ________________________________________
@line My Commission Expires: ________________________________
@line (Seal)


[[elif signing_state=MONTANA]]

@sub Statutory Reference

Mont. Code § 72-38-1013.

@sub Notary Acknowledgment

// Montana short form, MCA 1-5-610(2) (representative capacity); 72-38-1013(2)
@line State of Montana
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Official stamp)
@line Printed name and title of officer (if not shown in stamp): ________________________________


[[elif signing_state=NEBRASKA]]

@sub Statutory Reference

Neb. Rev. Stat. §§ 30-38,102 through 30-38,104.

@sub Notary Acknowledgment

// Neb. Rev. Stat. 30-38,102(b) (affidavit, signed and acknowledged); 64-206(6) (trustee)
@line State of Nebraska
@line County of ____________________________
@line Subscribed and sworn to before me, and the foregoing instrument acknowledged before me, this ____________________ by ____________________________, Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notary public
@line Title or rank: ________________________________
@line (Seal)
@line My commission expires: ____________________


[[elif signing_state=NEVADA]]

@sub Statutory Reference

Nev. Rev. Stat. §§ 164.400–164.410.

@sub Notary Acknowledgment

// NRS 164.400(2) (affidavit, signed and acknowledged); short forms NRS 240.167 and 240.1665
@line State of Nevada
@line County of ____________________________
@line Signed and sworn to (or affirmed) and acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Seal, if any)
@line Title and rank (optional): ________________________________


[[elif signing_state=NEW_HAMPSHIRE]]

@sub Statutory Reference

N.H. Rev. Stat. § 564-B:10-1013.

@sub Notary Acknowledgment

// New Hampshire short form, RSA 456-B:8, II (representative capacity)
@line State of New Hampshire
@line County of ____________________________
@line This instrument was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Seal, if any)
@line Title (and Rank): ________________________________
@line My commission expires: ____________________


[[elif signing_state=NEW_JERSEY]]

@sub Statutory Reference

N.J. Stat. § 3B:31-81.

@sub Notary Acknowledgment

@line State of New Jersey
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by the Trustee(s) whose signature(s) appear above, acting in the stated representative capacity.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line (Seal)


[[elif signing_state=NEW_MEXICO]]

@sub Statutory Reference

N.M. Stat. § 46A-10-1013.

@sub Notary Acknowledgment

// New Mexico short form, NMSA 1978 § 14-14A-15(B) (representative capacity)
@line State of New Mexico
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line Commission number: ____________________
@line My commission expires: ____________________


[[elif signing_state=NEW_YORK]]

@sub Statutory Reference

EPTL Article 7 (no dedicated certification-of-trust statute).

@sub Notary Acknowledgment

// New York uniform form, RPL § 309-a(1) (covers representative capacity); Executive Law § 137 (verify against official code)
@line State of New York
@line County of ____________________________
@line On the _____ day of ____________________ in the year 20____, before me, the undersigned, personally appeared ____________________________, personally known to me or proved to me on the basis of satisfactory evidence to be the individual(s) whose name(s) is (are) subscribed to the within instrument and acknowledged to me that he/she/they executed the same in his/her/their capacity(ies), and that by his/her/their signature(s) on the instrument, the individual(s), or the person upon behalf of which the individual(s) acted, executed the instrument.
@line Capacity: Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public
@line Printed name: ____________________________
@line Notary Public, State of New York
@line Qualified in ____________________ County
@line Registration No.: ____________________
@line My commission expires: ____________________


[[elif signing_state=NORTH_CAROLINA]]

@sub Statutory Reference

N.C. Gen. Stat. § 36C-10-1013.

@sub Notary Acknowledgment

@line State of North Carolina
@line County of ________________________________
@line I certify that the following person personally appeared before me this day and acknowledged the due execution of the foregoing instrument: ____________________________, as Trustee(s) of {{trust_name}}.
@line Date: __________________, 20____
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line (Seal)


[[elif signing_state=NORTH_DAKOTA]]

@sub Statutory Reference

N.D. Cent. Code § 59-18-13.

@sub Notary Acknowledgment

// North Dakota short form, N.D.C.C. § 44-06.1-19(2) (representative capacity)
@line State of North Dakota
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=OHIO]]

@sub Statutory Reference

Ohio Rev. Code § 5810.13.

@sub Notary Acknowledgment

@line State of Ohio
@line County of ________________________________
@line The foregoing instrument was acknowledged before me this ______ day of __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line (Seal)


[[elif signing_state=OKLAHOMA]]

@sub Statutory Reference

Okla. Stat. tit. 60, § 1609.7.

@sub Notary Acknowledgment

// Oklahoma short form, 49 O.S. § 119(2) (representative capacity); 49 O.S. § 5(A)
@line State of Oklahoma
@line County of ____________________________
@line This instrument was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Seal)
@line Title (and Rank): ________________________________
@line Commission No.: ____________________
@line My commission expires: ____________________


[[elif signing_state=OREGON]]

@sub Statutory Reference

Or. Rev. Stat. § 130.860.

@sub Notary Acknowledgment

// Oregon short form, ORS 194.285(2) (representative capacity); signer must be named, ORS 194.280(1)(d)
@line State of Oregon
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=PENNSYLVANIA]]

@sub Statutory Reference

20 Pa.C.S. § 7790.3.

@sub Notary Acknowledgment

// Pennsylvania short form, 57 Pa.C.S. § 316(2) (representative capacity)
@line Commonwealth of Pennsylvania
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee, who represents that he, she or they are authorized to act on behalf of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=RHODE_ISLAND]]

@sub Statutory Reference

R.I. Gen. Laws § 34-4-27 (memorandum of trust for real estate). Rhode Island has no general certification-of-trust statute.

@sub Notary Acknowledgment

@line State of Rhode Island
@line County of ________________________________
@line On __________________, 20____, before me, personally appeared ____________________________, as Trustee(s) of {{trust_name}}, and acknowledged the instrument to be the signer(s)’ free act and deed in that capacity.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line (Seal)


[[elif signing_state=SOUTH_CAROLINA]]

@sub Statutory Reference

S.C. Code § 62-7-1013.

@sub Notary Acknowledgment

// South Carolina statutory short form, S.C. Code § 26-3-70(5) (trustee); §§ 26-1-60, 26-1-90(B)
@line State of South Carolina
@line County of ____________________________
@line The foregoing instrument was acknowledged before me this ____________________ by ____________________________, Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notary public
@line Notary Public for South Carolina
@line Printed name: ____________________________
@line My commission expires: ____________________
@line (Seal)


[[elif signing_state=SOUTH_DAKOTA]]

@sub Statutory Reference

S.D. Codified Laws §§ 55-4-51 through 55-4-51.3.

@sub Notary Acknowledgment

// South Dakota form, SDCL § 18-5-11 (trustee); § 18-5-13
@line State of South Dakota
@line County of ____________________________
@line On this the _____ day of ____________________, 20____, before me, ____________________________, the undersigned officer, personally appeared ____________________________, Trustee of {{trust_name}}, known to me or satisfactorily proven to be the person(s) described in the foregoing instrument, and acknowledged that he, she or they executed the same in the capacity therein stated and for the purposes therein contained.
@line In witness whereof I hereunto set my hand and official seal.
@line ________________________________________
@line Signature of notary public
@line Printed name: ____________________________
@line (Seal)
@line Title of officer: ________________________________
@line My commission expires: ____________________


[[elif signing_state=TENNESSEE]]

@sub Statutory Reference

Tenn. Code Ann. § 35-15-1013.

@sub Notary Acknowledgment

// Tennessee form, T.C.A. § 66-22-114(a) (person executing in a representative capacity) (verify against official code)
@line State of Tennessee
@line County of ____________________________
@line Personally appeared before me, ____________________________, a Notary Public of said County, ____________________________, with whom I am personally acquainted (or proved to me on the basis of satisfactory evidence), and who acknowledged that such person executed the within instrument for the purposes therein contained, and who further acknowledged that such person is the Trustee of {{trust_name}} and is authorized to execute this instrument as Trustee.
@line Witness my hand, at office, this ______ day of __________________, 20____.
@line ________________________________________
@line Notary Public
@line My commission expires: ____________________
@line (Seal)


[[elif signing_state=TEXAS]]

@sub Statutory Reference

Prop. Code § 114.086.

@sub Notary Acknowledgment

// Texas short form, Civ. Prac. & Rem. Code § 121.008(b)(5) (trustee / representative)
@line State of Texas
@line County of ____________________________
@line This instrument was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public, State of Texas
@line Notary's printed name: ________________________________
@line My commission expires: ____________________
@line (Seal)


[[elif signing_state=UTAH]]

@sub Statutory Reference

Utah Code § 75B-2-1013.

@sub Notary Acknowledgment

// Utah form, Utah Code § 46-1-6.5(3), with representative capacity as in § 57-2a-7
@line State of Utah
@line County of ____________________________
@line On this ______ day of ____________________, in the year ________, before me, ____________________________, a notary public, personally appeared ____________________________, as Trustee of {{trust_name}}, proved on the basis of satisfactory evidence to be the person(s) whose name(s) (is/are) subscribed to in this document, and acknowledged (he/she/they) executed the same as Trustee.
@line ________________________________________
@line Notary Signature
@line (Notary's Official Seal)


[[elif signing_state=VERMONT]]

@sub Statutory Reference

14A V.S.A. § 1013.

@sub Notary Acknowledgment

// Vermont short form, 26 V.S.A. § 5368(2) (representative capacity); § 5367
@line State of Vermont
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notary public
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________
@line Printed name and commission number (if no stamp is affixed): ________________________________


[[elif signing_state=VIRGINIA]]

@sub Statutory Reference

Va. Code § 64.2-804.

@sub Notary Acknowledgment

// Virginia short form, Va. Code § 55.1-621(5) (trustee); § 47.1-16
@line Commonwealth of Virginia
@line City/County of ____________________________
@line The foregoing instrument was acknowledged before me this ______ day of __________________, 20____, by ____________________________, Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public
@line Notary registration number: ____________________
@line My commission expires: ____________________
@line (Seal)


[[elif signing_state=WASHINGTON]]

@sub Statutory Reference

RCW 11.98.075.

@sub Notary Acknowledgment

// Washington short form, RCW 42.45.140(2) (representative capacity)
@line State of Washington
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notary public
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=WEST_VIRGINIA]]

@sub Statutory Reference

W. Va. Code § 44D-10-1013.

@sub Notary Acknowledgment

// West Virginia short form, W. Va. Code § 39-4-16(2) (representative capacity); § 39-4-15
@line State of West Virginia
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=WISCONSIN]]

@sub Statutory Reference

Wis. Stat. § 701.1013.

@sub Notary Acknowledgment

// Wisconsin short form, Wis. Stat. § 140.16(2) (representative capacity); § 140.15
@line State of Wisconsin
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________


[[elif signing_state=WYOMING]]

@sub Statutory Reference

Wyo. Stat. § 4-10-1014.

@sub Notary Acknowledgment

// Wyoming short form, W.S. 32-3-115(a)(ii) (representative capacity); § 32-3-114
@line State of Wyoming
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________ as Trustee of {{trust_name}}.
@line ________________________________________
@line (Stamp)  Signature of notarial officer
@line Title (and Rank): ________________________________
@line My commission expires: ____________________

[[end]]
`;
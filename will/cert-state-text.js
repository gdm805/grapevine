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

@line STATE OF ________________________________
@line COUNTY OF _______________________________
@line I, ________________________________, a Notary Public or other officer authorized to take acknowledgments in and for said County in said State, hereby certify that ________________________________, whose name as Trustee of {{trust_name}} is signed to the foregoing instrument and who is known to me or satisfactorily proven to be the person whose name is subscribed thereto, acknowledged before me on this day that, being informed of the contents of the instrument, the signer, in such representative capacity, executed the same voluntarily.
@line Given under my hand this _____ day of __________________, 20____.
@line ________________________________________
@line Notary Public / Authorized Officer
@line My Commission Expires: __________________
@line [SEAL]


[[elif signing_state=ALASKA]]

@sub Statutory Reference

Alaska Stat. § 13.36.079.

@sub Notary Acknowledgment

@line STATE OF ALASKA
@line ________________________ Judicial District (or County/Municipality of ________________________)
@line The foregoing instrument was acknowledged before me this _____ day of __________________, 20____, by ________________________________, Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of Person Taking Acknowledgment
@line ________________________________________
@line Title or Rank
@line Serial Number, if any: __________________
@line My Commission Expires: __________________
@line [OFFICIAL SEAL]


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
@line [OFFICIAL SEAL]


[[elif signing_state=ARKANSAS]]

@sub Statutory Reference

Ark. Code § 28-73-1013.

@sub Notary Acknowledgment

@line STATE OF ARKANSAS
@line COUNTY OF _______________________________
@line On this the _____ day of __________________, 20____, before me, ________________________________, the undersigned notary, personally appeared ________________________________, known to me or satisfactorily proven to be the person whose name is subscribed to the within instrument and acknowledged that the signer executed the same for the purposes therein contained.
@line In witness whereof I hereunto set my hand and official seal.
@line ________________________________________
@line Signature of Notary Public
@line My Commission Expires: __________________
@line [SEAL OF OFFICE]


[[elif signing_state=CALIFORNIA]]

@sub Statutory Reference

Cal. Probate Code § 18100.5.

@sub Notary Acknowledgment

@line STATE OF CALIFORNIA
@line COUNTY OF _______________________________
@line On __________________ before me, ________________________________, personally appeared ________________________________, who proved to me on the basis of satisfactory evidence to be the person(s) whose name(s) is/are subscribed to the within instrument and acknowledged to me that he/she/they executed the same in his/her/their authorized capacity(ies), and that by his/her/their signature(s) on the instrument the person(s), or the entity upon behalf of which the person(s) acted, executed the instrument.
@line I certify under PENALTY OF PERJURY under the laws of the State of California that the foregoing paragraph is true and correct.
@line WITNESS my hand and official seal.
@line ________________________________________
@line Signature of Notary Public
@line [SEAL]


[[elif signing_state=COLORADO]]

@sub Statutory Reference

Colo. Rev. Stat. § 15-5-1013.

@sub Notary Acknowledgment

@line STATE OF COLORADO
@line COUNTY OF _______________________________
@line This record was acknowledged before me on __________________, 20____, by ________________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary’s Official Signature
@line ________________________________________
@line Title of Office
@line Notary ID: ______________________________
@line My Commission Expires: __________________
@line [OFFICIAL STAMP]


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

@line STATE OF DELAWARE
@line COUNTY OF _______________________________
@line This record was acknowledged before me on __________________, 20____, by ________________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Signature of Notarial Officer
@line ________________________________________
@line Title of Office
@line My Commission Expires: __________________
@line [OFFICIAL STAMP]


[[elif signing_state=DISTRICT_COLUMBIA]]

@sub Statutory Reference

D.C. Code § 19-1310.13.

@sub Notary Acknowledgment

@line State of District of Columbia
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


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
@line [SEAL]


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
@line [STAMP/SEAL]


[[elif signing_state=HAWAII]]

@sub Statutory Reference

Haw. Rev. Stat. § 554D-1013.

@sub Notary Acknowledgment

@line State of Hawaii
@line County of ________________________________
@line On __________________, before me, the undersigned Notary Public, personally appeared ____________________________, who was proved to me through satisfactory evidence of identification to be the person whose name is signed on this instrument and acknowledged that the instrument was executed freely and voluntarily in the stated capacity as Trustee of {{trust_name}}.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line Notary Seal: __________________________________________


[[elif signing_state=IDAHO]]

@sub Statutory Reference

Idaho Code §§ 68-114 to 68-116.

@sub Notary Acknowledgment

@line State of Idaho
@line County of ________________________________
@line On this ______ day of __________________, 20____, before me, the undersigned Notary Public, personally appeared ____________________________, known or identified to me to be the person whose name is subscribed to this instrument, and acknowledged that the person executed the same in the stated capacity as Trustee of {{trust_name}}.
@line Notary Public: ________________________________________
@line Residing at: __________________________________________
@line Commission Expires: ___________________________________
@line [SEAL]


[[elif signing_state=ILLINOIS]]

@sub Statutory Reference

760 ILCS 3/1013.

@sub Notary Acknowledgment

@line State of Illinois
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line Notary Public: ________________________________________
@line My Commission Expires: ________________________________
@line [SEAL]


[[elif signing_state=INDIANA]]

@sub Statutory Reference

Ind. Code § 30-4-4-5.

@sub Notary Acknowledgment

@line State of Indiana
@line County of ________________________________
@line Before me, a Notary Public in and for said County and State, personally appeared ____________________________, as Trustee of {{trust_name}}, who acknowledged the execution of the foregoing Certification of Trust.
@line Witness my hand and official seal this ______ day of __________________, 20____.
@line Notary Public: ________________________________________
@line Printed Name: _________________________________________
@line County of Residence: __________________________________
@line My Commission Expires: ________________________________
@line [SEAL]


[[elif signing_state=IOWA]]

@sub Statutory Reference

Iowa Code § 633A.4604.

@sub Notary Acknowledgment

@line State of Iowa
@line County of ________________________________
@line Signed and sworn to (or affirmed) before me on __________________, 20____, by ____________________________, who certifies this Certification of Trust under penalty of perjury.
@line Notarial Officer: _____________________________________
@line Title of Office: ______________________________________
@line My Commission Expires: ________________________________
@line [SEAL]


[[elif signing_state=KANSAS]]

@sub Statutory Reference

K.S.A. § 58a-1013.

@sub Notary Acknowledgment

@line State of Kansas
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line Notary Public: ________________________________________
@line My Appointment Expires: _______________________________
@line [SEAL]


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
@line [SEAL]


[[elif signing_state=LOUISIANA]]

@sub Statutory Reference

La. R.S. § 9:2092.

@sub Notary Acknowledgment

@line Parish of ________________________________
@line Before me, the undersigned Notary Public, duly commissioned and qualified in and for the Parish and State aforesaid, personally came and appeared ____________________________, who acknowledged that the foregoing Certification of Trust / Extract of Trust was executed freely and voluntarily in the stated capacity for the purposes set forth herein.
@line Thus done and signed on __________________, 20____.
@line Notary Public: ________________________________________
@line Printed Name / Notary ID: _____________________________
@line [SEAL]


[[elif signing_state=MAINE]]

@sub Statutory Reference

18-B M.R.S. § 1013.

@sub Notary Acknowledgment

@line State of Maine
@line County of ________________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line Notary Public / Authorized Officer: ___________________
@line Printed Name: _________________________________________
@line My Commission Expires: ________________________________
@line [SEAL]


[[elif signing_state=MARYLAND]]

@sub Statutory Reference

Md. Code, Est. & Trusts § 14.5-910.

@sub Notary Acknowledgment

@line State of Maryland
@line County of ________________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line Notary Public: ________________________________________
@line My Commission Expires: ________________________________
@line [SEAL]


[[elif signing_state=MASSACHUSETTS]]

@sub Statutory Reference

Mass. Gen. Laws ch. 203E, § 1013.

@sub Notary Acknowledgment

@line Commonwealth of Massachusetts
@line County of ________________________________
@line On this ______ day of __________________, 20____, before me, the undersigned Notary Public, personally appeared ____________________________, proved to me through satisfactory evidence of identification to be the person whose name is signed on this instrument, and acknowledged to me that the instrument was signed voluntarily for its stated purpose as Trustee of {{trust_name}}.
@line Notary Public: ________________________________________
@line My Commission Expires: ________________________________
@line [SEAL]


[[elif signing_state=MICHIGAN]]

@sub Statutory Reference

MCL § 700.7913.

@sub Notary Acknowledgment

@line State of Michigan, County of __________________________
@line My Commission Expires: ________________________________
@line Acting in the County of: ______________________________
@line [SEAL]


[[elif signing_state=MINNESOTA]]

@sub Statutory Reference

Minn. Stat. § 501C.1013.

@sub Notary Acknowledgment

@line State of Minnesota
@line County of ________________________________
@line Signed and sworn to (or affirmed) before me on __________________, 20____, by ____________________________, ____________________________.
@line Notary Public / Authorized Officer: ___________________
@line My Commission Expires: ________________________________
@line [SEAL]


[[elif signing_state=MISSISSIPPI]]

@sub Statutory Reference

Miss. Code § 91-8-1013.

@sub Notary Acknowledgment

@line State of Mississippi
@line County of ________________________________
@line Personally appeared before me, the undersigned notarial officer, ____________________________, ____________________________, who executed the foregoing Certification of Trust and whose signature and execution are hereby attested by me on this ______ day of __________________, 20____.
@line Notary Public: ________________________________________
@line My Commission Expires: ________________________________
@line [SEAL]


[[elif signing_state=MISSOURI]]

@sub Statutory Reference

RSMo § 456.10-1013.

@sub Notary Acknowledgment

@line State of Missouri
@line County of ________________________________
@line On this ______ day of __________________, 20____, before me personally appeared ____________________________, known to me or proved to me to be the person whose name is subscribed to this instrument and acknowledged that the same was executed in the stated capacity as Trustee of {{trust_name}}.
@line Notary Public: ________________________________________
@line My Commission Expires: ________________________________
@line [SEAL]


[[elif signing_state=MONTANA]]

@sub Statutory Reference

Mont. Code § 72-38-1013.

@sub Notary Acknowledgment

@line State of Montana
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=NEBRASKA]]

@sub Statutory Reference

Neb. Rev. Stat. §§ 30-38,102 through 30-38,104.

@sub Notary Acknowledgment

@line State of Nebraska
@line County of ________________________________
@line This Certification of Trust, in affidavit form, was acknowledged before me on __________________, 20____, by the Trustee(s) whose signature(s) appear above.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=NEVADA]]

@sub Statutory Reference

Nev. Rev. Stat. §§ 164.400–164.410.

@sub Notary Acknowledgment

@line State of Nevada
@line County of ________________________________
@line This Certification of Trust, in affidavit form, was acknowledged before me on __________________, 20____, by the Trustee(s) whose signature(s) appear above.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=NEW_HAMPSHIRE]]

@sub Statutory Reference

N.H. Rev. Stat. § 564-B:10-1013.

@sub Notary Acknowledgment

@line State of New Hampshire
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


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
@line [Notary Seal]


[[elif signing_state=NEW_MEXICO]]

@sub Statutory Reference

N.M. Stat. § 46A-10-1013.

@sub Notary Acknowledgment

@line State of New Mexico
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=NEW_YORK]]

@sub Statutory Reference

EPTL Article 7 (no dedicated certification-of-trust statute).

@sub Notary Acknowledgment

@line State of New York
@line County of ________________________________
@line On __________________, 20____, before me, the undersigned, personally appeared the signer(s), personally known to me or proved to me on the basis of satisfactory evidence to be the individual(s) whose name(s) are subscribed to this instrument and acknowledged executing the same in the stated capacity.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=NORTH_CAROLINA]]

@sub Statutory Reference

N.C. Gen. Stat. § 36C-10-1013.

@sub Notary Acknowledgment

@line State of North Carolina
@line County of ________________________________
@line I certify that the following person personally appeared before me this day and acknowledged the due execution of the foregoing instrument: ____________________________, Trustee.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=NORTH_DAKOTA]]

@sub Statutory Reference

N.D. Cent. Code § 59-18-13.

@sub Notary Acknowledgment

@line State of North Dakota
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


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
@line [Notary Seal]


[[elif signing_state=OKLAHOMA]]

@sub Statutory Reference

Okla. Stat. tit. 60, § 175.6a.

@sub Notary Acknowledgment

@line State of Oklahoma
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=OREGON]]

@sub Statutory Reference

Or. Rev. Stat. § 130.860.

@sub Notary Acknowledgment

@line State of Oregon
@line County of ________________________________
@line This record was acknowledged before me on __________________, 20____, by the Trustee(s) whose signature(s) appear above, as Trustee(s) of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=PENNSYLVANIA]]

@sub Statutory Reference

20 Pa.C.S. § 7790.3.

@sub Notary Acknowledgment

@line Commonwealth of Pennsylvania
@line County of ________________________________
@line On __________________, 20____, before me, the undersigned officer, personally appeared ____________________________, known to me or satisfactorily proven to be the person whose name is subscribed to this instrument and acknowledged execution in the stated capacity.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=RHODE_ISLAND]]

@sub Statutory Reference

R.I. Gen. Laws tit. 18 (no dedicated certification-of-trust statute).

@sub Notary Acknowledgment

@line State of Rhode Island
@line County of ________________________________
@line On __________________, 20____, before me, personally appeared the signer(s) of this Certification and acknowledged the instrument to be the signer(s) free act and deed in the stated capacity.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=SOUTH_CAROLINA]]

@sub Statutory Reference

S.C. Code § 62-7-1013.

@sub Notary Acknowledgment

@line State of South Carolina
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=SOUTH_DAKOTA]]

@sub Statutory Reference

S.D. Codified Laws §§ 55-4-51 through 55-4-51.3.

@sub Notary Acknowledgment

@line State of South Dakota
@line County of ________________________________
@line This Certificate of Trust was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=TENNESSEE]]

@sub Statutory Reference

Tenn. Code Ann. § 35-15-1013.

@sub Notary Acknowledgment

@line State of Tennessee
@line County of ________________________________
@line On __________________, 20____, before me appeared the Trustee(s) whose signature(s) appear above, who acknowledged execution of this Certification of Trust in the stated fiduciary capacity.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=TEXAS]]

@sub Statutory Reference

Prop. Code § 114.086.

@sub Notary Acknowledgment

@line State of Texas
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=UTAH]]

@sub Statutory Reference

Utah Code § 75-7-1013.

@sub Notary Acknowledgment

@line State of Utah
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=VERMONT]]

@sub Statutory Reference

14A V.S.A. § 1013.

@sub Notary Acknowledgment

@line State of Vermont
@line County of ________________________________
@line Subscribed and sworn to (or affirmed) before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=VIRGINIA]]

@sub Statutory Reference

Va. Code § 64.2-804.

@sub Notary Acknowledgment

@line State of Virginia
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=WASHINGTON]]

@sub Statutory Reference

RCW 11.98.075.

@sub Notary Acknowledgment

@line State of Washington
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=WEST_VIRGINIA]]

@sub Statutory Reference

W. Va. Code § 44D-10-1013.

@sub Notary Acknowledgment

@line State of West Virginia
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=WISCONSIN]]

@sub Statutory Reference

Wis. Stat. § 701.1013.

@sub Notary Acknowledgment

@line State of Wisconsin
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]


[[elif signing_state=WYOMING]]

@sub Statutory Reference

Wyo. Stat. § 4-10-1014.

@sub Notary Acknowledgment

@line State of Wyoming
@line County of ________________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________, as Trustee of {{trust_name}}.
@line ________________________________________
@line Notary Public / Notarial Officer
@line Printed Name: ________________________________
@line My Commission Expires: ________________________
@line [Notary Seal]

[[end]]
`;
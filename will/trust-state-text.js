window.TRUST_SHARED = window.TRUST_SHARED || {};
window.TRUST_SHARED['trust_execution'] = String.raw`
// ==========================================================================
//  GRAPEVINE  |  REVOCABLE LIVING TRUST  |  STATE-SPECIFIC SIGNING PAGE
//  Florida and Delaware require witnesses (in addition to a notary); every other state and DC
//  need only a notary. Taken word for word from your NATIONAL EXECUTION LIBRARY files -- the
//  witness wording is your Will Witness Block with "Testator"/"Will" changed to "Trustmaker"/
//  "Trust Agreement" so it fits this document; nothing else about the wording was changed.
//  The blanks (state, county, signer's name, date, notary/witness details) are filled in by hand
//  at the signing appointment, the same as every other document on this site -- a notary won't
//  accept a pre-filled acknowledgment anyway. California's own file is the one exception: it
//  already marks the county and date as fields rather than hand-fill blanks, so those two are
//  filled in from the person's answers there.
//  Shared by both trust builders (single and joint) via [[include trust_execution]]. The Florida
//  and Delaware witness paragraphs say "the Trustmaker" (singular) in the source file; when
//  is_joint is true (set only by the joint trust's buildVars) they switch to "the Trustmakers".
// ==========================================================================
[[if signing_state=ALABAMA]]

@sub Notary Acknowledgment

// Alabama, Ala. Code 35-4-29 (individual acknowledgment); seal per Ala. Code 36-20-72
@line The State of Alabama
@line ____________________________ County
@line I, ____________________________, a Notary Public in and for said County in said State, hereby certify that ____________________________, whose name is signed to the foregoing instrument, and who is known to me, acknowledged before me on this day that, being informed of the contents of the instrument, he/she/they executed the same voluntarily on the day the same bears date.
@line Given under my hand and official seal this ______ day of __________________, 20____.
@line ________________________________________
@line Notary Public
@line My Commission Expires: ____________________
@line (Seal)

[[elif signing_state=ALASKA]]

@sub Notary Acknowledgment

// Alaska, AS 09.63.100(a)(1) (individual acknowledgment); seal and expiration per AS 09.63.100(b)
@line State of Alaska
@line ____________________________ Judicial District
@line The foregoing instrument was acknowledged before me this ______ day of __________________, 20____, by ____________________________.
@line ________________________________________
@line Signature of Person Taking Acknowledgment
@line Title or Rank: ____________________________
@line Serial Number, if any: __________________
@line My Commission Expires: ____________________
@line (Seal)

[[elif signing_state=ARIZONA]]

@sub Notary Acknowledgment

@line STATE OF ______________________________
@line COUNTY OF _____________________________
@line This record was acknowledged before me on ____________________ by ________________________________________________.
@line ____________________________________________
@line Signature of Notarial Officer
@line (Seal)
@line ____________________________________________
@line Title of Office
@line My Commission Expires: ____________________

[[elif signing_state=ARKANSAS]]

@sub Notary Acknowledgment

// Arkansas, Ark. Code 16-47-107(b) (individual acknowledgment); seal and expiration per Ark. Code 21-14-107, 21-14-108
@line State of Arkansas
@line County of ____________________________
@line On this ______ day of __________________, 20____, before me, a Notary Public, appeared the within named ____________________________, to me personally well known (or satisfactorily proven to be such person), who stated and acknowledged that he/she/they had so signed, executed and delivered said foregoing instrument for the consideration, uses and purposes therein mentioned and set forth.
@line IN TESTIMONY WHEREOF, I have hereunto set my hand and official seal this ______ day of __________________, 20____.
@line ________________________________________
@line Notary Public
@line My Commission Expires: ____________________
@line (Seal)

[[elif signing_state=CALIFORNIA]]

@sub Notary Acknowledgment

@box A notary public or other officer completing this certificate verifies only the identity of the individual who signed the document to which this certificate is attached, and not the truthfulness, accuracy, or validity of that document.
@line State of California
@line County of {{county}}
@line On {{signing_date}} before me, ________________________________, personally appeared _______________________________, who proved to me on the basis of satisfactory evidence to be the person(s) whose name(s) is/are subscribed to the instrument and acknowledged execution in the authorized capacity(ies), and that by the signature(s) on the instrument the person(s), or the entity upon behalf of which the person(s) acted, executed the instrument.
@line I certify under PENALTY OF PERJURY under the laws of the State of California that the foregoing paragraph is true and correct.
@line WITNESS my hand and official seal.
@line ____________________________________
@line Signature
@line (Seal)

[[elif signing_state=COLORADO]]

@sub Notary Acknowledgment

// Colorado short form, C.R.S. 24-21-516(1)(a) (individual capacity)
@line State of Colorado
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________

[[elif signing_state=CONNECTICUT]]

@sub Notary Acknowledgment

@line STATE OF CONNECTICUT
@line COUNTY OF ______________________________
@line The foregoing instrument was acknowledged before me this _____ day of ____________________, 20____, by ________________________________________________.
@line __________________________________
@line Signature of Notary Public / Person Taking Acknowledgment
@line __________________________________
@line Printed Name and Title or Rank
@line My Commission Expires: ______________________________
@line (Seal)

[[elif signing_state=DELAWARE]]

@sub Witnesses

[[if is_joint]]
@line The foregoing instrument was signed by the Trustmakers, or by another person subscribing a Trustmaker's name in that Trustmaker's presence and at that Trustmaker's express direction, and was declared by the Trustmakers to be their Revocable Living Trust. We sign below as attesting witnesses in the presence of the Trustmakers.
[[else]]
@line The foregoing instrument was signed by the Trustmaker, or by another person subscribing the Trustmaker's name in the Trustmaker's presence and at the Trustmaker's express direction, and was declared by the Trustmaker to be the Trustmaker's Revocable Living Trust. We sign below as attesting witnesses in the presence of the Trustmaker.
[[end]]
@line ________________________________________
@line Witness 1 Signature
@line Printed Name: ___________________________
@line Address: ________________________________
@line ________________________________________
@line Witness 2 Signature
@line Printed Name: ___________________________
@line Address: ________________________________

@sub Notary Acknowledgment

// Delaware short form, 29 Del. C. 4329 (individual capacity)
@line State of Delaware
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________

[[elif signing_state=DISTRICT_COLUMBIA]]

@sub Notary Acknowledgment

// District of Columbia short form, D.C. Code 1-1231.15 (individual capacity)
@line District of Columbia
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Seal)
@line Title of office: ________________________________
@line My commission expires: ____________________

[[elif signing_state=FLORIDA]]

@sub Witnesses

[[if is_joint]]
@line The Trustmakers signed this instrument as their Revocable Living Trust, or acknowledged their prior signatures, in our presence. We each sign this Trust Agreement as an attesting witness in the presence of the Trustmakers and in the presence of each other.
[[else]]
@line The Trustmaker signed this instrument as the Trustmaker's Revocable Living Trust, or acknowledged the Trustmaker's prior signature, in our presence. We each sign this Trust Agreement as an attesting witness in the presence of the Trustmaker and in the presence of each other.
[[end]]
@line ________________________________________
@line Witness 1 Signature
@line Printed Name: ___________________________
@line Address: ________________________________
@line ________________________________________
@line Witness 2 Signature
@line Printed Name: ___________________________
@line Address: ________________________________

@sub Notary Acknowledgment

@line STATE OF FLORIDA
@line COUNTY OF ____________________
@line The foregoing instrument was acknowledged before me by means of [  ] physical presence or [  ] online notarization this _____ day of ____________________, 20____, by ______________________________________, who is [  ] personally known to me or [  ] has produced ______________________________ as identification.
@line ________________________________________
@line Signature of Notary Public - State of Florida
@line Printed Name: ___________________________
@line Commission No.: _________________________
@line My Commission Expires: _________________
@line (Seal)

[[elif signing_state=GEORGIA]]

@sub Notary Acknowledgment

@line STATE OF GEORGIA
@line COUNTY OF ____________________
@line This instrument was acknowledged before me on ____________________, 20____, by ______________________________________.
@line ________________________________________
@line Notary Public
@line My Commission Expires: _________________
@line (Seal)

[[elif signing_state=HAWAII]]

@sub Notary Acknowledgment

// Hawaii, HRS 502-41 (form 6) and 502-42 (individual acknowledgment); certificate elements per HRS 456-21
@line State of Hawaii
@line City and County of / County of ____________________________
@line On ____________________, before me personally appeared ____________________________, to me personally known or proved to me through satisfactory evidence of identity, who, being by me duly sworn or affirmed, did say that such person executed the foregoing instrument as the free act and deed of such person.
@line ________________________________________
@line Notary Public, State of Hawaii
@line Printed Name: ____________________________
@line ______________ Judicial Circuit
@line My Commission Expires: ____________________
@line (Seal)
@line Doc. Date: __________________   # Pages: ______
@line Document Description: Revocable Living Trust Agreement

[[elif signing_state=IDAHO]]

@sub Notary Acknowledgment

// Idaho short form, Idaho Code 51-116(1) (individual capacity)
@line State of Idaho
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notary public
@line (Stamp)
@line My commission expires: ____________________

[[elif signing_state=ILLINOIS]]

@sub Notary Acknowledgment

@line STATE OF ILLINOIS
@line COUNTY OF ____________________
@line This instrument was acknowledged before me on ____________________, 20____, by ______________________________________.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Commission Expires: _________________

[[elif signing_state=INDIANA]]

@sub Notary Acknowledgment

// Indiana, IC 33-42-9-12 (individual acknowledgment; certificate elements per 33-42-9-12(a)-(b))
@line State of Indiana
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line Printed name: ____________________________
@line Title of office: ________________________________
@line Commission number: ____________________
@line My commission expires: ____________________
@line Indiana county of commission (or of employment, if a nonresident): ____________________
@line (Seal)

[[elif signing_state=IOWA]]

@sub Notary Acknowledgment

// Iowa short form, Iowa Code 9B.16(1) (individual capacity)
@line State of Iowa
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________

[[elif signing_state=KANSAS]]

@sub Notary Acknowledgment

// Kansas short form, K.A.R. 7-43-17(a)(1) (individual capacity) (verify against official code)
@line State of Kansas
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Official stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________

[[elif signing_state=KENTUCKY]]

@sub Notary Acknowledgment

@line STATE OF KENTUCKY
@line COUNTY OF ____________________
@line The foregoing instrument was acknowledged before me this _____ day of ____________________, 20____, by ______________________________.
@line __________________________________
@line Notary Public
@line Printed Name: ____________________
@line My Commission Expires: __________Commission No.: __________________
@line Authority: KRS Chapter 423

[[elif signing_state=LOUISIANA]]

@sub Notary Acknowledgment

@line STATE OF LOUISIANA
@line PARISH OF ____________________
@line On this _____ day of ____________________, 20____, before me personally appeared ______________________________, to me known to be the person described in and who executed the foregoing instrument, and acknowledged that the person executed it as the person's free act and deed.
@line __________________________________
@line Notary Public
@line Printed Name: ____________________
@line Notary/Bar No.: __________________
@line Authority: La. R.S. 35:511

[[elif signing_state=MAINE]]

@sub Notary Acknowledgment

// Maine short form, 4 M.R.S. 1917(1) (individual capacity); printed name required by 1916(1)(F)
@line State of Maine
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line Printed name: ________________________________
@line (Stamp, if any)
@line Title of office: ________________________________
@line My commission expires: ____________________

[[elif signing_state=MARYLAND]]

@sub Notary Acknowledgment

// Maryland short form, State Gov't 18-216(b) (individual capacity)
@line State of Maryland
@line County/City of ____________________________
@line This record was acknowledged before me on the _____ day of ____________________, 20____ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line Title of office: ________________________________
@line (Stamp)
@line My commission expires: ____________________

[[elif signing_state=MASSACHUSETTS]]

@sub Notary Acknowledgment

// M.G.L. c. 222, 15(b) acknowledgment; printed name and expiration per c. 222, 8(a)
@line Commonwealth of Massachusetts
@line County of ____________________________
@line On this ______ day of ____________________, 20____, before me, the undersigned notary public, ____________________________ (name of document signer) personally appeared, proved to me through satisfactory evidence of identification, which were ____________________________, to be the person whose name is signed on the preceding or attached document, and acknowledged to me that (he) (she) signed it voluntarily for its stated purpose.
@line ________________________________________
@line Official signature and seal of notary public
@line Printed name: ________________________________
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=MICHIGAN]]

@sub Notary Acknowledgment

// Michigan Law on Notarial Acts; no statutory short form; MCL 55.287(2) statements
@line State of Michigan
@line County of ____________________________
@line Acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notary public
@line Printed name of notary public (exactly as on commission application): ________________________________
@line Notary public, State of Michigan, County of ____________________.
@line My commission expires ____________________.
@line Acting in the County of ____________________.
@line Date of notarial act: ____________________

[[elif signing_state=MINNESOTA]]

@sub Notary Acknowledgment

@line STATE OF MINNESOTA
@line COUNTY OF ____________________
@line This instrument was acknowledged before me on ____________________, 20____, by ______________________________.
@line __________________________________
@line Signature of Notarial Officer
@line Title: ___________________________
@line My Commission Expires: __________
@line (Seal)
@line Authority: Minn. Stat. §§ 358.47-.48

[[elif signing_state=MISSISSIPPI]]

@sub Notary Acknowledgment

@line STATE OF MISSISSIPPI
@line COUNTY OF ____________________
@line Personally appeared before me, the undersigned authority, ______________________________, who acknowledged that the person signed and delivered the foregoing instrument on the date stated therein as the person's voluntary act and deed.
@line Given under my hand and official seal this _____ day of ____________________, 20____.
@line __________________________________
@line Notary Public
@line My Commission Expires: __________
@line (Seal)
@line Authority: Mississippi acknowledgment practice; Miss. notary law

[[elif signing_state=MISSOURI]]

@sub Notary Acknowledgment

@line STATE OF MISSOURI
@line COUNTY OF ____________________
@line On this _____ day of ____________________, 20____, before me personally appeared ______________________________, to me known to be the person described in and who executed the foregoing instrument, and acknowledged that the person executed the same as the person's free act and deed.
@line __________________________________
@line Notary Public
@line My Commission Expires: __________
@line (Seal)
@line Authority: RSMo 442.210(1); 486.330

[[elif signing_state=MONTANA]]

@sub Notary Acknowledgment

// Montana short form, MCA 1-5-610(1) (individual capacity)
@line State of Montana
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Official stamp)
@line Printed name and title of officer (if not shown in stamp): ________________________________

[[elif signing_state=NEBRASKA]]

@sub Notary Acknowledgment

// Nebraska Statutory Short Form of Acknowledgment, Neb. Rev. Stat. 64-206(1)
@line State of Nebraska
@line County of ____________________________
@line The foregoing instrument was acknowledged before me this ____________________ by ____________________________.
@line ________________________________________
@line Signature of notary public
@line Title or rank: ________________________________
@line (Seal)
@line My commission expires: ____________________

[[elif signing_state=NEVADA]]

@sub Notary Acknowledgment

// Nevada short form, NRS 240.166 (individual capacity)
@line State of Nevada
@line County of ____________________________
@line This instrument was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Seal, if any)
@line Title and rank (optional): ________________________________

[[elif signing_state=NEW_HAMPSHIRE]]

@sub Notary Acknowledgment

// New Hampshire short form, RSA 456-B:8, I (individual capacity)
@line State of New Hampshire
@line County of ____________________________
@line This instrument was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Seal, if any)
@line Title (and Rank): ________________________________
@line My commission expires: ____________________

[[elif signing_state=NEW_JERSEY]]

@sub Notary Acknowledgment

@line State of New Jersey
@line County of ______________________________
@line The foregoing instrument was acknowledged before me on this _____ day of ____________________, 20____, by ________________________________________________.
@line ____________________________________________
@line Notary Public
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=NEW_MEXICO]]

@sub Notary Acknowledgment

// New Mexico short form, NMSA 1978 § 14-14A-15(A) (individual capacity); commission number required by § 14-14A-14(A)(5)
@line State of New Mexico
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line Commission number: ____________________
@line My commission expires: ____________________

[[elif signing_state=NEW_YORK]]

@sub Notary Acknowledgment

// New York uniform form, Real Property Law § 309-a(1); Executive Law § 137 (verify against official code)
@line State of New York
@line County of ____________________________
@line On the _____ day of ____________________ in the year 20____, before me, the undersigned, personally appeared ____________________________, personally known to me or proved to me on the basis of satisfactory evidence to be the individual(s) whose name(s) is (are) subscribed to the within instrument and acknowledged to me that he/she/they executed the same in his/her/their capacity(ies), and that by his/her/their signature(s) on the instrument, the individual(s), or the person upon behalf of which the individual(s) acted, executed the instrument.
@line ________________________________________
@line Notary Public
@line Printed name: ____________________________
@line Notary Public, State of New York
@line Qualified in ____________________ County
@line Registration No.: ____________________
@line My commission expires: ____________________

[[elif signing_state=NORTH_CAROLINA]]

@sub Notary Acknowledgment

@line ____________________________ County, North Carolina
@line I certify that the following person(s) personally appeared before me this day, each acknowledging to me that he or she signed the foregoing document: ________________________________________________.
@line Date: ____________________
@line ____________________________________________
@line Notary Public
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=NORTH_DAKOTA]]

@sub Notary Acknowledgment

// North Dakota short form, N.D.C.C. § 44-06.1-19(1) (individual capacity)
@line State of North Dakota
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________

[[elif signing_state=OHIO]]

@sub Notary Acknowledgment

@line State of Ohio
@line County of ______________________________
@line The foregoing instrument was acknowledged before me this _____ day of ____________________, 20____, by ________________________________________________.
@line ____________________________________________
@line Notary Public
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=OKLAHOMA]]

@sub Notary Acknowledgment

// Oklahoma short form, 49 O.S. § 119(1) (individual capacity); seal, commission number and expiration, 49 O.S. § 5(A)
@line State of Oklahoma
@line County of ____________________________
@line This instrument was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Seal)
@line Title (and Rank): ________________________________
@line Commission No.: ____________________
@line My commission expires: ____________________

[[elif signing_state=OREGON]]

@sub Notary Acknowledgment

// Oregon short form, ORS 194.285(1) (individual capacity)
@line State of Oregon
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________

[[elif signing_state=PENNSYLVANIA]]

@sub Notary Acknowledgment

// Pennsylvania short form, 57 Pa.C.S. § 316(1) (individual capacity)
@line Commonwealth of Pennsylvania
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________

[[elif signing_state=RHODE_ISLAND]]

@sub Notary Acknowledgment

@line State of Rhode Island
@line County of ______________________________
@line On this _____ day of ____________________, 20____, before me, the undersigned notary public, personally appeared ________________________________________________, proved to me through satisfactory evidence of identification to be the person whose name is signed on the preceding or attached document, and acknowledged that the person signed it voluntarily for its stated purpose.
@line ____________________________________________
@line Notary Public / Authorized Officer
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=SOUTH_CAROLINA]]

@sub Notary Acknowledgment

// South Carolina statutory short form, S.C. Code § 26-3-70(1); name, seal and expiration, §§ 26-1-60, 26-1-90(B)
@line State of South Carolina
@line County of ____________________________
@line The foregoing instrument was acknowledged before me this ____________________ by ____________________________.
@line ________________________________________
@line Signature of notary public
@line Notary Public for South Carolina
@line Printed name: ____________________________
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=SOUTH_DAKOTA]]

@sub Notary Acknowledgment

// South Dakota form, SDCL § 18-5-8 (individual); officer's name, seal, title and expiration, § 18-5-13
@line State of South Dakota
@line County of ____________________________
@line On this the _____ day of ____________________, 20____, before me, ____________________________, the undersigned officer, personally appeared ____________________________, known to me or satisfactorily proven to be the person(s) whose name(s) is (are) subscribed to the within instrument and acknowledged that he, she or they executed the same for the purposes therein contained.
@line In witness whereof I hereunto set my hand and official seal.
@line ________________________________________
@line Signature of notary public
@line Printed name: ____________________________
@line (Seal)
@line Title of officer: ________________________________
@line My commission expires: ____________________

[[elif signing_state=TENNESSEE]]

@sub Notary Acknowledgment

// Tennessee form, T.C.A. § 66-22-107 (natural person); § 66-22-114 (verify against official code)
@line State of Tennessee
@line County of ____________________________
@line Personally appeared before me, ____________________________, a Notary Public of said County, ____________________________, with whom I am personally acquainted (or proved to me on the basis of satisfactory evidence), and who acknowledged that such person executed the within instrument for the purposes therein contained.
@line Witness my hand, at office, this ______ day of __________________, 20____.
@line ________________________________________
@line Notary Public
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=TEXAS]]

@sub Notary Acknowledgment

// Texas short form, Civ. Prac. & Rem. Code § 121.008(b)(1) (individual)
@line State of Texas
@line County of ____________________________
@line This instrument was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Notary Public, State of Texas
@line Notary's printed name: ________________________________
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=UTAH]]

@sub Notary Acknowledgment

// Utah form, Utah Code § 46-1-6.5(3) (acknowledgment)
@line State of Utah
@line County of ____________________________
@line On this ______ day of ____________________, in the year ________, before me, ____________________________, a notary public, personally appeared ____________________________, proved on the basis of satisfactory evidence to be the person(s) whose name(s) (is/are) subscribed to in this document, and acknowledged (he/she/they) executed the same.
@line ________________________________________
@line Notary Signature
@line (Notary's Official Seal)

[[elif signing_state=VERMONT]]

@sub Notary Acknowledgment

// Vermont short form, 26 V.S.A. § 5368(1) (individual capacity); § 5367
@line State of Vermont
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notary public
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________
@line Printed name and commission number (if no stamp is affixed): ________________________________

[[elif signing_state=VIRGINIA]]

@sub Notary Acknowledgment

// Virginia short form, Va. Code § 55.1-621(1); § 47.1-16 (registration number per Notary Handbook)
@line Commonwealth of Virginia
@line City/County of ____________________________
@line The foregoing instrument was acknowledged before me this ______ day of __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Notary registration number: ____________________
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=WASHINGTON]]

@sub Notary Acknowledgment

// Washington short form, RCW 42.45.140(1) (individual capacity)
@line State of Washington
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notary public
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________

[[elif signing_state=WEST_VIRGINIA]]

@sub Notary Acknowledgment

// West Virginia short form, W. Va. Code § 39-4-16(1) (individual capacity); § 39-4-15
@line State of West Virginia
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________

[[elif signing_state=WISCONSIN]]

@sub Notary Acknowledgment

// Wisconsin short form, Wis. Stat. § 140.16(1) (individual capacity); § 140.15
@line State of Wisconsin
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Stamp)
@line Title of office: ________________________________
@line My commission expires: ____________________

[[elif signing_state=WYOMING]]

@sub Notary Acknowledgment

// Wyoming short form, W.S. 32-3-115(a)(i) (individual capacity); § 32-3-114
@line State of Wyoming
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line (Stamp)  Signature of notarial officer
@line Title (and Rank): ________________________________
@line My commission expires: ____________________

[[end]]
`;

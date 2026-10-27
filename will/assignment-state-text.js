window.ASSIGNMENT_SHARED = window.ASSIGNMENT_SHARED || {};
// ==========================================================================
//  TOVAKIN  |  GENERAL ASSIGNMENT  |  STATE NOTARY ACKNOWLEDGMENTS (19 Oct 2026)
//  Greg: every state gets its own acknowledgment for an individual signer (the Trustmakers sign
//  personally), using each state's statutory or customary form; where in doubt, the state's own block.
//  California keeps its Civ. Code 1189 block in will/assignment-template.js. Blanks are for the notary.
// ==========================================================================
window.ASSIGNMENT_SHARED['assignment_ack'] = String.raw`
[[if signing_state=ALABAMA]]
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
@line State of Arizona
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=ARKANSAS]]
// Arkansas, Ark. Code 16-47-107(b) (individual acknowledgment); seal and expiration per Ark. Code 21-14-107, 21-14-108
@line State of Arkansas
@line County of ____________________________
@line On this ______ day of __________________, 20____, before me, a Notary Public, appeared the within named ____________________________, to me personally well known (or satisfactorily proven to be such person), who stated and acknowledged that he/she/they had so signed, executed and delivered said foregoing instrument for the consideration, uses and purposes therein mentioned and set forth.
@line IN TESTIMONY WHEREOF, I have hereunto set my hand and official seal this ______ day of __________________, 20____.
@line ________________________________________
@line Notary Public
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=COLORADO]]
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
@line State of Connecticut
@line County of ____________________________    ss. ______________ (town)
@line The foregoing instrument was acknowledged before me this ______ day of __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public / Commissioner of the Superior Court
@line Printed Name: ____________________________
@line My Commission Expires (if Notary): ____________________
@line (Seal)
[[elif signing_state=DELAWARE]]
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
// District of Columbia short form, D.C. Code 1-1231.15 (individual capacity)
@line District of Columbia
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Seal)
@line Title of office: ________________________________
@line My commission expires: ____________________
[[elif signing_state=FLORIDA]]
@line State of Florida
@line County of ____________________________
@line The foregoing instrument was acknowledged before me by means of ☐ physical presence or ☐ online notarization, this ______ day of __________________, 20____, by ____________________________.
@line ________________________________________
@line Signature of Notary Public – State of Florida
@line Print, Type, or Stamp Commissioned Name of Notary Public: ____________________________
@line Personally Known ☐  OR  Produced Identification ☐
@line Type of Identification Produced: ____________________
@line (Seal)
[[elif signing_state=GEORGIA]]
@line State of Georgia
@line County of ____________________________
@line Acknowledged in my presence on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=HAWAII]]
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
@line Document Description: General Assignment of Personal Property to Trust
[[elif signing_state=IDAHO]]
// Idaho short form, Idaho Code 51-116(1) (individual capacity)
@line State of Idaho
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notary public
@line (Stamp)
@line My commission expires: ____________________
[[elif signing_state=ILLINOIS]]
@line State of Illinois
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=INDIANA]]
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
@line Commonwealth of Kentucky
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public, State at Large
@line Printed Name: ____________________________
@line Notary ID Number: ____________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=LOUISIANA]]
@line State of Louisiana
@line Parish of ____________________________
BE IT KNOWN that on __________________, 20____, before me, the undersigned Notary Public, and in the presence of the undersigned competent witnesses, personally came and appeared the Assignor or Assignors named above, who signed this Assignment, together with any spouse who signed the Consent of Spouse, and the Trustee or Trustees named below, who accepted it on behalf of the Trust.
@line ACCEPTED on behalf of the Trust:
@line ________________________________________
@line ____________________________, Trustee
@line ________________________________________
@line ____________________________, Trustee (if more than one)
@line WITNESSES:
@line ________________________________________
@line Printed Name: ____________________________
@line ________________________________________
@line Printed Name: ____________________________
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line Notary Identification / Bar Roll No.: ____________________
@line (Seal)
[[elif signing_state=MAINE]]
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
@line State of Minnesota
@line County of ____________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public (Title and Rank)
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=MISSISSIPPI]]
@line State of Mississippi
@line County of ____________________________
@line Personally appeared before me, the undersigned authority in and for the said county and state, on this ______ day of __________________, 20____, within my jurisdiction, the within named ____________________________, who acknowledged that he/she/they executed the above and foregoing instrument.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=MISSOURI]]
@line State of Missouri
@line County (and/or City) of ____________________________
@line On this ______ day of __________________, 20____, before me personally appeared ____________________________, to me known to be the person(s) described in and who executed the foregoing instrument, and acknowledged that he/she/they executed the same as his/her/their free act and deed.
@line In testimony whereof, I have hereunto set my hand and affixed my official seal in the County (and/or City) of ______________, State of Missouri, the day and year first above written.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=MONTANA]]
// Montana short form, MCA 1-5-610(1) (individual capacity)
@line State of Montana
@line County of ____________________________
@line This record was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Official stamp)
@line Printed name and title of officer (if not shown in stamp): ________________________________
[[elif signing_state=NEBRASKA]]
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
// Nevada short form, NRS 240.166 (individual capacity)
@line State of Nevada
@line County of ____________________________
@line This instrument was acknowledged before me on ____________________ by ____________________________.
@line ________________________________________
@line Signature of notarial officer
@line (Seal, if any)
@line Title and rank (optional): ________________________________
[[elif signing_state=NEW_HAMPSHIRE]]
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
@line State of New Jersey
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=NEW_MEXICO]]
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
@line ______________ County, North Carolina
@line I certify that the following person(s) personally appeared before me this day, each acknowledging to me that he or she signed the foregoing document: ____________________________.
@line Date: __________________, 20____
@line ________________________________________
@line Printed Name: ____________________________, Notary Public
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=NORTH_DAKOTA]]
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
@line State of Ohio
@line County of ____________________________
@line The foregoing instrument was acknowledged before me this ______ day of __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=OKLAHOMA]]
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
@line State of Rhode Island
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line Commission/ID No.: ____________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=SOUTH_CAROLINA]]
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
// Utah form, Utah Code § 46-1-6.5(3) (acknowledgment)
@line State of Utah
@line County of ____________________________
@line On this ______ day of ____________________, in the year ________, before me, ____________________________, a notary public, personally appeared ____________________________, proved on the basis of satisfactory evidence to be the person(s) whose name(s) (is/are) subscribed to in this document, and acknowledged (he/she/they) executed the same.
@line ________________________________________
@line Notary Signature
@line (Notary's Official Seal)
[[elif signing_state=VERMONT]]
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

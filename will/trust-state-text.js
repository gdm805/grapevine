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

@line THE STATE OF ______________________________
@line ____________________________ COUNTY
@line I, ______________________________________________, a ______________________________________________, hereby certify that ______________________________________________, whose name is signed to the foregoing instrument, and who is known to me, acknowledged before me on this day that, being informed of the contents of the instrument, he or she executed the same voluntarily on the day the same bears date.
@line Given under my hand this _____ day of ____________________, 20____.
@line ____________________________________________
@line Notary Public / Authorized Officer
@line My Commission Expires: ____________________

[[elif signing_state=ALASKA]]

@sub Notary Acknowledgment

@line STATE OF ALASKA
@line ____________________________ JUDICIAL DISTRICT
@line The foregoing instrument was acknowledged before me this _____ day of ____________________, 20____, by ________________________________________________.
@line ____________________________________________
@line Notary Public in and for the State of Alaska
@line My Commission Expires: ____________________

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

@line STATE OF ARKANSAS
@line COUNTY OF _____________________________
@line On this the _____ day of ____________________, 20____, before me, ______________________________________________, the undersigned Notary Public, personally appeared ______________________________________________, known to me (or satisfactorily proven) to be the person whose name is subscribed to the foregoing instrument and acknowledged that he or she executed the same for the purposes therein contained.
@line In witness whereof I hereunto set my hand and official seal.
@line ____________________________________________
@line Notary Public
@line My Commission Expires: ____________________
@line (Seal)

[[elif signing_state=CALIFORNIA]]

@sub Notary Acknowledgment

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

@line County of ____________
@line _______
@line Signed and acknowledged before me on ____________________ (date) by ______________________________________________ (name(s) of individual(s) making statement).
@line __________________________________________
@line Signature of Notarial Officer
@line Title of Office: __________________________
@line My Commission Expires: ______________
@line (Seal)

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

@line State of Delaware
@line County of ____________________
@line This record was acknowledged before me on ____________________, 20____, by ______________________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line (Seal)
@line Title of Office: _________________________
@line My Commission Expires: __________________

[[elif signing_state=DISTRICT_COLUMBIA]]

@sub Notary Acknowledgment

@line District of Columbia
@line This record was acknowledged before me on ____________________, 20____, by ______________________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line (Seal)
@line Title of Office: _________________________
@line My Commission Expires: __________________

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

@line STATE OF HAWAII
@line COUNTY OF ____________________
@line On this _____ day of ____________________, 20____, before me personally appeared ______________________________________, to me personally known, who, being by me duly sworn or affirmed, did say that the person executed the foregoing instrument as the person's free act and deed.
@line ________________________________________
@line Notary Public, State of Hawaii
@line Printed Name: ___________________________
@line My Commission Expires: _________________
@line (Seal)

[[elif signing_state=IDAHO]]

@sub Notary Acknowledgment

@line State of State of Idaho
@line County of ____________________
@line This record was acknowledged before me on ____________________, 20____, by ______________________________________.
@line ________________________________________
@line Signature of Notary Public
@line (Seal)
@line Title of Office: _________________________
@line My Commission Expires: __________________

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

@line STATE OF INDIANA
@line COUNTY OF ____________________
@line This record was acknowledged before me on ____________________, 20____, by ______________________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line Printed Name: ___________________________
@line Title: __________________________________
@line Commission Number: _____________________
@line My Commission Expires: _________________
@line County of Commission: __________________
@line (Seal)

[[elif signing_state=IOWA]]

@sub Notary Acknowledgment

@line State of State of Iowa
@line County of ____________________
@line This record was acknowledged before me on ____________________, 20____, by ______________________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line (Seal)
@line Title of Office: _________________________
@line My Commission Expires: __________________

[[elif signing_state=KANSAS]]

@sub Notary Acknowledgment

@line STATE OF KANSAS
@line COUNTY OF ____________________
@line This record was acknowledged before me on ____________________, 20____, by ______________________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line (Seal)
@line Title of Office: _________________________
@line My Commission Expires: _________________

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

@line STATE OF MAINE
@line COUNTY OF ____________________
@line This record was acknowledged before me on ____________________, 20____, by ______________________________.
@line __________________________________
@line Signature of Notarial Officer
@line Printed Name: ____________________
@line Title of Office: __________________
@line My Commission Expires: __________
@line (Seal)
@line Authority: 4 M.R.S. § 1917(1)

[[elif signing_state=MARYLAND]]

@sub Notary Acknowledgment

@line STATE OF MARYLAND
@line COUNTY OF ____________________
@line I certify that the following person personally appeared before me this _____ day of ____________________, 20____: ______________________________, and acknowledged signing the foregoing record for the purposes stated therein.
@line __________________________________
@line Notary Public
@line Printed Name: ____________________
@line My Commission Expires: __________
@line (Seal)
@line Authority: Md. Code, State Gov't, Title 18 (RULONA)

[[elif signing_state=MASSACHUSETTS]]

@sub Notary Acknowledgment

@line COMMONWEALTH OF MASSACHUSETTS
@line COUNTY OF ____________________
@line On this _____ day of ____________________, 20____, before me, the undersigned notary public, ______________________________ personally appeared, proved to me through satisfactory evidence of identification, which was ______________________________, to be the person whose name is signed on the preceding or attached document, and acknowledged to me that the person signed it voluntarily for its stated purpose.
@line __________________________________
@line Notary Public
@line Printed Name: ____________________
@line My Commission Expires: __________
@line (Seal)
@line Authority: M.G.L. c. 222, § 15(b)

[[elif signing_state=MICHIGAN]]

@sub Notary Acknowledgment

@line STATE OF MICHIGAN
@line COUNTY OF ____________________
@line This record was acknowledged before me on ____________________, 20____, by ______________________________.
@line __________________________________
@line Notary Public, State of Michigan
@line County of Commission: ____________
@line My Commission Expires: __________
@line Acting in County of: ______________
@line Authority: Michigan Law on Notarial Acts, MCL 55.287

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

@line STATE OF MONTANA
@line COUNTY OF ____________________
@line This record was acknowledged before me on ____________________, 20____, by ______________________________.
@line __________________________________
@line Signature of Notarial Officer
@line Printed Name: ____________________
@line Title of Office: __________________
@line My Commission Expires: __________
@line (Seal)
@line Authority: Montana RULONA short-form acknowledgment

[[elif signing_state=NEBRASKA]]

@sub Notary Acknowledgment

@line State of Nebraska
@line County of ______________________________
@line The foregoing instrument was acknowledged before me this _____ day of ____________________, 20____, by ________________________________________________.
@line ____________________________________________
@line Notary Public
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=NEVADA]]

@sub Notary Acknowledgment

@line State of Nevada
@line County of ______________________________
@line This instrument was acknowledged before me on ____________________ by ________________________________________________.
@line ____________________________________________
@line Notary Public
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=NEW_HAMPSHIRE]]

@sub Notary Acknowledgment

@line State of New Hampshire
@line County of ______________________________
@line This instrument was acknowledged before me on ____________________ by ________________________________________________.
@line ____________________________________________
@line Notary Public
@line My commission expires: ____________________
@line (Seal)

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

@line State of New Mexico
@line County of ______________________________
@line This record was acknowledged before me on ____________________ by ________________________________________________.
@line ____________________________________________
@line Notary Public
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=NEW_YORK]]

@sub Notary Acknowledgment

@line State of New York
@line County of ______________________________
@line On the _____ day of ____________________, 20____, before me, the undersigned, personally appeared ________________________________________________, personally known to me or proved to me on the basis of satisfactory evidence to be the individual whose name is subscribed to the foregoing instrument and acknowledged to me that the individual executed the same in the individual’s capacity, and that by the individual’s signature on the instrument, the individual, or the person upon behalf of which the individual acted, executed the instrument.
@line ____________________________________________
@line Notary Public
@line My commission expires: ____________________
@line (Seal)

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

@line State of North Dakota
@line County of ______________________________
@line This record was acknowledged before me on ____________________ by ________________________________________________.
@line ____________________________________________
@line Notary Public
@line My commission expires: ____________________
@line (Seal)

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

@line State of Oklahoma
@line County of ______________________________
@line This instrument was acknowledged before me on this _____ day of ____________________, 20____, by ________________________________________________.
@line ____________________________________________
@line Notary Public
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=OREGON]]

@sub Notary Acknowledgment

@line State of Oregon
@line County of ______________________________
@line This record was acknowledged before me on ____________________ by ________________________________________________.
@line ____________________________________________
@line Notary Public / Authorized Officer
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=PENNSYLVANIA]]

@sub Notary Acknowledgment

@line State of Pennsylvania
@line County of ______________________________
@line On this _____ day of ____________________, 20____, before me, the undersigned officer, personally appeared ________________________________________________, known to me or satisfactorily proven to be the person whose name is subscribed to the within instrument, and acknowledged that the person executed the same for the purposes therein contained.
@line ____________________________________________
@line Notary Public / Authorized Officer
@line My commission expires: ____________________
@line (Seal)

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

@line State of South Carolina
@line County of ______________________________
@line The foregoing instrument was acknowledged before me this _____ day of ____________________, 20____, by ________________________________________________.
@line ____________________________________________
@line Notary Public / Authorized Officer
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=SOUTH_DAKOTA]]

@sub Notary Acknowledgment

@line State of South Dakota
@line County of ______________________________
@line This record was acknowledged before me on ____________________ by ________________________________________________.
@line ____________________________________________
@line Notary Public / Authorized Officer
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=TENNESSEE]]

@sub Notary Acknowledgment

@line State of Tennessee
@line County of ______________________________
@line Personally appeared before me, ________________________________________________, with whom I am personally acquainted or proved to me on the basis of satisfactory evidence, and who acknowledged that the person executed the foregoing instrument for the purposes therein contained.
@line ____________________________________________
@line Notary Public / Authorized Officer
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=TEXAS]]

@sub Notary Acknowledgment

@line State of Texas
@line County of ______________________________
@line This instrument was acknowledged before me on ____________________ by ________________________________________________.
@line ____________________________________________
@line Notary Public / Authorized Officer
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=UTAH]]

@sub Notary Acknowledgment

@line State of Utah
@line County of ______________________________
@line This record was acknowledged before me on ____________________ by ________________________________________________.
@line ____________________________________________
@line Notary Public / Authorized Officer
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=VERMONT]]

@sub Notary Acknowledgment

@line State of Vermont
@line County of ______________________________
@line This record was acknowledged before me on ____________________ by ________________________________________________.
@line ____________________________________________
@line Notary Public / Authorized Officer
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=VIRGINIA]]

@sub Notary Acknowledgment

@line State of Virginia
@line County of ______________________________
@line The foregoing instrument was acknowledged before me this _____ day of ____________________, 20____, by ________________________________________________.
@line ____________________________________________
@line Notary Public / Authorized Officer
@line My commission expires: ____________________
@line (Seal)

[[elif signing_state=WASHINGTON]]

@sub Notary Acknowledgment

@line STATE OF WASHINGTON
@line COUNTY OF ____________________
@line This record was acknowledged before me on ____________________ by ________________________________.
@line __________________________________
@line Notary Public
@line Title of Office: ________________________________
@line My Commission Expires: ____________________
@line (Seal)

[[elif signing_state=WEST_VIRGINIA]]

@sub Notary Acknowledgment

@line STATE OF WEST VIRGINIA
@line COUNTY OF ____________________
@line This record was acknowledged before me on ____________________ by ________________________________.
@line __________________________________
@line Notarial Officer
@line Title of Office: ________________________________
@line My Commission Expires: ____________________
@line (Seal)

[[elif signing_state=WISCONSIN]]

@sub Notary Acknowledgment

@line STATE OF WISCONSIN
@line COUNTY OF ____________________
@line This record was acknowledged before me on ____________________ by ________________________________.
@line __________________________________
@line Notarial Officer
@line Title of Office: ________________________________
@line My Commission Expires: ____________________
@line (Seal)

[[elif signing_state=WYOMING]]

@sub Notary Acknowledgment

@line STATE OF WYOMING
@line COUNTY OF ____________________
@line This record was acknowledged before me on ____________________ by ________________________________.
@line __________________________________
@line Notarial Officer
@line Title (and Rank): ________________________________
@line My Commission Expires: ____________________
@line (Seal)

[[end]]
`;

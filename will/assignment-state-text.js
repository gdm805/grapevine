window.ASSIGNMENT_SHARED = window.ASSIGNMENT_SHARED || {};
// ==========================================================================
//  TOVAKIN  |  GENERAL ASSIGNMENT  |  STATE NOTARY ACKNOWLEDGMENTS (19 Oct 2026)
//  Greg: every state gets its own acknowledgment for an individual signer (the Trustmakers sign
//  personally), using each state's statutory or customary form; where in doubt, the state's own block.
//  California keeps its Civ. Code 1189 block in will/assignment-template.js. Blanks are for the notary.
// ==========================================================================
window.ASSIGNMENT_SHARED['assignment_ack'] = String.raw`
[[if signing_state=ALABAMA]]
@line State of Alabama
@line County of ____________________________
@line I, ____________________________, a Notary Public in and for said County in said State, hereby certify that ____________________________, whose name is signed to the foregoing instrument, and who is known to me, acknowledged before me on this day that, being informed of the contents of the instrument, he/she/they executed the same voluntarily on the day the same bears date.
@line Given under my hand and official seal this ______ day of __________________, 20____.
@line ________________________________________
@line Notary Public
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=ALASKA]]
@line State of Alaska
@line ______ Judicial District
@line The foregoing instrument was acknowledged before me this ______ day of __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public in and for the State of Alaska
@line Printed Name: ____________________________
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
@line State of Arkansas
@line County of ____________________________
@line On this ______ day of __________________, 20____, before me, ____________________________, the undersigned notary, personally appeared ____________________________, known to me or satisfactorily proven to be the person whose name is subscribed to the within instrument, and acknowledged that he/she/they executed the same for the purposes therein contained.
@line In witness whereof I hereunto set my hand and official seal.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=COLORADO]]
@line State of Colorado
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
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
@line State of Delaware
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=DISTRICT_COLUMBIA]]
@line District of Columbia, ss:
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public, District of Columbia
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
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
@line State of Hawaii
@line City and County of / County of ____________________________
@line On __________________, 20____, before me personally appeared ____________________________, to me personally known or proved to me through satisfactory evidence of identification, who acknowledged executing the foregoing instrument as a free act and deed.
@line Doc. Date: __________________   # Pages: ______
@line Document Description: General Assignment of Personal Property to Trust
@line Notary Name: ________________________   ______________ Circuit
@line ________________________________________
@line Notary Public, State of Hawaii
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=IDAHO]]
@line State of Idaho
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
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
@line State of Indiana
@line County of ____________________________
@line Before me, a Notary Public in and for said County and State, personally appeared ____________________________, who acknowledged the execution of the foregoing instrument, this ______ day of __________________, 20____.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line Commission Number: ____________________
@line County of Commission: ____________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=IOWA]]
@line State of Iowa
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public (Title of Office)
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=KANSAS]]
@line State of Kansas
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
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
BE IT KNOWN that on __________________, 20____, before me, the undersigned Notary Public, and in the presence of the undersigned competent witnesses, personally came and appeared the Assignor or Assignors named above, who signed this Assignment, and the Trustee or Trustees named below, who accepted it on behalf of the Trust.
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
@line State of Maine
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=MARYLAND]]
@line State of Maryland
@line County/City of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=MASSACHUSETTS]]
@line Commonwealth of Massachusetts
@line ____________________________, ss.
@line On ______ day of __________________, 20____, before me, the undersigned notary public, personally appeared ____________________________ (name of document signer), proved to me through satisfactory evidence of identification, which were ____________________, to be the person whose name is signed on the preceding or attached document, and acknowledged to me that (he)(she) signed it voluntarily for its stated purpose.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=MICHIGAN]]
@line State of Michigan
@line County of ____________________________
@line Acknowledged before me in ______________ County, Michigan, on __________________, 20____, by ____________________________.
@line ________________________________________
@line Printed Name: ____________________________
@line Notary Public, State of Michigan, County of ____________________
@line My Commission Expires: ____________________
@line Acting in the County of: ____________________
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
@line State of Montana
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line Residing at: ____________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=NEBRASKA]]
@line State of Nebraska
@line County of ____________________________
@line The foregoing instrument was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line General Notary
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=NEVADA]]
@line State of Nevada
@line County of ____________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=NEW_HAMPSHIRE]]
@line State of New Hampshire
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
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
@line State of New Mexico
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=NEW_YORK]]
@line State of New York
@line County of ____________________________
@line On the _____ day of __________________ in the year 20____, before me, the undersigned, personally appeared ____________________________, personally known to me or proved to me on the basis of satisfactory evidence to be the individual(s) whose name(s) is (are) subscribed to the within instrument and acknowledged to me that he/she/they executed the same in his/her/their capacity(ies), and that by his/her/their signature(s) on the instrument, the individual(s), or the person upon behalf of which the individual(s) acted, executed the instrument.
@line ________________________________________
@line Printed Name: ____________________________
@line Notary Public, State of New York
@line Reg./Official No.: ____________________
@line Qualified in ____________________ County
@line Commission Expires: ____________________
[[elif signing_state=NORTH_CAROLINA]]
@line ______________ County, North Carolina
@line I certify that the following person(s) personally appeared before me this day, each acknowledging to me that he or she signed the foregoing document: ____________________________.
@line Date: __________________, 20____
@line ________________________________________
@line Printed Name: ____________________________, Notary Public
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=NORTH_DAKOTA]]
@line State of North Dakota
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
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
@line State of Oklahoma
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=OREGON]]
@line State of Oregon
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public – State of Oregon
@line Printed Name: ____________________________
@line Commission No.: ____________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=PENNSYLVANIA]]
@line Commonwealth of Pennsylvania
@line County of ____________________________
@line On this, the ______ day of __________________, 20____, before me, the undersigned officer, personally appeared ____________________________, known to me (or satisfactorily proven) to be the person whose name is subscribed to the within instrument, and acknowledged that he/she/they executed the same for the purposes therein contained.
@line In witness whereof, I hereunto set my hand and official seal.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
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
@line State of South Carolina
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=SOUTH_DAKOTA]]
@line State of South Dakota
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=TENNESSEE]]
@line State of Tennessee
@line County of ____________________________
@line Personally appeared before me, ____________________________, a Notary Public of said County, ____________________________, with whom I am personally acquainted (or proved to me on the basis of satisfactory evidence), and who acknowledged that he/she/they executed the within instrument for the purposes therein contained.
@line Witness my hand and seal, at office, this ______ day of __________________, 20____.
@line ________________________________________
@line Notary Public
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=TEXAS]]
@line State of Texas
@line County of ____________________________
@line This instrument was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public, State of Texas
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=UTAH]]
@line State of Utah
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=VERMONT]]
@line State of Vermont
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line Commission/ID No.: ____________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=VIRGINIA]]
@line Commonwealth of Virginia
@line City/County of ____________________________
@line The foregoing instrument was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name of Notary: ____________________________
@line Notary Registration Number: ____________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=WASHINGTON]]
@line State of Washington
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public, State of Washington
@line Printed Name: ____________________________
@line Commission No.: ____________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=WEST_VIRGINIA]]
@line State of West Virginia
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=WISCONSIN]]
@line State of Wisconsin
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[elif signing_state=WYOMING]]
@line State of Wyoming
@line County of ____________________________
@line This record was acknowledged before me on __________________, 20____, by ____________________________.
@line ________________________________________
@line Notary Public
@line Printed Name: ____________________________
@line My Commission Expires: ____________________
@line (Seal)
[[end]]
`;

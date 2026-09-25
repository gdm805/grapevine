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
@line STATE OF ALABAMA
@line COUNTY OF ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line NOTARY PUBLIC
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=ALASKA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF ALASKA
@line ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public in and for the State of Alaska
@line My Commission Expires: ____________________


[[elif signing_state=ARIZONA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF ARIZONA
@line COUNTY OF ____________________________
@line Subscribed and sworn before me this ____________________________ by ____________________________.
@line ________________________________________
@line NOTARY PUBLIC
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=ARKANSAS]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF ARKANSAS
@line COUNTY OF ____________________________
@line Subscribed and sworn to before me on ____________________________ by ____________________________.
@line ________________________________________
@line NOTARY PUBLIC
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=CALIFORNIA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line A notary public or other officer completing this certificate verifies only the identity of the individual who signed the document to which this certificate is attached, and not the truthfulness, accuracy, or validity of that document.
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
@line STATE OF COLORADO
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line (Seal)
@line Title of Office: ____________________
@line My Commission Expires: ____________________


[[elif signing_state=CONNECTICUT]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF CONNECTICUT
@line COUNTY OF ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public / Commissioner of the Superior Court
@line My Commission Expires: ____________________


[[elif signing_state=DELAWARE]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF DELAWARE
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line (Seal)
@line Title of Office: ____________________
@line My Commission Expires: ____________________


[[elif signing_state=DISTRICT_COLUMBIA]]

@line Executed in the District of Columbia on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line DISTRICT OF COLUMBIA
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line Official Seal / Title of Office: ____________________
@line My Commission Expires: ____________________


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


[[elif signing_state=GEORGIA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF GEORGIA
@line COUNTY OF ____________________________
@line Sworn to and subscribed before me on ____________________________ by ____________________________.
@line ________________________________________
@line NOTARY PUBLIC
@line My Commission Expires: ____________________
@line (Seal)


[[elif signing_state=HAWAII]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF HAWAII
@line COUNTY OF ____________________________
@line Subscribed and sworn to (or affirmed) before me this ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public, State of Hawaii
@line My Commission Expires: ____________________
@line (Seal)


[[elif signing_state=IDAHO]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF IDAHO
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line (Seal)
@line Title of Office: ____________________
@line My Commission Expires: ____________________


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
@line STATE OF INDIANA
@line COUNTY OF ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line NOTARY PUBLIC
@line Printed Name: ____________________
@line Commission Number: ____________________
@line My Commission Expires: ____________________
@line (Seal)


[[elif signing_state=IOWA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF IOWA
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line (Seal)
@line Title of Office: ____________________
@line My Commission Expires: ____________________


[[elif signing_state=KANSAS]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF KANSAS
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Appointment Expires: ____________________


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
@line Notary Identification / Bar Roll No.: ____________________


[[elif signing_state=MAINE]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF MAINE
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line Printed Name: ____________________
@line Title of Office: ____________________
@line My Commission Expires: ____________________


[[elif signing_state=MARYLAND]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF MARYLAND
@line COUNTY OF ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line My Commission Expires: ____________________
@line (Seal)


[[elif signing_state=MASSACHUSETTS]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line COMMONWEALTH OF MASSACHUSETTS
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line My Commission Expires: ____________________
@line (Seal)


[[elif signing_state=MICHIGAN]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF MICHIGAN
@line COUNTY OF ____________________________
@line Subscribed and sworn to before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public, State of Michigan, County of ____________________
@line Acting in the County of ____________________________
@line My Commission Expires: ____________________


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
@line COUNTY OF ____________________________
@line On ____________________________, before me, the undersigned notary, personally appeared ____________________________, proved to me by satisfactory evidence to be the person who signed this document in my presence and who swore or affirmed that its contents are truthful and accurate to the best of the Affiant’s knowledge and belief.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=MONTANA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF MONTANA
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line (Seal)
@line Printed Name: ____________________
@line Title (and Rank): ____________________
@line My Commission Expires: ____________________


[[elif signing_state=NEBRASKA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF NEBRASKA
@line COUNTY OF ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line GENERAL NOTARY — State of Nebraska
@line My Commission Expires: ____________________


[[elif signing_state=NEVADA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF NEVADA
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line (Seal)
@line Title and Rank (optional): ____________________


[[elif signing_state=NEW_HAMPSHIRE]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF NEW HAMPSHIRE
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line (Seal)
@line Title (and Rank): ____________________
@line My Commission Expires: ____________________


[[elif signing_state=NEW_JERSEY]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF NEW JERSEY
@line COUNTY OF ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=NEW_MEXICO]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF NEW MEXICO
@line COUNTY OF ____________________________
@line Subscribed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=NEW_YORK]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF NEW YORK
@line COUNTY OF ____________________________
@line Sworn to before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public, State of New York
@line Qualified in ____________________ County
@line Commission Expires: ____________________


[[elif signing_state=NORTH_CAROLINA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF NORTH CAROLINA
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=NORTH_DAKOTA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF NORTH DAKOTA
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=OHIO]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF OHIO
@line COUNTY OF ____________________________
@line Sworn to or affirmed and subscribed before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=OKLAHOMA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF OKLAHOMA
@line COUNTY OF ____________________________
@line Subscribed and sworn to before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=OREGON]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF OREGON
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public - State of Oregon
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=PENNSYLVANIA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF PENNSYLVANIA
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=RHODE_ISLAND]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF RHODE ISLAND
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=SOUTH_CAROLINA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF SOUTH CAROLINA
@line COUNTY OF ____________________________
@line Sworn to and subscribed before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public for South Carolina
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=SOUTH_DAKOTA]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF SOUTH DAKOTA
@line COUNTY OF ____________________________
@line Subscribed and sworn to before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public - South Dakota
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=TENNESSEE]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF TENNESSEE
@line COUNTY OF ____________________________
@line Sworn to and subscribed before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=TEXAS]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF TEXAS
@line COUNTY OF ____________________________
@line Sworn to and subscribed before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public, State of Texas
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=UTAH]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF UTAH
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=VERMONT]]

@line Executed in {{signing_city}}, {{county}} County, {{state}}, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF VERMONT
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line (Seal)
@line My Commission Expires: ____________________


[[elif signing_state=VIRGINIA]]

@line Executed in {{signing_city}}, {{county}}, Virginia, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line CITY/COUNTY OF ____________________________
@line COMMONWEALTH OF VIRGINIA
@line The foregoing instrument was subscribed and sworn before me on ____________________________ by ____________________________.
@line ________________________________________
@line Notary Public
@line (Seal)
@line Notary Registration Number: ____________________    My Commission Expires: ____________________


[[elif signing_state=WASHINGTON]]

@line Executed in {{signing_city}}, {{county}} County, Washington, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF WASHINGTON
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notary Public
@line Official Stamp / Title of Office: ____________________
@line My Commission Expires: ____________________


[[elif signing_state=WEST_VIRGINIA]]

@line Executed in {{signing_city}}, {{county}} County, West Virginia, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF WEST VIRGINIA
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line Official Stamp / Title of Office: ____________________
@line My Commission Expires: ____________________


[[elif signing_state=WISCONSIN]]

@line Executed in {{signing_city}}, {{county}} County, Wisconsin, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF WISCONSIN
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line Official Stamp / Title of Office: ____________________
@line My Commission Expires: ____________________


[[elif signing_state=WYOMING]]

@line Executed in {{signing_city}}, {{county}} County, Wyoming, on {{signing_date}}.
@line ________________________________________
@line {{affiant_name}}, {{affiant_capacity}} / Affiant
@line STATE OF WYOMING
@line COUNTY OF ____________________________
@line Signed and sworn to (or affirmed) before me on ____________________________ by ____________________________.
@line ________________________________________
@line Signature of Notarial Officer
@line Official Stamp / Title (and Rank): ____________________
@line My Commission Expires: ____________________

[[end]]
`;
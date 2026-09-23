window.WILL_STATE_TEXT = String.raw`
// ==========================================================================
//  GRAPEVINE  |  STATE-SPECIFIC TEXT, used by BOTH the will and the pour-over will.
//
//  One section per state, taken from your file Will_Pour_Over_<State>.docx.
//  Everything in the will that is the same in every state lives in
//  will/will-template.js and will/pour-over-template.js. Only what changes from state to state is here.
//  The execution, witness and notary wording is the same for a will with a trust and a will without one.
//
//  Each section looks like this:
//
//      === Alabama
//      community: none        which community-property sentence to show in Section 6.02:
//                             quasi = "community or quasi-community property" (California)
//                             plain = "community property" (the other community property states)
//                             homestead = the Florida homestead sentence
//                             none = no sentence
//      no_contest: yes        yes shows the No-Contest Provision, no leaves it out (Florida)
//      witnesses: 2           how many witnesses (used in the signing steps)
//      notary: yes            yes = this state's will has a notary section (used in the signing steps)
//      --- tail
//      ...the execution, witness and notary text, using the same codes as the main template...
//
//  Extra code used here:  @line text   a short line with no extra spacing (like "STATE OF ALABAMA")
//  Blank lines to fill in by hand are typed as underscores.
//  The same text is used for the will and the pour-over will, so a state's signing formalities always match.
// ==========================================================================

=== Alabama
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Alabama. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, sign this Will as witnesses after witnessing the Testator sign this Will or acknowledge the Testator’s signature or this Will. We understand this instrument to be the Testator’s Last Will and Testament.

@sign Witness 1 Signature

@sign Printed Name

@sign Address

@sign Witness 2 Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament, that I sign it willingly as my free and voluntary act, and that I am eighteen years of age or older, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed and executed this instrument as the Testator’s Last Will and Testament, signed it willingly, and that each of us, in the presence and hearing of the Testator, signs as a witness; and to the best of our knowledge the Testator is eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@line STATE OF ALABAMA
@line COUNTY OF ____________________

Subscribed, sworn to and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the two witnesses, this ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== Alaska
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in the State of Alaska. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, sign this instrument as witnesses within a reasonable time after witnessing the Testator sign this Will or acknowledge the Testator's signature or this Will.

@sign Witness 1 Signature

@sign Printed Name

@sign Address

@sign Witness 2 Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Will, that I sign it willingly as my free and voluntary act, and that I am eighteen years of age or older, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signs and executes this instrument as the Testator's Will, signs it willingly, and that each of us, in the presence and hearing of the Testator, signs this Will as witness to the Testator's signing; and to the best of our knowledge the Testator is eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@line STATE OF ALASKA
@line _____ JUDICIAL DISTRICT

Subscribed, sworn to and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the two witnesses, this ____________________, 20____.

@sign Officer Authorized to Administer Oaths

@line [Official Seal / Capacity]

=== Arizona
community: plain
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Arizona. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, sign this Will within a reasonable time after witnessing the Testator sign this Will or acknowledge the Testator's signature or this Will.

@sign Witness 1 Signature

@sign Printed Name

@sign Address

@sign Witness 2 Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Will, that I do so willingly as my free and voluntary act, and that I am eighteen years of age or older, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signs and executes this instrument as the Testator's Will, signs it willingly, and that each of us, in the presence and hearing of the Testator, signs as witness to the Testator's signing; and to the best of our knowledge the Testator is eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@line STATE OF ARIZONA
@line COUNTY OF ____________________

Subscribed, sworn to and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the two witnesses, this ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== Arkansas
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Arkansas. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

The Testator declared to us that this instrument is the Testator's Last Will and Testament, signed or acknowledged the Will in our presence, and requested that we sign as witnesses. At the Testator's request and in the Testator's presence, we now sign as attesting witnesses.

@sign Witness 1 Signature

@sign Printed Name

@sign Address

@sign Witness 2 Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

@sub AFFIDAVIT OF ATTESTING WITNESSES

@line STATE OF ARKANSAS
@line COUNTY OF ____________________

We, the undersigned attesting witnesses, being duly sworn, state that {{name}} declared the attached instrument to be the Testator's Will; signed or acknowledged the Will in our presence; requested that we sign as witnesses; and that each of us signed the Will at the Testator's request and in the Testator's presence.

@sign Witness

@sign Witness

Subscribed and sworn before me on ____________________, 20____.

@sign Officer Authorized to Administer Oaths

@line [Seal / Commission information]

=== California
community: quasi
no_contest: yes
witnesses: 2
notary: no
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, California. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

On ____________________, 20____, {{name}} declared to us that this instrument is the Testator's Last Will and Testament. We were both present at the same time and witnessed the Testator sign this Will or acknowledge the Testator's signature or this Will. We understand that the instrument we sign is the Testator's Will, and we sign it as witnesses during the Testator's lifetime.

@sign Witness

@sign Witness

=== Colorado
community: none
no_contest: yes
witnesses: 2
notary: no
--- tail
// NOTE: your Will_Pour_Over_Colorado.docx has no text under "Witness Attestation" and ends with a
// "Self-Proving Affidavit" heading with nothing under it. I left the empty heading out of the will.
// Please add the Colorado attestation text (and affidavit, if you want one) here.
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Colorado. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

@sign Witness 1 Signature

@sign Printed Name

@sign Address

@sign Witness 2 Signature

@sign Printed Name

@sign Address

=== Connecticut
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Connecticut. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, attest this instrument as the Last Will and Testament of {{name}}. Each of us signs this Will in the Testator's presence.

@sign Witness

@sign Witness

@sub Self-Proving Affidavit

@sub OPTIONAL WITNESS PROOF AFFIDAVIT

@line STATE OF CONNECTICUT
@line COUNTY OF ____________________

We, the undersigned attesting witnesses, being duly sworn, state that {{name}} subscribed the attached instrument as the Testator's Last Will and Testament and that each of us attested and subscribed the Will in the Testator's presence. We state these facts as those to which we would testify in court to prove the Will.

@sign Witness

@sign Witness

Subscribed and sworn before me on ____________________, 20____.

@sign Officer Authorized to Administer Oaths

=== Delaware
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Delaware. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned credible witnesses, attest and subscribe this instrument as the Last Will and Testament of {{name}} in the Testator's presence.

@sign Witness

@sign Witness

@sub Self-Proving Affidavit

@line STATE OF ____________________
@line COUNTY OF ____________________

Before me personally appeared {{name}}, the Testator, and the undersigned witnesses. Being duly sworn, the Testator declared that this instrument is the Testator's Last Will and Testament, that the Testator willingly signed or directed another to sign it as a free and voluntary act; and each witness stated, in the presence and hearing of the Testator, that the witness signed the Will as witness and, to the best of the witness's knowledge, the Testator was eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign Testator

@sign Witness

@sign Witness

Subscribed, sworn and acknowledged before me on ____________________, 20____.

@sign Officer Authorized to Administer Oaths

@line [Official Seal / Capacity]

=== District of Columbia
community: none
no_contest: yes
witnesses: 2
notary: no
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, the District of Columbia. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned credible witnesses, attest and subscribe this instrument as the Last Will and Testament of {{name}} in the presence of the Testator.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

=== Florida
community: homestead
no_contest: no
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Florida. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} declared this instrument to be the Testator's Will and signed it or acknowledged the signature in our presence, and that each of us signs as a witness in the presence of the Testator and in the presence of each other.

@sign Witness

@sign Witness

@sub Self-Proving Affidavit

@line STATE OF FLORIDA
@line COUNTY OF ____________________

I, {{name}}, declare to the officer taking my acknowledgment and to the subscribing witnesses that I signed this instrument as my Will.

@sign Testator

We, the undersigned witnesses, having been sworn by the officer signing below, declare on our oaths that the Testator declared the instrument to be the Testator's Will and signed it in our presence, and that we each signed the instrument as a witness in the presence of the Testator and of each other.

@sign Witness

@sign Witness

Acknowledged by the Testator and sworn to and subscribed by the witnesses before me on ____________________, 20____.

@sign Notary Public / Officer Authorized to Administer Oaths

@line [Florida certificate fields / seal as applicable]

=== Georgia
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Georgia. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned competent witnesses, attest and subscribe this instrument as the Last Will and Testament of {{name}} in the Testator's presence.

@sign Witness

@sign Witness

@sub Self-Proving Affidavit

@line STATE OF GEORGIA
@line COUNTY OF ____________________

Before me personally appeared {{name}}, the Testator, and the undersigned witnesses. Being duly sworn, the Testator declared to me and to the witnesses in my presence that this instrument is the Testator's Last Will and Testament and that the Testator willingly made and executed it as a free act and deed. Each witness, on oath and in the presence and hearing of the Testator, stated that the Testator declared the instrument to be the Testator's Will, executed it as such, requested the witness to sign, and that the witness signed in the Testator's presence; and that, to the witness's knowledge, the Testator and witnesses satisfied the statutory age and capacity requirements.

@sign Testator

@sign Witness

@sign Witness

Sworn to and subscribed before me on ____________________, 20____.

@sign Notary Public

@line [Official Seal]

=== Hawaii
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Hawaii. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as {{name}}’s Last Will and Testament in our presence, appeared to act willingly and to be of sound mind, and we sign as witnesses within a reasonable time after witnessing that signing or acknowledgment.

@sign Witness 1 Signature

@sign Printed Name

@sign Address

@sign Witness 2 Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Will willingly and as my free and voluntary act, that I am eighteen years of age or older, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed and executed this instrument as the Testator’s Will willingly, and that each of us signed as a witness in the presence and hearing of the Testator, and that to the best of our knowledge the Testator was eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Signature

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sign Signature

@line State of ____________________
@line County of ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the two witnesses, on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign My Commission Expires

@line [OFFICIAL SEAL]

=== Idaho
community: plain
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Idaho. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Will in our presence and that we sign as witnesses to that act.

@sign Witness 1 Signature

@sign Printed Name

@sign Address

@sign Witness 2 Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will, that I sign it willingly as my free and voluntary act, and that I am eighteen years of age or older, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed and executed this instrument as the Testator’s Last Will and that each of us, in the presence and hearing of the Testator, signed as a witness, and that to the best of our knowledge the Testator was eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Signature

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sign Signature

@line State of ____________________
@line County of ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, and subscribed and sworn to before me by the two witnesses, on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign My Commission Expires

@line [OFFICIAL SEAL]

=== Illinois
community: none
no_contest: yes
witnesses: 2
notary: no
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Illinois. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned credible witnesses, attest that {{name}} signed this instrument, or acknowledged the Testator’s signature on it, as the Testator’s Last Will and Testament in our presence; that each of us signed as a witness in the Testator’s presence; and that we believed the Testator to be of sound mind and memory at the time of signing or acknowledgment.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Signature

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sign Signature

@sub Witness Proof Clause

@sub ILLINOIS PROOF CLAUSE / WITNESS AFFIDAVIT

Each undersigned witness states that the witness was present and saw {{name}} sign this Will, or heard the Testator acknowledge the signature as the Testator’s act; that the witness attested and signed in the Testator’s presence; and that the witness believed the Testator to be of sound mind and memory at that time.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Signature

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sign Signature

=== Indiana
community: none
no_contest: yes
witnesses: 2
notary: no
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Indiana. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signified that this instrument is the Testator’s Will; that in our presence the Testator signed it, acknowledged a signature already made, or directed another to sign for the Testator in the Testator’s presence; and that each of us signs as a witness in the presence of the Testator and the other witness.

@sign Witness 1 Signature

@sign Printed Name

@sign Address

@sign Witness 2 Signature

@sign Printed Name

@sign Address

@sub Self-Proving Clause

We, the undersigned Testator and witnesses, declare:

(1) {{name}} executed this instrument as the Testator’s Will;

(2) in the presence of both witnesses, the Testator signed, acknowledged a signature already made, or directed another to sign for the Testator in the Testator’s presence;

(3) the Testator executed the Will freely and voluntarily for the purposes expressed in it;

(4) each witness, in the presence of the Testator and the other witness, signed as a witness;

(5) the Testator was of sound mind when the Will was executed; and

(6) to the best knowledge of each witness, the Testator was at least eighteen years of age or otherwise within the statutory age-status exception.

@sign {{name}}, Testator

@line Date: ____________________, 20____

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Signature

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sign Signature

This clause is intended to satisfy Ind. Code §29-1-5-3.1(c)/(d). No notary is required for this traditional self-proving clause.

=== Iowa
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Iowa. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} exhibited this instrument to us and declared it to be the Testator’s Last Will and Testament; that the Testator signed or acknowledged it in our presence; and that, at the Testator’s request, each of us signed as a witness in the presence of the Testator and of the other witness.

@sign Witness 1 Signature

@sign Printed Name

@sign Address

@sign Witness 2 Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

@sub AFFIDAVIT

@line State of ____________________
@line County of ____________________

We, {{name}} and the undersigned witnesses, being first duly sworn, declare that on the date of this instrument we knew the identity of each other; the instrument was exhibited to the witnesses by the Testator, who declared it to be the Testator’s Last Will and Testament; the Testator signed or directed another to sign it in the presence of the witnesses; and the witnesses, at the Testator’s request and in the presence of the Testator and each other, subscribed their names as attesting witnesses. Each witness was at least sixteen years of age.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Signature

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sign Signature

Subscribed, sworn, and acknowledged before me by {{name}}, and subscribed and sworn before me by the two witnesses, on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign My Commission Expires

@line [OFFICIAL STAMP / SEAL]

=== Kansas
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Kansas. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, attest that {{name}} declared this instrument to be the Testator's Last Will and Testament and signed it, or acknowledged the signature, in our presence; and at the Testator's request we sign as witnesses in the presence of the Testator.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

Before me personally appeared {{name}} and the undersigned witnesses. All being duly sworn, the Testator declared that this instrument is the Testator's Last Will and Testament and that the Testator willingly executed it as a free and voluntary act. Each witness stated, in the presence and hearing of the Testator, that the Testator declared the instrument to be the Testator's Last Will and Testament, that the witness signed at the Testator's request in the presence of the Testator and the other witness, and that the Testator was of lawful age, of sound mind, and under no restraint.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@line STATE OF KANSAS
@line COUNTY OF ____________________

Subscribed, acknowledged, and sworn to before me on ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== Kentucky
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Kentucky. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned credible witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator's Last Will in our presence, and that each of us signs as a witness in the presence of the Testator and of the other witness.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will willingly, as my free and voluntary act, and that I am eighteen years of age or older, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed and executed this instrument as the Testator's Last Will willingly; that each of us, in the presence and hearing of the Testator and in the presence of the other witness, signs as a witness; and that to the best of our knowledge the Testator is eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@line STATE OF KENTUCKY
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by the Testator and subscribed and sworn to before me by the witnesses on ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== Louisiana
community: plain
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Louisiana. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness And Notarial Execution

Executed on ____________________, 20____ before the undersigned notary public and in the presence of the two undersigned competent witnesses. {{name}} declares that this instrument is the Testator's testament and signs it as the Testator's free and voluntary act.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@sign Notary Public

@sign Printed Name / Notary Identification

=== Maine
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Maine. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator's Last Will and Testament and that each of us signs as a witness within a reasonable time after witnessing the signing or acknowledgment.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will, willingly and as my free and voluntary act, and that I am eighteen years of age or older or otherwise legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed and executed this instrument as the Testator's Last Will willingly, and that each of us signed as a witness in the Testator's presence and hearing, and that to the best of our knowledge the Testator was legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@line STATE OF MAINE
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by the Testator and subscribed and sworn to before me by the witnesses on ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== Maryland
community: none
no_contest: yes
witnesses: 2
notary: no
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Maryland. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned credible witnesses, attest that {{name}} signed this instrument, or acknowledged the signature on it, as the Testator's Last Will and Testament in our presence, and that each of us signed as a witness in the presence of the Testator.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Due-Execution Recital

We, the undersigned witnesses, certify that {{name}} signed or acknowledged this Will in our presence as the Testator's Last Will and Testament and that each of us, as a credible witness, signed in the Testator's presence.

@sign Witness 1

@sign Witness 2

=== Massachusetts
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Massachusetts. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator's Last Will and Testament in our presence and that each of us signs as a witness to that act.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament willingly and as my free and voluntary act; that I am legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed or acknowledged this instrument as the Testator's Last Will and Testament, that each of us signed as a witness in the Testator's presence, and that to the best of our knowledge the Testator was legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@line STATE OF MASSACHUSETTS
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the undersigned witnesses on ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== Michigan
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Michigan. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator's Last Will and Testament in our presence and that each of us signs as a witness to that act.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament willingly and as my free and voluntary act; that I am legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed or acknowledged this instrument as the Testator's Last Will and Testament, that each of us signed as a witness in the Testator's presence, and that to the best of our knowledge the Testator was legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@line STATE OF MICHIGAN
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the undersigned witnesses on ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== Minnesota
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Minnesota. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator's Last Will and Testament in our presence and that each of us signs as a witness to that act.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament willingly and as my free and voluntary act; that I am legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed or acknowledged this instrument as the Testator's Last Will and Testament, that each of us signed as a witness in the Testator's presence, and that to the best of our knowledge the Testator was legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@line STATE OF MINNESOTA
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the undersigned witnesses on ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== Mississippi
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Mississippi. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator's Last Will and Testament in our presence and that each of us signs as a witness to that act.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament willingly and as my free and voluntary act; that I am legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed or acknowledged this instrument as the Testator's Last Will and Testament, that each of us signed as a witness in the Testator's presence, and that to the best of our knowledge the Testator was legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@line STATE OF MISSISSIPPI
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the undersigned witnesses on ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== Missouri
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Missouri. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator's Last Will and Testament in our presence and that each of us signs as a witness to that act.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament willingly and as my free and voluntary act; that I am legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed or acknowledged this instrument as the Testator's Last Will and Testament, that each of us signed as a witness in the Testator's presence, and that to the best of our knowledge the Testator was legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@line STATE OF MISSOURI
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the undersigned witnesses on ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== Montana
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Montana. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator's Last Will and Testament in our presence and that each of us signs as a witness to that act.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament willingly and as my free and voluntary act; that I am legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed or acknowledged this instrument as the Testator's Last Will and Testament, that each of us signed as a witness in the Testator's presence, and that to the best of our knowledge the Testator was legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@line STATE OF MONTANA
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the undersigned witnesses on ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== Nebraska
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Nebraska. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator's Last Will and Testament in our presence and that each of us signs as a witness to that act.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament willingly and as my free and voluntary act; that I am legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed or acknowledged this instrument as the Testator's Last Will and Testament, that each of us signed as a witness in the Testator's presence, and that to the best of our knowledge the Testator was legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@line STATE OF NEBRASKA
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the undersigned witnesses on ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== Nevada
community: plain
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Nevada. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator's Last Will and Testament in our presence and that each of us signs as a witness to that act.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament willingly and as my free and voluntary act; that I am legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed or acknowledged this instrument as the Testator's Last Will and Testament, that each of us signed as a witness in the Testator's presence, and that to the best of our knowledge the Testator was legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@line STATE OF NEVADA
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the undersigned witnesses on ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== New Hampshire
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, New Hampshire. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator's Last Will and Testament in our presence and that each of us signs as a witness to that act.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament willingly and as my free and voluntary act; that I am legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed or acknowledged this instrument as the Testator's Last Will and Testament, that each of us signed as a witness in the Testator's presence, and that to the best of our knowledge the Testator was legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@line STATE OF NEW HAMPSHIRE
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the undersigned witnesses on ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== New Jersey
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, New Jersey. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator's Last Will and Testament in our presence and that each of us signs as a witness to that act.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament willingly and as my free and voluntary act; that I am legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed or acknowledged this instrument as the Testator's Last Will and Testament, that each of us signed as a witness in the Testator's presence, and that to the best of our knowledge the Testator was legally eligible to make a Will, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1

@sign Witness 2

@line STATE OF NEW JERSEY
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the undersigned witnesses on ____________________, 20____.

@sign Notarial Officer

@line [Official Seal / Capacity]

=== New Mexico
community: plain
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, New Mexico. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence, and that each of us signs as a witness in the presence of the Testator as required by the law of New Mexico.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament; that I sign it willingly, or willingly direct another to sign for me; that I execute it as my free and voluntary act for the purposes expressed in it; and that I am eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed and executed this instrument as the Testator’s Last Will and Testament; that the Testator signed it willingly, or willingly directed another to sign for the Testator; that each of us signs as a witness to the Testator’s signing; and that, to the best of our knowledge, the Testator is eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@line STATE OF NEW MEXICO
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the two witnesses on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== New York
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, New York. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

The Testator declared to each of us that this instrument is the Testator’s Last Will and Testament, signed or acknowledged the Testator’s signature to each of us, and requested that each of us sign as an attesting witness. Each of us signs at the end of the Will within the same thirty-day period.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Affidavit of Attesting Witnesses

@line STATE OF NEW YORK
@line COUNTY OF ____________________

We, the undersigned attesting witnesses, being duly sworn, state that {{name}} declared this instrument to be the Testator’s Last Will and Testament; signed the Will in our presence or acknowledged the Testator’s signature to each of us; requested each of us to sign as a witness; and, at the time of execution, appeared to be of sound mind and memory and free from restraint. Each of us signed within the statutory thirty-day period.

@sign Witness 1 Residence Address

@sign Witness 2 Residence Address

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

Sworn to before me on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== North Carolina
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, North Carolina. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence, and that each of us signs as a witness in the presence of the Testator as required by the law of North Carolina.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament; that I sign it willingly, or willingly direct another to sign for me; that I execute it as my free and voluntary act for the purposes expressed in it; and that I am eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed and executed this instrument as the Testator’s Last Will and Testament; that the Testator signed it willingly, or willingly directed another to sign for the Testator; that each of us signs as a witness to the Testator’s signing; and that, to the best of our knowledge, the Testator is eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@line STATE OF NORTH CAROLINA
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the two witnesses on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== North Dakota
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, North Dakota. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence, and that each of us signs as a witness in the presence of the Testator as required by the law of North Dakota.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament; that I sign it willingly, or willingly direct another to sign for me; that I execute it as my free and voluntary act for the purposes expressed in it; and that I am eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed and executed this instrument as the Testator’s Last Will and Testament; that the Testator signed it willingly, or willingly directed another to sign for the Testator; that each of us signs as a witness to the Testator’s signing; and that, to the best of our knowledge, the Testator is eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@line STATE OF NORTH DAKOTA
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the two witnesses on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== Ohio
community: none
no_contest: yes
witnesses: 2
notary: no
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Ohio. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned competent witnesses, attest that {{name}} signed this Will at the end, or acknowledged the Testator’s signature, in our conscious presence, and that each of us subscribed this Will in the conscious presence of the Testator.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

=== Oklahoma
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Oklahoma. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence, and that each of us signs as a witness in the presence of the Testator as required by the law of Oklahoma.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

@line STATE OF OKLAHOMA
@line COUNTY OF ____________________

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament; that I sign it willingly, or willingly direct another to sign for me; that I execute it as my free and voluntary act for the purposes expressed in it; and that I am eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed and executed this instrument as the Testator’s Last Will and Testament; that the Testator signed it willingly, or willingly directed another to sign for the Testator; that each of us signs as a witness to the Testator’s signing; and that, to the best of our knowledge, the Testator is eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

Subscribed, acknowledged, and sworn to before me by the Testator and subscribed and sworn to before me by the witnesses on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== Oregon
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Oregon. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence, and that each of us signs as a witness in the presence of the Testator as required by the law of Oregon.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

@line STATE OF OREGON
@line COUNTY OF ____________________

We, {{name}}, the Testator, and the undersigned witnesses, being first duly sworn, declare that the Testator signed and executed this instrument as the Testator’s Will willingly and as a free and voluntary act; that each witness signed as a witness to the Testator’s signing; and that, to the best of each witness’s knowledge, the Testator was eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

Subscribed and sworn to before me on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== Pennsylvania
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Pennsylvania. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, attest that {{name}} signed this instrument at the end as the Testator’s Last Will and Testament, or acknowledged the Testator’s signature, and that we sign as witnesses at the Testator’s request.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

@line COMMONWEALTH OF PENNSYLVANIA
@line COUNTY OF ____________________

Before me, the undersigned officer, personally appeared {{name}}, the Testator, and the undersigned witnesses. The Testator acknowledged that the Testator signed and executed this instrument as the Testator’s Will, and the witnesses, being duly sworn, stated that they witnessed the execution or acknowledgment of the Will and signed as witnesses.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

Subscribed, sworn to, and acknowledged before me on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== Rhode Island
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Rhode Island. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence, and that each of us signs as a witness in the presence of the Testator as required by the law of Rhode Island.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

@line STATE OF RHODE ISLAND
@line COUNTY OF ____________________

We, the undersigned witnesses, being duly sworn, state that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence; that we signed as witnesses in the presence of the Testator and each other; and that the Testator appeared to be of sound mind and acting voluntarily.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

Subscribed and sworn to before me on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== South Carolina
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, South Carolina. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence, and that each of us signs as a witness in the presence of the Testator as required by the law of South Carolina.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament; that I sign it willingly, or willingly direct another to sign for me; that I execute it as my free and voluntary act for the purposes expressed in it; and that I am eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed and executed this instrument as the Testator’s Last Will and Testament; that the Testator signed it willingly, or willingly directed another to sign for the Testator; that each of us signs as a witness to the Testator’s signing; and that, to the best of our knowledge, the Testator is eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@line STATE OF SOUTH CAROLINA
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the two witnesses on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== South Dakota
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, South Dakota. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence, and that each of us signs as a witness in the presence of the Testator as required by the law of South Dakota.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament; that I sign it willingly, or willingly direct another to sign for me; that I execute it as my free and voluntary act for the purposes expressed in it; and that I am eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed and executed this instrument as the Testator’s Last Will and Testament; that the Testator signed it willingly, or willingly directed another to sign for the Testator; that each of us signs as a witness to the Testator’s signing; and that, to the best of our knowledge, the Testator is eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@line STATE OF SOUTH DAKOTA
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the two witnesses on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== Tennessee
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Tennessee. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence, and that each of us signs as a witness in the presence of the Testator as required by the law of Tennessee.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Affidavits of Attesting Witnesses

@line STATE OF TENNESSEE
@line COUNTY OF ____________________

I, the undersigned attesting witness, being first duly sworn, state the facts to which I would be required to testify in court to prove this Will: that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in my presence; that I signed as a witness as required by law; and that the Testator appeared to be of sound mind and acting voluntarily.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

Sworn to before me on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

I, the undersigned attesting witness, being first duly sworn, state the facts to which I would be required to testify in court to prove this Will: that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in my presence; that I signed as a witness as required by law; and that the Testator appeared to be of sound mind and acting voluntarily.

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

Sworn to before me on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== Texas
community: plain
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Texas. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned credible witnesses, each being fourteen (14) years of age or older, attest that {{name}} signed this Will or acknowledged the Testator’s signature in our presence and that each of us signs this Will as an attesting witness in the presence of the Testator.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

@line STATE OF TEXAS
@line COUNTY OF ____________________

Before me, the undersigned authority, on this day personally appeared {{name}}, the Testator, and the undersigned witnesses, all known to me to be the Testator and the witnesses whose names are subscribed to this instrument. The Testator declared that this instrument is the Testator’s Will and that the Testator willingly made and executed it as a free act and deed. Each witness declared that the witness signed the Will in the Testator’s presence and at the Testator’s request and, to the best of the witness’s knowledge, the Testator was eighteen (18) years of age or older, or had been lawfully married, or was a member of the armed forces or maritime service, was of sound mind, and was under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

Subscribed, sworn to, and acknowledged before me by the Testator, and subscribed and sworn to before me by the witnesses, on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== Utah
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Utah. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence, and that each of us signs as a witness in the presence of the Testator as required by the law of Utah.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the Testator, being first duly sworn, declare that I sign and execute this instrument as my Last Will and Testament; that I sign it willingly, or willingly direct another to sign for me; that I execute it as my free and voluntary act for the purposes expressed in it; and that I am eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

We, the undersigned witnesses, being first duly sworn, declare that the Testator signed and executed this instrument as the Testator’s Last Will and Testament; that the Testator signed it willingly, or willingly directed another to sign for the Testator; that each of us signs as a witness to the Testator’s signing; and that, to the best of our knowledge, the Testator is eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@line STATE OF UTAH
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the Testator, and subscribed and sworn to before me by the two witnesses on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== Vermont
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Vermont. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence, and that each of us signs as a witness in the presence of the Testator as required by the law of Vermont.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

@line STATE OF VERMONT
@line COUNTY OF ____________________

We, {{name}}, the Testator, and the undersigned witnesses, being first duly sworn, acknowledge and state that the Testator signed this instrument as the Testator’s Will, or expressly directed another to sign for the Testator in the presence of two witnesses; that the signing was the Testator’s free and voluntary act for the purposes expressed in the Will; that each witness signed at the Testator’s request, in the Testator’s presence, and in the presence of the other witness; and that, to the best knowledge of each witness, the Testator was at least eighteen (18) years of age or emancipated by court order, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

Subscribed and sworn to before me on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== Virginia
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Virginia. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned competent witnesses, being present at the same time, declare that {{name}} signed this Will or acknowledged the Testator’s signature in our presence and that each of us subscribed this Will in the presence of the Testator.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

@line STATE OF VIRGINIA
@line CITY/COUNTY OF ____________________

Before me, the undersigned authority, personally appeared {{name}}, the Testator, and the undersigned witnesses. All being first duly sworn, the Testator declared that this instrument is the Testator’s Last Will and Testament, that the Testator willingly signed or directed another to sign it as a free and voluntary act, and that the witnesses signed in the Testator’s presence, at the Testator’s request, and in the presence of each other. The witnesses further state that, at the time of execution, the Testator was over eighteen years of age and of sound and disposing mind and memory.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Witness 2 - Signature

@sign Printed Name

Sworn and acknowledged before me on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== Washington
community: plain
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Washington. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned competent witnesses, declare that {{name}} signed this Will or acknowledged the Testator’s signature in our presence and requested or directed that we attest this Will. Each of us signs this Will as a witness in the presence of the Testator as permitted by Washington law.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Witness-Proof Affidavit

@line STATE OF WASHINGTON
@line COUNTY OF ____________________

We, the undersigned attesting witnesses, being first duly sworn, state that {{name}} signed or acknowledged the foregoing instrument as the Testator’s Will in our presence and at the Testator’s direction or request; that we signed as attesting witnesses; and that the facts stated in this affidavit are true to the best of our knowledge and belief for purposes of proving the Will.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

Subscribed and sworn to before me on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== West Virginia
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, West Virginia. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned competent witnesses, being present at the same time, declare that {{name}} signed this Will or acknowledged the Testator’s signature in our presence and that each of us subscribed this Will in the presence of the Testator and of each other.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Witness-Proof Affidavit

@line STATE OF WEST VIRGINIA
@line COUNTY OF ____________________

We, the undersigned attesting witnesses, being first duly sworn, state the facts that would be required of us to establish and prove this Will: {{name}} signed or acknowledged the Will in our presence; we were present at the same time; and we subscribed the Will in the presence of the Testator and of each other. To the best of our knowledge, the Testator executed the Will freely and was of sound mind and legal age.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

Subscribed and sworn to before me on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== Wisconsin
community: plain
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Wisconsin. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence, and that each of us signs as a witness in the presence of the Testator as required by the law of Wisconsin.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

@line STATE OF WISCONSIN
@line COUNTY OF ____________________

We, {{name}}, the Testator, and the undersigned witnesses, being first duly sworn, acknowledge and state that the Testator signed this instrument as the Testator’s Will, or expressly directed another to sign for the Testator in the presence of two witnesses; that the signing was the Testator’s free and voluntary act for the purposes expressed in the Will; that each witness signed at the Testator’s request and in the Testator’s presence; and that, to the best knowledge of each witness, the Testator was of legal age, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

Subscribed and sworn to before me on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

=== Wyoming
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Wyoming. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence, and that each of us signs as a witness in the presence of the Testator as required by the law of Wyoming.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

@line STATE OF WYOMING
@line COUNTY OF ____________________

We, {{name}}, the Testator, and the undersigned witnesses, being first duly sworn, acknowledge and state that the Testator signed this instrument as the Testator’s Will, or expressly directed another to sign for the Testator in the presence of two witnesses; that the signing was the Testator’s free and voluntary act for the purposes expressed in the Will; that each witness signed at the Testator’s request and in the Testator’s presence; and that, to the best knowledge of each witness, the Testator was of legal age, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

Subscribed and sworn to before me on ____________________, 20____.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line [OFFICIAL SEAL]

`;

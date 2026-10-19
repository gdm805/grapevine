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
//                             marital = "marital property" (Wisconsin, a marital property state, Wis. Stat. ch. 766)
//                             homestead = the Florida homestead sentence
//                             none = no sentence
//      no_contest: yes        yes shows the No-Contest Provision, no leaves it out (Florida)
//      witnesses: 2           how many witnesses (used in the signing steps)
//      notary: yes            yes = this state's will has a notary section (used in the signing steps)
//      --- tail
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

I, {{name}}, the testator, sign my name to this instrument this ______ day of _____, 20__, and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my last will and that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes therein expressed, and that I am 18 years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

We, ____________________, ____________________, the witnesses, sign our names to this instrument, being first duly sworn, and do hereby declare to the undersigned authority that the testator signs and executes this instrument as his/her last will and that he/she signs it willingly (or willingly directs another to sign for him or her), and that each of us, in the presence and hearing of the testator, hereby signs this will as witness to the testator's signing, and that to the best of our knowledge the testator is 18 years of age or older, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

@line State of ____________________
@line County of ____________________

Subscribed, sworn to and acknowledged before me by {{name}}, the testator and subscribed and sworn to before me by ____________________, and ____________________, witnesses, this _____ day of _____, 20__.

@line (Seal)

@sign (Signed)

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

@line (Seal)

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

I, {{name}}, the testator, sign my name to this instrument this __________ day of _____, and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my will and that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes expressed in the will, and that I am eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

We, ____________________, ____________________, the witnesses, sign our names to this instrument, being first duly sworn, and do hereby declare to the undersigned authority that the testator signs and executes this instrument as the testator's will and that the testator signs it willingly (or willingly directs another to sign for the testator), and that each of us, in the presence and hearing of the testator, hereby signs this will as witness to the testator's signing, and that to the best of our knowledge the testator is eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

@line State of ____________________
@line ____________________ Judicial District

Subscribed, sworn to, and acknowledged before me by {{name}}, the testator, and subscribed and sworn to before me by ____________________, and ____________________, witness, this __________ day of _____.

@line (Seal)

@sign (Signed)

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

I, {{name}}, the testator, sign my name to this instrument this _____ day of _______________, and being first duly sworn, do declare to the undersigned authority that I sign and execute this instrument as my will and that I sign it willingly, or willingly direct another to sign for me, that I execute it as my free and voluntary act for the purposes expressed in that document and that I am eighteen years of age or older, of sound mind and under no constraint or undue influence.

@sign {{name}}, Testator

We, ____________________, ____________________, the witnesses, sign our names to this instrument being first duly sworn and do declare to the undersigned authority that the testator signs and executes this instrument as his/her will and that he/she signs it willingly, or willingly directs another to sign for him/her, and that each of us, in the presence and hearing of the testator, signs this will as witness to the testator's signing and that to the best of our knowledge the testator is eighteen years of age or older, of sound mind and under no constraint or undue influence.

@sign Witness

@sign Witness

@line The State of ____________________
@line County of ____________________

Subscribed, sworn to and acknowledged before me by {{name}}, the testator, and subscribed and sworn to before me by ____________________ and ____________________, witnesses, this _____ day of _______________.

@line (Seal)

@sign (Signed)

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

On the date written above, {{name}}, the Testator, declared to us that this instrument is the Testator's Last Will and Testament, signed it (or acknowledged to us the Testator's signature already made on it) in our presence, and requested that we sign it as witnesses. At the Testator's request, in the Testator's presence, and in the presence of each other, we now sign as attesting witnesses. Each of us is eighteen years of age or older, and to the best of our knowledge the Testator is eighteen years of age or older, of sound mind, and under no constraint, duress, or undue influence.

@sign Witness 1 Signature

@sign Printed Name

@sign Address

@sign Witness 2 Signature

@sign Printed Name

@sign Address

@sub Affidavit of Attesting Witnesses

@line STATE OF ____________________
@line COUNTY OF ____________________

We, ____________________ and ____________________, the attesting witnesses to the attached or foregoing instrument, being first duly sworn, each state on oath that: {{name}}, the Testator, declared to us that the instrument is the Testator's Last Will and Testament; the Testator signed the instrument (or acknowledged to us the Testator's signature already made on it) in our presence; the Testator requested that we sign as witnesses; each of us signed the instrument as a witness at the Testator's request, in the Testator's presence, and in the presence of each other; at that time each of us was eighteen years of age or older; and to the best of our knowledge the Testator was then eighteen years of age or older, of sound mind, and under no constraint, duress, or undue influence. We make this affidavit at the request of the Testator.

@sign Witness 1 Signature

@sign Printed Name

@sign Witness 2 Signature

@sign Printed Name

Subscribed and sworn to before me by ____________________ and ____________________, witnesses, on ____________________, 20____.

@sign Signature of Officer

@sign Printed Name and Title of Officer

@line My commission expires: ____________________

@line (Seal)


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

On ____________________, 20____, {{name}} declared to us that this instrument is the Testator's Last Will and Testament. We were both present at the same time and witnessed the Testator sign this Will or acknowledge the Testator's signature or this Will. We understand that the instrument we sign is the Testator's Will, and we sign it as witnesses during the Testator's lifetime. Each of us is now more than eighteen years of age and a competent witness.

We declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.

Executed on ____________________, 20____, at ____________________, California.

@sign Witness 1 Signature

@sign Printed Name

@sign Residence Address

@sign Witness 2 Signature

@sign Printed Name

@sign Residence Address

=== Colorado
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
// Attestation follows C.R.S. 15-11-502; self-proving affidavit is the C.R.S. 15-11-504(1) statutory form.
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ County, Colorado. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

We, the undersigned witnesses, declare that {{name}} signed this instrument, or acknowledged the Testator's signature or this Will, in our presence as the Testator's Last Will and Testament, and that each of us signs as a witness within a reasonable time after witnessing that signing or acknowledgment.

@sign Witness 1 Signature

@sign Printed Name

@sign Address

@sign Witness 2 Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

I, {{name}}, the testator, sign my name to this instrument this ____ day of _______, and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my will and that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes therein expressed, and that I am eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

We, ____________________, ____________________ the witnesses, sign our names to this instrument, being first duly sworn, and do hereby declare to the undersigned authority that the testator signs and executes this instrument as [his] [her] will and that [he] [she] signs it willingly (or willingly directs another to sign for [him] [her]), and that [he] [she] executes it as [his] [her] free and voluntary act for the purposes therein expressed, and that each of us, in the conscious presence of the testator, hereby signs this will as witness to the testator's signing, and that to the best of our knowledge the testator is eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

@line THE STATE OF ____________________
@line COUNTY OF ____________________

Subscribed, sworn to and acknowledged before me by {{name}}, the testator, and subscribed and sworn to before me by ____________________ and ____________________, witnesses, this _____ day of _______, ____.

@line (Seal)

@sign (Signed)

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

On the date written above, {{name}}, the Testator, subscribed this instrument (or acknowledged to us the Testator's signature already made on it) in our presence and declared it to be the Testator's Last Will and Testament, and requested that we act as witnesses to it. At the Testator's request, in the Testator's presence, and in the presence of each other, we now subscribe our names as attesting witnesses. Each of us is eighteen years of age or older, and to the best of our knowledge the Testator is eighteen years of age or older, of sound mind, memory and judgment, and under no constraint, duress, or undue influence.

@sign Witness 1 Signature

@sign Printed Name

@sign Address

@sign Witness 2 Signature

@sign Printed Name

@sign Address

@sub Affidavit of Attesting Witnesses

@line STATE OF ____________________
@line ss. ____________________
@line COUNTY OF ____________________

We, ____________________ and ____________________, the attesting witnesses to the attached or foregoing will of {{name}}, being first duly sworn, depose and say that: the Testator subscribed the will (or acknowledged to us the Testator's signature already made on it) in our presence and declared it to be the Testator's Last Will and Testament; each of us subscribed the will as an attesting witness at the Testator's request, in the Testator's presence, and in the presence of each other; at that time each of us was eighteen years of age or older; and to the best of our knowledge and belief the Testator was then eighteen years of age or older, of sound mind, memory and judgment, and under no constraint, duress, or undue influence. These are the facts to which we would be required to testify in court to prove the will. We make this affidavit at the request of the Testator.

@sign Witness 1 Signature

@sign Printed Name

@sign Witness 2 Signature

@sign Printed Name

Subscribed and sworn to before me by ____________________ and ____________________, witnesses, on ____________________, 20____.

@sign Signature of Officer

@sign Printed Name and Title of Officer (Notary Public / Commissioner of the Superior Court)

@line My commission expires: ____________________

@line (Seal)


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
@line SS
@line COUNTY OF ____________________

Before me, the subscriber, on this day personally appeared, {{name}}, ____________________ and ____________________ known to me to be the testator and the witnesses, respectively, whose names are signed to the attached or foregoing instrument and, all of these persons being by me first duly sworn {{name}}, the testator, declared to me and to the witnesses in my presence that the instrument is the testator's last will and that the testator had willingly signed or directed another to sign for the testator, and that the testator executed it as a free and voluntary act for the purposes therein expressed; and each of the witnesses stated to me, in the presence and hearing of the testator, that the witness signed the will as witness and that to the best of the witness' knowledge the testator was eighteen years of age or over, of sound mind and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness

@sign Witness

Subscribed, sworn and acknowledged before me by {{name}}, the testator, subscribed and sworn before me by ____________________ and ____________________ witnesses, this ____________________ day of ____________________, A.D., ____________.

@line (SEAL)

@sign (SIGNED)

@sign (OFFICIAL CAPACITY OF OFFICER)

@line My commission expires: ____________________


=== District of Columbia
community: none
no_contest: yes
witnesses: 2
notary: no
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in Washington, District of Columbia. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

@sign {{name}}, Testator

@sub Witness Attestation

On the date written above, {{name}}, the Testator, signed this instrument at its end (or acknowledged to us the Testator's signature already made on it) in our presence, and at the same time declared it to be the Testator's Last Will and Testament and requested that we act as witnesses to it. At the Testator's request, in the Testator's presence, and in the presence of each other, we now sign our names below as attesting witnesses. Each of us is eighteen years of age or older, and to the best of our knowledge the Testator is eighteen years of age or older, of sound mind, and under no constraint, duress, or undue influence.

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

// Fla. Stat. 732.503(1), statutory form
@line STATE OF FLORIDA
@line COUNTY OF ____________________

I, {{name}}, declare to the officer taking my acknowledgment of this instrument, and to the subscribing witnesses, that I signed this instrument as my will.

@sign Testator

We, ____________________ and ____________________, have been sworn by the officer signing below, and declare to that officer on our oaths that the testator declared the instrument to be the testator's will and signed it in our presence and that we each signed the instrument as a witness in the presence of the testator and of each other.

@sign Witness

@sign Witness

Acknowledged and subscribed before me by means of ☐ physical presence or ☐ online notarization by the testator, {{name}}, who ☐ is personally known to me or ☐ has produced ____________________ as identification, and sworn to and subscribed before me by each of the following witnesses: ____________________ who ☐ is personally known to me or ☐ has produced ____________________ as identification, by means of ☐ physical presence or ☐ online notarization; and ____________________ who ☐ is personally known to me or ☐ has produced ____________________ as identification, by means of ☐ physical presence or ☐ online notarization. Subscribed by me in the presence of the testator and the subscribing witnesses, by the means specified herein, all on ____________________ (date).

@sign Signature of Officer

@sign Print, type, or stamp commissioned name and affix official seal


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

Before me, the undersigned authority, on this day personally appeared {{name}}, ____________________, and ____________________, known to me to be the testator and the witnesses, respectively, whose names are subscribed to the annexed or foregoing instrument in their respective capacities, and all of said individuals being by me duly sworn, {{name}}, testator, declared to me and to the witnesses in my presence that said instrument is the last will and testament or a codicil to the last will and testament of the testator and that the testator had willingly made and executed it as a free act and deed for the purposes expressed therein. The witnesses, each on oath, stated to me in the presence and hearing of the testator that the testator had declared to them that the instrument is the testator's last will and testament or a codicil to the testator's last will and testament and that the testator executed the instrument as such and wished each of them to sign it as a witness; and under oath each witness stated further that the witness had signed the same as witness in the presence of the testator and at the testator's request; that the testator was 14 years of age or over and of sound mind; and that each of the witnesses was then at least 14 years of age.

@sign {{name}}, Testator

@sign Witness

@sign Witness

Sworn to and subscribed before me by {{name}}, testator, and sworn to and subscribed before me by ____________________ and ____________________, witnesses, this ____ day of ____________________, ________.

@line (SEAL)

@sign (Signed)

@sign (Official Capacity of Officer)

@line My commission expires: ____________________


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

I, {{name}}, the testator, sign my name to this instrument this _____ day of _________, and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my will and that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes therein expressed, and that I am eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

We, ____________________, ____________________, the witnesses, sign our names to this instrument, being first duly sworn, and do hereby declare to the undersigned authority that the testator signs and executes this instrument as the testator's will and that the testator signs it willingly (or willingly directs another to sign for the testator), and that each of us, in the presence and hearing of the testator, hereby signs this will as witness to the testator's signing, and that to the best of our knowledge the testator is eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

@line The State of ____________________
@line County of ____________________

Subscribed, sworn to and acknowledged before me by {{name}}, the testator, and subscribed and sworn to before me by ____________________, and ____________________, witness, this _____ day of __________.

@line (Seal)

@sign (Signed)

@sign (Official capacity of officer)

@line My commission expires: ____________________

@sub Notary Certification

@line Doc. Date: ____________________     # Pages: __________
@line Notary Name: ____________________     __________ Judicial Circuit
@line Doc. Description: Self-Proving Affidavit to the Last Will and Testament of {{name}}

@sign Notary Signature

@line Date: ____________________

@line (Stamp or Seal)


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

I, {{name}}, the testator, sign my name to this instrument this _____ day of ____________________, ________, and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my last will and that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes therein expressed, and that I am eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

We, ____________________, ____________________, the witnesses, sign our names to this instrument, being first duly sworn, and do hereby declare to the undersigned authority that the testator signs and executes this instrument as his last will and that he signs it willingly (or willingly directs another to sign for him), and that each of us, in the presence and hearing of the testator, hereby signs this will as witness to the testator's signing, and that to the best of his knowledge the testator is eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

@line The State of ____________________
@line County of ____________________

Subscribed, sworn to and acknowledged before me by {{name}}, the testator and subscribed and sworn to before me by ____________________, and ____________________, witnesses, this _____ day of ____________________.

@line (Seal)

@sign (Signed)

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Witness Proof Clause

Each undersigned witness states that the witness was present and saw {{name}} sign this Will, or heard the Testator acknowledge the signature as the Testator’s act; that the witness attested and signed in the Testator’s presence; and that the witness believed the Testator to be of sound mind and memory at that time.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address


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

UNDER PENALTIES FOR PERJURY, we, the undersigned testator and the undersigned witnesses, respectively, whose names are signed to the attached or foregoing instrument declare:

(1) that the testator executed the instrument as the testator's will;

(2) that, in the presence of both witnesses, the testator signed or acknowledged the signature already made or directed another to sign for the testator in the testator's presence;

(3) that the testator executed the will as a free and voluntary act for the purposes expressed in it;

(4) that each of the witnesses, in the presence of the testator and of each other, signed the will as a witness;

(5) that the testator was of sound mind when the will was executed; and

(6) that to the best knowledge of each of the witnesses the testator was, at the time the will was executed, at least eighteen (18) years of age or was a member of the armed forces or of the merchant marine of the United States or its allies.

@sign {{name}}, Testator

@line Date: ____________________, 20____

@sign Witness

@sign Printed Name

@sign Address

@sign Witness

@sign Printed Name

@sign Address


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

@line Affidavit

@line State of ____________________ )
@line County of ____________________ ) ss

We, the undersigned, {{name}}, ____________________ and ____________________, the testator and the witnesses, respectively, whose names are signed to the attached or foregoing instrument, being first duly sworn, declare to the undersigned authority that at the date of the instrument, we all knew the identity of each other; the instrument was exhibited to the witnesses by the testator, who declared it to be the testator's last will and testament and was signed by the testator or by another at the direction of the testator at ____________________, in the County of ____________________, State of ____________________, on the date shown in the instrument, and in the presence of each other as subscribing witnesses; that we, as witnesses, declare to the undersigned authority that in our presence the testator executed and acknowledged such will as the testator's will and that we, in the testator's presence, at the testator's request, and in the presence of each other, did subscribe our names thereto as attesting witnesses on the date of such will; and that the witnesses were sixteen years of age or older.

@sign {{name}}, Testator

@sign Witness

@sign Witness

Subscribed, sworn and acknowledged before me by {{name}}, the testator; and subscribed and sworn before me by ____________________ and ____________________, witnesses, this _____ day of ____________________ (month), ________ (year)

@sign Signature of notarial officer

@line (Stamp)

@sign Printed Name

@sign Title of office

@line My commission expires: ____________________


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

@line State of ____________________
@line County of ____________________ ss.

Before me, the undersigned authority, on this day personally appeared {{name}}, ____________________, and ____________________, known to me to be the testator and the witnesses, respectively, whose names are subscribed to the annexed or foregoing instrument in their respective capacities, and, all of such persons being by me first duly sworn, such {{name}}, testator, declared to me and to the witnesses in my presence that such instrument is the testator's last will and testament, and that the testator had willingly made and executed it as the testator's free and voluntary act and deed for the purposes therein expressed. Such witnesses, each on the witness' oath stated to me, in the presence and hearing of the testator, that the testator had declared to them that such instrument is the testator's last will and testament, and that the testator executed same as such and wanted each witness to sign it as a witness. Upon their oaths each witness stated further that they did sign the will as witnesses in the presence of each other and in the presence of the testator and at the testator's request, and that the testator at that time possessed the rights of majority, was of sound mind and under no restraint.

@sign {{name}}, Testator

@sign Witness

@sign Witness

Subscribed, acknowledged and sworn to before me by {{name}}, testator, and ____________________ and ____________________, witnesses, this _____ day of ____________________, A.D. ________.

@line (Seal)

@sign (Signed)

@sign Printed Name

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

I, {{name}}, the testator, sign my name to this instrument this _____ day of ____________________, 20____, and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my last will and that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes therein expressed, and that I am eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

We, ____________________, ____________________, the witnesses, sign our names to this instrument, being first duly sworn, and do hereby declare to the undersigned authority that the testator signs and executes this instrument as his last will and that he signs it willingly (or willingly directs another to sign for him), and that each of us, in the presence and hearing of the testator and in the presence of the other subscribing witness, hereby signs this will as witness to the testator's signing, and that to the best of our knowledge the testator is eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

@line THE STATE OF ____________________
@line COUNTY OF ____________________

Subscribed, sworn to and acknowledged before me by {{name}}, the testator and subscribed and sworn to before me by ____________________, and ____________________, witnesses, this _____ day of ____________________, 20____.

@line (Seal)

@sign (Signed)

@sign Printed Name

@sign (OFFICIAL CAPACITY OF OFFICER)

@line My commission expires: ____________________


=== Louisiana
community: plain
no_contest: yes
witnesses: 2
notary: yes
--- tail
// Notarial testament, La. Civ. Code art. 1577. The testator signs at the end AND on every other separate
// page (the footer of each page has a line for it), in front of the notary and both witnesses; the
// attestation clause below follows the wording of article 1577.
@sub Testator Execution

I execute this Will on ____________________, 20____ in ____________________ Parish, Louisiana. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament. I have signed this Will at the end and on each other separate page.

@sign {{name}}, Testator

@sub Attestation Clause

In our presence the testator has declared or signified that this instrument is the testator's testament and has signed it at the end and on each other separate page, and in the presence of the testator and each other we have hereunto subscribed our names this _____ day of ____________________, 20____.

@sign Witness 1 Signature

@sign Printed Name

@sign Witness 2 Signature

@sign Printed Name

@sign Notary Public

@sign Printed Name / Notary Identification Number


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

I, {{name}}, the testator, on this _____ day of ____________________, 20____, being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my last will and that I sign it willingly (or willingly direct another to sign for me), as my free and voluntary act and that I am eighteen years of age or older or am a legally emancipated minor, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

We, ____________________, ____________________, the witnesses, being first duly sworn, do hereby declare to the undersigned authority that the testator has signed and executed this instrument as (his) (her) last will and that (he) (she) signed it willingly (or willingly directed another to sign for (him) (her)), and that each of us, in the presence and hearing of the testator, signs this will as witness to the testator's signing, and that to the best of our knowledge the testator is eighteen years of age or older or is a legally emancipated minor, of sound mind and under no constraint or undue influence.

@sign Witness

@sign Witness

@line The State of ____________________
@line County of ____________________

Subscribed, sworn to and acknowledged before me by {{name}}, the testator, and subscribed and sworn to before me by ____________________ and ____________________, witnesses, this _____ day of ____________________, 20____.

@sign (Signed)

@sign Printed Name

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

I, {{name}}, the testator, sign my name to this instrument this _____ day of ____________________, 20____, and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my will and that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes therein expressed, and that I am 18 years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

We, ____________________, ____________________, the witnesses, sign our names to this instrument, being first duly sworn, and do hereby declare to the undersigned authority that the testator signs and executes this instrument as [his] [her] will and that [he] [she] signs it willingly (or willingly directs another to sign for [him] [her]), and that each of us, in the presence and hearing of the testator, hereby signs this will as witness to the testator's signing, and that to the best of our knowledge the testator is 18 years of age or older, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

@sign {{name}}, Testator

@line The State of ____________________
@line County of ____________________

Subscribed, sworn to and acknowledged before me by {{name}}, the testator, and subscribed and sworn to before me by ____________________, and ____________________, witness, this _____ day of ____________________, 20____.

@line (Seal)

@sign (Signed)

@sign Printed Name

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

I, {{name}}, the testator, sign my name to this document on ____________________, 20____. I have taken an oath, administered by the officer whose signature and seal appear on this document, swearing that the statements in this document are true. I declare to that officer that this document is my will; that I sign it willingly or willingly direct another to sign for me; that I execute it as my voluntary act for the purposes expressed in this will; that I am 18 years of age or older and under no constraint or undue influence; and that I have sufficient mental capacity to make this will.

@sign {{name}}, Testator

We, ____________________ and ____________________, the witnesses, sign our names to this document and have taken an oath, administered by the officer whose signature and seal appear on this document, to swear that all of the following statements are true: the individual signing this document as the testator executes the document as his or her will, signs it willingly or willingly directs another to sign for him or her, and executes it as his or her voluntary act for the purposes expressed in this will; each of us, in the testator's presence, signs this will as witness to the testator's signing; and, to the best of our knowledge, the testator is 18 years of age or older, is under no constraint or undue influence, and has sufficient mental capacity to make this will.

@sign Witness

@sign Witness

@line The State of ____________________
@line County of ____________________

Sworn to and signed in my presence by {{name}}, the testator, and sworn to and signed in my presence by ____________________ and ____________________, witnesses, on ____________________, 20____.

@line (SEAL)

@sign Signed

@sign (official capacity of officer)

@sign Printed name of notary public (exactly as on commission application)

@line Notary public, State of Michigan, County of ____________________.
@line My commission expires ____________________.
@line Acting in the County of ____________________.
@line Date of notarial act: ____________________, 20____


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

I, {{name}}, the testator, sign my name to this instrument this _____ day of ____________________, 20____, and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my will and that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes therein expressed, and that I am 18 years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

We, ____________________, ____________________, the witnesses, sign our names to this instrument, being first duly sworn, and do hereby declare to the undersigned authority that the testator signs and executes this instrument as the testator's will and that the testator signs it willingly (or willingly directs another to sign for the testator), and that each of us, in the presence and hearing of the testator, hereby signs this will as witness to the testator's signing, and that to the best of our knowledge the testator is 18 years of age or older, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

@line State of ____________________
@line County of ____________________

Subscribed, sworn to, and acknowledged in my presence by {{name}}, the testator, and subscribed and sworn to in my presence by ____________________, and ____________________, witnesses, this _____ day of ____________________, 20____.

@line (Seal)

@sign (Signed)

@sign Printed Name

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

@sub Affidavit of Subscribing Witnesses

@line STATE OF MISSISSIPPI
@line COUNTY OF ____________________

Personally appeared before me, the undersigned authority in and for the county and state aforesaid, ____________________ and ____________________, the subscribing witnesses to the foregoing instrument, who, being by me first duly sworn, each state on oath: that {{name}}, the Testator, published and declared the foregoing instrument to be the Testator's Last Will and Testament; that the Testator signed the instrument in the presence of each of us; that each of us subscribed our names to the instrument as attesting witnesses at the Testator's request, in the presence of the Testator, and in the presence of each other; and that at the time of the execution of the instrument the Testator was eighteen (18) years of age or older and of sound and disposing mind and memory.

@sign Witness 1 - Signature

@sign Printed Name

@sign Residence Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Residence Address

Sworn to and subscribed before me by ____________________ and ____________________, witnesses, this _____ day of ____________________, 20____.

@sign Notary Public

@sign Printed Name

@line My commission expires: ____________________

@line (Seal)


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

@sub Self-Proving Certificate

@line THE STATE OF ____________________
@line COUNTY OF ____________________

I, the undersigned, an officer authorized to administer oaths, certify that {{name}}, the testator, and the witnesses, whose names are signed to the attached or foregoing instrument, having appeared together before me and having been first duly sworn, each then declared to me that the testator signed and executed the instrument as his last will, and that he had willingly signed or willingly directed another to sign for him, and that he executed it as his free and voluntary act for the purposes therein expressed; and that each of the witnesses, in the presence and hearing of the testator, signed the will as witness and that to the best of his knowledge the testator was at that time eighteen or more years of age, of sound mind, and under no constraint or undue influence.

In witness whereof I have hereunto subscribed my name and affixed my official seal this _____ day of ____________________, 20____.

@sign (Signed)

@line (SEAL)

@sign (Official capacity of officer)

@sign Printed Name

@line My commission expires: ____________________


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

// MCA 72-2-524(1), statutory form

I, {{name}}, the testator, sign my name to this instrument this ______ day of ____________________, 20____, and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my will, that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes expressed in it, and that I am 18 years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

We, ____________________, ____________________, the witnesses, sign our names to this instrument, being first duly sworn, and do hereby declare to the undersigned authority that the testator signs and executes this instrument as the testator's will, that the testator signs it willingly (or willingly directs another to sign for the testator), that each of us, in the presence and hearing of the testator, hereby signs this will as witness to the testator's signing, and that to the best of our knowledge the testator is 18 years of age or older, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

@line THE STATE OF ____________________
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the testator, and subscribed and sworn to before me by ____________________ and ____________________, witnesses, this ______ day of ____________________, 20____.

@line (SEAL)

@sign (Signed)

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

// Neb. Rev. Stat. 30-2329(1), statutory form

I, {{name}} the testator, sign my name to this instrument this ______ day of ____________________ 20____, and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my last will and that I sign it willingly or willingly direct another to sign for me, that I execute it as my free and voluntary act for the purposes therein expressed and that I am eighteen years of age or older or am not at this time a minor, and am of sound mind and under no constraint or undue influence.

@sign Testator

We, ____________________ and ____________________, the witnesses, sign our names to this instrument, being first duly sworn, and do hereby declare to the undersigned authority that the testator signs and executes this instrument as his or her last will and that he or she signs it willingly or willingly directs another to sign for him or her, and that he or she executes it as his or her free and voluntary act for the purposes therein expressed, and that each of us, in the presence and hearing of the testator, hereby signs this will as witness to the testator's signing, and that to the best of his or her knowledge the testator is eighteen years of age or older or is not at this time a minor, and is of sound mind and under no constraint or undue influence.

@sign Witness

@sign Witness

@line THE STATE OF ____________________
@line COUNTY OF ____________________

Subscribed, sworn to, and acknowledged before me by {{name}}, the testator, and subscribed and sworn to before me by ____________________ and ____________________, witnesses, this ______ day of ____________________ 20____.

@line (SEAL)

@sign (Signed)

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

We, the undersigned witnesses, declare that {{name}} signed this instrument in our presence and declared it to be the Testator's Last Will and Testament, and that each of us, at the request of the Testator, subscribes our name to this Will as a witness in the presence of the Testator and in the presence of each other.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Affidavit of Attesting Witnesses

// NRS 133.050(2), statutory form

@line State of Nevada
@line ss.
@line County of ____________________

@line (Date) ____________________

Then and there personally appeared ____________________ and ____________________, who, being duly sworn, depose and say: That they witnessed the execution of the foregoing will of the testator, {{name}}; that the testator subscribed the will and declared it to be his or her last will and testament in their presence; that they thereafter subscribed the will as witnesses in the presence of the testator and in the presence of each other and at the request of the testator; and that the testator at the time of the execution of the will appeared to them to be of full age and of sound mind and memory.

@sign Affiant

@sign Affiant

Subscribed and sworn to before me this ______ day of the month of ____________________ of the year ______

@sign Notary Public

@line (Seal)

@line My commission expires: ____________________


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

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator's Last Will and Testament in our presence, and that each of us, at the request of the Testator and in the Testator's presence, and in the presence of each other, signs as a witness to attest to the Testator's signature.

@sign Witness 1

@sign Printed Name

@sign Address

@sign Witness 2

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

// RSA 551:2-a, I, statutory form

@line State of ____________________
@line County of ____________________

The foregoing instrument was acknowledged before me this ____________________ (day) by {{name}}, the testator; ____________________ and ____________________, the witnesses, who under oath do swear as follows:

1. The testator signed the instrument as the testator's will or expressly directed another to sign for the testator.

2. This was the testator's free and voluntary act for the purposes expressed in the will.

3. Each witness signed at the request of the testator, in the testator's presence, and in the presence of the other witness.

4. To the best of my knowledge, at the time of the signing the testator was at least 18 years of age, or if under 18 years was a married person, and was of sane mind and under no constraint or undue influence.

@sign Signature

@sign Official Capacity

@line (Seal)

@line My commission expires: ____________________


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

// N.J.S.A. 3B:3-4, statutory form

I, {{name}}, the testator, sign my name to this instrument this ______ day of ____________________, 20____, and being duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my last will and that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes therein expressed, and that I am 18 years of age or older, of sound mind, and under no constraint or undue influence.

@sign Testator

We, ____________________, ____________________, the witnesses, sign our names to this instrument, and, being duly sworn, do hereby declare to the undersigned authority that the testator signs and executes this instrument as the testator's last will and that the testator signs it willingly (or willingly directs another to sign for him), and that each of us, in the presence and hearing of the testator, hereby signs this will as witness to the testator's signing, and that to the best of our knowledge the testator is 18 years of age or older, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

@line The State of ____________________
@line County of ____________________

Subscribed, sworn to and acknowledged before me by {{name}}, the testator and subscribed and sworn to before me by ____________________ and ____________________, witnesses, this ______ day of ____________________, 20____.

@sign (Signed)

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

We, the undersigned witnesses, declare that each of us witnessed {{name}} sign this instrument as the Testator's Last Will and Testament, and that, after witnessing that signing, each of us signs as a witness in the presence of the Testator and in the presence of each other.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

// NMSA 1978, 45-2-504(A), statutory form

I, {{name}}, the testator, swear or affirm under penalty of perjury on this ______ day of ____________________, 20____, that I request ____________________ and ____________________ to act as witnesses to my will; that I declare to them and the undersigned authority that this document is my will; that I sign this will in the presence of both witnesses; that they sign the will as witnesses in my presence and in the presence of each other; that the will was read by me (or read and explained to me) after being prepared and before I sign it; that it clearly and accurately expresses my wishes; that I sign it willingly (or willingly directed another to sign for me); that I make and sign the will as my free and voluntary act for the purposes expressed in the will; that I am eighteen years of age or older; that I am mentally capable of disposing of my estate by will; and that I am not acting under duress, menace, fraud or undue influence of any person.

@sign Testator

We, ____________________ and ____________________, the witnesses, do hereby swear or affirm under penalty of perjury on this ______ day of ____________________, 20____ to the undersigned authority that the testator, {{name}}, declares that the attached document is his or her will; that the testator signs it willingly (or willingly directs another to sign for him or her); that the testator signs it in the presence of both of us and requests both of us to sign as witnesses; that each of us, in the presence of the testator and in the presence of each other, signs this will as witness to the testator's signing; that so far as we can determine, the testator is eighteen years of age or older; that the testator is not acting under duress, menace, fraud or undue influence of any person; and that the testator, in our opinion, is mentally capable of disposing of his or her estate by will.

@sign Witness

@sign Witness

@line State of ____________________
@line County of ____________________

Subscribed and sworn to, or affirmed under penalty of perjury, and acknowledged before me by {{name}}, the testator, and subscribed and sworn to, or affirmed under penalty of perjury, before me by ____________________ and ____________________, witnesses, this ______ day of ____________________, 20____.

@line (Seal)

@sign (Signed)

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

@sign Residence Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Residence Address

@sub Affidavit of Attesting Witnesses

// SCPA 1406; New York prescribes no form, so this states the facts the witnesses would prove in court

@line STATE OF NEW YORK
@line COUNTY OF ____________________  ss.:

Each of the undersigned, individually and severally, being duly sworn, deposes and says:

The within Will was subscribed at the end thereof by {{name}}, the within-named Testator, in the presence of each of the undersigned, or the Testator acknowledged that signature to each of the undersigned to have been made by the Testator, on the ______ day of ____________________, 20____, at ____________________, New York.

At the time of making or acknowledging that subscription, the Testator declared the instrument so subscribed to be the Testator's Last Will and Testament.

Each of the undersigned thereupon signed the undersigned's name as a witness at the end of the Will, at the request of the Testator, in the presence of the Testator and in the presence of each other.

The Testator was, at the time of so executing the Will, over the age of eighteen years and, in the respective opinions of the undersigned, of sound mind, memory and understanding, and not under any restraint or in any respect incompetent to make a Will.

In the respective opinions of the undersigned, the Testator could read, write and converse in the English language, and was suffering from no defect of sight, hearing or speech, or from any other physical or mental impairment which would affect the Testator's capacity to make a valid Will.

The Will was executed as a single, original instrument and was not executed in counterparts.

Each of the undersigned is over the age of eighteen years. The within Will was shown to the undersigned at the time this affidavit was made and was examined by each of them as to the signature of the Testator and of the undersigned.

@sign Witness 1 - Signature

@sign Printed Name

@sign Residence Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Residence Address

Severally sworn to before me on ____________________, 20____.

@sign Notary Public

@sign Printed Name

@line Notary Public, State of New York
@line No. ____________________
@line Qualified in ____________________ County
@line My commission expires: ____________________


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

// N.C.G.S. 31-11.6(a), statutory form

I, {{name}}, the testator, sign my name to this instrument this ______ day of ____________________, 20____ and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my last will and that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes therein expressed, and that I am eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign Testator

We ____________________, ____________________, the witnesses, sign our names to this instrument, being first duly sworn, and do hereby declare to the undersigned authority that the testator signs and executes this instrument as his last will and that he signs it willingly (or willingly directs another to sign for him), and that each of us, in the presence and hearing of the testator, hereby signs this will as witness to the testator's signing, and to the best of our knowledge the testator is eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

@line THE STATE OF ____________________.
@line COUNTY OF ____________________.

Subscribed, sworn to and acknowledged before me by {{name}}, the testator and subscribed and sworn to before me by ____________________ and ____________________, witnesses, this ______ day of ____________________, 20____.

@line (SEAL)

@sign (SIGNED)

@sign (OFFICIAL CAPACITY OF OFFICER)

@sign Printed Name

@line My commission expires: ____________________


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

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator's Last Will and Testament in our presence, and that each of us signs as a witness to that act.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

// N.D.C.C. 30.1-08-04(1), statutory form

@line STATE OF ____________________
@line COUNTY OF ____________________

I, {{name}}, the testator, sign my name to this instrument this ______ day of ____________________, 20____, and being first sworn, declare to the undersigned authority that I sign and execute this instrument as my will and that I sign it willingly or willingly direct another to sign for me, that I execute it as my free and voluntary act for the purposes therein expressed, and that I am 18 years of age or older, of sound mind, and under no constraint or undue influence.

@sign Testator

We, ____________________, ____________________, the witnesses, sign our names to this instrument, and being first sworn, declare to the undersigned authority that the testator signs and executes this instrument as the testator's will and that the testator signs it willingly or willingly directs another to sign for the testator, and that each of us, in the presence and hearing of the testator, signs this will as witness to the testator's signing, and that to the best of our knowledge the testator is 18 years of age or older, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

Subscribed, sworn to, and acknowledged before me by {{name}}, the testator, and subscribed and sworn to before me by ____________________ and ____________________, witnesses, this ______ day of ____________________, 20____.

@line (SEAL)

@sign (Signed)

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

We, the undersigned witnesses, declare that {{name}} subscribed this instrument at the end in our presence, or acknowledged that subscription to each of us to have been made by the Testator or by the Testator's authority, and at that time declared to us that this instrument is the Testator's Last Will and Testament; and that each of us signs our name as a witness at the end of this Will at the Testator's request and in the Testator's presence.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

// 84 O.S. 55(5)(a), statutory form

@line THE STATE OF OKLAHOMA
@line COUNTY OF ____________________

Before me, the undersigned authority, on this day personally appeared {{name}}, ____________________, and ____________________, known to me to be the testator and the witnesses, respectively, whose names are subscribed to the annexed or foregoing instrument in their respective capacities, and, all of said persons being by me first duly sworn, said {{name}}, testator, declared to me and to the said witnesses in my presence that said instrument is his last will and testament or a codicil to his last will and testament, and that he had willingly made and executed it as his free and voluntary act and deed for the purposes therein expressed; and the said witnesses, each on his oath stated to me, in the presence and hearing of the said testator, that the said testator had declared to them that said instrument is his last will and testament or codicil to his last will and testament, and that he executed same as such and wanted each of them to sign it as a witness; and upon their oaths each witness stated further that they did sign the same as witnesses in the presence of the said testator and at his request and that said testator was at that time eighteen (18) years of age or over and was of sound mind.

@sign Testator

@sign Witness (signature)

@sign Name and Residence (printed)

@sign Witness (signature)

@sign Name and Residence (printed)

Subscribed and acknowledged before me by the said {{name}}, testator, and subscribed and sworn before me by the said ____________________, and ____________________ witnesses, this ______ day of ____________________, A.D., 20____.

@line (SEAL)

@sign (SIGNED)

@sign (OFFICIAL CAPACITY OF OFFICER)

@line My commission expires: ____________________


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

We, the undersigned witnesses, declare that {{name}}, in the presence of each of us, signed this instrument as the Testator's Last Will and Testament or acknowledged the signature previously made on it; that each of us saw the Testator sign or heard the Testator acknowledge the signature; and that each of us signs as a witness.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Self-Proving Affidavit

@line STATE OF OREGON
@line COUNTY OF ____________________

We, {{name}}, the Testator, and the undersigned witnesses, being first duly sworn, declare that the Testator, in the presence of each witness, signed and executed this instrument as the Testator's Will, or acknowledged the signature previously made on it, willingly and as a free and voluntary act; that each witness saw the Testator sign or heard the Testator acknowledge the signature, and signed as a witness; and that, to the best of each witness's knowledge, the Testator was eighteen (18) years of age or older, of sound mind, and under no constraint or undue influence.

@sign {{name}}, Testator

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

Subscribed and sworn to before me on ____________________, 20____, by {{name}}, the Testator, and by ____________________ and ____________________, witnesses.

@sign Notary Public / Authorized Officer

@sign Official Capacity

@line (Seal)

@line My commission expires: ____________________


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

@sub Acknowledgment

// 20 Pa.C.S. 3132.1(b), statutory form

@line Commonwealth of Pennsylvania (or State of ____________________)
@line County of ____________________

I, {{name}}, the testator whose name is signed to the attached or foregoing instrument, having been duly qualified according to law, do hereby acknowledge that I signed and executed the instrument as my Last Will; and that I signed it willingly and as my free and voluntary act for the purposes therein expressed.

Sworn to or affirmed and acknowledged before me by {{name}}, the testator, this ______ day of ____________________, 20____.

@sign (Testator)

@sign (Signature of officer or attorney)

@sign (Seal and official capacity of officer or state of admission of attorney)

@line My commission expires: ____________________

@sub Affidavit

@line Commonwealth of Pennsylvania (or State of ____________________)
@line County of ____________________

We (or I), ____________________ and ____________________, the witness(es) whose name(s) are (is) signed to the attached or foregoing instrument, being duly qualified according to law, do depose and say that we were (I was) present and saw the testator sign and execute the instrument as his Last Will; that the testator signed willingly and executed it as his free and voluntary act for the purposes therein expressed; that each subscribing witness in the hearing and sight of the testator signed the will as a witness; and that to the best of our (my) knowledge the testator was at that time 18 or more years of age, of sound mind and under no constraint or undue influence.

Sworn to or affirmed and subscribed to before me by ____________________ and ____________________, witness(es), this ______ day of ____________________, 20____.

@sign Witness

@sign Witness

@sign (Signature of officer or attorney)

@sign (Seal and official capacity of officer or state of admission of attorney)

@line My commission expires: ____________________


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

We, the undersigned witnesses, declare that {{name}} signed this instrument, or that it was signed for the Testator by another person in the Testator’s presence and by the Testator’s express direction, or that the Testator acknowledged that signature, in our presence, both of us being present at the same time, as the Testator’s Last Will and Testament; and that each of us attests and subscribes this Will as a witness in the presence of the Testator, as required by the law of Rhode Island.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Affidavit of Subscribing Witnesses

@line STATE OF RHODE ISLAND
@line COUNTY OF ____________________

In ____________________ on this _____ day of ____________________, 20____, before me personally appeared the undersigned, who, being duly sworn, depose and say that: they witnessed the execution of the will (codicil) of {{name}}; that the signature to the will (codicil) is in the handwriting of the testator or was made by some other person for the testator, in the testator's presence and by the testator's express direction; that the testator so subscribed the will (codicil) and declared the same to be his last will (a codicil to his last will) in their presence; that they thereafter subscribed the same as witnesses in the presence of the testator and in the presence of each other; that at the time of execution of the will (codicil) the testator appeared to be of sound mind and eighteen (18) years of age or over; and that the signatures of the witnesses on the will are genuine.

@sign Witness

@sign Witness

Subscribed and sworn to before me on the day and date first above written,

@sign Notary public

@line My commission expires: ____________________

@line (Seal)


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

@line STATE OF SOUTH CAROLINA
@line COUNTY OF ____________________

I, {{name}}, the testator, sign my name to this instrument this ___ day of __________, 20___, and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my last will and that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes therein expressed, and that I am eighteen years of age or older (or if under the age of eighteen, am married or emancipated as decreed by a family court), of sound mind, and under no constraint or undue influence.

@sign Testator

We, ____________________ and ____________________, the witnesses, sign our names to this instrument, and at least one of us, being first duly sworn, does hereby declare, generally and to the undersigned authority, that the testator signs and executes this instrument as his last will and that he signs it willingly (or willingly directs another to sign for him), and that each of us, in the presence and hearing of the testator, hereby signs this will as witness to the testator's signing, and that to the best of our knowledge the testator is eighteen years of age or older (or if under the age of eighteen, was married or emancipated as decreed by a family court), of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

Subscribed, sworn to and acknowledged before me by {{name}}, the testator, and subscribed and sworn to before me by ____________________ and ____________________, witness(es), this ___ day of __________, 20___.

@line (Signed) ________________________________________

@sign (Official capacity of officer)

@line My commission expires: ____________________

@line (Seal)


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

I, {{name}}, the testator, sign my name to this instrument this ______ day of ____________, and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my will and that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes therein expressed, and that I am eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign Testator

We, ____________________, ____________________, the witnesses, sign our names to this instrument, being first duly sworn, and do hereby declare to the undersigned authority that the testator signs and executes this instrument as [his] [her] will and that [he] [she] signs it willingly (or willingly directs another to sign for [him] [her]), that [he] [she] executes it as [his] [her] free and voluntary act for the purposes therein expressed, and that each of us, in the presence and hearing of the testator, hereby signs this will as witness to the testator's signing, and that to the best of our knowledge the testator is eighteen years of age or older, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

@line The State of South Dakota
@line County of ____________________

Subscribed, sworn to and acknowledged before me by {{name}}, the testator, and subscribed and sworn to before me by ____________________, and ____________________, witnesses, this ______ day of ____________.

@line (Seal)

@line (Signed) ____________________________

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

We, the undersigned attesting witnesses, declare that {{name}}, the Testator, signified to us that this instrument is the Testator’s Last Will and Testament; that the Testator signed this instrument, or acknowledged the Testator’s signature already made, or at the Testator’s direction and in the Testator’s presence had someone else sign the Testator’s name, in our presence, both of us being present at the same time; and that each of us signed this Will as an attesting witness in the presence of the Testator and in the presence of each other.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

@sub Affidavit of Attesting Witnesses

@line STATE OF TENNESSEE
@line COUNTY OF ____________________

We, the undersigned attesting witnesses to the foregoing Last Will and Testament of {{name}}, each being first duly sworn, make this affidavit at the request of the Testator and state the facts to which we would be required to testify in court to prove the Will: that the Testator signified to us that the instrument is the Testator’s Will; that the Testator signed the Will, or acknowledged the Testator’s signature already made, or at the Testator’s direction and in the Testator’s presence had someone else sign the Testator’s name, in our presence, both of us being present at the same time; that each of us signed the Will as an attesting witness in the presence of the Testator and in the presence of each other; and that, at the time, the Testator appeared to be of sound mind, eighteen (18) years of age or older, and under no constraint, duress or undue influence.

@sign Witness 1 - Signature

@sign Printed Name

@sign Witness 2 - Signature

@sign Printed Name

Sworn to and subscribed before me by ____________________ and ____________________, attesting witnesses, on ____________________, 20____.

@sign Notary Public / Officer Authorized to Administer Oaths

@sign Official Capacity

@line My commission expires: ____________________

@line (Seal)


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

@line THE STATE OF TEXAS
@line COUNTY OF ____________________

Before me, the undersigned authority, on this day personally appeared {{name}}, ____________________, and ____________________, known to me to be the testator and the witnesses, respectively, whose names are subscribed to the annexed or foregoing instrument in their respective capacities, and, all of said persons being by me duly sworn, the said {{name}}, testator, declared to me and to the said witnesses in my presence that said instrument is [his/her] will, and that [he/she] had willingly made and executed it as [his/her] free act and deed; and the said witnesses, each on [his/her] oath stated to me, in the presence and hearing of the said testator, that the said testator had declared to them that said instrument is [his/her] will, and that [he/she] executed same as such and wanted each of them to sign it as a witness; and upon their oaths each witness stated further that they did sign the same as witnesses in the presence of the said testator and at [his/her] request; that [he/she] was at that time eighteen years of age or over (or being under such age, was or had been lawfully married, or was then a member of the armed forces of the United States, or an auxiliary of the armed forces of the United States, or the United States Maritime Service) and was of sound mind; and that each of said witnesses was then at least fourteen years of age.

@sign {{name}}, Testator

@sign Witness

@sign Witness

Subscribed and sworn to before me by the said {{name}}, testator, and by the said ____________________ and ____________________, witnesses, this _____ day of ____________________ A.D. ________.

@line (SEAL)

@line (Signed) ________________________________________

@sign (Official Capacity of Officer)

@line My commission expires: ____________________


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

I, {{name}}, the testator, sign my name to this instrument this ____ day of _______, and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my will and that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes therein expressed, and that I am 18 years of age or older, of sound mind, and under no constraint or undue influence.

@sign Testator

We, ____________________, ____________________, the witnesses, sign our names to this instrument, being first duly sworn, and do hereby declare to the undersigned authority that the testator signs and executes this instrument as [his] [her] will and that [he] [she] signs it willingly (or willingly directs another to sign for [him] [her] ), and that each of us, in the presence and hearing of the testator, hereby signs this will as witness to the testator's signing, and that to the best of our knowledge the testator is 18 years of age or older, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

@line State of Utah
@line County of ____________________

Subscribed, sworn to and acknowledged before me by {{name}}, the testator, and subscribed and sworn to before me by ____________________, and ____________________, witnesses, this ____ day of _______.

@line (Signed) ________________________

@sign (Official capacity of officer)

@line My commission expires: ____________________

@line (Seal)


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

We, the undersigned witnesses, declare that {{name}} signed or acknowledged this instrument as the Testator’s Last Will and Testament in our presence, and that each of us signs as a witness in the presence of the Testator and in the presence of each other, as required by the law of Vermont.

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

@line (Seal)


=== Virginia
community: none
no_contest: yes
witnesses: 2
notary: yes
--- tail
@sub Testator Execution

I execute this Will on ____________________, 20____ in the City or County of ____________________, Virginia. I declare that I have read this Will, have had it read to me, or have had its contents explained to me; that I understand its provisions; that it accurately reflects my intentions; and that I execute it freely and voluntarily as my Last Will and Testament.

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
@line COUNTY/CITY OF ____________________

Before me, the undersigned authority, on this day personally appeared {{name}}, ____________________, and ____________________, known to me to be the testator and the witnesses, respectively, whose names are signed to the attached or foregoing instrument and, all of these persons being by me first duly sworn, {{name}}, the testator, declared to me and to the witnesses in my presence that said instrument is his last will and testament and that he had willingly signed or directed another to sign the same for him, and executed it in the presence of said witnesses as his free and voluntary act for the purposes therein expressed; that said witnesses stated before me that the foregoing will was executed and acknowledged by the testator as his last will and testament in the presence of said witnesses who, in his presence and at his request, and in the presence of each other, did subscribe their names thereto as attesting witnesses on the day of the date of said will, and that the testator, at the time of the execution of said will, was over the age of eighteen years and of sound and disposing mind and memory.

@sign Testator

@sign Witness

@sign Witness

Subscribed, sworn and acknowledged before me by {{name}}, the testator, and subscribed and sworn before me by ____________________ and ____________________, witnesses, this __________ day of _______________, A.D., __________.

@line SIGNED ________________________________________

@sign (OFFICIAL CAPACITY OF OFFICER)

@line Notary registration number: ____________________

@line My commission expires: ____________________

@line (Seal)


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

@sub Affidavit of Attesting Witnesses

@line STATE OF WASHINGTON
@line COUNTY OF ____________________

We, the undersigned attesting witnesses to the foregoing Last Will and Testament of {{name}}, each being first duly sworn, make this affidavit under RCW 11.20.020(2) at the request of the Testator and state the following facts, to which we would be required to testify in court to prove the Will:

1. Each of us is over the age of eighteen (18) years and is a competent witness.

2. On the date of the Will, the Testator signed the Will, or acknowledged the Testator’s signature on it, in our presence, declared the instrument to be the Testator’s Will, and requested or directed us to attest it.

3. Each of us then signed the Will as an attesting witness, at the Testator’s request or direction and in the Testator’s presence.

4. At that time the Testator appeared to be of sound mind, and the Testator was not acting under duress, menace, fraud, misrepresentation, or undue influence.

@sign Witness 1 - Signature

@sign Printed Name

@sign Address

@sign Witness 2 - Signature

@sign Printed Name

@sign Address

Subscribed and sworn to before me by ____________________ and ____________________, attesting witnesses, on ____________________, 20____.

@sign Notary Public in and for the State of Washington

@line Residing at: ____________________

@line My commission expires: ____________________

@line (Seal)


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

@line (Seal)


=== Wisconsin
community: marital
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

@line State of Wisconsin
@line County of ____________________

I, {{name}}, the testator, sign my name to this instrument this _____ day of ____________________, and being first duly sworn, declare to the undersigned authority all of the following:

1. I execute this instrument as my will.

2. I sign this will willingly, or willingly direct another to sign for me.

3. I execute this will as my free and voluntary act for the purposes expressed therein.

4. I am 18 years of age or older, of sound mind and under no constraint or undue influence.

@sign Testator

We, ____________________, ____________________, the witnesses, being first duly sworn, sign our names to this instrument and declare to the undersigned authority all of the following:

1. The testator executes this instrument as his or her will.

2. The testator signs it willingly, or willingly directs another to sign for him or her.

3. Each of us, in the conscious presence of the testator, signs this will as a witness.

4. To the best of our knowledge, the testator is 18 years of age or older, of sound mind and under no constraint or undue influence.

@sign Witness

@sign Witness

Subscribed and sworn to before me by {{name}}, the testator, and by ____________________, and ____________________, witnesses, this _____ day of ____________________, ________.

@line (Seal)

@line (Signed): ________________________________________

@sign (Official capacity of officer)

@line My commission expires: ____________________


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

I, {{name}}, the testator, sign my name to this instrument this _____ day of ____________________, 20____, and being first duly sworn, do hereby declare to the undersigned authority that I sign and execute this instrument as my last will and that I sign it willingly (or willingly direct another to sign for me), that I execute it as my free and voluntary act for the purposes therein expressed, and that I am an adult person, of sound mind, and under no constraint or undue influence.

@sign Testator

We, ____________________, ____________________ the witnesses, sign (or electronically sign by secure means) our names to this instrument, being first duly sworn, and do hereby declare to the undersigned authority that the testator signs and executes this instrument as his last will and that he signs it willingly (or willingly directs another to sign for him), and that he executes it as his free and voluntary act for the purposes therein expressed, and that each of us, in the presence and hearing of the testator (or appearing through the use of audio-video communication technology and able to see and hear the testator in real time), hereby signs this will (or electronically signs this will by secure means) as witnesses to the testator's signature and that to the best of our knowledge the testator is an adult person, of sound mind, and under no constraint or undue influence.

@sign Witness

@sign Witness

@line STATE OF WYOMING )
@line ) ss
@line COUNTY OF ____________________ )

Subscribed, sworn to and acknowledged before me by {{name}}, the testator, and subscribed and sworn to before me by ____________________ and ____________________, witnesses, this _____ day of ____________________.

@line (SEAL)

@line (Signed) ________________________________________

@sign (Official Capacity of Officer)

@line My commission expires: ____________________



`;

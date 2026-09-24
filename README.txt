GRAPEVINE WEBSITE
=================

A static, single-page website. No build step and no dependencies.

Files
-----
index.html        Home page (all copy lives here)
pricing.html      Pricing page
will.html         The will builder (questions on the left, your will on the right)
pour-over.html    The pour-over will builder (for people with a living trust)
dpoa.html         The durable power of attorney builder
dementia.html     The dementia and cognitive decline care preferences builder
hcd.html          The health care directive builder (state and county dropdowns)
hipaa.html        The HIPAA authorization builder
trust.html        The living trust builder (single-trustmaker version)
trust-joint.html  The living trust builder (joint version, for a married couple or domestic partners)
cert.html         The Certification of Trust builder (proves a trust exists, for banks and title companies)
affidavit.html    The Affidavit of Trustee builder (a sworn statement, stronger than the Certification)
assignment.html   The General Assignment of Personal Property to Trust builder (no state requires notarization)
finalwishes.html  The Final Wishes builder (disposition/funeral preferences, full 51-state execution rules)
contacts.html     The Important Contacts builder (Name/Relationship/Phone/Email; not a legal document)
checkout.html     The payment page (order summary, "Continue to secure payment")
paid.html         The page Stripe sends someone back to right after they pay
terms.html        Terms and Conditions (Grapevine Docs, Inc.; Nevada law). Edit the wording here only.
LAUNCH-CHECKLIST.txt  What's left before the beta and before taking real money.
learn.html        The Learn section (articles)
HOW-TO-EDIT.txt   START HERE: plain-English guide to editing the will text, articles, prices and payment
will/             The will and pour-over will text, signing steps, state rules, and notes on your drafts
learn/            Your articles (edit this)
css/styles.css    Styles. Colors and fonts are variables at the top of the file.
css/checkout.css  Styles for the checkout and payment-received pages.
js/main.js        Home page interactions: live document demo, plain-vs-legal switch, "which document" finder.
js/plans.js       Plan names, prices and what each includes. ALL PRICES LIVE AT THE TOP OF THIS FILE.
js/pricing.js     Pricing page. Reads its numbers from js/plans.js.
js/checkout.js    Checkout page. PASTE YOUR STRIPE PAYMENT LINKS AT THE TOP OF THIS FILE to take real payment.
js/entitlements.js Remembers, in the visitor's browser, which plan they paid for.
cloudflare/payment-check.js  The payment check that runs on Cloudflare, not on GitHub (HOW-TO-EDIT.txt 3d).
js/paid.js        The payment-received page's logic.
js/flow.js        For Essentials/Complete: the order of documents in the "answer them all back to back" walk-through.
js/will.js        The will builder engine (the questions). Also gates Download/Print until paid. Rarely needs changing.
js/will-export.js Builds the PDF and Word downloads, with page numbers. Never needs changing.
js/vendor/        Two libraries used for the PDF (jsPDF and the Tinos font). Do not edit.
js/learn.js       The Learn page engine. Never needs changing.
images/           Logos, favicons and the social share image (og-image.png).

Preview locally
---------------
Double-click index.html, or run:  python3 -m http.server 8000   then open http://localhost:8000

Put it online
-------------
Upload the whole folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or your web host).
Keep the folder structure as it is. On Netlify you can also just drag the folder onto app.netlify.com/drop.

Before you launch: things only you can fill in
----------------------------------------------
1. Buttons. Every "Start your will" button now opens will.html. The Essentials and Complete buttons
   open every document in that plan, one after another: Essentials starts with the will, then the power
   of attorney, health care directive, dementia care preferences and HIPAA authorization; Complete is the
   same but starts with the pour-over will. Finishing one document shows a "Continue to your..." button
   instead of Download, and the last document ends in a "Your package is complete" screen where paying
   once unlocks all of them together. See HOW-TO-EDIT.txt, section 3c, to change the order or add a
   document to it once it has a builder.
   Both living trust builders (trust.html, single-trustmaker, and trust-joint.html, joint) now exist and
   are unlocked by the Complete plan, but neither is yet part of that walk-through -- where the trust
   belongs relative to the pour-over will (probably first, since the pour-over will refers to it), and
   whether Complete should ask up front which of the two trusts someone needs, are real product decisions
   I haven't made for you yet. Both are reachable today only by going to trust.html or trust-joint.html
   directly, or from the pour-over will's own "Don't have a trust yet?" link (which currently points to
   the single-trustmaker version), and each trust page links to the other for the "wrong" one. Say the
   word and I'll fold them into the Complete walk-through properly. The Certification of Trust builder
   (cert.html), the Affidavit of Trustee builder (affidavit.html), and the General Assignment of
   Personal Property to Trust builder (assignment.html) also now exist and are unlocked by Complete,
   also not yet in the walk-through, reachable today by going to those pages directly (the two trust
   builders' signing instructions mention the Certification and the Assignment once someone finishes
   signing their trust; the Certification and Affidavit pages both link to the Assignment, and to each
   other). The Final Wishes builder (finalwishes.html) also now exists and is unlocked by Essentials
   (not just Complete, since it was already named in the Essentials list) -- also not yet in either
   walk-through, reachable today by going to finalwishes.html directly. Mississippi and South Carolina
   aren't offered there yet; see will/NOTES-ON-YOUR-FINAL-WISHES.txt. The Important Contacts builder
   (contacts.html) also now exists and is unlocked by Essentials as well, same as Final Wishes --
   also not in either walk-through yet, reachable today by going to contacts.html directly. It isn't
   a legal document (nothing to sign, no watermark). The rest of the trust-funding package (dynamic
   checklists, institution transfer letters) still doesn't have a builder, though a static Trust
   Funding Guide now ships inside both trust builders' signing instructions -- see
   will/NOTES-ON-YOUR-TRUST.txt.
   The dementia care preferences builder (dementia.html) and the health care directive builder (hcd.html)
   are both also named on the pricing page with their own "Or start with your..." link, for someone who
   wants just that one document instead of the whole plan. The HIPAA authorization and trust builders
   don't have one of those links yet -- say the word if you want them added, the same way. None of these
   are linked from the home page's document list yet.
2. Payment. Turned off until you paste Stripe Payment Links into js/checkout.js. Until then, the checkout
   page tells the visitor payments aren't on yet instead of showing a broken button. See HOW-TO-EDIT.txt,
   section 3b, for exactly what to paste and how to test it without Stripe.
3. Copy. Product statements (save and come back later, signing steps by state) are draft wording.
   Change them to match what Grapevine actually offers. One inaccurate claim -- "a plain-language
   summary beside each clause" -- was caught and rewritten (index.html and pricing.html both said
   this; the actual product doesn't do that for every clause, only the one hand-picked example on
   the home page's "Plain language" section does). Re-read the rest of the copy with the same eye.
4. Legal review. Have an attorney look over the FAQ answers and the "not a law firm" notice.
5. Pricing. Current prices, single / couple: Will $119 / $199, Essentials $249 / $399, Complete
   $499 / $649. To change them, edit "prices" at the top of js/plans.js (see HOW-TO-EDIT.txt,
   section 3, for the single/couple shape) -- pricing.html and checkout.html both read from there,
   so nothing else needs updating for a plain price change. If you change what's included, update
   the matching <ul class="includes"> list in pricing.html and js/plans.js's own "includes" array
   together, plus the compare table further down pricing.html.
   Please confirm these statements on the pricing page, which I assumed: prices are one-time (no subscription);
   "Recommended" on Essentials is your call; the trust is a Revocable Living Trust (or a Joint Trust for
   couples); a couple's price assumes two of most documents rather than one shared copy.
   The page does not state any refund, update or support policy. Add yours.
6. Missing pages. There is no About, Contact, Privacy or Terms page yet, and no phone or email.
7. Social sharing. In index.html, change og:image to the full URL of images/og-image.png once you know your domain.
8. Fonts. Newsreader stands in for "New Spirit" (a licensed face). Headings switch to New Spirit
   automatically if you self-host it and add an @font-face for it.

Design tokens
-------------
Grape purple #583785 (actions, links)   Leaf green #7ea744 (progress, highlights)
Stone #fefdf2 (page)   Sand #f2f0e5 (panels)   Ink #252429 (text)   Midnight #0e3f5e
Type: Newsreader (headings), DM Sans (body)

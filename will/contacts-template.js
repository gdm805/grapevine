window.CONTACTS_TEMPLATE = String.raw`
// ==========================================================================
//  GRAPEVINE  |  IMPORTANT CONTACTS
//  Not a legal document -- there's nothing here to sign, so no watermark and no state question.
//  Just a reference list to keep with the rest of the estate plan so whoever needs it (an agent,
//  executor, successor trustee, or family member) knows who to call. See
//  will/NOTES-ON-YOUR-IMPORTANT-CONTACTS.txt for the design notes.
// ==========================================================================
@set draft_watermark = no

@center **IMPORTANT CONTACTS**

Prepared for {{name}}. Keep this with your other estate planning documents, and give a copy to your executor, agent, or successor trustee. Update it whenever a contact changes.

[[if has_contacts]]

[[each contacts]]

**{{contact_name}}**[[if has_relationship]] -- {{relationship}}[[end]]

[[if has_phone]]@line Phone: {{phone}}[[end]]
[[if has_email]]@line Email: {{email}}[[end]]

[[end]]

[[else]]

No contacts have been added yet.

[[end]]
`;

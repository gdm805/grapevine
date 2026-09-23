window.DPOA_TEMPLATE = String.raw`
// ==========================================================================
//  GRAPEVINE  |  DURABLE POWER OF ATTORNEY  |  SETTINGS
//
//  The words of the power of attorney are NOT in this file any more. Each state has its own file in the
//  folder will/dpoa/ (alabama.js, alaska.js, and so on), copied word for word from your controlled state
//  documents. To change a state, edit that state's file. To change something for every state, see below.
//
//  The notes at the top of each state file explain the codes. In short:
//    [[if x]] ... [[elif y]] ... [[else]] ... [[end]]   shows text only sometimes
//    [[each successors]] ... [[end]]                    repeats text for each backup agent
//    [[include shared_incapacity]]                      drops in the shared text kept in this file (see the bottom)
// ==========================================================================
@set draft_watermark = yes
@set draft_label = SAMPLE - NOT FOR SIGNING
`;

/* Shared language, used in every state. It is copied in after "Determination of Incapacity" and "Restoration of
   Capacity" whenever the person chooses "only if I become incapacitated". Your state's own wording follows it. */
window.DPOA_SHARED = {
  shared_incapacity: String.raw`“Incapacity” means that the Principal is unable to manage the Principal’s property or financial affairs because of an impairment in the ability to receive and evaluate information or make or communicate decisions, as determined in the manner required by this Power of Attorney and applicable law. If the Principal becomes incapacitated, as determined under the applicable incapacity standard, any authority that is expressly conditioned upon Incapacity shall become effective in accordance with this Power of Attorney and applicable law. Any person authorized to act under this Power of Attorney may obtain medical evaluations reasonably necessary to determine the Principal’s capacity or Incapacity, to the extent permitted by applicable law.`,
  shared_restoration: String.raw`“Restoration of Capacity” means that a Principal previously determined to be incapacitated has regained legal capacity under the standard applicable to this Power of Attorney. If the Principal regains legal capacity, any authority that became effective solely because of the Principal’s Incapacity shall cease or be suspended to the extent provided by this Power of Attorney and applicable law, and the Principal shall again exercise the rights and authority reserved to the Principal.`
};

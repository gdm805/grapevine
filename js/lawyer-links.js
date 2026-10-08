/* "Find a lawyer" links: wherever the site says "If you have any legal questions about your particular
   circumstances we recommend that you seek a qualified attorney to assist you.", this adds one link to the
   person's OWN state's bar lawyer referral service (or, where the state bar runs none, its public
   find-a-lawyer page), using the state saved on the "About you" screen. Before a state is chosen (the home page comes first), it
   links to the American Bar Association's directory of bar referral services instead. A neutral pointer to the bar --
   Grapevine doesn't pick, recommend or get paid for any lawyer. Never added inside a document itself.
   Links checked 2026-09-28. To fix one, change its line below: 'State': ['What the link says', 'address']. */
(function () {
  'use strict';
  var LINKS = {
    'Alabama': ['Alabama State Bar Lawyer Referral Service', 'https://www.alabar.org/programs/lawyer-referral-service/'],
    'Alaska': ['Alaska Bar Association Lawyer Referral Service', 'https://alaskabar.org/for-lawyers/lawyer-referral-service/'],
    'Arizona': ['State Bar of Arizona Find a Lawyer', 'https://www.azbar.org/for-the-public/public-service-center-self-help-education/faqs/'],
    'Arkansas': ['Arkansas Bar Association Find a Lawyer', 'https://www.arkbar.com/?pg=Arkansas-Find-a-Lawyer'],
    'California': ['State Bar of California certified lawyer referral services', 'https://www.calbar.ca.gov/public/find-legal-professionals/find-lawyer-referral-service'],
    'Colorado': ['Colorado Bar Association Find a Lawyer', 'https://www.cobar.org/For-the-Public/Find-a-Lawyer'],
    'Connecticut': ['Connecticut Bar Association Lawyer Referral Service', 'https://www.ctbar.org/public/lawyer-referral-service'],
    'Delaware': ['Delaware State Bar Association Lawyer Referral Service', 'https://www.dsba.org/online-lawyer-referral-service/'],
    'District of Columbia': ['D.C. Bar Lawyer Referral Service (MyDCLawyer)', 'https://www.dcbar.org/for-the-public/hiring-a-lawyer'],
    'Florida': ['The Florida Bar Lawyer Referral Service', 'https://www.floridabar.org/public/lrs/'],
    'Georgia': ['State Bar of Georgia Find a Lawyer', 'https://www.gabar.org/public/find-a-lawyer'],
    'Hawaii': ['Hawaii State Bar Association Lawyer Referral & Information Service', 'https://hsba.org/find-a-lawyer/attorney-client-relations/lris'],
    'Idaho': ['Idaho State Bar Lawyer Referral Service', 'https://isb.idaho.gov/lawyer-referral-service/'],
    'Illinois': ['Illinois State Bar Association Illinois Lawyer Finder', 'https://www.isba.org/public/illinoislawyerfinder'],
    'Indiana': ['Indiana State Bar Association Get Legal Help', 'https://www.inbar.org/page/getlegalhelp'],
    'Iowa': ['Iowa State Bar Association Iowa Find-A-Lawyer', 'https://www.iowabar.org/findalawyer'],
    'Kansas': ['Kansas Bar Association Lawyer Referral Service', 'https://ksbar.org/?pg=lrs_public'],
    'Kentucky': ['Kentucky Bar Association Lawyer Referral Services', 'https://kybar.org/For-Public/Lawyer-Referral-Services'],
    'Louisiana': ['Louisiana State Bar Association Lawyer Referral and Information', 'https://www.lsba.org/public/lawyerreferral.aspx'],
    'Maine': ['Maine State Bar Association Lawyer Referral Service', 'https://www.mainebar.org/page/LawyerReferralService'],
    'Maryland': ['Maryland State Bar Association For the Public', 'https://www.msba.org/site/site/content/Resources-and-Tools-Content/For-The-Public.aspx'],
    'Massachusetts': ['Massachusetts Bar Association Lawyer Referral Service', 'https://www.masslawhelp.com/'],
    'Michigan': ['State Bar of Michigan Lawyer Referral Service', 'https://www.michbar.org/programs/home/lrs'],
    'Minnesota': ['Minnesota State Bar Association Finding Legal Help', 'https://mnbars.org/?pg=finding-legal-help'],
    'Mississippi': ['The Mississippi Bar Lawyer Directory', 'https://www.msbar.org/lawyer-directory'],
    'Missouri': ['The Missouri Bar LawyerSearch', 'https://mobar.org/public/LawyerSearch.aspx'],
    'Montana': ['State Bar of Montana Lawyer Referral & Information Service', 'https://www.montanabar.org/For-the-Public/Lawyer-Referral-Information-Service'],
    'Nebraska': ['Nebraska State Bar Association Attorney Directory', 'https://www.nebar.com/?pg=AttyDirectoryLanding'],
    'Nevada': ['State Bar of Nevada Find a Lawyer', 'https://nvbar.org/for-the-public/find-a-lawyer/'],
    'New Hampshire': ['New Hampshire Bar Association Lawyer Referral Service', 'https://www.nhbar.org/lawyer-referral-service/'],
    'New Jersey': ['New Jersey State Bar Association county bar referral services', 'https://njsba.com/resources/county-bar-associations/'],
    'New Mexico': ['State Bar of New Mexico Online Bar Directory', 'https://www.sbnm.org/For-Public/I-Need-a-Lawyer/Online-Bar-Directory'],
    'New York': ['New York State Bar Association Lawyer Referral Service', 'https://nysba.org/new-york-state-bar-association-lawyer-referral-service/'],
    'North Carolina': ['North Carolina Bar Association Find a Lawyer', 'https://www.ncbar.org/public/find-an-nc-lawyer/find-a-lawyer/'],
    'North Dakota': ['State Bar Association of North Dakota Find a Lawyer', 'https://www.sband.org/page/FindaLawyer'],
    'Ohio': ['Ohio State Bar Association Find a Lawyer', 'https://www.ohiobar.org/public-resources/find-a-lawyer/'],
    'Oklahoma': ['Oklahoma Bar Association Find a Lawyer', 'https://www.okbar.org/findalawyer/'],
    'Oregon': ['Oregon State Bar Referral & Information Services', 'https://www.osbar.org/public/ris/'],
    'Pennsylvania': ['Pennsylvania Bar Association Lawyer Referral Service', 'https://www.palawhelp.org/organization/referral-service-pennsylvania-bar-association'],
    'Rhode Island': ['Rhode Island Bar Association Lawyer Referral Service', 'https://ribar.com/?pg=lawyerreferralservice'],
    'South Carolina': ['South Carolina Bar Lawyer Referral Service', 'https://www.scbar.org/for-the-public/quicklinks/get-legal-help/'],
    'South Dakota': ['State Bar of South Dakota Legal Resources', 'https://www.statebarofsouthdakota.com/legal-resources-faqs/'],
    'Tennessee': ['Tennessee Bar Association Find an Attorney', 'https://www.tba.org/?pg=find-an-attorney'],
    'Texas': ['State Bar of Texas Lawyer Referral & Information Service', 'https://www.texasbar.com/AM/Template.cfm?Section=Lawyer_Referral_Service_LRIS_'],
    'Utah': ['Utah State Bar Find a Lawyer', 'https://www.utahbar.org/find-a-lawyer/'],
    'Vermont': ['Vermont Bar Association Lawyer Referral Service', 'https://www.vtbar.org/advisory_ethics/lawyer-referral-service/'],
    'Virginia': ['Virginia Lawyer Referral Service', 'https://vsb.org/Site/Site/legal-help/vlrs.aspx'],
    'Washington': ['Washington State Bar Association Find Legal Help', 'https://www.wsba.org/for-the-public/find-legal-help'],
    'West Virginia': ['West Virginia State Bar Lawyer Referral Service', 'https://wvbar.org/online-lawyer-referral-service/'],
    'Wisconsin': ['State Bar of Wisconsin I Need a Lawyer', 'https://www.wisbar.org/forPublic/INeedaLawyer/pages/i-need-a-lawyer.aspx'],
    'Wyoming': ['Wyoming State Bar Hire a Lawyer', 'https://www.wyomingbar.org/for-the-public/hire-a-lawyer/']
  };
  var ANY = ['the American Bar Association\u2019s directory of lawyer referral services', 'https://www.americanbar.org/groups/lawyer_referral/resources/lawyer-referral-directory/'];
  var SENTENCE = 'seek a qualified attorney to assist you';
  function state() {
    try { return (JSON.parse(localStorage.getItem('grapevine.profile.v1') || '{}') || {}).state || ''; } catch (e) { return ''; }
  }
  function decorate(root) {
    var st = state(), hit = LINKS[st];
    /* state not chosen yet (the home page comes before "About you"): the ABA's directory of bar referral services */
    if (!hit) hit = ANY;
    if (!root || !document.createTreeWalker) return;
    /* the document preview (.doc) is skipped entirely: the sentence never belongs inside a document, and
       scanning a long preview after every redraw slowed typing on phones */
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (node.nodeType === 1) return node.classList && node.classList.contains('doc') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_SKIP;
        return node.nodeValue.indexOf(SENTENCE) > -1 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    }), found = [], n;
    while ((n = walker.nextNode())) found.push(n);
    found.forEach(function (t) {
      var el = t.parentElement;
      if (!el || el.closest('.doc, #will-doc, script, style, a') || el.querySelector('.gv-lawyer-link')) return;
      var span = document.createElement('span');
      span.className = 'gv-lawyer-link';
      span.appendChild(document.createTextNode(' To find one in ' + (LINKS[st] ? st : 'your state') + ': '));
      var a = document.createElement('a');
      a.href = hit[1]; a.target = '_blank'; a.rel = 'noopener';
      a.textContent = hit[0];
      span.appendChild(a);
      span.appendChild(document.createTextNode('.'));
      if (t.nextSibling) el.insertBefore(span, t.nextSibling); else el.appendChild(span);
    });
  }
  window.GVLawyerLinks = { links: LINKS, any: ANY, decorate: decorate };
  function start() {
    decorate(document.body);
    if (!window.MutationObserver) return;
    var pending = false;
    new MutationObserver(function (list) {
      /* a redraw of the document preview can't add the sentence anywhere that needs a link */
      if (list.every(function (m) { var t = m.target; return t.nodeType === 1 && t.closest && t.closest('.doc'); })) return;
      if (pending) return; pending = true;
      setTimeout(function () { pending = false; decorate(document.body); }, 50);
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

/**
 * Radiesse / calcium hydroxylapatite guide — single source of truth (clinic, in-clinic layout).
 *
 * Consumed by /radiesse. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: calcium hydroxylapatite (CaHA) is a filler that also
 * stimulates — microspheres in a gel that give volume on the day and a
 * collagen response after it, lasting roughly 12–18 months and not
 * dissolvable. The randomised trials and the regulatory indications are for
 * the undiluted product in the nasolabial folds, the hands and the jawline,
 * and for the 1:2 dilution in the décolleté; the hyperdiluted
 * "skin-tightening" use that drives its popularity had no randomised trial
 * on the face or body as of the 2024 systematic reviews. Tiers stay
 * consistent with the guides that already grade CaHA
 * (/regenerative-aesthetics, /sculptra, /nasolabial-folds, /aging-hands,
 * /jowls, /facial-volume-loss, /decolletage, /neck, /marionette-lines,
 * /sagging-skin, /collagen-loss, /upper-arms, /anti-aging-30s); where this
 * page diverges (hands graded strong as in /aging-hands although the
 * biostimulator guide says moderate) the row says so. Prices are indicative
 * European clinic prices as of September 2026, not quotes; regulatory
 * statements are as of September 2026.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'face'
  | 'folds'
  | 'hands'
  | 'skin'
  | 'body'
  | 'scars'
  | 'medical'
  | 'brand'
  | 'comparator'
  | 'marketing'
  | 'general';

export type SectionCategory = 'concept' | 'context' | 'use' | 'product' | 'safety' | 'faq';

export interface Section {
  id: string;
  category: SectionCategory;
  title: string;
  tldr: string;
  evidence?: Evidence;
  focus?: FocusArea;
  bodyHtml: string;
  note?: string;
  /** Rows: typical schedule, what to expect and price, for the expanded card. */
  sessions?: string;
  downtime?: string;
  cost?: string;
}

export interface SectionGroup {
  id: string;
  title: string;
  intro: string;
  sections: Section[];
}

export const keyTakeaways: string[] = [
  'Radiesse is a filler that also stimulates. The syringe is 30% calcium hydroxylapatite microspheres, 25–45 micrometres across, in 70% carboxymethylcellulose gel: the gel gives volume on the day, the body clears it over weeks, and fibroblasts touching the spheres lay down collagen III, then collagen I and elastin — more of each than next to a hyaluronic-acid filler on split-face biopsies at four and nine months. On MRI the product itself was gone 2.5 years after a cheek injection while the volume remained. Approved by the FDA in December 2006 for facial folds and HIV lipoatrophy, in 2015 for the hands, in September 2021 for the jawline and in April 2026 for décolleté wrinkles.',
  'Where the trials are: the fold, the hand, the jawline and the chest. In the split-face pivotal trial 79% of 117 people had the better fold on the Radiesse side at six months against human collagen; against a hyaluronic filler, 79% of folds were still improved at a year versus 43%, with 30% less product. On the hands, 75% of 114 people improved a grade at three months against untreated controls and held it to a year; on the jawline, 75.6% against 8.8% at twelve weeks in 180 people, with 62.9% still improved at 48 weeks; on the décolleté, diluted 1:2, 71.2% against 6.3% at 24 weeks. Every one is the manufacturer\'s trial, and most compare against nothing rather than against a placebo injection.',
  'The use that made it fashionable has the least evidence. "Hyperdilute" Radiesse — one part product to two or more of saline, fanned under the skin of the face, neck, arms, abdomen, thighs or buttocks as a "biostimulator" — comes with three consensus documents and, in the words of both 2024 systematic reviews, no randomised controlled trial on the face or body. What exists is biopsies showing new collagen and elastin, open series of 10 to 50 people, an arm elasticity reading from 72 to 82 units, a neck study in which 86% of 22 women improved a grade, and a cellulite study that used twelve syringes. The décolleté is the exception, and it is on the label.',
  'What it costs you if it goes wrong. Nodules are the characteristic problem: 3% of 5,081 treatments in a 21-study review, half of them in mobile areas, and 12.4% when it was injected into lip mucosa — which is why the lips are off the menu. Three years of follow-up in the fold trial found no nodules, granulomas or infections. It cannot be dissolved: sodium thiosulfate cleared it from pig skin in one experiment and did nothing in the manufacturer\'s own laboratory and animal study or inside cadaver arteries. At least eleven cases of visual loss are published, most after injection of the nose or glabella. It also shows on CT scans and X-rays for up to two years, without hiding the bone behind it.',
  'What to do with that: Radiesse suits a contour problem you want fixed on the day and held for a year or more — the jawline, the pre-jowl, the cheekbone, the back of the hand — in someone who accepts that it cannot be undone. Choose hyaluronic acid for anything near the eye, the lip or the nose, or if you may want to reverse it; choose Sculptra for diffuse deflation; treat "hyperdilute skin tightening" as an emerging-tier purchase priced like a proven one. Expect €350–600 a syringe, one to three syringes a session, and tell your radiologist and your dentist that it is there.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-radiesse-is',
    category: 'concept',
    title: 'What Radiesse is — a filler that also stimulates, and what is in the syringe',
    tldr: 'Calcium hydroxylapatite is the mineral of bone and teeth, made synthetically into smooth microspheres of 25–45 micrometres and suspended, 30% to 70%, in a carboxymethylcellulose gel. The gel fills on the day and is absorbed over weeks to months; the spheres stay as a scaffold that fibroblasts touch and respond to with collagen and elastin, until the body breaks them down into calcium and phosphate over roughly one to two years. It does not turn into bone, it is not a "natural" hyaluronic acid, and it is a different material from Sculptra, which gives nothing on the day.',
    bodyHtml: `
      <p>The composition: "a semipermanent soft-tissue filler consisting of 30% calcium hydroxylapatite microspheres and 70% carboxymethyl cellulose gel carrier" (<a href="https://pubmed.ncbi.nlm.nih.gov/23475146/" rel="noopener nofollow" target="_blank">Moulonguet 2013</a>), "calcium hydroxylapatite crystals measuring 25 μm to 45 μm" (<a href="https://pubmed.ncbi.nlm.nih.gov/18520838/" rel="noopener nofollow" target="_blank">Sires 2008</a>). The mechanism, in cells: "CaHA incubation resulted in an increased mean COLIII expression of 123% at 24 h. COLI synthesis … increased up to 124% at 72 h. Only fibroblasts in direct contact with CaHA increased COLIII expression" (<a href="https://pubmed.ncbi.nlm.nih.gov/36575882/" rel="noopener nofollow" target="_blank">Nowag 2023</a>). In people: a randomised split-face biopsy study of 24 women found that "at month 4, collagen type III was greater with CaHA vs HA … By month 9, type I staining was higher with CaHA vs HA … Staining for elastin, Ki-67 and angiogenesis was greatest with CaHA at both timepoints" (<a href="https://pubmed.ncbi.nlm.nih.gov/25226004/" rel="noopener nofollow" target="_blank">Yutskovskaya 2014</a>); in 15 people, elastic fibres rose "between 29% and 179% at 6 months" and elastin 12–66% (<a href="https://pubmed.ncbi.nlm.nih.gov/30893178/" rel="noopener nofollow" target="_blank">González 2019</a>); a systematic review of the mechanism found twelve studies, seven with a control group, showing "increased cell proliferation, increased collagen production and angiogenesis, as well as … higher elastic fiber and elastin formation", most "with methodological limitations" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10273839/" rel="noopener nofollow" target="_blank">Amiri 2023</a>). How long it stays: on MRI "taken 2.5 years after injection, no CaHA was visible but tissue volume remained increased" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4330000/" rel="noopener nofollow" target="_blank">Pavicic 2015</a>); "no osteogenesis has been reported in extensive literature" (<a href="https://pubmed.ncbi.nlm.nih.gov/24002146/" rel="noopener nofollow" target="_blank">Pavicic 2013</a>).</p>
      <p>The licence history: approved by the FDA on 22 December 2006 for "subdermal implantation for the correction of moderate to severe facial wrinkles and folds, such as nasolabial folds" (<a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?id=P050052" rel="noopener nofollow" target="_blank">FDA PMA P050052</a>) and for HIV facial lipoatrophy; for the hands in 2015; in September 2021, as Radiesse (+) with lidocaine, for "deep injection (subdermal and/or supraperiosteal) for soft tissue augmentation to improve moderate to severe loss of jawline contour in adults over the age of 21" (<a href="https://merzaesthetics.com/news/merz-aesthetics-launches-radiesse-as-first-and-only-aesthetic-injectable-to-improve-moderate-to-severe-loss-of-jawline-contour/" rel="noopener nofollow" target="_blank">Merz 2022</a>); and on 8 April 2026, diluted with saline, for "treatment of wrinkles in the décolleté area in patients 22 years of age and older" (<a href="https://merzaesthetics.com/news/fda-approval-radiesse-for-treatment-of-wrinkles-in-decollete-area/" rel="noopener nofollow" target="_blank">Merz 2026</a>). In Europe it is a CE-marked class III device, and "a recent European Union Medical Device Regulation approval has been released for decolletage treatment" (<a href="https://pubmed.ncbi.nlm.nih.gov/38390986/" rel="noopener nofollow" target="_blank">Galadari 2024</a>). The <a href="/regenerative-aesthetics">biostimulator guide</a> compares the whole class; the <a href="/sculptra">Sculptra guide</a> and the <a href="/fillers">filler guide</a> cover the two neighbours.</p>
    `,
  },
  {
    id: 'what-the-trials-show',
    category: 'concept',
    title: 'What the trials look like — thirteen controlled trials, none of them of the hyperdiluted use',
    tldr: 'A 2024 systematic review found 13 controlled trials of calcium hydroxylapatite, eight on the face and five on the hands, all positive and too heterogeneous to pool. The face review rates cheeks, jawline, HIV lipoatrophy and nasolabial folds as supported, the lower face as likely, and says of the diluted and hyperdiluted use that "no randomized controlled trials have been published"; the body review says the same, with the hands and, since, the décolleté as the exceptions. The pivotal trials compare against collagen, hyaluronic acid or no treatment; none uses a placebo injection.',
    bodyHtml: `
      <p>The reviews: "Out of 2935 relevant references, 13 studies were included, of which 8 studies focused on facial areas and 5 on dorsum of hand … Current evidence suggests that CaHA injections improve aesthetic results, including facial areas, such as nasolabial folds and jawline, and hands … Considering the methodological limitations and heterogeneous comparisons groups, additional controlled clinical trials would contribute" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10971119/" rel="noopener nofollow" target="_blank">Amiri 2024</a>); on the face, "CaHA/CMC may be considered a safe and effective treatment option for cheeks, jawline, HIV-related facial lipoatrophy, and nasolabial folds. Treatment of marionette lines, chin, pre-jowl, and corner of the mouth also tends to respond … Despite the recent trend, guidelines, and safety profile of diluted and hyperdiluted Radiesse, no randomized controlled trials have been published" (<a href="https://pubmed.ncbi.nlm.nih.gov/37897174/" rel="noopener nofollow" target="_blank">Guida 2024</a>); on the body, "recent trends and guidelines of diluted and hyperdiluted CaHA/CMC have yet to be supported by randomized controlled trials" (<a href="https://pubmed.ncbi.nlm.nih.gov/38390986/" rel="noopener nofollow" target="_blank">Galadari 2024</a>). The trials themselves are in the rows: the fold (<a href="https://pubmed.ncbi.nlm.nih.gov/18086048/" rel="noopener nofollow" target="_blank">Smith 2007</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/18093199/" rel="noopener nofollow" target="_blank">Moers-Carpi 2008</a>), the hand (<a href="https://pubmed.ncbi.nlm.nih.gov/28562435/" rel="noopener nofollow" target="_blank">Goldman 2018</a>), the jawline (<a href="https://pubmed.ncbi.nlm.nih.gov/34784131/" rel="noopener nofollow" target="_blank">Moradi 2021</a>), the cheek (<a href="https://pubmed.ncbi.nlm.nih.gov/22759259/" rel="noopener nofollow" target="_blank">Moers-Carpi 2012</a>) and the décolleté (<a href="https://pubmed.ncbi.nlm.nih.gov/42424535/" rel="noopener nofollow" target="_blank">Fabi 2026</a>).</p>
      <p>How to read the rows: strong means more than one randomised, evaluator-blinded trial with a year of follow-up — the fold and the hand. Moderate means one such trial or a consistent open-label record behind a regulatory indication — the jawline, the cheek, the décolleté, the HIV face. Emerging means biopsies, open series and consensus documents — everything hyperdiluted. Limited means a reason not to — the lips, the nose, the glabella, the tear trough. All the pivotal trials are Merz's or its predecessor BioForm's, and an untreated control group cannot blind the patient; the numbers are real, and they are the seller's.</p>
    `,
  },
  {
    id: 'can-and-cant',
    category: 'concept',
    title: 'What Radiesse can and cannot do, on current evidence',
    tldr: 'Can: define a jawline, fill a pre-jowl hollow or a nasolabial fold and restore the back of a hand on the day, hold most of it for a year and some of it for two and a half; thicken and firm the dermis over months, on biopsy; improve chest wrinkles when diluted. Cannot: be dissolved; go safely into the lips, the tear trough, the nose or the glabella; lift a heavy jowl or a loose neck; "tighten" a face or body on anything better than open series; or hide from a CT scanner.',
    bodyHtml: `
      <p>The can: "At 12 months, 79% of CaHA folds were still improved or better versus 43% of NASHA folds … In addition, 30% less total CaHA volume was required" (<a href="https://pubmed.ncbi.nlm.nih.gov/18093199/" rel="noopener nofollow" target="_blank">Moers-Carpi 2008</a>); "Forty percent of the folds evaluated at least 30 months after the last Radiesse treatment were graded as 'improved' or better" (<a href="https://pubmed.ncbi.nlm.nih.gov/20442101/" rel="noopener nofollow" target="_blank">Bass 2010</a>); jawline responders "77.9%, 78.7%, and 62.9% at 12, 24, and 48 weeks" (<a href="https://pubmed.ncbi.nlm.nih.gov/38934231/" rel="noopener nofollow" target="_blank">Green 2024</a>); "75% of subjects achieved ≥1-point improvement" on the hand scale at three months, "generally maintained through 12 months" (<a href="https://pubmed.ncbi.nlm.nih.gov/28562435/" rel="noopener nofollow" target="_blank">Goldman 2018</a>). The cannot: "Injection of CaHA into the oral mucosa and the lips is an unapproved indication and may result in nodule formation" (<a href="https://pubmed.ncbi.nlm.nih.gov/24002146/" rel="noopener nofollow" target="_blank">Pavicic 2013</a>), at 12.4% in the first large series (<a href="https://pubmed.ncbi.nlm.nih.gov/16936541/" rel="noopener nofollow" target="_blank">Jansen 2006</a>); "CaHA has at least 11 published cases of vascular occlusion causing visual impairment, most involving the nasal dorsum" (<a href="https://pubmed.ncbi.nlm.nih.gov/41263987/" rel="noopener nofollow" target="_blank">Young 2026</a>); the manufacturer's own study of the proposed antidote "did not obtain any indications of CaHA degradation by STS, either in vitro or in vivo" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7781022/" rel="noopener nofollow" target="_blank">Danysz 2020</a>); and for the hyperdiluted use, "no randomized controlled trials have been published" (<a href="https://pubmed.ncbi.nlm.nih.gov/37897174/" rel="noopener nofollow" target="_blank">Guida 2024</a>).</p>
      <p>Where it fits: the person the <a href="/jowls">jowls guide</a> describes with a softening jawline and a pre-jowl hollow, the bony hand of the <a href="/aging-hands">hands guide</a>, the deep fold of the <a href="/nasolabial-folds">nasolabial-fold guide</a> — someone who wants the change on the day, wants it to last longer than a hyaluronic gel, and has had fillers before and knows what they want. Where it does not: a first-time patient, anything within a finger's width of the eye, lip or nose, and anyone who would want it out.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'radiesse-vs-ha-vs-sculptra',
    category: 'context',
    title: 'Radiesse or hyaluronic acid or Sculptra — firmness, tempo and the exit',
    tldr: 'Against hyaluronic acid in the fold, Radiesse lasted longer (79% versus 43% improved at a year) on 30% less product, and in a 205-person trial beat three hyaluronic gels on satisfaction and duration — but hyaluronic acid is softer, goes where Radiesse must not, and dissolves. Against Sculptra the only head-to-head is a Galderma-funded biopsy study; on the record, Radiesse shows on the day and fades over 12–18 months, Sculptra shows at three months and holds for two years. Both are irreversible. A Chinese calcium hydroxylapatite was non-inferior to Restylane in a 210-person double-blind trial.',
    bodyHtml: `
      <p>The hyaluronic-acid comparisons: the 60-patient split-face trial in which "CaHA was found to be more effective than NASHA" at every time point, "evaluators assessed CaHA as superior in 47% of patients and inferior in only 5%" (<a href="https://pubmed.ncbi.nlm.nih.gov/18093199/" rel="noopener nofollow" target="_blank">Moers-Carpi 2008</a>); the 205-patient blinded trial in which "more CaHA gel patients were satisfied or extremely satisfied than each HA tested. At 8 months, significantly more CaHA gel-treated NLFs were improved … The volumes of CaHA gel and three HA materials injected through 4 months were 2.2, 2.9, 4.8, and 2.9 mL" (<a href="https://pubmed.ncbi.nlm.nih.gov/18086052/" rel="noopener nofollow" target="_blank">Moers-Carpi 2007</a>); a double-blind split-face trial of a Chinese CaHA gel against Restylane in 210 people, "84.04% for Aphranel and 78.72% for Restylane" at 24 weeks, non-inferior (<a href="https://pubmed.ncbi.nlm.nih.gov/39331081/" rel="noopener nofollow" target="_blank">Pan 2025</a>); and a meta-analysis of the randomised fold trials that found "no significant difference between CaHA vs HA for hematomas … or nodules" (<a href="https://pubmed.ncbi.nlm.nih.gov/27178901/" rel="noopener nofollow" target="_blank">Shi 2016</a>). The caveat is the exit: a review of 190 cases of filler blindness concluded that "the treatment of HA-related blindness was likely to have better outcomes compared with other fillers due to hyaluronidase use" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6554164/" rel="noopener nofollow" target="_blank">Chatrath 2019</a>).</p>
      <p>Against poly-L-lactic acid: the 21-person randomised biopsy comparison found PLLA "stimulated more components of the extracellular matrix with less inflammatory response" while CaHA "elicited a more inflammatory response" at day 90 (<a href="https://pubmed.ncbi.nlm.nih.gov/39761144/" rel="noopener nofollow" target="_blank">Waibel 2025</a>) — funded by Sculptra's maker, and contradicted in spirit by the split-face biopsies in which "inflammatory markers increased most with HA treatment", not CaHA (<a href="https://pubmed.ncbi.nlm.nih.gov/25226004/" rel="noopener nofollow" target="_blank">Yutskovskaya 2014</a>). The facial systematic review's summary is the useful one: "PLLA maintained its effects for up to 25 months, while CaHA offered results lasting 12 to 18 months" (<a href="https://pubmed.ncbi.nlm.nih.gov/41184662/" rel="noopener nofollow" target="_blank">Ferreira 2026</a>). The <a href="/regenerative-aesthetics">biostimulator guide</a> puts it in one line: Sculptra for diffuse volume over months, Radiesse for contour with an immediate effect, hyaluronic acid when you may want it undone.</p>
    `,
  },
  {
    id: 'the-visit',
    category: 'context',
    title: 'What a session involves: undiluted, diluted or hyperdiluted, and what it costs',
    tldr: 'Three products from one syringe. Undiluted (or with a little lidocaine) it is a firm filler placed deep, on bone or under the skin, with a cannula: jawline, cheekbone, chin, pre-jowl, hands. Diluted 1:1 it is softer and spreads further. Hyperdiluted — 1:2 for normal skin, 1:4 for thin, 1:6 for atrophic — it has almost no filling power and is fanned under the skin as a "biostimulator". Dilution drops the gel\'s stiffness and cohesivity, which is the point and also the limit. A 1.5 mL syringe costs €350–600; the jawline takes two to four, the hands one or two, a hyperdilute session one or two per area, two or three sessions.',
    bodyHtml: `
      <p>The definitions come from the consensus documents: "diluted (ratio of 1:1) and hyperdiluted (≥1:2) CaHA … stimulates targeted neocollagenesis in the injection area to improve laxity and skin quality in the mid- and lower face, neck, décolletage, upper arms, abdomen, upper legs, and buttocks … In thinner and darker skin, too-superficial injections of less diluted CaHA can lead to more adverse events" — "preliminary guidelines for the novel off-label use" (<a href="https://pubmed.ncbi.nlm.nih.gov/30358631/" rel="noopener nofollow" target="_blank">Goldie 2018</a>); ten Brazilian experts with "insertion points, dosages, and volumes for both needle and cannula injections" by area (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6467620/" rel="noopener nofollow" target="_blank">de Almeida 2019</a>); the Pan-Asian panel, which agreed "that microfocused ultrasound with visualisation precedes CaHA in same day or session treatments, and that cannulas should be used" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8570653/" rel="noopener nofollow" target="_blank">Corduff 2021</a>); and US guidance on patient selection and technique (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8849118/" rel="noopener nofollow" target="_blank">Lorenc 2022</a>). The biopsy study that set the ratios used "1:2 dilution (normal skin), 1:4 dilution (thin skin), and 1:6 dilution (atrophic skin)" (<a href="https://pubmed.ncbi.nlm.nih.gov/28095536/" rel="noopener nofollow" target="_blank">Yutskovskaya 2017</a>). What dilution does to the gel: "a significant decrease in G', η*, and increase in tan(δ) with increasing dilution, indicating a decline in the product's direct filling capabilities. Cohesivity decreased dramatically with dilution" (<a href="https://pubmed.ncbi.nlm.nih.gov/38357772/" rel="noopener nofollow" target="_blank">McCarthy 2024</a>). Lidocaine, mixed in or built in, makes a real difference to the visit: pain scores 4.41 cm lower on a 10 cm scale on the lidocaine side in a double-blind split-face trial of 102 people (<a href="https://pubmed.ncbi.nlm.nih.gov/27538003/" rel="noopener nofollow" target="_blank">Schachter 2016</a>), a "unanimous preference" in 50 (<a href="https://pubmed.ncbi.nlm.nih.gov/20100272/" rel="noopener nofollow" target="_blank">Marmur 2010</a>). In 1,783 treatments of 800 Italian patients, "a cannula was used for most treatments (86.7%). Injection volume ranged from 0.4 mL to 1.5 mL", with swelling after 18.2% and bruising after 11.3% (<a href="https://pubmed.ncbi.nlm.nih.gov/26355612/" rel="noopener nofollow" target="_blank">Muti 2015</a>).</p>
      <p>The numbers that set the bill, September 2026: the cheek trial used a mean 4.7 mL (three syringes) per patient (<a href="https://pubmed.ncbi.nlm.nih.gov/22759259/" rel="noopener nofollow" target="_blank">Moers-Carpi 2012</a>); the hand studies 1.3 mL a hand (<a href="https://pubmed.ncbi.nlm.nih.gov/21197523/" rel="noopener nofollow" target="_blank">Sadick 2011</a>); the arm study 1.5 mL an arm at two visits (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4699473/" rel="noopener nofollow" target="_blank">Amselem 2016</a>); the buttock cellulite study twelve syringes over three sessions (<a href="https://pubmed.ncbi.nlm.nih.gov/38253886/" rel="noopener nofollow" target="_blank">Durairaj 2024</a>). At an indicative €350–600 a syringe in Europe, a jawline or cheek treatment is €800–2,000, hands €400–1,000, a hyperdilute course for the neck or chest €800–2,400, and a twelve-syringe body protocol is priced like surgery. Top-ups at 12–18 months.</p>
    `,
  },
  {
    id: 'brands-and-law',
    category: 'context',
    title: 'The products and the rules: Radiesse, Radiesse (+), the hybrids and the copies',
    tldr: 'Radiesse and Radiesse (+), which adds 0.3% lidocaine, are Merz products and the ones in the trials; their indications are facial folds, HIV lipoatrophy, hands, jawline and, diluted, the décolleté. Everything hyperdiluted on the face, neck and body is off-label. HArmonyCa (Allergan) suspends the same kind of microsphere in a cross-linked hyaluronic gel; Merz clinicians premix Radiesse with a Belotero gel in the syringe. A Chinese calcium hydroxylapatite gel has its own double-blind trial. The evidence belongs to the product that ran it.',
    bodyHtml: `
      <p>The label: folds (<a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?id=P050052" rel="noopener nofollow" target="_blank">FDA PMA P050052</a>), the jawline with Radiesse (+) (<a href="https://merzaesthetics.com/news/merz-aesthetics-launches-radiesse-as-first-and-only-aesthetic-injectable-to-improve-moderate-to-severe-loss-of-jawline-contour/" rel="noopener nofollow" target="_blank">Merz 2022</a>), the décolleté, hands and folds listed together in the 2026 notice (<a href="https://merzaesthetics.com/news/fda-approval-radiesse-for-treatment-of-wrinkles-in-decollete-area/" rel="noopener nofollow" target="_blank">Merz 2026</a>); "currently, the only FDA-approved indication on the body is treating the hands", with the European décolletage indication alongside (<a href="https://pubmed.ncbi.nlm.nih.gov/38390986/" rel="noopener nofollow" target="_blank">Galadari 2024</a>). The integral-lidocaine version "is as effective as CaHA" with far less pain (<a href="https://pubmed.ncbi.nlm.nih.gov/27538003/" rel="noopener nofollow" target="_blank">Schachter 2016</a>). The hybrids: HArmonyCa, "calcium hydroxyapatite microspheres suspended in a hyaluronic acid gel" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11412701/" rel="noopener nofollow" target="_blank">Braz 2024</a>), with an open-label post-marketing study of 140 people (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12434560/" rel="noopener nofollow" target="_blank">Gritti 2025</a>); and the premixed Radiesse-and-hyaluronic blend, the subject of a 23-clinician Delphi panel that itself notes "standardized guidance for use remains limited" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12856531/" rel="noopener nofollow" target="_blank">Kadouch 2026</a>). The other calcium hydroxylapatite with a trial is Aphranel, non-inferior to Restylane in 210 Chinese subjects (<a href="https://pubmed.ncbi.nlm.nih.gov/39331081/" rel="noopener nofollow" target="_blank">Pan 2025</a>); a large-particle version sold for another purpose was tried in three patients (<a href="https://pubmed.ncbi.nlm.nih.gov/21501888/" rel="noopener nofollow" target="_blank">Alam 2011</a>).</p>
      <p>What that means in a European clinic: Radiesse is a CE-marked class III device used on-label for folds, volume, hands and the décolleté and off-label, under the doctor's responsibility, for everything sold as "hyperdilute biostimulation" of the face, neck, arms, abdomen, knees and buttocks. Off-label is lawful and common; it should be said out loud, and it is a reason to ask what evidence the clinic is relying on. Ask for the brand and lot number on your record, as with any product that cannot be dissolved. Regulatory status as of September 2026.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-nasolabial-folds',
    category: 'use',
    title: 'Nasolabial folds — three randomised trials and a three-year follow-up',
    tldr: 'The pivotal trial put Radiesse in one fold and human collagen in the other in 117 people: 79% had the better result on the Radiesse side at six months, with less product and fewer injections. Against a hyaluronic filler in 60 people, 79% of Radiesse folds were still improved at twelve months versus 43%; against three hyaluronic gels in 205 people it led on satisfaction and duration. In the extension, 40% of folds were still improved at 30 months or more and 102 people followed for three years had no nodules, granulomas or infections. A Chinese calcium hydroxylapatite was non-inferior to Restylane, double-blind, in 210.',
    evidence: 'strong',
    focus: 'folds',
    note: 'Best for: a deep fold in a face that has had filler before; a first-timer, or a fold that is really a deflated cheek, is a different decision',
    sessions: '1 session, optional touch-up at 3–4 months; repeat at 12–18 months',
    downtime: '2–7 days of swelling and bruising',
    cost: '€350–600 per 1.5 mL syringe; usually 1–2',
    bodyHtml: `
      <p>The trials: "Four centers enrolled 117 subjects with moderate to deep nasolabial folds. Subjects received CaHA on one side of the face and human collagen on the other … Seventy-nine percent of subjects had superior improvement on the CaHA side through 6 months … significantly less volume and fewer injections were needed for CaHA" (<a href="https://pubmed.ncbi.nlm.nih.gov/18086048/" rel="noopener nofollow" target="_blank">Smith 2007</a>); "Sixty patients were enrolled at two medical clinics in Europe … At 12 months, 79% of CaHA folds were still improved or better versus 43% of NASHA folds … Blinded evaluators and patients preferred CaHA two to one" (<a href="https://pubmed.ncbi.nlm.nih.gov/18093199/" rel="noopener nofollow" target="_blank">Moers-Carpi 2008</a>); 205 randomised patients, Radiesse against Juvéderm 24, Juvéderm 24HV and Perlane, "more effective and longer lasting than each HA in maintaining NLF augmentation" (<a href="https://pubmed.ncbi.nlm.nih.gov/18086052/" rel="noopener nofollow" target="_blank">Moers-Carpi 2007</a>). The follow-up: "There were no long-term or delayed-onset adverse events in these 102 patients followed for three years, including no reports of nodules, granulomata, or infections" (<a href="https://pubmed.ncbi.nlm.nih.gov/20442101/" rel="noopener nofollow" target="_blank">Bass 2010</a>). The newer product: 188 completers, investigator-rated improvement 84.04% against 78.72% for Restylane at 24 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/39331081/" rel="noopener nofollow" target="_blank">Pan 2025</a>). The pooled safety: no difference from hyaluronic acid in haematomas or nodules across the randomised fold trials (<a href="https://pubmed.ncbi.nlm.nih.gov/27178901/" rel="noopener nofollow" target="_blank">Shi 2016</a>).</p>
      <p>Graded strong, as the <a href="/nasolabial-folds">nasolabial-fold guide</a> grades it: three randomised comparisons, blinded evaluation, a year of controlled follow-up and three of safety. The older trials were run by the then manufacturer and the comparator collagen no longer exists, but the hyaluronic-acid head-to-heads are the comparison a patient actually faces, and Radiesse won them on duration. What it loses on is reversibility — the fold guide's reason for sending first-timers to hyaluronic acid still holds.</p>
    `,
  },
  {
    id: 'use-hands',
    category: 'use',
    title: 'The backs of the hands — the first filler with a regulatory hand indication',
    tldr: 'In the pivotal trial 114 people were randomised three to one to Radiesse or no treatment and graded by blinded investigators: 75% improved at least a grade at three months and generally held it to twelve, 98% rated themselves improved at three months and 86% at a year, and hand function was unaffected. A second controlled study found 20 of 20 treated hands improved at four weeks against 0 of 10. X-rays two years later still showed the product in 83% of hands and never obscured the bones. Diluted with lidocaine and placed with a cannula, one or two sessions are usual.',
    evidence: 'strong',
    focus: 'hands',
    note: 'Best for: veins and tendons showing through thinned fat; spots and crepe are the sun\'s work and need the hands guide',
    sessions: '1–2 sessions a month apart, 1–1.5 mL per hand; repeat at 12 months',
    downtime: 'Swelling for up to 2 weeks in about one in five; keep the hands elevated the first evening',
    cost: '€400–1,000 for both hands',
    bodyHtml: `
      <p>The trials: "This multicenter, controlled, single-blind study … included 114 subjects randomized 3:1 to CaHA treatment and untreated control groups … A total of 75% of subjects achieved ≥1-point improvement on the MHGS (p &lt; .0001) at 3 months (primary end point); this response was generally maintained through 12 months. Proportions of subjects reporting improvement ranged from 98% (3 months) to 86% (12 months). There were no clinically significant differences between control and CaHA-treated subjects in any hand function measure" (<a href="https://pubmed.ncbi.nlm.nih.gov/28562435/" rel="noopener nofollow" target="_blank">Goldman 2018</a>); "At Week 4, all Treatment group subjects (20/20) achieved a ≥1-point improvement on the MHGS compared with 0/10 (0%) of the Control group" (<a href="https://pubmed.ncbi.nlm.nih.gov/26618470/" rel="noopener nofollow" target="_blank">Bertucci 2015</a>). The longer view: ten women followed a year, 80% of hands improved at nine months and 30–40% at twelve (<a href="https://pubmed.ncbi.nlm.nih.gov/21197523/" rel="noopener nofollow" target="_blank">Sadick 2011</a>); 58 women treated one to four times over up to five years, 94.8% a grade better after the first session (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11620197/" rel="noopener nofollow" target="_blank">Bartoletti 2024</a>). The technique: diluted product improved collagen density, elasticity and ultrasound measures whether placed subdermally or in the deep fat lamina in a side-to-side comparison of 15 women (<a href="https://pubmed.ncbi.nlm.nih.gov/32976172/" rel="noopener nofollow" target="_blank">Figueredo 2020</a>); the cannula runs in the dorsal intermediate lamina, lifted clear of the veins by pinching the skin (<a href="https://pubmed.ncbi.nlm.nih.gov/33214113/" rel="noopener nofollow" target="_blank">Kim 2021</a>); 1.3 mL with 0.5 mL of lidocaine a hand was the original recipe (<a href="https://pubmed.ncbi.nlm.nih.gov/19250166/" rel="noopener nofollow" target="_blank">Edelson 2009</a>). Imaging: "CaHA was seen to be present in 100% of hands in Month 1 X-rays and in 83.3% in Month 24 X-rays, but no bone obscuration was reported in any X-rays at any evaluated time point" (<a href="https://pubmed.ncbi.nlm.nih.gov/36573029/" rel="noopener nofollow" target="_blank">Moradi 2023</a>).</p>
      <p>Graded strong, as the <a href="/aging-hands">hands guide</a> grades it: two controlled trials with blinded grading, twelve months of follow-up and a regulatory indication. The <a href="/regenerative-aesthetics">biostimulator guide</a> grades the hand moderate because the later randomised trials compared blends with each other rather than with nothing; on a page about this product, the pivotal trial is the one that counts. The hands guide covers the spots, the crepe and the sunscreen that the filler does nothing for.</p>
    `,
  },
  {
    id: 'use-jawline',
    category: 'use',
    title: 'Jawline contour — the indication Radiesse (+) was approved for in 2021',
    tldr: 'One pivotal trial: 180 people with moderate or severe loss of jawline contour randomised two to one to Radiesse (+) or a twelve-week wait; 75.6% of treated jawlines improved at least a grade on a validated scale at week 12 against 8.8% of controls, and 67.3% of responders were still improved at 48 weeks. Pooled long-term data put responders at 77.9%, 78.7% and 62.9% at 12, 24 and 48 weeks, and at 60 weeks 74.6% with a retreatment versus 43.5% without. Deep placement, on bone or under the skin, with a cannula. It defines a line; it does not lift a jowl.',
    evidence: 'moderate',
    focus: 'face',
    note: 'Best for: a softening jawline and pre-jowl hollow in a face with good skin; a heavy jowl is fat and ligament and belongs to surgery',
    sessions: '1 session plus a touch-up at 4 weeks; retreatment at about a year',
    downtime: '3–7 days of swelling and tenderness on chewing',
    cost: '€800–2,000 (2–4 syringes)',
    bodyHtml: `
      <p>The trial: "Healthy eligible patients with moderate or severe ratings on the Merz Jawline Assessment Scale (MJAS) were randomized 2:1 to treatment with CaHA (+) or to control. Patients in the control group remained untreated until week 12 … Treatment response rate (≥1-point MJAS improvement) was 93/123 (75.6%) for the treatment group and 5/57 (8.8%) for the control/delayed-treatment group at week 12 … A total of 76/113 (67.3%) patients who responded to treatment 12 weeks after initial injection also demonstrated persistent improvement 48 weeks after initial treatment" (<a href="https://pubmed.ncbi.nlm.nih.gov/34784131/" rel="noopener nofollow" target="_blank">Moradi 2021</a>). The long-term report: "MJAS responder rates were 77.9%, 78.7%, and 62.9% at 12, 24, and 48 weeks post-treatment, respectively. Responder rate on the MJAS at 60 weeks was 74.6% for those who received retreatment and 43.5% for those patients who received only the initial and touchup treatments" (<a href="https://pubmed.ncbi.nlm.nih.gov/38934231/" rel="noopener nofollow" target="_blank">Green 2024</a>). The consensus that preceded it sets out technique and volumes by stage of "oval loss" (<a href="https://pubmed.ncbi.nlm.nih.gov/24641600/" rel="noopener nofollow" target="_blank">Dallara 2014</a>); a six-point supraperiosteal technique in 16 Asian women measured brow and tragus-to-mouth changes at 24 weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12594742/" rel="noopener nofollow" target="_blank">Wu 2025</a>); the premixed Radiesse–hyaluronic blend took a clinician-rated jawline score from 2.12 to 0.68 at three months and 1.27 at twelve in 41 women (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8831259/" rel="noopener nofollow" target="_blank">Fakih-Gomez 2022</a>).</p>
      <p>Graded moderate, as the <a href="/jowls">jowls guide</a> grades it: one randomised, evaluator-blinded pivotal trial and its own extension, against no treatment, by the manufacturer. It is a good trial and a regulator accepted it; one trial is still one trial. The jowls guide's point stands — this draws a straighter line under a jowl by filling in front of and behind it, and the <a href="/skin-tightening">tightening guide</a> and the facelift are where a heavy jowl goes.</p>
    `,
  },
  {
    id: 'use-cheeks-midface',
    category: 'use',
    title: 'Cheeks and midface volume — one randomised trial, three syringes a face',
    tldr: 'In 116 people randomised to immediate treatment or a three-month wait, a mean 4.7 mL into the malar, submalar and zygomatic cheek produced MRI-measured volume gains, masked-evaluator improvement, and satisfaction of 92% among physicians and 80% among patients at twelve months, with no serious adverse events. An MRI case found no product left at 2.5 years with the volume still raised. A systematic review of non-hyaluronic midface fillers found satisfaction improving over time and the usual bruising and swelling. Firmer and longer than hyaluronic acid on the cheekbone; not for the soft under-eye cheek.',
    evidence: 'moderate',
    focus: 'face',
    note: 'Best for: projection on the cheekbone in someone who has had hyaluronic acid there and wants it to last; diffuse deflation is Sculptra\'s job',
    sessions: '1 session, optional touch-up; repeat at 12–18 months',
    downtime: '3–7 days',
    cost: '€700–1,800 (2–3 syringes)',
    bodyHtml: `
      <p>The trial: "Subjects (N = 116) were randomized to an immediate treatment group or to an untreated control group (crossed over at 3 months). Patients received CaHA injections in their cheeks, defined as the malar, submalar, zygoma, preauricular, and infraorbital areas … Mean total treatment volume (107 patients) was 4.7 mL of CaHA. At all points, physicians reported satisfaction of 75% or more, with 92% satisfaction at 12 months. Most patients also reported being satisfied at all time points, with 80% satisfied at 12 months. No serious adverse events occurred" (<a href="https://pubmed.ncbi.nlm.nih.gov/22759259/" rel="noopener nofollow" target="_blank">Moers-Carpi 2012</a>). Practice: in 800 Italian patients the zygomatic and malar areas were the most treated sites, 86.7% by cannula (<a href="https://pubmed.ncbi.nlm.nih.gov/26355612/" rel="noopener nofollow" target="_blank">Muti 2015</a>). Persistence: no product on MRI at 2.5 years, "but tissue volume remained increased, indicating a collagen-stimulating effect" — one patient (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4330000/" rel="noopener nofollow" target="_blank">Pavicic 2015</a>). The review of non-hyaluronic midface fillers: seven studies, "due to the gradual volumizing effects of PMMA, PLLA, and CaHA, patient satisfaction generally improved over time" (<a href="https://pubmed.ncbi.nlm.nih.gov/33648015/" rel="noopener nofollow" target="_blank">Trinh 2021</a>). The hybrid's post-marketing study reports a midface responder rate of 82.8% at one month, "remaining high through Month 12", open-label in 140 people (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12434560/" rel="noopener nofollow" target="_blank">Gritti 2025</a>).</p>
      <p>Graded moderate, as the <a href="/facial-volume-loss">volume-loss guide</a> grades it: one randomised trial whose headline outcome is satisfaction, plus consistent practice data. The cheek trial's treatment area included the "infraorbital" cheek; current practice keeps this product on the bone and away from the thin skin under the eye, for the reasons in the last row of this chart.</p>
    `,
  },
  {
    id: 'use-hiv-lipoatrophy',
    category: 'use',
    title: 'HIV facial lipoatrophy — a labelled indication on an open-label trial',
    tldr: 'The registration study enrolled 100 people with antiretroviral-era facial wasting, open-label: every assessable patient was rated improved or better at every visit through twelve months and 91% at eighteen, skin thickness stayed above baseline at a year, and satisfaction answers ran at 97–100%. A 26-patient series mixed it with anaesthetic and adrenaline for a one-step correction. The systematic review of fillers for HIV lipoatrophy gives poly-L-lactic acid the only grade B and places calcium hydroxylapatite "deeply over bone for focal enhancement".',
    evidence: 'moderate',
    focus: 'medical',
    note: 'Best for: focal, deep correction over bone in a wasted face; diffuse temples and cheeks are better served by poly-L-lactic acid',
    sessions: '1–2 sessions; touch-ups at 6–12 months',
    downtime: '3–7 days',
    cost: '€350–600 per syringe; several per course; sometimes reimbursed',
    bodyHtml: `
      <p>The study: "This 18-month, prospective, open-label, multicenter clinical trial … enrolled 100 subjects (94 men and six women) … One hundred percent of assessable patients were rated as improved or better on the scale at every time point through 12 months; 91 percent were improved or better at 18 months. 'Yes' responses to all patient satisfaction questions ranged from 97 percent to 100 percent … skin thickness measurements at 12 months remained statistically better than those at baseline" (<a href="https://pubmed.ncbi.nlm.nih.gov/16936543/" rel="noopener nofollow" target="_blank">Silvers 2006</a>). The series: 26 people, product mixed with local anaesthetic and adrenaline, "a stable result … in all the cases at the end of follow-up (3 months)" (<a href="https://pubmed.ncbi.nlm.nih.gov/24299576/" rel="noopener nofollow" target="_blank">Rauso 2013</a>). Imaging in this population and in fold patients: visible on CT, inconsistently on X-ray, "no obscuration of underlying structures … and no evidence of CaHA migration" (<a href="https://pubmed.ncbi.nlm.nih.gov/18547186/" rel="noopener nofollow" target="_blank">Carruthers 2008</a>). The ranking: "poly-L-lactic acid is the only filler agent with grade of recommendation: B. Other reviewed filler agents received grade of recommendation: C or D … calcium hydroxylapatite, with a Food and Drug Administration indication of subdermal implantation, may be best used deeply over bone for focal enhancement" (<a href="https://pubmed.ncbi.nlm.nih.gov/26481056/" rel="noopener nofollow" target="_blank">Jagdeo 2015</a>).</p>
      <p>Graded moderate: a regulatory indication resting on one large open-label study with near-universal improvement and no control group. The <a href="/sculptra">Sculptra guide</a> grades the same indication strong for poly-L-lactic acid, which has the randomised trials; the two products are complementary here rather than rivals.</p>
    `,
  },
  {
    id: 'use-decolletage',
    category: 'use',
    title: 'Décolleté wrinkles — diluted 1:2, a randomised trial and a 2026 FDA indication',
    tldr: 'The chest is the one place where diluted Radiesse has a controlled trial: women with moderate-to-severe décolleté wrinkles randomised to up to three sessions of 1:2 diluted product or a 24-week wait, graded by blinded evaluators — 71.2% of treated women a grade better at rest against 6.3% of controls, with no interference on later breast imaging. An earlier randomised study of two schedules found 73.5% improved sixteen weeks after the last session. A biopsy pilot showed new collagen and elastin. Europe added the indication under its device regulation; the FDA followed in April 2026.',
    evidence: 'moderate',
    focus: 'body',
    note: 'Best for: crepey, lined chest skin after the sunscreen and the laser question have been settled; the décolletage guide grades the alternatives',
    sessions: '2–3 sessions, 8–16 weeks apart, 1–2 syringes diluted 1:2',
    downtime: '3–7 days of bruising and swelling',
    cost: '€400–900 per session',
    bodyHtml: `
      <p>The controlled trial: "Eligible females were randomized to immediate or delayed treatment. Patients assigned to immediate treatment received up to three diluted Radiesse sessions … Patients assigned to delayed treatment remained untreated through Week 24 (primary endpoint) … Effectiveness was assessed by blinded evaluators … The Week 24 estimated responder rate (≥1-point improvement on the MAS Décolleté Wrinkles - At Rest) was 71.2% [95% CI: 61.4%, 79.4%] among treated patients compared with 6.3% [95% CI: 1.5%, 22.9%] among untreated controls … No interference attributable to diluted Radiesse was observed on post-treatment breast imaging" (<a href="https://pubmed.ncbi.nlm.nih.gov/42424535/" rel="noopener nofollow" target="_blank">Fabi 2026</a>). The schedule study: up to three injection cycles "either 8 weeks apart (3 injection cycles) or 16 weeks apart (2 injection cycles) … Sixteen weeks after the last treatment, the response rate … was 73.5%" (<a href="https://pubmed.ncbi.nlm.nih.gov/38954627/" rel="noopener nofollow" target="_blank">Pavicic 2024</a>). The biology: in 20 people with lax neck and chest skin, diluted product raised collagen I and III, elastin and vessel counts on biopsy at four and seven months, with cutometer and ultrasound gains (<a href="https://pubmed.ncbi.nlm.nih.gov/28095536/" rel="noopener nofollow" target="_blank">Yutskovskaya 2017</a>). With microfocused ultrasound first, chest wrinkle scores fell from 2.6 to 1.1 at 90 days in a retrospective series (<a href="https://pubmed.ncbi.nlm.nih.gov/29285863/" rel="noopener nofollow" target="_blank">Casabona 2018</a>). The approval: "treatment of wrinkles in the décolleté area in patients 22 years of age and older" (<a href="https://merzaesthetics.com/news/fda-approval-radiesse-for-treatment-of-wrinkles-in-decollete-area/" rel="noopener nofollow" target="_blank">Merz 2026</a>).</p>
      <p>Graded moderate, as the <a href="/decolletage">décolletage guide</a> and the <a href="/regenerative-aesthetics">biostimulator guide</a> grade it: one randomised trial against no treatment and one randomised comparison of schedules, both the manufacturer's, a year of follow-up. It is the best-evidenced injectable for the chest and the only diluted use on any label. The breast-imaging finding matters: a radio-opaque product in the chest of a woman of mammography age was a reasonable worry, and the trial looked.</p>
    `,
  },
  {
    id: 'use-marionette-chin',
    category: 'use',
    title: 'Marionette lines, pre-jowl and chin — likely, on series and small studies',
    tldr: 'The facial systematic review says marionette lines, chin, pre-jowl and the corner of the mouth "tend to respond with a high degree of efficacy" — on non-randomised studies. A 22-patient series of hyperdiluted product across the mid and lower face measured significant falls in jowl volume, fold depth and marionette depth on 3D imaging at day 150; ten women given toxin to the chin muscle and Radiesse on the bone all gained a grade of chin projection at one and six months; the first 609-patient experience included marionette lines and oral commissures. The fold trials do not transfer automatically to a mobile corner of the mouth, where nodules were commonest.',
    evidence: 'emerging',
    focus: 'face',
    note: 'Best for: the pre-jowl hollow and a retruded chin, deep and on bone; the marionette line itself sits in the mobile zone where nodules form',
    sessions: '1 session; diluted protocols 2',
    downtime: '3–7 days',
    cost: '€350–1,200',
    bodyHtml: `
      <p>The evidence: "Treatment of marionette lines, chin, pre-jowl, and corner of the mouth also tends to respond with a high degree of efficacy" (<a href="https://pubmed.ncbi.nlm.nih.gov/37897174/" rel="noopener nofollow" target="_blank">Guida 2024</a>); 22 patients given two sessions of 1:3 hyperdiluted product, "a significant improvement in cheek volume … and significant reductions in jowl volume, nasolabial fold depth, and marionette line depth" at day 150 on 3D imaging (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12686807/" rel="noopener nofollow" target="_blank">Durairaj 2025b</a>); ten women with a hyperactive mentalis and chin retrusion, "all subjects demonstrated at least a one-point improvement in ACPS … at both the one-month and six-month posttreatment visits" with toxin plus pre-periosteal Radiesse (+) (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10911266/" rel="noopener nofollow" target="_blank">Barbarino 2024</a>); 609 early patients treated in "the nasolabial folds, marionette lines, oral commissure, cheeks, chin, lips, and radial lip lines", 89% of respondents willing to repeat at six months (<a href="https://pubmed.ncbi.nlm.nih.gov/16936541/" rel="noopener nofollow" target="_blank">Jansen 2006</a>); a split-face randomised study in which diluted product with or without ultrasound took marionette scores from 2.47 to 1.8 at fifteen months in 20 people (<a href="https://pubmed.ncbi.nlm.nih.gov/32272518/" rel="noopener nofollow" target="_blank">Yutskovskaya 2020</a>). The caution: of the nodules in the safety review, "49% occurred in 'dynamic' areas" (<a href="https://pubmed.ncbi.nlm.nih.gov/28247924/" rel="noopener nofollow" target="_blank">Kadouch 2017</a>).</p>
      <p>Graded emerging, as the <a href="/marionette-lines">marionette guide</a> grades it: the class has randomised fold trials, this use has series. The chin and pre-jowl, where the product sits on bone under quiet tissue, are anatomically the safer half of this row; the corner of the mouth is the half where the nodules were.</p>
    `,
  },
  {
    id: 'use-temples',
    category: 'use',
    title: 'Hollow temples — ten patients, and an artery that matters',
    tldr: 'Ten people given supraperiosteal boluses of Radiesse (+): nine of ten temples graded 1 after treatment, physicians rating 80% very much improved at a month, and the subjects looking four years younger to blinded raters. A systematic review of temple fillers counted 93 calcium hydroxylapatite patients among 881. The Pan-Asian panel disagreed about the plane. The temple carries the superficial temporal artery and a published poly-L-lactic acid blindness; here a firm, undissolvable product has less margin than a hyaluronic gel.',
    evidence: 'emerging',
    focus: 'face',
    note: 'Best for: deep, on-bone correction by an injector who does temples weekly; hyaluronic acid is the first choice because it can be dissolved',
    sessions: '1 session',
    downtime: '3–7 days; chewing discomfort',
    cost: '€350–900',
    bodyHtml: `
      <p>The study: "The study enrolled 10 subjects aged 32-68 years old. Physician GAIS scores of subject appearance at 1 month were rated as 'very much improved' in 80% and 'much improved' in 20% of subjects. Temple hollows were graded as 1 after treatment in 90% of subjects … estimates for subjects' perceived age were on average 4 years younger than their actual age" (<a href="https://pubmed.ncbi.nlm.nih.gov/32441877/" rel="noopener nofollow" target="_blank">Barbarino 2021</a>). The consensus split: "CaHA should be placed in the interfascial layer for temple contouring" was among the statements the Pan-Asian panel could not agree on (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8570653/" rel="noopener nofollow" target="_blank">Corduff 2021</a>). The risk: visual loss after biostimulators includes temple injections (<a href="https://pubmed.ncbi.nlm.nih.gov/41263987/" rel="noopener nofollow" target="_blank">Young 2026</a>), the temple was the site in 9% of 198 filler blindness cases (<a href="https://pubmed.ncbi.nlm.nih.gov/40167411/" rel="noopener nofollow" target="_blank">Foster 2025</a>), and the expert consensus on Radiesse vascular events begins with "a thorough knowledge of facial vascular anatomy" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7687073/" rel="noopener nofollow" target="_blank">van Loghem 2020</a>).</p>
      <p>Graded emerging: a ten-patient open study. The <a href="/facial-volume-loss">volume-loss guide</a> calls calcium hydroxylapatite "too firm for the temple and orbit" as a general rule and sends the temple to hyaluronic acid or, for diffuse hollowing, to poly-L-lactic acid, which now has a 174-person randomised trial there (the <a href="/sculptra">Sculptra guide</a>).</p>
    `,
  },
  {
    id: 'use-face-hyperdilute',
    category: 'use',
    title: 'Hyperdilute "skin tightening" of the face — three consensus papers and no randomised trial',
    tldr: 'The protocol that made Radiesse a "biostimulator": one part product to two to six parts saline and lidocaine, fanned under the skin of the cheeks and lower face in two or three sessions. The evidence is a 50-patient case series reporting improvement in 95% of 30–40-year-olds and 70% of those over 60, a 22-patient 3D-imaging series, a 36-patient "vectorial lift" pilot, a 12-woman pilot of treatment order with ultrasound, and a 20-person split-face study with ultrasound in which jawline scores moved from 2.2 to 1.9 over fifteen months. The 2024 systematic review: "no randomized controlled trials have been published".',
    evidence: 'emerging',
    focus: 'skin',
    note: 'Best for: thin, crepey lower-face skin in someone already having the product for contour; priced like a proven treatment, graded like a promising one',
    sessions: '2–3 sessions, 4–8 weeks apart, 1–2 syringes each',
    downtime: '3–7 days of swelling and small lumps that are massaged out',
    cost: '€400–1,000 per session',
    bodyHtml: `
      <p>The evidence: 50 patients of varying ages, "effective in improving skin thickness, laxity, and wrinkles in 95% of 30-40 year-olds, 80% of 40-60 year-olds, and 70% of &gt;60 year-olds" by the author's assessment (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10693750/" rel="noopener nofollow" target="_blank">Massidda 2023</a>); 22 patients, 1:3, two sessions, significant 3D changes at day 150 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12686807/" rel="noopener nofollow" target="_blank">Durairaj 2025b</a>); 36 participants in a single-session deep-plus-diluted technique with photographs at 90 days (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11499372/" rel="noopener nofollow" target="_blank">Amaral 2024</a>); a panfacial case series from a teaching course (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11903391/" rel="noopener nofollow" target="_blank">Green 2025</a>) and a layered-dilution protocol paper (<a href="https://pubmed.ncbi.nlm.nih.gov/42390054/" rel="noopener nofollow" target="_blank">Gladstein 2025</a>); twelve women randomised to ultrasound-then-Radiesse or the reverse, the first order producing "a 143% relative increase in elastin coverage, compared with a 63% increase" (<a href="https://pubmed.ncbi.nlm.nih.gov/39511699/" rel="noopener nofollow" target="_blank">Doyle 2025</a>); twenty people in a randomised split-face comparison with ultrasound, marionette, jawline and neck scores each about a third of a grade better at fifteen months (<a href="https://pubmed.ncbi.nlm.nih.gov/32272518/" rel="noopener nofollow" target="_blank">Yutskovskaya 2020</a>). The reviews: "no randomized controlled trials have been published" (<a href="https://pubmed.ncbi.nlm.nih.gov/37897174/" rel="noopener nofollow" target="_blank">Guida 2024</a>); the combined ultrasound-plus-Radiesse literature is "11 studies, mainly pre-post studies" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12080884/" rel="noopener nofollow" target="_blank">Amiri 2025</a>); the consensus guidelines call themselves "preliminary guidelines for the novel off-label use" (<a href="https://pubmed.ncbi.nlm.nih.gov/30358631/" rel="noopener nofollow" target="_blank">Goldie 2018</a>).</p>
      <p>Graded emerging, as the <a href="/sagging-skin">sagging-skin guide</a>, the <a href="/collagen-loss">collagen-loss guide</a> and the <a href="/regenerative-aesthetics">biostimulator guide</a> grade it: the biology is real on biopsy, the clinical evidence is uncontrolled, and the effect sizes where they are measured are fractions of a grade. "Tightening" here means a somewhat thicker, firmer dermis over months. The <a href="/skin-tightening">tightening guide</a> grades the devices it is usually sold alongside.</p>
    `,
  },
  {
    id: 'use-neck',
    category: 'use',
    title: 'Neck lines and laxity — a 22-woman before-and-after study and a biopsy pilot',
    tldr: 'Twenty-two women with mild-to-moderate neck ageing had two sessions of 1:4 hyperdiluted product 45 days apart: on blinded photographs at day 120, necklines were a grade better in 86% and laxity in 82%, dermal thickness rose 15% on ultrasound, and 82% reported high satisfaction. With microfocused ultrasound first, neckline scores fell from 2.6 to 1.3 at 90 days in 29 retrospective patients. The biopsy pilot behind the dilution ratios was done in the neck and chest. No control group anywhere; the chest now has one and the neck does not.',
    evidence: 'emerging',
    focus: 'body',
    note: 'Best for: crepe and fine horizontal lines in thin neck skin, hyperdiluted 1:4 or more; bands are toxin, laxity is a device or a neck lift',
    sessions: '2 sessions, 6 weeks apart, 1 syringe hyperdiluted',
    downtime: '3–7 days; visible small lumps for a few days',
    cost: '€400–800 per session',
    bodyHtml: `
      <p>The study: "A quasi-experimental longitudinal trial (before and after) was performed by enrolling 22 adult women with mild and moderate neck aging … two sessions of subdermal hyperdiluted CaHA (D0 and D45) … At D120, scores decreased in 86% (95% CI 68-99%) of the participants by at least one degree on the necklines scale and in 82% (95% CI 73-90%) for neck laxity … The mean dermal thickness increased by 15% (95% CI 8-21%) at D120. No severe adverse effects were recorded" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10226485/" rel="noopener nofollow" target="_blank">Trindade de Almeida 2023</a>). The combination series: 47 subjects, "mean neckline score improved from 2.6 (moderate-to-severe lines) at baseline to 1.3 (mild lines) 90 days after treatment" with ultrasound then 1:1 diluted product (<a href="https://pubmed.ncbi.nlm.nih.gov/29285863/" rel="noopener nofollow" target="_blank">Casabona 2018</a>). The biopsies: collagen I, III and elastin up at four and seven months in 20 people treated in the neck and décolletage (<a href="https://pubmed.ncbi.nlm.nih.gov/28095536/" rel="noopener nofollow" target="_blank">Yutskovskaya 2017</a>). The guidance: "in thinner and darker skin, too-superficial injections of less diluted CaHA can lead to more adverse events" (<a href="https://pubmed.ncbi.nlm.nih.gov/30358631/" rel="noopener nofollow" target="_blank">Goldie 2018</a>).</p>
      <p>Graded emerging, as the <a href="/neck">neck guide</a> grades it: open-label series and consensus, no controlled trial. It is a grade above poly-L-lactic acid on the neck, which that guide and the <a href="/sculptra">Sculptra guide</a> grade limited because of nodules in the thin anterior skin; hyperdilution is what makes the difference, and it is also why the result is modest.</p>
    `,
  },
  {
    id: 'use-body-arms-abdomen-knees',
    category: 'use',
    title: 'Upper arms, abdomen and knees — series of ten to thirty, and one split-body study that measured nothing',
    tldr: 'Thirty people given 1.5 mL an arm at two visits: all subjects and evaluators satisfied at four months. Ten women\'s arm elasticity from 72 to 82 cutometer units at three months, and ten abdomens 26.7% thicker in the dermis on ultrasound at ten weeks. Knees better on a cellulite score at three months in a retrospective pilot. In the one split-body study — twenty women, ultrasound plus 1:1 diluted product on one thigh and knee — clinicians saw improvement at 12 and 24 weeks and the 3D imaging and optical tomography did not. The body review: no randomised trials.',
    evidence: 'emerging',
    focus: 'body',
    note: 'Best for: mild crepe of the inner arm, abdomen or above the knee in someone who has ruled out surgery; a thicker dermis, not a lift',
    sessions: '2 sessions a month apart, 1–2 syringes per area hyperdiluted 1:2–1:4',
    downtime: '3–10 days of bruising',
    cost: '€400–1,200 per area per session',
    bodyHtml: `
      <p>The series: "30 subjects … received injections with Radiesse (1.5 mL/arm) at two separate visits, 1 month apart … All (100%) of both subjects and evaluators were 'satisfied' or 'very satisfied' with treatment" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4699473/" rel="noopener nofollow" target="_blank">Amselem 2016</a>); "Cutometry results for upper arm skin showed an increase in skin elasticity from 72 U at baseline to 82 U at Month 3 … Diluted CaHA resulted in an overall increase in dermal thickness of 26.7%" in the abdomen (<a href="https://pubmed.ncbi.nlm.nih.gov/28915285/" rel="noopener nofollow" target="_blank">Lapatina 2017</a>); six women's arm-skin hydration up 12.2% on corneometry after one 1:4 session (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11256986/" rel="noopener nofollow" target="_blank">Palo 2024</a>); knees, "a significant reduction of KCSS at T1 … mainly in subjects with lower KCSS at T0", with swelling, bruising and "skin irregularities" lasting two to three weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/32713163/" rel="noopener nofollow" target="_blank">Guida 2020</a>). The split-body study: "the treated thigh and knee experienced significant improvement in qualitative clinician scales (p&lt;0.01) … no significant changes were noted by quantitative measures. Adverse events were reported in 68 percent of patients, including mild bruising (n=12) and swelling (n=10)" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10005808/" rel="noopener nofollow" target="_blank">Juhász 2023</a>). The review: hyperdilutions "on the neck, feet, arms, thighs, abdomen, and other body parts" are in "wide use with a good safety profile" and "have yet to be supported by randomized controlled trials" (<a href="https://pubmed.ncbi.nlm.nih.gov/38390986/" rel="noopener nofollow" target="_blank">Galadari 2024</a>).</p>
      <p>Graded emerging, as the <a href="/upper-arms">upper-arms guide</a> grades it. The split-body result is the honest summary of the field: a clinician looking at a photograph sees an improvement that the measuring instruments do not. The <a href="/body-contouring">body-contouring guide</a> and the arm lift are where loose skin with real excess goes.</p>
    `,
  },
  {
    id: 'use-buttocks-cellulite',
    category: 'use',
    title: 'Buttocks and cellulite — a twelve-syringe open study and a three-way randomised comparison',
    tldr: 'Twenty-four women given twelve syringes of 1:1 diluted product over three sessions with a cannula that also cuts the bands: visible dimples down 54%, dimple depth down 50% and a cellulite severity score down 44% at fourteen weeks, open-label. Twenty women given ultrasound then diluted product: a 4.5-point improvement on a cellulite scale at 90 days on blinded photographs. In a randomised study of 61 women, all three of subcision, ultrasound and Radiesse together beat any two. No study isolates what the Radiesse contributed.',
    evidence: 'emerging',
    focus: 'body',
    note: 'Best for: lax, dimpled buttock skin as part of a combination with subcision; count the syringes before the sessions',
    sessions: '2–3 sessions, 4–6 weeks apart, 2–4 syringes each',
    downtime: '1–2 weeks of bruising with subcision',
    cost: '€1,000–2,500 per session',
    bodyHtml: `
      <p>The studies: "Subjects underwent three treatment sessions, receiving a total of 12 syringes of 1:1 diluted CaHA administered using a cannula-based subcision technique … Twenty-four subjects completed the study … a mean reduction of 54.0% in the number of visible dimples and 50.09% in dimple depth compared to baseline. The mean CSS score decreased by 4.29 points, representing a 43.92% improvement" (<a href="https://pubmed.ncbi.nlm.nih.gov/38253886/" rel="noopener nofollow" target="_blank">Durairaj 2024</a>); "Twenty women (18-55 years old) with skin laxity and moderate-to-severe cellulite … MFU-V was applied … and immediately followed by subdermal CaHA injection (1 ml/buttock or thigh) … a 4.5-point improvement in mean overall score" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5548562/" rel="noopener nofollow" target="_blank">Casabona 2017</a>); 61 women randomised to sequences of tissue-stabilised guided subcision, ultrasound and Radiesse, "the combination of three treatment modalities was shown to provide greater improvement in skin laxity … and skin dimpling … as compared to any combination of two modalities" (<a href="https://pubmed.ncbi.nlm.nih.gov/33196744/" rel="noopener nofollow" target="_blank">Bartsch 2020</a>); seven individualised "buttocks beautification" cases (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10612506/" rel="noopener nofollow" target="_blank">Teodoro 2023</a>), ten women given Radiesse, toxin and hyaluronic acid in one session (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12067859/" rel="noopener nofollow" target="_blank">Di Sessa 2025</a>) and four severe-laxity cases with added ultrasound (<a href="https://pubmed.ncbi.nlm.nih.gov/35005869/" rel="noopener nofollow" target="_blank">Casabona 2022</a>).</p>
      <p>Graded emerging, as the <a href="/cellulite">cellulite guide</a> grades the combination: open studies with large numerical improvements, a cannula doing subcision at the same time, and no arm that received the subcision or the ultrasound without the product. The cellulite guide grades shockwave and the subcision devices, which have their own controlled trials, a tier higher.</p>
    `,
  },
  {
    id: 'use-stretch-marks',
    category: 'use',
    title: 'Stretch marks — three small series, each with something else added',
    tldr: 'Thirty-five people given 1:1 diluted product into red or white striae followed by microneedling and topical vitamin C: scar scores from 12.0 to 7.1 a month after the last treatment. Ten Asian women given ultrasound then diluted Radiesse (+): scores from 11.6 to 6.2 at six months. Eight women given 1:4 product then three sessions of radiofrequency microneedling: 14 to 6.9. A systematic review of fillers for striae found seven studies and 184 women in all. No study used the product alone against a control.',
    evidence: 'emerging',
    focus: 'body',
    note: 'Best for: old white striae as part of a device combination; the device half of each protocol has its own evidence',
    sessions: '1 injection session plus 2–3 device sessions',
    downtime: 'That of the device',
    cost: '€400–900 for the product on top of the device',
    bodyHtml: `
      <p>The series: "Subjects presented with red (n = 25) or white (n = 10) striae … CaHA filler was diluted 1:1 with lidocaine 2% … immediately followed by microneedling and topical application of 20% ascorbic acid … The mean (±SD) pretreatment Manchester Scar Scale scores were 12.0 (±0.8), decreasing to 7.1 (±1.4)" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5640351/" rel="noopener nofollow" target="_blank">Casabona 2017b</a>); ten women, "the mean overall SDA score was 11.6 at baseline … 7.9 (P = 0.005) at 3 months, and 6.2 (P = 0.005) at 6 months" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7929617/" rel="noopener nofollow" target="_blank">Lim 2021</a>); eight women, "mean MSS scores improved significantly from 14 ± 0.93 at baseline to 6.88 ± 1.64" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13353822/" rel="noopener nofollow" target="_blank">Saleh 2026</a>). The review: "a total of 184 female participants" across seven filler studies of different materials and methods (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10078536/" rel="noopener nofollow" target="_blank">Alsharif 2023</a>).</p>
      <p>Graded emerging: uncontrolled, small, and confounded by the microneedling, ultrasound or radiofrequency given with it. The <a href="/sculptra">Sculptra guide</a> has the one randomised stretch-mark trial in this class, and it is ten women an arm.</p>
    `,
  },
  {
    id: 'use-acne-scars',
    category: 'use',
    title: 'Atrophic acne scars — saucer-shaped scars respond, ice-picks do not',
    tldr: 'The first study, in ten people, found that "saucerized acne scars responded to treatment; ice-pick scars did not", with results lasting to a year. A 160-person randomised trial gave everyone fractional CO2 laser and half of them two Radiesse sessions a month later: scar scores fell more with the combination, equally for boxcar and rolling scars and least for ice-picks. A 352-patient retrospective review rated diluted Radiesse followed by fractional CO2 highest of four treatments; twenty women randomised to Radiesse with or without ultrasound improved either way.',
    evidence: 'emerging',
    focus: 'scars',
    note: 'Best for: rolling and boxcar scars as an add-on to a fractional laser; the resurfacing and microneedling guides grade the devices',
    sessions: '1–2 injection sessions after the laser',
    downtime: 'That of the laser; bruising from the injections',
    cost: '€350–900 on top of the device',
    bodyHtml: `
      <p>The evidence: "Saucerized acne scars responded to treatment; ice-pick scars did not. Results lasted, at least to some degree, for 12 months" (<a href="https://pubmed.ncbi.nlm.nih.gov/16971362/" rel="noopener nofollow" target="_blank">Goldberg 2006</a>); "A prospective, single-center, randomized controlled study was conducted on 160 participants … Group A received two sessions of CaHA (1-month interval) after AFL 1 month, while Group B received AFL monotherapy … scores decreased significantly in both groups (p &lt; 0.001), with greater reduction observed in group A … comparable efficacy for boxcar and rolling scars … both of which showed superiority to icepick scars" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13493462/" rel="noopener nofollow" target="_blank">Chen 2026</a>); 352 patients, "the combination of a diluted CaHA-based filler injection followed by FACL in separate treatment sessions yielded better aesthetic improvement compared with the other tested treatments" (<a href="https://pubmed.ncbi.nlm.nih.gov/30793355/" rel="noopener nofollow" target="_blank">Koren 2019</a>); twenty women, both Radiesse alone and with ultrasound "safe and effective" at six months (<a href="https://pubmed.ncbi.nlm.nih.gov/32385943/" rel="noopener nofollow" target="_blank">Antonino 2021</a>); ten patients given ultrasound then diluted product, scar severity improved at day 90 (<a href="https://pubmed.ncbi.nlm.nih.gov/29400587/" rel="noopener nofollow" target="_blank">Casabona 2018b</a>).</p>
      <p>Graded emerging, as the <a href="/sculptra">Sculptra guide</a> grades poly-L-lactic acid for the same use: one sizeable randomised trial as an add-on to a laser that already works, single-centre and recent, and small studies around it. The <a href="/skin-resurfacing">resurfacing guide</a> and the <a href="/microneedling">microneedling guide</a> grade the devices themselves strong for scars.</p>
    `,
  },
  {
    id: 'use-glp1-face',
    category: 'use',
    title: 'The GLP-1 face — four patients',
    tldr: 'The evidence for hyperdilute Radiesse in people losing weight on semaglutide-type drugs is a retrospective series of four: after two sessions of 1:3 product in the lower face, they had lost 9.2% of body weight on average while cheek volume rose 9.8% and jowl volume fell 55.8% on 3D imaging at six months. It is an interesting observation and nothing more. The timing problem is the same as for any stimulator: a face that is still changing weight is a moving target for a product that cannot be adjusted.',
    evidence: 'limited',
    focus: 'face',
    note: 'Best for: nobody on this evidence alone; the volume-loss guide grades the stimulator-plus-hyaluronic approach after weight loss',
    sessions: 'As sold: 2 sessions',
    downtime: '3–7 days',
    cost: '€800–2,000',
    bodyHtml: `
      <p>The series: "This case series describes 4 patients on GLP1RAs who, despite rapid weight loss, maintained facial volume following treatment with hypderilute CaHA-CMC in the lower face … They lost an average of 24.3 ± 10.4 lb, equivalent to -9.2 ± 4.8% of baseline body weight, yet objective facial metrics remained stable or improved. Average cheek volume increased 9.8%, jowl volume declined 55.8%, nasolabial-fold depth decreased 46.2%, and marionette-line depth decreased 20.6%" — "Level of Evidence: 4" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12538281/" rel="noopener nofollow" target="_blank">Durairaj 2025</a>).</p>
      <p>Graded limited: four patients, retrospective, from authors who teach the technique. The <a href="/sculptra">Sculptra guide</a> grades poly-L-lactic acid emerging for the same problem on a 41-person open-label study, and the <a href="/facial-volume-loss">volume-loss guide</a> grades the combined stimulator-and-hyaluronic protocol emerging; both make the point that the face should be at the weight it will keep first.</p>
    `,
  },
  {
    id: 'use-lips-nose-eyes',
    category: 'use',
    title: 'Lips, nose, glabella and tear trough — the nodules and the blindness cases',
    tldr: 'In the first large series, nodules followed 12.4% of lip-mucosa injections and 3.7% of radial lip-line treatments; seven of ninety early patients had persistent visible lip nodules and four needed intervention. The lips have been off the label and off the consensus ever since. At least eleven cases of visual loss after calcium hydroxylapatite are published, most after injection of the nasal dorsum, and the two detailed reports both followed the glabella. A 24-woman study of nasal augmentation and a 40-woman tear-trough series exist; neither changes the arithmetic of a product that cannot be dissolved next to an end artery.',
    evidence: 'limited',
    focus: 'face',
    note: 'Best for: nobody — the lip is hyaluronic acid or a lip lift, the tear trough is hyaluronic acid or surgery, and the nose is a surgeon\'s decision',
    sessions: 'Not recommended',
    downtime: 'A nodule appears within weeks; an arterial occlusion within seconds',
    cost: 'Whatever the complication costs',
    bodyHtml: `
      <p>The lips: "The only side effect observed was the development of easily treated nodules, reported by 42 of 338 of lip mucosa augmentation subjects (12.4 percent) and six of 163 of subjects (3.7 percent) who had treatment for radial lip lines. The proportion of subjects with lip nodules decreased to 8.8 percent when the implant volume was decreased" (<a href="https://pubmed.ncbi.nlm.nih.gov/16936541/" rel="noopener nofollow" target="_blank">Jansen 2006</a>); "Seven patients had persistent visible mucosal lip nodules, 4 of whom required intervention" (<a href="https://pubmed.ncbi.nlm.nih.gov/15262717/" rel="noopener nofollow" target="_blank">Tzikas 2004</a>); "Injection of CaHA into the oral mucosa and the lips is an unapproved indication and may result in nodule formation" (<a href="https://pubmed.ncbi.nlm.nih.gov/24002146/" rel="noopener nofollow" target="_blank">Pavicic 2013</a>); in 13 women, granulomatous nodules appeared inside the mouth "distant from the site of injections, suggestive of filler migration" (<a href="https://pubmed.ncbi.nlm.nih.gov/24332334/" rel="noopener nofollow" target="_blank">Shahrabi-Farahani 2014</a>). The vessels: "CaHA has at least 11 published cases of vascular occlusion causing visual impairment, most involving the nasal dorsum" (<a href="https://pubmed.ncbi.nlm.nih.gov/41263987/" rel="noopener nofollow" target="_blank">Young 2026</a>); a healthy 48-year-old left with no light perception after a glabellar injection (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6533913/" rel="noopener nofollow" target="_blank">Oh 2019</a>); a 51-year-old blinded after injection of "the glabella and dorsum of the nose" who recovered light perception only (<a href="https://pubmed.ncbi.nlm.nih.gov/30234833/" rel="noopener nofollow" target="_blank">Vu 2018</a>); orbital inflammation and restricted eye movement after a facial injection (<a href="https://pubmed.ncbi.nlm.nih.gov/26524160/" rel="noopener nofollow" target="_blank">Dagi Glass 2017</a>); a zoster-like eruption after glabellar Radiesse (<a href="https://pubmed.ncbi.nlm.nih.gov/18520838/" rel="noopener nofollow" target="_blank">Sires 2008</a>). The studies that tried: 24 women followed a year after nasal augmentation, volume 0.94 mL at twelve months and responders falling from 79% to 58% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13100342/" rel="noopener nofollow" target="_blank">Wang 2026</a>); 40 women whose tear troughs improved a class with hyaluronic acid or Radiesse, lasting 10.1 and 12.8 months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4217290/" rel="noopener nofollow" target="_blank">Wollina 2014</a>); 106 adults given a hyaluronic-acid blend with diluted product around the eye (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12278983/" rel="noopener nofollow" target="_blank">Spada 2025</a>).</p>
      <p>Graded limited: series exist, the harm is documented, and nothing reverses it. The <a href="/thin-lips">lips guide</a>, the <a href="/eye-bags">eye-bags guide</a> and the <a href="/dark-circles">dark-circles guide</a> grade what does belong in those places, and every one of them is a product with an antidote.</p>
    `,
  },
  {
    id: 'use-prevention',
    category: 'use',
    title: '"Biostimulation" in your thirties as prevention — the 95% that nobody controlled',
    tldr: 'The case series most often quoted for early treatment reports improvement in 95% of 30–40-year-olds — assessed by the treating author, without a control group, in skin that had little to improve. No trial has followed a preventively treated face for the years the claim covers, the biopsy studies enrolled women of 35 and over with lax or photodamaged skin, and the product cannot be removed from a face that will go on changing. Prevention with randomised trials is sunscreen and a retinoid.',
    evidence: 'limited',
    focus: 'marketing',
    note: 'Best for: nobody under forty with normal skin — the 30s guide covers prevention with evidence',
    sessions: 'As sold: yearly',
    downtime: '3–7 days',
    cost: '€400–1,000 a year for an unmeasured result',
    bodyHtml: `
      <p>The claim's source: "effective in improving skin thickness, laxity, and wrinkles in 95% of 30-40 year-olds, 80% of 40-60 year-olds, and 70% of &gt;60 year-olds" — a single author's uncontrolled case series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10693750/" rel="noopener nofollow" target="_blank">Massidda 2023</a>). What the biology studies enrolled: women "aged 35-45" for postauricular biopsies (<a href="https://pubmed.ncbi.nlm.nih.gov/25226004/" rel="noopener nofollow" target="_blank">Yutskovskaya 2014</a>), "subjects with skin laxity in the neck and décolletage" (<a href="https://pubmed.ncbi.nlm.nih.gov/28095536/" rel="noopener nofollow" target="_blank">Yutskovskaya 2017</a>), "photodamaged skin" (<a href="https://pubmed.ncbi.nlm.nih.gov/30893178/" rel="noopener nofollow" target="_blank">González 2019</a>). What the reviews say about the whole hyperdilute field: no randomised controlled trials (<a href="https://pubmed.ncbi.nlm.nih.gov/37897174/" rel="noopener nofollow" target="_blank">Guida 2024</a>).</p>
      <p>Graded limited, as the <a href="/anti-aging-30s">30s guide</a> and the <a href="/collagen-loss">collagen-loss guide</a> grade early biostimulators: no evidence, a plausible story, and an irreversible product.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'prod-radiesse',
    category: 'product',
    title: 'Radiesse and Radiesse (+) — the product in the trials',
    tldr: 'The 1.5 mL syringe behind every pivotal number on this page: the fold trials against collagen and hyaluronic acid, the three-year follow-up without nodules, the hand trial, the jawline trial, the cheek trial and the décolleté trial. Radiesse (+) adds 0.3% lidocaine and cut injection pain by 4.4 cm on a 10 cm scale in a double-blind split-face trial without changing the result. Four FDA indications since 2006; CE-marked in Europe with a décolletage indication. Firm, opaque, radio-opaque and not dissolvable.',
    evidence: 'strong',
    focus: 'brand',
    note: 'Best for: contour and deep volume — jawline, pre-jowl, cheekbone, chin, hands — placed deep with a cannula',
    sessions: '1 session plus touch-up; repeat at 12–18 months',
    downtime: '3–7 days',
    cost: '€350–600 per 1.5 mL syringe',
    bodyHtml: `
      <p>The trials are its own: folds (<a href="https://pubmed.ncbi.nlm.nih.gov/18086048/" rel="noopener nofollow" target="_blank">Smith 2007</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/18093199/" rel="noopener nofollow" target="_blank">Moers-Carpi 2008</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/20442101/" rel="noopener nofollow" target="_blank">Bass 2010</a>), hands (<a href="https://pubmed.ncbi.nlm.nih.gov/28562435/" rel="noopener nofollow" target="_blank">Goldman 2018</a>), jawline (<a href="https://pubmed.ncbi.nlm.nih.gov/34784131/" rel="noopener nofollow" target="_blank">Moradi 2021</a>), cheeks (<a href="https://pubmed.ncbi.nlm.nih.gov/22759259/" rel="noopener nofollow" target="_blank">Moers-Carpi 2012</a>), décolleté (<a href="https://pubmed.ncbi.nlm.nih.gov/42424535/" rel="noopener nofollow" target="_blank">Fabi 2026</a>). The lidocaine version: "CaHA (+) treatment resulted in a statistically and clinically significant reduction in pain ratings immediately after injection … The mean difference in VAS scores for pain was -4.41 … In 90% of subjects, the VAS scores were ≥2.0 cm lower for the CaHA (+)-treated NLF … as effective as CaHA" (<a href="https://pubmed.ncbi.nlm.nih.gov/27538003/" rel="noopener nofollow" target="_blank">Schachter 2016</a>). Early experience: 40 Argentinian patients followed 18 months, 87% satisfied, with the early warning that "a precise injection technique helped minimize potential effects such as nodule formation" (<a href="https://pubmed.ncbi.nlm.nih.gov/16936540/" rel="noopener nofollow" target="_blank">Jacovella 2006</a>). The safety record across 21 studies: adverse events after 3% of 5,081 treatments, 96% of them nodules (<a href="https://pubmed.ncbi.nlm.nih.gov/28247924/" rel="noopener nofollow" target="_blank">Kadouch 2017</a>).</p>
      <p>Graded strong, as the <a href="/regenerative-aesthetics">biostimulator guide</a> and the <a href="/sculptra">Sculptra guide</a> grade it: randomised, controlled trials for its labelled uses and the longest clean follow-up in the class. The strong tier belongs to the undiluted product on its label; the next row is the same syringe with saline added and a different evidence base.</p>
    `,
  },
  {
    id: 'prod-hyperdilute',
    category: 'product',
    title: 'Hyperdilute Radiesse — the same syringe sold as a "biostimulator"',
    tldr: 'One syringe plus 3–9 mL of saline and lidocaine, fanned under the skin of the lower face, neck, chest, arms, abdomen, knees or buttocks. Dilution makes it spread and strips its filling power — stiffness, viscosity and cohesivity all fall — so that what is left is the collagen response. That response is real on biopsy. The clinical evidence is consensus documents that call themselves preliminary, open series, and one labelled exception, the 1:2 décolleté. Both systematic reviews: no randomised trials for the diluted use on the face or body.',
    evidence: 'emerging',
    focus: 'brand',
    note: 'Best for: thin, crepey skin on the neck, chest and lower face; ask which dilution, how many syringes and what the clinic\'s six-month photographs look like',
    sessions: '2–3 sessions, 4–8 weeks apart',
    downtime: '3–7 days; small lumps massaged out',
    cost: '€400–1,000 per area per session',
    bodyHtml: `
      <p>The protocol: 1:1 diluted, 1:2 or more hyperdiluted (<a href="https://pubmed.ncbi.nlm.nih.gov/30358631/" rel="noopener nofollow" target="_blank">Goldie 2018</a>); area-by-area volumes and entry points (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6467620/" rel="noopener nofollow" target="_blank">de Almeida 2019</a>); "whereas undiluted CaHA is used to provide volume, hyperdilute CaHA is distributed across a much larger surface area in a more superficial plane" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8849118/" rel="noopener nofollow" target="_blank">Lorenc 2022</a>); a 2026 technique review (<a href="https://pubmed.ncbi.nlm.nih.gov/42303355/" rel="noopener nofollow" target="_blank">Soza 2026</a>). The physics: hyperdilution "increased dispersion and decreased concentration of CaHA microspheres" in excised tissue, and only fibroblasts in contact with a sphere responded (<a href="https://pubmed.ncbi.nlm.nih.gov/36575882/" rel="noopener nofollow" target="_blank">Nowag 2023</a>); "hyperdiluted CaHA-CMC (&gt;1:2) demonstrated a regenerative profile and diluted or hypodiluted mixtures retained meaningful filling properties" (<a href="https://pubmed.ncbi.nlm.nih.gov/38357772/" rel="noopener nofollow" target="_blank">McCarthy 2024</a>). The verdicts: "no randomized controlled trials have been published" (<a href="https://pubmed.ncbi.nlm.nih.gov/37897174/" rel="noopener nofollow" target="_blank">Guida 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38390986/" rel="noopener nofollow" target="_blank">Galadari 2024</a>). The exception: the randomised décolleté trial at 1:2 (<a href="https://pubmed.ncbi.nlm.nih.gov/42424535/" rel="noopener nofollow" target="_blank">Fabi 2026</a>).</p>
      <p>Graded emerging, as the <a href="/regenerative-aesthetics">biostimulator guide</a> grades hyperdiluted "tightening". The décolleté shows what a proper trial of the diluted product looks like and that it can be passed; the face, neck, arms and buttocks are still waiting for theirs.</p>
    `,
  },
  {
    id: 'prod-hybrids',
    category: 'product',
    title: 'The calcium–hyaluronic hybrids — HArmonyCa and the premixed Radiesse blend',
    tldr: 'Two ways to get a softer, more spreadable product with an immediate effect: HArmonyCa (Allergan), microspheres manufactured into a cross-linked hyaluronic gel, with an open-label post-marketing study of 140 people (midface responders 82.8% at a month, high to twelve) and a 129-patient retrospective series; and Radiesse mixed syringe-to-syringe with a Belotero gel, with a 41-woman chart review, a 12-woman skin-quality series and a Delphi consensus. A systematic review finds high satisfaction, minor adverse events and "a trend of slight decline" after six months. No randomised trial against either parent.',
    evidence: 'emerging',
    focus: 'brand',
    note: 'Best for: the lateral cheek and jawline where a softer lift is wanted; hyaluronidase removes only the gel half',
    sessions: '1 session, optional touch-up',
    downtime: '3–7 days',
    cost: '€350–650 per syringe',
    bodyHtml: `
      <p>HArmonyCa: "Adults rated Moderate to Severe on the Allergan Midface Volume Deficit Scale (MFVDS) received HA-CaHA (n = 110) or HA-CaHA-L (n = 30) … At Month 1, MFVDS responder rate was 82.8%, remaining high through Month 12" — prospective, open-label (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12434560/" rel="noopener nofollow" target="_blank">Gritti 2025</a>); 129 Italian patients with photoaged, oily, rosacea-prone or scarred skin assessed at nine months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626326/" rel="noopener nofollow" target="_blank">Proietti 2024</a>); a manufacturer-linked data review, "higher lift capacity … and faster tissue integration than a CaHa filler" in preclinical work (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11412701/" rel="noopener nofollow" target="_blank">Braz 2024</a>); eight consultants' recommendations — cannula, lateral face, retreat only for laxity (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12824049/" rel="noopener nofollow" target="_blank">Cavallini 2026</a>). The premixed blend: 41 women, jawline score from 2.12 to 0.68 at three months and 1.27 at twelve, "100% of the subjects had experienced a ≥1-point improvement … at t = 3 months, versus 85% at t = 12 months" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8831259/" rel="noopener nofollow" target="_blank">Fakih-Gomez 2022</a>); twelve women, cheek wrinkles and self-rated "skin glow" better at four months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13196470/" rel="noopener nofollow" target="_blank">Lazzarotto 2026</a>); a 23-clinician Delphi panel (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12856531/" rel="noopener nofollow" target="_blank">Kadouch 2026</a>). The review: "high aesthetic effectiveness in various facial areas … A trend of slight decline in both aesthetic improvement and treatment satisfaction was observed after six months" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12594701/" rel="noopener nofollow" target="_blank">Meçani 2025</a>).</p>
      <p>Graded emerging: open-label and retrospective, manufacturer-linked, no comparison with plain Radiesse or plain hyaluronic acid. In the Brazilian complication series, hyaluronidase "was beneficial … when there was an association of calcium hydroxyapatite with hyaluronic acid" (<a href="https://pubmed.ncbi.nlm.nih.gov/38693639/" rel="noopener nofollow" target="_blank">Ianhez 2024</a>) — it dissolves the carrier and leaves the spheres.</p>
    `,
  },
  {
    id: 'prod-other-caha',
    category: 'product',
    title: 'Other calcium hydroxylapatite fillers — one with a double-blind trial, the rest without',
    tldr: 'Aphranel, a Chinese calcium hydroxylapatite hydrogel, was tested properly: 210 people, each fold randomised to Aphranel or Restylane, syringes masked, 188 followed for a year — improved folds in 84.0% versus 78.7% at 24 weeks by investigators and 72.3% versus 70.2% by an independent committee, non-inferior. A large-particle calcium hydroxylapatite made for another purpose lasted longer in three patients. Other brands are sold in Europe on their CE mark and the material\'s reputation; the particle size, the gel and the evidence are each product\'s own.',
    evidence: 'moderate',
    focus: 'brand',
    note: 'Best for: markets where it is the product on the shelf; ask which trial the brand in the syringe ran',
    sessions: '1 session',
    downtime: '3–7 days',
    cost: '€250–500 per syringe',
    bodyHtml: `
      <p>The trial: "210 subjects were randomized to bilateral NLF treatment with Aphranel and Restylane on either side of the NLF … All syringes were identical in appearance, with labels coded … A total of 188 subjects (168 women and 20 men) completed the 12-month follow-up. The investigator-evaluated improvement rates using WSRS at 24 weeks were 84.04% for Aphranel and 78.72% for Restylane. The IRC-evaluated improvement rates … were 72.34% for Aphranel and 70.21% for Restylane. Aphranel was shown to be statistically non-inferior" (<a href="https://pubmed.ncbi.nlm.nih.gov/39331081/" rel="noopener nofollow" target="_blank">Pan 2025</a>). The large-particle experiment: three patients, "improved persistence at 6 and 15 months with the large-particle injections as compared with prior small-particle injections" (<a href="https://pubmed.ncbi.nlm.nih.gov/21501888/" rel="noopener nofollow" target="_blank">Alam 2011</a>).</p>
      <p>Graded moderate for the product with the trial and unknown for the others. Particle size and smoothness are what made Radiesse's three-year follow-up clean; a cheaper syringe of the same mineral has not shown the same thing until it has.</p>
    `,
  },
  {
    id: 'prod-mfu-combination',
    category: 'product',
    title: 'The combination package — microfocused ultrasound, then hyperdilute Radiesse',
    tldr: 'Sold as one treatment in many clinics: Ultherapy-type ultrasound to the deep layers, diluted Radiesse under the skin, same day or six weeks apart. A systematic review found eleven studies, "mainly pre-post", with improvements in aesthetic scales, skin measures and satisfaction and more elastin and collagen on biopsy. A twelve-woman pilot found ultrasound first gave more elastin than the reverse order; the Pan-Asian panel agrees on that order. No study has an arm that received only one of the two, so nobody knows what the second one adds.',
    evidence: 'emerging',
    focus: 'brand',
    note: 'Best for: the neck, chest and lower face of someone who would have had the ultrasound anyway; the tightening guide grades the device on its own trials',
    sessions: '1 ultrasound session plus 1–2 injection sessions',
    downtime: '3–7 days',
    cost: '€1,500–3,500 for the package',
    bodyHtml: `
      <p>The review: "Out of 4019 references, 11 studies, mainly pre-post studies, were included … improvements in global aesthetic scales, skin quality parameters, and patients' satisfaction following combined treatment, accompanied by mild to moderate adverse effects … histological studies indicated increased neocollagenesis and elastin synthesis" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12080884/" rel="noopener nofollow" target="_blank">Amiri 2025</a>). The order: "Administering MFU-V first, followed by hyperdilute CaHA-CMC 6 weeks later, is the optimal sequence" in twelve women (<a href="https://pubmed.ncbi.nlm.nih.gov/39511699/" rel="noopener nofollow" target="_blank">Doyle 2025</a>); "microfocused ultrasound with visualisation precedes CaHA in same day or session treatments" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8570653/" rel="noopener nofollow" target="_blank">Corduff 2021</a>). The component studies: neck and chest (<a href="https://pubmed.ncbi.nlm.nih.gov/29285863/" rel="noopener nofollow" target="_blank">Casabona 2018</a>), cellulite (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5548562/" rel="noopener nofollow" target="_blank">Casabona 2017</a>), knees, where the instruments measured no change (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10005808/" rel="noopener nofollow" target="_blank">Juhász 2023</a>), and the split-face lower-face study (<a href="https://pubmed.ncbi.nlm.nih.gov/32272518/" rel="noopener nofollow" target="_blank">Yutskovskaya 2020</a>). The wider review of biostimulator combinations found nodules "in 15-30% of cases" across the combination series (<a href="https://pubmed.ncbi.nlm.nih.gov/39719485/" rel="noopener nofollow" target="_blank">Tam 2025</a>).</p>
      <p>Graded emerging: consistent before-and-after improvement, no factorial design. The <a href="/skin-tightening">tightening guide</a> grades microfocused ultrasound moderate on its own trials; the package costs the sum of its parts and is evidenced like the weaker of them.</p>
    `,
  },
  {
    id: 'prod-sculptra',
    category: 'product',
    title: 'Sculptra instead — nothing on the day, more at a year, two years of hold',
    tldr: 'Poly-L-lactic acid is the other irreversible stimulator and the opposite temperament: no gel, no immediate effect, two or three sessions, a result that builds over three to six months and beat hyaluronic acid from nine months in three randomised trials, holding about two years. Its trials are in the folds, cheeks and temples; its weakness is papules and nodules, mostly a matter of technique. For diffuse deflation it is the better fit; for a line or a contour wanted today, Radiesse is.',
    evidence: 'strong',
    focus: 'comparator',
    note: 'Best for: the face that has deflated everywhere; the Sculptra guide grades it area by area',
    sessions: '2–3 sessions, 4–6 weeks apart',
    downtime: '2–5 days; five days of massage',
    cost: '€500–900 per vial',
    bodyHtml: `
      <p>The record, from the <a href="/sculptra">Sculptra guide</a>: improvement against collagen to 25 months in 233 people (<a href="https://pubmed.ncbi.nlm.nih.gov/20159311/" rel="noopener nofollow" target="_blank">Narins 2010</a>); cheeks a grade better in 71.6% against 26.1% untreated at a year (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>); 92.4% against 59.3% corrected versus hyaluronic acid at 48 weeks, after losing at week 4 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12903950/" rel="noopener nofollow" target="_blank">Wang 2026b</a>). The direct comparison is biopsies only (<a href="https://pubmed.ncbi.nlm.nih.gov/39480040/" rel="noopener nofollow" target="_blank">Waibel 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39761144/" rel="noopener nofollow" target="_blank">Waibel 2025</a>); the durations side by side are 25 months against 12–18 (<a href="https://pubmed.ncbi.nlm.nih.gov/41184662/" rel="noopener nofollow" target="_blank">Ferreira 2026</a>); pooled across both and polycaprolactone, nodules follow about 5% of treatments (<a href="https://pubmed.ncbi.nlm.nih.gov/40674466/" rel="noopener nofollow" target="_blank">Smith 2025</a>).</p>
      <p>Graded strong on its own page. The HIV lipoatrophy review's division of labour is a good rule for cosmetic faces too: poly-L-lactic acid "over temples and cheeks", calcium hydroxylapatite "deeply over bone for focal enhancement" (<a href="https://pubmed.ncbi.nlm.nih.gov/26481056/" rel="noopener nofollow" target="_blank">Jagdeo 2015</a>).</p>
    `,
  },
  {
    id: 'prod-ha',
    category: 'product',
    title: 'Hyaluronic acid instead — shorter, softer, and the only one with an antidote',
    tldr: 'Radiesse beat hyaluronic acid on duration in both head-to-head fold trials and needed less product. Hyaluronic acid wins everything else that matters to a cautious patient: it suits thin and mobile areas, it is invisible to a scanner, and hyaluronidase removes it within a day — which is also why blindness from hyaluronic acid has the better, though still poor, outcomes. The filler guide grades it strong for folds and cheeks. First filler, tear trough, lips, nose: hyaluronic acid. Known face, known wish, contour on bone: Radiesse is a reasonable upgrade.',
    evidence: 'strong',
    focus: 'comparator',
    note: 'Best for: first-time patients, thin skin, the eye and mouth area, anyone who wants the option to undo it',
    sessions: '1 session; top-up at 9–18 months',
    downtime: '1–3 days',
    cost: '€350–700 per syringe',
    bodyHtml: `
      <p>The comparisons: 79% against 43% of folds improved at twelve months, 30% less volume (<a href="https://pubmed.ncbi.nlm.nih.gov/18093199/" rel="noopener nofollow" target="_blank">Moers-Carpi 2008</a>); ahead of three hyaluronic gels at eight months (<a href="https://pubmed.ncbi.nlm.nih.gov/18086052/" rel="noopener nofollow" target="_blank">Moers-Carpi 2007</a>); level with Restylane at 24 weeks for the Chinese product (<a href="https://pubmed.ncbi.nlm.nih.gov/39331081/" rel="noopener nofollow" target="_blank">Pan 2025</a>); no difference in nodules or haematomas in the pooled fold trials (<a href="https://pubmed.ncbi.nlm.nih.gov/27178901/" rel="noopener nofollow" target="_blank">Shi 2016</a>). The exit: "the treatment of HA-related blindness was likely to have better outcomes compared with other fillers due to hyaluronidase use" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6554164/" rel="noopener nofollow" target="_blank">Chatrath 2019</a>), although across 198 cases treatments "were usually not effective in reversing vision loss" whatever the filler (<a href="https://pubmed.ncbi.nlm.nih.gov/40167411/" rel="noopener nofollow" target="_blank">Foster 2025</a>).</p>
      <p>Graded strong, as the <a href="/fillers">filler guide</a> grades it. Duration is the only axis on which Radiesse wins, and it is the axis that matters least to someone who is not yet sure what they want.</p>
    `,
  },
  {
    id: 'prod-pcl',
    category: 'product',
    title: 'Polycaprolactone instead (Ellansé) — the third stimulator',
    tldr: 'Microspheres of a slow-degrading polyester in the same kind of carboxymethylcellulose gel: immediate fill, a stimulating tail, versions sold as lasting one to four years. One Chinese randomised trial of 160 people kept 88.8% of folds improved at twelve months against 23.8% for a hyaluronic control. A shorter safety record than Radiesse, no published blindness but a facial-artery embolism, and no antidote either.',
    evidence: 'moderate',
    focus: 'comparator',
    note: 'Best for: the fold or chin where an even longer-lasting gel-carried stimulator is wanted; the biostimulator guide has the detail',
    sessions: '1–2 sessions',
    downtime: '3–7 days',
    cost: '€450–800 per syringe',
    bodyHtml: `
      <p>The trial: "the effectiveness rate at 12 months in the polycaprolactone group was 88.8% compared with 23.8% in controls" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10171959/" rel="noopener nofollow" target="_blank">Zhao 2023</a>). The safety notes: "PCL has no published cases of blindness but one case of facial artery embolism" (<a href="https://pubmed.ncbi.nlm.nih.gov/41263987/" rel="noopener nofollow" target="_blank">Young 2026</a>); 7.3% of the Brazilian biostimulator complications, against 23.6% for calcium hydroxylapatite alone or mixed with hyaluronic acid (<a href="https://pubmed.ncbi.nlm.nih.gov/38693639/" rel="noopener nofollow" target="_blank">Ianhez 2024</a>).</p>
      <p>Graded moderate, as the <a href="/regenerative-aesthetics">biostimulator guide</a> grades it: one good trial and a shorter record. Availability as of September 2026.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-nodules',
    category: 'safety',
    title: 'Nodules — the characteristic complication, and where they happen',
    tldr: 'Across 21 studies, 5,081 treatments in 2,779 patients produced 173 adverse events (3%), of which 166 were nodules; 49% of those were in mobile areas. The lips are the clear outlier: 12.4% of lip-mucosa injections in the first large series, falling to 8.8% with smaller volumes. Most nodules are clumped product rather than inflammation, appear within weeks, are not visible and settle; the fold trial\'s three-year follow-up found none. An inflamed, late or growing lump is different and needs infection considered first. Treatment is massage, saline, steroid with 5-fluorouracil, or excision.',
    bodyHtml: `
      <p>The numbers: "A total of 5081 treatments with CaHA were performed on 2779 patients. A total of 173 (3%) AEs were reported. The assessed types of AEs consisted of nodules (n=166, 96%), persistent inflammation/swelling (n=4, 2%), persistent erythema (n=2, 1%), and overcorrection (n=1, 1%) … Of the reported nodules, 49% occurred in 'dynamic' areas … in most cases, CaHA nodules are not visible and resolve without intervention" (<a href="https://pubmed.ncbi.nlm.nih.gov/28247924/" rel="noopener nofollow" target="_blank">Kadouch 2017</a>); lips 12.4%, radial lip lines 3.7% (<a href="https://pubmed.ncbi.nlm.nih.gov/16936541/" rel="noopener nofollow" target="_blank">Jansen 2006</a>); the mechanism, "this occurs soon after injection and is a result of accumulated particles and not a granulomatous reaction" (<a href="https://pubmed.ncbi.nlm.nih.gov/24002146/" rel="noopener nofollow" target="_blank">Pavicic 2013</a>); none in 102 patients over three years (<a href="https://pubmed.ncbi.nlm.nih.gov/20442101/" rel="noopener nofollow" target="_blank">Bass 2010</a>); 5% pooled across the biostimulator class (<a href="https://pubmed.ncbi.nlm.nih.gov/40674466/" rel="noopener nofollow" target="_blank">Smith 2025</a>); three delayed nodules and one vascular event among 7,659 filler patients of whom 6.7% by volume had calcium hydroxylapatite (<a href="https://pubmed.ncbi.nlm.nih.gov/35170541/" rel="noopener nofollow" target="_blank">Kern 2022</a>). The work-up: "the need to consider common causes — notably, infection — before rare ones … The authors advocate ultrasonographic imaging for patients with persistent nodules" (<a href="https://pubmed.ncbi.nlm.nih.gov/24077011/" rel="noopener nofollow" target="_blank">Cassuto 2013</a>). The treatment: a non-inflammatory nodule cleared with "a combination of 5-fluorouracil, dexamethasone, and triamcinolone" (<a href="https://pubmed.ncbi.nlm.nih.gov/27602980/" rel="noopener nofollow" target="_blank">Aguilera 2016</a>). True foreign-body reactions exist — giant cells around the "round, uniformly sized, yellowish" spheres — and are rare (<a href="https://pubmed.ncbi.nlm.nih.gov/23475146/" rel="noopener nofollow" target="_blank">Moulonguet 2013</a>).</p>
      <p>What to do: keep it out of the lips and away from the corners of the mouth; expect to feel the product under the skin for a few weeks; report a lump that is red, tender, growing or appears months later; and bring the brand and lot number, because the first question any doctor will ask is whether it is a filler that dissolves.</p>
    `,
  },
  {
    id: 'safety-no-eraser',
    category: 'safety',
    title: 'Can it be dissolved? The sodium thiosulfate question',
    tldr: 'Not reliably. One proof-of-concept study dissolved the microspheres in dead pig skin with injected sodium thiosulfate, and a case series reported treating facial nodules with it. The manufacturer\'s own preclinical study — test tube, living pig, 3D camera, micro-CT, histology — "did not obtain any indications of CaHA degradation"; and in cadaver facial arteries the product was still there after 24 hours in any concentration of thiosulfate, with or without hyaluronidase. The body removes it over one to two and a half years. Plan as though there is no antidote, because in an emergency there is none.',
    bodyHtml: `
      <p>For: "Intralesional STS alone or combined with topical SMB completely dissolved CaHA in the porcine skin samples" — twelve cadaveric samples (<a href="https://pubmed.ncbi.nlm.nih.gov/30358629/" rel="noopener nofollow" target="_blank">Robinson 2018</a>); a clinical report of intralesional thiosulfate for facial nodules (<a href="https://pubmed.ncbi.nlm.nih.gov/31688231/" rel="noopener nofollow" target="_blank">Rullan 2020</a>); a review's summary that "sodium thiosulfate can stimulate degradation of calcium hydroxylapatite" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11619174/" rel="noopener nofollow" target="_blank">Wollina 2024</a>). Against: "We did not obtain any indications of CaHA degradation by STS, either in vitro or in vivo" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7781022/" rel="noopener nofollow" target="_blank">Danysz 2020</a>); "Intraarterial CaHA was detected in human facial artery segments after 24 hours independent of the STS concentration employed. Submerging the arterial segments in STS (300 mg/cc) and 300 IU (bovine) hyaluronidase (1:1 ratio) also did not dissolve the intraarterial CaHA product" (<a href="https://pubmed.ncbi.nlm.nih.gov/33544840/" rel="noopener nofollow" target="_blank">Yankova 2021</a>). Natural clearance: nothing visible on MRI at 2.5 years (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4330000/" rel="noopener nofollow" target="_blank">Pavicic 2015</a>), still visible on hand X-rays in 83.3% at two years (<a href="https://pubmed.ncbi.nlm.nih.gov/36573029/" rel="noopener nofollow" target="_blank">Moradi 2023</a>). In the 55-case Brazilian series of biostimulator complications, "only five cases showed complete resolution" (<a href="https://pubmed.ncbi.nlm.nih.gov/38693639/" rel="noopener nofollow" target="_blank">Ianhez 2024</a>).</p>
      <p>The practical consequence is the rule this page keeps repeating: use it where a small error is tolerable — on bone, deep, in quiet tissue — and use hyaluronic acid where it is not. Over-correction is managed by waiting.</p>
    `,
  },
  {
    id: 'safety-vascular-blindness',
    category: 'safety',
    title: 'Vascular occlusion and blindness — at least eleven published cases',
    tldr: 'Any filler can enter an artery; this one cannot be flushed out. A 2026 review counts at least eleven cases of visual impairment after calcium hydroxylapatite, most after injection of the nasal dorsum, the remainder mainly the glabella. The two detailed reports ended in no light perception and light perception only. An expert consensus exists for recognising and managing an occlusion, and it is mostly about prevention: anatomy, cannulas, small aliquots, low pressure, no nose or glabella. In an eleven-year, 7,659-patient practice audit there was one vascular event with skin necrosis, which healed.',
    bodyHtml: `
      <p>The cases: "CaHA has at least 11 published cases of vascular occlusion causing visual impairment, most involving the nasal dorsum" (<a href="https://pubmed.ncbi.nlm.nih.gov/41263987/" rel="noopener nofollow" target="_blank">Young 2026</a>); "otherwise healthy 48-year-old woman presenting with acute vision loss after injection … in the glabellar region … The patient was no light perception at presentation, and did not recover any visual function" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6533913/" rel="noopener nofollow" target="_blank">Oh 2019</a>); "no light perception vision of the right eye 12 hours after another provider injected calcium hydroxylapatite into the glabella and dorsum of the nose … visual acuity improved to light perception" (<a href="https://pubmed.ncbi.nlm.nih.gov/30234833/" rel="noopener nofollow" target="_blank">Vu 2018</a>). The denominators: 190 cases of filler blindness of all materials in one review (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6554164/" rel="noopener nofollow" target="_blank">Chatrath 2019</a>), 198 in the ophthalmologists' review, in which the nose, forehead and glabella accounted for 84% of sites (<a href="https://pubmed.ncbi.nlm.nih.gov/40167411/" rel="noopener nofollow" target="_blank">Foster 2025</a>); "one serious case of compression necrosis was reported with CaHA" in the facial trials (<a href="https://pubmed.ncbi.nlm.nih.gov/41184662/" rel="noopener nofollow" target="_blank">Ferreira 2026</a>); four serious events in 7,659 patients, "one … related to vascular compromise and subsequent cutaneous necrosis", all resolved (<a href="https://pubmed.ncbi.nlm.nih.gov/35170541/" rel="noopener nofollow" target="_blank">Kern 2022</a>). The guidance: "Inadvertent intra-arterial injection of dermal fillers including calcium hydroxylapatite (CaHA) can result in serious adverse events including soft tissue necrosis, permanent scarring, visual impairment, and blindness. When intra-arterial injection occurs, immediate action is required" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7687073/" rel="noopener nofollow" target="_blank">van Loghem 2020</a>).</p>
      <p>What this means for a patient: the sites with trials — fold, jawline, cheekbone, hand, chest — are not the sites with the blindness reports, and that is not a coincidence. Sudden pain, a white or dusky patch, or any change in vision during or after an injection is an emergency; say so immediately, and go to an eye unit, not home.</p>
    `,
  },
  {
    id: 'safety-imaging',
    category: 'safety',
    title: 'It shows on scans — what your radiologist and dentist need to know',
    tldr: 'Calcium hydroxylapatite is radio-opaque. In 58 patients imaged before and after treatment, blinded radiologists saw it on nearly every CT, inconsistently on plain X-ray, and found it distinct from bone, not obscuring anything and not migrating. In the hands it was visible on X-ray in every hand at a month and 83% at two years, never hiding the bones; in the décolleté trial it did not interfere with breast imaging. It can also turn up where it was not put: inside the mouth as granulomatous nodules, and once as an ossified, migrated nodule. Tell whoever is reading your scan.',
    bodyHtml: `
      <p>The imaging studies: "While results for X-ray evaluation showed inconsistencies in visualization of CaHA, CT scans showed consistent visualization in nearly all cases … no obscuration of underlying structures by CaHA and no evidence of CaHA migration … CaHA is unlikely to be confused with conventional abnormal and adverse radiographic findings" (<a href="https://pubmed.ncbi.nlm.nih.gov/18547186/" rel="noopener nofollow" target="_blank">Carruthers 2008</a>); hands, "no bone obscuration was reported in any X-rays at any evaluated time point" over 24 months and up to three retreatments (<a href="https://pubmed.ncbi.nlm.nih.gov/36573029/" rel="noopener nofollow" target="_blank">Moradi 2023</a>); chest, "no interference attributable to diluted Radiesse was observed on post-treatment breast imaging" (<a href="https://pubmed.ncbi.nlm.nih.gov/42424535/" rel="noopener nofollow" target="_blank">Fabi 2026</a>); on MRI, "low-to-intermediate signal intensity" immediately and nothing at 2.5 years (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4330000/" rel="noopener nofollow" target="_blank">Pavicic 2015</a>). The surprises: 13 women with calcium hydroxylapatite whose granulomatous nodules presented "intraoral … distant from the site of injections" (<a href="https://pubmed.ncbi.nlm.nih.gov/24332334/" rel="noopener nofollow" target="_blank">Shahrabi-Farahani 2014</a>); a report titled for its finding, ossification and migration of a nodule (<a href="https://pubmed.ncbi.nlm.nih.gov/36446096/" rel="noopener nofollow" target="_blank">Zhu 2022</a>); spheres found by a pathologist under an unrelated skin cancer (<a href="https://pubmed.ncbi.nlm.nih.gov/23475146/" rel="noopener nofollow" target="_blank">Moulonguet 2013</a>).</p>
      <p>Practical: before a dental X-ray, a sinus or facial CT, a mammogram after chest treatment or a PET scan, mention the filler, the site and the date. It is recognisable when someone knows to look for it, and an unexplained calcified density in a cheek is an avoidable worry.</p>
    `,
  },
  {
    id: 'safety-who-and-technique',
    category: 'safety',
    title: 'Who should not have it, and what a careful injector does',
    tldr: 'Not for: anyone who may want it reversed; bleeding disorders or anticoagulation that cannot be paused; active skin infection or inflammation at the site; known hypersensitivity to the components, including lidocaine in Radiesse (+); a history of keloids; the lips, nose, glabella and tear trough. Think twice with autoimmune disease — one report traced months of facial swelling to undiagnosed Hashimoto\'s — and with a history of cold sores near the site. A careful injector uses a cannula, stays deep and on bone for volume, dilutes for thin skin, uses small aliquots, and writes the brand, lot, dilution and sites in your record.',
    bodyHtml: `
      <p>The signals: "a diffuse, treatment-refractory facial inflammatory reaction following the injection of calcium hydroxylapatite with lidocaine. The reaction was attributed to undiagnosed Hashimoto's thyroiditis. Exogenous thyroid hormone replacement therapy rapidly resolved the facial inflammation" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10372521/" rel="noopener nofollow" target="_blank">Verma 2023</a>); "Physicians should be suspicious for herpetic infection or reactivation with facial injections of Radiesse or other fillers" (<a href="https://pubmed.ncbi.nlm.nih.gov/18520838/" rel="noopener nofollow" target="_blank">Sires 2008</a>); in the FDA's device-complication database to 2014, 15% of 3,782 filler reports involved calcium hydroxylapatite, the common events being "lumps, infection, allergic reaction, ischemia, and swelling" (<a href="https://pubmed.ncbi.nlm.nih.gov/31592917/" rel="noopener nofollow" target="_blank">Ortiz 2020</a>). The technique: cannulas in 86.7% of 1,783 treatments, swelling after 18.2% and bruising after 11.3% (<a href="https://pubmed.ncbi.nlm.nih.gov/26355612/" rel="noopener nofollow" target="_blank">Muti 2015</a>); "in thinner and darker skin, too-superficial injections of less diluted CaHA can lead to more adverse events" (<a href="https://pubmed.ncbi.nlm.nih.gov/30358631/" rel="noopener nofollow" target="_blank">Goldie 2018</a>); dilution lowers cohesivity, which helps spread and is relevant to what happens if product enters a vessel (<a href="https://pubmed.ncbi.nlm.nih.gov/38357772/" rel="noopener nofollow" target="_blank">McCarthy 2024</a>); knowledge of the vascular anatomy, aspiration, slow low-pressure injection and an emergency plan (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7687073/" rel="noopener nofollow" target="_blank">van Loghem 2020</a>); ultrasound for anything persistent (<a href="https://pubmed.ncbi.nlm.nih.gov/24077011/" rel="noopener nofollow" target="_blank">Cassuto 2013</a>).</p>
      <p>Aftercare: expect firmness and swelling for a week and the feel of product for a few weeks; massage only if told to; no dental work or facials on the area for two weeks; photographs at three months, which is when the gel has gone and what remains is the result.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-how-long',
    category: 'faq',
    title: 'How long does Radiesse last?',
    tldr: 'About a year, tapering: 79% of folds still improved at twelve months in the head-to-head trial, 62.9% of jawlines at 48 weeks, 86% of hand patients still rating themselves improved at a year; 40% of folds still improved at two and a half years. Systematic reviews put the class at 12–18 months. Hyperdiluted, the visible effect is smaller and the published follow-up rarely passes six months.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/18093199/" rel="noopener nofollow" target="_blank">Moers-Carpi 2008</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38934231/" rel="noopener nofollow" target="_blank">Green 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/28562435/" rel="noopener nofollow" target="_blank">Goldman 2018</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/20442101/" rel="noopener nofollow" target="_blank">Bass 2010</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/41184662/" rel="noopener nofollow" target="_blank">Ferreira 2026</a>.)</p>
    `,
  },
  {
    id: 'faq-when-results',
    category: 'faq',
    title: 'When do I see the result?',
    tldr: 'On the day, from the gel, with swelling on top for a week. The gel is absorbed over the following weeks while the collagen response builds — collagen III at four months, collagen I by nine on biopsy — so the three-month photograph is the honest one. Hyperdiluted, there is almost nothing to see on the day and the change is judged at three to four months.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/25226004/" rel="noopener nofollow" target="_blank">Yutskovskaya 2014</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/28095536/" rel="noopener nofollow" target="_blank">Yutskovskaya 2017</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10226485/" rel="noopener nofollow" target="_blank">Trindade de Almeida 2023</a>.)</p>
    `,
  },
  {
    id: 'faq-how-many',
    category: 'faq',
    title: 'How many syringes will I need?',
    tldr: 'From the trials: about three for both cheeks (mean 4.7 mL), one to two for folds, one to one and a half per pair of hands per session, two to four for a jawline. Hyperdiluted, one syringe covers a neck or a chest per session and the course is two or three sessions. The buttock cellulite study used twelve.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/22759259/" rel="noopener nofollow" target="_blank">Moers-Carpi 2012</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/18086052/" rel="noopener nofollow" target="_blank">Moers-Carpi 2007</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/21197523/" rel="noopener nofollow" target="_blank">Sadick 2011</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38253886/" rel="noopener nofollow" target="_blank">Durairaj 2024</a>.)</p>
    `,
  },
  {
    id: 'faq-cost',
    category: 'faq',
    title: 'What does it cost?',
    tldr: 'In Europe, September 2026: €350–600 per 1.5 mL syringe. Folds €350–1,200; jawline or cheeks €800–2,000; hands €400–1,000; a hyperdilute course for the neck or chest €800–2,400; the ultrasound-plus-Radiesse package €1,500–3,500. Compare a hyaluronic syringe at €350–700 that lasts somewhat less and can be dissolved.',
    bodyHtml: `
      <p>Indicative clinic prices, not quotes; the syringe counts come from the trials cited above (<a href="https://pubmed.ncbi.nlm.nih.gov/22759259/" rel="noopener nofollow" target="_blank">Moers-Carpi 2012</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38253886/" rel="noopener nofollow" target="_blank">Durairaj 2024</a>).</p>
    `,
  },
  {
    id: 'faq-radiesse-or-sculptra',
    category: 'faq',
    title: 'Radiesse or Sculptra?',
    tldr: 'Radiesse for contour you want today — jawline, pre-jowl, chin, cheekbone, hands — lasting 12–18 months. Sculptra for a face that has deflated everywhere, if you can wait three months for a result that holds two years. Neither dissolves. The only head-to-head is a manufacturer-funded biopsy study, so choose on the problem, not on the brochure.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/41184662/" rel="noopener nofollow" target="_blank">Ferreira 2026</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39761144/" rel="noopener nofollow" target="_blank">Waibel 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/26481056/" rel="noopener nofollow" target="_blank">Jagdeo 2015</a>.) The <a href="/sculptra">Sculptra guide</a> grades the other side of the choice.</p>
    `,
  },
  {
    id: 'faq-radiesse-or-ha',
    category: 'faq',
    title: 'Radiesse or a hyaluronic-acid filler?',
    tldr: 'Hyaluronic acid first, and always near the eye, lip or nose: softer, invisible on scans, dissolvable. Radiesse when you know what you want, want it on bone, and want it to last longer — it kept 79% of folds improved at a year against 43% and used 30% less product. A Chinese calcium hydroxylapatite was simply non-inferior to Restylane at six months.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/18093199/" rel="noopener nofollow" target="_blank">Moers-Carpi 2008</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39331081/" rel="noopener nofollow" target="_blank">Pan 2025</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6554164/" rel="noopener nofollow" target="_blank">Chatrath 2019</a>.) The <a href="/fillers">filler guide</a> covers hyaluronic acid in full.</p>
    `,
  },
  {
    id: 'faq-dissolve',
    category: 'faq',
    title: 'Can it be dissolved if I do not like it?',
    tldr: 'No. Hyaluronidase does nothing to it; sodium thiosulfate dissolved it in dead pig skin once and failed in the manufacturer\'s own laboratory and animal study and inside cadaver arteries. The body clears it over one to two and a half years. Lumps are treated with massage, saline, steroid and 5-fluorouracil, or removed.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/30358629/" rel="noopener nofollow" target="_blank">Robinson 2018</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7781022/" rel="noopener nofollow" target="_blank">Danysz 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/33544840/" rel="noopener nofollow" target="_blank">Yankova 2021</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/27602980/" rel="noopener nofollow" target="_blank">Aguilera 2016</a>.)</p>
    `,
  },
  {
    id: 'faq-xray',
    category: 'faq',
    title: 'Will it show on an X-ray, CT or mammogram?',
    tldr: 'Yes on CT, often on X-ray, for up to two years. Blinded radiologists found it distinct from bone and not hiding anything behind it, in the face and in the hands; in the décolleté trial it did not interfere with breast imaging. Tell the radiographer or dentist that it is there, where and since when.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/18547186/" rel="noopener nofollow" target="_blank">Carruthers 2008</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/36573029/" rel="noopener nofollow" target="_blank">Moradi 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/42424535/" rel="noopener nofollow" target="_blank">Fabi 2026</a>.)</p>
    `,
  },
  {
    id: 'faq-hyperdilute',
    category: 'faq',
    title: 'Is "hyperdilute Radiesse" for skin tightening worth it?',
    tldr: 'On the chest, diluted 1:2, there is a randomised trial and an indication: 71.2% improved against 6.3%. Everywhere else it is biopsies, open series and consensus papers, with both 2024 systematic reviews noting that no randomised trial exists. Expect a somewhat thicker, firmer dermis over three to four months, not a lift, and pay accordingly.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/42424535/" rel="noopener nofollow" target="_blank">Fabi 2026</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37897174/" rel="noopener nofollow" target="_blank">Guida 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38390986/" rel="noopener nofollow" target="_blank">Galadari 2024</a>.) The <a href="/skin-tightening">tightening guide</a> grades the devices sold for the same promise.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What Radiesse is, what the trials show, and what it can and cannot do',
    intro: '',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book: the comparison, the dilutions, the products and the rules',
    intro: '',
    sections: context,
  },
  {
    id: 'uses',
    title: 'What Radiesse is used for — graded by evidence',
    intro: 'Seventeen things calcium hydroxylapatite is injected for, from the folds and hands with randomised trials to the lips and the nose. Sorted by evidence, not by the menu.',
    sections: uses,
  },
  {
    id: 'products',
    title: 'The products, the protocols — and the alternatives',
    intro: 'Five things sold under the name or the material, graded on their own evidence, and the three alternatives a clinic will offer instead.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The nodules, the missing antidote, the vessels, the scans, and who should not.',
    sections: safety,
  },
  {
    id: 'faq',
    title: 'Frequently asked questions',
    intro: 'Quick answers to what people actually ask.',
    sections: faq,
  },
];

export const focusLabels: Record<FocusArea, string> = {
  face: 'Face',
  folds: 'Folds',
  hands: 'Hands',
  skin: 'Skin quality',
  body: 'Body',
  scars: 'Scars',
  medical: 'Medical',
  brand: 'Brand',
  comparator: 'Instead',
  marketing: 'Marketing tier',
  general: 'General',
};

export function allSections(): Section[] {
  return groups.flatMap((g) => g.sections);
}

/** Tier counts for this guide — drives evidence ledgers. */
export function evidenceCounts(): Record<Evidence, number> {
  return countByTier(allSections());
}

/** Full-read time of this guide at ~220 wpm. */
export function readingMinutes(): number {
  return readingMinutesFor(allSections());
}

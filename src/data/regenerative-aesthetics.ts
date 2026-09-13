/**
 * Biostimulators & regenerative injectables — single source of truth.
 *
 * Consumed by /regenerative-aesthetics (the path is kept for the 35 guides
 * that link here). `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: "regenerative" is a marketing word laid over four
 * regulatory categories — CE-marked devices that stimulate collagen (PLLA,
 * CaHA, PCL, hyaluronic-acid hybrids, polynucleotides), your own blood
 * (PRP, PRF), surgical fat (nanofat) and unapproved biologics (exosomes,
 * "stem cells"). The best-evidenced biostimulators are the ones that were
 * trialled as fillers, with fold and volume endpoints; the skin-quality
 * claims driving the 2026 boom rest on small, mostly manufacturer-run
 * studies and one sham-controlled trial that was negative. The uses group
 * grades what the class can do; the products group grades each injectable
 * on its own trials. Regulatory status is as of September 2026; prices are
 * indicative Western/Central European and UK private rates, not quotes.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'volume'
  | 'skin'
  | 'body'
  | 'hair'
  | 'scars'
  | 'eyes'
  | 'device'
  | 'blood'
  | 'biologic'
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
  /** Rows: typical course, what to expect and price, for the expanded card. */
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
  '"Biostimulator" and "regenerative" cover four different things: CE-marked collagen-stimulating devices (poly-L-lactic acid, calcium hydroxylapatite, polycaprolactone, hyaluronic-acid hybrids, polynucleotides), your own spun blood (PRP, PRF), surgical fat (nanofat) and unapproved biologics (exosomes, "stem cells"). The evidence and the law differ for each, and the price list does not say which is which.',
  'The best-evidenced biostimulators are the ones tested as fillers. Poly-L-lactic acid beat human collagen on nasolabial folds with improvement lasting 25 months, corrected cheek wrinkles in 72% against 26% untreated at a year and temple hollows in 97% against none; calcium hydroxylapatite has a randomised hand trial and three years of follow-up without nodules; polycaprolactone kept 84% of folds improved at twelve months.',
  'The "skin quality" claims are thinner than the marketing. Hyaluronic-acid boosters improve instrument-measured firmness and hydration for about six months in small, mostly manufacturer-run studies, and the one sham-controlled split-face trial found no difference from saline; hyperdiluted calcium hydroxylapatite for "tightening" has consensus guidelines and, as of the 2024 systematic reviews, no randomised trial.',
  'PRP works modestly where it has meta-analyses — about 26–28 extra hairs per square centimetre in pattern hair loss, three times the odds of a large acne-scar improvement when added to microneedling — and inconsistently on facial wrinkles, where 80% of studies found thicker skin and 40% found fewer lines. "PRP" is not one product: platelet dose varies more than twofold between kits and only one study in ten reports its recipe.',
  'Polynucleotides are the 2026 boom on nine small studies of 219 patients, and equalled a hyaluronic-acid filler rather than beating it in their phase 3 trial. Exosomes have no authorised product anywhere, an FDA safety notice, and trials of three to sixty people using laboratory products unlike the vial in the clinic. "Stem-cell" injections blinded three women in one clinic. The risk in this field is the operator and the vial, not the platelets.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-biostimulators-are',
    category: 'concept',
    title: 'What a biostimulator is — and the four things sold under the "regenerative" label',
    tldr: 'A filler gives volume by sitting where it is put; a biostimulator provokes your fibroblasts into making collagen around it, so the result builds over months and outlasts the product. That is one mechanism shared by very different materials: synthetic microspheres (PLLA, CaHA, PCL), hyaluronic-acid hybrids, salmon-DNA fragments, your own platelets, and cell-derived vesicles with no product licence at all.',
    bodyHtml: `
      <p>The word covers a mechanism, not a molecule. Poly-L-lactic acid (PLLA, the material in Sculptra) and calcium hydroxylapatite (CaHA, Radiesse) are microspheres in a gel: the gel goes within days, the particles stay for months, and the tissue around them responds by laying down new collagen. The biology has been measured. In a randomised split-face biopsy study, CaHA raised type III collagen at four months and type I at nine, with more elastin and new vessels than a hyaluronic-acid filler and fewer inflammatory markers (<a href="https://pubmed.ncbi.nlm.nih.gov/25226004/" rel="noopener nofollow" target="_blank">Yutskovskaya 2014</a>); in the laboratory, only fibroblasts in direct contact with the spheres switched on, which is why diluting the product to spread the spheres wider recruits more of them (<a href="https://pubmed.ncbi.nlm.nih.gov/36575882/" rel="noopener nofollow" target="_blank">Nowag 2023</a>). Gene-expression studies of treated faces found PLLA switching on extracellular-matrix and adipocyte-regeneration genes with less inflammation, and CaHA a more inflammatory signature (<a href="https://pubmed.ncbi.nlm.nih.gov/39480040/" rel="noopener nofollow" target="_blank">Waibel 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39761144/" rel="noopener nofollow" target="_blank">Waibel 2025</a>) — mechanism, not outcome, and manufacturer-funded, but real.</p>
      <p>Then the label stretches. <strong>Polycaprolactone</strong> (PCL, Ellansé) is a third microsphere. <strong>Hyaluronic-acid "boosters"</strong> (Profhilo's hybrid complexes, Restylane Skinboosters, Belotero Revive, Juvéderm Volite) are lightly or un-cross-linked HA placed in the dermis to hydrate and, the makers argue, to stimulate. <strong>Polynucleotides</strong> (Rejuran, Plinest, Nucleofill) are purified DNA fragments from salmon sperm. <strong>PRP and PRF</strong> are your own blood spun to concentrate platelets and their growth factors. <strong>Nanofat</strong> is your own fat emulsified until only the stromal cells remain. <strong>Exosomes</strong> are vesicles harvested from cultured cells, plants or milk. Every one of these is graded on its own trials in Part 02, because "collagen stimulation" is the one thing they share and the evidence is the one thing they do not.</p>
    `,
  },
  {
    id: 'what-the-evidence-measures',
    category: 'concept',
    title: 'What the trials actually measured — folds and volume, not "glow"',
    tldr: 'The good trials in this field used filler endpoints: a wrinkle-severity grade on the nasolabial fold, a hand-grading scale, a temple-hollowing scale, with blinded evaluators and up to 25 months of follow-up. The "skin quality" claims — radiance, firmness, hydration, tightening — were measured with instruments in small open-label studies, mostly by the companies. A 2025 systematic review of the whole regenerative field concluded it "lacks the necessary scientific rigour and regulatory compliance".',
    bodyHtml: `
      <p>Read the endpoint before the result. PLLA earned its evidence on the Wrinkle Assessment Scale against a human-collagen comparator (<a href="https://pubmed.ncbi.nlm.nih.gov/20159311/" rel="noopener nofollow" target="_blank">Narins 2010</a>), CaHA on the Merz Hand Grading Scale against no treatment (<a href="https://pubmed.ncbi.nlm.nih.gov/28562435/" rel="noopener nofollow" target="_blank">Goldman 2018</a>), PCL on the Wrinkle Severity Rating Scale in a randomised trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10171959/" rel="noopener nofollow" target="_blank">Zhao 2023</a>). Those are volume and fold outcomes, judged by blinded evaluators, and they are why three of the products in Part 02 carry the top tier. The 2024 systematic reviews of CaHA are explicit that the fashionable use — diluted and hyperdiluted injection for "tightening" — had, at that point, "no randomized controlled trials" behind it on the face (<a href="https://pubmed.ncbi.nlm.nih.gov/37897174/" rel="noopener nofollow" target="_blank">Guida 2024</a>) or the body (<a href="https://pubmed.ncbi.nlm.nih.gov/38390986/" rel="noopener nofollow" target="_blank">Galadari 2024</a>).</p>
      <p>The skin-quality literature is instrument-heavy and control-light: cutometer firmness, corneometer hydration, ultrasound density, 3D pore volume, in studies of 14 to 60 people, often with the manufacturer among the authors. The one sham-controlled, double-blinded split-face trial of hyaluronic-acid microinjections found "no statistically significant improvements in wrinkling or elastosis" against saline (<a href="https://pubmed.ncbi.nlm.nih.gov/29381544/" rel="noopener nofollow" target="_blank">Jones 2018</a>). A 2025 meta-analysis pooled 25 biostimulator studies and could only estimate satisfaction (91%) and side-effect rates, at level 3 evidence (<a href="https://pubmed.ncbi.nlm.nih.gov/40674466/" rel="noopener nofollow" target="_blank">Smith 2025</a>); a systematic review of regenerative aesthetics as a whole found "a prevalent gap in molecular and clinical evidence" and no basis yet for recognising it as a specialty (<a href="https://pubmed.ncbi.nlm.nih.gov/39198280/" rel="noopener nofollow" target="_blank">Rahman 2025</a>). This guide grades accordingly: volume claims high, quality claims moderate, boom products low.</p>
    `,
  },
  {
    id: 'can-and-cant',
    category: 'concept',
    title: 'What biostimulators can and cannot do — and how long they take',
    tldr: 'They rebuild soft-tissue thickness gradually: nothing much at two weeks, a visible change at three months, the full result at six, lasting one to two years for the microsphere products and about six months for the boosters. They do not lift a sagging jawline, do not replace a precise hyaluronic-acid filler where shape matters, cannot be dissolved if placed badly, and are not a "natural" alternative to filler — they are a slower, longer, less controllable one.',
    bodyHtml: `
      <p>The timeline comes from the trials. PLLA's investigator-rated improvement was 100% three weeks after the last of a series of treatments and stayed above 85% through month 25, while human collagen fell from 94% to 6% by month 13 (<a href="https://pubmed.ncbi.nlm.nih.gov/21719865/" rel="noopener nofollow" target="_blank">Brandt 2011</a>); cheek-wrinkle responders on PLLA rose from 66% at month 7 to 72% at month 12 while untreated controls drifted from 39% to 26% (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>); PCL kept 92% of folds improved at six months, 84% at twelve and 64% at eighteen (<a href="https://pubmed.ncbi.nlm.nih.gov/33731572/" rel="noopener nofollow" target="_blank">Moers-Carpi 2021</a>); hyaluronic-acid hybrid complexes hydrate "up to 6 months" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12844948/" rel="noopener nofollow" target="_blank">Tintor 2025</a>). Judge nothing before three months, and expect two or three sessions before the full effect.</p>
      <p>The limits are structural. A biostimulator thickens tissue diffusely; it does not put a precise bolus under a cheekbone or hold a jawline the way a firm HA does (<a href="/fillers">filler guide</a>), and none of them lifts skin that has already slid (<a href="/sagging-skin">sagging skin</a>, <a href="/jowls">jowls</a>). The trade-offs against HA are honest: longer results and a more natural, gradual build, against no reversal with hyaluronidase, a small nodule rate, and a result that cannot be previewed. The marketing line "no filler, just your own collagen" describes a foreign body that stays for a year or more; that is not a criticism, but it is the fact to buy on.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'rules-and-access',
    category: 'context',
    title: 'What the law says about each of them in Europe',
    tldr: 'PLLA, CaHA, PCL, HA boosters and polynucleotides are CE-marked medical devices — a route that requires safety and performance data, not the efficacy trials a medicine needs. PRP and PRF are autologous blood products prepared at the point of care and legal in a medical setting. Nanofat is surgery. Exosomes and "stem-cell" injectables have no marketing authorisation anywhere; in the EU a cell-based therapy would need central authorisation as an advanced-therapy medicinal product, which no cosmetic product has.',
    bodyHtml: `
      <p>Regulation is part of the evidence story here, because the CE route asks less of a product than a medicine's licence does. Sculptra was first approved in the US for HIV facial lipoatrophy on the strength of trials like the 2004 randomised study in which immediate treatment beat delayed treatment on self-perception and anxiety (<a href="https://pubmed.ncbi.nlm.nih.gov/15012646/" rel="noopener nofollow" target="_blank">Moyle 2004</a>), then for nasolabial folds and, in 2023, cheek wrinkles; Radiesse for folds and, in the US, hands — the only body indication approved there — with an EU device approval for the décolletage added since (<a href="https://pubmed.ncbi.nlm.nih.gov/38390986/" rel="noopener nofollow" target="_blank">Galadari 2024</a>). Ellansé (PCL) and Profhilo are CE-marked and not FDA-approved; polynucleotide injectables are CE-marked devices in the EU and UK and Korean-approved, not FDA-approved. Diluted and hyperdiluted use of CaHA for "tightening" is off-label everywhere, governed by consensus guidelines rather than a licence (<a href="https://pubmed.ncbi.nlm.nih.gov/30358631/" rel="noopener nofollow" target="_blank">Goldie 2018</a>).</p>
      <p><strong>PRP and PRF</strong> are your own blood, drawn and re-injected in one sitting: no product licence applies, but blood handling does, and the defining harm in this field was an unlicensed spa reusing equipment (Safety). <strong>Exosomes</strong>: "no exosome product is approved" for any indication in the US, EU or UK, and the FDA issued a <a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">public safety notification</a> after patients were harmed by unapproved injections; clinics stay within the law by applying them to the skin after microneedling, as cosmetics. <strong>"Stem-cell" injections</strong> outside a trial are unapproved biologics, and the FDA's standing <a href="https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes" rel="noopener nofollow" target="_blank">consumer alert</a> catalogues blindness, tumours and infections. Ask any clinic which of the four categories it is selling you; the answer sets the evidence bar.</p>
    `,
  },
  {
    id: 'prices-protocols',
    category: 'context',
    title: 'Prices and the trial-based number of sessions',
    tldr: 'PLLA €600–1,000 per vial, two or three sessions a month apart; CaHA €450–800 per syringe, one or two; hyperdiluted CaHA or PLLA for the body €500–900 per area per session; PCL €500–900; HA boosters €250–500 per session, two or three; polynucleotides €300–600, two or three; PRP €250–600, three; PRF €300–650; exosomes €200–600 as an add-on; nanofat €2,000–5,000 as a surgical procedure. Anchor on the trial protocol, not the package.',
    bodyHtml: `
      <p>Use the trials as the reference for how much and how often. The PLLA nasolabial trial gave up to four sessions three weeks apart and followed people for 25 months (<a href="https://pubmed.ncbi.nlm.nih.gov/20159311/" rel="noopener nofollow" target="_blank">Narins 2010</a>); the cheek-wrinkle trial reached its 72% responder rate at twelve months after a short series (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>). The hyaluronic-acid booster studies used three sessions a month apart (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12042064/" rel="noopener nofollow" target="_blank">Rutnumnoi 2025</a>); Profhilo's protocol is two sessions a month apart, repeated at six months. The polynucleotide phase 3 trial used three injections two weeks apart (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4248006/" rel="noopener nofollow" target="_blank">Pak 2014</a>). PRP for hair is three monthly sessions with top-ups, and the network meta-analysis found more sessions closer together did more (<a href="https://pubmed.ncbi.nlm.nih.gov/36074501/" rel="noopener nofollow" target="_blank">Gupta 2022</a>); microneedling with PRP for scars is three or four combined sessions a month apart (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8882957/" rel="noopener nofollow" target="_blank">scar meta-analysis</a>).</p>
      <p>Two pricing traps. A "biostimulator package" of five or six sessions has no trial behind it; three is the usual maximum before judging. And a very low price for PLLA or CaHA usually means a heavily diluted vial spread across several clients, which changes the dose — ask how many vials or syringes, not how many sessions. The "exosome add-on" is €200–600 for a product no regulator has verified (Part 02).</p>
    `,
  },
  {
    id: 'vetting',
    category: 'context',
    title: 'Vetting the injector: technique, dilution, hygiene and the box',
    tldr: 'Biostimulator complications are mostly technique: PLLA nodules come from under-dilution, superficial placement, uneven suspension and skipped massage; CaHA cannot be dissolved, so placement matters more than with HA. Ask for a medical register number, the product box with its CE mark and lot number, the dilution and the plane, and — for PRP — the kit, the platelet fold-increase and single-use tubes opened in front of you. For exosomes, ask for the marketing-authorisation number; there is none.',
    bodyHtml: `
      <p>The product literature says it plainly: papules and nodules after PLLA "may result from incorrect reconstitution, uneven product distribution in the suspension, imprecise injection technique (superficial injection), or lack of posttreatment massage" (<a href="https://pubmed.ncbi.nlm.nih.gov/18547172/" rel="noopener nofollow" target="_blank">Narins 2008</a>), and in a 221-patient series the visible nodules clustered around the mouth and eyes, "so incidence is reduced by avoiding these areas" (<a href="https://pubmed.ncbi.nlm.nih.gov/19207324/" rel="noopener nofollow" target="_blank">Lowe 2009</a>). The consensus on diluted CaHA warns that "too-superficial injections of less diluted CaHA can lead to more adverse events" in thinner and darker skin (<a href="https://pubmed.ncbi.nlm.nih.gov/30358631/" rel="noopener nofollow" target="_blank">Goldie 2018</a>). These are injector variables, which is why the injector's answers matter more than the brand.</p>
      <p><strong>For PRP:</strong> the worst outcome on record had nothing to do with platelets. A CDC investigation traced an HIV cluster to platelet-rich plasma microneedling facials at an unlicensed New Mexico spa "that did not follow recommended infection control procedures or maintain client records" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11065465/" rel="noopener nofollow" target="_blank">CDC MMWR 2024</a>). Blood handling needs medical-grade hygiene: single-use everything, tubes opened in front of you, a licensed clinician. Then the dose question — a systematic review of 75 randomised PRP trials found preparation and platelet concentration varying widely, with temperature control during preparation correlating strongly with efficacy (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11313071/" rel="noopener nofollow" target="_blank">Rahman 2024</a>), and only one study in ten in the orthopaedic literature reports a reproducible protocol (<a href="https://pubmed.ncbi.nlm.nih.gov/29040132/" rel="noopener nofollow" target="_blank">Chahla 2017</a>). A good clinic knows its kit and its fold-increase; a shrug is your answer.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-folds-volume',
    category: 'use',
    title: 'Folds, hollow temples and cheeks — the filler-type indications',
    tldr: 'The strongest evidence in the field. PLLA beat human collagen on nasolabial folds with improvement lasting 25 months, corrected cheek wrinkles in 72% against 26% untreated at twelve months and temple hollowing in 97% against 0% at six; a CaHA product was non-inferior to a hyaluronic-acid filler in 188 people; PCL kept 89% of folds improved at a year against 24% in controls. Slower than HA, longer than HA, and not reversible.',
    evidence: 'strong',
    focus: 'volume',
    sessions: '2–3 sessions, 4–6 weeks apart; judge at 6 months',
    downtime: '2–5 days of swelling and bruising per session',
    cost: '€600–1,000 per PLLA vial; €450–800 per CaHA or PCL syringe',
    bodyHtml: `
      <p>Volume restoration is where biostimulators were tested as rigorously as fillers, because that is what they were licensed as. In the pivotal randomised study, injectable PLLA improved Wrinkle Assessment Scale scores at every time point, significantly more than human-based collagen from month 3 to month 13, with improvement lasting "up to 25 months after last treatment" (<a href="https://pubmed.ncbi.nlm.nih.gov/20159311/" rel="noopener nofollow" target="_blank">Narins 2010</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/21719865/" rel="noopener nofollow" target="_blank">Brandt 2011</a>). The 2024 cheek-wrinkle trial randomised against no treatment: responders at rest were 66% versus 39% at month 7 and 72% versus 26% at month 12, with investigators reporting improved radiance in over 95% and tighter appearance in over 88% (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>). A 2026 multicentre trial in the temples found 96.5% of treated participants at least one grade better at six months against 0% of untreated controls, holding to twelve months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13182905/" rel="noopener nofollow" target="_blank">Chang 2026</a>). A poly-D,L-lactic acid product matched hyaluronic acid on folds (67.6% versus 60.9% responders) (<a href="https://pubmed.ncbi.nlm.nih.gov/39178357/" rel="noopener nofollow" target="_blank">Ting 2024</a>), and a second PLLA brand was non-inferior to Sculptra split-face (<a href="https://pubmed.ncbi.nlm.nih.gov/37626137/" rel="noopener nofollow" target="_blank">Han 2023</a>).</p>
      <p>CaHA's fold trials are older and their long-term follow-up is the reassuring part: 40% of folds still rated improved 30 months after treatment and no nodules, granulomas or infections in 102 patients followed three years (<a href="https://pubmed.ncbi.nlm.nih.gov/20442101/" rel="noopener nofollow" target="_blank">Bass 2010</a>); a 2025 randomised, double-blind trial found a CaHA gel non-inferior to Restylane at 24 weeks in 188 Chinese subjects (<a href="https://pubmed.ncbi.nlm.nih.gov/39331081/" rel="noopener nofollow" target="_blank">Pan 2025</a>). PCL's randomised trial reported an effectiveness rate of 88.8% against 23.8% in controls at twelve months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10171959/" rel="noopener nofollow" target="_blank">Zhao 2023</a>). For the temple, the cheek and the pre-jowl area this is a real alternative to HA — graded strong on volume outcomes, with the reversibility caveat in Safety. The <a href="/facial-volume-loss">volume loss guide</a> and the <a href="/fillers">filler guide</a> cover the HA side.</p>
    `,
  },
  {
    id: 'use-hands',
    category: 'use',
    title: 'Ageing hands',
    tldr: 'The best-evidenced body indication: in a twelve-month multicentre randomised blinded trial, 75% of hands treated with CaHA improved by at least a point on a validated grading scale at three months and the response held through twelve, with no effect on hand function. Later randomised trials compared CaHA blends with each other rather than with nothing — hence moderate, not strong.',
    evidence: 'moderate',
    focus: 'body',
    sessions: '1–2 sessions; repeat at 12 months',
    downtime: 'A week of swelling; hands look worse before better',
    cost: '€600–1,200 for both hands',
    bodyHtml: `
      <p>Thin, veiny, tendon-showing hands are a volume problem, and CaHA was the first filler licensed for them in the US. The pivotal trial randomised subjects to CaHA or no treatment and blinded the evaluators: 75% reached at least a one-point improvement on the Merz Hand Grading Scale at three months, the response "was generally maintained through 12 months", 98% to 86% of subjects reported improvement, and "there were no clinically significant differences between control and CaHA-treated subjects in any hand function measure" (<a href="https://pubmed.ncbi.nlm.nih.gov/28562435/" rel="noopener nofollow" target="_blank">Goldman 2018</a>). Later randomised work tested variations — a premixed CaHA-and-HA blend against the standard product, with high satisfaction in both arms and improved hydration, elasticity and skin thickness (<a href="https://pubmed.ncbi.nlm.nih.gov/38831064/" rel="noopener nofollow" target="_blank">Faria 2024</a>) — and the body systematic review calls hands "the only FDA-approved indication on the body" (<a href="https://pubmed.ncbi.nlm.nih.gov/38390986/" rel="noopener nofollow" target="_blank">Galadari 2024</a>).</p>
      <p>PLLA is used the same way, on series evidence rather than trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9233565/" rel="noopener nofollow" target="_blank">Christen 2022</a>). The practical points: the back of the hand swells for a week and bruises easily, veins remain veins, and the pigment on top needs the lasers and retinoids of the <a href="/aging-hands">hands guide</a>. Graded moderate on one placebo-controlled trial plus comparative ones.</p>
    `,
  },
  {
    id: 'use-skin-quality',
    category: 'use',
    title: 'Skin quality: firmness, hydration, pores and "glow" with HA boosters',
    tldr: 'The booster promise, measured: hyaluronic-acid microinjections raised firmness, density and hydration on instruments in a systematic review of 13 studies, cut pore volume in a split-face trial, and increased dermal density 24% against 6% for saline in a placebo-controlled hand study. But the one sham-controlled split-face trial on the cheek found nothing over saline, most studies are open-label and manufacturer-run, and the effect is measured in months. Real, modest, temporary.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: '2–3 sessions a month apart; repeat at 6 months',
    downtime: 'Bumps for a day; bruising',
    cost: '€250–500 per session',
    bodyHtml: `
      <p>The systematic review of injectable HA for facial skin quality found 13 studies and concluded that all formulations improved "hydration, firmness, skin-tiring effect/fatigue, brightness, texture, radiance, and elasticity", that HA alone did more than vitamin-and-HA cocktails, and that "large randomized controlled trials are required" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10082573/" rel="noopener nofollow" target="_blank">Ghatge 2023</a>). The individual studies are consistent in direction: a randomised study of a glycerol-containing HA (Belotero Revive) improved cutometer firmness after one and three treatments and skin fatigue and density after three (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9907673/" rel="noopener nofollow" target="_blank">Kleine-Börger 2022</a>); a split-face randomised trial of two HA formulations reduced pore volume through week 32 in 29 people (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12042064/" rel="noopener nofollow" target="_blank">Rutnumnoi 2025</a>); the earliest placebo-controlled work injected one hand with HA and the other with saline and measured dermal density by ultrasound: +24% versus +6% at four weeks and +18% versus 0% at ten months in responders (<a href="https://pubmed.ncbi.nlm.nih.gov/25539986/" rel="noopener nofollow" target="_blank">Tedeschi 2015</a>); Restylane's original booster improved "overall skin quality" on the treated side in over 80% of 30 subjects on the face, hand and chest (<a href="https://pubmed.ncbi.nlm.nih.gov/24002145/" rel="noopener nofollow" target="_blank">Streker 2013</a>).</p>
      <p>Against that sits the trial with the best design: 14 patients, one cheek injected with HA microdroplets and the other with saline, double-blinded — "no statistically significant improvements in wrinkling or elastosis" on either side, and no difference between them (<a href="https://pubmed.ncbi.nlm.nih.gov/29381544/" rel="noopener nofollow" target="_blank">Jones 2018</a>). The honest reading is that boosters change what instruments measure — water content, firmness, small pores — for about six months, and that whether a blinded observer sees it depends on the study. Moderate, with a strong recommendation to photograph before and after in the same light.</p>
    `,
  },
  {
    id: 'use-neck-decolletage',
    category: 'use',
    title: 'Neck and décolletage',
    tldr: 'The first randomised, evaluator-blinded trial of diluted CaHA on the chest found 73.5% of women at least a grade better on a décolleté wrinkle scale 16 weeks after treatment; PLLA series report 83–90% improved on the chest and 81–100% on the neck, holding at 18 months. Consistent, industry-run, and almost all open-label — moderate.',
    evidence: 'moderate',
    focus: 'body',
    sessions: '2–3 sessions, 4–6 weeks apart',
    downtime: 'Bruising; the neck is unforgiving of superficial placement',
    cost: '€500–900 per session',
    bodyHtml: `
      <p>Crepe and horizontal lines on the chest are a thinning-dermis problem, and diluted microspheres placed under it are a plausible answer. The trial that moved this from consensus to evidence was a prospective, multicentre, evaluator-blinded, randomised study of diluted CaHA for décolleté wrinkles: 16 weeks after the last treatment, 73.5% of participants had improved by at least one point on the Merz décolleté scale at rest, with "a favorable safety profile" (<a href="https://pubmed.ncbi.nlm.nih.gov/38954627/" rel="noopener nofollow" target="_blank">Pavicic 2024</a>) — the study that underpins the EU device indication. PLLA's chest evidence is open-label: investigators rated 83% of subjects improved a month after the last treatment and 90% at six months (<a href="https://pubmed.ncbi.nlm.nih.gov/29119683/" rel="noopener nofollow" target="_blank">Wilkerson 2018</a>); on the neck and chest of 36 patients, photographic improvement in 81–100%, maintained at 18 months, with one early nodule (<a href="https://pubmed.ncbi.nlm.nih.gov/19438668/" rel="noopener nofollow" target="_blank">Mazzuco 2009</a>). A combined protocol of diluted CaHA and microfocused ultrasound moved neck, jawline and marionette scores by about half a grade at 15 months (<a href="https://pubmed.ncbi.nlm.nih.gov/32272518/" rel="noopener nofollow" target="_blank">Yutskovskaya 2020</a>).</p>
      <p>Graded moderate: one randomised trial and a run of consistent series, all manufacturer-connected. The neck is also where PLLA nodules were reported when placed too superficially (<a href="https://pubmed.ncbi.nlm.nih.gov/35960980/" rel="noopener nofollow" target="_blank">neck nodule report</a>), so the injector's experience with dilution matters more here than on the cheek. The <a href="/neck">neck guide</a> and <a href="/decolletage">décolletage guide</a> grade the alternatives.</p>
    `,
  },
  {
    id: 'use-laxity',
    category: 'use',
    title: 'Skin laxity, jawline and body "tightening" with hyperdiluted CaHA and PLLA',
    tldr: 'The consensus guidelines exist; the randomised trials, on the face and body, did not as of the 2024 systematic reviews. What exists: pre-post studies of hyperdiluted CaHA on arms, abdomen, thighs and buttocks with histology showing new collagen; one split-face randomised trial of radiofrequency microneedling with PLLA pushed through the channels; a combined CaHA-plus-ultrasound cellulite study. Plausible, popular, emerging.',
    evidence: 'emerging',
    focus: 'body',
    sessions: '2–3 sessions per area, 4–8 weeks apart',
    downtime: 'Bruising, induration for days',
    cost: '€500–900 per area per session',
    bodyHtml: `
      <p>Hyperdilution — one part CaHA to two or more parts saline and lidocaine, fanned under the skin — spreads the microspheres so more fibroblasts touch them (<a href="https://pubmed.ncbi.nlm.nih.gov/36575882/" rel="noopener nofollow" target="_blank">Nowag 2023</a>), and the global consensus describes its use on "the mid- and lower face, neck, décolletage, upper arms, abdomen, upper legs, and buttocks" while calling its own recommendations "preliminary guidelines for the novel off-label use" (<a href="https://pubmed.ncbi.nlm.nih.gov/30358631/" rel="noopener nofollow" target="_blank">Goldie 2018</a>). Both 2024 systematic reviews say the same thing: skin tightening on the body "has been proven" in practice and "yet to be supported by randomized controlled trials" (<a href="https://pubmed.ncbi.nlm.nih.gov/38390986/" rel="noopener nofollow" target="_blank">Galadari 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/37897174/" rel="noopener nofollow" target="_blank">Guida 2024</a>). The best mechanistic study treated buttocks and thighs with diluted CaHA and microfocused ultrasound, found a 4.5-point cellulite-scale improvement, and showed peak new collagen at 90 days in the 1:1 dilution (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5548562/" rel="noopener nofollow" target="_blank">Casabona 2017</a>).</p>
      <p>PLLA has a body review that describes its data as "still limited" area by area (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9233565/" rel="noopener nofollow" target="_blank">Christen 2022</a>) and one split-face randomised trial in which radiofrequency microneedling delivered PLLA through its channels and thickened the dermis without losing fat in 30 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/38051121/" rel="noopener nofollow" target="_blank">Wu 2024</a>). What "tightening" means here is a thicker, firmer dermis over months, not a lift: the <a href="/upper-arms">upper arms</a>, <a href="/cellulite">cellulite</a> and <a href="/sagging-skin">sagging skin</a> guides put it beside the energy devices and surgery. Emerging until a trial randomises an untreated arm.</p>
    `,
  },
  {
    id: 'use-hair',
    category: 'use',
    title: 'PRP for pattern hair loss',
    tldr: 'The best-evidenced cosmetic use of PRP: meta-analyses of randomised trials find about 26–28 extra hairs per square centimetre after three monthly sessions, in the same league as minoxidil, and adding PRP to minoxidil adds 9 more. The evidence is rated low quality — extreme heterogeneity, publication bias, unstandardised preparations — and the effect fades without maintenance because the androgen biology is untouched.',
    evidence: 'moderate',
    focus: 'hair',
    sessions: '3 monthly, then every 3–6 months',
    downtime: '1–2 days of scalp tenderness',
    cost: '€250–600 per session',
    bodyHtml: `
      <p>Three meta-analyses agree on the direction and the doubt. Fourteen randomised trials in 431 patients gave a mean difference of 27.55 hairs/cm² over control, with an I² of 96% and "evident publication bias" — "low quality evidence" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11551241/" rel="noopener nofollow" target="_blank">hair meta-analysis 2024</a>); 27 controlled trials in 1,117 subjects found +25.6 hairs/cm² against saline over medium-term follow-up, also rated low quality (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9918380/" rel="noopener nofollow" target="_blank">Cruciani 2023</a>); nine randomised trials in 238 patients found density up at three and six months against placebo but no significant difference in hair count or diameter (<a href="https://pubmed.ncbi.nlm.nih.gov/37533146/" rel="noopener nofollow" target="_blank">Zhang 2023</a>). A network meta-analysis of 25 trials found efficacy rose with more sessions closer together, chemical activation, double centrifugation, younger age and female sex (<a href="https://pubmed.ncbi.nlm.nih.gov/36074501/" rel="noopener nofollow" target="_blank">Gupta 2022</a>). Combined with minoxidil, PRP added 9.14 hairs/cm² and 4.72 µm of diameter over either alone in six studies (<a href="https://pubmed.ncbi.nlm.nih.gov/38789807/" rel="noopener nofollow" target="_blank">Xiao 2024</a>).</p>
      <p>Why not strong: the preparations differ so much that "PRP" in one trial is not "PRP" in the next, and the trials are small and short. Why moderate rather than emerging: the direction is consistent across dozens of controlled studies. PRP is an adjunct to minoxidil and finasteride, not a replacement — the <a href="/hair-loss">hair loss guide</a> grades the whole ladder, and the exosome claims for hair are in Part 02.</p>
    `,
  },
  {
    id: 'use-acne-scars',
    category: 'use',
    title: 'Microneedling with PRP for acne scars',
    tldr: 'The one facial use with meta-analytic weight: across 14 studies and 472 patients, adding PRP to microneedling nearly tripled the odds of a more-than-50% improvement on Goodman\'s scar scale (OR 2.97) and quadrupled the odds of satisfaction, without more severe redness or swelling. The PRP rides on a treatment that already works, and split-face trials cannot blind — but the increment is real.',
    evidence: 'moderate',
    focus: 'scars',
    sessions: '3–4 combined sessions, 4 weeks apart',
    downtime: '1–3 days of redness',
    cost: '€300–700 per session',
    bodyHtml: `
      <p>Microneedling creates the injury that remodels a rolling or boxcar scar; PRP applied into and over the channels adds growth factors to the healing. The meta-analysis pooled four randomised and ten split-face non-randomised studies: combined treatment was associated with increased odds of clinical improvement above 50% (OR 2.97, 95% CI 1.96–4.51, with no heterogeneity), a better mean Goodman score, and higher satisfaction (OR 4.15), while severe erythema and oedema were no more frequent (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8882957/" rel="noopener nofollow" target="_blank">scar meta-analysis</a>). This is the actual science behind the trademarked "vampire facial": the branding adds a licence fee, not efficacy.</p>
      <p>Two cautions. The increment sits on top of microneedling's own effect, so the honest comparison for a patient is "a bit more scar improvement per session", not "scars gone". And the trials could not blind the patient, because PRP's colour shows which side got it. The <a href="/microneedling">microneedling guide</a> covers the base treatment; for atrophic scars the alternatives are the lasers and subcision in that guide.</p>
    `,
  },
  {
    id: 'use-prp-face',
    category: 'use',
    title: 'PRP injected for facial skin — texture and thickness, not wrinkles',
    tldr: 'Twenty studies of 514 patients: significant improvement in skin thickness in 80% of studies and elasticity in 75%, wrinkles in 40%, texture in 33%, dyschromia in 17% and hydration in none. Three randomised split-face trials were positive on mostly subjective endpoints; adding PRP to a fractional CO2 laser added nothing measurable. Glow more than change.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: '3 sessions a month apart',
    downtime: '1–2 days',
    cost: '€250–600 per session',
    bodyHtml: `
      <p>The systematic reviews are unusually candid. Eleven of twelve studies, including three randomised split-face trials, reported improvement, "many of which were subjective", and level I evidence is still "required to confirm PRP injection efficacy in facial rejuvenation" (<a href="https://pubmed.ncbi.nlm.nih.gov/36728559/" rel="noopener nofollow" target="_blank">Gentile 2023</a>). The 2025 review broke the outcomes apart: significant improvement was reported in 80% of studies measuring skin thickness and 75% measuring elasticity, but only 40% on wrinkles, 33% on texture, 17% on dyschromia and 0% on hydration (<a href="https://pubmed.ncbi.nlm.nih.gov/40167104/" rel="noopener nofollow" target="_blank">Qin 2025</a>). In a split-face randomised comparison, PRP matched a ready-made growth-factor preparation on both clinical grading and optical-coherence-tomography thickness, with more sustained improvement (<a href="https://pubmed.ncbi.nlm.nih.gov/28382785/" rel="noopener nofollow" target="_blank">Gawdat 2017</a>); combined with fractional CO2, it was "as effective in improving wrinkles as fractional CO2 laser alone" — that is, it added nothing (<a href="https://pubmed.ncbi.nlm.nih.gov/36374507/" rel="noopener nofollow" target="_blank">Seoudy 2023</a>). A 2026 split-face trial found a photothermally preconditioned PRP outperforming standard PRP on 3D line depth in 28 volunteers — one more variable in an unstandardised product (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13462578/" rel="noopener nofollow" target="_blank">Wanitphakdeedecha 2026</a>).</p>
      <p>Fair expectation: measurably thicker, slightly firmer skin and a few weeks of radiance after three sessions, from your own blood, with no product risk; not a filler, toxin or laser result. Moderate on the thickness and elasticity data; the wrinkle claim would be emerging on its own.</p>
    `,
  },
  {
    id: 'use-under-eye',
    category: 'use',
    title: 'Under the eyes: PRP, PRF and polynucleotides',
    tldr: 'Fourteen periorbital studies of PRP and PRF: PRF for texture and crepiness with improvements that often faded by six months, PRP with the better signal for pigment; a randomised split-face trial of polynucleotides against a hyaluronic-acid filler found no difference on the visual scales. Nothing under the eye has beaten placebo, and hollows need the tear-trough section of the filler guide.',
    evidence: 'emerging',
    focus: 'eyes',
    sessions: '3–4 sessions, 2–4 weeks apart',
    downtime: '2–4 days; bruising likely',
    cost: '€300–600 per session',
    bodyHtml: `
      <p>The under-eye is the region where every regenerative injectable is sold and none has a controlled trial against nothing. The systematic review of platelet products found 14 studies: PRF "associated with improvements in skin texture, wrinkles, and crepiness", PRP with "stronger evidence for treating hyperpigmentation", both with mild transient side effects — and "PRF improvements often diminished by 6 months" while "current evidence does not support the superiority of one modality over the other" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12587466/" rel="noopener nofollow" target="_blank">Sollitto 2025</a>). For polynucleotides, the randomised, double-blind split-face trial against an HA filler found improvements on the visual-analogue and global-aesthetic scales "not significantly different", with the polynucleotide side scoring higher improvement rates for elasticity, hydration, roughness and pores on instruments (<a href="https://pubmed.ncbi.nlm.nih.gov/32248707/" rel="noopener nofollow" target="_blank">Lee 2022</a>); a 2026 review concludes HA "remains superior for structural correction" while polynucleotides improve "dermal quality parameters", with heterogeneity that "limits the ability to draw definitive conclusions" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13361502/" rel="noopener nofollow" target="_blank">Khan 2026</a>).</p>
      <p>Sort the problem first: a shadow from a hollow is a filler question (<a href="/fillers#use-tear-trough">tear trough</a>), pigment is a pigment question, and thin crepey skin is where PRF or polynucleotides might earn a modest, temporary improvement. The <a href="/dark-circles">dark circles guide</a> and the <a href="/eye-bags">eye bags guide</a> grade the alternatives; this row is emerging because the comparisons are between two unproven things.</p>
    `,
  },
  {
    id: 'use-combinations',
    category: 'use',
    title: 'Combining biostimulators with ultrasound, radiofrequency and lasers',
    tldr: 'A 2025 systematic review of 29 combination studies (10 to 350 subjects) found CaHA or PLLA with HIFU, fractional lasers or microneedling improving texture, elasticity and contour — and side effects in 15–30%, with rare granulomas and vascular occlusions. Eleven studies of microfocused ultrasound plus CaHA, mainly pre-post, showed new collagen on histology. Promising sequence, thin control arms.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: 'Device then injectable, 2–4 weeks apart, or same day per protocol',
    downtime: 'The device\'s plus the injection\'s',
    cost: '€1,200–3,000 for a combined course',
    bodyHtml: `
      <p>The logic is additive: heat or needles trigger a wound response, and the microspheres give it a scaffold. The systematic review found 29 combination studies — CaHA or PLLA with high-intensity focused ultrasound, fractional lasers and microneedling — with "notable improvements in skin texture, elasticity, and contouring", but adverse events "including erythema, bruising, and nodules in 15–30% of cases, with rare but severe complications such as granulomas and vascular occlusions", and "a lack of molecular understanding of the synergistic mechanisms" (<a href="https://pubmed.ncbi.nlm.nih.gov/39719485/" rel="noopener nofollow" target="_blank">Tam 2025</a>). Microfocused ultrasound plus CaHA specifically has eleven human studies, "mainly pre-post", with improved global scales and histological new collagen and elastin (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12080884/" rel="noopener nofollow" target="_blank">Amiri 2025</a>); the one randomised design in this area used radiofrequency microneedling to push PLLA into the skin on one side of the face (<a href="https://pubmed.ncbi.nlm.nih.gov/38051121/" rel="noopener nofollow" target="_blank">Wu 2024</a>); radiofrequency microneedling with topical polynucleotides improved periorbital lines faster than the device alone in 29 subjects (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9110589/" rel="noopener nofollow" target="_blank">Yogya 2022</a>).</p>
      <p>The sequencing question is safety as much as efficacy: energy over a fresh biostimulator is where nodules and occlusions cluster, and most protocols separate them by weeks. If a clinic offers a same-day "stack", ask which published protocol it follows. The <a href="/laser-ipl">laser guide</a> and <a href="/microneedling">microneedling and RF guide</a> grade the devices on their own.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'prod-plla',
    category: 'product',
    title: 'Poly-L-lactic acid — Sculptra, Gana V, AestheFill, Lanluma',
    tldr: 'The original collagen stimulator and the best-trialled: a randomised comparison against human collagen with improvement to 25 months, randomised no-treatment-controlled trials for cheek wrinkles (72% vs 26%) and temples (97% vs 0%), non-inferiority trials for two newer brands, and a 25-year record from HIV lipoatrophy. Nodules are the cost, and they are mostly technique. The systematic review still rates the evidence base "low quality" for bias — a fair reminder that the trials are the manufacturer\'s.',
    evidence: 'strong',
    focus: 'device',
    note: 'Best for: temples, cheeks, the pre-jowl and lower face, and body areas where a slow diffuse thickening is wanted',
    sessions: '2–3 vials over 2–3 sessions; results build to 6 months, last 2 years',
    downtime: '2–5 days swelling; massage five times a day for five days',
    cost: '€600–1,000 per vial',
    bodyHtml: `
      <p>PLLA microspheres in a reconstituted suspension, injected deep and massaged, provoke collagen around each particle and are gone themselves within about two years. The evidence is in Part 01: the human-collagen comparison (<a href="https://pubmed.ncbi.nlm.nih.gov/20159311/" rel="noopener nofollow" target="_blank">Narins 2010</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/21719865/" rel="noopener nofollow" target="_blank">Brandt 2011</a>), the cheek-wrinkle trial (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>), the temple trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13182905/" rel="noopener nofollow" target="_blank">Chang 2026</a>), Gana V's non-inferiority to Sculptra (<a href="https://pubmed.ncbi.nlm.nih.gov/37626137/" rel="noopener nofollow" target="_blank">Han 2023</a>), and the origin story in HIV facial wasting (<a href="https://pubmed.ncbi.nlm.nih.gov/15012646/" rel="noopener nofollow" target="_blank">Moyle 2004</a>). The systematic review of eleven studies found effects "sustained for at least 25 months", superiority over collagen in two, and five of the eleven at high risk of bias, concluding that the evidence "is of low quality" and the claims "should be further investigated" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11435306/" rel="noopener nofollow" target="_blank">Signori 2024</a>).</p>
      <p>Graded strong on the randomised, controlled, long-follow-up trials that no other biostimulator can match; the caveats are that they are manufacturer-run and that the nodule question is real (Safety). Modern reconstitution — more diluent, longer hydration, deeper placement, avoiding the lips and lower eyelids — cut the nodule rates of the early years, and a 2025 prospective series of 52 women on a newer PLLA brand recorded one small self-resolving nodule (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845952/" rel="noopener nofollow" target="_blank">Bravo 2025</a>). Not for the lips, the tear trough or anywhere you want a shape tomorrow.</p>
    `,
  },
  {
    id: 'prod-caha',
    category: 'product',
    title: 'Calcium hydroxylapatite — Radiesse',
    tldr: 'A filler that stimulates: licensed for folds and, in the US, hands; three-year follow-up of the fold trial with no nodules or granulomas; a 2025 double-blind non-inferiority trial against Restylane; the best histology in the field. The diluted and hyperdiluted "tightening" use that drives its popularity is off-label and had no randomised trial on the face or body as of 2024, with one décolleté trial since. Cannot be dissolved.',
    evidence: 'strong',
    focus: 'device',
    note: 'Best for: jawline, chin and pre-jowl contour, hands, and — diluted — the chest',
    sessions: '1–2 syringes; results at 1–3 months, last 12–18 months',
    downtime: '3–7 days swelling and bruising',
    cost: '€450–800 per syringe',
    bodyHtml: `
      <p>CaHA microspheres in a carboxymethylcellulose gel give immediate volume from the gel and a collagen response around the particles as it resorbs. The fold evidence: 40% of nasolabial folds still improved at 30 months and no delayed adverse events in 102 patients followed three years (<a href="https://pubmed.ncbi.nlm.nih.gov/20442101/" rel="noopener nofollow" target="_blank">Bass 2010</a>); a CaHA gel non-inferior to Restylane in a 188-subject double-blind trial (<a href="https://pubmed.ncbi.nlm.nih.gov/39331081/" rel="noopener nofollow" target="_blank">Pan 2025</a>). The hand evidence: the twelve-month randomised trial (<a href="https://pubmed.ncbi.nlm.nih.gov/28562435/" rel="noopener nofollow" target="_blank">Goldman 2018</a>). The mechanism: the split-face biopsy study showing type III then type I collagen, elastin and new vessels (<a href="https://pubmed.ncbi.nlm.nih.gov/25226004/" rel="noopener nofollow" target="_blank">Yutskovskaya 2014</a>). The face systematic review rates it "safe and effective" for cheeks, jawline, lipoatrophy and folds, with marionette lines, chin and pre-jowl "also tending to respond" (<a href="https://pubmed.ncbi.nlm.nih.gov/37897174/" rel="noopener nofollow" target="_blank">Guida 2024</a>); a jawline consensus protocol exists (<a href="https://pubmed.ncbi.nlm.nih.gov/24641600/" rel="noopener nofollow" target="_blank">Dallara 2014</a>).</p>
      <p>Strong for what it is licensed for. The dilution use is graded in Part 01 (neck and chest moderate; laxity and body emerging), and the safety difference from HA is the one to weigh: an intra-arterial CaHA injection cannot be reversed with hyaluronidase, and the expert consensus on managing it exists because it happens (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7687073/" rel="noopener nofollow" target="_blank">van Loghem 2020</a>). Gene-expression work found CaHA's signature more inflammatory than PLLA's (<a href="https://pubmed.ncbi.nlm.nih.gov/39761144/" rel="noopener nofollow" target="_blank">Waibel 2025</a>) — a Galderma-funded comparison of a Merz product, to be read as such.</p>
    `,
  },
  {
    id: 'prod-pcl',
    category: 'product',
    title: 'Polycaprolactone — Ellansé',
    tldr: 'The third microsphere, CE-marked and not FDA-approved: a randomised trial found 88.8% of folds improved at twelve months against 23.8% in controls; a European multicentre study kept 84% improved at a year and 64% at eighteen months with safety to 30 months; a 2025 comparison found it beating PLLA on fold severity and satisfaction. Fewer and mostly Asian or single-manufacturer trials, hence moderate; the longest-lasting of the three, and the hardest to undo.',
    evidence: 'moderate',
    focus: 'device',
    note: 'Best for: people who want the longest microsphere result and have tolerated a biostimulator before',
    sessions: '1–2 syringes; 1–2 sessions; lasts 18–24 months or more',
    downtime: '3–7 days',
    cost: '€500–900 per syringe',
    bodyHtml: `
      <p>PCL microspheres in a gel carrier resorb over two to four years depending on the product version, which makes Ellansé the longest-lasting biostimulator and the one with the least margin for error. The randomised controlled trial in Chinese patients reported an effectiveness rate of 88.8% versus 23.8% at twelve months, improvement that was sustained while the control group's "gradually vanished" from three months, and injection-related adverse events in 8.8% versus 11.3% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10171959/" rel="noopener nofollow" target="_blank">Zhao 2023</a>). The European prospective study found 84% with at least a one-point fold improvement at month 12, 64% at month 18, Global Aesthetic Improvement in over 90% through month 12, and no severe or unexpected events with safety confirmed to 30 months (<a href="https://pubmed.ncbi.nlm.nih.gov/33731572/" rel="noopener nofollow" target="_blank">Moers-Carpi 2021</a>). Head-to-head, PCL reduced fold severity significantly more than PLLA at 3, 6 and 12 months with higher satisfaction and comparable safety (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12392244/" rel="noopener nofollow" target="_blank">Hu 2025</a>).</p>
      <p>Moderate rather than strong because the randomised evidence is one trial plus product-versus-product comparisons, without the decades of follow-up PLLA and CaHA have, and because its longevity is exactly what makes a misplaced or overfilled result a two-year problem. An experienced injector's product, in the cheek and jawline, not a first biostimulator.</p>
    `,
  },
  {
    id: 'prod-ha-boosters',
    category: 'product',
    title: 'Hyaluronic-acid boosters and hybrid complexes — Profhilo, Skinboosters, Belotero Revive, Volite',
    tldr: 'Un-cross-linked or lightly cross-linked HA placed in the dermis for hydration and, the makers argue, fibroblast stimulation. Consistent instrument-measured gains in firmness, hydration and density in small studies; a sham-controlled trial that found nothing; a systematic review of Profhilo written with the manufacturer; and the cleanest safety record in the field — 371 adverse events in a projected 1.09 million Profhilo patients. Moderate, and honestly temporary.',
    evidence: 'moderate',
    focus: 'device',
    note: 'Best for: dull, dehydrated, finely lined skin on the face, neck and hands, in someone who accepts a six-month result',
    sessions: '2 sessions a month apart (Profhilo) or 3 (Skinboosters); repeat at 6 months',
    downtime: 'Bumps for hours to a day; bruising',
    cost: '€250–500 per session',
    bodyHtml: `
      <p>These are the products behind the word "booster". Restylane's non-animal stabilised HA was the first: micropuncture injections improved skin quality on the treated side in over 80% of subjects on face, hand and chest (<a href="https://pubmed.ncbi.nlm.nih.gov/24002145/" rel="noopener nofollow" target="_blank">Streker 2013</a>) and increased firmness and viscoelastic recovery in a pilot (<a href="https://pubmed.ncbi.nlm.nih.gov/19730872/" rel="noopener nofollow" target="_blank">Reuther 2010</a>). Belotero Revive (HA with glycerol) improved firmness, fatigue and density in a randomised study (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9907673/" rel="noopener nofollow" target="_blank">Kleine-Börger 2022</a>) and cut pore volume in a split-face trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12042064/" rel="noopener nofollow" target="_blank">Rutnumnoi 2025</a>). Profhilo's hybrid cooperative complexes of high- and low-molecular-weight HA have laboratory data on fibroblast and adipocyte vitality and clinical reports of reduced wrinkle severity, roughness and laxity with hydration "lasting up to 6 months" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12844948/" rel="noopener nofollow" target="_blank">Tintor 2025</a>); the 2026 systematic review of Profhilo and Profhilo Body reports improvements in elasticity, hydration, density and laxity across face, neck, arms, abdomen and hands, with mild events resolving within 72 hours — and manufacturer scientists among its authors (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13038071/" rel="noopener nofollow" target="_blank">Sparavigna 2026</a>).</p>
      <p>What keeps this at moderate is Part 01's sham-controlled trial (<a href="https://pubmed.ncbi.nlm.nih.gov/29381544/" rel="noopener nofollow" target="_blank">Jones 2018</a>) and the funding pattern; what earns it moderate rather than emerging is the consistency and the safety. Post-marketing surveillance of Profhilo projected 1,091,956 exposed patients and 371 adverse events — 0.034%, mostly swelling, redness and discomfort (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12257262/" rel="noopener nofollow" target="_blank">Salti 2025</a>); the earlier three-year report logged twelve, none serious (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7327616/" rel="noopener nofollow" target="_blank">Cassuto 2020</a>). Vitamin-and-amino-acid "mesotherapy cocktails" belong here too: the systematic review found HA alone did more than HA with cocktails (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10082573/" rel="noopener nofollow" target="_blank">Ghatge 2023</a>). If you want a biostimulator with no lasting foreign body and almost no risk, this is it; if you want a result at a year, it is not.</p>
    `,
  },
  {
    id: 'prod-prp',
    category: 'product',
    title: 'Platelet-rich plasma (PRP) — your own blood, unstandardised',
    tldr: 'Meta-analyses for hair and for acne scars, systematic reviews with mixed facial results, and a preparation problem that explains the spread: platelet dose differs more than twofold between kits, only one study in ten reports a reproducible protocol, and temperature control during preparation correlated strongly with efficacy across 75 randomised trials. Autologous, so no product risk; the risk is hygiene and the dose.',
    evidence: 'moderate',
    focus: 'blood',
    note: 'Best for: hair density alongside minoxidil, acne scars with microneedling, and skin thickness — with a clinic that can name its kit',
    sessions: '3 sessions, then maintenance',
    downtime: '1–2 days',
    cost: '€250–600 per session',
    bodyHtml: `
      <p>PRP is drawn from your arm, centrifuged to concentrate platelets in a small volume of plasma, and injected or needled back in; platelet granules release the growth factors (PDGF, TGF-β, VEGF, EGF) that plausibly drive fibroblasts, vessels and hair follicles. The indication-by-indication evidence is in Part 01: hair (moderate), scars with microneedling (moderate), facial skin (moderate on thickness, weaker on wrinkles), under-eyes (emerging). What unites them is the variable: a systematic review of 75 randomised trials in 5,726 patients found "significant variability in PRP preparation methods and application techniques, including differences in centrifugation protocols and platelet concentration levels", proposed a quality-reporting score, and found a strong correlation (r = 0.79) between temperature control during preparation and efficacy (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11313071/" rel="noopener nofollow" target="_blank">Rahman 2024</a>); in the orthopaedic literature only 10% of 105 studies described a reproducible protocol and 16% quantified what they injected (<a href="https://pubmed.ncbi.nlm.nih.gov/29040132/" rel="noopener nofollow" target="_blank">Chahla 2017</a>).</p>
      <p>So "PRP works" always means that PRP, at that dose, on that schedule. The narrative review of platelet concentrates in aesthetics concludes the field is "promising yet relatively recent", with small samples and no standardised assessment (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11808453/" rel="noopener nofollow" target="_blank">Davies 2025</a>). Moderate, on the meta-analyses; the cheapest regenerative option and the only one that is literally yours.</p>
    `,
  },
  {
    id: 'prod-prf',
    category: 'product',
    title: 'Platelet-rich fibrin (PRF, i-PRF) — the "second generation"',
    tldr: 'Blood spun slower without anticoagulant, giving a fibrin mesh that releases growth factors gradually. Real biology, thinner file: the few direct comparisons favour PRF, but they are few and small; the periorbital review found PRF improvements "often diminished by 6 months"; much of its aesthetic use is borrowed from dental surgery. Do not pay a premium for the word "generation".',
    evidence: 'emerging',
    focus: 'blood',
    note: 'Best for: the same uses as PRP, in a clinic that already does it well',
    sessions: '3 sessions',
    downtime: '1–2 days',
    cost: '€300–650 per session',
    bodyHtml: `
      <p>PRF differs from PRP in the spin (slower, shorter) and the tube (no anticoagulant), so the sample clots into a fibrin scaffold that holds platelets and leukocytes and releases growth factors over days rather than at once; injectable PRF (i-PRF) is the liquid version drawn before it sets. The review of platelet concentrates notes that "only few studies have compared PRP versus PRF with all demonstrating superior outcomes using PRF" — and that the studies are small and unstandardised (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11808453/" rel="noopener nofollow" target="_blank">Davies 2025</a>). The facial systematic review pooled PRP and PRF and identified skin thickness and elasticity as the parameters with the strongest evidence (<a href="https://pubmed.ncbi.nlm.nih.gov/40167104/" rel="noopener nofollow" target="_blank">Qin 2025</a>); the periorbital review found PRF's texture and fine-line improvements fading by six months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12587466/" rel="noopener nofollow" target="_blank">Sollitto 2025</a>); a 2024 systematic review of injectable PRF in alopecia and facial rejuvenation is on the same small base (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11247247/" rel="noopener nofollow" target="_blank">Mohale 2024</a>).</p>
      <p>Emerging: plausible advantage, no demonstrated superiority on outcomes that matter, and the same hygiene and dose questions as PRP. Choose the clinic that answers questions about preparation over the one selling the newer acronym.</p>
    `,
  },
  {
    id: 'prod-pn',
    category: 'product',
    title: 'Polynucleotides — Rejuran, Plinest, Nucleofill, Vitaran',
    tldr: 'The 2026 boom: purified DNA fragments from salmon sperm, sold as CE-marked injectable devices. A systematic review found nine studies of low-to-moderate quality in 219 patients; the phase 3 trial that launched Rejuran found no significant difference from a hyaluronic-acid filler on crow\'s feet; the split-face trial against HA under the eyes found no difference on visual scales. Mild side effects, moderate-to-high satisfaction, and no placebo-controlled trial. Emerging is exactly what this is.',
    evidence: 'emerging',
    focus: 'device',
    note: 'Best for: thin, crepey, dehydrated skin around the eyes and on the face in someone who wants something other than HA — with expectations set by the trials, not the feed',
    sessions: '3 sessions, 2–4 weeks apart; top-ups every 6–12 months',
    downtime: 'Bumps and bruising for 1–3 days',
    cost: '€300–600 per session',
    bodyHtml: `
      <p>Polynucleotides are long DNA chains purified from salmon (or trout) sperm, injected into the dermis on the theory that they supply nucleotides to stressed cells, bind water and calm inflammation. The systematic review found "nine studies, of low and moderate quality", 219 patients, "a variation regarding procedural characteristics", promising results on wrinkles, texture and elasticity, "limited consensus regarding their optimal use", and a need for "rigorous, high-quality studies" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845969/" rel="noopener nofollow" target="_blank">Lampridou 2025</a>). The foundational phase 3 trial — randomised, double-blind, matched-pairs, three injections two weeks apart — compared Rejuran with an HA filler on crow's feet: "the primary and secondary objective efficacy outcome measure showed no statistical significance between the two groups" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4248006/" rel="noopener nofollow" target="_blank">Pak 2014</a>). The periocular split-face trial against HA likewise found no difference on the visual and global scales, with better instrument scores for elasticity, hydration, roughness and pores on the polynucleotide side (<a href="https://pubmed.ncbi.nlm.nih.gov/32248707/" rel="noopener nofollow" target="_blank">Lee 2022</a>). An exploratory 20-woman study found polynucleotides improving nasolabial skin texture and prolonging a later HA filler (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10084116/" rel="noopener nofollow" target="_blank">Araco 2023</a>); an open-label Asian series reported benefits persisting to six months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10874187/" rel="noopener nofollow" target="_blank">Lim 2024</a>).</p>
      <p>Read those trials as they are: the product equalled a hyaluronic-acid filler on wrinkles rather than beating it, and it has never been tested against saline. The regulatory route is the device route, which asks for safety and performance, not efficacy. Emerging: real short-term skin-quality signals, heavy manufacturer gravity, fashionable prices — and a wholly reasonable choice for the person who understands that, and wants a booster that is not HA.</p>
    `,
  },
  {
    id: 'prod-nanofat',
    category: 'product',
    title: 'Nanofat and stromal vascular fraction — your own fat, emulsified',
    tldr: 'Fat harvested by liposuction and emulsified until no fat cells survive but the adipose-derived stem cells do, then injected into or under the skin. The originating study showed "remarkable improvements in skin quality" at six months in a surgeon\'s series; reviews since call for long-term efficacy and safety data. A surgical procedure with a genuine regenerative rationale and no randomised trial — emerging.',
    evidence: 'emerging',
    focus: 'blood',
    note: 'Best for: someone already having fat grafting or a facelift, where nanofat is added to the plan',
    sessions: 'Once, as surgery',
    downtime: '1–2 weeks (harvest site and face)',
    cost: '€2,000–5,000',
    bodyHtml: `
      <p>Nanofat is the legitimate end of the "stem cell" spectrum. Fat is harvested, mechanically emulsified and filtered; the resulting fluid contains no viable adipocytes but "adipose-derived stem cells were still richly present", with proliferation and differentiation capacity intact, and the clinical series reported "remarkable improvements in skin quality 6 months postoperatively" with no infections, cysts or granulomas (<a href="https://pubmed.ncbi.nlm.nih.gov/23783059/" rel="noopener nofollow" target="_blank">Tonnard 2013</a>). Its face-focused review lists fine lines, sun damage, scars and even alopecia as uses and concludes that "further studies are needed to assess the long-term efficacy and safety of this technique" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10342690/" rel="noopener nofollow" target="_blank">La Padula 2023</a>). Structural fat grafting for volume — a different procedure — sits in the <a href="/facial-volume-loss">volume loss guide</a>.</p>
      <p>Emerging because the evidence is surgeons' series without controls, and because the product is made in the operating theatre from your own tissue, which puts it outside product regulation and inside surgical judgement. It is not what a clinic means by a "stem-cell facial" (next row); it is a plastic surgeon's adjunct, usually added to a lift or a fat transfer rather than sold on its own.</p>
    `,
  },
  {
    id: 'prod-exosomes',
    category: 'product',
    title: 'Exosomes — no authorised product, and a vial no regulator has checked',
    tldr: 'Cell-derived vesicles sold as "cell-free stem-cell therapy", sourced from cultured human cells, plants or milk — which tells you how loose the category is. Systematic reviews find eight studies of three to sixty people with microneedling and 21 mostly preclinical papers; one investigator-blinded split-face trial found adipose-cell exosomes equal to PRP. No product is approved anywhere; the FDA issued a safety notification after patients were harmed; and the laboratory-characterised exosomes in trials are not the topical vial in a European clinic. Limited, on the product you can actually buy.',
    evidence: 'limited',
    focus: 'biologic',
    note: 'Best for: nothing yet — the tier grades the vial on the shelf, which no regulator has verified',
    sessions: 'Topical after microneedling, as an add-on',
    downtime: 'That of the microneedling',
    cost: '€200–600 on top of a procedure',
    bodyHtml: `
      <p>Exosomes are extracellular vesicles that carry proteins and RNA between cells, and the idea of harvesting them from cultured stem cells to deliver a "regenerative signal" without the cells is scientifically serious. The clinical record is not yet: the systematic review of microneedling with exosomes found eight eligible studies with sample sizes "from 3 to 60 participants" and concluded that "more evidence is required before we can ascertain the safety profile and efficacy profile" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13107235/" rel="noopener nofollow" target="_blank">Dhaliwal 2026</a>); a 2026 review of skin-rejuvenation studies pooled 21 articles across adipose-cell, platelet, plant and milk sources (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12952817/" rel="noopener nofollow" target="_blank">Alzahrani 2026</a>); the aesthetic review calls the evidence "early" and flags "the lack of standardization in the production and application" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11704993/" rel="noopener nofollow" target="_blank">Shah 2025</a>). The one controlled trial worth reading is an investigator-blinded split-face non-inferiority comparison in which adipose-stem-cell exosomes and PRP "equally improved wrinkling, dyschromia, erythema, texture, and overall skin appearance" with collagen I and glycosaminoglycans up in both arms on biopsy (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12104007/" rel="noopener nofollow" target="_blank">Estupiñan 2025</a>) — equal to a treatment graded moderate, in one study, with no untreated side. For hair, a systematic review found density gains of 9.5 to 35 hairs/cm² across heterogeneous small studies, the best of them randomised (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12433634/" rel="noopener nofollow" target="_blank">Al Ameer 2025</a>).</p>
      <p>Why limited rather than emerging: the product. No exosome preparation holds a marketing authorisation in the US, EU or UK; the FDA's <a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">safety notification</a> followed serious harm from unapproved injections; and the trial exosomes were characterised in a laboratory, whereas the vial dripped on after microneedling in Europe is a cosmetic of undisclosed content and origin — the review of the whole regenerative field says it "lacks the necessary scientific rigour and regulatory compliance" (<a href="https://pubmed.ncbi.nlm.nih.gov/39198280/" rel="noopener nofollow" target="_blank">Rahman 2025</a>). The science may arrive; the €400 add-on is ahead of it. Skip.</p>
    `,
  },
  {
    id: 'prod-stem-cells',
    category: 'product',
    title: '"Stem-cell" facials and injections',
    tldr: 'Outside a licensed trial, an injected "stem-cell" cosmetic is either mislabelled fat grafting or an unapproved biologic. The documented harm is not theoretical: three women aged 72–88 lost their sight, from 20/30–20/200 to 20/200 or no light perception, after adipose "stem-cell" eye injections at one clinic. No cosmetic-benefit trial exists; in the EU a cell therapy needs central authorisation that no such product has. Walk away.',
    evidence: 'limited',
    focus: 'biologic',
    note: 'Best for: no one, outside a registered clinical trial',
    sessions: '—',
    downtime: '—',
    cost: '€3,000–10,000, for harm',
    bodyHtml: `
      <p>The New England Journal of Medicine case series is the reference: three patients received intravitreal injections of autologous adipose "stem cells" at a stem-cell clinic; their visual acuity before ranged from 20/30 to 20/200 and one year later "from 20/200 to no light perception", after ocular hypertension, haemorrhagic retinopathy, retinal detachment and lens dislocation (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5551890/" rel="noopener nofollow" target="_blank">Kuriyan 2017</a>). The FDA's <a href="https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes" rel="noopener nofollow" target="_blank">consumer alert</a> catalogues blindness, tumours and infections across the sector. None of this is nanofat, which is a surgeon's autologous procedure (previous row), and none of it is the legitimate cell-therapy research that runs under trial approval.</p>
      <p>What a "stem-cell facial" usually contains in practice is conditioned medium from cultured cells, plant "stem cells" or an exosome preparation — cosmetics, applied topically, with the marketing borrowed from a field that has no approved cosmetic product. Limited on evidence, and the one row in this guide where the recommendation is unconditional.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-nodules',
    category: 'safety',
    title: 'Nodules, papules and granulomas — the biostimulator-specific risk',
    tldr: 'Across 25 pooled biostimulator studies, nodules occurred in about 5% (2–10%), bruising in 27%, pain in 92%. PLLA\'s early years produced far more — in one 221-patient series, 41 developed papules or nodules and 12 were visible, mostly around the mouth and eyes — and modern dilution, deeper placement and massage cut them. CaHA\'s three-year follow-up recorded none. Most resolve alone; some need steroid injection; a granuloma months later needs a doctor who knows what was injected.',
    bodyHtml: `
      <p>A foreign body that provokes collagen can provoke too much of it, or clump. The 2025 meta-analysis puts the pooled nodule rate across biostimulator studies at 5% (95% CI 2–10%), with bruising 27%, oedema 5%, erythema 16% and pain 92% (<a href="https://pubmed.ncbi.nlm.nih.gov/40674466/" rel="noopener nofollow" target="_blank">Smith 2025</a>). PLLA carries the history: in the three-year aesthetic experience of 221 patients, 41 developed papules or nodules after treatment, 14 barely palpable, 15 slightly visible and 12 "easily palpable, obviously visible", nine of those perioral and three periorbital or temple; five resolved on their own and seven needed intralesional steroid or surgery (<a href="https://pubmed.ncbi.nlm.nih.gov/19207324/" rel="noopener nofollow" target="_blank">Lowe 2009</a>). The causes are known and avoidable — reconstitution, suspension, superficial placement, no massage (<a href="https://pubmed.ncbi.nlm.nih.gov/18547172/" rel="noopener nofollow" target="_blank">Narins 2008</a>) — and current practice reflects it: one small nodule in 52 women in a 2025 series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845952/" rel="noopener nofollow" target="_blank">Bravo 2025</a>). CaHA's fold-trial cohort had "no reports of nodules, granulomata, or infections" over three years (<a href="https://pubmed.ncbi.nlm.nih.gov/20442101/" rel="noopener nofollow" target="_blank">Bass 2010</a>); combination protocols with energy devices reported nodules among side effects in 15–30% (<a href="https://pubmed.ncbi.nlm.nih.gov/39719485/" rel="noopener nofollow" target="_blank">Tam 2025</a>).</p>
      <p>Practical rules: no PLLA in the lips, lower eyelids or the thin skin of the neck without an injector who dilutes and places deep; massage as instructed; report a lump at any point, because early ones are managed differently from late granulomas; and keep the lot number, because a doctor treating a nodule a year later needs to know whether it is HA (dissolvable), CaHA or PLLA (not). Autoimmune disease and a history of granulomas are reasons to choose HA instead.</p>
    `,
  },
  {
    id: 'safety-vascular',
    category: 'safety',
    title: 'Vascular occlusion: the rare emergency, made worse by products that cannot be dissolved',
    tldr: 'Any filler injected into an artery can blind or cause skin necrosis. With hyaluronic acid there is an antidote; with CaHA, PLLA and PCL there is not, which is why an expert consensus exists specifically for managing intra-arterial CaHA and why case reports describe palatal necrosis after a cheek injection. The high-risk zones are the glabella, nose, nasolabial fold and temple. This is the argument for an injector who does it every day, and against a bargain.',
    bodyHtml: `
      <p>The risk is common to all fillers and is covered in numbers in the <a href="/fillers#safety-vascular">filler guide</a>; what changes with a biostimulator is the remedy. An expert consensus on intravascular CaHA sets out prevention (vascular anatomy, risk zones, aspiration, cannulas, slow low-volume injection), recognition of blanching, pain and mottling, and treatment protocols for impending necrosis — precisely because hyaluronidase does not dissolve calcium hydroxylapatite (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7687073/" rel="noopener nofollow" target="_blank">van Loghem 2020</a>); a case report describes occlusion of a branch of the internal maxillary artery with palatal necrosis after a cheek injection of CaHA (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8901201/" rel="noopener nofollow" target="_blank">Soares 2022</a>). The combination-therapy review lists vascular occlusion among the "rare but severe" complications (<a href="https://pubmed.ncbi.nlm.nih.gov/39719485/" rel="noopener nofollow" target="_blank">Tam 2025</a>).</p>
      <p>Choose HA for the tear trough, the nose, the glabella and the lips regardless of what a biostimulator promises there; choose a biostimulator for the cheek, temple, jawline and body with someone who uses a cannula and knows the emergency protocol by heart. Sudden pain, whitening or a dusky net-like pattern during or after injection is an emergency in the next hour, not a "wait and see".</p>
    `,
  },
  {
    id: 'safety-hygiene',
    category: 'safety',
    title: 'PRP and PRF: the substance is benign; the operator is the risk',
    tldr: 'Your own blood cannot be rejected and rarely causes more than bruising, swelling and a day of tenderness. The defining harm in the field was hygiene: a CDC investigation linked an HIV cluster to PRP microneedling facials at an unlicensed spa that did not follow infection control or keep client records — the first documented HIV transmission through a cosmetic injection service. Single-use tubes and needles, a licensed clinician, and your own sample labelled in front of you.',
    bodyHtml: `
      <p>Every trial in Part 01 reports PRP's side effects as mild and transient — bruising, oedema, occasional papules, scaling or dryness at the injection site (<a href="https://pubmed.ncbi.nlm.nih.gov/40118148/" rel="noopener nofollow" target="_blank">Rodríguez-Castro 2025</a>) — and no serious events (<a href="https://pubmed.ncbi.nlm.nih.gov/40167104/" rel="noopener nofollow" target="_blank">Qin 2025</a>). The catastrophe was procedural: the New Mexico investigation found "an HIV cluster associated with receipt of cosmetic injection services at an unlicensed facility that did not follow recommended infection control procedures or maintain client records", with highly similar viral sequences among the cases (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11065465/" rel="noopener nofollow" target="_blank">CDC MMWR 2024</a>). Blood is blood; a facial that involves it is a medical procedure, however it is marketed.</p>
      <p>The checklist: medical registration you can look up; single-use tubes, needles and cartridges opened in front of you; your tube labelled with your name; a centrifuge and kit the clinic can name, with its platelet fold-increase; no shared vials of anything. Under the eye, the small vascular risks of any periocular needle apply. Pregnancy and breastfeeding: no data for any regenerative injectable — defer.</p>
    `,
  },
  {
    id: 'safety-biologics',
    category: 'safety',
    title: 'Exosomes and "stem cells": where the substance itself is the hazard',
    tldr: 'Unapproved biologics of unknown content, dose and sterility. The FDA\'s safety notification on exosome products followed serious adverse events from unapproved injections; its consumer alert on regenerative products logs blindness, tumours and infections; the NEJM series documents three women blinded. Topical use after microneedling keeps European clinics legal and tells you nothing about what is in the vial. No European authorisation exists for any of them.',
    bodyHtml: `
      <p>The three regulatory facts: no exosome product is approved for any indication anywhere; the FDA issued a <a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">public safety notification</a> after patients were harmed by unapproved exosome injections; and its standing <a href="https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes" rel="noopener nofollow" target="_blank">consumer alert</a> on stem-cell and exosome products catalogues blindness, tumours and infections. The medical fact is the NEJM series of three women who lost their sight after "stem-cell" eye injections (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5551890/" rel="noopener nofollow" target="_blank">Kuriyan 2017</a>). The scientific fact is that the reviews of the field itself flag "challenges in the standardization of isolation protocols" and "establishment of regulatory frameworks" as unresolved (<a href="https://pubmed.ncbi.nlm.nih.gov/40533901/" rel="noopener nofollow" target="_blank">Nahm 2025</a>).</p>
      <p>In Europe a cell-based therapy is an advanced-therapy medicinal product requiring central authorisation, which no aesthetic product has; a topical "exosome serum" is a cosmetic, which needs no efficacy data and whose contents nobody has verified. Ask for the marketing-authorisation number; the absence of one ends the conversation. If you have had an injected biologic and a swelling, nodule or infection appears, tell the treating doctor exactly what it was, and where it came from.</p>
    `,
  },
  {
    id: 'safety-who-not',
    category: 'safety',
    title: 'Who should choose something else',
    tldr: 'Anyone who wants a result they can see tomorrow or undo next month: HA. Anyone with active autoimmune disease, a history of granulomas or keloids, or an infection near the site: not a microsphere. Pregnancy and breastfeeding: nothing in this guide has data. The lips, tear trough, nose and glabella: HA or nothing. And anyone offered a package of five sessions, a same-day "stack" with energy devices, or a biologic without a licence number: a different clinic.',
    bodyHtml: `
      <p>Biostimulators suit the patient who accepts a slow, diffuse, long result and the small permanent risks that come with a product that cannot be dissolved. They do not suit precision (the tear trough, the lip border, the nose), impatience (nothing to judge for three months), or a first experiment with injectables — the sensible order is a reversible HA first, a biostimulator once you know your face's response. Systemic conditions that alter the foreign-body response — active autoimmune disease, immunosuppression, a history of sarcoidosis or granulomas — are reasons most consensus documents list for caution with microspheres (<a href="https://pubmed.ncbi.nlm.nih.gov/30358631/" rel="noopener nofollow" target="_blank">Goldie 2018</a>).</p>
      <p>Then the commercial red flags, which in this field predict harm better than any medical history: a "course" longer than the trial protocol; a very low per-vial price; a same-day combination with heat or needling that no published protocol describes; a product with no box, no CE mark and no lot number on your record; an "exosome" or "stem-cell" add-on without a marketing authorisation; and a practitioner who cannot say what platelet concentration their kit produces. Each is an answer to a question you did not have to ask.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-longest',
    category: 'faq',
    title: 'Which one lasts longest?',
    tldr: 'PCL, then PLLA (about two years), then CaHA (12–18 months), then HA boosters and polynucleotides (about six months), then PRP (months, with maintenance).',
    bodyHtml: `
      <p>PLLA improvement stayed above 85% through month 25 (<a href="https://pubmed.ncbi.nlm.nih.gov/21719865/" rel="noopener nofollow" target="_blank">Brandt 2011</a>); PCL kept 84% of folds improved at twelve months and 64% at eighteen (<a href="https://pubmed.ncbi.nlm.nih.gov/33731572/" rel="noopener nofollow" target="_blank">Moers-Carpi 2021</a>); CaHA folds were 40% still improved at 30 months (<a href="https://pubmed.ncbi.nlm.nih.gov/20442101/" rel="noopener nofollow" target="_blank">Bass 2010</a>); HA hybrid hydration lasts "up to 6 months" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12844948/" rel="noopener nofollow" target="_blank">Tintor 2025</a>). Longest is not best: it is also the longest to live with a mistake.</p>
    `,
  },
  {
    id: 'faq-sessions',
    category: 'faq',
    title: 'How many sessions do I actually need?',
    tldr: 'Two or three for PLLA, CaHA, boosters and polynucleotides; three for PRP; one or two for PCL. Judge at three to six months, not at the next appointment.',
    bodyHtml: `
      <p>The trial protocols are in the prices drawer. The PLLA cheek-wrinkle trial reached its 72% responder rate at twelve months after a short series (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>); polynucleotides were three injections two weeks apart (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4248006/" rel="noopener nofollow" target="_blank">Pak 2014</a>); PRP for hair works better with more frequent sessions early, then maintenance (<a href="https://pubmed.ncbi.nlm.nih.gov/36074501/" rel="noopener nofollow" target="_blank">Gupta 2022</a>). A five-session "package" is a sales structure.</p>
    `,
  },
  {
    id: 'faq-sculptra-vs-radiesse',
    category: 'faq',
    title: 'Sculptra or Radiesse?',
    tldr: 'Sculptra for diffuse volume in temples, cheeks and body over months; Radiesse for contour with some immediate effect on the jawline and chin, and for hands. Both irreversible; both strong on their licensed uses.',
    bodyHtml: `
      <p>PLLA has the longer randomised record and no immediate volume; CaHA gives volume on the day from its gel and stimulates as it resorbs, with a jawline consensus (<a href="https://pubmed.ncbi.nlm.nih.gov/24641600/" rel="noopener nofollow" target="_blank">Dallara 2014</a>) and the hand trial (<a href="https://pubmed.ncbi.nlm.nih.gov/28562435/" rel="noopener nofollow" target="_blank">Goldman 2018</a>). Gene studies funded by Sculptra's maker found its signature more regenerative and Radiesse's more inflammatory (<a href="https://pubmed.ncbi.nlm.nih.gov/39761144/" rel="noopener nofollow" target="_blank">Waibel 2025</a>) — interesting, and to be read as sponsored. Injector experience with the specific product matters more than the choice.</p>
    `,
  },
  {
    id: 'faq-profhilo',
    category: 'faq',
    title: 'Is Profhilo worth it?',
    tldr: 'For hydration, firmness and glow for about six months, with the best safety record in the field: yes, if that is what you want. For wrinkles or lift: no.',
    bodyHtml: `
      <p>Hybrid HA complexes improve instrument-measured hydration and elasticity for up to six months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12844948/" rel="noopener nofollow" target="_blank">Tintor 2025</a>) with 0.034% adverse events across a projected million patients (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12257262/" rel="noopener nofollow" target="_blank">Salti 2025</a>); the systematic review is co-written with the manufacturer (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13038071/" rel="noopener nofollow" target="_blank">Sparavigna 2026</a>) and the sham-controlled trial of HA microinjections was negative (<a href="https://pubmed.ncbi.nlm.nih.gov/29381544/" rel="noopener nofollow" target="_blank">Jones 2018</a>). Two sessions, €600–1,000, a six-month result you should photograph to believe.</p>
    `,
  },
  {
    id: 'faq-under-eye',
    category: 'faq',
    title: 'Polynucleotides or PRP under the eyes?',
    tldr: 'Neither has beaten placebo. PRP is cheaper and yours; polynucleotides equalled an HA filler on the visual scales. A hollow needs filler, pigment needs pigment treatment.',
    bodyHtml: `
      <p>The periorbital platelet review found PRP better for pigment and PRF for texture, neither superior and PRF fading by six months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12587466/" rel="noopener nofollow" target="_blank">Sollitto 2025</a>); the polynucleotide split-face trial found no difference from HA on the visual scales (<a href="https://pubmed.ncbi.nlm.nih.gov/32248707/" rel="noopener nofollow" target="_blank">Lee 2022</a>). Sort the cause with the <a href="/dark-circles">dark circles guide</a> before paying for either.</p>
    `,
  },
  {
    id: 'faq-exosomes-legal',
    category: 'faq',
    title: 'Are exosome treatments legal?',
    tldr: 'Only as topical cosmetics. No exosome injectable is authorised anywhere, and the FDA has warned after patients were harmed.',
    bodyHtml: `
      <p>Clinics apply them after microneedling, which keeps the treatment within cosmetics law and outside any efficacy requirement. The trials that exist are tiny (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13107235/" rel="noopener nofollow" target="_blank">Dhaliwal 2026</a>), and the one controlled comparison used laboratory-characterised exosomes, not a retail vial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12104007/" rel="noopener nofollow" target="_blank">Estupiñan 2025</a>). Legal, unverified, and graded limited.</p>
    `,
  },
  {
    id: 'faq-replace-filler',
    category: 'faq',
    title: 'Can a biostimulator replace filler?',
    tldr: 'For temples, cheeks and jawline, often. For lips, tear troughs, nose and precise shaping, no. And it cannot be dissolved.',
    bodyHtml: `
      <p>The filler-type trials in Part 01 show PLLA, CaHA and PCL matching or beating HA on folds and volume over a year or more. What they cannot do is give a shape you approve in the mirror the same day, or be reversed. Many people use both: HA where precision matters, a biostimulator where diffuse thickness does. The <a href="/fillers">filler guide</a> is the other half of the decision.</p>
    `,
  },
  {
    id: 'faq-cost',
    category: 'faq',
    title: 'What does it all cost?',
    tldr: '€250–600 a session for PRP or boosters, €450–1,000 per vial or syringe for the microspheres, €200–600 for an exosome add-on you should decline, €2,000–5,000 for nanofat surgery.',
    bodyHtml: `
      <p>Indicative European private prices. The trial-backed course of PLLA (two or three vials) runs €1,500–3,000 and lasts about two years; a CaHA jawline or hands treatment €900–1,600 for 12–18 months; a Profhilo course €600–1,000 for six months; three PRP sessions €750–1,800. Price the result by its duration, and ask how many vials, not how many sessions.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What a biostimulator is — and what the trials measured',
    intro: '',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book: the law, the prices and the injector',
    intro: '',
    sections: context,
  },
  {
    id: 'uses',
    title: 'What regenerative injectables can do — every use graded',
    intro: 'Graded on the trials for each indication, whichever product ran them. Volume and folds carry the best evidence in the field; skin quality, tightening and the under-eye carry the marketing.',
    sections: uses,
  },
  {
    id: 'products',
    title: 'The injectables, one by one — each graded on its own trials',
    intro: 'From the microspheres with randomised, two-year data to the biologics with no licence. A product is graded on what it has shown, not on what the class claims.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The substance versus the operator: nodules and irreversibility for the microspheres, hygiene for blood products, and the vial itself for the unapproved biologics.',
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
  volume: 'Volume',
  skin: 'Skin quality',
  body: 'Body',
  hair: 'Hair',
  scars: 'Scars',
  eyes: 'Under-eye',
  device: 'CE device',
  blood: 'Your own tissue',
  biologic: 'Unapproved biologic',
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

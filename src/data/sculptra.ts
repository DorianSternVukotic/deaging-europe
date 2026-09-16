/**
 * Sculptra / poly-L-lactic acid guide — single source of truth (clinic, in-clinic layout).
 *
 * Consumed by /sculptra. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: poly-L-lactic acid (PLLA) is the original and best-trialled
 * collagen stimulator — a suspension of microparticles that provoke a
 * controlled foreign-body reaction, so the result arrives over months and
 * lasts about two years, cannot be dissolved, and depends on dilution, depth
 * and massage. Tiers grade the area, not the brand: the randomised trials are
 * on the nasolabial folds, cheeks and temples and in HIV lipoatrophy; skin
 * quality has one saline-controlled trial; the body has small split-body
 * trials; the lips, the tear trough and the front of the neck are where the
 * nodules were. Tiers stay consistent with the guides that already grade
 * PLLA (/regenerative-aesthetics, /facial-volume-loss, /nasolabial-folds,
 * /collagen-loss, /jowls, /sagging-skin, /marionette-lines, /cellulite,
 * /decolletage, /upper-arms, /aging-hands, /neck, /anti-aging-30s); where
 * this page diverges (the fold graded strong on the three randomised
 * comparisons; the temple graded moderate on its single trial) the row says
 * so. Prices are indicative European clinic prices as of September 2026, not
 * quotes; regulatory statements are as of September 2026.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea =
  | 'face'
  | 'folds'
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
  'Sculptra is not a filler. Each vial is 150 mg of freeze-dried poly-L-lactic acid microparticles that the clinic suspends in water and lidocaine and places under the skin, where macrophages and fibroblasts wall each particle in and lay down collagen — type III first, then type I, significantly more on biopsy at three and six months with no or mild inflammation — while the particles themselves take about two years to dissolve. Nothing shows on the day; the result builds over three to six months and holds for roughly two years. Sold in Europe since 1999 (as New-Fill), approved by the FDA for HIV facial wasting in 2004, for cosmetic use in 2009 and for cheek wrinkles in 2023.',
  'Where the trials are: the folds, the cheeks, the temples and the HIV face. Against human collagen in 233 people, PLLA improved nasolabial folds more from month 3 to 13 and the improvement held to 25 months; against no treatment, 71.6% of cheeks were a grade better at a year versus 26.1%, with a measurable lift on 3D photography; against hyaluronic acid, it lost at four weeks and won from nine months — 92.4% against 59.3% corrected at 48 weeks in a 252-person double-blind trial, 90.6% against 51.0% for midface volume in 331 people, and 55.6% against 25.0% at 120 weeks. In 174 people with hollow temples, 96.5% improved a grade at six months against 0% untreated. The catch is that every one of these is the manufacturer\'s trial, and a systematic review of the eleven randomised trials rated the evidence "of low quality", with five at high risk of bias.',
  'Skin quality and the body are a tier lower. One double-blind trial gave 40 women PLLA or saline into both cheeks: at a year the PLLA faces had higher elasticity and hydration and lower pigmentation, redness and pore size on blinded grading. On the body the trials are split-body and tiny — 20 knees, 15 hip dells (dermis 26% and fat 27% thicker than the saline side), 31 women with cellulite treated with subcision plus PLLA or saline, 20 with cellulite alone — and the manufacturer\'s own body consensus calls its evidence "largely prospective observational analyses and case series". Buttock augmentation needed at least 20 vials in the one 60-patient series. Hands, décolletage, arms and knees have open series; the neck has nodules.',
  'The price of the mechanism is a lump. In the early years, 41 of 221 cosmetic patients developed papules or nodules, 12 of them visible — nine around the mouth, three around the eyes or temple; the first HIV study found palpable micronodules in 44%. Higher dilution (8–9 mL plus lidocaine), deeper placement, fewer vials a session and five days of massage cut that to about 5% across pooled biostimulator studies, 3% in one immediate-reconstitution series and one nodule in 167 patients in another; true granulomas, appearing months or years later, run at 0.01–0.1% and need steroids, 5-fluorouracil or excision. Nothing dissolves PLLA: in a 55-case Brazilian series only five biostimulator complications resolved completely, and hyaluronidase helped only where hyaluronic acid was also present. Blindness has been reported once after a temple injection.',
  'What to do with that: Sculptra suits the face that has deflated everywhere — temples, cheeks, the pre-jowl and lower face — and the person who wants a gradual, natural, two-year change and accepts that it cannot be undone; hyaluronic acid first if you want a shape tomorrow, a single hollow filled, or the option to reverse it. Budget two or three sessions of one or two vials on the face and many more on the body, at €500–900 a vial; ask about the reconstitution volume, the cannula, the plane and the massage; and walk past the lips, the tear trough, the front of the neck and any "collagen banking" pitch made to a thirty-year-old with nothing to correct.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-sculptra-is',
    category: 'concept',
    title: 'What Sculptra is — a collagen stimulator, and how the mechanism actually works',
    tldr: 'Poly-L-lactic acid is the polymer of dissolvable sutures, ground into microparticles of a size the body cannot clear at once. Injected as a suspension under the skin, each particle is walled in by macrophages and fibroblasts that deposit collagen type III and then type I around it; on human biopsies collagen I rose significantly at three and six months with no or mild inflammation, and particles were still retrievable 28 months later. The volume you see is your own collagen and, on the gene data, some regenerated fat — which is why nothing shows for weeks, the result builds over months, and there is no enzyme to dissolve it.',
    bodyHtml: `
      <p>The material: "a synthetic, biocompatible, biodegradable polymer" whose particle "size and chemical attributes … are central to this agent's ability to promote a subclinical inflammatory response that stimulates deposition of collagen in the extracellular matrix" (<a href="https://pubmed.ncbi.nlm.nih.gov/29897517/" rel="noopener nofollow" target="_blank">Fitzgerald 2018</a>). The biology, from human tissue: "CD68(+) macrophages were found next to PLLA. CD90(+) fibroblasts were found alongside … Substantial collagen type III deposition was detected next to PLLA particles and collagen type I was found at the periphery of PLLA encapsulations", with the genes for both collagens and TGF-β1 switched up, and "PLLA particles were still retrievable 28 months after subcutaneous application" (<a href="https://pubmed.ncbi.nlm.nih.gov/25703057/" rel="noopener nofollow" target="_blank">Stein 2015</a>). In the one prospective biopsy study, 14 people were sampled at 3, 6 and 12 months: increases in collagen types I and III at 3 and 6 months, "statistically significant for collagen type I", with "no or mild inflammation" throughout (<a href="https://pubmed.ncbi.nlm.nih.gov/23464798/" rel="noopener nofollow" target="_blank">Goldberg 2013</a>). Newer gene-expression work in 21 randomised nasolabial folds found PLLA "uniquely correlates with genes involved in adipocyte regeneration" — a fat-rebuilding signature that calcium hydroxylapatite did not share (<a href="https://pubmed.ncbi.nlm.nih.gov/39480040/" rel="noopener nofollow" target="_blank">Waibel 2024</a>), and "more components of the extracellular matrix with less inflammatory response" (<a href="https://pubmed.ncbi.nlm.nih.gov/39761144/" rel="noopener nofollow" target="_blank">Waibel 2025</a>) — both studies Galderma-funded, and both 90-day biopsies rather than outcomes.</p>
      <p>The history: marketed in Europe as New-Fill from 1999, when "incorrect injection technique was largely responsible for" the papules of the early years (<a href="https://pubmed.ncbi.nlm.nih.gov/16643420/" rel="noopener nofollow" target="_blank">Vleggaar 2006</a>); approved by the FDA on 3 August 2004 for "restoration and/or correction of the signs of facial fat loss (lipoatrophy) in people with human immunodeficiency virus" (<a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?id=P030050" rel="noopener nofollow" target="_blank">FDA PMA P030050</a>); in 2009 "for cosmetic indications in immune-competent patients" (<a href="https://pubmed.ncbi.nlm.nih.gov/24719078/" rel="noopener nofollow" target="_blank">Vleggaar 2014b</a>); and in April 2023 for "correction of fine lines and wrinkles in the cheek area" on the strength of a randomised, no-treatment-controlled trial (<a href="https://www.galderma.com/news/galderma-receives-fda-approval-sculptrar-cheek-wrinkles-0" rel="noopener nofollow" target="_blank">Galderma 2023</a>). "Approved in over 40 countries" and in use "for more than 25 years" (<a href="https://pubmed.ncbi.nlm.nih.gov/37786340/" rel="noopener nofollow" target="_blank">Avelar 2023</a>). What it is not: a hyaluronic-acid filler that sits where it is put and dissolves on demand (the <a href="/fillers">filler guide</a>), or a "skin booster" (the <a href="/skin-boosters">skin-booster guide</a>). The <a href="/regenerative-aesthetics">biostimulator guide</a> compares it with calcium hydroxylapatite, polycaprolactone and the rest of the class.</p>
    `,
  },
  {
    id: 'what-the-trials-show',
    category: 'concept',
    title: 'What the trials look like — eleven randomised trials, most of them the manufacturer\'s',
    tldr: 'The evidence is unusually good for an aesthetic injectable and unusually concentrated: the nasolabial fold against human collagen (233 people, 25 months), the cheek against no treatment (a year), the temple against no treatment (174 people), three Chinese trials against hyaluronic acid (208 to 331 people, up to 120 weeks), one saline-controlled skin-quality trial (40 women) and the HIV lipoatrophy trials that created the product. The 2024 systematic review found eleven randomised trials, effects "sustained for at least 25 months", five trials at high risk of bias, and rated the evidence "of low quality". The body evidence is split-body trials of 15 to 31 people and open series.',
    bodyHtml: `
      <p>The systematic review: "Eleven RCTs out of 1467 identified citations were included. Four studies showed increased dermal thickness, significant improvement in facial lipoatrophy severity and aesthetic clinical scores, after PLLA treatment with its effects sustained for at least 25 months. Two studies demonstrated the superiority of PLLA over injectable human collagen … Five out of eleven studies were considered having high risk of bias. The evidence on the effectiveness and safety of PLLA for facial rejuvenation is of low quality" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11435306/" rel="noopener nofollow" target="_blank">Signori 2024</a>). A second review of PLLA and calcium hydroxylapatite on the face found 14 studies, "PLLA maintained its effects for up to 25 months, while CaHA offered results lasting 12 to 18 months" (<a href="https://pubmed.ncbi.nlm.nih.gov/41184662/" rel="noopener nofollow" target="_blank">Ferreira 2026</a>). The individual trials are in the rows below: the fold (<a href="https://pubmed.ncbi.nlm.nih.gov/20159311/" rel="noopener nofollow" target="_blank">Narins 2010</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12903950/" rel="noopener nofollow" target="_blank">Wang 2026</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/42594306/" rel="noopener nofollow" target="_blank">Liu 2026</a>), the cheek (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>), the midface (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12273185/" rel="noopener nofollow" target="_blank">Zhang 2025</a>), the temple (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13182905/" rel="noopener nofollow" target="_blank">Chang 2026</a>), skin quality (<a href="https://pubmed.ncbi.nlm.nih.gov/30741790/" rel="noopener nofollow" target="_blank">Bohnert 2019</a>) and the body (<a href="https://pubmed.ncbi.nlm.nih.gov/39503574/" rel="noopener nofollow" target="_blank">Zubair 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32852426/" rel="noopener nofollow" target="_blank">Kollipara 2020</a>). The manufacturer's own body consensus says "the current evidence base consists largely of prospective observational analyses and case series" and assigns itself Level IV (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11965205/" rel="noopener nofollow" target="_blank">Haddad 2025</a>).</p>
      <p>How to read the rows: a tier of strong on this page means randomised, evaluator-blinded trials against a comparator with follow-up of a year or more — the folds, the cheeks and the HIV face have them. Moderate means one such trial or consistent controlled data (the temple, skin quality, the lower face). Emerging means split-body trials of a few dozen people or open series (the body, scars, hands). Limited means no controlled evidence and a reason not to (the neck, the lips, the tear trough, "collagen banking"). Every strong and moderate trial was run or funded by the company selling the vial; that does not make them wrong, and it is why the systematic reviews are quoted next to them.</p>
    `,
  },
  {
    id: 'can-and-cant',
    category: 'concept',
    title: 'What Sculptra can and cannot do, on current evidence',
    tldr: 'Can: restore diffuse volume to deflated cheeks, temples and the pre-jowl area over three to six months and hold it for about two years; thicken and firm the dermis so that skin looks brighter and tighter; rebuild an HIV-wasted face; and, on small trials, soften cellulite, knee and hip-dell hollows and stretch marks. Cannot: give you a result on the day; fill one line or one hollow precisely; lift a jowl or a neck; be dissolved; go safely into the lips, the lower eyelid or the thin front of the neck; or bank collagen against a future that no trial has followed.',
    bodyHtml: `
      <p>The can: cheek responders 71.6% against 26.1% at twelve months with investigators reporting "improvements in skin radiance (&gt;95%), tighter appearance (&gt;88%), and jawline contour (&gt;85%)" (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>); a midface volume shift of "+4.88 mL/+1.62 mm (left), +2.84 mL/+1.12 mm (right)" against "+0.26 mL/+0.34 mm" and "+0.68 mL/+0.37 mm" untreated on 3D photography (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11593986/" rel="noopener nofollow" target="_blank">Fabi 2024b</a>); temples 96.5% improved against 0% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13182905/" rel="noopener nofollow" target="_blank">Chang 2026</a>); "a statistically significant increase of skin elasticity and hydration" against saline at a year (<a href="https://pubmed.ncbi.nlm.nih.gov/30741790/" rel="noopener nofollow" target="_blank">Bohnert 2019</a>); a wasted HIV face gaining 7.2 mm of cutaneous thickness at 48 weeks from a baseline fat thickness of zero (<a href="https://pubmed.ncbi.nlm.nih.gov/14600518/" rel="noopener nofollow" target="_blank">Valantin 2003</a>). The cannot: at four weeks hyaluronic acid was ahead in every head-to-head (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12903950/" rel="noopener nofollow" target="_blank">Wang 2026</a>); the objective CT volume of the HIV face did not change even as the injected planes thickened (<a href="https://pubmed.ncbi.nlm.nih.gov/18193500/" rel="noopener nofollow" target="_blank">Carey 2007</a>); the nodules of the early years were "9 perioral; 3 periorbital or temple" of the twelve visible ones (<a href="https://pubmed.ncbi.nlm.nih.gov/19207324/" rel="noopener nofollow" target="_blank">Lowe 2009</a>); and there is no eraser — of 55 biostimulator complications treated with saline, hyaluronidase, steroids and devices, "only five cases showed complete resolution" (<a href="https://pubmed.ncbi.nlm.nih.gov/38693639/" rel="noopener nofollow" target="_blank">Ianhez 2024</a>).</p>
      <p>Where it fits: the person the <a href="/facial-volume-loss">volume-loss guide</a> describes as deflated rather than sagging, who wants the whole midface and lower face quietly rebuilt rather than one hollow filled, and who can wait three months and live with the result for two years. Where it does not: a first-time injectable patient learning what they want (start with hyaluronic acid, which can be undone), a single tear trough or lip (never), a heavy jowl or loose neck (the <a href="/skin-tightening">tightening guide</a> and surgery), or a face that will change shape with planned weight loss before the collagen has formed.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'sculptra-vs-ha-vs-caha',
    category: 'context',
    title: 'Sculptra or hyaluronic acid or Radiesse — the same question at three time points',
    tldr: 'At four weeks hyaluronic acid wins every comparison; at nine to twelve months PLLA is ahead (92.4% vs 59.3%, 90.6% vs 51.0%); at 120 weeks it is still ahead (55.6% vs 25.0%), with more early sessions and no reversal. Calcium hydroxylapatite sits between: instant volume plus a stimulating effect lasting 12–18 months, one more inflammatory on the gene data, with a randomised hand trial and a three-year fold follow-up without nodules. Polycaprolactone kept 88.8% of folds improved at a year against 23.8%. A network meta-analysis of 13 fold trials still calls hyaluronic acid "a safe filler" and PLLA a product that "showed potential".',
    bodyHtml: `
      <p>The time-course, in the manufacturers' own words: "HA outperformed PLLA at Week 4, reflecting its immediate effect, whereas PLLA showed superior outcomes from Week 36 onward … PLLA required more frequent early treatments, whereas HA generally achieved correction with fewer sessions" — 92.4% against 59.3% corrected at 48 weeks in 252 people (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12903950/" rel="noopener nofollow" target="_blank">Wang 2026</a>); "similar short-term efficacy through 12 weeks, whereas PLLA provided superior long-term performance through 120 weeks" — 55.56% against 25.00%, in the 135 of 208 who stayed in the extension (<a href="https://pubmed.ncbi.nlm.nih.gov/42594306/" rel="noopener nofollow" target="_blank">Liu 2026</a>); midface volume responders 90.57% against 51.01% in 331 people (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12273185/" rel="noopener nofollow" target="_blank">Zhang 2025</a>); and the poly-D,L-lactic acid cousin "noninferior" to hyaluronic acid at 24 weeks, 67.6% against 60.9% (<a href="https://pubmed.ncbi.nlm.nih.gov/39178357/" rel="noopener nofollow" target="_blank">Ting 2024</a>). The network meta-analysis of 13 randomised fold trials found wrinkle scores at six months worse with hyaluronic acid than with PLLA (mean difference 0.630) and concluded, cautiously, that "HA is a safe filler for correcting nasolabial folds, and poly (L-lactic acid) showed potential" (<a href="https://pubmed.ncbi.nlm.nih.gov/38600338/" rel="noopener nofollow" target="_blank">Li 2024</a>).</p>
      <p>Against the other stimulators: calcium hydroxylapatite's fold follow-up found 40% of folds still improved 30 months after treatment and no nodules in 102 people over three years (<a href="https://pubmed.ncbi.nlm.nih.gov/20442101/" rel="noopener nofollow" target="_blank">Bass 2010</a>) and a 2025 double-blind trial non-inferior to a hyaluronic filler at 24 weeks in 188 people (<a href="https://pubmed.ncbi.nlm.nih.gov/39331081/" rel="noopener nofollow" target="_blank">Pan 2025</a>); on the 90-day biopsies, PLLA "stimulated more components of the extracellular matrix with less inflammatory response" while CaHA "elicited a more inflammatory response" (<a href="https://pubmed.ncbi.nlm.nih.gov/39761144/" rel="noopener nofollow" target="_blank">Waibel 2025</a>) — Galderma-funded, and a biopsy rather than a face. Polycaprolactone kept 88.8% of folds improved at twelve months against 23.8% for the hyaluronic control (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10171959/" rel="noopener nofollow" target="_blank">Zhao 2023</a>). The practical rule the <a href="/facial-volume-loss">volume-loss guide</a> already gives: hyaluronic acid first when you want a shape on the day, one hollow filled, or the option to dissolve; PLLA when the whole face has deflated and you want a gradual, two-year, natural result you will not need to undo. The <a href="/regenerative-aesthetics">biostimulator guide</a> grades the whole class side by side.</p>
    `,
  },
  {
    id: 'the-visit',
    category: 'context',
    title: 'What a course actually involves: dilution, sessions, massage, timeline and price',
    tldr: 'A vial (150 mg) is reconstituted in 8–9 mL of sterile water plus 1 mL of lidocaine — since 2021 immediately before use, where the old label wanted 24–72 hours of hydration — and placed with a cannula or needle under the skin, never in the dermis, one or two vials per session on the face, three sessions four to six weeks apart; then five minutes of massage five times a day for five days. Results start at six to twelve weeks, are judged at six months and last about two years. A vial costs €500–900 in Europe, so a facial course runs €1,500–5,000; body areas need several vials a session.',
    bodyHtml: `
      <p>Reconstitution is the variable that changed the safety record. The early European problems were "overaggressive use, low-volume reconstitution, higher volume injection of product at one session, and inadequate time between injection sessions", and the conservative answer was "higher volume dilution (8 to 12 cc), fewer vials used at each session, injections placed in the subcutaneous plane without any product being placed in the dermis, adequate time between injection sessions (at least 6 weeks), and postinjection patient massage" (<a href="https://pubmed.ncbi.nlm.nih.gov/16936545/" rel="noopener nofollow" target="_blank">Lam 2006</a>). Practice followed: in a survey of 410 US injectors, 60.4% used 9–10 mL for the face and 51.3% more than 21 mL for the buttocks, 94.7% added lidocaine, 99.6% prescribed self-massage (<a href="https://pubmed.ncbi.nlm.nih.gov/31524343/" rel="noopener nofollow" target="_blank">Lin 2019</a>). The label followed the practice: the SCRIPT trial randomised 80 people to 8 mL of water plus 1 mL of 2% lidocaine injected immediately after reconstitution, or the older 5 mL, and found responder rates of at least 75% at week 24 and 67% at week 48 in both, with "safety … not compromised" (<a href="https://pubmed.ncbi.nlm.nih.gov/34232000/" rel="noopener nofollow" target="_blank">Palm 2021</a>); "in 2021, the manufacturer authorized the reconstitution of PLLA-SCA immediately before use", and a two-centre review of 274 sessions in 167 patients that year — 87.3% by blunt cannula on the face — recorded one nodule, at 30 days, which "resolved after two saline injections" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626369/" rel="noopener nofollow" target="_blank">Vasconcelos-Berg 2024</a>). The cheek-wrinkle trial used exactly that protocol, with up to three further monthly sessions (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>); a case series softening the eyelid–cheek junction used 2–2.5 mL per site "diluted to 8 to 9 mL of sterile water … and 1 cc lidocaine 2%", three sessions six weeks apart (<a href="https://pubmed.ncbi.nlm.nih.gov/40627579/" rel="noopener nofollow" target="_blank">Montes 2025</a>). Depth, within reason, seems not to matter: a randomised split-face comparison found dermal thickness rose equally whether the product went subcutaneous or on the bone (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13145310/" rel="noopener nofollow" target="_blank">Munoz-Lora 2026</a>). Needle blockage by particles is common enough that a warm-water bath before injection has its own paper (<a href="https://pubmed.ncbi.nlm.nih.gov/41587431/" rel="noopener nofollow" target="_blank">Herron 2025</a>).</p>
      <p>The timeline and the money, September 2026: the investigator-rated improvement in the pivotal trial was 100% three weeks after the last session (swelling and water) and above 85% through month 25 (collagen) (<a href="https://pubmed.ncbi.nlm.nih.gov/21719865/" rel="noopener nofollow" target="_blank">Brandt 2011</a>), so judge the course at six months, not at the second session. Indicative European prices: €500–900 per vial of Sculptra; a facial course of two or three sessions with one or two vials each, €1,500–5,000; a temple or hand session, usually one vial; body areas two to four vials a session and buttocks far more — the one 60-patient series found volume "when at least 20 vials are used" (<a href="https://pubmed.ncbi.nlm.nih.gov/32976171/" rel="noopener nofollow" target="_blank">Durairaj 2020</a>). Maintenance is a vial or two every one to two years: in the HIV retreatment study, time to first retreatment ran from 21.4 months for mild wasting to 13.0 months for severe (<a href="https://pubmed.ncbi.nlm.nih.gov/19207325/" rel="noopener nofollow" target="_blank">Mest 2009</a>).</p>
    `,
  },
  {
    id: 'brands-and-law',
    category: 'context',
    title: 'The brands and the rules: Sculptra, Lanluma, the Korean and Chinese products, and what "approved" covers',
    tldr: 'Sculptra (Galderma) is the product in almost every trial; its approvals are facial, so buttocks, arms and knees are off-label everywhere. Lanluma (Sinclair) is a CE-marked PLLA launched in Europe in 2021 with body indications on its label and a nine-month open-label study behind it. Gana V (Korea) was non-inferior to Sculptra split-face over 24 months; AestheFill and Juvelook are poly-D,L-lactic acid, a different isomer, with one 260-person trial against hyaluronic acid between them; Elleva (Brazil), LASYNPRO (Spain) and unnamed Chinese microsphere products round out the shelf. In the EU all are class III devices; the trial is the product\'s, not the material\'s.',
    bodyHtml: `
      <p>The original: "Poly-L-lactic acid (PLLA)-SCA (Sculptra) has been approved for facial aesthetic uses since 1999 in Europe and since 2009 in the USA and more recently evaluated for the treatment of cellulite of the buttocks and thighs and other body indications" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11965205/" rel="noopener nofollow" target="_blank">Haddad 2025</a>) — the American label is HIV lipoatrophy (<a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?id=P030050" rel="noopener nofollow" target="_blank">FDA PMA P030050</a>), nasolabial folds and facial wrinkles, and since 2023 cheek wrinkles (<a href="https://www.galderma.com/news/galderma-receives-fda-approval-sculptrar-cheek-wrinkles-0" rel="noopener nofollow" target="_blank">Galderma 2023</a>). Lanluma: a CE-marked poly-L-lactic acid whose maker lists the face, décolletage and neck, abdomen, buttocks and hip dips, cellulite, upper arms, hands and thighs as treatment areas (<a href="https://lanluma.com/" rel="noopener nofollow" target="_blank">Lanluma product information</a>); its post-market study treated 70 people in the neck, upper arm, hand, thigh and décolleté, with lumps and nodules the most frequent adverse events, none serious, and the final analysis due at 25 months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626332/" rel="noopener nofollow" target="_blank">Amselem 2024</a>). Gana V: "non-inferior to Sculptra with respect to the NLF correction and safety profile" over 24 months in a 55-person double-blind split-face trial in France (<a href="https://pubmed.ncbi.nlm.nih.gov/40897963/" rel="noopener nofollow" target="_blank">Kim 2026</a>). AestheFill: poly-D,L-lactic acid, "noninferior efficacy in correcting nasolabial folds compared to hyaluronic acid" in 260 people (<a href="https://pubmed.ncbi.nlm.nih.gov/39178357/" rel="noopener nofollow" target="_blank">Ting 2024</a>); the two isomers differ in particle shape, viscosity and reconstitution time on the bench (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12787764/" rel="noopener nofollow" target="_blank">Su 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39496962/" rel="noopener nofollow" target="_blank">Lin 2025</a>). Elleva matched Sculptra on the upper arm in a 20-person split-arm trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13194430/" rel="noopener nofollow" target="_blank">Bravo 2026</a>) and accounted for 49.1% of the biostimulator complications in a Brazilian ultrasound series, against 20.0% for Sculptra (<a href="https://pubmed.ncbi.nlm.nih.gov/38693639/" rel="noopener nofollow" target="_blank">Ianhez 2024</a>). The large Chinese trials against hyaluronic acid used PLLA products of their own (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12903950/" rel="noopener nofollow" target="_blank">Wang 2026</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12273185/" rel="noopener nofollow" target="_blank">Zhang 2025</a>).</p>
      <p>What "approved" means for you: in the European Union these are class III medical devices with a CE mark for the indications on their own instructions for use; Sculptra's are facial, so a clinic injecting it into buttocks, knees or arms is using it off-label under the doctor's responsibility, whereas Lanluma's label includes the body. The evidence belongs to the product that ran the trial — Sculptra's 25-month fold data do not transfer to a cheaper vial of the same polymer, and the Brazilian complication series is a reminder that formulation matters. Ask which brand, which lot, and which indication is on its label; the answer should be written on your record, because a lump two years later will be treated by a doctor who needs to know what was injected. Regulatory status as of September 2026.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-cheeks-midface',
    category: 'use',
    title: 'Deflated cheeks and midface — the indication with the randomised trials',
    tldr: 'The cheek-wrinkle trial randomised against no treatment: 71.6% of PLLA-treated faces a grade better at twelve months against 26.1%, with a measurable midface lift on 3D photography and investigators reporting brighter, tighter skin and a better jawline in most; against hyaluronic acid in 331 people, midface volume responders were 90.6% versus 51.0%. The FDA approved the cheek indication on that trial in 2023. Slow, diffuse, two years — and not reversible.',
    evidence: 'strong',
    focus: 'face',
    note: 'Best for: the face that has lost fat across the whole cheek and temple and wants a gradual, natural rebuild rather than one shelf filled',
    sessions: '2–3 sessions, 4–6 weeks apart, 1–2 vials each; judge at 6 months',
    downtime: '2–5 days of swelling and bruising; massage five times a day for five days',
    cost: '€500–900 per vial; €1,500–5,000 a course',
    bodyHtml: `
      <p>The pivotal cheek trial: adults with moderate or severe cheek wrinkles at rest "were randomized 2:1 to receive PLLA-SCA injections (150 mg; 8 mL reconstitution in sterile water for injection) + 1 mL lidocaine hydrochloride (2%) … or no treatment"; responders were "significantly higher with PLLA-SCA treatment versus the no-treatment control at months 7 (66.2% versus 38.6%), 9 (70.6% versus 31.1%), and 12 (71.6% versus 26.1%)", and "treating investigators reported improvements in skin radiance (&gt;95%), tighter appearance (&gt;88%), and jawline contour (&gt;85%)" (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>). The 3D subgroup put numbers on the lift: in the severe cases, midface volume and projection changed by "+4.88 mL/+1.62 mm (left), +2.84 mL/+1.12 mm (right) versus +0.26 mL/+0.34 mm (left), +0.68 mL/+0.37 mm (right) for control" at month 9 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11593986/" rel="noopener nofollow" target="_blank">Fabi 2024b</a>). Against hyaluronic acid rather than nothing, a Chinese multicentre trial of 331 people found midface volume-scale responders of "90.57% vs. 51.01%", 84.91% against 46.98% at twelve months, with "a slightly higher incidence of injection site reactions in the PLLA group, which resolved within 1-3 days" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12273185/" rel="noopener nofollow" target="_blank">Zhang 2025</a>). Galderma's press release adds that 94% still showed improvement at two years (<a href="https://www.galderma.com/news/galderma-receives-fda-approval-sculptrar-cheek-wrinkles-0" rel="noopener nofollow" target="_blank">Galderma 2023</a>).</p>
      <p>Graded strong: two randomised, evaluator-blinded trials of a hundred to three hundred people with a year of follow-up, on the indication the regulator approved — the same grade the <a href="/facial-volume-loss">volume-loss guide</a> and the <a href="/regenerative-aesthetics">biostimulator guide</a> give it. The caveats are that the no-treatment control cannot blind the patient, that the trials are the manufacturer's, and that "improvement" on a cheek-wrinkle scale is not the same as the lift a hyaluronic cheekbone gives on the day. The <a href="/fillers">filler guide</a> covers that alternative.</p>
    `,
  },
  {
    id: 'use-nasolabial-folds',
    category: 'use',
    title: 'Nasolabial folds — beaten collagen, then hyaluronic acid, at a year and beyond',
    tldr: 'The original trial gave 116 people PLLA and 117 human collagen: PLLA was better from month 3 to 13, investigator-rated improvement stayed above 85% through month 25 while collagen fell to 6%, and 81% of patients still rated themselves improved at 25 months. Against hyaluronic acid, PLLA lost at four weeks and won from nine months: 92.4% versus 59.3% corrected at 48 weeks in 252 people, 55.6% versus 25.0% at 120 weeks in another trial. A second PLLA brand was non-inferior split-face; a network meta-analysis puts PLLA ahead of hyaluronic acid on wrinkle score at six months.',
    evidence: 'strong',
    focus: 'folds',
    note: 'Best for: the fold that is part of a deflating midface and a patient who can wait; a single deep fold in an otherwise full face is hyaluronic acid\'s job',
    sessions: '1–4 sessions, 3–6 weeks apart; the trials used up to four',
    downtime: '2–5 days of swelling; massage',
    cost: '€500–900 per vial, usually 1 vial per session',
    bodyHtml: `
      <p>The trial that created the cosmetic indication: "In this randomized, evaluator-blinded, parallel-group, multicenter study, subjects received injectable PLLA (n = 116) or collagen (n = 117) injections (1-4 visits, 3-week intervals) … Improvements (up to 25 months after last treatment) were significantly greater (P &lt; .001) than with collagen for posttreatment months 3 to 13", in "mostly white women and subjects with Fitzpatrick skin types II and III" (<a href="https://pubmed.ncbi.nlm.nih.gov/20159311/" rel="noopener nofollow" target="_blank">Narins 2010</a>). The investigator ratings: "Overall improvement with injectable PLLA was 100% three weeks after the final treatment, remaining above 85% through month 25. Overall IGE of improvement with human collagen declined from 94.0% at week three to 6.0% at month 13" (<a href="https://pubmed.ncbi.nlm.nih.gov/21719865/" rel="noopener nofollow" target="_blank">Brandt 2011</a>); the patients' own: 99% at week 3, 91% at month 13, 81% at month 25 (<a href="https://pubmed.ncbi.nlm.nih.gov/21460676/" rel="noopener nofollow" target="_blank">Brown 2011</a>). Against the modern comparator: in a 252-person double-blind trial "at 48 weeks, PLLA demonstrated a significantly higher effective correction ratio than HA (92.4% vs 59.3%)" although "HA outperformed PLLA at Week 4" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12903950/" rel="noopener nofollow" target="_blank">Wang 2026</a>); in a second, 55.56% against 25.00% still corrected at 120 weeks, with the authors' warning that "long-term extension data should be interpreted in light of attrition" (<a href="https://pubmed.ncbi.nlm.nih.gov/42594306/" rel="noopener nofollow" target="_blank">Liu 2026</a>). Gana V was non-inferior to Sculptra split-face at 6 and 24 months (<a href="https://pubmed.ncbi.nlm.nih.gov/37626137/" rel="noopener nofollow" target="_blank">Han 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/40897963/" rel="noopener nofollow" target="_blank">Kim 2026</a>), and the network meta-analysis of 13 fold trials found six-month wrinkle scores worse with hyaluronic acid than with PLLA (<a href="https://pubmed.ncbi.nlm.nih.gov/38600338/" rel="noopener nofollow" target="_blank">Li 2024</a>).</p>
      <p>Graded strong on three randomised comparisons and 25 months of follow-up — a grade above the <a href="/nasolabial-folds">nasolabial-fold guide</a>, which grades PLLA moderate for the fold as a line because hyaluronic acid fixes it faster and more precisely and the 25-month figure came from an uncontrolled extension; with the two hyaluronic-acid head-to-heads now published, this page grades the indication itself. The fold guide's practical point stands: PLLA treats the deflation behind the fold, and the deep-dermal grid the label describes is not a line-filling technique.</p>
    `,
  },
  {
    id: 'use-hiv-lipoatrophy',
    category: 'use',
    title: 'HIV facial lipoatrophy — the medical indication that made the product',
    tldr: 'The first study gave 50 men with a median facial fat thickness of zero four sessions two weeks apart: cutaneous thickness rose 7.2 mm by week 48 and 6.8 mm at week 96, with palpable but non-visible micronodules in 44%. Randomised immediate-versus-deferred trials of 30, 101 and 134 people found better appearance scores, anxiety and depression scores and injection-plane thickness, although CT could not show a change in total facial volume. A five-year study of 290 people recorded nodules in 8.3% and papules in 8.6% at two years. The systematic review gives PLLA the only grade B among fillers for this use.',
    evidence: 'strong',
    focus: 'medical',
    note: 'Best for: the antiretroviral-era wasted face; the trials are the origin of every technique rule that followed',
    sessions: '3–4 sessions, 2–5 weeks apart; retreatment at 13–21 months',
    downtime: '2–4 days per session',
    cost: '€500–900 per vial; several vials a course; sometimes reimbursed',
    bodyHtml: `
      <p>The VEGA study: "At entry, the median facial fat thickness was equal to zero … The median total cutaneous thickness (TCT) increased significantly from baseline: +5.1 mm … at week 6, +6.4 mm … at week 24, +7.2 mm … at week 48, +7.2 mm … at week 72 and +6.8 mm … at week 96 … In 22 (44%) patients, palpable but non-visible subcutaneous micronodules were observed with a spontaneous resolution in six patients at week 96" (<a href="https://pubmed.ncbi.nlm.nih.gov/14600518/" rel="noopener nofollow" target="_blank">Valantin 2003</a>). The randomised trials: 30 people, with visual-analogue scores of 7 against 1 at week 12 and lower anxiety scores in the immediate group (<a href="https://pubmed.ncbi.nlm.nih.gov/15012646/" rel="noopener nofollow" target="_blank">Moyle 2004</a>), and nine injection-site nodules among the 27 seen 18 months on (<a href="https://pubmed.ncbi.nlm.nih.gov/16494632/" rel="noopener nofollow" target="_blank">Moyle 2006</a>); 101 people with CT endpoints, in whom "PLA did not increase FSTV, although tissue thickness in injection planes increased modestly" — 2.2 mm at the maxilla — "an improvement observed by patients" (<a href="https://pubmed.ncbi.nlm.nih.gov/18193500/" rel="noopener nofollow" target="_blank">Carey 2007</a>), durable at 48 weeks with a nodule incidence of 10% (<a href="https://pubmed.ncbi.nlm.nih.gov/19245538/" rel="noopener nofollow" target="_blank">Carey 2009</a>); and 134 people whose severity scores improved without a measurable gain in quality of life (<a href="https://pubmed.ncbi.nlm.nih.gov/19795984/" rel="noopener nofollow" target="_blank">Narciso 2009</a>). The long series: 61 men, "all … had a successful outcome" at six months with two infraorbital papules (<a href="https://pubmed.ncbi.nlm.nih.gov/15692467/" rel="noopener nofollow" target="_blank">Burgess 2005</a>); 65 people followed three years (<a href="https://pubmed.ncbi.nlm.nih.gov/19022099/" rel="noopener nofollow" target="_blank">Levy 2008</a>); 290 people in the five-year FACES study, with "injection-site nodules (n = 24, 8.3%) and papules (n = 25, 8.6%)" at two years, "regardless of Fitzpatrick skin type" (<a href="https://pubmed.ncbi.nlm.nih.gov/22759256/" rel="noopener nofollow" target="_blank">Bassichis 2012</a>); retreatment needed at 21.4 months for mild and 13.0 months for severe wasting (<a href="https://pubmed.ncbi.nlm.nih.gov/19207325/" rel="noopener nofollow" target="_blank">Mest 2009</a>).</p>
      <p>Graded strong on the randomised trials and the 25-year record, with the systematic review's verdict that "poly-L-lactic acid is the only filler agent with grade of recommendation: B" for this indication, "best for treatment over temples and cheeks" (<a href="https://pubmed.ncbi.nlm.nih.gov/26481056/" rel="noopener nofollow" target="_blank">Jagdeo 2015</a>). Why it matters to a cosmetic patient: the HIV face is the extreme case of the deflation Sculptra treats, and these trials are where the nodule rates, the dilution rules and the two-year duration come from.</p>
    `,
  },
  {
    id: 'use-temples',
    category: 'use',
    title: 'Hollow temples — one randomised trial, and it was large',
    tldr: 'In 174 people with moderate-to-severe temple hollowing, two or three sessions of a PLLA filler improved 96.5% by at least a grade at six months against 0% of untreated controls, with 3D volume gains holding to twelve months and no treatment-related adverse events. Before it, the temple literature had two PLLA patients in 881; the temple also carries the one reported PLLA blindness. Moderate here on a single trial, although the biostimulator guide bundles it with the folds and cheeks as strong.',
    evidence: 'moderate',
    focus: 'face',
    note: 'Best for: the temple that has hollowed alongside the cheek; a cannula on the bone or under the fascia, never a needle into the vessels of the temple',
    sessions: '2–3 sessions, 4–6 weeks apart, usually 1 vial',
    downtime: '2–5 days; chewing discomfort possible with deep placement',
    cost: '€500–900 per session',
    bodyHtml: `
      <p>The trial: "This randomized, no-treatment control, evaluator-blinded, multicenter clinical trial enrolled 174 participants with moderate to severe temple hollowing, randomized 2:1 … At Month 6, 96.5% of participants in the treatment group achieved an at least 1-grade improvement on the ATHS, in contrast to 0% in the control group … PLLA was safe and well tolerated, with no therapy-related adverse events reported" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13182905/" rel="noopener nofollow" target="_blank">Chang 2026</a>). An open-label study with ultrasound found a significant increase in temporal volume and elasticity at eight weeks and confirmed "the injection plane was free of vasculature" (<a href="https://pubmed.ncbi.nlm.nih.gov/41493260/" rel="noopener nofollow" target="_blank">Arruda 2026</a>). How thin the evidence was before: a systematic review of temple volumisation found 40 articles and 881 patients, "poly-L-lactic acid (n = 2)", with pain in 29.6%, bruising in 17.3% and "deeper (supraperiosteal or inter/intra-fascial) injection may be more commonly associated with masticatory pain" (<a href="https://pubmed.ncbi.nlm.nih.gov/40325223/" rel="noopener nofollow" target="_blank">Friedmann 2025</a>). The anatomy is the reason for the caution: the superficial temporal artery, the sentinel vein and the temporal branch of the facial nerve run through it, and the safe planes are the subfascial and periosteal ones reached with a cannula (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11856534/" rel="noopener nofollow" target="_blank">Hong 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38480594/" rel="noopener nofollow" target="_blank">Kim 2024</a>); the one published PLLA retinal-artery occlusion followed "PLLA injection in the temporal region" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8493991/" rel="noopener nofollow" target="_blank">Wu 2021</a>).</p>
      <p>Graded moderate: one evaluator-blinded trial against no treatment, run by a manufacturer, with twelve months of follow-up. The <a href="/regenerative-aesthetics">biostimulator guide</a> folds the temple into a strong row with the folds and cheeks; on its own trial the temple earns a grade less, and the <a href="/facial-volume-loss">volume-loss guide</a> still sends first-timers to a hyaluronic gel that can be dissolved if the temple is overfilled.</p>
    `,
  },
  {
    id: 'use-skin-quality',
    category: 'use',
    title: 'Skin quality and fine cheek lines — thicker, firmer, brighter skin on a saline-controlled trial',
    tldr: 'The double-blind trial gave 40 women three sessions of PLLA or saline into both sides of the face: at twelve months elasticity and hydration were up on the PLLA side, pigmentation, redness and pore size were down and radiance and smoothness up on blinded photographs, with no treatment-related adverse events. The cheek trial\'s secondary endpoints, a 36-person elastography study with a rising collagen-synthesis marker, and dermal thickening on ultrasound in several series say the same. Real, measurable and gradual — the "glow" is a thicker dermis, not a filled line.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: crepey, thin, dull cheek skin with early lines, especially alongside a volume treatment; not a substitute for a retinoid or a laser',
    sessions: '3 sessions, 4 weeks apart, 1 vial each; judge at 6–12 months',
    downtime: '2–5 days',
    cost: '€500–900 per session',
    bodyHtml: `
      <p>The trial: "Forty healthy women were enrolled in this randomized, controlled, double-blind, multicenter study. Eligible subjects received 3 treatments every 4 weeks with either PLLA (treatment group) or saline (control group) injections, into both sides of the face … At the 12-month follow-up, there was a statistically significant increase of skin elasticity and hydration in PLLA-treated subjects … Pigmentation, erythema, and pore size were significantly decreased, whereas radiance and smoothness were significantly increased at 12 months per blinded investigator rating in this group. No treatment-related adverse events occurred" (<a href="https://pubmed.ncbi.nlm.nih.gov/30741790/" rel="noopener nofollow" target="_blank">Bohnert 2019</a>). The cheek trial's patients reported satisfaction with "skin radiance (90% or greater), sagging (84% or greater), and firmness (91% or greater)" (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>). A Spanish multicentre study of a newer PLLA measured the biology: "ultrasound and elastography imaging confirmed increased tissue density … and improved viscoelasticity", and the serum collagen-synthesis marker P1CP rose from 134.6 to a peak of 233.2 ng/mL at month 2 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12921352/" rel="noopener nofollow" target="_blank">Urdiales-Gálvez 2026</a>). On the arm, ultrasound skin thickness rose from 1.80 to 2.70 mm at 120 days with Sculptra (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13194430/" rel="noopener nofollow" target="_blank">Bravo 2026</a>), and a facial "L-Lift" series found 60% of midfaces a class better on a laxity scale at 24 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/33988551/" rel="noopener nofollow" target="_blank">Hexsel 2021</a>).</p>
      <p>Graded moderate: one well-designed but small placebo-controlled trial, consistent with biopsy and imaging data — the grade the <a href="/collagen-loss">collagen-loss guide</a> gives PLLA for firmness. The honest framing: a thicker, more elastic dermis over a year is what the trial measured; "skin quality" as a menu item is that, not a resurfacing. Etched lines, pigment and pores are better served by a <a href="/retinoids">retinoid</a>, a <a href="/skin-resurfacing">laser</a> or the <a href="/serums">actives</a> with their own trials.</p>
    `,
  },
  {
    id: 'use-lower-face-jawline',
    category: 'use',
    title: 'Lower face, pre-jowl and jawline definition — the cheek trials reaching downward',
    tldr: 'No trial has randomised the jawline on its own. What exists: investigators in the cheek trial reporting jawline contour improved in over 85% of treated faces; an open-label study of 41 people after GLP-1 weight loss with contour better in the cheek, jawline and perioral areas; a 12-woman cephalometric study in which lower-face contour length shortened by 5 mm at twelve weeks with hyaluronic acid on the ligaments plus PLLA; and the European experience since 2004 of treating "jaw line laxity". Consistent, secondary, unblinded — moderate, as the jowls guide grades it for diffuse deflation.',
    evidence: 'moderate',
    focus: 'face',
    note: 'Best for: the softened jawline of a deflating face; a true jowl is fat and ligament, which PLLA does not lift',
    sessions: '2–3 sessions, 4–6 weeks apart, 1–2 vials each',
    downtime: '2–5 days',
    cost: '€1,000–1,800 per session',
    bodyHtml: `
      <p>The data: in the cheek trial, "treating investigators reported improvements in … jawline contour (&gt;85%)" (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>); the GLP-1 regimen of two or three PLLA sessions plus one or two hyaluronic-acid sessions "significantly improved facial skin quality and enhanced contour in the cheek, jawline, and perioral areas" in 41 people, open-label (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13064655/" rel="noopener nofollow" target="_blank">Lorenc 2026</a>); in 12 Asian women given hyaluronic acid on the retaining ligaments with PLLA in the temple, midface and lower face, "tragus-oral-commissure length and lower-facial-contouring length decreased 281 ± 11 mm to 275 ± 10 mm … and 297 ± 14 to 292 ± 11 mm … at week 12" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9291938/" rel="noopener nofollow" target="_blank">Chuang 2022</a>); the early European series used it "for the correction of nasolabial folds, mid and lower facial volume loss, jaw line laxity" with 18–24 months of correction (<a href="https://pubmed.ncbi.nlm.nih.gov/15552606/" rel="noopener nofollow" target="_blank">Vleggaar 2004</a>); a 106-patient two-year pilot placed it in "the prejowl area, mandibular border, and mandibular angle" among other sites, with 4.7% nodules (<a href="https://pubmed.ncbi.nlm.nih.gov/21239677/" rel="noopener nofollow" target="_blank">Schierle 2011</a>); and the chin-and-prejowl reviews list PLLA among the biostimulators that "address volume loss, enhance contours" while noting "nonsurgical treatments cannot replace surgical interventions" (<a href="https://pubmed.ncbi.nlm.nih.gov/40389235/" rel="noopener nofollow" target="_blank">Melley 2025</a>).</p>
      <p>Graded moderate, matching the <a href="/jowls">jowls guide</a> and the <a href="/sagging-skin">sagging-skin guide</a>, which grade PLLA moderate for diffuse deflation; the <a href="/marionette-lines">marionette guide</a> grades it emerging for the line itself, which is fair — the evidence is for the deflated lower face, not for a crease. The lower face is also where the perioral nodules of the early years were, so the product stays deep and away from the mobile muscles around the mouth (<a href="https://pubmed.ncbi.nlm.nih.gov/16643420/" rel="noopener nofollow" target="_blank">Vleggaar 2006</a>).</p>
    `,
  },
  {
    id: 'use-glp1-face',
    category: 'use',
    title: 'The GLP-1 face — deflation after semaglutide or tirzepatide weight loss',
    tldr: 'Two open-label studies: 41 people with cheek wrinkles and contour loss after GLP-1 weight loss treated with two or three PLLA sessions plus hyaluronic acid, with skin quality, hydration and cheek, jawline and perioral contour improved at nine months and no treatment-related adverse events; and 15 Latin American women, 17.9% lighter, whose laxity scores fell from 4.5 to 2.6 and wrinkle scores from 3.1 to 1.9 at 90 days. Plausible — the loss is fat and the gene data say PLLA rebuilds some — but uncontrolled, and the face should be weight-stable before the collagen is laid down.',
    evidence: 'emerging',
    focus: 'face',
    note: 'Best for: the weight-stable face after medication-driven loss; hyaluronic acid for the immediate shelf, PLLA for the diffuse deflation',
    sessions: '2–3 PLLA sessions plus 1–2 hyaluronic-acid sessions, once weight is stable',
    downtime: '2–5 days per session',
    cost: '€3,000–7,000 for the combined course',
    bodyHtml: `
      <p>The studies: "This multicenter, open-label study enrolled 41 subjects with cheek wrinkles and midface contour deficiencies following GLP-1 RA-driven weight loss. Subjects received 2 to 3 treatment sessions of PLLA-SCA and 1 to 2 treatment sessions of HA-LYF or HA-CON … The … regimen significantly improved facial skin quality and enhanced contour in the cheek, jawline, and perioral areas, and demonstrated objective improvement in hydration and skin radiance … with no treatment-related adverse events reported" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13064655/" rel="noopener nofollow" target="_blank">Lorenc 2026</a>); and the case series: "Participants achieved 17.9% weight reduction from baseline. At D90, FLRS scores decreased from 4.5 (SD 2.2) to 2.6 (SD 1.8), and WSRS scores from 3.1 (SD 1.5) to 1.9 (SD 1.0)", with 87% satisfied (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13280651/" rel="noopener nofollow" target="_blank">Avelar 2026</a>). The rationale, from a Galderma-authored narrative review, is that PLLA "induces fibroblast recruitment and stimulates regeneration of collagen and elastin, and effects vasculature and adipose tissue" (<a href="https://pubmed.ncbi.nlm.nih.gov/42210881/" rel="noopener nofollow" target="_blank">Franco 2026</a>), resting on the adipocyte gene signature (<a href="https://pubmed.ncbi.nlm.nih.gov/39480040/" rel="noopener nofollow" target="_blank">Waibel 2024</a>).</p>
      <p>Graded emerging, as the <a href="/facial-volume-loss">volume-loss guide</a> grades the stimulator-plus-hyaluronic protocol after weight loss: no control arm, sponsor-run, nine months. The timing point matters more than the tier: a stimulator laid into a face that is still losing fat, or that will regain it when the drug stops, cannot be adjusted afterwards. The <a href="/body-contouring">body-contouring guide</a> covers the weight-stability clock and what regain looks like.</p>
    `,
  },
  {
    id: 'use-decolletage',
    category: 'use',
    title: 'Crepey chest and décolletage lines — open series, consistent, no control',
    tldr: 'Twenty-five women given one vial at each of three sessions: investigators rated 83% improved a month after the last treatment and 90% at six months, the women themselves 74% and 57%. A neck-and-chest series of 36 found photographic improvement in 81–100% holding at 18 months with one early nodule; the Lanluma post-market study reported no adverse events at all after décolleté treatment. The randomised chest trial in the field belongs to diluted calcium hydroxylapatite, not PLLA.',
    evidence: 'emerging',
    focus: 'body',
    note: 'Best for: the sun-thinned, crepey chest with cleavage lines; a laser or diluted CaHA has the controlled data',
    sessions: '2–3 sessions, 4–6 weeks apart, 1 vial each, diluted further than on the face',
    downtime: '3–7 days of swelling; massage',
    cost: '€500–900 per session',
    bodyHtml: `
      <p>The PLLA chest study: "25 healthy female volunteers aged 40-to-70 years with moderate-to-severe crepiness and wrinkling of the décolletage were injected with 1 vial of PLLA at each of three treatments … At 1 month following the last treatment, compared to baseline, investigators rated 83% of subjects had improved by at least one point on the scale. Subjects rated 74% of subjects improved … At 6 months, 90% of subjects, as rated by the investigators, and 57% of subjects, as rated by the subjects, had improvement" (<a href="https://pubmed.ncbi.nlm.nih.gov/29119683/" rel="noopener nofollow" target="_blank">Wilkerson 2018</a>). The earlier series: 36 people with neck and chest laxity, atrophy and wrinkles, "improvement was found in 81% to 100% of the 21 cases" evaluable on photographs, "after 18 months of follow-up, the results were maintained", one early nodule (<a href="https://pubmed.ncbi.nlm.nih.gov/19438668/" rel="noopener nofollow" target="_blank">Mazzuco 2009</a>). Lanluma's post-market study: "No AEs were reported following treatment of the décolleté" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626332/" rel="noopener nofollow" target="_blank">Amselem 2024</a>). The reviews of chest injectables describe PLLA alongside hyaluronic acid and the lasers without a controlled trial of their own (<a href="https://pubmed.ncbi.nlm.nih.gov/26441106/" rel="noopener nofollow" target="_blank">Vanaman 2015</a>); the randomised, evaluator-blinded chest trial in the class used diluted calcium hydroxylapatite, with 73.5% of women a grade better at 16 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/38954627/" rel="noopener nofollow" target="_blank">Pavicic 2024</a>).</p>
      <p>Graded emerging, as the <a href="/decolletage">décolletage guide</a> grades it: consistent open series, no control, and a gap between the investigators' 90% and the patients' 57%. The <a href="/regenerative-aesthetics">biostimulator guide</a> grades the neck-and-chest row moderate on the strength of the calcium hydroxylapatite trial; that trial does not transfer to PLLA. What to ask for on the chest: a higher dilution than the face, a fan under the dermis, and an injector who has treated the area before.</p>
    `,
  },
  {
    id: 'use-hands',
    category: 'use',
    title: 'Aging hands — retrospective series only, and the hand indication belongs to other fillers',
    tldr: 'A 27-patient Italian series (mean age 66, 3–6 sessions) scored an average 6.55 out of 10 with six unsatisfactory results and one fine nodule; three US practices reported satisfied patients and no papules; a case held correction for 18 months on three sessions. The hand approvals belong to hyaluronic acid and calcium hydroxylapatite, which have the randomised hand trials; the Lanluma post-market study lists lumps and nodules on the hand among its most frequent events. Emerging, as the hands guide grades it.',
    evidence: 'emerging',
    focus: 'body',
    note: 'Best for: the bony, tendon-showing hand of someone already having PLLA on the face; the two fillers with a hand indication have the trials',
    sessions: '2–3 sessions, 4–6 weeks apart, 1 vial for both hands',
    downtime: '3–7 days of swelling; keep the hands moving',
    cost: '€500–900 per session',
    bodyHtml: `
      <p>The series: 27 patients, "their age averaged 65.9 years", 109 sessions, 150 mg diluted in 5–8 mL, "intermetacarpal spaces were injected … in dosages ranging from 2 to 4 mL", three to six sessions, scores "from 4 to 9 (average of 6.55)", "one case of fine unnoticeable nodulations. In six cases the result has not been satisfactory" (<a href="https://pubmed.ncbi.nlm.nih.gov/17177745/" rel="noopener nofollow" target="_blank">Redaelli 2006</a>); three practices in which "PLLA was used to improve volume loss in the hand to the satisfaction of a majority of patients … No papules or nodules were reported" (<a href="https://pubmed.ncbi.nlm.nih.gov/19016062/" rel="noopener nofollow" target="_blank">Sadick 2008</a>); a single patient given up to 5 mL per hand in three sessions with "correction … maintained for at least 18 months" and the note that "injectable PLLA is not FDA-approved for use in the hands" (<a href="https://pubmed.ncbi.nlm.nih.gov/21142738/" rel="noopener nofollow" target="_blank">Rendon 2010</a>). The reviews list it among the hand volumisers with hyaluronic acid, calcium hydroxylapatite and fat (<a href="https://pubmed.ncbi.nlm.nih.gov/22268976/" rel="noopener nofollow" target="_blank">Fabi 2012</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/27128236/" rel="noopener nofollow" target="_blank">Butterwick 2016</a>), and the body review calls the data "still limited" area by area (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9233565/" rel="noopener nofollow" target="_blank">Christen 2022</a>). Lanluma's hand treatments produced "lumps (neck, upper arm, hand) and nodules (neck, hand, thigh)" as the most frequent events (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626332/" rel="noopener nofollow" target="_blank">Amselem 2024</a>).</p>
      <p>Graded emerging, as the <a href="/aging-hands">hands guide</a> grades PLLA and poly-D,L-lactic acid on the hand. The thin, mobile, tendon-and-vein back of the hand is unforgiving of a lump, and the two products with a regulatory hand indication and randomised hand trials are in that guide; PLLA on the hand is a reasonable add-on for a face patient, not a first choice.</p>
    `,
  },
  {
    id: 'use-buttocks-hip-dips',
    category: 'use',
    title: 'Buttock shaping and hip dells — a 15-person split-body trial and a 60-patient series that needed 20 vials',
    tldr: 'The SPLASH trial randomised one hip dell to 150 mg of PLLA and the other to saline in 15 women, three monthly sessions: blinded raters called the PLLA side improved or much improved, the dermis and fat layers were 26.1% and 27% thicker, collagen and elastic fibres better on biopsy, the saline side unchanged. For the buttock as a whole, a 60-patient retrospective series found visible volume "when at least 20 vials are used" — five-figure sums — and the reviews rate the field Level 4 with a danger triangle over the gluteal vessels and sciatic nerve. Lanluma carries the label; the trial is tiny.',
    evidence: 'emerging',
    focus: 'body',
    note: 'Best for: the hip dell and skin quality of the buttock, in a budget that has counted the vials; projection is fat transfer or an implant',
    sessions: '3 sessions, 4–6 weeks apart, 2–12 vials each depending on the goal',
    downtime: '3–7 days of soreness and swelling; sit carefully',
    cost: '€2,000–6,000 per session; a 20-vial course is €8,000–15,000',
    bodyHtml: `
      <p>The trial: "This was a double-blinded, split-body trial of 15 women with hip dell volume deficits. Each subject was randomized to have 1 hip dell treated with 150 mg of PLLA-SCA while the contralateral hip dell received the equivalent volume of saline. Subjects received 3 treatments at 1-month intervals and were followed for 9 months … The dermis and adipose layers increased in thickness by 26.1% and 27%. These measures, in addition to collagen and elastic fiber quality, were significantly improved compared with saline-treated hip dells, which did not change from baseline" (<a href="https://pubmed.ncbi.nlm.nih.gov/39503574/" rel="noopener nofollow" target="_blank">Zubair 2024</a>). The series: 60 women aged 23–54, "1 to 3 treatments, spaced 4 to 6 weeks apart, and received 2 to 12 vials per session (based on the patient budget) … Poly-L-lactic acid allows for visible volume amplification, improved skin texture, and softened cellulite dimpling in the buttocks when at least 20 vials are used" (<a href="https://pubmed.ncbi.nlm.nih.gov/32976171/" rel="noopener nofollow" target="_blank">Durairaj 2020</a>); a 20-patient body-contouring practice with a mean of 5.1 sessions, 58% of them buttocks, and one nodule (<a href="https://pubmed.ncbi.nlm.nih.gov/33830621/" rel="noopener nofollow" target="_blank">Shridharani 2021</a>). The reviews: "a paucity of literature on this emerging treatment modality (Level 4)", with the rules "avoid injecting deeply in the danger triangle to prevent intravascular injection into the gluteal vessels or injury to the sciatic nerve … blunt cannulas, reduced pressures, smaller volumes, and retrograde delivery" (<a href="https://pubmed.ncbi.nlm.nih.gov/31188150/" rel="noopener nofollow" target="_blank">Lin 2020</a>); expert consensus on dosing and selection (<a href="https://pubmed.ncbi.nlm.nih.gov/35005870/" rel="noopener nofollow" target="_blank">Harper 2022</a>); a targeted technique whose outcomes "have, to date, been subjective clinical observations" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10286883/" rel="noopener nofollow" target="_blank">Sarubi 2023</a>). Lanluma lists buttocks and hip dips on its label (<a href="https://lanluma.com/" rel="noopener nofollow" target="_blank">Lanluma product information</a>).</p>
      <p>Graded emerging: one 15-person randomised trial for the dell, retrospective series for the buttock, and a consensus that rates its own evidence Level IV (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11965205/" rel="noopener nofollow" target="_blank">Haddad 2025</a>). What PLLA does here is thicken skin and fat by a quarter and soften a dell; what it does not do is project a buttock without a vial count that competes with surgery. The <a href="/body-contouring">body-contouring guide</a> grades fat transfer and the rest.</p>
    `,
  },
  {
    id: 'use-cellulite',
    category: 'use',
    title: 'Cellulite of the buttocks and thighs — two small double-blind trials, one with subcision',
    tldr: 'Thirty-one women randomised to three sessions of subcision plus PLLA or subcision plus saline: blinded global-improvement and cellulite-severity scores favoured PLLA at three and six months. Twenty women randomised side-to-side to PLLA or water: buttock depressions shallower, laxity grade better, thigh depressions fewer and shallower at eleven months. A 29-woman open study reported 97% improved thighs at nine months. Small, single-centre, short — emerging, as the cellulite guide grades it — but the only injectable for cellulite with placebo-controlled data still on the market.',
    evidence: 'emerging',
    focus: 'body',
    note: 'Best for: the laxity component of cellulite, with subcision for the bands; the cellulite guide grades shockwave, subcision devices and the rest',
    sessions: '3 sessions, 4 weeks apart, 1–3 vials per side',
    downtime: '3–7 days; bruising with subcision',
    cost: '€1,000–2,500 per session',
    bodyHtml: `
      <p>The trials: "31 healthy women were enrolled … Eligible subjects received 3 treatments every 4 weeks with either PLLA (treatment group) or saline (control group) injections combined with subcision, into each of the glutes or thighs … At the 3 and 6-month follow-up, there was a statistically significant change in the global aesthetic improvement scale (GAIS) compared to baseline as assessed by blinded investigators. Significant improvements were shown in the cellulite severity scale" (<a href="https://pubmed.ncbi.nlm.nih.gov/33938690/" rel="noopener nofollow" target="_blank">Swearingen 2021</a>); "a prospective, single-center, double-blinded, split-body, clinical trial of 20 women … randomized to receive injections with up to 2 vials of PLLA-SCA or the equivalent volume of bacteriostatic water per treatment area … followed for 330 days … Treatment of the buttocks with PLLA-SCA resulted in significant reduction of depression depth, improvement in the morphological appearance of the skin, improvement in the grade of skin laxity … Treated thighs showed reduction in the depth and number of depressions" (<a href="https://pubmed.ncbi.nlm.nih.gov/36826378/" rel="noopener nofollow" target="_blank">Almukhtar 2023</a>). The open study: 29 women, up to three vials a thigh, "at month 9, 28/29 subjects (97%) had GAIS improvement on both thighs" with no treatment-related adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/42406356/" rel="noopener nofollow" target="_blank">Beleznay 2026</a>); and 24 women given subcision then PLLA in the same session, "no nodules or granulomas" (<a href="https://pubmed.ncbi.nlm.nih.gov/32176410/" rel="noopener nofollow" target="_blank">Mazzuco 2020</a>).</p>
      <p>Graded emerging, matching the <a href="/cellulite">cellulite guide</a>: the trials are double-blind, which is rare in cellulite, but they are 20 and 31 women at one centre for under a year, and the larger of the two tested PLLA as an add-on to subcision. What PLLA plausibly does is thicken the lax skin over the dimples; the bands themselves are the subcision's job. The cellulite guide grades shockwave, vacuum-guided subcision and the laser alongside.</p>
    `,
  },
  {
    id: 'use-knees-arms-abdomen',
    category: 'use',
    title: 'Knees, upper arms and abdomen — split-body trials of twenty, and a consensus that admits it',
    tldr: 'Twenty women had one knee treated three times with PLLA and the other with water: physicians rated the PLLA knee better at 56, 84 and 168 days, but the women themselves could not tell the knees apart. Twenty adults had one arm treated with Sculptra and the other with Elleva: skin 0.9 mm thicker on ultrasound and elasticity up on both, no placebo arm. Twenty-six women\'s inner arms thickened 23–70% on ultrasound after two sessions. The international consensus says the body evidence "consists largely of prospective observational analyses and case series".',
    evidence: 'emerging',
    focus: 'body',
    note: 'Best for: mild crepe of the inner arm or above the knee in someone who has ruled out the arm lift and the devices; a thicker dermis, not a lift',
    sessions: '2–3 sessions, 4–8 weeks apart, 1–2 vials per area',
    downtime: '3–7 days; massage',
    cost: '€600–1,500 per area per session',
    bodyHtml: `
      <p>The knee trial: "Twenty female subjects between the ages of 30 and 65 years with upper knee laxity were enrolled. The patients were randomized to receive 3 treatments of PLLA in 1 knee, whereas the other knee received 3 treatments of bacteriostatic water … Statistically significant improvement as rated on the physician global aesthetic improvement scale was seen at Day 56 after final treatment in the active knee … sustained at Day 84 and Day 168 … No statistically significant difference was seen between the active and placebo knees on the subject global aesthetic score or the subject satisfaction scale" (<a href="https://pubmed.ncbi.nlm.nih.gov/32852426/" rel="noopener nofollow" target="_blank">Kollipara 2020</a>). The arms: in the split-arm comparison of two PLLAs, "skin thickness rose significantly (Rennova Elleva: 2.06 ± 0.55 to 2.66 ± 0.53 mm; Sculptra: 1.80 ± 0.41 to 2.70 ± 0.69 mm)", elasticity up by day 90, "histology showed sparse perivascular lymphocytes and occasional macrophages, with no granulomas" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13194430/" rel="noopener nofollow" target="_blank">Bravo 2026</a>); in 26 women, "an increase in dermal thickness between 23% and 70% (average value: 46%)" after two sessions of Elleva (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9892430/" rel="noopener nofollow" target="_blank">da Cunha 2023</a>); abdominal stretch marks, in a 40-woman four-arm trial, shrank more with PLLA than with a 1,565 nm laser (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12261269/" rel="noopener nofollow" target="_blank">Qu 2025</a>). The guidance: recommendations for "the neck, décolletage, arms, abdomen, buttocks, and thighs" that end with "further investigation is needed" (<a href="https://pubmed.ncbi.nlm.nih.gov/31524350/" rel="noopener nofollow" target="_blank">Haddad 2019</a>), and a consensus that "current data support a potential benefit for the use of PLLA-SCA for the aesthetic treatment of the neck, knees, abdomen, hands and upper arms" while rating itself Level IV (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11965205/" rel="noopener nofollow" target="_blank">Haddad 2025</a>).</p>
      <p>Graded emerging, as the <a href="/upper-arms">upper-arms guide</a> grades PLLA on the arm: the placebo-controlled knee trial is positive for the physician and null for the patient, which is the honest size of the effect — a dermis a millimetre thicker under skin that still hangs. The <a href="/skin-tightening">tightening guide</a> and the arm lift are where a hanging arm goes.</p>
    `,
  },
  {
    id: 'use-acne-scars',
    category: 'use',
    title: 'Atrophic acne scars — as an add-on to a fractional laser or radiofrequency microneedling',
    tldr: 'Sixty people randomised to fractional CO2 alone or CO2 followed by PLLA injections at one, three and five months: scar scores lower with the combination, rolling scars responding best, ice-pick least. Twenty-four people had reconstituted PLLA painted onto one half of the face through the channels of fractional radiofrequency microneedling and water on the other: texture and scar volume better on the PLLA side at six months. Alone, PLLA has open studies of 20–22 people with 45–68% much improved. Two small randomised add-on trials pointing the same way — emerging.',
    evidence: 'emerging',
    focus: 'scars',
    note: 'Best for: rolling and boxcar scars in someone already having CO2 or RF microneedling; the microneedling guide grades the trial-backed options',
    sessions: 'With each of 2–3 device sessions, or 3 injection sessions a month apart',
    downtime: 'That of the laser or device; 2–5 days for injections',
    cost: '€300–700 per session on top of the device',
    bodyHtml: `
      <p>The trials: "60 patients were randomly divided into two groups … Group A received only CO2 fractional laser treatment, whereas Group B received injections of PLLA 1, 3, and 5 months after CO2 fractional laser treatment … Group B had lower GSS scores than Group A … the improvement in rolling scars was greater than that in boxcar scars, and both were greater than those in ice-pick scars" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12143118/" rel="noopener nofollow" target="_blank">Zhou 2025</a>); "In this randomized, split-face, evaluator-blinded clinical trial, 24 participants underwent two monthly FMRF sessions. Immediately after each session, a reconstituted PLLA suspension was applied to one facial half for transdermal delivery through the FMRF-created microchannels, while sterile water was applied to the contralateral side … PLLA-treated sides demonstrated statistically significant improvements in skin texture and scar volume at 6 months compared with baseline and with control sides" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12936238/" rel="noopener nofollow" target="_blank">Kupwiwat 2026</a>). Alone: 22 people in a single-arm study, "percentage of patients with much to excellent improvement … ranged from 45.5% to 68.2%", one palpable nodule (<a href="https://pubmed.ncbi.nlm.nih.gov/25915626/" rel="noopener nofollow" target="_blank">Sapra 2015</a>); 20 people over seven treatments with significant investigator-rated reductions (<a href="https://pubmed.ncbi.nlm.nih.gov/18086054/" rel="noopener nofollow" target="_blank">Beer 2007</a>). The same delivery idea — radiofrequency microneedling pushing PLLA through its channels — thickened the dermis without losing fat in a split-face laxity trial (<a href="https://pubmed.ncbi.nlm.nih.gov/38051121/" rel="noopener nofollow" target="_blank">Wu 2024</a>).</p>
      <p>Graded emerging: two randomised trials of 24 and 60 people, both testing PLLA as a surcharge on a device that already works, one of them evaluator-blinded, six months of follow-up. The <a href="/microneedling">microneedling guide</a> and the <a href="/skin-resurfacing">resurfacing guide</a> grade the devices themselves strong for scars; PLLA is a plausible, still-small addition for the rolling scars that respond to volume, and useless for ice-picks.</p>
    `,
  },
  {
    id: 'use-striae',
    category: 'use',
    title: 'Stretch marks — one 40-woman trial, ten per arm',
    tldr: 'Forty women with abdominal striae randomised to no treatment, PLLA, a 1,565 nm non-ablative fractional laser, or both, three monthly sessions: on 3D imaging the PLLA group\'s efficacy score was 5.70 against 3.60 for the laser and 6.70 for the combination, and stretch-mark volume fell 1.96 units with PLLA against 0.70 with the laser, with PLLA particles seen on biopsy "without inflammatory reactions". Ten women per arm, three months of follow-up.',
    evidence: 'emerging',
    focus: 'body',
    note: 'Best for: mature, atrophic abdominal striae; the body-contouring and retinoid guides cover what else has trials',
    sessions: '3 sessions, 4 weeks apart',
    downtime: '2–5 days',
    cost: '€600–1,200 per session',
    bodyHtml: `
      <p>The trial: "40 women with SD were randomly assigned to one of four treatment groups: (1) control, (2) PLLA, (3) 1565-nm NAFL, and (4) a combination of PLLA and 1565-nm NAFL … The overall efficacy scores for the PLLA, 1565-nm NAFL, and PLLA + 1565-nm NAFL groups were 5.70 ± 1.25, 3.60 ± 2.12, and 6.70 ± 2.21, respectively. Post-treatment evaluations demonstrated substantial decreases in SD volume from T0 to T4, with reductions of -1.96 ± 1.53 in the PLLA group, -0.70 ± 0.67 in the 1565-nm NAFL group, and -1.48 ± 1.35 in the PLLA + 1565-nm NAFL group … Histological analysis confirmed the presence of PLLA particles in the treated area without inflammatory reactions 1 month post-final injection" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12261269/" rel="noopener nofollow" target="_blank">Qu 2025</a>). The body review lists striae among the "various issues" PLLA is used for, on data it calls "still limited" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9233565/" rel="noopener nofollow" target="_blank">Christen 2022</a>).</p>
      <p>Graded emerging: one randomised trial, ten women per arm, three months. The direction — a stimulator beating a non-ablative laser on atrophic marks — is biologically sensible, since a stretch mark is a dermis that tore and thinned; the size of the trial is not yet a recommendation.</p>
    `,
  },
  {
    id: 'use-neck',
    category: 'use',
    title: 'Neck laxity and lines — case series, thin skin and the nodules to prove it',
    tldr: 'The neck evidence is the 36-person neck-and-chest series from 2009 and a 2026 review of 24 neck-filler studies that finds PLLA "may also improve wrinkle severity" while noting the small samples and short follow-up. Against it: the anterior neck is off-label and "may cause a higher incidence of nodule formation", the Lanluma post-market study\'s most frequent adverse events were lumps and nodules on the neck, and the ultrasound-guided excision paper is about a neck nodule. Limited, as the neck guide grades it; the front of the neck is the last place for a lump.',
    evidence: 'limited',
    focus: 'body',
    note: 'Best for: nobody as a first choice; the neck guide grades the toxin, the devices and the neck lift',
    sessions: 'As sold: 2–3 sessions',
    downtime: '3–7 days',
    cost: '€600–1,000 per session',
    bodyHtml: `
      <p>The evidence for: 36 patients with neck and chest changes, photographic improvement in 81–100% of the 21 evaluable, maintained at 18 months, one early nodule (<a href="https://pubmed.ncbi.nlm.nih.gov/19438668/" rel="noopener nofollow" target="_blank">Mazzuco 2009</a>); a 24-study, 887-patient review of neck fillers in which "poly-l-lactic acid stimulates collagen synthesis and may also improve wrinkle severity", but "heterogeneity of outcome measures, small sample sizes, and limited long-term data constrain definitive conclusions" (<a href="https://pubmed.ncbi.nlm.nih.gov/42377479/" rel="noopener nofollow" target="_blank">Bommareddy 2026</a>). The evidence against: "Injecting PLLA into the anterior neck is an off-label procedure and may cause a higher incidence of nodule formation" (<a href="https://pubmed.ncbi.nlm.nih.gov/35960980/" rel="noopener nofollow" target="_blank">Dunn 2022</a>); in Lanluma's 70-person body study the neck was the most-treated area and "lumps (neck, upper arm, hand) and nodules (neck, hand, thigh) were the most frequent adverse events" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626332/" rel="noopener nofollow" target="_blank">Amselem 2024</a>); the one paper on ultrasound-guided surgical removal of a PLLA nodule concerns "a patient submitted to PLLA injection for esthetic improvement of the cervical region" (<a href="https://pubmed.ncbi.nlm.nih.gov/32588526/" rel="noopener nofollow" target="_blank">Bravo 2021b</a>). The combined protocols with microfocused ultrasound are reviews, not trials (<a href="https://pubmed.ncbi.nlm.nih.gov/26441097/" rel="noopener nofollow" target="_blank">Hart 2015</a>).</p>
      <p>Graded limited, as the <a href="/neck">neck guide</a> grades it — "extrapolated from face data; neck-specific evidence is case series, with nodule risk in thin skin". The <a href="/regenerative-aesthetics">biostimulator guide</a> grades neck-and-chest moderate on a calcium hydroxylapatite trial that does not apply here. For necklace lines, bands and laxity the neck guide grades the toxin, the devices and the neck lift; if PLLA is used on the neck at all it is heavily diluted, fanned under the dermis by someone who scans their own complications.</p>
    `,
  },
  {
    id: 'use-under-eye-lips',
    category: 'use',
    title: 'Under the eyes, the lips and the forehead — where the nodules were, and still are',
    tldr: 'The visible nodules of the early years were "9 perioral; 3 periorbital or temple" of twelve; the first HIV series produced its two papules in the infraorbital region; a periorbital granuloma needed surgical excision; and in a 240-case ultrasound series of filler granulomas of every material, 41.7% sat in the lower lid, infraorbital and medial cheek and 19.2% in the lips and perioral region. The consensus advice has been the same since 2006: orbits and perioral only with training, hypermobile muscle areas avoided. A 28-patient retrospective series of double-diluted infraorbital PLLA scored 3.4 out of 5 with one nodule; the lower-eyelid PDLLA data are Korean open series. Limited.',
    evidence: 'limited',
    focus: 'face',
    note: 'Best for: nobody — the tear trough is hyaluronic acid or surgery, the lip is hyaluronic acid or a lip lift, the forehead is toxin',
    sessions: 'Not recommended',
    downtime: 'A granuloma can appear years later',
    cost: 'Whatever the nodule costs to treat',
    bodyHtml: `
      <p>The record: of the twelve grade-3 nodules in 221 cosmetic patients, "9 perioral; 3 periorbital or temple … 7 were treated (5 intralesional corticosteroids; 2 surgery)", and the authors' conclusion was that "nodules occurred in perioral and periorbital regions, so incidence is reduced by avoiding these areas" (<a href="https://pubmed.ncbi.nlm.nih.gov/19207324/" rel="noopener nofollow" target="_blank">Lowe 2009</a>); the two persistent papules in the 61-man HIV series were "in the infraorbital region as a result of the site of placement and concentration" (<a href="https://pubmed.ncbi.nlm.nih.gov/15692467/" rel="noopener nofollow" target="_blank">Burgess 2005</a>); a periorbital granulomatous reaction "resulting in visible papules" failed medical treatment and was excised (<a href="https://pubmed.ncbi.nlm.nih.gov/17667102/" rel="noopener nofollow" target="_blank">Stewart 2007</a>); JAMA Ophthalmology reported facial ulcers and restrictive strabismus from a delayed periorbital PLLA granuloma (<a href="https://pubmed.ncbi.nlm.nih.gov/26043419/" rel="noopener nofollow" target="_blank">Fuller 2015</a>); in the international ultrasound series of 240 filler granulomas, "the main regions of granulomas were the lower lid, infraorbital, and medial cheek in 41.7%, the perioral region and lips in 19.2%", PLLA being 18.8% of the fillers involved (<a href="https://pubmed.ncbi.nlm.nih.gov/40186407/" rel="noopener nofollow" target="_blank">Wortsman 2025</a>); and lip nodules across all fillers appear a mean 2.9 years after treatment (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8894086/" rel="noopener nofollow" target="_blank">Trinh 2022</a>). The technique consensus: "Areas above hypermobile muscles should also be avoided … Injections around the orbits or perioral region are possible, but should not be attempted without sufficient training" (<a href="https://pubmed.ncbi.nlm.nih.gov/16643420/" rel="noopener nofollow" target="_blank">Vleggaar 2006</a>). The attempts: 28 patients given double-diluted PLLA above the infraorbital bone, satisfaction 3.37 of 5, "one patient developing a palpable, nonvisible nodule" (<a href="https://pubmed.ncbi.nlm.nih.gov/40864851/" rel="noopener nofollow" target="_blank">Firsowicz 2025</a>); a case series softening the lid–cheek junction from the cheek side (<a href="https://pubmed.ncbi.nlm.nih.gov/40627579/" rel="noopener nofollow" target="_blank">Montes 2025</a>); Korean women given a poly-D,L-lactic acid into the tear trough with "sustained improvements" in an open series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11868823/" rel="noopener nofollow" target="_blank">Wan 2025</a>).</p>
      <p>Graded limited: no controlled evidence, the highest nodule rates of any site, and no way to dissolve a mistake under an eyelid or in a lip. The <a href="/eye-bags">eye-bags guide</a> and the <a href="/dark-circles">dark-circles guide</a> grade the tear-trough options; the <a href="/thin-lips">lips guide</a> and the <a href="/lip-lines">lip-lines guide</a> cover the mouth; the <a href="/forehead-lines">forehead guide</a> covers the brow, where the vessels are the reason.</p>
    `,
  },
  {
    id: 'use-collagen-banking',
    category: 'use',
    title: '"Collagen banking" and prevention in your twenties and thirties — a metaphor with a syringe',
    tldr: 'No trial has injected PLLA into a face without visible deflation and followed it for the decades the claim covers. The saline-controlled trial enrolled healthy women with aging skin and stopped at a year; the cheek trial required moderate-to-severe wrinkles; the L-Lift pilot treated "initial signs of facial skin laxity", open-label, for six months. A stimulator placed in a face that will lose fat and bone over twenty years cannot be moved when the anatomy under it changes. The prevention with randomised trials is sunscreen, a retinoid and not smoking.',
    evidence: 'limited',
    focus: 'marketing',
    note: 'Best for: nobody under forty with a normal face — the 30s guide covers prevention with evidence',
    sessions: 'As sold: a vial a year',
    downtime: '2–5 days a session',
    cost: '€500–900 a vial, yearly, for a result no trial has measured',
    bodyHtml: `
      <p>What the trials enrolled: "healthy women" whose elasticity, hydration and pigmentation were measured at twelve months (<a href="https://pubmed.ncbi.nlm.nih.gov/30741790/" rel="noopener nofollow" target="_blank">Bohnert 2019</a>); "immune-competent adults (aged &gt;21 years) with moderate/severe cheek wrinkles" (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>); 30 people with early laxity in an open pilot that ended at 24 weeks and concluded the technique "may be particularly suitable for patients presenting initial signs of facial skin laxity" (<a href="https://pubmed.ncbi.nlm.nih.gov/33988551/" rel="noopener nofollow" target="_blank">Hexsel 2021</a>). What the consensus documents actually recommend is patient selection, and the 2014 consensus notes "a shift toward a younger demographic" as a reason for the recommendations rather than evidence for it (<a href="https://pubmed.ncbi.nlm.nih.gov/24719078/" rel="noopener nofollow" target="_blank">Vleggaar 2014b</a>). What a foreign body does over time is known: particles were "still retrievable 28 months after subcutaneous application" (<a href="https://pubmed.ncbi.nlm.nih.gov/25703057/" rel="noopener nofollow" target="_blank">Stein 2015</a>), true granulomas "may become apparent months or years post-injection and may persist and grow over time" (<a href="https://pubmed.ncbi.nlm.nih.gov/24719076/" rel="noopener nofollow" target="_blank">Vleggaar 2014</a>), and the late nodules in one case took "over a year of treatment with oral corticosteroids and periodic intralesional steroid injections … to resolve" (<a href="https://pubmed.ncbi.nlm.nih.gov/29240867/" rel="noopener nofollow" target="_blank">O'Daniel 2017</a>).</p>
      <p>Graded limited, as the <a href="/collagen-loss">collagen-loss guide</a> and the <a href="/anti-aging-30s">30s guide</a> grade early biostimulators: no evidence, a plausible-sounding story, and an irreversible product placed into a face that has not finished changing. The 30s guide lists what prevention with trials looks like; none of it comes in a vial.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'prod-sculptra',
    category: 'product',
    title: 'Sculptra (Galderma) — the product in the trials',
    tldr: 'The vial behind almost every number on this page: the 233-person collagen comparison with 25 months of follow-up, the cheek trial that earned the 2023 FDA indication, the saline-controlled skin-quality trial, the HIV trials, the hip-dell, knee and cellulite split-body trials, and the 2021 immediate-reconstitution protocol. 150 mg of PLLA per vial with carboxymethylcellulose and mannitol, reconstituted in 8–9 mL plus lidocaine. The most expensive vial on the shelf, and the only one whose data are its own.',
    evidence: 'strong',
    focus: 'brand',
    note: 'Best for: the face indications with trials — cheeks, folds, temples — and the injector who follows the modern protocol',
    sessions: '2–3 sessions, 4–6 weeks apart',
    downtime: '2–5 days; massage',
    cost: '€500–900 per vial',
    bodyHtml: `
      <p>The trials are Sculptra's: the fold against collagen (<a href="https://pubmed.ncbi.nlm.nih.gov/20159311/" rel="noopener nofollow" target="_blank">Narins 2010</a>), the cheek against nothing (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>), skin quality against saline (<a href="https://pubmed.ncbi.nlm.nih.gov/30741790/" rel="noopener nofollow" target="_blank">Bohnert 2019</a>), the hip dell (<a href="https://pubmed.ncbi.nlm.nih.gov/39503574/" rel="noopener nofollow" target="_blank">Zubair 2024</a>), the knee (<a href="https://pubmed.ncbi.nlm.nih.gov/32852426/" rel="noopener nofollow" target="_blank">Kollipara 2020</a>), cellulite (<a href="https://pubmed.ncbi.nlm.nih.gov/36826378/" rel="noopener nofollow" target="_blank">Almukhtar 2023</a>), the HIV face (<a href="https://pubmed.ncbi.nlm.nih.gov/22759256/" rel="noopener nofollow" target="_blank">Bassichis 2012</a>), the reconstitution protocol (<a href="https://pubmed.ncbi.nlm.nih.gov/34232000/" rel="noopener nofollow" target="_blank">Palm 2021</a>). The vial: "a freeze-dried preparation containing 150 mg PLLA-SCA per vial" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626369/" rel="noopener nofollow" target="_blank">Vasconcelos-Berg 2024</a>), with a particle morphology and viscosity of its own on the bench and a reconstitution time shorter than AestheFill's (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12787764/" rel="noopener nofollow" target="_blank">Su 2025</a>). Its safety record is the class's: "relatively high rates of nodule and papule formation were reported during early use", then "updated methods have led to better safety and efficacy" (<a href="https://pubmed.ncbi.nlm.nih.gov/23379657/" rel="noopener nofollow" target="_blank">Bartus 2013</a>); in the Brazilian complication series it accounted for 20.0% of biostimulator cases against 49.1% for a local PLLA (<a href="https://pubmed.ncbi.nlm.nih.gov/38693639/" rel="noopener nofollow" target="_blank">Ianhez 2024</a>).</p>
      <p>Graded strong as the <a href="/regenerative-aesthetics">biostimulator guide</a> grades PLLA — the only biostimulator with randomised, controlled, long-follow-up trials for its labelled uses — with the same caveats: the trials are Galderma's, the systematic review calls them low quality, and the nodule question is answered by technique, not by the brand. Off the face, it is used off-label.</p>
    `,
  },
  {
    id: 'prod-gana-v',
    category: 'product',
    title: 'Gana V (Korea) — non-inferior to Sculptra, split-face, over two years',
    tldr: 'The one PLLA brand tested head-to-head against Sculptra: in 55 people in France, each side of the nasolabial folds got one product, double-blind; at 6 and 24 months Gana V was non-inferior on the wrinkle scale, with a similar adverse-event profile and higher investigator satisfaction immediately after injection. Usually priced below Sculptra. One trial, one site, one indication — moderate.',
    evidence: 'moderate',
    focus: 'brand',
    note: 'Best for: the fold and midface at a lower vial price, from an injector who has used it; check the CE status in your country',
    sessions: 'As Sculptra',
    downtime: '2–5 days',
    cost: '€350–650 per vial',
    bodyHtml: `
      <p>The trial: "This double-blind, non-inferiority, randomized, split-face controlled trial was performed in France … Fifty-five participants with moderate-to-severe NLFs (mean age 53.8 … years; 48 [87.3%] female) were enrolled. After 6 months, Gana V showed improved WSRS score (mean difference - 0.25 …) in intention-to-treat analysis, while Sculptra did not (mean difference - 0.20 …) … Gana V and Sculptra showed no difference in adverse reactions" (<a href="https://pubmed.ncbi.nlm.nih.gov/37626137/" rel="noopener nofollow" target="_blank">Han 2023</a>); at the final report, "after 24 months, Gana V significantly improved the mean WSRS score (adjusted mean difference … -0.21 …), while Sculptra did not show significant improvement (aMD -0.12 …) … Non-inferiority of Gana V was established … Both treatment groups exhibited similar adverse reaction profiles" (<a href="https://pubmed.ncbi.nlm.nih.gov/40897963/" rel="noopener nofollow" target="_blank">Kim 2026</a>). Galderma's authors wrote a letter to the editor about the interim report, which the trialists answered — worth knowing when the comparison is quoted at you.</p>
      <p>Graded moderate: one well-designed but small trial by the challenger, on one indication, in which the reference product's own change did not reach significance — a reminder of how modest a fold change on a five-point scale is. Availability and CE status vary by country; ask.</p>
    `,
  },
  {
    id: 'prod-aesthefill',
    category: 'product',
    title: 'AestheFill (REGEN Biotech) — poly-D,L-lactic acid, non-inferior to hyaluronic acid',
    tldr: 'A different stereoisomer sold as a porous microsphere: in 260 people with nasolabial folds randomised to AestheFill or a hyaluronic filler, 67.6% versus 60.9% were a grade better at 24 weeks and the product was "noninferior" over 52 weeks with no severe adverse events. On the bench it differs from Sculptra in particle shape and takes longer to reconstitute. One large evaluator-blinded trial against the standard filler — moderate.',
    evidence: 'moderate',
    focus: 'brand',
    note: 'Best for: the fold or midface where a Korean PDLLA is what the clinic stocks; the trial is the product\'s, not the isomer\'s',
    sessions: '2–3 sessions, 4–6 weeks apart',
    downtime: '2–5 days',
    cost: '€350–650 per vial',
    bodyHtml: `
      <p>The trial: "Two hundred and sixty patients with moderate to severe nasolabial folds were enrolled and randomized to the treatment group (PDLLA) or control group (hyaluronic acid) … followed for 52 weeks … At 24 weeks, 67.6% of patients in the PDLLA group had an at least 1-grade improvement on the WSRS, compared to 60.9% of patients in the control group … PDLLA was safe and well tolerated, with no severe adverse events" (<a href="https://pubmed.ncbi.nlm.nih.gov/39178357/" rel="noopener nofollow" target="_blank">Ting 2024</a>). The material: PDLLA "demonstrates significant benefits in enhancing skin elasticity and firmness, reducing wrinkles" in the review literature, with "granuloma formation and non-inflammatory nodules" as the complications to watch (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11434839/" rel="noopener nofollow" target="_blank">Lee 2024</a>); on the bench "AestheFill and NeoFilera exhibited similar profiles … Sculptra displayed distinct particle morphology and viscosity", and "the reconstitution times of Sculptra, NeoFilera, and Juvelook were significantly shorter than that of AestheFill" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12787764/" rel="noopener nofollow" target="_blank">Su 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39496962/" rel="noopener nofollow" target="_blank">Lin 2025</a>). The ophthalmology review of non-hyaluronic fillers lists PDLLA among the materials with reported visual impairment (<a href="https://pubmed.ncbi.nlm.nih.gov/39266009/" rel="noopener nofollow" target="_blank">Lee 2024b</a>).</p>
      <p>Graded moderate: one randomised trial of good size against the right comparator, on one indication, and none of Sculptra's long follow-up or body data. The <a href="/aging-hands">hands guide</a> covers the PDLLA hand series; the lower-eyelid PDLLA data are in the under-eye row above, and they are not a reason to put it there.</p>
    `,
  },
  {
    id: 'prod-lanluma',
    category: 'product',
    title: 'Lanluma (Sinclair) — the CE-marked PLLA with body indications on the label',
    tldr: 'Launched in Europe in 2021 as a poly-L-lactic acid whose maker lists the face, décolletage and neck, abdomen, buttocks and hip dips, cellulite, arms, hands and thighs. The evidence is a post-market open-label study of 70 people treated in the neck, upper arm, hand, thigh and décolleté with high satisfaction at nine months, lumps and nodules the most frequent adverse events, none serious, and a final analysis promised at 25 months. It borrows Sculptra\'s trials in its marketing; it has not run its own. Emerging.',
    evidence: 'emerging',
    focus: 'brand',
    note: 'Best for: the body areas a clinic wants to treat on-label; the trial evidence for those areas is Sculptra\'s split-body trials, and they are small',
    sessions: '2–3 sessions, 4–8 weeks apart; body vials are larger',
    downtime: '3–7 days; massage',
    cost: '€600–1,200 per vial; body courses €2,000–6,000 per area',
    bodyHtml: `
      <p>The product: "an injectable poly-L-lactic acid (PLLA)" that is CE-marked, with the face, décolletage and neck, abdomen, buttocks, cellulite, upper arms, hands and thighs listed as areas, and a duration claim of "more than two years" that cites the Sculptra fold trial (<a href="https://lanluma.com/" rel="noopener nofollow" target="_blank">Lanluma product information</a>). The study: "post-market observational, open-label, uncontrolled, multicentered, prospective … Overall, 70 participants had 99 treatment sessions of the neck (31%), upper arm (20%), hand (17%), thigh (16%) and décolleté (15%). Lumps (neck, upper arm, hand) and nodules (neck, hand, thigh) were the most frequent adverse events (AEs) reported by investigators. All were treatment related. None were serious, severe or fatal. No AEs were reported following treatment of the décolleté. Both investigators and participants reported high levels of satisfaction" — and the authors' own caution that the analysis "should be reconsidered in light of the study's objectives for the final analysis at the 25-month follow-up" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626332/" rel="noopener nofollow" target="_blank">Amselem 2024</a>).</p>
      <p>Graded emerging: the polymer is the same, the label is broader, and the product's own evidence is one uncontrolled study. That is not a criticism of the material — a CE body indication is what lets a European clinic treat a hip dell without going off-label — but the trials that make buttock, knee and cellulite treatment emerging rather than limited were run with Sculptra, and the body consensus that recommends PLLA for those areas is Sculptra's (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11965205/" rel="noopener nofollow" target="_blank">Haddad 2025</a>).</p>
    `,
  },
  {
    id: 'prod-pdlla-hybrids',
    category: 'product',
    title: 'Juvelook, Lenisna and the PLLA–hyaluronic hybrids — two mechanisms in one syringe',
    tldr: 'Juvelook and Lenisna (VAIM, Korea) suspend poly-D,L-lactic acid in non-cross-linked hyaluronic acid; the Chinese hybrids embed PLLA-b-PEG microspheres in a cross-linked hyaluronic gel. The idea is an immediate result from the gel and a stimulated one from the particles. The human data are retrospective series of 13 and 30 people over a year (84.6% of folds a grade better in the smaller) and Korean open series in the tear trough; the bench work compares carriers in pigs. Emerging.',
    evidence: 'emerging',
    focus: 'brand',
    note: 'Best for: the clinic that stocks them and the patient who wants something on the day as well as later; no comparative trial yet',
    sessions: '1–3 sessions',
    downtime: '2–5 days',
    cost: '€300–600 per syringe',
    bodyHtml: `
      <p>The hybrids: a retrospective series of 13 people given "cross-linked sodium hyaluronate with poly-L-lactic acid-b-polyethylene glycol microspheres" at the ligaments, in which "the mean WSRS score … decreased from 3.00 ± 0.71 to 1.85 ± 0.90 …, with a response rate of 84.62%" at twelve months and one transient erythema (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13002156/" rel="noopener nofollow" target="_blank">Zhang 2026</a>); a retrospective series of 30 Chinese patients with the same class of gel for facial contouring, "no serious adverse events reported" over twelve months, and a pointed note about "areas prone to blindness" (<a href="https://pubmed.ncbi.nlm.nih.gov/38995348/" rel="noopener nofollow" target="_blank">Liao 2024</a>). The Korean PDLLA-in-hyaluronic products: Juvelook in the tear trough of Korean women, "sustained improvements and no severe complications" in an open series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11868823/" rel="noopener nofollow" target="_blank">Wan 2025</a>), and a bench comparison in which Juvelook's particles resembled another PDLLA's while its chemistry and osmotic pressure resembled Sculptra's (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12787764/" rel="noopener nofollow" target="_blank">Su 2025</a>). The carrier question — carboxymethylcellulose against non-cross-linked hyaluronic acid — has so far been studied in pigs (<a href="https://pubmed.ncbi.nlm.nih.gov/42495478/" rel="noopener nofollow" target="_blank">Sulamanidze 2026</a>).</p>
      <p>Graded emerging: retrospective series and open studies, no randomised comparison against either parent product. The appeal is real — a filler that gives something today and stimulates for later — and so is the trade-off: two materials to react to, in a gel that hyaluronidase only half dissolves.</p>
    `,
  },
  {
    id: 'prod-next-gen',
    category: 'product',
    title: 'The newer PLLA microspheres — Chinese, Spanish and Brazilian products with their own trials',
    tldr: 'Three Chinese multicentre trials against hyaluronic acid (252, 331 and 208 people) are the largest PLLA trials ever run, with unnamed domestic microsphere products; LASYNPRO (Spain) has a 36-person imaging study with a rising collagen marker and a 60-person patient-reported study; Elleva (Brazil) matched Sculptra on the arm in 20 people but accounted for half of a Brazilian complication series; Loviselle is the PLLA in the acne-scar and pig studies. Real trials, mixed availability, and the safety record of each is its own — moderate for the class, brand by brand.',
    evidence: 'moderate',
    focus: 'brand',
    note: 'Best for: markets where they are the PLLA on the shelf; ask which product ran which trial and how it is diluted',
    sessions: '2–3 sessions, 4–6 weeks apart',
    downtime: '2–5 days',
    cost: '€300–700 per vial',
    bodyHtml: `
      <p>The trials: 252 people, double-blind, "at 48 weeks, PLLA demonstrated a significantly higher effective correction ratio than HA (92.4% vs 59.3%)" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12903950/" rel="noopener nofollow" target="_blank">Wang 2026</a>); 331 people, midface responders 90.57% against 51.01% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12273185/" rel="noopener nofollow" target="_blank">Zhang 2025</a>); 208 people followed to 120 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/42594306/" rel="noopener nofollow" target="_blank">Liu 2026</a>). LASYNPRO: "ultrasound and elastography imaging confirmed increased tissue density", with the collagen-synthesis marker P1CP up from 134.6 to 233.2 ng/mL at month 2 in 36 women (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12921352/" rel="noopener nofollow" target="_blank">Urdiales-Gálvez 2026</a>), a FACE-Q line score improving 20.7 points at twelve months in 60 people, single-arm (<a href="https://pubmed.ncbi.nlm.nih.gov/42682196/" rel="noopener nofollow" target="_blank">Ribe 2026</a>), and laboratory work arguing that its uniform microspheres "promote fibroblast migration" where "microflakes … elicit inflammatory gene expression" (<a href="https://pubmed.ncbi.nlm.nih.gov/41216698/" rel="noopener nofollow" target="_blank">Geara 2025</a>). Elleva: no difference from Sculptra on the arm in skin thickness, elasticity or histology (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13194430/" rel="noopener nofollow" target="_blank">Bravo 2026</a>), satisfaction that "declined significantly at 120 days …, particularly for PLLA-ELL" in a split-face randomised comparison (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13145310/" rel="noopener nofollow" target="_blank">Munoz-Lora 2026</a>), and "49.1% were caused by PLLA-Elleva" of 55 biostimulator complications scanned by Brazilian ultrasound experts, who judged the problems "related more to the properties of the products rather than inadequate technique" (<a href="https://pubmed.ncbi.nlm.nih.gov/38693639/" rel="noopener nofollow" target="_blank">Ianhez 2024</a>). Loviselle is the PLLA of the acne-scar trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12143118/" rel="noopener nofollow" target="_blank">Zhou 2025</a>) and of the pig study in which ultrasound before PLLA thickened the dermis by 35.2% against 23.7% for PLLA alone (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12802386/" rel="noopener nofollow" target="_blank">Jin 2026</a>).</p>
      <p>Graded moderate for the group: the Chinese trials are large and randomised but belong to products a European clinic is unlikely to stock under those names; the European and Brazilian products have imaging and single-arm data; and the Brazilian complication series is the clearest evidence on this page that two vials of the same polymer are not the same device. Ask for the brand, the trial and the dilution, in that order.</p>
    `,
  },
  {
    id: 'prod-caha',
    category: 'product',
    title: 'Calcium hydroxylapatite instead (Radiesse) — instant volume plus stimulation, 12–18 months',
    tldr: 'The other stimulator with trials: microspheres in a gel that fills on the day and stimulates collagen after, with a randomised hand trial and a hand indication, a fold follow-up in which 40% were still improved at 30 months with no nodules in 102 people over three years, a 2025 double-blind non-inferiority trial against hyaluronic acid in 188 people, and the randomised décolleté trial as a diluted "biostimulator". Shorter than PLLA, visible sooner, more inflammatory on the gene data, and equally undissolvable.',
    evidence: 'strong',
    focus: 'comparator',
    note: 'Best for: the hand, the chest, and the person who wants volume today with a stimulating tail; the biostimulator guide grades it in full',
    sessions: '1–2 sessions; diluted protocols 2–3',
    downtime: '2–5 days',
    cost: '€450–800 per syringe',
    bodyHtml: `
      <p>The evidence: "Forty percent of the folds evaluated at least 30 months after the last Radiesse treatment were graded as 'improved' or better" in the 102-patient extension of the fold trial (<a href="https://pubmed.ncbi.nlm.nih.gov/20442101/" rel="noopener nofollow" target="_blank">Bass 2010</a>); a multicentre, double-blind, non-inferiority trial against a hyaluronic filler in Chinese subjects (<a href="https://pubmed.ncbi.nlm.nih.gov/39331081/" rel="noopener nofollow" target="_blank">Pan 2025</a>); diluted for the chest, 73.5% of women a grade better at 16 weeks in the evaluator-blinded randomised trial (<a href="https://pubmed.ncbi.nlm.nih.gov/38954627/" rel="noopener nofollow" target="_blank">Pavicic 2024</a>); global consensus guidelines for diluted and hyperdiluted use on the face and body (<a href="https://pubmed.ncbi.nlm.nih.gov/30358631/" rel="noopener nofollow" target="_blank">Goldie 2018</a>); and the mechanism — microspheres that "activate fibroblasts through direct contact" (<a href="https://pubmed.ncbi.nlm.nih.gov/36575882/" rel="noopener nofollow" target="_blank">Nowag 2023</a>), with neck-and-chest biopsies showing new collagen (<a href="https://pubmed.ncbi.nlm.nih.gov/28095536/" rel="noopener nofollow" target="_blank">Yutskovskaya 2017</a>). Against PLLA directly, the only comparison is the Galderma-funded gene work, in which CaHA "elicited a more inflammatory response" (<a href="https://pubmed.ncbi.nlm.nih.gov/39761144/" rel="noopener nofollow" target="_blank">Waibel 2025</a>), and the facial review's finding that "PLLA maintained its effects for up to 25 months, while CaHA offered results lasting 12 to 18 months", with "one serious case of compression necrosis … reported with CaHA" (<a href="https://pubmed.ncbi.nlm.nih.gov/41184662/" rel="noopener nofollow" target="_blank">Ferreira 2026</a>).</p>
      <p>Graded strong, as the <a href="/regenerative-aesthetics">biostimulator guide</a> grades it. The choice against PLLA is a choice of tempo: CaHA shows on the day and fades by eighteen months; PLLA shows at three months and holds for two years. Neither dissolves.</p>
    `,
  },
  {
    id: 'prod-ha',
    category: 'product',
    title: 'Hyaluronic acid instead — faster, precise, reversible, and behind at a year',
    tldr: 'In every head-to-head, hyaluronic acid was ahead at four weeks and behind from nine months: 59.3% versus 92.4% at 48 weeks, 51.0% versus 90.6% for midface volume at a year, 25.0% versus 55.6% at 120 weeks. It fills one hollow exactly, on the day, and an enzyme removes it if the shape is wrong. The filler guide grades it strong for the fold and the cheek. The right first injectable for most faces; the wrong one for the face that has deflated everywhere and wants the result to last.',
    evidence: 'strong',
    focus: 'comparator',
    note: 'Best for: first-time patients, a single hollow, the tear trough and the lips, anyone who wants the option to undo it',
    sessions: '1 session; top-up at 12–18 months',
    downtime: '1–3 days',
    cost: '€350–700 per syringe',
    bodyHtml: `
      <p>The comparisons are above: at week 4 "HA outperformed PLLA … reflecting its immediate effect" and "HA generally achieved correction with fewer sessions" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12903950/" rel="noopener nofollow" target="_blank">Wang 2026</a>); "similar short-term efficacy through 12 weeks" (<a href="https://pubmed.ncbi.nlm.nih.gov/42594306/" rel="noopener nofollow" target="_blank">Liu 2026</a>); midface responders 51.01% against 90.57% for PLLA at the primary endpoint (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12273185/" rel="noopener nofollow" target="_blank">Zhang 2025</a>); and, in the network meta-analysis of 13 fold trials, "HA was significantly less likely to cause nodule formation compared with bovine collagen" and is "a safe filler for correcting nasolabial folds" (<a href="https://pubmed.ncbi.nlm.nih.gov/38600338/" rel="noopener nofollow" target="_blank">Li 2024</a>). The reversibility argument is made by the complication literature: in the Brazilian series "hyaluronidase demonstrated efficacy only in cases where there was an association with HA" (<a href="https://pubmed.ncbi.nlm.nih.gov/38693639/" rel="noopener nofollow" target="_blank">Ianhez 2024</a>), and the American Academy of Ophthalmology's review of 198 cases of filler blindness counted 164 with hyaluronic acid and one with PLLA — mostly a measure of how much more hyaluronic acid is injected, and in higher-risk sites (<a href="https://pubmed.ncbi.nlm.nih.gov/40167411/" rel="noopener nofollow" target="_blank">Foster 2025</a>).</p>
      <p>Graded strong, as the <a href="/fillers">filler guide</a> grades it for folds and cheeks. The combined protocols — hyaluronic acid on the ligaments or the cheekbone, PLLA for the diffuse deflation — are the open-label standard in the GLP-1 studies (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13064655/" rel="noopener nofollow" target="_blank">Lorenc 2026</a>) and the cephalometric study (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9291938/" rel="noopener nofollow" target="_blank">Chuang 2022</a>); the <a href="/facial-volume-loss">volume-loss guide</a> says learn your face on the gel, then graduate.</p>
    `,
  },
  {
    id: 'prod-pcl',
    category: 'product',
    title: 'Polycaprolactone instead (Ellansé) — the third stimulator, one randomised trial',
    tldr: 'Microspheres of a slower-degrading polyester in a gel: in a Chinese multicentre randomised trial of 160 people, 88.8% of folds were still improved at twelve months against 23.8% for the hyaluronic control, with injection-related adverse events in 8.8% versus 11.3%. Sold in Europe in versions lasting one to four years; not available in the United States. One trial, no long-term nodule series comparable to PLLA\'s — moderate, as the biostimulator guide grades it.',
    evidence: 'moderate',
    focus: 'comparator',
    note: 'Best for: the fold or chin where a longer-lasting, gel-carried stimulator suits; the biostimulator guide has the detail',
    sessions: '1–2 sessions',
    downtime: '2–5 days',
    cost: '€450–800 per syringe',
    bodyHtml: `
      <p>The trial: "The randomizing ratio was 1:1 in the polycaprolactone group … or control group (sodium hyaluronate gel injection) … the effectiveness rate at 12 months in the polycaprolactone group was 88.8% compared with 23.8% in controls … The improvement in WSRS sustained during 12 months in the polycaprolactone group, while gradually vanished in the control group since 3 months" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10171959/" rel="noopener nofollow" target="_blank">Zhao 2023</a>). In the Brazilian complication series it accounted for 7.3% of cases (<a href="https://pubmed.ncbi.nlm.nih.gov/38693639/" rel="noopener nofollow" target="_blank">Ianhez 2024</a>); the systematic review of combined biostimulator treatments groups it with PLLA and CaHA, with nodules "in 15-30% of cases" across the combination studies and "rare but severe complications such as granulomas and vascular occlusions" (<a href="https://pubmed.ncbi.nlm.nih.gov/39719485/" rel="noopener nofollow" target="_blank">Tam 2025</a>).</p>
      <p>Graded moderate, as the <a href="/regenerative-aesthetics">biostimulator guide</a> grades it: one good trial, a shorter record, and the same rule as PLLA — nothing dissolves it. Availability as of September 2026.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-nodules-papules',
    category: 'safety',
    title: 'Papules and nodules — the biostimulator\'s own risk, in numbers',
    tldr: 'Early technique produced them in 19% of cosmetic patients (41 of 221, 12 visible) and micronodules in 44% of the first HIV cohort. With 8–9 mL dilution, deep placement, fewer vials a session and five days of massage, the modern figures are about 5% across pooled biostimulator studies, 8.3% nodules and 8.6% papules at two years in the 290-person HIV study, 4.7% at two years in a 106-patient pilot, 3.4% in 26 immediate-reconstitution patients and one in 167 in another series. Most are palpable, not visible, and resolve; some need steroid injections or excision. Not every lump is a granuloma.',
    bodyHtml: `
      <p>The numbers: "After treatment (1-6 months), 14/41 patients developed Grade 1 papules or nodules (slightly palpable, nonvisible …), 15/41 developed Grade 2 … 12/41 developed Grade 3 nodules (easily palpable, obviously visible [9 perioral; 3 periorbital or temple]; 5 resolved spontaneously; 7 were treated [5 intralesional corticosteroids; 2 surgery])" among 221 patients treated with 5 mL dilution (<a href="https://pubmed.ncbi.nlm.nih.gov/19207324/" rel="noopener nofollow" target="_blank">Lowe 2009</a>); "palpable but non-visible subcutaneous micronodules" in 44% of the VEGA cohort (<a href="https://pubmed.ncbi.nlm.nih.gov/14600518/" rel="noopener nofollow" target="_blank">Valantin 2003</a>); a 10% incidence at 48 weeks in the Australian trial (<a href="https://pubmed.ncbi.nlm.nih.gov/19245538/" rel="noopener nofollow" target="_blank">Carey 2009</a>); "injection-site nodules (n = 24, 8.3%) and papules (n = 25, 8.6%)" at two years in 290 people, "no hypertrophic scars, keloids" (<a href="https://pubmed.ncbi.nlm.nih.gov/22759256/" rel="noopener nofollow" target="_blank">Bassichis 2012</a>); "the rate of nodule formation was 4.7% at a minimum follow-up of two years" in 106 cosmetic patients (<a href="https://pubmed.ncbi.nlm.nih.gov/21239677/" rel="noopener nofollow" target="_blank">Schierle 2011</a>); "2 patients (3.44%) developed a nodule" with immediate reconstitution at 12 mL (<a href="https://pubmed.ncbi.nlm.nih.gov/32633843/" rel="noopener nofollow" target="_blank">Bravo 2021</a>); one in 167 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626369/" rel="noopener nofollow" target="_blank">Vasconcelos-Berg 2024</a>); and, pooled across 25 biostimulator studies, "nodule development, 5% (95% CI, 2%-10%)", with bruising 27%, erythema 16% and pain 92% (<a href="https://pubmed.ncbi.nlm.nih.gov/40674466/" rel="noopener nofollow" target="_blank">Smith 2025</a>). The mechanism: papules and nodules "tend to arise several weeks after injection, are generally palpable, asymptomatic, and nonvisible, and will typically resolve on their own, but can be camouflaged with the use of hyaluronic acid. They generally result from suboptimal product reconstitution or placement" (<a href="https://pubmed.ncbi.nlm.nih.gov/24719076/" rel="noopener nofollow" target="_blank">Vleggaar 2014</a>); "incorrect reconstitution, uneven product distribution in the suspension, imprecise injection technique (superficial injection), or lack of posttreatment massage" (<a href="https://pubmed.ncbi.nlm.nih.gov/18547172/" rel="noopener nofollow" target="_blank">Narins 2008</a>).</p>
      <p>What to do with a lump: report it whenever it appears; early ones are massaged, watched or injected with saline, later ones with steroid; ultrasound tells a nodule of clumped product from an inflammatory granuloma and shows PLLA as "initially hyperechoic, fading over time" (<a href="https://pubmed.ncbi.nlm.nih.gov/41505983/" rel="noopener nofollow" target="_blank">Khorasanizadeh 2026</a>). Keep the brand and lot number, because the Brazilian series found the product mattered more than the technique (<a href="https://pubmed.ncbi.nlm.nih.gov/38693639/" rel="noopener nofollow" target="_blank">Ianhez 2024</a>).</p>
    `,
  },
  {
    id: 'safety-granulomas-late',
    category: 'safety',
    title: 'Late granulomas and the absence of an eraser',
    tldr: 'True inflammatory granulomas are rare — 0.01–0.1% — "seem to be systemic in nature", appear months or years after injection and can persist and grow; biopsies show non-caseating foreign-body granulomas around the particles. Treatment is intralesional and sometimes oral steroids, 5-fluorouracil, or excision, and it can take a year. Nothing dissolves PLLA: in 55 Brazilian biostimulator complications, saline, hyaluronidase, steroids and devices produced complete resolution in five, and hyaluronidase helped only where hyaluronic acid had been mixed in.',
    bodyHtml: `
      <p>The definitions: "true inflammatory granulomas are very rare (incidence 0.01%-0.1%), seem to be systemic in nature, and represent an overabundance of host reaction to PLLA. Granulomas may become apparent months or years post-injection and may persist and grow over time. Their treatment … may include the administration of steroids and antimetabolites such as 5-fluorouracil" (<a href="https://pubmed.ncbi.nlm.nih.gov/24719076/" rel="noopener nofollow" target="_blank">Vleggaar 2014</a>). The cases: deep nodules in both cheeks 18 months after cosmetic injection, "non-caseating granulomas consisting of histiocytes with central foreign bodies" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7875245/" rel="noopener nofollow" target="_blank">Jeon 2020</a>); late-onset nodules at 16 months that took "over a year of treatment with oral corticosteroids and periodic intralesional steroid injections" after 5-fluorouracil (<a href="https://pubmed.ncbi.nlm.nih.gov/29240867/" rel="noopener nofollow" target="_blank">O'Daniel 2017</a>); persistent periorbital papules that responded only to excision (<a href="https://pubmed.ncbi.nlm.nih.gov/17667102/" rel="noopener nofollow" target="_blank">Stewart 2007</a>). The biology is the mechanism working too well — the same macrophages, giant cells and capsule that make the collagen (<a href="https://pubmed.ncbi.nlm.nih.gov/25703057/" rel="noopener nofollow" target="_blank">Stein 2015</a>). The eraser problem: "Despite several treatments, including saline (45.5%), hyaluronidase (25.5%), diluted corticosteroids (23.6%), and energy-based devices (10.9%), only five cases showed complete resolution. Hyaluronidase was beneficial in complications related to fillers when there was an association of calcium hydroxyapatite with hyaluronic acid" (<a href="https://pubmed.ncbi.nlm.nih.gov/38693639/" rel="noopener nofollow" target="_blank">Ianhez 2024</a>). Across 240 filler granulomas scanned internationally, PLLA was the material in 18.8% (<a href="https://pubmed.ncbi.nlm.nih.gov/40186407/" rel="noopener nofollow" target="_blank">Wortsman 2025</a>).</p>
      <p>What follows for the patient: a lump that appears a year or more after treatment is a doctor's problem, not a masseur's; the doctor needs to know what was injected, when, and by whom; and the reason this page keeps repeating "not reversible" is that the treatment of a late reaction is months of steroids, not an afternoon of enzyme. Anyone with a history of granulomatous disease or a previous filler granuloma should choose hyaluronic acid.</p>
    `,
  },
  {
    id: 'safety-vascular-eye',
    category: 'safety',
    title: 'Vascular occlusion, blindness and the hairline — rare, unrescuable, and mostly in the temple and forehead',
    tldr: 'One published retinal-artery occlusion after PLLA — in the temple, in a 49-year-old with chronic disease, permanent despite treatment — and one PLLA case among 198 filler blindness cases in the American Academy of Ophthalmology\'s review, against 164 with hyaluronic acid; a case of patchy alopecia along the frontal hairline from embolisation; visual loss up to two weeks after non-hyaluronic fillers noted in a second review. Hyaluronidase cannot reopen a PLLA embolus. Cannulas, small aliquots, aspiration and the safe planes of the temple are the whole defence.',
    bodyHtml: `
      <p>The cases: "A 49-year-old woman with multiple chronic diseases experienced sudden central visual loss and severe ocular pain in the right eye immediately after PLLA injection in the temporal region … the patient suffered permanent visual loss due to optic atrophy. Among all the subcutaneous filler materials, PLLA has not been a common cause of vascular complications, especially when injected in the temporal region, as this area has not been considered dangerous in the previous literature" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8493991/" rel="noopener nofollow" target="_blank">Wu 2021</a>); the ophthalmologists' count of "198 cases of vision loss caused by accidental intravascular injection of filler material, hyaluronic acid gel in 164 cases (83%), autologous fat in 29 cases (15%), collagen in 3 cases, poly-L lactic acid gel in 1 case, and calcium hydroxyapatite in 1 case", with the temple the site in 9% of all cases and treatments that "were usually not effective in reversing vision loss" (<a href="https://pubmed.ncbi.nlm.nih.gov/40167411/" rel="noopener nofollow" target="_blank">Foster 2025</a>); the non-hyaluronic review's warning of "cases of delayed onset up to two weeks" (<a href="https://pubmed.ncbi.nlm.nih.gov/39266009/" rel="noopener nofollow" target="_blank">Lee 2024b</a>); "patches of nonscarring alopecia with erythema and edema following aesthetic application of poly-L-lactic acid (PLLA) on the face and along the frontal hairline", attributed to embolisation (<a href="https://pubmed.ncbi.nlm.nih.gov/39787311/" rel="noopener nofollow" target="_blank">Cortez 2024</a>). The systematic review of combined treatments records "rare but severe complications such as granulomas and vascular occlusions" (<a href="https://pubmed.ncbi.nlm.nih.gov/39719485/" rel="noopener nofollow" target="_blank">Tam 2025</a>).</p>
      <p>What reduces it: the temple's safe planes — between the fasciae or on the bone — reached with a cannula and retrograde fanning, away from the superficial temporal artery and the sentinel vein (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11856534/" rel="noopener nofollow" target="_blank">Hong 2025</a>); ultrasound to confirm the plane is "free of vasculature" (<a href="https://pubmed.ncbi.nlm.nih.gov/41493260/" rel="noopener nofollow" target="_blank">Arruda 2026</a>); small aliquots, low pressure, and no PLLA in the glabella, nose or forehead, where 84% of the blindness cases were injected. Sudden pain, blanching or any visual change during or after a session is an emergency, and the <a href="/fillers">filler guide</a> explains why the hyaluronic-acid rescue protocol does not apply to a polymer.</p>
    `,
  },
  {
    id: 'safety-who-should-not',
    category: 'safety',
    title: 'Who should not have it, and who should think twice',
    tldr: 'The cosmetic label is for immune-competent adults; the contraindications are hypersensitivity to any component, active skin infection or inflammation at the site, and a tendency to keloids or hypertrophic scars. Think twice with autoimmune or granulomatous disease, a previous filler granuloma, immunosuppression, pregnancy or breastfeeding (no data), planned major weight loss, a face already carrying permanent filler, and any wish to be able to reverse the result. Isotretinoin, anticoagulants and a recent vaccine or dental infection are timing questions, not bans.',
    bodyHtml: `
      <p>The label and the consensus: the 2009 US approval is "for cosmetic indications in immune-competent patients", and the consensus recommendations cover "patient selection, proper preparation and storage, optimal injection techniques" (<a href="https://pubmed.ncbi.nlm.nih.gov/24719078/" rel="noopener nofollow" target="_blank">Vleggaar 2014b</a>); the HIV trials showed it is safe in a treated immunocompromised population — no keloids, "regardless of Fitzpatrick skin type" (<a href="https://pubmed.ncbi.nlm.nih.gov/22759256/" rel="noopener nofollow" target="_blank">Bassichis 2012</a>) — which is a reassurance about HIV on antiretrovirals, not about active immunosuppression or autoimmune disease. The reasons for caution come from the mechanism: granulomas "seem to be systemic in nature, and represent an overabundance of host reaction" (<a href="https://pubmed.ncbi.nlm.nih.gov/24719076/" rel="noopener nofollow" target="_blank">Vleggaar 2014</a>), the particles persist for more than two years (<a href="https://pubmed.ncbi.nlm.nih.gov/25703057/" rel="noopener nofollow" target="_blank">Stein 2015</a>), and nothing removes them (<a href="https://pubmed.ncbi.nlm.nih.gov/38693639/" rel="noopener nofollow" target="_blank">Ianhez 2024</a>). The weight-loss point is the GLP-1 literature's: the face should be at the weight it will keep before a stimulator is placed (<a href="https://pubmed.ncbi.nlm.nih.gov/42210881/" rel="noopener nofollow" target="_blank">Franco 2026</a>). Combination with energy devices and toxin is well tolerated in large series — one cheek asymmetry among the PLLA patients in an 18-year review of 1,040 people (<a href="https://pubmed.ncbi.nlm.nih.gov/39821337/" rel="noopener nofollow" target="_blank">Suh 2025</a>).</p>
      <p>Practical translation: bring the list of everything already in your face; disclose autoimmune disease, sarcoidosis, granulomas from any cause, immunosuppressants and pregnancy plans; postpone if there is a cold sore, an infected tooth or a fresh vaccine; and if you are not sure you want a two-year result, you do not want this one yet. The <a href="/fillers">filler guide</a> covers the reversible alternative in the same detail.</p>
    `,
  },
  {
    id: 'safety-technique-aftercare',
    category: 'safety',
    title: 'The technique checklist — what a good injector does, and what you do after',
    tldr: 'Ask six things: the brand and lot; the reconstitution volume (8–9 mL of water plus lidocaine for the face, more for the body) and whether it was agitated into an even suspension; cannula or needle, and the plane (subcutaneous or on the bone, never in the dermis, never over a mobile muscle, not in the lips or lower eyelids); how many vials this session (one or two on the face) and the gap to the next (at least four to six weeks); whether they use ultrasound; and the massage instructions — five minutes, five times a day, five days. Then do the massage.',
    bodyHtml: `
      <p>The rules, as written by the people who learned them: "higher volume dilution (8 to 12 cc), fewer vials used at each session, injections placed in the subcutaneous plane without any product being placed in the dermis, adequate time between injection sessions (at least 6 weeks), and postinjection patient massage" (<a href="https://pubmed.ncbi.nlm.nih.gov/16936545/" rel="noopener nofollow" target="_blank">Lam 2006</a>); "injections should be sufficiently deep to avoid areas of induration in the superficial layers of the dermis. Areas above hypermobile muscles should also be avoided … Massage should be continued by the patient for at least a week following the treatment session … Material injected into the temple area should be deposited deep next to the bone" (<a href="https://pubmed.ncbi.nlm.nih.gov/16643420/" rel="noopener nofollow" target="_blank">Vleggaar 2006</a>); "correct reconstitution and administration of PLLA have been found to be important parameters for optimal use" (<a href="https://pubmed.ncbi.nlm.nih.gov/19615539/" rel="noopener nofollow" target="_blank">Butterwick 2009</a>); "correct reconstitution and preparation of PLLA, as well as injection technique, are essential to ensure optimal outcomes and reduce adverse events" (<a href="https://pubmed.ncbi.nlm.nih.gov/18330797/" rel="noopener nofollow" target="_blank">Lowe 2008</a>). The modern protocol: immediate reconstitution in 8 mL plus 1 mL of 2% lidocaine, validated in the SCRIPT trial (<a href="https://pubmed.ncbi.nlm.nih.gov/34232000/" rel="noopener nofollow" target="_blank">Palm 2021</a>) and the cheek trial (<a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>); blunt cannulas in 87.3% of facial sessions in the two-centre series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626369/" rel="noopener nofollow" target="_blank">Vasconcelos-Berg 2024</a>); the gluteal rules — cannulas, low pressure, small volumes, retrograde delivery, the danger triangle avoided (<a href="https://pubmed.ncbi.nlm.nih.gov/31188150/" rel="noopener nofollow" target="_blank">Lin 2020</a>); consensus protocols by body site (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11965205/" rel="noopener nofollow" target="_blank">Haddad 2025</a>) and for Asian faces (<a href="https://pubmed.ncbi.nlm.nih.gov/37786340/" rel="noopener nofollow" target="_blank">Avelar 2023</a>). Combinations: PLLA with microfocused ultrasound in one session is described as safe in reviews rather than trials (<a href="https://pubmed.ncbi.nlm.nih.gov/26441097/" rel="noopener nofollow" target="_blank">Hart 2015</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/24910274/" rel="noopener nofollow" target="_blank">Friedmann 2014</a>), and the pig study suggests ultrasound first, PLLA immediately after (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12802386/" rel="noopener nofollow" target="_blank">Jin 2026</a>).</p>
      <p>Aftercare is the part that is yours: the five-five-five massage spreads the particles before they are encapsulated, which is why 99.6% of injectors prescribe it (<a href="https://pubmed.ncbi.nlm.nih.gov/31524343/" rel="noopener nofollow" target="_blank">Lin 2019</a>); expect swelling for two to five days (the "result" of the first week is water); no pressure on the area, no facials, no heat for a week; and photographs at each visit, because the change is too slow to see in a mirror.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-when-results',
    category: 'faq',
    title: 'When will I see something?',
    tldr: 'Swelling for a few days, then nothing; the collagen starts to show at six to twelve weeks and builds to a peak around six months after the last session. In the pivotal trial investigator-rated improvement was 100% at three weeks (water), dipped, and stayed above 85% from month 3 through month 25 (collagen). Judge the course at six months with photographs, not at the second session.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/21719865/" rel="noopener nofollow" target="_blank">Brandt 2011</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38206151/" rel="noopener nofollow" target="_blank">Fabi 2024</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12903950/" rel="noopener nofollow" target="_blank">Wang 2026</a>.)</p>
    `,
  },
  {
    id: 'faq-how-many',
    category: 'faq',
    title: 'How many vials and sessions?',
    tldr: 'On the face, one or two vials a session, two or three sessions four to six weeks apart — the trials allowed up to four; the 106-patient pilot averaged 1.6 vials over 2.3 sessions. Temples and hands usually one vial a session; body areas two to four vials a session per area; the buttock series needed twenty vials in total. Then a vial or two every one to two years.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/21239677/" rel="noopener nofollow" target="_blank">Schierle 2011</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/20159311/" rel="noopener nofollow" target="_blank">Narins 2010</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32976171/" rel="noopener nofollow" target="_blank">Durairaj 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/19207325/" rel="noopener nofollow" target="_blank">Mest 2009</a>.)</p>
    `,
  },
  {
    id: 'faq-cost',
    category: 'faq',
    title: 'What does it cost?',
    tldr: 'In Europe, September 2026: €500–900 per vial of Sculptra, so €1,500–5,000 for a facial course; Korean and Chinese PLLA and PDLLA brands often €350–650 a vial; body courses €2,000–6,000 per area, buttocks well into five figures at twenty vials. Compare with a hyaluronic-acid syringe at €350–700 that lasts twelve to eighteen months and can be dissolved.',
    bodyHtml: `
      <p>Indicative clinic prices, not quotes; the vial counts come from the trials and series cited in the rows above (<a href="https://pubmed.ncbi.nlm.nih.gov/32976171/" rel="noopener nofollow" target="_blank">Durairaj 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/21239677/" rel="noopener nofollow" target="_blank">Schierle 2011</a>).</p>
    `,
  },
  {
    id: 'faq-sculptra-or-filler',
    category: 'faq',
    title: 'Sculptra or a hyaluronic-acid filler?',
    tldr: 'Hyaluronic acid first if you want a shape today, one hollow filled, the tear trough or the lips, or the option to undo it. Sculptra if the whole face has deflated, you can wait three months, and you want a natural two-year result: it lost every head-to-head at four weeks and won every one from nine months — 92.4% against 59.3% at a year. Many faces get both: gel on the cheekbone, PLLA for the deflation.',
    bodyHtml: `
      <p>(<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12903950/" rel="noopener nofollow" target="_blank">Wang 2026</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12273185/" rel="noopener nofollow" target="_blank">Zhang 2025</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13064655/" rel="noopener nofollow" target="_blank">Lorenc 2026</a>.) The <a href="/facial-volume-loss">volume-loss guide</a> asks the same question from the patient's side.</p>
    `,
  },
  {
    id: 'faq-reversible',
    category: 'faq',
    title: 'Can it be dissolved if I hate it?',
    tldr: 'No. Hyaluronidase dissolves hyaluronic acid, not a polymer; in the Brazilian complication series it helped only where hyaluronic acid had been mixed in, and only five of 55 biostimulator problems resolved completely with any treatment. The particles persist for more than two years and the collagen they leave persists longer. Over-correction is treated with time, steroids or surgery.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/38693639/" rel="noopener nofollow" target="_blank">Ianhez 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/25703057/" rel="noopener nofollow" target="_blank">Stein 2015</a>.)</p>
    `,
  },
  {
    id: 'faq-pain-downtime',
    category: 'faq',
    title: 'Does it hurt, and what is the downtime?',
    tldr: 'Lidocaine is mixed into the vial and most clinics numb the skin; pain was reported after 29% of injections in one series and is the most common event in the pooled studies (92%), with bruising in about a quarter. Expect two to five days of swelling and tenderness, a week of massage, and no visible change afterwards until the collagen forms.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/32633843/" rel="noopener nofollow" target="_blank">Bravo 2021</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/40674466/" rel="noopener nofollow" target="_blank">Smith 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/31524343/" rel="noopener nofollow" target="_blank">Lin 2019</a>.)</p>
    `,
  },
  {
    id: 'faq-combine',
    category: 'faq',
    title: 'Can I combine it with Botox, filler, ultrasound or a laser?',
    tldr: 'Yes, and most courses do: hyaluronic acid on the ligaments or cheekbone with PLLA for the deflation, toxin for the lines, microfocused ultrasound or a laser for the surface. The 29-study review of biostimulator combinations found "notable improvements" with the energy devices and nodules in 15–30% of the combination series; an 18-year review of 1,040 people combining injectables with ultrasound or radiofrequency recorded one cheek asymmetry among the PLLA patients. Sequence matters: device first, PLLA after, in the one study that tested it.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/39719485/" rel="noopener nofollow" target="_blank">Tam 2025</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39821337/" rel="noopener nofollow" target="_blank">Suh 2025</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12802386/" rel="noopener nofollow" target="_blank">Jin 2026</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/26441097/" rel="noopener nofollow" target="_blank">Hart 2015</a>.) The <a href="/botox">toxin guide</a> and the <a href="/skin-tightening">tightening guide</a> grade the partners.</p>
    `,
  },
  {
    id: 'faq-body',
    category: 'faq',
    title: 'Does it work on the body — buttocks, cellulite, knees, arms?',
    tldr: 'On small split-body trials, yes, modestly: a hip dell 26–27% thicker in dermis and fat than its saline twin, cellulite dimples shallower at eleven months, a knee that physicians could tell from its placebo twin but the women could not. The manufacturer\'s consensus calls the body evidence "largely prospective observational analyses and case series"; the vial counts are large; Lanluma is the product with body indications on its European label.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/39503574/" rel="noopener nofollow" target="_blank">Zubair 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/36826378/" rel="noopener nofollow" target="_blank">Almukhtar 2023</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/32852426/" rel="noopener nofollow" target="_blank">Kollipara 2020</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11965205/" rel="noopener nofollow" target="_blank">Haddad 2025</a>.) The <a href="/body-contouring">body-contouring guide</a> and the <a href="/cellulite">cellulite guide</a> grade the alternatives.</p>
    `,
  },
  {
    id: 'faq-prevention-age',
    category: 'faq',
    title: 'I am 30 and have been offered it as prevention. Should I?',
    tldr: 'No trial supports it. The controlled trials enrolled people with visible deflation or aging skin and stopped at a year or two; nobody has injected a normal thirty-year-old face and followed it for the twenty years the "collagen banking" claim covers, and a stimulator cannot be moved when the face changes shape under it. Sunscreen, a retinoid and not smoking are the prevention with trials.',
    bodyHtml: `
      <p>(<a href="https://pubmed.ncbi.nlm.nih.gov/30741790/" rel="noopener nofollow" target="_blank">Bohnert 2019</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/33988551/" rel="noopener nofollow" target="_blank">Hexsel 2021</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/24719076/" rel="noopener nofollow" target="_blank">Vleggaar 2014</a>.) The <a href="/anti-aging-30s">30s guide</a> and the <a href="/collagen-loss">collagen-loss guide</a> say the same.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What Sculptra is, what the trials show, and what it can and cannot do',
    intro: '',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book: the comparison, the course, the brands and the rules',
    intro: '',
    sections: context,
  },
  {
    id: 'uses',
    title: 'What Sculptra is used for — graded by evidence',
    intro: 'Seventeen things poly-L-lactic acid is injected for, from the folds and cheeks with randomised trials to the lips and the "collagen bank". Sorted by evidence, not by the menu.',
    sections: uses,
  },
  {
    id: 'products',
    title: 'The products, brand by brand — and the alternatives',
    intro: 'Six kinds of lactic-acid vial graded on their own trials, and the three comparators a clinic will offer instead.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The nodules in numbers, the late granulomas, the vessels, who should not, and the technique checklist.',
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

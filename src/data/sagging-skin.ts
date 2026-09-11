/**
 * Sagging skin (skin laxity) guide — single source of truth (problem
 * template).
 *
 * Consumed by /sagging-skin. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: "sagging" is two problems sold as one. Laxity is the
 * skin's own loss of recoil — thinned dermis, fragmented elastin, sun
 * damage, menopause, smoke, sleep and sugar — and answers to skin work,
 * hormones and heat. Descent is the structure underneath leaving — fat and
 * bone — and answers to volume and, at the far end, surgery. Every device
 * on this page shrinks collagen by millimetres; the numbers are real and
 * modest, and the only treatment that removes skin is an operation.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'skin' | 'structure' | 'hormones' | 'device' | 'general';

export type SectionCategory = 'concept' | 'context' | 'home' | 'inj' | 'clinic' | 'safety' | 'faq';

export interface Section {
  id: string;
  category: SectionCategory;
  title: string;
  tldr: string;
  evidence?: Evidence;
  focus?: FocusArea;
  bodyHtml: string;
  note?: string;
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
  '"Sagging" is two problems. Laxity is the skin’s own loss of recoil — thinned dermis, fragmented elastin, sun-damaged fibres — and shows as a slow pinch and crepe. Descent is the fat and bone underneath leaving, and shows as a face that looks better lying down. The pinch test and the recline test tell you which you have; most people over fifty have both.',
  'Skin elasticity falls measurably with age, fastest on the face, and collagen tracks years since menopause more than age. The habits with evidence run the same direction: sunscreen cut measured skin aging by 24% in the one randomised prevention trial, smoking fragments elastic fibres additively with sun, two nights of short sleep measurably reduce elasticity, and sugar-crosslinked collagen stiffens.',
  'Menopausal hormone therapy is the one systemic treatment with a meta-analysis behind it — 15 studies, 1,589 women, significant gains in elasticity, thickness and collagen — and it is a decision about menopause, not about skin. Oral collagen peptides have consistent small trials, including 79 menopausal women, and a lot of industry money.',
  'Every energy device shrinks collagen by millimetres. Focused ultrasound gave clinically significant tightening in 70% at three months in a randomised trial and a fifth in a retrospective series; radiofrequency microneedling delivers about a third of a facelift’s laxity improvement in a scoping review; threads were gone by 60 days in a randomised trial. Real, modest, and sold as a lift.',
  'Only surgery removes skin. In a meta-analysis of 2,896 patients, 94% were satisfied after a deep-plane facelift and 88% after a SMAS lift, with haematoma in 1.6% and temporary nerve injury in under 1%. For the loose envelope left by large weight loss, that is the treatment; devices tighten what remains afterward.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-skin',
    kind: 'Skin',
    title: 'Collagen and elastin that no longer recoil',
    blurb: 'The dermis thins, elastic fibres fragment and sun replaces them with useless elastotic debris; the skin stretches as before and springs back less — measurably less each decade, and fastest on the face.',
  },
  {
    id: 'type-structure',
    kind: 'Structure',
    title: 'Fat and bone leaving from underneath',
    blurb: 'The envelope stays the same size while its contents shrink: fat compartments deflate and slide, the skull resorbs at the orbit, cheek and jaw, and ligaments loosen — so skin that is not lax still hangs.',
  },
  {
    id: 'type-hormones',
    kind: 'Hormones & habits',
    title: 'Menopause, sun, smoke, sleep and sugar',
    blurb: 'Skin collagen tracks years since menopause more than age; ultraviolet and cigarette smoke fragment elastin additively; two nights of short sleep measurably reduce elasticity; sugar cross-links the fibres that are left.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'laxity-anatomy',
    category: 'concept',
    title: 'What sagging actually is',
    tldr: 'Two things sold as one. Laxity: the dermis loses collagen and its elastic network fragments, so skin stretches as before and recoils less — a slow pinch, crepe, fine wrinkles. Descent: the fat and bone beneath shrink, so an envelope that may still be elastic hangs off a smaller frame.',
    bodyHtml: `
      <p>Skin firmness is a network: collagen for strength, elastin and the fine oxytalan microfibrils for recoil, all built and maintained by fibroblasts in a dermis that thins with age. Intrinsic aging thins the epidermis by 10–50% and slows its turnover by 30–50% between the third and eighth decades, reduces collagen synthesis, and shrinks elastic fibres in number and diameter (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13509672/" rel="noopener nofollow" target="_blank">physiology review</a>; <a href="https://ajp.amjpathol.org/article/S0002-9440(20)30142-5/fulltext" rel="noopener nofollow" target="_blank">pathobiology review</a>). Sun adds a second process: photoaging replaces the ordered elastic network with tangled elastotic material, and the microfibrils that anchor the epidermis degenerate (<a href="https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2023.1195272/full" rel="noopener nofollow" target="_blank">dermal aging review</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12325628/" rel="noopener nofollow" target="_blank">elastin architecture study</a>). The result is laxity: skin that stretches as before and springs back less.</p>
      <p>The second problem is not the skin. The face's fat compartments deflate and slide, the skull resorbs at the orbits, the cheek and the jaw, and the retaining ligaments loosen (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3404279/" rel="noopener nofollow" target="_blank">Mendelson &amp; Wong</a>; <a href="https://www.sciencedirect.com/science/article/abs/pii/S1010518216301068" rel="noopener nofollow" target="_blank">retaining ligaments</a>), so an envelope that is still reasonably elastic hangs off a smaller frame. Clinicians grade the two together on a ten-class Facial Laxity Rating scale — eyelid folds, nasojugal folds, jowls and neck profile — validated with 92.5% agreement against a truth standard (<a href="https://pubmed.ncbi.nlm.nih.gov/27673484/" rel="noopener nofollow" target="_blank">scale validation</a>). The treatments do not cross over, which is why this page sorts them first.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'How fast skin loses its recoil, and when',
    tldr: 'Cutometer studies in 96 women aged 20–75 show biological elasticity falling steadily with age and the face changing more than the arm or back; the steepest step is menopause, after which collagen tracks years since the last period more than age. Men start thicker and sag later.',
    bodyHtml: `
      <p>Recoil can be measured: a suction probe stretches the skin and times its return. In 96 healthy women aged 20 to 75, the biological-elasticity parameter fell steadily with age, with the face changing more than the upper arm or back (<a href="https://pubmed.ncbi.nlm.nih.gov/19159383/" rel="noopener nofollow" target="_blank">cutometer study</a>). The step change is hormonal: a 1987 study found skin collagen content correlated with years since menopause rather than chronological age (<a href="https://obgyn.onlinelibrary.wiley.com/doi/abs/10.1111/j.1471-0528.1987.tb02338.x" rel="noopener nofollow" target="_blank">1987 study</a>), and the reviews of estrogen and skin describe thinning, dryness and lost elasticity accelerating across the menopausal transition (<a href="https://www.tandfonline.com/doi/full/10.4161/derm.23872" rel="noopener nofollow" target="_blank">Estrogens and aging skin</a>; <a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.70393" rel="noopener nofollow" target="_blank">2025 review</a>). Men's thicker, more sebaceous dermis sags later and then in the jowl and neck. Sun, smoking and large weight change move everyone's timeline forward.</p>
    `,
  },
  {
    id: 'why-hard',
    category: 'concept',
    title: 'Why nothing non-surgical "lifts"',
    tldr: 'Energy devices heat collagen until it shrinks and provoke new collagen over months: millimetres, not centimetres. A randomised ultrasound trial found clinically significant tightening in 70% at three months; a retrospective series, a fifth. Radiofrequency microneedling gives about a third of a facelift’s laxity improvement. Only surgery removes skin.',
    bodyHtml: `
      <p>Every non-surgical tightening treatment works the same way: heat the dermis or the fibrous layer beneath it enough to contract collagen and injure it into remodelling, and wait months for new collagen. The gains are measured in millimetres and percentages of a rating scale. Focused ultrasound produced clinically significant tightening in 70% of patients at three months in a randomised trial with 3D imaging (<a href="https://link.springer.com/article/10.1007/s13555-023-01078-9" rel="noopener nofollow" target="_blank">RCT</a>) and in about a fifth of patients in a retrospective series where a sixth looked worse (<a href="https://pubmed.ncbi.nlm.nih.gov/32770566/" rel="noopener nofollow" target="_blank">retrospective study</a>); a scoping review estimates radiofrequency microneedling at roughly 37% of a facelift's laxity improvement (<a href="https://derma.jmir.org/2026/1/e78385" rel="noopener nofollow" target="_blank">scoping review</a>); threads hitched tissue that was back where it started by 60 days in a randomised trial (<a href="https://academic.oup.com/asjopenforum/article/doi/10.1093/asjof/ojaf002/7951699" rel="noopener nofollow" target="_blank">randomised trial</a>).</p>
      <p>None of that is nothing — for mild laxity, a device is exactly the right tool — but it is not a lift, and the word is doing sales work. The honest ladder: keep the recoil you have (sun, smoke, sleep, sugar, hormones), rebuild the dermis (retinoids, biostimulators, heat), replace the volume that left (filler, fat), and remove the skin that no longer fits (surgery). The mistake is buying rung three for a rung-four problem, which is what a device on a class-8 neck is.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-skin',
    category: 'context',
    title: 'Thin, crepey skin that pinches slowly (true laxity)',
    tldr: 'Pinch the cheek or the back of the hand and let go: skin that tents and settles slowly, with crepe and fine wrinkles but no heavy folds, has lost its recoil. Skin work, hormones and dermal heat are the tools; volume is wasted.',
    focus: 'skin',
    bodyHtml: `
      <p>Pinch a fold of cheek skin between finger and thumb for two seconds and release. Young skin is flat before you have finished looking; lax skin holds a ridge and settles over a second or more. Add crepe — the fine crinkling that appears when the skin is pushed together — and fine wrinkles at rest, without heavy folds or jowls, and the problem is the dermis itself: thin, under-collagenised, its elastic network fragmented. This type responds to everything that rebuilds or contracts dermis — retinoids, sunscreen, hormones where they are appropriate, biostimulators, radiofrequency and ultrasound — and it responds badly to volume, which sits under thin skin as a visible shape. The <a href="/wrinkles">wrinkles guide</a> covers the skin tools in full.</p>
    `,
  },
  {
    id: 'type-structure',
    category: 'context',
    title: 'The deflated or descended face (structure)',
    tldr: 'Cheeks, temples and jaw that look emptied, folds and jowls that soften when you lie on your back — the frame underneath has shrunk and the ligaments have loosened. Volume first, surgery at the far end; a device tightens the wrong thing.',
    focus: 'structure',
    bodyHtml: `
      <p>Lie flat with a hand mirror. If the folds soften, the jowls fall back and the face looks five years younger, the skin is not the main problem: the fat compartments have deflated and slid, the bone has resorbed and the ligaments have loosened, and an envelope that may still be elastic is hanging off a smaller frame. Hollow temples, flat cheeks and a jaw that has lost its line are the same story from the front. Tightening the skin over a deflated frame gives a tighter deflated frame; the tools are support — deep filler, collagen stimulators, fat — and, for real descent, the operation that repositions tissue. The <a href="/jowls">jowls guide</a> and the <a href="/nasolabial-folds">nasolabial guide</a> grade the structural tools.</p>
    `,
  },
  {
    id: 'type-hormones',
    category: 'context',
    title: 'Skin that changed fast around menopause',
    tldr: 'A drop in firmness over a year or two in the late forties or fifties, with dryness and thinning — estrogen withdrawal. The one type with a systemic treatment that has a meta-analysis, and a conversation to have about menopause rather than skin.',
    focus: 'hormones',
    bodyHtml: `
      <p>Some women describe their face changing in eighteen months: thinner, drier, looser, with crepe where there was none. Estrogen maintains dermal collagen, hyaluronic acid and elastic fibres, and its withdrawal is the steepest step in a woman's skin aging — collagen tracks years since menopause more than age (<a href="https://obgyn.onlinelibrary.wiley.com/doi/abs/10.1111/j.1471-0528.1987.tb02338.x" rel="noopener nofollow" target="_blank">1987 study</a>; <a href="https://www.tandfonline.com/doi/full/10.4161/derm.23872" rel="noopener nofollow" target="_blank">Estrogens and aging skin</a>). This is the one type with a systemic treatment that has a meta-analysis behind it, graded in the injectables-and-hormones group below, and the one where the right first appointment is a menopause clinic rather than an aesthetic one. Collagen peptides have their best small trial in exactly this group.</p>
    `,
  },
  {
    id: 'type-weight',
    category: 'context',
    title: 'The loose envelope after weight loss (including GLP-1 medicines)',
    tldr: 'After losing more than a tenth of body weight — faster on a GLP-1 medicine — the skin that fitted the larger face no longer fits; faces after bariatric-scale loss read about five years older. Refilling helps the deflation; only surgery removes an envelope that will not retract.',
    focus: 'structure',
    bodyHtml: `
      <p>Skin that grew to fit a heavier face does not always shrink to fit a lighter one, and the deep fat that propped it goes first. A systematic review of faces after massive weight loss found blinded raters judging them about five years older, with deepened folds, midface descent and neck laxity (<a href="https://academic.oup.com/asjopenforum/article/doi/10.1093/asjof/ojae069/7739023" rel="noopener nofollow" target="_blank">systematic review</a>); the GLP-1 medicines have made this common enough to have a name, and a systematic review of "Ozempic face" describes volume loss and laxity in proportion to the weight lost (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12232544/" rel="noopener nofollow" target="_blank">systematic review</a>), with laboratory work suggesting the drugs may also blunt the fat-derived stem cells and fibroblasts that rebuild skin (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13385476/" rel="noopener nofollow" target="_blank">2026 review</a>). Younger, less sun-damaged skin retracts over a year; older skin does not. Slow loss, volume replaced where it left, a device for mild residual laxity, and surgery for an envelope that will not retract — the <a href="/jowls">jowls guide</a> covers the lower face.</p>
    `,
  },
  {
    id: 'type-body',
    category: 'context',
    title: 'The neck, arms, abdomen and knees',
    tldr: 'The same physics with fewer tools: thinner skin, less bone to support it, and devices with body-specific evidence — helium plasma has FDA clearance for the neck, diluted calcium hydroxylapatite has cutometer data on arms and abdomen. Surgery removes what does not retract.',
    focus: 'general',
    bodyHtml: `
      <p>Body skin sags for the same reasons with less structure to hang from, and the evidence follows the devices that bothered to measure it. The neck has its own guide — the <a href="/neck">neck guide</a> grades platysma, laxity and the treatments for both — and the crepey inner arm, the loose abdomen after pregnancy or weight loss, and the skin above the knee share two treatments with data: diluted calcium hydroxylapatite, with cutometer elasticity rising from 72 to 82 units on the upper arm and dermal thickness up 27% on the abdomen in small series (<a href="https://pubmed.ncbi.nlm.nih.gov/28915285/" rel="noopener nofollow" target="_blank">case series</a>), and subdermal helium plasma, cleared for the neck on a prospective trial (<a href="https://academic.oup.com/asj/article/43/10/1174/7072381" rel="noopener nofollow" target="_blank">FDA-IDE trial</a>). Beyond mild laxity, body skin that no longer fits is removed by a surgeon — an arm lift, an abdominoplasty — and nothing else does it.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The pinch, the recline, the photograph and the timeline',
    tldr: 'Pinch: slow recoil is laxity. Recline: folds that vanish are descent. Photograph straight on and in profile in one light. Then the questions a clinician should ask — menopause, weight trajectory, sun, smoking, sleep — because they decide the plan more than the device does.',
    bodyHtml: `
      <p>Two tests and a history. Pinch a fold of cheek or hand skin for two seconds and time the recovery: slow is laxity. Lie flat with a mirror: folds and jowls that vanish are descent; skin that stays crepey lying down is laxity. Photograph straight on, in profile and at three-quarters, in one light, before anything — the class on the ten-point laxity scale is what every device trial measured, and it is what your result will be compared against. Then the questions that decide the plan more than any machine: where you are in menopause, whether you have lost or are losing weight, how much sun the skin has had and whether you smoke, how you sleep, and whether the change was gradual or came in a year. A clinician who skips these and goes straight to a device is selling a device.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-spf',
    category: 'home',
    title: 'Sunscreen and not smoking',
    tldr: 'Daily sunscreen cut measured skin aging by 24% in the one randomised prevention trial; smoking fragments elastic fibres in proportion to lifetime dose, additively with sun. The two habits that decide how much recoil you keep.',
    evidence: 'strong',
    focus: 'skin',
    note: 'Best for: everyone — the only prevention with a randomised trial, on the mechanism that makes skin lax',
    sessions: 'Every morning; quit',
    downtime: 'None',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Laxity is, in large part, what sun and smoke do to elastin. In the Nambour trial, daily sunscreen users showed no detectable increase in skin aging over 4.5 years — 24% less than discretionary users (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>). Skin biopsies from 69 people found smokers' elastic fibres altered in proportion to cumulative tobacco dose, acting additively with solar elastosis (<a href="https://pubmed.ncbi.nlm.nih.gov/17199572/" rel="noopener nofollow" target="_blank">BJD, 2007</a>); the reviews of smoking and sun on aging skin describe the same enzyme-driven breakdown (<a href="https://www.jidonline.org/article/S0022-202X(15)30212-8/fulltext" rel="noopener nofollow" target="_blank">JID review</a>), and among identical twins the smoker sags first (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">twin study</a>). Strong here because, unlike a fold or a jowl, laxity is the skin's own problem and these are the two habits with evidence on the skin's own mechanism.</p>
    `,
  },
  {
    id: 'home-retinoid',
    category: 'home',
    title: 'A retinoid, nightly, for years',
    tldr: 'Eight randomised tretinoin trials in 1,361 patients show fewer fine and coarse wrinkles, through new dermal collagen; the closest thing to rebuilding the dermis in a bottle, and it takes a year. Never a lift.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: the thin, crepey type — the base under every other treatment on this page',
    sessions: 'Nightly, indefinitely',
    downtime: 'Weeks of dryness',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Tretinoin thickens the epidermis and drives fibroblasts to lay down new upper-dermal collagen, which is the tissue laxity lacks; the meta-analysis of eight randomised trials in 1,361 patients found significant improvement in fine and coarse wrinkles over vehicle (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">meta-analysis</a>). No trial has used laxity or a cutometer as its endpoint, and the effect is dermal quality over a year rather than a change in where the skin sits — moderate for this problem, and the base under everything else. The <a href="/wrinkles">wrinkles guide</a> covers the ladder from retinol to tretinoin.</p>
    `,
  },
  {
    id: 'home-collagen',
    category: 'home',
    title: 'Oral collagen peptides',
    tldr: 'A review of 26 studies found 1–12 g a day for 4–12 weeks improved elasticity and hydration; a 19-trial review of 1,125 people agrees; a randomised trial in 79 menopausal women on 5 g a day found elasticity up 8–12% at six months. Consistent, small, and mostly industry-funded.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: menopausal and thin-skinned laxity — with the caveat that the trials are small and the funding is not',
    sessions: 'Daily, 3 months minimum',
    downtime: 'None',
    cost: '€20–60 / month',
    bodyHtml: `
      <p>Hydrolysed collagen peptides are absorbed as small fragments that appear to signal fibroblasts to make more matrix, and the trials measure exactly the property this page is about. A 2023 review of 26 studies, mostly in women, found 1–12 g a day for 4–12 weeks improved skin elasticity and hydration (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10180699/" rel="noopener nofollow" target="_blank">2023 review</a>); a separate review of 19 trials in 1,125 people aged 20–70 reached the same conclusion (<a href="https://onlinelibrary.wiley.com/doi/10.1111/ijd.15518" rel="noopener nofollow" target="_blank">19-trial review</a>); and a randomised controlled study of 79 menopausal women found 5 g a day for six months raised skin elasticity to 108–112% of baseline with hydration up 23%, against negligible change on placebo (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12468524/" rel="noopener nofollow" target="_blank">menopausal RCT</a>). The caveats are the ones the <a href="/collagen">collagen guide</a> spells out: short trials, small samples, cutometer endpoints, and manufacturers paying for most of them. Moderate, honestly held.</p>
      <p class="text-ink/60 text-sm italic">Caveat: this site sells a collagen supplement. The grading above is the same one the collagen guide gives the category, and it would be the same if we did not.</p>
    `,
  },
  {
    id: 'home-actives',
    category: 'home',
    title: 'Vitamin C, niacinamide and the rest of the serum shelf',
    tldr: 'Niacinamide 5% improved elasticity and fine lines in a 12-week split-face RCT; a 5% vitamin C cream reduced furrows over six months. Supporting cast for the thin-skin type; nothing here changes where skin sits.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€15–60 / month',
    bodyHtml: `
      <p>Two actives have controlled trials with elasticity or wrinkles as endpoints: niacinamide 5% reduced fine lines and improved elasticity in a 12-week double-blind split-face trial (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1524-4725.2005.31732" rel="noopener nofollow" target="_blank">Bissett 2005</a>), and a 5% vitamin C cream reduced deep furrows over six months in a double-blind trial (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1034/j.1600-0625.2003.00008.x" rel="noopener nofollow" target="_blank">Humbert 2003</a>). Peptides, growth factors and "firming" complexes are marketed on the same mechanism with less evidence. All of it is dermal quality on the surface layer; none reaches the fat, the bone or the ligaments. The <a href="/wrinkles">wrinkles guide</a> grades the shelf.</p>
    `,
  },
  {
    id: 'home-weight',
    category: 'home',
    title: 'Lose weight slowly, and not past the face',
    tldr: 'Deep facial fat goes with body fat; after bariatric-scale loss faces read about five years older, and the GLP-1 medicines have made rapid loss routine. Slow loss gives skin a year to retract; budget for volume at the end.',
    evidence: 'emerging',
    focus: 'structure',
    sessions: 'Ongoing',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Nobody should keep weight for a face, and the trade should be known. Imaging shows deep and superficial facial fat both lost with weight loss and the midface losing most (<a href="https://www.plasticsurgery.org/news/press-releases/how-fat-loss-accelerates-facial-aging" rel="noopener nofollow" target="_blank">ASPS</a>); after massive loss, faces were judged about five years older (<a href="https://academic.oup.com/asjopenforum/article/doi/10.1093/asjof/ojae069/7739023" rel="noopener nofollow" target="_blank">systematic review</a>); and the GLP-1 literature reports laxity, volume loss and hair shedding in proportion to weight lost, with possible direct effects on the cells that rebuild skin (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12232544/" rel="noopener nofollow" target="_blank">Ozempic-face review</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13385476/" rel="noopener nofollow" target="_blank">mechanisms review</a>). Slow loss lets younger skin retract; older skin will not, and the plan is volume replaced and, for a large envelope, surgery. A small series reports diluted calcium hydroxylapatite preserving facial volume during GLP-1 weight loss (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12538281/" rel="noopener nofollow" target="_blank">series</a>). Emerging because nobody has randomised the pace of a diet.</p>
    `,
  },
  {
    id: 'home-sleep-sugar',
    category: 'home',
    title: 'Sleep, and less sugar',
    tldr: 'Two nights of four-hour sleep measurably reduced elasticity in 32 women in their forties, more than any other skin property; sugar-crosslinked collagen (glycation) tracks age and body-mass index and stiffens skin. Cheap, real, and small.',
    evidence: 'emerging',
    focus: 'hormones',
    sessions: 'Every night',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Skin repairs at night, and the deficit shows first in recoil: when 32 Korean women in their forties slept eight hours a night for a week and then four, hydration fell after one night and elasticity was the property most affected, with wrinkles and gloss worsening from day one (<a href="https://pubmed.ncbi.nlm.nih.gov/31692145/" rel="noopener nofollow" target="_blank">sleep-restriction study</a>; <a href="https://www.sciencedirect.com/science/article/am/pii/S1389945721005761" rel="noopener nofollow" target="_blank">24-woman study</a>). Sugar stiffens what is left: advanced glycation end-products, measured by skin autofluorescence, accumulate with age and body-mass index and track the loss of elasticity (<a href="https://pubmed.ncbi.nlm.nih.gov/18334287/" rel="noopener nofollow" target="_blank">glycation study</a>), and cross-linked collagen neither stretches nor repairs (<a href="https://www.skintherapyletter.com/aging-skin/glycation/" rel="noopener nofollow" target="_blank">review</a>). Emerging because the studies are small and observational; free because the fixes are.</p>
    `,
  },
  {
    id: 'home-microcurrent',
    category: 'home',
    title: 'Microcurrent and electrical muscle-toning devices',
    tldr: 'A randomised, partially blinded trial of 108 women found more than 80% reporting firmer, lifted skin after 12 weeks against under 5% of controls, with cheek-muscle thickness up 19% on ultrasound; the manufacturer studies since are single-arm. Muscle tone, self-reported, twenty minutes a day.',
    evidence: 'emerging',
    focus: 'structure',
    sessions: '20 minutes, 5 days a week',
    downtime: 'None',
    cost: '€200–500 device',
    bodyHtml: `
      <p>Microcurrent devices pass a small current through the facial muscles to make them contract, on the theory that a toned muscle supports the skin above it. The one randomised trial is better than the category's reputation: 108 women aged 32–58 used a neuromuscular electrical-stimulation device for 20 minutes a day, five days a week, for 12 weeks, and more than 80% reported improved firming, tone and lift against under 5% of controls, with zygomaticus muscle thickness up 18.6% on imaging (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/jocd.12007" rel="noopener nofollow" target="_blank">Kavanagh 2012</a>). It was partially blinded and self-reported, and the leading consumer brand's own studies are single-arm (<a href="https://www.mynuface.com/pages/microcurrent-101" rel="noopener nofollow" target="_blank">manufacturer studies</a>). Plausible for muscle tone, nothing for the dermis, and it stops when you stop.</p>
    `,
  },
  {
    id: 'home-led',
    category: 'home',
    title: 'Red and near-infrared LED',
    tldr: 'A 136-person randomised trial found improved complexion, roughness and collagen density on ultrasound at clinic doses; a home mask has a sham-controlled crow’s-feet trial. Dermal quality at a fraction of clinic energy; no laxity endpoint.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '3–5× a week',
    downtime: 'None',
    cost: '€200–500 device',
    bodyHtml: `
      <p>Red and near-infrared light stimulate fibroblasts, and the reference trial randomised 136 people to light or no treatment with measurable gains in complexion, roughness and collagen density on ultrasound (<a href="https://journals.sagepub.com/doi/10.1089/pho.2013.3616" rel="noopener nofollow" target="_blank">Wunsch &amp; Matuschka 2014</a>); a home mask has a sham-controlled trial for crow's feet (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11835066/" rel="noopener nofollow" target="_blank">sham-controlled trial</a>). Nobody has measured laxity, consumer devices deliver a fraction of the clinic dose, and the mechanism is dermal quality rather than tightening. The <a href="/red-light-therapy">red-light guide</a> covers doses and devices.</p>
    `,
  },
  {
    id: 'home-gadgets',
    category: 'home',
    title: 'Home radiofrequency, gua sha, rollers and facial exercise',
    tldr: 'Home radiofrequency has manufacturer-run studies at a fraction of clinic energy; massage moves fluid for an hour; the one facial-exercise pilot found fuller cheeks in 16 women with no control group. Ritual, not treatment.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'As desired',
    downtime: 'None',
    cost: '€15–400',
    bodyHtml: `
      <p>Home radiofrequency wands deliver a fraction of clinic energy and rest on manufacturer-run studies (<a href="https://www.researchgate.net/publication/50393607_Home-use_TriPollar_RF_device_for_facial_skin_tightening_Clinical_study_results" rel="noopener nofollow" target="_blank">manufacturer study</a>); gua sha and rollers move lymph and leave the face briefly firmer; the 20-week facial-exercise pilot in 16 women found blinded raters judging cheeks fuller, with no control group and no laxity measure (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2666801" rel="noopener nofollow" target="_blank">Alam 2018</a>). None reaches the dermis at a dose that remodels it or the structure beneath. Pleasant, harmless, not a line on the plan.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-hrt',
    category: 'inj',
    title: 'Menopausal hormone therapy',
    tldr: 'A meta-analysis of 15 studies in 1,589 women: significant gains in skin elasticity, thickness and collagen content; randomised placebo-controlled trials of 40 and 41 women found elasticity up at the jaw and collagen up 6.5% at six months. A decision about menopause, taken with a menopause clinician, that happens to include the skin.',
    evidence: 'moderate',
    focus: 'hormones',
    note: 'Best for: the woman whose skin changed fast around menopause and who has other reasons to consider hormone therapy',
    sessions: 'Daily; reviewed yearly',
    downtime: 'None',
    cost: '€10–40 / month',
    bodyHtml: `
      <p>Estrogen maintains dermal collagen, hyaluronic acid and elastic fibres, and replacing it after menopause is the one systemic intervention on this page with pooled evidence: a 2023 systematic review and meta-analysis of 15 studies in 1,589 women found menopausal hormone therapy significantly increased skin elasticity (standardised mean difference 0.28), skin thickness (1.27) and collagen content (2.01), with reduced wrinkle severity (<a href="https://pubmed.ncbi.nlm.nih.gov/38230593/" rel="noopener nofollow" target="_blank">meta-analysis</a>). The trials underneath are small and consistent: 40 postmenopausal women randomised double-blind to estradiol–dydrogesterone or placebo for seven cycles showed significantly increased elasticity at the jaw and increased skin thickness (<a href="https://pubmed.ncbi.nlm.nih.gov/17653959/" rel="noopener nofollow" target="_blank">2007 RCT</a>); 41 women on cyclical estradiol valerate for six months gained 6.5% collagen against placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/10687834/" rel="noopener nofollow" target="_blank">2000 RCT</a>); the narrative reviews add that results are inconsistent across older trials (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.70393" rel="noopener nofollow" target="_blank">2025 review</a>).</p>
      <p>Nobody should start hormone therapy for skin, and the guidelines do not recommend it for that; the Menopause Society's position statement sets out for whom the benefits outweigh the risks — symptoms, bone, timing within ten years of menopause, transdermal routes for clot risk (<a href="https://journals.lww.com/menopausejournal/fulltext/2022/07000/the_2022_hormone_therapy_position_statement_of_the.4.aspx" rel="noopener nofollow" target="_blank">position statement</a>). For a woman who is a candidate on those grounds, firmer skin is a documented side benefit. The <a href="/anti-aging-50s">50s guide</a> covers the decision.</p>
    `,
  },
  {
    id: 'inj-volume',
    category: 'inj',
    title: 'Deep volume replacement (hyaluronic acid or fat) for the deflated frame',
    tldr: 'For descent rather than laxity: midface volume restored in a 235-patient randomised trial with 79% still rating cheeks improved at two years; fat matched hyaluronic acid over nine months in a 62-patient comparison. Refills the frame; does nothing for crepe.',
    evidence: 'moderate',
    focus: 'structure',
    note: 'Best for: the deflated face — temples, cheeks, jaw — where the skin is hanging off a smaller frame',
    sessions: 'Every 12–24 months',
    downtime: '3–7 days of swelling',
    cost: '€500–1,500 per region',
    bodyHtml: `
      <p>Where the frame has shrunk, the envelope hangs, and the fix is the frame. Restoring midface volume with a firm hyaluronic gel had a control group in its pivotal programme — 235 patients, 85.6% improved at least one grade at six months — and 79% still rated their cheeks improved at two years (<a href="https://pubmed.ncbi.nlm.nih.gov/24093664/" rel="noopener nofollow" target="_blank">pivotal RCT</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4482214/" rel="noopener nofollow" target="_blank">two-year outcomes</a>); autologous fat matched hyaluronic acid over nine months in a 62-patient randomised comparison for the folds (<a href="https://pubmed.ncbi.nlm.nih.gov/28294535/" rel="noopener nofollow" target="_blank">Hu 2017</a>). It is the right tool for the deflated type and the wrong one for thin, crepey skin, which shows every gel beneath it; and hyaluronic gel persists for years on MRI, so the overfilled face is the risk of treating laxity with volume (<a href="https://journals.lww.com/prsgo/fulltext/2024/07000/hyaluronic_acid_filler_longevity_in_the_mid_face_.36.aspx" rel="noopener nofollow" target="_blank">MRI review</a>). The <a href="/fillers">filler guide</a> grades the products.</p>
    `,
  },
  {
    id: 'inj-plla',
    category: 'inj',
    title: 'Poly-L-lactic acid (Sculptra and successors)',
    tldr: 'A collagen stimulator with randomised trials in the lower face lasting up to 25 months and a 252-person double-blind trial toward two years; the tool for a face that has deflated everywhere and thinned with it. Slow, no reversal, nodules if placed wrong.',
    evidence: 'moderate',
    focus: 'structure',
    sessions: '2–3 sessions a month apart; repeat every 2 years',
    downtime: '2–3 days; five days of massage',
    cost: '€500–800 per vial, usually 2–4',
    bodyHtml: `
      <p>Poly-L-lactic acid provokes fibroblasts to build collagen over months, so it adds dermal substance and deep support at once — the combination the deflated, thinned face needs. The evidence sits in the nasolabial fold: a randomised evaluator-blinded trial of 233 patients found it more effective than collagen from month 3 to 13 with correction persisting to 25 months (<a href="https://www.jaad.org/article/S0190-9622(09)00962-1/abstract" rel="noopener nofollow" target="_blank">Narins 2010</a>), and a 252-person multicentre double-blind randomised trial of a microsphere formulation found durability toward two years (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12903950/" rel="noopener nofollow" target="_blank">2024 RCT</a>). No trial has used laxity as its endpoint, the result arrives over months and depends on the injector, and nothing dissolves it. The <a href="/regenerative-aesthetics">regenerative guide</a> grades the biostimulators.</p>
    `,
  },
  {
    id: 'inj-profhilo',
    category: 'inj',
    title: 'Bioremodelling hyaluronic acid (Profhilo)',
    tldr: 'A systematic review of 9 studies in 278 people found cutometer elasticity parameters improved across face, neck, arms and abdomen, mostly in uncontrolled studies; a 12-woman triple-blind trial measured texture; a 20-person randomised trial found no advantage added to toxin. Hydration and a little dermal quality.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '2 sessions a month apart, every 6–9 months',
    downtime: '1–3 days of bumps',
    cost: '€300–450 per session',
    bodyHtml: `
      <p>Five boluses of a high-and-low-molecular-weight hyaluronic complex per side of the face spread through the dermis to hydrate it and, the claim goes, remodel it. The systematic review of nine studies in 278 participants found statistically significant improvement or a trend in viscoelasticity and elasticity parameters, plus hydration, density and laxity ratings, with mild adverse events resolving within 72 hours — and most of the studies uncontrolled (<a href="https://pubmed.ncbi.nlm.nih.gov/41920062/" rel="noopener nofollow" target="_blank">systematic review</a>). The controlled evidence is smaller: a randomised triple-blind split-face trial of 12 women measured dermal thickness and texture (<a href="https://link.springer.com/article/10.1007/s00266-026-05634-4" rel="noopener nofollow" target="_blank">triple-blind RCT</a>), and a 20-person randomised trial found adding it to toxin for the upper face gave no clinical or ultrasound advantage at three months (<a href="https://pubmed.ncbi.nlm.nih.gov/42063688/" rel="noopener nofollow" target="_blank">2026 RCT</a>). Hydration for the thin-skin type; not a lift, and priced as one. The <a href="/fillers">filler guide</a> grades the boosters.</p>
    `,
  },
  {
    id: 'inj-caha-hyperdilute',
    category: 'inj',
    title: 'Diluted calcium hydroxylapatite as a collagen stimulator',
    tldr: 'Small series with objective endpoints: upper-arm elasticity from 72 to 82 cutometer units and abdominal dermal thickness up 27% at three months; lower-face jowl volume down 41% in 22 patients. Consistent, uncontrolled, no reversal.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '2 sessions a month apart; repeat yearly',
    downtime: '2–5 days',
    cost: '€400–700 per session',
    bodyHtml: `
      <p>Calcium hydroxylapatite diluted one-to-one or more and fanned through the dermis and superficial fat provokes collagen and elastin around each microsphere; biopsy work shows type I and III collagen and elastin rising. The measurements come from small series: in ten women, upper-arm skin elasticity rose from 72 to 82 cutometer units at three months, and in another ten, abdominal dermal thickness rose 27% on ultrasound, with 90% rated much improved (<a href="https://pubmed.ncbi.nlm.nih.gov/28915285/" rel="noopener nofollow" target="_blank">case series</a>); a retrospective lower-face series of 22 patients measured jowl volume down 41% and fold depth down 27–28% at day 150 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12686807/" rel="noopener nofollow" target="_blank">lower-face series</a>); protocol papers cover face, neck, décolletage and hands (<a href="https://www.tandfonline.com/doi/full/10.2147/CCID.S420068" rel="noopener nofollow" target="_blank">protocols</a>). No randomised trial, and no enzyme to remove it. Emerging, and the most objectively measured of the biostimulators. The <a href="/regenerative-aesthetics">regenerative guide</a> covers the class.</p>
    `,
  },
  {
    id: 'inj-polynucleotides',
    category: 'inj',
    title: 'Polynucleotides',
    tldr: 'A systematic review of 9 low-to-moderate-quality studies in 219 patients reports improved texture and elasticity; a 30-person split-face randomised trial favoured them over hyaluronic acid for elasticity. Salmon-DNA fragments with a marketing budget ahead of the evidence.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '3 sessions 2–4 weeks apart',
    downtime: '1–2 days',
    cost: '€250–450 per session',
    bodyHtml: `
      <p>Purified DNA fragments from fish injected into the dermis are claimed to signal repair and improve turgor. The systematic review found nine studies of low to moderate quality in 219 patients, reporting reduced wrinkles, better texture and enhanced elasticity with statistically significant results in several, mild transient side effects, and a call for higher-quality research (<a href="https://pubmed.ncbi.nlm.nih.gov/39645667/" rel="noopener nofollow" target="_blank">systematic review</a>); a randomised split-face trial of 30 people favoured polynucleotides over hyaluronic acid for elasticity and texture (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11845969/" rel="noopener nofollow" target="_blank">review</a>). Emerging on that basis; skin quality in the thin-skin type, nothing for descent. The <a href="/regenerative-aesthetics">regenerative guide</a> grades the class.</p>
    `,
  },
  {
    id: 'inj-prp-exosomes',
    category: 'inj',
    title: 'Platelet-rich plasma and exosomes',
    tldr: 'Split-face PRP trials show modest texture gains, mostly with needling, and nothing that lifts; exosome products carry regulator safety alerts and no controlled laxity data. Skin-quality add-ons sold as tightening.',
    evidence: 'limited',
    focus: 'skin',
    sessions: '3 sessions',
    downtime: '1–3 days',
    cost: '€300–800 per session',
    bodyHtml: `
      <p>Platelet-rich plasma has three randomised split-face trials showing modest gains in texture and fine lines, largely when combined with microneedling, and none measuring lift or laxity (<a href="https://www.tandfonline.com/doi/full/10.2147/CCID.S340434" rel="noopener nofollow" target="_blank">split-face trials</a>); a 2025 review found skin thickness improved in 80% of studies but wrinkles in only 40% (<a href="https://pubmed.ncbi.nlm.nih.gov/40167104/" rel="noopener nofollow" target="_blank">2025 review</a>). Exosome products are unapproved biologics with regulator alerts and no controlled trial for laxity (<a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">FDA notification</a>). Defensible as a skin-quality add-on after a device; a "PRP lift" is a name. The <a href="/regenerative-aesthetics">regenerative guide</a> covers both.</p>
    `,
  },
  {
    id: 'inj-threads',
    category: 'inj',
    title: 'Thread lifts',
    tldr: 'A randomised trial found the lift gone by 60 days regardless of thread count; a systematic review puts complications at about 27% — dimpling 11%, bruising 8%, extrusion and migration. Threads hitch tissue; they do not tighten skin.',
    evidence: 'limited',
    focus: 'structure',
    sessions: 'Every 12–18 months',
    downtime: '3–7 days; dimpling for weeks',
    cost: '€800–2,500',
    bodyHtml: `
      <p>Barbed absorbable threads catch tissue and hitch it upward for a while; they do not change the skin's recoil, and the lift does not last. In a randomised trial, the elevation had returned to baseline by 60 days regardless of how many threads were placed (<a href="https://academic.oup.com/asjopenforum/article/doi/10.1093/asjof/ojaf002/7951699" rel="noopener nofollow" target="_blank">randomised trial</a>); the meta-analysis of thread lifting finds effects fading within a year (<a href="https://dpcj.org/index.php/dpc/article/view/5172" rel="noopener nofollow" target="_blank">meta-analysis</a>); a systematic review puts the complication rate near 27% — dimpling 11%, bruising 8%, extrusion and migration (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15709" rel="noopener nofollow" target="_blank">systematic review</a>; <a href="https://www.frontiersin.org/journals/surgery/articles/10.3389/fsurg.2026.1769458/full" rel="noopener nofollow" target="_blank">complications meta-analysis</a>). Limited for laxity because they treat neither of its causes. The <a href="/jowls">jowls guide</a> grades them for the lower face.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-facelift',
    category: 'clinic',
    title: 'Facelift and neck lift',
    tldr: 'The only treatment that removes skin and repositions what is under it: in a meta-analysis of 2,896 patients, 94% were satisfied after a deep-plane lift and 88% after a SMAS lift, with haematoma in 1.6%, temporary nerve injury in 0.85% and skin necrosis in 0.4%. A decade of result; two to three weeks off.',
    evidence: 'strong',
    focus: 'structure',
    note: 'Best for: class 6 and above on the laxity scale, the descended lower face and neck, and the envelope left by large weight loss',
    sessions: 'Once; 10–15 years',
    downtime: '2–3 weeks; final at 6–12 months',
    cost: '€8,000–20,000 (UK £8,000–15,000)',
    bodyHtml: `
      <p>Every non-surgical treatment on this page contracts or rebuilds tissue by a few per cent; a facelift releases the ligaments, repositions the descended fat and SMAS layer, and removes the skin that no longer fits — the only treatment that addresses both halves of sagging at once. The meta-analysis of deep-plane against SMAS techniques in 2,896 patients found 94% satisfied after deep-plane lifts and 88% after SMAS, with haematoma in 1.6%, temporary facial-nerve injury in 0.85% and skin necrosis in 0.4% (<a href="https://link.springer.com/article/10.1007/s00266-025-05118-x" rel="noopener nofollow" target="_blank">meta-analysis</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10819192/" rel="noopener nofollow" target="_blank">SMAS review</a>), and the complication meta-analysis gives the same order of risk (<a href="https://pubmed.ncbi.nlm.nih.gov/30768122/" rel="noopener nofollow" target="_blank">complication meta-analysis</a>). Strong because it is the reference every device trial is measured against, on cohort evidence rather than randomised trials — nobody randomises a facelift against a machine. It does not treat crepe, which is why surgeons pair it with resurfacing and a retinoid, and it lasts a decade in a face that keeps aging. The <a href="/jowls">jowls guide</a>, the <a href="/neck">neck guide</a> and the <a href="/anti-aging-50s">50s guide</a> cover the surgery.</p>
    `,
  },
  {
    id: 'clinic-hifu',
    category: 'clinic',
    title: 'Microfocused ultrasound (Ultherapy and successors)',
    tldr: 'The best-studied device: a randomised trial with 3D imaging found clinically significant tightening in 70% at three months; meta-analyses find measurable but modest lifting; a retrospective series found a fifth improved and a sixth worse. One session a year, no downtime, unpredictable.',
    evidence: 'moderate',
    focus: 'device',
    note: 'Best for: mild to moderate laxity — classes 2 to 5 — in someone who wants no downtime and a modest, real change',
    sessions: 'Once a year',
    downtime: 'None; days of tenderness',
    cost: '€1,500–3,500 full face and neck',
    bodyHtml: `
      <p>Focused ultrasound heats points 1.5–4.5 mm deep — the dermis and the fibrous SMAS layer — to contract them and provoke collagen over three to six months, and it has more controlled evidence than any other device. A randomised controlled trial with 3D imaging found clinically significant tightening in 70% of patients at three months (<a href="https://link.springer.com/article/10.1007/s13555-023-01078-9" rel="noopener nofollow" target="_blank">RCT</a>); the meta-analysis of high-intensity focused ultrasound finds significant, modest improvement in facial laxity (<a href="https://pubmed.ncbi.nlm.nih.gov/32026164/" rel="noopener nofollow" target="_blank">HIFU meta-analysis</a>), as do the meta-analysis and systematic reviews of the visualised device (<a href="https://academic.oup.com/asj/article/45/3/NP86/7900203" rel="noopener nofollow" target="_blank">MFU-V meta-analysis</a>; <a href="https://www.mdpi.com/1660-4601/20/2/1522" rel="noopener nofollow" target="_blank">systematic review</a>); and a retrospective series is the honest counterweight — about a fifth improved and a sixth looked worse (<a href="https://pubmed.ncbi.nlm.nih.gov/32770566/" rel="noopener nofollow" target="_blank">retrospective study</a>). Millimetres of tightening for a year in most, nothing in some, fat loss in a thin face if the depth is wrong; the <a href="/jowls">jowls guide</a> grades it in detail.</p>
    `,
  },
  {
    id: 'clinic-rf-mono',
    category: 'clinic',
    title: 'Monopolar radiofrequency (Thermage and successors)',
    tldr: 'A 2025 prospective randomised controlled study found long-term skin tightening with a modern monopolar device; the original 20-patient study found two treatments improved laxity where one did not. One session, no downtime, subtle, and the right depth for thin crepey skin.',
    evidence: 'moderate',
    focus: 'device',
    sessions: '1–2 a year',
    downtime: 'None',
    cost: '€1,500–3,500 (UK £600–2,000 per session)',
    bodyHtml: `
      <p>Monopolar radiofrequency heats the whole dermis and the septa beneath it in bulk rather than in points, contracting collagen and provoking remodelling over months — the mechanism best suited to thin, crepey laxity rather than descent. A prospective randomised controlled study of a modern monopolar device found long-term skin tightening (<a href="https://pubmed.ncbi.nlm.nih.gov/39957006/" rel="noopener nofollow" target="_blank">2025 RCT</a>), and the original study randomised 20 patients to one or two treatments and found significant improvement only with two (<a href="https://pubmed.ncbi.nlm.nih.gov/15545529/" rel="noopener nofollow" target="_blank">2004 study</a>); a bimodal system reports lower-face fold reductions over six months (<a href="https://pubmed.ncbi.nlm.nih.gov/42187039/" rel="noopener nofollow" target="_blank">2026 study</a>). Subtle, cumulative, and the device with the least to lose for a thin face. The <a href="/jowls">jowls guide</a> grades the devices.</p>
    `,
  },
  {
    id: 'clinic-renuvion',
    category: 'clinic',
    title: 'Subdermal helium plasma (Renuvion) for the neck and body',
    tldr: 'Cleared for loose neck skin on a prospective trial in which 82.5% improved at six months; a meta-analysis of 34 studies in 3,508 people found 92% satisfaction with complications in 5% used alone and 15% with excisional surgery. A surgical-adjacent procedure under a regulator’s safety communication.',
    evidence: 'moderate',
    focus: 'device',
    sessions: 'Once',
    downtime: '1–2 weeks; swelling for weeks',
    cost: '€4,000–8,000',
    bodyHtml: `
      <p>A probe passed under the skin through small incisions delivers helium plasma energised by radiofrequency, heating the underside of the dermis and the fibrous septa to contract them — surgery-adjacent, done under sedation, usually with liposuction. Its neck clearance rests on a prospective FDA-reviewed trial in which 82.5% of patients showed improvement at day 180 with no serious adverse events (<a href="https://academic.oup.com/asj/article/43/10/1174/7072381" rel="noopener nofollow" target="_blank">FDA-IDE trial</a>), and a systematic review and meta-analysis of 34 studies in 3,508 treated people found 92% patient satisfaction and 86% improvement on independent photographic review, with pooled complications of 5% for plasma alone, 8% with liposuction and 15% with excisional procedures — seromas, transient nerve effects, wound problems (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13293070/" rel="noopener nofollow" target="_blank">meta-analysis</a>). The FDA has issued a safety communication about burns, subcutaneous emphysema and other harms from use outside its clearances (<a href="https://www.fda.gov/medical-devices/safety-communications/update-use-renuvionj-plasma-device-certain-aesthetic-procedures-fda-safety-communication" rel="noopener nofollow" target="_blank">FDA safety communication</a>). Moderate for neck and body laxity in a surgeon's hands; unrelated to the handheld "plasma pens" sold for skin tightening, which have no comparable evidence. The <a href="/neck">neck guide</a> covers the neck.</p>
    `,
  },
  {
    id: 'clinic-rf-microneedling',
    category: 'clinic',
    title: 'Radiofrequency microneedling (Morpheus8 and others)',
    tldr: 'Meta-analyses of randomised trials support it for texture and scars; its 2024 clearance for soft-tissue contraction rests on a retrospective series with 93% satisfaction and a 1.4-point laxity gain; a scoping review puts it at about 37% of a facelift’s laxity improvement. An FDA alert on burns and documented fat loss.',
    evidence: 'emerging',
    focus: 'device',
    sessions: '3, a month apart; repeat yearly',
    downtime: '2–4 days',
    cost: '€500–1,000 per session (UK £350–1,000)',
    bodyHtml: `
      <p>Insulated needles deliver radiofrequency heat into the dermis and superficial fat at set depths, and the controlled evidence is good for what it measured: a meta-analysis of 12 randomised trials and a network meta-analysis support it for wrinkles, texture and scars (<a href="https://pubmed.ncbi.nlm.nih.gov/35426044/" rel="noopener nofollow" target="_blank">12-RCT meta-analysis</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12483851/" rel="noopener nofollow" target="_blank">network meta-analysis</a>). For laxity the evidence is thinner: the 2024 clearance for soft-tissue contraction rests on a retrospective series with 93% satisfaction and a 1.4-point laxity improvement (<a href="https://www.biospace.com/morpheus8-secures-first-and-only-fda-clearance-for-soft-tissue-contraction-for-fractional-radiofrequency-microneedling" rel="noopener nofollow" target="_blank">clearance</a>), a scoping review estimates it at about 37% of a facelift's laxity improvement (<a href="https://derma.jmir.org/2026/1/e78385" rel="noopener nofollow" target="_blank">scoping review</a>), and the regulator has alerted clinicians to burns and scarring with the class, alongside documented facial fat loss at depth (<a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">FDA alert</a>). Good for texture with a modest tightening bonus; the <a href="/microneedling">microneedling guide</a> grades the devices.</p>
    `,
  },
  {
    id: 'clinic-sofwave',
    category: 'clinic',
    title: 'Parallel-beam ultrasound (Sofwave)',
    tldr: 'A shallower ultrasound heating the mid-dermis: in 13 women, 85% showed moderate-to-excellent laxity improvement at two months with elastic-fibre density up on biopsy; the pivotal data are a manufacturer summary in which blinded reviewers picked the after-photo about 80% of the time. No head-to-head, no long-term data.',
    evidence: 'emerging',
    focus: 'device',
    sessions: 'Once a year',
    downtime: 'None',
    cost: '€1,500–2,800 (UK £1,400–2,500)',
    bodyHtml: `
      <p>Synchronous parallel ultrasound beams heat the mid-dermis at 0.5–2 mm to 60–70 °C, contracting collagen and provoking remodelling where thin skin is thin. The published evidence is a clinical and histological study of 13 women with darker skin types treated once: 85% showed moderate-to-excellent improvement on standardised laxity scales at two months, elastic-fibre density rose significantly on biopsy, and there was no fat atrophy or prolonged numbness (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845918/" rel="noopener nofollow" target="_blank">histology study</a>; <a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.16098" rel="noopener nofollow" target="_blank">Gold 2024</a>), and a manufacturer summary of its pivotal brow-and-neck study in which blinded reviewers identified the post-treatment photograph 79–80% of the time (<a href="https://api.sofwave.com/app/uploads/2024/12/MK00105_B-Eybrow-Neck-and-Submental-Lifting_Clinical-Study-Summary.pdf" rel="noopener nofollow" target="_blank">study summary</a>). The right depth for crepe with less pain and fat risk than focused ultrasound; no comparison against it, and no year-two data.</p>
    `,
  },
  {
    id: 'clinic-emface',
    category: 'clinic',
    title: 'Synchronised radiofrequency with muscle stimulation (Emface)',
    tldr: 'An open-label multicentre study of 33 patients: wrinkles down 35% on 3D imaging at three months after four sessions, 88% improved on a global scale, no adverse events, manufacturer-disclosed. No laxity measurement and no control group.',
    evidence: 'emerging',
    focus: 'device',
    sessions: '4 weekly sessions; repeat yearly',
    downtime: 'None',
    cost: '€800–1,200 per session',
    bodyHtml: `
      <p>Pads on the forehead and cheeks deliver radiofrequency to the dermis and high-intensity electrical stimulation to the lifting muscles at the same time, on the theory that a toned muscle supports the skin. The evidence is one open-label multicentre study of 33 patients (mean age 58) given four weekly 20-minute sessions: wrinkle severity on 3D imaging improved 20% immediately, 23% at one month and 35% at three, 88% improved at least one point on the global scale, the wrinkle-and-elastosis score fell from 5.6 to 3.8, and no adverse events occurred, with the manufacturer disclosed (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12344545/" rel="noopener nofollow" target="_blank">multicentre study</a>); a pilot measured muscle tone on ultrasound (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12152478/" rel="noopener nofollow" target="_blank">pilot study</a>). No control group and no laxity measurement, which keeps a comfortable, plausible device at emerging.</p>
    `,
  },
  {
    id: 'clinic-laser',
    category: 'clinic',
    title: 'Ablative and fractional laser resurfacing',
    tldr: 'Fractional CO₂ produces measurable tightening of 2–3 mm and reduced wrinkles in every facial zone on profilometry; it rebuilds the dermis of crepey skin and does nothing for descent. Days to two weeks of downtime, pigment risk in darker skin.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '1–3',
    downtime: '5–14 days by depth',
    cost: '€800–2,500',
    bodyHtml: `
      <p>Ablative lasers vaporise columns or sheets of skin and heat the dermis beneath, and the skin that regrows is thicker with reorganised collagen — the treatment for the crepey, sun-damaged surface of lax skin. Fractional CO₂ has been shown to produce tightening of 2–3 mm with collagen remodelling for months (<a href="https://www.ncbi.nlm.nih.gov/books/NBK560544/" rel="noopener nofollow" target="_blank">StatPearls</a>) and, on profilometry after three sessions, significant wrinkle reduction in every facial zone (<a href="https://academic.oup.com/bjd/article-abstract/170/4/858/6614960" rel="noopener nofollow" target="_blank">BJD, 2014</a>); a 2024 meta-analysis pools the class for photoaging (<a href="https://pubmed.ncbi.nlm.nih.gov/39240125/" rel="noopener nofollow" target="_blank">2024 meta-analysis</a>). Emerging for laxity because the endpoints are wrinkles and photoaging rather than skin position; the right tool for crepe after a facelift or on a face that is deflated but not descended. The <a href="/laser-ipl">laser guide</a> covers the devices and the pigment caveats.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-devices',
    category: 'safety',
    title: 'Energy devices: burns, fat loss, nerves and the gaunt face',
    tldr: 'Focused ultrasound at the wrong depth melts the fat a thin face cannot spare; radiofrequency microneedling carries a regulator’s alert on burns and scars; helium plasma has a safety communication on burns and emphysema; the temple’s nerve branch runs where brow passes go. The commoner harm is money spent on the wrong rung.',
    bodyHtml: `
      <p>Every device on this page works by controlled injury, and the harms follow the physics. Focused ultrasound aimed too deep or too densely in a thin face dissolves superficial fat — the hollowed look that appears months later and cannot be undone — and a retrospective series found a sixth of patients looking worse (<a href="https://pubmed.ncbi.nlm.nih.gov/32770566/" rel="noopener nofollow" target="_blank">retrospective study</a>); the frontal branch of the facial nerve crosses the temple where brow passes go, and transient weakness is a recognised risk. Radiofrequency microneedling carries the FDA's alert on burns, scarring and fat loss (<a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">FDA alert</a>), and subdermal helium plasma a safety communication on burns and subcutaneous emphysema when used outside its clearances (<a href="https://www.fda.gov/medical-devices/safety-communications/update-use-renuvionj-plasma-device-certain-aesthetic-procedures-fda-safety-communication" rel="noopener nofollow" target="_blank">FDA safety communication</a>). Handheld "plasma pens" sold for tightening produce burns and scars with no comparable evidence. Darker skin darkens after any of them if energy or cooling is wrong. Ask who holds the handpiece, how many faces a month, and what they do when a patient is thin.</p>
    `,
  },
  {
    id: 'safety-hrt',
    category: 'safety',
    title: 'Hormone therapy: the risks are about menopause, not skin',
    tldr: 'Clots with oral estrogen, a small breast-cancer signal with combined therapy beyond about five years, timing within ten years of menopause; transdermal routes and a menopause clinician change the arithmetic. Firmer skin is a side benefit, never the indication.',
    bodyHtml: `
      <p>Menopausal hormone therapy is a prescription with a risk profile that has nothing to do with skin: venous thromboembolism with oral estrogen (much less with transdermal), a small increase in breast-cancer risk with combined estrogen–progestogen therapy beyond about five years, and a benefit–risk balance that is favourable when started within ten years of menopause or before 60 for symptoms or bone and becomes less so later (<a href="https://journals.lww.com/menopausejournal/fulltext/2022/07000/the_2022_hormone_therapy_position_statement_of_the.4.aspx" rel="noopener nofollow" target="_blank">position statement</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38691368/" rel="noopener nofollow" target="_blank">JAMA review of the WHI trials</a>). Nobody should take it for skin, no guideline recommends it for skin, and compounded "bioidentical" preparations sold through aesthetic clinics lack the regulation of licensed products (<a href="https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/11/compounded-bioidentical-menopausal-hormone-therapy" rel="noopener nofollow" target="_blank">ACOG</a>). The decision belongs with a menopause clinician; the <a href="/anti-aging-50s">50s guide</a> lays it out.</p>
    `,
  },
  {
    id: 'safety-injectables',
    category: 'safety',
    title: 'Biostimulators and boosters: nodules, no eraser, and the unregulated',
    tldr: 'PLLA and calcium hydroxylapatite form nodules when placed too superficially and cannot be dissolved; delayed nodules follow 0.02–4% of any filler; polynucleotides are animal-derived; exosomes are unapproved biologics with regulator alerts. Start with what reverses.',
    bodyHtml: `
      <p>The collagen stimulators earn their duration by being permanent enough to matter: poly-L-lactic acid produces papules and nodules when placed too superficially or massaged too little, diluted calcium hydroxylapatite lumps in thin skin, and neither has an enzyme; delayed-onset nodules follow 0.02–4.25% of treatments with any filler, often after an infection or vaccine (<a href="https://jcadonline.com/cmac-delayed-onset-nodules/" rel="noopener nofollow" target="_blank">review</a>). Bioremodelling hyaluronic acid's side effects are mild and short in the systematic review. Polynucleotides are purified fish DNA with a short safety record; exosome products are unapproved biologics that the FDA has warned about (<a href="https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes" rel="noopener nofollow" target="_blank">consumer alert</a>). Deep volume filler in a lax face carries the overfilled-face risk as the gel accumulates over years (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13051189/" rel="noopener nofollow" target="_blank">overfilled syndrome</a>). Start with what dissolves; graduate to what lasts only once you know how your face behaves under it.</p>
    `,
  },
  {
    id: 'safety-surgery',
    category: 'safety',
    title: 'Surgery and threads: what goes wrong',
    tldr: 'Facelift in 2,896 patients: haematoma 1.6%, temporary nerve injury 0.85%, skin necrosis 0.4%, higher in smokers; threads dimple, show and extrude in about a quarter; a lift on a thin, crepey face gives a tight crepey face. Match the operation to the type.',
    bodyHtml: `
      <p>The facelift's harms are counted: in the 2,896-patient meta-analysis, haematoma in 1.6%, temporary facial-nerve weakness in 0.85%, skin necrosis in 0.4%, with scars around the ear and months of numbness in most (<a href="https://link.springer.com/article/10.1007/s00266-025-05118-x" rel="noopener nofollow" target="_blank">meta-analysis</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/30768122/" rel="noopener nofollow" target="_blank">complication meta-analysis</a>); smokers' skin necroses more often, which is why surgeons demand weeks off cigarettes. Threads produce dimpling, visible or palpable threads, extrusion and infection in about a quarter of patients (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15709" rel="noopener nofollow" target="_blank">systematic review</a>). The subtler failure is the wrong operation: a lift on skin that is thin and crepey rather than descended produces a tighter crepey face, which is why the pinch test comes before the consultation and why surgeons pair a lift with resurfacing. A surgeon who examines skin quality and asks about weight and hormones before quoting is the one to choose.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-cream',
    category: 'faq',
    title: 'Can a cream tighten sagging skin?',
    tldr: 'No cream moves where skin sits. A retinoid rebuilds dermal collagen over a year and niacinamide improves measured elasticity; "firming" creams tighten for an hour by drying a film on the surface. Skin quality yes, lift no.',
    bodyHtml: `
      <p>Sagging is a change in where the skin sits and in the frame beneath it, and nothing applied to the surface reaches either. What creams can do is rebuild the dermis: a retinoid, with eight randomised trials behind it, thickens the epidermis and lays down new collagen over a year; niacinamide improved measured elasticity in a split-face trial; sunscreen preserves the recoil you have. "Firming" and "lifting" creams work for an hour by drying a film that pulls the surface taut, which is a sensation, not a treatment. Cream is the base of the plan and never its answer.</p>
    `,
  },
  {
    id: 'faq-collagen',
    category: 'faq',
    title: 'Do collagen supplements firm skin?',
    tldr: 'A little, consistently, in small mostly industry-funded trials: elasticity and hydration up over 8–12 weeks in reviews of 19 and 26 studies, and up 8–12% at six months in 79 menopausal women. Worth a three-month trial for thin, menopausal skin; not a lift, and this site sells one.',
    bodyHtml: `
      <p>Hydrolysed collagen peptides have the most trials of any supplement for skin, and they measure the right thing: the reviews of 19 and 26 studies find elasticity and hydration improved over 4–12 weeks at 1–12 g a day, and the randomised trial in 79 menopausal women found elasticity up 8–12% and hydration up 23% at six months on 5 g a day. The effects are small, the trials short and mostly manufacturer-funded, and the endpoint is a cutometer reading rather than a face in a mirror. A three-month trial for thin, menopausal or crepey skin is reasonable; expecting a lift is not. This site sells a collagen supplement, and the <a href="/collagen">collagen guide</a> grades the category the same way.</p>
    `,
  },
  {
    id: 'faq-hrt',
    category: 'faq',
    title: 'Will hormone therapy help my skin?',
    tldr: 'Measurably, per a meta-analysis of 15 studies — elasticity, thickness and collagen all up — and it is a decision about menopause, taken with a menopause clinician on symptoms, bone and timing, in which firmer skin is a documented side benefit.',
    bodyHtml: `
      <p>Yes, in the studies: a meta-analysis of 15 studies in 1,589 women found menopausal hormone therapy increased skin elasticity, thickness and collagen content with less wrinkle severity, and small placebo-controlled trials found elasticity up at the jaw and collagen up 6.5% at six months. It is nevertheless not a skin treatment. The guidelines weigh it on symptoms, bone, cardiovascular timing and cancer history, favour starting within ten years of menopause, and favour transdermal estrogen for clot risk. If you are a candidate on those grounds, your skin benefits; if you are not, no dermatologist should prescribe it for laxity. A menopause clinic is the right first appointment for the woman whose skin changed in a year.</p>
    `,
  },
  {
    id: 'faq-weight-loss',
    category: 'faq',
    title: 'I lost a lot of weight. Will my skin tighten back?',
    tldr: 'Partly, over a year, if you are younger, non-smoking and the loss was moderate; older or sun-damaged skin after large loss does not retract. Refill the deflation, tighten mild residual laxity with a device, and accept that an envelope that will not fit is removed by surgery.',
    bodyHtml: `
      <p>Skin retracts by elastic recoil, and recoil is what age, sun and smoking remove. After losing a tenth of body weight in the thirties, most faces settle over a year; after bariatric-scale loss in the fifties, raters judged faces about five years older, with folds, descent and neck laxity that do not resolve. The GLP-1 medicines have made rapid, large loss common, and the reviews describe volume loss and laxity in proportion to it. The plan is in order: lose slowly if you can, replace the deep volume that left with filler or a collagen stimulator, use a device for mild residual crepe, and for a lower face or neck that hangs, a lift removes the skin — nothing else does.</p>
    `,
  },
  {
    id: 'faq-which-device',
    category: 'faq',
    title: 'Ultherapy, Thermage, Morpheus8, Sofwave or Emface — which one?',
    tldr: 'Focused ultrasound has the most controlled evidence and the most variable results; monopolar radiofrequency is the gentlest for thin crepey skin; radiofrequency microneedling is best for texture with a tightening bonus; parallel ultrasound and Emface are newer with single studies. All of them millimetres; none a lift.',
    bodyHtml: `
      <p>They differ in depth and in evidence. Focused ultrasound (Ultherapy) reaches the fibrous layer, has a randomised trial with 70% clinically significant tightening at three months and meta-analyses behind it, and a retrospective series with a fifth improved and a sixth worse — the strongest evidence and the least predictable result. Monopolar radiofrequency (Thermage) heats the dermis in bulk, has a 2025 randomised trial, and is the gentlest choice for thin skin. Radiofrequency microneedling (Morpheus8) has randomised trials for texture and scars and a retrospective series for contraction, at about a third of a facelift's effect. Parallel-beam ultrasound (Sofwave) and synchronised radiofrequency with muscle stimulation (Emface) each rest on one open-label study. Choose by type: crepe wants the dermal devices; mild descent wants focused ultrasound; more than mild descent wants a surgeon.</p>
    `,
  },
  {
    id: 'faq-threads',
    category: 'faq',
    title: 'Are thread lifts a good middle option?',
    tldr: 'Not for laxity: they neither tighten skin nor replace volume, a randomised trial found the lift gone by 60 days, and about a quarter of patients get dimpling, bruising or extrusion. For mild descent in someone refusing surgery, briefly; for sagging skin, no.',
    bodyHtml: `
      <p>Threads are sold as the step between devices and surgery, and the evidence says they are neither. They hitch tissue upward and dissolve; the randomised trial found the elevation back to baseline by 60 days regardless of thread count, the meta-analysis finds effects fading within a year, and the systematic review counts complications in about 27% — dimpling, bruising, extrusion, migration. They do nothing for the skin's recoil and nothing for the frame beneath it. The same money buys a device course with controlled evidence for mild laxity, or a real fraction of a facelift for the descended one.</p>
    `,
  },
  {
    id: 'faq-facelift-or-device',
    category: 'faq',
    title: 'Device or facelift?',
    tldr: 'Class on the laxity scale decides: mild (classes 1–3) is skin work and a device; moderate (4–6) is a device with honest expectations or an early lift; severe (7–9) is surgery, and a device there is money spent on the wrong rung. The recline test tells you which class you are in.',
    bodyHtml: `
      <p>The clinicians' ten-class laxity scale is the useful frame. In classes 1–3 — crepe, a soft jawline, no real fold — retinoids, hormones where appropriate, biostimulators and one dermal device do real work. In classes 4–6 — early jowls, a softening neck — focused ultrasound or radiofrequency tighten by millimetres in most people and by nothing in some, and an early lift gives a decade. In classes 7–9 — hanging jowls, a loose neck, an envelope after weight loss — no device delivers a fraction of what the patient wants, and the honest clinic says so. Lie flat with a mirror: if the face you want appears when the tissue falls back, you are in the surgeon's classes.</p>
    `,
  },
  {
    id: 'faq-age',
    category: 'faq',
    title: 'When should I start, and is there a "too late"?',
    tldr: 'Prevention from the twenties: sun, smoke, sleep, a retinoid. Devices work best in the forties and fifties on mild laxity with collagen still to recruit; after seventy the dermis has less to give and surgery does the moving. Never too late for skin quality; often too late for a device to lift.',
    bodyHtml: `
      <p>Recoil is kept, not regained, so the twenties and thirties belong to sunscreen, no cigarettes, sleep and a retinoid — the four habits with evidence on the mechanism. The energy devices need a dermis with fibroblasts to recruit, which is why their trials enrol people in their forties and fifties with mild to moderate laxity and why results fade in older, thinner skin. A face in its seventies with real descent is the surgeon's, with a device afterward for crepe. There is no age at which a retinoid, sunscreen and, where indicated, hormone therapy stop improving skin quality; there is an age at which a machine stops being able to lift it.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Retinoid: 3–6 months, best at a year. Collagen peptides: 8–12 weeks. Hormone therapy: months. Biostimulators: 6–12 weeks, building. Devices: judged at 3 months, final at 6. Facelift: presentable at a month, final at 6–12.',
    bodyHtml: `
      <p>Everything on this page works through collagen, and collagen takes months. Retinoids change the surface over three to six months and the dermis over a year. Collagen peptides showed their cutometer effect at eight to twelve weeks. Hormone therapy's skin trials ran six to seven months. Biostimulators build over six to twelve weeks and are judged at three months. Energy devices contract a little on the day, then remodel for three to six months, which is when the trials measured them; judge nothing before three. A facelift is bruised for two weeks, presentable at a month, and final at six to twelve as the swelling clears. Photograph straight on and in profile before anything.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What is the cheapest thing that works, and the most effective?',
    tldr: 'Cheapest with evidence: sunscreen, a retinoid, sleep and no smoking, €20–40 a month. For menopausal skin: hormone therapy where indicated, €10–40 a month. For mild laxity: one device course, €1,500–3,500 a year. For real sagging: a facelift, €8,000–20,000, once a decade.',
    bodyHtml: `
      <p>The ladder in euros: sunscreen, a retinoid, sleep and no cigarettes (€20–40 a month, the mechanism itself) → collagen peptides for three months (€20–60 a month, small and real) → hormone therapy where a menopause clinician agrees (€10–40 a month) → a biostimulator course for the thin, deflated face (€800–2,000) → deep volume for the emptied frame (€500–1,500 a region) → one energy device a year for mild laxity (€1,500–3,500) → subdermal plasma for a loose neck (€4,000–8,000) → a facelift or neck lift for the descended face and the post-weight-loss envelope (€8,000–20,000, once). Threads (€800–2,500 for weeks), exosomes and "plasma pens" sit outside the ladder.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS (page order)
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: "What's actually happening",
    intro: 'Sagging is two problems — the skin losing its recoil and the frame beneath it shrinking — and the pinch test and the recline test tell you which one is yours.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which sagging do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: the habits that decide your recoil',
    intro: 'The four habits with evidence on the mechanism, the supplement with consistent small trials, and the shelf of devices that toned a muscle or moved some fluid.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Hormones, biostimulators and volume',
    intro: 'The one systemic treatment with a meta-analysis, the collagen stimulators graded by what they measured, and the volume that refills a frame.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Energy devices and surgery',
    intro: 'Everything that heats collagen by millimetres, graded by the randomised trials and the retrospective series alike — and the one treatment that removes skin.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'What the regulators, the meta-analyses and the surgical series actually flag — and the commoner harm of money spent on the wrong rung.',
    sections: safety,
  },
  {
    id: 'faq',
    title: 'Frequently asked questions',
    intro: 'Quick answers to what people actually ask.',
    sections: faq,
  },
];

// ---------------------------------------------------------------------------
// FILTER METADATA
// ---------------------------------------------------------------------------

export const focusLabels: Record<FocusArea, string> = {
  skin: 'Skin quality',
  structure: 'Volume & structure',
  hormones: 'Hormones & habits',
  device: 'Tightening',
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

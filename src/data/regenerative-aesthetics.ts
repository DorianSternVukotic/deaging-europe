/**
 * Regenerative aesthetics guide (PRP, PRF, exosomes, polynucleotides) —
 * single source of truth. Consumed by /regenerative-aesthetics.
 * `bodyHtml` is plain HTML — rendered with `set:html`. Keep external links
 * with rel="noopener nofollow" and target="_blank". Regulation is part of the
 * evidence story here: unapproved biologics are graded down regardless of hype.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'hair' | 'scars' | 'skin' | 'eyes' | 'regulation' | 'general';

export type SectionCategory = 'concept' | 'context' | 'prp' | 'frontier' | 'safety' | 'faq';

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
  'PRP genuinely does things: pooled randomized trials show ~25–28 extra hairs/cm² in pattern hair loss, and adding PRP to microneedling roughly triples the odds of a >50% acne-scar improvement.',
  '"PRP" is not one product — platelet dose varies more than two-fold between preparation kits, which explains why results vary wildly between clinics. Ask what\'s actually in the syringe.',
  'Exosomes have zero approved products anywhere, an FDA safety warning after patient harm, and no controlled injectable trials in aesthetics — clinics stay legal by dripping them on topically after microneedling.',
  'Polynucleotides ("salmon-DNA" boosters), the current European boom, rest on a few small industry-adjacent trials — real short-term skin-quality signals, no placebo-controlled under-eye proof.',
  'The dominant real-world risk is the operator, not the substance: PRP is your own blood, but unlicensed spas reusing equipment gave three women HIV. Vet the provider harder than the treatment.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-is-prp',
    category: 'concept',
    title: 'What PRP is — and why no two "PRPs" match',
    tldr: 'Your own blood, spun to concentrate platelets and their growth factors — with wildly unstandardized preparation.',
    bodyHtml: `
      <p>Platelet-rich plasma is drawn from your arm, centrifuged to concentrate platelets in a small plasma volume, and re-injected. Platelet granules release growth factors (PDGF, TGF-β, VEGF, EGF) that plausibly stimulate fibroblasts, blood-vessel formation, and hair-follicle cycling. Because it's autologous — from your own body — allergy and rejection are essentially non-issues.</p>
      <p>The catch that explains this whole field: <strong>"PRP" is not one product.</strong> A head-to-head comparison of three commercial kits found final platelet concentrations of <a href="https://bmrat.org/index.php/BMRAT/article/view/1074" rel="noopener nofollow" target="_blank">1.35×, 1.61× and 3.04×</a> whole blood — a two-fold-plus difference in the active ingredient depending on which box the clinic bought. Leukocyte content, activation, and spin protocols differ too, and a systematic review found only about <a href="https://pubmed.ncbi.nlm.nih.gov/29040132/" rel="noopener nofollow" target="_blank">one in ten clinical studies</a> reported its preparation reproducibly.</p>
      <p>So when a trial says "PRP works", it means <em>that</em> PRP, at <em>that</em> dose, on <em>that</em> schedule — the honest frame for every row below.</p>
    `,
  },
  {
    id: 'the-landscape',
    category: 'concept',
    title: 'The regenerative menu, mapped',
    tldr: 'PRP and PRF are your own blood; polynucleotides are CE-marked devices; exosomes and "stem cells" are unapproved biologics.',
    bodyHtml: `
      <p>Four very different regulatory animals share the "regenerative" label:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>PRP / PRF</strong> — autologous blood products prepared at the point of care; legal everywhere, with the real evidence base.</li>
        <li><strong>Polynucleotides / PDRN</strong> (Rejuran, Plinest) — purified salmon-DNA fragments sold as CE-marked injectable <em>devices</em> in the EU/UK — a route requiring far less efficacy evidence than a medicine.</li>
        <li><strong>Exosomes</strong> — cell-derived vesicles with <strong>no approved product anywhere for any indication</strong>; legally applied only as topicals.</li>
        <li><strong>"Stem-cell" injectables</strong> — outside approved trials, unapproved biologics with documented catastrophic harms.</li>
      </ul>
      <p>The gradient of this guide follows that map: real-but-messy evidence at the top, regulatory grey zone in the middle, hard no at the bottom.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'vetting',
    category: 'context',
    title: 'Vetting a provider (this is where the risk lives)',
    tldr: 'Medical registration, single-use everything, and a straight answer about the kit. The famous harms were hygiene failures.',
    bodyHtml: `
      <p>PRP's worst documented outcome had nothing to do with platelets: a CDC-linked investigation concluded at least <a href="https://www.cbsnews.com/news/vampire-facial-hiv-new-mexico-infection-cdc/" rel="noopener nofollow" target="_blank">three women acquired HIV from "vampire facials" at an unlicensed US spa</a> that reused single-use equipment — the first documented HIV transmission via cosmetic injection. Blood handling demands medical-grade hygiene.</p>
      <p>The checklist:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Medical registration</strong> (GMC/NMC/GDC in the UK; national register elsewhere) — not a certificate from a brand's training day.</li>
        <li><strong>Single-use everything</strong>, tubes opened in front of you, an autoclave or full disposables on site.</li>
        <li><strong>A straight answer about the kit:</strong> which system, what platelet fold-increase, leukocyte-rich or poor. A good clinic knows; a shrug is a red flag.</li>
        <li><strong>For exosomes: ask for the marketing-authorization number.</strong> There is none — that ends the conversation.</li>
        <li><strong>For polynucleotides:</strong> CE-marked product via the official distributor — counterfeits circulate.</li>
      </ul>
    `,
  },
  {
    id: 'prices-protocols',
    category: 'context',
    title: 'Prices and trial-based session counts',
    tldr: 'PRP €250–600/session, three sessions before judging; polynucleotides €350–1,000; exosome add-ons are unvalidated spend.',
    bodyHtml: `
      <p>Use the trial protocols, not the clinic's package deal, as your anchor:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>PRP for hair:</strong> 3 monthly sessions, judge at 3–6 months, maintenance every 3–6 months. ~€250–600/session.</li>
        <li><strong>PRP facial / "vampire facial":</strong> 3 sessions a month apart; with microneedling ~€300–700/session.</li>
        <li><strong>Acne scars (microneedling + PRP):</strong> 3–4 combined sessions, four weeks apart.</li>
        <li><strong>Polynucleotides:</strong> 2–3 sessions 2–4 weeks apart; UK pricing documented at <a href="https://mamabella.uk/polynucleotide-injections-uk-cost-results-risks/" rel="noopener nofollow" target="_blank">£300–850 per session</a>; effect peaks ~3 months, top-ups 1–2×/year.</li>
        <li><strong>Mesotherapy cocktails (NCTF):</strong> 3 sessions 2–3 weeks apart, ~€150–400 each.</li>
        <li><strong>"Exosome facials":</strong> €200–600 <em>on top of</em> a procedure, for an unvalidated vial.</li>
      </ul>
      <p>Any quote wildly below these bands usually means diluted product, non-medical hands, or both.</p>
    `,
  },
];

const prp: Section[] = [
  {
    id: 'prp-hair',
    category: 'prp',
    title: 'PRP for pattern hair loss',
    tldr: 'Meta-analyses of RCTs: ~25–28 extra hairs/cm² after three monthly sessions — in the same league as minoxidil, with messier data.',
    evidence: 'moderate',
    focus: 'hair',
    sessions: '3 monthly + upkeep',
    downtime: '1–2 days tenderness',
    cost: '€250–600/session',
    bodyHtml: `
      <p>The best-studied cosmetic use of PRP. A <a href="https://pubmed.ncbi.nlm.nih.gov/39013743/" rel="noopener nofollow" target="_blank">2024 meta-analysis of 14 RCTs</a> found hair density improved by ~27.6 hairs/cm² versus control; an <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10980625/" rel="noopener nofollow" target="_blank">independent pooled analysis</a> agrees (+25.1). For context, finasteride and minoxidil deliver ~18 and ~15 in indirect comparisons. Combining PRP <em>with</em> minoxidil beat either alone in a <a href="https://pubmed.ncbi.nlm.nih.gov/38789807/" rel="noopener nofollow" target="_blank">2024 meta-analysis</a>.</p>
      <p>Why not "strong": statistical heterogeneity is extreme (I² to 96%), publication bias is documented, and GRADE ratings land at low quality — the preparation-variance problem in action. PRP also doesn't touch the androgen biology driving the loss: stop maintaining and it fades. Adjunct to, not replacement for, minoxidil/finasteride.</p>
    `,
  },
  {
    id: 'prp-scars',
    category: 'prp',
    title: 'Microneedling + PRP for acne scars',
    tldr: 'Adding PRP roughly triples the odds of a >50% scar improvement over microneedling alone — the strongest facial-PRP data.',
    evidence: 'moderate',
    focus: 'scars',
    sessions: '3–4, monthly',
    downtime: '1–3 days redness',
    cost: '€300–700/session',
    bodyHtml: `
      <p>The one facial use where PRP has meta-analytic muscle. Pooling 14 studies (472 patients), adding PRP to microneedling <a href="https://pubmed.ncbi.nlm.nih.gov/35237616/" rel="noopener nofollow" target="_blank">tripled the odds of &gt;50% improvement</a> on validated scar scales (OR 2.97) and quadrupled satisfaction odds, without extra serious adverse events; a <a href="https://link.springer.com/article/10.1007/s00403-026-04547-1" rel="noopener nofollow" target="_blank">2026 update across 1,111 patients</a> confirmed the increment.</p>
      <p>This is also the actual science behind the trademarked "vampire facial" — the branding adds cost, not efficacy. Caveats: split-face trials can't blind (PRP's colour betrays the side), and the boost rides on top of microneedling, which already works.</p>
    `,
  },
  {
    id: 'prp-face',
    category: 'prp',
    title: 'PRP for facial skin rejuvenation (alone)',
    tldr: 'Small split-face trials mostly positive — measurable texture and thickness changes, inconsistent wrinkle effects, subjective endpoints.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: '3, monthly',
    downtime: '1–2 days',
    cost: '€250–600/session',
    bodyHtml: `
      <p>Injected alone, PRP delivers glow more than change. Systematic appraisals — including <a href="https://www.tandfonline.com/doi/full/10.2147/CCID.S340434" rel="noopener nofollow" target="_blank">three randomized split-face trials</a> — mostly report improved texture; a granular <a href="https://pubmed.ncbi.nlm.nih.gov/40167104/" rel="noopener nofollow" target="_blank">2025 review</a> found skin <em>thickness</em> improved in 80% of studies but <em>wrinkles</em> in only 40% and hydration in none. Trials are tiny (often n≤30) with assessor- or self-rated endpoints.</p>
      <p>Fair expectation: subtle radiance and texture over 2–3 sessions — not a filler- or toxin-level result.</p>
    `,
  },
  {
    id: 'prp-eyes',
    category: 'prp',
    title: 'PRP for under-eye dark circles',
    tldr: 'A handful of small comparative trials without placebo — best signal for pigment-type circles; one study in the field was retracted.',
    evidence: 'emerging',
    focus: 'eyes',
    sessions: '3–4',
    downtime: '2–4 days bruising risk',
    cost: '€300–600/session',
    bodyHtml: `
      <p>Periorbital PRP rests on ~14 mostly tiny studies. The best signal is for <strong>pigment-type dark circles</strong> — one study measured a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12587466/" rel="noopener nofollow" target="_blank">46.6% reduction in melanin area</a> after four sessions — while structural circles (deep troughs, visible vessels through thin skin) respond poorly. No placebo-controlled trial exists, protocols vary, and one frequently cited under-eye study was retracted — a caution flag for the sub-field.</p>
      <p>If your circles are shadows from hollowing, this is the wrong tool — read the tear-trough section of our <a href="/fillers">filler guide</a> instead.</p>
    `,
  },
  {
    id: 'prf',
    category: 'prp',
    title: 'PRF & i-PRF ("second-generation" platelet therapy)',
    tldr: 'Slower growth-factor release in theory; in trials, no demonstrated superiority over PRP and effects that fade by 6 months.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '3',
    downtime: '1–2 days',
    cost: '€300–650/session',
    bodyHtml: `
      <p>PRF is blood spun slower, without anticoagulant, yielding a fibrin mesh that releases growth factors gradually — real biology, thinner clinical file. Systematic reviews find <a href="https://pubmed.ncbi.nlm.nih.gov/40167104/" rel="noopener nofollow" target="_blank">no demonstrated superiority over PRP</a>, with PRF's improvements often diminishing by six months; much of its aesthetic use is extrapolated from dental-surgery literature.</p>
      <p>Consumer translation: don't pay a premium for the word "second-generation".</p>
    `,
  },
];

const frontier: Section[] = [
  {
    id: 'frontier-pn',
    category: 'frontier',
    title: 'Polynucleotides / PDRN (Rejuran, Plinest)',
    tldr: 'The 2024–26 boom: a few small, industry-adjacent trials show short-term skin-quality gains; no placebo-controlled under-eye proof.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '2–3, then top-ups',
    downtime: '1–3 days bumps',
    cost: '€350–1,000/session',
    bodyHtml: `
      <p>Salmon-DNA fragments injected as "skin boosters" — the treatment of the moment in UK/EU aesthetics. The evidence: a <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11845969/" rel="noopener nofollow" target="_blank">systematic review found 9 studies totalling 219 patients</a> (only 4 RCTs, mostly Korean, crow's feet dominant) with significant wrinkle/elasticity improvements, no severe adverse events — and authors disclosing manufacturer ties. The marquee under-eye indication rests on an observational study plus a 27-person split-face trial against hyaluronic acid; <strong>no placebo-controlled under-eye trial exists</strong>.</p>
      <p>Regulatory context matters: these are CE-marked injectable <em>devices</em>, a route with far lower evidence demands than medicines, and they are not FDA-approved injectables. Real short-term signals, heavy industry gravity, fashionable prices — "emerging" is exactly what this is.</p>
    `,
  },
  {
    id: 'frontier-nctf',
    category: 'frontier',
    title: 'Mesotherapy cocktails (NCTF 135HA)',
    tldr: 'One manufacturer-linked randomized trial vs a face cream — hydration and radiance gains that can\'t be separated from the needling.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '3, 2–3 wks apart',
    downtime: '1–2 days',
    cost: '€150–400/session',
    bodyHtml: `
      <p>Multi-ingredient microinjection cocktails (hyaluronic acid plus ~59 vitamins and amino acids). The pivotal study is a <a href="https://pubmed.ncbi.nlm.nih.gov/37577796/" rel="noopener nofollow" target="_blank">146-person randomized trial</a> showing reduced superficial wrinkles and better radiance — against a <em>face cream</em>, not sham injections, so the needling effect and the cocktail effect are inseparable. The rest of the file is open-label and manufacturer-adjacent. Pleasant, plausible, unproven beyond "injecting hydrating things hydrates".</p>
    `,
  },
  {
    id: 'frontier-exosomes',
    category: 'frontier',
    title: 'Exosomes',
    tldr: 'Zero approved products, an FDA warning after patient harm, no controlled injectable trials — the hype outruns everything.',
    evidence: 'limited',
    focus: 'regulation',
    sessions: 'Topical add-on only',
    cost: '€200–600 add-on',
    bodyHtml: `
      <p>Nanoscale vesicles marketed as "cell-free stem-cell therapy" — sourced variously from human cells, <em>rose stem cells</em>, or bovine colostrum, which tells you how loose the category is. The regulatory facts: <strong>no exosome product is approved anywhere for any indication</strong>; the FDA issued a <a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">public safety notification</a> after patients were harmed by unapproved exosome injections, and its standing consumer alert logs blindness, tumours, and infections from unapproved regenerative products.</p>
      <p>The evidence: small adjunct studies applying exosomes topically after microneedling — an overview of 17 systematic reviews found <a href="https://link.springer.com/article/10.1007/s00266-024-04276-8" rel="noopener nofollow" target="_blank">"a pervasive shortfall in methodological rigour"</a>, and the only triple-blind RCT of an exosome injectable (in knees) showed no advantage over saline. Clinics stay legal by "dripping, not injecting" — which also means nobody has verified what's in the vial. Skip.</p>
    `,
  },
  {
    id: 'frontier-stem-cells',
    category: 'frontier',
    title: '"Stem-cell" facials & injections',
    tldr: 'No controlled cosmetic-benefit trials — and documented catastrophes, including three women blinded at one clinic.',
    evidence: 'limited',
    focus: 'regulation',
    bodyHtml: `
      <p>Outside approved trials, injected "stem-cell" cosmetics are either mislabeled fat grafting or unapproved biologics. The canonical harm: three women, aged 72–88, <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa1609583" rel="noopener nofollow" target="_blank">permanently lost vision</a> after adipose-"stem-cell" eye injections at a Florida clinic ($5,000 a treatment); the FDA's <a href="https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes" rel="noopener nofollow" target="_blank">consumer alert</a> catalogues blindness, tumours, and infections across the sector. In the EU, cell therapies need central authorization that no cosmetic product has. Anything sold as an injected stem-cell treatment in 2026: walk away.</p>
    `,
  },
  {
    id: 'frontier-gf-topicals',
    category: 'frontier',
    title: 'Growth-factor topicals after procedures',
    tldr: 'Cosmetics-grade evidence: small adjunct studies, no efficacy requirement, and skin that barely absorbs proteins this size.',
    evidence: 'limited',
    focus: 'skin',
    bodyHtml: `
      <p>Post-procedure "growth factor" serums (conditioned media, recombinant EGF) live under cosmetics regulation — no efficacy approval required — and their literature is small, often industry-run adjunct studies showing faster redness resolution. Intact skin poorly absorbs proteins of this size, which is precisely why they're paired with microneedling. A pleasant comfort layer; retinoids and sunscreen keep doing the actual work.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety',
    category: 'safety',
    title: 'Safety: the substance vs the operator',
    tldr: 'PRP/PRF are autologous and benign; the harms on record are hygiene failures and unapproved biologics.',
    bodyHtml: `
      <p>Sorted by where the risk actually sits:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>PRP/PRF (the substance):</strong> your own blood — expect bruising, swelling, tenderness for 1–3 days; allergy essentially nil. Under-eye work adds the small vascular risks of any periocular needle.</li>
        <li><strong>The operator:</strong> the HIV cluster at an unlicensed spa is the defining cautionary tale — single-use equipment and licensed hands are non-negotiable.</li>
        <li><strong>Polynucleotides/NCTF:</strong> trial-reported side effects are mild and transient (bumps, redness); the live risks are counterfeit product and non-medical injectors.</li>
        <li><strong>Exosomes/"stem cells":</strong> here the substance itself is the risk — unapproved, variably manufactured biologics with regulator-logged harms.</li>
      </ul>
      <p>Pregnancy/breastfeeding: no data for any of these — defer. And tell any treating doctor about recent injections if a facial swelling or nodule appears.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-hair',
    category: 'faq',
    title: 'Does PRP actually regrow hair?',
    tldr: 'Modestly, yes — with maintenance, and best combined with minoxidil.',
    bodyHtml: `
      <p>Pooled RCTs show ~25–28 extra hairs/cm² after three monthly sessions — comparable (indirectly) to the licensed drugs. Effects fade without maintenance every 3–6 months, because PRP doesn't change the androgen biology underneath. The best-evidenced move is PRP <em>plus</em> minoxidil, not instead of it.</p>
    `,
  },
  {
    id: 'faq-vampire',
    category: 'faq',
    title: 'Is a "vampire facial" worth it?',
    tldr: 'For acne scars, genuinely. For wrinkles, expect glow.',
    bodyHtml: `
      <p>The trademark wraps microneedling + PRP. For atrophic acne scars that combination triples the odds of a big improvement over microneedling alone. For ordinary aging skin the trials are tiny and subjective — texture and radiance, not a lift. The vampire branding itself adds licensing fees, not efficacy.</p>
    `,
  },
  {
    id: 'faq-exosomes-legal',
    category: 'faq',
    title: 'Are exosome treatments legal?',
    tldr: 'Only as topicals — no injectable is approved anywhere.',
    bodyHtml: `
      <p>No exosome product holds marketing authorization in the US, EU, or UK; the FDA warned after patients were harmed by unapproved injections. Clinics keep it technically legal by applying exosomes to the skin after microneedling — which also means the vial's contents were never verified by any regulator. Our grading: limited, skip.</p>
    `,
  },
  {
    id: 'faq-pn-vs-prp',
    category: 'faq',
    title: 'Polynucleotides or PRP for under-eyes?',
    tldr: 'Neither has placebo-controlled proof — PRP is cheaper and autologous.',
    bodyHtml: `
      <p>Polynucleotides have an observational study and a small split-face trial against hyaluronic acid; PRP has small comparative trials and the best signal for pigmented circles. Neither has beaten placebo under the eyes. PRP costs less and is your own blood; PN is the fashionable option at £300–850 a session. If the problem is structural hollowing, both are the wrong aisle — see the filler guide's tear-trough section.</p>
    `,
  },
  {
    id: 'faq-prf-upgrade',
    category: 'faq',
    title: 'Is PRF an upgrade over PRP?',
    tldr: 'Not on current data.',
    bodyHtml: `
      <p>Systematic reviews find no superiority, and PRF's improvements often faded by six months in comparative work. The "second-generation" framing is chronology, not evidence. Choose the clinic that answers questions about its preparation over the one selling the newer acronym.</p>
    `,
  },
  {
    id: 'faq-variance',
    category: 'faq',
    title: 'Why do results vary so much between clinics?',
    tldr: 'Because "PRP" is unstandardized — platelet dose differs >2-fold between kits.',
    bodyHtml: `
      <p>Commercial kits produce anywhere from 1.35× to 3× platelet concentration; leukocyte content and activation differ; and most published studies never reported what they injected. Two clinics offering "PRP" can be delivering meaningfully different drugs. Ask which kit and what fold-concentration — the answer (or the shrug) tells you a lot.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPED FOR PAGE LAYOUT
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'The basics',
    intro: 'What PRP is, and how the regenerative menu splits by regulation.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book',
    intro: 'Vetting the provider, and the trial-based prices and session counts.',
    sections: context,
  },
  {
    id: 'prp',
    title: 'PRP & PRF, by indication',
    intro: 'The autologous treatments — where platelets genuinely earn their evidence.',
    sections: prp,
  },
  {
    id: 'frontier',
    title: 'The injectable frontier',
    intro: 'Polynucleotides, cocktails, exosomes, and "stem cells" — graded by data and by law.',
    sections: frontier,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The substance vs the operator.',
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
  hair: 'Hair',
  scars: 'Scars',
  skin: 'Skin',
  eyes: 'Under-eye',
  regulation: 'Regulation',
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

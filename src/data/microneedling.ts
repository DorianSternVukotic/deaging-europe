/**
 * Microneedling & RF-microneedling guide — single source of truth.
 *
 * Consumed by /microneedling. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank". Editorial spine: classic microneedling's scar and hair
 * data are excellent; RF "tightening" marketing outruns its literature.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'scars' | 'wrinkles' | 'pigment' | 'hair' | 'body' | 'hazard' | 'general';

export type SectionCategory = 'concept' | 'context' | 'mn' | 'rf' | 'safety' | 'faq';

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
  'For atrophic acne scars, microneedling is genuinely strong: a 24-trial network meta-analysis confirms significant improvement, with combinations (peels, PRP) doing best.',
  'Its superpower is pigmentary safety — pooled trials recorded no post-inflammatory hyperpigmentation, versus 30% after fractional CO₂ in darker-skin comparisons. This is the collagen-induction tool for Fitzpatrick IV–VI.',
  'As a hair-loss adjunct it surprises: microneedling plus minoxidil beat minoxidil alone across 12 trials — one of the largest effects in the alopecia literature.',
  'RF microneedling earns its keep for scars and texture; the "lifting" claims are ahead of the evidence, and FDA adverse-event data log facial fat loss from deep, aggressive settings.',
  'Two rules prevent most disasters: never needle ordinary cosmeceuticals into open channels (documented granulomas — vitamin C serums above all), and never self-apply strong numbing cream over large areas (documented deaths).',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'how-it-works',
    category: 'concept',
    title: 'How microneedling works',
    tldr: 'Thousands of controlled micro-punctures trigger the wound-healing cascade — new collagen without removing the surface.',
    bodyHtml: `
      <p>Microneedling (percutaneous collagen induction) drives fine needles through the epidermis into the dermis, creating thousands of controlled micro-wounds. Each channel triggers the healing cascade — platelets, growth factors, fibroblast activation — producing new collagen and elastin over weeks to months. Because the surface is perforated rather than removed (unlike ablative lasers), pigment cells stay largely undisturbed — the root of its darker-skin advantage (<a href="https://pubmed.ncbi.nlm.nih.gov/27559496/" rel="noopener nofollow" target="_blank">mechanism review</a>).</p>
      <p><strong>Depth is the dose:</strong> 0.2–0.3&nbsp;mm (home rollers) barely passes the surface; 0.5–1.5&nbsp;mm covers rejuvenation, pigment delivery, and hair protocols; 1.5–2.5&nbsp;mm is scar territory — professional, bleeding-endpoint work. Motorised pens with sterile single-use cartridges have hygienic and precision arguments over rollers, though no head-to-head trial crowns either.</p>
    `,
  },
  {
    id: 'mn-vs-rf',
    category: 'concept',
    title: 'Classic vs RF microneedling — what the radiofrequency adds',
    tldr: 'RF needles heat the dermis (~65–70°C) as they puncture — more remodelling and modest tightening, at 3× the price.',
    bodyHtml: `
      <p>RF microneedling (Morpheus8, Profound, Genius, Potenza) sends radiofrequency current through insulated needles, cooking small zones of dermis at depth while sparing the surface. The added heat means more collagen remodelling per session and some genuine soft-tissue contraction — Morpheus8 received its first FDA clearance for "soft tissue contraction" only in <a href="https://www.biospace.com/morpheus8-secures-first-and-only-fda-clearance-for-soft-tissue-contraction-for-fractional-radiofrequency-microneedling" rel="noopener nofollow" target="_blank">July 2024</a>, years after the marketing said as much.</p>
      <p>Where each belongs: classic microneedling for scars, texture, pigment delivery, and hair at a third of the price; RF when you want scar work <em>plus</em> mild laxity improvement in the same course — with a scoping review estimating a single RF session achieves ~37% of a facelift's laxity effect. Neither is a lift.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'darker-skin-advantage',
    category: 'context',
    title: 'The darker-skin advantage',
    tldr: 'Pooled trials: zero PIH from microneedling, vs 30% after fractional CO₂ in a darker-skin split-face trial.',
    bodyHtml: `
      <p>Energy devices' recurring problem in Fitzpatrick IV–VI is post-inflammatory hyperpigmentation — the treatment trades a scar for a stain. Microneedling largely escapes it: a <a href="https://pubmed.ncbi.nlm.nih.gov/35426044/" rel="noopener nofollow" target="_blank">meta-analysis of 12 RCTs</a> recorded <strong>no PIH</strong> from microneedling in pooled acne-scar data, and a randomized split-face trial in skin of colour found PIH in <a href="https://pubmed.ncbi.nlm.nih.gov/39640445/" rel="noopener nofollow" target="_blank">30% after fractional CO₂ versus 6.7% after microneedling</a> — with the laser stronger per session and the needles far kinder to pigment.</p>
      <p>Reduced is not zero: aggressive settings, sun exposure, and needling over active inflammation can still pigment. But if you're Fitzpatrick IV–VI and want collagen induction, this is where the risk-benefit points first.</p>
    `,
  },
  {
    id: 'practical',
    category: 'context',
    title: 'Sessions, downtime, prices & choosing a provider',
    tldr: '3–6 sessions a month apart; downtime scales with depth; €150–400 classic, €500–1,200 RF; medical setting for ≥1 mm.',
    bodyHtml: `
      <p><strong>From the trial protocols:</strong> acne scars — 3–6 sessions at ~4-week intervals, 1.5–2.5&nbsp;mm, judged 3 months after the last; rejuvenation — 3–4 sessions at 0.5–1.5&nbsp;mm; melasma and hair protocols — see their rows. First visible changes ~4–6 weeks after session one; peak results 3–6 months after the series.</p>
      <p><strong>Downtime by depth:</strong> 0.5&nbsp;mm — pink for hours; 1.0–1.5&nbsp;mm — red and rough for 1–3 days; 2&nbsp;mm+ — pinpoint bleeding and 2–4 days of redness/flaking; RF adds possible grid marks up to a week.</p>
      <p><strong>Prices (indicative EU):</strong> professional microneedling €150–400/session; with PRP €300–600; RF microneedling €500–1,200/session, packages of three €1,500–3,500.</p>
      <p><strong>Provider rules:</strong> England's licensing scheme is still being built, so vetting is on you — for ≥1&nbsp;mm and all RF work insist on a doctor-led or nurse-delivered setting, sterile single-use cartridges opened in front of you, a written list of what goes on your skin during/after (sterile products only), and their own before/afters at your skin tone. Aftercare: 24&nbsp;h no makeup or actives, bland moisturiser for 72&nbsp;h, SPF 50 for two weeks minimum, actives resume after 5–7 days.</p>
    `,
  },
];

const mn: Section[] = [
  {
    id: 'mn-scars',
    category: 'mn',
    title: 'Atrophic acne scars',
    tldr: 'The flagship indication: meta-analyses at every level confirm significant improvement; combinations do best.',
    evidence: 'strong',
    focus: 'scars',
    sessions: '3–6, monthly',
    downtime: '2–4 days',
    cost: '€150–400/session',
    bodyHtml: `
      <p>The best-evidenced use. A <a href="https://pubmed.ncbi.nlm.nih.gov/35426044/" rel="noopener nofollow" target="_blank">12-RCT meta-analysis</a> confirms significant objective scar improvement from microneedling alone, and a <a href="https://pubmed.ncbi.nlm.nih.gov/39110247/" rel="noopener nofollow" target="_blank">24-trial network meta-analysis</a> (1,546 patients) ranks combinations — microneedling plus chemical peel, or plus PRP — top for improvement and satisfaction.</p>
      <p>Honest positioning against the laser: fractional CO₂ is stronger per session for rolling and boxcar scars, but cost, downtime, and pigment risk all favour the needles — decisively so in darker skin. Ice-pick scars respond poorly to both (they need TCA CROSS or punch techniques). Expect 50–70% improvement grades in responders across a series, never 100%.</p>
    `,
  },
  {
    id: 'mn-hair',
    category: 'mn',
    title: 'Hair loss (with minoxidil)',
    tldr: 'A 12-trial meta-analysis: microneedling + minoxidil clearly beats minoxidil alone — one of alopecia\'s biggest adjunct effects.',
    evidence: 'strong',
    focus: 'hair',
    sessions: 'Wkly–monthly, 12–24 wks',
    downtime: 'Scalp redness 1–2 days',
    cost: '€100–300/session',
    bodyHtml: `
      <p>The surprise star. A meta-analysis of <a href="https://academic.oup.com/bjd/article-abstract/194/1/ljaf429.034/8415335" rel="noopener nofollow" target="_blank">12 controlled trials (631 patients)</a> found microneedling plus topical minoxidil produced substantially higher hair counts than minoxidil alone (standardized mean difference 1.32) — across needle depths and schedules — and a <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12483851/" rel="noopener nofollow" target="_blank">network meta-analysis</a> ranked the combination the most effective minoxidil pairing in women.</p>
      <p><strong>Protocol from the trials:</strong> 0.5–1.5&nbsp;mm, weekly to monthly for 12–24 weeks, minoxidil continued throughout (applied the next day, never onto fresh channels). Microneedling <em>alone</em> for hair is far weaker — keep the minoxidil.</p>
    `,
  },
  {
    id: 'mn-rejuvenation',
    category: 'mn',
    title: 'Wrinkles & general rejuvenation',
    tldr: 'Consistent small split-face trials and biopsy-level collagen gains — texture and fine lines, not lifting.',
    evidence: 'moderate',
    focus: 'wrinkles',
    sessions: '3–4, monthly',
    downtime: '1–3 days',
    cost: '€150–400/session',
    bodyHtml: `
      <p>Real but more modest than the scar file: small split-face randomized trials — often testing microneedling plus an actives serum — show improved texture, radiance, and fine lines, with histology confirming new collagen. What's missing is large sham-controlled trials with validated wrinkle scales.</p>
      <p>Fair expectations: softer fine lines, better texture and glow over three-plus sessions, fading over 12–18 months without maintenance. It does not lift sagging tissue — that conversation belongs with <a href="/laser-ipl">energy devices</a> or surgery.</p>
    `,
  },
  {
    id: 'mn-melasma',
    category: 'mn',
    title: 'Melasma (as a tranexamic-acid delivery system)',
    tldr: 'Meta-analyses back microneedled TXA as an adjunct — meaningful pigment-score drops, with relapse the standing rule.',
    evidence: 'moderate',
    focus: 'pigment',
    sessions: '4–6, 2–4 wks apart',
    downtime: '1–2 days',
    cost: '€150–350/session',
    bodyHtml: `
      <p>Here the needles are a courier: channels deliver tranexamic acid into the dermis. A <a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15965" rel="noopener nofollow" target="_blank">meta-analysis of microneedling + TXA</a> found significant melasma-score reductions at every timepoint, and a further pooled analysis showed TXA adds ~3.7 extra MASI points over needling alone. One RCT had microneedled TXA <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12359957/" rel="noopener nofollow" target="_blank">beating the classic triple cream</a>.</p>
      <p>Standing rules: melasma relapses — photoprotection and maintenance topicals remain the backbone; over-aggressive needling can <em>worsen</em> it via inflammation; and only sterile, professional TXA preparations belong in open channels.</p>
    `,
  },
  {
    id: 'mn-stretch',
    category: 'mn',
    title: 'Stretch marks',
    tldr: 'Meta-analysis: comparable to laser with better satisfaction and less PIH — best on early red marks.',
    evidence: 'moderate',
    focus: 'body',
    sessions: '3–4, monthly',
    downtime: '1–3 days',
    cost: '€200–450/session',
    bodyHtml: `
      <p>An <a href="https://pubmed.ncbi.nlm.nih.gov/38509316/" rel="noopener nofollow" target="_blank">11-study systematic review</a> found microneedling roughly matches laser for striae improvement, with higher patient satisfaction, less pigmentation risk, and lower cost — at the price of more per-session discomfort. Timing matters enormously: early red marks (rubrae) can improve 60–70%; mature white marks respond far less, for any modality. "Removal" is never on the table; softening is.</p>
    `,
  },
  {
    id: 'mn-prp',
    category: 'mn',
    title: 'Adding PRP ("vampire facial" territory)',
    tldr: 'For scars, PRP triples the odds of a big improvement over needling alone; for glow, the data are thinner.',
    evidence: 'moderate',
    focus: 'scars',
    sessions: '3–4, monthly',
    downtime: '1–3 days',
    cost: '€300–600/session',
    bodyHtml: `
      <p>Platelet-rich plasma applied over fresh channels adds growth factors to the wound-healing signal. In acne scarring the increment is meta-analytic: <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8882957/" rel="noopener nofollow" target="_blank">roughly tripled odds of &gt;50% improvement</a> across 14 studies, confirmed in a 1,111-patient update. For plain rejuvenation the addition is more faith than data. Full treatment of PRP — preparation variance, prices, vetting — lives in our <a href="/regenerative-aesthetics">regenerative-aesthetics guide</a>.</p>
    `,
  },
  {
    id: 'mn-pores',
    category: 'mn',
    title: 'Pores & texture',
    tldr: 'Consistently reported, mostly in retrospective and uncontrolled studies — RF versions carry the better pore data.',
    evidence: 'emerging',
    focus: 'wrinkles',
    sessions: '3–4',
    downtime: '1–2 days',
    cost: '€150–400/session',
    bodyHtml: `
      <p>Pore refinement shows up across the literature — a 75-patient retrospective of fractional RF needles, instrumented studies showing skin density up and water loss down — but controlled data are thin and pore measurement is notoriously soft. Treat visible-pore improvement as a likely side benefit of any needling course rather than a primary promise.</p>
    `,
  },
  {
    id: 'mn-cosmeceuticals',
    category: 'mn',
    title: 'Needling cosmeceuticals into skin',
    tldr: 'Documented granulomas — vitamin C serums above all. Only sterile, injectable-grade products belong in open channels.',
    evidence: 'limited',
    focus: 'hazard',
    bodyHtml: `
      <p>The same physics that makes microneedling a good drug-delivery system makes it dangerous with the wrong payload. Ordinary serums are formulated for <em>intact</em> skin; driven into the dermis they can seed chronic foreign-body reactions. The case literature is explicit: <a href="https://pubmed.ncbi.nlm.nih.gov/37250016/" rel="noopener nofollow" target="_blank">sarcoidal granulomas after vitamin-C serum microneedling</a>, a <a href="https://pubmed.ncbi.nlm.nih.gov/38358735/" rel="noopener nofollow" target="_blank">pan-facial granulomatous reaction</a>, and a review counting a dozen published cases.</p>
      <p>The rule: during and immediately after needling — sterile saline, sterile hyaluronic-acid ampoules, or physician-selected sterile actives only. No shop-shelf vitamin C, no retinoids, no acids, that day.</p>
    `,
  },
  {
    id: 'mn-home',
    category: 'mn',
    title: 'At-home dermarollers (0.2–0.5 mm)',
    tldr: 'Modestly boosts serum absorption; does not remodel scars or wrinkles; reused rollers add infection risk.',
    evidence: 'limited',
    focus: 'general',
    sessions: '1–2×/wk',
    cost: '€20–100 (device)',
    bodyHtml: `
      <p>At home depths (0.2–0.3&nbsp;mm) the needles barely pass the stratum corneum — reviews find the evidence is mostly about <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8918178/" rel="noopener nofollow" target="_blank">enhanced topical absorption</a>, not collagen induction. Meaningful remodelling starts at professional depths. If you roll anyway: simple well-preserved formulas only (see the granuloma row), replace heads often, never share, skip entirely over active acne, eczema, or cold sores. Depths of 0.5&nbsp;mm and beyond belong in professional hands.</p>
    `,
  },
];

const rf: Section[] = [
  {
    id: 'rf-scars',
    category: 'rf',
    title: 'RF microneedling for acne scars',
    tldr: 'Rivals fractional CO₂ in comparative reviews — with less downtime and less pigment risk.',
    evidence: 'strong',
    focus: 'scars',
    sessions: '3, 4–6 wks apart',
    downtime: '1–5 days',
    cost: '€500–1,200/session',
    bodyHtml: `
      <p>The best-supported RF indication: systematic reviews comparing gold-microneedle RF against fractional CO₂ for atrophic scars find <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11494830/" rel="noopener nofollow" target="_blank">comparable efficacy with less downtime and less PIH</a> — the same trade that favours needles generally, with the RF heat closing some of the per-session gap to the laser. A rational splurge for scar patients who also want texture and mild firmness gains.</p>
    `,
  },
  {
    id: 'rf-wrinkles',
    category: 'rf',
    title: 'RF microneedling for wrinkles & texture',
    tldr: 'A 41-study evidence base including 15 RCTs supports texture and fine-line gains; biopsies confirm collagen.',
    evidence: 'moderate',
    focus: 'wrinkles',
    sessions: '3, 4–6 wks apart',
    downtime: '1–5 days',
    cost: '€500–1,200/session',
    bodyHtml: `
      <p>A <a href="https://link.springer.com/article/10.1007/s00266-026-05834-y" rel="noopener nofollow" target="_blank">2026 systematic review</a> counts 41 studies (15 RCTs) across RF-microneedling's indications, with decent support for wrinkles and texture — Korean prospective work shows marked-or-moderate improvement in ~86% at three months, with dermal collagen confirmed on biopsy. Results build over months and fade without maintenance; think "best-in-class needling", not "energy facelift".</p>
    `,
  },
  {
    id: 'rf-laxity',
    category: 'rf',
    title: 'RF microneedling for laxity ("tightening / lifting")',
    tldr: 'The marketing outruns the literature: open-label series, ~37% of a facelift\'s effect per estimate — and an FDA-logged facial fat-loss signal.',
    evidence: 'emerging',
    focus: 'wrinkles',
    sessions: '3+',
    downtime: '1–7 days',
    cost: '€500–1,200/session',
    bodyHtml: `
      <p>Here the brochure and the journals diverge. Independent randomized comparisons against sham or against microfocused ultrasound are scarce; most "lifting" claims rest on open-label, manufacturer-sponsored series, and a scoping review pegs a single session at roughly <a href="https://derma.jmir.org/2026/1/e78385" rel="noopener nofollow" target="_blank">37% of a facelift's laxity improvement</a>. Real, modest, series-dependent.</p>
      <p>The safety signal to know: analyses of FDA adverse-event reports (2013–2025) logged textural changes, pigment alteration, and <a href="https://www.medscape.com/viewarticle/two-studies-evaluate-radiofrequency-microneedling-adverse-2026a1000q9f" rel="noopener nofollow" target="_blank">facial fat loss</a> — mostly linked to deep, aggressive settings over thin-fat zones (temples, mid-cheek). Voluntary reporting means no true incidence, but the mitigation is obvious: conservative depths, experienced hands, and skepticism toward "deeper is better".</p>
    `,
  },
  {
    id: 'rf-hyperhidrosis',
    category: 'rf',
    title: 'RF microneedling for underarm sweating',
    tldr: 'Sham-controlled and comparative RCTs support it — durable but inferior to botulinum toxin at 12 months.',
    evidence: 'moderate',
    focus: 'body',
    sessions: '2–4, 3–4 wks apart',
    downtime: '1–3 days',
    cost: '€400–900/session',
    bodyHtml: `
      <p>A genuinely decent niche: a sham-controlled trial showed <a href="https://onlinelibrary.wiley.com/doi/10.1111/ajd.12260" rel="noopener nofollow" target="_blank">significant sweat-severity improvement</a>, and comparative RCTs against botulinum toxin show both work — with the <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11233334/" rel="noopener nofollow" target="_blank">best recent trial</a> finding RF moderately effective but inferior to toxin at 12 months. Positioning: a toxin-free, longer-interval option for committed needle-phobes of the botulinum kind; the toxin remains the efficacy champion.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety',
    category: 'safety',
    title: 'Safety: the short list that matters',
    tldr: 'Low-risk done properly. The avoidable disasters: needled-in serums, DIY numbing cream, over-aggressive depths.',
    bodyHtml: `
      <p>Systematic reviews grade professional microneedling low-risk: transient redness and swelling, pinpoint bleeding at depth, occasional acne flares or milia. The complications worth engineering out:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Granulomas from needled-in cosmeceuticals</strong> — sterile products only (see the dedicated row).</li>
        <li><strong>Numbing-cream toxicity</strong> — documented deaths from strong compounded lidocaine creams self-applied over large, wrapped areas. Clinic-applied anaesthetic on the face only, ≤60 minutes, never under occlusion at home.</li>
        <li><strong>Tram-track scarring</strong> — case-reported after over-aggressive pressure/depth over bony areas; operator-dependent and avoidable.</li>
        <li><strong>Infection & herpes</strong> — sterile single-use cartridges; antiviral cover for cold-sore history.</li>
        <li><strong>RF-specific</strong> — the fat-loss/textural-change signal at deep settings (see the laxity row).</li>
      </ul>
      <p><strong>Contraindications:</strong> active acne pustules or infection in the field, keloid tendency, open eczema/psoriasis, bleeding disorders (relative), pregnancy (precaution — and adjuncts like TXA are off-limits). <strong>Isotretinoin:</strong> the old 6-month ban is obsolete — the <a href="https://jamanetwork.com/journals/jamadermatology/article-abstract/2632046" rel="noopener nofollow" target="_blank">2017 consensus</a> found insufficient evidence to delay microneedling for patients on or recently off it; many clinics still apply a short buffer.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-works',
    category: 'faq',
    title: 'Does microneedling actually work, or is it hype?',
    tldr: 'For scars, solidly. For wrinkles, modestly. For lifting, no.',
    bodyHtml: `
      <p>Acne scars: yes — network meta-analysis of 24 randomized trials confirms it, with combinations best. Wrinkles and glow: real but smaller-scale evidence. Sagging: wrong tool. The trick is matching the indication, not believing one treatment does everything.</p>
    `,
  },
  {
    id: 'faq-dark-skin',
    category: 'faq',
    title: 'Is it safe for darker skin?',
    tldr: 'It\'s the standout option — pooled trials recorded zero PIH.',
    bodyHtml: `
      <p>Microneedling is the collagen-induction method of choice in Fitzpatrick IV–VI: no PIH in pooled RCT data, versus 30% after fractional CO₂ in a darker-skin split-face trial. Risk is reduced, not abolished — conservative settings and strict SPF still apply.</p>
    `,
  },
  {
    id: 'faq-sessions',
    category: 'faq',
    title: 'How many sessions until I see something?',
    tldr: '3–6 sessions; first changes ~6 weeks; judge at 3 months post-series.',
    bodyHtml: `
      <p>Collagen is slow. Trials run 3–6 monthly sessions; texture changes appear from week 4–6, and the fair verdict comes 3 months after the final session. Scar gains are durable; rejuvenation gains want a maintenance session or two per year.</p>
    `,
  },
  {
    id: 'faq-morpheus',
    category: 'faq',
    title: 'Is Morpheus8 worth 3× the price of classic microneedling?',
    tldr: 'For scars + mild laxity, arguably. For "lifting", no.',
    bodyHtml: `
      <p>RF microneedling rivals fractional laser for scars with less pigment risk, and adds modest firmness classic needling can't. But independent lifting evidence is thin (one estimate: ~37% of a facelift per session), and deep aggressive settings carry a logged facial fat-loss signal. Buy it for scars and texture with a conservative operator; don't buy the facelift story.</p>
    `,
  },
  {
    id: 'faq-home',
    category: 'faq',
    title: 'Can I just use a dermaroller at home?',
    tldr: 'For serum absorption, mildly. For remodelling, no.',
    bodyHtml: `
      <p>Home depths boost absorption of simple serums and that's the extent of the evidence — no meaningful scar or wrinkle remodelling. Never roll strong actives in (granuloma risk), replace heads often, and leave anything ≥0.5&nbsp;mm to professionals with sterile cartridges.</p>
    `,
  },
  {
    id: 'faq-numbing',
    category: 'faq',
    title: 'Does it hurt — and is numbing cream safe?',
    tldr: 'Tolerable with clinic numbing; DIY strong creams have killed.',
    bodyHtml: `
      <p>With clinic-applied topical anaesthetic, deep microneedling is uncomfortable rather than painful (RF a bit more). The genuine danger is the shortcut: deaths and permanent injury are documented from strong compounded lidocaine creams self-applied over large occluded areas before procedures. Face-only, clinic-applied, time-limited — never cling film at home.</p>
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
    intro: 'How collagen induction works, and what the RF versions add.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book',
    intro: 'The darker-skin advantage, and the practical numbers.',
    sections: context,
  },
  {
    id: 'mn',
    title: 'Classic microneedling, by indication',
    intro: 'From its flagship (acne scars) to its hazards (needled-in serums), graded.',
    sections: mn,
  },
  {
    id: 'rf',
    title: 'RF microneedling',
    intro: 'Where the added heat earns its price — and where the marketing outruns the data.',
    sections: rf,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'Low-risk done properly; the avoidable disasters, listed.',
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
  scars: 'Scars',
  wrinkles: 'Wrinkles',
  pigment: 'Pigment',
  hair: 'Hair',
  body: 'Body',
  hazard: 'Hazard check',
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

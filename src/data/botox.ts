/**
 * Botox & neuromodulators guide — single source of truth.
 *
 * Consumed by /botox. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Tiers grade the *evidence* for each use, not whether the mechanism is
 * plausible: a bunny-line injection relaxes a muscle exactly like a frown
 * line does, but it has never been put through a controlled trial.
 * Prices are indicative private rates for Western/Central Europe and the
 * UK, not sourced quotes; regulatory status is as of September 2026.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'on-label' | 'off-label' | 'medical' | 'skin-quality' | 'general';

export type SectionCategory = 'concept' | 'context' | 'use' | 'beyond' | 'product' | 'safety' | 'faq';

export interface Section {
  id: string;
  category: SectionCategory;
  title: string;
  tldr: string;
  evidence?: Evidence;
  focus?: FocusArea;
  bodyHtml: string;
  note?: string;
  /** Treatment rows: typical dose / interval, for the expanded card. */
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
  'Botulinum toxin is the most-trialled aesthetic procedure in existence: every approved brand beat placebo in large randomized trials for frown lines, and the differences between brands are smaller than the differences between injectors.',
  'It works on lines made by muscle movement. Frown, forehead and crow\'s feet respond in 3–7 days, peak at two weeks and fade over 3–4 months; lines etched into resting skin need filler, resurfacing or time.',
  'The lower face and neck are the growth area of the evidence: the masseter (jaw slimming) and the platysma (neck bands, jawline) now have phase 3 trials behind them, and the platysma indication was approved in 2024.',
  'The realistic risks are cosmetic and temporary — a drooping eyelid in roughly 1–5% of upper-face treatments, a heavy brow if the forehead is overdosed. Botulism from a licensed product at cosmetic doses is essentially unreported; from unlicensed vials it happened to 25 people in England in 2025.',
  'The marketing tier — "preventive Botox" in your 20s, peptide creams that "work like Botox", weekly "baby Botox" top-ups — rests on a twin case report and cell-culture data, not trials.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'how-it-works',
    category: 'concept',
    title: 'What botulinum toxin is and how it works',
    tldr: 'A purified bacterial protein that stops a muscle receiving the nerve signal to contract — for about three months, then the connection regrows.',
    bodyHtml: `
      <p>Botulinum toxin type A is a protein made by the bacterium <em>Clostridium botulinum</em>, purified and diluted to a tiny fraction of a harmful dose. Injected into a muscle, it enters the nerve ending and cuts a protein (SNAP-25) that the nerve needs to release acetylcholine, the chemical that tells muscle to contract. The muscle can no longer respond to that nerve ending, so the skin over it stops folding.</p>
      <p>The effect is not instant, because the toxin has to be taken up and the existing acetylcholine used up: most people see the first change at <strong>3–7 days</strong> and the full result at <strong>two weeks</strong>. It is not permanent, because the nerve sprouts new endings and rebuilds the connection — the reason the effect wears off over <strong>3–4 months</strong> in the upper face.</p>
      <p>Every aesthetic brand — Botox/Vistabel, Dysport/Azzalure, Xeomin/Bocouture, Jeuveau/Nuceiva, Letybo, Relfydess, Daxxify — is the same 150 kDa neurotoxin. They differ in the proteins packaged around it, the manufacturing process, and above all their <strong>units, which are not interchangeable</strong> between brands (a Dysport unit is roughly a third of a Botox unit). "Neuromodulator" and "neurotoxin" are the trade's words for the whole class; "Botox" is one brand that became the generic term.</p>
    `,
  },
  {
    id: 'how-long',
    category: 'concept',
    title: 'How long it lasts — the trial numbers by area',
    tldr: 'Frown and crow\'s feet: about 4 months. Forehead: slightly less. Jaw and neck: 4–6 months. Underarm sweating: 6 months or more.',
    bodyHtml: `
      <p>Duration is where expectations most often go wrong, so here are the numbers the trials actually produced. In the pivotal frown-line study the visible effect was <a href="https://pubmed.ncbi.nlm.nih.gov/12063480/" rel="noopener nofollow" target="_blank">"maintained for many patients through day 120"</a>, and in pooled incobotulinumtoxinA data the investigator-rated responder rate fell from <a href="https://pubmed.ncbi.nlm.nih.gov/25111351/" rel="noopener nofollow" target="_blank">93% at day 30 to 46% at day 120</a>. Crow's feet last a little longer: median response duration of <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5414775/" rel="noopener nofollow" target="_blank">119–148 days</a> across two phase 3 trials.</p>
      <p>The long-acting formulation daxibotulinumtoxinA (Daxxify) kept frown lines at "none or mild" for a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6940025/" rel="noopener nofollow" target="_blank">median of 24 weeks</a> in its two phase 3 trials — about six weeks longer than conventional products typically manage, at double the unit dose.</p>
      <p>Two practical rules follow. First, "it wore off in six weeks" usually means under-dosing or a strong muscle (men often need <a href="https://pubmed.ncbi.nlm.nih.gov/16188182/" rel="noopener nofollow" target="_blank">twice the standard glabellar dose</a>), not a faulty product. Second, the interval tends to stretch with regular treatment as the muscle weakens and the frowning habit fades — many long-term patients settle at three treatments a year.</p>
    `,
  },
  {
    id: 'can-and-cant',
    category: 'concept',
    title: 'What it can and cannot fix',
    tldr: 'Excellent for lines that appear when you move; partial for lines already etched at rest; useless for sagging and volume loss.',
    bodyHtml: `
      <p>Botulinum toxin treats <strong>dynamic</strong> lines: the frown "11s", forehead bars, crow's feet, bunny lines, the dimpled chin — folds created by a muscle pulling on skin. Stop the pull and the fold disappears at once. Lines that have become <strong>static</strong> — visible with the face completely relaxed — soften only partly, because the skin has creased like paper; repeated treatment over years lets the crease remodel, and a small split-face trial found that adding a hyaluronic-acid filler to the glabella gave <a href="https://pubmed.ncbi.nlm.nih.gov/24305424/" rel="noopener nofollow" target="_blank">greater static-line reduction at six months</a> than toxin alone.</p>
      <p>It does nothing for the things most people over 45 actually notice first: hollow cheeks, jowls, loose neck skin, thin lips, pigmentation. Those belong to <a href="/fillers">fillers</a>, energy devices and resurfacing — see the <a href="/sagging-skin">sagging skin</a> and <a href="/wrinkles">wrinkles</a> guides. The one exception is the neck: relaxing the platysma improves vertical bands and jawline definition (Part 01), though it cannot lift skin that has already stretched.</p>
      <p>A subtler limitation: it relaxes whatever it reaches. Placed too low on the forehead it drops the brow; spread near the eyelid lifter it drops the lid; injected into the wrong lip muscle it changes the smile. Almost every complaint about "bad Botox" is a placement or dose problem, which is why the injector matters more than the vial.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'choosing-injector',
    category: 'context',
    title: 'Choosing an injector — and what it costs',
    tldr: 'A prescription-only medicine in every EU country and the UK: prescribed and injected by, or under, a doctor, dentist or prescribing nurse — and priced by area, €150–350 each.',
    bodyHtml: `
      <p>Botulinum toxin is a <strong>prescription-only medicine</strong> throughout the EU and the UK. That means a consultation with a prescriber, a licensed product with a batch number you can ask to see, and a clinic that can manage a complication. In the UK it has been illegal to inject anyone under 18 for cosmetic purposes since the <a href="https://www.legislation.gov.uk/ukpga/2021/19/contents" rel="noopener nofollow" target="_blank">2021 Act</a>; several EU countries restrict aesthetic injecting to doctors and dentists altogether.</p>
      <p><strong>How it is priced.</strong> Most European clinics charge per area — the glabella, the forehead and the crow's feet are the "three areas" — at roughly <strong>€150–350 per area</strong> (UK £150–300), or €350–600 for all three. Some charge per unit (€8–15 per Botox unit), which is more transparent: a standard glabella is 20 units, crow's feet 24, forehead 10–20. Masseter, platysma and hyperhidrosis need more product and cost more (Parts 01–02). Very cheap offers usually mean diluted product, low doses or an unlicensed vial (see Safety).</p>
      <p><strong>What to look for:</strong> a prescriber who examines your face moving before deciding on a dose, asks what you want to keep (some frown, a brow lift, a natural forehead), photographs you, and books a <strong>two-week review</strong> where small top-ups are included. Ask which product and how many units — a good injector tells you without being asked.</p>
    `,
  },
  {
    id: 'the-appointment',
    category: 'context',
    title: 'What actually happens at the appointment',
    tldr: 'Ten minutes of injections with a very fine needle, tiny bumps that settle within the hour, and a result you judge at day 14 — not day 2.',
    bodyHtml: `
      <p>After the consultation the injector reconstitutes the powder with saline (or uses a ready-mixed liquid product), marks the injection points while you frown, raise your brows and smile, and places 5–15 small injections with a 30- or 32-gauge needle. Discomfort is a brief sting; anaesthetic cream is optional. Each point leaves a small bleb that flattens within 20–30 minutes; a pinpoint bruise is possible, especially around the eyes.</p>
      <p><strong>Aftercare</strong> is mostly tradition. The usual advice — stay upright for four hours, no rubbing, no heavy exercise or facials that day — is sensible but thinly evidenced. The one intervention with a trial behind it goes the other way: a randomized crossover study found that <a href="https://pubmed.ncbi.nlm.nih.gov/30617028/" rel="noopener nofollow" target="_blank">deliberately frowning and raising the brows for four hours after injection</a> brought the onset forward by about a day.</p>
      <p>Judge nothing before day 14. At day 3–5 one side often kicks in first; asymmetry at that stage is normal, at day 14 it is a reason for a top-up. Photographs at rest and at maximum expression, before and after, are the only reliable way to see what you paid for — and to compare injectors over time.</p>
    `,
  },
];

const uses: Section[] = [
  {
    id: 'use-glabellar',
    category: 'use',
    title: 'Frown lines (the "11s")',
    tldr: 'The most-trialled indication in aesthetics: every brand cleared frown lines in 70–95% of trial patients versus 0–4% on placebo.',
    evidence: 'strong',
    focus: 'on-label',
    sessions: 'Every 3–4 months (20 U Botox-equivalent)',
    downtime: 'None; bruise possible',
    cost: '€150–350',
    bodyHtml: `
      <p>The vertical lines between the brows are made by the corrugator and procerus muscles, and they are where every botulinum toxin earned its licence. In the original <a href="https://pubmed.ncbi.nlm.nih.gov/12063480/" rel="noopener nofollow" target="_blank">2002 Botox trial</a> (264 patients, 20 units into five points) the effect was significant at every visit for four months. Each later brand ran the same design: incobotulinumtoxinA reached a <a href="https://pubmed.ncbi.nlm.nih.gov/25111351/" rel="noopener nofollow" target="_blank">93% responder rate at day 30</a>; prabotulinumtoxinA was <a href="https://pubmed.ncbi.nlm.nih.gov/30951166/" rel="noopener nofollow" target="_blank">non-inferior to Botox head-to-head</a> (87% vs 83% responders, 540 patients); the liquid product relabotulinumtoxinA scored <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11566037/" rel="noopener nofollow" target="_blank">96% "none or mild" at one month</a> against 4.5% on placebo.</p>
      <p>A <a href="https://pubmed.ncbi.nlm.nih.gov/36097079/" rel="noopener nofollow" target="_blank">network meta-analysis of the randomized trials</a> found every formulation "far superior to placebo", with the long-acting daxibotulinumtoxinA ranked highest for response and duration. The differences between the conventional brands are, in practice, differences in onset by a day or two and in how the injector doses them.</p>
      <p><strong>What to expect:</strong> onset at 3–5 days, full effect at 14, softening from month three. The one common side effect specific to this area is a drooping upper eyelid when toxin reaches the lid-lifting muscle — 5.4% in the 2002 trial, mostly mild, and 1–3% in modern series (see Safety).</p>
    `,
  },
  {
    id: 'use-crows-feet',
    category: 'use',
    title: 'Crow\'s feet',
    tldr: 'Licensed on both sides of the Atlantic on the back of three phase 3 trials; the effect lasts a little longer than in the frown.',
    evidence: 'strong',
    focus: 'on-label',
    sessions: 'Every 4 months (24 U Botox-equivalent, both sides)',
    downtime: 'None; bruising more likely here',
    cost: '€150–350',
    bodyHtml: `
      <p>The fan of lines at the outer eye is the orbicularis oculi contracting when you smile. In the Botox phase 3 programme, 24 units across both sides took <a href="https://pubmed.ncbi.nlm.nih.gov/25485803/" rel="noopener nofollow" target="_blank">55% of patients to "none or mild" at maximum smile</a> versus 3% on placebo (a strict endpoint — most of the rest improved by a grade), and the effect held up on <a href="https://pubmed.ncbi.nlm.nih.gov/25993609/" rel="noopener nofollow" target="_blank">repeated treatment</a>. Median duration of response was <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5414775/" rel="noopener nofollow" target="_blank">119–148 days</a>. RelabotulinumtoxinA has its own six-month phase 3 trial here (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11864047/" rel="noopener nofollow" target="_blank">READY-2</a>).</p>
      <p>Two honest caveats. Crow's feet in someone over 50 are usually part dynamic and part sun-etched: toxin handles the first half, and the <a href="/crows-feet">crow's feet guide</a> covers the resurfacing that handles the second. And the lower part of the fan cannot be fully treated without softening the smile — a natural result keeps some movement.</p>
      <p><strong>What to expect:</strong> smoother skin at the outer eye when smiling, a subtly more "open" eye if the lateral brow is also released. Bruising is more common here because of the fine surface veins.</p>
    `,
  },
  {
    id: 'use-forehead',
    category: 'use',
    title: 'Horizontal forehead lines',
    tldr: 'Works in ~90% of trial patients when treated together with the frown — and drops the brow if the forehead is treated alone or overdosed.',
    evidence: 'strong',
    focus: 'on-label',
    sessions: 'Every 3 months (10–20 U forehead + 20 U glabella)',
    downtime: 'None',
    cost: '€150–300 (usually with the glabella)',
    bodyHtml: `
      <p>Forehead bars are made by the frontalis, the only muscle that lifts the brows. That is the whole difficulty: weaken it and the brow comes down. The licensing trials therefore treated the forehead <strong>together with the glabella</strong> (the muscles that pull the brow down), and at 20 + 20 units reached <a href="https://pubmed.ncbi.nlm.nih.gov/26863598/" rel="noopener nofollow" target="_blank">91% responders</a> against 2% on placebo; a lower 10 + 20 dose scored 86% with a shorter duration.</p>
      <p>The brow effect is real and measurable: a 3D study found that treating frontalis and glabella together <a href="https://pubmed.ncbi.nlm.nih.gov/30124769/" rel="noopener nofollow" target="_blank">lowered the brow across most of its length at two weeks</a>, recovering by three months, while glabella-only treatment did not. In people who already use the forehead to hold up heavy lids, a conservative dose in the upper half of the forehead — or no forehead treatment at all — is the right call. This is the area where "less" most often looks better.</p>
      <p><strong>What to expect:</strong> a smooth forehead at rest and a softened, not frozen, lift; duration typically a little shorter than the glabella. If your brows feel heavy at day 14, the dose was too high for you — note it for next time, it wears off.</p>
    `,
  },
  {
    id: 'use-brow-lift',
    category: 'use',
    title: 'The "chemical brow lift"',
    tldr: 'Releasing the muscles that pull the brow down lifts it by 1–2 mm in a randomized trial — subtle, real, and satisfying to most.',
    evidence: 'moderate',
    focus: 'off-label',
    sessions: 'Every 3–4 months',
    downtime: 'None',
    cost: '€100–250 (often bundled)',
    bodyHtml: `
      <p>The brow sits where the frontalis (pulling up) balances the glabellar muscles and the outer orbicularis oculi (pulling down). Relaxing the depressors lets the frontalis win. In a <a href="https://pubmed.ncbi.nlm.nih.gov/29280866/" rel="noopener nofollow" target="_blank">randomized trial of 30 patients</a>, injecting the lateral depressors alone lifted the brow by 0.6–2.1 mm along its length, and 97% of patients were satisfied; a daxibotulinumtoxinA analysis measured a similar <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10638667/" rel="noopener nofollow" target="_blank">0.6–0.9 mm lateral lift</a> from a standard glabellar treatment.</p>
      <p>Millimetres sound small; on the face they read as a more open, rested eye. The technique is off-label, needs an injector who understands your brow anatomy, and is the wrong choice if you have true excess eyelid skin — that is a surgical problem (see the <a href="/hooded-eyes">hooded eyes guide</a>).</p>
      <p><strong>What to expect:</strong> a subtle outer-brow lift at two weeks, more noticeable in the mirror than in photographs. It pairs naturally with crow's feet treatment because the same muscle is involved.</p>
    `,
  },
  {
    id: 'use-masseter',
    category: 'use',
    title: 'Jaw slimming and clenching (masseter)',
    tldr: 'A phase 3 trial of 376 people, a meta-analysis of five randomized trials and a CT study showing no loss of jawbone density — the best-evidenced lower-face use.',
    evidence: 'strong',
    focus: 'off-label',
    sessions: 'Every 4–6 months (48–72 U Botox-equivalent)',
    downtime: 'None; chewing fatigue for 1–2 weeks',
    cost: '€300–600',
    bodyHtml: `
      <p>The masseter is the thick chewing muscle at the angle of the jaw; when it is enlarged — by genetics, clenching or grinding — the lower face looks square. Relaxing it lets the muscle shrink over 4–8 weeks. In a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13064654/" rel="noopener nofollow" target="_blank">multiregional phase 3 trial</a> (376 participants, 72 units), 51% achieved a two-grade improvement on the prominence scale at day 90 versus 2% on placebo, with a measurable reduction in lower-facial width. A <a href="https://pubmed.ncbi.nlm.nih.gov/42379083/" rel="noopener nofollow" target="_blank">meta-analysis of five randomized trials</a> (536 participants) confirmed reduced muscle thickness and higher satisfaction, while noting the size of the effect varied between studies.</p>
      <p>The safety question people ask — does resting the chewing muscle thin the jawbone? — has now been tested: in a 12-month placebo-controlled study with CT scans, one or two masseter treatments <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12706864/" rel="noopener nofollow" target="_blank">did not change mandibular bone density</a>. Longer-term data are still thin, which argues for the lowest dose that works and honest intervals.</p>
      <p><strong>What to expect:</strong> a softer jaw angle from about six weeks, peaking at three months, and — for clenchers — less jaw ache and fewer headaches (Part 02). Early side effects are chewing fatigue and, rarely, a changed smile if toxin spreads forward. Regulatory status is off-label in Europe at the time of writing.</p>
    `,
  },
  {
    id: 'use-platysma',
    category: 'use',
    title: 'Neck bands and jawline (platysma)',
    tldr: 'The newest approved indication: three randomized trials in 912 adults, a four-fold higher chance of visible improvement, and no swallowing problems reported.',
    evidence: 'strong',
    focus: 'off-label',
    sessions: 'Every 4 months (26–36 U Botox-equivalent)',
    downtime: 'None',
    cost: '€300–600',
    bodyHtml: `
      <p>The platysma is the thin sheet of muscle in the front of the neck; with age its edges tighten into vertical bands and its pull blunts the jawline. Injecting the bands at multiple superficial points — the technique once marketed as the "Nefertiti lift" — is now backed by proper trials. In the two phase 3 studies, <a href="https://pubmed.ncbi.nlm.nih.gov/39442886/" rel="noopener nofollow" target="_blank">57% of treated participants</a> reached "minimal or mild" on the investigator scale at day 14 versus 2% on placebo, and <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11736717/" rel="noopener nofollow" target="_blank">77% improved by at least one grade</a> against 21%, with higher satisfaction and less bother about the jawline. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12855634/" rel="noopener nofollow" target="_blank">meta-analysis of the three randomized trials</a> (912 adults) put the relative chance of improvement at 4.1×, and a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13290051/" rel="noopener nofollow" target="_blank">repeat-treatment study</a> found the safety profile consistent over further cycles. The FDA approved the indication for onabotulinumtoxinA in 2024; in the EU it remains off-label for now.</p>
      <p>Expectations matter more here than anywhere: this softens bands and sharpens the angle between jaw and neck by a grade or two. It does not remove loose skin or fat under the chin (see the <a href="/double-chin">double chin</a> and <a href="/neck">neck</a> guides).</p>
      <p><strong>What to expect:</strong> quieter bands within two weeks, a subtly cleaner jawline, effect fading by month four. No dysphagia or neck weakness occurred in the trials at these doses; both are possible with heavy-handed off-protocol dosing.</p>
    `,
  },
  {
    id: 'use-gummy-smile',
    category: 'use',
    title: 'Gummy smile',
    tldr: 'A meta-analysis of 17 studies: 3.4 mm less gum on show at two weeks, lasting three months and back near baseline by six.',
    evidence: 'moderate',
    focus: 'off-label',
    sessions: 'Every 4–6 months (2–4 U per side)',
    downtime: 'None',
    cost: '€100–250',
    bodyHtml: `
      <p>A "gummy" smile is usually a hyperactive lip-elevating muscle rather than a dental problem. Two to four units into the muscle either side of the nose let the upper lip settle lower. A <a href="https://pubmed.ncbi.nlm.nih.gov/34652491/" rel="noopener nofollow" target="_blank">meta-analysis of 17 studies</a> found a mean 3.42 mm reduction in gum exposure at two weeks, effective for at least 12 weeks and back near baseline by 24 — best suited to smiles showing up to 4 mm of gum. The trials are small and mostly uncontrolled, hence the moderate tier, but the effect is consistent and easy to see.</p>
      <p>The risk is over-treatment: too much and the upper lip lengthens or the smile flattens for three months. Start low; the review literature is clear that <a href="https://pubmed.ncbi.nlm.nih.gov/39134226/" rel="noopener nofollow" target="_blank">dose and injection site</a> determine the result.</p>
      <p><strong>What to expect:</strong> a noticeably lower lip line on smiling at two weeks; retreatment when it returns. Surgery (lip repositioning, crown lengthening) is the permanent option for larger exposures.</p>
    `,
  },
  {
    id: 'use-lip-flip',
    category: 'use',
    title: 'The "lip flip"',
    tldr: 'Four to six units along the upper lip evert the border for a subtle fuller look — small studies, small effect, no added volume.',
    evidence: 'emerging',
    focus: 'off-label',
    sessions: 'Every 2–3 months (4–6 U)',
    downtime: 'None; straws and whistling harder for a few weeks',
    cost: '€100–200',
    bodyHtml: `
      <p>Relaxing the top edge of the orbicularis oris lets the upper lip roll slightly outward, showing more of the red lip without adding volume. A <a href="https://pubmed.ncbi.nlm.nih.gov/40377719/" rel="noopener nofollow" target="_blank">2025 systematic review</a> found seven small studies using 4–6 units, with consistent eversion and high satisfaction; a prospective study of 17 women measured a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13314836/" rel="noopener nofollow" target="_blank">modest but significant increase in upper-lip height</a> at 15 days with no change in volume, and transient numbness or difficulty pursing the lips in some.</p>
      <p>Honest framing: it is a millimetre effect that lasts two to three months, at the cost of a slightly weaker lip for a few weeks. For a genuinely thin lip, a conservative <a href="/fillers#use-lips">filler</a> does more; the two are often combined.</p>
      <p><strong>What to expect:</strong> a slightly more visible upper lip border, most obvious when smiling. Avoid it before a holiday if you drink through straws or play a wind instrument.</p>
    `,
  },
  {
    id: 'use-mouth-corners',
    category: 'use',
    title: 'Downturned mouth corners (DAO)',
    tldr: 'Relaxing the muscle that pulls the corners down lifts a "sad" mouth in retrospective series and anatomical studies — no controlled trial yet.',
    evidence: 'emerging',
    focus: 'off-label',
    sessions: 'Every 3–4 months (2–4 U per side)',
    downtime: 'None',
    cost: '€100–250',
    bodyHtml: `
      <p>The depressor anguli oris (DAO) runs from the jaw to the corner of the mouth and, when overactive, gives a permanently disappointed look and deepens the marionette line. A few units into its belly let the lip elevators win. The evidence is a <a href="https://pubmed.ncbi.nlm.nih.gov/35139057/" rel="noopener nofollow" target="_blank">retrospective series with anatomical mapping</a> and careful <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10319486/" rel="noopener nofollow" target="_blank">injection-point studies</a>, not randomized trials — the muscle overlaps its neighbour (which lowers the lower lip), and a misplaced injection produces a crooked smile for three months.</p>
      <p>Most of the marionette shadow is volume loss and skin, which is why this is usually an adjunct to filler rather than a replacement (see <a href="/marionette-lines">marionette lines</a>).</p>
      <p><strong>What to expect:</strong> corners that sit level rather than turned down, visible from about ten days. Choose an injector who does lower-face work regularly.</p>
    `,
  },
  {
    id: 'use-bunny-lines',
    category: 'use',
    title: 'Bunny lines (nose scrunch)',
    tldr: 'Diagonal lines on the nose bridge when you smile or frown; treated routinely with a couple of units each side, on anatomy rather than trials.',
    evidence: 'limited',
    focus: 'off-label',
    sessions: 'Every 3–4 months (2–4 U per side)',
    downtime: 'None',
    cost: '€80–150 (usually bundled)',
    bodyHtml: `
      <p>The nasalis muscle wrinkles the sides of the nose when you scrunch — lines that often become more visible after the glabella is treated, because the face recruits the nose instead. Two to four units per side, high on the nasal side wall, quiet them. The published literature is <a href="https://pubmed.ncbi.nlm.nih.gov/39711041/" rel="noopener nofollow" target="_blank">cadaver and ultrasound anatomy</a> and expert technique papers; there is no controlled trial, which is the reason for the tier, not any doubt about the mechanism.</p>
      <p>The risk is placement: too low or too lateral and the lip elevators relax, lengthening the upper lip.</p>
      <p><strong>What to expect:</strong> a smooth nose bridge on expression; most injectors add it to a glabellar treatment when they see the lines recruited.</p>
    `,
  },
  {
    id: 'use-chin',
    category: 'use',
    title: 'Dimpled or "cobblestone" chin (mentalis)',
    tldr: 'A hyperactive chin muscle puckers the skin and deepens the crease below the lip; a few units smooth it, on anatomical evidence only.',
    evidence: 'limited',
    focus: 'off-label',
    sessions: 'Every 3–4 months (4–8 U)',
    downtime: 'None',
    cost: '€80–150',
    bodyHtml: `
      <p>The mentalis lifts and puckers the chin; when it overworks — often to help close the lips over a receding chin — the skin dimples like orange peel and the crease below the lip deepens. Four to eight units into the muscle belly relax it. Evidence consists of <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7911364/" rel="noopener nofollow" target="_blank">anatomical injection-point studies</a> and technique reviews; it is a standard, low-risk adjunct, but nobody has run a trial.</p>
      <p>If the chin is dimpling because it is small, filler to the chin (<a href="/fillers#use-chin">the filler guide</a>) addresses the cause and the toxin the symptom.</p>
      <p><strong>What to expect:</strong> a smooth chin at rest and on speaking; lower-lip weakness if the injection strays sideways.</p>
    `,
  },
  {
    id: 'use-perioral',
    category: 'use',
    title: 'Lip lines ("smoker\'s lines")',
    tldr: 'Tiny doses around the mouth soften vertical lip lines in small studies, at the price of a weaker pucker — resurfacing does more for etched lines.',
    evidence: 'emerging',
    focus: 'off-label',
    sessions: 'Every 3 months (4–6 U total)',
    downtime: 'None; lip weakness possible',
    cost: '€100–200',
    bodyHtml: `
      <p>Vertical lines above the lip are partly the pursing muscle (orbicularis oris) and partly sun-damaged, thinned skin. Micro-doses along the lip border reduce the pursing component: a <a href="https://pubmed.ncbi.nlm.nih.gov/12752516/" rel="noopener nofollow" target="_blank">2003 series</a> established the technique and a <a href="https://pubmed.ncbi.nlm.nih.gov/17760597/" rel="noopener nofollow" target="_blank">controlled study</a> found toxin prolonged the benefit of a resurfacing peel. On its own it is a modest effect with a functional cost — a few weeks of difficulty with straws, whistling and some consonants.</p>
      <p>For the etched, static component the <a href="/lip-lines">lip lines guide</a> grades the resurfacing lasers and peels that carry most of the evidence.</p>
      <p><strong>What to expect:</strong> softer lines on puckering, minimal change at rest. Doses here are tiny (1–2 units per point); this is not an area for a first-time injector.</p>
    `,
  },
];

const beyond: Section[] = [
  {
    id: 'beyond-hyperhidrosis',
    category: 'beyond',
    title: 'Underarm sweating (hyperhidrosis)',
    tldr: 'Meta-analyses of a dozen randomized trials: most patients halve their sweating, quality of life improves markedly, and one treatment lasts around six months.',
    evidence: 'strong',
    focus: 'medical',
    sessions: 'Every 6–9 months (50 U per armpit)',
    downtime: 'None',
    cost: '€400–800',
    bodyHtml: `
      <p>Sweat glands are also driven by acetylcholine, so 15–20 shallow injections across each armpit switch them off for months. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8316174/" rel="noopener nofollow" target="_blank">meta-analysis of eight placebo-controlled trials</a> (937 patients) found a 63-percentage-point higher chance of cutting measured sweat by more than half, and a 5.6-point improvement on the dermatology quality-of-life index — a large effect; a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12500766/" rel="noopener nofollow" target="_blank">2025 meta-analysis of twelve trials</a> confirmed it and found fewer side effects than the alternatives. Underarm treatment is a licensed medical indication in Europe, so it may be reimbursable when prescription antiperspirants have failed.</p>
      <p>Hands and feet also respond but hurt considerably more to inject and can weaken grip briefly; a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13056597/" rel="noopener nofollow" target="_blank">2026 review of palmar treatment</a> found sustained benefit and high satisfaction.</p>
      <p><strong>What to expect:</strong> dry armpits from about a week, typically for six months or more — the treatment most patients describe as life-changing rather than cosmetic.</p>
    `,
  },
  {
    id: 'beyond-migraine',
    category: 'beyond',
    title: 'Chronic migraine',
    tldr: 'A licensed neurological treatment: 31 injections every 12 weeks cut headache days by about two more per month than placebo in the two pivotal trials.',
    evidence: 'strong',
    focus: 'medical',
    sessions: 'Every 12 weeks (155–195 U, 31 sites)',
    downtime: 'None',
    cost: 'Neurology-led; often reimbursed',
    bodyHtml: `
      <p>For people with chronic migraine — headache on 15 or more days a month — onabotulinumtoxinA injected in a fixed pattern across the forehead, temples, back of the head, neck and shoulders is an approved preventive. In the pooled <a href="https://pubmed.ncbi.nlm.nih.gov/20487038/" rel="noopener nofollow" target="_blank">PREEMPT trials</a> (1,384 adults), headache days fell by 8.4 per month on treatment versus 6.6 on placebo at 24 weeks, with the gap widening over a year of open-label treatment. It does not work for episodic migraine.</p>
      <p>This belongs with a neurologist, not an aesthetic clinic — but it is worth knowing that the forehead part of the migraine protocol also softens forehead and frown lines, and that <a href="https://pubmed.ncbi.nlm.nih.gov/37366143/" rel="noopener nofollow" target="_blank">technique reviews</a> now address the cosmetic side of the injections.</p>
      <p><strong>What to expect:</strong> fewer and milder headache days from the second or third cycle; neck weakness and a stiff neck are the main side effects at these doses.</p>
    `,
  },
  {
    id: 'beyond-bruxism',
    category: 'beyond',
    title: 'Teeth grinding and jaw pain (bruxism)',
    tldr: 'Ten randomized trials: bite force and pain fall for about three months, more than with a night guard — the medical side of masseter treatment.',
    evidence: 'moderate',
    focus: 'off-label',
    sessions: 'Every 4–6 months (25–40 U per side)',
    downtime: 'None; chewing fatigue',
    cost: '€300–600',
    bodyHtml: `
      <p>Bruxism is grinding and clenching, mostly during sleep; over years it wears teeth, aches the jaw and enlarges the masseter. Toxin into the masseter (sometimes the temporalis too) cannot stop the brain's grinding signal, but it takes the force out of it. A <a href="https://pubmed.ncbi.nlm.nih.gov/36694050/" rel="noopener nofollow" target="_blank">meta-analysis of ten randomized trials</a> found maximal bite force and pain significantly reduced at one and three months compared with both night guards and saline injections, with pain falling in proportion to dose; by six months the difference from placebo had faded, hence the moderate tier. A <a href="https://pubmed.ncbi.nlm.nih.gov/34955330/" rel="noopener nofollow" target="_blank">second meta-analysis</a> focused on night-time bruxism reached the same conclusion.</p>
      <p>For most patients this is combined with a dentist-made night guard, which protects the teeth, and treated as a medical rather than cosmetic booking — the jaw-slimming effect (Part 01) comes along for free.</p>
      <p><strong>What to expect:</strong> less morning jaw ache and fewer tension headaches within two weeks, a softer jawline by two months.</p>
    `,
  },
  {
    id: 'beyond-scars',
    category: 'beyond',
    title: 'Fresh surgical scars',
    tldr: 'Injected around a new facial wound, toxin relaxes the tension that widens scars — narrower, better-rated scars across ten small randomized trials.',
    evidence: 'moderate',
    focus: 'medical',
    sessions: 'Once, within days of surgery',
    downtime: 'None',
    cost: '€150–400',
    bodyHtml: `
      <p>Scars widen and thicken when the surrounding muscle keeps tugging on the healing wound. Injecting toxin alongside a fresh facial incision — after a facelift, mole removal or forehead surgery — takes that tension off for the critical first three months. A <a href="https://pubmed.ncbi.nlm.nih.gov/34609526/" rel="noopener nofollow" target="_blank">meta-analysis of ten randomized trials</a> found better appearance scores, lower scar-scale ratings and narrower scars than controls, with no extra complications; an <a href="https://pubmed.ncbi.nlm.nih.gov/30903249/" rel="noopener nofollow" target="_blank">earlier meta-analysis</a> agreed. The trials are small (114 patients across all ten), which caps the tier.</p>
      <p>For established hypertrophic scars and keloids, toxin has been compared with steroid injections in <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6489528/" rel="noopener nofollow" target="_blank">small trials</a> with mixed results; steroid remains the standard.</p>
      <p><strong>What to expect:</strong> something to ask a surgeon about before a facial procedure, not a stand-alone treatment.</p>
    `,
  },
  {
    id: 'beyond-rosacea',
    category: 'beyond',
    title: 'Rosacea flushing and redness',
    tldr: 'Diluted toxin injected into the skin reduces persistent redness and flushing in a split-face randomized trial and 17 smaller studies — for three to six months.',
    evidence: 'emerging',
    focus: 'skin-quality',
    sessions: 'Every 3–6 months (intradermal, 15–30 U)',
    downtime: 'Local redness for a day; bruising possible',
    cost: '€250–500',
    bodyHtml: `
      <p>Botulinum toxin also blocks the nerve signals that dilate skin vessels and activate mast cells, which is the rationale for injecting a very dilute solution into the skin of the cheeks and nose. A <a href="https://pubmed.ncbi.nlm.nih.gov/39679585/" rel="noopener nofollow" target="_blank">randomized, double-blind split-face trial</a> in 30 patients found significantly lower clinician redness scores, erythema-meter readings and vessel density on the treated side versus saline at one month; a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10823151/" rel="noopener nofollow" target="_blank">systematic review of 17 studies</a> reported consistent improvement in redness and flushing, recurring at three to six months, with local redness in a quarter of patients, bruising in 5% and unintended muscle relaxation in 4%.</p>
      <p>It is a reasonable option when vascular lasers and brimonidine have failed, and the <a href="/facial-redness">facial redness guide</a> grades those first-line treatments.</p>
      <p><strong>What to expect:</strong> less background redness and fewer flushing episodes for a few months. The cost-per-month is high because it wears off.</p>
    `,
  },
  {
    id: 'beyond-microbotox',
    category: 'beyond',
    title: '"Microbotox" for oily skin and pores',
    tldr: 'Hundreds of micro-droplets in the skin reduce oil and pore size in ten small studies — every one of them underpowered.',
    evidence: 'emerging',
    focus: 'skin-quality',
    sessions: 'Every 3–4 months (intradermal, 20–50 U per area)',
    downtime: 'Small bumps for an hour',
    cost: '€300–600',
    bodyHtml: `
      <p>Intradermal micro-injection of diluted toxin — 100 or more droplets across a cheek — aims at the sweat and sebaceous glands and the shallowest muscle fibres attached to the skin. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11343530/" rel="noopener nofollow" target="_blank">2024 systematic review and meta-analysis</a> of ten studies (153 participants) found improvements in sebum production, pore size, redness, fine wrinkles and texture, but not hydration — and its trial-sequential analysis showed that none of the outcomes had reached the sample size needed to be sure. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12169069/" rel="noopener nofollow" target="_blank">2025 randomized trial</a> found pore size reduced whether the toxin was injected or delivered with microneedling.</p>
      <p>The originator's <a href="https://pubmed.ncbi.nlm.nih.gov/26441119/" rel="noopener nofollow" target="_blank">technique paper</a> also claims a subtle jawline and neck "lift" from relaxing the superficial platysma fibres; that part now has better evidence in Part 01. As a skin-quality treatment it competes with retinoids, which are cheaper and permanent.</p>
      <p><strong>What to expect:</strong> a matte, smoother-looking surface for a few months, with facial movement preserved because the doses are shallow and tiny.</p>
    `,
  },
  {
    id: 'beyond-depression',
    category: 'beyond',
    title: 'Depression (the frown-line hypothesis)',
    tldr: 'Small trials say relaxing the frown lifts mood; the only large industry trial missed its primary endpoint. Intriguing, unproven.',
    evidence: 'emerging',
    focus: 'medical',
    sessions: 'Single glabellar treatment in trials',
    downtime: 'None',
    cost: 'Research setting',
    bodyHtml: `
      <p>The "facial feedback" idea is that a face unable to frown sends fewer distress signals back to the brain. Meta-analyses of the five small randomized trials found a large effect on depression scores (<a href="https://pubmed.ncbi.nlm.nih.gov/33578275/" rel="noopener nofollow" target="_blank">standardized difference 0.98</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/35588104/" rel="noopener nofollow" target="_blank">nine studies reviewed</a>). But the largest and best-run study, a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6903360/" rel="noopener nofollow" target="_blank">255-woman phase 2 trial</a>, narrowly missed its primary endpoint at six weeks with 30 units and saw no effect at all with 50 — the pattern of a real but small signal, or of blinding that fails because patients can feel their frown.</p>
      <p>It is not a treatment for depression, and no one should replace one with it. It is, at most, a reason a frown-line treatment may come with a mood dividend.</p>
      <p><strong>What to expect:</strong> nothing to book; something to watch in the literature.</p>
    `,
  },
];

const products: Section[] = [
  {
    id: 'new-daxxify',
    category: 'product',
    title: 'Daxxify — the long-acting toxin',
    tldr: 'Six months of frown-line control in two phase 3 trials, at double the units; the head-to-head advantage over Botox comes from one phase 2 study.',
    evidence: 'moderate',
    focus: 'general',
    sessions: 'Every 6 months (40 U for the glabella)',
    downtime: 'None',
    cost: '€350–500 per area (US pricing; not yet EU-authorised)',
    bodyHtml: `
      <p>DaxibotulinumtoxinA (Daxxify) is the same neurotoxin stabilised with a peptide instead of albumin. In the <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6940025/" rel="noopener nofollow" target="_blank">SAKURA phase 3 trials</a> (609 adults, 40 units) 74% of patients achieved a two-grade improvement at four weeks versus 0–1% on placebo, frown lines stayed "none or mild" for a median 24 weeks and did not return to baseline for a median 26–28 weeks. Across the whole upper face an <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9760460/" rel="noopener nofollow" target="_blank">open-label study</a> measured 21–25 weeks of response with no eyelid or brow ptosis.</p>
      <p>The catch is that the pivotal trials were against placebo, not Botox; the direct comparison is a <a href="https://pubmed.ncbi.nlm.nih.gov/33065952/" rel="noopener nofollow" target="_blank">phase 2 dose-ranging study</a> in which 40 units of Daxxify outlasted 20 units of Botox (median 24 weeks) — a comparison that also doubles the dose. The <a href="https://pubmed.ncbi.nlm.nih.gov/36097079/" rel="noopener nofollow" target="_blank">network meta-analysis</a> still ranks it first. It is US-approved (2022); check its authorisation status in your country before assuming a clinic's "six-month Botox" is this product.</p>
      <p><strong>What to expect:</strong> two treatments a year instead of three or four, and a slightly higher headache rate (7%) in the trials.</p>
    `,
  },
  {
    id: 'new-liquid-toxins',
    category: 'product',
    title: 'Ready-to-use liquid toxins (Relfydess, Alluzience)',
    tldr: 'Pre-mixed liquids remove the dilution step; the newest, relabotulinumtoxinA, matched the best conventional results in two phase 3 trials and is EU-authorised.',
    evidence: 'strong',
    focus: 'general',
    sessions: 'Every 4–6 months (50 U glabella)',
    downtime: 'None',
    cost: '€200–400 per area',
    bodyHtml: `
      <p>Conventional toxins are powders the clinic dilutes, which introduces a variable — how much saline, how long ago. Liquid formulations arrive ready to inject. Galderma's relabotulinumtoxinA (Relfydess) is the most tested: in <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11566037/" rel="noopener nofollow" target="_blank">READY-1</a> (297 adults) 83% achieved the strict two-grade composite response at one month and 96% were rated "none or mild", and responders were still ahead of placebo at six months; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11864047/" rel="noopener nofollow" target="_blank">READY-2</a> repeated the result for crow's feet. The liquid abobotulinumtoxinA (Alluzience) showed <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8844979/" rel="noopener nofollow" target="_blank">82–88% responders across four repeat cycles</a> in its own phase 3 programme, and a small <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12183538/" rel="noopener nofollow" target="_blank">triple-blind trial</a> found it indistinguishable from the powder version.</p>
      <p>For you, the difference is consistency of dosing rather than a visibly different result. Both products are EU-authorised; the duration claims on the box ("up to six months") describe the tail of the trial curves, not the typical patient.</p>
      <p><strong>What to expect:</strong> the same outcome as a well-mixed powder product, with one less variable at the clinic.</p>
    `,
  },
  {
    id: 'combo-filler',
    category: 'product',
    title: 'Combining toxin with filler',
    tldr: 'One small split-face trial: adding filler to a toxin-treated glabella gave better static-line results at six months. Sensible in practice, thin in trials.',
    evidence: 'emerging',
    focus: 'general',
    sessions: 'Toxin every 3–4 months + filler yearly',
    downtime: 'Filler bruising/swelling 2–5 days',
    cost: 'Sum of the two',
    bodyHtml: `
      <p>The logic is sound: toxin stops the crease being re-folded, filler lifts the crease that is already there. The evidence is one <a href="https://pubmed.ncbi.nlm.nih.gov/24305424/" rel="noopener nofollow" target="_blank">rater-blinded split-face trial</a> in 20 people, in which toxin plus hyaluronic acid produced longer-lasting improvement in dynamic forehead lines and greater static and dynamic reduction in the glabella at six months than toxin alone. Every patient improved either way.</p>
      <p>Two cautions. The glabella is among the highest-risk filler sites for vascular occlusion (see the <a href="/fillers#safety-vascular">filler guide</a>), so this is expert-only work; and treating the toxin first, two weeks before the filler, lets the injector see what is left to fill.</p>
      <p><strong>What to expect:</strong> a smoother resting glabella than toxin alone can give once lines are etched. Ask about the risk conversation before the price.</p>
    `,
  },
  {
    id: 'hype-preventive',
    category: 'product',
    title: '"Preventive Botox" in your 20s',
    tldr: 'The evidence for starting before lines exist is one pair of identical twins and mechanism; the 2025 systematic review called the data heterogeneous and unestablished.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'Marketed as every 3–4 months, indefinitely',
    downtime: 'None',
    cost: '€150–350 per area, 3–4× a year, for decades',
    bodyHtml: `
      <p>The idea: if lines are etched by repeated folding, stop the folding early and they never etch. It is plausible, and it has exactly one famous data point — <a href="https://pubmed.ncbi.nlm.nih.gov/17116793/" rel="noopener nofollow" target="_blank">identical twin sisters</a>, one treated two or three times a year for 13 years, who at 38 had no imprinted forehead or frown lines while her twin did. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12372128/" rel="noopener nofollow" target="_blank">2025 systematic review</a> of "proactive" use found the same signal in small studies and concluded that long-term safety and efficacy "are not yet fully established".</p>
      <p>What is established is the arithmetic: three or four treatments a year from 25 is 100-plus treatments by 55, tens of thousands of euros, and a cumulative dose that is the one known risk factor for <a href="#safety-antibodies">antibody resistance</a>. A defensible middle path is to treat when a line starts to show at rest — usually the glabella first, in the early 30s — and to leave a young, mobile face alone. Sunscreen and a retinoid prevent far more lines per euro (see the <a href="/anti-aging-30s">30s guide</a>).</p>
      <p><strong>What to expect:</strong> a clinic will happily sell it; the evidence does not compel you to buy it.</p>
    `,
  },
  {
    id: 'hype-baby-botox',
    category: 'product',
    title: '"Baby Botox" and micro-dosing',
    tldr: 'Lower doses for a more mobile result are a legitimate dosing choice — and mean a shorter effect, not a different product or a safer one.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'Every 6–10 weeks at low doses',
    downtime: 'None',
    cost: 'Often the same price for fewer units',
    bodyHtml: `
      <p>"Baby Botox" is marketing shorthand for using fewer units per area so that expression is softened rather than stopped. Nothing is wrong with the goal, and dose-ranging trials show what to expect: in the forehead study, the <a href="https://pubmed.ncbi.nlm.nih.gov/26863598/" rel="noopener nofollow" target="_blank">lower dose worked in 86% of patients but wore off sooner</a> than the standard dose. Low doses mean more frequent visits — and frequent, repeated exposure is precisely what the immunogenicity literature flags as a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11508269/" rel="noopener nofollow" target="_blank">risk factor for antibodies</a>.</p>
      <p>No trial has compared "micro-dosed" with standard treatment on naturalness, satisfaction or safety, which is the reason for the tier. Ask for a conservative dose in the areas you want to keep mobile (usually the forehead and lower crow's feet) and a full dose where you want it gone (the glabella), rather than a uniformly weak treatment everywhere.</p>
      <p><strong>What to expect:</strong> a softer, shorter result; pay by the unit if the clinic offers it.</p>
    `,
  },
  {
    id: 'hype-peptide-creams',
    category: 'product',
    title: 'Peptide creams that "work like Botox" (Argireline)',
    tldr: 'Acetyl hexapeptide-8 blocks the same release machinery in a dish; through intact skin almost none of it arrives. Small, mostly uncontrolled studies.',
    evidence: 'limited',
    focus: 'skin-quality',
    sessions: 'Twice daily, indefinitely',
    downtime: 'None',
    cost: '€20–120 per bottle',
    bodyHtml: `
      <p>Argireline (acetyl hexapeptide-8) mimics part of the SNAP-25 protein that botulinum toxin cuts, and it does reduce neurotransmitter release in cell culture — hence "Botox in a bottle". The problem is delivery: a <a href="https://pubmed.ncbi.nlm.nih.gov/24754410/" rel="noopener nofollow" target="_blank">skin-penetration study</a> found that only a tiny fraction of the peptide crossed the skin, and a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12193160/" rel="noopener nofollow" target="_blank">2025 review</a> concluded that its permeability, not its mechanism, is the limiting factor. Human evidence is a handful of small studies with modest wrinkle-depth changes — the kind of improvement a good moisturiser also produces.</p>
      <p>Buy it as a pleasant serum if you like it; do not buy it instead of an appointment or in place of a <a href="/wrinkles">retinoid</a>, which has decades of trial evidence for the lines toxin does not treat.</p>
      <p><strong>What to expect:</strong> hydration and a temporary smoothing of fine surface lines; no effect on movement lines.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-common',
    category: 'safety',
    title: 'Common side effects — the real rates',
    tldr: 'Across 5,298 trial participants, side effects were reported by 42% on toxin and 36% on placebo; the differences were eyelid and brow droop, tightness and eyelid swelling — all temporary.',
    bodyHtml: `
      <p>The best dataset is a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10682279/" rel="noopener nofollow" target="_blank">meta-analysis of 18 registration studies</a> of onabotulinumtoxinA in the upper face: 42.1% of treated participants reported some adverse event versus 35.8% on placebo, and serious events were equally rare in both groups (1.6% vs 1.3%, none clearly caused by treatment). The events genuinely attributable to the toxin were eyelid ptosis, eyelid sensory changes, skin tightness, brow ptosis, eyelid swelling and facial pain. An <a href="https://pubmed.ncbi.nlm.nih.gov/24575858/" rel="noopener nofollow" target="_blank">independent review</a> of 35 studies (8,787 subjects) put eyelid droop at 2.5%, brow droop at 3.1% and eye sensory symptoms at 3% for upper-face treatment, and lip asymmetry at 6.9% for lower-face work — "all of these events resolved spontaneously".</p>
      <p>Then the everyday ones the trials treat as background: a headache in the first days (4–7%), a pinpoint bruise, a dull ache at the injection points, a "tight" or "heavy" sensation for a week while the muscles adjust. A flu-like malaise for a day or two is reported by a few people and is real but rare.</p>
      <p>The thing to understand about every item on this list is the timescale: nothing here is permanent, because the drug itself is not.</p>
    `,
  },
  {
    id: 'safety-ptosis',
    category: 'safety',
    title: 'The droopy eyelid, the heavy brow and the frozen face',
    tldr: 'Placement errors, not allergies: a drooping lid in 1–5% of frown treatments, a heavy brow from an overdosed forehead — both wear off, and eye drops can help the lid.',
    bodyHtml: `
      <p><strong>Eyelid ptosis</strong> happens when toxin diffuses from the glabella through the orbital septum into the muscle that lifts the upper lid. It appears at day 3–10, is usually mild and one-sided, and lasts 2–6 weeks — shorter than the cosmetic effect, because the dose that reached the lid was small. Rates were 5.4% in the <a href="https://pubmed.ncbi.nlm.nih.gov/12063480/" rel="noopener nofollow" target="_blank">original trial</a> and are 1–3% with modern technique. Alpha-agonist eye drops — <a href="https://pubmed.ncbi.nlm.nih.gov/15748550/" rel="noopener nofollow" target="_blank">apraclonidine</a> or, more recently, <a href="https://pubmed.ncbi.nlm.nih.gov/36943792/" rel="noopener nofollow" target="_blank">oxymetazoline 0.1%</a> — contract a small accessory lid muscle and lift the lid 1–2 mm while you wait.</p>
      <p><strong>Brow ptosis</strong> is the forehead problem: too much frontalis relaxation, or injections too low, and the brows drop, the lids look hooded and the face reads tired. It is dose-dependent and <a href="https://pubmed.ncbi.nlm.nih.gov/30124769/" rel="noopener nofollow" target="_blank">measurable within two weeks</a>, and it recovers as the toxin fades. There is no antidote; the prevention is conservative forehead dosing and never treating the forehead without the glabella.</p>
      <p><strong>The frozen look</strong> is not a side effect but a dose decision — every muscle of expression switched off rather than softened. It is avoidable by saying, in the consultation, which movements you want to keep. The "Spock brow" (a peaked outer brow from an untreated lateral frontalis) is fixed with two units at the two-week review.</p>
    `,
  },
  {
    id: 'safety-antibodies',
    category: 'safety',
    title: 'Antibodies and "Botox resistance"',
    tldr: 'Rare in aesthetic use — case reports rather than percentages — but real, and driven by cumulative dose and short intervals. Most "resistance" is under-dosing.',
    bodyHtml: `
      <p>Because the toxin is a foreign protein, the immune system can learn to neutralise it, after which injections stop working. In neurology, where doses are ten times higher, older formulations produced neutralising antibodies in up to 10% of patients; modern products are far less immunogenic, and in aesthetic dosing the phenomenon is <a href="https://pubmed.ncbi.nlm.nih.gov/34302452/" rel="noopener nofollow" target="_blank">rare</a> — documented in <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3872090/" rel="noopener nofollow" target="_blank">case series</a> rather than as a rate. A <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11508269/" rel="noopener nofollow" target="_blank">2024 review</a> across indications found the risk tracks total cumulative dose and the number of treatment cycles — the argument against very frequent low-dose "top-ups". Whether the inactive complexing proteins in some brands add to the risk is <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7367960/" rel="noopener nofollow" target="_blank">debated</a>; incobotulinumtoxinA (Xeomin/Bocouture) is formulated without them, which is a reasonable choice for someone worried about it, not a proven protection.</p>
      <p>Before concluding you are "resistant", rule out the common causes of a weak result: too few units, a strong muscle, dilution or storage problems, or a genuinely unlicensed product. A simple test — a small dose into one frontalis or brow muscle to see whether it relaxes — separates the two. True secondary non-responders can switch serotype (a type-B toxin exists) or wait: antibody levels fall over years without exposure.</p>
    `,
  },
  {
    id: 'safety-botulism',
    category: 'safety',
    title: 'Botulism, spread and unlicensed vials',
    tldr: 'Generalised weakness from a licensed product at cosmetic doses is essentially unreported. Unlicensed vials are another matter: 25 botulism cases in England in 2025, four in the US from a vial 2,800 times the lethal dose.',
    bodyHtml: `
      <p>Every toxin carries a regulator's warning about distant spread — trouble swallowing, breathing or generalised weakness — because it has happened at the high doses used for spasticity, mostly in children. At cosmetic doses of 20–100 units from a licensed product, systemic botulism has not been documented in the trial literature and the 5,298-participant <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10682279/" rel="noopener nofollow" target="_blank">registration meta-analysis</a> found none. Symptoms that warrant a same-day call are nonetheless simple to remember: difficulty swallowing or speaking, drooping of the whole face, weakness beyond the treated area.</p>
      <p>Unlicensed product is where the real cases come from. In <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12495379/" rel="noopener nofollow" target="_blank">June 2025, 25 people in North East England</a> developed botulism after cosmetic injections; the seized product was unlicensed and 85% more potent than its own label. In 2004, <a href="https://pubmed.ncbi.nlm.nih.gov/17119144/" rel="noopener nofollow" target="_blank">four US adults</a> were injected from a research-grade vial containing 2,857 times the estimated lethal dose and survived only with intensive care. In <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11520667/" rel="noopener nofollow" target="_blank">2023, an outbreak across several European countries</a> followed "stomach Botox" for weight loss in Turkey. The pattern is always the same: a bargain, a non-medical setting, a vial nobody can trace.</p>
      <p>Your defence is boring: a prescriber, a product you can name, a batch number, and a price that makes sense for a licensed medicine.</p>
    `,
  },
  {
    id: 'safety-who-not',
    category: 'safety',
    title: 'Who should not have it',
    tldr: 'Pregnancy and breastfeeding (defer), neuromuscular diseases, an infection at the site, certain antibiotics — and anyone who cannot attend a two-week review.',
    bodyHtml: `
      <p><strong>Pregnancy and breastfeeding.</strong> The toxin is a large molecule that stays where it is injected and is not expected to cross the placenta or enter milk; a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3828093/" rel="noopener nofollow" target="_blank">review of 38 reported pregnancies</a> found no increase in fetal harm, which is reassuring if you find out you were pregnant at the time. But there are no trials and no benefit that justifies the uncertainty, so every guideline says defer.</p>
      <p><strong>Neuromuscular conditions</strong> — myasthenia gravis, Lambert-Eaton syndrome, motor neurone disease — can be worsened by even small doses; disclose them. Aminoglycoside antibiotics and some muscle relaxants potentiate the toxin; an active skin infection at the site is a reason to wait. A known allergy to a formulation ingredient (albumin, or cow's-milk protein in abobotulinumtoxinA) rules out that brand, not the class.</p>
      <p><strong>Psychological readiness</strong> matters more than clinics admit: someone treating a face they cannot stop scrutinising, or who expects toxin to fix sagging, will be unhappy with a technically perfect result. And practically, anyone who cannot come back at two weeks for assessment and a top-up should choose a different date.</p>
    `,
  },
  {
    id: 'safety-long-term',
    category: 'safety',
    title: 'Twenty years on: what long-term use does',
    tldr: 'No tachyphylaxis over repeated cycles, no accumulation, muscles that thin with rest and recover when treatment stops — and thin data beyond a few years.',
    bodyHtml: `
      <p>Repeat-treatment studies are consistent: abobotulinumtoxinA kept working with <a href="https://pubmed.ncbi.nlm.nih.gov/19537366/" rel="noopener nofollow" target="_blank">no loss of effect over 23 months</a> and a similar safety profile in <a href="https://pubmed.ncbi.nlm.nih.gov/19577326/" rel="noopener nofollow" target="_blank">768 people followed long-term</a>; the liquid formulation held its responder rate across <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8844979/" rel="noopener nofollow" target="_blank">four consecutive cycles</a>. The drug does not accumulate; each treatment is cleared before the next.</p>
      <p>Treated muscles thin with disuse — the point, in the masseter, and a mild effect in the forehead that some long-term users notice as a flatter brow region. The one long-term structural worry, jawbone density under a rested masseter, was tested in a <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12706864/" rel="noopener nofollow" target="_blank">12-month CT study</a> and did not materialise. The <a href="https://pubmed.ncbi.nlm.nih.gov/17116793/" rel="noopener nofollow" target="_blank">13-year twin comparison</a> found no adverse effects and fewer etched lines.</p>
      <p>What the literature cannot yet say is what 30 years of three-times-a-year treatment does, because the first generation of regular users is only now reaching it. Nothing so far suggests harm; nothing so far is proof of its absence.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-onset',
    category: 'faq',
    title: 'How soon does it work, and when do I judge the result?',
    tldr: 'First change at 3–7 days, full effect at 14. Judge — and top up — at the two-week review, never before.',
    bodyHtml: `
      <p>In the head-to-head onset study women saw movement reduce at about <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3789632/" rel="noopener nofollow" target="_blank">3 days with incobotulinumtoxinA and 5 with the other two brands</a>; men were a day or two later. Full effect takes two weeks because the muscle has to use up the transmitter already released. One side often starts first — asymmetry at day 5 is normal.</p>
    `,
  },
  {
    id: 'faq-how-often',
    category: 'faq',
    title: 'How often will I need it?',
    tldr: 'Every 3–4 months for the upper face at first, often stretching to three times a year; longer intervals for jaw, neck and sweating.',
    bodyHtml: `
      <p>Book when movement returns and the lines start to show, not on a calendar. Many regular patients find the interval lengthens after the first year as the muscles weaken and the habit of frowning fades. Treating before the previous dose has worn off adds cumulative exposure for no visible gain.</p>
    `,
  },
  {
    id: 'faq-units',
    category: 'faq',
    title: 'How many units is normal?',
    tldr: 'Glabella 20, crow\'s feet 24 (both sides), forehead 10–20, in Botox units; roughly triple those numbers for Dysport, the same for Xeomin.',
    bodyHtml: `
      <p>These are the doses used in the licensing trials, and a good starting point for a woman of average muscle strength. Men, and anyone with a heavy frown, often need <a href="https://pubmed.ncbi.nlm.nih.gov/16188182/" rel="noopener nofollow" target="_blank">40 units in the glabella</a>. Masseter treatment runs 25–36 units per side and hyperhidrosis 50 per armpit. Units are brand-specific: a clinic that quotes "60 units" for a Dysport glabella is quoting the normal dose, not a heavy one.</p>
    `,
  },
  {
    id: 'faq-brands',
    category: 'faq',
    title: 'Botox, Dysport, Xeomin, Letybo — which is best?',
    tldr: 'None, in trials. Equivalent results at equivalent doses; choose the injector, then let them choose the product they dose best.',
    bodyHtml: `
      <p>Direct comparisons keep finding parity: incobotulinumtoxinA was <a href="https://pubmed.ncbi.nlm.nih.gov/26509943/" rel="noopener nofollow" target="_blank">equivalent to Botox at 20 units</a> in 250 women; prabotulinumtoxinA was <a href="https://pubmed.ncbi.nlm.nih.gov/30951166/" rel="noopener nofollow" target="_blank">non-inferior</a> in 540 patients and <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10243730/" rel="noopener nofollow" target="_blank">indistinguishable side-by-side</a> on the same faces. Dysport is often said to spread a little further (useful in the forehead and crow's feet, less so near the eyelid); Xeomin carries no complexing proteins; Daxxify lasts longer at double the dose. The product landscape section below sets them side by side.</p>
    `,
  },
  {
    id: 'faq-frozen',
    category: 'faq',
    title: 'Will I look frozen or "done"?',
    tldr: 'Only if that is what is injected. Say which movements you want to keep; ask for conservative forehead dosing and a full glabellar dose.',
    bodyHtml: `
      <p>A frozen forehead is a dosing choice, not a property of the drug. The trials that measured how patients felt about their appearance found high rates of <a href="https://pubmed.ncbi.nlm.nih.gov/37616390/" rel="noopener nofollow" target="_blank">"natural-looking" self-assessments</a> at standard doses. Bring a photograph of an expression you like, and remember that anything you dislike at day 14 is gone by month four.</p>
    `,
  },
  {
    id: 'faq-aftercare',
    category: 'faq',
    title: 'Can I exercise, fly or lie down afterwards?',
    tldr: 'Frowning on purpose speeds it up; the rest of the aftercare list is tradition. Skip facials and rubbing that day; flying is fine.',
    bodyHtml: `
      <p>The only aftercare intervention ever tested in a randomized trial — <a href="https://pubmed.ncbi.nlm.nih.gov/30617028/" rel="noopener nofollow" target="_blank">four hours of deliberate facial exercise</a> — brought onset forward by about a day. Staying upright for four hours and avoiding pressure on the area are reasonable precautions against diffusion, unsupported by data either way. Alcohol and exercise the same day slightly increase bruising; neither affects the result.</p>
    `,
  },
  {
    id: 'faq-pregnancy',
    category: 'faq',
    title: 'What if I had it and then found out I was pregnant?',
    tldr: 'Reassuring: 38 reported pregnancies with no signal of harm, and a molecule that stays where it is put. Still defer further treatment.',
    bodyHtml: `
      <p>The <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3828093/" rel="noopener nofollow" target="_blank">published pregnancy exposures</a> — including women with actual botulism during pregnancy — show no increase in adverse fetal outcomes, and the toxin is not expected to reach the circulation from a properly placed injection. Tell your midwife or obstetrician, and wait until after breastfeeding for the next one.</p>
    `,
  },
  {
    id: 'faq-stopped-working',
    category: 'faq',
    title: 'It used to work and now it doesn\'t — am I resistant?',
    tldr: 'Probably not. Check dose, product and injector first; true antibody resistance is rare and can be tested with a single small injection.',
    bodyHtml: `
      <p>See the antibodies section: the usual explanations are fewer units than before, a diluted or mishandled product, or a stronger muscle. A test dose into one brow or frontalis settles the question in two weeks. If antibodies are confirmed, options are a different serotype or a long break.</p>
    `,
  },
  {
    id: 'faq-worse-after',
    category: 'faq',
    title: 'Will my lines be worse when it wears off?',
    tldr: 'No. Movement returns to what it was; etched lines are usually a little better after months of not folding.',
    bodyHtml: `
      <p>The muscles regain their strength within a few months of the last treatment and the face returns toward its baseline, not below it. The <a href="https://pubmed.ncbi.nlm.nih.gov/17116793/" rel="noopener nofollow" target="_blank">twin study</a> and the repeat-treatment trials show the opposite trend — fewer imprinted lines with regular use. The "rebound" people describe is the contrast with a smooth forehead they had grown used to.</p>
    `,
  },
  {
    id: 'faq-cost',
    category: 'faq',
    title: 'What should it cost, and who pays if it goes wrong?',
    tldr: '€150–350 per area in most of Europe; you pay, unless it is a medical indication. Complications are managed by the clinic — another reason to choose a medical one.',
    bodyHtml: `
      <p>Cosmetic treatment is self-funded everywhere in Europe. Hyperhidrosis, chronic migraine and bruxism may be reimbursed as medical indications through the appropriate specialist. A medical clinic carries indemnity insurance and can prescribe the eye drops, review you and treat a complication; a beautician's back room cannot. If the price is far below the local norm, ask which product it is and where the vial came from.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'The basics',
    intro: 'What botulinum toxin does, how long it lasts, and what it cannot touch.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Before you book',
    intro: 'Choosing the prescriber, understanding the price, and what the appointment involves.',
    sections: context,
  },
  {
    id: 'uses',
    title: 'Where it works, by area',
    intro: 'Every treatment area graded by trial evidence — with typical doses, intervals, downtime and prices.',
    sections: uses,
  },
  {
    id: 'beyond',
    title: 'Beyond wrinkles',
    intro: 'The medical and skin-quality uses that share the same vial: sweating, migraine, grinding, scars, redness, oil.',
    sections: beyond,
  },
  {
    id: 'products',
    title: 'New toxins, combinations and the hype',
    intro: 'Long-acting and liquid formulations, toxin with filler, and the three claims that outrun their evidence.',
    sections: products,
  },
  {
    id: 'safety',
    title: 'Safety — the full picture',
    intro: 'Real rates for the common problems, the rare ones, and what twenty years of use has shown.',
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
  'on-label': 'On-label',
  'off-label': 'Off-label',
  medical: 'Medical use',
  'skin-quality': 'Skin quality',
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

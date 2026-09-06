/**
 * Lip lines ("barcode" / smoker's lines) guide — single source of truth
 * (problem template).
 *
 * Consumed by /lip-lines. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: perioral lines are the hardest lines on the face because
 * three things make them at once — a pursing muscle anchored close to the
 * dermis, the thinnest and least oily skin after the eyelids, and a lip and
 * jaw that deflate — and the tools do not cross over. Toxin softens the
 * pursing, filler restores the border and volume, and only resurfacing
 * (ablative laser, dermabrasion or a phenol peel) removes an etched line.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'dynamic' | 'static' | 'volume' | 'general';

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
  'Lip lines are three problems in one strip of skin: a pursing muscle anchored close to the dermis, the thinnest and least oily skin after the eyelids, and a lip and jaw that deflate with age. Women get them earlier and worse because their perioral skin has fewer oil glands and a muscle anchored 1.5 times closer to the surface.',
  'Pucker in a mirror and relax: lines that vanish are dynamic and answer to a few units of toxin; lines that stay are etched and answer only to resurfacing. A thinning lip and a blurred border are volume, and answer to filler.',
  'Resurfacing is the only thing that removes an etched lip line: full-field CO₂ cut wrinkle depth by 91% with 87% held at two years, dermabrasion matched it in a randomised comparison, and the phenol–croton oil peel has a 639-patient series and the longest results of all.',
  'Filler belongs on the border and in the body of the lip, where a 225-person randomised trial improved perioral lines in two-thirds of patients at a year; filler pushed into the lines themselves lumps and migrates. Toxin belongs in micro-doses, or your straw and your consonants suffer.',
  'The mouth punishes shortcuts: cold sores reactivate in about 9% of resurfaced patients without antiviral cover, the superior labial artery sits where lip filler goes, and phenol lightens the skin it treats for good. Sunscreen on the lip and not smoking are the only prevention with evidence.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-dynamic',
    kind: 'Motion',
    title: 'A pursing muscle anchored close to the skin',
    blurb: 'The orbicularis oris puckers for speech, drinking, kissing and smoking — and in women it is anchored about 1.5 times closer to the dermis than in men, so every purse folds the skin harder.',
  },
  {
    id: 'home-spf-quit',
    kind: 'Sun & smoke',
    title: 'The least oily skin on the face, in full sun',
    blurb: 'Perioral skin has fewer oil and sweat glands and smaller follicles in women, sits below the sunscreen line, and takes the smoke and the pursing of every cigarette. Smoking duration tracks severity directly.',
  },
  {
    id: 'type-deflation',
    kind: 'Deflation',
    title: 'The lip thins, the philtrum lengthens, the jaw recedes',
    blurb: 'The vermilion loses volume, the border blurs, the upper lip lengthens and the maxilla and teeth that hold it up resorb — so the same skin has more slack to fold and less support underneath.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'lip-anatomy',
    category: 'concept',
    title: 'What a lip line actually is',
    tldr: 'Vertical creases radiating from the vermilion border where the orbicularis oris folds thin, gland-poor skin — with the muscle sitting closer to the surface in women, which is why the "barcode" is largely a female problem.',
    bodyHtml: `
      <p>The orbicularis oris is the ring of muscle around the mouth that purses, seals and shapes the lips. Above the upper lip it lies beneath skin that is thin and, in women, unusually poor in oil and sweat glands and hair follicles — the structures that cushion skin and repair it. Histological comparison shows men's perioral skin has significantly more sebaceous and sweat glands and a muscle anchored further from the surface; in women the orbicularis is anchored about 1.5 times closer to the dermis, so each contraction folds the skin harder (<a href="https://pubmed.ncbi.nlm.nih.gov/19944990/" rel="noopener nofollow" target="_blank">histology study</a>). Repeated thousands of times a day, the fold becomes a vertical crease, first with the purse and then at rest.</p>
      <p>Two more processes deepen it. The lip itself deflates — the vermilion thins, the border blurs, the philtrum lengthens and the Cupid's bow flattens — and the bone and teeth behind it recede, so the skin has more slack and less support (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.70310" rel="noopener nofollow" target="_blank">lip aging review</a>). That is why a lip line is three problems, and why one tool never fixes it.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'Who gets lip lines, and why women first',
    tldr: 'Perioral wrinkling correlates with age, female sex and smoking duration, and is markedly more severe in women than men at the same age; it starts in the forties for most and the thirties for smokers.',
    bodyHtml: `
      <p>The reference study photographed and graded perioral skin across ages and found severity rising with age, markedly higher in women than men, and rising with the number of years smoked — which led to separate photonumeric scales for each sex (<a href="https://pubmed.ncbi.nlm.nih.gov/26803346/" rel="noopener nofollow" target="_blank">JAAD, 2016</a>). Among identical twins discordant for smoking, the smoker had worse upper-lip lines and lower-lip vermilion wrinkles (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">twin study</a>). Non-smokers get them too, later and lighter: the muscle, the sun and the deflation are enough on their own.</p>
      <p>The nickname says who it bothers. "Smoker's lines" is the old name; "barcode lines" is the newer one, from the way lipstick bleeds into them — and a great deal of the demand for treatment comes from exactly that.</p>
    `,
  },
  {
    id: 'why-hardest',
    category: 'concept',
    title: 'Why lip lines are the hardest lines to treat',
    tldr: 'Deep lines in thin skin over a muscle you need for speech, in a zone where filler lumps, lasers scar, herpes reactivates and phenol lightens. The ladder is toxin (light), filler (border and volume) and resurfacing (the line itself).',
    bodyHtml: `
      <p>Every property of the perioral zone works against the person treating it. The skin is thin, so filler placed in it shows as lumps and turns pale; it is gland-poor, so it heals slowly after resurfacing and scars if pushed; the muscle beneath is needed for consonants, kissing and drinking, so toxin has to be measured in single units; the area carries the herpes virus in most adults, which resurfacing reactivates; and the lines are deep, so the gentle treatments that satisfy elsewhere disappoint here. Surgeons who use lasers everywhere still reach for a phenol peel or dermabrasion on the upper lip.</p>
      <p>The order that works: stop the folding a little with toxin, restore the border and the lip's volume with filler so the skin is supported, and then, for the lines that remain at rest, resurface — ablative laser, dermabrasion or a deep peel. The common mistake is the reverse: filling the lines themselves, which makes a lumpy lip with the lines still there.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-dynamic',
    category: 'context',
    title: 'Dynamic lines (only when you purse)',
    tldr: 'Fine vertical lines that appear when you pucker and disappear at rest — the muscle alone; a few units of toxin, sunscreen and a retinoid keep them from etching.',
    focus: 'dynamic',
    bodyHtml: `
      <p>Purse your lips hard in a mirror and relax. Lines that vanish completely are dynamic: the skin still springs back and the orbicularis is the whole cause. This is the stage where a few units of toxin spread across the upper lip soften the purse for three months, where lipstick has not yet begun to bleed, and where sunscreen and a retinoid buy years. It is also the stage at which resurfacing would be excessive and filler in the lines would be a mistake; the lip border may still want a little volume if it has begun to blur.</p>
    `,
  },
  {
    id: 'type-static',
    category: 'context',
    title: 'Etched lines (there at rest, lipstick bleeds)',
    tldr: 'Vertical grooves present without any expression, deep enough for lipstick to run into — the dermis has lost its floor; toxin and filler help around them, but only resurfacing removes them.',
    focus: 'static',
    bodyHtml: `
      <p>Once a line stays at rest, its floor is gone: the collagen and elastin beneath the crease have been folded past recovery, and the test is that lipstick runs into it. Toxin still softens the purse and stops the lines deepening, filler restores the support around them, and neither removes them. Removing an etched lip line means rebuilding the dermis beneath it — full-field CO₂ or erbium resurfacing, manual dermabrasion, or a phenol–croton oil peel of the upper lip — which is why the strongest rows on this page belong to this type. Fractional lasers soften; the full-field tools remove.</p>
    `,
  },
  {
    id: 'type-deflation',
    category: 'context',
    title: 'The deflated lip (thin vermilion, blurred border, long philtrum)',
    tldr: 'A thinner lip, a flattened Cupid’s bow, a border that lipstick no longer finds and a longer upper lip — volume and support have gone; filler on the border and a lip lift are the tools, and dental support is the forgotten one.',
    focus: 'volume',
    bodyHtml: `
      <p>Look at the vermilion border in profile. If the red of the lip has thinned, the border has lost its ridge, the peaks of the Cupid's bow have flattened and the distance from nose to lip has grown, the problem beneath the lines is deflation: the lip's own volume, the bone of the maxilla and, in many, the teeth that once pushed the lip forward. A deflated lip folds more easily and shows every line. Restoring the border and a modest volume with hyaluronic acid supports the skin — the pivotal filler trial measured exactly this, with perioral lines improving in two-thirds of patients — and a subnasal lip lift shortens the philtrum surgically. Dentures that have thinned and worn teeth lose the support too, which is where the dentist joins the plan.</p>
    `,
  },
  {
    id: 'type-marionette-corners',
    category: 'context',
    title: 'Lines at the corners (marionette lines)',
    tldr: 'The creases running from the mouth corners to the chin are a different mechanism — descent and a downward-pulling muscle — and belong to the jowls guide; a few units in the depressor muscle and filler in the fold help.',
    focus: 'general',
    bodyHtml: `
      <p>Lines from the mouth corners toward the chin, with corners that turn down, are not perioral lines: they are the front edge of lower-face descent, made where cheek tissue meets a ligament and where the depressor anguli oris pulls the corner down. Toxin in that muscle lets the corners rise, filler in the fold softens it, and a split-face randomised trial found the combination beat filler alone for melomental folds (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1524-4725.2010.01741.x" rel="noopener nofollow" target="_blank">split-face study</a>). The <a href="/jowls">jowls guide</a> grades the whole lower-face story; the <a href="/wrinkles">wrinkles guide</a> covers the folds.</p>
    `,
  },
  {
    id: 'smoking-vaping',
    category: 'context',
    title: 'Smoking, vaping, straws and pursing',
    tldr: 'Smoking causes lip lines two ways — the purse and the smoke; vaping keeps the purse; straws and water bottles are the purse without the smoke, a fraction of the exposure, and not worth worrying about.',
    focus: 'general',
    bodyHtml: `
      <p>Smoking is the one habit with evidence: severity rises with years smoked (<a href="https://pubmed.ncbi.nlm.nih.gov/26803346/" rel="noopener nofollow" target="_blank">JAAD, 2016</a>) and the smoking twin has the worse lip in twin photographs (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">twin study</a>), because a cigarette is a purse held for minutes, twenty times a day, plus smoke that starves the dermis of blood and breaks its collagen. Vaping keeps the purse and drops most of the smoke; nobody has photographed the twins yet. Straws and sports bottles are a purse for seconds — dermatologists point out that a heavy smoker purses for the equivalent of dozens of straws a day and adds free-radical damage on top, so an occasional straw is not in the same category (<a href="https://blog.ochsner.org/articles/does-using-a-straw-cause-lip-wrinkles/" rel="noopener nofollow" target="_blank">Ochsner</a>). Quitting is the treatment; the straw is a footnote.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The pucker, the stretch and the profile',
    tldr: 'Pucker: lines that vanish are dynamic. Stretch the lip: lines that stay are etched. Profile: a thin, long lip means volume. Photograph at rest and puckered, and be honest about the smoking.',
    bodyHtml: `
      <p>Three moves sort a lip. Pucker hard and relax: what disappears is dynamic and belongs to toxin. Gently stretch the upper lip between two fingers: a line that stays in stretched skin is etched into the dermis and belongs to resurfacing. Look in profile: a thin red lip, a blurred border and a long upper lip mean volume and support have gone and belong to filler or a lip lift — and a look at the teeth and any dentures tells you whether the support underneath is part of it. Photograph at rest and puckered in the same light before anything, because the lip changes slowly and the mirror forgets; and tell the clinician about smoking, cold sores and any wind instrument or singing, each of which changes the plan.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-spf-quit',
    category: 'home',
    title: 'Sunscreen on the lip, and no smoking',
    tldr: 'Daily sunscreen cut measured skin aging by 24% in the one randomised prevention trial; smoking is the best-documented cause of lip lines in observational and twin data. Together, the only prevention with evidence.',
    evidence: 'strong',
    focus: 'general',
    note: 'Best for: everyone — and the whole prevention list',
    sessions: 'Every morning; a balm with SPF through the day',
    downtime: 'None',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>The upper lip sits below where most people stop their sunscreen and above where a lip balm reaches, and it is thin, gland-poor skin that photoages fast. The Nambour trial's daily-sunscreen group showed no detectable increase in skin aging over 4.5 years, 24% less than discretionary users (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>); the perioral skin needs the face sunscreen carried down to the vermilion and a lip balm with SPF on the red of the lip. Smoking has no trial and needs none: severity tracks years smoked (<a href="https://pubmed.ncbi.nlm.nih.gov/26803346/" rel="noopener nofollow" target="_blank">JAAD, 2016</a>), the smoking twin has the worse upper lip (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">twin study</a>), and the mechanism is the purse plus the smoke. Nothing bought later competes with these two.</p>
    `,
  },
  {
    id: 'home-retinoid',
    category: 'home',
    title: 'A retinoid on the upper lip',
    tldr: 'The tretinoin meta-analysis (8 RCTs, 1,361 patients) shows fewer fine and coarse wrinkles; on the lip it softens fine dynamic lines and crepe over months, and slows the etching. It does not remove a groove.',
    evidence: 'moderate',
    focus: 'dynamic',
    note: 'Best for: fine and early lines, and the maintenance around every other treatment',
    sessions: 'Nightly (start 2–3× a week), indefinitely',
    downtime: 'Dryness and peeling at the corners if overdone',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Retinoids thicken the epidermis and rebuild upper-dermal collagen, and the meta-analysis of eight randomised tretinoin trials in 1,361 patients found significant improvement in both fine and coarse wrinkles over vehicle (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">meta-analysis</a>). On the upper lip that translates into softer fine lines, a smoother surface and slower progression — not the removal of an etched groove, which needs the dermis rebuilt from below. The zone is prone to irritation at the corners and the vermilion, so start two or three nights a week on the skin above the lip only, buffer with a moisturiser, and pair it with the sunscreen row. Not in pregnancy. The <a href="/wrinkles">wrinkles guide</a> covers the retinoid ladder.</p>
    `,
  },
  {
    id: 'home-actives',
    category: 'home',
    title: 'Vitamin C, niacinamide and hydrating serums',
    tldr: 'Niacinamide 5% reduced fine lines in a split-face RCT; vitamin C 5% reduced furrows over six months; a hyaluronic serum softens lines for hours by hydration. The supporting cast.',
    evidence: 'moderate',
    focus: 'dynamic',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€15–60 / month',
    bodyHtml: `
      <p>The same three actives that support every wrinkle page support the lip: niacinamide 5% reduced fine lines and improved elasticity in a 12-week double-blind split-face trial (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1524-4725.2005.31732" rel="noopener nofollow" target="_blank">Bissett 2005</a>); a 5% vitamin C cream reduced deep furrows over six months in a double-blind trial (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1034/j.1600-0625.2003.00008.x" rel="noopener nofollow" target="_blank">Humbert 2003</a>); a multi-weight hyaluronic serum produced immediate, measurable softening of fine and coarse lines (<a href="https://www.jaad.org/article/S0190-9622(16)00202-4/fulltext" rel="noopener nofollow" target="_blank">JAAD, 2016</a>). On thin, dry perioral skin the hydration matters more than elsewhere — a dehydrated upper lip shows every line — and none of them reaches the muscle or the floor of a groove.</p>
    `,
  },
  {
    id: 'home-aha',
    category: 'home',
    title: 'Glycolic and lactic acid at home',
    tldr: 'A 22-week double-blind trial of 8% glycolic and lactic creams improved photodamage over vehicle; surface smoothing that helps a crepey lip and irritates a thin one.',
    evidence: 'emerging',
    focus: 'dynamic',
    sessions: '2–4 nights a week',
    downtime: 'Stinging; sun sensitivity',
    cost: '€10–40 / month',
    bodyHtml: `
      <p>Alpha-hydroxy acids exfoliate the pigmented, roughened surface and, over months, modestly thicken the epidermis; in the reference trial 76% of women on 8% glycolic acid and 71% on 8% lactic acid improved at least one grade of photodamage against 40% on vehicle over 22 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>). On the upper lip they smooth crepe and brighten, sting at the vermilion, and compete with the retinoid for the same irritation budget; alternate nights, low strength, sunscreen. Our <a href="/chemical-peels">peel guide</a> covers the clinic strengths.</p>
    `,
  },
  {
    id: 'home-led',
    category: 'home',
    title: 'Red and near-infrared LED masks',
    tldr: 'Controlled trials show modest gains in roughness and fine lines at clinic doses and in a sham-controlled crow’s-feet trial; nothing specific to the lip, and nothing for an etched line.',
    evidence: 'emerging',
    focus: 'dynamic',
    sessions: '3–5× a week, 10–20 minutes',
    downtime: 'None',
    cost: '€200–500 device',
    bodyHtml: `
      <p>Red and near-infrared light stimulate fibroblasts, and the reference trial randomised 136 people to light or no treatment with measurable gains in complexion, roughness and collagen density (<a href="https://journals.sagepub.com/doi/10.1089/pho.2013.3616" rel="noopener nofollow" target="_blank">Wunsch &amp; Matuschka 2014</a>); a home mask has a sham-controlled trial for crow's feet (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11835066/" rel="noopener nofollow" target="_blank">sham-controlled trial</a>). Nobody has tested one on the upper lip, the doses from consumer devices are a fraction of the clinic's, and an etched perioral line is beyond it. A harmless add-on for crepe; the <a href="/red-light-therapy">red-light guide</a> covers doses.</p>
    `,
  },
  {
    id: 'home-habits',
    category: 'home',
    title: 'Straws, bottles, vaping and the purse',
    tldr: 'Quitting smoking is the intervention with evidence; vaping keeps the purse; straws and bottles are a purse for seconds and a fraction of a smoker’s exposure. Worth knowing, not worth anxiety.',
    evidence: 'emerging',
    focus: 'dynamic',
    sessions: 'Ongoing',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>The purse is the mechanism, and the question is how much of it a habit adds. A cigarette is a purse held for minutes, twenty times a day, with smoke; vaping is the same purse without most of the smoke; a straw or a bottle is a purse for seconds — dermatologists put the arithmetic plainly, and note that the straw adds no free-radical damage (<a href="https://blog.ochsner.org/articles/does-using-a-straw-cause-lip-wrinkles/" rel="noopener nofollow" target="_blank">Ochsner</a>). Wind instruments and singing are a purse too, and their players' lips are treated with that in mind. Stop smoking; do not stop drinking water because of a wrinkle.</p>
    `,
  },
  {
    id: 'home-patches',
    category: 'home',
    title: 'Silicone lip patches, lip masks and "lip plumpers"',
    tldr: 'Silicone splints a crease for a night and hydrates it for an hour; hyaluronic lip masks hydrate; plumpers irritate the lip into swelling for an evening. None has a trial and none changes a line.',
    evidence: 'limited',
    focus: 'dynamic',
    sessions: 'As desired',
    downtime: 'Plumpers sting',
    cost: '€10–40',
    bodyHtml: `
      <p>The consumer lip shelf is hydration and irritation dressed as treatment. Silicone patches over the upper lip stop the crease being folded overnight and hold water against it, so it looks softer for an hour or two on removal; hyaluronic lip masks do the hydration without the splint; "plumpers" contain cinnamon, capsaicin or menthol that irritate the lip into a brief swelling and a longer dryness. No controlled trial exists for any of them on lip lines, and none reaches the muscle, the volume or the floor of a groove. Cheap experiments before an evening; not a plan.</p>
    `,
  },
  {
    id: 'home-facial-exercise',
    category: 'home',
    title: 'Lip and mouth exercises',
    tldr: 'The lines are made by repeated pursing; exercising the orbicularis oris is the mechanism of the wrinkle. The one facial-exercise pilot measured cheek fullness, not lines.',
    evidence: 'limited',
    focus: 'dynamic',
    sessions: 'Do not, for the lips',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Facial-exercise programmes prescribe puckering, whistling and lip circles, which are the movements that etch a lip line in the first place. The 20-week facial-exercise pilot in 16 women found fuller cheeks with no control group and no wrinkle measurement (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2666801" rel="noopener nofollow" target="_blank">Alam 2018</a>); for the mouth, the best-evidenced treatment on this page works by doing the opposite. Harmless for the cheeks; counterproductive at the lip.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-toxin',
    category: 'inj',
    title: 'Botulinum toxin micro-doses to the orbicularis oris',
    tldr: 'Four to six units spread along the upper lip soften the purse and evert the lip for about three months; a controlled study found toxin-treated sides of the lip smoother for three years after chemabrasion. Small studies, real effect, a light hand.',
    evidence: 'moderate',
    focus: 'dynamic',
    note: 'Best for: dynamic lip lines, and as the first step before filler or resurfacing',
    sessions: 'Every 3 months',
    downtime: 'None; days of a "different" lip',
    cost: '€100–200',
    bodyHtml: `
      <p>A few units of toxin in the upper orbicularis oris weaken the purse without stopping it: the vertical lines soften, the lip everts slightly, and lipstick stops bleeding. The perioral evidence is small and consistent rather than large: in the original series, 18 patients had smoother lines and a fuller, everted upper lip at two to three weeks, and 72% continued treatment (<a href="https://pubmed.ncbi.nlm.nih.gov/12752516/" rel="noopener nofollow" target="_blank">Semchyshyn &amp; Carruthers 2003</a>); in a controlled long-term study, 12 women had one side of the upper lip pretreated with toxin before manual chemabrasion, and the toxin-treated sides showed smaller wrinkle grades from day 90 to three years (<a href="https://pubmed.ncbi.nlm.nih.gov/17760597/" rel="noopener nofollow" target="_blank">three-year controlled study</a>); the "lip flip", the same injection sold for lip shape, has a 2025 systematic review and clinical series showing consistent eversion with mild, transient effects on straws and whistling (<a href="https://pubmed.ncbi.nlm.nih.gov/40377719/" rel="noopener nofollow" target="_blank">systematic review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/42434768/" rel="noopener nofollow" target="_blank">2026 series</a>). No placebo-controlled trial exists for perioral lines themselves, which keeps it moderate despite the class's glabellar evidence.</p>
      <p>Dose is everything: 4–6 units in total, spread superficially along the upper lip just above the border, never near the corners (a drooping corner) and never in someone whose speech or instrument depends on a strong purse. Effect at a week, peak at two, three months of duration, and a lighter lip for drinking and consonants in the first fortnight.</p>
    `,
  },
  {
    id: 'inj-ha-perioral',
    category: 'inj',
    title: 'Hyaluronic-acid filler for the lip border, volume and perioral lines',
    tldr: 'A 225-person randomised trial of a lip-and-perioral gel: lip fullness responders 80% at three months, perioral lines improved in 65% at three months and 66% at a year; the first filler licensed for perioral lines (2016). Border and body, not the grooves.',
    evidence: 'strong',
    focus: 'volume',
    note: 'Best for: a deflated lip and blurred border — the support under every line; and the line itself only with a soft gel in expert hands',
    sessions: 'Every 9–12 months',
    downtime: '2–5 days of swelling; bruising',
    cost: '€300–500 per syringe',
    bodyHtml: `
      <p>Soft hyaluronic-acid gels restore the vermilion border, the Cupid's bow and a modest lip volume, which re-supports the skin above and softens the lines from beneath. The evidence is regulator-grade: in a prospective, multicentre randomised trial, 225 adults received either the low-viscosity lip-and-perioral gel VYC-15L (Volbella) or a comparator hyaluronic gel; lip-fullness responders were 80.3% versus 70.8% at three months, and perioral-line severity improved in 65.4% at three months and 66.2% at one year (<a href="https://www.ovid.com/jnls/dermatologicsurgery/fulltext/10.1097/dss.0000000000001035~safety-and-effectiveness-of-vyc-15l-a-hyaluronic-acid-filler" rel="noopener nofollow" target="_blank">pivotal trial</a>), with repeat treatment studied prospectively (<a href="https://doi.org/10.1093/asj/sjy019" rel="noopener nofollow" target="_blank">repeat-treatment study</a>). It became the first filler approved for perioral rhytids in 2016.</p>
      <p>Placement decides everything. Gel along the border and in the body of the lip supports the skin and looks like a lip; gel pushed into the vertical lines themselves lumps, migrates upward over months into a "filler moustache" and turns pale in thin skin. Tiny amounts, soft gels, a cannula, and someone who treats lips weekly. The <a href="/fillers">filler guide</a> covers the products and the reversal drug.</p>
    `,
  },
  {
    id: 'inj-combo',
    category: 'inj',
    title: 'Toxin plus filler (plus resurfacing) as a sequence',
    tldr: 'A multicentre randomised trial of toxin and hyaluronic filler alone and combined for the lower face favoured the combination; the sequenced approach — toxin, then border filler, then resurfacing — is how perioral specialists work.',
    evidence: 'moderate',
    focus: 'static',
    note: 'Best for: moderate to severe lip lines with a deflated lip — the plan most faces over 50 actually need',
    sessions: 'Toxin every 3 months; filler yearly; resurfacing once',
    downtime: 'By component',
    cost: '€500–3,000 across a year',
    bodyHtml: `
      <p>Because a lip line is three problems, the specialist plan stacks three tools. A multicentre, randomised, parallel-group study of onabotulinumtoxinA and a smooth hyaluronic gel, alone and in combination, for lower-face rejuvenation found the combination safe and more effective than either alone (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1524-4725.2010.01705.x" rel="noopener nofollow" target="_blank">Carruthers 2010</a>); a pilot of incobotulinumtoxinA followed by intradermal hyaluronic gel in moderate-to-severe perioral lines describes the technique (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11210074/" rel="noopener nofollow" target="_blank">pilot study</a>); and the sequenced approach of toxin, gel and ablative resurfacing is set out in a combination review (<a href="https://jddonline.com/articles/a-combination-approach-to-perioral-rejuvenation-S1545961616P0111X/" rel="noopener nofollow" target="_blank">JDD review</a>). The order matters: toxin first so the purse does not crease the new collagen, filler on the border for support, and resurfacing for the lines that remain — not filler into the lines and a laser over the filler.</p>
    `,
  },
  {
    id: 'inj-skin-booster',
    category: 'inj',
    title: 'Skin boosters and bioremodelling gels on the lip (Profhilo, collagen blends)',
    tldr: 'A 12-woman triple-blind split-face RCT of Profhilo on perioral texture and a randomised trial of hyaluronic-plus-collagen injections exist; effects on texture and hydration, small samples, little on an etched line.',
    evidence: 'emerging',
    focus: 'dynamic',
    sessions: '2 sessions a month apart, every 6–9 months',
    downtime: '1–3 days of bumps',
    cost: '€300–450 per session',
    bodyHtml: `
      <p>Microdroplet and "bioremodelling" injections spread dilute hyaluronic acid through the perioral dermis to hydrate and, the claim goes, stimulate collagen. The Profhilo trial is the honest size of the evidence: a randomised, triple-blind, split-face study of 12 women aged 45–65 measuring dermal thickness, pores and perioral wrinkles (<a href="https://link.springer.com/article/10.1007/s00266-026-05634-4" rel="noopener nofollow" target="_blank">triple-blind RCT</a>) — real, small, and about texture; a randomised trial of combined hyaluronic and collagen injections for perioral rejuvenation reaches a similar place (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC13526530/" rel="noopener nofollow" target="_blank">2026 RCT</a>). A reasonable add-on for crepe and dryness in a lip that is not yet etched; not a treatment for a groove. The <a href="/fillers">filler guide</a> grades the boosters.</p>
    `,
  },
  {
    id: 'inj-laser-plla',
    category: 'inj',
    title: 'Laser-assisted delivery of poly-L-lactic acid to the upper lip',
    tldr: 'A rater-blinded prospective study found topical poly-L-lactic acid delivered through fractional laser channels safe for upper-lip lines with no granulomas; a technique in development, not yet a treatment to buy.',
    evidence: 'emerging',
    focus: 'static',
    sessions: '2–3',
    downtime: '3–5 days',
    cost: '€400–800 / session',
    bodyHtml: `
      <p>Fractional laser channels can carry a collagen stimulator into the dermis without a needle, and a prospective, rater-blinded study applied topical poly-L-lactic acid after fractional ablative laser to upper-lip rhytides and reported safety without granulomas over follow-up (<a href="https://pubmed.ncbi.nlm.nih.gov/30608292/" rel="noopener nofollow" target="_blank">rater-blinded study</a>); a microneedling version is registered (<a href="https://clinicaltrials.gov/study/NCT07225348" rel="noopener nofollow" target="_blank">registry</a>). The laser itself does the visible work in these studies, which is why the row sits at emerging: interesting chemistry, no controlled evidence that the stimulator adds to the laser.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-co2-full',
    category: 'clinic',
    title: 'Full-field CO₂ or erbium resurfacing of the upper lip',
    tldr: 'The classic: perioral CO₂ resurfacing cut wrinkle depth by 91% at six weeks and 87% at two years in a quantitative study; a 2024 series confirms it for stubborn smokers’ lines. Two weeks of healing, permanent lightening possible.',
    evidence: 'strong',
    focus: 'static',
    note: 'Best for: etched lip lines in fair skin, when you want them gone and can take two weeks',
    sessions: 'Once',
    downtime: '7–14 days raw; pink for 2–3 months',
    cost: '€800–2,000 for the upper lip (UK £600–900)',
    bodyHtml: `
      <p>Full-field ablative resurfacing vaporises the whole lined epidermis of the upper lip and heats the dermis beneath, and the skin that regrows is thicker with reorganised collagen — the only laser approach that removes rather than softens an etched lip line. The quantitative long-term study measured a 91% mean reduction in wrinkle depth at six weeks after perioral CO₂ resurfacing, maintained at 87% two years later (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0007122602939603" rel="noopener nofollow" target="_blank">two-year study</a>); a 2024 series describes CO₂ as an effective answer to stubborn perioral wrinkling in smokers (<a href="https://journals.sagepub.com/doi/abs/10.1177/07488068221133664" rel="noopener nofollow" target="_blank">2024 series</a>); and the older full-face series found improvement persisting for years (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0190962299704895" rel="noopener nofollow" target="_blank">long-term follow-up</a>) at the price of delayed permanent lightening in about 8% (<a href="https://pubmed.ncbi.nlm.nih.gov/9950552/" rel="noopener nofollow" target="_blank">1999 series</a>). Erbium at full field does the same with less heat, slightly less tightening and faster healing.</p>
      <p>The rules of the lip: antiviral cover for everyone (cold sores reactivate in about 9% without it), a feathered edge into the surrounding skin so there is no line of demarcation, conservative depth at the vermilion, fair skin or a clear discussion of lightening, and toxin two weeks before so the purse does not crease the new collagen. The <a href="/laser-ipl">laser guide</a> walks the ladder.</p>
    `,
  },
  {
    id: 'clinic-phenol',
    category: 'clinic',
    title: 'Phenol–croton oil peel of the upper lip',
    tldr: 'A 639-patient series of segmental phenol–croton oil peels for perioral and periorbital rhytides; the deepest, longest-lasting non-surgical result for lip lines, where the authors judge lasers inadequate. Two weeks raw, permanent lightening, fair skin.',
    evidence: 'moderate',
    focus: 'static',
    note: 'Best for: deep, etched lip lines in fair skin — the most powerful single treatment for this zone',
    sessions: 'Once',
    downtime: '10–14 days raw; red for 2–3 months',
    cost: '€1,100–2,000 for the upper lip (UK from ~£1,500)',
    bodyHtml: `
      <p>A phenol peel with croton oil, applied to the upper lip alone, reaches the mid-dermis and provokes the deepest remodelling of any non-surgical treatment; the depth is set by the croton-oil concentration, not the phenol (<a href="https://pubmed.ncbi.nlm.nih.gov/10626996/" rel="noopener nofollow" target="_blank">Hetter's analysis</a>). The largest evidence is a series of 639 patients treated with segmental phenol–croton oil peels for periorbital or perioral rhytides, reporting significant, durable improvement and, in the authors' words, lasers proving inadequate for difficult perioral rhytides in quality and longevity (<a href="https://pubmed.ncbi.nlm.nih.gov/30528504/" rel="noopener nofollow" target="_blank">JAAD, 2019</a>); a 2020 review asks whether deep peels still have a place for perioral wrinkles and answers yes (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.13302" rel="noopener nofollow" target="_blank">Costa 2020</a>); the perioral peel combined with a facelift has documented outcomes (<a href="https://pubmed.ncbi.nlm.nih.gov/24165626/" rel="noopener nofollow" target="_blank">outcomes study</a>) and measurably shortens the philtrum (<a href="https://pubmed.ncbi.nlm.nih.gov/41433344/" rel="noopener nofollow" target="_blank">2026 study</a>). Never randomised against a laser, which is why it is graded moderate despite being, in most surgeons' hands, the most effective thing on this page.</p>
      <p>The price: two weeks of a raw lip, months of redness, permanent lightening of the treated strip (so fair skin, and a feathered or full-face plan for anyone who tans), and phenol's cardiac toxicity — a segmental lip peel under 1% of body surface is applied slowly without monitoring, a full face is staged with it. Very few hands; ask how many lips a year.</p>
    `,
  },
  {
    id: 'clinic-dermabrasion',
    category: 'clinic',
    title: 'Manual dermabrasion of the upper lip',
    tldr: 'In a randomised split-lip comparison, manual tumescent dermabrasion matched CO₂ resurfacing — wrinkle scores fell from 4.4 to 1.5 versus 4.3 to 1.8 — and a second controlled study agreed. Old, cheap, operator-dependent, and still excellent.',
    evidence: 'moderate',
    focus: 'static',
    sessions: 'Once',
    downtime: '7–10 days raw; pink for weeks',
    cost: '€800–1,500',
    bodyHtml: `
      <p>Dermabrasion is resurfacing by hand — a rotating diamond fraise or a sandpaper-like abrader taking the upper lip down to the papillary dermis under local anaesthetic — and it predates every laser. In a prospective randomised study, 20 women had one side of the upper lip treated with a CO₂ laser and the other with manual tumescent dermabrasion: wrinkle scores fell from 4.3 to 1.8 with the laser and from 4.4 to 1.5 with dermabrasion at six months, with no significant difference (<a href="https://pubmed.ncbi.nlm.nih.gov/10469094/" rel="noopener nofollow" target="_blank">randomised comparison</a>); a controlled evaluation of dermabrasion against CO₂ resurfacing for perioral wrinkles reached the same conclusion (<a href="https://pubmed.ncbi.nlm.nih.gov/11083571/" rel="noopener nofollow" target="_blank">controlled study</a>). Its results depend entirely on the operator's depth control, it has largely disappeared from clinics that bought lasers, and it remains the value option for a lip in the hands of a surgeon who still does it.</p>
    `,
  },
  {
    id: 'clinic-fractional',
    category: 'clinic',
    title: 'Fractional CO₂ or erbium resurfacing',
    tldr: 'Fractional ablation softens lip lines with a week of downtime and a fraction of the lightening risk; a randomised split-face trial found a single session gives an appreciable but limited effect on deep rhytides; smoking predicts a poorer response.',
    evidence: 'moderate',
    focus: 'static',
    note: 'Best for: moderate lip lines, or darker skin where full-field resurfacing is off the table',
    sessions: '2–3, 6–8 weeks apart',
    downtime: '5–7 days',
    cost: '€400–900 / session',
    bodyHtml: `
      <p>Fractional lasers ablate columns of skin and leave intact skin between, so the lip heals in days rather than weeks and the risk of permanent lightening falls sharply — at the cost of removing less per session. In a randomised, controlled, double-blind split-face trial of fractional CO₂ and erbium lasers for periorbital rhytides, wrinkle depth fell by about 20% after a single session with no difference between devices, and the authors called the effect appreciable but limited (<a href="https://www.ovid.com/journals/lsam/abstract/10.1002/lsm.20879~ablative-fractional-lasers-co2-and-eryag-a-randomized" rel="noopener nofollow" target="_blank">Karsai 2010</a>); fractional erbium improved perioral wrinkles with smoking and Glogau stage predicting a poorer response (<a href="https://pubmed.ncbi.nlm.nih.gov/33550718/" rel="noopener nofollow" target="_blank">2021 study</a>); a perioral fractional CO₂ trial is registered (<a href="https://clinicaltrials.gov/study/NCT03715049" rel="noopener nofollow" target="_blank">registry</a>). Two or three sessions approach a single full-field treatment for moderate lines; for deep smoker's lines the full-field tools and the phenol peel remain the answer. The <a href="/laser-ipl">laser guide</a> covers the devices.</p>
    `,
  },
  {
    id: 'clinic-nafl',
    category: 'clinic',
    title: 'Non-ablative fractional lasers (1540/1550 nm)',
    tldr: 'The original 1540 nm series treated periorbital and perioral rhytides with slow, progressive improvement and no serious effects; the modern fractional version improves roughness and texture. Softens; does not remove.',
    evidence: 'moderate',
    focus: 'dynamic',
    sessions: '3–4, a month apart',
    downtime: '1–3 days of redness',
    cost: '€300–600 / session',
    bodyHtml: `
      <p>Non-ablative lasers heat the dermis under an intact surface. The original 1540 nm erbium-glass series treated mild to moderate periorbital and perioral rhytides with three monthly sessions and found slow, progressive clinical improvement with histological collagen increase months later and no serious adverse effects (<a href="https://pubmed.ncbi.nlm.nih.gov/12269878/" rel="noopener nofollow" target="_blank">Lupton 2002</a>); the fractional 1540 nm device is a safe, effective non-ablative option for facial rejuvenation (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/jocd.13958" rel="noopener nofollow" target="_blank">2021 study</a>) with visible, quantifiable gains in roughness and texture (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9586531/" rel="noopener nofollow" target="_blank">2022 study</a>). On the lip it suits fine lines, crepe and darker skin; an etched groove barely notices it.</p>
    `,
  },
  {
    id: 'clinic-tca',
    category: 'clinic',
    title: 'Medium-depth Jessner’s–TCA peel of the upper lip',
    tldr: 'A 35% TCA peel improved global photoaging by 73% at three months in a controlled study, and the Jessner’s–TCA combination is a standard resurfacing tool for superficial to moderate lines; deep lip lines outrun it.',
    evidence: 'emerging',
    focus: 'static',
    sessions: '1–3',
    downtime: '5–7 days of peeling',
    cost: '€250–500',
    bodyHtml: `
      <p>Jessner's solution followed by 35% trichloroacetic acid coagulates the epidermis and upper dermis of the lip, with the skin stretched so the acid reaches the floor of each line. The systematic review of TCA peeling finds medium-depth peels effective resurfacing agents for wrinkles (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8423570/" rel="noopener nofollow" target="_blank">systematic review</a>), and the perioral-rhytid literature places the combination among the standard tools for superficial to moderate lines (<a href="https://www.sciencedirect.com/science/article/abs/pii/S1064740607001228" rel="noopener nofollow" target="_blank">treatment of perioral rhytids</a>). It reaches less deep than phenol, CO₂ or dermabrasion, which is where its tier comes from; it is the affordable option for early etching and the wrong one for a smoker's lip. The <a href="/chemical-peels">peel guide</a> grades the depths.</p>
    `,
  },
  {
    id: 'clinic-rf-microneedling',
    category: 'clinic',
    title: 'Radiofrequency microneedling of the upper lip',
    tldr: 'Protocols for the perioral zone are described and the periorbital studies are consistent, but no trial has tested it on lip lines specifically; softening for crepe, not removal.',
    evidence: 'emerging',
    focus: 'dynamic',
    sessions: '3–4, a month apart',
    downtime: '2–4 days',
    cost: '€400–800 / session',
    bodyHtml: `
      <p>Insulated needles deliver radiofrequency heat into the perioral dermis, and the anatomical treatment guides describe a dedicated upper-lip protocol with a small applicator across the convex lip (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11862810/" rel="noopener nofollow" target="_blank">anatomical approach</a>). The evidence, though, comes from the eye: periorbital series report a quarter to a third less wrinkling after one to three sessions, and no study has measured lip lines (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11626310/" rel="noopener nofollow" target="_blank">periorbital trial</a>). The class carries an FDA alert on burns and scarring, and the deep, static vertical lines of the lip are, in the device makers' own words, challenging to efface. Crepe and early lines in someone avoiding downtime; the <a href="/microneedling">microneedling guide</a> covers the devices.</p>
    `,
  },
  {
    id: 'surg-lip-lift',
    category: 'clinic',
    title: 'Subnasal lip lift',
    tldr: 'Removes a strip of skin under the nose to shorten a long philtrum and evert the lip; series-based evidence and a permanent scar at the nostril base. For the lengthened lip, not the lines.',
    evidence: 'emerging',
    focus: 'volume',
    sessions: 'Once',
    downtime: '1–2 weeks; scar matures over months',
    cost: '€2,500–5,000',
    bodyHtml: `
      <p>A subnasal ("bullhorn") lip lift excises a curved strip of skin at the base of the nose and lifts the upper lip, shortening a philtrum that has lengthened with age and rolling the vermilion outward so more red lip shows. The lip-aging literature describes it as the surgical answer to the long, flat upper lip (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.70310" rel="noopener nofollow" target="_blank">lip aging review</a>), and the perioral phenol peel is documented to shorten the philtrum in a lesser way (<a href="https://pubmed.ncbi.nlm.nih.gov/41433344/" rel="noopener nofollow" target="_blank">2026 study</a>). Its evidence is surgical series rather than trials, its scar sits at the nostril base for life, and it treats length and eversion rather than the vertical lines — which is why it is usually combined with resurfacing or done for a different complaint. Our <a href="/anti-aging-50s">50s guide</a> covers the surgical decade.</p>
    `,
  },
  {
    id: 'clinic-dental',
    category: 'clinic',
    title: 'Restoring the support underneath (teeth and dentures)',
    tldr: 'Tooth loss resorbs half the alveolar bone width within a year and removes the lip’s scaffold; worn dentures and lost teeth deepen perioral lines, and a prosthesis with proper flange thickness restores support. Ask the dentist before the injector.',
    evidence: 'emerging',
    focus: 'volume',
    sessions: 'Dental assessment',
    downtime: 'By procedure',
    cost: 'Varies widely',
    bodyHtml: `
      <p>The lip rests on the teeth and the bone that holds them. Loss of a tooth begins irreversible resorption of the alveolar ridge — about half its width in the first year — and loss of muscle tone in the perioral muscles, and the visible result is deep nasolabial folds, a collapsed lip and perioral wrinkles; prosthodontists inspect denture flange thickness precisely because it supplies the lip's support (<a href="https://www.oralhealthgroup.com/features/implants-and-prosthetic-restorations-clinical-considerations/" rel="noopener nofollow" target="_blank">prosthodontic review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/15850992/" rel="noopener nofollow" target="_blank">bone loss and teeth</a>). Nobody has randomised dentures against filler, which is why this sits at emerging, and no injector can fill a lip that has lost its scaffold. For anyone with worn dentures, missing upper teeth or a collapsed bite, the dentist's assessment comes before the aesthetic plan.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-toxin-lip',
    category: 'safety',
    title: 'Toxin at the mouth: straws, consonants, whistling, corners',
    tldr: 'Too much toxin weakens the seal: difficulty with straws, whistling, plosive consonants and lipstick lines for weeks; asymmetry and a drooping corner from uneven placement. Four to six units, superficially, never for wind players.',
    bodyHtml: `
      <p>The orbicularis oris is the muscle you speak, drink and kiss with, and toxin measured in units elsewhere is measured in fractions here. The predictable effects of overdoing it are a weak seal — difficulty sipping through a straw, whistling, pronouncing p and b, holding liquid in the mouth — and they last as long as the toxin, up to three months; uneven placement gives an asymmetric purse, and toxin near the corners drops them. The lip-flip literature reports the same mild, transient straw-and-whistle effects at the 4–6-unit doses that work (<a href="https://pubmed.ncbi.nlm.nih.gov/40377719/" rel="noopener nofollow" target="_blank">systematic review</a>). Singers, wind and brass players, and anyone whose work depends on precise speech are treated with even smaller doses or not at all. Not in pregnancy; licensed product; two-week review.</p>
    `,
  },
  {
    id: 'safety-filler-lip',
    category: 'safety',
    title: 'Filler at the lip: the labial artery, the lumps, the moustache',
    tldr: 'The superior labial artery runs where lip filler goes; occlusion is rare (under 1 in 5,000 injections in reviews) and necrosis or, exceptionally, blindness follow; lumps and upward migration are the routine problems; herpes reactivates.',
    bodyHtml: `
      <p>The superior labial artery runs along the upper lip just behind the wet–dry junction, and filler injected into it or compressing it necroses the lip and, through its connections to the eye's circulation, has rarely caused blindness; reviews put occlusion at under 1 in 5,000 injections, with the nasolabial fold and lip the commonest sites of filler necrosis (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12028560/" rel="noopener nofollow" target="_blank">labial-artery review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/36129182/" rel="noopener nofollow" target="_blank">necrosis systematic review</a>; <a href="https://www.oaepublish.com/articles/2347-9264.2021.58" rel="noopener nofollow" target="_blank">perioral complications review</a>). Slow injection, aspiration, cannula where appropriate and hyaluronidase in the room are the safeguards, and a lip that blanches, mottles or hurts disproportionately is an emergency that afternoon.</p>
      <p>The routine harms are aesthetic and common: lumps in thin perioral skin, gel migrating upward over months into a swollen "filler moustache" above the border, and the overfilled lip that reads as a procedure. Lip filler also reactivates cold sores; anyone with a history takes antiviral cover. Hyaluronic gels dissolve; everything else placed in a lip is permanent. The <a href="/fillers">filler guide</a> covers the zone.</p>
    `,
  },
  {
    id: 'safety-resurfacing-lip',
    category: 'safety',
    title: 'Resurfacing the lip: cold sores, lightening, scars, darker skin',
    tldr: 'Herpes reactivates in about 9% of resurfaced patients without antivirals and in near none with them; full-field CO₂ and phenol lighten the treated strip for good; the lip scars if pushed; darker skin darkens after any of it.',
    bodyHtml: `
      <p><strong>Cold sores.</strong> Most adults carry the herpes simplex virus, and resurfacing the lip wakes it: about 9% of patients reactivate without prophylaxis, and a spreading herpes infection on a raw lip scars. Famciclovir or valacyclovir from the day before through healing brought reactivation to near zero in the prophylaxis studies (<a href="https://pubmed.ncbi.nlm.nih.gov/10193975/" rel="noopener nofollow" target="_blank">famciclovir study</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/11966791/" rel="noopener nofollow" target="_blank">valacyclovir study</a>), and no one is resurfaced without it.</p>
      <p><strong>Lightening and lines of demarcation.</strong> Full-field CO₂ produced delayed permanent hypopigmentation in about 8% of patients in the classic series (<a href="https://pubmed.ncbi.nlm.nih.gov/9950552/" rel="noopener nofollow" target="_blank">1999 series</a>), and phenol lightens the skin it treats more reliably still; a treated upper lip on a face that tans shows a pale strip with a visible edge, which is why the peel is feathered, why darker-skinned patients are steered to fractional or full-face plans, and why the honest consent includes the word "permanent" (<a href="https://emedicine.medscape.com/article/1829120-periprocedure" rel="noopener nofollow" target="_blank">peel periprocedural guidance</a>).</p>
      <p><strong>Scars and pigment.</strong> The gland-poor lip heals slowly and scars if ablated too deep, especially at the vermilion; post-inflammatory darkening follows any resurfacing in Fitzpatrick IV–VI. Phenol adds cardiac monitoring for anything beyond a small segment. Ask how many lips the operator treats a year, and whether they start with antivirals.</p>
    `,
  },
  {
    id: 'safety-overfill',
    category: 'safety',
    title: 'The overfilled lip and the "filler moustache"',
    tldr: 'Gel in the vertical lines and repeated top-ups produce a lumpy, protruding upper lip and a swollen ridge above the border; hyaluronic acid persists for years on MRI, so "it dissolves in six months" is not a plan.',
    bodyHtml: `
      <p>The commonest harm from treating lip lines is not a complication but a look: filler pushed into the vertical lines themselves, or topped up every six months on the assumption it has gone, accumulates into a protruding, lumpy upper lip and a soft ridge above the vermilion that reads as a moustache. MRI studies show hyaluronic gel persisting far longer than the folklore, which is the argument against routine top-ups (<a href="https://journals.lww.com/prsgo/fulltext/2024/07000/hyaluronic_acid_filler_longevity_in_the_mid_face_.36.aspx" rel="noopener nofollow" target="_blank">MRI review</a>), and the overfilled lower face is a recognised syndrome (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13051189/" rel="noopener nofollow" target="_blank">facial overfilled syndrome</a>). The fix is hyaluronidase and restraint: border and body only, tiny volumes, a photograph before each session, and resurfacing for the lines instead of more gel.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-remove',
    category: 'faq',
    title: 'Can lip lines actually be removed?',
    tldr: 'Etched ones, yes — by resurfacing: full-field CO₂ (87% less wrinkle depth at two years), dermabrasion, or a phenol peel. Creams, toxin and filler soften and support; they do not remove.',
    bodyHtml: `
      <p>The honest ladder: skincare slows and softens, toxin quietens the purse, filler restores the border and volume so the skin is supported, and only resurfacing removes an etched line by rebuilding the dermis beneath it. Full-field CO₂ held 87% of its wrinkle-depth reduction at two years, dermabrasion matched it in a randomised comparison, and the phenol–croton oil peel has the deepest and longest results in a 639-patient series. All three mean two weeks of a raw lip and a real risk of permanent lightening, which is why they belong to fair skin and experienced hands.</p>
    `,
  },
  {
    id: 'faq-smokers',
    category: 'faq',
    title: "I've never smoked — why do I have smoker's lines?",
    tldr: 'Because the muscle, the sun and the deflating lip make them on their own; smoking just brings them a decade forward. Women get them earlier because of thinner, gland-poor skin and a muscle anchored closer to it.',
    bodyHtml: `
      <p>The name is unfair. Perioral lines rise with age and are markedly worse in women at every age, smoker or not, because women's perioral skin has fewer oil and sweat glands and an orbicularis anchored about 1.5 times closer to the dermis; the purse of speech and drinking, decades of sun on a strip most people never sunscreen, and the deflation of the lip and jaw do the rest. Smoking adds a minutes-long purse twenty times a day and smoke that breaks collagen, and moves the timeline forward by years. Non-smokers' lines respond to exactly the same treatments.</p>
    `,
  },
  {
    id: 'faq-straws',
    category: 'faq',
    title: 'Do straws, water bottles or vaping cause lip lines?',
    tldr: 'Vaping keeps the smoker’s purse without most of the smoke and probably contributes; straws and bottles are seconds of pursing a day and are not in the same category. Quit the vape; keep the water.',
    bodyHtml: `
      <p>The mechanism is repetition of the purse, so the question is dose. A cigarette is minutes of pursing plus smoke, twenty times a day; a vape keeps the purse and drops most of the smoke, and dermatologists expect it to contribute, though the twin photographs have not been taken; a straw or a sports bottle is a purse for a few seconds, with no free radicals — as one dermatology service puts it, a heavy smoker purses for the equivalent of dozens of straws a day. Worry about the vape, not the water bottle, and put the worry into sunscreen and a retinoid instead.</p>
    `,
  },
  {
    id: 'faq-filler-lines',
    category: 'faq',
    title: 'Will filler get rid of the lines?',
    tldr: 'On the border and in the body of the lip, it softens them by supporting the skin — two-thirds improved in the pivotal trial. Pushed into the lines themselves, it lumps and migrates. Etched lines need resurfacing.',
    bodyHtml: `
      <p>The pivotal trial of the lip-and-perioral gel measured perioral-line improvement in about two-thirds of patients at three months and a year — achieved by restoring the vermilion border and a modest volume, not by filling each line. Gel placed in the vertical grooves of thin perioral skin shows as lumps, turns pale, and migrates upward over months into the ridge people call a filler moustache. For a deflated lip with early lines, border filler is the right first move; for etched lines, it is the support under a resurfacing plan, not a substitute for one.</p>
    `,
  },
  {
    id: 'faq-toxin-speech',
    category: 'faq',
    title: 'Will toxin affect my speech or drinking?',
    tldr: 'At the right dose, briefly and mildly — a slightly loose lip for straws and whistling in the first weeks. Over-dosed, it weakens consonants and the seal for months. Singers and wind players: smaller doses or none.',
    bodyHtml: `
      <p>Four to six units spread along the upper lip soften the purse without stopping it; most people notice a different feel for a fortnight, a little difficulty with straws or whistling, and nothing they would call a problem. The lip-flip series report the same mild, transient effects. Larger doses, or toxin placed low or near the corners, weaken the seal — p and b, holding liquid, a drooping corner — for as long as the toxin lasts. Anyone whose work depends on the lip is treated with the smallest possible dose, a trial on one occasion, or not at all.</p>
    `,
  },
  {
    id: 'faq-laser-or-peel',
    category: 'faq',
    title: 'Laser, dermabrasion or phenol?',
    tldr: 'For deep lines in fair skin, the phenol peel is the most powerful and longest-lasting; full-field CO₂ and dermabrasion are close and better studied; fractional lasers soften with less risk; in darker skin, fractional or non-ablative only.',
    bodyHtml: `
      <p>All three full-field tools remove an etched line; they differ in depth, lightening and who does them. The phenol–croton oil peel goes deepest and lasts longest — its 639-patient series judges lasers inadequate for the hardest lip lines — at the price of the most reliable lightening and the fewest practitioners. Full-field CO₂ has the quantitative two-year data (87% less wrinkle depth) and erbium a gentler version; dermabrasion matched CO₂ in a randomised comparison and is cheapest where it survives. Fractional lasers remove less per session and lighten less, which makes them the moderate-line and darker-skin option. In Fitzpatrick IV–VI, full-field anything on the lip risks pigment and demarcation, and the plan is fractional or non-ablative with priming.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Toxin: 1–2 weeks. Filler: at once, settled at two weeks. Retinoids and serums: 8–12 weeks. Resurfacing: raw for two weeks, pink for months, judged at three months, final at six.',
    bodyHtml: `
      <p>Toxin softens the purse within a week and peaks at two. Border filler shows immediately and is judged once the swelling clears at two weeks — the moment a lump can still be dissolved. Retinoids and the serums change the surface over eight to twelve weeks and keep improving at six months. After full-field resurfacing, dermabrasion or a phenol peel, the lip is raw for one to two weeks, pink for two to three months, good at three months and final at six as the collagen matures; fractional sessions repeat that on a smaller scale. Photograph at rest and puckered before anything.</p>
    `,
  },
  {
    id: 'faq-prevent',
    category: 'faq',
    title: 'How do I prevent lip lines in my thirties?',
    tldr: 'Sunscreen carried down to the lip and an SPF balm, no smoking or vaping, a retinoid above the lip, and — when a line starts to linger after the purse — a few units of toxin.',
    bodyHtml: `
      <p>Prevention is the strip of skin most people forget: face sunscreen taken down to the vermilion every morning, a balm with SPF on the red of the lip, no smoking and no vape, and a retinoid on the skin above the lip from the thirties. When a vertical line begins to stay a moment after the purse, a light toxin dose keeps it dynamic for longer, with a plausible mechanism and the three-year controlled chemabrasion study behind it. Filler is for a border that has blurred, not for prevention; resurfacing is for lines that exist. The <a href="/anti-aging-30s">30s guide</a> covers the decade.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What is the cheapest thing that works, and the most effective?',
    tldr: 'Cheapest with evidence: sunscreen, an SPF balm and a retinoid, €20–40 a month. Most effective per line: a phenol peel or full-field CO₂ of the upper lip, €800–2,000, once. In between: toxin €100–200, border filler €300–500.',
    bodyHtml: `
      <p>The ladder in euros: sunscreen and a retinoid (€20–40 a month, the only prevention with trials) → toxin micro-doses (€100–200 every three months) → border and volume filler (€300–500 a syringe, a year) → fractional or non-ablative laser, TCA peel (€250–900 a session, several) → full-field CO₂, dermabrasion or a phenol peel (€800–2,000, once, two weeks off). Each rung does something the one below cannot; the top rung is the only one that removes an etched line, and the bottom rung is the only one that stops the next.</p>
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
    intro: 'Three drivers make a lip line — and the pucker test tells you which one is doing the most in yours.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which lip lines do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: prevention and the skin',
    intro: 'The two habits with evidence, the topicals with real trials, and the lip shelf that hydrates and nothing more.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Injectables',
    intro: 'Toxin in fractions, filler on the border and not in the lines, and the sequence specialists actually use.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Resurfacing, surgery and support',
    intro: 'Where an etched line is actually removed — graded by the two-year data and the 639-patient series — plus the lip lift and the dentist.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'What the trials and the regulators actually flag, treatment by treatment — and the mouth’s own hazards: the artery, the virus, the lightening.',
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
  dynamic: 'Dynamic lines',
  static: 'Etched lines',
  volume: 'Volume & border',
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

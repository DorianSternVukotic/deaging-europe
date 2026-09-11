/**
 * Crow's feet guide — single source of truth (problem template).
 *
 * Consumed by /crows-feet. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: crow's feet are the first wrinkle and the best-treated one,
 * because a muscle makes them and a toxin stops the muscle. The smile test
 * sorts dynamic lines (toxin) from static ones (toxin plus skin work) from
 * crepe (skin work) from a dropped brow (a different problem). The thinnest
 * skin on the face punishes filler and aggressive lasers; the sun and the
 * squint made most of it.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'dynamic' | 'static' | 'crepe' | 'brow' | 'general';

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
  'Crow\'s feet are made by a muscle — the orbicularis oculi — folding the thinnest skin on the face every time you smile or squint. Smile in a mirror and relax: lines that vanish are dynamic, lines that stay are static, and crinkle without lines is crepe. Each has a different first move.',
  'Botulinum toxin is the treatment for the dynamic line, with the best evidence in aesthetic medicine: about half of patients reach a two-grade improvement at a month against 1–3% on placebo, for a median of four months. Used early, it also keeps a dynamic line from etching in.',
  'Static lines need the muscle stopped and the skin rebuilt: fractional lasers have randomised split-face trials around the eye, a thin hyaluronic gel adds durability to toxin in a randomised trial, and retinoids improve fine periorbital lines over months.',
  'Sunscreen and sunglasses are the prevention: the periorbital skin is the thinnest and most sun-exposed on the face, and squinting folds it thousands of times a day. Peptides, patches and face yoga do not compete.',
  'The eye is the one place where technique matters more than product. Toxin placed too low or too deep weakens the smile or the lower lid; filler in half-millimetre skin turns blue; aggressive lasers pull the lid. Choose the injector, not the brand.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-dynamic',
    kind: 'Motion',
    title: 'Every smile and squint folds the same skin',
    blurb: 'The orbicularis oculi contracts thousands of times a day and creases the skin at the outer corner in the same radiating lines. Dynamic first, static once the dermis stops springing back.',
  },
  {
    id: 'home-spf-sunglasses',
    kind: 'Sun',
    title: 'The thinnest skin, in full sun',
    blurb: 'Periorbital skin is about half a millimetre thick with few oil glands, sits at the edge of the sunscreen zone, and squints against every bright day. UV breaks its collagen faster than anywhere else on the face.',
  },
  {
    id: 'type-static',
    kind: 'Time',
    title: 'Collagen thins, the temple deflates, the brow drops',
    blurb: 'With age the dermis under the crease loses the ability to recover, the temple and outer brow lose volume, and the lateral brow descends — so the lines deepen, bunch, and stay at rest.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'eye-anatomy',
    category: 'concept',
    title: 'What a crow’s foot actually is',
    tldr: 'Radiating creases at the outer corner of the eye where the orbicularis oculi muscle folds half-millimetre skin with almost no oil glands — the first wrinkle most faces get, and the most treatable.',
    bodyHtml: `
      <p>The orbicularis oculi is a ring of muscle around the eye that closes the lids and, at its outer edge, pulls the skin toward the corner of the eye with every smile, laugh and squint. The skin it folds is the thinnest on the face — about half a millimetre, with few sebaceous glands and a sparse dermis — so the crease it makes has the least tissue to spring back from (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2907965/" rel="noopener nofollow" target="_blank">wrinkle review</a>). Early in life the lines appear only with the expression and vanish at rest; as UV and time fragment the dermal collagen and elastin beneath them, the crease stays.</p>
      <p>Two other things join in with age: the temple and the outer brow lose volume and the lateral brow descends, so the skin at the corner of the eye has more slack to fold and the lines bunch under a lower brow. That is why the treatment for crow's feet in a 30-year-old is a toxin, and in a 60-year-old is a toxin plus the skin plus, sometimes, the brow.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'The first wrinkle, and who gets it first',
    tldr: 'Wrinkles around the eyes appear earliest and most severely in European women — from the late twenties — and later in East Asian women; sun, squinting and smoking bring them forward.',
    bodyHtml: `
      <p>In a comparison of women across five ethnic groups, wrinkles and sagging appeared earliest and most severely in European women, from the late twenties onward, while Chinese women showed pigmentation first and wrinkling later (<a href="https://onlinelibrary.wiley.com/doi/10.1111/ics.13003" rel="noopener nofollow" target="_blank">2024 study</a>); a study of 5,310 Chinese women built photo-numeric scales for crow's feet alongside forehead, glabellar and nasolabial lines because they are the four wrinkles that define an aging face (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12445401/" rel="noopener nofollow" target="_blank">2025 study</a>). Crow's feet are typically the first wrinkle — visible with expression by the late twenties and at rest by the forties in fair skin (<a href="https://my.clevelandclinic.org/health/diseases/24586-crows-feet" rel="noopener nofollow" target="_blank">Cleveland Clinic</a>).</p>
      <p>The accelerators are the usual ones: sun, which lands on this skin every day it is not shaded; squinting, which is the sun's second mechanism; and smoking, which in identical-twin studies aged the whole periorbital region (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">twin study</a>). Genetics decide the starting point; habits decide the slope.</p>
    `,
  },
  {
    id: 'why-sort',
    category: 'concept',
    title: 'Why the smile test decides everything',
    tldr: 'Dynamic lines answer to toxin alone; static lines need toxin plus skin work; crepe needs skin work and little toxin; a dropped brow needs the brow treated. Treating the wrong type spends money and, around the eye, risks the smile.',
    bodyHtml: `
      <p>Smile as hard as you can in a mirror, then relax completely and look again. Lines that disappear are dynamic: the muscle makes them and stopping the muscle removes them. Lines that remain, even faintly, are static: the dermis has been folded past its ability to recover, and toxin alone will soften them over cycles but not erase them — the floor of the line needs rebuilding with a laser or, carefully, a thin filler. A fine crinkle across the whole outer corner without distinct lines is crepe: photoaged skin, which wants a retinoid, sunscreen and resurfacing far more than it wants toxin, which can make loose skin look looser. And if the outer brow sits low and the lines are bunched beneath it, the brow is part of the problem.</p>
      <p>The eye punishes the wrong choice: toxin in crepe reads as a slack, sad corner; filler in half-millimetre skin turns blue and lumpy; an aggressive laser on the lower lid pulls it down. The sort takes thirty seconds and decides the tier.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-dynamic',
    category: 'context',
    title: 'Dynamic lines (only when you smile or squint)',
    tldr: 'Lines that appear with expression and vanish at rest — the muscle is the whole cause and toxin the whole treatment; used from now, it also delays the etched version.',
    focus: 'dynamic',
    bodyHtml: `
      <p>Dynamic crow's feet are the healthiest kind: the skin is still elastic, the lines are the muscle's doing, and nothing else is needed. Botulinum toxin placed in the outer orbicularis stops the fold for three to four months and, because the skin is no longer being creased several thousand times a day, the dermis beneath keeps its recovery for longer — the plausible mechanism behind "preventive" use. This is the type where the smallest doses work, where a light hand keeps a natural smile, and where the mistake is overtreating a face that only needed six units a side.</p>
    `,
  },
  {
    id: 'type-static',
    category: 'context',
    title: 'Static lines (there at rest)',
    tldr: 'Lines etched into the dermis that persist without expression — toxin softens them over repeated cycles, and the line itself needs resurfacing or a thin gel to fill the floor.',
    focus: 'static',
    bodyHtml: `
      <p>A static crow's foot has a floor: the dermis under the crease has lost its collagen and elastin and the line is there in a photograph taken asleep. Toxin still matters — it stops the crease being deepened and, over several cycles, lets the floor recover partly — but on its own it disappoints people who expected the line to vanish at two weeks. The rest of the treatment is the skin: a fractional laser to rebuild the dermis, a medium peel in fair skin, and, in expert hands, a very soft hyaluronic gel or skin booster laid along the line, which in a randomised split-face trial made toxin's result last longer. Retinoids and sunscreen slow the next etching.</p>
    `,
  },
  {
    id: 'type-crepe',
    category: 'context',
    title: 'Crepey, crinkled skin at the corners',
    tldr: 'A fine crinkle across the whole outer eye rather than distinct lines — thin, photoaged skin that needs rebuilding, not relaxing; toxin can make it look looser.',
    focus: 'crepe',
    bodyHtml: `
      <p>Crepe is what periorbital skin does after decades of sun: the epidermis thins, the elastic fibres fragment, and the surface crinkles like tissue paper whether or not the muscle moves. It is a skin-quality problem. Retinoids thicken the epidermis and rebuild upper-dermal collagen over months, non-ablative fractional lasers and light peels remodel the dermis with little downtime, and sunscreen stops the next decade of it. Toxin has a smaller role here and a real hazard: relaxing the orbicularis under loose skin removes the muscle tone that was holding it, and the corner can look slacker after treatment than before. A light dose at most, and the skin work first.</p>
    `,
  },
  {
    id: 'type-brow-hooding',
    category: 'context',
    title: 'The dropped outer brow and lateral hooding',
    tldr: 'When the outer brow descends, skin bunches over the outer eye and the lines crowd under it — a brow problem wearing a crow’s-foot costume; toxin can lift a few millimetres, surgery more.',
    focus: 'brow',
    bodyHtml: `
      <p>Look at the outer third of the brow. If it sits at or below the bony rim, with skin folding over the outer eyelid and the crow's feet bunched beneath, the brow has descended — a combination of lost temple and brow volume, loosened ligaments and the downward pull of the orbicularis itself. Treating the lines alone makes a low, heavy corner look flatter. The options run from a few units of toxin in the outer orbicularis, which releases the brow to lift by a few millimetres, to microfocused ultrasound (measured brow lifts of roughly half a millimetre to 1.7 mm), to a temporal or lateral brow lift, which is the definitive answer and belongs to a surgeon. Our <a href="/anti-aging-50s">50s guide</a> covers the surgical brow lift; the <a href="/eye-bags">eye-bags guide</a> covers the lower lid.</p>
    `,
  },
  {
    id: 'type-lower',
    category: 'context',
    title: 'Lines that run under the eye onto the cheek',
    tldr: 'The lower extension of crow’s feet crosses the muscle that holds the lower lid and the muscle that lifts the smile — the zone where toxin causes a weak smile, a slack lid or a puffy eye. Skin work first, toxin sparingly.',
    focus: 'static',
    bodyHtml: `
      <p>Crow's feet that continue downward onto the upper cheek sit over the lower orbicularis, which pumps lymph and holds the lid against the eye, and near the zygomaticus muscles that lift the corner of the mouth. Toxin here is where the complications come from: injected too low, too deep or too generously, it weakens the smile on that side, lets the lower lid sag or pool fluid, and can cause double vision if it drifts to an eye muscle (<a href="https://link.springer.com/article/10.1007/s00266-021-02483-1" rel="noopener nofollow" target="_blank">practical guide</a>). These lines are treated with a retinoid, sunscreen and a non-ablative laser or light needling first; toxin, if at all, in tiny superficial doses well outside the bony rim by someone who injects eyes weekly. The <a href="/eye-bags">eye-bags guide</a> covers the lower lid in full.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'What a good injector maps before the syringe',
    tldr: 'The smile test, the brow position, the lower-lid snap, the smile muscles, a photograph at rest and at maximum smile — and a dose in units, not a "package".',
    bodyHtml: `
      <p>A consultation for crow's feet that lasts three minutes is a warning. The good version watches you smile, squint and relax to sort dynamic from static from crepe; checks where the outer brow sits and whether you use your forehead to hold it up; pulls the lower lid to see if it snaps back (a lax lid is a reason for caution); asks you to smile hard to map where your zygomaticus pulls, so the toxin stays clear of it; asks about dry eye, previous surgery and pregnancy; and photographs you at rest and at maximum smile in the same light, because the two-week review is judged against those and not against memory. Doses are stated in units per side — typically 6–15 for most faces, 24 in total in the licensing trials — and the product is named and licensed. Anything sold as an "eye package" without that examination is a package, not a treatment.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-spf-sunglasses',
    category: 'home',
    title: 'Sunscreen to the orbital rim, and UV sunglasses',
    tldr: 'Daily sunscreen cut measured skin aging by 24% over 4.5 years in the one randomised prevention trial; sunglasses block the UV and stop the squint that folds the skin — logic rather than trial, but the mechanism is the whole cause.',
    evidence: 'strong',
    focus: 'general',
    note: 'Best for: everyone — the only prevention with a randomised trial, and the cheapest row on the page',
    sessions: 'Every day outdoors',
    downtime: 'None',
    cost: '€10–30 / month plus sunglasses',
    bodyHtml: `
      <p>The outer eye takes more sun than any other facial skin and gets less sunscreen — most people stop short of the lashes. The Nambour trial's daily-sunscreen group showed no detectable increase in skin aging over 4.5 years, 24% less than discretionary users (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>), and the thin periorbital dermis is where that collagen protection matters most. Sunglasses add two things: they block the UV that reaches the periorbital skin — measured doses vary widely with frame style, and wraparound or large lenses protect the skin around the eye far better than small ones (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6803516/" rel="noopener nofollow" target="_blank">UV-dose study</a>) — and they stop the squint, which is the muscle folding the skin against glare thousands of extra times a day. No trial has randomised sunglasses against crow's feet; the mechanism is the entire cause of the line.</p>
      <p>Practically: a mineral or gentle chemical SPF 30–50 to the orbital rim every morning, large UV400 sunglasses whenever it is bright, and a hat. The dermatologist's habit is to put the sunscreen on before make-up and to keep sunglasses in the car and the bag, because the squint happens in the two minutes before you remember them.</p>
    `,
  },
  {
    id: 'home-retinoid',
    category: 'home',
    title: 'A retinoid at the outer eye',
    tldr: 'The tretinoin meta-analysis (8 trials, 1,361 patients) shows fewer fine wrinkles; a retinoid eye cream improved periorbital lines by a third in 12 weeks in an open study; a cosmetic regimen matched 0.02% tretinoin in 196 women. Crepe and fine lines, over months.',
    evidence: 'moderate',
    focus: 'crepe',
    note: 'Best for: crepey corners and fine static lines — and the maintenance under any toxin schedule',
    sessions: '2–3 nights a week to nightly, indefinitely',
    downtime: 'Weeks of dryness if overdone',
    cost: '€10–40 / month',
    bodyHtml: `
      <p>Retinoids are the one topical that thickens the epidermis and rebuilds upper-dermal collagen, and the periorbital skin is where that shows first. The meta-analysis of eight randomised tretinoin trials in 1,361 patients found significant improvement in fine and coarse wrinkles over vehicle (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">meta-analysis</a>); a hydrating retinoid eye cream improved the appearance of periorbital lines by 33% at 12 weeks in an open-label study (<a href="https://pubmed.ncbi.nlm.nih.gov/36074511/" rel="noopener nofollow" target="_blank">JDD, 2022</a>); and an 8-week randomised comparison in 196 women with periorbital wrinkles found a niacinamide–peptide–retinyl propionate regimen comparable to 0.02% tretinoin with better tolerance (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2841824/" rel="noopener nofollow" target="_blank">regimen trial</a>). It treats crepe and fine static lines, not the dynamic fold, and it needs months.</p>
      <p>The eye tolerates less than the cheek: a pea for both sides, on the orbital bone rather than the lid margin, two or three nights a week to start, buffered with a moisturiser, and never into the eye. Retinol or retinaldehyde at a stated strength is the gentler route; the <a href="/wrinkles">wrinkles guide</a> covers the ladder.</p>
    `,
  },
  {
    id: 'home-actives',
    category: 'home',
    title: 'Vitamin C, niacinamide and hyaluronic serums',
    tldr: 'Niacinamide 5% reduced fine lines in a split-face RCT; vitamin C 5% reduced furrows over six months; hyaluronic serums soften lines within hours by hydration. Supporting cast, not a treatment for a crease.',
    evidence: 'moderate',
    focus: 'crepe',
    sessions: 'Morning (vitamin C, hyaluronic) and evening (niacinamide)',
    downtime: 'None',
    cost: '€15–60 / month',
    bodyHtml: `
      <p>Three ingredients with controlled data for fine periorbital-type lines: niacinamide 5% reduced fine lines and wrinkles and improved elasticity in a 12-week double-blind split-face trial of 50 women (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1524-4725.2005.31732" rel="noopener nofollow" target="_blank">Bissett 2005</a>); a 5% vitamin C cream reduced deep furrows and improved surface microrelief over six months in a double-blind trial (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1034/j.1600-0625.2003.00008.x" rel="noopener nofollow" target="_blank">Humbert 2003</a>); and a multi-weight hyaluronic-acid serum produced immediate, measurable reductions in fine and coarse lines by hydrating the surface (<a href="https://www.jaad.org/article/S0190-9622(16)00202-4/fulltext" rel="noopener nofollow" target="_blank">JAAD, 2016</a>). Around the eye they soften crepe, add antioxidant protection under sunscreen, and make the skin drape better over the toxin result. None reaches the muscle, and none fills a static line.</p>
    `,
  },
  {
    id: 'home-led',
    category: 'home',
    title: 'Home LED masks for crow’s feet',
    tldr: 'A multicentre, randomised, double-blind, sham-controlled trial of a home red and near-infrared mask specifically for crow’s feet showed improvement over sham; the effect is modest and needs months of use.',
    evidence: 'moderate',
    focus: 'crepe',
    sessions: '3–5× a week, 10–20 minutes, 12 weeks to judge',
    downtime: 'None',
    cost: '€200–500 device',
    bodyHtml: `
      <p>Red and near-infrared light nudge fibroblasts to make collagen, and crow's feet are the one wrinkle for which a home mask has been tested properly: a multicentre, randomised, double-blind, sham-controlled trial of a home-use LED and infrared mask found significant improvement in crow's feet over the sham device over the study period (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11835066/" rel="noopener nofollow" target="_blank">sham-controlled trial</a>), consistent with the older clinic-dose trial of red light for photoaged skin (<a href="https://journals.sagepub.com/doi/10.1089/pho.2013.3616" rel="noopener nofollow" target="_blank">Wunsch 2014</a>). The improvement is measured in instrument units, appears after weeks of near-daily use, and comes with eye protection built into the device. A reasonable needle-free add-on for crepe and fine lines; not a substitute for toxin on a dynamic fold. Our <a href="/red-light-therapy">red-light guide</a> covers doses.</p>
    `,
  },
  {
    id: 'home-peptides',
    category: 'home',
    title: 'Peptides and "Botox in a bottle"',
    tldr: 'A double-blind randomised trial found palmitoyl pentapeptide-4 outperformed argireline on crow’s feet; a cyclic hexapeptide beat retinol in one manufacturer RCT; a multi-peptide eye serum improved crow’s feet measures. Small gains, nothing like toxin.',
    evidence: 'emerging',
    focus: 'crepe',
    sessions: 'Twice daily',
    downtime: 'None',
    cost: '€20–120 / month',
    bodyHtml: `
      <p>Argireline (acetyl hexapeptide-3) relaxes muscle in a dish and is sold as topical toxin; in a double-blind randomised trial on crow's feet it was outperformed by palmitoyl pentapeptide-4 on instruments, photographs and self-assessment (<a href="https://jcadonline.com/trial-acetylhexapeptide-cream-crows-feet/" rel="noopener nofollow" target="_blank">JCAD trial</a>). A cyclised hexapeptide-9 outperformed retinol against aging signs in a manufacturer-run randomised, vehicle-controlled trial (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12207714/" rel="noopener nofollow" target="_blank">2025 RCT</a>), and a multi-peptide eye serum improved crow's-feet measures in a 2023 controlled study (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15849" rel="noopener nofollow" target="_blank">2023 trial</a>). The honest summary: measurable, small, manufacturer-funded improvements in fine lines and hydration, and no peptide has ever been tested against toxin for a dynamic line, because a molecule that cannot reach the muscle cannot stop it.</p>
    `,
  },
  {
    id: 'home-patches',
    category: 'home',
    title: 'Hyaluronic microneedle patches and silicone patches',
    tldr: 'Dissolving hyaluronic-acid microneedle patches improved crow’s feet over topical hyaluronic acid in a split-face RCT of 34 women; silicone patches soften a crease for hours with no trial. Hydration and splinting, not repair.',
    evidence: 'emerging',
    focus: 'static',
    sessions: 'Twice weekly (microneedle); nightly (silicone)',
    downtime: 'None',
    cost: '€20–60 / month',
    bodyHtml: `
      <p>Microneedle patches carry hyaluronic acid into the upper skin on dissolving needles, and in a randomised split-face study of 34 women with mild to moderate crow's feet, eight weeks of twice-weekly patches improved wrinkles more than the same hyaluronic acid applied topically (<a href="https://pubmed.ncbi.nlm.nih.gov/28892233/" rel="noopener nofollow" target="_blank">split-face RCT</a>); a pilot of a near-infrared photothermal microneedle patch improved under-eye roughness and crow's feet over four weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/42300963/" rel="noopener nofollow" target="_blank">pilot trial</a>). Silicone patches hydrate and splint a crease overnight so it looks softer for an hour or two, with no controlled data. Both act on the surface; neither reaches the muscle or rebuilds a dermis.</p>
    `,
  },
  {
    id: 'home-lifestyle',
    category: 'home',
    title: 'Smoking, side-sleeping and screens',
    tldr: 'Identical twins who smoked aged visibly around the eyes; side-sleeping is a plausible cause of the diagonal cheek-temple crease; squinting at screens is the same muscle as squinting at the sun.',
    evidence: 'moderate',
    focus: 'general',
    sessions: 'Ongoing',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Among 79 pairs of identical twins discordant for smoking, the smoker scored worse across the periorbital region — lid bags, malar bags, lines — with five years of smoking history visible in photographs (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">twin study</a>). Side and stomach sleeping press the temple and outer eye into the pillow for a third of life, and surgeons attribute a characteristic vertical or diagonal crease near the eye to it (<a href="https://pubmed.ncbi.nlm.nih.gov/27329660/" rel="noopener nofollow" target="_blank">Aesthetic Surgery Journal</a>) — plausible, thinly evidenced, cheap to test with a pillow. Squinting at a small or dim screen is the orbicularis doing the sun's job indoors; glasses that are the right prescription and a bigger font are prevention nobody sells. None of it reverses a line; all of it decides the slope.</p>
    `,
  },
  {
    id: 'home-facial-exercise',
    category: 'home',
    title: 'Face yoga and eye exercises',
    tldr: 'Crow’s feet are made by repeated contraction of the eye muscle; exercising it is the mechanism of the wrinkle, not the cure. The one facial-exercise pilot measured cheek fullness, not lines.',
    evidence: 'limited',
    focus: 'dynamic',
    sessions: 'Do not, for the eyes',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>The 20-week facial-exercise pilot in 16 women found fuller cheeks and a slightly younger rated age, with no control group and no wrinkle measurement (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2666801" rel="noopener nofollow" target="_blank">Alam 2018</a>). For crow's feet the logic runs the other way: the line exists because the orbicularis folds the skin repeatedly, and the treatment with the best evidence in aesthetic medicine works by stopping exactly that. Eye-squeezing exercises add repetitions. Harmless for the cheeks; counterproductive at the corner of the eye.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-toxin',
    category: 'inj',
    title: 'Botulinum toxin (24 units, three points a side)',
    tldr: 'Licensed for crow’s feet since 2013 on phase 3 trials: 55% investigator and 46% patient responders at a month against 3% on placebo; median duration about four months; every newer toxin replicates it, and one reached a median of 24 weeks.',
    evidence: 'strong',
    focus: 'dynamic',
    note: 'Best for: dynamic crow’s feet in anyone — and static ones as the first of two steps',
    sessions: 'Every 3–4 months',
    downtime: 'None; a bruise possible',
    cost: '€150–300 per session (Berlin from ~€200 per area)',
    bodyHtml: `
      <p>Crow's feet are the second cosmetic indication botulinum toxin earned, and the trials are the model for the field. OnabotulinumtoxinA was licensed for lateral canthal lines in 2013 at 24 units — three points a side (<a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2013/103000s5260lbl.pdf" rel="noopener nofollow" target="_blank">FDA label</a>). In the phase 3 programme, investigator and patient responder rates for crow's feet alone were 54.9% and 45.8% at a month against 3.3% on placebo, rising to 59% and 48.5% when the frown lines were treated at the same time (<a href="https://www.ovid.com/jnls/dermatologicsurgery/fulltext/10.1097/dss.0000000000000220~efficacy-and-safety-of-onabotulinumtoxina-for-treating-crows" rel="noopener nofollow" target="_blank">phase 3</a>); repeated cycles held their effect (<a href="https://www.ovid.com/jnls/dermatologicsurgery/abstract/10.1097/dss.0000000000000357~a-multicenter-randomized-double-blind-placebo-controlled?redirectionsource=fulltextview" rel="noopener nofollow" target="_blank">repeat-treatment study</a>); the median duration was about four months (<a href="https://www.ovid.com/jnls/dermatologicsurgery/fulltext/10.1097/dss.0000000000000757~duration-of-clinical-efficacy-of-onabotulinumtoxina-in-crows" rel="noopener nofollow" target="_blank">duration study</a>); and satisfaction with the whole upper face stayed high for up to six months (<a href="https://pubmed.ncbi.nlm.nih.gov/36342250/" rel="noopener nofollow" target="_blank">2022 study</a>). The early dose-ranging trial showed benefit from 6 to 18 units a side with a dose–response (<a href="https://pubmed.ncbi.nlm.nih.gov/15841623/" rel="noopener nofollow" target="_blank">dose-response study</a>).</p>
      <p>Every newer toxin has repeated the result: prabotulinumtoxinA in a phase IV placebo-controlled trial (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10573474/" rel="noopener nofollow" target="_blank">phase IV</a>), nivobotulinumtoxinA in two phase 3 trials (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11913111/" rel="noopener nofollow" target="_blank">phase 3</a>), the liquid relabotulinumtoxinA with 51.8% composite two-grade responders against 1.4% (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0041010124000357" rel="noopener nofollow" target="_blank">READY-2</a>), and daxibotulinumtoxinA with a median duration of 24 weeks at one dose in phase 2 (<a href="https://www.biospace.com/revance-announces-positive-results-in-two-phase-2a-studies-of-daxibotulinumtoxina-for-injection-for-the-treatment-of-forehead-lines-and-crow-s-feet-respectively" rel="noopener nofollow" target="_blank">phase 2a</a>); a 2026 GRADE-assessed meta-analysis covers incobotulinumtoxinA across the upper face (<a href="https://pubmed.ncbi.nlm.nih.gov/42291577/" rel="noopener nofollow" target="_blank">meta-analysis</a>). Effect starts at day three to five, peaks at two weeks, and a lighter dose keeps the smile. The differences between brands are smaller than the differences between injectors.</p>
    `,
  },
  {
    id: 'inj-toxin-filler-combo',
    category: 'inj',
    title: 'Toxin plus a thin hyaluronic gel or skin booster for static lines',
    tldr: 'A randomised, double-blind split-face trial: adding a microdroplet hyaluronic gel (Skinvive) to toxin improved and prolonged the result for moderate to severe periorbital lines; a fine-line filler held improvement at 18 months in a 196-subject study.',
    evidence: 'moderate',
    focus: 'static',
    note: 'Best for: static crow’s feet that toxin alone leaves behind — in the hands of someone who treats eyes weekly',
    sessions: 'Toxin every 3–4 months; gel every 6–12 months',
    downtime: '2–5 days of swelling; bruising',
    cost: '€300–500 for the gel, on top of toxin',
    bodyHtml: `
      <p>Once a crow's foot is static, the muscle is half the problem and the floor of the line is the other half. In a randomised, controlled, double-blind split-face study of 25 women with moderate to severe periorbital lines, both sides received toxin and one side a microdroplet hyaluronic gel (Juvéderm Volite/Skinvive): the combined side did better on the Merz scale and held its result longer over six months (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12355333/" rel="noopener nofollow" target="_blank">split-face RCT</a>). An 18-month prospective randomised study of a superficial fine-line hyaluronic filler in 196 subjects found significant crow's-feet improvement from three weeks that remained significant at 18 months after a single session (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11743021/" rel="noopener nofollow" target="_blank">18-month study</a>); a non-cross-linked hyaluronic gel improved lateral canthal lines in an open multicentre study (<a href="https://pubmed.ncbi.nlm.nih.gov/34559948/" rel="noopener nofollow" target="_blank">open study</a>); and the combination approach for the whole periorbital and temple region is described in a remodelling series (<a href="https://pubmed.ncbi.nlm.nih.gov/24910278/" rel="noopener nofollow" target="_blank">series</a>). A randomised trial of toxin with non-cross-linked collagen reached a similar place (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12855332/" rel="noopener nofollow" target="_blank">collagen RCT</a>).</p>
      <p>The gel goes in after the toxin has settled, very superficially, in tiny amounts, along the line and not the fat pad — and only soft, low-water products, because half-millimetre skin turns blue over anything stiffer. The <a href="/fillers">filler guide</a> covers the boosters and the risks.</p>
    `,
  },
  {
    id: 'inj-toxin-brow',
    category: 'inj',
    title: 'Toxin lateral brow lift',
    tldr: 'A few units into the outer orbicularis release the brow to lift by a few millimetres — up to about 5 mm, unpredictably; standard technique in textbooks, thin trial data, a real help when the outer brow has dropped.',
    evidence: 'emerging',
    focus: 'brow',
    sessions: 'With the crow’s-feet dose, every 3–4 months',
    downtime: 'None',
    cost: 'Included or €50–100 extra',
    bodyHtml: `
      <p>The outer orbicularis oculi is a brow depressor; weaken it and the frontalis pulls the lateral brow up unopposed. Injecting 1–2 units just below the outer brow, above the bony rim, is described as producing up to about 5 mm of lateral brow elevation, though how much any face lifts is unpredictable (<a href="https://www.ncbi.nlm.nih.gov/books/NBK574523/" rel="noopener nofollow" target="_blank">StatPearls</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/40130887/" rel="noopener nofollow" target="_blank">anatomical study</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2943226/" rel="noopener nofollow" target="_blank">review</a>). The evidence is anatomy and expert practice rather than controlled trials, which keeps it emerging; the effect is real in the right face and invisible in the wrong one, and the same injection in someone who relies on the frontalis to hold heavy lids can drop the brow instead of lifting it. Part of a crow's-feet session, never a separate purchase.</p>
    `,
  },
  {
    id: 'inj-prp',
    category: 'inj',
    title: 'PRP around the eye',
    tldr: 'The objective pilot found no improvement in crow’s-feet volume, depth or visibility at three months; a Thai split-face study reported satisfaction; a photothermal PRP variant improved surface measures. Skin quality at best, not lines.',
    evidence: 'emerging',
    focus: 'crepe',
    sessions: '3, a month apart',
    downtime: '1–3 days of bruising',
    cost: '€250–500 / session',
    bodyHtml: `
      <p>Platelet-rich plasma injected at the outer eye delivers growth factors to thin skin, and the honest data are mixed. The first objective pilot measured crow's feet by volume, surface, depth and visibility index and found no improvement at three months, though dark-circle colour changed (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.12072" rel="noopener nofollow" target="_blank">Mehryan 2014</a>); a split-face placebo-controlled study of weekly injections in 20 Thai women reported 75% satisfaction (<a href="https://ijced.org/archive/volume/10/issue/3/article/7954" rel="noopener nofollow" target="_blank">split-face study</a>); a photothermally modulated PRP improved surface roughness and depth measures for at least six months in a split-face comparison (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13462578/" rel="noopener nofollow" target="_blank">2026 study</a>). Reasonable as a skin-quality add-on to needling; not a treatment for a fold. The <a href="/regenerative-aesthetics">regenerative guide</a> covers the systems.</p>
    `,
  },
  {
    id: 'inj-topical-toxin',
    category: 'inj',
    title: 'Topical botulinum toxin gels',
    tldr: 'A topical toxin gel for crow’s feet reached phase 3 and did not deliver; the follow-up work is laboratory. Nothing sold over the counter as "topical Botox" reaches the muscle.',
    evidence: 'limited',
    focus: 'dynamic',
    sessions: 'Not available',
    downtime: 'None',
    cost: 'Not applicable',
    bodyHtml: `
      <p>The idea of a toxin that crosses skin without a needle was tested seriously: a topical botulinum toxin gel for lateral canthal lines went through registered phase 3 trials (<a href="https://clinicaltrials.gov/study/NCT00888914" rel="noopener nofollow" target="_blank">registered trial</a>) and did not reach the market, and later work compares laboratory delivery approaches rather than products (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6051279/" rel="noopener nofollow" target="_blank">in vivo comparison</a>). The creams sold as "topical Botox" contain peptides, not toxin, and cannot reach a muscle beneath the dermis. The needle remains the route.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-ablative',
    category: 'clinic',
    title: 'Fractional CO₂ or erbium resurfacing of the outer eye',
    tldr: 'Randomised split-face trials of fractional CO₂ for periorbital wrinkles, fractional erbium series with predictable responders, and decades of full-field CO₂ around the eye: the tool that rebuilds the floor of a static crow’s foot.',
    evidence: 'strong',
    focus: 'static',
    note: 'Best for: etched crow’s feet and crepe in lighter skin, after toxin has stopped the fold',
    sessions: '1–3, 4–8 weeks apart',
    downtime: '5–7 days raw; pink for weeks',
    cost: '€500–1,500 for the periorbital zone (UK from ~£750)',
    bodyHtml: `
      <p>Ablative fractional lasers vaporise columns of periorbital skin and heat the dermis between them, and the skin that regrows is thicker with reorganised collagen — the only way short of a deep peel to rebuild the floor of a line the muscle has already etched. A randomised split-face trial of fractional CO₂ for periorbital wrinkles found significant improvement with a tolerable protocol (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12092846/" rel="noopener nofollow" target="_blank">2025 RCT</a>); a prospective study of a fractional CO₂ "eyelift" found about half of patients holding 26–50% improvement in periorbital wrinkles at a year with brow elevation as a bonus (<a href="https://jddonline.com/articles/a-prospective-study-of-the-improvement-in-periorbital-wrinkles-and-eyebrowelevation-with-a-novel-fra-S1545961610P0016X/" rel="noopener nofollow" target="_blank">12-month study</a>); fractional erbium improved periorbital and perioral wrinkles with age, smoking and Glogau stage predicting response (<a href="https://pubmed.ncbi.nlm.nih.gov/33550718/" rel="noopener nofollow" target="_blank">2021 study</a>); and full-field CO₂ around the eye improved lid laxity and periorbital rhytides in the older series (<a href="https://pubmed.ncbi.nlm.nih.gov/15056134/" rel="noopener nofollow" target="_blank">retrospective study</a>). A 2023 review of periorbital rejuvenation places the ablative fractional lasers at the top of the device ladder for lines (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10541170/" rel="noopener nofollow" target="_blank">review</a>).</p>
      <p>The eye adds rules: metal corneal shields, conservative settings on the lower lid (aggressive passes pull it down), antiviral prophylaxis, and caution in darker skin, where post-inflammatory darkening follows. Toxin two weeks before the laser keeps the new collagen from being creased while it matures. The <a href="/laser-ipl">laser guide</a> covers the settings.</p>
    `,
  },
  {
    id: 'clinic-nafl',
    category: 'clinic',
    title: 'Non-ablative fractional lasers (1550/1565/1927 nm)',
    tldr: 'A randomised trial found 1550 nm fractional laser beat focused ultrasound for periorbital wrinkles; a 1565 nm device matched a thermo-mechanical rival in an RCT; older patients respond best. Three sessions, two days of redness, partial results.',
    evidence: 'moderate',
    focus: 'crepe',
    note: 'Best for: crepe and fine static lines in anyone who cannot take a week off, and in darker skin',
    sessions: '3–4, a month apart',
    downtime: '1–3 days of redness and swelling',
    cost: '€300–600 / session',
    bodyHtml: `
      <p>Non-ablative fractional lasers heat columns of dermis under an intact surface, remodelling collagen without an open wound. For periorbital wrinkles a randomised controlled trial found 1550 nm fractional photothermolysis superior to intense focused ultrasound (<a href="https://pubmed.ncbi.nlm.nih.gov/38211707/" rel="noopener nofollow" target="_blank">RCT</a>); a prospective randomised comparison of a 1565 nm fractional laser against thermo-mechanical fractional injury found both improved periorbital wrinkles (<a href="https://pubmed.ncbi.nlm.nih.gov/34787919/" rel="noopener nofollow" target="_blank">RCT</a>); a 1927 nm open-label periorbital trial improved fine lines and texture (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12178097/" rel="noopener nofollow" target="_blank">2025 trial</a>). The honest limits: results are partial for an etched line, several sessions are needed, and in the 1550/1565 nm split-face series the improvement was significant only in patients 45 and over — younger skin had little to remodel. The right first laser for crepe and for darker skin; the wrong one for a deep static line.</p>
    `,
  },
  {
    id: 'clinic-rf-microneedling',
    category: 'clinic',
    title: 'Radiofrequency microneedling at the outer eye',
    tldr: 'Prospective periorbital studies report about a third less crow’s-feet wrinkling six months after one to three sessions; no randomised comparison against a laser, and the class carries an FDA alert.',
    evidence: 'emerging',
    focus: 'crepe',
    sessions: '1–3, 6–8 weeks apart',
    downtime: '2–4 days',
    cost: '€400–800 / session',
    bodyHtml: `
      <p>Insulated needles deliver radiofrequency heat into the thin periorbital dermis, and the periorbital studies are consistent and uncontrolled: a 2026 prospective study measured mean wrinkle reductions of about 37% at the crow's feet and 25% under the eye six months after one to three sessions (<a href="https://pubmed.ncbi.nlm.nih.gov/42289104/" rel="noopener nofollow" target="_blank">2026 study</a>); an RF-assisted microneedling trial improved "hard-to-treat" periorbital wrinkles across skin types (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11626310/" rel="noopener nofollow" target="_blank">2024 trial</a>); combining microneedle-delivered matrix compounds with radiofrequency improved periorbital wrinkles synergistically in a split-face design (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9355126/" rel="noopener nofollow" target="_blank">split-face study</a>). No trial compares it with a fractional laser, the FDA has alerted clinicians to burns and scarring from the class, and deep settings near the eye risk the fat that frames it. Conservative depths for crepe; the <a href="/microneedling">microneedling guide</a> covers the devices.</p>
    `,
  },
  {
    id: 'clinic-tca-peel',
    category: 'clinic',
    title: 'Focal medium-depth peel (Jessner’s + TCA) at the outer eye',
    tldr: 'A 12-patient series of focal periorbital Jessner’s–35% TCA peels: marked or moderate improvement in 58%, none in 8%; repeated medium peels helped periorbital wrinkles in darker skin in another series. Cheap, operator-dependent.',
    evidence: 'emerging',
    focus: 'static',
    sessions: '1–3',
    downtime: '5–7 days of peeling',
    cost: '€200–400',
    bodyHtml: `
      <p>A focal medium-depth peel — Jessner's solution followed by 35% trichloroacetic acid over the crow's-foot zone only — coagulates the pigmented, lined epidermis and provokes dermal remodelling as it heals. In the series that defined the technique, 12 patients with crow's feet showed marked improvement in 33%, moderate in 25%, mild or minimal in 33% and none in 8% (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1524-4725.1997.tb00382.x" rel="noopener nofollow" target="_blank">Reed 1997</a>); repeated medium-depth peels improved periorbital wrinkles in dark-skinned patients with careful priming (<a href="https://pubmed.ncbi.nlm.nih.gov/17134416/" rel="noopener nofollow" target="_blank">Kadhim 2005</a>). Eyelid peels need experience — the acid must not reach the eye, and the lower lid tolerates less — and the <a href="/chemical-peels">peel guide</a> grades the agents. A laser does the same job more predictably; a peel does it for a third of the price.</p>
    `,
  },
  {
    id: 'clinic-ultherapy-brow',
    category: 'clinic',
    title: 'Microfocused ultrasound for the outer brow',
    tldr: 'Cleared first for the brow, where systematic reviews measure a lift of roughly half a millimetre to 1.7 mm; it does not treat a crow’s foot, and it can help the dropped brow that makes them bunch.',
    evidence: 'emerging',
    focus: 'brow',
    sessions: '1, repeated at 12–18 months',
    downtime: 'None; sore',
    cost: '€800–1,500 for the periorbital and brow zone',
    bodyHtml: `
      <p>Microfocused ultrasound heats the deep dermis and the tissue plane beneath the brow to contract it, and its first clearance was for lifting the brow; the systematic reviews put the measured lift at about 0.47 to 1.7 mm (<a href="https://www.mdpi.com/1660-4601/20/2/1522" rel="noopener nofollow" target="_blank">systematic review</a>). That is a modest, real change in a face whose outer brow has dropped and made the crow's feet bunch beneath it, and nothing at all for the line itself. In a randomised comparison for periorbital wrinkles it lost to the 1550 nm fractional laser (<a href="https://pubmed.ncbi.nlm.nih.gov/38211707/" rel="noopener nofollow" target="_blank">RCT</a>). For a brow that needs more than two millimetres, the surgical lift in the <a href="/anti-aging-50s">50s guide</a> is the honest answer; the <a href="/jowls">jowls guide</a> grades the device across the lower face.</p>
    `,
  },
  {
    id: 'clinic-plasma-pen',
    category: 'clinic',
    title: 'Plasma "fibroblast" pens at the eye',
    tldr: 'Arc burns marketed as non-surgical eye tightening; small uncontrolled series, unregulated devices, pigment scars, and a published case of bilateral chemical eye injury from a treatment.',
    evidence: 'limited',
    focus: 'crepe',
    sessions: '1–3',
    downtime: '7–10 days of carbon crusts',
    cost: '€300–800',
    bodyHtml: `
      <p>Plasma pens create a grid of tiny burns that contract as they heal, and they are sold for crow's feet and eyelid tightening on small uncontrolled series and before-and-after photographs. The devices are largely unregulated, the dots hyperpigment in darker skin and can scar in any, and the case report of bilateral chemical eye injury from the numbing cream applied for a plasma eyelid treatment describes what happens when an untrained hand works a centimetre from the cornea (<a href="https://pubmed.ncbi.nlm.nih.gov/32831067/" rel="noopener nofollow" target="_blank">case report</a>). The fractional lasers above do the same tightening with measurement, shields and a track record.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-toxin-eye',
    category: 'safety',
    title: 'Toxin at the eye: the smile, the lid, the double vision',
    tldr: 'Bruising is common; an asymmetric smile (toxin reaching the zygomaticus), lower-lid sag or ectropion, dry eye and rarely double vision follow injections placed too low, too deep or too heavily. Rules: a centimetre outside the bony rim, nothing below the cheekbone, licensed product.',
    bodyHtml: `
      <p>The commonest problem at the outer eye is a bruise, because the skin is thin and vascular. The problems that matter are placement: toxin drifting into the zygomaticus major weakens the smile on that side for months; toxin in the lower orbicularis lets the lid sag, pool fluid or turn out, and dries the eye; toxin reaching an extraocular muscle causes double vision (<a href="https://link.springer.com/article/10.1007/s00266-021-02483-1" rel="noopener nofollow" target="_blank">practical guide</a>; <a href="https://www.sciencedirect.com/science/article/abs/pii/S0738081X03001500" rel="noopener nofollow" target="_blank">complications review</a>). A dry-eye guideline recommends screening before repeated crow's-feet treatment, because incomplete blink accumulates (<a href="https://pubmed.ncbi.nlm.nih.gov/22737648/" rel="noopener nofollow" target="_blank">dry-eye guideline</a>). The technique that avoids all of it is old and specific: inject at least a centimetre outside the bony orbital rim, never medial to a vertical line through the outer corner, never near the lower edge of the cheekbone, superficially, and lightly in a face with a strong smile or a lax lower lid.</p>
      <p>The rest is the usual toxin list: not in pregnancy or breastfeeding, not with myasthenia and similar conditions, a licensed product with a batch number, and a two-week review. In Europe the hazard is the market — grey-import toxin and weekend-course injectors — not the drug.</p>
    `,
  },
  {
    id: 'safety-filler-eye',
    category: 'safety',
    title: 'Filler in half-millimetre skin: blue, lumpy, and the vessels',
    tldr: 'The Tyndall blue tint and visible lumps are the routine hazards of gel in periorbital skin; the zygomatico-facial and temporal vessels make vascular occlusion the rare one. Soft gels, microdroplets, cannula, hyaluronidase in the room.',
    bodyHtml: `
      <p>Periorbital skin shows everything placed beneath it: a gel that is even slightly too firm or too shallow reads as a blue-grey line (the Tyndall effect) and a lump that lasts as long as the product — a year or more. The temple and outer eye also carry the temporal and zygomatico-facial vessels, so an intravascular injection here can necrose skin or, rarely, reach the eye's circulation; registries put occlusion at roughly 1 per 6,400 needle syringes and 1 per 41,000 by cannula (<a href="https://www.harleyacademy.com/aesthetic-medicine-articles/cannula-use-makes-vascular-occlusion-less-likely/" rel="noopener nofollow" target="_blank">registry analysis</a>), and 84% of pooled hyaluronic occlusions recover with prompt hyaluronidase (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12097758/" rel="noopener nofollow" target="_blank">pooled analysis</a>). The rules: only soft, low-water skin-booster gels; microdroplets along the line, never a bolus; cannula where possible; tiny volumes; an injector who treats eyes weekly and keeps hyaluronidase to hand. The <a href="/fillers">filler guide</a> covers the zone in full.</p>
    `,
  },
  {
    id: 'safety-resurfacing-eye',
    category: 'safety',
    title: 'Lasers and peels at the eye: shields, lids, pigment',
    tldr: 'Corneal shields are mandatory; aggressive lower-lid passes pull the lid; post-inflammatory darkening follows in darker skin; herpes prophylaxis for anything ablative; the acid must never reach the eye.',
    bodyHtml: `
      <p>Resurfacing the outer eye is routine in experienced hands and dangerous in others. Metal corneal shields protect the eye from every laser; lower-lid resurfacing is kept conservative because tightened skin pulls the lid down (ectropion) and the lid tolerates less than the temple; the thin periorbital skin in Fitzpatrick IV–VI darkens after injury more readily than anywhere on the face; and cold sores reactivate on resurfaced skin unless antiviral prophylaxis is given. Peels add a specific rule: the acid is applied with the eye closed and protected, never above the lash line, and neutralised ready in case of a tear track. Ask who holds the shields, how many eyes the operator resurfaces a month, and what happens if you have a cold sore.</p>
    `,
  },
  {
    id: 'safety-myths',
    category: 'safety',
    title: 'Topical "Botox", tapes and eye exercises',
    tldr: 'No cream reaches the orbicularis; face tape irritates thin skin and stretches it; eye exercises repeat the movement that makes the line.',
    bodyHtml: `
      <p>The three things sold as needle-free alternatives to toxin for crow's feet share one problem: the muscle is under the skin, and none of them gets there. Peptide creams marketed as "topical Botox" have small trials for fine lines and none against toxin; face and eye tapes hold the skin still for a night and irritate the thinnest skin on the face when used repeatedly; eye-squeezing exercises add repetitions of the exact contraction that made the crease. The needle-free options that do something — sunscreen, sunglasses, a retinoid, a sham-controlled LED mask, a fractional laser — are graded above with their numbers.</p>
    `,
  },
  {
    id: 'safety-when-not',
    category: 'safety',
    title: 'When crow’s feet are the wrong diagnosis',
    tldr: 'Heavy lids, a dropped brow, a lax lower lid and crepe each mimic a crow’s-foot problem and each get worse with more toxin; sort them first.',
    bodyHtml: `
      <p>Four situations look like crow's feet and are not fixed by treating them. Heavy upper lids held up by the forehead: toxin in the outer orbicularis is fine, but the same session's forehead dose drops the lids. A dropped outer brow: the lines are bunched skin, and the brow needs lifting before the lines need relaxing. A lax lower lid: toxin near it pools fluid and turns it out; the snap test decides. Crepe without distinct lines: relaxing the muscle under loose skin makes the corner slacker, and the treatment is the skin. A good injector spends the first two minutes ruling these out, and a good result on the wrong diagnosis does not exist.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-toxin-age',
    category: 'faq',
    title: 'When should I start toxin for crow’s feet?',
    tldr: 'When a line that appears with smiling has started to stay faintly at rest — late twenties to thirties for most — not before, and not on a schedule sold to a smooth face.',
    bodyHtml: `
      <p>Toxin treats a line the muscle is making; a face with no lines at rest and faint ones on smiling has nothing to treat yet and a subscription to buy. The sensible start is the transition: when a smile line lingers a moment after the smile, a light dose stops the etching with a plausible preventive mechanism and the one twin case report behind it (<a href="https://pubmed.ncbi.nlm.nih.gov/17116793/" rel="noopener nofollow" target="_blank">Binder's twins</a>). Sunscreen and sunglasses, by contrast, have no minimum age and the only randomised prevention evidence. The <a href="/anti-aging-30s">30s guide</a> takes the "prejuvenation" market apart.</p>
    `,
  },
  {
    id: 'faq-frozen',
    category: 'faq',
    title: 'Will I lose my smile, or look frozen?',
    tldr: 'Not with a light dose in the right place: crow’s-feet toxin relaxes the outer eye and leaves the smile; a frozen or asymmetric smile means toxin reached the cheek muscles — a placement error.',
    bodyHtml: `
      <p>The "frozen" look is a forehead phenomenon and a dose phenomenon; the outer orbicularis has nothing to do with the mouth. A crow's-feet treatment done with 6–12 units a side, a centimetre outside the bony rim and above the cheekbone, softens the fan of lines and leaves the smile intact — in the phase 3 programme more than 90% of responders felt the result looked natural. A smile that lifts less on one side after treatment means the zygomaticus was reached, wears off in months, and is the reason to choose the injector by their eyes rather than their prices.</p>
    `,
  },
  {
    id: 'faq-forever',
    category: 'faq',
    title: 'If I stop toxin, will the lines come back worse?',
    tldr: 'No — the muscle recovers fully at three to four months and the lines return to where they would have been; years of not creasing the skin often leave them shallower.',
    bodyHtml: `
      <p>The nerve endings recover completely and the muscle is unchanged by years of treatment at cosmetic doses; nothing rebounds. What people notice on stopping is the comparison with their treated face, not a worse baseline. If anything, the years in which the crease was not being folded thousands of times a day let the dermis recover, which is why long-term patients often need smaller doses. Stopping is safe at any time.</p>
    `,
  },
  {
    id: 'faq-static-lines',
    category: 'faq',
    title: 'I had toxin and the lines are still there at rest',
    tldr: 'They are static: the muscle was half the cause and the etched floor is the other half. Keep the toxin, and rebuild the floor with a fractional laser or a thin gel; retinoids for the crepe around it.',
    bodyHtml: `
      <p>Toxin removes the fold; it cannot fill a groove the dermis has already lost. A line still visible at rest two weeks after a correctly placed treatment is static, and the plan is the second step: a fractional laser (ablative for fair skin and deep lines, non-ablative for crepe or darker skin), or a microdroplet hyaluronic gel laid along the line, which prolonged toxin's result in a randomised split-face trial. Continued toxin lets the repaired floor stay repaired, and a retinoid with sunscreen slows the next etching. Judge the combination at three months, not two weeks.</p>
    `,
  },
  {
    id: 'faq-lower-lid',
    category: 'faq',
    title: 'Can toxin treat the lines under my eyes too?',
    tldr: 'Sparingly and expertly, or not at all: the lower lid is where toxin causes a slack lid, a puffy eye and a weak smile. Skin work first.',
    bodyHtml: `
      <p>The lines that run under the eye onto the cheek cross the muscle that holds the lower lid and pumps its fluid, and sit near the muscles that lift the smile. In the dose-finding study of lower-lid toxin, every subject at 8 units developed bothersome lid swelling and incomplete closure. One or two superficial units in a young, tight lid can soften a "jelly roll"; more, or any dose in a lax lid, creates the puffy, slack corner people came to fix. The lower lines are treated with a retinoid, sunscreen, a non-ablative laser or light needling, and the <a href="/eye-bags">eye-bags guide</a> covers the lid in full.</p>
    `,
  },
  {
    id: 'faq-eye-cream',
    category: 'faq',
    title: 'Which eye cream works on crow’s feet?',
    tldr: 'A retinoid at a stated strength, applied to the bone; niacinamide and vitamin C as support; a hyaluronic serum for the instant softening. Nothing in a jar reaches the muscle.',
    bodyHtml: `
      <p>Crepe and fine static lines respond to the same actives that work on the face, used more cautiously: a retinoid two or three nights a week building to nightly, niacinamide, vitamin C under sunscreen, and a hyaluronic serum for the morning softening. The trials are small and the improvements are measured in percentages of a wrinkle score over months. No cream, peptide or "eye lift" formula has ever been tested against toxin for a dynamic line, and none can be, because the muscle is beneath the skin. Our <a href="/anti-aging-30s">30s guide</a> has the eye-cream evidence in full.</p>
    `,
  },
  {
    id: 'faq-units-cost',
    category: 'faq',
    title: 'How many units, how much, how often?',
    tldr: 'Typically 6–15 units a side (24 total in the trials), €150–300 a session in most European cities, every three to four months; newer toxins may stretch to five or six.',
    bodyHtml: `
      <p>The licensing trials used 24 units of onabotulinumtoxinA in total, three points a side, and the dose-ranging trial showed benefit from 6 units a side upward, so most faces are treated with 6–15 units a side depending on muscle strength and the look wanted. Prices in Europe run from about €150 to €300 per session for the crow's feet alone, with Berlin practices quoting from around €200 per area (<a href="https://praxisjona.de/en/botox-prices" rel="noopener nofollow" target="_blank">example price list</a>); combined upper-face treatments cost more and last as long. The median duration is about four months, and daxibotulinumtoxinA reached a median of 24 weeks at one dose in phase 2. Units, not "areas", are what to compare between clinics.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Toxin: 3–5 days to start, 2 weeks to peak, 3–4 months of effect. Retinoids and serums: 8–12 weeks. Lasers and peels: pink for weeks, collagen for months, judged at 3 months.',
    bodyHtml: `
      <p>Toxin begins in three to five days and peaks at two weeks, which is when the review and any touch-up happen; the smile lines soften first and the resting lines over successive cycles. Retinoids, niacinamide and vitamin C change the dermis at its own pace — visible at eight to twelve weeks, still improving at six months. A fractional laser or peel looks worse for a week, better at a month and best at three as new collagen matures; a gel along a static line shows immediately and is judged once the swelling settles at two weeks. Photograph at rest and at maximum smile in the same light before anything, or the mirror will argue with you.</p>
    `,
  },
  {
    id: 'faq-natural-alternatives',
    category: 'faq',
    title: 'Is there a natural alternative to toxin?',
    tldr: 'For the dynamic fold, no — nothing without a needle reaches the muscle. For prevention and crepe, yes: sunglasses, sunscreen, a retinoid and a sham-controlled LED mask are the evidence-based list.',
    bodyHtml: `
      <p>The honest division: what makes a dynamic crow's foot is muscle contraction, and only a neurotoxin stops it. Everything needle-free acts on the skin — and for prevention and for crepe that is worth doing: sunglasses and sunscreen (the only prevention with a randomised trial), a retinoid (fine lines over months), niacinamide and vitamin C (small controlled gains), and a home LED mask with a sham-controlled trial for crow's feet specifically. Face yoga, tape, peptide "Botox" and jade rollers are the list without evidence. Choosing the first list keeps the lines dynamic for longer, which is the most natural result there is.</p>
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
    intro: 'Three drivers make a crow’s foot — and the smile test tells you which one is doing the most in yours.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which crow’s feet do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: prevention and the skin',
    intro: 'The only prevention with a randomised trial, the topicals with real periorbital data, and the things that repeat the wrinkle.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Injectables',
    intro: 'The best-evidenced treatment in aesthetic medicine, the add-on that makes it last on a static line, and the two that do not work.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Resurfacing and devices',
    intro: 'Where the floor of an etched line is rebuilt — graded by what the trials measured around the eye, and by what the eye can take.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'What the trials and the regulators actually flag, treatment by treatment — and the four things that look like crow’s feet and are not.',
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
  static: 'Static lines',
  crepe: 'Crepey skin',
  brow: 'Brow & hooding',
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

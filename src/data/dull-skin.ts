/**
 * Uneven texture and dullness guide — single source of truth (problem
 * template).
 *
 * Consumed by /dull-skin. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: "glow" is physics — light reflected evenly off a smooth,
 * hydrated, evenly coloured surface — and dullness is what five separate
 * things do to that surface: slowed cell turnover, dehydration, uneven
 * colour from sun, sleep, smoke and pollution, stretched pores, and a
 * barrier damaged by the very exfoliants sold to fix it. The best evidence
 * on this page is cheap (sunscreen, a retinoid, niacinamide, sleep); the
 * expensive rungs have one or two small trials each, and the microdroplet
 * hyaluronic injections are the exception with a proper controlled trial.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'surface' | 'tone' | 'pores' | 'hydration' | 'general';

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
  'Glow is light reflected evenly off a smooth, hydrated, evenly coloured surface; dullness is what happens when cell turnover slows (by 30–50% between the thirties and the eighties), water leaves the outer layer, colour becomes uneven, and pores stretch. A global consensus defines skin quality by four things — tone evenness, surface evenness, firmness and glow — and the treatments sort by which one is yours.',
  'The habits have real experiments behind them: one night without sleep measurably yellowed faces in 28 volunteers, five short nights did it in ten more, two short nights cut elasticity and gloss in 32 women; quitting smoking lightened skin colour in 84 people over 12 weeks; a daily fruit-and-vegetable smoothie shifted skin colour toward the yellow-red that observers rate as healthy in a six-week randomised trial; adding two litres of water a day raised skin hydration in women who drank little.',
  'The cheap topicals carry the strongest evidence: daily sunscreen improved texture, clarity and mottled pigmentation by 40–52% over a year; tretinoin has eight randomised trials; niacinamide 5% improved mottling, sallowness and texture in a split-face trial; polyhydroxy acids matched glycolic acid with less stinging. Nothing sold as a scrub, a brush or a blade has a trial.',
  'The clinic rungs are small and specific: microdroplet hyaluronic injections improved cheek smoothness in 58% against 5% of untreated controls in a 202-person trial; intradermal micro-doses of toxin shrank pores and sebum in split-face trials pooled across 153 people; the thulium laser improved pores and pigment but not texture in 27 Asian patients; hydradermabrasion thickened the epidermis in a 20-woman trial.',
  'Over-exfoliation is the commonest cause of dullness in people who spend money on skin: a stripped barrier loses water, inflames and darkens, and scatters light worse than the dead cells it removed. Acids raise sun sensitivity, lasers and light darken darker skin, and a melasma or rosacea diagnosis comes before any device.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-rough',
    kind: 'Surface',
    title: 'A surface that scatters light instead of reflecting it',
    blurb: 'Epidermal turnover slows by 30–50% between the thirties and the eighties, dead cells pile up unevenly and the outer layer dries out — a rough, dehydrated surface that scatters light the way frosted glass does.',
  },
  {
    id: 'type-tone',
    kind: 'Colour',
    title: 'A tone that is no longer even',
    blurb: 'Sallowness from short sleep and cigarettes, mottled brown from sun and pollution, diffuse red from vessels — light reflects evenly only off an even colour, and the face reads as tired or grey when it is not.',
  },
  {
    id: 'type-pores',
    kind: 'Pores',
    title: 'Pores stretched by oil and slack',
    blurb: 'Three things enlarge a pore — sebum output, lost elasticity around its opening, and a bigger follicle — and enlarged pores read as coarse texture from a metre away, oily or not.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'dull-anatomy',
    category: 'concept',
    title: 'What "glow" and "dull" actually are',
    tldr: 'Glow is light reflected evenly from a smooth, hydrated, evenly pigmented outer layer; dullness is roughness, dehydration and uneven colour scattering it. A global consensus of aesthetic physicians defines skin quality by four perceptual categories — tone evenness, surface evenness, firmness and glow — and glossmeters, roughness profiles and hydration probes measure each.',
    bodyHtml: `
      <p>Skin looks radiant when its outermost layer, the stratum corneum, is smooth and well hydrated and the colour beneath it is even: light then reflects back in a coherent sheet rather than scattering. Roughness from piled-up dead cells, dehydration that shrinks and lifts them, and uneven chromophores — patches of melanin, dilated vessels, the yellow of sleep loss — scatter and absorb that light, and the face reads as dull, tired or grey (<a href="https://www.tandfonline.com/doi/full/10.2147/CCID.S196110" rel="noopener nofollow" target="_blank">radiance and texture study</a>). A global advisory board of aesthetic dermatologists reached consensus in 2021 that skin quality across all ethnicities is described by four emergent perceptual categories — skin tone evenness, skin surface evenness, skin firmness and skin glow — with surface evenness shaped by pores, crepiness, lines, scars, hair and clarity (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8214518/" rel="noopener nofollow" target="_blank">consensus</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13215640/" rel="noopener nofollow" target="_blank">systematic review of methods</a>). Each can be measured — gloss with a glossmeter, roughness with a surface profile, hydration with a capacitance probe, colour with a spectrophotometer — which is why some of the trials on this page have numbers and the product shelf has adjectives.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'Why skin dulls with age — and faster with habits',
    tldr: 'Epidermal turnover slows 30–50% and the epidermis thins 10–50% between the third and eighth decades; on top of that, sun mottles, particulate pollution adds pigment spots (400 women in the SALIA cohort), one lost night of sleep yellows the face, cigarettes sallow it, and diet shifts its colour within weeks.',
    bodyHtml: `
      <p>Intrinsic aging slows the epidermis: between the third and eighth decades its turnover rate falls by about 30–50% and it thins by 10–50%, so dead cells linger longer on a thinner surface (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13509672/" rel="noopener nofollow" target="_blank">physiology review</a>). The habits add colour on top. In the SALIA cohort of 400 women aged 70–80, traffic-related particulate exposure was associated with more pigment spots and deeper folds, and a 10 µg/m³ rise in nitrogen dioxide with about 25% more dark spots (<a href="https://www.jidonline.org/article/S0022-202X(15)34645-5/fulltext" rel="noopener nofollow" target="_blank">JID, SALIA</a>; <a href="https://www.sciencedaily.com/releases/2016/02/160208112921.htm" rel="noopener nofollow" target="_blank">2016 report</a>). One night without sleep in 28 volunteers, and four-hour nights for five days in ten more, measurably increased facial yellowness (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9861417/" rel="noopener nofollow" target="_blank">sleep yellowness study</a>). Long-term smoking changes barrier proteins and lipids and gives the sallow colour that lightens within 4–12 weeks of quitting (<a href="https://www.nature.com/articles/s41598-023-38178-7" rel="noopener nofollow" target="_blank">smoking barrier study</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/23113589/" rel="noopener nofollow" target="_blank">cessation study</a>). And skin colour follows the plate: a daily fruit-and-vegetable smoothie shifted facial colour toward the yellow-red of carotenoids within four weeks in an 81-person randomised trial (<a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0133445" rel="noopener nofollow" target="_blank">smoothie RCT</a>).</p>
    `,
  },
  {
    id: 'why-hard',
    category: 'concept',
    title: 'Why the shelf gets this wrong',
    tldr: 'Dullness is a symptom of five different things and the shelf sells exfoliation for all of them; the barrier stripped by daily acids and scrubs loses water, inflames and darkens, and scatters light worse than the dead cells it removed. The strongest evidence here is cheap and slow; the expensive rungs have one small trial each.',
    bodyHtml: `
      <p>Because dullness is visible and vague, it sells more product than any other complaint on this site, and most of what it sells is exfoliation. Exfoliation has a place — the alpha-hydroxy and polyhydroxy acids have controlled trials — but a stratum corneum stripped every day by acids, scrubs, brushes and blades loses its water and its lipids, inflames, darkens in anyone with pigment to spare, and ends up rougher and duller than it started, which is why the over-exfoliated face is now a recognised clinic presentation. The evidence points the other way: daily sunscreen alone improved texture, clarity and mottled pigmentation by 40–52% over a year (<a href="https://pubmed.ncbi.nlm.nih.gov/27749441/" rel="noopener nofollow" target="_blank">one-year study</a>), tretinoin has eight randomised trials, niacinamide and vitamin C have split-face trials, and sleep, smoke and diet have experiments with numbers. Above those rungs the clinic offers one small trial per treatment — a 202-person microdroplet trial the exception — and the plan on this page climbs in that order.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-rough',
    category: 'context',
    title: 'Rough, flaky or "dry no matter what" (turnover and dehydration)',
    tldr: 'Under raking light the surface looks matte and finely scaled, foundation sits in flakes, and moisturiser helps for an hour — dead cells lingering on a dehydrated outer layer. Hydration and a retinoid first, gentle acids second, a scrub never.',
    focus: 'surface',
    bodyHtml: `
      <p>Hold a phone torch at a low angle across the cheek in a dark room. A surface that looks matte, finely scaled or powdery, that catches foundation in flakes and that moisturiser smooths for an hour before it returns, is the turnover-and-dehydration type: the epidermis is shedding too slowly and the outer layer has too little water to lie flat. The tools are the ones that speed turnover from beneath and hold water in the surface — a retinoid, a humectant-and-occlusive moisturiser, a gentle polyhydroxy or lactic acid a few nights a week — and the trap is the scrub, which removes the surface and the barrier with it. If the skin also stings, reddens and feels tight, it is the over-exfoliated version of the same type, and the treatment is to stop.</p>
    `,
  },
  {
    id: 'type-tone',
    category: 'context',
    title: 'Sallow, grey, blotchy (colour)',
    tldr: 'A face that reads as tired after a good night, yellowish or greyish in daylight, with mottled brown or diffuse red — colour, not texture. Sleep, cigarettes, sun and pollution set the tone; niacinamide, vitamin C, sunscreen and light-based devices even it.',
    focus: 'tone',
    bodyHtml: `
      <p>Compare the face in daylight with the inner upper arm. A complexion that is yellower, greyer or blotchier than the arm — mottled brown on the cheeks, diffuse red across the nose and cheeks, a sallow cast that make-up covers and sleep does not — is the colour type, and its causes have experiments: sleep loss yellows the face within a night (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9861417/" rel="noopener nofollow" target="_blank">sleep yellowness study</a>), smoking sallows it and quitting lightens it, sun and traffic pollution add pigment spots (<a href="https://www.jidonline.org/article/S0022-202X(15)34645-5/fulltext" rel="noopener nofollow" target="_blank">SALIA</a>), and dilated vessels redden it. The tools are sunscreen, niacinamide and vitamin C for the mottling, the habits for the sallowness, and intense pulsed light or a laser for the pigment and vessels that remain — with the <a href="/dark-spots">dark-spots guide</a> for anything that looks like a distinct spot or a melasma mask.</p>
    `,
  },
  {
    id: 'type-pores',
    category: 'context',
    title: 'Enlarged pores and an oily T-zone',
    tldr: 'Visible pores on the nose and inner cheeks, shine by noon, a coarse look from across a room — sebum output, lost elasticity around the pore and follicle size, in that order. Retinoids and salicylic acid shrink the oil; intradermal toxin and lasers have small trials.',
    focus: 'pores',
    bodyHtml: `
      <p>Look at the nose and the cheek beside it in a magnifying mirror, then blot the forehead at midday. Pores that are visible at arm's length, sometimes stretched into teardrops on the cheek, with shine by noon, are the pore type, and the review that defined it found three causes — high sebum excretion, decreased elasticity around the pore and increased follicle volume — with acne history, sex hormones and skincare habits contributing (<a href="https://pubmed.ncbi.nlm.nih.gov/26918966/" rel="noopener nofollow" target="_blank">pores review</a>). Sebum is the lever most tools pull: retinoids and niacinamide reduce it, salicylic acid clears the pore, and intradermal micro-doses of toxin reduce it in split-face trials for about four months; the elasticity half belongs to the retinoid and, at the far end, to fractional lasers. Nothing shrinks a pore permanently; everything above keeps it emptier and tighter.</p>
    `,
  },
  {
    id: 'type-dehydrated',
    category: 'context',

    title: 'Dehydrated is not dry — and oily skin can be dehydrated',
    tldr: 'Dry skin lacks oil and feels rough and tight; dehydrated skin lacks water and looks dull and lined with fine crinkles when pinched, whatever its oil. Humectants and a barrier cream for water; a richer emollient only for true dryness. Most "dull" skin is the first.',
    focus: 'hydration',
    bodyHtml: `
      <p>Pinch a fold of cheek skin gently and look at the surface: fine horizontal crinkles that vanish when released are dehydration — water missing from the outer layer — and they appear on oily skin as readily as on dry. True dryness is a lack of oil: rough, tight, sometimes flaky, worse in winter. The distinction decides the product. Dehydration wants humectants (glycerin, hyaluronic acid, urea) sealed with a barrier moisturiser, and it responds within days; moisturisers improve barrier function and surface hydration in randomised comparison (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10532330/" rel="noopener nofollow" target="_blank">moisturiser RCT</a>). Dryness wants lipids — ceramides, cholesterol, fatty acids — and the <a href="/ceramides">ceramide guide</a> covers them. Adding a rich cream to dehydrated oily skin clogs it; adding a light gel to truly dry skin does nothing; and the glassy, plump surface sold as "glass skin" is a hydrated stratum corneum, not a treatment.</p>
    `,
  },
  {
    id: 'type-lifestyle',
    category: 'context',
    title: 'Sleep, cigarettes, pollution and the plate',
    tldr: 'The four habits with experiments: sleep loss yellows and roughens the face within days; smoking sallows it and quitting lightens it in weeks; traffic pollution adds pigment spots; fruit and vegetables shift skin colour toward the tone observers rate as healthy within a month.',
    focus: 'tone',
    bodyHtml: `
      <p>Dullness is the complaint where lifestyle has the cleanest evidence, because skin colour and gloss can be measured the morning after. Total sleep deprivation in 28 volunteers and five four-hour nights in ten more increased facial yellowness on spectrophotometry (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9861417/" rel="noopener nofollow" target="_blank">sleep yellowness study</a>), and two four-hour nights in 32 women reduced hydration, elasticity and gloss (<a href="https://pubmed.ncbi.nlm.nih.gov/31692145/" rel="noopener nofollow" target="_blank">sleep-restriction study</a>). Among 84 smokers in a cessation programme, successful quitters' skin lightened between weeks 4 and 12 as redness and haemoglobin fell (<a href="https://pubmed.ncbi.nlm.nih.gov/23113589/" rel="noopener nofollow" target="_blank">cessation study</a>). Particulate pollution tracked pigment spots in 400 older women (<a href="https://www.jidonline.org/article/S0022-202X(15)34645-5/fulltext" rel="noopener nofollow" target="_blank">SALIA</a>). And in a six-week randomised trial, 81 students drinking a daily 500 ml fruit-and-vegetable smoothie shifted skin yellowness by 3.3 units and redness by 1.0 within four weeks (<a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0133445" rel="noopener nofollow" target="_blank">smoothie RCT</a>), the carotenoid tone that observers rate as healthier and more attractive in the perception studies (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5831823/" rel="noopener nofollow" target="_blank">attractiveness analysis</a>). None of it needs a clinic.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'Raking light, the blot, the pinch and a four-week diary',
    tldr: 'A torch at a low angle shows texture; a blotting paper at noon shows oil; a pinch shows dehydration; the inner arm shows colour. Photograph in daylight, keep a four-week diary of sleep, cigarettes and products, and rule out melasma, rosacea and an over-exfoliated barrier before any device.',
    bodyHtml: `
      <p>Four minutes and no equipment. Raking light across the cheek shows scaling and roughness; a blotting paper pressed to the forehead and nose at noon shows sebum; a gentle pinch shows the fine crinkles of dehydration; the inner upper arm beside the face shows how much of the dullness is colour. Photograph the face straight on in daylight, without make-up, and again in four weeks — the surface changes with sleep, hydration and season, and the mirror forgets. Then a diary of the four weeks: hours slept, cigarettes, what went on the face and how often, because an evening routine of three acids and a brush is a common answer to "why is my skin dull". Two diagnoses need a clinician before anything with light or heat: melasma, which every device on this page can worsen, and rosacea, which peels and scrubs inflame; and one needs nothing but a month off — the stinging, tight, shiny-red surface of a stripped barrier.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-sunscreen',
    category: 'home',
    title: 'Daily sunscreen',
    tldr: 'The one product with a randomised prevention trial (24% less measured skin aging) and a one-year reversal study in which texture, clarity and mottled pigmentation improved 40–52% with every subject better. The base of the whole page.',
    evidence: 'strong',
    focus: 'tone',
    note: 'Best for: everyone — mottling, texture and clarity all improved with sunscreen alone',
    sessions: 'Every morning',
    downtime: 'None',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Ultraviolet mottles colour, roughens the surface and thins the dermis, and stopping it lets the surface repair itself. Daily sunscreen users in the Nambour trial showed no detectable increase in skin aging over 4.5 years — 24% less than discretionary users (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>) — and in a one-year study of 32 people applying an SPF 30 sunscreen daily, every photoaging measure improved from week 12, with texture, clarity and mottled and discrete pigmentation 40–52% better at week 52 and 100% of subjects improved in clarity and texture (<a href="https://pubmed.ncbi.nlm.nih.gov/27749441/" rel="noopener nofollow" target="_blank">one-year study</a>). For the colour type it is the treatment; for every other type it is the condition under which the rest works. Tinted iron-oxide formulations add visible-light protection for pigment-prone skin; the <a href="/sun-damage">sun-damage guide</a> covers the rest.</p>
    `,
  },
  {
    id: 'home-retinoid',
    category: 'home',
    title: 'A retinoid (retinol to tretinoin)',
    tldr: 'Eight randomised tretinoin trials in 1,361 patients show smoother texture and less mottling; retinoids speed the slowed turnover from beneath, thin the pile-up, shrink sebum and rebuild the dermis. The one product that treats the surface type at its cause.',
    evidence: 'strong',
    focus: 'surface',
    note: 'Best for: the rough, slow-turnover surface and the pore type — the base under exfoliation, not a substitute for it',
    sessions: 'Nightly (start 2–3× a week), indefinitely',
    downtime: 'Weeks of dryness and flaking',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Retinoids normalise the epidermis's turnover — the mechanism dullness lacks — and reduce sebum, disperse pigment and rebuild upper-dermal collagen. The meta-analysis of eight randomised, vehicle-controlled tretinoin trials in 1,361 patients found significant improvement in fine and coarse wrinkling and overall photodamage, which includes texture and mottling (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">meta-analysis</a>); a randomised double-blind split-face study of retinol-based against tretinoin-based products found the over-the-counter form comparable with less irritation (<a href="https://jddonline.com/a-randomized-double-blind-split-face-study-comparing-the-efficacy-and-tolerability-of-three-retinol-based-products-vs-three-tretinoin-based-products-in-subjects-with-moderate-to-severe-facial-photodam/" rel="noopener nofollow" target="_blank">split-face study</a>). The first weeks are flakier, not smoother — the "retinoid purge" is the pile-up shedding — and the trick is to start slowly, buffer with moisturiser and keep the acids to a minimum until the skin has adapted. The <a href="/wrinkles">wrinkles guide</a> covers the ladder.</p>
    `,
  },
  {
    id: 'home-niacinamide-vitc',
    category: 'home',
    title: 'Niacinamide and vitamin C',
    tldr: 'Niacinamide 5% reduced fine lines, mottled pigmentation, sallowness and red blotchiness and improved elasticity in a 12-week double-blind split-face trial; vitamin C 5% improved photodamage over six months. The two actives with trials on the colour type.',
    evidence: 'moderate',
    focus: 'tone',
    note: 'Best for: the sallow, blotchy, mottled type — the colour half of dullness',
    sessions: 'Daily, under sunscreen',
    downtime: 'None',
    cost: '€15–60 / month',
    bodyHtml: `
      <p>Two actives address colour directly. Niacinamide (vitamin B3) at 5% reduced fine lines, hyperpigmented spots, red blotchiness and sallowness and improved elasticity against vehicle in a 12-week double-blind split-face trial (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1524-4725.2005.31732" rel="noopener nofollow" target="_blank">Bissett 2005</a>); it also lowers sebum and improves barrier lipids, which is why it appears in the pore and dehydration rows too. A 5% vitamin C cream improved photodamage and deep furrows over six months in a double-blind trial (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1034/j.1600-0625.2003.00008.x" rel="noopener nofollow" target="_blank">Humbert 2003</a>) and neutralises the free radicals from the ultraviolet and pollution that sunscreen lets through. Morning vitamin C under sunscreen, niacinamide at either end of the day, a retinoid at night is the regimen the trials support. The <a href="/dark-spots">dark-spots guide</a> covers the stronger pigment actives.</p>
    `,
  },
  {
    id: 'home-aha-pha',
    category: 'home',
    title: 'Alpha- and polyhydroxy acids (glycolic, lactic, gluconolactone)',
    tldr: '8% glycolic or lactic cream improved photodamage grades in about three-quarters of users against 40% on vehicle over 22 weeks; a gluconolactone regimen matched glycolic acid over 12 weeks — sallowness 12% vs 17% better — with far less stinging. Exfoliation with trials, two to four nights a week.',
    evidence: 'moderate',
    focus: 'surface',
    note: 'Best for: the rough, slow-turnover surface once a retinoid is tolerated — polyhydroxy first for anyone who stings',
    sessions: '2–4 nights a week',
    downtime: 'Stinging; sun sensitivity',
    cost: '€10–40 / month',
    bodyHtml: `
      <p>Hydroxy acids loosen the bonds between dead cells so the pile-up sheds, and over months modestly thicken the living epidermis beneath. The reference trial randomised women to 8% glycolic acid, 8% lactic acid or vehicle for 22 weeks: 76% and 71% improved at least one grade of photodamage against 40% on vehicle (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>), and a daily 5% glycolic formulation has a double-blind randomised trial (<a href="https://www.researchgate.net/publication/13686192_A_Double-Blind_Randomized_Clinical_Trial_on_the_Effectiveness_of_a_Daily_Glycolic_Acid_5_Formulation_in_the_Treatment_of_Photoaging" rel="noopener nofollow" target="_blank">1998 trial</a>). The polyhydroxy acids are the gentler cousins: a 12-week head-to-head of a gluconolactone regimen against a glycolic regimen found both improved surface measures and clinical grades, glycolic slightly more for sallowness (17.1% vs 12.4%) and recoil, gluconolactone with significantly less stinging and burning (<a href="https://pubmed.ncbi.nlm.nih.gov/15002657/" rel="noopener nofollow" target="_blank">PHA vs AHA trial</a>). Nights only, a few times a week, never with the scrub, and the morning sunscreen non-negotiable because they raise sun sensitivity.</p>
    `,
  },
  {
    id: 'home-moisturiser',
    category: 'home',
    title: 'A humectant-and-barrier moisturiser',
    tldr: 'Moisturisers improve barrier function and surface hydration in randomised comparison, and a hydrated outer layer reflects light where a dehydrated one scatters it; the fastest change on the page, gone if you stop. Water for the dehydrated type, lipids for the dry.',
    evidence: 'moderate',
    focus: 'hydration',
    sessions: 'Twice daily',
    downtime: 'None',
    cost: '€10–40 / month',
    bodyHtml: `
      <p>Glow is partly water: a stratum corneum holding enough of it lies flat and reflects, and one that has lost it lifts, scatters and looks dull within a day. A randomised clinical trial of moisturisers after environmental stress found all of them improving barrier function and surface moisture from baseline (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10532330/" rel="noopener nofollow" target="_blank">moisturiser RCT</a>), and a gel-matrix moisturiser produced measured gains in radiance and texture in an industry study (<a href="https://www.tandfonline.com/doi/full/10.2147/CCID.S196110" rel="noopener nofollow" target="_blank">radiance study</a>). Humectants — glycerin, hyaluronic acid, urea — draw water into the surface and an occlusive layer keeps it there; ceramide-dominant creams rebuild the lipids of truly dry or over-exfoliated skin, and the <a href="/ceramides">ceramide guide</a> grades them. Moderate because the effect is real, measurable and temporary; it is also the treatment for the stripped barrier that acids cause.</p>
    `,
  },
  {
    id: 'home-sleep-smoke',
    category: 'home',
    title: 'Sleep, and not smoking',
    tldr: 'One sleepless night yellowed 28 faces on spectrophotometry and two short nights cut gloss and elasticity in 32 women; quitting smoking lightened skin colour in 84 people within 12 weeks. Free, measured, and faster than any cream.',
    evidence: 'moderate',
    focus: 'tone',
    note: 'Best for: the sallow, tired-looking type — the experiments say a week of sleep shows on a spectrophotometer',
    sessions: 'Every night; quit',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>These are the only dullness treatments with controlled experiments that measure the face the next morning. Total sleep deprivation in 28 volunteers and five consecutive four-hour nights in ten increased facial yellowness, an effect the authors attribute to the skin itself rather than circulating pigments (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9861417/" rel="noopener nofollow" target="_blank">sleep yellowness study</a>); in 32 women, a week of eight-hour nights followed by four-hour nights reduced hydration after one night and gloss, elasticity and texture over the days that followed (<a href="https://pubmed.ncbi.nlm.nih.gov/31692145/" rel="noopener nofollow" target="_blank">sleep-restriction study</a>). Among 84 smokers in a cessation programme, those who quit showed skin lightening between weeks 4 and 12 with falling redness and haemoglobin (<a href="https://pubmed.ncbi.nlm.nih.gov/23113589/" rel="noopener nofollow" target="_blank">cessation study</a>), on top of the barrier changes long-term smoking causes (<a href="https://www.nature.com/articles/s41598-023-38178-7" rel="noopener nofollow" target="_blank">barrier study</a>). Moderate on small experimental studies that all point the same way.</p>
    `,
  },
  {
    id: 'home-bha',
    category: 'home',
    title: 'Salicylic acid for pores',
    tldr: 'Oil-soluble, so it clears the pore rather than the surface: a 21-day open-label study of a 2% gel cut sebum 24% and raised hydration 40%, and a 2% cleanser has a placebo-controlled acne trial. Industry-run, short, and the right acid for the pore type.',
    evidence: 'emerging',
    focus: 'pores',
    sessions: 'Daily to alternate days',
    downtime: 'Dryness',
    cost: '€10–25 / month',
    bodyHtml: `
      <p>Salicylic acid dissolves in oil, so it exfoliates inside the pore where the alpha-hydroxy acids cannot reach, and it is the traditional treatment for the oily, coarse-pored type. The evidence is short and industry-run: a 21-day prospective study of a 2% salicylic gel reported sebum down 23.7%, hydration up 40.5% and water loss down 49%, with self-reported gains in pore size and radiance (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12274963/" rel="noopener nofollow" target="_blank">21-day study</a>), and a 2% salicylic cleanser improved acne against placebo in a double-blind trial (<a href="https://www.jaad.org/article/S0190-9622(12)01331-X/abstract" rel="noopener nofollow" target="_blank">cleanser trial</a>). No controlled study measures pore size as its endpoint, which keeps it emerging; a leave-on 2% product on the T-zone a few nights a week, not stacked with a glycolic and a retinoid on the same night.</p>
    `,
  },
  {
    id: 'home-diet-water',
    category: 'home',
    title: 'Fruit, vegetables and water',
    tldr: 'A daily fruit-and-vegetable smoothie shifted facial colour toward carotenoid yellow-red within four weeks in an 81-person randomised trial, the tone observers rate as healthier; adding two litres of water a day raised skin hydration in 49 women who drank little. Small, real, free.',
    evidence: 'emerging',
    focus: 'tone',
    sessions: 'Daily',
    downtime: 'None',
    cost: 'Free–€30 / month',
    bodyHtml: `
      <p>Carotenoids from fruit and vegetables deposit in the skin and shift its colour toward a warm yellow-red that observers consistently rate as healthier and more attractive than a tan. In a six-week randomised trial, 81 students drinking a daily 500 ml smoothie with about 21 mg of beta-carotene raised skin yellowness by 3.3 units and redness by 1.0 within four weeks against water controls (<a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0133445" rel="noopener nofollow" target="_blank">smoothie RCT</a>); intake tracked yellowness in 118 young women (<a href="https://pubmed.ncbi.nlm.nih.gov/30055771/" rel="noopener nofollow" target="_blank">cross-sectional study</a>), and the perception work puts the attractive threshold at about three extra portions a day (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5831823/" rel="noopener nofollow" target="_blank">attractiveness analysis</a>). Water is smaller and real: in 49 women, adding two litres a day for a month raised superficial and deep skin hydration, most in those who had been drinking least (<a href="https://www.tandfonline.com/doi/pdf/10.2147/CCID.S86822" rel="noopener nofollow" target="_blank">Palma 2015</a>). Emerging because the trials are small and the effects modest; free because they are.</p>
    `,
  },
  {
    id: 'home-led',
    category: 'home',
    title: 'Red and near-infrared LED',
    tldr: 'The 136-person randomised trial measured exactly this problem: improved complexion, skin feeling, roughness and collagen density against untreated controls at clinic doses. Home masks deliver a fraction of the dose; nothing for pores or colour.',
    evidence: 'emerging',
    focus: 'surface',
    sessions: '3–5× a week',
    downtime: 'None',
    cost: '€200–500 device',
    bodyHtml: `
      <p>Red and near-infrared light stimulate fibroblasts and, in the one large controlled trial, improved the things this page is about: 136 people randomised to light or no treatment showed significant improvement in complexion and skin feeling, reduced roughness on profilometry and increased collagen density on ultrasound (<a href="https://journals.sagepub.com/doi/10.1089/pho.2013.3616" rel="noopener nofollow" target="_blank">Wunsch &amp; Matuschka 2014</a>). Consumer masks deliver a fraction of the trial's energy, and the mechanism does nothing for sebum, pores or pigment. A reasonable add-on for the rough type; the <a href="/red-light-therapy">red-light guide</a> covers doses.</p>
    `,
  },
  {
    id: 'home-scrubs-gadgets',
    category: 'home',
    title: 'Scrubs, cleansing brushes, dermaplaning and "detox" masks',
    tldr: 'No controlled trial supports any of them for texture or radiance; physical abrasion removes the barrier with the dead cells and is the usual cause of the stinging, dull, over-exfoliated face. A blade removes vellus hair and an afternoon of smoothness.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'Rarely, if at all',
    downtime: 'A stripped barrier if overdone',
    cost: '€10–200',
    bodyHtml: `
      <p>Mechanical exfoliation feels like it works because it does for an hour: the surface is smoother until the barrier it removed with the dead cells lets water out and inflammation in. Scrubs and rotating brushes have no controlled trial for texture or radiance; dermaplaning, a blade run across the face to remove dead cells and vellus hair, has none either, and a 2024 imaging study of hydradermabrasion is the closest the category comes to measurement (<a href="https://onlinelibrary.wiley.com/doi/10.1111/srt.13684" rel="noopener nofollow" target="_blank">imaging study</a>); charcoal and clay "detox" masks absorb oil for an evening and detoxify nothing. Anyone with pigment to spare darkens where they scrub. Once a fortnight at most, and never on a face that stings.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-microdroplet-ha',
    category: 'inj',
    title: 'Microdroplet hyaluronic-acid injections (Skinvive, Skinboosters)',
    tldr: 'The one skin-quality injection with a proper controlled trial: in 202 people, cheek smoothness improved in 57.9% and fine lines in 58.3% at a month against 4.5% and 5.4% of untreated controls, persisting six months; a second product had 75–84% judged improved at three months with hydration up. Hydration under the skin, about six months.',
    evidence: 'strong',
    focus: 'hydration',
    note: 'Best for: the dehydrated, crepey, dull surface that skincare has not fixed — the "glass skin" injection, with a trial behind it',
    sessions: 'Once, repeat at 6–9 months',
    downtime: '1–3 days of bumps; bruising',
    cost: '€300–600 (UK £275–550)',
    bodyHtml: `
      <p>A grid of tiny intradermal droplets of a lightly crosslinked hyaluronic gel across the cheeks holds water in the dermis for months and smooths the surface above it. The trial is the best in this territory: 202 adults (median age 58) randomised two-to-one to treatment or no treatment; at one month, 57.9% of treated cheeks improved in smoothness and 58.3% in fine lines against 4.5% and 5.4% of controls, responder rates held through six months, and six participants had treatment-related events, none serious (<a href="https://pubmed.ncbi.nlm.nih.gov/37163665/" rel="noopener nofollow" target="_blank">VYC-12L RCT</a>); an earlier study of the same gel measured a 96% skin-roughness responder rate at one month falling to 35% by six (<a href="https://pubmed.ncbi.nlm.nih.gov/31749628/" rel="noopener nofollow" target="_blank">roughness data</a>). A randomised multicentre study of a competing microdroplet gel in the face found 75–84% of subjects judged improved by a blinded evaluator at three months with hydration significantly increased, though elasticity changed inconsistently (<a href="https://clinicaltrials.gov/study/NCT02403986" rel="noopener nofollow" target="_blank">Skinboosters trial</a>). Strong on two randomised trials; the effect is hydration and smoothness rather than lift or volume, it fades over six to nine months, and it is the only "glow" procedure on this page with numbers of this quality. The <a href="/fillers">filler guide</a> covers the products.</p>
    `,
  },
  {
    id: 'inj-microtoxin',
    category: 'inj',
    title: 'Intradermal micro-doses of botulinum toxin for pores and oil',
    tldr: 'A meta-analysis of ten studies (five randomised) in 153 people finds sebum, pore size, texture and redness improved and hydration not; split-face saline-controlled trials of 18 and 20 people agree, with effects lasting eight weeks to four months. Small, consistent, underpowered, and one facial palsy at 30 units.',
    evidence: 'moderate',
    focus: 'pores',
    note: 'Best for: the oily, coarse-pored type that retinoids and salicylic acid have not settled — for a season',
    sessions: 'Every 3–4 months',
    downtime: 'None',
    cost: '€200–400',
    bodyHtml: `
      <p>Toxin diluted and placed as dozens of intradermal microdroplets reaches the sweat and sebaceous glands and the fine muscle fibres attached to the skin, reducing oil and tightening the surface without the paralysis of standard dosing. The systematic review and meta-analysis pooled ten studies — five randomised controlled trials and five prospective cohorts, 153 participants — and found positive effects on sebum production, pore size, erythema, wrinkles, texture and elasticity but not hydration, with every outcome short of the information size needed for a firm conclusion (<a href="https://pubmed.ncbi.nlm.nih.gov/39185380/" rel="noopener nofollow" target="_blank">meta-analysis</a>). The split-face trials underneath: 18 volunteers with toxin in one cheek and saline in the other showed better texture for eight weeks and nasolabial wrinkles for twelve, with one facial palsy at 30 units and none at 20 (<a href="https://pubmed.ncbi.nlm.nih.gov/36478426/" rel="noopener nofollow" target="_blank">double-blind split-face RCT</a>); 20 patients with enlarged pores and seborrhoea showed significantly greater falls in sebum and pore scores on the toxin side, with pores smaller on dermoscopy and benefits at four months (<a href="https://pubmed.ncbi.nlm.nih.gov/31865815/" rel="noopener nofollow" target="_blank">pores split-face study</a>); a randomised comparison found microneedling-assisted delivery no better than intradermal injection (<a href="https://pubmed.ncbi.nlm.nih.gov/40522143/" rel="noopener nofollow" target="_blank">delivery RCT</a>). Moderate on consistent small trials; three to four months; an injector who has done it before.</p>
    `,
  },
  {
    id: 'inj-profhilo-pn',
    category: 'inj',
    title: 'Bioremodelling hyaluronic acid and polynucleotides',
    tldr: 'Profhilo’s systematic review of nine studies in 278 people finds hydration and elasticity parameters improved, mostly in uncontrolled studies, with a 12-woman triple-blind trial on texture; polynucleotides rest on nine low-to-moderate-quality studies. Hydration-adjacent, priced above the microdroplet gel with the better trial.',
    evidence: 'emerging',
    focus: 'hydration',
    sessions: '2 sessions a month apart, every 6–9 months',
    downtime: '1–3 days of bumps',
    cost: '€300–450 per session',
    bodyHtml: `
      <p>Five boluses per side of a high-and-low-molecular-weight hyaluronic complex, or a course of fish-derived DNA fragments, are sold for skin quality on the same promise as the microdroplet gels. The Profhilo evidence is a systematic review of nine studies in 278 participants finding improvement or a trend in viscoelasticity, hydration, density and laxity ratings, most of the studies uncontrolled (<a href="https://pubmed.ncbi.nlm.nih.gov/41920062/" rel="noopener nofollow" target="_blank">systematic review</a>), and a randomised triple-blind split-face trial of 12 women on texture and dermal thickness (<a href="https://link.springer.com/article/10.1007/s00266-026-05634-4" rel="noopener nofollow" target="_blank">triple-blind RCT</a>); polynucleotides rest on nine low-to-moderate-quality studies in 219 patients reporting texture and elasticity gains (<a href="https://pubmed.ncbi.nlm.nih.gov/39645667/" rel="noopener nofollow" target="_blank">systematic review</a>). Plausible, mild side effects, and a weaker evidence base than the microdroplet trial for the same complaint; the <a href="/fillers">filler guide</a> and the <a href="/regenerative-aesthetics">regenerative guide</a> grade them.</p>
    `,
  },
  {
    id: 'inj-prp',
    category: 'inj',
    title: 'Platelet-rich plasma',
    tldr: 'Three randomised split-face trials show modest gains in texture and fine lines, mostly when combined with microneedling; nothing on pores, colour or hydration. A skin-quality add-on at a course price.',
    evidence: 'limited',
    focus: 'surface',
    sessions: '3 sessions',
    downtime: '1–3 days',
    cost: '€300–600 per session',
    bodyHtml: `
      <p>Platelet-rich plasma injected or needled into the face is sold for glow, and the controlled evidence is thin: three randomised split-face trials show modest improvement in texture and fine lines, largely when the plasma is delivered by microneedling that itself improves texture (<a href="https://www.tandfonline.com/doi/full/10.2147/CCID.S340434" rel="noopener nofollow" target="_blank">split-face trials</a>), and a 2025 review found skin thickness improved in most studies but wrinkles in fewer than half and hydration in none (<a href="https://pubmed.ncbi.nlm.nih.gov/40167104/" rel="noopener nofollow" target="_blank">2025 review</a>). Limited for dullness; the needling is doing the work, and the <a href="/regenerative-aesthetics">regenerative guide</a> grades the rest.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-superficial-peels',
    category: 'clinic',
    title: 'Superficial and medium chemical peels',
    tldr: 'A course of glycolic peels competed with daily tretinoin in a controlled comparison; a systematic review finds medium-depth trichloroacetic acid peels effective resurfacing for photodamage; gluconolactone peels alter sebum and pH with less irritation. Exfoliation at a controlled depth, by someone who has read the skin type.',
    evidence: 'moderate',
    focus: 'surface',
    note: 'Best for: the rough, mottled surface that home acids have plateaued on — a course of superficial peels, or one medium peel for more',
    sessions: '3–6 superficial peels 2–4 weeks apart; 1 medium peel',
    downtime: 'None to 2 days (superficial); 5–7 days (medium)',
    cost: '€80–250 per superficial peel (UK £60–150; course £150–700); €250–500 medium',
    bodyHtml: `
      <p>A clinic peel does in one controlled session what home acids do over months: glycolic, lactic, mandelic or salicylic acid at strengths that remove the pile-up and stimulate the epidermis beneath, or a Jessner's–trichloroacetic acid combination that reaches the upper dermis and resurfaces mottling and roughness at once. A course of glycolic peels was competitive with daily tretinoin in a controlled comparison (<a href="https://pubmed.ncbi.nlm.nih.gov/30027612/" rel="noopener nofollow" target="_blank">2018 comparison</a>); the systematic review of trichloroacetic acid finds medium-depth peels effective resurfacing agents (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8423570/" rel="noopener nofollow" target="_blank">systematic review</a>); the classic review sets out the evidence by depth (<a href="https://jcadonline.com/evidence-and-considerations-in-the-application-of-chemical-peels-in-skin-disorders-and-aesthetic-resurfacing/" rel="noopener nofollow" target="_blank">JCAD review</a>); and gluconolactone peels at 10% and 30% measurably reduce sebum and shift pH with a gentle profile (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15864" rel="noopener nofollow" target="_blank">gluconolactone peel study</a>). The pigment risk rises with depth and skin type; the <a href="/chemical-peels">peel guide</a> grades every acid and depth.</p>
    `,
  },
  {
    id: 'clinic-nafl-thulium',
    category: 'clinic',
    title: 'Non-ablative fractional lasers (1927 nm thulium, 1550/1565 nm)',
    tldr: 'The thulium laser has a 17-study systematic review; in 27 Asian patients with photoaging, three sessions improved pores, pigmentation and epidermal thickness — but not texture — with 44% reporting a more radiant complexion and no post-inflammatory darkening. A 1565 nm laser cut pore counts 29% in a split-face comparison. The device for colour and pores; downtime in days.',
    evidence: 'moderate',
    focus: 'tone',
    note: 'Best for: mottled colour and enlarged pores on skin that darkens easily — the gentlest laser with measured results',
    sessions: '3, a month apart',
    downtime: '2–5 days of redness and bronzing',
    cost: '€300–600 per session',
    bodyHtml: `
      <p>Non-ablative fractional lasers heat columns of skin under an intact surface; the 1927 nm thulium wavelength is absorbed by water at the depth of the epidermis and upper dermis, where pigment and pore walls sit. A systematic review of 17 studies in 448 participants found it improving texture, pigmentation and scars with an acceptable safety profile, typically over three monthly sessions (<a href="https://link.springer.com/content/pdf/10.1007/s10103-025-04781-5.pdf" rel="noopener nofollow" target="_blank">systematic review</a>). The honest prospective study is Asian: 27 patients (skin types II–IV) given three full-face sessions showed statistically significant improvement in melanin index, pores and epidermal thickness and in wrinkles from the first month, but no significant improvement in texture; 44% said their skin looked more radiant, 70% were satisfied, and no post-inflammatory hyperpigmentation occurred (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10025463/" rel="noopener nofollow" target="_blank">thulium photoaging study</a>; <a href="https://jddonline.com/articles/nonablative-1927-nm-fractional-resurfacing-for-the-treatment-of-facial-photopigmentation-S1545961614P1317X" rel="noopener nofollow" target="_blank">JDD, 2014</a>). For pores, a split-face comparison in 18 people found a 1565 nm non-ablative fractional laser reducing pore counts 29% against 22% for a long-pulsed 1064 nm laser after five sessions, with more pain and scabbing on the fractional side (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9525434/" rel="noopener nofollow" target="_blank">pores comparison</a>). Moderate; the <a href="/laser-ipl">laser guide</a> covers the devices and settings by skin type.</p>
    `,
  },
  {
    id: 'clinic-ipl',
    category: 'clinic',
    title: 'Intense pulsed light for colour',
    tldr: 'The blinded split-face randomised trial: three sessions improved irregular pigmentation in 59–71% of faces and telangiectasia in 79–85%, texture in 82% at a month falling to 56% at nine, and wrinkles not at all. The machine for the blotchy, red-and-brown type in fair to olive skin.',
    evidence: 'moderate',
    focus: 'tone',
    sessions: '3, a month apart',
    downtime: 'A day of redness; spots darken and flake for a week',
    cost: '€200–500 per session',
    bodyHtml: `
      <p>Intense pulsed light is absorbed by melanin and haemoglobin, so it evens the brown and red that make a complexion blotchy without much effect on the surface. In the randomised controlled split-face trial of 32 women with blinded raters, three treatments improved irregular pigmentation on the treated side in 71% at one month and 59% at nine, telangiectasia in 79–85%, and skin texture in 82% at one month falling to 56% by nine, with no effect on wrinkles and one small atrophic scar (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/407425" rel="noopener nofollow" target="_blank">JAMA Dermatology RCT</a>). Moderate for dullness because its texture effect fades and its colour effect is the point; the wrong device for darker skin and for melasma, which it can worsen. The <a href="/sun-damage">sun-damage guide</a> and the <a href="/laser-ipl">laser guide</a> cover it in depth.</p>
    `,
  },
  {
    id: 'clinic-microneedling',
    category: 'clinic',
    title: 'Microneedling, with or without radiofrequency',
    tldr: 'A meta-analysis of 12 randomised trials and a network meta-analysis support microneedling for texture and scars; radiofrequency needling improves image-derived texture and hydration metrics. Real for the rough, scarred surface; days of redness; an FDA alert on burns with the radiofrequency devices.',
    evidence: 'moderate',
    focus: 'surface',
    sessions: '3–4, a month apart',
    downtime: '1–3 days (needling); 2–4 days (radiofrequency)',
    cost: '€150–350 per session (needling); €400–800 (radiofrequency)',
    bodyHtml: `
      <p>Needles that puncture the dermis provoke a wound-healing response that thickens and reorganises it, and the controlled evidence is respectable for what it measured: a meta-analysis of 12 randomised trials supports microneedling for wrinkles, texture and scars (<a href="https://pubmed.ncbi.nlm.nih.gov/35426044/" rel="noopener nofollow" target="_blank">12-RCT meta-analysis</a>), a network meta-analysis ranks the variants (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12483851/" rel="noopener nofollow" target="_blank">network meta-analysis</a>), and image-derived analysis after microneedle radiofrequency found improved wrinkle, pigmentation, vascular and hydration metrics at 30 days (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12685671/" rel="noopener nofollow" target="_blank">2025 study</a>). The radiofrequency versions carry the FDA's alert on burns and scarring (<a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">FDA alert</a>) and cost several times more for a texture problem plain needling treats. The <a href="/microneedling">microneedling guide</a> grades the devices and the serums pushed through them.</p>
    `,
  },
  {
    id: 'clinic-hydradermabrasion',
    category: 'clinic',
    title: 'Hydradermabrasion (HydraFacial and copies)',
    tldr: 'One randomised trial of 20 women: six sessions with pneumatic antioxidant serum thickened the epidermis from about 50 to 80 µm and the papillary dermis from 300 to 425 µm, with fewer fine lines, smaller pores and less pigmentation, while the serum applied by hand changed nothing. Small, old, and the best evidence any facial has.',
    evidence: 'emerging',
    focus: 'surface',
    note: 'Best for: the rough, dehydrated surface before an event — a course has one trial, a single session has a pleasant afternoon',
    sessions: '1 before an event; 6 for the trial effect',
    downtime: 'None',
    cost: '€130–250 per session (UK £120–200)',
    bodyHtml: `
      <p>A vacuum tip abrades the surface while a serum is pushed into it — crystal-free microdermabrasion with pneumatic delivery — and it is the one facial with a controlled trial. Twenty women aged 34–56 were randomised to six hydradermabrasion sessions with a polyphenolic antioxidant serum at 7–10-day intervals or to the same serum applied by hand: the treated group showed increased epidermal thickness (about 50 to 80 µm), increased papillary dermal thickness (300 to 425 µm) and higher skin antioxidant levels, with replacement of elastotic tissue and decreased fine lines, pore size and hyperpigmentation, while the manual group changed in nothing (<a href="https://pubmed.ncbi.nlm.nih.gov/19146604/" rel="noopener nofollow" target="_blank">hydradermabrasion RCT</a>); a 2024 study images the surface changes with optical coherence tomography (<a href="https://onlinelibrary.wiley.com/doi/10.1111/srt.13684" rel="noopener nofollow" target="_blank">imaging study</a>). Emerging on one small trial from 2008; the clinics sell single sessions, which the trial did not test, and the brand's price is for the machine, not the evidence.</p>
    `,
  },
  {
    id: 'clinic-microdermabrasion',
    category: 'clinic',
    title: 'Microdermabrasion',
    tldr: 'A prospective controlled assessment of eight weekly sessions in 20 patients found blinded raters seeing improved discolouration, with the epidermis thicker on biopsy (103 to 148 µm) and collagen more organised; a randomised trial adding a retinoic-acid peel found slight gains. Older, cheaper hydradermabrasion; polish, not resurfacing.',
    evidence: 'emerging',
    focus: 'surface',
    sessions: '6–8 weekly sessions',
    downtime: 'None to a day',
    cost: '€80–150 per session',
    bodyHtml: `
      <p>Crystals or a diamond tip abrade the outer stratum corneum under vacuum — a controlled, shallow polish. The evidence is a prospective study of 20 patients (17 completing) given eight weekly sessions: 30 blinded observers found significant improvement in hyperchromic discolouration, and biopsies showed epidermal thickness rising from 103 to 148 µm with more organised collagen at treated sites (<a href="https://pubmed.ncbi.nlm.nih.gov/15060359/" rel="noopener nofollow" target="_blank">controlled assessment</a>); a randomised double-blind placebo-controlled trial in 45 photoaged patients found microdermabrasion plus a 5% retinoic acid peel gave slight but significant gains over microdermabrasion plus placebo (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5331278/" rel="noopener nofollow" target="_blank">retinoic-acid peel RCT</a>). Emerging: real, shallow, cumulative and quickly outgrown by a retinoid at home or a peel in clinic; wrong for rosacea and for anyone whose barrier is already stripped.</p>
    `,
  },
  {
    id: 'clinic-laser-toning',
    category: 'clinic',
    title: 'Low-fluence 1064 nm "laser toning" and carbon peels',
    tldr: 'A pilot of low-fluence Q-switched 1064 nm treatment across skin types II–VI reported tone and texture gains rising from 38% of participants at one month to all of them at three and six; the same protocol repeated for melasma has caused permanent confetti-like lightening. A pilot and a warning.',
    evidence: 'emerging',
    focus: 'tone',
    sessions: '4–6, 2–4 weeks apart',
    downtime: 'None',
    cost: '€150–300 per session',
    bodyHtml: `
      <p>A large-spot, low-energy pass of a Q-switched 1064 nm laser — sometimes over a layer of carbon lotion that vaporises with it — heats melanin and sebaceous glands gently enough to need no downtime, and is sold across Asia and increasingly Europe for tone, pores and glow. The evidence is a pilot: participants of skin types II–VI treated four times at four-week intervals reported good-to-very-good improvement in 38% at one month and in all of them at three and six, with earlier Korean series describing smoother texture, tone, pores and sebum (<a href="https://doi.org/10.3390/jcm13051380" rel="noopener nofollow" target="_blank">pilot study</a>); a meta-analysis of low-fluence treatment for melasma finds short-lived benefit (<a href="https://pubmed.ncbi.nlm.nih.gov/36533794/" rel="noopener nofollow" target="_blank">low-fluence meta-analysis</a>). The caution is permanent: repeated frequent toning has produced confetti-like guttate hypopigmentation that does not resolve (<a href="https://jcadonline.com/the-asian-problem-of-frequent-laser-toning-for-melasma/" rel="noopener nofollow" target="_blank">JCAD</a>). A few sessions a year in expert hands; not a monthly habit.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-over-exfoliation',
    category: 'safety',
    title: 'The over-exfoliated barrier: the commonest cause of dull skin in people who buy products',
    tldr: 'Daily acids, scrubs, brushes and retinoid-plus-acid stacks strip the lipids and water from the outer layer; the skin stings, shines red, darkens and looks duller than before. Acids raise sun sensitivity. The fix is a month of moisturiser and nothing else — and a routine with one exfoliant, a few nights a week.',
    bodyHtml: `
      <p>The stratum corneum is the surface that glows, and every exfoliant on this page thins it. Used daily, layered — a glycolic toner, a salicylic serum, a retinoid, a scrub on Sundays — they remove lipids faster than the skin replaces them: water escapes, the surface inflames, pigment-prone skin darkens where it was rubbed, and the face becomes tight, shiny-red, stinging and, above all, dull. The trials of hydroxy acids used one product a few nights a week, and the head-to-head found the polyhydroxy acid matching glycolic acid with far less stinging (<a href="https://pubmed.ncbi.nlm.nih.gov/15002657/" rel="noopener nofollow" target="_blank">PHA vs AHA trial</a>). Alpha-hydroxy acids also increase sun sensitivity, so the morning sunscreen is part of the prescription. The remedy for a stripped barrier is dull-sounding: stop everything active, moisturise with a ceramide-dominant cream for four weeks, then reintroduce one thing at a time — the retinoid first, an acid two nights a week second, and the brush never.</p>
    `,
  },
  {
    id: 'safety-devices-darker-skin',
    category: 'safety',
    title: 'Light and lasers in darker skin, and the melasma that must be found first',
    tldr: 'Intense pulsed light, thulium and toning lasers all target melanin and can produce post-inflammatory darkening in Fitzpatrick IV–VI, and repeated toning has caused permanent confetti-like lightening. A melasma mask treated as "dullness" gets worse with every one of them; a dermatoscope and a diagnosis come first.',
    bodyHtml: `
      <p>Devices that even colour work by heating melanin, and in skin with more of it they can add colour instead: post-inflammatory hyperpigmentation follows intense pulsed light and fractional lasers more often in Fitzpatrick IV–VI, the thulium study's freedom from it in 27 patients of types II–IV is a settings choice rather than a guarantee (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10025463/" rel="noopener nofollow" target="_blank">thulium study</a>), and repeated low-fluence toning has produced permanent guttate hypopigmentation (<a href="https://jcadonline.com/the-asian-problem-of-frequent-laser-toning-for-melasma/" rel="noopener nofollow" target="_blank">JCAD</a>). The diagnosis that changes everything is melasma — a symmetrical brown mask on the cheeks, forehead or lip that heat and light worsen — and the blotchy "dull" complexion in a woman on hormonal contraception or after pregnancy is melasma until a dermatoscope says otherwise; the <a href="/dark-spots">dark-spots guide</a> covers it. Rosacea is the other: the diffuse red that peels and scrubs inflame and that vascular light, not exfoliation, treats. Ask who looked before the machine was switched on.</p>
    `,
  },
  {
    id: 'safety-microtoxin',
    category: 'safety',
    title: 'Intradermal toxin: the facial palsy at 30 units',
    tldr: 'In the 18-volunteer split-face trial, one participant developed facial weakness with 30 units and none with 20; microdroplets placed too deep reach the muscles of expression. An off-label technique measured in single units, by an injector who has done it, never through a needling device at home.',
    bodyHtml: `
      <p>Micro-dosing keeps toxin in the skin by dilution and depth, and both can fail: in the double-blind split-face trial, the 30-unit dose produced one case of facial palsy while 20 units produced no serious event (<a href="https://pubmed.ncbi.nlm.nih.gov/36478426/" rel="noopener nofollow" target="_blank">split-face RCT</a>), and the meta-analysis notes that every outcome remains underpowered (<a href="https://pubmed.ncbi.nlm.nih.gov/39185380/" rel="noopener nofollow" target="_blank">meta-analysis</a>). Droplets that reach the zygomaticus or the lip elevators give a lopsided smile for three months; asymmetric placement gives asymmetric sebum. The technique is off-label everywhere, so the dose, dilution and depth are the injector's judgment, and the "microneedling-assisted" versions offered by non-medical clinics deliver an unknown dose to an unknown depth. Licensed product, a clinician who has done it before, and the smallest dose that worked in the trials.</p>
    `,
  },
  {
    id: 'safety-facials-claims',
    category: 'safety',
    title: 'Facials, courses and the words "detox", "oxygen" and "glass skin"',
    tldr: 'A single hydradermabrasion session was never trialled — the study used six; "oxygen" facials and "detox" masks have no mechanism; skin-booster courses swell and bump for days and occasionally nodule. The harm is mostly financial, and the fix is asking what was measured.',
    bodyHtml: `
      <p>The dullness market is mostly harmless and mostly unmeasured. Hydradermabrasion's one trial tested six sessions a week apart, not the single pre-event treatment clinics sell (<a href="https://pubmed.ncbi.nlm.nih.gov/19146604/" rel="noopener nofollow" target="_blank">hydradermabrasion RCT</a>); "oxygen" facials spray a serum with pressurised air and have no controlled trial; "detox" implies toxins the skin does not excrete; "glass skin" is a hydrated stratum corneum and a ring light. The injectable versions carry physical risks: microdroplet gels bump and bruise for days and can leave visible papules in thin skin, bioremodelling injections occasionally nodule, and any injection can occlude a vessel — rare here, because the products are soft and superficial, but real. The useful question for any facial is the one the trials answer: what was measured, on how many people, against what.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-one-product',
    category: 'faq',
    title: 'If I buy one thing for glow, what should it be?',
    tldr: 'Sunscreen, then a retinoid, then niacinamide — the three with trials on texture, mottling and sallowness — and before any of them, a week of eight-hour nights, which measurably changes skin colour for free.',
    bodyHtml: `
      <p>In order of evidence: daily sunscreen, which improved texture, clarity and mottling by 40–52% over a year on its own; a retinoid, which speeds the slowed turnover that makes skin dull and has eight randomised trials; niacinamide 5%, which reduced sallowness, blotchiness and mottling in a split-face trial. A moisturiser with humectants if the skin crinkles when pinched. That is €30–60 a month and covers four of the five causes. The fifth — colour from short sleep, cigarettes and a beige diet — is fixed for nothing, and the spectrophotometer studies say a week of proper sleep shows.</p>
    `,
  },
  {
    id: 'faq-exfoliate-how-often',
    category: 'faq',
    title: 'How often should I exfoliate?',
    tldr: 'Two to four nights a week with one acid, polyhydroxy first if you sting; never a scrub or brush on a face using acids or a retinoid; and not at all for a month if the skin is tight, shiny-red and stinging, because that is the acids talking.',
    bodyHtml: `
      <p>The trials that showed exfoliants working used a single product — 8% glycolic or lactic acid, or a gluconolactone regimen — applied regularly, not a rotation of three acids and a device. Two to four nights a week of one leave-on acid is the evidence-based dose; a retinoid on the other nights; salicylic acid on the T-zone instead of glycolic for the pore type; and a superficial clinic peel every few weeks for the person who wants more. Physical exfoliation adds nothing the acids have not done and removes the barrier that holds the glow. The signal to stop entirely is tightness, stinging, a shiny red surface or new darkening: stop everything active for a month, moisturise, and restart with one thing.</p>
    `,
  },
  {
    id: 'faq-hydrafacial',
    category: 'faq',
    title: 'Is a HydraFacial worth it?',
    tldr: 'For an afternoon of smooth, hydrated skin before an event, yes; for lasting change, the one trial used six weekly sessions and measured a thicker epidermis and fewer fine lines, pores and pigment — a course, at a course price, on 20 women in 2008. A retinoid does more for a fraction.',
    bodyHtml: `
      <p>Hydradermabrasion is the one facial with a randomised trial, and the trial is honest about what it takes: six sessions at 7–10-day intervals thickened the epidermis and the papillary dermis, raised antioxidant levels and reduced fine lines, pore size and pigmentation in 20 women, while the serum applied by hand did nothing. Clinics sell single sessions, which produce a smooth, hydrated, glowing surface that lasts a few days — worth it before a wedding, not a treatment. For lasting texture, the same money buys a year of retinoid, sunscreen and niacinamide with far stronger evidence, or three superficial peels with a comparable one.</p>
    `,
  },
  {
    id: 'faq-skinvive',
    category: 'faq',
    title: 'Do skin-booster injections give "glass skin"?',
    tldr: 'The microdroplet hyaluronic gel is the one glow injection with a proper trial — smoothness improved in 58% against 5% of untreated controls, holding six months — and what it gives is dermal hydration and a smoother surface, not lift, volume or colour. Six to nine months, then again.',
    bodyHtml: `
      <p>Yes, within limits. The 202-person randomised trial found cheek smoothness and fine lines improved in about 58% of treated people against about 5% of untreated controls at one month, holding through six; the effect is water held in the dermis and a smoother, more reflective surface above it, which is the literal definition of glow. It does not lift, add volume or even colour, it bumps and bruises for a few days, it fades over six to nine months, and the competing bioremodelling and polynucleotide products are priced the same with weaker evidence. For the dehydrated, crepey, dull surface that a good routine has not fixed, it is the clinic treatment with numbers; for the sallow or blotchy type, it is the wrong purchase.</p>
    `,
  },
  {
    id: 'faq-water',
    category: 'faq',
    title: 'Does drinking more water make skin glow?',
    tldr: 'A little, if you drink little: adding two litres a day for a month raised skin hydration in 49 women, most in those who had been drinking least. Beyond normal intake the studies find nothing; the moisturiser on the surface does more than the glass on the desk.',
    bodyHtml: `
      <p>The one study that tested it gave 49 healthy women an extra two litres a day for 30 days and found superficial and deep skin hydration rising, most in the women who had been drinking least; women already drinking well changed little. That is the honest size of the effect: if you are under-hydrated, drinking more measurably helps the outer layer; if you are not, more water goes to the kidneys. The stratum corneum takes its water from below and loses it above, and a humectant-and-occlusive moisturiser changes its hydration within hours in a way that a jug of water does not.</p>
    `,
  },
  {
    id: 'faq-diet',
    category: 'faq',
    title: 'Can what I eat change my complexion?',
    tldr: 'Measurably, within a month: a daily fruit-and-vegetable smoothie shifted skin colour toward carotenoid yellow-red in a six-week randomised trial, the tone observers rate as healthier; about three extra portions a day is the perceptible threshold. Sugar stiffens collagen; nothing edible changes texture fast.',
    bodyHtml: `
      <p>Skin colour follows carotenoid intake closely enough to be used as a motivation tool: in the randomised smoothie trial, 81 students drinking 500 ml of fruit-and-vegetable smoothie a day shifted facial yellowness by 3.3 units within four weeks, and the perception studies estimate that roughly three additional daily portions produce a change observers rate as healthier and more attractive. It is a colour effect — carotenoids deposit in the outer layer — rather than a texture effect, and it fades when the diet does. Sugar works the other way over years, cross-linking collagen into stiffer, yellower fibres. Fish oil, collagen peptides and "glow" supplements have small industry trials for hydration and elasticity; the plate has the randomised one.</p>
    `,
  },
  {
    id: 'faq-dermaplaning',
    category: 'faq',
    title: 'Does dermaplaning work?',
    tldr: 'It removes vellus hair and the outermost dead cells with a blade and leaves the skin smooth for a few days; no controlled trial exists for texture or radiance, and on a face using acids or a retinoid it is one exfoliant too many. Hair removal with a glow, not a treatment.',
    bodyHtml: `
      <p>Dermaplaning scrapes the face with a surgical blade, removing the fine vellus hair and the top layer of dead cells; make-up sits better and light reflects a little more evenly for a few days, which is why it is popular before events. There is no controlled study of it for texture, radiance or anything else, the hair grows back unchanged, and on a face already using a retinoid or acids the extra abrasion is what tips a barrier into stinging and darkening. Harmless once in a while on resilient skin, unwise on rosacea, active acne or a stripped barrier, and not a rung on this page's ladder.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Sleep and moisturiser: days. Acids: 2–4 weeks. Niacinamide and vitamin C: 8–12 weeks. A retinoid: flakier for a month, better at three. Sunscreen: 12 weeks. Peels and facials: the next morning, fading in days without a course. Lasers and boosters: judged at 1–3 months.',
    bodyHtml: `
      <p>Dullness is the one complaint that answers quickly, because the surface changes fast. A week of eight-hour nights and a proper moisturiser show within days on the instruments and in the mirror. Hydroxy acids smooth the pile-up within two to four weeks. Niacinamide and vitamin C even colour over eight to twelve. A retinoid makes the first month flakier as the pile-up sheds and is judged at three. Daily sunscreen showed measurable improvement in the one-year study from week 12. A peel or a hydradermabrasion session shows the next morning and fades within days unless repeated as a course. Microdroplet injections are judged at a month, lasers a month after the last session. Photograph in daylight without make-up before anything, and again a month in.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What is the cheapest thing that works, and the most effective?',
    tldr: 'Cheapest with evidence: sleep, sunscreen, a retinoid and niacinamide, €30–60 a month. Most effective per euro in clinic: a course of superficial peels, €250–700. For the dehydrated surface skincare cannot fix: microdroplet injections, €300–600 twice a year. For colour and pores: the thulium laser, €900–1,800 a course.',
    bodyHtml: `
      <p>The ladder in euros: eight hours of sleep, no cigarettes and three more portions of fruit and vegetables (free, measured on a spectrophotometer) → sunscreen, a retinoid, niacinamide and a moisturiser (€30–60 a month, the four causes) → one hydroxy acid two to four nights a week (€10–40 a month) → LED at home for the rough type (€200–500, once) → a course of superficial peels (€250–700) → intradermal toxin for the oily, coarse-pored type (€200–400 a season) → microdroplet hyaluronic injections for the dehydrated surface (€300–600, twice a year) → the thulium laser for colour and pores, or intense pulsed light for blotchiness (€900–1,800 a course). Scrubs, brushes, blades, "oxygen" and "detox" sit outside the ladder, and single-session facials sit beside it for the night before.</p>
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
    intro: 'Glow is light reflected evenly off a smooth, hydrated, evenly coloured surface — and raking light, a blotting paper and a pinch tell you which of the five things that scatter it is yours.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which dullness do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: where the strongest evidence lives',
    intro: 'The cheap products with real trials, the habits with experiments that measure the face the next morning, and the shelf of scrubs and blades that has none.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Injectables',
    intro: 'The one skin-quality injection with a proper controlled trial, the micro-doses of toxin with small consistent ones, and the boosters sold on the same promise with less behind them.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Peels, facials, lasers and needles',
    intro: 'Controlled exfoliation and the devices for colour, pores and texture — each graded by the one or two trials it actually has.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The stripped barrier that causes most product-bought dullness, the pigment risks of light in darker skin, the palsy in the toxin trial, and the words that mean nothing.',
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
  surface: 'Texture',
  tone: 'Tone & colour',
  pores: 'Pores & oil',
  hydration: 'Hydration',
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

/**
 * Cellulite guide — single source of truth (problem template).
 *
 * Consumed by /cellulite. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: cellulite is architecture, not fat — fibrous bands that
 * tether skin to the fascia beneath, fat lobules pressing up between them,
 * and a dermis that thins with age until the mattress shows through. The
 * treatments are graded against the component they act on, because a cream
 * cannot cut a band and a subcision cannot tighten loose skin. The honest
 * ranking: cutting or dissolving the bands is the only thing that has been
 * shown to last; shockwave is the best-evidenced treatment without a
 * needle; radiofrequency, ultrasound and the rest buy months; creams,
 * brushes and wraps measure thigh circumference and call it cellulite.
 * Prices are indicative private rates for Western/Central Europe and the
 * UK; device availability changes by country and year.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'dimples' | 'laxity' | 'fat' | 'all' | 'general';

export type SectionCategory = 'concept' | 'context' | 'home' | 'clinic' | 'inj' | 'safety' | 'faq';

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
  'Cellulite is architecture, not fat: on ultrasound, 169 of 173 dimples in 50 women sat over a fibrous band tethering the skin down, and the review of every trial concludes that the bands are the only target that gives durable results. It affects 80–90% of women after puberty and 78% of Brazilian girls by 18, thin ones included; men almost never, because their bands run differently.',
  'Three components, three answers. Discrete dimples on firm skin are bands — cut them. A soft, wavy, mattress surface is laxity and thin dermis — tighten it. Heavy, swollen thighs are fat and fluid — lose them, and the dimples underneath will then need the first two.',
  'Cutting the bands lasts: a single vacuum-guided subcision took the severity score from 3.4 to 1.3 at three months and 1.4 at a year in the pivotal study, with 93% improved and 94% satisfied at twelve months and benefit still measurable at three years. The price is a 99% bruising rate and a procedure, not a cream.',
  'Without a needle, shockwave is the best-evidenced option — a 2.5-point severity improvement against sham in a double-blind trial, a meta-analysis of eleven studies, and the "standout" in the 2025 systematic review of 24 randomised trials. Radiofrequency, ultrasound and the massage devices improve a grade for weeks to months and then fade.',
  'The creams and wraps are graded on the wrong endpoint: the meta-analysis of 21 cosmetic-product studies measured thigh circumference, not dimples; the aminophylline trial found no difference from placebo; and retinol improved elasticity by 10.7% in six months while "the lumpy-bumpy appearance showed either little response or was not responsive". The randomised trials in this field followed patients for a mean of 3.3 weeks.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the type drawer that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-dimpled',
    kind: 'The bands',
    title: 'Fibrous septae that tether the skin to the fascia and pull each dimple down',
    blurb: 'Under 97.6% of dimples examined by ultrasound sits a collagen band running from the skin to the fascia beneath, most of them oblique and rising from the superficial fascia. In women the bands run so that fat lobules bulge between them; in men they cross-hatch and hold the surface flat. Every treatment that cuts, releases or dissolves the bands has lasted; nothing else has.',
  },
  {
    id: 'type-fat',
    kind: 'Fat & estrogen',
    title: 'Fat lobules pressing up between the bands — in the pattern estrogen writes',
    blurb: 'Estrogen decides where fat is stored and how the bands are laid out, which is why cellulite appears at puberty, deepens with pregnancy and menopause, and follows body-mass index: 78% of Brazilian girls had it by 18, and higher BMI, early first period, family history and less exercise all travelled with it. Losing fat makes the lobules smaller; it does not remove the bands.',
  },
  {
    id: 'type-lax',
    kind: 'Thin skin & laxity',
    title: 'A dermis that thins with age until the mattress underneath shows through',
    blurb: 'Young, thick skin hides the architecture; skin that has thinned with the decades, the sun or a large weight loss drapes over it like a sheet over springs. This is the soft, wavy, "mattress" cellulite of the forties and fifties, and it is why weight loss improved most women in the one study that measured it and worsened the ones whose skin had lost its recoil.',
  },
];

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What\'s actually happening',
    intro: 'Three structures make the surface uneven — bands, fat and a thinning dermis — and the one you have most of decides what will work.',
    sections: [
      {
        id: 'what-it-is',
        category: 'concept',
        title: 'What cellulite is: bands, lobules and a dermis, not a disease and not "toxins"',
        tldr: 'The dimpled surface of the thighs and buttocks is made by collagen bands anchoring the skin to the fascia while fat lobules bulge up between them. On ultrasound, 169 of 173 dimples in 50 women had such a band, 84% running obliquely and 90% arising from the superficial fascia. It is normal female anatomy at the extreme of its range, present in 80–90% of women, and the reason men rarely have it is that their bands cross-hatch instead of standing in columns.',
        bodyHtml: `
          <p>The word covers a surface, not a substance. Beneath the skin of the thigh and buttock the fat is divided into lobules by fibrous septae — collagen bands running from the underside of the dermis to the fascia over the muscle. When the bands are short and taut and the lobules between them are full, the surface puckers into dimples and ridges. An ultrasound study of 50 consecutive women mapped 173 dimples: 169 (97.6%) had a fibrous band beneath them, most (84.4%) oblique rather than perpendicular, most (90.2%) arising from the superficial fascia, and 11% with a blood vessel alongside — the anatomy that every band-cutting procedure has to respect (<a href="https://pubmed.ncbi.nlm.nih.gov/34432683/" rel="noopener nofollow" target="_blank">ultrasound anatomy study</a>).</p>
          <p>A review of every trial that has targeted one component or another reached a conclusion the industry does not advertise: treatments aimed at the fat or the dermis give inconsistent, short-lived results, which "suggests that dermal or adipose tissue changes are not the primary etiologies of cellulite"; the mechanical, surgical and enzymatic approaches that target the bands are "the strategy most likely to provide durable improvement" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7515470/" rel="noopener nofollow" target="_blank">pathophysiology review</a>). Nothing in that picture involves toxins, circulation, "trapped water" or lymph — the vocabulary of the wrap and the brush — and nothing in it is a disease. It is female connective-tissue architecture, and it is graded here as such.</p>
        `,
      },
      {
        id: 'how-common',
        category: 'concept',
        title: 'How common it is, who gets it, and what makes it worse',
        tldr: '80–90% of women after puberty, 78% of a sample of 184 Brazilian girls aged 12–18 (57% moderate or severe), and almost no men. In the girls it travelled with higher body-mass index, an early first period, a family history, irregular cycles, more carbohydrate and less exercise; in women it deepens with pregnancy, weight gain, age and menopause, and 40% of the girls already said it affected their quality of life.',
        bodyHtml: `
          <p>Every review gives the same figure — 80 to 90% of post-pubertal women, 85 to 98% in some series — and it starts early: a cross-sectional study of 184 São Paulo girls aged 12 to 18 found cellulite in 77.7%, moderate or severe in 56.5%, with an impact on quality of life in 39.7%, independently associated with higher BMI, early menarche, higher carbohydrate intake, lower water intake, menstrual irregularity, a family history and less exercise (<a href="https://pubmed.ncbi.nlm.nih.gov/35080006/" rel="noopener nofollow" target="_blank">adolescent prevalence study</a>). Estrogen is the organiser — it sets the female pattern of fat storage and band architecture — so the condition appears with the first hormonal surge, deepens with pregnancy and the pill in some women, and changes character at menopause as the dermis thins and fat redistributes (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4520379/" rel="noopener nofollow" target="_blank">cellulite in menopause</a>).</p>
          <p>The expert roundtable on pathophysiology named the three consistent risk factors — female sex, increasing age and high BMI — and made a point worth keeping in mind before any consultation: women seeking treatment "are willing to endure numerous treatments, high cost, temporary and/or delayed results, and invasive procedures", and the psychological discomfort is real (<a href="https://pubmed.ncbi.nlm.nih.gov/37000912/" rel="noopener nofollow" target="_blank">pathophysiology and psychosocial review</a>). That willingness is the market's raw material. This page exists to spend it on the rows with evidence.</p>
        `,
      },
      {
        id: 'why-hard',
        category: 'concept',
        title: 'Why the evidence is so poor — and how to read a cellulite study',
        tldr: 'Of 67 studies reviewed in 2015, most had "important methodological flaws"; the 2025 systematic review found only 24 randomised trials in 2,084 women with a mean follow-up of 3.3 weeks; the meta-analysis of 21 cream studies measured thigh circumference rather than dimples. Learn the scales — Nürnberger-Müller grades 0–3, the Hexsel severity score 0–15 — and ask of every claim: standing or lying, flash or side-light, and how many weeks later.',
        bodyHtml: `
          <p>The 2015 evidence-based review analysed 67 human studies and found that most, "including laser- and light-based modalities, radiofrequency, and others had important methodological flaws; some did not use cellulite severity as an endpoint or did not provide sufficient statistical analyses" (<a href="https://pubmed.ncbi.nlm.nih.gov/25940753/" rel="noopener nofollow" target="_blank">2015 evidence-based review</a>). A decade later the registered 2025 systematic review could find 24 randomised trials with 2,084 patients, followed for a mean of 3.3 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/39547984/" rel="noopener nofollow" target="_blank">2025 systematic review</a>). The cosmetic-cream meta-analysis pooled seven controlled trials on thigh circumference — a measure of fat and fluid, not of a single dimple (<a href="https://pubmed.ncbi.nlm.nih.gov/23763635/" rel="noopener nofollow" target="_blank">cream meta-analysis</a>).</p>
          <p>Two scales let you read the better studies. The Nürnberger-Müller grade runs 0 to 3: no dimpling; dimpling only when the skin is pinched (grade 1); visible standing but not lying (grade 2); visible standing and lying (grade 3). The Hexsel Cellulite Severity Scale scores five features — number and depth of depressions, raised lesions, laxity and grade — from 0 to 3 each for a total of 0 to 15, with mild 1–5, moderate 6–10 and severe 11–15 (<a href="https://pubmed.ncbi.nlm.nih.gov/19220646/" rel="noopener nofollow" target="_blank">Hexsel scale</a>); the collagenase trials used newer 0–4 clinician and patient photonumeric scales on which one point is a meaningful change (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7685927/" rel="noopener nofollow" target="_blank">photonumeric scales</a>). Then three questions of any before-and-after: was she standing, relaxed, in overhead light both times (lying down and a front flash erase cellulite); did the weight change; and how long after the last session was the "after" taken — because in this field, three weeks is the norm.</p>
        `,
      },
    ],
  },
  {
    id: 'context',
    title: 'Which cellulite do you have?',
    intro: 'Dimples, mattress and bulk look alike from across a room and answer to different things. Sort yours standing, pinching and lying down before you spend.',
    sections: [
      {
        id: 'type-dimpled',
        category: 'context',
        title: 'Dimpled: discrete pits on firm skin, often since the twenties',
        tldr: 'A countable number of round or linear depressions on otherwise smooth, firm skin, present standing and often lying, unchanged by weight, sometimes since adolescence. These are the bands. They do not respond to creams, respond briefly to energy, and respond durably to being cut, released or dissolved — the procedures with the best data on the page.',
        bodyHtml: `
          <p>The dimpled type is the purest expression of the anatomy: a taut band under each depression, healthy skin around it. It is the type the subcision devices were built for and tested on — the pivotal trials enrolled women with "moderate to severe" dimples on the buttocks and thighs, a BMI under 30 to 35, and firm skin (<a href="https://pubmed.ncbi.nlm.nih.gov/25742555/" rel="noopener nofollow" target="_blank">subcision pivotal study</a>). Count your dimples in overhead light, standing relaxed; if you can point to each one, and the skin between them is smooth and springs back when pinched, you are here.</p>
          <p>What does not work on it: fat loss (the lobules shrink, the tether stays), creams (nothing topical reaches a band), massage. What works briefly: shockwave and radiofrequency, which soften the band and thicken the skin over it for months. What works for years: cutting the band, with a blade, a laser fibre or an enzyme.</p>
        `,
      },
      {
        id: 'type-lax',
        category: 'context',
        title: 'Lax: a soft, wavy, mattress surface — the cellulite of the forties, and of the weight that left',
        tldr: 'A diffuse rippling rather than countable pits, skin that is thin and slow to snap back when pinched, a surface that flattens when you lift the tissue with a hand and worsens after weight loss or from 45. This is thin dermis draped over ordinary architecture. Cutting bands here can make it worse; tightening the envelope, thickening the dermis and — in the right patient — a biostimulator are the tools.',
        bodyHtml: `
          <p>When the dermis thins and the superficial fascia loosens, the surface stops hiding the lobules beneath it and ripples like a mattress. The one study that measured what weight loss does to cellulite found the answer depends on this: most women improved as their fat lobules shrank, but "the condition worsened for others" — those whose skin had lost its recoil and now hung looser over a smaller volume (<a href="https://pubmed.ncbi.nlm.nih.gov/16874227/" rel="noopener nofollow" target="_blank">weight-loss study</a>). Skin laxity is named in the newer scales as its own component, and the devices now measure it separately (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9292379/" rel="noopener nofollow" target="_blank">acoustic subcision trial</a>).</p>
          <p>The test is the pinch and the lift: skin that stays tented for a moment, and a surface that smooths when you gather the tissue upward, is laxity. Subcision alone cuts the few remaining tethers and can leave the skin sliding more freely; the tools here are the ones that heat and thicken — radiofrequency, ultrasound, the biostimulators — and, for large loose envelopes, the surgery in the <a href="/sagging-skin">sagging skin guide</a>.</p>
        `,
      },
      {
        id: 'type-fat',
        category: 'context',
        title: 'Bulky: heavy, swollen thighs where fat and fluid dominate',
        tldr: 'Cellulite that covers the whole thigh and hip, feels heavy, leaves sock marks, and tracks the scales. Here the lobules are full and often oedematous, the bands are secondary, and the first treatment is weight and movement — after which the dimples that remain belong to the first type and the loose skin to the second.',
        bodyHtml: `
          <p>Higher body-mass index is one of the three consistent risk factors, and in the subcision series a higher BMI correlated with a higher cellulite grade (<a href="https://pubmed.ncbi.nlm.nih.gov/31648594/" rel="noopener nofollow" target="_blank">112-woman subcision series</a>). Full lobules press harder against the bands; fluid retention — worse before a period and in hot weather — swells them further. The "cottage cheese" surface of a heavy thigh is mostly this.</p>
          <p>The order matters. Weight loss and resistance training shrink the lobules and tighten what lies under the skin; only then can you see which dimples are bands and how much of the surface is laxity. A subcision on a bulky thigh treats a moving target; the trials excluded BMI over 30–35 for that reason. The compression, drainage and "detox" industry lives on this type because fluid shifts show on a tape measure within a week — and return within a week.</p>
        `,
      },
      {
        id: 'grades',
        category: 'context',
        title: 'The grades: only when pinched, standing, or standing and lying',
        tldr: 'Grade 1 shows only when you pinch or contract the muscle; grade 2 shows standing and disappears lying down; grade 3 shows both ways. The Hexsel score adds how many, how deep, whether there are raised areas and how lax the skin is, for a 0–15 total. Trials count a one-point change as meaningful, and most treatments move one to two points.',
        bodyHtml: `
          <p>The Nürnberger-Müller grades are the ones a clinic will quote: grade 0 smooth in every position; grade 1 dimpling only on the pinch test or muscle contraction; grade 2 dimpling visible standing but not lying; grade 3 visible standing and lying, often with raised nodules (<a href="https://pubmed.ncbi.nlm.nih.gov/25940753/" rel="noopener nofollow" target="_blank">evidence-based review</a>). The Hexsel Cellulite Severity Scale is what the trials report: five items scored 0–3 — number of depressions, depth of depressions, raised lesions, laxity, and the grade above — giving 0–15, mild 1–5, moderate 6–10, severe 11–15 (<a href="https://pubmed.ncbi.nlm.nih.gov/19220646/" rel="noopener nofollow" target="_blank">Hexsel scale</a>).</p>
          <p>Reading the rows below, keep the numbers in scale: shockwave moved the score by about 2.5 points against sham; a single subcision moved a 0–5 version from 3.4 to 1.3; the collagenase trials counted a two-level change on a 0–4 scale as their primary endpoint and reached it in under 8% of women. A grade 1 rarely needs a needle; a grade 3 rarely needs less than one.</p>
        `,
      },
      {
        id: 'workup',
        category: 'context',
        title: 'The self-check: stand, pinch, lie, lift, and the photograph',
        tldr: 'Stand relaxed under an overhead light with your back to a mirror: count the dimples and note whether they are discrete pits or a wave. Pinch the skin: does it dimple only then (grade 1), and does it snap back or stay tented (laxity)? Lie down: what disappears is grade 2. Lift the tissue upward with a flat hand: what smooths out is laxity. Note the weight history and the family. Photograph standing, same light, same time of month, monthly.',
        bodyHtml: `
          <p>The examination a good clinic performs takes two minutes and a mirror. <strong>Stand:</strong> relaxed, feet apart, overhead light, back to a full-length mirror or a friend's camera. Count what you see: separate pits (bands) or a continuous ripple (laxity), and whether the whole thigh is involved (bulk). <strong>Pinch:</strong> a fold of skin between thumb and fingers on the outer thigh — dimpling that appears only now is grade 1; skin that stays tented for a second after release is lax. <strong>Lie down:</strong> what vanishes is grade 2, what remains is grade 3. <strong>Lift:</strong> place a flat hand below the area and push the tissue gently upward — dimples that stay are tethered bands, a surface that smooths is loose skin.</p>
          <p>Then the history that predicts the response: present since the teens and unchanged by weight (bands); arrived with a weight loss, a pregnancy or the mid-forties (laxity); tracking the scales and the cycle (bulk); a mother and sister with the same (all three). Photograph it standing, in the same light, at the same point in your cycle, monthly, without a flash — the flash flattens texture and is the oldest trick in the before-and-after trade. The self-check decides which of the three parts below you should even read.</p>
        `,
      },
    ],
  },
  {
    id: 'home',
    title: 'At home: weight, muscle, and what a cream can and cannot reach',
    intro: 'The daily work, graded honestly. Nothing applied to the skin reaches a band; the things that change the fat and the muscle beneath do change the surface.',
    sections: [
      {
        id: 'home-exercise-weight',
        category: 'home',
        title: 'Weight stability and resistance training: the base every trial builds on',
        tldr: 'In the one study that measured cellulite through supervised weight loss with 3D scanning, most women improved as fat lobules shrank — and some, with lax skin, got worse. Both shockwave randomised trials gave every participant a daily gluteal strength programme as the foundation, and in adolescents less exercise and higher BMI travelled with worse cellulite. Muscle under the fat and a stable weight above it are prevention and maintenance; they do not cut a band.',
        evidence: 'emerging',
        focus: 'fat',
        note: 'Best for: the bulky type first, every type as maintenance, and anyone about to pay for a procedure',
        sessions: '2–3 strength sessions a week, for good',
        downtime: 'None',
        cost: 'Free to €60 / month',
        bodyHtml: `
          <p>The weight-loss study followed women in medically supervised programmes with three-dimensional laser surface scanning, DXA body composition, 3D ultrasound and skin biomechanics: "the majority of subjects had an improvement in cellulite with weight loss, but the condition worsened for others" — the ones with looser skin and a smaller drop in fat (<a href="https://pubmed.ncbi.nlm.nih.gov/16874227/" rel="noopener nofollow" target="_blank">weight-loss study</a>). Fat loss shrinks the lobules that push up between the bands; it does nothing to the bands, and in a thin, lax dermis it can unmask them.</p>
          <p>Muscle matters because the fascia the bands anchor to lies over it: a fuller gluteal and hamstring muscle mass tightens the platform. The evidence is indirect — the two German shockwave trials gave both arms "a daily gluteal muscle strength program" as the baseline and tested shockwave on top of it (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3889306/" rel="noopener nofollow" target="_blank">shockwave trial</a>), and a 45-woman randomised trial found aerobic exercise alone changed body composition while the shockwave arm changed the cellulite score (<a href="https://pubmed.ncbi.nlm.nih.gov/33053245/" rel="noopener nofollow" target="_blank">exercise and shockwave trial</a>); in the adolescent study less exercise and higher BMI were independent predictors (<a href="https://pubmed.ncbi.nlm.nih.gov/35080006/" rel="noopener nofollow" target="_blank">adolescent study</a>). Squats, hip hinges and lunges twice a week, weight held steady rather than cycled, and the smoking that thins the dermis stopped: a modest visible effect, and the precondition for keeping any result the clinic sells you.</p>
        `,
      },
      {
        id: 'home-retinol',
        category: 'home',
        title: 'Topical retinol 0.3%: firmer skin in six months, dimples "little response or not responsive"',
        tldr: 'The one placebo-controlled trial of a cream that measured the skin rather than the tape measure: 15 women applied 0.3% retinol to one thigh and placebo to the other for six months. Elasticity rose 10.7% and viscosity fell 15.8% on the retinol side, most where the only sign was a mattress texture on pinching — while "the lumpy-bumpy appearance of the skin showed either little response or was not responsive". A thicker curtain over the springs; nothing for the springs.',
        evidence: 'emerging',
        focus: 'laxity',
        note: 'Best for: grade 1 and the lax type, as the one cream with a mechanism and a controlled trial',
        sessions: 'Nightly, judged at 6 months',
        downtime: 'Dryness at first',
        cost: '€15–40 / month',
        bodyHtml: `
          <p>Retinoids thicken the epidermis and build dermal collagen wherever they are applied, so a thicker dermis over the lobules is a reasonable target. The trial that tested it was designed to remove the massage effect that flatters every cream study: a left-right randomised comparison of 0.3% retinol against its vehicle on the thighs of 15 women aged 26–44 with mild-to-moderate cellulite, for six months. Skin elasticity increased 10.7% and viscosity decreased 15.8% on the retinol side, most prominently "where the mattress phenomenon was the only evidence of cellulite", with a 2- to 5-fold shift in connective-tissue cell phenotype on biopsy — and the visible dimpling barely changed (<a href="https://pubmed.ncbi.nlm.nih.gov/11702613/" rel="noopener nofollow" target="_blank">retinol trial</a>).</p>
          <p>That is the honest ceiling for anything in a tube: measurable firmness over months, no effect on a tethered pit. Used nightly over the whole thigh and buttock — a large area, so budget for it — a retinoid is a fair maintenance layer for the lax type and grade 1, and the <a href="/collagen-loss">collagen loss guide</a> covers what it does to the dermis in detail. It is stopped in pregnancy.</p>
        `,
      },
      {
        id: 'home-caffeine-creams',
        category: 'home',
        title: 'Caffeine, aminophylline and the "anti-cellulite" creams: a tape-measure effect, no dimple effect',
        tldr: 'A meta-analysis of 21 cosmetic-product studies could pool only seven controlled trials, all on thigh circumference — a measure of fat and fluid, not of dimples. The aminophylline trial that patients judged themselves found only 3 of 35 women noticed any difference from placebo. A hypertonic salt cream reduced thigh circumference against placebo in 30 women by drawing water out. Pleasant, harmless, and measured on the wrong thing.',
        evidence: 'limited',
        focus: 'fat',
        note: 'Best for: the massage that applying them involves; not for the dimples',
        sessions: 'Twice daily, indefinitely',
        downtime: 'None',
        cost: '€15–80 per tube',
        bodyHtml: `
          <p>Caffeine and its relatives (aminophylline, theophylline) stimulate fat-cell lipolysis in a dish, which is the whole basis of the category. The systematic review and meta-analysis of cosmetic products found 21 studies, most intra-patient, about half testing a single xanthine, herbal or retinoid, and could pool only seven controlled trials with more than ten patients per arm — on thigh circumference, because that is what the studies measured (<a href="https://pubmed.ncbi.nlm.nih.gov/23763635/" rel="noopener nofollow" target="_blank">cream meta-analysis</a>). The best-designed early trial randomised 69 women to twice-daily aminophylline cream against placebo cream, with or without a mechanical massage device, for 12 weeks, measuring girth, ultrasound fat depth and photographs: no statistical difference between legs in any group, and on the patients' own assessment only 3 of 35 aminophylline users thought the treated thigh looked better (<a href="https://pubmed.ncbi.nlm.nih.gov/10654755/" rel="noopener nofollow" target="_blank">aminophylline and Endermologie trial</a>).</p>
          <p>The newer entries follow the pattern: a double-blind trial of a hypertonic sodium-chloride cream in 30 women reduced thigh circumference against placebo at 12 weeks by pulling water out of the tissue (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11122878/" rel="noopener nofollow" target="_blank">hypertonic cream trial</a>) — a real, temporary, fluid effect that a hot day reverses. Nothing rubbed on the skin reaches a fascial band. If you enjoy the ritual, the ten minutes of massage is the active ingredient; the <a href="#safety-claims">claims section</a> explains the "clinically proven" on the box.</p>
        `,
      },
      {
        id: 'home-collagen-peptides',
        category: 'home',
        title: 'Oral collagen peptides, 2.5 g a day for six months: less waviness in normal-weight women, in one industry trial',
        tldr: 'In a double-blind, placebo-controlled trial of 105 women with moderate cellulite, 2.5 g of bioactive collagen peptides daily for six months reduced the cellulite degree and thigh skin waviness and improved dermal density against placebo in women of normal weight, with a smaller effect in overweight women; the subcutaneous borderline shortened but not significantly against placebo. Run by the manufacturer, never replicated.',
        evidence: 'emerging',
        focus: 'laxity',
        note: 'Best for: the lax and mild types, if the budget tolerates six months of a supplement with one trial',
        sessions: 'Daily for 6 months',
        downtime: 'None',
        cost: '€25–45 / month',
        bodyHtml: `
          <p>The rationale is the dermis again: peptide fragments of collagen taken by mouth raise the synthesis of collagen and matrix in the skin in several trials, and a denser dermis drapes more smoothly. The trial randomised 105 women aged 24–50 with moderate cellulite to 2.5 g of specific bioactive collagen peptides or placebo daily for six months, assessing cellulite degree, skin waviness by 3D imaging, dermal density by ultrasound and the length of the dermal-subcutaneous borderline. In normal-weight women the cellulite degree and thigh waviness fell significantly against placebo and dermal density improved; in overweight women the effect was present but smaller; the borderline shortened against baseline but not significantly against placebo (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4685482/" rel="noopener nofollow" target="_blank">collagen peptide trial</a>).</p>
          <p>It is a well-designed trial with the usual caveat — designed, funded and analysed by the peptide's maker, and never repeated by anyone else. The <a href="/collagen">collagen guide</a> grades the supplement across all its claims. Here, for the woman with mild or lax cellulite who is already taking it, it is a plausible small help; for the dimpled type it is irrelevant. Chokeberry juice and the other "cellulite supplements" have open-label studies of 29 women and less.</p>
        `,
      },
      {
        id: 'home-massage',
        category: 'home',
        title: 'Dry brushing, massage, vibration devices and lymphatic drainage: fluid moves, bands do not',
        tldr: 'A 60-woman randomised comparison of mechanical massage, manual lymphatic drainage and connective-tissue manipulation found each thinned the skinfold by 1.7–3 mm and took half a centimetre off the thigh; a 24-week study of a hand-held vibration device in 40 women reported a measured reduction in cellulite volume, funded by the maker; an open study of 14 weekly lymphatic drainage sessions in 20 women reported improvement. Twenty minutes of any massage moves fluid; none of it reaches the tether.',
        evidence: 'limited',
        focus: 'fat',
        note: 'Best for: the bulky, fluid-heavy type as a comfort measure; the brush is exfoliation, not treatment',
        sessions: 'Daily to weekly, indefinitely',
        downtime: 'None',
        cost: '€10 (a brush) to €150 (a device)',
        bodyHtml: `
          <p>The randomised comparison of three hands-on techniques — mechanical massage, manual lymphatic drainage and connective-tissue manipulation, 20 women each — measured body composition, circumferences and skinfolds: all three reduced thigh fat-fold thickness (1.66, 2.21 and 3.03 mm) and thigh circumference by about half a centimetre, with no group untreated and no dimple score at all (<a href="https://pubmed.ncbi.nlm.nih.gov/19627407/" rel="noopener nofollow" target="_blank">massage comparison trial</a>). A 40-woman, 24-week intra-individual study of a hand-held vibrational massager reported objective reductions in cellulite volume on 3D imaging that partly regressed when use stopped, in a study run by the device's manufacturer (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7317706/" rel="noopener nofollow" target="_blank">vibration device study</a>); 14 weekly sessions of manual lymphatic drainage improved 20 women in an open study (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4155948/" rel="noopener nofollow" target="_blank">lymphatic drainage study</a>).</p>
          <p>The pattern is consistent and the mechanism is honest: massage shifts fluid and the tape measure records it for a day or two. Dry brushing has no trial at all; it exfoliates. For a swollen, heavy thigh the twenty minutes feel good and are harmless. For a dimple, the band is still there when the towel comes off.</p>
        `,
      },
      {
        id: 'home-compression',
        category: 'home',
        title: 'Compression tights and "infrared" fabrics: one small double-blind trial, a fluid effect',
        tldr: 'Thirty women wore a compression pantyhose whose thread reflects long-wave infrared on one leg against a plain one on the other, double-blind, for months; the study reported improvement on the active side. Compression reduces oedema, which reduces the bulky type\'s swelling while it is worn. No effect on bands or laxity, and nothing survives taking the tights off.',
        evidence: 'limited',
        focus: 'fat',
        note: 'Best for: the fluid-heavy thigh on a long day standing; not a treatment',
        sessions: 'Daily wear',
        downtime: 'None',
        cost: '€30–90',
        bodyHtml: `
          <p>The one controlled trial is small and specific: 30 women aged 25–40 with grade II–III cellulite wore a "pantyhose"-model compression stocking made with long-wave-infrared-reflecting thread on one randomised leg and a conventional stocking on the other, double-blind (<a href="https://pubmed.ncbi.nlm.nih.gov/23786487/" rel="noopener nofollow" target="_blank">infrared stockings trial</a>). Whatever the fabric's radiation does, graduated compression reduces the fluid component of a swollen thigh in the same way it reduces ankle oedema — while it is on.</p>
          <p>Worn for a long day on your feet, medical-grade compression makes the bulky type look and feel better by evening and costs little. It is not a treatment for any of the three components, and the "shapewear that reduces cellulite" is compression with a marketing budget.</p>
        `,
      },
    ],
  },
  {
    id: 'clinic',
    title: 'Clinic, without a blade: shockwave, heat, gas and massage machines',
    intro: 'The non-invasive tier, graded on cellulite severity rather than the tape measure. One of them has a sham-controlled trial and a meta-analysis; the rest buy weeks to months.',
    sections: [
      {
        id: 'clinic-eswt',
        category: 'clinic',
        title: 'Shockwave (acoustic wave) therapy: a 2.5-point severity improvement against sham, a meta-analysis, and the "standout" of the 2025 review',
        tldr: 'In a double-blind, sham-controlled German trial, six sessions of focused shockwave plus gluteal training took the Hexsel score from 10.9 to 8.3 at 12 weeks — a 2.5-point gain over sham plus the same training. A meta-analysis of eleven studies in 297 women, five of them randomised, found both focused and radial devices effective; the 2025 systematic review of 24 randomised trials called it the standout, with a consistent 2.07-point reduction across four studies. Six to eight sessions, no downtime, months of effect.',
        evidence: 'moderate',
        focus: 'all',
        note: 'Best for: grade 1–2 of any type, the lax type, and anyone who wants a course without a needle',
        sessions: '6–8, one or two a week; repeated yearly',
        downtime: 'None; bruising possible',
        cost: '€80–150 / session',
        bodyHtml: `
          <p>Extracorporeal shockwave — the pressure pulses used for kidney stones and tendons at lower energy — is thought to soften the fibrous septae, stimulate collagen and improve microcirculation. It has the best non-invasive evidence in the field. The CelluShock trial was single-centre, double-blind and sham-controlled: women with moderate-to-severe cellulite received six sessions of focused shockwave (2,000 impulses, 0.35 mJ/mm²) or sham every one to two weeks, both arms with a daily gluteal strength programme; the Cellulite Severity Scale fell from 10.9 to 8.3 in the active group at 12 weeks, a 2.53-point improvement against sham (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3889306/" rel="noopener nofollow" target="_blank">sham-controlled shockwave trial</a>). The 2015 meta-analysis found eleven clinical studies in 297 women, five of them randomised in 123, with both focused and radial devices effective over six to eight sessions (<a href="https://pubmed.ncbi.nlm.nih.gov/26209782/" rel="noopener nofollow" target="_blank">shockwave meta-analysis</a>); an open-label Brazilian series of 12 sessions in 30 women reduced the severity score from 11.1 to 9.5, cut hip circumference by 3 cm and thinned the fat on MRI, with 89% satisfied (<a href="https://pubmed.ncbi.nlm.nih.gov/27997260/" rel="noopener nofollow" target="_blank">acoustic wave series</a>). The registered 2025 systematic review of 24 randomised trials named it the "standout intervention", with a consistent 2.07-point cellulite reduction across four studies (<a href="https://pubmed.ncbi.nlm.nih.gov/39547984/" rel="noopener nofollow" target="_blank">2025 systematic review</a>).</p>
          <p>The tier is moderate rather than strong because the trials are small, follow-up is short, and the effect fades over months — a course a year is the usual maintenance. It is painless-to-uncomfortable, needs no anaesthetic, and is the sensible first clinic step for the lax and mild dimpled types; a deep tethered pit still needs the band cut. Check the <a href="#safety-devices">device safety notes</a> for anticoagulants and pregnancy.</p>
        `,
      },
      {
        id: 'clinic-rf',
        category: 'clinic',
        title: 'Radiofrequency, with or without infrared and vacuum: a grade for weeks to months',
        tldr: 'The first controlled study treated one side of 20 women with combined radiofrequency, infrared and suction for eight sessions and graded the photographs against the untreated side; a 30-woman open study of monopolar radiofrequency plus targeted pressure energy moved 95% from moderate to mild by six months; the 2025 systematic review found a statistically significant reduction. Real, short-lived, and best for the lax type whose problem is the envelope.',
        evidence: 'emerging',
        focus: 'laxity',
        note: 'Best for: the lax, thin-skinned type; a course of 4–8, then maintenance',
        sessions: '4–8, weekly; maintenance every 3–6 months',
        downtime: 'None; warmth and redness for hours',
        cost: '€150–300 / session',
        bodyHtml: `
          <p>Radiofrequency heats the dermis and the fat beneath it to provoke collagen contraction and remodelling, and its trials measure what it can do: tighten the envelope over the lobules for a while. The 2005 controlled study gave 20 women eight biweekly treatments of bipolar radiofrequency, infrared light and suction massage to one randomly chosen thigh and buttock, the other side untreated, with blinded quartile grading of photographs and circumference measurements to six months (<a href="https://pubmed.ncbi.nlm.nih.gov/16537213/" rel="noopener nofollow" target="_blank">combined RF device trial</a>). The current generation pairs monopolar radiofrequency with targeted pressure energy: in 30 women given four treatments, cellulite severity improved from moderate to mild in 95%, with blinded evaluators reporting aesthetic improvement through six months — open-label, single-arm (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10243725/" rel="noopener nofollow" target="_blank">RF plus pressure energy study</a>). The 2025 systematic review found radiofrequency "exhibited a statistically significant reduction" across its randomised trials, behind shockwave (<a href="https://pubmed.ncbi.nlm.nih.gov/39547984/" rel="noopener nofollow" target="_blank">systematic review</a>).</p>
          <p>The reason for the tier is durability: the pathophysiology reviews class heat-based results as "inconsistent or short-term" because they treat the dermis and fat, not the band (<a href="https://pubmed.ncbi.nlm.nih.gov/37000912/" rel="noopener nofollow" target="_blank">pathophysiology review</a>). For the lax type it is the right tool for a season; for a tethered dimple it is a temporary softening. The <a href="/sagging-skin">sagging skin guide</a> covers the devices and their body-contouring cousins in depth.</p>
        `,
      },
      {
        id: 'clinic-ultrasound',
        category: 'clinic',
        title: 'High-intensity parallel ultrasound: one-and-a-half severity points in two sessions, in open-label series',
        tldr: 'Two sessions of a high-intensity, high-frequency parallel-beam ultrasound improved the Cellulite Severity Scale by 1.61 points and the laxity scale by 0.70 in 65 women at three months, with blinded reviewers picking the after-photograph 89% of the time; a 60-subject study with a denser handpiece agreed. Single-arm, manufacturer-supported, three-month follow-up — a promising tightening tool with no control group yet.',
        evidence: 'emerging',
        focus: 'laxity',
        note: 'Best for: the lax type wanting the fewest sessions; not the deep tethered pit',
        sessions: '2, a few weeks apart',
        downtime: 'None; tenderness for days',
        cost: '€500–1,500 / session',
        bodyHtml: `
          <p>Ultrasound at the intensities used for face-lifting delivers a controlled thermal injury to the dermis, and the same remodelling that lifts a brow can tighten a thigh. In a prospective multicentre study, 65 women (mean age 46, all skin types) had two treatments; at three months the Cellulite Severity Scale improved by 1.61 units, 89.2% improved on the global scale, the laxity score improved by 0.70, and two blinded reviewers agreed in identifying the post-treatment photographs in 89.2% of pairs, with no device-related adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/38754134/" rel="noopener nofollow" target="_blank">parallel ultrasound study</a>). A follow-on study of 60 subjects with a high-density handpiece reported similar blinded improvements in severity, aesthetic and laxity scales at three months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12705495/" rel="noopener nofollow" target="_blank">high-density handpiece study</a>).</p>
          <p>Two sessions instead of eight is the attraction; the missing control group and the three-month horizon are the reason for the tier. It belongs with the radiofrequency row as an envelope-tightener for the lax type, at a considerably higher price per session.</p>
        `,
      },
      {
        id: 'clinic-acoustic-subcision',
        category: 'clinic',
        title: 'Rapid acoustic pulse ("acoustic subcision"): one session, no anaesthetic, a 30% severity drop at 12 weeks',
        tldr: 'A single treatment with high-repetition acoustic pulses, delivered without anaesthesia, reduced the simplified Cellulite Severity Scale by 1.01 points (29.5%) in 56 women with moderate-to-severe cellulite at 12 weeks in the multicentre pivotal trial, and a retrospective review found 80% improved on laxity as well. The non-invasive attempt at what subcision does with a blade — single-arm, short follow-up, and newly cleared.',
        evidence: 'emerging',
        focus: 'all',
        note: 'Best for: the mixed dimpled-and-lax thigh in someone who will not have a blade; expect a partial result',
        sessions: '1; repeated as needed',
        downtime: 'None; bruising and tenderness',
        cost: '€800–1,500',
        bodyHtml: `
          <p>Rapid acoustic pulse technology fires pressure pulses at a rate designed to fracture the fibrous structures under the skin — a mechanical subcision without an incision. The pivotal trial treated 56 women with moderate-to-severe cellulite in one session with no anaesthesia; at 12 weeks the mean simplified Cellulite Severity Scale fell by 1.01 points, a 29.5% reduction, with global aesthetic improvement, participant satisfaction and a measured improvement in the laxity score (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9292379/" rel="noopener nofollow" target="_blank">acoustic subcision pivotal trial</a>). A retrospective analysis of 51 of those participants found at least two of three physicians correctly identifying the post-treatment photograph in 90% of sets and an 80.4% responder rate for laxity (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12570603/" rel="noopener nofollow" target="_blank">laxity review</a>).</p>
          <p>A one-point drop is roughly a third of what a blade subcision achieves in the same scale range, with none of the bruising week; the trade-off is honest and the follow-up is short. It sits between the shockwave course and the surgical rows — for the woman with both dimples and laxity who wants a single, needle-free session and accepts a partial answer.</p>
        `,
      },
      {
        id: 'clinic-carboxy',
        category: 'clinic',
        title: 'Carboxytherapy: carbon dioxide under the skin, weekly, for a grade — in small studies without a sham',
        tldr: 'Eight weekly sessions took ten women from grade III to grade II with a change in the fat layer on ultrasound; a 48-woman randomised comparison against phosphatidylcholine mesotherapy found both groups improved in grade and thigh circumference with no difference between them — and no untreated control. Painful enough that its own trials study analgesia for it.',
        evidence: 'emerging',
        focus: 'fat',
        note: 'Best for: the bulky, fluid-heavy type in a clinic that offers little else; a course, then it fades',
        sessions: '6–8, weekly',
        downtime: 'Crackling swelling for 20 minutes; bruising',
        cost: '€60–120 / session',
        bodyHtml: `
          <p>Injected carbon dioxide dilates local vessels and is claimed to break down fat and stimulate collagen. The pilot study gave ten women eight weekly sessions and reported a significant fall in cellulite degree from III to II, correlating with a reorganisation of the fat on ultrasound — ten women, no control (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5001663/" rel="noopener nofollow" target="_blank">carboxytherapy pilot</a>). The randomised comparison enrolled 48 women and gave six weekly sessions of carboxytherapy or phosphatidylcholine mesolipolysis: both groups improved significantly on a cellulite grading scale and thigh circumference at six months, with no difference between them — two active arms and no sham, so the shared improvement could be either treatment, the attention, or the season (<a href="https://pubmed.ncbi.nlm.nih.gov/29338476/" rel="noopener nofollow" target="_blank">carboxytherapy vs mesolipolysis trial</a>).</p>
          <p>The most rigorous randomised trials of carboxytherapy for cellulite are about how to make it hurt less — vibration anaesthesia and electrical currents during the injections (<a href="https://pubmed.ncbi.nlm.nih.gov/37038611/" rel="noopener nofollow" target="_blank">analgesia trial</a>) — which tells you something about the sessions. Cheap, widely offered, and unproven against doing nothing.</p>
        `,
      },
      {
        id: 'clinic-endermologie',
        category: 'clinic',
        title: 'Mechanical massage machines (Endermologie), low-level laser with massage, and the "detox" devices',
        tldr: 'The 1999 randomised trial found no measurable difference between thighs treated twice weekly with Endermologie and untreated thighs after 12 weeks, on girth, ultrasound fat depth or photographs. Low-level laser with massage reduced thigh fat on MRI and circumference by 0.6 cm in two trials — fat, not dimples. Twenty years of machines that move fluid and call it cellulite.',
        evidence: 'limited',
        focus: 'fat',
        note: 'Best for: nothing that a home massage does not do more cheaply',
        sessions: '10–15, twice weekly',
        downtime: 'None',
        cost: '€60–120 / session',
        bodyHtml: `
          <p>Motorised rollers and suction were the first machines sold for cellulite and remain the commonest. The trial that tested Endermologie properly randomised 69 women (52 completed) to twice-weekly treatment of one thigh and buttock for 12 weeks, with the other side as control, measuring body-mass index, girth at two points and fat depth by ultrasound, plus the surgeon's photographic assessment: "no statistical difference existed in measurements between legs for any of the treatment groups" (<a href="https://pubmed.ncbi.nlm.nih.gov/10654755/" rel="noopener nofollow" target="_blank">Endermologie trial</a>). The low-level dual-wavelength laser-and-massage devices did better on their own endpoints — 102 thighs randomised to laser-massage or massage alone showed a fat-pad reduction on MRI, and 83 women lost 0.64 cm of thigh circumference on the treated side against 0.20 cm on the untreated one (<a href="https://pubmed.ncbi.nlm.nih.gov/21275531/" rel="noopener nofollow" target="_blank">laser-massage study</a>) — but those endpoints are fat and fluid, and a 0.4 cm difference in girth is not a dimple.</p>
          <p>The systematic review of electrophysical agents found the "questionable methodological quality of many studies complicates the determination of effective treatments" (<a href="https://pubmed.ncbi.nlm.nih.gov/38695965/" rel="noopener nofollow" target="_blank">electrophysical agents review</a>). Vacuum-electromagnetic combinations, "lipo-massage", cryo-wraps and the rest inherit that verdict until one of them runs a sham-controlled trial on a severity scale.</p>
        `,
      },
    ],
  },
  {
    id: 'inj',
    title: 'Cutting, dissolving and rebuilding: the treatments that reach the band',
    intro: 'The only durable results in the literature come from releasing the septae. Here the studies are single-arm but long, the one placebo-controlled drug is gone, and the biostimulators are arriving with small trials.',
    sections: [
      {
        id: 'inj-subcision-tsgs',
        category: 'inj',
        title: 'Vacuum-guided subcision (tissue-stabilised guided subcision): severity 3.4 to 1.3 in one session, 93% improved, still measurable at three years',
        tldr: 'In the multicentre pivotal study, 55 women with moderate-to-severe cellulite had a single treatment in which each dimple is suctioned into a chamber, numbed and its band cut with a small blade at a fixed depth. The mean severity score fell from 3.4 to 1.3 at three months and 1.4 at one year, 47 of 55 (93%) improved by at least a point, satisfaction was 94% at a year, the three-year follow-up supported clearance for long-term improvement, and 112 Italian women were all satisfied at twelve months. Bruising in 99%; the best-documented durable treatment on the page.',
        evidence: 'moderate',
        focus: 'dimples',
        note: 'Best for: discrete, tethered dimples on firm skin, BMI under 30–35, in a patient who accepts a bruised fortnight for years of result',
        sessions: '1',
        downtime: '1–2 weeks of bruising and soreness',
        cost: '€2,500–5,000',
        bodyHtml: `
          <p>The device stabilises each dimple under vacuum in a small chamber, delivers local anaesthetic, and passes a microblade beneath the skin at a controlled depth of 6 or 10 mm to sever the band — subcision made reproducible. The pivotal study enrolled 55 women with moderate-to-severe cellulite for a single treatment: the mean Cellulite Severity Scale score of 3.4 fell to 1.3 at three months and 1.4 at one year, 47 subjects (93%) had at least a one-point improvement, satisfaction was 85% at three months and 94% at one year, and adverse events were transient and mild (<a href="https://pubmed.ncbi.nlm.nih.gov/25742555/" rel="noopener nofollow" target="_blank">pivotal subcision study</a>). Forty-five of the women were followed to three years with blinded panel assessment of photographs, and the results supported the device's clearance for "long-term reduction in the appearance of cellulite" (<a href="https://pubmed.ncbi.nlm.nih.gov/28661995/" rel="noopener nofollow" target="_blank">3-year follow-up</a>). A retrospective Italian series treated 122 women and assessed 112 at twelve months: masked evaluators picked the pre-treatment image every time, every patient was satisfied, and the dimple score improved by at least one point, with larger effects at higher baseline grades and BMI (<a href="https://pubmed.ncbi.nlm.nih.gov/31648594/" rel="noopener nofollow" target="_blank">112-woman series</a>).</p>
          <p>The meta-analysis that compared subcision with the collagenase injection across 14 studies and 1,254 patients puts the cost in numbers: bruising in 99%, pain requiring analgesics in 60%, induration in 7%, skin discolouration in 7% — a fortnight of purple thighs for the most durable result in the field (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11191026/" rel="noopener nofollow" target="_blank">subcision vs collagenase meta-analysis</a>). The tier is moderate because every study is single-arm — no one has run a sham subcision — but the length and consistency of the follow-up is unmatched here. Candidates are the dimpled type on firm skin; the lax type can end up looser. Device availability varies by country and year; the technique — subcision through a small entry with a guided blade — is what to ask for.</p>
        `,
      },
      {
        id: 'inj-subcision-tvs',
        category: 'inj',
        title: 'Targeted verifiable subcision: the surgeon feels the band, cuts it, and checks the dimple is gone — 1.5 points in 74 women',
        tldr: 'A newer hand-held device enters through one incision in the buttock crease, hooks the specific septa under each marked dimple while the surgeon applies tension to reproduce it, and cuts them one by one, verifying the release in real time. In the pivotal study 74 women had one procedure and improved a mean 1.5 points on the severity scale at 90 days with no device-related serious events; an earlier 20-woman study had 95% at the endpoint and 100% much improved at 180 days. Six-month data, single-arm, promising.',
        evidence: 'emerging',
        focus: 'dimples',
        note: 'Best for: dimples of the tethered type in a clinic offering it; ask how many the surgeon has done',
        sessions: '1',
        downtime: '1–2 weeks of bruising',
        cost: '€3,000–6,000',
        bodyHtml: `
          <p>The refinement over the vacuum device is selectivity. A light-guided hook is passed under the skin from a single entry point in the gluteal crease; tension on the skin makes each target dimple reappear, the septa responsible are identified by feel and then severed, and the surgeon confirms the dimple has released before moving on. The pilot study of ten women established feasibility with one incision in eight of them and no serious events (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8994074/" rel="noopener nofollow" target="_blank">pilot study</a>); the 20-woman multicentre study met its endpoint — a mean one-point severity reduction at 180 days — in 95%, with all 19 assessed rated much or very much improved (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9342681/" rel="noopener nofollow" target="_blank">20-woman study</a>); the pivotal study treated 74 women aged 21–55 with a BMI under 30 at nine sites, with a mean Cellulite Severity Scale improvement of 1.5 points at 90 days and no device-related serious adverse events (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9897188/" rel="noopener nofollow" target="_blank">pivotal study</a>). A 2026 series combined it with helium-plasma radiofrequency to treat the laxity at the same session in 22 patients, with 77–82% improved at six months on imaging (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13112431/" rel="noopener nofollow" target="_blank">combined series</a>).</p>
          <p>The logic — cut only the bands that are actually pulling — is the right one, and the early numbers match the older device's. The tier is emerging because the follow-up is months rather than years and the studies are the manufacturer's; the same bruising and the same patient selection apply.</p>
        `,
      },
      {
        id: 'inj-collagenase',
        category: 'inj',
        title: 'Collagenase injections (CCH-aaes): the only placebo-controlled drug — a small effect in 843 women, and withdrawn',
        tldr: 'Two identical phase 3 trials randomised 843 women with moderate-to-severe buttock cellulite to three sessions of injected collagenase or placebo: a two-level improvement on both the clinician and patient scales in 7.6% vs 1.9% and 5.6% vs 0.5%, a one-level improvement in 37% vs 18% and 42% vs 11%, with bruising in 89% and skin discolouration in 16%. Approved in the US in 2020, never in Europe, and discontinued by its maker in 2023. The best trials in the field, attached to a modest effect and a product you cannot buy.',
        evidence: 'moderate',
        focus: 'dimples',
        note: 'Best for: reading, to calibrate every other claim on the page against a real placebo group',
        sessions: '3, three weeks apart (historical)',
        downtime: 'Bruising for weeks; discolouration for months',
        cost: 'Not available in Europe',
        bodyHtml: `
          <p>Collagenase clostridium histolyticum dissolves collagen, and injected into a dimple it dissolves the band. It is the one cellulite treatment ever put through large, double-blind, placebo-controlled trials. In RELEASE-1 and RELEASE-2, 843 women with moderate-to-severe buttock cellulite received up to three sessions of 0.84 mg per area or placebo; at day 71 the primary endpoint — a two-level improvement on both the clinician- and patient-reported photonumeric scales — was met by 7.6% vs 1.9% and 5.6% vs 0.5%, and a one-level composite improvement by 37.1% vs 17.8% and 41.6% vs 11.2% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8078112/" rel="noopener nofollow" target="_blank">RELEASE-1 and -2</a>). The pooled analysis put the odds of a two-level response at 5.9 times placebo (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9132528/" rel="noopener nofollow" target="_blank">pooled analysis</a>); the phase 2b trial in 375 women had reached 10.6% vs 1.6% and 44.6% vs 17.9% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6693937/" rel="noopener nofollow" target="_blank">phase 2b trial</a>), and an open-label extension found the response durable in those who had achieved it (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7787338/" rel="noopener nofollow" target="_blank">durability study</a>).</p>
          <p>Read those numbers twice. Against a real placebo, fewer than one woman in ten reached the two-level change the trial called success, and one in five placebo-injected women reached a one-level change on her own — the size of the expectation effect every uncontrolled study on this page is swimming in. The price was bruising in 89% and pain needing analgesics in 74%, with skin discolouration in 16% that could last months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11191026/" rel="noopener nofollow" target="_blank">meta-analysis of adverse events</a>). The product was approved in the United States in 2020, never authorised in the EU, and its manufacturer stopped selling it in 2023. It stays on the page because it is the yardstick.</p>
        `,
      },
      {
        id: 'inj-laser-1440',
        category: 'inj',
        title: 'Subdermal 1,440 nm laser with a side-firing fibre: one session, 96% improved at six months, 91% still identifiable at a year',
        tldr: 'A fibre passed under the skin melts the fat lobule, cuts the band and heats the underside of the dermis in one anaesthetised session. In a 57-patient multicentre study, blinded evaluators rated at least a one-point improvement in 96% of treated sites at six months and correctly identified the post-treatment photographs in 95%; at twelve months they still identified 91%, with mean improvement scores of 1.4 for dimples and 1.0 for contour. Single-arm, and a 24-month single-centre series agreed.',
        evidence: 'moderate',
        focus: 'all',
        note: 'Best for: grade 2–3 with both dimples and a thin dermis, from a surgeon who does the three-step technique regularly',
        sessions: '1',
        downtime: '1–2 weeks of bruising and swelling; compression garment',
        cost: '€3,000–6,000',
        bodyHtml: `
          <p>The laser approach treats all three components at once: a 1,440 nm fibre with a side-firing tip and a temperature-sensing cannula is passed subdermally under local anaesthetic to release the septae, reduce the herniating fat and heat the dermis to thicken it. The multicentre study treated 57 patients in a single three-step session; at six months blinded evaluators rated at least a one-point improvement in 96% of treated sites and picked the baseline from the post-treatment photograph in 95% of cases, with at least 90% of patients and physicians satisfied (<a href="https://pubmed.ncbi.nlm.nih.gov/23536056/" rel="noopener nofollow" target="_blank">57-patient study</a>). At twelve months evaluators still identified 91% of baseline photographs, with mean improvement scores of 1.4 for dimples and 1.0 for contour irregularities (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5127477/" rel="noopener nofollow" target="_blank">12-month results</a>). A single-centre series of 24 women followed objective measures — elasticity, ultrasound dermal thickness, histology — for two years and found the benefit persisting in those who returned (<a href="https://pubmed.ncbi.nlm.nih.gov/24114294/" rel="noopener nofollow" target="_blank">24-month series</a>).</p>
          <p>It is more invasive than the blade devices — an operating-room procedure with a compression garment after — and, like them, has never been compared with a sham. The reviews rank it with subcision and shockwave as the modalities with "the most beneficial results" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6374708/" rel="noopener nofollow" target="_blank">2019 treatment review</a>). The surgeon's experience with the temperature endpoints is the safety variable: too hot and the skin burns from beneath.</p>
        `,
      },
      {
        id: 'inj-plla',
        category: 'inj',
        title: 'Poly-L-lactic acid with subcision: the one placebo-controlled injectable still on the market',
        tldr: 'Thirty-one women were randomised to three monthly sessions of subcision plus either poly-L-lactic acid or saline into the buttocks or thighs; at three and six months the PLLA arm had significantly better blinded global improvement and severity scores and higher satisfaction. A 2026 open-label study of the branded product alone in the posterior thighs reported 97% improved at nine months. Small, real, and the biostimulator with the best cellulite data — for the lax type.',
        evidence: 'emerging',
        focus: 'laxity',
        note: 'Best for: the lax, thin-skinned type, especially after subcision has released the dimples',
        sessions: '2–3, a month apart',
        downtime: 'Bruising and swelling for a week',
        cost: '€600–900 per vial; 2–6 vials a session',
        bodyHtml: `
          <p>Poly-L-lactic acid provokes new collagen over months wherever it is placed — the mechanism the <a href="/collagen-loss">collagen loss guide</a> grades for the face — and a thicker, better-supported dermis over the lobules is exactly what the lax type lacks. The randomised, double-blind, placebo-controlled study enrolled 31 healthy women and gave each three treatments four weeks apart of subcision combined with either PLLA or saline injections into the buttocks or thighs; at three and six months the PLLA group showed statistically significant improvement on the global aesthetic scale rated by blinded investigators, on the Cellulite Severity Scale and on satisfaction, with tolerable treatments and no severe adverse events (<a href="https://pubmed.ncbi.nlm.nih.gov/33938690/" rel="noopener nofollow" target="_blank">PLLA vs saline trial</a>). The 2026 manufacturer study injected the branded product alone into the posterior thighs of women with grade 2–4 cellulite over one to three sessions: 28 of 29 (97%) improved on the global scale at nine months, with high satisfaction through twelve (<a href="https://pubmed.ncbi.nlm.nih.gov/42406356/" rel="noopener nofollow" target="_blank">PLLA thigh study</a>).</p>
          <p>Diluted calcium hydroxylapatite is the other biostimulator used the same way: three sessions by a cannula subcision technique cut the number of visible dimples by 54% at 14 weeks in 24 women, open-label (<a href="https://pubmed.ncbi.nlm.nih.gov/38253886/" rel="noopener nofollow" target="_blank">diluted CaHA study</a>), and one session with microfocused ultrasound improved a 20-woman retrospective series by 4.5 points with new collagen on biopsy (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5548562/" rel="noopener nofollow" target="_blank">ultrasound plus CaHA</a>). Both are off-label on the body, both are irreversible, and the nodule risk in the buttock is real — see Safety. Large areas need many vials; ask for the total before the first one.</p>
        `,
      },
      {
        id: 'inj-fat-surgery',
        category: 'inj',
        title: 'Liposuction, fat grafting and radiofrequency-assisted lipolysis: for contour, with cellulite as a frequent casualty',
        tldr: 'Liposuction removes lobules, not bands, and post-liposuction skin irregularities are common enough to have their own classification; fat grafting fills a deep depression and has combined series with laser but no trial of its own; radiofrequency-assisted lipolysis tightened the fascial system and improved severity scores in a ten-patient report. Surgery for shape, not for dimples — and a way to acquire new ones.',
        evidence: 'limited',
        focus: 'fat',
        note: 'Best for: a contour problem that happens to have cellulite on it, from a surgeon who will say so',
        sessions: '1',
        downtime: '2–4 weeks; compression garment',
        cost: '€3,000–8,000',
        bodyHtml: `
          <p>Liposuction is the wrong tool for cellulite and has always been: it removes fat between the bands and leaves the tethers, and it thins the layer that hides the architecture. Post-liposuction skin irregularities are common enough that a 2024 paper proposed a definition and classification for them, noting "their similarities to cellulite" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11022845/" rel="noopener nofollow" target="_blank">post-liposuction irregularities</a>). The evidence for treating them afterwards is a randomised comparison of shockwave and lymphatic drainage in 30 women with grade 3 cellulite after thigh liposuction, both with topical retinol (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8371620/" rel="noopener nofollow" target="_blank">post-liposuction trial</a>).</p>
          <p>Fat grafting can fill a deep, isolated depression once the band has been released, and combined subdermal laser-plus-fat series exist from 2008 (<a href="https://pubmed.ncbi.nlm.nih.gov/19083594/" rel="noopener nofollow" target="_blank">laser and fat series</a>); radiofrequency-assisted lipolysis, which heats and aspirates through a cannula, improved blinded severity scores in a ten-patient report by tightening the superficial fascial system (<a href="https://pubmed.ncbi.nlm.nih.gov/35877933/" rel="noopener nofollow" target="_blank">RFAL report</a>). A case of fat embolism after liposuction combined with helium radiofrequency and cellulite subcision in one session is the reminder that stacking procedures multiplies their risks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12378449/" rel="noopener nofollow" target="_blank">fat embolism case</a>). Contour surgery is a body-shape decision; the <a href="/sagging-skin">sagging skin guide</a> covers when loose skin needs a lift rather than a device.</p>
        `,
      },
    ],
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The thigh forgives more than the face, and the industry takes advantage of it. What actually goes wrong, and how to read what you are sold.',
    sections: [
      {
        id: 'safety-subcision',
        category: 'safety',
        title: 'Subcision and the laser: bruising in 99%, staining, seromas, over-release, and the fat embolism that stacking causes',
        tldr: 'Across 789 subcised patients in the meta-analysis, bruising occurred in 99%, pain needing analgesics in 60%, induration in 7% and discolouration in 7%; the specific failures are a haemosiderin stain that outlasts the bruise, a seroma, a released dimple that becomes a soft depression, and skin that slides more loosely when too many tethers are cut in a lax thigh. Candidates have firm skin, discrete dimples and a BMI under 30–35, and have one procedure at a time.',
        bodyHtml: `
          <p>Every band that is cut bleeds, which is why the pooled bruising rate for subcision is 99% and for the collagenase injection 89%, with analgesics needed by 60% and 74% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11191026/" rel="noopener nofollow" target="_blank">meta-analysis of adverse events</a>). Most bruises fade in two to three weeks; some leave a brown haemosiderin stain for months, more often in darker skin. Induration (a firm lump at the release site) and seromas (a pocket of fluid) occur in a few percent and usually settle; the ones that do not are drained. The subtler failures are anatomical: release too much in a lax thigh and the skin slides more freely — the reason the trials excluded higher BMIs and the reason the lax type belongs with the tightening rows first; release at the wrong depth and a dimple becomes a soft depression that needs fat to fill.</p>
          <p>The subdermal laser adds thermal risk — an internal burn if the temperature endpoints are ignored — and a compression garment for weeks. The fat-embolism case report after liposuction, helium radiofrequency and subcision in one session is the argument against combining invasive procedures on one day (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12378449/" rel="noopener nofollow" target="_blank">fat embolism case</a>). Anticoagulants, a bleeding tendency, active infection, pregnancy, and unrealistic expectations of a grade 3 becoming a grade 0 are the exclusions a careful clinic applies before it takes a deposit.</p>
        `,
      },
      {
        id: 'safety-devices',
        category: 'safety',
        title: 'Energy devices: burns, fat loss in the wrong place, and who is holding the handpiece',
        tldr: 'The reported adverse events for non-invasive body contouring, cellulite and muscle-stimulation devices in the FDA database over 2015–2021 were dominated by burns, blistering, scarring and unintended fat changes, many from non-physician operators. Radiofrequency and ultrasound are heat; shockwave is pressure; each has exclusions — implants and pacemakers, pregnancy, anticoagulants, a tan for the light devices — and a treatment that hurts more than the operator says it should is a treatment to stop.',
        bodyHtml: `
          <p>Non-invasive does not mean harmless. A review of the FDA's device-experience database for non-invasive body contouring, cellulite treatment and electromagnetic muscle stimulation from 2015 to 2021 catalogued the reported injuries — thermal burns and blisters, hyperpigmentation and scarring, paradoxical fat changes, nerve symptoms — and noted that these procedures are "highly accessible, even offered at medical spas by nonphysician operators" (<a href="https://pubmed.ncbi.nlm.nih.gov/35916105/" rel="noopener nofollow" target="_blank">FDA adverse-event review</a>). Radiofrequency and high-intensity ultrasound deposit heat under the skin, and the safeguards are temperature monitoring, an operator trained on that device, and a patient who reports pain honestly; shockwave is contraindicated over implants, in pregnancy and on anticoagulants, and bruises readily.</p>
          <p>Ask who will operate the machine and how many thighs they have treated with it; ask what the endpoint feels like and what happens if it hurts more; and treat a clinic that offers a "cellulite package" of six different technologies as one that has no idea which of them works.</p>
        `,
      },
      {
        id: 'safety-injectables',
        category: 'safety',
        title: 'Injectables on the body: the collagenase stain, biostimulator nodules, and the mesotherapy cocktail',
        tldr: 'The collagenase injection caused skin discolouration in 16% of treated women, sometimes lasting months, and was withdrawn; poly-L-lactic acid and calcium hydroxylapatite are off-label on the body, irreversible, and form nodules in a few percent when injected too superficially or in too much volume; the phosphatidylcholine "mesolipolysis" cocktails are unlicensed, and an oleoma two years after an unknown injection is in the literature. Ask what is in the syringe and who registered it.',
        bodyHtml: `
          <p>The withdrawn collagenase product illustrates the class risk: 16% of women developed skin discolouration after injection, sometimes lasting months, and management of the bruising became its own literature (<a href="https://pubmed.ncbi.nlm.nih.gov/36237149/" rel="noopener nofollow" target="_blank">bruising management review</a>). The biostimulators — poly-L-lactic acid and diluted calcium hydroxylapatite — are approved for the face and used off-label on the buttocks and thighs; they cannot be dissolved, and nodules or papules form when the product is placed too shallow, too concentrated or without the massage and dilution the technique requires, in a few percent of treatments. Both need many vials on the body, and the total cost is decided before the first syringe.</p>
          <p>The mesotherapy solutions injected for "lipolysis" — phosphatidylcholine, deoxycholate mixtures, caffeine and plant extracts — are not licensed for cellulite anywhere in Europe; the human fat-cell assay that tested them found variable lipolytic activity (<a href="https://pubmed.ncbi.nlm.nih.gov/17954040/" rel="noopener nofollow" target="_blank">mesotherapy solution assay</a>), and a report of oleomas — inflamed fat lumps — on the thighs and buttocks two years after injection of an unknown substance is the outcome no consent form mentioned (<a href="https://pubmed.ncbi.nlm.nih.gov/22250624/" rel="noopener nofollow" target="_blank">oleoma case</a>). If the clinic cannot name the product, its manufacturer and its licence, the answer is no.</p>
        `,
      },
      {
        id: 'safety-expectations',
        category: 'safety',
        title: 'Durability: what fades in weeks, what holds for years, and why weight decides the rest',
        tldr: 'The randomised trials in this field followed patients for a mean of 3.3 weeks; the shockwave effect lasts months; the radiofrequency and ultrasound effects a season; the band-cutting procedures one to three years in the studies that looked. Every result is undone by a weight gain and altered by a weight loss, and no treatment prevents new dimples from forming over the decades. Budget for maintenance or choose the procedure with the longest data.',
        bodyHtml: `
          <p>The 2025 systematic review's mean follow-up of 3.3 weeks is the single most useful number for reading a cellulite brochure (<a href="https://pubmed.ncbi.nlm.nih.gov/39547984/" rel="noopener nofollow" target="_blank">systematic review</a>). Against it: the vacuum-guided subcision's one- and three-year data (<a href="https://pubmed.ncbi.nlm.nih.gov/28661995/" rel="noopener nofollow" target="_blank">3-year follow-up</a>), the 1,440 nm laser's twelve months (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5127477/" rel="noopener nofollow" target="_blank">12-month results</a>), the collagenase extension's durability in responders (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7787338/" rel="noopener nofollow" target="_blank">durability study</a>) — and, for everything non-invasive, months.</p>
          <p>Two things no treatment controls. Weight: a gain refills the lobules and re-tensions every band; a loss, in lax skin, can reveal what was hidden. And time: new bands tighten and the dermis keeps thinning, so a subcised thigh at 35 is not a smooth thigh at 55 without the daily work. The honest budget is a course a year for the non-invasive rows, or one procedure and its maintenance for the invasive ones — never a single session and a photograph three weeks later.</p>
        `,
      },
      {
        id: 'safety-claims',
        category: 'safety',
        title: 'How to read "clinically proven to reduce cellulite by 47%"',
        tldr: 'Ask what was measured (thigh circumference and skinfold are fat and fluid; only a severity scale is cellulite), how she was photographed (lying down and a front flash erase it; standing in overhead light shows it), against what (an untreated side or a sham, not "before"), how long after the last session (three weeks is the industry norm), and who paid. The cream, wrap and machine studies fail most of these; the subcision and shockwave studies pass the ones that matter.',
        bodyHtml: `
          <p>The cosmetic-product meta-analysis is the template for the genre: 21 studies, mostly intra-patient, pooled on thigh circumference because that is what they measured (<a href="https://pubmed.ncbi.nlm.nih.gov/23763635/" rel="noopener nofollow" target="_blank">cream meta-analysis</a>). Circumference is fat and water; a diuretic reduces it. The question that exposes the claim is whether a validated cellulite scale — Hexsel, Nürnberger-Müller, the photonumeric scales — was scored by someone blinded, on photographs taken standing, relaxed, in the same overhead light, with the weight recorded (<a href="https://pubmed.ncbi.nlm.nih.gov/25940753/" rel="noopener nofollow" target="_blank">evidence-based review</a>).</p>
          <p>Then the comparison: the collagenase trials showed that 18% of women injected with placebo improved a level on their own, and that any uncontrolled study inherits that gift. Then the timing: three weeks after the last of eight sessions is not a result, it is a treatment still in progress. And the funding: almost every device and product study here was run by its maker, which does not make it wrong, and does make the control group the thing to look for. The rows on this page were graded by exactly those questions; use them on the next brochure.</p>
        `,
      },
    ],
  },
  {
    id: 'faq',
    title: 'Frequently asked questions',
    intro: 'Quick answers to what people actually ask.',
    sections: [
      {
        id: 'faq-fat',
        category: 'faq',
        title: 'Is cellulite just fat?',
        tldr: 'No. Thin women have it and 97.6% of dimples sit over a fibrous band; fat fills the spaces between the bands and makes it worse, but the architecture is the cause.',
        bodyHtml: `
          <p>The ultrasound study found a fibrous band under almost every dimple (<a href="https://pubmed.ncbi.nlm.nih.gov/34432683/" rel="noopener nofollow" target="_blank">ultrasound anatomy</a>), and the review of every treatment concluded that fat and dermis are "not the primary etiologies" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7515470/" rel="noopener nofollow" target="_blank">pathophysiology review</a>). Fat is the filling; the bands are the quilting. Losing fat flattens the cushions; it does not remove the stitches.</p>
        `,
      },
      {
        id: 'faq-men',
        category: 'faq',
        title: 'Why do men almost never get it?',
        tldr: 'Different architecture: male septae cross-hatch and hold the surface flat, and androgens store fat elsewhere. Men on anti-androgen treatment can develop it.',
        bodyHtml: `
          <p>The female pattern — columns of fat between near-vertical or oblique bands under a thinner dermis — is set by estrogen; the male pattern is a criss-cross lattice under thicker skin, with fat preferentially stored at the abdomen. The rare men with cellulite are typically those with low androgen states or on hormonal treatment, which is the natural experiment that confirms the hormonal origin (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4756872/" rel="noopener nofollow" target="_blank">comprehensive review</a>).</p>
        `,
      },
      {
        id: 'faq-weight',
        category: 'faq',
        title: 'Will losing weight get rid of it?',
        tldr: 'It improves most women and worsens some — the ones whose skin is lax. Lose it slowly, lift weights while you do, and expect the dimples that remain to need a band treatment.',
        bodyHtml: `
          <p>The supervised weight-loss study is the only one with real measurements: "the majority of subjects had an improvement in cellulite with weight loss, but the condition worsened for others" (<a href="https://pubmed.ncbi.nlm.nih.gov/16874227/" rel="noopener nofollow" target="_blank">weight-loss study</a>). The difference was skin recoil. A large or fast loss — including on the GLP-1 medicines — can leave a thinner dermis draped over the same bands; resistance training and a slower rate protect against it, and the <a href="/sagging-skin">sagging skin guide</a> covers the skin that does not shrink back.</p>
        `,
      },
      {
        id: 'faq-exercise',
        category: 'faq',
        title: 'Do squats and glute exercises help?',
        tldr: 'Indirectly and modestly: muscle tightens the platform the bands anchor to, and every good trial used a strength programme as its foundation. No exercise cuts a band.',
        bodyHtml: `
          <p>Both German shockwave trials gave every participant "a daily gluteal muscle strength program" and measured the device's effect on top of it (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3889306/" rel="noopener nofollow" target="_blank">shockwave trial</a>); a 45-woman trial found aerobic exercise alone changed body composition but the cellulite score moved in the shockwave arm (<a href="https://pubmed.ncbi.nlm.nih.gov/33053245/" rel="noopener nofollow" target="_blank">exercise trial</a>). A fuller gluteal muscle under a smaller fat layer reads as smoother; a tethered dimple over it is still a dimple. Lift for the base, and treat the bands for the pits.</p>
        `,
      },
      {
        id: 'faq-creams',
        category: 'faq',
        title: 'Is there any cream worth buying?',
        tldr: 'A retinoid for the skin\'s thickness, judged at six months; the rest measure the tape, not the dimples.',
        bodyHtml: `
          <p>Retinol 0.3% improved elasticity by 10.7% against placebo in six months while the dimples barely changed (<a href="https://pubmed.ncbi.nlm.nih.gov/11702613/" rel="noopener nofollow" target="_blank">retinol trial</a>); the caffeine-class creams were pooled on thigh circumference (<a href="https://pubmed.ncbi.nlm.nih.gov/23763635/" rel="noopener nofollow" target="_blank">cream meta-analysis</a>); aminophylline did nothing that 3 of 35 women could see (<a href="https://pubmed.ncbi.nlm.nih.gov/10654755/" rel="noopener nofollow" target="_blank">aminophylline trial</a>). Buy a retinoid if you want a cream, and the sunscreen that keeps the dermis it builds.</p>
        `,
      },
      {
        id: 'faq-best',
        category: 'faq',
        title: 'What is the single most effective treatment?',
        tldr: 'For tethered dimples, cutting the band: vacuum-guided or targeted subcision, or the subdermal laser. For a lax, wavy surface, shockwave then tightening. For a heavy thigh, weight first.',
        bodyHtml: `
          <p>The pathophysiology reviews and the treatment reviews agree: targeting the septae is "the strategy most likely to provide durable improvement" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7515470/" rel="noopener nofollow" target="_blank">pathophysiology review</a>), and "acoustic wave therapy, subcision, and the 1440-nm Nd:YAG minimally invasive laser have demonstrated the most beneficial results" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6374708/" rel="noopener nofollow" target="_blank">treatment review</a>). Which of them is right for you is decided by the self-check, not by what the nearest clinic owns.</p>
        `,
      },
      {
        id: 'faq-how-long',
        category: 'faq',
        title: 'How long do results last?',
        tldr: 'Creams and machines: weeks to a season. Shockwave: months. Subcision and the laser: one to three years in the studies. All of it: until the next weight gain.',
        bodyHtml: `
          <p>The vacuum-guided subcision held its score from three months to one year and was still supported at three (<a href="https://pubmed.ncbi.nlm.nih.gov/28661995/" rel="noopener nofollow" target="_blank">3-year follow-up</a>); the laser held to twelve months in 91% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5127477/" rel="noopener nofollow" target="_blank">12-month laser results</a>); the shockwave trials measured at 12 weeks and clinics repeat the course yearly; the radiofrequency and ultrasound series stop at three to six months because that is when the effect does. Weight and time keep working against all of them.</p>
        `,
      },
      {
        id: 'faq-cost-ladder',
        category: 'faq',
        title: 'What does it all cost?',
        tldr: 'Free to €8,000: strength training and a retinoid at the bottom, a shockwave course in the middle, one band-releasing procedure at the top.',
        bodyHtml: `
          <p>Indicative European private prices, to be confirmed in writing. <strong>Free to €40 a month:</strong> resistance training, a stable weight, a retinoid, a sunscreen — the base of every result on the page. <strong>€25–90:</strong> a collagen peptide month, compression tights, a massage device — comfort and small effects. <strong>€500–1,200 per course:</strong> six to eight shockwave sessions, the best non-invasive buy, repeated yearly. <strong>€600–2,400 per course:</strong> radiofrequency or carboxytherapy courses; a single ultrasound or acoustic-subcision session. <strong>€1,200–5,000:</strong> a biostimulator course on the thighs, by the vial. <strong>€2,500–8,000 once:</strong> vacuum-guided or targeted subcision, the subdermal laser, or contour surgery. Spend from the bottom up, and spend at the top only on the type it was built for.</p>
        `,
      },
    ],
  },
];

export const focusLabels: Record<FocusArea, string> = {
  dimples: 'For dimples',
  laxity: 'For laxity',
  fat: 'For fat & fluid',
  all: 'All types',
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

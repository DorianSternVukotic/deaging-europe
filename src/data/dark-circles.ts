/**
 * Dark circles guide — single source of truth (problem template).
 *
 * Consumed by /dark-circles. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: "dark circles" is three different problems wearing one
 * name — melanin in the skin, blood showing through it, and a shadow cast
 * by a groove or a bag — and almost everyone has a mix. The treatments
 * are graded against the type they were tested on, because a peel cannot
 * lighten a shadow and a filler cannot lift pigment. The honest ranking:
 * a hyaluronic-acid filler for the hollow has the only large randomised
 * trials on the page; peels, the pigment lasers, carboxytherapy and the
 * injected vitamin cocktails have small trials with mixed winners; the
 * creams have open-label studies and one split-face trial each; and the
 * eye-cream aisle rests on instrument readings from eight-week studies
 * that no one controlled.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'pigment' | 'vascular' | 'structural' | 'all' | 'general';

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
  'Dark circles are three problems with one name: melanin in the thinnest skin on the body, blue-purple blood showing through it, and a shadow thrown by the tear-trough groove or a bag above it. In 1,000 Singapore clinic patients the vascular type was commonest (42%), then inherited pigment (39%), post-inflammatory pigment (12%) and shadow (11%); in Korea 54% were mixed.',
  'A thirty-second self-check sorts them: stretch the skin — brown that stays is pigment; press it — colour that blanches is vessels; tilt your head back under a light — darkness that vanishes is shadow. Treatments only work on the type they were tested on.',
  'For the shadow, a hyaluronic-acid filler in the tear trough has the only large randomised trials in this whole subject: 87% of 333 patients improved at three months against 18% untreated, most looked less tired and it held for a year. It is also the area of the face with the most complications, so the injector matters more than the product.',
  'For pigment and vessels the trials are small and the winners change from study to study: a TCA-lactic peel beat platelet-rich plasma in one trial, carboxytherapy beat a laser in another and lost to PRP in a third, and an injected vitamin C-tranexamic acid cocktail improved 120 patients against controls. Expect a course, a partial result and maintenance.',
  'The eye-cream aisle rests on eight-week open-label studies: vitamin C thickened the eyelid dermis a little in 14 people over six months, a vitamin K-retinol gel reduced the bluish component in 47% of 57, hydroquinone gave "mild" 10–30% improvement in twelve weeks — and one objective study found that a night without sleep does not measurably darken the under-eye at all.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the type drawer that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-pigment',
    kind: 'Pigment',
    title: 'Melanin in the thinnest skin on the body — inherited, inflamed or sun-made',
    blurb: 'The eyelid skin is about half a millimetre thick and its melanocytes are unusually active. Some families deposit pigment there from the teens; eczema, hay fever and rubbing add post-inflammatory pigment on top; the sun darkens both. Brown, stays put when the skin is stretched, and in 60% of cases sits in the dermis where creams struggle to reach.',
  },
  {
    id: 'type-vascular',
    kind: 'Vessels',
    title: 'Blue-purple blood showing through half a millimetre of skin',
    blurb: 'A dense web of veins and capillaries sits directly under the lower lid, and there is almost no fat to hide it. Thin, pale or ageing skin shows it as a blue-mauve tint that is worse in the morning, with blocked noses, periods, alcohol and fatigue — the commonest type in every clinic series, and the one the "allergic shiner" belongs to.',
  },
  {
    id: 'type-structural',
    kind: 'Shadow',
    title: 'A groove and a bag that cast a shadow no cream can lighten',
    blurb: 'The tear trough is the valley where the lid meets the cheek; as cheek fat descends and the bone recedes it deepens, and any bag above it throws a shadow into it. Overhead light makes it darkest, a flash from the front makes it disappear. Every laser, peel and serum on this page is useless against it — and the one treatment with large trials is a filler.',
  },
];

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What\'s actually happening',
    intro: 'Three things darken the under-eye at once — pigment, blood and shadow — and the mix decides what will work.',
    sections: [
      {
        id: 'why-here',
        category: 'concept',
        title: 'Why the under-eye goes dark before anywhere else',
        tldr: 'Eyelid skin is the thinnest on the body, sits over a dense vessel plexus with almost no fat, carries active melanocytes, and lies in a groove that catches overhead light. Everything that discolours skin shows here first.',
        bodyHtml: `
          <p>The lower eyelid is a bad place to be skin. It is roughly a third the thickness of cheek skin, with a thin dermis and a near-absent fat layer, so the muscle and the venous plexus directly beneath it tint it blue-mauve in anyone pale or thin-skinned. Its melanocytes are among the most reactive on the face, so inflammation from eczema, hay fever, rubbing or sun leaves pigment behind. And it sits at the junction of eyelid and cheek — the tear trough — a valley that overhead light throws into shadow, deepening every year as cheek fat descends and the bone beneath recedes (<a href="https://pubmed.ncbi.nlm.nih.gov/20124855/" rel="noopener nofollow" target="_blank">tear-trough anatomy</a>).</p>
          <p>Dermatology's name for the discolouration is periorbital hyperpigmentation, which is misleading because much of it is not pigment at all. The review literature describes constitutional (inherited) pigment, post-inflammatory pigment, excess vascularity, swelling, and shadow from laxity and the tear trough as separate causes that usually coexist (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4756872/" rel="noopener nofollow" target="_blank">comprehensive review</a>). That coexistence is why a treatment that "worked for my friend" so often does nothing: her circles and yours may share a name and nothing else.</p>
        `,
      },
      {
        id: 'how-common',
        category: 'concept',
        title: 'How common it is, and who gets which kind',
        tldr: 'Of 1,000 consecutive Singapore dermatology patients, vascular circles were commonest (42%), then inherited pigment (39%), post-inflammatory pigment (12%) and shadow (11%). In 200 Indian patients, half were constitutional and the peak age was 16–25; in Korea 54% were mixed. Women and darker skin dominate every series.',
        bodyHtml: `
          <p>The largest clinic survey examined 200 of 1,000 consecutive patients in Singapore with a mexameter and three dermatologists: vascular circles 41.8%, constitutional pigment 38.6%, post-inflammatory pigment 12%, shadow 11.4%, with the vascular type commonest in Chinese patients and the constitutional type in Indian and Malay patients (<a href="https://pubmed.ncbi.nlm.nih.gov/21682796/" rel="noopener nofollow" target="_blank">Singapore series</a>). An Indian series of 200 found constitutional pigment in 51.5% and post-inflammatory in 22.5%, the highest prevalence at 16–25 years, 81% women, the lower lid alone in 72.5%, and pigment sitting in the dermis on Wood's lamp in 60.5% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3969674/" rel="noopener nofollow" target="_blank">Indian series</a>). A Malaysian series called 51% vascular and only 6% purely pigmentary (<a href="https://pubmed.ncbi.nlm.nih.gov/31916334/" rel="noopener nofollow" target="_blank">Malaysian classification</a>), and a Korean one found 54% mixed pigment-and-vessel (<a href="https://pubmed.ncbi.nlm.nih.gov/26346687/" rel="noopener nofollow" target="_blank">Korean classification</a>).</p>
          <p>The habits that travelled with it in the Indian series were lack of sleep (40%), heavy cosmetic use (36.5%), frequent eye rubbing (32.5%) and uncorrected short sight (12%), with strong associations with stress (71%), atopy (33%) and family history. Associations, not proof of cause — but a list worth reading against your own week.</p>
        `,
      },
      {
        id: 'why-hard',
        category: 'concept',
        title: 'Why this is the hardest cosmetic complaint to fix — and how to read the evidence',
        tldr: 'Mixed causes, skin too thin for strong treatments, pigment in the dermis, and a literature of 65 indexed papers against 150 million search results. Most treatments were borrowed from melasma and tested in trials of 10 to 45 people; the only large randomised trials are for filler in the hollow.',
        bodyHtml: `
          <p>A 2014 review made the point with a number: 65 PubMed-indexed articles on periorbital hyperpigmentation against 150 million Google results (<a href="https://pubmed.ncbi.nlm.nih.gov/24719068/" rel="noopener nofollow" target="_blank">review</a>). A decade on, the 2021 systematic review found 39 studies and concluded that fillers and fat work for volume loss, blepharoplasty for laxity, creams and peels for pigment, lasers "mildly to moderately" for both pigment and vessels — and that "given the scarcity of high-quality evidence, recommendations should be interpreted selectively" (<a href="https://pubmed.ncbi.nlm.nih.gov/32740208/" rel="noopener nofollow" target="_blank">2021 systematic review</a>).</p>
          <p>Three things make the studies hard to trust. The condition fluctuates with sleep, allergies, hydration and light, so an eight-week before-and-after can show improvement that has nothing to do with the product; only split-face or controlled designs handle that, and there are few. Measurement is a problem — most studies use a physician's eye or a mexameter reading, and a validated ten-point photographic scale only arrived in 2021 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7898348/" rel="noopener nofollow" target="_blank">photonumeric scale</a>). And the trials rarely say which type they treated, so a laser that fails in a vascular series and succeeds in a pigmented one reads as "inconsistent". Every tier below is graded against the type the study actually enrolled.</p>
        `,
      },
    ],
  },
  {
    id: 'context',
    title: 'Which dark circle do you have?',
    intro: 'Pigment, vessels and shadow look alike in a mirror and answer to different things. Sort yours in thirty seconds before spending a euro.',
    sections: [
      {
        id: 'type-pigment',
        category: 'context',
        title: 'Pigmented: brown, stays when stretched, often in the family',
        tldr: 'Brown-to-black colour on both lids that does not change when the skin is stretched or pressed, often present since the teens, in a parent or sibling, and worse after eczema, hay fever or a summer. Wood\'s lamp says whether it is in the epidermis (treatable with creams and peels) or the dermis (needs lasers, and slowly).',
        bodyHtml: `
          <p>Constitutional pigment is inherited and usually appears in adolescence; it involves the upper and lower lids, spreads toward the temple, and runs in families — the commonest type in South Asian and Middle Eastern series. Post-inflammatory pigment is acquired: atopic eczema, allergic rhinitis and the rubbing they provoke leave melanin behind, and 33% of the Indian series had atopy (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3969674/" rel="noopener nofollow" target="_blank">Indian series</a>). Sun deepens both, which is why the lower lid — the one place most people never put sunscreen — darkens every summer.</p>
          <p>The depth decides the treatment. Under a Wood's lamp, epidermal pigment sharpens and dermal pigment blurs; 60.5% of the Indian patients were dermal. Epidermal pigment responds to the lighteners and light peels; dermal pigment is the province of the Q-switched and picosecond lasers, slowly, with a real risk of making darker skin darker. If the colour is brown and the stretch test does not change it, start with sun protection and the pigment rows, and expect months.</p>
        `,
      },
      {
        id: 'type-vascular',
        category: 'context',
        title: 'Vascular: blue, mauve or pink, worse in the morning and with a blocked nose',
        tldr: 'A blue-purple or pinkish tint through thin, pale skin that blanches when you press it and deepens with fatigue, allergies, periods, alcohol and age. The commonest type in every clinic series, the one the "allergic shiner" belongs to, and the one that improves when the vessels are constricted, the skin thickened or the nose unblocked.',
        bodyHtml: `
          <p>The lower lid sits directly on the orbicularis muscle and a dense plexus of veins; where the skin is thin and pale, or the fat beneath it has thinned with age, the blood shows through as a blue-mauve shadow with a pink rim of dilated capillaries. It is darkest on waking (venous stasis after a night lying flat), during a cold or hay-fever season (nasal congestion backs up the veins that drain the lids), before a period, after alcohol, and with age as the skin thins. Press a fingertip on it and the colour lightens; stretch the skin and it changes little.</p>
          <p>The "allergic shiner" is its paediatric form: in 126 children with allergic rhinitis measured photographically, shiners were darker and larger than in 123 healthy children, and darkness tracked how long the rhinitis had lasted and how bad the eye symptoms were (<a href="https://pubmed.ncbi.nlm.nih.gov/19281911/" rel="noopener nofollow" target="_blank">allergic shiners study</a>). In adults the same mechanism hides behind "I've always had them". The treatments that suit this type are the ones that constrict vessels, decongest the nose, or thicken the skin over the plexus — vitamin C, vitamin K, carboxytherapy, the vascular lasers, and above all treating the allergy.</p>
        `,
      },
      {
        id: 'type-structural',
        category: 'context',
        title: 'Structural: a hollow or a bag that casts the shadow',
        tldr: 'Darkness that disappears when you tilt your head back under a lamp, or when a photograph is taken with a flash from the front, is shadow: the tear-trough groove, a bulging fat pad above it, or loose skin. It cannot be lightened, only filled, repositioned or lifted — and the filler for it is the best-evidenced treatment on this page.',
        bodyHtml: `
          <p>The tear trough is the groove running diagonally from the inner corner of the eye across the top of the cheek. It is present in some faces from childhood and deepens in everyone as the cheek fat pad slides down and the bone of the orbital rim recedes; a bag of orbital fat bulging above it makes the valley deeper by contrast. Surgeons grade it from a faint line to a deep groove with a bag (<a href="https://pubmed.ncbi.nlm.nih.gov/28244901/" rel="noopener nofollow" target="_blank">classification</a>), and the grade predicts what helps: a groove without a bag suits filler or fat, a groove with a bag needs the fat moved or removed (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5004220/" rel="noopener nofollow" target="_blank">three classes and their treatments</a>).</p>
          <p>The test is light. Under an overhead lamp the groove is a dark crescent; lift your chin toward the light, or photograph yourself with the flash on, and it vanishes while pigment and vessels stay. If your circles look terrible in the bathroom and fine in a selfie, they are shadow. For a bag rather than a groove, the <a href="/eye-bags">under-eye bags guide</a> covers the surgery in depth.</p>
        `,
      },
      {
        id: 'type-mixed',
        category: 'context',
        title: 'Mixed, and the accelerants: sleep, allergies, rubbing, smoke, screens and thin skin',
        tldr: 'Most circles are two types at once — 54% in the Korean series — with a set of habits that darken any type: a blocked or itchy nose, rubbing, poor sleep, alcohol, cigarettes, uncorrected short sight and heavy make-up removal. Skin that thins with age turns a mild vascular tint into a visible one.',
        bodyHtml: `
          <p>Pigment and vessels together were the single largest group in the Korean classification study (54%), and shadow arrives on top of both from the mid-thirties. That is why the honest plan is usually two treatments, not one: something for the colour and something for the contour.</p>
          <p>The accelerants are the same in every series and cost nothing to fix. Allergic rhinitis and eczema drive both the vascular tint and the post-inflammatory pigment, and the rubbing they provoke adds more. Sleep loss and alcohol dilate and congest the plexus. Smoking thins and yellows the skin. Uncorrected myopia (12% of the Indian series) means squinting and rubbing. Vigorous make-up removal is a daily micro-trauma to the most reactive melanocytes on the face. None of these is a treatment; all of them decide how well the treatments hold.</p>
        `,
      },
      {
        id: 'workup',
        category: 'context',
        title: 'The self-check: stretch, press, tilt, and the photograph',
        tldr: 'Stretch the lower lid gently sideways — colour that stays is pigment. Press a fingertip on it — colour that blanches is vessels. Tilt your head back under a lamp or take a front-flash photo — darkness that vanishes is shadow. Note morning-versus-evening, allergy season and family history; photograph in the same light every month; ask a dermatologist for a Wood\'s lamp if it is brown.',
        bodyHtml: `
          <p>The clinic tests are simple enough to do at a mirror. <strong>Stretch:</strong> pull the lower-lid skin gently toward the ear; true pigment stays brown while the skin is taut, vascular colour often looks the same or slightly bluer, and a shadow usually fades as the groove flattens. <strong>Press:</strong> a fingertip on the dark area for five seconds — blood-driven colour blanches and refills, pigment does not. <strong>Tilt:</strong> lift your chin toward the ceiling light, or photograph yourself with a flash straight on; shadow disappears, colour does not. Most people find two positives, which is the honest answer.</p>
          <p>Then the history: worse on waking or in hay-fever season points to vessels; present since school and in a parent points to constitutional pigment; eczema, rubbing or a summer abroad before it appeared points to post-inflammatory pigment; a change over the last five years with a groove that catches the light points to structure. A dermatologist's Wood's lamp adds the epidermal-versus-dermal answer that decides between creams and lasers (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3969674/" rel="noopener nofollow" target="_blank">clinic work-up</a>). Finally, a photograph — same window, same time of day, no make-up, monthly — because this condition fluctuates enough to fool anyone's memory.</p>
        `,
      },
    ],
  },
  {
    id: 'home',
    title: 'At home: protect, lighten, thicken, decongest',
    intro: 'The daily work, graded against the type it was tested on. Nothing here has a large trial; a few things have a controlled one.',
    sections: [
      {
        id: 'home-sun',
        category: 'home',
        title: 'Sunscreen on the lower lid and real sunglasses: the pigment stops getting worse',
        tldr: 'No trial has tested sun protection on dark circles specifically, but ultraviolet light darkens both constitutional and post-inflammatory pigment, it is the best-evidenced intervention in melasma, and the lower lid is the one facial site most people never protect. A mineral SPF 30–50 to the lash line every morning and wraparound sunglasses cost almost nothing and make every pigment treatment below hold.',
        evidence: 'moderate',
        focus: 'pigment',
        note: 'Best for: every pigmented and mixed circle, and everyone about to pay for a peel or a laser',
        sessions: 'Every morning, for good',
        downtime: 'None',
        cost: '€10–30 / month',
        bodyHtml: `
          <p>Ultraviolet light is the one accelerant of periorbital pigment that every review agrees on (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4756872/" rel="noopener nofollow" target="_blank">review</a>), and the evidence that daily sunscreen prevents and lightens facial pigment comes from its cousin melasma, where broad-spectrum protection is the foundation of every regimen and the reason relapse follows every summer. The tier is moderate rather than strong because the trials are in melasma, not under the eye — a fair extrapolation, not a proven one.</p>
          <p>The practical problem is that people stop their sunscreen at the cheekbone because it stings. A mineral (zinc or titanium) formula, or a tinted one, tolerates the lid; apply it to the lash line and the inner corner where pigment concentrates. Large sunglasses with UV400 lenses do the rest and stop the squinting that thickens crow's feet. For the vascular and structural types this row is prevention of the pigment layer that will otherwise be added on top — see the <a href="/sun-damage">sun damage guide</a> for the wider case.</p>
        `,
      },
      {
        id: 'home-vitc',
        category: 'home',
        title: 'Topical vitamin C: the one cream with a six-month split-face trial, thickening the lid dermis a little',
        tldr: 'In 14 people applying 10% sodium ascorbate to one lower lid and vehicle to the other for six months, the redness index rose less on the treated side and the dermis tended to thicken on ultrasound — the mechanism being a thicker curtain over the vessels, not less pigment. A weaker vitamin C derivative did nothing. Small, slow, and the most honest cream on the page.',
        evidence: 'emerging',
        focus: 'vascular',
        note: 'Best for: vascular and mixed circles in thin, pale skin; patience required',
        sessions: 'Nightly, judged at 6 months',
        downtime: 'Stinging at first',
        cost: '€20–60 / month',
        bodyHtml: `
          <p>The rationale is collagen: ascorbate is a cofactor for collagen synthesis, and a thicker lower-lid dermis hides the vessel plexus. The trial that tested it applied 10% sodium ascorbate lotion or ascorbic acid glucoside to one lower eyelid and vehicle to the other in 14 people for six months, measuring melanin, erythema and dermal thickness by ultrasound. On the sodium-ascorbate side the erythema index rose significantly less than on the vehicle side and the dermis tended to thicken, the two changing in parallel; the glucoside derivative showed no difference from vehicle (<a href="https://pubmed.ncbi.nlm.nih.gov/19626722/" rel="noopener nofollow" target="_blank">vitamin C split-face trial</a>). The authors' conclusion — that it "may improve dark circles by thickening the eyelid dermis and concealing dark coloration due to congested blood" — is exactly as modest as it should be.</p>
          <p>A Korean split-face, placebo-controlled trial of a vitamin C 3%, vitamin A 0.1%, vitamin E 0.5% cream in 24 people with mixed circles for eight weeks improved lightness and melanin index against placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/26346687/" rel="noopener nofollow" target="_blank">Korean classification and trial</a>). Use a stable, high-strength ascorbate (10–15%) or a retinoid-vitamin C combination at night, expect stinging for a fortnight, and judge it on a six-month photograph, not a six-week one.</p>
        `,
      },
      {
        id: 'home-vitk',
        category: 'home',
        title: 'Vitamin K with retinol: the bluish component in 47% of 57 people, the pigment in none',
        tldr: 'An open-label eight-week study of a gel with 2% phytonadione (vitamin K), 0.1% retinol and 0.1% vitamins C and E in 57 Japanese adults reduced the blood-stasis component in 27 (47%) and some wrinkles, and did not clear pigment. A caffeine-plus-vitamin-K pad reduced circles and wrinkle depth against a water pad in 11 women. Cheap, plausible for the vascular type, thinly tested.',
        evidence: 'emerging',
        focus: 'vascular',
        note: 'Best for: the blue-mauve morning circle, as the cheapest experiment to run first',
        sessions: 'Twice daily for 8 weeks',
        downtime: 'None',
        cost: '€15–40 / month',
        bodyHtml: `
          <p>Vitamin K's cosmetic claim is that it helps clear extravasated blood — the reason it is sold for bruises — and that a leaky, congested lower-lid plexus behaves like a slow bruise. The best study is open-label: 57 healthy Japanese adults applied a gel of 2% phytonadione, 0.1% retinol and 0.1% vitamins C and E twice daily for eight weeks; physicians rated the haemostasis (blood-stasis) component reduced in 27 of 57 (47%), wrinkles slightly reduced in some, and pigment "not clearly removed" (<a href="https://pubmed.ncbi.nlm.nih.gov/17147559/" rel="noopener nofollow" target="_blank">vitamin K gel study</a>). A single-blind trial of an under-eye pad containing 3% caffeine and 1% vitamin K against a water pad in 11 women reduced wrinkle depth and dark circles on the treated side after four weeks (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4300604/" rel="noopener nofollow" target="_blank">caffeine-vitamin K pad</a>).</p>
          <p>Neither study is controlled in the way that would separate the ingredients from the moisturising base, and both are short. The reasonable position: for a bluish circle that blanches on pressure, an eight-week trial of a vitamin K-retinol product is a cheap experiment with a plausible mechanism, to be judged on a photograph and abandoned without regret if nothing changes.</p>
        `,
      },
      {
        id: 'home-retinoid',
        category: 'home',
        title: 'A retinoid at night: thicker skin and slower pigment, borrowed from photoaging and melasma',
        tldr: 'Tretinoin thickens the epidermis, builds collagen and disperses melanin in decades of facial trials, and appears in every dark-circle review — but no trial has run it alone under the eye. The vitamin A 0.1% in the Korean split-face cream and the Japanese gel is the closest. Retinol or low-strength tretinoin nightly, sparingly, kept off the lash line: a slow thickening of the curtain and a slow lightening of the pigment.',
        evidence: 'emerging',
        focus: 'all',
        note: 'Best for: pigmented, vascular and mixed circles in anyone who can tolerate it; not the shadow',
        sessions: 'Nightly, built up over 2 months; judged at 6',
        downtime: 'Dryness and flaking for weeks',
        cost: '€10–40 / month',
        bodyHtml: `
          <p>Retinoids are the only topical class with biopsy-proven collagen synthesis and a decades-long record in pigment disorders (see the <a href="/wrinkles">wrinkles guide</a> and the <a href="/dark-spots">dark spots guide</a>), and topical retinoic acid appears in every review of periorbital hyperpigmentation as a standard option (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4756872/" rel="noopener nofollow" target="_blank">review</a>). What is missing is a trial of a retinoid alone under the eye; the closest are the combination products above, in which 0.1% vitamin A rode along with vitamins C, E and K.</p>
          <p>The lid tolerates less than the cheek. Retinol 0.3–0.5% or tretinoin 0.025% every second or third night, a rice-grain for both eyes, applied over a moisturiser and kept a few millimetres from the lashes, is the regimen most dermatologists use; flaking and redness for the first month are the price, and irritation will itself darken the skin if pushed. It does nothing for a hollow, and it is stopped in pregnancy.</p>
        `,
      },
      {
        id: 'home-hq',
        category: 'home',
        title: 'Hydroquinone 4% or salicylic acid 30%: "mild" 10–30% improvement in twelve weeks',
        tldr: 'Fifty patients randomised to twelve weeks of 4% hydroquinone or 30% salicylic acid peels showed mostly mild (10–30%) improvement in both groups with no difference between them — and both improved quality-of-life scores. The workhorse of melasma is a modest performer under the eye, where pigment is often dermal and the skin does not tolerate the strengths that work elsewhere.',
        evidence: 'emerging',
        focus: 'pigment',
        note: 'Best for: epidermal, post-inflammatory pigment, for a limited course under supervision',
        sessions: '12 weeks, then a break',
        downtime: 'Irritation; sun sensitivity',
        cost: '€20–60 (prescription)',
        bodyHtml: `
          <p>Hydroquinone is the reference lightener for melasma; the one randomised comparison under the eye enrolled 50 patients with clinically evident periorbital pigment and gave 25 twelve weeks of 4% hydroquinone and 25 a course of 30% salicylic acid peels. Most patients in both groups improved by only 10–30% on a visual analogue scale, with no significant difference between the treatments, although both significantly improved the dermatology life-quality index (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4966400/" rel="noopener nofollow" target="_blank">hydroquinone vs salicylic acid trial</a>). The authors' explanation — pigment that is often dermal and a multifactorial cause — is the recurring story of this page.</p>
          <p>Practical notes: hydroquinone is prescription-only in the EU, is used in courses of eight to twelve weeks with breaks because of ochronosis with long use, stings on eyelid skin and needs sunscreen over it. Kojic acid, arbutin, azelaic acid and the newer cysteamine complexes are the non-hydroquinone alternatives; the cysteamine data under the eye are a seven-person pilot (<a href="https://pubmed.ncbi.nlm.nih.gov/41642146/" rel="noopener nofollow" target="_blank">cysteamine pilot</a>). For the dermal component the lasers in the clinic section do what creams cannot.</p>
        `,
      },
      {
        id: 'home-brighteners',
        category: 'home',
        title: 'The "brightening" serums — niacinamide, arbutin, tranexamic acid, peptides, caffeine: instrument readings from open-label studies',
        tldr: 'An under-eye serum in 90 patients dropped the melanin colorimeter reading from 708 to 621 in three months; a niacinamide-arbutin-tranexamic acid formula reported a 47.9% reduction in six weeks; a vitamin C-caffeine-peptide cream improved 37 women over twelve weeks. None had a control side, all were company-run, and this condition fluctuates enough to produce those numbers on its own. Pleasant, harmless, and not evidence.',
        evidence: 'limited',
        focus: 'pigment',
        note: 'Best for: people who enjoy a serum and understand it is a moisturiser with a story',
        sessions: 'Twice daily, indefinitely',
        downtime: 'None',
        cost: '€25–120 per bottle',
        bodyHtml: `
          <p>The ingredients are sensible — niacinamide and arbutin slow melanin transfer, tranexamic acid calms the vessel-pigment interaction in melasma, caffeine constricts vessels briefly — and the studies are what the category always produces. A prescription-brand serum in 90 patients with pigmentary circles, open-label and single-arm, reduced the colorimeter melanin value from 708 to 621 and the erythema value from 450 to 417 over three months, with 86% achieving at least 25% dermoscopic improvement (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8884187/" rel="noopener nofollow" target="_blank">open-label serum study</a>). A niacinamide-arbutin-tranexamic acid formula reported an average 47.9% reduction in under-eye pigmentation after six weeks of twice-daily use (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12235579/" rel="noopener nofollow" target="_blank">2025 serum study</a>), and a vitamin C-caffeine-peptide eye cream improved circles and puffiness in 37 women over twelve weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/38112168/" rel="noopener nofollow" target="_blank">multicorrective cream study</a>).</p>
          <p>What none of them had is a control side. The one split-face randomised trial of a cosmetic product, run to validate a photographic scale in 58 people, is the design the category needs and almost never uses (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7898348/" rel="noopener nofollow" target="_blank">split-face cosmetic trial</a>). Buy a brightening serum as a pleasant vehicle for sunscreen and a retinoid; do not buy it instead of them.</p>
        `,
      },
      {
        id: 'home-allergy',
        category: 'home',
        title: 'Treating the allergy and the eczema: the vascular and post-inflammatory circle at its source',
        tldr: 'Allergic rhinitis congests the veins that drain the lower lid and provokes the rubbing that leaves pigment; in 126 children with rhinitis, shiners were darker and larger than in 123 controls and tracked the duration and severity of the allergy. A daily antihistamine, a nasal steroid spray in season, an eczema flare treated promptly, and hands kept off the eyes are the closest thing this page has to a cure for the commonest type.',
        evidence: 'emerging',
        focus: 'vascular',
        note: 'Best for: the morning, blocked-nose, itchy-eye circle, in adults and children',
        sessions: 'Daily in season; year-round if perennial',
        downtime: 'None',
        cost: '€5–20 / month',
        bodyHtml: `
          <p>"Allergic shiner" is a paediatric textbook sign, and the one quantitative study measured it: photographic analysis of 126 children with allergic rhinitis and 123 without found the shiners darker and larger in the allergic children, with darkness correlating with how long the rhinitis had lasted, the eye-symptom scores and the practical-problems scale of a quality-of-life questionnaire (<a href="https://pubmed.ncbi.nlm.nih.gov/19281911/" rel="noopener nofollow" target="_blank">allergic shiners study</a>). Adults are not different, they have simply stopped calling it an allergy. Atopy travelled with a third of the Indian series and rubbing with a third (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3969674/" rel="noopener nofollow" target="_blank">Indian series</a>).</p>
          <p>The tier is emerging because nobody has run a trial of allergy treatment with dark circles as the endpoint; the mechanism — decongest the nose, stop the itch, stop the rubbing, stop the inflammation that makes pigment — is not in doubt. A non-sedating antihistamine daily through the season, a steroid nasal spray started before it, cold compresses for the itch instead of knuckles, a prompt topical treatment for eyelid eczema, and a dermatologist for eczema that keeps returning. It is the cheapest row on the page and the one most people skip.</p>
        `,
      },
      {
        id: 'home-sleep',
        category: 'home',
        title: 'Sleep, alcohol, smoke and screens: the perception is real, the measurement is not',
        tldr: 'Observers rated 23 sleep-deprived adults as less healthy, more tired and less attractive than the same people rested — but when 181 people were randomised to a night without sleep and their photographs were digitally analysed, periorbital darkness did not change. Sleep loss makes a face read as tired through eyes and posture more than through the colour under them. Fix your sleep for its own sake; expect little from it here.',
        evidence: 'limited',
        focus: 'all',
        note: 'Best for: honesty — the habits matter, but "I just need more sleep" is rarely the whole answer',
        sessions: 'Nightly',
        downtime: 'None',
        cost: 'Free',
        bodyHtml: `
          <p>The famous experiment photographed 23 healthy adults after eight hours of sleep and after 31 hours awake; 65 untrained observers rated the sleep-deprived versions as less healthy, more tired and less attractive (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3001961/" rel="noopener nofollow" target="_blank">"beauty sleep" study</a>). The follow-up did what that study could not: 181 people were randomised to total sleep deprivation or a normal night, photographed, and their images analysed by computer for eye openness, mouth curvature and periorbital darkness while a subset had skin colour measured by spectrophotometer — and neither sleep deprivation nor sleepiness was related to any objective facial variable, including the darkness under the eyes (<a href="https://pubmed.ncbi.nlm.nih.gov/31006920/" rel="noopener nofollow" target="_blank">objective sleep-deprivation study</a>). A Japanese study found sleep loss increases facial yellowness rather than redness (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9861417/" rel="noopener nofollow" target="_blank">yellowness study</a>).</p>
          <p>The clinic associations are real — 40% of the Indian series slept poorly — but association is not mechanism, and chronic poor sleep, alcohol and smoking probably act slowly through congestion, thinning and yellowing rather than overnight. Sleep more, drink less, stop smoking, correct your glasses, remove make-up gently; then measure your circles with a photograph rather than a feeling.</p>
        `,
      },
    ],
  },
  {
    id: 'clinic',
    title: 'Clinic: peels, pigment lasers, gas, blood and the injected vitamins',
    intro: 'The treatments for colour, graded against the type they enrolled. Small trials, real effects, winners that change from study to study — plan a course and maintenance.',
    sections: [
      {
        id: 'clinic-peels',
        category: 'clinic',
        title: 'Light chemical peels — TCA 3.75–10% with lactic acid, or lactobionic and ferulic acids: the pigment type\'s most consistent performer',
        tldr: 'In 42 patients randomised to four sessions of a trichloroacetic-lactic acid peel or four of platelet-rich plasma, the peel won decisively: 47.6% good and 38% excellent improvement against 4.8% good and none excellent for PRP. A 45-patient three-arm trial found peels, carboxytherapy and vitamin C mesotherapy all effective. Low strengths, an experienced hand, and sunscreen after.',
        evidence: 'moderate',
        focus: 'pigment',
        note: 'Best for: epidermal and mixed pigment in lighter skin; cautiously in darker skin',
        sessions: '4–6, two to four weeks apart',
        downtime: '2–5 days of flaking and redness',
        cost: '€80–200 / session',
        bodyHtml: `
          <p>Superficial peels remove the pigmented upper epidermis and, in the lactic-acid formulations, add a lightening effect. The clearest trial randomised 42 patients (38 women, mean age 28) to four sessions of a trichloroacetic-acid-plus-lactic-acid peel or four sessions of platelet-rich plasma injections at two-week intervals; the peel group had good improvement in 47.6% and excellent in 38%, against 4.8% good and 0% excellent for PRP, with itching and redness in 14% of peel patients (<a href="https://pubmed.ncbi.nlm.nih.gov/31021041/" rel="noopener nofollow" target="_blank">peel vs PRP trial</a>). A three-arm randomised study of 45 women found carboxytherapy, a chemical peel and vitamin C mesotherapy all reduced pigment without a significant difference between them (<a href="https://pubmed.ncbi.nlm.nih.gov/29767467/" rel="noopener nofollow" target="_blank">three-arm trial</a>), and a 39-person split-face series showed carboxytherapy plus a lactobionic or ferulic-ascorbic peel improved both the vascular and melanin indices on a mexameter (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11348931/" rel="noopener nofollow" target="_blank">carboxytherapy-peel combinations</a>). Microneedling with 10% TCA gave fair-to-excellent responses in 92% of 13 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/26967571/" rel="noopener nofollow" target="_blank">needling plus TCA</a>).</p>
          <p>The lid tolerates only low strengths — 10% TCA or less, the salicylic and lactic acids — applied by someone who does eyelids regularly, with eye protection and a strict sunscreen afterwards. In darker skin the same peel can leave the area darker; test a small patch. A course of four to six, then one or two a year, with the sunscreen and retinoid doing the maintenance between.</p>
        `,
      },
      {
        id: 'clinic-qs-laser',
        category: 'clinic',
        title: 'Q-switched and picosecond pigment lasers at low fluence: dermal melanin, eight sessions, and a real risk of going darker',
        tldr: 'Eight low-fluence sessions of a 1,064 nm Q-switched Nd:YAG in 30 women with brown circles gave excellent or good improvement in 26, with the melanin index falling from 226 to 183 and confocal microscopy showing less pigment in the upper dermis; a fractional Q-switched ruby did the same in 28 of 30. Across ten laser trials, 81% of patients scored good or excellent. In 12 darker-skinned women a picosecond KTP and a thulium laser made pigment worse.',
        evidence: 'moderate',
        focus: 'pigment',
        note: 'Best for: the brown, dermal, constitutional circle that creams and peels cannot reach — in skin that can take it',
        sessions: '4–8, one to four weeks apart',
        downtime: 'Redness for a day; PIH possible',
        cost: '€150–350 / session',
        bodyHtml: `
          <p>The dermal pigment that a Wood's lamp blurs is what the pigment lasers were built for. Two open-label Chinese studies set the pattern: 30 women with dark-brown circles had eight sessions of a low-fluence (4.2 J/cm²) 1,064 nm Q-switched Nd:YAG at three-to-four-day intervals, 26 of 30 rated excellent or good, the melanin index fell from 225.8 to 182.7, and reflectance confocal microscopy showed a marked fall in upper-dermal melanin with minimal side effects (<a href="https://pubmed.ncbi.nlm.nih.gov/21605241/" rel="noopener nofollow" target="_blank">Q-switched Nd:YAG study</a>); eight sessions of a 694 nm fractional Q-switched ruby laser in another 30 gave excellent or good results in 28 and dropped the melanin index from 240 to 195 (<a href="https://pubmed.ncbi.nlm.nih.gov/27522505/" rel="noopener nofollow" target="_blank">Q-switched ruby study</a>). A systematic review of ten laser trials found 45% of patients responded well and 36% excellently in the short term, with 76% satisfied (<a href="https://pubmed.ncbi.nlm.nih.gov/33474663/" rel="noopener nofollow" target="_blank">laser systematic review</a>), and four sessions of Q-switched Nd:YAG with radiofrequency-delivered vitamin C held for a year in 30 patients (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11427478/" rel="noopener nofollow" target="_blank">laser plus vitamin C</a>).</p>
          <p>The warning is in the one split-face study in darker skin: in 12 women with pigmented circles, three sessions of a picosecond 532 nm KTP on one side and a fractional 1,927 nm thulium on the other were "more likely to induce post-inflammatory hyperpigmentation than decrease the pigmentation", worst with the KTP (<a href="https://pubmed.ncbi.nlm.nih.gov/38969818/" rel="noopener nofollow" target="_blank">picosecond KTP vs thulium</a>). Low fluence, the 1,064 nm wavelength, a test spot, corneal shields, no tan, and a course of six to eight before judging — with an operator who treats skin like yours every week. See the <a href="/dark-spots">dark spots guide</a> for the lasers in depth.</p>
        `,
      },
      {
        id: 'clinic-carboxy',
        category: 'clinic',
        title: 'Carboxytherapy: carbon dioxide injected under the lid, six weekly sessions, for the vascular and mixed circle',
        tldr: 'Injected CO2 dilates and re-oxygenates the congested plexus. Six weekly sessions beat four of a fractional Q-switched laser in a 28-patient trial and beat microneedling with glutathione in a 31-patient split-face trial; it matched PRP in one 30-patient split-face study and lost to it in another (14% versus 47% melanin reduction); 80 patients improved at either of two flow rates, with fewer side effects at the lower. Modest, safe, needs maintenance.',
        evidence: 'moderate',
        focus: 'vascular',
        note: 'Best for: the blue-mauve congested circle, alone or before a peel; darker skin tolerates it',
        sessions: '6, weekly',
        downtime: 'Crackling swelling for 20 minutes; bruising',
        cost: '€60–150 / session',
        bodyHtml: `
          <p>Carbon dioxide injected just under the skin triggers a local vasodilation and a shift of oxygen from haemoglobin into the tissue, the rationale being a decongested plexus and, with repetition, thicker skin. It has more randomised comparisons than any other treatment for colour. Against a fractional 1,064 nm Q-switched laser in 28 patients, six weekly carboxytherapy sessions improved lightness and melanin more, with less redness and post-inflammatory darkening (<a href="https://pubmed.ncbi.nlm.nih.gov/33638096/" rel="noopener nofollow" target="_blank">carboxytherapy vs laser</a>). In a split-face trial of 31 women it beat microneedling with topical glutathione on visual, dermoscopic and satisfaction scores (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9971752/" rel="noopener nofollow" target="_blank">carboxytherapy vs needling</a>). In 80 patients randomised to a 30 or 60 ml/min flow rate, both improved and the slower rate caused fewer side effects (<a href="https://pubmed.ncbi.nlm.nih.gov/34971475/" rel="noopener nofollow" target="_blank">flow-rate trial</a>). In 39 Caucasians it improved the erythema index in the tear trough in 82% (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11348931/" rel="noopener nofollow" target="_blank">carboxytherapy series</a>).</p>
          <p>Against platelet-rich plasma the record splits: comparable in a 30-patient split-face trial in which a third of patients abandoned the PRP side for pain (<a href="https://pubmed.ncbi.nlm.nih.gov/29297970/" rel="noopener nofollow" target="_blank">carboxytherapy vs PRP, 2018</a>), and clearly worse in a 23-patient split-face trial with histology — 14.3% melanin reduction against 46.6% (<a href="https://pubmed.ncbi.nlm.nih.gov/35514239/" rel="noopener nofollow" target="_blank">carboxytherapy vs PRP, 2022</a>); a 2025 meta-analysis pooled the two modalities without a clear winner (<a href="https://pubmed.ncbi.nlm.nih.gov/40384140/" rel="noopener nofollow" target="_blank">meta-analysis</a>). The sensation is a crackling swelling that settles in twenty minutes, bruising is common, and the effect fades over months. A fair choice for the vascular type, especially in skin that lasers would darken.</p>
        `,
      },
      {
        id: 'clinic-meso',
        category: 'clinic',
        title: 'Injected vitamin C, tranexamic acid and hyaluronate ("mesotherapy"): the largest controlled trial for colour',
        tldr: 'In 120 patients randomised to two injections of a sodium hyaluronate solution with vitamin C, tranexamic acid and glutathione or to control, the treated group\'s periorbital greyscale value rose, the pigment gap to normal skin narrowed from 23 to 14 units, quality of life improved and 96.7% were satisfied, while controls did not change. Tranexamic acid plus vitamin C matched PRP in an 18-patient split-face trial, and vitamin C mesotherapy was the most satisfying arm of the three-way trial.',
        evidence: 'moderate',
        focus: 'all',
        note: 'Best for: mixed pigment-and-vessel circles; a course of two to three, repeated',
        sessions: '2–3, two to three weeks apart',
        downtime: 'Bumps and bruises for days; burning',
        cost: '€150–300 / session',
        bodyHtml: `
          <p>Mesotherapy means shallow injections of a cocktail — here vitamin C for vessels and collagen, tranexamic acid for the vessel-driven pigment pathway it blocks in melasma, glutathione as an antioxidant, and non-cross-linked hyaluronate as a hydrating carrier. The 2025 trial is the largest controlled study for colour in this subject: 120 patients with periorbital hyperpigmentation were randomised to the injectable complex or to control, each receiving two treatments two weeks apart; at twelve weeks the treated group's greyscale reading rose from 162 to 170, the pigment difference from normal skin fell from 23.0 to 14.4 units, dermatology life-quality scores improved and 96.7% reported satisfaction, while the control group showed no significant change (<a href="https://pubmed.ncbi.nlm.nih.gov/41117156/" rel="noopener nofollow" target="_blank">hyaluronate-vitamin C-tranexamic acid trial</a>).</p>
          <p>Supporting it: a split-site randomised trial in 18 patients found intradermal tranexamic acid plus vitamin C matched platelet-rich plasma over three sessions (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626328/" rel="noopener nofollow" target="_blank">tranexamic acid vs PRP</a>), and vitamin C mesotherapy was the arm with the greatest pigment improvement and satisfaction — and the most burning — in the 45-woman three-way trial (<a href="https://pubmed.ncbi.nlm.nih.gov/29767467/" rel="noopener nofollow" target="_blank">three-arm trial</a>). Expect a week of bumps and bruises, a result at twelve weeks, and a repeat course when it fades. Ask what is in the syringe; "cocktail" formulations vary and only the one above has a controlled trial.</p>
        `,
      },
      {
        id: 'clinic-prp',
        category: 'clinic',
        title: 'Platelet-rich plasma: your own growth factors, three to seven sessions, and a trial record that points both ways',
        tldr: 'PRP beat carboxytherapy on histology in one 23-patient split-face trial (46.6% melanin reduction), matched it in another 30-patient trial in which a third of patients quit the PRP side for pain, matched tranexamic acid mesotherapy in 18, improved 30 patients with skin types III–IV, and lost badly to a peel in 42. Ten participants in the first study showed better colour homogeneity and no change in melanin. Real, inconsistent, painful, expensive.',
        evidence: 'emerging',
        focus: 'all',
        note: 'Best for: the mixed circle in someone who wants an autologous option and tolerates needles',
        sessions: '3–4, two to four weeks apart',
        downtime: 'Swelling and bruising for days',
        cost: '€200–400 / session',
        bodyHtml: `
          <p>Platelet-rich plasma is the patient's own blood spun to concentrate platelets and injected intradermally, the hope being growth factors that thicken skin and calm pigment. The first study, ten participants with one session, found significantly better colour homogeneity at three months and no change in melanin, hydration or wrinkles (<a href="https://pubmed.ncbi.nlm.nih.gov/24641609/" rel="noopener nofollow" target="_blank">first PRP study</a>). Since then the comparisons have gone every way: better than carboxytherapy on histology (46.6% vs 14.3% melanin reduction) in 23 patients (<a href="https://pubmed.ncbi.nlm.nih.gov/35514239/" rel="noopener nofollow" target="_blank">split-face trial</a>); equal to it in 30, with ten patients refusing to finish the PRP side because of pain (<a href="https://pubmed.ncbi.nlm.nih.gov/29297970/" rel="noopener nofollow" target="_blank">comparative trial</a>); equal to tranexamic acid mesotherapy in 18 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11626328/" rel="noopener nofollow" target="_blank">PRP vs mesotherapy</a>); improved in 30 patients with skin types III–IV, best in lower grades and constitutional pigment (<a href="https://pubmed.ncbi.nlm.nih.gov/39163646/" rel="noopener nofollow" target="_blank">phototype III–IV study</a>); and clearly worse than a TCA-lactic peel in 42 — 4.8% good improvement against 47.6% (<a href="https://pubmed.ncbi.nlm.nih.gov/31021041/" rel="noopener nofollow" target="_blank">PRP vs peel</a>).</p>
          <p>The honest reading is a modest, variable effect that depends on preparation, type of circle and who is judging, at the highest per-session price among the colour treatments and with the most downtime. The <a href="/regenerative-aesthetics">regenerative aesthetics guide</a> grades PRP across the face; under the eye it belongs behind peels and the vitamin cocktail, not in front of them.</p>
        `,
      },
      {
        id: 'clinic-fractional',
        category: 'clinic',
        title: 'Fractional and non-ablative lasers — CO2, 1,927 nm, Er:YAG — for the thin, crepey, mixed circle',
        tldr: 'Three sessions of fractional CO2 beat microneedling with 10% TCA on the pigment gap and satisfaction in a randomised Tehran trial; three sessions of a 1,927 nm non-ablative laser improved lightness and pigment score in 20 people; an Er:YSGG resurfacing improved atopic circles by about 74% in 10. Skin-quality tools that also lighten — with a week of downtime and a pigment risk in darker skin.',
        evidence: 'emerging',
        focus: 'all',
        note: 'Best for: the older mixed circle with crepey, thin skin and fine lines, in lighter skin types',
        sessions: '3, a month apart',
        downtime: '3–7 days of redness and swelling',
        cost: '€250–600 / session',
        bodyHtml: `
          <p>Fractional lasers punch microscopic columns of injury into the skin to provoke new collagen — a thicker curtain over the vessels — and, at the shorter wavelengths, to shed pigment. In a randomised trial of women aged 28–62, three monthly sessions of fractional CO2 reduced the measured darkness gap between the under-eye and the rest of the face more than three sessions of microneedling with 10% TCA, with higher satisfaction at the last visit (<a href="https://pubmed.ncbi.nlm.nih.gov/28622082/" rel="noopener nofollow" target="_blank">fractional CO2 vs needling-TCA</a>). A 1,927 nm non-ablative diode laser, three sessions two or four weeks apart in 20 randomised participants, significantly improved lightness and pigmentation score, with pores and wrinkles improving in the four-week group and side effects resolving within a week (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12178097/" rel="noopener nofollow" target="_blank">1,927 nm trial</a>). An Er:YSGG laser improved the circles of ten Korean atopic patients by about 74% at two and four months (<a href="https://pubmed.ncbi.nlm.nih.gov/23464975/" rel="noopener nofollow" target="_blank">Er:YSGG pilot</a>), and fractional Er:YAG with PRP outperformed the laser alone in a 32-patient comparison (<a href="https://pubmed.ncbi.nlm.nih.gov/33638928/" rel="noopener nofollow" target="_blank">Er:YAG plus PRP</a>). A series of 71 patients found non-ablative fractional, bipolar radiofrequency and IPL all improved elasticity and the appearance of the eye area, with the fractional laser and radiofrequency best (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8918123/" rel="noopener nofollow" target="_blank">fractional vs RF vs IPL</a>).</p>
          <p>These are the treatments for the circle that is also a texture problem — fine lines, crepe, thin skin — and they carry the same post-inflammatory pigment risk as any laser on darker skin, plus a week of visible swelling. The <a href="/laser-ipl">laser and IPL guide</a> and the <a href="/crows-feet">crow's feet guide</a> cover them in depth.</p>
        `,
      },
    ],
  },
  {
    id: 'inj',
    title: 'For the shadow: filling, moving or removing what casts it',
    intro: 'The structural circle answers to volume and anatomy, not colour. Here — and only here — the evidence includes large randomised trials.',
    sections: [
      {
        id: 'inj-filler',
        category: 'inj',
        title: 'Hyaluronic-acid filler in the tear trough: 87% improved at three months against 18% untreated, less tired in four out of five, holding a year',
        tldr: 'The one large randomised trial in this subject: 333 patients with moderate-to-severe hollows randomised to a purpose-built HA filler or no treatment; 87.4% improved at least a grade at three months versus 17.7% of controls, needle and cannula performed identically, 79% or more reported looking less tired and 76% reduced shadows, and satisfaction held to twelve months. A second filler\'s randomised trial in 135 people agreed. Best between 30 and 50; the wrong treatment for a bag or lax skin.',
        evidence: 'strong',
        focus: 'structural',
        note: 'Best for: a groove without a bag, in a 30-to-50-year-old face, from an injector who does this area weekly',
        sessions: '1, with an optional touch-up; repeat at 12–18 months',
        downtime: '3–7 days of swelling and bruising',
        cost: '€450–900 (1–2 ml)',
        bodyHtml: `
          <p>Filling the groove removes the shadow at once; the question was always whether the trials existed. They now do. In a multicentre, evaluator-blinded trial, 333 patients with moderate or severe infraorbital hollows were randomised to a low-swelling HA filler designed for the area (with an optional one-month touch-up) or to no treatment; at three months 87.4% of treated patients had improved by at least one grade on both sides against 17.7% of controls, needle and cannula results were the same, the investigator-rated aesthetic improvement stayed at 87–98% through twelve months, and patients reported looking younger (71% or more), less tired (79% or more) and with reduced under-eye shadows (76% or more) (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11334209/" rel="noopener nofollow" target="_blank">Restylane Eyelight trial</a>). A second randomised, controlled, evaluator-blinded trial of a soft HA gel in 135 participants (median age 47, 92% women) found improvement on investigator and participant scales at three months, sustained appraisal gains at twelve, and less bother from dark circles (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10575619/" rel="noopener nofollow" target="_blank">Volbella trial</a>). A 600-patient, 1,200-trough observational series found the result durable at a year and most effective between 30 and 40, useful to 50, and no longer the treatment of choice afterwards (<a href="https://pubmed.ncbi.nlm.nih.gov/35478038/" rel="noopener nofollow" target="_blank">600-patient series</a>).</p>
          <p>Two things make this a specialist's procedure rather than a lunchtime one. The skin is the thinnest on the face, so a filler placed too shallow shows as a blue Tyndall tint and a filler that draws water leaves a persistent puffiness; the trial used a purpose-built, low-water-affinity gel for that reason, and a 23-year surveillance review of a similar supportive gel found low rates of delayed nodules and inflammation (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11238711/" rel="noopener nofollow" target="_blank">23-year safety review</a>). And the wrong candidate — a real fat bag, loose skin, malar mounds, a face over 50 — gets a heavier, puffier eye rather than a lighter one; the Safety section and the <a href="/fillers#use-tear-trough">filler guide</a> cover the complications. Small volumes (0.5–1 ml per side), a cannula, and a photograph at two weeks; the antidote, hyaluronidase, is the reason to choose HA at all.</p>
        `,
      },
      {
        id: 'inj-fat',
        category: 'inj',
        title: 'Fat grafting to the tear trough: 91% satisfied across 4,046 cases, 8% complications, and no eraser',
        tldr: 'A meta-analysis of 39 studies (4,046 patients) of autologous fat to the eyelids and periorbital area found 90.9% satisfaction and a 7.9% complication rate — swelling, chemosis and, the one that matters, contour irregularity that cannot be dissolved. Permanent, natural in the right hands, lumpy in the wrong ones; nanofat and stem-cell versions add small trials, not certainty.',
        evidence: 'moderate',
        focus: 'structural',
        note: 'Best for: a deep groove in someone who wants a lasting result, from a surgeon with an eyelid practice',
        sessions: '1, sometimes a second',
        downtime: '1–2 weeks of swelling and bruising',
        cost: '€2,000–4,000',
        bodyHtml: `
          <p>Fat harvested from the abdomen or thigh, washed and injected in tiny parcels under the groove, takes as living tissue and lasts. The pooled evidence is observational but large: across 39 studies and 4,046 patients, satisfaction was 90.9% and the overall complication rate 7.9%, the frequent problems being oedema, chemosis (swelling of the eye's surface) and contour irregularity (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8016360/" rel="noopener nofollow" target="_blank">fat grafting meta-analysis</a>). In the three-class system, fat competes with HA for the groove without a bag and joins surgery for the deep groove with one (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5004220/" rel="noopener nofollow" target="_blank">classes and treatments</a>).</p>
          <p>The trade-off against HA is the eraser. A lumpy or overfilled HA result dissolves in a day with hyaluronidase; a lumpy fat graft under the thinnest skin on the face needs surgery. Nanofat, stromal vascular fraction and PRP additives improved darkness more than nanofat alone in a small randomised trial (five patients per arm) — an experiment, not a standard (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11187812/" rel="noopener nofollow" target="_blank">nanofat combinations trial</a>). Choose it for permanence, from an oculoplastic or facial plastic surgeon, after a filler has shown you what filling the groove does to your face.</p>
        `,
      },
      {
        id: 'inj-blepharoplasty',
        category: 'inj',
        title: 'Lower blepharoplasty with fat repositioning: the bag moved into the groove — 96.6% satisfied, 11% complications, 2.4% reoperated',
        tldr: 'When a fat bag sits above the groove, moving that fat down over the rim fills the trough with the thing that was casting the shadow. A systematic review of 33 studies (4,671 patients) found 11.2% total complications, 6.2% contour irregularity or under-correction and 2.4% reoperation; in a 176-patient series 175 reached grade zero with 96.6% satisfaction, and a 523-patient series improved every patient at least one grade. Permanent, surgical, and the only answer to bag-plus-groove.',
        evidence: 'moderate',
        focus: 'structural',
        note: 'Best for: a bag with a shadow beneath it, at any age; the definitive treatment for the structural type',
        sessions: 'Once',
        downtime: '2–3 weeks of bruising; scar-free if transconjunctival',
        cost: '€3,000–6,000',
        bodyHtml: `
          <p>Through an incision inside the lower lid (transconjunctival) or just under the lashes, the surgeon releases the ligament that makes the groove and drapes the bulging orbital fat down over the rim to fill it — turning the hill and the valley into one smooth slope. The complication data are pooled from 33 studies and 4,671 patients: 11.2% any complication, 6.2% unsatisfactory correction or contour irregularity, 6.2% haematoma, swelling or bleeding, and 2.4% reoperation (<a href="https://pubmed.ncbi.nlm.nih.gov/39158343/" rel="noopener nofollow" target="_blank">complications systematic review</a>). Outcome series are consistent: 175 of 176 patients reached a tear-trough grade of zero with a 4.4/5 satisfaction score and 96.6% satisfied (<a href="https://pubmed.ncbi.nlm.nih.gov/39016555/" rel="noopener nofollow" target="_blank">176-patient algorithm study</a>); 523 consecutive patients all improved at least one grade with 89% rating the result good and no lid malposition (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13457924/" rel="noopener nofollow" target="_blank">523-patient series</a>); and a 339-case comparison found adding segmental fat grafting narrowed the trough more than repositioning alone (<a href="https://pubmed.ncbi.nlm.nih.gov/33595637/" rel="noopener nofollow" target="_blank">repositioning vs grafting</a>).</p>
          <p>The tier is moderate because these are surgical series without controls, not because the effect is in doubt: for the bag-plus-groove face this is the treatment that works, permanently, once. The risks that matter are lid retraction or ectropion (rare with the inside-the-lid approach), hollowing if fat is removed rather than moved, and asymmetry. An oculoplastic surgeon or a facial plastic surgeon who shows you a year of their own results; the <a href="/eye-bags">under-eye bags guide</a> covers the operation and its alternatives in detail.</p>
        `,
      },
      {
        id: 'inj-pn',
        category: 'inj',
        title: 'Polynucleotides, skin boosters and "regenerative" injections under the eye: open-label series, no controls',
        tldr: 'A 61-person open-label, multinational, company-supported series of three polynucleotide injections reported colour improvement at three months; a non-cross-linked hyaluronic-acid booster has laboratory data and a small series. Plausible hydration and mild thickening, no controlled trial, and the same puffiness risk as any water-drawing gel in the thinnest skin on the face.',
        evidence: 'limited',
        focus: 'all',
        note: 'Best for: nothing yet — wait for a split-face trial before paying for one',
        sessions: '2–3, two to three weeks apart',
        downtime: 'Bumps and bruises for days',
        cost: '€250–450 / session',
        bodyHtml: `
          <p>Polynucleotides are purified DNA fragments from fish, injected intradermally with the claim of tissue repair and hydration; they are the fastest-growing under-eye treatment in European clinics and the least tested. The evidence is a real-world open-label cohort of 61 people across all types of dark circle, given three injections of about 1 ml per side two to three weeks apart and photographed with digital colour analysis at one and three months after the last (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13186231/" rel="noopener nofollow" target="_blank">polynucleotide cohort</a>). No control side, no blinded rater, a condition that fluctuates on its own, and an author list connected to the manufacturer — the design that the Safety section teaches you to discount.</p>
          <p>The non-cross-linked hyaluronic-acid "skin boosters" sold for the same purpose have laboratory data and small series for periorbital lines (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11902836/" rel="noopener nofollow" target="_blank">HA-polynucleotide complex</a>), and any gel that draws water into the lower lid can leave it puffier than it found it. The <a href="/fillers#booster-skinboosters">filler guide</a> grades the boosters across the face. Here, for now, the honest tier is the lowest one.</p>
        `,
      },
    ],
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The lower lid forgives less than any other site: the thinnest skin, the most visible mistakes, an eye a centimetre away.',
    sections: [
      {
        id: 'safety-filler',
        category: 'safety',
        title: 'Tear-trough filler: the blue tint, the puffiness that arrives years later, the nodule, and the eye',
        tldr: 'Across 52 published delayed complications, swelling was commonest (42%), then nodules (25%), xanthelasma-like yellow plaques (17%), migration and discolouration; malar oedema can appear from day one to three years and on ultrasound is usually filler inside the muscle layer blocking venous drainage — and clears within minutes of dissolving it. Blindness is rare but real. Low-water gels, small volumes, a cannula, an injector who owns hyaluronidase, and the wrong candidate turned away.',
        bodyHtml: `
          <p>The under-eye produces more filler complaints per millilitre than any other site. The immediate ones — bruising, swelling, a bluish Tyndall tint from gel placed too superficially — are common and mostly settle or dissolve. The delayed ones are the reason for caution: a systematic review of 52 published cases (98% women, mean age 48, 71% hyaluronic acid) found swelling in 42%, lumps or nodules in 25%, xanthelasma-like yellow plaques in 17%, migration in 8% and discolouration in 6% (<a href="https://pubmed.ncbi.nlm.nih.gov/34666405/" rel="noopener nofollow" target="_blank">delayed complications review</a>). Malar oedema — a persistent puffiness of the upper cheek — appeared from the day of injection to three years later in a 17-patient ultrasound series; in 23 of 26 eyes the filler lay inside the SMAS muscle layer, obstructing venous and lymphatic drainage, and dissolving it under ultrasound guidance restored flow and improved the swelling within minutes (<a href="https://pubmed.ncbi.nlm.nih.gov/37786282/" rel="noopener nofollow" target="_blank">malar oedema series</a>). A 2025 major review adds the rare catastrophes — filler in the orbit, and loss of vision from an artery — and the routine remedy for the rest: hyaluronidase (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12559836/" rel="noopener nofollow" target="_blank">periorbital filler complications review</a>).</p>
          <p>What reduces the risk is known: a low-swelling, purpose-built gel; 0.5–1 ml per side, never more at one sitting; placement deep on the bone with a cannula; an injector who does this area weekly and keeps hyaluronidase in the room; and a consultation that declines the bag, the lax lid, the malar mound and the festoon. Any new swelling, pain, blanching or change in vision after a periorbital injection is a same-day call.</p>
        `,
      },
      {
        id: 'safety-pih',
        category: 'safety',
        title: 'Lasers and peels in darker skin: the treatment that makes it worse',
        tldr: 'Post-inflammatory hyperpigmentation is the main risk of every peel and laser on this page, and it is highest in exactly the skin types that most often have pigmented circles. In 12 darker-skinned women a picosecond KTP and a thulium laser increased pigment rather than reducing it; the Q-switched studies that succeeded used low fluence, long courses and mostly lighter Asian skin. A test spot, the lowest setting that works, no tan, and a strict sunscreen after.',
        bodyHtml: `
          <p>Any inflammation in a reactive melanocyte population leaves pigment behind, and the periorbital melanocytes are among the most reactive on the face. That is the mechanism of the post-inflammatory circle in the first place, and it is why an aggressive laser or peel can hand you a darker circle than you started with. The split-face study of a picosecond 532 nm KTP against a fractional thulium laser in 12 women with pigmented circles found both "more likely to induce post-inflammatory hyperpigmentation than decrease the pigmentation", worst with the KTP and attributed to the participants' skin tone (<a href="https://pubmed.ncbi.nlm.nih.gov/38969818/" rel="noopener nofollow" target="_blank">picosecond KTP vs thulium</a>). A systematic review of treatments in Fitzpatrick types IV–VI reached similar caution (<a href="https://pubmed.ncbi.nlm.nih.gov/39172264/" rel="noopener nofollow" target="_blank">skin types IV–VI review</a>).</p>
          <p>The successful laser series used low fluences (about 4 J/cm² at 1,064 nm), many short sessions and eye shields; the successful peels used 10% TCA or less. In darker skin the order of preference reverses — creams, then carboxytherapy or the injected vitamins, then a low-fluence 1,064 nm laser with a test patch — and every procedure is preceded by weeks of sunscreen and a lightener and followed by the same. A tan, a recent eczema flare or a history of marks after acne are reasons to wait.</p>
        `,
      },
      {
        id: 'safety-actives',
        category: 'safety',
        title: 'Creams on the eyelid: irritation that darkens, hydroquinone rules, retinoids and pregnancy',
        tldr: 'Eyelid skin reacts to concentrations the cheek shrugs off, and the reaction itself leaves pigment. Retinoids and acids are started at a third of the facial dose and kept off the lash line; hydroquinone is prescription-only in the EU, used in 8–12-week courses with breaks; retinoids and hydroquinone are stopped in pregnancy; and anything that stings for more than a fortnight is making the circle worse, not better.',
        bodyHtml: `
          <p>The lower lid's thin epidermis and dense nerve supply mean that a retinoid, an acid or a 10% vitamin C that is fine on the cheek can produce a red, scaling, itchy lid — and the melanocytes respond to that inflammation with more pigment. The rules that follow: start a retinoid at the lowest strength every third night over a moisturiser; keep everything a few millimetres from the lashes; stop at the first sign of eczema rather than pushing through; and never treat an actively inflamed lid with a lightener. Hydroquinone is a prescription medicine in the EU, used in courses because prolonged use can cause ochronosis (a blue-black staining), and the many "hydroquinone-free" serums are free of its evidence as well as its side effects.</p>
          <p>Pregnancy and breastfeeding stop the retinoids and hydroquinone; sunscreen, vitamin C, azelaic acid and allergy control continue. Contact lens wearers should keep acids and retinoids out of the eye entirely — apply before bed after the lenses are out. Sunglasses, mineral sunscreen and a moisturiser are the three things every eyelid tolerates.</p>
        `,
      },
      {
        id: 'safety-surgery',
        category: 'safety',
        title: 'Surgery and fat: retraction, hollowing, lumps, and choosing the surgeon',
        tldr: 'Lower blepharoplasty carried an 11% complication rate across 4,671 patients — mostly under-correction, irregularity and bleeding, with 2.4% reoperated; the specific risks are lid retraction or ectropion with the skin approach, a hollow, skeletal eye if fat is removed rather than moved, and a lumpy graft that cannot be dissolved. An oculoplastic or facial plastic surgeon with a year of their own before-and-afters, and a filler trial first to see what filling does to your face.',
        bodyHtml: `
          <p>The pooled numbers are reassuring for a surgical procedure — 11.2% any complication, 2.4% reoperation across 33 studies (<a href="https://pubmed.ncbi.nlm.nih.gov/39158343/" rel="noopener nofollow" target="_blank">complications review</a>) — but the specific failures are visible for life. Pulling the lower lid down (retraction, ectropion) follows skin removal and healing contracture and is far rarer with the inside-the-lid approach; removing fat instead of repositioning it produces the hollow, "operated" eye of an earlier era; over-grafted fat under thin skin makes lumps that only more surgery removes (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8016360/" rel="noopener nofollow" target="_blank">fat grafting meta-analysis</a>). Chemosis — a jelly-like swelling of the eye's surface — is common for a week or two and frightening the first time.</p>
          <p>The safeguards are the surgeon's speciality (oculoplastic or facial plastic, with an eyelid practice rather than an occasional one), a look at a year of their own results in faces like yours, a plan that moves fat rather than removes it, and — for the groove without a bag — a trial of hyaluronic-acid filler first, because it shows in ten minutes what a permanent fill of that valley does to your expression.</p>
        `,
      },
      {
        id: 'safety-claims',
        category: 'safety',
        title: 'How to read "clinically proven to reduce dark circles by 47%"',
        tldr: 'Ask five questions: measured how (a colorimeter reading or a photograph judged blind), against what (a control side or nothing), by whom (the company or an independent clinic), in how many (eight-week studies of 20–90 people), and for a condition that fluctuates week to week. Most eye-cream claims fail three of the five; the two that pass are usually the ones with a split face and a blinded rater.',
        bodyHtml: `
          <p>Periorbital darkness varies with sleep, allergies, hydration, the time of day and the light, so any product applied for eight weeks by people who know they are being studied can show a "significant improvement" on an instrument. The studies behind the aisle mostly share that design: open-label, single-arm, company-run, with a colorimeter or a self-assessment as the endpoint. The 2021 systematic review's verdict on the whole literature — scarce high-quality evidence, recommendations to be "interpreted selectively" — applies with double force to the cosmetics (<a href="https://pubmed.ncbi.nlm.nih.gov/32740208/" rel="noopener nofollow" target="_blank">systematic review</a>).</p>
          <p>The designs that deserve your money are the ones that control for the fluctuation: a split-face comparison against vehicle, a blinded rater, a validated photographic scale (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7898348/" rel="noopener nofollow" target="_blank">the validated scale</a>), and a duration long enough to see through a hay-fever season. On this page those are the vitamin C trial, the Korean split-face cream trial, the 120-patient injectable trial and the two filler trials. Everything else is graded accordingly.</p>
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
        id: 'faq-sleep',
        category: 'faq',
        title: 'Are my dark circles from not sleeping enough?',
        tldr: 'Probably less than you think: 181 people randomised to a night without sleep showed no measurable change in periorbital darkness. Do the stretch, press and tilt tests instead.',
        bodyHtml: `
          <p>Sleep deprivation makes a face read as tired to observers, but the one objective, randomised study found no change in periorbital darkness after a night awake (<a href="https://pubmed.ncbi.nlm.nih.gov/31006920/" rel="noopener nofollow" target="_blank">sleep-deprivation study</a>). Chronic poor sleep may act slowly through congestion, and it travels with dark circles in clinic series, but the circle you see is more often pigment, vessels or a groove. The self-check above tells you which; the sleep is worth fixing anyway.</p>
        `,
      },
      {
        id: 'faq-hereditary',
        category: 'faq',
        title: 'They run in my family — is there any point treating them?',
        tldr: 'Yes, with lower expectations: constitutional pigment lightens with sunscreen, a retinoid, peels and the low-fluence lasers, and needs maintenance for life.',
        bodyHtml: `
          <p>Constitutional pigment is the most stubborn type because it is dermal and genetic, which is why the hydroquinone trial reported only mild improvement (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4966400/" rel="noopener nofollow" target="_blank">hydroquinone trial</a>) and the successful laser series needed eight sessions (<a href="https://pubmed.ncbi.nlm.nih.gov/21605241/" rel="noopener nofollow" target="_blank">laser study</a>). The realistic goal is a shade or two lighter and no further darkening, held with sunscreen and a retinoid, with a laser course every year or two if the skin tolerates it. Concealer is not a failure; it is the fourth tool.</p>
        `,
      },
      {
        id: 'faq-concealer',
        category: 'faq',
        title: 'What actually works in make-up?',
        tldr: 'Colour-correct, then conceal: peach or orange under blue-purple circles, yellow under brown ones, applied thin and set — over an SPF.',
        bodyHtml: `
          <p>A concealer alone turns a blue circle grey. Colour theory does the work: a peach or orange corrector neutralises blue-mauve vascular circles, a yellow or golden one neutralises brown pigment, and a thin skin-toned concealer goes over either, pressed rather than rubbed (rubbing is a daily micro-trauma that the Indian series found in a third of patients). Shadow circles are lightened by a slightly brighter concealer in the groove itself, not below it. A mineral sunscreen goes underneath everything, and removal is with an oil or micellar water and a soft cloth, not a scrub.</p>
        `,
      },
      {
        id: 'faq-filler-age',
        category: 'faq',
        title: 'Am I a candidate for tear-trough filler?',
        tldr: 'A groove without a bag, firm skin, roughly 30 to 50: yes. A bag, loose skin, puffiness or malar mounds: no — that is surgery.',
        bodyHtml: `
          <p>The 600-patient series found HA filler most effective between 30 and 40, useful to 50 and "no longer the treatment of choice" afterwards (<a href="https://pubmed.ncbi.nlm.nih.gov/35478038/" rel="noopener nofollow" target="_blank">600-patient series</a>), and the classification studies reserve it for the groove without significant fat bulging (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5004220/" rel="noopener nofollow" target="_blank">classes and treatments</a>). If you have a bag, filler under it makes a bigger bag; if your lower lid swells in the morning or after salt, it will swell more with a gel in it. A good injector turns those faces away.</p>
        `,
      },
      {
        id: 'faq-children',
        category: 'faq',
        title: 'My child has dark circles — what should I do?',
        tldr: 'Think allergy first: rhinitis, eczema, a blocked nose, rubbing. Treat those with the paediatrician; no cosmetics, no procedures.',
        bodyHtml: `
          <p>The "allergic shiner" is the classic sign: in 126 children with allergic rhinitis the shiners were darker and larger than in healthy children and tracked the allergy's duration and severity (<a href="https://pubmed.ncbi.nlm.nih.gov/19281911/" rel="noopener nofollow" target="_blank">allergic shiners study</a>). A blocked nose, mouth breathing, itchy eyes, eczema in the creases or a family history of atopy make the diagnosis; treating the allergy, and stopping the rubbing, is the treatment. Constitutional pigment can also appear in adolescence; sunscreen and sunglasses are all it needs until adulthood.</p>
        `,
      },
      {
        id: 'faq-how-long',
        category: 'faq',
        title: 'How long until I see a difference?',
        tldr: 'Filler: immediately. Peels and lasers: after a course of 4–8 over two to four months. Creams: judged at three months, vitamin C at six.',
        bodyHtml: `
          <p>The structural fix is instant and holds a year. The colour treatments are courses: peels every two to four weeks for four to six sessions, Q-switched lasers weekly to monthly for six to eight, carboxytherapy weekly for six, the injected vitamins two or three sessions three weeks apart, with the result judged a month after the last. Creams need eight to twelve weeks to show anything and the vitamin C trial ran six months. Photograph monthly in the same light; the mirror lies in both directions.</p>
        `,
      },
      {
        id: 'faq-iron',
        category: 'faq',
        title: 'Could it be anaemia or a vitamin deficiency?',
        tldr: 'Rarely the cause, occasionally a contributor to the vascular type through pallor: a blood count if you are tired, heavy-bleeding or vegetarian, not a supplement on spec.',
        bodyHtml: `
          <p>Anaemia makes skin paler, and paler lower-lid skin shows the plexus more — a plausible contributor to a vascular circle, mentioned in the reviews, tested in no trial. Iron on spec does nothing for the other types and has its own side effects. If you have symptoms — fatigue, heavy periods, a restricted diet — ask for a full blood count and ferritin; treat what is found, and expect the circle to be the last thing to change.</p>
        `,
      },
      {
        id: 'faq-cost-ladder',
        category: 'faq',
        title: 'What does it all cost?',
        tldr: 'Free to €6,000: allergy control and sunscreen at the bottom, a filler at €450–900 a year in the middle, surgery at the top.',
        bodyHtml: `
          <p>Indicative European private prices, to be confirmed in writing. <strong>Free to €30 a month:</strong> sleep, allergy treatment, gentle make-up removal, sunglasses, mineral sunscreen — and the largest share of any vascular improvement. <strong>€15–60 a month:</strong> a retinoid, a vitamin C, a vitamin K gel, a prescription lightener in courses. <strong>€400–1,600 per course:</strong> four to six peels, six carboxytherapy sessions, two or three injected-vitamin sessions. <strong>€900–2,800 per course:</strong> six to eight laser sessions, three fractional sessions, three PRP sessions. <strong>€450–900 a year:</strong> tear-trough filler. <strong>€2,000–6,000 once:</strong> fat grafting or lower blepharoplasty with fat repositioning. Spend from the bottom up; the shadow is the one item where jumping to the middle is rational.</p>
        `,
      },
    ],
  },
];

export const focusLabels: Record<FocusArea, string> = {
  pigment: 'For pigment',
  vascular: 'For vessels',
  structural: 'For the hollow',
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

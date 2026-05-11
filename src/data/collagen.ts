/**
 * Collagen guide — single source of truth.
 *
 * Both /collagen (drawer-based) and /collagen-deep (long-form) consume this.
 * `bodyHtml` is plain HTML — rendered with `set:html`. Keep external links
 * with rel="noopener nofollow" and target="_blank".
 */

export type Evidence = 'strong' | 'moderate' | 'emerging' | 'limited';

export type FocusArea =
  | 'skin'
  | 'joints'
  | 'bones'
  | 'muscle'
  | 'heart'
  | 'gut'
  | 'hair-nails'
  | 'brain'
  | 'weight'
  | 'general';

export type SectionCategory =
  | 'concept'
  | 'benefit'
  | 'cause'
  | 'sign'
  | 'prevent'
  | 'food'
  | 'supplement'
  | 'support-supplement'
  | 'therapy'
  | 'topical'
  | 'safety'
  | 'faq';

export interface Section {
  id: string;
  category: SectionCategory;
  title: string;
  tldr: string;
  evidence?: Evidence;
  focus?: FocusArea;
  bodyHtml: string;
  /** Optional: shown as a small note under the summary (e.g. "Best for: photoaging"). */
  note?: string;
}

export interface SectionGroup {
  id: string;
  title: string;
  intro: string;
  sections: Section[];
}

export const heroFacts: { stat: string; label: string }[] = [
  { stat: '28 types', label: 'of collagen — type I makes up ~90% of what your body produces' },
  { stat: '~1%/year', label: 'natural decline starting in your mid-20s, accelerating after menopause' },
  { stat: '1–15 g/day', label: 'effective dose range across most clinical trials, taken for 4–12 weeks' },
  { stat: '8–12 weeks', label: 'minimum to see skin and joint changes; bone density needs ~12 months' },
];

export const keyTakeaways: string[] = [
  'Collagen is the most abundant protein in your body — it builds skin, tendons, ligaments, cartilage, bone, and the walls of your arteries.',
  'Production declines naturally with age and is accelerated by sun, smoking, sugar, and alcohol. Once damaged, collagen does not fully recover on its own.',
  'Hydrolyzed collagen peptide supplements (1–15 g/day) have strong evidence for improving skin hydration, elasticity, and wrinkles, and moderate evidence for joint stiffness and bone density.',
  'For visible results in the skin, supplements work best alongside daily SPF, a topical retinoid at night, and vitamin C in the morning.',
  'For deeper changes (loose skin, scars, deep wrinkles), in-office treatments — microneedling, fractional lasers, Ultherapy, Sculptra — stimulate the body to produce new collagen at a level no oral supplement can match.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-is-collagen',
    category: 'concept',
    title: 'What is collagen?',
    tldr: 'A structural protein that holds your body together — skin, bone, cartilage, tendons, arteries.',
    bodyHtml: `
      <p>Collagen is a protein — specifically, the <a href="https://www.ncbi.nlm.nih.gov/books/NBK542226/" rel="noopener nofollow" target="_blank">most abundant structural protein</a> in animals. Structural proteins form the framework of your cells and tissues. There are <strong>28 known types</strong> of collagen; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8399689/" rel="noopener nofollow" target="_blank">type I accounts for about 90%</a> of the collagen in the human body.</p>
      <p>Chemically, collagen is built mainly from three amino acids: <strong>glycine, proline, and hydroxyproline</strong>. These form three strands that wind around each other to make collagen's characteristic <em>triple helix</em>.</p>
      <p>You find collagen in connective tissue, skin, tendons, bone, and cartilage. It provides mechanical strength and plays roles in tissue repair, immune response, cell-to-cell communication, and cell migration. Specialized cells called <strong>fibroblasts</strong> produce and maintain it.</p>
      <p>As you age, fibroblasts become less effective and existing collagen fibers fragment. Combined with the loss of <strong>elastin</strong> (another structural protein), this produces the classic signs of aging: sagging skin, lines, thinning bones, joint stiffness.</p>
    `,
  },
];

const benefits: Section[] = [
  {
    id: 'benefit-skin',
    category: 'benefit',
    title: 'Improves skin elasticity, hydration, and wrinkles',
    tldr: 'The most-studied benefit. Daily hydrolyzed collagen for 8–12 weeks measurably improves skin in clinical trials.',
    evidence: 'strong',
    focus: 'skin',
    bodyHtml: `
      <p>Collagen is a major component of your skin. It provides strength, elasticity, and helps retain hydration. As you age, your body <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8824545/" rel="noopener nofollow" target="_blank">produces less collagen</a>, leading to dry skin and wrinkles.</p>
      <p>A <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10180699/" rel="noopener nofollow" target="_blank">2023 review of 26 studies</a> (mostly in women) found that 1–12 grams of collagen per day for 4–12 weeks improved skin elasticity and hydration. A <a href="https://onlinelibrary.wiley.com/doi/10.1111/ijd.15518" rel="noopener nofollow" target="_blank">separate review of 19 trials</a> (1,125 participants, ages 20–70) reached the same conclusion for wrinkle reduction.</p>
      <p>The mechanism is thought to be indirect: ingested collagen peptides may signal fibroblasts to produce more collagen, elastin, and fibrillin in the dermis.</p>
      <p><strong>Hydrolyzed collagen</strong> — collagen broken into smaller peptides by enzymatic hydrolysis — is the form used in most studies, because it is <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6566347/" rel="noopener nofollow" target="_blank">more readily absorbed</a> than intact collagen.</p>
      <p class="text-ink/60 text-sm italic">Caveat: many of these trials are industry-funded. The effect sizes are real but moderate; collagen is a supporting actor to sunscreen and retinoids, not a replacement.</p>
    `,
  },
  {
    id: 'benefit-joints',
    category: 'benefit',
    title: 'Relieves joint stiffness and osteoarthritis pain',
    tldr: 'Helps stiffness more reliably than pain. Most effective in people already showing osteoarthritis symptoms.',
    evidence: 'moderate',
    focus: 'joints',
    bodyHtml: `
      <p>Cartilage — the cushion between your joints — is largely collagen. As cartilage degrades, joints stiffen and develop osteoarthritis. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10058045/" rel="noopener nofollow" target="_blank">Several trials</a> suggest collagen supplementation can help.</p>
      <p>A <a href="https://pubmed.ncbi.nlm.nih.gov/30368550/" rel="noopener nofollow" target="_blank">2018 meta-analysis</a> of trials in people with osteoarthritis found significant improvements in <strong>joint stiffness</strong>, though not in pain scores or functional limitation. The proposed mechanism: oral collagen peptides accumulate in cartilage and prompt local tissue to produce more collagen, reducing inflammation.</p>
      <p>Type II collagen (specifically <em>undenatured</em> type II, UC-II) is sometimes marketed for joints, but evidence between hydrolyzed type I/III blends and UC-II is comparable at the doses used.</p>
    `,
  },
  {
    id: 'benefit-bones',
    category: 'benefit',
    title: 'Slows bone loss and supports bone density',
    tldr: 'Specific collagen peptides (5 g/day for 12 months) improved bone mineral density in postmenopausal women.',
    evidence: 'moderate',
    focus: 'bones',
    bodyHtml: `
      <p>Bone is mostly collagen — the calcium and other minerals are layered onto a collagen scaffold. As you age, this scaffold deteriorates, leading to <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7415937/" rel="noopener nofollow" target="_blank">osteoporosis</a>.</p>
      <p>In a 12-month trial, postmenopausal women who took calcium, vitamin D, and 5 g of collagen daily showed <a href="https://pubmed.ncbi.nlm.nih.gov/25314004/" rel="noopener nofollow" target="_blank">significantly less bone breakdown</a> and better preservation of mineral density than those taking calcium and vitamin D alone. A separate 66-woman study found an <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5793325/" rel="noopener nofollow" target="_blank">increase of up to 7% in bone mineral density</a> after 12 months on 5 g of specific collagen peptides daily.</p>
      <p>Bone is slow to remodel — expect 6–12 months of consistent supplementation before any meaningful DEXA-measurable change.</p>
    `,
  },
  {
    id: 'benefit-muscle',
    category: 'benefit',
    title: 'May boost muscle mass alongside resistance training',
    tldr: 'In older men with sarcopenia, collagen plus exercise outperformed exercise alone. Not a replacement for whey for hypertrophy.',
    evidence: 'moderate',
    focus: 'muscle',
    bodyHtml: `
      <p>Collagen makes up 1–10% of skeletal muscle by weight. In a <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4594048/" rel="noopener nofollow" target="_blank">12-week study of 26 older men with sarcopenia</a>, 15 g of collagen daily combined with a resistance program produced significantly greater muscle mass and strength gains than exercise alone.</p>
      <p>For pure hypertrophy in healthy adults, whey protein remains the better-evidenced choice because of its leucine content. Collagen is low in leucine and not a complete protein. But for older adults losing muscle, collagen plus resistance training is a reasonable strategy.</p>
    `,
  },
  {
    id: 'benefit-heart',
    category: 'benefit',
    title: 'May improve arterial flexibility and HDL cholesterol',
    tldr: 'A 6-month trial showed reduced artery stiffness and a 6% rise in "good" HDL on 16 g/day. Small sample — needs replication.',
    evidence: 'emerging',
    focus: 'heart',
    bodyHtml: `
      <p>Arteries are lined with collagen. Without enough of it, artery walls lose flexibility — a step toward atherosclerosis, heart attack, and stroke.</p>
      <p>In a <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5429168/" rel="noopener nofollow" target="_blank">6-month trial of 30 healthy adults</a>, daily 16 g of collagen produced a significant reduction in measures of artery stiffness, and HDL ("good") cholesterol rose by an average of 6%.</p>
      <p>This is a single small trial. Promising, but don't replace your statin or your cardiologist with collagen powder.</p>
    `,
  },
  {
    id: 'benefit-gut',
    category: 'benefit',
    title: 'May help with leaky gut / intestinal permeability',
    tldr: 'Anecdotal and theoretically plausible. No randomized trials confirm the claim yet.',
    evidence: 'limited',
    focus: 'gut',
    bodyHtml: `
      <p>Some practitioners and patients report that collagen supplements help with "leaky gut syndrome" (intestinal permeability) — the idea being that glycine and proline support the cells lining the gut wall.</p>
      <p>There are no randomized controlled trials confirming this benefit in humans. Self-reports are positive but unverified. Bone broth is the food-based form usually associated with this use case.</p>
    `,
  },
  {
    id: 'benefit-hair-nails',
    category: 'benefit',
    title: 'Strengthens nails; modest hair benefits reported',
    tldr: 'Nails: measurable improvement in a clinical trial. Hair: mostly anecdotal but consistent reports.',
    evidence: 'moderate',
    focus: 'hair-nails',
    bodyHtml: `
      <p>In a 2017 study published in the <a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.12393" rel="noopener nofollow" target="_blank">Journal of Cosmetic Dermatology</a>, daily collagen produced measurable improvements in nail growth rate, brittleness, and breakage.</p>
      <p>Hair evidence is thinner but consistent in self-reports — less breakage and slightly faster growth. Mechanism is plausible because hair is keratin and collagen provides amino acid precursors and dermal papilla support.</p>
    `,
  },
  {
    id: 'benefit-brain',
    category: 'benefit',
    title: 'Brain health and mood — unproven',
    tldr: 'No human trials. Glycine has mild calming effects, which may explain anecdotal mood reports.',
    evidence: 'limited',
    focus: 'brain',
    bodyHtml: `
      <p>Some users report improved mood, sleep, or reduced anxiety on collagen. No clinical trials have specifically examined collagen for brain health. The glycine content (about 1 g of glycine per 10 g of collagen) may have mild sedative or pro-sleep effects, which could explain individual reports, but this isn't a brain-targeted intervention.</p>
    `,
  },
  {
    id: 'benefit-weight',
    category: 'benefit',
    title: 'Weight loss and metabolism — unproven',
    tldr: 'No evidence collagen accelerates weight loss. Any protein can help satiety; collagen has no special properties here.',
    evidence: 'limited',
    focus: 'weight',
    bodyHtml: `
      <p>Marketing claims that collagen promotes weight loss or "boosts metabolism" are not supported by clinical trials. Like any protein, it can contribute to satiety — but collagen is actually a <em>lower-quality protein</em> than whey or casein because it lacks tryptophan. If your goal is weight loss, prioritize total protein intake and a calorie deficit, not collagen specifically.</p>
    `,
  },
];

const causes: Section[] = [
  {
    id: 'causes',
    category: 'cause',
    title: 'What causes collagen to break down?',
    tldr: 'Age is unavoidable. Sun, smoking, sugar, and alcohol are the four big controllable accelerants.',
    bodyHtml: `
      <p>Collagen loss has one unavoidable cause and four major modifiable ones.</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Age.</strong> Fibroblasts gradually become less active. Existing fibers fragment and become loosely organized. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6540032/" rel="noopener nofollow" target="_blank">Production naturally declines</a> roughly 1% per year from your mid-twenties and accelerates after menopause.</li>
        <li><strong>UV exposure.</strong> Ultraviolet light directly <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8115293/" rel="noopener nofollow" target="_blank">degrades collagen</a> and activates matrix metalloproteinases (MMPs) that chew it up. UV is responsible for the majority of visible "aging" on sun-exposed skin.</li>
        <li><strong>Smoking.</strong> Cigarette smoke <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6715121/" rel="noopener nofollow" target="_blank">degrades collagen</a> and constricts the blood vessels that supply skin with oxygen and nutrients. Result: deeper wrinkles, slower wound healing, and characteristic perioral lines.</li>
        <li><strong>Added sugar and ultra-processed foods.</strong> Sugar binds to collagen in a process called <em>glycation</em>, producing <a href="https://www.healthline.com/nutrition/advanced-glycation-end-products" rel="noopener nofollow" target="_blank">advanced glycation end products (AGEs)</a>. AGEs make collagen stiff and brittle and impair the proteins that repair it.</li>
        <li><strong>Excessive alcohol.</strong> Reduces collagen production and impairs skin repair mechanisms. Heavy drinkers age visibly faster.</li>
      </ul>
    `,
  },
];

const signs: Section[] = [
  {
    id: 'signs',
    category: 'sign',
    title: 'Signs your collagen levels are dropping',
    tldr: 'You cannot measure collagen in a blood test, but the body shows it: skin laxity, joint stiffness, weaker tendons.',
    bodyHtml: `
      <p>There's no standard blood test for whole-body collagen status, but the signs are recognizable:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li>Wrinkled, crepey, or sagging skin</li>
        <li>Hollowing around the eyes, temples, and cheeks</li>
        <li>Shrinking, weakening muscles and muscle aches</li>
        <li>Stiffer, less flexible tendons and ligaments</li>
        <li>Joint pain or early osteoarthritis from worn cartilage</li>
        <li>Loss of mobility from joint stiffness</li>
        <li>Gastrointestinal symptoms from thinning of the gut lining</li>
        <li>Poor circulation from less elastic arteries</li>
      </ul>
      <p class="mt-4">Most of these are normal age-related findings. They become a concern when they appear earlier than peers, or progress faster than you'd expect.</p>
    `,
  },
];

const prevent: Section[] = [
  {
    id: 'prevent',
    category: 'prevent',
    title: 'How to slow collagen loss',
    tldr: 'Wear sunscreen daily, don\'t smoke, limit sugar and alcohol, eat enough protein. Boring, but it dominates everything else.',
    bodyHtml: `
      <p>You can't stop age-related collagen loss entirely, but lifestyle accounts for the majority of <em>premature</em> loss. In order of impact:</p>
      <ol class="list-decimal pl-5 space-y-2">
        <li><strong>Daily broad-spectrum SPF 30+.</strong> The single highest-impact intervention. Regular use prevents an estimated 80% of photoaging.</li>
        <li><strong>Don't smoke.</strong> Nothing else on this list will compensate for it.</li>
        <li><strong>Limit added sugar and ultra-processed foods.</strong> AGEs stiffen collagen and inactivate its repair proteins.</li>
        <li><strong>Limit alcohol.</strong> Especially evening drinking, which compounds with poor sleep to reduce overnight skin repair.</li>
        <li><strong>Eat enough total protein.</strong> 1.2–1.6 g/kg/day is a reasonable target for adults focused on tissue maintenance.</li>
        <li><strong>Sleep.</strong> Growth hormone (released during deep sleep) drives fibroblast activity.</li>
        <li><strong>Avoid crash diets.</strong> Rapid weight loss strips both fat and structural support from the face.</li>
      </ol>
    `,
  },
];

const foods: Section[] = [
  {
    id: 'foods',
    category: 'food',
    title: 'Collagen-rich foods',
    tldr: 'Animal parts most people don\'t eat anymore: skin, bones, tendons, knuckles. Bone broth is the convenient form.',
    bodyHtml: `
      <p>Collagen is concentrated in the parts of animals modern diets have mostly stopped eating: connective tissue, skin, bones, joints. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7230273/" rel="noopener nofollow" target="_blank">Dietary sources</a> include:</p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Bones, skin, and ligaments of animals — chicken skin, pig knuckles, oxtail</li>
        <li>Fish skin and certain seafood (jellyfish, fish heads)</li>
        <li>Bone broth made from simmering bones and connective tissue for 12+ hours</li>
        <li>Slow-cooked stews and braises that extract collagen as gelatin</li>
      </ul>
      <p>Vitamin C is required for the body to assemble collagen from amino acids. Eat a vitamin-C-rich food (citrus, peppers, berries, broccoli) alongside collagen-rich meals.</p>
    `,
  },
];

const collagenSupplements: Section[] = [
  {
    id: 'supplement-collagen',
    category: 'supplement',
    title: 'Hydrolyzed collagen peptide supplements',
    tldr: 'The convenient daily form. 10 g of bovine or marine hydrolyzed peptides covers the trial-validated dose range.',
    evidence: 'strong',
    focus: 'general',
    bodyHtml: `
      <p>The most common form of supplemental collagen is <strong>hydrolyzed collagen peptides</strong> (also sold as "collagen hydrolysate"). Hydrolysis breaks the protein into short chains the body can absorb easily.</p>
      <p>A <a href="https://www.sciencedirect.com/science/article/pii/S2405844023021680" rel="noopener nofollow" target="_blank">2023 review</a> concludes that hydrolyzed collagen reduces wrinkle formation, increases skin elasticity, and improves hydration. A <a href="https://onlinelibrary.wiley.com/doi/10.1155/2024/8752787" rel="noopener nofollow" target="_blank">2024 study</a> reported skin, scalp, and hair benefits at daily or every-other-day dosing.</p>
      <h4 class="font-display text-xl mt-4">Sources</h4>
      <ul class="list-disc pl-5 space-y-1">
        <li><strong>Bovine</strong> (cow) — most common, broad type I + III spectrum, well-studied for skin and joints.</li>
        <li><strong>Marine</strong> (fish skin/scales) — type I only, smaller peptides, often slightly more bioavailable. Pricier.</li>
        <li><strong>Porcine</strong> (pig) — similar profile to bovine.</li>
        <li><strong>Chicken</strong> — higher in type II, used for joint-focused formulas.</li>
      </ul>
      <h4 class="font-display text-xl mt-4">How to take it</h4>
      <ul class="list-disc pl-5 space-y-1">
        <li>10 g/day is a sensible default, covering most trial doses.</li>
        <li>Mix into coffee, tea, smoothies, or yogurt. Tasteless when unflavored.</li>
        <li>Take with a source of vitamin C for collagen synthesis cofactor support.</li>
        <li>Timing doesn't matter much; consistency does.</li>
      </ul>
    `,
  },
];

const supportSupplements: Section[] = [
  {
    id: 'support-hyaluronic',
    category: 'support-supplement',
    title: 'Hyaluronic acid',
    tldr: 'Holds water in skin and indirectly supports collagen. Works topically (serums), via injection, or orally.',
    evidence: 'moderate',
    focus: 'skin',
    bodyHtml: `
      <p><a href="https://www.medicalnewstoday.com/articles/326385" rel="noopener nofollow" target="_blank">Hyaluronic acid</a> (HA) is a sugar molecule that holds up to 1,000× its weight in water. It supports collagen indirectly by maintaining the moist environment fibroblasts need to function.</p>
      <p>A <a href="https://www.mdpi.com/2310-2861/11/4/281" rel="noopener nofollow" target="_blank">2025 review</a> found HA helps maintain skin hydration, elasticity, and firmness, and supports wound healing. HA depletion is associated with wrinkles, sagging, and joint mobility issues.</p>
      <p>A <a href="https://pubmed.ncbi.nlm.nih.gov/40009152/" rel="noopener nofollow" target="_blank">2025 study</a> showed HA combined with purified polynucleotides increased both the amount and quality of collagen in skin.</p>
      <p><strong>Available as:</strong></p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Topical serums and creams (most accessible)</li>
        <li>Dermal-filler injections (immediate volumization)</li>
        <li>Oral capsules (smaller effect, but systemic)</li>
      </ul>
      <p class="text-sm text-ink/60 mt-2">Side effects from injections may include pain, itching, bruising, swelling, or temporary skin discoloration.</p>
    `,
  },
  {
    id: 'support-vitamin-c',
    category: 'support-supplement',
    title: 'Vitamin C (oral and topical)',
    tldr: 'Required cofactor for collagen synthesis. Deficiency causes scurvy. Topical L-ascorbic acid serums add UV protection.',
    evidence: 'strong',
    focus: 'skin',
    bodyHtml: `
      <p>Vitamin C is <a href="https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/" rel="noopener nofollow" target="_blank">essential</a> for collagen cross-linking. Without it, collagen cannot be assembled properly — severe deficiency causes <em>scurvy</em> (gum bleeding, poor wound healing, skin breakdown).</p>
      <p>Your body can't make vitamin C. You have to eat it. Best sources: citrus, red and green peppers, strawberries, broccoli, kiwi.</p>
      <p><strong>Topical vitamin C</strong> — typically 10–20% L-ascorbic acid at pH below 3.5 — also <a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15748" rel="noopener nofollow" target="_blank">supports collagen and protects against UV damage</a> when applied in the morning under sunscreen.</p>
    `,
    note: 'Top product: SkinCeuticals C E Ferulic',
  },
  {
    id: 'support-ginseng',
    category: 'support-supplement',
    title: 'Ginseng',
    tldr: 'Adaptogen with anti-inflammatory effects. A 2024 study showed it increased circulating collagen.',
    evidence: 'emerging',
    focus: 'general',
    bodyHtml: `
      <p>A <a href="https://www.sciencedirect.com/science/article/pii/S1226845324001350" rel="noopener nofollow" target="_blank">2024 study</a> found ginseng increases the amount of collagen in the bloodstream. Mechanism is thought to combine anti-inflammatory and antioxidant effects with mild stimulation of fibroblast activity in skin cells.</p>
      <p>Available as tea, tincture, extracts, or supplements. Quality varies wildly — buy standardized extracts from reputable manufacturers.</p>
    `,
  },
  {
    id: 'support-retinoids',
    category: 'support-supplement',
    title: 'Retinoids & carotenoids',
    tldr: 'Vitamin A derivatives. Prescription tretinoin and OTC retinol drive new collagen and slow breakdown.',
    evidence: 'strong',
    focus: 'skin',
    bodyHtml: `
      <p>Retinol, retinaldehyde, and tretinoin (prescription) are vitamin A derivatives that bind nuclear receptors in skin cells and upregulate collagen production while downregulating MMPs (the enzymes that break collagen down).</p>
      <p>Topical retinoids <a href="https://academic.oup.com/bjd/article/189/Supplement_1/i17/7333865" rel="noopener nofollow" target="_blank">also help protect skin from UV-induced collagen breakdown</a>.</p>
      <p>Food sources of vitamin A include beef liver, sweet potatoes, spinach, pumpkin, and carrots. Topically, retinoids do the heavy lifting — the <a href="https://www.aad.org/public/cosmetic/younger-looking/firm-sagging-skin" rel="noopener nofollow" target="_blank">American Academy of Dermatology</a> notes they slightly improve skin texture but don't penetrate deeply enough to tighten loose skin on their own.</p>
    `,
    note: 'Topicals covered in detail under "Boost at home → Topical retinoids" below.',
  },
];

const therapies: Section[] = [
  {
    id: 'therapy-fractional-laser',
    category: 'therapy',
    title: 'Fractional lasers',
    tldr: 'Microscopic columns of treatment surrounded by intact skin. 1–3 sessions, 3–14 days downtime depending on depth.',
    evidence: 'strong',
    focus: 'skin',
    note: 'Best for: photodamage, acne scars, fine lines, texture',
    bodyHtml: `
      <p>Fractional lasers create microscopic treatment zones while leaving the surrounding skin intact. The untreated tissue accelerates healing and amplifies collagen remodeling.</p>
      <p><strong>Course:</strong> 1–3 sessions typically. Downtime is roughly 3–7 days for gentler non-ablative platforms, 5–14 days for stronger resurfacing.</p>
      <p><strong>Best fits:</strong> photodamage, acne scarring, mild-to-moderate wrinkles, textural irregularity.</p>
      <p><strong>Caution / contraindications:</strong> active skin infection, recent isotretinoin use, history of keloids, higher pigment-loss risk in darker skin types when aggressive settings are used.</p>
      <p><strong>Branded systems:</strong> Fraxel Dual/FTX (classic dual-wavelength), Clear + Brilliant (gentlest "prejuvenation"), Halo (hybrid ablative + non-ablative), Lumenis M22 ResurFX (non-ablative module).</p>
    `,
  },
  {
    id: 'therapy-laser-resurfacing',
    category: 'therapy',
    title: 'Ablative laser resurfacing (CO₂ / erbium)',
    tldr: 'The heavy artillery. One session, 1–2 weeks downtime, dramatic results for deep wrinkles and scars.',
    evidence: 'strong',
    focus: 'skin',
    note: 'Best for: deep wrinkles, acne scarring, photoaging',
    bodyHtml: `
      <p>Ablative resurfacing removes the entire outer skin layer with controlled laser energy and heats the dermis to drive new collagen formation. CO₂ goes deeper; erbium is milder.</p>
      <p><strong>Course:</strong> typically a single treatment for full-field CO₂. Meaningful downtime — 1–2 weeks of redness, peeling, and social isolation — is the price for the deepest results available without surgery.</p>
      <p><strong>Best fits:</strong> deeper wrinkles, acne and surgical scars, significant photoaging.</p>
      <p><strong>Caution / contraindications:</strong> recent isotretinoin use, scarring disorders, active outbreaks or infection, higher post-inflammatory pigmentation risk in darker phototypes.</p>
      <p><strong>Branded systems:</strong> UltraPulse, ActiveFX (CO₂); various erbium platforms; Halo for shorter downtime via hybrid resurfacing.</p>
    `,
  },
  {
    id: 'therapy-rf-microneedling',
    category: 'therapy',
    title: 'RF microneedling',
    tldr: 'Microneedles deliver radiofrequency heat into the dermis. 2–4 sessions, ~24 hours redness.',
    evidence: 'strong',
    focus: 'skin',
    note: 'Best for: acne scars, pores, mild laxity',
    bodyHtml: `
      <p>RF microneedling combines the mechanical injury of microneedles with radiofrequency heat delivered into the dermis. The dual stimulus is one of the most efficient collagen-induction methods available, with relatively low downtime.</p>
      <p><strong>Course:</strong> 2–4 sessions a few weeks apart. Redness usually settles within 24 hours.</p>
      <p><strong>Best fits:</strong> acne scarring, enlarged pores, textural concerns, mild skin laxity.</p>
      <p><strong>Caution / contraindications:</strong> active infection, healing disorders, recent isotretinoin. Less suitable for severe ptosis (sagging) — at that point you need a surgical lift.</p>
      <p><strong>Branded systems:</strong> Morpheus8 (deeper dermal/subdermal reach, body capability), Profound RF (temperature-controlled, collagen/elastin/HA remodeling).</p>
    `,
  },
  {
    id: 'therapy-microneedling-prp',
    category: 'therapy',
    title: 'Microneedling + PRP',
    tldr: 'Microneedles paired with platelet-rich plasma from your own blood. 3–4 sessions, 24–48 hours redness.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: acne scarring, dullness, mild aging',
    bodyHtml: `
      <p>PRP-enhanced microneedling applies platelet-rich plasma (drawn from your own blood and concentrated) over fresh microneedling channels. The platelets release growth factors that compound the wound-healing collagen response.</p>
      <p><strong>Course:</strong> 3–4 sessions. Downtime is usually 24–48 hours of redness.</p>
      <p><strong>Best fits:</strong> acne scars, uneven texture, dullness, mild laxity.</p>
      <p><strong>Caution / contraindications:</strong> conditions that affect blood handling, impaired healing, inflamed or infected skin.</p>
      <p><strong>What differentiates premium providers:</strong> physician-led PRP processing (consistency matters), depth control of the microneedling device, often paired with LED.</p>
    `,
  },
  {
    id: 'therapy-microneedling',
    category: 'therapy',
    title: 'Standard microneedling (collagen induction therapy)',
    tldr: 'Controlled micro-injuries trigger natural healing and collagen synthesis. 3–4 sessions, 1–5 days redness.',
    evidence: 'strong',
    focus: 'skin',
    note: 'Best for: fine lines, acne scars, pores, stretch marks',
    bodyHtml: `
      <p>The original collagen-induction therapy. A device with fine needles creates controlled micro-injuries that trigger the body's wound-healing cascade — without the heat of RF microneedling or the depth of fractional lasers.</p>
      <p><strong>Course:</strong> 3–8 weeks apart, typically 3–4 sessions. Best results often build over 3–6 months, with yearly maintenance.</p>
      <p><strong>Best fits:</strong> acne scars, fine lines, pores, stretch marks, texture. Works across most skin tones.</p>
      <p><strong>Caution / contraindications:</strong> active inflammatory skin disease, infection, recent isotretinoin, healing disorders.</p>
      <p><strong>Branded systems:</strong> SkinPen (FDA-cleared, low downtime positioning). Provider expertise often matters more than brand.</p>
    `,
  },
  {
    id: 'therapy-ultherapy',
    category: 'therapy',
    title: 'Microfocused ultrasound (Ultherapy)',
    tldr: 'Ultrasound delivers heat to deep tissue layers — including SMAS. Single session, minimal downtime, results build over 2–6 months.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: mild brow, jawline, neck, submental laxity',
    bodyHtml: `
      <p>Ultherapy uses microfocused ultrasound with real-time visualization to deliver energy deep into tissue layers — including the SMAS layer that a surgical facelift addresses. The heat stimulates collagen remodeling and provides a lifting effect.</p>
      <p><strong>Course:</strong> typically a single session. Zero to minimal downtime. Results build over 2–6 months.</p>
      <p><strong>Best fits:</strong> mild-to-moderate brow, jawline, neck, and submental laxity. <em>Not</em> a replacement for a surgical lift when there is significant excess skin.</p>
      <p><strong>Safe across most skin tones</strong> when properly selected.</p>
      <p><strong>Branded systems:</strong> Ultherapy PRIME — the current premium evolution, with faster treatment time and better comfort than the original Ulthera.</p>
    `,
  },
  {
    id: 'therapy-rf-tightening',
    category: 'therapy',
    title: 'Monopolar RF tightening (Thermage)',
    tldr: 'Bulk dermal heating from a single session. Little downtime. Peak result over 2–6 months, lasts 1–2 years.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: mild laxity, fine wrinkles',
    bodyHtml: `
      <p>Monopolar radiofrequency heats large volumes of dermal collagen, causing immediate contraction and stimulating remodeling over the following months. No needles, no breaks in the skin.</p>
      <p><strong>Course:</strong> usually one session. Little to no downtime. Peak improvement over 2–6 months, lasting roughly 1–2 years.</p>
      <p><strong>Best fits:</strong> mild laxity and wrinkles. Less effective for severe sagging.</p>
      <p><strong>Contraindications:</strong> implanted pacemakers / AICDs. Caution with dermal fillers, pregnancy/breastfeeding, epilepsy.</p>
      <p><strong>Branded systems:</strong> Thermage FLX — flagship, with AccuREP calibration, an eyelid indication, integrated cooling/vibration, and single-treatment positioning.</p>
    `,
  },
  {
    id: 'therapy-chemical-peels',
    category: 'therapy',
    title: 'Chemical peels (TCA, glycolic, phenol)',
    tldr: 'Acid removes outer skin layers and triggers a healing-driven collagen response. Light to deep depending on agent.',
    evidence: 'strong',
    focus: 'skin',
    note: 'Best for: dyschromia, photoaging, mild wrinkles, acne scars',
    bodyHtml: `
      <p>Chemical peels apply acid to remove skin layers in a controlled way. Light peels (glycolic, salicylic) need minimal downtime; medium peels (TCA) heal in ~7–14 days; deep phenol peels are dramatic but slow to recover.</p>
      <p><strong>Best fits:</strong> dyschromia, sun damage, mild wrinkling, acne scars.</p>
      <p><strong>Caution / contraindications:</strong> pregnancy, keloid history, frequent cold sores, recent isotretinoin, post-inflammatory hyperpigmentation risk in some darker phototypes.</p>
      <p><strong>What differentiates premium providers:</strong> physician protocol (concentration, prep regimen, combination peel strategy, sedation depth for deep peels, structured aftercare). Brand of acid matters less than who is wielding it.</p>
    `,
  },
  {
    id: 'therapy-threads',
    category: 'therapy',
    title: 'Thread lifts (PDO / PLA / PCL)',
    tldr: 'Absorbable threads physically reposition tissue and trigger collagen as they dissolve. Months-to-years effect.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: younger patients, mild-to-moderate laxity',
    bodyHtml: `
      <p>Absorbable surgical threads (PDO, PLA, or PCL polymers) are placed under the skin to reposition tissue mechanically and simultaneously stimulate collagen as the body resorbs them.</p>
      <p><strong>Course:</strong> single placement. Recovery is fast — typically ~5 days of swelling and bruising. Results are subtler than a facelift and last months to a few years depending on thread type.</p>
      <p><strong>Best fits:</strong> relatively younger patients with mild-to-moderate laxity who aren't yet candidates for a surgical lift.</p>
      <p><strong>Limitation:</strong> not ideal when significant excess skin requires actual excision.</p>
    `,
  },
  {
    id: 'therapy-sculptra',
    category: 'therapy',
    title: 'Poly-L-lactic acid biostimulation (Sculptra)',
    tldr: 'Injectable biostimulator. ~3 sessions over 3–4 months. Gradual collagen build over weeks to months. Lasts up to 2 years.',
    evidence: 'strong',
    focus: 'skin',
    note: 'Best for: diffuse volume loss, folds, jawline, overall skin quality',
    bodyHtml: `
      <p>Sculptra is poly-L-lactic acid (PLLA) injected into the dermis. Unlike a hyaluronic acid filler, it doesn't add volume directly — it triggers the body to build new collagen around the PLLA particles over weeks to months.</p>
      <p><strong>Course:</strong> typically about 3 sessions over 3–4 months. Minimal downtime. Results build gradually.</p>
      <p><strong>Duration:</strong> benefits can last up to 2 years.</p>
      <p><strong>Best fits:</strong> diffuse volume loss, nasolabial folds, jawline support, general skin quality.</p>
      <p><strong>Caution:</strong> nodule and lump risk requires careful injection technique and patient massage protocol. Not ideal for patients who want immediate visible results — Sculptra is a slow-build treatment by design.</p>
    `,
  },
  {
    id: 'therapy-led-ipl',
    category: 'therapy',
    title: 'LED red light & IPL photorejuvenation',
    tldr: 'LED (low-power) is gentle and protocol-based; IPL (intense pulsed light) targets pigment and vessels more aggressively.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: pigment, redness, mild fine lines, low-downtime maintenance',
    bodyHtml: `
      <p><strong>LED red and near-infrared light</strong> (typically 630–850 nm) stimulates mitochondrial activity and collagen synthesis through photobiomodulation. Multiple weekly sessions are required to see results. Very low downtime. Devices range from clinic panels to wearable masks.</p>
      <p><strong>IPL photorejuvenation</strong> uses broad-spectrum light to target pigment irregularities, vascular changes, and some photoaging features. 1–3 sessions, minimal downtime. Some temporary darkening of pigmented spots is expected before they slough off.</p>
      <p><strong>Branded systems:</strong> Lumenis M22 Universal IPL (modular, filter-driven, physician-grade), Sciton BBL HEROic (high-speed pulsed light for larger-area efficiency). LED tends to be evaluated by wavelength and irradiance rather than by brand.</p>
    `,
  },
];

const topicals: Section[] = [
  {
    id: 'topical-sunscreen',
    category: 'topical',
    title: 'Broad-spectrum sunscreen (SPF 30+)',
    tldr: 'The single highest-impact daily intervention. Regular use prevents an estimated 80% of photoaging.',
    evidence: 'strong',
    focus: 'skin',
    note: 'Top pick: SkinCeuticals Physical Fusion (tinted, 100% micronized zinc oxide)',
    bodyHtml: `
      <p>UV radiation generates reactive oxygen species and activates MMPs that chew up collagen. Daily SPF prevents this entire cascade.</p>
      <p><strong>Protocol:</strong> apply every morning. Reapply every 2 hours of meaningful sun exposure, after swimming, after sweating. Use enough — roughly a quarter teaspoon for the face alone.</p>
      <p><strong>Safety:</strong> very safe; non-irritating for most. Mineral (zinc oxide / titanium dioxide) for sensitive skin and pregnancy.</p>
    `,
  },
  {
    id: 'topical-retinoids',
    category: 'topical',
    title: 'Topical retinoids (tretinoin, retinol)',
    tldr: 'The gold standard for photoaging. Drives new collagen and elastin while reducing breakdown.',
    evidence: 'strong',
    focus: 'skin',
    note: 'Top pick: SkinCeuticals 1.0% Retinol (high-strength, time-release)',
    bodyHtml: `
      <p>Vitamin A derivatives are the most clinically validated topical for anti-aging. They bind nuclear receptors in skin cells and upregulate collagen/elastin synthesis while downregulating breakdown.</p>
      <p><strong>Protocol:</strong> use at night, starting low and increasing as tolerated — 0.025–0.1% prescription tretinoin, or 0.3–1% OTC retinol, 2–3× per week before nightly. Always wear sunscreen.</p>
      <p><strong>Side effects:</strong> peeling, redness, and photosensitivity — especially during the first 4–6 weeks. Manageable with slow ramp-up and bland moisturizers.</p>
      <p><strong>Contraindications:</strong> pregnancy and breastfeeding (category C/D).</p>
    `,
  },
  {
    id: 'topical-vitamin-c',
    category: 'topical',
    title: 'Topical vitamin C (L-ascorbic acid)',
    tldr: 'Antioxidant + collagen cross-linking cofactor. Pairs with SPF in the morning.',
    evidence: 'strong',
    focus: 'skin',
    note: 'Top pick: SkinCeuticals C E Ferulic (15% L-ascorbic acid + vitamin E + ferulic)',
    bodyHtml: `
      <p>L-ascorbic acid stabilizes collagen fibers via cross-linking and quenches free radicals that would otherwise degrade them. A 12% L-AA topical was shown to double dermal collagen over 60 days.</p>
      <p><strong>Protocol:</strong> 10–20% pure L-ascorbic acid serum at pH below 3.5, every morning before sunscreen. Air and light degrade the active — use opaque packaging and replace every 3–4 months.</p>
      <p><strong>Side effects:</strong> stinging in higher concentrations. Patch test if sensitive.</p>
    `,
  },
  {
    id: 'topical-exfoliants',
    category: 'topical',
    title: 'Chemical exfoliants (AHAs / BHAs)',
    tldr: 'Controlled epidermal turnover. Glycolic acid upregulates collagen production in studies.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Top pick: NEOSTRATA Glycolic Renewal Smoothing Cream (20% glycolic)',
    bodyHtml: `
      <p>Alpha hydroxy acids (glycolic, lactic, mandelic) work at the skin surface; beta hydroxy acid (salicylic) penetrates oil and works inside pores. Both stimulate dermal remodeling at appropriate concentrations.</p>
      <p><strong>Protocol:</strong> home-use 5–15% glycolic or 2% salicylic 1–3× per week, or monthly professional peels. Pair with SPF — exfoliants make skin temporarily UV-sensitive.</p>
      <p><strong>Side effects:</strong> redness, dryness, photosensitivity. Avoid on broken or irritated skin.</p>
    `,
  },
  {
    id: 'topical-niacinamide',
    category: 'topical',
    title: 'Niacinamide & ceramides',
    tldr: 'Boring but effective. Niacinamide supports collagen cross-linking; ceramides protect the barrier.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Top picks: SkinCeuticals Metacell Renewal B3, Dr. Barbara Sturm Ceramide Complex',
    bodyHtml: `
      <p>Niacinamide (vitamin B3) supports cellular energy and collagen cross-linking, plus improves barrier function and reduces pigmentation. Ceramides are the lipid bricks of the skin barrier — depletion drives inflammation that damages collagen.</p>
      <p><strong>Protocol:</strong> 4–5% niacinamide serum AM and PM, paired with a ceramide-rich moisturizer.</p>
      <p><strong>Side effects:</strong> very safe. Under 1% of users get mild flushing.</p>
    `,
  },
  {
    id: 'topical-peptides',
    category: 'topical',
    title: 'Peptides (Matrixyl, copper peptides)',
    tldr: 'Small chains that signal fibroblasts to produce collagen, elastin, and HA. Modest effects.',
    evidence: 'emerging',
    focus: 'skin',
    note: 'Top pick: SkinMedica TNS Advanced+ Serum',
    bodyHtml: `
      <p>Signaling peptides like palmitoyl pentapeptide-4 (Matrixyl) and GHK-Cu (copper peptide) bind receptors that trigger collagen, elastin, and hyaluronic acid synthesis. Evidence is mostly in vitro and small human trials, with modest measured effects.</p>
      <p><strong>Protocol:</strong> daily peptide serum AM and PM.</p>
      <p><strong>Side effects:</strong> generally well tolerated; rare sensitivity.</p>
    `,
  },
  {
    id: 'topical-growth-factors',
    category: 'topical',
    title: 'Growth-factor serums (EGF / FGF)',
    tldr: 'Recombinant growth factors that mimic wound-healing signals. Limited evidence, premium pricing.',
    evidence: 'emerging',
    focus: 'skin',
    note: 'Top pick: Sue Devitt Triple C Brightening Serum (fibroblast-conditioned media)',
    bodyHtml: `
      <p>Topical EGF (epidermal growth factor) and FGF (fibroblast growth factor) attempt to mimic the body's natural wound-healing signals to drive repair and collagen synthesis. Studies are small and few.</p>
      <p><strong>Protocol:</strong> apply nightly after cleansing.</p>
      <p><strong>Safety:</strong> generally safe; stick to reputable brands — quality control matters for biologics.</p>
    `,
  },
  {
    id: 'topical-antioxidants',
    category: 'topical',
    title: 'Topical antioxidants (vitamin E, polyphenols)',
    tldr: 'Scavenge free radicals before they damage collagen. Best paired with vitamin C.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Top pick: Clarins Double Serum (dual-phase, antioxidant)',
    bodyHtml: `
      <p>Free radicals are a primary collagen-damage pathway. Topical antioxidants (vitamin E, ferulic acid, green tea polyphenols, resveratrol) neutralize them before they can do harm. Vitamin E is most effective in combination with vitamin C.</p>
      <p><strong>Protocol:</strong> daily antioxidant serum or cream, typically in the morning under sunscreen.</p>
      <p><strong>Safety:</strong> very safe; rare allergy.</p>
    `,
  },
  {
    id: 'topical-led',
    category: 'topical',
    title: 'At-home LED therapy (red / near-infrared)',
    tldr: 'Photobiomodulation. 10–20 minute sessions, 3–5× per week. Many small trials show wrinkle improvement.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Top device: Joovv Solo (medical-grade 660 nm + 850 nm panel)',
    bodyHtml: `
      <p>Red (630–660 nm) and near-infrared (810–850 nm) light penetrate skin and stimulate mitochondrial cytochrome c oxidase, increasing cellular energy and fibroblast activity. Multiple small trials show modest wrinkle reduction via increased collagen.</p>
      <p><strong>Protocol:</strong> 10–20 minutes per session, 3–5× per week. Consistency matters more than session length.</p>
      <p><strong>Safety:</strong> very safe. Avoid direct eye exposure with high-irradiance devices.</p>
    `,
  },
  {
    id: 'topical-sauna',
    category: 'topical',
    title: 'Infrared / far-infrared sauna',
    tldr: 'Heat may induce heat-shock proteins; near-IR may also upregulate collagenase. Mixed evidence.',
    evidence: 'limited',
    focus: 'skin',
    note: 'Top device: Sunlighten Sanctuary IR Sauna (full-spectrum, adjustable)',
    bodyHtml: `
      <p>Heat stress induces heat-shock proteins and may increase collagen/elastin. One study suggests skin benefits; others note that some near-IR wavelengths can upregulate collagen-degrading enzymes. Evidence is conflicting.</p>
      <p><strong>Protocol:</strong> 15–20 minutes, 2–3× per week.</p>
      <p><strong>Safety:</strong> stay hydrated. Avoid if you have cardiovascular issues or are pregnant.</p>
    `,
  },
  {
    id: 'topical-cryo',
    category: 'topical',
    title: 'Cold therapy / cryotherapy',
    tldr: 'Reduces inflammation; collagen effects unproven.',
    evidence: 'limited',
    focus: 'skin',
    bodyHtml: `
      <p>Cold exposure reduces inflammation and may trigger repair pathways. Most evidence is from exercise recovery, not skin collagen. Cryo facials are pleasant and reduce puffiness, but there's no strong evidence they meaningfully drive collagen production.</p>
      <p><strong>Protocol:</strong> short cold showers or occasional cryo facials.</p>
      <p><strong>Safety:</strong> avoid with cardiovascular or respiratory issues.</p>
    `,
  },
  {
    id: 'topical-microcurrent',
    category: 'topical',
    title: 'Microcurrent facials',
    tldr: 'Low-level electrical currents claimed to "tone" facial muscles. Mostly transient firming; collagen impact unclear.',
    evidence: 'limited',
    focus: 'skin',
    note: 'Top device: NuFACE Trinity',
    bodyHtml: `
      <p>Microcurrent devices deliver low-level electrical pulses claimed to stimulate facial muscles and fibroblasts. Some users report firmer skin; rigorous collagen data is sparse, and effects appear largely transient.</p>
      <p><strong>Protocol:</strong> 5–20 minutes, 2–3× per week.</p>
      <p><strong>Contraindications:</strong> pacemakers or metal facial implants.</p>
    `,
  },
  {
    id: 'topical-massage',
    category: 'topical',
    title: 'Facial massage, dermaplaning, gua sha, rollers',
    tldr: 'Pleasant, transiently de-puffing. Negligible long-term collagen effects.',
    evidence: 'limited',
    focus: 'skin',
    bodyHtml: `
      <p>Manual techniques increase circulation and offer mild exfoliation. Benefits are mostly short-lived. Useful as enjoyable adjuncts; don't expect collagen restructuring from a jade roller.</p>
      <p><strong>Protocol:</strong> daily or weekly, as desired.</p>
      <p><strong>Safety:</strong> use a gentle technique to avoid bruising.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety',
    category: 'safety',
    title: 'Side effects and safety',
    tldr: 'Generally well tolerated. Watch for allergens (fish, shellfish, eggs) and kidney-stone risk in susceptible people.',
    bodyHtml: `
      <p>Collagen supplements are generally well tolerated. The most important caveats:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Allergens.</strong> Many collagens are made from fish, shellfish, or eggs. Read the label if you have allergies.</li>
        <li><strong>Mild GI symptoms.</strong> Some users report nausea, bloating, or heartburn, though <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8824545/" rel="noopener nofollow" target="_blank">research has not consistently identified these as side effects</a>.</li>
        <li><strong>Kidney stones.</strong> Collagen contains hydroxyproline, which the body converts to oxalate. People prone to oxalate stones may want to <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5685519/" rel="noopener nofollow" target="_blank">avoid collagen supplementation</a> or discuss with a urologist.</li>
        <li><strong>Pregnancy and breastfeeding.</strong> No clear evidence of harm, but data are limited. Discuss with a clinician before starting.</li>
      </ul>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-how-long',
    category: 'faq',
    title: 'How long until I see results from collagen?',
    tldr: '8–12 weeks for skin and joint changes. Bone density needs about 12 months.',
    bodyHtml: `
      <p>Collagen turnover is slow. Most skin and joint trials use a minimum of <strong>8 weeks</strong> to detect effects. Some bone-health trials run <strong>12 months</strong> before measurable density changes appear. Consistency matters more than dose — daily intake over months beats sporadic megadoses.</p>
    `,
  },
  {
    id: 'faq-daily',
    category: 'faq',
    title: 'Is it safe to take collagen every day?',
    tldr: 'Yes for most people. Few side effects reported across multi-year trials.',
    bodyHtml: `
      <p>For most healthy adults, daily collagen supplementation appears safe. Reported side effects in trials are infrequent and mild. The main exceptions are people with allergies to the source protein, oxalate-stone formers, and individuals on a clinician-supervised low-protein diet for kidney disease.</p>
    `,
  },
  {
    id: 'faq-kidneys',
    category: 'faq',
    title: 'Is collagen safe for your kidneys?',
    tldr: 'Usually yes. If you have a history of kidney stones, reconsider.',
    bodyHtml: `
      <p>Collagen contains the amino acid hydroxyproline, which the body converts to oxalate. Excess oxalate can contribute to kidney stones in susceptible people. If you have a history of oxalate stones or stage 3+ kidney disease, talk to a clinician before adding daily collagen.</p>
    `,
  },
  {
    id: 'faq-vegan',
    category: 'faq',
    title: 'Is there a vegan collagen?',
    tldr: 'No — true collagen is animal-derived. "Vegan collagen boosters" supply the amino acids and cofactors instead.',
    bodyHtml: `
      <p>All true collagen comes from animals. Products marketed as "vegan collagen" supply the building blocks (glycine, proline, lysine), the cofactor (vitamin C), and sometimes peptide signals — but they do not contain collagen itself. The evidence base for these blends is much thinner than for actual hydrolyzed collagen peptides.</p>
    `,
  },
  {
    id: 'faq-form',
    category: 'faq',
    title: 'Powder, pill, liquid, or gummy — which is best?',
    tldr: 'Powder gives you the most collagen per dollar and the largest dose. Pills and gummies usually under-dose.',
    bodyHtml: `
      <p>Powder is the most cost-effective and easiest to dose at clinical-trial levels (10–15 g/day). A typical capsule contains 0.5–1 g of collagen — you'd need 10–20 pills daily to match a powder serving. Gummies are similar: pleasant, severely under-dosed, and usually loaded with sugar.</p>
      <p>Liquid collagen is convenient but expensive per gram. Choose based on consistency-of-use, not marketing.</p>
    `,
  },
  {
    id: 'faq-combine',
    category: 'faq',
    title: 'Should I combine collagen with other supplements?',
    tldr: 'Vitamin C is the most useful pairing. Hyaluronic acid is reasonable for skin. Avoid stacking unproven extras.',
    bodyHtml: `
      <p>Vitamin C is the only supplement with a clear mechanistic reason to pair with collagen — it's the cofactor your body needs to assemble collagen properly. 200–500 mg/day is plenty.</p>
      <p>Hyaluronic acid (oral or topical) is reasonable for skin-focused users. Beyond that, most "collagen-boosting" stacks are marketing — the evidence for one extra ingredient on top of collagen + vitamin C + a retinoid + SPF is thin.</p>
    `,
  },
  {
    id: 'faq-vs-treatments',
    category: 'faq',
    title: 'Supplements vs. in-office treatments — what works better?',
    tldr: 'Different magnitudes. Supplements give incremental improvement; in-office treatments produce visible, often dramatic change.',
    bodyHtml: `
      <p>Oral collagen produces measurable but moderate effects on the skin (typically 10–20% improvement in elasticity scores over 8–12 weeks). In-office treatments — fractional lasers, RF microneedling, Ultherapy, Sculptra — produce visible results that are often dramatic.</p>
      <p>The two strategies aren't competing. Supplements maintain a baseline; in-office treatments make step changes. Most people who care about long-term anti-aging use both.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPED FOR PAGE LAYOUTS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'The basics',
    intro: 'What collagen actually is, and why it matters.',
    sections: concept,
  },
  {
    id: 'benefits',
    title: 'Benefits',
    intro: 'Nine commonly cited benefits, sorted by strength of evidence.',
    sections: benefits,
  },
  {
    id: 'loss',
    title: 'Causes & signs of collagen loss',
    intro: 'What burns through your collagen and how to recognize the consequences.',
    sections: [...causes, ...signs, ...prevent],
  },
  {
    id: 'boost-diet',
    title: 'Boost it: diet & supplements',
    intro: 'Food sources and supplements with clinical evidence behind them.',
    sections: [...foods, ...collagenSupplements, ...supportSupplements],
  },
  {
    id: 'boost-topical',
    title: 'Boost it: topicals & at-home devices',
    intro: 'Evidence-ranked daily-care interventions you control yourself.',
    sections: topicals,
  },
  {
    id: 'boost-clinical',
    title: 'Boost it: clinical treatments',
    intro: 'In-office therapies that stimulate collagen at depths supplements and topicals cannot reach.',
    sections: therapies,
  },
  {
    id: 'safety',
    title: 'Side effects & safety',
    intro: 'When to be cautious.',
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

export const evidenceLabels: Record<Evidence, string> = {
  strong: 'Strong evidence',
  moderate: 'Moderate evidence',
  emerging: 'Emerging evidence',
  limited: 'Limited evidence',
};

export const focusLabels: Record<FocusArea, string> = {
  skin: 'Skin',
  joints: 'Joints',
  bones: 'Bones',
  muscle: 'Muscle',
  heart: 'Heart',
  gut: 'Gut',
  'hair-nails': 'Hair & nails',
  brain: 'Brain & mood',
  weight: 'Weight',
  general: 'General',
};

export function allSections(): Section[] {
  return groups.flatMap((g) => g.sections);
}

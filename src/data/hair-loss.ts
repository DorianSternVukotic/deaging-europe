/**
 * Hair loss guide — single source of truth (problem template).
 *
 * Consumed by /hair-loss. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: hair loss is a diagnosis before it is a shopping list.
 * Pattern loss, telogen effluvium, alopecia areata and the scarring alopecias
 * look alike from the outside and need different tools. Only four things have
 * strong, repeated trial evidence for pattern loss; the tiers say which, and
 * men's and women's evidence is graded separately because it differs.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'pattern' | 'shedding' | 'areata' | 'scarring' | 'general';

export type SectionCategory = 'concept' | 'context' | 'home' | 'rx' | 'clinic' | 'safety' | 'faq';

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
  'Hair loss is a diagnosis before it is a shopping list. Pattern loss, shedding (telogen effluvium), alopecia areata and the scarring alopecias look alike from the outside and need different tools — a widening part versus handfuls in the shower already tells you which one you have.',
  'Only four things have strong, repeated trial evidence for pattern loss: topical minoxidil (both sexes), finasteride and dutasteride (men), and hair transplantation for stable loss with donor hair. Everything else is an add-on or a hope.',
  'For women the useful middle tier is real but smaller: low-dose oral minoxidil, spironolactone, microneedling with minoxidil, PRP and light devices. Finasteride 1 mg failed outright in postmenopausal women, and hormone therapy is not a hair treatment.',
  'Supplements work only where a deficiency exists — iron, vitamin D, rarely zinc. Biotin fails in trials; Nutrafol and Viviscal have company-run trials with modest gains and no comparison with minoxidil. Test first, then buy.',
  'Expect two to eight weeks of extra shedding on minoxidil, first change at three to four months, a fair verdict at twelve, and maintenance for as long as you want the result. Treatments stop loss far more reliably than they regrow it — the cost of waiting is the hair you keep.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-pattern',
    kind: 'Hormones',
    title: 'DHT, and the estrogen that used to buffer it',
    blurb: 'DHT shortens the growth phase in genetically sensitive follicles. Men have more of it; in women the signal gets louder when estrogen falls — which is why thinning so often starts at 45–55.',
  },
  {
    id: 'why-early',
    kind: 'Time',
    title: 'A growth phase that keeps getting shorter',
    blurb: 'Anagen shortens with age even without DHT, and pattern loss is progressive by definition. Treatments stop it far more reliably than they rebuild it, so the value of starting is the hair you keep.',
  },
  {
    id: 'type-shedding',
    kind: 'Shocks',
    title: 'Birth, fever, surgery, crash diets, GLP-1s, grief',
    blurb: 'A shock pushes follicles into rest all at once, and two to three months later they shed together. Alarming — and self-limiting, once the trigger has passed.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'hair-cycle',
    category: 'concept',
    title: 'The hair cycle, in one minute',
    tldr: 'Each follicle grows for 2–8 years, rests for 2–4 months, sheds and restarts; 85–90% are growing at any time and 50–100 hairs a day is normal.',
    bodyHtml: `
      <p>Every follicle runs its own cycle: a growth phase (anagen) of two to eight years, a two-to-four-week shutdown (catagen), and a two-to-four-month rest (telogen) before the old hair is shed and a new one starts. On a healthy scalp about 85–90% of the roughly 100,000 follicles are growing at any moment and 50–100 hairs fall out a day — which is why a full brush is normal and a full drain is not, and why the cycles are deliberately out of sync (<a href="https://ishrs.org/hair-loss-and-the-hair-growth-cycle/" rel="noopener nofollow" target="_blank">ISHRS</a>; <a href="https://dermnetnz.org/topics/hair-shedding" rel="noopener nofollow" target="_blank">DermNet</a>).</p>
      <p>Two things go wrong, and telling them apart is the whole game. In <strong>pattern hair loss</strong> the follicle does not die; it miniaturises — each cycle the growth phase gets shorter and the hair it makes gets finer, until a terminal hair has become vellus fuzz. That is slow, mapped across the scalp, and reversible while the follicle is still cycling. In <strong>telogen effluvium</strong> the follicles are fine, but a shock pushes far more of them than usual into rest at once, and two to three months later they all shed together. That is sudden, diffuse, alarming — and self-limiting.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'How common it is — and why nobody talks about it',
    tldr: 'About 40% of women and half of men show pattern loss by 50; one in four sheds after COVID; scarring hairline loss in postmenopausal women is rising.',
    bodyHtml: `
      <p>By 50, roughly 40% of women show pattern hair loss and about half of men; the European guideline puts lifetime figures at up to 80% of Caucasian men and 42% of women (<a href="https://dermnetnz.org/topics/female-pattern-hair-loss" rel="noopener nofollow" target="_blank">DermNet</a>; <a href="https://www.ncbi.nlm.nih.gov/books/NBK430924/" rel="noopener nofollow" target="_blank">StatPearls</a>; <a href="https://onlinelibrary.wiley.com/doi/10.1111/jdv.14624" rel="noopener nofollow" target="_blank">S3 guideline</a>). Early, clinically detectable female pattern loss is already present in about 12% of women in their twenties. After COVID-19, one in four or five patients shed hair two to three months later (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9262270/" rel="noopener nofollow" target="_blank">2022 cohort</a>). And the one to worry about — frontal fibrosing alopecia, a scarring loss of the hairline and eyebrows in mostly postmenopausal women — has risen steadily since it was first described in 1994, with an average age at diagnosis of about 56 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9357920/" rel="noopener nofollow" target="_blank">2022 review</a>).</p>
      <p>Almost nobody talks about it because women's hair loss, unlike men's, has no cultural script. That silence has a cost: women typically start treatment years after onset, and every treatment below works better on a follicle that is still cycling.</p>
    `,
  },
  {
    id: 'why-early',
    category: 'concept',
    title: 'Why timing matters more than product choice',
    tldr: 'Treatments stop loss far better than they rebuild it — finasteride cut the 5-year odds of further visible loss by 93% — so the value of starting early is the hair you keep.',
    bodyHtml: `
      <p>Treatments for pattern loss are far better at stopping loss than at rebuilding it. The clearest number comes from finasteride's five-year study in men: treated men were 93% less likely than placebo to show further visible loss, while the regrowth curve peaked at year one or two and then slowly declined (<a href="https://pubmed.ncbi.nlm.nih.gov/18573712/" rel="noopener nofollow" target="_blank">5-year data</a>). The same shape holds for minoxidil in women. So the real value of starting early is the hair you keep, not the hair you regrow — and a follicle that has miniaturised to vellus and stopped cycling is beyond every medicine on this page. From there, only a transplant moves hair.</p>
      <p>Practically: photograph your part or crown in the same light today, decide whether this is shedding or thinning (next section), and give any treatment a fair twelve months. The ceiling of what is possible drops a little every year you wait.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-pattern',
    category: 'context',
    title: 'Pattern hair loss (androgenetic alopecia)',
    tldr: 'Gradual and mapped: a widening part and thinner ponytail in women, temples and crown in men; the pull test is quiet and the diameters vary under a dermatoscope.',
    focus: 'pattern',
    bodyHtml: `
      <p>Pattern (androgenetic) hair loss is gradual, symmetrical and follows a map. In women it shows as a widening centre part, a thinner ponytail and a see-through crown while the front hairline usually holds — graded on the Ludwig or Sinclair scales. In men it is the temples and crown on the Hamilton–Norwood scale. Under a dermatoscope the giveaway is variation in hair diameter — more than 20% of hairs thinner than their neighbours — with single-hair follicular units where there used to be two or three (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4000932/" rel="noopener nofollow" target="_blank">review of diagnosis</a>). The pull test is usually negative; the loss is quiet.</p>
      <p>What it is not: it is not caused by shampoo, hats, washing too often or "poor circulation", and it is not a vitamin deficiency — though a deficiency can add a shedding component on top. It is a genetically programmed sensitivity of specific follicles to androgens, which is why the treatments that work (minoxidil, 5-alpha-reductase inhibitors, anti-androgens, transplantation) are the ones that address the follicle or the hormone.</p>
    `,
  },
  {
    id: 'type-shedding',
    category: 'context',
    title: 'Telogen effluvium — the handfuls',
    tldr: 'Sudden, diffuse shedding 2–3 months after a trigger (birth, fever, surgery, crash diet, GLP-1s, iron, thyroid, drugs) — alarming, positive pull test, self-limiting in 3–6 months.',
    focus: 'shedding',
    bodyHtml: `
      <p>Telogen effluvium is the handfuls-in-the-shower kind: diffuse, sudden, with a positive pull test (six or more hairs come away when a bundle of 50–60 is tugged) and a clear trigger two to three months earlier — childbirth, a high fever or COVID-19, surgery and anaesthesia, a crash diet or bariatric surgery, starting or stopping hormonal contraception, thyroid swings, iron deficiency, or a new drug (retinoids, some antidepressants and anticoagulants, and the GLP-1 weight-loss injections) (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10381949/" rel="noopener nofollow" target="_blank">2023 review</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12530271/" rel="noopener nofollow" target="_blank">GLP-1 systematic review</a>). Post-COVID shedding typically begins around two months after infection and settles within six (<a href="https://www.jaad.org/article/S0190-9622(21)02149-6/fulltext" rel="noopener nofollow" target="_blank">JAAD</a>).</p>
      <p>The reassuring part: the follicles are intact, and acute telogen effluvium resolves on its own within three to six months once the trigger has passed. The less reassuring part: in women with underlying pattern loss a shed often "unmasks" thinning that was already there, and chronic telogen effluvium — shedding that persists beyond six months, often with no trigger found — does exist and responds best to low-dose oral minoxidil. Treatment is the cause (iron, thyroid, protein) plus patience; minoxidil is optional and shortens recovery only modestly.</p>
    `,
  },
  {
    id: 'type-areata',
    category: 'context',
    title: 'Alopecia areata — patches',
    tldr: 'Autoimmune, round smooth patches, sometimes eyebrows or the whole scalp; unrelated to DHT, so minoxidil and finasteride are the wrong tools — JAK inhibitors are the right ones.',
    focus: 'areata',
    bodyHtml: `
      <p>Alopecia areata is autoimmune: T cells attack the growing follicle and produce smooth, round bald patches (sometimes with short "exclamation-mark" hairs at the edge), occasionally eyebrow, beard or whole-scalp loss, and pitted nails. It comes and goes, often regrows on its own in limited cases, and has nothing to do with DHT — so minoxidil and finasteride are the wrong tools. What changed the picture is the JAK-inhibitor class: baricitinib and ritlecitinib are approved in the EU for severe alopecia areata after phase 3 trials in which a third or more of patients with near-total loss regrew most of their scalp hair (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11325239/" rel="noopener nofollow" target="_blank">BRAVE-AA</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12105426/" rel="noopener nofollow" target="_blank">ALLEGRO</a>). Patchy loss is a dermatology appointment, not a pharmacy visit.</p>
    `,
  },
  {
    id: 'type-scarring',
    category: 'context',
    title: "Scarring alopecias — the ones you can't wait on",
    tldr: 'Frontal fibrosing alopecia and its cousins destroy the follicle: a receding hairline with itch, pale shiny skin or eyebrow loss needs a dermatologist within weeks.',
    focus: 'scarring',
    bodyHtml: `
      <p>Scarring (cicatricial) alopecias destroy the follicle and its stem cells, so hair lost is lost for good — the aim of treatment is to stop the fire, not to regrow. Frontal fibrosing alopecia is the one to know: a band of pale, smooth skin as the hairline recedes, thinning or lost eyebrows, sometimes itching, burning or tiny bumps along the hairline, mostly in white postmenopausal women, and increasingly common (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9357920/" rel="noopener nofollow" target="_blank">2022 review</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11952711/" rel="noopener nofollow" target="_blank">2025 review</a>). Lichen planopilaris (patchy, inflamed, itchy) and central centrifugal cicatricial alopecia (crown-centred, mostly in Black women) are the others.</p>
      <p>These are treated with anti-inflammatory and immunomodulating drugs — potent topical or injected steroids, hydroxychloroquine, doxycycline, oral 5-alpha-reductase inhibitors in frontal fibrosing alopecia — and they need a dermatologist and usually a biopsy. Any hairline that recedes with itch, redness, shiny skin or eyebrow loss should skip everything else on this page and be seen within weeks.</p>
    `,
  },
  {
    id: 'type-traction',
    category: 'context',
    title: "Traction, breakage and 'damage'",
    tldr: 'Tight styles and extensions pull follicles out at the temples and edges — fully reversible early, scarred and permanent after years; breakage from bleach and heat is cosmetic, not medical.',
    focus: 'scarring',
    bodyHtml: `
      <p>Traction alopecia is mechanical: years of tight ponytails, buns, braids, cornrows, weaves, extensions and locs pull the follicle until it gives up, typically first at the temples and the front edge. Early on it is fully reversible; after years of tension the follicle scars and the loss becomes permanent (<a href="https://www.aad.org/public/diseases/hair-loss/causes/hairstyles" rel="noopener nofollow" target="_blank">American Academy of Dermatology</a>; <a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2804567" rel="noopener nofollow" target="_blank">JAMA Dermatology, 2023</a>). The signs are a fringe of short broken "baby" hairs, tenderness or pimples at the tension points, and a headache from a hairstyle. Breakage from bleach, heat and relaxers is different again — the hair snaps mid-shaft rather than falling from the root, and the fix is cosmetic, not medical.</p>
      <p>Prevention is the treatment: loosen styles (if it hurts while being done, it is too tight), keep braids and extensions in for two to three weeks at most, alternate with loose styles, and avoid combining tension with chemical relaxing. Minoxidil helps the recoverable phase; nothing helps the scarred phase except a transplant.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The work-up worth paying for',
    tldr: 'History, pull test, trichoscopy and same-light photographs decide the diagnosis; blood tests (ferritin, TSH, vitamin D, blood count, B12) earn their place in diffuse shedding.',
    bodyHtml: `
      <p>A good hair-loss consultation is cheap and decides everything after it. History (when, how fast, triggers, family, medications, cycles, menopause), a pull test, a look at the whole scalp, and trichoscopy — a dermatoscope that distinguishes miniaturisation from shedding from scarring in minutes (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4000932/" rel="noopener nofollow" target="_blank">review</a>). Standardised photographs of the part or crown are the only honest way to judge a treatment a year later.</p>
      <p>Blood tests earn their place mainly in diffuse shedding: ferritin (many dermatologists treat below about 40 ng/mL in a woman losing hair, though "normal" is debated), thyroid function (TSH), vitamin D, a full blood count and B12 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7394174/" rel="noopener nofollow" target="_blank">rationale</a>; <a href="https://link.springer.com/article/10.1007/s13555-018-0278-6" rel="noopener nofollow" target="_blank">2019 review</a>). Androgen testing is only worthwhile when there are signs of excess — hirsutism, acne, irregular cycles — and a biopsy is for suspected scarring. What you do not need is a "hair mineral analysis" or a hormone panel from a supplement website.</p>
    `,
  },
  {
    id: 'menopause',
    category: 'context',
    title: 'Menopause and hair, specifically',
    tldr: 'Falling estrogen turns up the androgen signal, so pattern loss appears or accelerates at 45–55; what helps is minoxidil, anti-androgens and add-ons — not hormone therapy.',
    focus: 'pattern',
    bodyHtml: `
      <p>Estrogen lengthens the growth phase and blunts the follicle's response to androgens; as it withdraws across perimenopause the androgen signal — unchanged in absolute terms — is suddenly louder. The result is that female pattern loss often appears, or accelerates, between 45 and 55, frequently alongside a telogen shed from the sleep disruption, weight change and stress of the transition itself (<a href="https://www.sciencedirect.com/science/article/pii/S0378512225001860" rel="noopener nofollow" target="_blank">2025 review</a>; <a href="https://onlinelibrary.wiley.com/doi/10.1111/jdv.14624" rel="noopener nofollow" target="_blank">S3 guideline</a>). Frontal fibrosing alopecia clusters in the same years and is the one to rule out first.</p>
      <p>What the evidence supports for menopausal thinning is, in order: topical minoxidil, low-dose oral minoxidil if topical is unworkable, an anti-androgen (spironolactone; bicalutamide in specialist hands), and microneedling or PRP as add-ons — with iron, thyroid and vitamin D checked. What it does not support is the common assumption that hormone therapy will fix it: there is no controlled trial with a hair endpoint, some regimens containing testosterone or androgenic progestins make it worse, and finasteride at 1 mg failed outright in a randomised trial of postmenopausal women (<a href="https://pubmed.ncbi.nlm.nih.gov/11050579/" rel="noopener nofollow" target="_blank">Price, 2000</a>). Decide on hormone therapy for hot flushes, sleep and bone — see our <a href="/anti-aging-50s">50s guide</a> — and treat the hair as its own problem.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-minoxidil',
    category: 'home',
    title: 'Topical minoxidil 5% (foam or solution)',
    tldr: 'The one over-the-counter drug with strong evidence in both sexes: 5% foam once daily matches 2% solution twice daily in women; Cochrane found twice the regrowth rate of placebo.',
    evidence: 'strong',
    focus: 'pattern',
    note: 'Best for: any pattern loss, both sexes — the base every other treatment is added to',
    sessions: 'Once-daily 5% foam or twice-daily solution, for as long as you want the hair',
    downtime: 'None — expect 2–8 weeks of extra shedding at the start',
    cost: '€15–30 / month',
    bodyHtml: `
      <p>Minoxidil is the one over-the-counter treatment with strong evidence in both sexes, and it has been re-tested for forty years. It is a potassium-channel opener that prolongs anagen and enlarges miniaturised follicles; the exact mechanism is still argued over, the effect is not. In 393 men, 5% solution produced 45% more regrowth than 2% at 48 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/12196747/" rel="noopener nofollow" target="_blank">randomised trial</a>). In women the once-daily 5% foam matched twice-daily 2% solution on hair count in a 113-woman trial (+31.9 versus +28.4 hairs/cm²) with less irritation — the practical reason to use the foam (<a href="https://pubmed.ncbi.nlm.nih.gov/21700360/" rel="noopener nofollow" target="_blank">Blume-Peytavi, 2011</a>). The Cochrane review of female pattern loss (47 trials, 5,290 women) found twice the rate of at least moderate regrowth on minoxidil versus placebo across its 17 minoxidil studies (<a href="https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD007628.pub4/full" rel="noopener nofollow" target="_blank">Cochrane, 2016</a>), and the 2017 meta-analysis of all treatments confirmed it as effective in women and men (<a href="https://pubmed.ncbi.nlm.nih.gov/28396101/" rel="noopener nofollow" target="_blank">Adil &amp; Godwin</a>).</p>
      <p>The realities: shedding increases for two to eight weeks after starting (old hairs leaving early); first visible change at three to four months; a fair verdict at twelve; and the gains reverse within months of stopping. More is not better — a 10% formulation was less effective than 5% and far more irritating in a 90-man trial (<a href="https://pubmed.ncbi.nlm.nih.gov/31403367/" rel="noopener nofollow" target="_blank">2019 trial</a>). Apply 1 mL (or half a capful of foam) to a dry scalp, not the hair; if the solution stings, switch to foam (no propylene glycol). In the EU it is authorised over the counter in every member state, usually as Regaine or a generic (<a href="https://www.ema.europa.eu/en/documents/psusa/minoxidil-topical-formulation-list-nationally-authorised-medicinal-products-psusa-00002067-202310_en.pdf" rel="noopener nofollow" target="_blank">EMA list</a>).</p>
    `,
  },
  {
    id: 'home-lllt',
    category: 'home',
    title: 'Low-level laser and red-light devices',
    tldr: 'Eleven sham-controlled trials and two meta-analyses show real density gains (~+18 hairs/cm²) — all short and manufacturer-funded, with no head-to-head against minoxidil.',
    evidence: 'moderate',
    focus: 'pattern',
    note: 'Best for: an add-on to minoxidil for people who prefer devices to drugs',
    sessions: '3× a week, 10–25 min, indefinitely',
    downtime: 'None',
    cost: '€200–1,500 device, one-off',
    bodyHtml: `
      <p>Low-level laser and LED devices (combs, bands, helmets) emitting red light around 650 nm have the best consumer-device evidence in dermatology — and the caveats to match. A meta-analysis of 11 double-blind sham-controlled trials found a large standardised effect on hair density (SMD 1.32) (<a href="https://pubmed.ncbi.nlm.nih.gov/30706177/" rel="noopener nofollow" target="_blank">2019 meta-analysis</a>); a second, restricted to FDA-cleared home devices (7 trials), reached the same conclusion (<a href="https://pubmed.ncbi.nlm.nih.gov/34980962/" rel="noopener nofollow" target="_blank">2021 meta-analysis</a>); the 2017 treatment meta-analysis put the gain at about +17.7 hairs/cm² (<a href="https://pubmed.ncbi.nlm.nih.gov/28396101/" rel="noopener nofollow" target="_blank">Adil &amp; Godwin</a>). Individual trials are striking — a helmet added 41.9 hairs/cm² versus 0.7 for sham over 16 weeks (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7373546/" rel="noopener nofollow" target="_blank">helmet trial</a>), and a 24-week trial in Thai men and women beat sham on density and diameter (<a href="https://pubmed.ncbi.nlm.nih.gov/30569416/" rel="noopener nofollow" target="_blank">2018 trial</a>).</p>
      <p>Why only moderate: nearly every trial is manufacturer-funded, short (16–26 weeks), small, and measures hair counts in a target area rather than what you see in the mirror; there is no head-to-head with minoxidil, and in indirect comparisons the effect is smaller. Realistically it is a reasonable add-on for someone who will actually use it three times a week for 10–25 minutes indefinitely, and a poor first purchase for someone who has not yet tried minoxidil. The FDA-cleared names (HairMax, iRestore, Capillus, Theradome) have the trials; €50 "laser caps" from marketplaces do not. Our <a href="/red-light-therapy">red-light guide</a> covers dosing.</p>
    `,
  },
  {
    id: 'home-ketoconazole',
    category: 'home',
    title: 'Ketoconazole 2% shampoo',
    tldr: 'One 1998 study found it improved density about as much as 2% minoxidil; nothing large or blinded since — cheap scalp hygiene with a possible small bonus.',
    evidence: 'emerging',
    focus: 'pattern',
    sessions: '2–3× a week, left on 3–5 minutes',
    downtime: 'None',
    cost: '€8–15 a bottle',
    bodyHtml: `
      <p>Ketoconazole 2% shampoo — an antifungal — keeps appearing in hair-loss stacks because of one 1998 study from Liège, in which men using it two to four times a week improved hair density and the proportion of growing follicles about as much as men on 2% minoxidil (<a href="https://pubmed.ncbi.nlm.nih.gov/9669136/" rel="noopener nofollow" target="_blank">Piérard-Franchimont, 1998</a>). The plausible mechanisms are anti-inflammatory (it suppresses the Malassezia yeast behind dandruff and the low-grade inflammation around miniaturising follicles) and a weak local anti-androgen effect. What is missing is any large, blinded trial in the decades since.</p>
      <p>It is cheap, pharmacy-available across Europe, and genuinely useful if you also have dandruff or an itchy scalp — which many people starting minoxidil do. Use it two to three times a week, leave it on for three to five minutes, and think of it as scalp hygiene with a possible small bonus, not a treatment.</p>
    `,
  },
  {
    id: 'home-caffeine',
    category: 'home',
    title: 'Caffeine shampoos and tonics',
    tldr: 'One open-label, industry-funded trial called a 0.2% leave-on liquid non-inferior to 5% minoxidil on a surrogate endpoint; shampoos rinse off in a minute.',
    evidence: 'emerging',
    focus: 'pattern',
    sessions: 'Daily leave-on; shampoo with every wash',
    downtime: 'None',
    cost: '€10–20 / month',
    bodyHtml: `
      <p>The caffeine claim rests mainly on one industry-funded trial: 210 men, six months, a 0.2% caffeine leave-on liquid against 5% minoxidil, with the caffeine arm judged non-inferior on the proportion of growing hairs (+10.6% versus +11.7%) (<a href="https://karger.com/spp/article/30/6/298/295917/An-Open-Label-Randomized-Multicenter-Study" rel="noopener nofollow" target="_blank">Dhurat, 2017</a>). Read carefully: it was open-label, had no placebo arm, used a surrogate trichogram endpoint rather than hair counts, and tested a twice-daily leave-on product — not a shampoo that is rinsed off in a minute. Laboratory work shows caffeine can counter testosterone's effect on cultured follicles, which is where the shampoo marketing comes from.</p>
      <p>A caffeine tonic is harmless and cheap, and as an addition for someone who refuses minoxidil it is not absurd. As a replacement for it, the evidence is a single open-label trial.</p>
    `,
  },
  {
    id: 'home-rosemary',
    category: 'home',
    title: 'Rosemary oil',
    tldr: 'One 100-person trial found it no different from 2% minoxidil at six months — no placebo arm, the weaker comparator, never replicated. A pleasant adjunct, not a substitute for 5%.',
    evidence: 'emerging',
    focus: 'pattern',
    sessions: 'Diluted, a few times a week',
    downtime: 'None',
    cost: '€5–15',
    bodyHtml: `
      <p>The rosemary-oil trend traces to one Iranian trial of 100 people with pattern loss randomised to rosemary oil or 2% minoxidil for six months: neither group changed at three months, both improved modestly at six, and there was no difference between them — with more scalp itching on minoxidil (<a href="https://pubmed.ncbi.nlm.nih.gov/25842469/" rel="noopener nofollow" target="_blank">Panahi, 2015</a>). That is a real result, but note the comparator was 2%, not the 5% standard; there was no placebo arm; and nobody has replicated it. Rosemary contains carnosic acid and other compounds with anti-inflammatory and mild vasodilating effects in the laboratory.</p>
      <p>Verdict: a pleasant, low-risk adjunct (dilute it — neat essential oil irritates), not a substitute for 5% minoxidil, and not a treatment for shedding, which resolves on its own anyway and gets credited to whatever was applied at the time.</p>
    `,
  },
  {
    id: 'home-nutrafol',
    category: 'home',
    title: 'Nutrafol (botanical nutraceutical)',
    tldr: 'Three company-run placebo-controlled trials — women, menopausal women, men — show modest hair-count gains and less shedding; none compares it with minoxidil at a fifth of the price.',
    evidence: 'moderate',
    focus: 'general',
    note: 'Best for: women who want a supplement with actual trials — as an add-on, not a first move',
    sessions: '4 capsules daily, 6+ months',
    downtime: 'None',
    cost: '€80–90 / month',
    bodyHtml: `
      <p>Nutrafol is the best-studied of the botanical hair supplements, and every study is the company's. A six-month, randomised, placebo-controlled trial in women with self-perceived thinning found significantly more terminal and vellus hairs in the target area at 90 and 180 days (<a href="https://jddonline.com/articles/a-six-month-randomized-double-blind-placebo-controlled-study-evaluating-the-safety-and-efficacy-of-a-S1545961618P0558X/" rel="noopener nofollow" target="_blank">2018 trial</a>); a second, in 70 peri-, meno- and postmenopausal women taking the Women's Balance formula, showed progressively higher hair counts than placebo at three and six months and about a third less reported shedding (<a href="https://jddonline.com/thinning-hair-through-menopause-results-of-a-first-of-its-kind-randomized-controlled-trial-on-nutraceuticals-2/" rel="noopener nofollow" target="_blank">menopause trial</a>); a third, in men, had 79% rated improved by blinded investigators against 51% on placebo (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11701407/" rel="noopener nofollow" target="_blank">2025 trial</a>). The formula is saw palmetto, ashwagandha, tocotrienols, curcumin and marine collagen; the menopause version adds maca and astaxanthin.</p>
      <p>Why moderate and not strong: all trials are sponsored and run by the same investigator group; enrolment is "self-perceived thinning", not dermatologist-diagnosed pattern loss, so some of the benefit is probably shedding that would have settled anyway; endpoints are phototrichogram counts in a small target area; and there is no comparison with minoxidil. The brand's menopause page quotes "100% of women showed improvement" — that is an investigator-rated global score, not a hair count. A legitimate option with a real but modest signal at €80–90 a month; not the first thing to buy.</p>
      <p class="text-ink/60 text-sm italic">Caveat: every trial is company-funded and none compares the product with minoxidil.</p>
    `,
  },
  {
    id: 'home-viviscal',
    category: 'home',
    title: 'Viviscal (marine protein complex)',
    tldr: 'Two small sponsored trials in women with self-perceived thinning: +32% terminal hairs and 39% less shedding at 90 days — short, small, and irrelevant to established pattern loss.',
    evidence: 'emerging',
    focus: 'shedding',
    sessions: '2 tablets daily, 3–6 months',
    downtime: 'None',
    cost: '€40–60 / month',
    bodyHtml: `
      <p>Viviscal (a marine protein complex, AminoMar, with biotin, zinc and vitamin C) has two small company-sponsored trials by the same investigator. In 60 women with self-perceived thinning, 90 days on the extra-strength tablets increased terminal hairs in a target area by about 32% and cut hairs shed on washing by 39% versus placebo (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4389977/" rel="noopener nofollow" target="_blank">Ablon, 2015</a>); a six-month follow-up trial reported larger gains. Small samples, short durations, self-perceived thinning and no comparison with a drug keep it a tier below Nutrafol; the price does not. Reasonable as a three-to-six-month trial during a shed; irrelevant to established pattern loss.</p>
    `,
  },
  {
    id: 'home-biotin',
    category: 'home',
    title: 'Biotin and "hair gummies"',
    tldr: 'Benefit only in the rare person who is deficient; the one placebo-controlled trial showed nothing, and high doses distort thyroid and troponin lab tests.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'Daily, pointlessly',
    downtime: 'None',
    cost: '€5–30 / month, wasted unless deficient',
    bodyHtml: `
      <p>Biotin is the most-sold and least-supported ingredient in hair care. A 2017 review found 18 published cases of hair or nail improvement on biotin — every one in a person with an underlying deficiency or an inherited biotin disorder — and the single double-blind placebo-controlled trial showed no difference in hair growth (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5582478/" rel="noopener nofollow" target="_blank">Patel, 2017</a>). A 2024 review reached the same place: no evidence for biotin in healthy people, and deficiency is rare on a normal diet (<a href="https://pubmed.ncbi.nlm.nih.gov/39148962/" rel="noopener nofollow" target="_blank">2024 review</a>). "Hair gummies" are biotin plus sugar. The one thing high-dose biotin reliably does is interfere with laboratory assays — falsely low troponin and abnormal thyroid results — so stop it a few days before blood tests and tell your doctor you take it.</p>
    `,
  },
  {
    id: 'home-iron-vitd',
    category: 'home',
    title: 'Iron, vitamin D and zinc — only if deficient',
    tldr: 'Deficiencies are common in women who shed and worth correcting; the intervention trials are small and uncontrolled, and supplementing a replete person does nothing.',
    evidence: 'emerging',
    focus: 'shedding',
    note: 'Best for: diffuse shedding in women — test first, then correct',
    sessions: 'Test; correct for 3–6 months; re-test',
    downtime: 'None',
    cost: '€20–60 for the blood panel',
    bodyHtml: `
      <p>Nutrients matter for hair only where they are missing — and in women who are shedding, they often are. Iron deficiency is common in women with hair loss and most dermatologists supplement when ferritin is low (a working threshold of around 40 ng/mL is widely used, though there is no agreed "hair" cut-off); vitamin D deficiency is found in about half of women with pattern loss or telogen effluvium (<a href="https://link.springer.com/article/10.1007/s13555-018-0278-6" rel="noopener nofollow" target="_blank">2019 review</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11479915/" rel="noopener nofollow" target="_blank">2024 meta-analysis</a>). Zinc deficiency causes hair loss; zinc supplementation in a replete person does nothing. What is thin is the intervention evidence: small uncontrolled series show shedding improves when vitamin D is corrected (<a href="https://journals.lww.com/ijot/fulltext/2023/15050/oral_vitamin_d_treatment_in_patients_with_telogen.2.aspx" rel="noopener nofollow" target="_blank">2023 series</a>), and iron correction is standard practice built on association rather than randomised trials.</p>
      <p>The move is test, correct, re-test — not a "hair vitamin" with 40 ingredients at 300% of the daily value. Ferritin, TSH, vitamin D, full blood count and B12 cost less than a month of any supplement (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7394174/" rel="noopener nofollow" target="_blank">rationale</a>).</p>
    `,
  },
  {
    id: 'home-saw-palmetto',
    category: 'home',
    title: 'Saw palmetto',
    tldr: 'A weak 5-alpha-reductase inhibitor with five small, mixed-formulation trials and one 2023 placebo-controlled study — a fraction of finasteride’s effect with fewer side effects.',
    evidence: 'emerging',
    focus: 'pattern',
    sessions: '160–320 mg daily',
    downtime: 'None',
    cost: '€10–25 / month',
    bodyHtml: `
      <p>Saw palmetto (Serenoa repens) weakly inhibits 5-alpha-reductase, the enzyme finasteride blocks almost completely. A 2020 systematic review found five randomised trials and two cohort studies of oral and topical products (100–320 mg) reporting improvements in hair quality and counts — but the formulations were inconsistent, often mixed with other actives, and the authors concluded that "robust high-quality data are lacking" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7706486" rel="noopener nofollow" target="_blank">Evron, 2020</a>). A 2023 placebo-controlled 16-week trial of a standardised oil, taken orally and applied topically, reduced hair fall and improved growth measures (<a href="https://pubmed.ncbi.nlm.nih.gov/38021422/" rel="noopener nofollow" target="_blank">2023 trial</a>). It is also the lead ingredient in Nutrafol. Expect a fraction of finasteride's effect with fewer side effects; a fair option for someone who will never take a prescription anti-androgen.</p>
    `,
  },
  {
    id: 'home-melatonin',
    category: 'home',
    title: 'Topical melatonin',
    tldr: 'A 0.0033% solution with five small, mostly uncontrolled, company-linked studies showing more growing hairs — a curiosity with a mechanism.',
    evidence: 'emerging',
    focus: 'pattern',
    sessions: 'Once daily',
    downtime: 'None',
    cost: '€20–40 / month',
    bodyHtml: `
      <p>Melatonin receptors exist in the hair follicle, and a 0.0033% topical solution has been tested in five small studies — one pharmacodynamic, four pre-post clinical — in men and women with pattern or diffuse loss, with increased growing-hair counts and good tolerability (<a href="https://pubmed.ncbi.nlm.nih.gov/23766606/" rel="noopener nofollow" target="_blank">Fischer, 2012</a>). All were company-linked and, apart from the earliest small placebo-controlled pilot, uncontrolled. A curiosity with a mechanism, sold in a few EU pharmacies; not a substitute for anything above it.</p>
    `,
  },
  {
    id: 'home-massage',
    category: 'home',
    title: 'Scalp massage',
    tldr: 'Nine men, four minutes a day, 24 weeks, no control: thickness up 8%, hair number unchanged. Free and harmless; not a treatment.',
    evidence: 'limited',
    focus: 'general',
    sessions: '4 minutes daily',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>The scalp-massage study everyone cites had nine men massaging for four minutes a day for 24 weeks; hair thickness rose about 8% and hair number did not change, with no control group (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4740347" rel="noopener nofollow" target="_blank">Koyama, 2016</a>). The laboratory half of the paper showed that stretching dermal-papilla cells changes gene expression, which is interesting and proves nothing about scalps. Massage is free, relaxing and harmless; it is not a hair-loss treatment, and "scalp exercise" devices are massage with a price tag.</p>
    `,
  },
  {
    id: 'home-diet-smoking',
    category: 'home',
    title: 'Diet, smoking and the pace of weight loss',
    tldr: 'Smokers have 1.8× the odds of pattern loss; raw vegetables and fresh herbs halved the odds in one case-control study; rapid weight loss triggers shedding — observational, but consistent.',
    evidence: 'emerging',
    focus: 'general',
    sessions: 'Ongoing',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Three modifiable things have consistent, if observational, links to hair loss. Smoking: ever-smokers had 1.8 times the odds of androgenetic alopecia across eight studies, and smokers with existing loss had higher odds of progression (<a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jocd.16132" rel="noopener nofollow" target="_blank">2024 meta-analysis</a>). Diet: in a Roman case-control study, men eating raw vegetables and fresh herbs at least three times a week had roughly half the odds of pattern loss (<a href="https://link.springer.com/article/10.1007/s00403-017-1799-z" rel="noopener nofollow" target="_blank">Fortes, 2017</a>) — plausibly through anti-inflammatory and antioxidant effects, though case-control studies cannot prove cause. Weight: rapid loss — crash diets, bariatric surgery, GLP-1 injections — triggers telogen shedding, and protein-poor "detox" regimens do the same (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12530271/" rel="noopener nofollow" target="_blank">2025 review</a>).</p>
      <p>The practical translation is unglamorous: do not smoke, eat like a Mediterranean, lose weight at a pace that keeps protein intake above about 1.2 g per kilo, and do not expect any of it to reverse loss that is already visible.</p>
    `,
  },
];

const rx: Section[] = [
  {
    id: 'rx-finasteride-men',
    category: 'rx',
    title: 'Finasteride 1 mg (men)',
    tldr: 'The deepest evidence in the field — +138 hairs per inch-circle vs placebo at two years, 93% lower odds of further visible loss at five — with honest sexual and mood warnings.',
    evidence: 'strong',
    focus: 'pattern',
    note: 'Best for: men with early to moderate pattern loss who want the most reliable brake on progression',
    sessions: '1 mg daily, indefinitely',
    downtime: 'None',
    cost: '€10–25 / month, generic',
    bodyHtml: `
      <p>Finasteride 1 mg blocks the type-II 5-alpha-reductase enzyme and cuts scalp and serum DHT by about 60–70%. The evidence is the deepest in the field: in 1,553 men aged 18–41, hair counts in a one-inch circle rose by 107 hairs versus placebo at one year and 138 at two (<a href="https://pubmed.ncbi.nlm.nih.gov/9777765/" rel="noopener nofollow" target="_blank">pivotal trials</a>); over five years treated men were 93% less likely to show further visible loss (<a href="https://pubmed.ncbi.nlm.nih.gov/18573712/" rel="noopener nofollow" target="_blank">5-year data</a>); ten-year follow-up shows sustained benefit, larger in men who start younger (<a href="https://pubmed.ncbi.nlm.nih.gov/21910805/" rel="noopener nofollow" target="_blank">10-year study</a>). In the 2022 network meta-analysis it ranked behind dutasteride and 5 mg oral minoxidil but above every topical (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2788258" rel="noopener nofollow" target="_blank">JAMA Dermatology</a>). Combined with minoxidil it does better than either alone.</p>
      <p>The side-effect conversation has to be honest in both directions. In the pivotal trials sexual side effects (lower libido, erectile or ejaculatory problems) were reported by 3.8% of men on finasteride versus 2.1% on placebo, and mostly resolved on or off the drug. A minority report persistent symptoms after stopping; the mechanism is disputed and the frequency unknown. In 2025 the European Medicines Agency concluded that suicidal ideation is a genuine side effect of finasteride, added it to the label, and required a patient card in every 1 mg pack advising men to stop and seek help if their mood changes — while confirming that benefits still outweigh risks (<a href="https://www.ema.europa.eu/en/documents/referral/finasteride-dutasteride-containing-medicinal-products-article-31-referral-measures-minimise-risk-suicidal-thoughts_en.pdf" rel="noopener nofollow" target="_blank">EMA measures</a>; <a href="https://www.medscape.com/viewarticle/ema-decision-finasteride-linked-suicidal-ideation-2025a1000b9x" rel="noopener nofollow" target="_blank">summary</a>). Prescription-only across the EU.</p>
    `,
  },
  {
    id: 'rx-dutasteride',
    category: 'rx',
    title: 'Dutasteride 0.5 mg (men)',
    tldr: 'Blocks both enzyme forms (DHT −90%): two phase 3 trials, beat finasteride head-to-head, tops the network ranking — licensed for hair only in Korea and Japan, off-label in the EU.',
    evidence: 'strong',
    focus: 'pattern',
    note: 'Best for: men who have plateaued on finasteride, or want maximum DHT suppression',
    sessions: '0.5 mg daily (some prescribers use 3× a week)',
    downtime: 'None',
    cost: '€15–35 / month',
    bodyHtml: `
      <p>Dutasteride blocks both 5-alpha-reductase isoenzymes and lowers serum DHT by about 90%, against finasteride's 70%. Two phase 3 randomised trials support it in men: a Korean six-month trial against placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/20605255/" rel="noopener nofollow" target="_blank">Eun, 2010</a>) and a multinational dose-ranging trial in which 0.5 mg beat finasteride 1 mg on hair count, hair width and photographic assessment at 24 weeks (<a href="https://www.jaad.org/article/S0190-9622(13)01171-7/abstract" rel="noopener nofollow" target="_blank">Gubelin Harcha, 2014</a>). Five-year Korean data show sustained improvement (<a href="https://onlinelibrary.wiley.com/doi/10.1111/1346-8138.17138" rel="noopener nofollow" target="_blank">2024 follow-up</a>), and it tops the 2022 network ranking (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2788258" rel="noopener nofollow" target="_blank">JAMA Dermatology</a>). Men who have plateaued on finasteride often gain on a switch.</p>
      <p>The catches: it is licensed for hair loss only in South Korea and Japan — in the EU it is prescribed off-label from its prostate indication — its five-week half-life means side effects, if they occur, take months to clear, and the same EMA mood and sexual-function warnings apply (<a href="https://www.ema.europa.eu/en/documents/referral/finasteride-dutasteride-containing-medicinal-products-article-31-referral-measures-minimise-risk-suicidal-thoughts_en.pdf" rel="noopener nofollow" target="_blank">EMA, 2025</a>). Some prescribers use it three times a week to soften the trade-off; a 2025 pilot found thrice-weekly dutasteride at least as effective as daily finasteride (<a href="https://www.jaadinternational.org/article/S2666-3287(25)00101-4/fulltext" rel="noopener nofollow" target="_blank">pilot trial</a>). Not for women who could become pregnant, for the same reasons as finasteride.</p>
    `,
  },
  {
    id: 'rx-oral-minoxidil',
    category: 'rx',
    title: 'Low-dose oral minoxidil',
    tldr: '1 mg matched 5% topical in a 52-woman trial and 5 mg outranks finasteride in men; 1,404-patient safety data show 15% unwanted hair and under 2% systemic effects — off-label everywhere.',
    evidence: 'moderate',
    focus: 'general',
    note: 'Best for: anyone who cannot stick to topical minoxidil; chronic shedding; menopausal thinning',
    sessions: '0.25–2.5 mg (women) or 2.5–5 mg (men) daily',
    downtime: 'None — shedding in the first weeks',
    cost: '€5–20 / month',
    bodyHtml: `
      <p>Low-dose oral minoxidil (0.25–2.5 mg for women, 2.5–5 mg for men) has gone from off-label curiosity to the fastest-growing prescription in hair clinics, because it removes the adherence problem of a twice-daily topical. The randomised evidence is still small: in 52 women, 1 mg a day matched 5% topical solution over 24 weeks (<a href="https://www.jaad.org/article/S0190-9622(19)32666-0/fulltext" rel="noopener nofollow" target="_blank">Ramos, 2020</a>); a 2025 meta-analysis of the randomised comparisons points the same way, with a trend favouring oral (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/ijd.17524" rel="noopener nofollow" target="_blank">2025 meta-analysis</a>); and 5 mg in men ranked above finasteride 1 mg in the network analysis (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2788258" rel="noopener nofollow" target="_blank">JAMA Dermatology</a>). It also works in chronic telogen effluvium and in women who cannot tolerate the topical.</p>
      <p>The safety data are reassuring at hair doses and dose-dependent above them. In 1,404 patients across 15 centres, the commonest problem was unwanted hair growth on the face or body (15%, more in women); lightheadedness, fluid retention and fast heartbeat were each under 2%, and 1.7% stopped the drug (<a href="https://pubmed.ncbi.nlm.nih.gov/33639244/" rel="noopener nofollow" target="_blank">2021 multicentre study</a>). Reviews put hypertrichosis at around 29% at the lowest doses rising to most patients at 5 mg, and cardiovascular symptoms at 4% rising to a third (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10806356/" rel="noopener nofollow" target="_blank">2024 review</a>). It is licensed only for hypertension, so it is off-label everywhere; it is not for people with heart-rhythm or pericardial disease, low blood pressure or pregnancy; and a sensible prescriber checks blood pressure and starts low. The cost is trivial.</p>
    `,
  },
  {
    id: 'rx-topical-finasteride',
    category: 'rx',
    title: 'Topical finasteride 0.25%',
    tldr: 'One phase 3 trial: hair-count gains similar to the tablet with plasma levels 100× lower and DHT down 35% instead of 56% — licensed in a growing number of EU countries.',
    evidence: 'moderate',
    focus: 'pattern',
    note: 'Best for: men who want DHT suppression with less systemic exposure',
    sessions: 'Once-daily spray',
    downtime: 'None',
    cost: '€30–60 / month',
    bodyHtml: `
      <p>Topical finasteride tries to keep the drug in the scalp. In a phase 3 randomised trial, a 0.25% spray applied once daily raised target-area hair counts against placebo over 24 weeks with an effect similar to oral 1 mg, while peak plasma finasteride was more than 100 times lower and serum DHT fell by 34.5% instead of 55.6% (<a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jdv.17738" rel="noopener nofollow" target="_blank">Piraccini, 2022</a>). That is one well-run manufacturer trial in men, which is why it sits a tier below the tablet; the reduced systemic exposure is real, not zero, and the pregnancy precautions still apply. A licensed spray has been approved in a number of EU countries since 2022; elsewhere pharmacies compound it, often mixed with minoxidil — a combination that outperforms minoxidil alone in a 2025 meta-analysis (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12537375/" rel="noopener nofollow" target="_blank">combination meta-analysis</a>).</p>
    `,
  },
  {
    id: 'rx-finasteride-women',
    category: 'rx',
    title: 'Finasteride and dutasteride in women',
    tldr: 'The only randomised trial (137 postmenopausal women, 1 mg) showed no benefit; higher doses look helpful in uncontrolled series — postmenopausal or contracepted women only, specialist-led.',
    evidence: 'emerging',
    focus: 'pattern',
    note: 'Best for: postmenopausal women who have not responded to minoxidil and spironolactone — specialist-led',
    sessions: '2.5–5 mg daily, off-label',
    downtime: 'None',
    cost: '€10–25 / month',
    bodyHtml: `
      <p>For women the 5-alpha-reductase inhibitors are a mixed and mostly uncontrolled story. The one randomised trial — 137 postmenopausal women on finasteride 1 mg for a year — showed no benefit at all (<a href="https://pubmed.ncbi.nlm.nih.gov/11050579/" rel="noopener nofollow" target="_blank">Price, 2000</a>). Higher doses look different: 86 women completing a year of 5 mg were mostly rated improved on photographs (<a href="https://onlinelibrary.wiley.com/doi/10.1111/j.1468-3083.2010.03758.x" rel="noopener nofollow" target="_blank">Yeon, 2011</a>), a 2.5 mg series reported similar gains (<a href="https://pubmed.ncbi.nlm.nih.gov/29464847/" rel="noopener nofollow" target="_blank">2.5 mg study</a>), and a 2021 meta-analysis pooling the small studies found benefit concentrated at 2.5–5 mg — from low-quality, largely uncontrolled data (<a href="https://pubmed.ncbi.nlm.nih.gov/34079198/" rel="noopener nofollow" target="_blank">meta-analysis</a>; <a href="https://www.sciencedirect.com/science/article/pii/S295019892500087X" rel="noopener nofollow" target="_blank">2025 scoping review</a>). Dutasteride is used the same way in specialist clinics, and both are also used in frontal fibrosing alopecia to slow the scarring process.</p>
      <p>Because these drugs feminise a male fetus, they are only for postmenopausal women or women on reliable contraception, and they are off-label. In practice a dermatologist reaches for them after minoxidil and spironolactone, not before.</p>
    `,
  },
  {
    id: 'rx-spironolactone',
    category: 'rx',
    title: 'Spironolactone (women)',
    tldr: 'The workhorse anti-androgen: 57% of women improved in a 2023 meta-analysis (66% combined with minoxidil), mostly observational data; contraception and patience required.',
    evidence: 'moderate',
    focus: 'pattern',
    note: 'Best for: women with pattern loss, especially with acne, hirsutism or PCOS features',
    sessions: '100–200 mg daily; judge at 6–12 months',
    downtime: 'None',
    cost: '€5–15 / month',
    bodyHtml: `
      <p>Spironolactone is the workhorse anti-androgen for female pattern loss: it blocks the androgen receptor and modestly lowers androgen production, at 100–200 mg a day. A 2023 systematic review and meta-analysis found 57% of women improved overall — 66% when it was combined with minoxidil or another therapy, 43% as monotherapy — with menstrual irregularity in 12%, facial hair growth in 7% and only 2.8% stopping for side effects (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10502763/" rel="noopener nofollow" target="_blank">meta-analysis</a>). The evidence is mostly observational and heterogeneous, which keeps it at moderate; the 2025 anti-androgen review still puts it first among the oral options for women (<a href="https://www.jaad.org/article/S0190-9622(25)00722-4/abstract" rel="noopener nofollow" target="_blank">2025 review</a>).</p>
      <p>It takes six to twelve months to judge, needs contraception in premenopausal women and a potassium check in older ones, and lowers blood pressure a little — useful or unwelcome depending on the woman. Off-label (it is a diuretic), cheap, and very widely prescribed.</p>
    `,
  },
  {
    id: 'rx-bicalutamide',
    category: 'rx',
    title: 'Bicalutamide (women)',
    tldr: 'A pure androgen-receptor blocker: severity scores down 17–29% in retrospective series, outperformed spironolactone in one comparison, no randomised trial yet; liver tests mandatory.',
    evidence: 'emerging',
    focus: 'pattern',
    sessions: '25–50 mg daily with liver tests',
    downtime: 'None',
    cost: '€20–50 / month',
    bodyHtml: `
      <p>Bicalutamide, a pure androgen-receptor blocker from prostate-cancer medicine, is the newer specialist option for women. A safety review of 316 women found it well tolerated at 25–50 mg, with liver-enzyme rises the main concern (<a href="https://pubmed.ncbi.nlm.nih.gov/32213304/" rel="noopener nofollow" target="_blank">Ismail, 2020</a>); a retrospective comparison found 50 mg outperformed spironolactone 100 mg on hair-loss severity scores (<a href="https://onlinelibrary.wiley.com/doi/10.1111/ajd.14306" rel="noopener nofollow" target="_blank">Jha, 2024</a>); across the literature, severity scores fall by 17–29% over six months with adverse events in about 12% (<a href="https://www.sciencedirect.com/science/article/pii/S2950198925000327" rel="noopener nofollow" target="_blank">2025 review</a>). It does not cross the blood–brain barrier, has no diuretic effect and appears to prevent the facial hair growth that oral minoxidil causes. There is no randomised trial yet, liver tests are mandatory, and contraception is non-negotiable.</p>
    `,
  },
  {
    id: 'rx-cpa',
    category: 'rx',
    title: 'Cyproterone acetate and anti-androgenic pills',
    tldr: 'In a 66-woman trial it beat minoxidil only in women with signs of androgen excess, and lost otherwise; a reasonable first move with acne, hirsutism or PCOS, a poor one without.',
    evidence: 'emerging',
    focus: 'pattern',
    sessions: 'Cyclic, with estrogen',
    downtime: 'None',
    cost: '€10–25 / month',
    bodyHtml: `
      <p>Cyproterone acetate — an anti-androgenic progestin, in the EU usually combined with ethinylestradiol in a contraceptive — was compared head-to-head with 2% minoxidil in 66 women over a year: minoxidil won in women without signs of androgen excess, cyproterone won (and improved acne and hirsutism as well) in women who had them (<a href="https://academic.oup.com/bjd/article-abstract/146/6/992/6634382" rel="noopener nofollow" target="_blank">Vexiau, 2002</a>). That remains the practical rule: an anti-androgenic pill is a reasonable first move for a premenopausal woman with acne, hirsutism or PCOS, and a poor one otherwise. Regulators restricted higher-dose cyproterone in 2020 because of a dose-related risk of meningioma, so the contraceptive doses are what is used. Drospirenone-containing pills have a milder version of the same effect and no trial data on hair.</p>
    `,
  },
  {
    id: 'rx-alfatradiol',
    category: 'rx',
    title: 'Alfatradiol (17α-estradiol) topical',
    tldr: 'A German-pharmacy staple whose only comparative trial showed it stabilised loss while 2% minoxidil actually increased density and thickness.',
    evidence: 'emerging',
    focus: 'pattern',
    sessions: 'Once daily',
    downtime: 'None',
    cost: '€25–40 / month',
    bodyHtml: `
      <p>Alfatradiol (17α-estradiol) is a topical estrogen isomer with no systemic hormonal activity, sold in German and Austrian pharmacies (Ell-Cranell, Pantostin) and prescribed widely there for both sexes. Its one comparative trial is sobering: over six months in 103 women, 2% minoxidil significantly increased hair density and thickness while alfatradiol left both essentially unchanged — the authors' verdict was that it stabilises loss rather than reversing it (<a href="https://pubmed.ncbi.nlm.nih.gov/17451383/" rel="noopener nofollow" target="_blank">Blume-Peytavi, 2007</a>). A tolerable option for a woman who reacts to minoxidil, not an equal.</p>
    `,
  },
  {
    id: 'rx-hrt',
    category: 'rx',
    title: 'Menopausal hormone therapy for hair',
    tldr: 'No randomised trial has a hair endpoint; small observational hints, and testosterone or androgenic-progestin regimens can worsen loss. Decide on symptoms and bone, not hair.',
    evidence: 'limited',
    focus: 'pattern',
    sessions: 'Decided on menopause symptoms, not hair',
    downtime: 'None',
    cost: '€15–50 / month',
    bodyHtml: `
      <p>Menopausal hormone therapy is often presented — by clinics and by supplement brands — as the fix for menopausal hair. The evidence does not support the promise. There is no randomised trial of hormone therapy with a hair endpoint; the supportive data are small observational series, and regimens that include testosterone or androgenic progestins can worsen pattern loss (<a href="https://www.sciencedirect.com/science/article/pii/S0378512225001860" rel="noopener nofollow" target="_blank">2025 review</a>; <a href="https://onlinelibrary.wiley.com/doi/10.1111/jdv.14624" rel="noopener nofollow" target="_blank">S3 guideline</a>). Estrogen's biological effect on the follicle is real, which is why topical estrogen analogues exist (see alfatradiol), but systemic therapy is a decision about hot flushes, sleep, mood and bone. Take it for those, with a progestin that is not androgenic if hair matters to you, and treat the hair with minoxidil and, if needed, an anti-androgen. Our <a href="/anti-aging-50s">50s guide</a> covers the hormone-therapy evidence itself.</p>
    `,
  },
  {
    id: 'rx-jak',
    category: 'rx',
    title: 'JAK inhibitors (alopecia areata only)',
    tldr: 'Baricitinib and ritlecitinib regrew most scalp hair in about a third of adults with severe alopecia areata in phase 3 trials and are EU-approved — useless for pattern loss.',
    evidence: 'strong',
    focus: 'areata',
    note: 'Best for: severe alopecia areata — specialist-prescribed with monitoring',
    sessions: 'Daily tablet, specialist-prescribed',
    downtime: 'None',
    cost: 'High list price; reimbursement varies',
    bodyHtml: `
      <p>For alopecia areata — not pattern loss — the JAK inhibitors are the first treatments with real trial evidence. Baricitinib 4 mg regrew hair to 80% scalp coverage in about a third of adults with severe disease at 36 weeks in the two BRAVE-AA phase 3 trials, and most who stopped relapsed and regrew on restarting (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11325239/" rel="noopener nofollow" target="_blank">BRAVE-AA1</a>); ritlecitinib 50 mg did similarly in ALLEGRO and is approved from age 12 (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12105426/" rel="noopener nofollow" target="_blank">ALLEGRO programme</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12105424/" rel="noopener nofollow" target="_blank">2025 comparison</a>). Both carry the class warnings — infections, blood counts, lipids, and a boxed cardiovascular warning inherited from rheumatology — and need a dermatologist and monitoring. They do nothing for androgenetic loss.</p>
    `,
  },
  {
    id: 'rx-clascoterone',
    category: 'rx',
    title: 'Clascoterone 5% solution (Breezula)',
    tldr: 'The first new pattern-loss drug in 30 years to pass phase 3: two 2025 trials in 1,465 men met their hair-count endpoint with placebo-level side effects — not yet approved.',
    evidence: 'emerging',
    focus: 'pattern',
    sessions: 'Twice daily (trial regimen)',
    downtime: 'None',
    cost: 'Not yet marketed',
    bodyHtml: `
      <p>Clascoterone is a topical androgen-receptor blocker (already licensed for acne as Winlevi) and the first genuinely new pattern-loss drug in three decades to complete phase 3. In December 2025 Cosmo reported that both SCALP trials — 1,465 men across the US and Europe — met their primary hair-count endpoint against vehicle, with adverse events at placebo levels and no systemic androgen effects (<a href="https://www.cosmohealthconfidence.com/news/11029858-breezula-phase-iii-results" rel="noopener nofollow" target="_blank">company announcement</a>; <a href="https://www.dermatologytimes.com/view/clascoterone-5-delivers-strong-phase-3-hair-growth-results" rel="noopener nofollow" target="_blank">summary</a>). The relative-improvement figures in the press release are large because the vehicle arms barely moved; the absolute hair-count gains look comparable to minoxidil's. A 12-month safety follow-up and regulatory filings were due in 2026; it is not yet on the market, and women's data are still to come.</p>
    `,
  },
  {
    id: 'rx-pyrilutamide',
    category: 'rx',
    title: 'Pyrilutamide (KX-826)',
    tldr: 'A Chinese topical anti-androgen with one positive phase 3 and one trial that did not beat placebo; not approved outside China, and the vials sold online are unregulated.',
    evidence: 'emerging',
    focus: 'pattern',
    sessions: 'Twice daily (trial regimen)',
    downtime: 'None',
    cost: 'Not approved outside China',
    bodyHtml: `
      <p>Pyrilutamide (KX-826) is a Chinese topical androgen-receptor antagonist with a contradictory record: a 740-man phase 3 met its 24-week hair-count endpoint and the company filed for approval in China (<a href="https://www.bioworld.com/articles/729893-kintors-kx-826-meets-phase-iii-endpoints-in-alopecia?v=preview" rel="noopener nofollow" target="_blank">BioWorld</a>), while an earlier trial run to US standards did not separate from placebo (<a href="https://clinicaltrials.gov/study/NCT05218642" rel="noopener nofollow" target="_blank">trial registry</a>). It is not approved anywhere in Europe or North America, the vials sold online are unregulated, and the honest position is "promising, unproven, wait".</p>
    `,
  },
  {
    id: 'rx-latanoprost',
    category: 'rx',
    title: 'Prostaglandin analogues (latanoprost, bimatoprost)',
    tldr: 'The eyelash-growers on the scalp: one 16-man placebo-controlled pilot showed higher density; off-label, compounded, unstandardised.',
    evidence: 'emerging',
    focus: 'pattern',
    sessions: 'Once daily, compounded',
    downtime: 'None',
    cost: '€40–80 / month',
    bodyHtml: `
      <p>The glaucoma prostaglandin analogues grow eyelashes, and the question was whether they grow scalp hair. A double-blind pilot in 16 young men applied latanoprost 0.1% to one side of the scalp for 24 weeks and found significantly higher hair density than on the placebo side (<a href="https://www.jaad.org/article/S0190-9622(11)00601-3/abstract" rel="noopener nofollow" target="_blank">Blume-Peytavi, 2012</a>); bimatoprost was trialled in women with pattern loss (<a href="https://clinicaltrials.gov/study/NCT01325350" rel="noopener nofollow" target="_blank">registry</a>) without a product following. Compounded latanoprost appears in some "custom" hair formulas; it is off-label, unstandardised and supported by a single 16-person study.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-microneedling',
    category: 'clinic',
    title: 'Microneedling + minoxidil',
    tldr: 'Twelve randomised trials (631 patients) show needling roughly doubles what minoxidil achieves alone — small, unblinded, single-centre trials, but consistent.',
    evidence: 'moderate',
    focus: 'pattern',
    note: 'Best for: anyone already on minoxidil who wants more from it — the highest-yield add-on',
    sessions: 'Weekly to fortnightly ×12, then monthly',
    downtime: '1–2 days of redness',
    cost: '€100–250 / session in clinic; €20 roller at home',
    bodyHtml: `
      <p>Microneedling — rolling or stamping the scalp with 1–1.5 mm needles — is the best-supported way to make minoxidil work harder. The landmark 2013 trial added weekly needling to 5% minoxidil in men and quadrupled the 12-week hair-count gain (about 91 versus 22 hairs/cm²), with the response holding at eight months; since then a dozen randomised trials have repeated the design. A 2025 meta-analysis of 12 trials and 631 patients found needling plus minoxidil significantly better than minoxidil alone on hair count (<a href="https://pubmed.ncbi.nlm.nih.gov/40056230/" rel="noopener nofollow" target="_blank">2025 meta-analysis</a>; <a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.16186" rel="noopener nofollow" target="_blank">2024 meta-analysis</a>), and in a network analysis of combination regimens it ranked first for women (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12483851/" rel="noopener nofollow" target="_blank">network meta-analysis</a>). Wound signalling (growth factors, Wnt activation) and better drug penetration are the proposed reasons.</p>
      <p>Moderate rather than strong because the trials are small, short, mostly from single centres, and unblinded by nature. Protocol matters: clinic depths of 1–1.5 mm weekly to fortnightly for three months then monthly, minoxidil not applied on the same day (absorption spikes), and strict hygiene — a shared or dirty roller is an infection. Home rollers at 0.5–0.6 mm once a week are a reasonable, cheaper compromise. Our <a href="/microneedling">microneedling guide</a> covers devices and RF variants.</p>
    `,
  },
  {
    id: 'clinic-prp',
    category: 'clinic',
    title: 'Platelet-rich plasma (PRP)',
    tldr: 'Nine randomised trials pooled to higher density than placebo at 3 and 6 months — modest, heterogeneous, protocol-dependent, and fading without maintenance.',
    evidence: 'moderate',
    focus: 'pattern',
    note: 'Best for: women (and men) who want an add-on without another daily drug',
    sessions: '3 monthly, then every 3–6 months',
    downtime: 'A day of soreness',
    cost: '€200–500 / session',
    bodyHtml: `
      <p>Platelet-rich plasma — your own centrifuged platelets injected into the scalp — has more randomised trials than any other in-clinic hair procedure, and they mostly agree on a modest effect. A 2023 meta-analysis of nine randomised trials (238 patients) found significantly higher hair density than placebo at three and six months, though hair count and diameter did not separate from placebo, with high heterogeneity and signs of publication bias (<a href="https://pubmed.ncbi.nlm.nih.gov/37533146/" rel="noopener nofollow" target="_blank">2023 meta-analysis</a>). In women specifically, seven studies pooled to a large density effect but no thickness effect, with the authors urging caution until larger trials replicate it (<a href="https://pubmed.ncbi.nlm.nih.gov/36264022/" rel="noopener nofollow" target="_blank">women's meta-analysis</a>; <a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15617" rel="noopener nofollow" target="_blank">umbrella review</a>). Protocols, kits and platelet concentrations vary wildly, which is the main reason the tier is moderate.</p>
      <p>The usual course is three monthly sessions then a top-up every three to six months; gains fade over six to twelve months without maintenance. It pairs well with minoxidil and is a sensible option for women who cannot use oral drugs. Choose a clinic that uses a validated kit and can tell you its platelet concentration. Our <a href="/regenerative-aesthetics">PRP guide</a> covers the systems.</p>
    `,
  },
  {
    id: 'clinic-transplant',
    category: 'clinic',
    title: 'Hair transplant (FUE / FUT)',
    tldr: 'Moved follicles keep their DHT resistance for life; decades of series report ~90–95% graft survival — but it does not stop loss around the grafts, and many women are not candidates.',
    evidence: 'strong',
    focus: 'pattern',
    note: 'Best for: stable, well-defined pattern loss with a good donor area — after the loss is medically controlled',
    sessions: 'One day (1,500–4,000 grafts), occasionally two',
    downtime: '7–14 days visible; final result at 12 months',
    cost: '€4,000–15,000 in Western Europe · €2,000–4,000 Turkish packages',
    bodyHtml: `
      <p>Hair transplantation moves follicles from the DHT-resistant back and sides of the scalp to where they are needed; the moved follicles keep their resistance, which is why the result is permanent. It has no placebo-controlled trials — none is possible — but decades of large series consistently report 90–95% graft survival in well-run clinics, and the technique is the standard of care for stable pattern loss with adequate donor hair (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12909172/" rel="noopener nofollow" target="_blank">2025 review</a>). Follicular unit excision (FUE) harvests individual follicular units and leaves dot scars; strip surgery (FUT) takes a strip and leaves a linear scar but yields more grafts per session and preserves the donor area better, which is why it still has a place for women who wear their hair long (<a href="https://jddonline.com/articles/hair-transplantation-in-women-S1545961625P8988X" rel="noopener nofollow" target="_blank">2025 review</a>; <a href="https://ishrs.org/hair-transplant-for-women/" rel="noopener nofollow" target="_blank">ISHRS guide</a>).</p>
      <p>What it does not do is stop the ongoing loss around the grafts — untreated, native hair keeps thinning and the transplant becomes an island — so surgeons expect finasteride or minoxidil alongside. Women are candidates less often: diffuse thinning means a thin donor area too, and a substantial share of women who consult are turned down. Complications are mostly minor (folliculitis, temporary shock-loss of native hair, numbness) but over-harvested donors, unnatural hairlines and skin necrosis are real and cluster in high-volume clinics where technicians rather than surgeons operate. Expect 7–14 days looking obvious and a final result at 12 months.</p>
    `,
  },
  {
    id: 'clinic-duta-meso',
    category: 'clinic',
    title: 'Dutasteride mesotherapy',
    tldr: 'A 541-patient retrospective series and a 2025 meta-analysis of small studies show density gains with minimal systemic effects — plausible, off-label, still being worked out.',
    evidence: 'emerging',
    focus: 'pattern',
    sessions: 'Every 1–3 months',
    downtime: 'None',
    cost: '€150–300 / session',
    bodyHtml: `
      <p>Injecting dilute dutasteride into the scalp ("mesotherapy") aims to deliver the drug locally with little systemic exposure. The largest evidence is a Spanish retrospective series of 541 men and women treated roughly every three months, reporting improvement in most with mild, self-limited side effects (<a href="https://jddonline.com/articles/mesotherapy-with-dutasteride-androgenetic-alopecia-retrospective-study-in-real-clinical-practice-S1545961622P6610X/" rel="noopener nofollow" target="_blank">2022 series</a>); a 2025 meta-analysis of the small studies found consistent density gains but rated the evidence low because of heterogeneity and the absence of large controlled trials (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12690437/" rel="noopener nofollow" target="_blank">meta-analysis</a>), and a New York case series found responses mixed (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11647129/" rel="noopener nofollow" target="_blank">case series</a>). A 2025 randomised trial compared monthly with quarterly injections rather than with placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/41328478/" rel="noopener nofollow" target="_blank">trial</a>). Plausible, off-label, and a reasonable option for a woman who cannot take oral anti-androgens — with the honest label that it is still being worked out.</p>
    `,
  },
  {
    id: 'clinic-botox',
    category: 'clinic',
    title: 'Botulinum toxin to the scalp',
    tldr: 'Open-label series claimed 13–20% density gains; the first triple-blind randomised trial (2024) found no benefit over placebo.',
    evidence: 'limited',
    focus: 'pattern',
    sessions: 'Every 3 months',
    downtime: 'None',
    cost: '€300–500 / session',
    bodyHtml: `
      <p>Botulinum toxin injected into scalp muscles was proposed to relieve tension and improve blood flow; early open-label series reported 13–20% density gains and enthusiastic response rates. The first triple-blind randomised trial, published in JAAD in 2024, found no significant improvement over placebo (<a href="https://www.jaad.org/article/S0190-9622(24)02542-8/fulltext" rel="noopener nofollow" target="_blank">randomised trial</a>), and systematic reviews rate the earlier evidence as small, uncontrolled and low-quality (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10663631/" rel="noopener nofollow" target="_blank">2023 review</a>). At €300–500 a session every three months, it is an expensive way to test a hypothesis that has now failed its first proper test.</p>
    `,
  },
  {
    id: 'clinic-exosomes',
    category: 'clinic',
    title: 'Exosome and "stem-cell" scalp injections',
    tldr: 'No approved product anywhere, FDA safety notifications after serious harm, and human data limited to small open-label series where exosomes rode along with PRP or needling.',
    evidence: 'limited',
    focus: 'pattern',
    sessions: 'Sold as 3–4 sessions',
    downtime: 'None claimed',
    cost: '€500–1,500 / session',
    bodyHtml: `
      <p>"Exosome" and "stem-cell" scalp treatments are the frontier that has run ahead of its evidence. No exosome product is approved by the FDA or in the EU for any indication; the FDA has issued public safety notifications after serious adverse events from unapproved exosome injections and repeated consumer alerts about clinics marketing them for hair (<a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">FDA safety notification</a>; <a href="https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes" rel="noopener nofollow" target="_blank">consumer alert</a>). The human data are small open-label series, usually with exosomes added to microneedling or PRP so their own contribution cannot be separated, and the vials in clinics are typically unregulated cosmetic products of unknown content (<a href="https://www.americanhairloss.org/stem-cells-and-exosomes-in-hair-loss-treatment-hope-or-hype/" rel="noopener nofollow" target="_blank">American Hair Loss Association</a>). The biology is interesting; the product on the shelf is not yet medicine.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-minoxidil',
    category: 'safety',
    title: 'Minoxidil: the shed, the fuzz, the heart, the cat',
    tldr: 'Shedding in weeks 2–8 means it is working; unwanted hair is dose-related and reversible; oral doses need a blood-pressure check; not in pregnancy; lethal to cats.',
    bodyHtml: `
      <p><strong>The shed.</strong> Two to eight weeks in, shedding increases as resting hairs are pushed out early. It is the drug working. Stopping at week four — the commonest mistake — loses the benefit and keeps the shed.</p>
      <p><strong>Hair elsewhere.</strong> Topical: fine hair on the forehead or cheeks from runoff, fixed by applying to a dry scalp, washing hands, and not smearing it onto the pillow. Oral: unwanted facial or body hair in 15–30% at low doses (more in women, more at higher doses) — reversible on stopping, and manageable with a lower dose or an anti-androgen.</p>
      <p><strong>Oral, specifically.</strong> Lightheadedness, ankle swelling, fast heartbeat and headache each affect under 2% at hair doses; fluid around the heart is a rare, dose-related risk from its blood-pressure days. Not for people with heart-rhythm or pericardial disease or low blood pressure; check blood pressure at the start (<a href="https://pubmed.ncbi.nlm.nih.gov/33639244/" rel="noopener nofollow" target="_blank">safety study</a>).</p>
      <p><strong>Pregnancy and pets.</strong> Not in pregnancy or breastfeeding. Minoxidil is lethal to cats at tiny doses — keep the bottle and the treated pillowcase away from them.</p>
    `,
  },
  {
    id: 'safety-5ari',
    category: 'safety',
    title: 'Finasteride and dutasteride: sex, mood, pregnancy, PSA',
    tldr: 'Sexual side effects in ~1–2% more men than placebo, an EMA-confirmed mood signal with a patient card since 2025, absolute avoidance in pregnancy, and a halved PSA.',
    bodyHtml: `
      <p><strong>Sexual function.</strong> Lower libido, erectile and ejaculatory problems in about 1–2% more men than placebo in the trials (3.8% versus 2.1%); most resolve. A small number report symptoms persisting after stopping; the EMA's 2025 review could not establish how often.</p>
      <p><strong>Mood.</strong> The EMA now lists suicidal ideation as a side effect of finasteride 1 mg and 5 mg and requires a patient card in each pack: stop the drug and seek medical advice if mood changes, and tell your prescriber about any history of depression (<a href="https://www.ema.europa.eu/en/documents/referral/finasteride-dutasteride-containing-medicinal-products-article-31-referral-measures-minimise-risk-suicidal-thoughts_en.pdf" rel="noopener nofollow" target="_blank">EMA measures</a>). The same review kept the drugs on the market because the benefit–risk balance remains positive.</p>
      <p><strong>Pregnancy.</strong> Both drugs can feminise a male fetus. Women who are or could become pregnant must not take them or handle crushed or broken tablets; exposure through semen is considered negligible, though some couples choose condoms.</p>
      <p><strong>The small print.</strong> PSA roughly halves — tell any doctor screening your prostate. Blood services defer donors for a month after finasteride and six months after dutasteride. Dutasteride's five-week half-life means any side effect takes months to clear.</p>
    `,
  },
  {
    id: 'safety-antiandrogens-women',
    category: 'safety',
    title: 'Anti-androgens in women: contraception, potassium, liver',
    tldr: 'Spironolactone, bicalutamide and cyproterone all need reliable contraception; spironolactone a potassium check, bicalutamide liver tests, cyproterone only at contraceptive doses.',
    bodyHtml: `
      <p>Spironolactone, bicalutamide and cyproterone can all affect a male fetus; reliable contraception is mandatory in any woman who could conceive, and none is used in pregnancy. Spironolactone raises potassium — a baseline and follow-up level in women over 45 or on ACE inhibitors, ARBs or potassium supplements — and causes menstrual irregularity in about one in eight and breast tenderness in some; taken with a combined pill, both are less of an issue. Bicalutamide needs liver-function tests at baseline and at one and three months, then periodically. High-dose cyproterone carries a dose-related meningioma risk that led regulators to restrict it in 2020; contraceptive doses are what is used for hair.</p>
    `,
  },
  {
    id: 'safety-transplant-tourism',
    category: 'safety',
    title: 'Transplant tourism: what the price gap buys',
    tldr: 'Technician-run, high-volume clinics over-harvest a donor area that cannot be replaced; ask who holds the punch, how many cases a day, and to see one-year donor photos.',
    bodyHtml: `
      <p>Turkey performs more hair transplants than any country on earth, and the price gap is real. So is the risk gap. The international surgeons' society has warned for years about "black-market" clinics where technicians rather than doctors perform the surgery, over-harvest the donor area (which is finite and cannot be replaced), promise unrealistic graft numbers and set hairlines too low for a face that will keep ageing. Necrosis of the recipient area, donor depletion and unnatural results cluster in high-volume settings (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12909172/" rel="noopener nofollow" target="_blank">complications review</a>). Ask who holds the punch and places the grafts, how many procedures the clinic runs a day, to see healed donor areas at one year, and whether the surgeon will treat the ongoing loss medically. A cheap first transplant that burns the donor area makes the expensive second one impossible.</p>
    `,
  },
  {
    id: 'safety-unregulated',
    category: 'safety',
    title: 'Unregulated products: exosomes, imports, custom topicals',
    tldr: 'No approved exosome product exists; marketplace research chemicals have no quality control; compounded "custom" formulas with steroids are not for unsupervised years.',
    bodyHtml: `
      <p>Three things sold for hair loss are unregulated in ways that matter. Exosome and "stem-cell" injections: no approved product exists, contents are unverified, and serious adverse events have been reported (<a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">FDA</a>). Imported research chemicals — pyrilutamide, "RU58841", dutasteride vials from marketplaces — have no quality control and no safety data at all. And compounded "custom" topicals mixing minoxidil, finasteride, tretinoin, latanoprost and steroids from online clinics range from sensible to reckless; a formula with a corticosteroid in it is not something to use for years without a dermatologist who knows.</p>
    `,
  },
  {
    id: 'safety-red-flags',
    category: 'safety',
    title: 'When to stop self-treating and see a dermatologist',
    tldr: 'A receding hairline with itch, redness, shiny skin or eyebrow loss; round patches; scale or pustules; sudden loss with other symptoms; loss with acne and irregular cycles; any child.',
    bodyHtml: `
      <p>Self-treating with minoxidil is fine for slow, symmetrical thinning. See a dermatologist within weeks — not months — if any of these apply: a hairline receding with itch, burning, redness, shiny or pale skin, or eyebrow thinning (frontal fibrosing alopecia); smooth round patches (alopecia areata); loss with scale, pustules or scarring; sudden heavy shedding with weight loss, fatigue, fever or a new medication; hair loss with acne, hirsutism and irregular cycles (a hormonal work-up); or any loss in a child. Scarring alopecias are the ones where a six-month wait costs hair you cannot get back.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-regrow',
    category: 'faq',
    title: 'Will my hair grow back?',
    tldr: 'In pattern loss, treatments stop the loss reliably and regrow modestly; a follicle that has been dormant for years is beyond medicine.',
    bodyHtml: `
      <p>Partly, and the earlier the better. Miniaturised follicles that are still cycling can be pushed back toward terminal hair by minoxidil, 5-alpha-reductase inhibitors and anti-androgens; the trials show meaningful density gains in the first one to two years, then a plateau and slow drift. Follicles that have shrunk to vellus and stopped cycling — a slick, shiny scalp — do not come back with medicine; that is transplant territory. Telogen shedding, by contrast, regrows fully on its own because the follicles were never damaged.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Less shedding at 2–3 months, first regrowth at 3–4, photographic density at 6; judge at 12.',
    bodyHtml: `
      <p>Minoxidil and finasteride both show first change at three to four months and most of their effect by twelve; oral minoxidil often a little faster. Devices and PRP are judged at six months. Anything promising results in weeks is either treating a shed that was going to resolve anyway or selling you a shampoo. Compare same-light photographs, never the mirror — the mirror lies in both directions.</p>
    `,
  },
  {
    id: 'faq-forever',
    category: 'faq',
    title: 'Do I have to keep using it forever?',
    tldr: 'For pattern loss, yes — stop and you return to where you would have been within 3–6 months. For shedding, no.',
    bodyHtml: `
      <p>Pattern loss is a lifelong programme; the treatments hold the follicle against it and stopping releases it. Minoxidil's gains are gone within three to six months of stopping; finasteride's over about a year. That is also the honest reason to pick a regimen you will actually keep — a once-daily tablet you take beats a twice-daily foam you abandon. Telogen effluvium and postpartum shedding need no long-term treatment.</p>
    `,
  },
  {
    id: 'faq-minoxidil-women',
    category: 'faq',
    title: 'Is minoxidil safe for women? Will I grow facial hair?',
    tldr: 'Yes — it is the first-line treatment for women. Facial fuzz happens to a minority and reverses.',
    bodyHtml: `
      <p>Topical minoxidil is the first-line, guideline-recommended treatment for female pattern loss, and the 5% foam once daily is as effective as the 2% solution twice daily with less irritation. Fine facial hair affects a minority (from runoff, or with oral minoxidil in up to a third at higher doses) and disappears when the dose is lowered or the drug stopped; an anti-androgen prevents it. Not during pregnancy or breastfeeding.</p>
    `,
  },
  {
    id: 'faq-stress',
    category: 'faq',
    title: 'Does stress really cause hair loss?',
    tldr: 'Yes — through telogen effluvium, 2–3 months after the stressor, and it recovers. Chronic stress may also hold follicles in rest.',
    bodyHtml: `
      <p>Acute severe stress — bereavement, illness, a crisis — triggers telogen shedding on the usual two-to-three-month delay, and it resolves. Whether everyday chronic stress thins hair is less proven in humans, but the mouse work is convincing: sustained stress hormone keeps hair-follicle stem cells asleep by suppressing a growth signal (<a href="https://www.nature.com/articles/s41586-021-03417-2" rel="noopener nofollow" target="_blank">Nature, 2021</a>). Stress does not cause pattern loss, but it can unmask it, and the shed itself is a stressor — the loop is real.</p>
    `,
  },
  {
    id: 'faq-vitamins',
    category: 'faq',
    title: 'Are hair vitamins worth it?',
    tldr: 'Only where a deficiency exists. Test ferritin, vitamin D, thyroid and B12; skip biotin and 40-ingredient "hair vitamins".',
    bodyHtml: `
      <p>A blood panel costs less than a month of supplements and tells you whether there is anything to correct. Iron and vitamin D deficiency are common in women who shed and worth fixing; biotin has no evidence in people who are not deficient; and the botanical brands (Nutrafol, Viviscal) have modest company-run trials that never compare them with minoxidil. Supplements are an add-on to treatment, not a treatment.</p>
    `,
  },
  {
    id: 'faq-hrt',
    category: 'faq',
    title: 'Will HRT fix menopausal hair?',
    tldr: 'Not reliably — there is no trial with a hair endpoint, and some regimens make it worse. Decide on symptoms; treat hair separately.',
    bodyHtml: `
      <p>See the menopause section above. Estrogen matters to the follicle, but systemic hormone therapy has never been tested against hair outcomes in a controlled trial, and testosterone or androgenic-progestin regimens can accelerate pattern loss. Take it for hot flushes, sleep and bone if that is right for you; treat the hair with minoxidil and, if needed, spironolactone.</p>
    `,
  },
  {
    id: 'faq-camouflage',
    category: 'faq',
    title: 'What can I do today, while I wait?',
    tldr: 'Keratin fibers, tinted root sprays, a shorter blunt cut, a topper, or scalp micropigmentation — all instant, none regrow anything.',
    bodyHtml: `
      <p>While the twelve months pass: keratin fibers (Toppik and similar) cling to existing hair and hide a wide part instantly; tinted scalp sprays reduce contrast; a shorter, blunter cut makes thin hair look denser than long layers; a good topper is invisible and used by more women than admit it; and scalp micropigmentation tattoos a shadow of density that lasts three to five years. None of them is a treatment and none interferes with one — apply fibers after minoxidil has dried.</p>
    `,
  },
  {
    id: 'faq-transplant-permanent',
    category: 'faq',
    title: 'Is a transplant permanent?',
    tldr: 'The grafts, yes — they keep their DHT resistance. The hair around them keeps thinning unless you treat it.',
    bodyHtml: `
      <p>Transplanted follicles come from the DHT-resistant donor zone and behave that way in their new home for life. The problem is the untreated native hair around them, which continues the pattern; ten years on, an untreated transplant can be an island of density in a bald field. Surgeons therefore expect medical treatment alongside, and some will not operate on a man who refuses it. Very rarely, the donor zone itself thins with age in extensive patterns.</p>
    `,
  },
  {
    id: 'faq-postpartum',
    category: 'faq',
    title: 'After a baby, an illness or a diet — should I treat?',
    tldr: 'Usually wait: this shedding resolves on its own in 3–6 months. Treat the cause, check iron and thyroid, and add minoxidil only if it drags past six months.',
    bodyHtml: `
      <p>Postpartum shedding peaks around three to four months after birth as the hairs held on by pregnancy estrogen all leave together; it is complete by about a year and needs no treatment. The same is true after fever, surgery, COVID-19 or rapid weight loss — the trigger has passed, the follicles are intact. Check ferritin, thyroid and vitamin D (postpartum thyroiditis is common and missed), eat enough protein, and avoid starting minoxidil in the first weeks, because its own shed will confuse the picture. If shedding continues past six months, or a widening part appears as the shed settles, that is pattern loss unmasked and worth treating.</p>
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
    intro: 'Three drivers explain almost every case — each with a different fix.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which hair loss do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: pharmacy, supplements and habits',
    intro: 'Everything you can start this week — from the one over-the-counter drug with strong evidence to the supplements with none.',
    sections: home,
  },
  {
    id: 'rx',
    title: 'Prescription medicines',
    intro: 'The drugs that address the hormone or the follicle directly — graded separately for men and women, because the evidence is.',
    sections: rx,
  },
  {
    id: 'clinic',
    title: 'In-clinic procedures and surgery',
    intro: 'Needles, platelets and grafts — where the extra money buys extra evidence, and where it does not.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'What the trials and the regulators actually flag, drug by drug.',
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
  pattern: 'Pattern loss',
  shedding: 'Shedding',
  areata: 'Alopecia areata',
  scarring: 'Scarring',
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

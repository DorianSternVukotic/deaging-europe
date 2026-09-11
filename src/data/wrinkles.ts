/**
 * Fine lines & wrinkles guide — single source of truth (problem template).
 *
 * Consumed by /wrinkles. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: "wrinkles" are three different problems — surface lines
 * (skin), expression lines (muscle) and folds (volume and descent) — and the
 * tools that fix one do little for the others. Sun did most of the damage;
 * sunscreen and a retinoid are the only prevention with trial evidence.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'fine' | 'expression' | 'folds' | 'perioral' | 'general';

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
  'A wrinkle is one of three things: a surface line in sun-damaged skin, an expression line folded in by a muscle, or a fold made by volume loss and descent. Stretch the skin and watch what happens — that tells you which, and which tool.',
  'Only two things prevent wrinkles with randomised evidence: daily sunscreen (24% less skin aging over 4.5 years) and a retinoid. Everything else is repair.',
  'For expression lines, botulinum toxin is the treatment: about 80–90% respond within a month, for three to four months. For deep folds, hyaluronic-acid filler — 80% still responding at a year. For etched-in lines, resurfacing.',
  'Vitamin C, niacinamide, glycolic acid and peptides all have real but small trials; hyaluronic-acid serums change the look within hours and the wrinkle not at all. Silicone patches, face tape and face yoga are placebo with good marketing.',
  'The face gets more expensive as you go up the ladder — €10 a month for tretinoin, €300 for a toxin session, €3,000 for a laser — and the cheap end is where the prevention evidence lives.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'home-spf',
    kind: 'Sun',
    title: 'Sun did most of it',
    blurb: 'Photoaging accounts for the large majority of visible skin aging in fair skin: UV breaks collagen, degrades elastin and leaves the crepey, mottled surface. It is also the one driver with a randomised prevention trial.',
  },
  {
    id: 'type-expression',
    kind: 'Motion',
    title: 'Muscles fold the skin, thousands of times a day',
    blurb: 'Frowning, squinting and raising the brows crease the same skin until the crease no longer springs back. Dynamic lines become static ones — the toxin window is before that happens.',
  },
  {
    id: 'type-folds',
    kind: 'Time',
    title: 'Collagen thins, fat deflates, bone recedes',
    blurb: 'Dermal collagen falls about 1% a year and drops sharply after menopause; fat pads deflate and slide; the skeleton recedes. That is what makes folds — and no cream reaches any of it.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'wrinkle-anatomy',
    category: 'concept',
    title: 'What a wrinkle actually is',
    tldr: 'A groove where the dermis has lost collagen and elastic fibres and the skin above it has thinned — surface lines live in the epidermis and upper dermis, deep ones in the dermis, folds beneath it.',
    bodyHtml: `
      <p>Skin is a two-layer laminate: a thin epidermis over a thick dermis of collagen and elastic fibres. Young dermis is dense and springs back; aged dermis has less collagen, fragmented elastin and more disorganised fibres, so a crease pressed into it — by a muscle, a pillow or a lifetime of squinting — stays. The visible groove is the epidermis following that weakened dermis down (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2907965/" rel="noopener nofollow" target="_blank">review</a>).</p>
      <p>Depth decides the treatment. Fine surface lines and crepey texture are epidermal and upper-dermal, which is why tretinoin, acids and superficial resurfacing reach them. Etched expression lines run through the dermis, which is why they need a muscle relaxant to stop the folding and a laser or peel to rebuild the floor. Folds — nose to mouth, mouth to chin — are not wrinkles at all: they are the edge of a deflating, descending face, which is why filler and not skincare answers them.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'When lines start, and who gets them first',
    tldr: 'In European women wrinkles and sagging start as early as the late twenties; photodamage is present in 80–90% of fair-skinned adults; darker skin wrinkles later; women get more lip lines than men.',
    bodyHtml: `
      <p>In a comparison of women across five ethnic groups, wrinkles, sagging and visible vessels appeared earliest and most severely in European women — from the late twenties onward — while pigmentation appeared first in Chinese women, in whom wrinkling was not prominent until about 50 (<a href="https://onlinelibrary.wiley.com/doi/10.1111/ics.13003" rel="noopener nofollow" target="_blank">2024 study</a>). Photodamage of some degree is present in 80–90% of fair-skinned adults in Europe and North America (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2907965/" rel="noopener nofollow" target="_blank">review</a>). Vertical lip lines are strongly associated with being female, with age and with smoking — women's perioral skin has far fewer oil glands to cushion it (<a href="https://www.jaad.org/article/S0190-9622(15)02521-9/abstract" rel="noopener nofollow" target="_blank">JAAD, 2016</a>).</p>
      <p>The genetics matter less than people assume. In the classic identical-twin studies, the twin who smoked, sunbathed or weighed less in later life looked years older than the sibling with the same DNA; a five-year difference in smoking history was visible on the face (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">smoking twins</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/19337100/" rel="noopener nofollow" target="_blank">Guyuron 2009, 186 pairs</a>).</p>
    `,
  },
  {
    id: 'why-early',
    category: 'concept',
    title: 'Why prevention beats repair, in numbers',
    tldr: 'Daily sunscreen cut measured skin aging by 24% over 4.5 years in 903 adults; nothing that repairs a wrinkle later comes close per euro.',
    bodyHtml: `
      <p>The single best trial in cosmetic dermatology is not about a treatment. In Nambour, Australia, 903 adults under 55 were randomised to daily broad-spectrum sunscreen or to using it at their own discretion; after four and a half years the daily users showed no detectable increase in skin aging on silicone casts, 24% less than the discretionary group (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013, Annals of Internal Medicine</a>). Add a retinoid, which has decades of randomised trials showing fewer fine wrinkles over six to twelve months, and you have the whole evidence-based prevention list.</p>
      <p>Repair is real but expensive and partial: toxin buys three to four months of a smooth glabella; filler a year of a softer fold; a laser a lasting but incomplete improvement with a week of downtime. The wrinkle you never etch costs €10 a month. Start the base now, whatever else you do.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-fine',
    category: 'context',
    title: 'Fine lines and crepey texture',
    tldr: 'Shallow, criss-crossing lines that vanish when you stretch the skin — photoaged, dehydrated surface skin. Retinoids, acids, sunscreen and light resurfacing reach them.',
    focus: 'fine',
    bodyHtml: `
      <p>Fine lines are the crinkle you see on the cheek, under the eye and on the chest when the skin is relaxed: shallow, multidirectional, and gone the moment you gently stretch the skin between two fingers. They are the epidermis and upper dermis after years of UV — thinner, drier, with fragmented elastic fibres — and they are the one wrinkle type skincare genuinely treats. Tretinoin thickens the epidermis and rebuilds upper-dermal collagen over months; glycolic and lactic acids smooth the surface; hyaluronic-acid serums plump it for hours.</p>
      <p>The test: stretch it. If the line disappears, it is surface and the home tier applies. If a groove remains, it has reached the dermis and you are reading the next drawer.</p>
    `,
  },
  {
    id: 'type-expression',
    category: 'context',
    title: 'Expression lines — dynamic, then static',
    tldr: 'Frown lines, crow’s feet and forehead lines start as creases that appear only with movement and become etched-in when the dermis stops springing back; the muscle is the cause and the toxin is the fix.',
    focus: 'expression',
    bodyHtml: `
      <p>The glabellar "11", crow's feet and horizontal forehead lines are made by muscles — corrugator, orbicularis oculi, frontalis — folding the same strip of skin thousands of times a day. Early on they are dynamic: visible when you frown or squint, gone when you relax. With time and sun the dermis under the crease loses the ability to recover, and the line is there at rest: static. That transition is the treatment window. Botulinum toxin stops the folding, which both erases dynamic lines and, used regularly, lets a static line soften as the dermis recovers — but a deep static line may also need resurfacing or a thin filler.</p>
      <p>The test: make the expression in the mirror, then relax completely. A line that appears only with the expression is dynamic. A line that stays, even faintly, is static and needs the muscle stopped <em>and</em> the skin treated.</p>
    `,
  },
  {
    id: 'type-folds',
    category: 'context',
    title: 'Folds — nasolabial, marionette, and why cream fails',
    tldr: 'The lines from nose to mouth and mouth to chin are not wrinkles: they are the edge where a deflating, descending cheek meets tethered skin. Filler and collagen stimulators, not skincare.',
    focus: 'folds',
    bodyHtml: `
      <p>The nasolabial fold and the marionette line are made below the skin. Facial fat sits in compartments that deflate and slide downward with age while the underlying bone recedes; the skin at the fold is held by ligaments, so the cheek above it piles up against a fixed edge (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3404279/" rel="noopener nofollow" target="_blank">Mendelson &amp; Wong</a>). No topical reaches that layer, and a laser only smooths the skin on top of it.</p>
      <p>Filler works here because it replaces what was lost, either in the fold itself or — better, in most faces — in the cheek above it, which re-supports the fold. Collagen stimulators (poly-L-lactic acid) do it more slowly and for longer. When the fold is part of a general softening of the lower face, you are reading our <a href="/jowls">jowls guide</a>.</p>
    `,
  },
  {
    id: 'type-perioral',
    category: 'context',
    title: "Lip lines ('smoker's lines')",
    tldr: 'Vertical lines above the lip — female, sun and smoking driven, on the thinnest facial skin. The hardest lines to treat; the best results come from resurfacing plus a light toxin dose.',
    focus: 'perioral',
    bodyHtml: `
      <p>Perioral lines are the ones women resent most and the ones that respond least to creams. They are etched by the pursing orbicularis oris (straws, cigarettes, speech), by sun on a strip of skin with very few oil glands, and by the loss of lip volume that leaves the skin above it slack. Women get them earlier and worse than men, and smokers worst of all (<a href="https://www.jaad.org/article/S0190-9622(15)02521-9/abstract" rel="noopener nofollow" target="_blank">JAAD, 2016</a>).</p>
      <p>Because the lines are deep in thin skin, the tools that work are the ones that rebuild the dermis — a fractional or fully ablative laser, or a phenol–croton oil peel, which remains the most powerful single treatment for this zone — with a few units of toxin to stop the pursing and a thin filler to lift the deepest grooves. Tretinoin helps at the margins and prevents the next ones.</p>
    `,
  },
  {
    id: 'type-sleep',
    category: 'context',
    title: 'Sleep creases and chest lines',
    tldr: 'Vertical lines on the cheek, forehead or décolletage from years of side-sleeping and pillow compression — mechanical, not muscular; the evidence for pillows and patches is thin but plausible.',
    focus: 'fine',
    bodyHtml: `
      <p>Side and stomach sleeping press the face against the pillow for a third of your life, and surgeons argue that the compression and shear create "sleep wrinkles" — vertical lines on the cheek and temple, a diagonal on the chest — that differ from expression lines in direction (<a href="https://pubmed.ncbi.nlm.nih.gov/27329660/" rel="noopener nofollow" target="_blank">Aesthetic Surgery Journal, 2016</a>). One study of sleep-side preference found no correlation with perceived facial aging, so the effect is plausible rather than proven (<a href="https://pubmed.ncbi.nlm.nih.gov/23865987/" rel="noopener nofollow" target="_blank">2013 study</a>). Back-sleeping and a silicone chest patch are cheap experiments; nothing here is a treatment for the lines you already have.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'How to read your own face (the stretch test)',
    tldr: 'Stretch the skin: line vanishes → surface tier. Make the expression: appears only then → toxin. Stays at rest → toxin plus resurfacing. A fold with a cheek piling above it → filler.',
    bodyHtml: `
      <p>A dermatologist reads a face in about a minute, and you can do most of it in a mirror. Stretch the skin gently between two fingers: a line that disappears is a surface line, and skincare or light resurfacing is its tier. Make the expression — frown, squint, raise the brows — and relax: a line that appears only with the expression is dynamic and belongs to toxin; a line that persists faintly at rest is static and needs the muscle stopped and the dermis rebuilt. A groove that deepens when you smile, with a soft cheek piling up above it, is a fold and belongs to filler or a collagen stimulator.</p>
      <p>Photograph the face relaxed, in the same light, before you start anything. Dermatologists also grade photoaging on the Glogau scale (I: no wrinkles, to IV: wrinkles at rest everywhere), which is really a map of how much sun the skin has had. And take the pinch test to the lower face before deciding a fold is a wrinkle — our <a href="/jowls">jowls guide</a> explains it.</p>
    `,
  },
  {
    id: 'menopause-skin',
    category: 'context',
    title: 'Menopause and the collagen cliff',
    tldr: 'Skin collagen falls fastest in the first five years after menopause and tracks years since menopause rather than age; tretinoin still works after 55, and hormone therapy is not a skin treatment.',
    focus: 'general',
    bodyHtml: `
      <p>Estrogen keeps the dermis thick, hydrated and rich in collagen. When it falls, skin collagen declines steeply — the classic studies found the loss tracks years since menopause rather than calendar age, with the steepest fall in the first five years (<a href="https://obgyn.onlinelibrary.wiley.com/doi/abs/10.1111/j.1471-0528.1987.tb02338.x" rel="noopener nofollow" target="_blank">1987 study</a>; <a href="https://www.tandfonline.com/doi/full/10.4161/derm.23872" rel="noopener nofollow" target="_blank">"Estrogens and aging skin"</a>). That is why many women feel their face changed in eighteen months.</p>
      <p>What helps is unglamorous: tretinoin (the trials include women well past 55), daily sunscreen, a barrier-repairing moisturiser, and resurfacing where the skin is already etched. Systemic hormone therapy thickens skin a little in some studies but is a decision about hot flushes, sleep and bone, not wrinkles; our <a href="/anti-aging-50s">50s guide</a> covers that evidence in full.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-spf',
    category: 'home',
    title: 'Daily broad-spectrum sunscreen',
    tldr: 'The one wrinkle prevention with a randomised trial: 903 adults, 4.5 years, 24% less measured skin aging with daily use versus discretionary use.',
    evidence: 'strong',
    focus: 'general',
    note: 'Best for: everyone — the base under every other line on this page',
    sessions: 'Every morning, reapplied outdoors',
    downtime: 'None',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Sunscreen is the only anti-wrinkle intervention proven in a randomised trial to slow aging itself. In the Nambour trial, adults under 55 assigned to daily broad-spectrum SPF 15+ showed no detectable increase in skin aging over 4.5 years on silicone skin casts — 24% less aging than those using sunscreen when they felt like it (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>). Photodamage is present in 80–90% of fair-skinned adults, and UV is the largest single cause of the collagen breakdown that makes wrinkles (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2907965/" rel="noopener nofollow" target="_blank">review</a>).</p>
      <p>Practicalities: SPF 30–50, broad-spectrum (UVA is the wrinkle wavelength, and the EU's UVA seal or PA rating matters more than the SPF number), a quarter-teaspoon for the face, every day including winter and indoors near windows, reapplied when outdoors. Mineral or chemical filters both work; the one you will actually wear is the right one. Sunscreen does not undo existing lines — it stops the next ones.</p>
    `,
  },
  {
    id: 'home-tretinoin',
    category: 'home',
    title: 'Tretinoin (prescription retinoid)',
    tldr: 'Decades of randomised trials: fewer fine wrinkles, smoother texture and more dermal collagen over 6–12 months; the meta-analysis confirms it. The one cream that changes the dermis.',
    evidence: 'strong',
    focus: 'fine',
    note: 'Best for: fine lines, crepey texture and prevention — the second half of the base',
    sessions: 'Nightly (start 2–3× a week), indefinitely',
    downtime: 'Weeks 1–8: dryness, flaking',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Tretinoin is the reference anti-wrinkle molecule because it is the one that has been tested properly. Two 24-week randomised, vehicle-controlled trials in 533 people found 0.05% emollient cream reduced fine wrinkling, roughness, mottled pigmentation and laxity (<a href="https://www.jaad.org/article/S0190-9622(97)70058-6/fulltext" rel="noopener nofollow" target="_blank">overview</a>); 48-week multicentre trials confirmed continued improvement (<a href="https://pubmed.ncbi.nlm.nih.gov/9270507/" rel="noopener nofollow" target="_blank">48-week studies</a>); even 0.02% worked in two double-blind studies (<a href="https://pubmed.ncbi.nlm.nih.gov/11534915/" rel="noopener nofollow" target="_blank">0.02% cream</a>); and a systematic review and meta-analysis of the randomised trials pools the effect (<a href="https://dpcj.org/index.php/dpc/article/view/5172" rel="noopener nofollow" target="_blank">meta-analysis</a>). Biopsies show the mechanism — thicker epidermis, new collagen in the upper dermis, reorganised elastic fibres.</p>
      <p>The catch is tolerance: dryness, redness and flaking for the first six to eight weeks, which is why most people quit. Start 0.025% two or three nights a week on dry skin over a moisturiser, build to nightly, and expect visible change at three to four months and the full effect at a year. Not in pregnancy; always with sunscreen. Adapalene 0.3% was non-inferior to tretinoin 0.05% in one comparison and is gentler (<a href="https://www.jle.com/fr/revues/ejd/e-docs/comparable_efficacy_of_adapalene_0.3_gel_and_tretinoin_0.05_cream_as_treatment_for_cutaneous_photoaging_312613/article.phtml" rel="noopener nofollow" target="_blank">comparison</a>).</p>
    `,
  },
  {
    id: 'home-retinol',
    category: 'home',
    title: 'Retinol, retinal and adapalene (over-the-counter retinoids)',
    tldr: 'Real but weaker cousins: 0.4% retinol improved fine wrinkles and collagen in older skin; well-formulated retinol products approached tretinoin in split-face comparisons; retinaldehyde matched a course of glycolic peels.',
    evidence: 'moderate',
    focus: 'fine',
    note: 'Best for: skin that cannot tolerate tretinoin, and prevention from the late twenties',
    sessions: 'Nightly, indefinitely',
    downtime: 'Mild dryness in weeks 1–4',
    cost: '€15–60 / month',
    bodyHtml: `
      <p>Retinol has to be converted twice in the skin to become tretinoin, so it is weaker gram for gram but far better tolerated. The evidence is real: in the classic study, 0.4% retinol applied to the forearm of older adults three times a week for 24 weeks reduced fine wrinkles and increased collagen and glycosaminoglycan production on biopsy (<a href="https://www.semanticscholar.org/paper/Improvement-of-naturally-aged-skin-with-vitamin-A-Kafi-Kwak/14392509174e2fab7a4705dad0281b0398dd21fc" rel="noopener nofollow" target="_blank">Kafi 2007</a>); 0.3% retinol improved multiple photoaging measures in a later study (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9826105/" rel="noopener nofollow" target="_blank">2023 study</a>); and in a randomised split-face comparison, a well-formulated retinol regimen approached the tretinoin regimen on wrinkle scores with less irritation (<a href="https://jddonline.com/a-randomized-double-blind-split-face-study-comparing-the-efficacy-and-tolerability-of-three-retinol-based-products-vs-three-tretinoin-based-products-in-subjects-with-moderate-to-severe-facial-photodam/" rel="noopener nofollow" target="_blank">split-face study</a>). Retinaldehyde, one step closer to tretinoin, matched a course of glycolic peels in a randomised study (<a href="https://pubmed.ncbi.nlm.nih.gov/30027612/" rel="noopener nofollow" target="_blank">2018 trial</a>).</p>
      <p>What to buy: a stated concentration (0.3–1% retinol, or 0.05–0.1% retinaldehyde), airless opaque packaging (retinoids oxidise), and patience — the trials ran 24 weeks. Most "retinol" products list no percentage and contain a token amount.</p>
    `,
  },
  {
    id: 'home-vitamin-c',
    category: 'home',
    title: 'Vitamin C (L-ascorbic acid) serum',
    tldr: 'Two small double-blind trials: 5% for six months reduced deep furrows and improved surface microrelief; a 12-week half-face study showed new collagen on biopsy. Modest, real, unstable in the bottle.',
    evidence: 'moderate',
    focus: 'fine',
    note: 'Best for: a morning antioxidant layer under sunscreen',
    sessions: 'Every morning',
    downtime: 'None (stinging at 15–20%)',
    cost: '€20–80 / month',
    bodyHtml: `
      <p>Vitamin C is a cofactor for collagen synthesis and an antioxidant that mops up the free radicals UV generates. Topically, the evidence is small but controlled: in a six-month double-blind, randomised trial, a 5% cream significantly reduced deep furrows and increased the density of skin microrelief on the treated side (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1034/j.1600-0625.2003.00008.x" rel="noopener nofollow" target="_blank">Humbert 2003</a>); an earlier 12-week half-face study found clinically visible improvement in wrinkling with biopsy evidence of new collagen. Combined with vitamin E and ferulic acid it also measurably reduces UV damage under sunscreen, which is its most defensible job.</p>
      <p>The practical problem is chemistry: L-ascorbic acid oxidises in weeks once opened and goes yellow-brown. Buy 10–20% in opaque, airless packaging, keep it cool, and discard when it darkens. Derivatives are stabler and weaker.</p>
    `,
  },
  {
    id: 'home-niacinamide',
    category: 'home',
    title: 'Niacinamide 4–5%',
    tldr: 'A 12-week double-blind split-face RCT in 50 women: fewer fine lines and wrinkles, less blotchiness, better elasticity. Cheap, gentle, and modest.',
    evidence: 'moderate',
    focus: 'fine',
    sessions: 'Once or twice daily',
    downtime: 'None',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>Niacinamide (vitamin B3) supports the skin barrier, calms inflammation and reduces pigment transfer. In the best study, 50 women applied 5% niacinamide to one side of the face and vehicle to the other, twice daily for 12 weeks, double-blind: the niacinamide side showed significant reductions in fine lines and wrinkles, hyperpigmented spots, red blotchiness and sallowness, and improved elasticity on cutometry (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1524-4725.2005.31732" rel="noopener nofollow" target="_blank">Bissett 2005</a>). A cosmetic regimen of niacinamide, peptides and retinyl propionate was comparable to 0.02% tretinoin for wrinkles in a randomised comparison — a fair statement of its ceiling (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2841824/" rel="noopener nofollow" target="_blank">regimen trial</a>). The 4–5% concentration in the trials is the useful dose; the 10% versions add irritation, not effect.</p>
    `,
  },
  {
    id: 'home-aha',
    category: 'home',
    title: 'Glycolic and lactic acid (AHAs)',
    tldr: 'One 22-week double-blind trial: 76% of women on 8% glycolic and 71% on 8% lactic improved at least one photodamage grade versus 40% on vehicle. Surface smoothing, not dermal repair.',
    evidence: 'emerging',
    focus: 'fine',
    sessions: '2–7 nights a week',
    downtime: 'Stinging; sun sensitivity',
    cost: '€10–40 / month',
    bodyHtml: `
      <p>Alpha-hydroxy acids loosen the bonds between dead surface cells, which smooths texture and brightens within weeks; at higher concentrations and over months they modestly thicken the epidermis. The controlled evidence is one good trial: 74 women aged 40–70 used 8% glycolic acid, 8% lactic acid or vehicle for 22 weeks, and the proportion improving by at least one grade of photodamage was 76%, 71% and 40% respectively (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">Stiller 1996</a>). A daily 5% glycolic formulation showed only trends toward improvement in a smaller double-blind study (<a href="https://www.researchgate.net/publication/13686192_A_Double-Blind_Randomized_Clinical_Trial_on_the_Effectiveness_of_a_Daily_Glycolic_Acid_5_Formulation_in_the_Treatment_of_Photoaging" rel="noopener nofollow" target="_blank">1998 trial</a>).</p>
      <p>Useful for texture and dullness, less so for a wrinkle you can feel. They increase sun sensitivity — sunscreen is non-negotiable — and they compete with retinoids for the same irritation budget, so alternate nights rather than layering. Our <a href="/chemical-peels">peel guide</a> covers the in-clinic strengths.</p>
    `,
  },
  {
    id: 'home-bakuchiol',
    category: 'home',
    title: 'Bakuchiol',
    tldr: 'One 44-person, 12-week randomised double-blind trial: 0.5% bakuchiol matched 0.5% retinol on wrinkle area and pigment with less scaling and stinging. Promising, single-study.',
    evidence: 'emerging',
    focus: 'fine',
    sessions: 'Twice daily (trial regimen)',
    downtime: 'None',
    cost: '€20–50 / month',
    bodyHtml: `
      <p>Bakuchiol is a plant compound with retinoid-like gene effects and none of the retinoid chemistry, which is why it is marketed as "retinol for sensitive skin". The evidence is one well-designed trial: 44 people randomised to 0.5% bakuchiol twice daily or 0.5% retinol nightly for 12 weeks, double-blind, with computer-analysed photographs. Both reduced wrinkle surface area and pigmentation with no statistical difference between them, and the retinol group reported more scaling and stinging (<a href="https://onlinelibrary.wiley.com/doi/10.1111/bjd.16918" rel="noopener nofollow" target="_blank">Dhaliwal 2019, BJD</a>). One trial against a modest comparator makes it emerging, not proven — but it is the only "natural retinol" with a randomised trial behind it, and it can be used in pregnancy, where retinoids cannot.</p>
    `,
  },
  {
    id: 'home-peptides',
    category: 'home',
    title: 'Peptides (Matrixyl, argireline and friends)',
    tldr: 'Signal peptides have small manufacturer trials and a place in one regimen that rivalled 0.02% tretinoin; the "Botox in a bottle" hexapeptide has never been tested against toxin. Pleasant, modest, over-marketed.',
    evidence: 'emerging',
    focus: 'fine',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€20–120 / month',
    bodyHtml: `
      <p>Peptides are fragments of collagen or nerve-signalling proteins that, in cell culture, nudge fibroblasts to make matrix or dampen the muscle signal. The clinical evidence is thin and mostly manufacturer-run. Palmitoyl pentapeptide (Matrixyl) was part of a niacinamide-and-retinyl-propionate regimen that matched 0.02% tretinoin for wrinkle reduction in a randomised comparison (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2841824/" rel="noopener nofollow" target="_blank">regimen trial</a>), and a multi-peptide eye serum improved crow's feet measures in a 2023 controlled study (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15849" rel="noopener nofollow" target="_blank">2023 trial</a>). Acetyl hexapeptide-3 (argireline), sold as "Botox in a bottle", relaxes muscle in a dish; it has never been compared with toxin in a controlled trial, and a topical cannot reach the muscle that makes a frown line.</p>
      <p>Verdict: fine in a moisturiser you like, priced as if they were prescriptions. If a peptide product costs more than tretinoin and sunscreen together, the money is in the wrong place.</p>
    `,
  },
  {
    id: 'home-ha-serum',
    category: 'home',
    title: 'Hyaluronic-acid serums and moisturisers',
    tldr: 'Reduce the look of fine and coarse lines within minutes to hours by hydrating and plumping the surface — measurable in trials, gone when you stop. Cosmetic, not corrective.',
    evidence: 'moderate',
    focus: 'fine',
    note: 'Best for: the instant, temporary softening of fine lines — and as the buffer under a retinoid',
    sessions: 'Twice daily',
    downtime: 'None',
    cost: '€10–60 / month',
    bodyHtml: `
      <p>Dehydrated skin creases more, and hydrating it uncreases it — for as long as it stays hydrated. A serum with five forms of hyaluronic acid produced statistically significant reductions in fine and coarse lines and roughness immediately after application, with cumulative improvement over weeks of use (<a href="https://www.jaad.org/article/S0190-9622(16)00202-4/fulltext" rel="noopener nofollow" target="_blank">JAAD, 2016</a>); a 2023 review of topical hyaluronic acid reaches the same conclusion about hydration and the appearance of aging (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10078143/" rel="noopener nofollow" target="_blank">review</a>). Topical hyaluronic acid does not penetrate to the dermis and does not build anything; it holds water in the surface, which is exactly what makes a fine line look shallower at 9 a.m.</p>
      <p>Use it for what it does: instant softening, a comfortable buffer under tretinoin, and better barrier function in dry or menopausal skin. Any moisturiser with glycerin and ceramides does most of the same — see the <a href="/ceramides">ceramides guide</a>.</p>
    `,
  },
  {
    id: 'home-growth-factors',
    category: 'home',
    title: 'Growth-factor and "stem-cell" serums',
    tldr: 'A cosmetic growth-factor serum beat placebo on fine and coarse lines in a 12-week trial and a 2023 systematic review is cautiously positive; "stem-cell" creams contain no stem cells and lean on conditioned-medium studies.',
    evidence: 'emerging',
    focus: 'fine',
    sessions: 'Twice daily',
    downtime: 'None',
    cost: '€80–300 / month',
    bodyHtml: `
      <p>Growth-factor serums contain signalling proteins harvested from cultured cells and, in a few controlled trials, they do something: a cosmetic growth-factor serum produced significantly greater reductions in fine and coarse lines than placebo at 4, 8 and 12 weeks (<a href="https://www.jaad.org/article/S0190-9622(18)31309-4/abstract" rel="noopener nofollow" target="_blank">JAAD, 2018</a>), and a 2023 systematic review found most studies positive but small, short and often uncontrolled (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15644" rel="noopener nofollow" target="_blank">Quinlan 2023</a>). "Stem-cell" creams contain no living cells; the better ones use the conditioned medium those cells grew in, for which a meta-analysis of randomised trials — mostly as an add-on to lasers and needling — found reductions in wrinkles and pigment (<a href="https://link.springer.com/article/10.1007/s00266-022-03168-z" rel="noopener nofollow" target="_blank">2022 meta-analysis</a>). Large proteins penetrate intact skin poorly, which is why the strongest data come from use after resurfacing. At €100–300 a bottle, the price is far ahead of the evidence.</p>
    `,
  },
  {
    id: 'home-led',
    category: 'home',
    title: 'Red and near-infrared LED masks',
    tldr: 'A 2014 randomised controlled trial and 2025 meta-analyses show modest improvements in roughness and fine lines at clinic doses; home masks deliver a fraction of that dose.',
    evidence: 'emerging',
    focus: 'fine',
    sessions: '3–5× a week, 10–20 min',
    downtime: 'None',
    cost: '€200–500 device',
    bodyHtml: `
      <p>Red (630–660 nm) and near-infrared light stimulate fibroblast metabolism in a dish, and in people the controlled evidence is real but modest. The reference trial randomised 136 people to red/near-infrared light or no treatment twice weekly for 30 sessions: treated skin showed significantly improved complexion, roughness and collagen density on ultrasound (<a href="https://journals.sagepub.com/doi/10.1089/pho.2013.3616" rel="noopener nofollow" target="_blank">Wunsch &amp; Matuschka 2014</a>); a 2025 meta-analysis of photobiomodulation for skin rejuvenation pools small positive trials with heterogeneous devices and doses (<a href="https://link.springer.com/article/10.1007/s10103-025-04484-x" rel="noopener nofollow" target="_blank">2025 meta-analysis</a>). Consumer masks emit a fraction of the irradiance used in trials and there is no head-to-head against a retinoid. Harmless, pleasant, and the least cost-effective item on this list. Our <a href="/red-light-therapy">red-light guide</a> covers doses.</p>
    `,
  },
  {
    id: 'home-collagen',
    category: 'home',
    title: 'Collagen peptide supplements',
    tldr: 'A 2018 meta-analysis of 11 trials (805 people) found better hydration and elasticity and, in some trials, less wrinkle depth over 8–12 weeks — mostly manufacturer-funded, effect sizes small.',
    evidence: 'moderate',
    focus: 'general',
    sessions: '2.5–10 g daily, 8–12 weeks to judge',
    downtime: 'None',
    cost: '€25–50 / month',
    bodyHtml: `
      <p>Oral collagen peptides are absorbed as small fragments that appear to signal fibroblasts. The 2018 systematic review and meta-analysis pooled 11 randomised trials in 805 people and found significant improvements in skin hydration and elasticity over 8–12 weeks, with reduced wrinkle depth in several individual trials (<a href="https://pubmed.ncbi.nlm.nih.gov/30368550/" rel="noopener nofollow" target="_blank">2018 meta-analysis</a>); a 2023 BJD review adds that peptides may also protect against UV-induced collagen breakdown (<a href="https://academic.oup.com/bjd/article/189/Supplement_1/i17/7333865" rel="noopener nofollow" target="_blank">BJD, 2023</a>). Nearly every trial is industry-funded and the effects are small — the kind you measure with an instrument rather than see across a room. Our <a href="/collagen">collagen guide</a> grades the forms and doses; the honest summary is "modest, real, not a substitute for a retinoid".</p>
    `,
  },
  {
    id: 'home-silicone',
    category: 'home',
    title: 'Silicone patches and face tape',
    tldr: 'No controlled trials; patches soften a crease for a couple of hours by hydration and by stopping the fold overnight; tape does nothing and irritates.',
    evidence: 'limited',
    focus: 'expression',
    sessions: 'Nightly',
    downtime: 'None',
    cost: '€15–40',
    bodyHtml: `
      <p>Silicone patches hold moisture against the skin and physically prevent the crease from forming while you sleep, so a forehead or chest line looks softer for an hour or two after removal — the same mechanism as a hydrating serum, plus splinting. No controlled trial has shown any lasting change, and the effect on lines made by muscle or by volume loss is nil. Face tape has even less: it neither stimulates collagen nor relaxes the muscle, and dermatologists mostly warn about irritation. Cheap experiments for sleep creases and chest lines; not treatments.</p>
    `,
  },
  {
    id: 'home-lifestyle',
    category: 'home',
    title: 'Not smoking, less sugar, enough sleep',
    tldr: 'Identical-twin studies make smoking the best-documented avoidable wrinkle cause; glycation and poor sleep are mechanistically sound with observational support. No trial can randomise a cigarette.',
    evidence: 'moderate',
    focus: 'general',
    sessions: 'Ongoing',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Smoking is the cleanest case: among 79 pairs of identical twins discordant for smoking, the smoker scored worse for upper-lip lines, lower-lid bags, nasolabial folds and jowls, and five years of smoking difference was visible on the face (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">twin study</a>); the larger Guyuron twin series added sun, alcohol and weight swings to the list (<a href="https://pubmed.ncbi.nlm.nih.gov/19337100/" rel="noopener nofollow" target="_blank">Guyuron 2009</a>). Sugar ages skin by glycation — sugars cross-link collagen and elastin into stiff, brittle fibres — which is well established mechanistically and supported by observational data, not trials (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0738081X10000428" rel="noopener nofollow" target="_blank">review</a>). Poor sleepers showed more intrinsic aging signs and slower barrier recovery in a 60-woman study (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/ced.12455" rel="noopener nofollow" target="_blank">Oyetakin-White 2015</a>).</p>
      <p>None of this reverses a line. All of it decides how many you make in the next decade, at zero cost.</p>
    `,
  },
  {
    id: 'home-facial-exercise',
    category: 'home',
    title: 'Facial exercise and "face yoga"',
    tldr: 'A 16-woman uncontrolled pilot found fuller cheeks and a perceived age three years younger after 20 weeks; nothing on wrinkles, and repeated expression is how expression lines form.',
    evidence: 'limited',
    focus: 'expression',
    sessions: '30 min daily (pilot regimen)',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>The study everyone cites enrolled 27 women aged 40–65 in a 20-week programme of 30-minute daily facial exercises; the 16 who finished were rated as having fuller upper and lower cheeks, and blinded estimated age fell from 50.8 to 48.1 years (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2666801" rel="noopener nofollow" target="_blank">Alam 2018, JAMA Dermatology</a>). It had no control group, measured fullness rather than lines, and the effect could plausibly be hypertrophy of the cheek muscles. For wrinkles specifically the logic runs the other way: expression lines are made by repeated contraction, and dermatologists who inject toxin spend their days stopping exactly the movements face yoga prescribes. Harmless for cheeks; unproven for anything else.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-toxin',
    category: 'inj',
    title: 'Botulinum toxin for expression lines',
    tldr: 'The pivotal glabellar trial: 77–89% responders at day 30 versus placebo; crow’s feet 55% vs 3%; forehead 46–53% vs 0.6%. Three to four months a dose, the most-studied cosmetic treatment there is.',
    evidence: 'strong',
    focus: 'expression',
    note: 'Best for: frown lines, crow’s feet and forehead lines — dynamic first, static with time',
    sessions: 'Every 3–4 months',
    downtime: 'None; bruise possible',
    cost: '€200–400 per area',
    bodyHtml: `
      <p>Botulinum toxin blocks the nerve signal to the small muscles that fold the skin, and for the lines they make it is the treatment. In the pivotal placebo-controlled glabellar trial, 20 units across five sites produced a responder rate at day 30 of 77% by physician rating at maximal frown and 89% by patient assessment, against near-zero for placebo, with adverse events no different from placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/12973229/" rel="noopener nofollow" target="_blank">Carruthers 2003</a>). For crow's feet the phase 3 responder rate was 55% (investigator) versus 3% for placebo (<a href="https://www.ovid.com/jnls/dermatologicsurgery/fulltext/10.1097/dss.0000000000000220~efficacy-and-safety-of-onabotulinumtoxina-for-treating-crows" rel="noopener nofollow" target="_blank">phase 3</a>); for forehead lines, 46–53% improved by two grades versus 0.6% (<a href="https://pubmed.ncbi.nlm.nih.gov/32537333/" rel="noopener nofollow" target="_blank">review</a>); a combined upper-face protocol keeps patients satisfied for up to six months (<a href="https://pubmed.ncbi.nlm.nih.gov/36342250/" rel="noopener nofollow" target="_blank">2022 study</a>). Newer toxins (abo-, inco-, pra-, dax-) are equivalent or slightly longer-lasting.</p>
      <p>What it does not do: it does not fill a static groove that has already etched in — that softens over repeated cycles as the dermis recovers, or needs resurfacing; and it does nothing for folds or lip volume. Dose and placement decide the look: a light dose keeps movement, a heavy one freezes. Effect starts at day 3–5, peaks at two weeks and fades at three to four months, with no cumulative harm from stopping. Our <a href="/anti-aging-40s">40s guide</a> covers the toxin-and-filler decade in context.</p>
    `,
  },
  {
    id: 'inj-ha-folds',
    category: 'inj',
    title: 'Hyaluronic-acid filler for folds',
    tldr: 'Randomised trials with blinded graders: nasolabial folds improved by about a grade and ~80% were still responders at 12 months; reversible with hyaluronidase.',
    evidence: 'strong',
    focus: 'folds',
    note: 'Best for: nasolabial and marionette folds — or the deflated cheek that causes them',
    sessions: 'Every 9–18 months',
    downtime: '1–3 days of swelling; bruising',
    cost: '€300–600 per syringe',
    bodyHtml: `
      <p>Folds are volume problems, and hyaluronic-acid gel replaces volume. The evidence base is unusually good because regulators demand it: in two randomised split-face pivotal trials, responder rates on the Wrinkle Severity Rating Scale were 81% at two weeks and 56% at 26 weeks for both the test gel and the Restylane comparator (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7413804/" rel="noopener nofollow" target="_blank">two RCTs</a>); in a 12-month randomised comparison of two gels, about 80% of subjects were still responders at a year (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5414715/" rel="noopener nofollow" target="_blank">12-month trial</a>); a 52-week split-face study found the same (<a href="https://pubmed.ncbi.nlm.nih.gov/33085170/" rel="noopener nofollow" target="_blank">52-week study</a>). MRI studies show the gel persists far longer than the "six months" folklore, which is the argument against topping up on a schedule (<a href="https://journals.lww.com/prsgo/fulltext/2024/07000/hyaluronic_acid_filler_longevity_in_the_mid_face_.36.aspx" rel="noopener nofollow" target="_blank">MRI review</a>).</p>
      <p>The skilled version treats the cause — the deflated cheek — rather than the fold, which is why an injector who reaches for the cheekbone when you ask about the nasolabial line is usually the better one. Risks are rare but real (vascular occlusion, blindness) and covered in the safety drawer; the gel dissolves on demand with hyaluronidase. Our <a href="/fillers">filler guide</a> goes zone by zone.</p>
    `,
  },
  {
    id: 'inj-ha-lines',
    category: 'inj',
    title: 'Thin fillers for fine and lip lines',
    tldr: 'Low-viscosity gels (Volbella, Skinboosters, Kysse) soften perioral lines and fine cheek lines with pivotal-trial support in the lips; skin boosters improve hydration and roughness for 3–6 months.',
    evidence: 'moderate',
    focus: 'perioral',
    note: 'Best for: vertical lip lines and fine etched lines, alongside toxin and resurfacing',
    sessions: 'Every 6–12 months',
    downtime: '1–3 days swelling',
    cost: '€300–500 per syringe',
    bodyHtml: `
      <p>Soft, low-viscosity hyaluronic-acid gels placed superficially or in the lip fill the deepest perioral grooves and add the small volume whose loss slackens the skin above the lip. The pivotal trial for Volbella in the lips and perioral area showed responder rates sustained to a year (<a href="https://www.ovid.com/jnls/dermatologicsurgery/fulltext/10.1097/dss.0000000000001035~safety-and-effectiveness-of-vyc-15l-a-hyaluronic-acid-filler" rel="noopener nofollow" target="_blank">Volbella pivotal trial</a>). Microdroplet "skin boosters" (Restylane Vital) are a different idea — hydration and roughness rather than filling — and in a randomised multicentre study 75–84% of faces were rated improved by a blinded evaluator at three months (<a href="https://clinicaltrials.gov/study/NCT02403986" rel="noopener nofollow" target="_blank">randomised study</a>), with a skin-roughness responder rate that falls from 96% at month one to 35% by month six (<a href="https://pubmed.ncbi.nlm.nih.gov/31749628/" rel="noopener nofollow" target="_blank">responder data</a>). Profhilo, the "bioremodelling" injectable, has thinner evidence than its marketing; the <a href="/fillers">filler guide</a> grades it separately.</p>
      <p>The trade-off in the lip zone is lumps and visible product in thin skin, which is why the best results combine a small volume of thin gel with a few units of toxin and resurfacing, rather than more filler.</p>
    `,
  },
  {
    id: 'inj-plla',
    category: 'inj',
    title: 'Poly-L-lactic acid (Sculptra)',
    tldr: 'A collagen stimulator: randomised trials show nasolabial-fold correction lasting up to 25 months, with a double-blind 252-person trial confirming long-term effect. Slow, gradual, subtle.',
    evidence: 'moderate',
    focus: 'folds',
    note: 'Best for: diffuse deflation and folds in someone who wants gradual, long-lasting change',
    sessions: '2–3 sessions 4–6 weeks apart; top-up at 2 years',
    downtime: '1–2 days; nodules rare',
    cost: '€400–700 per vial',
    bodyHtml: `
      <p>Poly-L-lactic acid microspheres are injected as a suspension and, over two to three months, provoke fibroblasts to lay down new collagen around them, so the volume that appears is the patient's own. In the randomised pivotal comparison against human collagen filler, nasolabial-fold correction was significantly better from month 3 and persisted to 25 months (<a href="https://www.accessdata.fda.gov/cdrh_docs/pdf3/p030050s002c.pdf" rel="noopener nofollow" target="_blank">FDA summary</a>); a 2024 multicentre, double-blinded, randomised trial in 252 people confirmed durable nasolabial-fold improvement (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12903950/" rel="noopener nofollow" target="_blank">2024 trial</a>). Because the effect builds slowly it never looks "done"; because it is collagen it lasts. The price of that is patience, the need for meticulous dilution and massage to avoid nodules, and no hyaluronidase escape hatch if you dislike it.</p>
    `,
  },
  {
    id: 'inj-caha',
    category: 'inj',
    title: 'Calcium hydroxylapatite (Radiesse)',
    tldr: 'A stiffer filler that also stimulates collagen: a 2023 meta-analysis and a 2024 network meta-analysis put it among the more durable fold treatments; not reversible.',
    evidence: 'moderate',
    focus: 'folds',
    sessions: 'Every 12–18 months',
    downtime: '1–3 days',
    cost: '€400–700 per syringe',
    bodyHtml: `
      <p>Calcium hydroxylapatite is a suspension of mineral microspheres in gel; it fills immediately and stimulates collagen as the gel is absorbed, so results outlast the product. A 2023 meta-analysis found it effective and safe for facial folds with results at 12 months or more (<a href="https://pubmed.ncbi.nlm.nih.gov/37684413/" rel="noopener nofollow" target="_blank">2023 meta-analysis</a>), and a 2024 network meta-analysis of fillers ranked it among the more durable options for the nasolabial fold (<a href="https://link.springer.com/article/10.1007/s00266-024-03889-3" rel="noopener nofollow" target="_blank">network meta-analysis</a>). It cannot be dissolved, must not go in the lips, and diluted ("hyperdilute") it doubles as a skin-quality treatment for the cheeks and neck. A good choice for deep folds in a heavier face; a poor one for a first-time patient who might want to undo it.</p>
    `,
  },
  {
    id: 'inj-prp',
    category: 'inj',
    title: 'PRP and PRF for facial lines',
    tldr: 'Three randomised split-face trials show modest improvement in texture and fine lines, mostly when combined with needling or laser; small, heterogeneous, protocol-dependent.',
    evidence: 'emerging',
    focus: 'fine',
    sessions: '3 sessions a month apart',
    downtime: '1–2 days',
    cost: '€200–500 / session',
    bodyHtml: `
      <p>Platelet-rich plasma injected into or needled into the face delivers growth factors that, in three randomised split-face trials, improved skin texture and fine wrinkles modestly over a few months — with the clearest effects when combined with microneedling or laser rather than alone (<a href="https://www.tandfonline.com/doi/full/10.2147/CCID.S340434" rel="noopener nofollow" target="_blank">three split-face trials</a>). Preparation systems, platelet concentrations and injection depths vary wildly, which keeps the tier at emerging. It is a reasonable add-on for someone already having needling, and a poor stand-alone purchase; the <a href="/regenerative-aesthetics">PRP guide</a> covers the systems and the polynucleotide and exosome cousins.</p>
    `,
  },
  {
    id: 'inj-preventive',
    category: 'inj',
    title: '"Preventive" or "baby" toxin in your twenties',
    tldr: 'The evidence that early toxin prevents static lines is one pair of twins; a light dose once lines appear with expression is reasonable, treating a smooth 25-year-old face is not.',
    evidence: 'limited',
    focus: 'expression',
    sessions: 'Every 4–6 months',
    downtime: 'None',
    cost: '€200–350 per session',
    bodyHtml: `
      <p>The idea is sound — stop the folding before the crease etches — and the evidence is a single case report: identical twins, one treated with toxin two to three times a year for 13 years, the other twice in total, with the treated twin showing no forehead or glabellar lines at rest and the untreated twin visible ones (<a href="https://pubmed.ncbi.nlm.nih.gov/17116793/" rel="noopener nofollow" target="_blank">Binder's twins</a>). One pair is not a trial. The sensible reading: once a line appears with expression and is starting to persist at rest — typically late twenties to thirties — a light dose is prevention with a plausible mechanism. Injecting a face that has no lines at rest is a subscription, not a treatment. Our <a href="/anti-aging-30s">30s guide</a> takes the prejuvenation industry apart in detail.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-ablative',
    category: 'clinic',
    title: 'Ablative lasers (fractional CO₂, erbium)',
    tldr: 'The most effective wrinkle treatment short of a deep peel: randomised split-face trials for periorbital lines, decades of series for perioral lines, results that last years — with a week of downtime and real pigment risk.',
    evidence: 'strong',
    focus: 'perioral',
    note: 'Best for: etched crow’s feet, lip lines and photoaged cheeks in lighter skin',
    sessions: '1 (fractional: 1–3)',
    downtime: '5–10 days raw and red; pink for weeks',
    cost: '€1,000–3,000',
    bodyHtml: `
      <p>Ablative lasers vaporise the epidermis and heat the dermis; the skin that regrows is thicker, with new organised collagen. Full-field CO₂ resurfacing produced wrinkle improvement persisting for years in the classic series (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0190962299704895" rel="noopener nofollow" target="_blank">long-term follow-up</a>) at the price of prolonged redness and delayed hypopigmentation in about 8% (<a href="https://pubmed.ncbi.nlm.nih.gov/9950552/" rel="noopener nofollow" target="_blank">1999 series</a>), which is why fractional delivery — columns of injury with intact skin between — took over in 2004 (<a href="https://pubmed.ncbi.nlm.nih.gov/15216537/" rel="noopener nofollow" target="_blank">original paper</a>). For periorbital wrinkles a randomised split-face trial of fractional CO₂ showed significant improvement with a tolerable protocol (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12092846/" rel="noopener nofollow" target="_blank">2025 RCT</a>); a prospective study found half of patients holding 26–50% improvement at a year (<a href="https://jddonline.com/articles/a-prospective-study-of-the-improvement-in-periorbital-wrinkles-and-eyebrowelevation-with-a-novel-fra-S1545961610P0016X/" rel="noopener nofollow" target="_blank">12-month study</a>); fractional erbium improves periorbital and perioral lines with age, smoking and Glogau stage predicting response (<a href="https://pubmed.ncbi.nlm.nih.gov/33550718/" rel="noopener nofollow" target="_blank">2021 study</a>). A 16-study systematic review supports the class for photoaging (<a href="https://link.springer.com/article/10.1007/s00403-021-02283-2" rel="noopener nofollow" target="_blank">systematic review</a>).</p>
      <p>The trade is downtime and risk: a week of open, weeping skin, weeks of pink, post-inflammatory hyperpigmentation in darker skin (in about 4% of sessions in Fitzpatrick IV–VI even with care, <a href="https://pubmed.ncbi.nlm.nih.gov/23652890/" rel="noopener nofollow" target="_blank">series</a>), and cold-sore reactivation unless prophylaxed (<a href="https://pubmed.ncbi.nlm.nih.gov/11966791/" rel="noopener nofollow" target="_blank">study</a>). Our <a href="/laser-ipl">laser guide</a> walks the ladder from gentle to full ablation.</p>
    `,
  },
  {
    id: 'clinic-nafl',
    category: 'clinic',
    title: 'Non-ablative fractional lasers (1550/1540/1927 nm)',
    tldr: 'Heat without wounding: two to four sessions improve texture and fine lines with a day or two of redness; comparable to ablative in some reviews for photoaging, weaker for deep lines.',
    evidence: 'moderate',
    focus: 'fine',
    note: 'Best for: fine lines and texture in someone who cannot take a week off, and in darker skin',
    sessions: '3–4, a month apart',
    downtime: '1–3 days of redness and swelling',
    cost: '€300–800 / session',
    bodyHtml: `
      <p>Non-ablative fractional lasers heat columns of dermis under an intact epidermis, so collagen remodels without an open wound. A systematic review found outcomes for photoaging statistically comparable to ablative devices with a far better tolerability profile (<a href="https://link.springer.com/article/10.1007/s10103-022-03516-0" rel="noopener nofollow" target="_blank">systematic review</a>), and the efficacy-to-risk ratio favours them in darker skin (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3839025/" rel="noopener nofollow" target="_blank">review</a>); a high-power 1540 nm device produced visible, quantifiable improvement in roughness and texture (<a href="https://jcadonline.com/skin-roughness-texture-glass-laser/" rel="noopener nofollow" target="_blank">2019 study</a>). The honest limit: for deep, etched lines the improvement is partial and needs several sessions, and around the mouth an ablative device or a deep peel does more in one go. A good first laser for fine lines and the cheeks; the wrong one for smoker's lines.</p>
    `,
  },
  {
    id: 'clinic-microneedling',
    category: 'clinic',
    title: 'Microneedling (with or without serum)',
    tldr: 'Randomised split-face trials show wrinkle and texture improvement, larger when growth factors or antioxidants are needled in; modest, safe in all skin types, four to six sessions.',
    evidence: 'moderate',
    focus: 'fine',
    note: 'Best for: fine lines and texture in darker skin, or as the delivery route for serums',
    sessions: '4–6, a month apart',
    downtime: '1–2 days of redness',
    cost: '€150–300 / session',
    bodyHtml: `
      <p>Microneedling punches thousands of microscopic channels that trigger a wound-healing collagen response without heat. For rejuvenation the controlled evidence is real but modest: in a randomised split-face trial, needling with topical growth factors significantly improved wrinkles and pigmentation over needling alone (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7716740/" rel="noopener nofollow" target="_blank">RCT</a>); a double-blinded split-face trial found a vitamin C/E/ferulic serum applied after needling improved photoaging measures over needling alone (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12912124/" rel="noopener nofollow" target="_blank">2025 trial</a>). Its real advantages are safety in darker skin, where lasers risk pigment, and the ability to deliver actives past the barrier — the same reason vitamin C serums needled in have caused granulomas (<a href="https://pubmed.ncbi.nlm.nih.gov/37250016/" rel="noopener nofollow" target="_blank">case series</a>), so only sterile, purpose-made products go on an open face. Our <a href="/microneedling">microneedling guide</a> covers depths, devices and the RF versions.</p>
    `,
  },
  {
    id: 'clinic-rf-microneedling',
    category: 'clinic',
    title: 'Radiofrequency microneedling (Morpheus8, Potenza)',
    tldr: 'Heat delivered by insulated needles remodels the dermis: prospective and self-controlled studies show periorbital and global wrinkle improvement, no controlled trial against plain needling or a laser, and an FDA alert on burns and fat loss.',
    evidence: 'emerging',
    focus: 'fine',
    sessions: '3, 4–6 weeks apart',
    downtime: '2–4 days',
    cost: '€400–900 / session',
    bodyHtml: `
      <p>Radiofrequency microneedling adds bulk heating to the needle injury, and histology shows more collagen, elastin and vessels afterward. Clinically the wrinkle evidence is a stack of prospective and self-controlled studies — periorbital lines improved in a 24-person nonrandomised trial across skin types (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11626310/" rel="noopener nofollow" target="_blank">2024 study</a>), and static periorbital wrinkles in a self-controlled series (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11743244/" rel="noopener nofollow" target="_blank">2024 series</a>) — and a 2026 systematic review that finds it effective across indications while noting the absence of head-to-head randomised comparisons (<a href="https://link.springer.com/article/10.1007/s00266-026-05834-y" rel="noopener nofollow" target="_blank">systematic review</a>). The FDA has alerted clinicians to serious complications including burns and scarring (<a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">FDA alert</a>) and 2026 studies describe facial fat loss after aggressive settings (<a href="https://www.medscape.com/viewarticle/two-studies-evaluate-radiofrequency-microneedling-adverse-2026a1000q9f" rel="noopener nofollow" target="_blank">Medscape</a>). Plausible, popular, priced like a laser, and graded like a promising device.</p>
    `,
  },
  {
    id: 'clinic-peel-medium',
    category: 'clinic',
    title: 'Medium-depth TCA peels',
    tldr: 'A systematic review and a randomised trial in postmenopausal women show improvement in fine and deep wrinkles and dyschromia; a week of peeling, the cheapest resurfacing there is.',
    evidence: 'moderate',
    focus: 'fine',
    note: 'Best for: fine lines and mottled photoaging on a budget, in lighter skin',
    sessions: '1–2 a year',
    downtime: '5–7 days of peeling',
    cost: '€300–800',
    bodyHtml: `
      <p>Trichloroacetic acid at 25–35%, usually after a Jessner's or glycolic prime (the Monheit combination), coagulates the epidermis and upper dermis and provokes a healing response that thickens the dermis and reorganises collagen. A systematic review found TCA peeling significantly improves photoaged facial skin, with medium-depth peels effective for wrinkles (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8423570/" rel="noopener nofollow" target="_blank">systematic review</a>), and a randomised study in postmenopausal women showed improvement in fine and deep wrinkles, dyschromia and global assessment (<a href="https://pubmed.ncbi.nlm.nih.gov/40114772/" rel="noopener nofollow" target="_blank">2025 trial</a>). Cheaper than a laser and nearly as effective for fine lines in the right hands; more depth-dependent on the operator, and a pigment risk in darker skin. Our <a href="/chemical-peels">peel guide</a> grades every depth.</p>
    `,
  },
  {
    id: 'clinic-peel-deep',
    category: 'clinic',
    title: 'Phenol–croton oil peel (deep)',
    tldr: 'The most powerful non-surgical wrinkle treatment, especially for lip lines — decades of series and surgeons’ consensus, no randomised trial, two weeks of downtime, cardiac monitoring and permanent lightening.',
    evidence: 'moderate',
    focus: 'perioral',
    note: 'Best for: deep perioral and periorbital lines in fair skin, when a laser has not been enough',
    sessions: 'Once',
    downtime: '10–14 days raw; red for 2–3 months',
    cost: '€2,000–5,000',
    bodyHtml: `
      <p>A phenol peel with croton oil reaches the mid-dermis, and the depth is set by the croton-oil concentration rather than the phenol (<a href="https://pubmed.ncbi.nlm.nih.gov/30550827/" rel="noopener nofollow" target="_blank">Hetter's work</a>). Nothing else non-surgical removes deep perioral and periorbital lines as completely, and the result lasts a decade; segmental peels of just the lip or eye zone are common, and the combination of a facelift with a perioral phenol peel is well documented (<a href="https://pubmed.ncbi.nlm.nih.gov/24165626/" rel="noopener nofollow" target="_blank">outcomes study</a>; <a href="https://www.jaad.org/article/S0190-9622(18)33051-2/abstract" rel="noopener nofollow" target="_blank">JAAD review</a>). The evidence is surgeons' series and consensus, never a randomised trial, which caps it at moderate despite its power.</p>
      <p>The price: phenol is absorbed and cardiotoxic, so full-face peels are done in stages with cardiac monitoring — done properly, no clinically significant arrhythmias occurred in a large series (<a href="https://www.jaad.org/article/S0190-9622(17)32478-7/fulltext" rel="noopener nofollow" target="_blank">study</a>), but a fatal case has been analysed in the literature (<a href="https://pubmed.ncbi.nlm.nih.gov/40774430/" rel="noopener nofollow" target="_blank">forensic report</a>); the treated skin is permanently lighter, so it suits fair skin and a full-face or clearly bordered zone. A serious tool for a serious problem, in very few hands.</p>
    `,
  },
  {
    id: 'clinic-thermage',
    category: 'clinic',
    title: 'Monopolar radiofrequency (Thermage)',
    tldr: 'Tightens loose skin modestly in a 2025 randomised trial and a 600-treatment series; for wrinkles themselves the trials are registered, not published. A laxity device that gets sold for lines.',
    evidence: 'emerging',
    focus: 'general',
    sessions: 'Once a year',
    downtime: 'None',
    cost: '€1,500–3,500',
    bodyHtml: `
      <p>Monopolar radiofrequency heats the deep dermis and fat septa to contract collagen and provoke new collagen over months. For laxity there is a 2025 randomised controlled trial showing long-term tightening (<a href="https://pubmed.ncbi.nlm.nih.gov/39957006/" rel="noopener nofollow" target="_blank">RCT</a>) and a retrospective series of over 600 treatments (<a href="https://pubmed.ncbi.nlm.nih.gov/16989184/" rel="noopener nofollow" target="_blank">series</a>); for wrinkles as such, a facial-wrinkle trial exists only as a registration (<a href="https://clinicaltrials.gov/study/NCT06657365" rel="noopener nofollow" target="_blank">registry</a>). It is a reasonable buy for mild laxity in someone who refuses downtime, which is the <a href="/jowls">jowls guide's</a> territory, and a poor buy for a line, which it does not target.</p>
    `,
  },
  {
    id: 'clinic-ipl',
    category: 'clinic',
    title: 'IPL "photorejuvenation"',
    tldr: 'A randomised split-face trial found IPL improved pigmentation, vessels and texture but had no effect on wrinkles. Good for the colour of photoaging, not the lines.',
    evidence: 'limited',
    focus: 'fine',
    sessions: '3–5',
    downtime: 'None',
    cost: '€200–500 / session',
    bodyHtml: `
      <p>Intense pulsed light targets pigment and blood vessels, and that is what it fixes: in a randomised, blinded split-face trial, IPL improved pigmentation, visible vessels and texture but showed no efficacy on wrinkles (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/407425" rel="noopener nofollow" target="_blank">JAMA Dermatology</a>). Because the brown and red of photoaging make a face look older, IPL often makes people look younger without changing a single line — a useful trick, honestly labelled. For the lines, see the lasers above. The <a href="/laser-ipl">laser guide</a> covers when IPL is the right first device.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-retinoids',
    category: 'safety',
    title: 'Retinoids: the irritation curve, the sun, and pregnancy',
    tldr: 'Six to eight weeks of dryness is normal and passes; sunscreen is mandatory; tretinoin and adapalene are avoided in pregnancy and breastfeeding, bakuchiol is the substitute.',
    bodyHtml: `
      <p><strong>The irritation curve.</strong> Redness, dryness and flaking peak at two to four weeks and settle by eight; the fix is a lower strength, fewer nights, a moisturiser buffer and patience — not stopping. Avoid the eyelids and the corners of the nose and mouth at first.</p>
      <p><strong>Sun.</strong> Retinoids thin the dead surface layer and make the skin more photosensitive; daily sunscreen is part of the prescription, not an add-on.</p>
      <p><strong>Pregnancy.</strong> Topical tretinoin and adapalene are avoided throughout pregnancy and breastfeeding as a precaution (oral isotretinoin is a proven teratogen; the topicals are not, but nobody tests it). Bakuchiol, vitamin C, niacinamide, azelaic acid and glycolic acid are the pregnancy-safe alternatives.</p>
      <p><strong>Procedures.</strong> Stop retinoids about a week before peels, lasers and waxing, and resume once the skin has healed.</p>
    `,
  },
  {
    id: 'safety-toxin',
    category: 'safety',
    title: 'Botulinum toxin: droop, spread, and who holds the syringe',
    tldr: 'Eyelid or brow droop in a few percent, temporary; heavy brows from over-treated foreheads; rare antibody resistance; not in pregnancy or with certain neuromuscular diseases; only licensed products from licensed injectors.',
    bodyHtml: `
      <p>Cosmetic toxin has one of the cleanest safety records in medicine at the doses used, and the problems are almost all placement. Eyelid ptosis (toxin drifting into the eyelid muscle) affects a few percent, lasts weeks and is treatable with apraclonidine drops; a "heavy" brow comes from over-treating the forehead in someone whose frontalis is holding the brows up; asymmetry is a touch-up. Headache and bruising are common and trivial. Antibody resistance is rare and linked to frequent high doses. It is avoided in pregnancy and breastfeeding and in myasthenia and similar conditions, and it interacts with aminoglycoside antibiotics.</p>
      <p>The real hazard in Europe is the market: grey-import and counterfeit toxins, "toxin parties", and injectors with a weekend certificate. Licensed product (the box has a batch number you can ask to see), a clinician who examines your muscles before choosing sites, and a follow-up at two weeks are the whole checklist.</p>
    `,
  },
  {
    id: 'safety-filler',
    category: 'safety',
    title: 'Fillers: vascular occlusion, blindness, nodules, overfill',
    tldr: 'Occlusion about 1 in 6,400 needle syringes and 1 in 41,000 by cannula; 511 published blindness cases worldwide; delayed nodules under 5%; the commonest harm is the overfilled face. HA is reversible, the others are not.',
    bodyHtml: `
      <p><strong>Vascular occlusion</strong> — filler entering an artery — is the emergency: skin necrosis or, if it reaches the eye's circulation, blindness. A large registry puts the rate at about 1 occlusion per 6,410 syringes by needle and 1 per 40,882 by cannula (<a href="https://www.harleyacademy.com/aesthetic-medicine-articles/cannula-use-makes-vascular-occlusion-less-likely/" rel="noopener nofollow" target="_blank">registry analysis</a>); 511 cases of filler-related blindness have been published worldwide, mostly from the nose, glabella and forehead (<a href="https://academic.oup.com/asj/article/44/10/1091/7649223" rel="noopener nofollow" target="_blank">2024 review</a>); with hyaluronidase given fast, 84% of pooled HA occlusions recover (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12097758/" rel="noopener nofollow" target="_blank">pooled analysis</a>). Your injector must stock hyaluronidase and know the protocol.</p>
      <p><strong>Nodules and delayed reactions</strong> occur in a fraction of a percent to a few percent, sometimes months later and sometimes after infections or vaccines; most resolve with hyaluronidase or steroids (<a href="https://jcadonline.com/cmac-delayed-onset-nodules/" rel="noopener nofollow" target="_blank">review</a>). <strong>Overfill</strong> — the puffy, front-heavy "pillow face" from years of topping up gel that never fully left — is the commonest harm and the one nobody counts (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13051189/" rel="noopener nofollow" target="_blank">facial overfilled syndrome</a>). HA dissolves; poly-L-lactic acid and calcium hydroxylapatite do not, which is the argument for starting with HA.</p>
    `,
  },
  {
    id: 'safety-resurfacing',
    category: 'safety',
    title: 'Lasers and peels: pigment, scars, cold sores, and phenol',
    tldr: 'Delayed hypopigmentation after full ablation (~8%), post-inflammatory darkening in darker skin, scarring on the neck and with infection, herpes reactivation without prophylaxis, and cardiac monitoring for phenol.',
    bodyHtml: `
      <p><strong>Pigment.</strong> The two-sided risk of resurfacing: darker skin (Fitzpatrick IV–VI) darkens after injury — post-inflammatory hyperpigmentation in about 4% of sessions even with careful settings (<a href="https://pubmed.ncbi.nlm.nih.gov/23652890/" rel="noopener nofollow" target="_blank">series</a>) — while aggressive full-field CO₂ produced delayed permanent lightening in about 8% of fair patients (<a href="https://pubmed.ncbi.nlm.nih.gov/9950552/" rel="noopener nofollow" target="_blank">1999 series</a>). Test spots, conservative settings, pre- and post-treatment pigment control and strict sun avoidance are the answer; so is choosing non-ablative or needling in darker skin.</p>
      <p><strong>Scarring and infection.</strong> Hypertrophic scars follow over-treatment, especially on the neck and jawline (<a href="https://pubmed.ncbi.nlm.nih.gov/19291746/" rel="noopener nofollow" target="_blank">neck scarring after fractional CO₂</a>), and any infection of a resurfaced face — bacterial, yeast, or herpes — can scar. Antiviral prophylaxis brings herpes reactivation to near zero (<a href="https://pubmed.ncbi.nlm.nih.gov/11966791/" rel="noopener nofollow" target="_blank">study</a>) and is standard for anything ablative or a medium peel.</p>
      <p><strong>Phenol.</strong> Absorbed phenol can trigger arrhythmias; deep peels are done in stages with cardiac monitoring and hydration, and only by people who do them often (<a href="https://www.jaad.org/article/S0190-9622(17)32478-7/fulltext" rel="noopener nofollow" target="_blank">monitored series</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/40774430/" rel="noopener nofollow" target="_blank">fatal case</a>). Isotretinoin within the past six to twelve months is a relative contraindication to ablative resurfacing.</p>
    `,
  },
  {
    id: 'safety-unregulated',
    category: 'safety',
    title: 'Hyaluron pens, home lasers, and imported toxin',
    tldr: 'Needle-free "hyaluron pens" have caused occlusions and infections and are warned against by regulators; home lasers are too weak to matter; imported toxin and filler have no batch control.',
    bodyHtml: `
      <p>Three things marketed straight to consumers deserve a flat no. Needle-free "hyaluron pens" fire filler into the skin at high pressure with no control over depth or vessel, and have caused vascular occlusions, infections and permanent lumps; regulators in several countries have warned against them. Home "laser" and radiofrequency devices are regulated to be too weak to injure, which also makes them too weak to treat a wrinkle — the manufacturer-run studies show minor, temporary changes. And toxin or filler bought online for self- or salon injection has no supply chain: counterfeit, degraded or bacterially contaminated product is the norm in seizures. The cheapest legitimate option on this page is a tube of tretinoin; the cheapest illegitimate one can cost an eye.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-retinol-vs-tretinoin',
    category: 'faq',
    title: 'Retinol or tretinoin?',
    tldr: 'Tretinoin if your skin and your doctor allow it; a properly formulated retinol or retinaldehyde if not. Both beat the rest of the shelf.',
    bodyHtml: `
      <p>Tretinoin has the randomised trials, the meta-analysis and the biopsies; retinol has weaker but real data and far better tolerance, and a well-made retinol regimen approached tretinoin in a split-face comparison. If you can get tretinoin (prescription in most of the EU; over the counter in a few countries), start low and slow. If you cannot, or your skin rebels, a stated-percentage retinol or retinaldehyde is the next best thing and still ahead of every peptide, snail and stem-cell cream.</p>
    `,
  },
  {
    id: 'faq-when-start',
    category: 'faq',
    title: 'When should I start?',
    tldr: 'Sunscreen: now, at any age. A retinoid: from the late twenties or the first fine lines. Toxin: when a line starts to stay at rest. Filler: when a fold appears, not before.',
    bodyHtml: `
      <p>Prevention has no minimum age — the sunscreen trial enrolled adults under 55 and showed benefit across the range. A retinoid from the late twenties is where the dermatologist consensus sits, because that is when collagen turnover starts to lose. Toxin is warranted when an expression line begins to persist after the expression ends, whenever that is; a smooth face at rest does not need it. Filler is for a fold you can see, and the <a href="/anti-aging-30s">30s guide</a> explains why early filler is a subscription with MRI evidence of persistence.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Filler: instantly. Toxin: 3–14 days. Serums that hydrate: hours. Retinoids, vitamin C, niacinamide, acids: 8–12 weeks, full effect at 6–12 months. Lasers and peels: 1–3 months as collagen rebuilds.',
    bodyHtml: `
      <p>The timeline is the tell for what a product is doing. Anything that changes a line in hours is hydrating the surface and will be gone tomorrow. Toxin takes three to five days to start and two weeks to peak. Retinoids, vitamin C, niacinamide and acids change the dermis, which turns over slowly: the trials ran 12–24 weeks, and improvement continued to a year. After a laser or peel the skin looks worse for a week, better at a month, and best at three as new collagen matures. Photograph in the same light at the same time of day, or the mirror will lie to you both ways.</p>
    `,
  },
  {
    id: 'faq-botox-forever',
    category: 'faq',
    title: 'If I stop toxin, will the lines come back worse?',
    tldr: 'No — they return to where they would have been, and years of treatment often leave a line shallower because it stopped being folded.',
    bodyHtml: `
      <p>The muscle recovers fully within three to four months and the skin is no worse for the interruption; the myth of rebound comes from comparing a treated face with its untreated self after a long gap. If anything, the years the crease was not being folded give the dermis time to recover, which is why long-term users often need less. Stopping is safe at any point.</p>
    `,
  },
  {
    id: 'faq-lines-vs-folds',
    category: 'faq',
    title: 'Why does my expensive cream do nothing for the lines from my nose to my mouth?',
    tldr: 'Because those are folds — a volume and descent problem under the skin — and no cream reaches it. Filler, a collagen stimulator, or in time a lift.',
    bodyHtml: `
      <p>The nasolabial fold is where a deflating, descending cheek meets skin tethered by a ligament; the skin over it may be perfectly healthy. Skincare improves the skin's surface and does nothing to the volume beneath, which is why people spend a decade on creams for a line that a syringe would soften in ten minutes. See the folds drawer above and the <a href="/fillers">filler guide</a>; if the fold is part of a general lower-face softening, the <a href="/jowls">jowls guide</a>.</p>
    `,
  },
  {
    id: 'faq-eye-cream',
    category: 'faq',
    title: 'Do I need an eye cream?',
    tldr: 'No — the same retinoid, vitamin C and sunscreen work under the eyes, used more cautiously. "Eye cream" is a smaller jar at a higher price.',
    bodyHtml: `
      <p>The skin under the eyes is thinner and the actives are the same; there is no ingredient that works only in an eye cream. Use a lower-strength retinoid a few nights a week close to (not on) the lid margin, sunscreen to the orbital rim, and a moisturiser. Crow's feet are expression lines and belong to toxin; under-eye hollows are volume and belong, cautiously, to filler; puffiness is fat and fluid, not skin. The <a href="/anti-aging-30s">30s guide</a> has the eye-cream evidence in full.</p>
    `,
  },
  {
    id: 'faq-lip-lines',
    category: 'faq',
    title: 'What actually works on lip lines?',
    tldr: 'Resurfacing (fractional CO₂ or a phenol peel) plus a few units of toxin and a thin filler for the deepest grooves; tretinoin for the margins and prevention.',
    bodyHtml: `
      <p>Lip lines are deep, in thin skin, driven by muscle, sun and lost volume, so they need the whole toolkit. The dermis is rebuilt with a fractional ablative laser or, for the deepest lines in fair skin, a phenol–croton oil peel; the pursing is quietened with two to four units of toxin per side; the deepest grooves and the deflated lip border get a thin hyaluronic-acid gel. Tretinoin and sunscreen keep the next ones away. Skincare alone will disappoint here, and so will filler alone, which makes the lip look stuffed while the lines stay.</p>
    `,
  },
  {
    id: 'faq-collagen-drinks',
    category: 'faq',
    title: 'Are collagen drinks worth it?',
    tldr: 'Modestly: better hydration and elasticity in a meta-analysis of 11 trials, small effects, mostly industry-funded. Cheaper than most serums, weaker than a retinoid.',
    bodyHtml: `
      <p>The pooled trials show real but small improvements in hydration, elasticity and sometimes wrinkle depth over 8–12 weeks; the money is in the industry and the effects are instrument-sized. If you enjoy it and can afford €30 a month, it is a reasonable add-on; if you are choosing between it and tretinoin, the choice is not close. The <a href="/collagen">collagen guide</a> covers forms, doses and the vegan question.</p>
    `,
  },
  {
    id: 'faq-pillow',
    category: 'faq',
    title: 'Silk pillowcases and back-sleeping?',
    tldr: 'Plausible, cheap, unproven. Back-sleeping stops the compression; silk reduces friction; neither reverses a line.',
    bodyHtml: `
      <p>The surgeons' argument for sleep wrinkles is mechanical and reasonable, and one study found no link between sleep side and facial aging, so the honest answer is "probably a little". Sleeping on your back removes the pillow from the equation; a silk or satin pillowcase reduces friction and the morning creases; a silicone chest patch is the same idea for the décolletage. None of them costs anything to try and none of them treats what is already there.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What is the cheapest thing that works, and the most effective?',
    tldr: 'Cheapest with proof: sunscreen and tretinoin, €20–50 a month. Most effective per line: toxin for expression lines, filler for folds, an ablative laser or deep peel for etched lines.',
    bodyHtml: `
      <p>The ladder in euros: sunscreen and tretinoin (€20–50 a month, the only prevention with trials) → niacinamide, vitamin C, acids (€10–80, modest) → toxin (€200–400 an area, three to four months) → filler (€300–600 a syringe, a year) → non-ablative laser, peels, needling (€150–800 a session, several sessions) → ablative laser or deep peel (€1,000–5,000, years). Each rung does something the one below cannot, and none of the upper rungs replaces the bottom one. Most faces over 40 that look expensive are running the whole ladder; most that look good in their thirties are running the first rung.</p>
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
    intro: 'Three drivers make almost every line — and each is fixed by a different tool.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which wrinkles do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: what you put on your face',
    intro: 'The base with randomised evidence, the actives with small trials, and the shelf of things that mostly hydrate.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Injectables',
    intro: 'The treatments that stop the muscle or replace the volume — the strongest evidence in aesthetics, and the safety drawer to read first.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Resurfacing and devices',
    intro: 'Where the dermis is rebuilt — graded by how much wrinkle they remove, and how much skin they risk.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'What the trials and the regulators actually flag, treatment by treatment.',
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
  fine: 'Fine lines',
  expression: 'Expression lines',
  folds: 'Deep folds',
  perioral: 'Lip lines',
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

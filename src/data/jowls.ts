/**
 * Sagging jowls guide — single source of truth (problem template).
 *
 * Consumed by /jowls. `bodyHtml` is plain HTML — rendered with `set:html`.
 * Keep external links with rel="noopener nofollow" and target="_blank".
 * Editorial spine: a jowl is four processes at once — bone recession, fat
 * descent and deflation, ligament tethering, skin laxity — and the buyer's
 * mistake is treating the wrong one. Fillers redraw the line around a jowl,
 * devices tighten elastic skin a little, and only surgery moves a fold you
 * can pinch. The pinch test sorts them.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'bone' | 'fat' | 'skin' | 'general';

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
  'A jowl is the soft tissue of the cheek piling up in front of a ligament that does not move, over a jaw that has shrunk — four processes (bone, fat, ligament, skin) in one pouch. Which one dominates in your face decides the treatment.',
  'Pinch the pouch. Fat that springs back is a fat problem (deoxycholic acid, liposuction). A fold that stays is a skin problem, and the only thing that moves a fold is a facelift.',
  'Jawline filler has real pivotal trials — about 70% responders at six months — but it redraws the line around the jowl; it does not remove it.',
  'Energy devices (Ultherapy, Thermage, RF needling) tighten elastic skin modestly and unpredictably: one retrospective series found a fifth improved and a sixth looked worse. Threads last weeks, not years.',
  'A deep-plane or SMAS facelift satisfies about nine in ten patients with a 1–2% hematoma rate and under 1% nerve injury, and lasts a decade. Nothing non-surgical comes close, and the money spent avoiding it usually exceeds its cost.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-bone',
    kind: 'Bone',
    title: 'The jaw shrinks underneath you',
    blurb: 'The mandible loses height and a notch develops in front of the jowl; the chin recedes. The soft tissue that used to be supported now hangs — the hollow in front of the pouch is the giveaway.',
  },
  {
    id: 'type-fat',
    kind: 'Fat',
    title: 'Cheek fat slides, then deflates',
    blurb: 'Facial fat sits in compartments that descend with age and empty with time or rapid weight loss. Fat that has slid down collects above the jawline; fat that has gone leaves the skin slack.',
  },
  {
    id: 'type-skin',
    kind: 'Skin & ligaments',
    title: 'Skin loosens; the ligament holds',
    blurb: 'The mandibular ligament pins the skin to the jaw and barely changes with age, so everything above it bunches against a fixed edge. Loose, sun-thinned skin makes the bunching visible.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'jowl-anatomy',
    category: 'concept',
    title: 'What a jowl actually is',
    tldr: 'Four independent processes — skeletal resorption, fat-pad descent, ligament tethering and dermal collagen loss — meeting at the mandibular ligament, where the jowl forms.',
    bodyHtml: `
      <p>Anatomists agree on the ingredients and argue about the proportions. The mandible resorbs with age, and a "prejowl notch" develops in the bone just in front of where the jowl will sit (<a href="https://pubmed.ncbi.nlm.nih.gov/20871486/" rel="noopener nofollow" target="_blank">prejowl notch</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3404279/" rel="noopener nofollow" target="_blank">Mendelson &amp; Wong</a>). The cheek's fat compartments descend and some deflate. The mandibular ligament — a tether from bone to skin near the corner of the mouth — keeps its grip, so the descending tissue piles up behind it; a 2022 reassessment of the surgical anatomy makes the ligament the fixed edge the jowl forms against (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9944027/" rel="noopener nofollow" target="_blank">jowl anatomy reassessed</a>; <a href="https://www.sciencedirect.com/science/article/abs/pii/S1010518216301068" rel="noopener nofollow" target="_blank">retaining ligaments</a>). And the skin and its subcutaneous connective tissue, short and elastic in youth, lengthen and go lax, so the redundancy shows.</p>
      <p>Which is why "jowls" is not one diagnosis. A young, heavy face has a fat jowl over a good jaw; a thin 60-year-old has a skin jowl over a shrunken one; most people have some of each. The next section is how to tell.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'When jowls start, and why women earlier',
    tldr: 'Softening of the jawline begins in the forties, accelerates after menopause as collagen falls, and comes early to smokers, sun-lovers and anyone who loses a lot of weight fast.',
    bodyHtml: `
      <p>The jawline usually softens in the forties and declares itself in the fifties. Menopause is the accelerator: skin collagen falls steeply in the first five years after the last period and tracks years since menopause rather than age (<a href="https://obgyn.onlinelibrary.wiley.com/doi/abs/10.1111/j.1471-0528.1987.tb02338.x" rel="noopener nofollow" target="_blank">1987 study</a>; <a href="https://www.tandfonline.com/doi/full/10.4161/derm.23872" rel="noopener nofollow" target="_blank">"Estrogens and aging skin"</a>), which is why so many women report that their face "fell" in a couple of years. In identical twins discordant for smoking, the smoker had worse jowls, nasolabial folds and lower-lid bags (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">twin study</a>).</p>
      <p>The newest cause is rapid weight loss. GLP-1 drugs deflate the deep facial fat faster than the skin can shrink, producing jowls and folds in people in their thirties and forties — the "Ozempic face" now described in the dermatology literature (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12370548/" rel="noopener nofollow" target="_blank">2025 review</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12232544/" rel="noopener nofollow" target="_blank">systematic review</a>).</p>
    `,
  },
  {
    id: 'why-order',
    category: 'concept',
    title: 'Why the order of treatment matters',
    tldr: 'Skin quality first, volume second, tightening third, surgery when a fold stays — and the commonest waste is buying devices for a face that needs the fourth.',
    bodyHtml: `
      <p>Every treatment on this page addresses one of the four processes, and they stack in a sensible order. A retinoid and sunscreen improve the skin that has to drape over whatever is done. Volume — jawline and chin filler, or a collagen stimulator — rebuilds the edge the jowl is judged against and can make a mild jowl disappear optically. Energy devices tighten elastic skin a little. Surgery repositions the fat and removes the skin excess, and is the only step that treats a fold you can pinch.</p>
      <p>The expensive mistake is skipping the pinch test and buying three rounds of an energy device for a fold that only a lift moves — the sums people spend "avoiding surgery" routinely exceed the cost of the surgery. The second mistake is filling a heavy jowl with more volume. Sort the jowl first; the rest follows.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-bone',
    category: 'context',
    title: 'The deflated jowl (bone and volume loss)',
    tldr: 'A hollow in front of the pouch, a weak chin, a jawline that reads as a wave rather than a line — the jowl is average, the support around it has gone. Filler and stimulators redraw the line.',
    focus: 'bone',
    bodyHtml: `
      <p>Look at the jawline in profile. If there is a dip in front of the jowl (the prejowl sulcus), the chin has lost projection and the whole lower face reads as smaller than it was, bone and deep fat loss are doing the work. The jowl itself may be modest; it shows because nothing frames it. This is the pattern of thin faces, of the years after menopause, and of large weight loss.</p>
      <p>The treatment is support: hyaluronic-acid filler along the jawline and into the prejowl hollow and chin, calcium hydroxylapatite for the same job in a heavier face, or poly-L-lactic acid for slow, diffuse volume. None removes the jowl; all of them make it disappear into a straight line, which is what the eye judges.</p>
    `,
  },
  {
    id: 'type-fat',
    category: 'context',
    title: 'The heavy jowl (fat)',
    tldr: 'A firm, pinchable pouch that springs back, often with a full under-chin, in a face that has not lost volume — fat that has slid down or was always there. Fat treatments, not tightening.',
    focus: 'fat',
    bodyHtml: `
      <p>Pinch the pouch. If it is full, springs back, and the skin over it is thick and elastic, it is a fat jowl — the superficial fat compartment that has slid down behind the mandibular ligament, common in fuller faces and in people whose parents had the same jaw. It rarely comes alone: the under-chin fullness usually matches.</p>
      <p>Fat responds to fat treatments: deoxycholic acid injections dissolve it permanently (off-label in the jowl, licensed under the chin), a small liposuction removes it in one session, cryolipolysis shrinks it a little. What it does not respond to is more filler, which adds weight to a heavy face, or a tightening device, which has nothing to tighten against. Anatomists warn specifically that fat-dissolving treatments are the wrong tool for the deflated type — dissolving fat in an already-empty jowl hollows it further (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11381091/" rel="noopener nofollow" target="_blank">systematic review</a>).</p>
    `,
  },
  {
    id: 'type-skin',
    category: 'context',
    title: 'The loose jowl (skin and laxity)',
    tldr: 'A soft fold you can lift with a finger, that stays when pinched, in thin or sun-damaged skin — redundancy, not fat. The territory of lifting, and the limit of devices.',
    focus: 'skin',
    bodyHtml: `
      <p>Place a finger just in front of the ear and push gently upward. If the jowl vanishes and the jawline returns, the tissue is where it should not be and needs repositioning. Now pinch the jowl: if a fold of skin stays folded rather than springing flat, the skin is in excess. This is the loose jowl — thin, photoaged, often postmenopausal skin over descended tissue — and it is where the honest conversation about devices happens.</p>
      <p>Energy devices contract skin by a few percent; a fold needs centimetres. Ultherapy or radiofrequency can tighten a mild version in elastic skin and buy a year or two. A fold that stays when pinched is a facelift, and every device sold in between is a delay with a price tag. Our <a href="/neck">neck guide</a> runs the same test on the neck below it.</p>
    `,
  },
  {
    id: 'type-marionette',
    category: 'context',
    title: 'Marionette lines and the mouth corners',
    tldr: 'The lines from mouth corner to chin, and the downturned corners, are the front edge of the same descent — treated with support in front of the jowl, a little toxin in the depressor muscle, and filler in the fold.',
    focus: 'bone',
    bodyHtml: `
      <p>Marionette lines are where the descending cheek tissue meets the fixed mandibular ligament at the corner of the mouth, and the mouth corners turn down as the depressor anguli oris pulls unopposed. They belong to the jowl story, not the wrinkle story. Support in the prejowl hollow and chin lifts the line from below; a soft hyaluronic-acid gel in the fold itself softens it; a few units of toxin in the depressor muscle lets the corners rise. When the line is deep and the jowl is loose, it is a facelift finding. The <a href="/wrinkles">wrinkles guide</a> covers the fold treatments in more detail.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'The three tests (pinch, push, profile)',
    tldr: 'Pinch: fat springs back, skin stays folded. Push up in front of the ear: if the jowl vanishes it needs repositioning. Profile: a dip in front of the jowl means the bone and volume have gone.',
    bodyHtml: `
      <p>A surgeon sorts a jowl in about a minute with three moves you can copy in a mirror with your phone recording.</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Pinch.</strong> Gently pinch the pouch between thumb and finger and let go. Fat is firm and springs back flat; skin excess stays folded for a moment. Springs back → fat tier. Stays → skin tier.</li>
        <li><strong>Push.</strong> With a fingertip just in front of the ear, push the cheek gently up and back. If the jowl disappears and the jawline reappears, the tissue is descended and a lift (surgical, or a modest device effect in elastic skin) is the mechanism that works.</li>
        <li><strong>Profile.</strong> Photograph the jawline from the side. A dip in front of the pouch and a chin that has retreated mean volume is the first fix, and filler will do more than any device.</li>
      </ul>
      <p>Most faces show two of the three. Photograph front, three-quarter and profile in the same light before anything is done — the only way to judge a treatment a year later — and be wary of any clinic that skips the tests and quotes a device.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-retinoid-spf',
    category: 'home',
    title: 'Retinoid + daily sunscreen for skin quality',
    tldr: 'Tretinoin trials show modest improvement in laxity and texture; sunscreen prevents the next decade of it. Better skin drapes better — but nothing here lifts a jowl.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: everyone — the skin every other treatment has to work through',
    sessions: 'Nightly retinoid, morning SPF, indefinitely',
    downtime: 'Weeks 1–8 of retinoid dryness',
    cost: '€20–50 / month',
    bodyHtml: `
      <p>No cream lifts, and the ones that say so are the subject of the "firming creams" row below. What a retinoid does is rebuild the upper dermis: in the randomised tretinoin trials, laxity was among the signs that improved alongside fine wrinkles and roughness, and the meta-analysis of those trials confirms the class effect (<a href="https://dpcj.org/index.php/dpc/article/view/5172" rel="noopener nofollow" target="_blank">meta-analysis</a>; <a href="https://www.jaad.org/article/S0190-9622(97)70058-6/fulltext" rel="noopener nofollow" target="_blank">overview</a>). Daily sunscreen cut measured skin aging by 24% over 4.5 years in the one randomised prevention trial (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>). Skin that is thicker, better hydrated and less sun-damaged drapes better over whatever is done underneath, heals better after devices and surgery, and shows the jowl less. Extend both to the jawline and neck, where most people stop. The <a href="/wrinkles">wrinkles guide</a> covers the retinoid ladder.</p>
    `,
  },
  {
    id: 'home-weight',
    category: 'home',
    title: 'Weight: stability, and the pace of loss',
    tldr: 'Rapid loss deflates the deep fat faster than skin can follow and creates jowls ("Ozempic face"); slow loss in a heavy face reduces a fat jowl. Steadiness is the treatment.',
    evidence: 'emerging',
    focus: 'fat',
    sessions: 'Ongoing',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Weight cuts both ways. In a fuller face, a fat jowl shrinks with weight loss, and the jaw looks sharper. But fast loss — bariatric surgery, crash diets, and now GLP-1 injections — empties the deep fat compartments faster than the overlying skin can retract, and the result is folds, hollows and jowls that look a decade older; the 2025 reviews of GLP-1 facial changes describe exactly this, and a small imaging series shows facial fat volume falling on treatment (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12370548/" rel="noopener nofollow" target="_blank">2025 review</a>; <a href="https://aao-hnsfjournals.onlinelibrary.wiley.com/doi/abs/10.1002/ohn.1209" rel="noopener nofollow" target="_blank">imaging series</a>). Weight cycling — the Guyuron twin series found the heavier twin looked older before 40 and younger after — adds laxity every time (<a href="https://pubmed.ncbi.nlm.nih.gov/19337100/" rel="noopener nofollow" target="_blank">Guyuron 2009</a>).</p>
      <p>Practically: lose slowly (half a kilo a week), keep protein high and lift weights so the loss is fat, and expect a deflated face to need volume rather than tightening afterward. Our <a href="/anti-aging-50s">50s guide</a> covers the GLP-1 trade-offs.</p>
    `,
  },
  {
    id: 'home-smoking',
    category: 'home',
    title: 'Not smoking',
    tldr: 'The identical-twin study: the smoking twin had worse jowls, folds and lid bags, with five years of smoking visible on the face. Observational, but as clean as it gets.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: 'Ongoing',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Nicotine constricts the dermal blood supply, smoke's oxidants destroy collagen and elastin, and pursing adds lip lines. Among 79 pairs of identical twins discordant for smoking, the smoker scored worse for jowls, nasolabial folds, upper-lip lines and lower-lid bags, and a five-year difference in smoking history was visible in photographs (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">twin study</a>). Smoking also multiplies the risk of skin necrosis after a facelift, which is why surgeons demand weeks of abstinence. Nothing on this page beats not smoking for the price.</p>
    `,
  },
  {
    id: 'home-collagen',
    category: 'home',
    title: 'Collagen peptide supplements',
    tldr: 'Meta-analysed improvements in skin elasticity and hydration over 8–12 weeks — small, instrument-measured, industry-funded, and nothing on jowls specifically.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '2.5–10 g daily',
    downtime: 'None',
    cost: '€25–50 / month',
    bodyHtml: `
      <p>Oral collagen peptides improved skin elasticity and hydration in a 2018 meta-analysis of 11 randomised trials in 805 people (<a href="https://pubmed.ncbi.nlm.nih.gov/30368550/" rel="noopener nofollow" target="_blank">meta-analysis</a>). Elasticity is the right property for a loose jowl, and the effect is real, but it is measured with a suction probe rather than seen in a mirror, and no trial has looked at the jawline. A reasonable, modest add-on; the <a href="/collagen">collagen guide</a> has the forms and doses.</p>
    `,
  },
  {
    id: 'home-firming-creams',
    category: 'home',
    title: '"Firming", "lifting" and "sculpting" creams',
    tldr: 'No cream reaches the fat, bone or ligament that make a jowl; the firming effect is a film that dries tight. The AAD says the same. Buy a retinoid instead.',
    evidence: 'limited',
    focus: 'skin',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€30–200 / month',
    bodyHtml: `
      <p>A cream acts on the epidermis and, with retinoids, the upper dermis. A jowl is made two to three centimetres deeper, by fat, bone and a ligament. "Firming" products produce a sensation of tightness with film-forming polymers that contract as they dry, and "lifting" claims rest on instrument readings of skin hydration. The American Academy of Dermatology's own guidance for sagging skin is blunt: creams do not lift, and the options that do are procedures (<a href="https://www.aad.org/public/cosmetic/younger-looking/firm-sagging-skin" rel="noopener nofollow" target="_blank">AAD</a>). The one cream that improves the skin's own laxity a little, over months, is a retinoid — see the first row.</p>
    `,
  },
  {
    id: 'home-facial-exercise',
    category: 'home',
    title: 'Facial exercise and "face yoga"',
    tldr: 'A 16-woman uncontrolled pilot found fuller cheeks and a three-year-younger rating after 20 weeks; jowls were not measured, and the effect is muscle bulk, not lift.',
    evidence: 'limited',
    focus: 'general',
    sessions: '30 min daily (pilot regimen)',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>In the 20-week pilot, 16 women who finished a daily facial-exercise programme were rated as having fuller upper and lower cheeks and looked about three years younger to blinded raters (<a href="https://jamanetwork.com/journals/jamadermatology/fullarticle/2666801" rel="noopener nofollow" target="_blank">Alam 2018</a>). There was no control group, the jawline was not an outcome, and the plausible mechanism — hypertrophy of the cheek muscles — adds volume above the jowl rather than moving it. Harmless, free, and not a treatment for a fold.</p>
    `,
  },
  {
    id: 'home-gua-sha',
    category: 'home',
    title: 'Gua sha, rollers and jaw exercisers',
    tldr: 'A randomised trial found gua sha and rollers reduced facial contour measurements by about 2 mm — fluid shifts that fade within hours. Jaw exercisers changed nothing in the reported cases.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'Daily',
    downtime: 'None',
    cost: '€10–60',
    bodyHtml: `
      <p>Massage moves lymph and fluid, and for an hour or two the face is visibly less puffy: a randomised trial comparing a facial roller with gua sha found both reduced facial surface distances by about 2.2–2.4 mm, just above the threshold of a visible change (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12121324/" rel="noopener nofollow" target="_blank">2025 trial</a>). That is de-puffing, not lifting, and it is gone by the afternoon. Jaw-exerciser devices, sold for a "chiselled" jawline, produced no noticeable change in the two cases published, against a background of no supporting evidence at all (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11681191/" rel="noopener nofollow" target="_blank">case report</a>) — and building the masseter can widen the lower face in a way most women do not want.</p>
    `,
  },
  {
    id: 'home-devices',
    category: 'home',
    title: 'Home radiofrequency and microcurrent devices',
    tldr: 'Manufacturer-run studies show minor, temporary changes; regulated too weak to injure, and therefore too weak to lift.',
    evidence: 'limited',
    focus: 'skin',
    sessions: '3–5× a week',
    downtime: 'None',
    cost: '€150–600',
    bodyHtml: `
      <p>Home radiofrequency devices deliver a fraction of the energy of their clinic cousins and the supporting studies are manufacturer-run and short (<a href="https://www.researchgate.net/publication/50393607_Home-use_TriPollar_RF_device_for_facial_skin_tightening_Clinical_study_results" rel="noopener nofollow" target="_blank">manufacturer study</a>); microcurrent "toning" devices produce a brief muscle contraction and a brief puffiness reduction with no evidence of lasting change. Regulators cap consumer devices at energies that cannot burn, which also means they cannot heat the dermis to the temperature that contracts collagen. The clinic versions, graded below, are the honest ceiling of what the technology does.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-jawline-filler',
    category: 'inj',
    title: 'Hyaluronic-acid jawline and prejowl filler',
    tldr: 'The pivotal Volux trial: 70% of patients were responders for jawline definition at six months and 82% satisfied with their jawline at a year. Redraws the line around the jowl; does not remove it.',
    evidence: 'strong',
    focus: 'bone',
    note: 'Best for: the deflated jowl with a prejowl hollow and a soft chin — mild to moderate jowls',
    sessions: 'Every 12–18 months',
    downtime: '2–5 days of swelling',
    cost: '€800–2,000 (2–4 syringes)',
    bodyHtml: `
      <p>Firm hyaluronic-acid gels placed along the mandibular border, into the prejowl hollow and onto the chin rebuild the edge the eye judges the jowl against. The evidence is a regulator-grade randomised trial: for Juvéderm Volux, 69.9% of treated patients were responders on the jawline-definition scale at six months against an untreated control group, and 82.3% reported satisfaction with their lower face and jawline through twelve months (<a href="https://www.accessdata.fda.gov/cdrh_docs/pdf11/P110033S065B.pdf" rel="noopener nofollow" target="_blank">FDA summary of safety and effectiveness</a>; <a href="https://news.abbvie.com/2022-08-03-FDA-Approves-JUVEDERM-R-VOLUX-TM-XC-for-Improvement-of-Jawline-Definition" rel="noopener nofollow" target="_blank">approval</a>). MRI studies show hyaluronic gel persisting far longer than the folklore, which argues against routine top-ups (<a href="https://journals.lww.com/prsgo/fulltext/2024/07000/hyaluronic_acid_filler_longevity_in_the_mid_face_.36.aspx" rel="noopener nofollow" target="_blank">MRI review</a>).</p>
      <p>Read the endpoint carefully: "jawline definition", not "jowl removal". In a deflated face two to four syringes make a mild jowl vanish into a straight line; in a heavy face the same syringes add weight to a heavy jaw and make it worse. The pinch and profile tests decide. The <a href="/fillers">filler guide</a> covers gels, injectors and the reversal drug.</p>
    `,
  },
  {
    id: 'inj-caha-jawline',
    category: 'inj',
    title: 'Calcium hydroxylapatite (Radiesse) for the jawline',
    tldr: 'The first filler approved for jawline contour, on a 60-week randomised pivotal trial; stiffer and longer-lasting than HA, with collagen stimulation — and no reversal.',
    evidence: 'moderate',
    focus: 'bone',
    note: 'Best for: a heavier face needing structural support, and skin quality along the jaw when diluted',
    sessions: 'Every 12–18 months',
    downtime: '2–5 days',
    cost: '€800–1,800 (2–3 syringes)',
    bodyHtml: `
      <p>Calcium hydroxylapatite is a stiffer, mineral-based filler that provides immediate structure and stimulates collagen as its gel carrier is absorbed. Radiesse(+) was the first filler approved for improving jawline contour, on a 60-week prospective, randomised, controlled pivotal trial against an untreated group (<a href="https://clinicaltrials.gov/study/NCT03583359" rel="noopener nofollow" target="_blank">pivotal trial</a>), with long-term duration and safety data published in 2024 (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.16436" rel="noopener nofollow" target="_blank">Green 2024</a>) and consensus guidance on placement (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10120162/" rel="noopener nofollow" target="_blank">guidelines</a>). Diluted, it doubles as a skin-quality treatment over the jowl and neck. Its limits are the same as Volux's — it frames, it does not remove — plus one more: it cannot be dissolved, so a first-time patient usually starts with hyaluronic acid.</p>
    `,
  },
  {
    id: 'inj-plla',
    category: 'inj',
    title: 'Poly-L-lactic acid (Sculptra) for diffuse deflation',
    tldr: 'A collagen stimulator with randomised trials for the lower face lasting up to 25 months; the right tool for a face that deflated everywhere, wrong for a jowl that needs structure this month.',
    evidence: 'moderate',
    focus: 'bone',
    sessions: '2–3 sessions, 4–6 weeks apart',
    downtime: '1–2 days',
    cost: '€400–700 per vial (2–4 vials)',
    bodyHtml: `
      <p>Poly-L-lactic acid microspheres stimulate the patient's own collagen over months, restoring diffuse volume rather than drawing a line. Randomised trials in the lower face show correction that builds from month 3 and lasts up to 25 months (<a href="https://www.accessdata.fda.gov/cdrh_docs/pdf3/p030050s002c.pdf" rel="noopener nofollow" target="_blank">FDA summary</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12903950/" rel="noopener nofollow" target="_blank">2024 double-blind trial</a>). For the post-weight-loss or postmenopausal face that has emptied everywhere, it re-inflates the cheek and prejowl gradually and naturally; for a defined jawline it is too soft, and for a heavy jowl it is wrong. Slow, subtle, irreversible, and dependent on the injector's dilution and massage to avoid nodules.</p>
    `,
  },
  {
    id: 'inj-deoxycholic',
    category: 'inj',
    title: 'Deoxycholic acid for the fat jowl',
    tldr: 'Licensed for under-chin fat on ~1,000 patients in pivotal trials; used off-label in the jowl on anatomy studies and series — permanent fat loss, weeks of swelling, and wrong for the deflated type.',
    evidence: 'emerging',
    focus: 'fat',
    note: 'Best for: a firm, pinchable fat jowl in a face that has not lost volume',
    sessions: '2–4, 6–8 weeks apart',
    downtime: '1–3 weeks of swelling per session',
    cost: '€500–900 / session',
    bodyHtml: `
      <p>Deoxycholic acid destroys fat-cell membranes where it is injected, and the destroyed fat does not come back. Under the chin it is licensed across the EU on the strength of a phase-3 programme of about a thousand patients (<a href="https://www.sciencedirect.com/science/article/pii/S0190962216301293" rel="noopener nofollow" target="_blank">pivotal programme</a>; <a href="https://www.ema.europa.eu/en/documents/psusa/deoxycholic-acid-list-nationally-authorised-medicinal-products-psusa00010525202104_en.pdf" rel="noopener nofollow" target="_blank">EU authorisation</a>). In the jowl it is off-label, guided by cadaver studies of safe injection zones and clinical series rather than trials; a systematic review of serious adverse events emphasises that the marginal mandibular nerve runs exactly there, that temporary lip weakness follows careless placement, and that fat dissolution is contraindicated in the deflated jowl, where it deepens the hollow (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11381091/" rel="noopener nofollow" target="_blank">systematic review</a>; <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/jocd.13619" rel="noopener nofollow" target="_blank">nerve weakness</a>). For a genuinely fat jowl in a full face it is the one injectable that removes the pouch rather than framing it; expect a swollen fortnight after each session.</p>
    `,
  },
  {
    id: 'inj-nefertiti',
    category: 'inj',
    title: 'Botulinum toxin "Nefertiti lift"',
    tldr: 'Relaxing the platysma along the jaw lets the elevators win: a 2007 series reported recontouring in 97%, with no controlled trial since. Subtle, three months, and only when the platysma is pulling.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: 'Every 3–4 months',
    downtime: 'None',
    cost: '€250–450',
    bodyHtml: `
      <p>The platysma, the sheet muscle of the neck, inserts along the jaw and pulls the lower face down when it contracts. Injecting a row of toxin along the mandibular border and into the upper bands weakens that pull and lets the lifting muscles win by a few millimetres — the "Nefertiti lift" described in 2007, with recontouring reported in 97% of an uncontrolled series (<a href="https://pubmed.ncbi.nlm.nih.gov/18236245/" rel="noopener nofollow" target="_blank">Levy 2007</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9783622/" rel="noopener nofollow" target="_blank">anatomical review</a>). Toxin for platysmal bands themselves now has phase-3 trials and a 2024 approval (<a href="https://news.abbvie.com/2024-10-18-BOTOX-R-Cosmetic-onabotulinumtoxinA-Receives-FDA-Approval-for-Moderate-to-Severe-Vertical-Bands-Connecting-the-Jaw-and-Neck-Platysma-Bands" rel="noopener nofollow" target="_blank">FDA approval</a>), but the jawline-lift use has never been tested against placebo. It suits people whose jawline visibly worsens when they grimace, does nothing for fat or skin excess, and risks a weak smile or swallowing difficulty in the wrong hands.</p>
    `,
  },
  {
    id: 'inj-threads',
    category: 'inj',
    title: 'PDO and PLLA thread lifts',
    tldr: 'A randomised trial found the lift gone by 60 days regardless of thread count; systematic reviews report complications in about 27% (dimpling, extrusion, bruising). Weeks of effect at a surgical price.',
    evidence: 'limited',
    focus: 'skin',
    sessions: 'Every 6–12 months, as sold',
    downtime: '3–7 days of swelling and dimpling',
    cost: '€800–2,500',
    bodyHtml: `
      <p>Barbed absorbable threads are passed under the skin and pulled to hitch the jowl upward, on the promise of a "non-surgical facelift". In a randomised comparative trial of thread quantity, the initial improvement in volume and tissue position diminished by 60 days whatever the number of threads, and the authors could not find lasting lifting outcomes (<a href="https://academic.oup.com/asjopenforum/article/doi/10.1093/asjof/ojaf002/7951699" rel="noopener nofollow" target="_blank">randomised trial</a>). A 2023 systematic review put the overall complication rate at 27% — skin dimpling 11%, bruising 8%, pain, extrusion and migration of the threads (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15709" rel="noopener nofollow" target="_blank">systematic review</a>), and a 2026 meta-analysis pools the complication data (<a href="https://www.frontiersin.org/journals/surgery/articles/10.3389/fsurg.2026.1769458/full" rel="noopener nofollow" target="_blank">meta-analysis</a>). The collagen the dissolving threads leave behind is real and minor. For a loose jowl, the honest comparison is a few weeks of lift for a third of a facelift's price, repeated.</p>
    `,
  },
  {
    id: 'inj-prp-pn',
    category: 'inj',
    title: 'PRP, PRF and polynucleotides for laxity',
    tldr: 'Split-face trials show modest texture gains, mostly with needling; nothing shows a lift. Skin-quality add-ons sold as tightening.',
    evidence: 'limited',
    focus: 'skin',
    sessions: '3 sessions a month apart',
    downtime: '1–2 days',
    cost: '€250–500 / session',
    bodyHtml: `
      <p>Platelet-rich plasma and its fibrin cousin deliver growth factors; polynucleotides are DNA fragments sold as "bioremodelling". Three randomised split-face trials show PRP modestly improving skin texture and fine lines, most clearly combined with microneedling (<a href="https://www.tandfonline.com/doi/full/10.2147/CCID.S340434" rel="noopener nofollow" target="_blank">split-face trials</a>); none measures lift, jawline position or jowl volume, because they do not move any of them. As a skin-quality add-on after a device or alongside a retinoid they are defensible; as a "PRP lift" they are a name. Our <a href="/regenerative-aesthetics">regenerative guide</a> grades each product.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'dev-ultherapy',
    category: 'clinic',
    title: 'Microfocused ultrasound (Ultherapy) and HIFU',
    tldr: 'Meta-analyses and a randomised trial show measurable lower-face tightening in most patients at three months; a retrospective series found only a fifth improved and a sixth looked worse. Real, modest, unpredictable.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: mild laxity in elastic skin, when downtime is unacceptable — not a fold',
    sessions: '1, repeated at 12–18 months',
    downtime: 'None; sore for days',
    cost: '€2,000–4,000 full face and neck',
    bodyHtml: `
      <p>Microfocused ultrasound with visualisation heats points in the deep dermis and the SMAS layer to about 65 °C, contracting collagen and provoking new collagen over three to six months. The evidence is genuinely mixed. A meta-analysis of MFU-V trials finds consistent, measurable tightening (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11834976/" rel="noopener nofollow" target="_blank">meta-analysis</a>); a systematic review of microfocused ultrasound reaches the same modest conclusion (<a href="https://www.mdpi.com/1660-4601/20/2/1522" rel="noopener nofollow" target="_blank">systematic review</a>); a randomised controlled trial with 3D imaging found clinically significant tightening in 70% at three months (<a href="https://link.springer.com/article/10.1007/s13555-023-01078-9" rel="noopener nofollow" target="_blank">RCT</a>); and a 51-patient lower-face study measured lifting on 3D photography with both standard and targeted protocols (<a href="https://jddonline.com/articles/comparing-the-safety-and-effectiveness-of-microfocused-ultrasound-standard-vs-targeted-tissue-protocol-in-lifting-and-tightening-the-lower-face-and-upper-neck-S1545961624P0249X/" rel="noopener nofollow" target="_blank">2024 study</a>). Against that, a retrospective series of lower-face laxity found 21% improved, 63% unchanged and 17% scored as worse at four months (<a href="https://pubmed.ncbi.nlm.nih.gov/32770566/" rel="noopener nofollow" target="_blank">retrospective study</a>), and a meta-analysis of the cheaper HIFU devices found a "moderate" effect with a pain score of 4 out of 10 (<a href="https://pubmed.ncbi.nlm.nih.gov/32026164/" rel="noopener nofollow" target="_blank">HIFU meta-analysis</a>).</p>
      <p>The translation: in elastic skin with a mild jowl, expect a subtle lift in about two of three people, judged at six months, lasting a year or two. In a fold that fails the pinch test, expect nothing you can see, and a bill. Ultherapy's imaging lets the operator see the layer being treated; generic HIFU does not, which is where the fat-loss horror stories come from.</p>
    `,
  },
  {
    id: 'dev-thermage',
    category: 'clinic',
    title: 'Monopolar radiofrequency (Thermage)',
    tldr: 'A 2025 randomised trial shows long-term tightening, a 600-treatment series describes modest lower-face laxity improvement; one session, no downtime, subtle.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: '1, repeated yearly',
    downtime: 'None',
    cost: '€1,500–3,500',
    bodyHtml: `
      <p>Monopolar radiofrequency heats the whole dermis and the fibrous septa in the fat volumetrically, without the ultrasound's focal points. A prospective randomised controlled study of a monopolar device found long-term tightening with a safety profile no worse than standard devices (<a href="https://pubmed.ncbi.nlm.nih.gov/39957006/" rel="noopener nofollow" target="_blank">2025 RCT</a>); a retrospective analysis of over 600 treatments — most for lower-face laxity — described it as especially useful for moderate laxity of the lower face, with modest results and rare complications (<a href="https://pubmed.ncbi.nlm.nih.gov/16989184/" rel="noopener nofollow" target="_blank">600-treatment series</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/18940540/" rel="noopener nofollow" target="_blank">review</a>). Same ceiling as ultrasound: a few percent of contraction in elastic skin, best in the forties and early fifties, invisible on a true fold. Early-generation devices caused fat atrophy and contour dents; current temperature-controlled ones rarely do.</p>
    `,
  },
  {
    id: 'dev-rf-microneedling',
    category: 'clinic',
    title: 'Radiofrequency microneedling (Morpheus8)',
    tldr: 'FDA-cleared for soft-tissue contraction in 2024 on a retrospective series with 93% satisfaction and a 1.4-point laxity improvement; no controlled lift trial, an FDA alert on complications, and documented facial fat loss.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '3, 4–6 weeks apart',
    downtime: '2–5 days',
    cost: '€500–900 / session',
    bodyHtml: `
      <p>Insulated needles deliver radiofrequency heat at set depths into the dermis and upper fat, and Morpheus8 secured the first FDA clearance for "soft-tissue contraction" for the class in 2024 (<a href="https://www.biospace.com/morpheus8-secures-first-and-only-fda-clearance-for-soft-tissue-contraction-for-fractional-radiofrequency-microneedling" rel="noopener nofollow" target="_blank">clearance</a>). The lift evidence is a retrospective series of 247 patients reporting a 1.4-point improvement in lower-face and neck laxity on the Baker scale with 93% satisfaction (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11862810/" rel="noopener nofollow" target="_blank">series</a>), histology showing new collagen and elastin (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11802595/" rel="noopener nofollow" target="_blank">dose-response study</a>), and a review of facial applications (<a href="https://pubmed.ncbi.nlm.nih.gov/35916259/" rel="noopener nofollow" target="_blank">review</a>) — no randomised comparison against ultrasound, radiofrequency or nothing. The FDA has alerted clinicians to serious complications from the class, including burns and scarring (<a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">FDA alert</a>), and 2026 studies document facial fat loss after deep, aggressive settings — the last thing a deflated jowl needs (<a href="https://www.medscape.com/viewarticle/two-studies-evaluate-radiofrequency-microneedling-adverse-2026a1000q9f" rel="noopener nofollow" target="_blank">Medscape</a>). Conservative depths in a fuller face with mild laxity; not the deflated type, and never a fold.</p>
    `,
  },
  {
    id: 'dev-sofwave',
    category: 'clinic',
    title: 'Sofwave (synchronous ultrasound)',
    tldr: 'A shallower ultrasound with a pivotal study in which blinded reviewers picked the post-treatment photo 79–80% of the time for brow and under-chin lift; no head-to-head, no long-term data.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '1–2',
    downtime: 'None',
    cost: '€1,500–3,000',
    bodyHtml: `
      <p>Sofwave heats the mid-dermis at a fixed 1.5 mm with parallel ultrasound beams, avoiding the deeper fat and SMAS that Ultherapy targets — safer for a thin face, and shallower in what it can move. Its pivotal study treated 80 people twice on the face, under the chin and neck; at three months two blinded reviewers correctly identified the post-treatment photograph in 79% (brow) and 80% (submental) of cases (<a href="https://api.sofwave.com/app/uploads/2024/12/MK00105_B-Eybrow-Neck-and-Submental-Lifting_Clinical-Study-Summary.pdf" rel="noopener nofollow" target="_blank">study summary</a>; <a href="https://clinicaltrials.gov/study/NCT04146584" rel="noopener nofollow" target="_blank">registered trial</a>). "Reviewers could tell which photo came after" is a low bar, there is no comparison with Ultherapy, and duration beyond a year is unknown. A gentle option for mild laxity in a thin face that cannot risk fat loss; the same ceiling as its class.</p>
    `,
  },
  {
    id: 'dev-cryolipolysis',
    category: 'clinic',
    title: 'Cryolipolysis for jowl and under-chin fat',
    tldr: 'An FDA-IDE trial supports the under-chin applicator; jowl use is off-label with small applicators. Modest fat reduction per cycle, and a rare paradoxical enlargement.',
    evidence: 'emerging',
    focus: 'fat',
    sessions: '1–2 cycles',
    downtime: 'Numb and swollen for days',
    cost: '€600–1,200 / cycle',
    bodyHtml: `
      <p>Cooling fat to the temperature at which fat cells die but skin survives reduces a fat layer by a fifth or so per cycle. Under the chin it has a controlled FDA-IDE trial (<a href="https://academic.oup.com/asj/article/43/10/1174/7072381" rel="noopener nofollow" target="_blank">FDA-IDE trial</a>); at the jowl it is used off-label with small applicators, on the same logic and thinner data. It suits a mild fat jowl in someone who wants no needles, does nothing for skin or volume loss, and carries the class's odd risk of paradoxical adipose hyperplasia — the treated fat growing instead of shrinking — which is rare and needs liposuction to fix (<a href="https://academic.oup.com/asjopenforum/article/doi/10.1093/asjof/ojaf008/7994283" rel="noopener nofollow" target="_blank">paradoxical adipose hyperplasia</a>).</p>
    `,
  },
  {
    id: 'surg-facelift',
    category: 'clinic',
    title: 'Facelift (SMAS or deep plane)',
    tldr: 'Meta-analysis of 2,896 patients: 94% satisfied after deep plane, 88% after SMAS; hematoma 1.6%, temporary nerve injury 0.85%, skin necrosis 0.4%. The only treatment that moves a fold, and it lasts a decade.',
    evidence: 'strong',
    focus: 'skin',
    note: 'Best for: a fold that stays when pinched — the loose jowl — when you want it gone rather than softened',
    sessions: 'Once; a second lift 10–15 years later',
    downtime: '2 weeks visible; 6–12 weeks to settle',
    cost: '€8,000–20,000 (Spain €8,000–15,000)',
    bodyHtml: `
      <p>A facelift is the only treatment that addresses all four processes at once: it repositions the descended fat and the SMAS layer, releases or resets the ligaments, removes the skin excess and, with fat grafting, restores volume. The evidence is large and consistent. A 2025 systematic review and meta-analysis of 2,896 patients found patient satisfaction of 94.4% after deep-plane and 87.8% after SMAS lifts, with overall complication rates of 17.2% and 10.3% (mostly minor), temporary facial-nerve injury in 0.85%, hematoma in 1.62% and skin necrosis in 0.41%, and a single permanent nerve injury (<a href="https://link.springer.com/article/10.1007/s00266-025-05118-x" rel="noopener nofollow" target="_blank">deep plane vs SMAS meta-analysis</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10819192/" rel="noopener nofollow" target="_blank">SMAS techniques review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/40600822/" rel="noopener nofollow" target="_blank">2025 comparison</a>). Results are typically quoted at 10–15 years for deep-plane and 5–10 for SMAS techniques, and the pooled neck-lift data of 2,106 patients tell the same story for the neck (<a href="https://pubmed.ncbi.nlm.nih.gov/39406360/" rel="noopener nofollow" target="_blank">neck-lift review</a>).</p>
      <p>What decides the result is the surgeon and the plane, not the brand name. "Mini" and short-scar lifts move less and last less; a deep-plane lift by a surgeon who does several a week is the standard for a real fold. Two weeks of looking obviously operated on, six to twelve to settle, and a decade of not thinking about your jawline. Our <a href="/anti-aging-50s">50s guide</a> covers when surgery beats a decade of devices, and the <a href="/neck">neck guide</a> the neck below it.</p>
    `,
  },
  {
    id: 'surg-liposuction',
    category: 'clinic',
    title: 'Jowl and submental liposuction',
    tldr: 'A 135-patient and a 175-patient seven-year series describe reliable fat removal in one session with few complications; skin must be elastic enough to retract.',
    evidence: 'moderate',
    focus: 'fat',
    note: 'Best for: a fat jowl and double chin in elastic skin — the surgical version of deoxycholic acid, in one go',
    sessions: 'Once',
    downtime: '1 week of swelling; compression garment',
    cost: '€2,000–4,000',
    bodyHtml: `
      <p>A cannula through a tiny incision under the chin removes the fat of the jowl and submental area in one session. Two large series — 135 patients, and 175 patients followed for seven years — report consistent contour improvement with low complication rates, provided the skin has the elasticity to shrink back (<a href="https://pubmed.ncbi.nlm.nih.gov/10971554/" rel="noopener nofollow" target="_blank">135-patient series</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/18177401/" rel="noopener nofollow" target="_blank">seven-year series</a>). In a fat jowl with good skin it beats several rounds of injections on cost and certainty; in loose skin it leaves a deflated fold, which is why surgeons pair it with a lift after 50. The marginal mandibular nerve is the structure at risk, as with every treatment in this zone.</p>
    `,
  },
  {
    id: 'surg-fat-grafting',
    category: 'clinic',
    title: 'Fat grafting to the prejowl and chin',
    tldr: 'Your own fat, about half of which survives (47% retention in a meta-analysis), restores volume permanently; usually done with a lift, occasionally alone for the deflated jowl.',
    evidence: 'emerging',
    focus: 'bone',
    sessions: 'Once, sometimes repeated',
    downtime: '1–2 weeks of swelling',
    cost: '€3,000–7,000 alone; included in many lifts',
    bodyHtml: `
      <p>Fat harvested from the abdomen or thigh, processed and injected into the prejowl hollow, chin and cheek restores volume with living tissue. Retention is the unknown: a meta-analysis puts average graft survival at about 47%, with wide variation by technique and site (<a href="https://pubmed.ncbi.nlm.nih.gov/31940073/" rel="noopener nofollow" target="_blank">retention meta-analysis</a>), and a systematic review of 1,093 patients describes good safety with the usual caveats about over-correction and lumps (<a href="https://pubmed.ncbi.nlm.nih.gov/33084193/" rel="noopener nofollow" target="_blank">systematic review</a>). It is most often part of a facelift; alone, it is the surgical answer to the deflated jowl when someone wants no filler subscription. Weight gain after grafting grows the graft.</p>
    `,
  },
  {
    id: 'surg-buccal',
    category: 'clinic',
    title: 'Buccal fat removal',
    tldr: 'Removes deep cheek fat to hollow the mid-face; it does not treat jowls, and surgeons increasingly warn it front-loads the deflation that causes them.',
    evidence: 'limited',
    focus: 'fat',
    sessions: 'Once, irreversible',
    downtime: '1–2 weeks',
    cost: '€2,500–6,000',
    bodyHtml: `
      <p>The buccal fat pad sits deep in the mid-cheek, not at the jawline, and removing it sculpts a hollow under the cheekbone in a young, full face. It does nothing for a jowl. More to the point, the mid-face deflates with age anyway, and removing deep fat at 30 front-loads a loss the face was going to experience at 55 — facial anatomists have called the long-term prospect of premature aging and midface distortion "disconcerting", and no published study has followed patients long enough to know. It cannot be undone except with fat grafting. It appears on this page because clinics propose it to people asking about their lower face; the right answer is no.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-filler-jawline',
    category: 'safety',
    title: 'Jawline filler: the facial artery, and the heavy face',
    tldr: 'The facial artery crosses the jaw exactly where filler goes; cannula, aspiration and a hyaluronidase-stocked injector are the safeguards. The commoner harm is adding weight to a face that needed less.',
    bodyHtml: `
      <p>The facial artery crosses the mandibular border just in front of the masseter — the prejowl zone — so an intravascular injection here can necrose the skin of the cheek and lip. Registry data put occlusion at roughly 1 per 6,400 needle syringes and 1 per 41,000 by cannula (<a href="https://www.harleyacademy.com/aesthetic-medicine-articles/cannula-use-makes-vascular-occlusion-less-likely/" rel="noopener nofollow" target="_blank">registry analysis</a>), and with prompt hyaluronidase 84% of pooled HA occlusions recover (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12097758/" rel="noopener nofollow" target="_blank">pooled analysis</a>). Cannula on bone, aspiration, slow injection, and an injector who keeps hyaluronidase in the room are the checklist; calcium hydroxylapatite and poly-L-lactic acid have no antidote.</p>
      <p>The commoner problem is judgement: filler in a heavy, fat jowl makes the lower face heavier; repeated top-ups of gel that never fully left produce the wide, blunt lower face of the overfilled patient (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13051189/" rel="noopener nofollow" target="_blank">facial overfilled syndrome</a>). Delayed nodules and reactions after infections or vaccines occur in a fraction of a percent (<a href="https://jcadonline.com/cmac-delayed-onset-nodules/" rel="noopener nofollow" target="_blank">review</a>). The <a href="/fillers">filler guide</a> covers all of it.</p>
    `,
  },
  {
    id: 'safety-devices',
    category: 'safety',
    title: 'Energy devices: fat loss, nerves, burns, and the wrong candidate',
    tldr: 'Deep ultrasound and RF needling can melt the fat a deflated face needs; the FDA has alerted clinicians to burns and scarring; temporary nerve weakness and contour dents are documented. The wrong candidate is the commonest harm.',
    bodyHtml: `
      <p>Every device that heats tissue to contract it can heat the wrong tissue. Facial fat loss after aggressive radiofrequency microneedling is now documented in 2026 studies (<a href="https://www.medscape.com/viewarticle/two-studies-evaluate-radiofrequency-microneedling-adverse-2026a1000q9f" rel="noopener nofollow" target="_blank">Medscape</a>) and the FDA has alerted clinicians to burns, scarring and nerve damage from the class (<a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">FDA alert</a>); unvisualised HIFU is the usual culprit in the fat-dent stories; early monopolar RF caused contour depressions; temporary marginal mandibular nerve weakness — a crooked smile for weeks — follows deep energy or injections along the jaw (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/jocd.13619" rel="noopener nofollow" target="_blank">case series</a>).</p>
      <p>The commonest harm is not a complication but a mismatch: a device sold to a fold that only surgery moves, or deep heating sold to a deflated face. Insist on the pinch test, ask what depth will be treated and why, and choose imaging-guided ultrasound and conservative RF depths in a thin face.</p>
    `,
  },
  {
    id: 'safety-threads',
    category: 'safety',
    title: 'Threads: dimpling, extrusion, and the bruised fortnight',
    tldr: 'About one in four thread patients has a complication — dimpling 11%, bruising 8%, visible or extruding threads, migration — and the lift itself is measured in weeks.',
    bodyHtml: `
      <p>Thread lifts are sold as low-risk, and the systematic reviews say otherwise: an overall complication rate around 27%, led by skin dimpling and puckering along the thread path (11%), bruising (8%), pain, thread extrusion through the skin and migration, with infection and nerve irritation rarer (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.15709" rel="noopener nofollow" target="_blank">2023 review</a>; <a href="https://www.frontiersin.org/journals/surgery/articles/10.3389/fsurg.2026.1769458/full" rel="noopener nofollow" target="_blank">2026 meta-analysis</a>). Most resolve as the threads dissolve, which is also when the lift does. A thread placed too superficially is visible for months; one placed too deep can catch the parotid duct or a nerve branch. If you proceed, a doctor who does them weekly, a clear explanation that the effect is measured in weeks, and no threads in a face that has already been filled heavily.</p>
    `,
  },
  {
    id: 'safety-surgery',
    category: 'safety',
    title: 'Facelift: the real risks, and how to choose the surgeon',
    tldr: 'Hematoma 1–2% (higher with hypertension and blood thinners), temporary nerve weakness under 1%, skin necrosis under 0.5% and far higher in smokers; ask how many lifts a year, which plane, and to see one-year photographs of their own patients.',
    bodyHtml: `
      <p>The pooled numbers are reassuring for major surgery — hematoma 1.62%, temporary facial-nerve injury 0.85%, skin necrosis 0.41%, one permanent nerve injury in 2,896 patients (<a href="https://link.springer.com/article/10.1007/s00266-025-05118-x" rel="noopener nofollow" target="_blank">meta-analysis</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10819192/" rel="noopener nofollow" target="_blank">SMAS review</a>) — and the modifiable risks are known: uncontrolled blood pressure and blood thinners raise the hematoma rate, smoking multiplies skin necrosis, and a surgeon operating occasionally raises everything. Ear-lobe distortion, a hairline pulled back and the "wind-tunnel" look are technique, not fate.</p>
      <p>Choosing: a plastic or facial-plastic surgeon on the specialist register, who performs facelifts weekly rather than monthly, who tells you which plane they use and why for your face, whose one-year photographs of their own patients look like people rather than results, who insists on eight weeks without nicotine, and who operates in an accredited facility with overnight monitoring available. Price is not a proxy for any of it.</p>
    `,
  },
  {
    id: 'safety-dca-buccal',
    category: 'safety',
    title: 'Fat removal you cannot put back',
    tldr: 'Deoxycholic acid, liposuction, cryolipolysis and buccal fat removal are permanent; in a deflated or ageing face removed fat becomes a hollow. Dissolve fat only where the pinch test found it.',
    bodyHtml: `
      <p>Fat is the one facial tissue we lose for free with age, and every treatment that removes it is irreversible short of grafting. Deoxycholic acid injected into a deflated jowl deepens the prejowl hollow; the systematic review of its serious adverse events lists skin-tissue atrophy as a contraindication and temporary lip weakness from the marginal mandibular nerve as the classic complication (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11381091/" rel="noopener nofollow" target="_blank">systematic review</a>). Liposuction in loose skin leaves a fold. Buccal fat removal front-loads mid-face deflation with no long-term study behind it. The rule is simple: remove fat only where the pinch test found a firm, springy pouch in a full face, and never on a face that is already hollowing.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-cream',
    category: 'faq',
    title: 'Is there a cream that lifts jowls?',
    tldr: 'No. A jowl is fat, bone and ligament centimetres below where any cream acts. A retinoid improves the skin over it; nothing in a jar moves it.',
    bodyHtml: `
      <p>The American Academy of Dermatology says it plainly and the anatomy explains why: creams act on the epidermis and, at best, the upper dermis, and the jowl is made in the fat, the bone and the ligament beneath. "Firming" is a film drying tight. The one cream worth buying is a retinoid, which thickens the dermis over months and makes whatever is done underneath look better. Everything else in the firming aisle is a moisturiser with a claim.</p>
    `,
  },
  {
    id: 'faq-ultherapy-or-facelift',
    category: 'faq',
    title: 'Ultherapy or a facelift?',
    tldr: 'The pinch test decides: elastic skin with a mild jowl, Ultherapy buys a year or two; a fold that stays folded is a facelift, and the device money is better saved for it.',
    bodyHtml: `
      <p>Devices contract skin by a few percent; a fold is a few centimetres. If your jowl is mild, the skin springs back when pinched and you are in your forties or early fifties, microfocused ultrasound or radiofrequency will give about two in three people a subtle improvement for a year or two, and that may be all you want. If a fold stays when you pinch it, or the jowl vanishes when you push the cheek up in front of the ear, only surgery moves it, and three rounds of devices at €3,000 each will not — that sum is a large part of a facelift. Ask a surgeon before a device clinic, not after.</p>
    `,
  },
  {
    id: 'faq-filler-jowls',
    category: 'faq',
    title: 'Can filler fix jowls?',
    tldr: 'It can hide a mild one by rebuilding the line around it — chin, prejowl, jawline — with 70% responders in the pivotal trial. It cannot remove a jowl and makes a heavy one worse.',
    bodyHtml: `
      <p>Filler works optically: a straight jawline and a supported chin make a modest jowl disappear into the line, which is exactly what the Volux and Radiesse jawline trials measured. It does not lift the tissue or reduce the pouch, and in a full, heavy jowl it adds weight to the wrong place. The profile test tells you which you are: a hollow in front of the pouch and a retreating chin mean filler will do a lot; a full pouch on a strong jaw means it will do harm.</p>
    `,
  },
  {
    id: 'faq-exercise',
    category: 'faq',
    title: 'Will facial exercises or gua sha lift my jowls?',
    tldr: 'No. Exercise may bulk the cheek muscles a little; gua sha de-puffs for an afternoon. Neither moves fat, bone or a ligament.',
    bodyHtml: `
      <p>The one facial-exercise study measured cheek fullness in 16 women with no control group; the gua sha trial measured a two-millimetre fluid shift that fades within hours; jaw exercisers changed nothing in the published cases and can widen the lower face. None of them addresses what a jowl is made of. Free, harmless, and not a treatment.</p>
    `,
  },
  {
    id: 'faq-weight',
    category: 'faq',
    title: 'Will losing weight get rid of my jowls?',
    tldr: 'A fat jowl in a full face shrinks with slow weight loss; fast loss, and loss in a thin face, creates jowls by deflating the cheek. Half a kilo a week, protein high, weights on.',
    bodyHtml: `
      <p>If the pinch test finds a firm fat pouch and the rest of you is carrying weight, gradual loss reduces it and sharpens the jaw. If the face is already thin, or the loss is fast — bariatric, crash, GLP-1 — the deep facial fat empties before the skin can follow and the result is more jowl, not less. Lose slowly, keep protein above about 1.2 g per kilo, lift weights so the loss is fat, and expect a deflated face to need volume afterwards rather than tightening.</p>
    `,
  },
  {
    id: 'faq-age',
    category: 'faq',
    title: 'At what age do jowls start?',
    tldr: 'Usually the forties, declared by the fifties; earlier with sun, smoking, heavy weight cycling or rapid weight loss; the menopause years are the acceleration.',
    bodyHtml: `
      <p>Bone loss, fat descent and collagen loss run through the forties and become visible as the jawline softens; the fall in estrogen after menopause takes skin collagen down steeply in five years and is when many women see the change. Smoking, sun and weight cycling bring it forward a decade; a fast GLP-1 loss can bring it forward at any age. Prevention in the thirties is sunscreen, a retinoid, a stable weight and not smoking; nothing else is proven to delay it.</p>
    `,
  },
  {
    id: 'faq-threads',
    category: 'faq',
    title: 'Are threads a "non-surgical facelift"?',
    tldr: 'No. A randomised trial found the lift gone by 60 days; about a quarter of patients get dimpling, bruising or extrusion. Weeks of effect at a third of a facelift’s price, repeated.',
    bodyHtml: `
      <p>The phrase sells the procedure, and the trials do not support it. The initial hitch fades within two months regardless of how many threads are placed, the collagen left behind is minor, and the complication rate in systematic reviews is about 27%. For a mild jowl in elastic skin you would do as well with ultrasound and better with nothing; for a real fold, threads are a detour on the way to a lift.</p>
    `,
  },
  {
    id: 'faq-facelift-lasts',
    category: 'faq',
    title: 'How long does a facelift last, and how obvious is it?',
    tldr: 'A deep-plane lift is quoted at 10–15 years, SMAS at 5–10; the face keeps aging from a younger baseline. Done well it looks like rest, not surgery — the wind-tunnel look is a technique failure.',
    bodyHtml: `
      <p>A lift resets the position of the fat and SMAS and removes skin excess; the face then continues to age from that new baseline, so "lasting" means the years before you look the way you did before surgery — typically 10–15 for a deep-plane lift and 5–10 for a SMAS technique. The tell-tale signs people fear — pulled corners, flattened ears, a retreating hairline, a tight mask — come from skin-only lifts and over-tightening, which is why the plane and the surgeon matter more than the brochure. The meta-analyses put satisfaction at about nine in ten.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Filler: instantly, settled at two weeks. Deoxycholic acid: after the swelling, 4–6 weeks per session. Devices: 3–6 months. Surgery: visible at two weeks, settled at three months, final at a year.',
    bodyHtml: `
      <p>The timeline follows the mechanism. Volume shows the day it goes in and settles as swelling clears. Fat destruction shows once the inflammation it causes has cleared, a month or more after each session. Devices provoke collagen that matures over three to six months, so a device judged at six weeks is being judged too early. Surgery looks alarming at a week, presentable at two to three, good at three months and final at a year. Photograph front, three-quarter and profile in the same light before you start.</p>
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
    intro: 'Three drivers make a jowl — and the treatment that works depends on which one is doing the most in your face.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which jowl do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: what actually helps',
    intro: 'What improves the skin over a jowl and what changes nothing — including the whole firming aisle.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Injectables',
    intro: 'Filler frames the jowl, fat-dissolvers shrink it, toxin relaxes the pull, threads hitch it for a few weeks — graded by what the trials actually measured.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Energy devices and surgery',
    intro: 'Where the tightening is modest and the lifting is real — and the pinch test that tells you which you are buying.',
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
  bone: 'Bone & volume',
  fat: 'Fat',
  skin: 'Skin & laxity',
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

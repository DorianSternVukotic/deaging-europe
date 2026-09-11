/**
 * Double chin (submental fullness) guide — single source of truth (problem
 * template).
 *
 * Consumed by /double-chin. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: a double chin is four things — fat above the platysma,
 * fat below it, loose skin and muscle, and a short chin or low hyoid — and
 * only the first has a treatment with placebo-controlled trials. The
 * licensed injection and the cold applicator remove preplatysmal fat and
 * nothing else; a lax neck treated as a fat problem gets worse; a short
 * chin makes any neck look full; and the neck lift is the only treatment
 * that reaches everything at once, at a price that rises if devices went
 * first.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'fat' | 'skin' | 'muscle' | 'structure' | 'general';

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
  'A double chin is four things: fat above the platysma muscle, fat below it, skin and muscle that have loosened, and a chin that is short or a hyoid that sits low. Pinch, recline, clench and look in profile — most people over fifty have two of the four, and the treatments do not cross over.',
  'Only the fat above the muscle has placebo-controlled evidence: deoxycholic acid injections improved 66–70% of patients against 19–22% on placebo in two phase 3 trials of over a thousand people, held at three years, with temporary jaw-nerve weakness in 4% and swallowing difficulty in 2%. Cryolipolysis removes about 2–3 mm of fat per cycle in a meta-analysis, with a 1-in-455 risk of the fat paradoxically growing.',
  'Fat removal in a lax neck is the classic mistake: in a 132-patient liposuction series, crepe-paper skin predicted failure and results after 64 were less satisfactory. Loose skin wants a device — focused ultrasound is cleared to lift under the chin — or surgery, never a fat injection.',
  'A short chin makes any neck look full by shortening the distance from chin to hyoid: chin filler corrected retrusion in 56% against 28% untreated in a 192-person randomised trial, and an implant or genioplasty does it permanently. It is the syringe most double chins are never offered.',
  'The neck lift is the only treatment that reaches all four problems at once — satisfaction 82–99% across 57 studies in 8,648 patients — and the 2026 surgical literature warns that 68% of neck-lift patients had prior non-surgical treatments and 94% then needed the deeper, harder operation. Devices first is not always the cautious order.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-fat',
    kind: 'Fat',
    title: 'Fat above the muscle, and fat below it',
    blurb: 'The pinchable pad under the chin sits on top of the platysma and answers to injections, cold and liposuction; the fat beneath the muscle, which nothing non-surgical reaches, deepens with age and weight and is the fullness that stays when the rest has gone.',
  },
  {
    id: 'type-skin',
    kind: 'Skin & muscle',
    title: 'A neck that has loosened',
    blurb: 'Skin laxity under the chin happens at every body weight as elastin goes, the platysma slackens into cords, and after weight loss the envelope that fitted a fuller neck hangs — a fullness made of slack, not fat, that fat removal makes worse.',
  },
  {
    id: 'type-structure',
    kind: 'Bone & frame',
    title: 'A short chin and a low hyoid',
    blurb: 'The angle under the chin is set by bone: a chin that sits behind the lower lip and a hyoid bone that sits low shorten the line from chin to throat and blunt the angle in the leanest neck — the family trait that runs through every photograph.',
  },
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'chin-anatomy',
    category: 'concept',
    title: 'What a double chin actually is',
    tldr: 'A blunted angle between chin and neck — ideally about 121° in men and 126° in women — made by any of five things: fat above the platysma, fat below it, loose skin, a slack muscle, and the skeleton (a short chin, a low hyoid, drooping submandibular glands). Fat tracks body weight; laxity does not.',
    bodyHtml: `
      <p>The profile of a neck is the cervicomental angle, the line from the underside of the chin to the throat, and clinicians consider about 121° acute in men and 126° in women (<a href="https://www.ncbi.nlm.nih.gov/books/NBK554506/" rel="noopener nofollow" target="_blank">chin augmentation review</a>). It blunts for five reasons that look the same from the front and nothing alike on examination: fat in the pad above the platysma muscle, fat beneath the muscle between the digastric bellies, skin that has lost its recoil, a platysma that has slackened into bands, and a skeleton that is short — a retruded chin, a hyoid bone that sits low and forward, submandibular glands that have descended below the jaw (<a href="https://www.ovid.com/jnls/dermatologicsurgery/fulltext/10.1097/dss.0000000000004937~assessing-the-submental-and-neck-region" rel="noopener nofollow" target="_blank">Dermatologic Surgery, 2025</a>; <a href="https://cosmoderma.org/tackling-submental-fat-a-review-of-management-strategies/" rel="noopener nofollow" target="_blank">management review</a>).</p>
      <p>The distinction that decides everything: body-mass index drives the fat but not the laxity, which arrives with age at every weight as elastin fragments and the deep fat descends. A lean person with a family chin and a heavy person with a firm neck have different double chins, and the same injection helps one and harms the other.</p>
    `,
  },
  {
    id: 'how-common',
    category: 'concept',
    title: 'Who has one, and why it bothers people so much',
    tldr: 'In the American Society for Dermatologic Surgery’s consumer surveys, 67% (2015), 73% (2017) and 70% (2021) of respondents were bothered by fullness under the chin — as many as by lines around the eyes. Genetics, age and weight in that order; a short chin runs in families and in whole populations.',
    bodyHtml: `
      <p>Fullness under the chin is one of the most common cosmetic complaints in the surveys that ask: 67% of respondents in the American Society for Dermatologic Surgery's 2015 consumer survey were bothered by it, 73% in 2017 and 70% in 2021 — about as many as are bothered by lines around the eyes (<a href="https://www.mykybella.com/what-causes-submental-fullness" rel="noopener nofollow" target="_blank">survey summary</a>; <a href="https://www.prnewswire.com/news-releases/new-survey-reveals-impact-of-double-chin-on-self-perception-and-behavior-300422717.html" rel="noopener nofollow" target="_blank">2017 survey</a>). It is genetic before it is anything else — a short chin, a low hyoid and a tendency to store fat under the jaw run through families and are common in East Asian faces — it deepens with age as skin loosens and deep fat descends, and it follows body weight in the fat compartment only. Men carry more submental fat and are lifted by surgery more often; women complain earlier.</p>
    `,
  },
  {
    id: 'why-hard',
    category: 'concept',
    title: 'Why the wrong treatment makes it worse',
    tldr: 'Fat removal in a lax neck leaves an emptier, looser neck: crepe-paper skin predicted failure in a 132-patient liposuction series. Injections and cold reach only the fat above the muscle. And a device course before surgery scars the planes: 68% of 180 neck-lift patients had prior non-surgical treatment and 94% then needed the deeper operation.',
    bodyHtml: `
      <p>Every non-surgical fat treatment removes fat from above the platysma and nothing else, and in a neck whose problem is slack, removing the fat that was filling the envelope leaves an emptier envelope. The plastic-surgery series say so directly: in 132 patients treated with submental liposuction alone, a crepe-paper appearance of the skin was the best predictor of failure and results after 64 were less satisfactory, with redundant skin (<a href="https://pubmed.ncbi.nlm.nih.gov/14504526/" rel="noopener nofollow" target="_blank">PRS, 2003</a>). Deep fat between the digastric muscles, a low hyoid and a short chin are untouched by any injection or applicator, which is why a fully "treated" double chin so often remains.</p>
      <p>The newer warning is about order. A 2026 series of 180 neck lifts found that 68% of patients had already had non-surgical treatments — injections, cold, threads, energy — and that the surgeons then met fibrosis, lost tissue planes and unpredictable fat, needing the deeper cervicoplasty with subplatysmal work in 94% of cases (<a href="https://academic.oup.com/asj/article/46/4/372/8213640" rel="noopener nofollow" target="_blank">ASJ, 2026</a>). "Try the non-invasive options first" is the right advice for a fat pad in a firm neck and the wrong advice for the neck that was always going to need a surgeon. The self-check below sorts them.</p>
    `,
  },
];

const context: Section[] = [
  {
    id: 'type-fat',
    category: 'context',
    title: 'The pinchable pad (fat above the muscle) — and the fullness that will not pinch (fat below it)',
    tldr: 'Tilt your head back and pinch under the chin: a soft, gatherable pad in the midline is preplatysmal fat, the one component with placebo-controlled treatments. Fullness that stays firm and deep when you tense the neck is subplatysmal and belongs to a surgeon.',
    focus: 'fat',
    bodyHtml: `
      <p>Tip the head back, tense the neck as if grimacing, and pinch under the chin. A soft pad you can gather between finger and thumb, worst in the midline, is fat above the platysma: this is the double chin that deoxycholic acid, cryolipolysis and liposuction were built for, and localised midline fullness was the best predictor of a good liposuction result in the 132-patient series — better than age or skin tone (<a href="https://pubmed.ncbi.nlm.nih.gov/14504526/" rel="noopener nofollow" target="_blank">PRS, 2003</a>). Fullness that stays firm when the muscle is tensed, sits deep and does not gather is fat beneath the platysma, between the digastric bellies, sometimes with the submandibular glands descended beside it; it deepens with age and weight, nothing injected or applied reaches it, and it is the commonest reason a "treated" neck still looks full. The deep neck lift removes it directly.</p>
    `,
  },
  {
    id: 'type-skin',
    category: 'context',
    title: 'The loose neck (skin and slack)',
    tldr: 'Fullness that empties when you lie on your back and hangs when you look down, with crepey skin and often horizontal lines — laxity, at any weight, and after weight loss. Devices for mild, surgery for more; fat removal makes it worse.',
    focus: 'skin',
    bodyHtml: `
      <p>Lie flat and look in a hand mirror, then sit up and look down at your chest. A "double chin" that disappears lying back and hangs in a fold when you look down is skin and slack rather than fat: the envelope has outgrown its contents, whether from age, sun, a lost stone or a GLP-1 medicine. Crepe-paper skin, deep horizontal neck lines and very thin skin predict that it will not retract after fat removal (<a href="https://pubmed.ncbi.nlm.nih.gov/14504526/" rel="noopener nofollow" target="_blank">PRS, 2003</a>). This neck wants what tightens — focused ultrasound, radiofrequency, subdermal plasma for mild to moderate laxity, a neck lift for more — and never an injection that removes what little is filling it. The <a href="/neck">neck guide</a> and the <a href="/sagging-skin">sagging-skin guide</a> grade the tightening tools.</p>
    `,
  },
  {
    id: 'type-muscle',
    category: 'context',
    title: 'The corded neck (platysma)',
    tldr: 'Vertical bands that stand out when you grimace or clench, with a blunted angle between them — the platysma has slackened and splayed. Toxin softens the bands for months; a platysmaplasty during a neck lift rebuilds the floor.',
    focus: 'muscle',
    bodyHtml: `
      <p>Clench the jaw and pull the corners of the mouth down: if two vertical cords stand out from the chin toward the collarbones and the angle between them looks fuller than the rest, the platysma — the thin sheet of muscle under the neck skin — has slackened and pulled apart in the midline. Botulinum toxin into the bands has phase 3 trials and a 2024 licence for exactly this (<a href="https://news.abbvie.com/2024-10-18-BOTOX-R-Cosmetic-onabotulinumtoxinA-Receives-FDA-Approval-for-Moderate-to-Severe-Vertical-Bands-Connecting-the-Jaw-and-Neck-Platysma-Bands" rel="noopener nofollow" target="_blank">FDA approval</a>), and a platysmaplasty — stitching the muscle edges back together as a sling — is the part of a neck lift that rebuilds the floor under the chin. Fat treatments do nothing for a corded neck. The <a href="/neck">neck guide</a> covers the bands in detail.</p>
    `,
  },
  {
    id: 'type-structure',
    category: 'context',
    title: 'The family chin (bone, hyoid, glands)',
    tldr: 'A chin behind the lower lip in profile, a throat that starts high, a full neck at every weight and in every relative — the skeleton sets the angle. Chin filler, an implant or a genioplasty lengthens the line; a low hyoid cannot be moved; drooping glands can be tucked in surgery.',
    focus: 'structure',
    bodyHtml: `
      <p>Look at your profile with the head level. If the chin sits behind a line dropped from the lower lip, the throat begins high under the jaw, and the fullness was there at twenty and in your parents, the frame is the driver: a retruded chin and a low, forward hyoid shorten the distance from chin to throat and make the angle obtuse whatever the fat does (<a href="https://www.ncbi.nlm.nih.gov/books/NBK554506/" rel="noopener nofollow" target="_blank">chin augmentation review</a>; <a href="https://www.ovid.com/jnls/dermatologicsurgery/fulltext/10.1097/dss.0000000000004937~assessing-the-submental-and-neck-region" rel="noopener nofollow" target="_blank">Dermatologic Surgery, 2025</a>). Lengthening the chin — with filler, an implant or a sliding genioplasty — lengthens the line and sharpens the angle, which is why surgeons pair chin augmentation with liposuction so often; the hyoid cannot be moved, and firm lumps under the angle of the jaw are descended submandibular glands that only surgery tucks away. Chin retrusion is common enough in East Asian faces that it is the first thing an injector there assesses.</p>
    `,
  },
  {
    id: 'type-weight',
    category: 'context',
    title: 'Weight, weight loss and the GLP-1 neck',
    tldr: 'Body-mass index drives the fat but not the laxity; losing weight empties the pad and leaves the envelope, and the GLP-1 medicines do it fast. Slow loss lets younger skin retract; older skin becomes the loose-neck type and needs tightening or surgery.',
    focus: 'skin',
    bodyHtml: `
      <p>The fat above and below the platysma follows body weight, so gaining it deepens a double chin and losing it shrinks the pad — and then reveals what the pad was hiding. Skin that fitted a fuller neck does not always fit a leaner one, and the GLP-1 medicines have made rapid loss common: clinicians treating these patients describe midface hollowing, neck laxity and accentuated folds arriving over months (<a href="https://pubmed.ncbi.nlm.nih.gov/41768029/" rel="noopener nofollow" target="_blank">ASJ Open Forum, 2026</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11845967/" rel="noopener nofollow" target="_blank">2025 review</a>). Younger, less sun-damaged skin retracts over a year; older skin does not, and the double chin changes type from fat to slack — which is when a fat injection stops helping and a device or a surgeon starts. Lose slowly if you can, and treat the neck at the end, not the beginning.</p>
    `,
  },
  {
    id: 'workup',
    category: 'context',
    title: 'Pinch, recline, clench, profile — and a photograph with the head level',
    tldr: 'Pinch: gatherable is fat above the muscle. Recline: what vanishes is slack. Clench: cords are platysma. Profile: chin behind the lip is bone. Photograph in profile with the head level and the neck relaxed, and grade it 0–4 as the trials do.',
    bodyHtml: `
      <p>Four moves in front of a mirror. Tip the head back and pinch under the chin: a soft, gatherable midline pad is preplatysmal fat; firm, deep fullness that will not gather is subplatysmal. Lie flat: a chin that disappears is slack, one that stays is fat or bone. Clench and grimace: vertical cords are the platysma. Look in profile with the head level: a chin behind the lower lip and a throat that starts high are the skeleton. Then a profile photograph with the head level — the line from ear canal to the bottom of the eye socket horizontal — and the neck relaxed, because every trial on this page graded the double chin on a 0–4 scale from exactly that view, and because a lifted chin flatters everyone. Note your weight trajectory and any weight-loss medicine, and take the photograph to whoever you consult: a clinic that offers fat dissolving without pinching, reclining and looking at your profile is selling a syringe.</p>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-weight',
    category: 'home',
    title: 'Weight, lost slowly',
    tldr: 'The fat under the chin follows body-mass index and is the one component diet reaches; the laxity does not follow it, and rapid loss turns a fat double chin into a slack one. Lose slowly, and expect to treat the neck at the end.',
    evidence: 'moderate',
    focus: 'fat',
    note: 'Best for: the pinchable type in someone carrying weight — the free treatment, taken slowly',
    sessions: 'Ongoing',
    downtime: 'None',
    cost: 'Free',
    bodyHtml: `
      <p>Submental fat is ordinary subcutaneous fat and shrinks with the rest when weight comes off; higher body-mass index tracks excess fat under the chin but not skin laxity, which occurs at every weight (<a href="https://www.ovid.com/jnls/dermatologicsurgery/fulltext/10.1097/dss.0000000000004937~assessing-the-submental-and-neck-region" rel="noopener nofollow" target="_blank">Dermatologic Surgery, 2025</a>). Nobody can direct where fat leaves from, and the neck is often late to give it up; and the pace matters, because the GLP-1 clinics now describe the neck that lost its fat faster than its skin could follow (<a href="https://pubmed.ncbi.nlm.nih.gov/41768029/" rel="noopener nofollow" target="_blank">ASJ Open Forum, 2026</a>). Moderate on observational evidence — no trial has randomised a diet against a syringe — and the honest first step for anyone whose double chin arrived with their weight.</p>
    `,
  },
  {
    id: 'home-skincare',
    category: 'home',
    title: 'Sunscreen and a retinoid on the neck',
    tldr: 'The neck’s skin is thinner and more sun-damaged than the face’s and loses recoil first; sunscreen has the prevention trial and retinoids the collagen trials, both on the face. Skin quality for the loose-neck type; nothing for fat or bone.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: 'Daily',
    downtime: 'Weeks of dryness',
    cost: '€10–30 / month',
    bodyHtml: `
      <p>The skin under the chin and down the neck is thinner than the face's, gets the sun the face's sunscreen misses, and loses its recoil first — which is the laxity half of most double chins after fifty. The evidence is borrowed from the face: daily sunscreen cut measured skin aging by 24% in the one randomised prevention trial (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Hughes 2013</a>) and tretinoin rebuilt collagen across eight randomised trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12615114/" rel="noopener nofollow" target="_blank">meta-analysis</a>), and no trial has measured either on a neck's profile. Emerging for this problem: it keeps the envelope from loosening further and does nothing for the fat inside it. The <a href="/neck">neck guide</a> covers the neck's retinoid tolerance.</p>
    `,
  },
  {
    id: 'home-exercise',
    category: 'home',
    title: 'Chin exercises, jaw trainers and "mewing"',
    tldr: 'No controlled study shows an exercise reducing submental fat; a two-case report of jaw exercisers found the chewing muscles they train do not touch the fat or the skin; orthodontists find no evidence that tongue posture reshapes an adult jaw. Cheap, and not a treatment.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'Do not expect a change',
    downtime: 'None',
    cost: 'Free–€30',
    bodyHtml: `
      <p>The fat under the chin is not a muscle and cannot be exercised away; the platysma is a thin sheet that tones a little with use but does not lift a pad or retract skin. A case report examining jaw-exercise devices against the claims made for them found that the chewing muscles they build do not act on submental fat or skin elasticity (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11681191/" rel="noopener nofollow" target="_blank">case report</a>), and the orthodontists' association finds no evidence that "mewing" — pressing the tongue to the palate — reshapes a jaw after growth has finished (<a href="https://aaoinfo.org/whats-trending/is-mewing-bad-for-you/" rel="noopener nofollow" target="_blank">American Association of Orthodontists</a>). Posture makes a double chin look worse in photographs and better in the mirror; it does not change the tissue.</p>
    `,
  },
  {
    id: 'home-gadgets',
    category: 'home',
    title: 'Home radiofrequency, microcurrent, chin straps and creams',
    tldr: 'Home radiofrequency delivers a fraction of clinic energy on manufacturer studies; microcurrent tones muscle and has one facial trial; chin straps compress overnight and "fat-burning" creams do nothing measurable. Ritual, not treatment.',
    evidence: 'limited',
    focus: 'general',
    sessions: 'As desired',
    downtime: 'None',
    cost: '€15–400',
    bodyHtml: `
      <p>Nothing sold for home use dissolves fat or tightens a neck. Home radiofrequency wands rest on manufacturer-run studies at energies far below the clinic devices graded below (<a href="https://www.researchgate.net/publication/50393607_Home-use_TriPollar_RF_device_for_facial_skin_tightening_Clinical_study_results" rel="noopener nofollow" target="_blank">manufacturer study</a>); microcurrent's one randomised trial measured facial muscle tone and self-reported firmness on the cheeks (<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/jocd.12007" rel="noopener nofollow" target="_blank">Kavanagh 2012</a>); chin straps compress tissue overnight and let it return by breakfast; "lipolytic" creams cannot reach fat through skin. Harmless, and not a line on the plan.</p>
    `,
  },
];

const inj: Section[] = [
  {
    id: 'inj-deoxycholic',
    category: 'inj',
    title: 'Deoxycholic acid injections (Kybella / Belkyra)',
    tldr: 'Two phase 3 placebo-controlled trials of 1,022 adults: 70% and 66.5% improved at least one grade against 18.6% and 22.2% on placebo, most within 2–4 sessions, held at three years in 82% vs 65%. Temporary jaw-nerve weakness in 4%, swallowing difficulty in 2%, weeks of swelling. Fat above the muscle only.',
    evidence: 'strong',
    focus: 'fat',
    note: 'Best for: a pinchable midline pad in a firm neck — the one double chin with placebo-controlled evidence',
    sessions: '2–4 sessions, a month apart',
    downtime: '1–2 weeks of swelling and numbness per session',
    cost: '€500–900 per session (UK £400–800)',
    bodyHtml: `
      <p>Deoxycholic acid is a synthetic bile salt that dissolves the membranes of fat cells where it is injected; the body clears the debris over weeks and the cells do not return. The evidence is regulator-grade and placebo-controlled: in REFINE-1, 256 patients on the drug and 250 on placebo, 70.0% against 18.6% improved at least one grade on the combined clinician-and-patient submental-fat scale and 13.4% against 0% improved two grades (<a href="https://www.ovid.com/jnls/dermatologicsurgery/abstract/10.1097/dss.0000000000000578~refine-1-a-multicenter-randomized-double-blind" rel="noopener nofollow" target="_blank">REFINE-1</a>); in REFINE-2, 258 per arm, 66.5% against 22.2% and 18.6% against 3.0% (<a href="https://www.jaad.org/article/s0190-9622(16)30129-3/fulltext" rel="noopener nofollow" target="_blank">REFINE-2</a>). Most responders got there within two to four of the six allowed sessions (<a href="https://pubmed.ncbi.nlm.nih.gov/29401213/" rel="noopener nofollow" target="_blank">by-session analysis</a>); a phase 3b trial found it worked in mild fat (61% vs 7%) and extreme fat (89% vs 13%) with skin laxity unchanged or improved (<a href="https://pubmed.ncbi.nlm.nih.gov/30998531/" rel="noopener nofollow" target="_blank">phase 3b</a>); and at three years, 82.4% of treated patients against 65.0% of placebo still held their response (<a href="https://pubmed.ncbi.nlm.nih.gov/33617632/" rel="noopener nofollow" target="_blank">three-year follow-up</a>). It is authorised across the European Union (<a href="https://www.ema.europa.eu/en/documents/psusa/deoxycholic-acid-list-nationally-authorised-medicinal-products-psusa00010525202104_en.pdf" rel="noopener nofollow" target="_blank">EU authorisation</a>).</p>
      <p>The trade is printed in the same trials: marginal mandibular nerve paresis — a temporarily crooked smile — in 4.3% against 0.8%, swallowing difficulty in 2.3% for a median of two and a half days, and one to two weeks of swelling, numbness and firmness after every session. It removes only the fat above the platysma, in a grid drawn on the skin; it does nothing for the loose neck, the deep fat or the chin, and in a lax neck it uncovers them. A pinch test, a recline test and a profile before the first vial.</p>
    `,
  },
  {
    id: 'inj-chin-filler',
    category: 'inj',
    title: 'Chin and jawline filler for the short chin',
    tldr: 'Lengthening the chin lengthens the line to the throat: a firm hyaluronic gel corrected chin retrusion in 56% against 28% of untreated controls at six months in a 192-person randomised trial, with a second trial agreeing; case reports use the same gel to camouflage the double chin itself. The syringe most double chins are never offered.',
    evidence: 'moderate',
    focus: 'structure',
    note: 'Best for: the family chin — a chin behind the lower lip and a throat that starts high, at any weight',
    sessions: 'Every 12–24 months',
    downtime: '3–7 days of swelling; firmness for weeks',
    cost: '€400–800 (2–3 ml)',
    bodyHtml: `
      <p>Chin augmentation increases the distance from chin to hyoid, which sharpens the cervicomental angle whatever the fat is doing (<a href="https://www.ncbi.nlm.nih.gov/books/NBK554506/" rel="noopener nofollow" target="_blank">chin augmentation review</a>), and the injectable version has regulator-grade trials: 192 adults with chin retrusion were randomised three to one to a firm hyaluronic gel or six months of no treatment, and 56.3% of the treated improved at least one grade on the chin-retrusion scale at six months against 27.5% of controls (<a href="https://pubmed.ncbi.nlm.nih.gov/33347003/" rel="noopener nofollow" target="_blank">chin RCT</a>); a second multicentre randomised trial agreed (<a href="https://pubmed.ncbi.nlm.nih.gov/39542893/" rel="noopener nofollow" target="_blank">2024 RCT</a>); the jawline trial of 206 adults added definition along the border that frames the neck (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11634383/" rel="noopener nofollow" target="_blank">jawline RCT</a>). Injectors also place gel along the jawline and chin to camouflage submental fullness directly, with case reports rather than trials behind that use (<a href="https://onlinelibrary.wiley.com/doi/10.1111/jocd.16100" rel="noopener nofollow" target="_blank">case report</a>). Moderate because the trials measured the chin, not the neck; the profile photograph tells you whether it is your syringe. The <a href="/marionette-lines">marionette guide</a> and the <a href="/fillers">filler guide</a> cover the products.</p>
    `,
  },
  {
    id: 'inj-platysma-toxin',
    category: 'inj',
    title: 'Botulinum toxin for platysma bands',
    tldr: 'Phase 3 trials and a 2024 licence for vertical neck bands; the "Nefertiti" jawline pattern has a 2007 series with 97% recontouring and no controlled trial. Softens cords and lets the jawline read cleaner for three months; removes no fat.',
    evidence: 'emerging',
    focus: 'muscle',
    sessions: 'Every 3–4 months',
    downtime: 'None',
    cost: '€250–450',
    bodyHtml: `
      <p>Toxin in the platysma relaxes the cords that splay under the chin and, placed along the jawline, weakens the muscle's downward pull so the lifters win — the pattern sold as the Nefertiti lift. The band indication now has phase 3 trials and a licence (<a href="https://news.abbvie.com/2024-10-18-BOTOX-R-Cosmetic-onabotulinumtoxinA-Receives-FDA-Approval-for-Moderate-to-Severe-Vertical-Bands-Connecting-the-Jaw-and-Neck-Platysma-Bands" rel="noopener nofollow" target="_blank">FDA approval</a>); the jawline pattern rests on a 2007 series reporting recontouring in 97% with no controlled trial since, graded in the <a href="/jowls">jowls guide</a>. For the double chin it is emerging: it changes the muscle half of a corded neck for three months and removes nothing, and too much of it weakens swallowing and the mouth's depressors. The <a href="/neck">neck guide</a> covers the bands.</p>
    `,
  },
  {
    id: 'inj-unlicensed-lipolytics',
    category: 'inj',
    title: 'Unlicensed "fat-dissolving" injections (phosphatidylcholine–deoxycholate, Aqualyx and copies)',
    tldr: 'Compounded bile-salt mixtures sold as fat dissolvers have no trials of the standard the licensed drug met; the reports are of nodules, chronic infection and skin necrosis after superficial or untrained injection. The licensed molecule exists; the copies are the risk without the evidence.',
    evidence: 'limited',
    focus: 'fat',
    sessions: 'Not recommended',
    downtime: 'Weeks of swelling; nodules',
    cost: '€200–400 per session',
    bodyHtml: `
      <p>Before deoxycholic acid was purified and trialled, clinics injected mixtures of phosphatidylcholine and sodium deoxycholate compounded from an intravenous drug, and the practice standard published for it acknowledged that only the deoxycholate component worked and that high-quality trials were lacking (<a href="https://pubmed.ncbi.nlm.nih.gov/18612680/" rel="noopener nofollow" target="_blank">practice standard</a>). Products such as Aqualyx are CE-marked devices in Europe rather than licensed medicines, restricted to trained injectors, and the literature on them is case reports: chronic infection and nodules after deoxycholate injection (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9142263/" rel="noopener nofollow" target="_blank">case report</a>) and skin necrosis after superficial injection by an untrained hand (<a href="https://journals.sagepub.com/doi/abs/10.1177/07488068251374221" rel="noopener nofollow" target="_blank">necrosis report</a>). The molecule with the placebo-controlled trials is available in Europe; a clinic offering a cheaper "fat dissolver" is offering the risk without the data.</p>
    `,
  },
];

const clinic: Section[] = [
  {
    id: 'clinic-neck-lift',
    category: 'clinic',
    title: 'Neck lift and deep-plane neck lift',
    tldr: 'The only treatment that reaches all four problems: fat above and below the muscle, the platysma, the skin and the glands. A systematic review of 57 studies in 8,648 patients found satisfaction of 82–99%, nerve palsy in 0.2–12% and haematoma in 0.2–4%. Two weeks off, a decade of result.',
    evidence: 'strong',
    focus: 'skin',
    note: 'Best for: the loose neck, the deep fat that will not pinch, the corded platysma, and the double chin that outlasted every injection',
    sessions: 'Once; 10+ years',
    downtime: '2–3 weeks; final at 6–12 months',
    cost: '€8,000–18,000 (UK £7,500–9,500 standalone; £2,500–4,500 added to a facelift)',
    bodyHtml: `
      <p>Through an incision under the chin and often behind the ears, the surgeon removes the fat above the platysma, opens the muscle to remove the fat beneath it and reduce the digastric bellies and descended glands, stitches the platysma back together as a sling, and redrapes the skin — the only procedure that addresses every component of a double chin at once. The systematic review of deep-plane neck lifting pooled 57 studies and 8,648 patients: the submandibular glands were reduced in 70% of techniques, the digastrics in 59% and the subplatysmal fat in 49%, satisfaction ranged from 81.6% to 98.6%, and complications were nerve palsy in 0.2–12% and haematoma in 0.2–4% (<a href="https://www.ovid.com/jnls/annalsplasticsurgery/abstract/10.1097/sap.0000000000004163~current-trends-in-deep-plane-neck-lifting-a-systematic" rel="noopener nofollow" target="_blank">systematic review</a>); the neck-lift review of 12 studies and 2,106 patients reaches the same conclusions (<a href="https://pubmed.ncbi.nlm.nih.gov/39406360/" rel="noopener nofollow" target="_blank">neck-lift review</a>). Strong on cohort evidence — nobody randomises a neck lift against a syringe — and the treatment the loose, deep or corded double chin was always going to need. The <a href="/neck">neck guide</a> and the <a href="/jowls">jowls guide</a> cover the surgery; the 2026 warning about devices first is in the safety group below.</p>
    `,
  },
  {
    id: 'clinic-cryolipolysis',
    category: 'clinic',
    title: 'Cryolipolysis (CoolMini)',
    tldr: 'A meta-analysis of 8 studies in 206 patients: 2.8 mm less fat and about 20 cm³ less volume per treatment; the pivotal 60-person study found 2 mm on ultrasound, 83% satisfied and blinded doctors picking the before-photo 91% of the time. One in 455 grows fat instead. Fat above the muscle only.',
    evidence: 'moderate',
    focus: 'fat',
    note: 'Best for: a pinchable pad in a firm neck, for someone who will not accept weeks of injection swelling',
    sessions: '1–2 cycles, 6–8 weeks apart',
    downtime: 'Numbness and swelling for 1–2 weeks',
    cost: '€600–1,200 per cycle (UK from £259 per applicator)',
    bodyHtml: `
      <p>A small vacuum applicator cools the fat under the chin to a temperature that kills fat cells and spares skin, and the body clears them over two to three months. The pivotal study treated 60 people with one 60-minute cycle: ultrasound fat-layer reduction of 2.0 mm, blinded physicians identifying the baseline photograph 91% of the time, 83% satisfied, 80% willing to recommend it (<a href="https://pubmed.ncbi.nlm.nih.gov/26607045/" rel="noopener nofollow" target="_blank">pivotal study</a>); a 2025 systematic review and meta-analysis of eight studies in 206 patients found mean fat thickness down 2.78 mm and volume down 19.6 cm³ with transient side effects (<a href="https://pubmed.ncbi.nlm.nih.gov/40473257/" rel="noopener nofollow" target="_blank">meta-analysis</a>); 3D imaging of 35 patients measured about 22 cm³ less at six and twelve weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/31099382/" rel="noopener nofollow" target="_blank">3D study</a>). Moderate because none of it is sham-controlled and the change per cycle is millimetres; a sequential protocol of cold followed by deoxycholic acid took 100% of 16 patients with extreme fat up a grade (<a href="https://pubmed.ncbi.nlm.nih.gov/35278262/" rel="noopener nofollow" target="_blank">sequential study</a>). The paradoxical-growth risk is in the safety group; like the injection, it reaches only the fat above the muscle.</p>
    `,
  },
  {
    id: 'clinic-liposuction',
    category: 'clinic',
    title: 'Submental liposuction',
    tldr: 'One session removes the fat above the muscle completely: all 132 patients in the reference series improved, with midline fullness predicting success and crepe-paper skin predicting failure; results after 64 were less satisfactory. Complications are rare and serious when they occur.',
    evidence: 'moderate',
    focus: 'fat',
    note: 'Best for: a large pinchable pad in elastic skin, under about 60 — one session instead of four',
    sessions: 'Once',
    downtime: '1 week in a compression garment; swelling for weeks',
    cost: '€2,500–5,000 (UK £3,000–5,000)',
    bodyHtml: `
      <p>Through a stab incision under the chin, a fine cannula removes the preplatysmal fat in one session — the definitive version of what the injection and the applicator do by degrees. The reference series followed 132 patients (ages 21–73) treated with submental suction alone for more than a year: every patient improved on standard criteria, localised midline fullness was the best predictor of a good result, a crepe-paper skin appearance was the best predictor of failure, and results in patients over 64 were less satisfactory, with redundant skin (<a href="https://pubmed.ncbi.nlm.nih.gov/14504526/" rel="noopener nofollow" target="_blank">PRS, 2003</a>). Complications are rare and, when reported, serious: the scoping review of published cases found contour depressions, scar contracture, transient facial-nerve weakness and three cases of necrotising fasciitis, with haematoma and airway compromise the feared early event (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9054168/" rel="noopener nofollow" target="_blank">scoping review</a>; <a href="https://www.sciencedirect.com/science/article/abs/pii/S1042369908001064" rel="noopener nofollow" target="_blank">complications review</a>). Moderate on series evidence; in the right neck it is one morning instead of four months, and in the wrong neck it is a looser one.</p>
    `,
  },
  {
    id: 'clinic-hifu',
    category: 'clinic',
    title: 'Microfocused ultrasound for the loose neck (Ultherapy and successors)',
    tldr: 'Cleared to lift under the chin since 2012; a neck study measured submental lift as a 26–45 mm² reduction on profile photographs, with 92% improved on global scales at a year; meta-analyses of the class find modest, consistent tightening. Millimetres, for mild laxity, no downtime.',
    evidence: 'moderate',
    focus: 'skin',
    note: 'Best for: mild submental laxity after the fat has been dealt with, or the slack neck of someone who will not have surgery',
    sessions: 'Once a year',
    downtime: 'None; days of tenderness',
    cost: '€500–1,200 under the chin (€2,000–4,000 full face and neck)',
    bodyHtml: `
      <p>Focused ultrasound heats points in the dermis and the platysma layer to contract them and provoke collagen, and the submental region was its second clearance after the brow. A study of microfocused ultrasound for neck laxity measured submental lifting as a 26–45 mm² reduction of the under-chin area on lateral photographs, with 92% of patients improved in tightening or wrinkles on the global scale through a year (<a href="https://jddonline.com/articles/evaluation-of-micro-focused-ultrasound-for-lifting-and-tightening-neck-laxity-S1545961616P0607X" rel="noopener nofollow" target="_blank">neck study</a>); the systematic review and meta-analysis of the visualised device finds consistent, modest improvement across sites (<a href="https://academic.oup.com/asj/article/45/3/NP86/7900203" rel="noopener nofollow" target="_blank">meta-analysis</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12374570/" rel="noopener nofollow" target="_blank">2025 review</a>). Millimetres of tightening in most, nothing in some, and a real risk of melting the fat a thin neck cannot spare if the depth is wrong; the right tool for the loose-neck type in classes where surgery is not yet justified. The <a href="/neck">neck guide</a> and the <a href="/sagging-skin">sagging-skin guide</a> grade the device in depth.</p>
    `,
  },
  {
    id: 'clinic-renuvion',
    category: 'clinic',
    title: 'Subdermal helium plasma (Renuvion) with liposuction',
    tldr: 'Cleared for loose neck skin on a prospective trial in which 82.5% improved at six months; a meta-analysis of 34 studies in 3,508 people found 92% satisfaction with complications in 5–8% when used alone or with liposuction. Surgery-adjacent, under a regulator’s safety communication.',
    evidence: 'moderate',
    focus: 'skin',
    sessions: 'Once',
    downtime: '1–2 weeks; swelling for weeks',
    cost: '€4,000–8,000',
    bodyHtml: `
      <p>After the fat is suctioned, a probe passed under the skin heats its underside with helium plasma to contract the fibrous septa — the middle rung between a device and a neck lift for the neck that is both fat and slack. Its neck clearance rests on a prospective FDA-reviewed trial in which 82.5% of patients showed improvement at day 180 with no serious adverse events (<a href="https://academic.oup.com/asj/article/43/10/1174/7072381" rel="noopener nofollow" target="_blank">FDA-IDE trial</a>), and a meta-analysis of 34 studies in 3,508 treated people found 92% satisfaction and complications of 5% alone and 8% with liposuction — seromas, transient nerve effects, wound problems (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13293070/" rel="noopener nofollow" target="_blank">meta-analysis</a>). The FDA has issued a safety communication on burns and subcutaneous emphysema from use outside its clearances (<a href="https://www.fda.gov/medical-devices/safety-communications/update-use-renuvionj-plasma-device-certain-aesthetic-procedures-fda-safety-communication" rel="noopener nofollow" target="_blank">FDA safety communication</a>). Moderate, in a surgeon's hands, for the neck too loose for a device and not loose enough for a lift.</p>
    `,
  },
  {
    id: 'clinic-rf',
    category: 'clinic',
    title: 'Radiofrequency: monopolar, bipolar and needle',
    tldr: 'Small prospective studies: two monopolar sessions improved 82% of 21 patients at two months and 53% at seven; four bipolar sessions reduced fat volume in 22 patients through six months; a single needle-radiofrequency treatment cut submental fat from 20.4 to 16.4 cc in 24 patients. Real, small, uncontrolled.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: '1–4 sessions',
    downtime: 'None to a few days',
    cost: '€500–1,000 per session',
    bodyHtml: `
      <p>Radiofrequency heats the dermis and superficial fat under the chin, contracting collagen and, at higher energies, injuring fat. The evidence is a set of small prospective studies without controls: 21 patients given two monopolar treatments a month apart showed significant reductions in submental circumference and thickness, with 82.3% rated better than mildly improved at two months and 52.9% at seven (<a href="https://pubmed.ncbi.nlm.nih.gov/27402002/" rel="noopener nofollow" target="_blank">monopolar study</a>); 22 patients given four bipolar sessions improved on laxity scores from the second session and on fat volume from the first week to six months (<a href="https://pubmed.ncbi.nlm.nih.gov/35255190/" rel="noopener nofollow" target="_blank">bipolar study</a>); 24 adults given one micro-insulated needle radiofrequency treatment lost submental fat volume from 20.4 to 16.4 cc at two months with mild transient reactions (<a href="https://pubmed.ncbi.nlm.nih.gov/36799883/" rel="noopener nofollow" target="_blank">needle study</a>); a temperature-controlled monopolar series adds a submental-laxity cohort (<a href="https://www.academia.edu/144031103/Temperature_Controlled_Monopolar_Radiofrequency_in_the_Treatment_of_Submental_Skin_Laxity_A_Prospective_Study" rel="noopener nofollow" target="_blank">prospective study</a>). Emerging: a few millilitres of fat and a little tightening, for the mild neck with mild fat. The <a href="/neck">neck guide</a> grades the devices.</p>
    `,
  },
  {
    id: 'clinic-hifes',
    category: 'clinic',
    title: 'Synchronised radiofrequency with muscle stimulation (Emface submental)',
    tldr: 'An MRI study of 33 patients funded by the manufacturer: submental volume down 36% and fat down 30% at three months after four sessions, with the digastric muscle measurably lifted and no adverse events. One study, no control, a striking number that wants replication.',
    evidence: 'emerging',
    focus: 'fat',
    sessions: '4 weekly sessions',
    downtime: 'None',
    cost: '€600–1,000 per session',
    bodyHtml: `
      <p>A pad under the chin delivers radiofrequency to the fat and skin and high-intensity electrical stimulation to the muscles beneath — the digastrics and platysma — on the theory that a toned floor lifts the fullness. The one study is an MRI series of 33 patients (mean age 43) given four weekly 20-minute treatments: submental volume fell 25% at one month and 36% at three, submental fat 21% and 30%, the anterior belly of the digastric muscle measurably elevated, 94% satisfied, no adverse events — with the manufacturer funding the work and all three authors its consultants (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12168439/" rel="noopener nofollow" target="_blank">MRI study</a>). A 30% fat reduction from four comfortable sessions would outperform the injection with the placebo-controlled trials; an uncontrolled, manufacturer-funded series is where such a number starts, not where it is believed. Emerging until someone else measures it.</p>
    `,
  },
  {
    id: 'clinic-sofwave',
    category: 'clinic',
    title: 'Parallel-beam ultrasound (Sofwave) for submental laxity',
    tldr: 'Cleared for under-chin lifting on a manufacturer-run multicentre study of 80 people in which blinded reviewers picked the after-photo about 80% of the time and 85% were judged improved under the chin; a 13-patient histology study shows more elastic fibres. No head-to-head, no long-term data.',
    evidence: 'emerging',
    focus: 'skin',
    sessions: 'Once a year',
    downtime: 'None',
    cost: '€800–1,500 under the chin',
    bodyHtml: `
      <p>Parallel ultrasound beams heat the mid-dermis at 0.5–2 mm — shallower than focused ultrasound, with less pain and no fat risk — and the device gained submental and neck lifting clearances on a multicentre study of 80 people at five sites in which blinded reviewers identified the post-treatment photograph 79–80% of the time and 85% were judged significantly improved under the chin (<a href="https://www.prnewswire.com/news-releases/sofwave-announces-fda-clearance-of-new-lifting-indications-for-eyebrow-sub-mental-beneath-the-chin-and-neck-facial-areas-301425403.html" rel="noopener nofollow" target="_blank">clearance announcement</a>; <a href="https://api.sofwave.com/app/uploads/2024/12/MK00105_B-Eybrow-Neck-and-Submental-Lifting_Clinical-Study-Summary.pdf" rel="noopener nofollow" target="_blank">study summary</a>); a 13-woman clinical and histological study found 85% with moderate-to-excellent laxity improvement and elastic-fibre density up on biopsy (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11845918/" rel="noopener nofollow" target="_blank">histology study</a>). Manufacturer-run, no comparison against focused ultrasound, no year-two data; the right depth for thin, crepey under-chin skin and nothing for fat.</p>
    `,
  },
  {
    id: 'clinic-chin-implant',
    category: 'clinic',
    title: 'Chin implant or sliding genioplasty',
    tldr: 'The permanent version of chin filler: an implant or a cut-and-advanced chin lengthens the line to the throat for life, and surgeons pair it with liposuction because the two together sharpen the angle more than either alone. Series-based evidence, a lip-numbness risk, and the fix for the family chin.',
    evidence: 'emerging',
    focus: 'structure',
    sessions: 'Once',
    downtime: '1–2 weeks; numbness for weeks to months',
    cost: '€3,000–6,000 implant; €5,000–8,000 genioplasty',
    bodyHtml: `
      <p>Where the chin is the reason for the double chin, the permanent answers are an alloplastic implant placed over the bone through a small incision under the chin or inside the lip, or a sliding genioplasty that cuts and advances the chin bone itself; both increase the chin-to-hyoid distance and sharpen the cervicomental angle, and both are routinely combined with submental liposuction because the combination reshapes the profile more than either alone (<a href="https://www.ncbi.nlm.nih.gov/books/NBK554506/" rel="noopener nofollow" target="_blank">chin augmentation review</a>). The evidence is surgical series and anatomy rather than trials, which keeps a standard operation at emerging on this page's rubric; the mental nerve runs where the implant sits, so lip and chin numbness for weeks is expected and occasionally lasts. Chin filler first, to see the profile you would be buying.</p>
    `,
  },
];

const safety: Section[] = [
  {
    id: 'safety-deoxycholic',
    category: 'safety',
    title: 'Deoxycholic acid: the crooked smile, the swallow, and the wrong neck',
    tldr: 'Marginal mandibular nerve weakness in 4.3% (temporary, a lopsided smile for weeks), swallowing difficulty in 2.3% for days, one to two weeks of swelling every session, and skin ulceration if injected too shallow. Injected into a lax or deep-fat neck it removes the padding and reveals the problem.',
    bodyHtml: `
      <p>The pivotal trials printed the rates: marginal mandibular nerve paresis — the nerve to the lower lip, giving a crooked smile — in 4.3% of treated patients against 0.8% on placebo, all temporary and resolving without sequelae; dysphagia in 2.3% for a median of two and a half days; and injection-site swelling, pain, numbness and firmness in most patients for one to two weeks after every session (<a href="https://www.ovid.com/jnls/dermatologicsurgery/abstract/10.1097/dss.0000000000000578~refine-1-a-multicenter-randomized-double-blind" rel="noopener nofollow" target="_blank">REFINE-1</a>; <a href="https://hcp.mykybella.com/safety-profile" rel="noopener nofollow" target="_blank">prescribing safety profile</a>). Injected too superficially it ulcerates skin; injected outside the marked grid it can reach the nerve or the thyroid cartilage. The subtler harm is the wrong neck: in a lax or subplatysmal double chin the drug removes what was filling the envelope and leaves the slack or the deep fullness in plain view, which the phase 3b trial's "laxity unchanged or improved" finding does not contradict, because those patients were selected for firm skin. Pinch, recline and profile before the grid is drawn.</p>
    `,
  },
  {
    id: 'safety-cryo',
    category: 'safety',
    title: 'Cryolipolysis: paradoxical adipose hyperplasia',
    tldr: 'In about 1 in 455 patients across 28 studies and 13,078 people, the treated fat grows into a firm, larger mass months later — seven times the manufacturer’s figure — mostly men, mostly older applicators, and fixed only by liposuction. Nerve pain and pigment change are the smaller risks.',
    bodyHtml: `
      <p>Paradoxical adipose hyperplasia is the complication that makes cryolipolysis a decision rather than a purchase: two to four months after treatment, the frozen fat grows back larger and firmer in the shape of the applicator, does not resolve on its own, and is corrected with liposuction or excision. A 2025 systematic review and meta-analysis of 28 studies in 13,078 patients put the pooled incidence at 0.22% — about 1 in 455 — against the manufacturer's reported 0.033%, with men overrepresented (17 of 29 cases) and first-generation applicators implicated in most (<a href="https://academic.oup.com/asjopenforum/article/doi/10.1093/asjof/ojaf142/8307545" rel="noopener nofollow" target="_blank">meta-analysis</a>); an eight-centre review of 8,658 cycles found rates of 0.05–0.39% falling by more than 75% with newer applicators (<a href="https://academic.oup.com/asj/article/41/8/932/5995602" rel="noopener nofollow" target="_blank">8,658-cycle review</a>); submental cases have been reported and needed a deep neck lift to correct (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11903390/" rel="noopener nofollow" target="_blank">case report</a>). The submental trials themselves recorded none, along with a case of prolonged neuralgia (<a href="https://pubmed.ncbi.nlm.nih.gov/30640270/" rel="noopener nofollow" target="_blank">case report</a>) and occasional pigment change. Ask which applicator generation the clinic uses and what happens if the fat grows.</p>
    `,
  },
  {
    id: 'safety-surgery',
    category: 'safety',
    title: 'Liposuction and the neck lift: nerves, bleeding, the airway — and devices first',
    tldr: 'Liposuction’s rare complications include haematoma with airway risk, nerve weakness, contour depressions and necrotising fasciitis; the neck lift’s are nerve palsy in 0.2–12% and haematoma in 0.2–4%. And prior non-surgical treatment scars the planes: 94% of such patients needed the deeper operation.',
    bodyHtml: `
      <p>Submental liposuction's complications are rare and serious: the scoping review of published cases lists contour depressions, scar contracture, transient facial-nerve weakness and three cases of necrotising fasciitis, with haematoma and airway compromise the early emergency (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9054168/" rel="noopener nofollow" target="_blank">scoping review</a>). The neck lift's are counted across 8,648 patients: nerve palsy in 0.2–12% of series, haematoma in 0.2–4%, with scars under the chin and behind the ears and months of numbness (<a href="https://www.ovid.com/jnls/annalsplasticsurgery/abstract/10.1097/sap.0000000000004163~current-trends-in-deep-plane-neck-lifting-a-systematic" rel="noopener nofollow" target="_blank">systematic review</a>). The newer caution concerns order: in a series of 180 neck lifts, 68% of patients had prior injections, cold, threads or energy treatments, the surgeons found fibrosis, lost planes and unpredictable fat, 94% needed deep cervicoplasty with subplatysmal work, and nearly all had contour irregularities to manage (<a href="https://academic.oup.com/asj/article/46/4/372/8213640" rel="noopener nofollow" target="_blank">ASJ, 2026</a>). For the neck that the self-check says is loose or deep, "non-invasive first" is not the cautious route; a surgical consultation before the first syringe is.</p>
    `,
  },
  {
    id: 'safety-devices',
    category: 'safety',
    title: 'Energy devices under the chin: fat loss, nerves, burns',
    tldr: 'Focused ultrasound at the wrong depth melts the fat a thin neck cannot spare and can bruise the nerve to the lower lip; radiofrequency burns if energy or cooling is wrong; subdermal plasma carries a regulator’s safety communication on burns and emphysema; the muscle-stimulation device rests on manufacturer data.',
    bodyHtml: `
      <p>Every device that tightens under the chin does it by controlled injury, and the harms follow the physics. Focused ultrasound aimed too deep or too densely dissolves the superficial fat of a thin neck — the hollowed, stringy look that appears months later — and the marginal mandibular nerve runs superficially along the jaw where the passes go, so a temporarily weak lower lip is a recognised event (<a href="https://academic.oup.com/asj/article/45/3/NP86/7900203" rel="noopener nofollow" target="_blank">meta-analysis</a>). Radiofrequency and needle radiofrequency burn if the settings or the cooling are wrong, and the FDA's alert on radiofrequency microneedling burns and scars is recent (<a href="https://www.dermatologytimes.com/view/fda-alerts-clinicians-to-serious-complications-with-radiofrequency-microneedling-devices" rel="noopener nofollow" target="_blank">FDA alert</a>). Subdermal helium plasma has a safety communication on burns and subcutaneous emphysema (<a href="https://www.fda.gov/medical-devices/safety-communications/update-use-renuvionj-plasma-device-certain-aesthetic-procedures-fda-safety-communication" rel="noopener nofollow" target="_blank">FDA safety communication</a>). Ask who holds the handpiece, how many necks a month, and what they do when the neck is thin.</p>
    `,
  },
];

const faq: Section[] = [
  {
    id: 'faq-diet',
    category: 'faq',
    title: 'Will losing weight get rid of my double chin?',
    tldr: 'It shrinks the fat, which follows body-mass index, and does nothing for the laxity, the deep fat, the platysma or the chin — and lost fast, it turns a fat double chin into a loose one. Lose slowly, then reassess with the four tests.',
    bodyHtml: `
      <p>If the pinch test finds a soft pad and the neck skin is firm, weight loss is the free treatment and the pad shrinks with the rest of you, though the neck is often the last place to give it up. If the recline test says slack, weight loss makes the double chin looser, not smaller; if the profile says a short chin, no weight will change the angle; and the deep fat between the digastric muscles is stubborn at every weight. The GLP-1 medicines have shown what fast loss does to an older neck: the fat leaves, the envelope stays. Lose at a pace the skin can follow, keep the weight off, and do the four tests again before deciding what is left.</p>
    `,
  },
  {
    id: 'faq-kybella-vs-coolmini',
    category: 'faq',
    title: 'Injections or fat freezing?',
    tldr: 'The injection has placebo-controlled phase 3 trials, three-year data and more effect per course, at the cost of weeks of swelling and a 4% chance of a temporary crooked smile; freezing is gentler and less studied, with millimetres per cycle and a 1-in-455 risk of the fat growing. Both treat only the fat above the muscle.',
    bodyHtml: `
      <p>Deoxycholic acid is the better-evidenced and the stronger of the two: two placebo-controlled trials of over a thousand people, 66–70% improved against 19–22% on placebo, most within two to four sessions, response held at three years. Its price is one to two weeks of swelling and numbness after every session, a 4% rate of temporary weakness of the nerve to the lower lip, and a course that costs as much as liposuction. Cryolipolysis removes about 2–3 mm of fat per cycle in a meta-analysis of 206 patients, with an easier fortnight and a rare but permanent risk of the fat enlarging instead. For a small pad, either; for a large one, the injection or a morning of liposuction; for any of them, a firm neck and a decent chin first, because neither touches anything but fat.</p>
    `,
  },
  {
    id: 'faq-permanent',
    category: 'faq',
    title: 'Is fat removal under the chin permanent?',
    tldr: 'The cells removed by injection, cold or suction do not come back — 82% of deoxycholic acid responders still held their result at three years — but the cells left behind grow with weight, and the skin, muscle and chin keep aging. Permanent for the fat; not for the neck.',
    bodyHtml: `
      <p>Adults do not make new fat cells in any number, so the cells destroyed by deoxycholic acid, killed by cold or removed by a cannula are gone: in the REFINE follow-up, 82.4% of treated patients still held their response at three years against 65% of placebo patients, and liposuction series report durable contour. What is not permanent is everything else — the remaining fat cells enlarge if weight rises, the deep fat and the glands descend with age, the skin loosens and the platysma slackens — so a neck treated for fat at forty can look full again at fifty-five for reasons that no longer answer to a fat treatment. The four tests, repeated, tell you which problem has returned.</p>
    `,
  },
  {
    id: 'faq-ozempic',
    category: 'faq',
    title: 'I lost weight on a GLP-1 medicine and my neck looks worse. Why?',
    tldr: 'The fat under the chin left faster than the skin could follow, and the envelope that fitted a fuller neck now hangs — the loose-neck type, which fat treatments would worsen. Devices for mild slack, subdermal plasma with liposuction for moderate, a neck lift for more.',
    bodyHtml: `
      <p>Rapid weight loss empties the fat above and below the platysma within months, and skin that has lost recoil with age or sun does not retract to match; clinicians treating GLP-1 patients describe exactly this neck alongside a hollowed midface. The double chin has changed type from fat to slack, and the tests confirm it: the fullness vanishes lying back and hangs looking down. Nothing that removes fat helps now. Mild slack in younger skin retracts over a year and tightens further with focused ultrasound; moderate slack is the territory of subdermal plasma with light liposuction; a neck that hangs is a neck lift, and the sooner the surgeon sees it before anyone injects, the simpler the operation.</p>
    `,
  },
  {
    id: 'faq-exercises',
    category: 'faq',
    title: 'Do chin exercises or "mewing" work?',
    tldr: 'No controlled study shows either reducing a double chin; jaw trainers build chewing muscles that do not touch the fat or skin, and orthodontists find no evidence that tongue posture reshapes an adult jaw. Good posture flatters photographs and changes no tissue.',
    bodyHtml: `
      <p>The fat under the chin is not a muscle, the platysma is a thin sheet that lifts nothing, and the skin does not tighten from movement. The case report that examined jaw-exercise devices found the masticatory muscles they train have no action on submental fat or elasticity, and the American Association of Orthodontists finds no evidence that pressing the tongue to the palate reshapes the jaw once growth has finished. Holding the head up and the chin forward makes any neck look better in a mirror and in a photograph, which is worth knowing for photographs; it is not a treatment, and the clinic that sells one is selling posture.</p>
    `,
  },
  {
    id: 'faq-chin',
    category: 'faq',
    title: 'Could my small chin be the reason?',
    tldr: 'Often. A chin behind the lower lip shortens the line from chin to throat and blunts the angle at any weight; chin filler corrected retrusion in 56% against 28% untreated in a randomised trial, and an implant does it for life. Look at your profile with the head level before buying any fat treatment.',
    bodyHtml: `
      <p>The angle under the chin is geometry: the longer the line from chin to hyoid, the sharper it is, and a chin that sits behind a line dropped from the lower lip shortens that line however lean the neck. This is the double chin that runs in families and appears in the leanest relative, and it is the one most fat clinics never mention because they do not sell the fix. Chin filler — a firm gel on the bone, corrected retrusion in 56% against 28% of untreated controls in a 192-person randomised trial — shows you the profile in an afternoon; a chin implant or a sliding genioplasty makes it permanent, and surgeons pair either with liposuction because the two together sharpen the angle more than either alone. A profile photograph with the head level is the test.</p>
    `,
  },
  {
    id: 'faq-devices-before-surgery',
    category: 'faq',
    title: 'Should I try injections or devices before a neck lift?',
    tldr: 'For a pinchable pad in a firm neck, yes — the injection or the cold may be all you need. For the loose, deep or corded neck, no: the 2026 surgical series found 68% of neck-lift patients had prior treatments and 94% then needed the harder deep operation through scarred planes. Match the order to the type.',
    bodyHtml: `
      <p>"Start with the least invasive option" is right for the double chin the self-check calls fat above the muscle in a firm neck, where the injection or the applicator has placebo-controlled or meta-analysis evidence and may be the whole answer. It is wrong for the neck that reclines away, will not pinch, or cords when you clench, because those necks were always going to need a surgeon and the surgeons now report what the detour costs: in 180 consecutive neck lifts, 68% of patients had prior non-surgical treatment, the tissue planes were fibrosed and the fat unpredictable, 94% needed deep cervicoplasty with subplatysmal work, and nearly all had contour irregularities to correct. A surgical consultation is not a commitment to surgery; it is the opinion that tells you whether the syringe would help or hurt.</p>
    `,
  },
  {
    id: 'faq-timeline',
    category: 'faq',
    title: 'How long until I see something?',
    tldr: 'Injections: swelling for two weeks, judged at 6–8 weeks, a course over 4 months. Cold: 8–12 weeks per cycle. Liposuction: swollen for weeks, final at 3–6 months. Devices: judged at 3 months. Chin filler: at once, settled at two weeks. Neck lift: presentable at three weeks, final at 6–12 months.',
    bodyHtml: `
      <p>Deoxycholic acid swells for one to two weeks after each session and the fat clears over six to eight, so a course of two to four sessions plays out over four months; cryolipolysis is judged at eight to twelve weeks per cycle. Liposuction is swollen for weeks in a compression garment and final at three to six months. Focused ultrasound, radiofrequency and the muscle-stimulation device remodel over three months, which is when the studies measured them. Chin filler shows the profile immediately and settles at two weeks. A neck lift is bruised and tight for two to three weeks, presentable at a month and final at six to twelve as the swelling under the chin clears. Photograph in profile with the head level before anything, and again at the interval the treatment deserves.</p>
    `,
  },
  {
    id: 'faq-cost-ladder',
    category: 'faq',
    title: 'What is the cheapest thing that works, and the most effective?',
    tldr: 'Cheapest with evidence: weight lost slowly, free, for the fat type. Best per euro for a pad in a firm neck: deoxycholic acid, €1,500–3,000 a course, or one liposuction, €2,500–5,000. For the family chin: chin filler, €400–800. For the loose, deep or corded neck: a neck lift, €8,000–18,000, once.',
    bodyHtml: `
      <p>The ladder in euros: weight lost slowly (free, the fat type only) → sunscreen and a retinoid on the neck (€10–30 a month, the skin) → chin filler for the short chin (€400–800, a year or two) → deoxycholic acid injections (€500–900 a session, two to four sessions, placebo-controlled) or cryolipolysis (€600–1,200 a cycle, one to two) → focused ultrasound or radiofrequency for mild slack (€500–1,200) → submental liposuction (€2,500–5,000, once) → subdermal plasma with liposuction (€4,000–8,000) → a chin implant or genioplasty (€3,000–8,000) → a neck lift (€8,000–18,000, a decade). Unlicensed fat dissolvers, chin straps and jaw trainers sit under the ladder; the profile photograph decides which rung is yours.</p>
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
    intro: 'Four things make a double chin — and pinching, reclining, clenching and a profile photograph tell you which of them is yours.',
    sections: concept,
  },
  {
    id: 'context',
    title: 'Which double chin do you have?',
    intro: '',
    sections: context,
  },
  {
    id: 'home',
    title: 'At home: weight, skin and the shelf that does nothing',
    intro: 'The one component diet reaches, the skin habits borrowed from the face, and the exercises and gadgets that change no tissue.',
    sections: home,
  },
  {
    id: 'inj',
    title: 'Injectables',
    intro: 'The one double-chin treatment with placebo-controlled trials, the chin syringe most people are never offered, and the unlicensed copies to avoid.',
    sections: inj,
  },
  {
    id: 'clinic',
    title: 'Cold, suction, devices and surgery',
    intro: 'Everything from a fat-freezing cup to the deep neck lift — graded by the meta-analyses, the series and the 2026 warning about doing devices first.',
    sections: clinic,
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'What the trials, the meta-analyses and the surgeons actually flag — the crooked smile, the fat that grows, and the neck that was always going to need a lift.',
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
  fat: 'Fat',
  skin: 'Skin laxity',
  muscle: 'Muscle',
  structure: 'Chin & frame',
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

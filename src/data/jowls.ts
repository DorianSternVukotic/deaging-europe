/**
 * Jowls guide — single source of truth.
 *
 * Consumed by /jowls (the problem-page sibling of /collagen-5).
 * `bodyHtml` is plain HTML — rendered with `set:html`. Keep external links
 * with rel="noopener nofollow" target="_blank".
 */

export type Evidence = 'strong' | 'moderate' | 'emerging' | 'limited';

/** What's pulling the face down for this person, used to filter treatments. */
export type Cause =
  | 'loose-skin'
  | 'volume-loss'
  | 'submental-fat'
  | 'platysmal-bands'
  | 'bone-loss'
  | 'general';

export const causeLabels: Record<Cause, string> = {
  'loose-skin': 'Loose skin',
  'volume-loss': 'Volume loss',
  'submental-fat': 'Fat under chin',
  'platysmal-bands': 'Neck bands',
  'bone-loss': 'Bone resorption',
  general: 'General',
};

export type SectionCategory =
  | 'concept'
  | 'cause'
  | 'prevent'
  | 'nonsurgical'
  | 'surgical'
  | 'home'
  | 'faq';

export interface Section {
  id: string;
  category: SectionCategory;
  title: string;
  tldr: string;
  evidence?: Evidence;
  /** What kind of jowl-problem this treatment is suited to. */
  cause?: Cause;
  bodyHtml: string;
  /** Optional short note shown under the summary (e.g. "Best for: mild laxity"). */
  note?: string;
  /** Treatments only: typical course length. */
  sessions?: string;
  /** Treatments only: expected downtime. */
  downtime?: string;
  /** Treatments only: rough price range. */
  cost?: string;
}

export interface SectionGroup {
  id: string;
  title: string;
  intro: string;
  sections: Section[];
}

// ---------------------------------------------------------------------------
// TAKEAWAYS
// ---------------------------------------------------------------------------

export const keyTakeaways: string[] = [
  'Jowls are sagging skin and tissue along the jawline. Almost everyone develops some degree of jowling with age.',
  'The cause is rarely one thing — collagen and elastin decline, cheek-fat descends, the jawbone resorbs, and gravity does the rest.',
  'At-home creams improve skin quality but cannot reposition sagging tissue. Daily SPF is the one habit that genuinely slows the process.',
  'For mild to moderate jowls, energy treatments (ultrasound, RF microneedling) and fillers can deliver visible improvement without surgery.',
  'For heavy or advanced sagging, a deep-plane facelift or neck lift remains the only treatment that produces dramatic, lasting results.',
];

// ---------------------------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------------------------

const concept: Section[] = [
  {
    id: 'what-are-jowls',
    category: 'concept',
    title: 'What are jowls?',
    tldr: 'Sagging skin and tissue below the chin or along the jawline — the result of skin, fat, and bone all changing at once.',
    bodyHtml: `
      <p>"Jowls" is the term for sagging skin below the chin or along the jawline. Almost everyone develops some degree of jowling as they age, because skin becomes thinner, weaker and less elastic over time.</p>
      <p>Jowls may be less noticeable in people who naturally have thicker skin, more facial fat, or higher levels of collagen in the lower face. Genetics, sun exposure and lifestyle determine whether they appear early, late, or barely at all.</p>
      <p>Because jowls develop gradually, many people first notice them in photos — especially side profiles. A simple check is to compare a current photo with one from 10 years ago and look for:</p>
      <ul>
        <li>A lower or softer jawline</li>
        <li>More pronounced nasolabial folds (nose to mouth)</li>
        <li>Marionette lines near the corners of the mouth</li>
        <li>Loose skin under the chin or around the lower face</li>
      </ul>
      <p>Jowls can be stubborn. A good face cream may improve skin quality, but significant sagging usually needs more targeted treatment.</p>
    `,
  },
];

const causes: Section[] = [
  {
    id: 'cause-collagen-elastin',
    category: 'cause',
    title: 'Collagen and elastin loss',
    tldr: 'Starting in the late 20s, both proteins decline. The skin becomes less firm and less able to snap back.',
    bodyHtml: `
      <p>Collagen gives skin structure, firmness and plumpness. Elastin helps skin snap back after stretching or movement. From the late 20s onward, production of both slows and existing fibres weaken.</p>
      <p>As cheek skin and the skin around the mouth lose firmness, gravity pulls tissue downward — creating sagging along the jawline and on either side of the mouth and chin.</p>
    `,
  },
  {
    id: 'cause-volume-loss',
    category: 'cause',
    title: 'Facial volume loss and fat redistribution',
    tldr: 'Youthful fat sits high in the cheeks. With age it thins and slides down, removing the support that held the jawline up.',
    bodyHtml: `
      <p>In youth, facial fat is concentrated higher in the cheeks. This "good fat" acts like natural padding and supports the lower face. As we age it thins, descends and shifts downward.</p>
      <p>When cheek volume decreases, the skin above the jawline loses support and slides down — deepening nasolabial folds, marionette lines, and jowls.</p>
      <p>Many people who say they want to "lift" their face are actually noticing that they have lost cheek volume. Restoring volume often improves sagging by giving the skin something to sit on again.</p>
    `,
  },
  {
    id: 'cause-bone',
    category: 'cause',
    title: 'Bone resorption',
    tldr: 'The jawbone and chin shrink with age. Less bony framework means less support for everything above it.',
    bodyHtml: `
      <p>Bone loss is an overlooked driver of jowls. Over time the jawbone and chin naturally shrink or recede, reducing the bony framework that supports skin, muscles and soft tissues.</p>
      <p>When the underlying structure becomes smaller, skin and muscle have less to drape over, and sagging becomes more visible.</p>
    `,
  },
  {
    id: 'cause-genetics',
    category: 'cause',
    title: 'Genetics',
    tldr: 'If your parents have jowls, you may develop them earlier. Some people start in their teens or twenties.',
    bodyHtml: `
      <p>Genetics influences whether you develop jowls, when they appear, and how noticeable they become. People with naturally thin skin or lower collagen and elastin may notice jowls much earlier in life — sometimes as early as the teens or twenties.</p>
    `,
  },
  {
    id: 'cause-sun',
    category: 'cause',
    title: 'Sun exposure',
    tldr: 'UV breaks down collagen directly. It is the single biggest accelerator of facial sagging.',
    bodyHtml: `
      <p>Overexposure to ultraviolet rays damages collagen in the skin. This speeds up skin aging and causes sagging to appear earlier. UVA in particular penetrates deeper into the dermis and contributes to photoaging.</p>
    `,
  },
  {
    id: 'cause-smoking',
    category: 'cause',
    title: 'Smoking',
    tldr: 'Nicotine damages collagen and elastin, and narrows blood vessels feeding the skin.',
    bodyHtml: `
      <p>Nicotine and other chemicals in cigarettes damage collagen and elastin directly. Smoking also narrows blood vessels, reducing circulation and limiting the skin's access to nutrients such as vitamin A.</p>
    `,
  },
  {
    id: 'cause-weight-loss',
    category: 'cause',
    title: 'Major weight loss',
    tldr: 'Skin stretched by weight gain may not fully tighten back after the weight comes off.',
    bodyHtml: `
      <p>Weight gain stretches the skin. If you lose weight, especially a large amount, the stretched skin may not fully tighten again.</p>
      <p>Extreme weight loss can also strip fat from the face — leaving skin looking looser and saggier than before.</p>
    `,
  },
  {
    id: 'cause-tech-neck',
    category: 'cause',
    title: 'Screen posture, or "tech neck"',
    tldr: 'Looking down at a phone for long periods may contribute to loose skin under the chin.',
    bodyHtml: `
      <p>Using a computer or looking down at a phone for long periods may contribute to loose skin around the neck — sometimes called "tech neck." Keeping screens at eye level and taking breaks every hour can help.</p>
    `,
  },
];

const prevention: Section[] = [
  {
    id: 'prevent-sunscreen',
    category: 'prevent',
    title: 'Wear sunscreen daily',
    tldr: 'Broad-spectrum SPF 30+ every morning. The single most effective habit for slowing visible aging.',
    bodyHtml: `
      <p>Apply sunscreen to your face <em>and neck</em> every morning. Daily SPF reduces UV-related collagen damage and is one of the most important habits for preventing further photoaging.</p>
      <p>Look for broad-spectrum SPF 30 or higher (SPF 50 for strong sun exposure), and reapply during the day if you're outdoors. Zinc oxide or titanium dioxide are good options if you have sensitive skin.</p>
    `,
    note: 'Apply to face, under the chin, jawline, neck and décolleté.',
  },
  {
    id: 'prevent-no-smoking',
    category: 'prevent',
    title: "Don't smoke",
    tldr: 'Tobacco chemicals damage collagen and elastin. Quitting slows the process — it does not reverse it.',
    bodyHtml: `
      <p>The chemicals in cigarettes and other tobacco products damage collagen and elastin and can worsen sagging skin. Quitting halts further damage, though it cannot undo what's already happened.</p>
    `,
  },
  {
    id: 'prevent-posture',
    category: 'prevent',
    title: 'Limit screen-related neck strain',
    tldr: 'Keep your head in a natural, comfortable position. Take a 10-minute break every hour.',
    bodyHtml: `
      <p>Try to keep your head in a natural, comfortable position when using your phone or computer. Avoid spending long periods looking downward. Taking a 10-minute break for every hour of computer work may also help reduce strain on the neck area.</p>
    `,
  },
  {
    id: 'prevent-diet',
    category: 'prevent',
    title: 'Balanced diet and hydration',
    tldr: 'Eat well and stay hydrated — this improves skin quality, not skin laxity.',
    bodyHtml: `
      <p>Eating a balanced diet and staying well-hydrated may help skin look healthier and more plump. This will not remove excess skin, but it can improve the appearance and quality of the skin you have.</p>
    `,
  },
  {
    id: 'prevent-antioxidants',
    category: 'prevent',
    title: 'Topical antioxidants',
    tldr: 'Vitamin C and green tea polyphenols may help reduce sun-related collagen damage when paired with SPF.',
    bodyHtml: `
      <p>Topical antioxidants, such as vitamin C and green tea polyphenols, may help reduce sun-related skin damage when used alongside sunscreen. They work best as a prevention layer, not as a treatment for existing sagging.</p>
    `,
  },
  {
    id: 'prevent-exercises',
    category: 'prevent',
    title: 'Do facial exercises help?',
    tldr: 'Probably not for jowls — they target muscle, but jowls are mostly a skin and volume problem.',
    bodyHtml: `
      <p>Facial exercises may improve circulation or temporarily improve the appearance of tone, but they do not directly correct the main causes of jowls: volume loss, skin laxity, collagen loss, elastin loss and gravity.</p>
      <p>Think of it like wearing baggy pants over muscular legs. Squats may strengthen the legs, but the pants still look loose. Similarly, facial exercises may not tighten loose skin enough to visibly lift jowls.</p>
      <p>There's no strong evidence that exercises like chin tucks, neck stretches, or "kissing the sky" prevent or reverse jowls — but they're harmless as part of a broader wellness routine.</p>
    `,
  },
];

const nonsurgical: Section[] = [
  {
    id: 'tx-ultrasound',
    category: 'nonsurgical',
    title: 'Ultrasound skin tightening (Sofwave, Ultherapy)',
    tldr: 'Focused ultrasound heats deeper layers of skin and stimulates collagen. Gradual lift over 3–6 months.',
    evidence: 'strong',
    cause: 'loose-skin',
    note: 'Best for: mild to moderate skin laxity, early jowls.',
    sessions: '1–2 sessions',
    downtime: 'A few hours to a few days',
    cost: '$2,000–4,000 / session',
    bodyHtml: `
      <p>Microfocused ultrasound creates thermal coagulation points at preset depths (often 3.0–4.5 mm) to trigger collagen regeneration. This gradually tightens sagging tissue and improves jawline definition.</p>
      <p>Pooled analyses have shown that many patients experience some improvement in skin laxity or wrinkles between 90 and 360 days after treatment. Results are usually mild to moderate rather than dramatic, with effects lasting 1–2 years.</p>
      <h4>Possible side effects</h4>
      <ul><li>Temporary redness, swelling, bruising</li><li>Occasional numbness</li><li>Discomfort during treatment</li></ul>
    `,
  },
  {
    id: 'tx-rf-microneedling',
    category: 'nonsurgical',
    title: 'Radiofrequency microneedling (Morpheus8, Profound)',
    tldr: 'Microneedles deliver RF heat into the dermis. Tightens existing collagen and stimulates new growth.',
    evidence: 'strong',
    cause: 'loose-skin',
    note: 'Best for: mild to moderate jowls, skin laxity, mild contouring.',
    sessions: '1–3 sessions, 2–4 weeks apart',
    downtime: '3–7 days',
    cost: '$1,500–5,000 / session',
    bodyHtml: `
      <p>Radiofrequency treatments use heat energy to tighten existing collagen and stimulate new collagen growth. Some devices deliver energy through the skin surface; others combine RF with microneedling to reach deeper layers including the SMAS, causing collagen contraction and remodeling.</p>
      <p>Protocols vary by device. Results can continue to develop over months after the final session.</p>
      <h4>Possible side effects</h4>
      <ul><li>Swelling, bruising, redness</li><li>Temporary numbness</li><li>Mild tenderness</li></ul>
    `,
  },
  {
    id: 'tx-thermage',
    category: 'nonsurgical',
    title: 'Thermage (monopolar RF)',
    tldr: 'Surface RF that contracts existing collagen. One-day treatment, minimal recovery.',
    evidence: 'moderate',
    cause: 'loose-skin',
    note: 'Best for: mild laxity, people wanting near-zero downtime.',
    sessions: '1 session, repeatable',
    downtime: 'Minimal',
    cost: '$2,000–3,000',
    bodyHtml: `
      <p>Thermage uses radiofrequency energy from a device called the Thermatip to tighten skin around the neck and chin. It can be repeated periodically to help maintain collagen tightness.</p>
      <p>Recovery time is minimal and treatment can usually be done in one day. Risks are generally low but may include infection, and risks may increase with age.</p>
    `,
  },
  {
    id: 'tx-ha-filler',
    category: 'nonsurgical',
    title: 'Hyaluronic acid fillers',
    tldr: 'Immediate volume to cheeks and jawline. Adds support that lifts the lower face forward.',
    evidence: 'strong',
    cause: 'volume-loss',
    note: 'Best for: mid-face volume loss creating secondary jowling.',
    sessions: 'Single visit, repeated 12–18 months',
    downtime: '1–3 days',
    cost: '$600–1,000 / syringe',
    bodyHtml: `
      <p>As cheek volume decreases, skin and tissue slide downward, deepening nasolabial folds and creating marionette lines and jowls. Adding volume to the cheeks lifts the face forward rather than pulling skin backward (as a surgical facelift would). Fillers may also camouflage hollow areas around the jowls.</p>
      <p>Results are immediate and typically last 12–18 months. Evidence for facial volume restoration is strong, but high-quality trials specifically measuring jowl lifting are more limited — HA fillers are often used as an adjunct to other treatments.</p>
    `,
  },
  {
    id: 'tx-biostimulator',
    category: 'nonsurgical',
    title: 'Collagen-stimulating fillers (Sculptra, Radiesse)',
    tldr: 'PLLA or CaHA stimulate new collagen over months. Subtler than HA but longer-lasting.',
    evidence: 'strong',
    cause: 'volume-loss',
    note: 'Best for: thin skin, collagen loss, mild to moderate jowling.',
    sessions: '3–4 monthly sessions',
    downtime: '1–3 days',
    cost: '$1,000–2,000 / vial, often 2–3 vials',
    bodyHtml: `
      <p>Examples: PLLA (Sculptra) and CaHA (Radiesse). These fillers stimulate new collagen production over time, rather than adding volume directly.</p>
      <p>In one randomized controlled trial of PLLA for cheek and jowl rejuvenation, 3–4 monthly treatments produced a <strong>71.6% responder rate at 12 months</strong>, compared with 26.1% in the no-treatment group. Investigators and patients reported improvements in firmness and jawline definition. Effects may last 2 years or longer.</p>
      <h4>Possible side effects</h4>
      <ul><li>Swelling, bruising, injection-site tenderness</li><li>Rare nodules, especially if incorrectly injected</li><li>Infection risk</li></ul>
      <p>Not suitable if there is active inflammation or infection.</p>
    `,
  },
  {
    id: 'tx-pdo-threads',
    category: 'nonsurgical',
    title: 'PDO thread lifts',
    tldr: 'Dissolvable threads physically lift sagging tissue. Immediate effect, plus a collagen mesh over months.',
    evidence: 'moderate',
    cause: 'loose-skin',
    note: 'Best for: mild to moderate jowls, immediate lift without surgery.',
    sessions: '1 session, 6–10 threads per side',
    downtime: '5–7 days',
    cost: '$1,000–2,500 total',
    bodyHtml: `
      <p>PDO (polydioxanone) threads are dissolvable sutures placed beneath the skin to physically lift sagging tissue. As the body absorbs the threads, it also produces new collagen around them, creating a supportive mesh under the skin.</p>
      <p>Results improve over 3–6 months and typically last 12–18 months, sometimes up to 2 years.</p>
      <p>Evidence includes case series and limited trials. Large multicenter reports describe high rates of aesthetic improvement, but randomized controlled trial data are limited. Threads are <strong>less effective</strong> for very loose, heavy, or advanced sagging.</p>
      <h4>Possible side effects</h4>
      <ul><li>Bruising, mild pain, swelling</li><li>Rare infection</li><li>Palpable threads or irregularity if not well placed</li></ul>
    `,
  },
  {
    id: 'tx-nefertiti',
    category: 'nonsurgical',
    title: 'Botox / Dysport "Nefertiti lift"',
    tldr: 'Relaxes the platysma muscle so upward-pulling muscles can subtly lift the jawline.',
    evidence: 'moderate',
    cause: 'platysmal-bands',
    note: 'Best for: mild jowling with prominent neck bands.',
    sessions: 'Every 3–4 months',
    downtime: 'Minimal',
    cost: '$200–400 / session',
    bodyHtml: `
      <p>The platysma is a thin neck muscle that can form vertical bands with age. These bands pull down on the lower face and contribute to sagging along the jawline. Relaxing them allows upward-pulling facial muscles to create a subtle lift — often called a "Nefertiti lift."</p>
      <p>The effect is subtle and lasts about 3–4 months. Generally avoided during pregnancy or breastfeeding.</p>
      <h4>Possible side effects</h4>
      <ul><li>Temporary neck weakness</li><li>Difficulty swallowing if overdosed</li><li>Bruising, injection-site tenderness</li></ul>
    `,
  },
  {
    id: 'tx-kybella',
    category: 'nonsurgical',
    title: 'Kybella (deoxycholic acid)',
    tldr: 'Injectable that destroys fat cells under the chin. Permanent reduction in submental fat.',
    evidence: 'strong',
    cause: 'submental-fat',
    note: 'Best for: double chin, fullness more than laxity.',
    sessions: '3–6 sessions',
    downtime: 'Swelling 2–3 weeks per session',
    cost: '$1,200–2,500 / session',
    bodyHtml: `
      <p>Kybella uses a synthetic form of deoxycholic acid — a substance the body naturally uses to break down dietary fat. Injected into the submental area, it permanently destroys fat cells. Once gone, those cells can no longer store fat.</p>
      <p>Kybella reduces fat but has minimal effect on loose skin. It may slightly tighten skin in some cases, but it is not primarily a skin-lifting treatment.</p>
      <h4>Possible side effects</h4>
      <ul><li>Swelling, bruising, tenderness</li><li>Rare nerve injury</li></ul>
    `,
  },
  {
    id: 'tx-fat-grafting',
    category: 'nonsurgical',
    title: 'Fat grafting',
    tldr: "Uses your own fat to restore mid-face volume. Often done alongside another procedure.",
    evidence: 'emerging',
    cause: 'volume-loss',
    note: 'Best for: people having other facial procedures simultaneously.',
    sessions: '1 procedure',
    downtime: '1–2 weeks',
    cost: 'Varies — typically $3,000–6,000',
    bodyHtml: `
      <p>Fat grafting harvests your own fat (typically from the abdomen or thighs) and re-injects it into the mid-face. Adding volume to the cheeks may indirectly lift or support jowls.</p>
      <p>The approach is harder to quantify than fillers because graft survival varies. It is often reserved for people having other procedures at the same time.</p>
    `,
  },
  {
    id: 'tx-lasers',
    category: 'nonsurgical',
    title: 'Laser treatments',
    tldr: 'Resurfacing lasers stimulate collagen and improve skin quality. Lifting effect is modest.',
    evidence: 'moderate',
    cause: 'loose-skin',
    note: 'Best for: mild laxity with texture or sun-damage concerns.',
    sessions: 'Varies by device',
    downtime: '3–14 days',
    cost: '$500–3,000 / session',
    bodyHtml: `
      <p>Laser treatments can improve skin quality and stimulate new collagen production. They may help tighten loose skin around the jawline and neck, although the degree of lifting is usually limited compared with surgery.</p>
      <p>Useful for mild skin laxity, texture concerns, sun damage and early sagging — but not for advanced jowls.</p>
    `,
  },
  {
    id: 'tx-fat-freezing',
    category: 'nonsurgical',
    title: 'Fat freezing (CoolSculpting)',
    tldr: 'Cryolipolysis reduces submental fat. No effect on loose skin.',
    evidence: 'moderate',
    cause: 'submental-fat',
    note: 'Best for: fullness rather than laxity under the chin.',
    sessions: '1–2 sessions',
    downtime: 'Minimal',
    cost: '$700–1,500 / session',
    bodyHtml: `
      <p>Fat-freezing treatments such as CoolSculpting may reduce fat cells around the jawline and lower face. This can help if jowls are partly caused by excess fat.</p>
      <p>Fat freezing will not remove loose skin, so it is best suited for people whose main concern is fullness rather than skin laxity.</p>
    `,
  },
  {
    id: 'tx-peels',
    category: 'nonsurgical',
    title: 'Chemical peels',
    tldr: 'Improve skin texture and tone. Not strong enough on their own to correct significant jowls.',
    evidence: 'limited',
    cause: 'loose-skin',
    note: 'Best for: sun damage and texture, as an adjunct.',
    sessions: 'Series of 3–6',
    downtime: '1–10 days depending on depth',
    cost: '$150–800 / session',
    bodyHtml: `
      <p>Chemical peels can improve skin texture and may support collagen remodeling, especially when sun damage is present. However, peels are not usually strong enough to correct significant jowls on their own — they're an adjunct, not a primary treatment.</p>
    `,
  },
];

const surgical: Section[] = [
  {
    id: 'sx-deep-plane',
    category: 'surgical',
    title: 'Deep plane face & neck lift',
    tldr: 'Repositions deeper facial structures rather than just tightening skin. The most comprehensive option.',
    evidence: 'strong',
    cause: 'loose-skin',
    note: 'Best for: moderate to severe jowling, longest-lasting result.',
    sessions: '1 procedure',
    downtime: '2–4 weeks',
    cost: '$15,000–25,000',
    bodyHtml: `
      <p>A deep plane face and neck lift is one of the most comprehensive facelift procedures. Instead of tightening the skin envelope, the surgeon releases ligaments and lifts deeper tissue layers (the SMAS and underlying fat compartments) as a unit.</p>
      <p>This procedure can redefine the structure of the face and create a natural-looking, long-lasting reduction in jowls. Results often last 7–10 years or more.</p>
      <h4>Risks</h4>
      <ul><li>Hematoma</li><li>Nerve injury, estimated around 1–2%</li><li>Scarring, infection, poor healing</li><li>Anesthesia complications</li></ul>
    `,
  },
  {
    id: 'sx-facelift',
    category: 'surgical',
    title: 'Facelift (SMAS rhytidectomy)',
    tldr: 'Removes fat, tightens muscle, and repositions skin on the lower face. Gold standard for advanced sagging.',
    evidence: 'strong',
    cause: 'loose-skin',
    note: 'Best for: moderate to severe jowls and loose lower-face skin.',
    sessions: '1 procedure',
    downtime: '2–4 weeks for swelling, 2–3 months for final result',
    cost: '$8,000–20,000',
    bodyHtml: `
      <p>A facelift removes fat, tightens muscle and rearranges skin on the lower face. It may be combined with a neck lift so the face and neck appear balanced.</p>
      <p>The main goal is a more youthful appearance by repositioning deeper tissues and removing excess skin. Some patients may appear 7–10 years younger while still aging naturally — results typically last 5–10 years.</p>
      <p>Bruising and swelling may last 2–4 weeks. Final results may take 2–3 months. May not be suitable for people with poor overall health or unrealistic expectations.</p>
    `,
  },
  {
    id: 'sx-neck-lift',
    category: 'surgical',
    title: 'Neck lift (lower rhytidectomy)',
    tldr: 'Removes fat, tightens neck muscles, and reshapes the jawline. Often paired with a facelift.',
    evidence: 'strong',
    cause: 'loose-skin',
    note: 'Best for: sagging concentrated under the jaw and on the neck.',
    sessions: '1 procedure',
    downtime: 'Few days to a couple of weeks',
    cost: '~$4,500 average',
    bodyHtml: `
      <p>A neck lift, also called a lower rhytidectomy, removes fat, tightens muscles and rearranges skin around the neck to shape the jawline. Incisions are usually placed in front of and behind the ear and may extend into the hairline.</p>
      <p>General anesthesia is usual. Recovery may take a few days to a couple of weeks. Costs vary by location, surgeon, anesthesia, facility fees and insurance coverage.</p>
      <h4>Risks</h4>
      <ul><li>Bruising, swelling</li><li>Nerve or muscle damage</li><li>Internal bleeding, sepsis</li><li>Anesthesia complications, improper healing, scarring</li></ul>
    `,
  },
  {
    id: 'sx-mini-facelift',
    category: 'surgical',
    title: 'Mini facelift',
    tldr: 'Less invasive than a full facelift. Focused on the lower face for early sagging.',
    evidence: 'moderate',
    cause: 'loose-skin',
    note: 'Best for: people in their 40s–50s with early laxity.',
    sessions: '1 procedure',
    downtime: '1–2 weeks',
    cost: '$5,000–10,000',
    bodyHtml: `
      <p>A mini facelift is less invasive than a full facelift. It focuses mainly on the lower face and neck to reduce sagging skin, lines and wrinkles. It's especially suited for people in their 40s and 50s who are beginning to notice skin laxity.</p>
    `,
  },
  {
    id: 'sx-liposuction',
    category: 'surgical',
    title: 'Submental liposuction',
    tldr: 'Removes fat from under the chin and reshapes the jawline. Best paired with a tightening procedure.',
    evidence: 'moderate',
    cause: 'submental-fat',
    note: 'Best for: jowls driven by excess submental fat with good skin elasticity.',
    sessions: '1 procedure',
    downtime: 'Few days to a couple of weeks',
    cost: '~$3,200',
    bodyHtml: `
      <p>During liposuction the surgeon uses a microcannula to remove fat from the chin area. The surgeon may also reshape the skin and jawline to reduce future sagging. General anesthesia is usual.</p>
      <h4>Risks</h4>
      <ul><li>Bruising, swelling</li><li>Nerve or muscle damage</li><li>Internal bleeding, sepsis</li><li>Anesthesia complications, improper healing</li></ul>
    `,
  },
];

const home: Section[] = [
  {
    id: 'home-sunscreen',
    category: 'home',
    title: 'Daily SPF for face, neck and jawline',
    tldr: 'Prevention, not treatment — but the most evidence-backed step you can take at home.',
    evidence: 'strong',
    note: 'Best for: preventing jowls from worsening.',
    bodyHtml: `
      <p>Sunscreen is the most important at-home cosmetic for jowls because UV exposure drives photoaging, collagen damage, pigmentation and skin laxity. DermNet recommends daily sunscreen when the UV index is 3 or higher, and notes UVA penetrates deeper into the skin and contributes to photoaging.</p>
      <p>Look for broad-spectrum SPF 30+ (SPF 50 if you get strong sun), a texture you'll actually wear daily, and zinc oxide or titanium dioxide if you have sensitive skin. Cover the face, under the chin, jawline, neck and décolleté.</p>
      <p><strong>Limit:</strong> sunscreen will not lift existing jowls. It prevents the collagen breakdown that would make sagging worse.</p>
    `,
  },
  {
    id: 'home-retinol',
    category: 'home',
    title: 'Retinol or retinal neck cream',
    tldr: 'OTC retinoids gradually improve collagen and epidermal thickness. Improves quality, not lift.',
    evidence: 'strong',
    note: 'Best for: fine lines, crepey skin, long-term collagen support.',
    bodyHtml: `
      <p>The American Academy of Dermatology says retinol is one of the better OTC ingredients for aging skin — used for uneven tone, pigmentation, texture, mild fine lines and wrinkles. AAD also recommends starting with a low-strength formula every other night to reduce irritation.</p>
      <p>Look for retinol, retinaldehyde (retinal), or retinyl palmitate for a gentler option. Pair with peptides, ceramides, hyaluronic acid or niacinamide. Use at night, 2–3 times per week to start, with moisturizer on top and SPF every morning.</p>
      <p><strong>Avoid or ask a doctor first if:</strong> you are pregnant, breastfeeding, very sensitive, or have rosacea-prone skin.</p>
      <p><strong>Limit:</strong> retinol improves skin quality but will not reposition sagging tissue or restore lost cheek volume.</p>
    `,
  },
  {
    id: 'home-peptides',
    category: 'home',
    title: 'Peptide neck creams',
    tldr: 'Gentler than retinoids, modestly supportive of firmness and texture.',
    evidence: 'moderate',
    note: 'Best for: sensitive neck skin, retinol-intolerant users.',
    bodyHtml: `
      <p>Peptides are common in neck creams because they're usually gentler than retinoids and support smoother, firmer-looking skin. Look for peptides paired with niacinamide, ceramides, hyaluronic acid, glycerin, shea butter and panthenol.</p>
      <p>Good Housekeeping's Beauty Lab tested neck creams over 12 weeks using high-resolution clinical photography. Their top performer was a No7 face and neck serum with retinyl palmitate and peptides, with testers reporting firmer neck and jawline appearance.</p>
      <p><strong>Limit:</strong> peptides may improve the look of firmness, but they don't physically lift heavy jowls.</p>
    `,
  },
  {
    id: 'home-vitamin-c',
    category: 'home',
    title: 'Vitamin C serum',
    tldr: 'Antioxidant that supports collagen synthesis and protects against photoaging.',
    evidence: 'moderate',
    note: 'Best for: dullness, sun damage, prevention.',
    bodyHtml: `
      <p>Topical vitamin C is an antioxidant. DermNet notes a stable formulation can protect against photoaging and may play a role in collagen and elastic fibre synthesis — but warns many vitamin C formulas are unstable, poorly absorbed, or not rigorously tested.</p>
      <p>Look for L-ascorbic acid, ascorbyl glucoside, or tetrahexyldecyl ascorbate, ideally with vitamin E and ferulic acid for stability. Opaque or airless packaging matters. Apply in the morning before moisturizer and sunscreen.</p>
      <p><strong>Limit:</strong> a skin-quality and prevention product, not a jowl-lifting product.</p>
    `,
  },
  {
    id: 'home-moisturizer',
    category: 'home',
    title: 'Hydrating moisturizers',
    tldr: 'Hyaluronic acid, glycerin and ceramides temporarily plump and smooth the jawline.',
    evidence: 'moderate',
    note: 'Best for: dryness, crepey-looking skin in photos.',
    bodyHtml: `
      <p>Hydrating cosmetics make the lower face and neck look fresher by improving dryness and crepiness. This can make mild sagging look less harsh, especially in photos.</p>
      <p>Look for hyaluronic acid, glycerin, ceramides, squalane, panthenol, shea butter, and cholesterol/fatty acids. Apply morning and night, especially over retinol or peptides.</p>
      <p><strong>Limit:</strong> these ingredients hydrate and smooth — they don't rebuild the deeper support structures that cause jowls.</p>
    `,
  },
  {
    id: 'home-firming-creams',
    category: 'home',
    title: 'Firming neck creams',
    tldr: 'Thicker formulations combining retinol, peptides, antioxidants and ceramides.',
    evidence: 'moderate',
    note: 'Best for: mild neck laxity, fine lines, crepiness.',
    bodyHtml: `
      <p>Neck creams are often thicker and more moisturizing than face creams. Some are formulated with retinol, peptides, antioxidants, niacinamide and ceramides.</p>
      <p>Notable examples (by ingredient class, not endorsement):</p>
      <ul>
        <li><strong>No7 Restore &amp; Renew Face &amp; Neck Multi Action Serum</strong> — retinyl palmitate + peptides. Top-performer in Good Housekeeping's neck cream test.</li>
        <li><strong>RoC Multi Correxion Even Tone + Lift Night Cream</strong> — value pick, lab-measured increases in firmness.</li>
        <li><strong>SkinMedica Neck Correct</strong> — peptide-focused for mature skin and neck bands.</li>
        <li><strong>Alastin Restorative Neck Complex</strong> — peptides, niacinamide and ceramides for sensitive skin.</li>
        <li><strong>Elizabeth Arden Prevage Anti-Aging Neck &amp; Décolleté Firm &amp; Repair</strong> — antioxidants, retinol, HA.</li>
        <li><strong>StriVectin Peptight Tightening Neck Serum Roller</strong> — peptide serum with cooling applicator.</li>
      </ul>
      <p><strong>Limit:</strong> even the best neck creams are for mild laxity, texture and crepiness. Don't expect them to replace fillers, energy treatments, threads or surgery.</p>
    `,
  },
  {
    id: 'home-led',
    category: 'home',
    title: 'LED light masks',
    tldr: 'Red and near-infrared light may support collagen and microcirculation. Effects on laxity are minimal.',
    evidence: 'emerging',
    note: 'Best for: skin tone and microcirculation, not lifting.',
    bodyHtml: `
      <p>Red and near-infrared LED light therapy may support collagen production, microcirculation and skin tone. Some small trials show improvement in skin quality, but effects on laxity are usually minimal.</p>
      <p>Generally safe with no downtime. Typical use is 10–20 minutes daily, depending on the device.</p>
    `,
  },
  {
    id: 'home-microcurrent',
    category: 'home',
    title: 'Microcurrent devices',
    tldr: 'Marketed for lifting and toning. Evidence is limited, effects temporary.',
    evidence: 'limited',
    note: 'Best for: a pre-photo tone boost, not lasting change.',
    bodyHtml: `
      <p>Microcurrent devices such as NuFACE use low-level electrical stimulation and are marketed for temporary lifting or toning. Evidence is limited. These devices may give a temporary improvement in tone but are unlikely to significantly lift jowls.</p>
    `,
  },
  {
    id: 'home-rf',
    category: 'home',
    title: 'Home radiofrequency devices',
    tldr: 'Weaker than professional RF. Sub-$500 units may not heat tissue enough to do anything.',
    evidence: 'limited',
    note: 'Best for: people committed to consistent long-term use.',
    bodyHtml: `
      <p>At-home radiofrequency devices are usually weaker than professional treatments. Devices under about $500 may not heat tissue enough to create meaningful tightening. Evidence is limited, and any effect is usually mild compared with in-office RF.</p>
    `,
  },
  {
    id: 'home-instant-tightening',
    category: 'home',
    title: 'Instant tightening products',
    tldr: 'Film-forming polymers create a short-term tightening illusion. Washes off.',
    evidence: 'limited',
    note: 'Best for: temporary effect before photos or events.',
    bodyHtml: `
      <p>Some cosmetic products contain film-forming ingredients (silicates, polymers) that dry down and create a short-term tightening effect. They form a thin layer on the skin that can make the jawline or neck look slightly tighter for a few hours.</p>
      <p><strong>Limit:</strong> these are camouflage products. They wash off and do not improve the cause of jowls.</p>
    `,
  },
  {
    id: 'home-makeup',
    category: 'home',
    title: 'Makeup contouring',
    tldr: 'Cool-toned contour under the jawline can make jowls visibly less prominent in seconds.',
    evidence: 'strong',
    note: 'Best for: immediate visual improvement.',
    bodyHtml: `
      <p>Makeup is one of the most effective true "cosmetic" options for jowls because it can create the illusion of a sharper jawline. Use a matte cream contour, cool-toned contour stick, or matte bronzer — never shimmer near the jowl area, which makes texture more visible.</p>
      <ol>
        <li>Apply cool-toned contour just under the jawline.</li>
        <li>Blend downward toward the neck, not upward onto the face.</li>
        <li>Add a small amount under the chin if there is fullness.</li>
        <li>Keep the centre of the face and upper jawline brighter.</li>
        <li>Set with a light powder.</li>
      </ol>
      <p><strong>Limit:</strong> makeup doesn't treat sagging — but it can make jowls look less noticeable immediately.</p>
    `,
  },
  {
    id: 'home-massage',
    category: 'home',
    title: 'Facial massage',
    tldr: 'May reduce puffiness short-term. No evidence it prevents or reverses jowls.',
    evidence: 'limited',
    note: 'Best for: morning puffiness, lymphatic drainage.',
    bodyHtml: `
      <p>Facial massage may improve circulation and temporarily reduce puffiness, but there's no high-quality evidence that it prevents or reverses jowls.</p>
    `,
  },
];

const faqs: Section[] = [
  {
    id: 'faq-when-start',
    category: 'faq',
    title: 'When do jowls usually appear?',
    tldr: 'Most often in the 40s–50s, but genetics can bring them earlier — sometimes as early as the 20s.',
    bodyHtml: `
      <p>For most people, jowls become visible in the 40s and 50s, when collagen loss, fat descent and bone resorption compound. People with naturally thin skin or low collagen may notice changes much earlier — sometimes in the teens or twenties.</p>
    `,
  },
  {
    id: 'faq-prevent',
    category: 'faq',
    title: 'Can I prevent jowls completely?',
    tldr: 'No — but you can delay them. Daily SPF and not smoking are the two biggest levers.',
    bodyHtml: `
      <p>You can't fully prevent jowls, especially if genetics and aging are major factors. But daily sunscreen, avoiding smoking, limiting screen-related neck strain, and a balanced diet may meaningfully slow the process.</p>
    `,
  },
  {
    id: 'faq-exercises',
    category: 'faq',
    title: 'Will facial exercises lift my jowls?',
    tldr: 'Unlikely. Jowls are a skin and volume problem, not a muscle problem.',
    bodyHtml: `
      <p>Facial exercises target muscle, but jowls are mostly caused by loose skin, lost volume and gravity. There's no strong evidence exercises prevent or reverse jowls — they're harmless as part of a wider routine but won't replace treatment.</p>
    `,
  },
  {
    id: 'faq-cream-vs-treatment',
    category: 'faq',
    title: 'Can a cream alone fix jowls?',
    tldr: 'No. Creams improve skin quality. They cannot reposition sagging tissue.',
    bodyHtml: `
      <p>A good face cream may improve skin quality and the look of fine lines, but significant sagging usually needs more targeted treatment — fillers, energy devices, threads, or surgery depending on severity.</p>
    `,
  },
  {
    id: 'faq-cheapest',
    category: 'faq',
    title: 'What is the cheapest effective treatment?',
    tldr: 'Daily SPF + a topical retinoid + a good contour. For procedures, Botox starts at ~$200.',
    bodyHtml: `
      <p>The cheapest evidence-backed combination is daily SPF and a nightly retinoid (around $50–150 per tube), supplemented by makeup contouring for immediate visual improvement. Among procedures, a Nefertiti-lift dose of Botox at $200–400 is the lowest-cost in-office option, though its effect is subtle and short-lived.</p>
    `,
  },
  {
    id: 'faq-best-overall',
    category: 'faq',
    title: 'What is the most effective single treatment?',
    tldr: 'For advanced jowls: a deep-plane facelift. For mild–moderate: RF microneedling or biostimulator fillers.',
    bodyHtml: `
      <p>Severity drives the answer. For advanced sagging, a deep-plane facelift remains the gold standard for dramatic, long-lasting results. For mild to moderate jowling, RF microneedling (Morpheus8, Profound) or biostimulator fillers (Sculptra) consistently produce visible improvement with manageable downtime.</p>
    `,
  },
];

// ---------------------------------------------------------------------------
// GROUPS
// ---------------------------------------------------------------------------

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What are jowls?',
    intro: 'Sagging at the jawline is rarely one thing — it is the sum of several layers changing at once.',
    sections: concept,
  },
  {
    id: 'causes',
    title: 'What causes jowls',
    intro: 'Skin, fat, bone and lifestyle each contribute. Knowing which is dominant for you points to the right treatment.',
    sections: causes,
  },
  {
    id: 'prevent',
    title: 'How to slow them down',
    intro: 'You cannot fully prevent jowls. But a handful of habits meaningfully delay them.',
    sections: prevention,
  },
  {
    id: 'nonsurgical',
    title: 'Nonsurgical treatments',
    intro: 'These tighten skin, restore volume, reduce fat, or improve jawline definition — without incisions or general anaesthesia. Results are usually subtler than surgery, and most need maintenance.',
    sections: nonsurgical,
  },
  {
    id: 'surgical',
    title: 'Surgical treatments',
    intro: 'For moderate to severe sagging, surgery is the only option that delivers dramatic, long-lasting results. Bigger lift, bigger downtime, bigger cost.',
    sections: surgical,
  },
  {
    id: 'home',
    title: 'At-home options',
    intro: 'None of these lift sagging tissue. The strongest ones — SPF and retinoids — slow the process and improve skin quality over months.',
    sections: home,
  },
  {
    id: 'faq',
    title: 'Frequently asked',
    intro: '',
    sections: faqs,
  },
];

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

export const allSections = (): Section[] => groups.flatMap((g) => g.sections);

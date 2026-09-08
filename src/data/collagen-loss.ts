/**
 * Collagen loss and loss of firmness guide — single source of truth
 * (problem template).
 *
 * Consumed by /collagen-loss. `bodyHtml` is plain HTML — rendered with
 * `set:html`. Keep external links with rel="noopener nofollow" and
 * target="_blank".
 * Editorial spine: firmness is the dermis — collagen, elastin, water and
 * fibroblasts under tension — and it is lost three ways at once: about 1% a
 * year from the mid-twenties, 1–2% a year on top after menopause, and
 * whatever the sun and cigarettes add. This guide grades treatments on the
 * endpoints that actually measure firmness — collagen on a biopsy, recoil on
 * a cutometer, thickness on ultrasound — rather than on "tightening" claims,
 * which the sagging guide covers, or on wrinkle scores, which the wrinkles
 * guide covers. On those endpoints the honest ranking is: sunscreen keeps
 * what you have; tretinoin, the ablative lasers and (for the right woman)
 * estrogen rebuild measurable collagen; needling, radiofrequency, ultrasound,
 * LED and the biostimulators have biopsy series; oral collagen moves a
 * cutometer a little; and nothing in a jar labelled collagen reaches the
 * dermis at all.
 */

import { type Evidence, countByTier, readingMinutesFor } from './evidence';
export type { Evidence };

export type FocusArea = 'collagen' | 'elasticity' | 'protect' | 'hormones' | 'general';

export type SectionCategory = 'concept' | 'context' | 'home' | 'hormones' | 'clinic' | 'inj' | 'safety' | 'faq';

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
  'Firmness is the dermis: collagen fibres under tension, elastin that recoils, water held by glycosaminoglycans, and fibroblasts stretched between them. Skin collagen falls roughly 1% a year through adult life in 148 biopsied people, another 1–2% a year after menopause tracking years since the last period rather than age, and faster still under sun and cigarette smoke; on the cutometer, biological elasticity of the face falls steadily from the twenties in 96 women.',
  'Only a few things put measurable collagen back. Tretinoin 0.1% for a year raised collagen I formation 80% in biopsies against a 14% fall on vehicle; CO2 laser resurfacing drove procollagen I and III production to 7.5 and 8.9 times baseline for at least six months; and a year of estrogen after menopause increased skin collagen 6.5% in a placebo-controlled trial and 48% in implant-treated versus untreated women — while the two large trials that measured the face found hormone therapy changed neither wrinkles nor rigidity.',
  'The device tier has biopsies but small numbers: six microneedling sessions raised collagen I, III and VII and new collagen in ten people; monopolar radiofrequency did the same in six; focused ultrasound thickened the dermis in eleven; and red light raised ultrasound collagen density in a 136-person randomised trial. Real, modest, and needing repetition.',
  'Oral collagen peptides move a cutometer, not a biopsy: across 26 randomised trials in 1,721 people hydration and elasticity improved significantly, with the reviewers flagging industry bias and heterogeneity; no supplement has ever shown more dermal collagen on a biopsy. Creams labelled collagen or elastin cannot reach the dermis; a retinoid, vitamin C and an alpha-hydroxy acid have the biopsy and ultrasound trials the jar borrows from.',
  'The accelerants are cheap to remove: heavy smokers were 4.7 times more likely to be prematurely wrinkled, sun and smoke together 12 times; each 1 mmol/L of blood glucose added 0.4 years of perceived age in 602 non-diabetics; poor sleepers scored worse on intrinsic aging; and 16 weeks of resistance training thickened the dermis and improved elasticity in 61 sedentary women. Daily sunscreen kept hand-skin aging 24% lower over 4.5 years in 903 adults — the only trial-proven way to keep the collagen you have.',
];

/** The three drivers — rendered as cards at the top of "What's actually happening"; each links to the section that goes deeper. */
export const drivers: { id: string; kind: string; title: string; blurb: string }[] = [
  {
    id: 'type-intrinsic',
    kind: 'Time',
    title: 'Fibroblasts that slacken and make less, from the mid-twenties on',
    blurb: 'Skin collagen falls about 1% a year from early adulthood. Old fibroblasts make a third less procollagen than young ones, and the fragmented matrix around them no longer stretches them, so they make less still — a self-perpetuating loop in which loose collagen begets lazy cells begets looser collagen.',
  },
  {
    id: 'type-photo',
    kind: 'Sun & smoke',
    title: 'Ultraviolet light and cigarettes that chop collagen faster than it is made',
    blurb: 'A single exposure switches on the collagenase enzymes that fragment collagen fibrils; decades of it replace the organised dermis with elastotic debris. Collagen formation is 56% lower in sun-exposed forearm skin than in protected buttock skin of the same people, and heavy smokers are 4.7 times more likely to be prematurely wrinkled.',
  },
  {
    id: 'type-menopause',
    kind: 'Estrogen',
    title: 'The menopausal cliff: 1–2% a year on top, tracking years since the last period',
    blurb: 'Estrogen keeps the dermis thick, hydrated and collagen-rich. After menopause, skin collagen and thickness decline 1–2% a year in step with bone, correlate with years since menopause rather than age, and are 48% higher in women on long-term estrogen than in untreated women of the same age.',
  },
];

export const groups: SectionGroup[] = [
  {
    id: 'basics',
    title: 'What\'s actually happening',
    intro: 'Three processes take firmness away at once — time, sun and smoke, and estrogen — and the same three decide what gives it back.',
    sections: [
      {
        id: 'collagen-biology',
        category: 'concept',
        title: 'What firmness is: collagen under tension, elastin that recoils, water, and the cells that hold it all taut',
        tldr: 'Firm skin is a dermis of type I and III collagen fibres held under mechanical tension by fibroblasts, elastic fibres that snap it back after a stretch, and glycosaminoglycans that hold water between them. Aging loosens every part: collagen fragments, fibroblasts lose their stretch and make less, elastin degrades into useless debris, and water leaves. On a suction probe, the skin stretches as before and returns more slowly and less completely — that lag is what "loss of firmness" measures.',
        bodyHtml: `
          <p>Ninety per cent of the dermis by dry weight is collagen, most of it type I with some type III, laid down as fibrils that fibroblasts grip and pull taut; elastic fibres of elastin and fibrillin give the recoil; hyaluronic acid and the other glycosaminoglycans hold water in the spaces. Firmness is the mechanical result: a probe that sucks the skin up measures how far it stretches and how fast and completely it comes back, and the ratios of recovery to distension — gross elasticity and biological elasticity — are the parameters that correlate best with age in 120 women aged 18 to 65, most strongly on the cheek, forearm and neck (<a href="https://pubmed.ncbi.nlm.nih.gov/21281361/" rel="noopener nofollow" target="_blank">cutometer study, 120 women</a>). What loosens it is a loop. In skin from people over 80 compared with people in their twenties, dermal fibroblasts produce a third less type I procollagen in culture (56 against 82 ng/ml), attach to fewer collagen fibres (58% against 78% of the cell surface) and spread half as far — cells that have lost the mechanical tension that tells them to make matrix (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1606623/" rel="noopener nofollow" target="_blank">decreased collagen production in aged skin</a>). The same fibroblasts express more of the collagen-cutting enzyme MMP-1, and cutting the collagen around young cells makes them slacken, raise their oxidant levels and make more MMP-1 in turn — "a self-perpetuating cycle" in which fragmented collagen begets lazy cells begets more fragmentation (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2631323/" rel="noopener nofollow" target="_blank">collagen fragmentation and MMP-1</a>). Every effective treatment on this page acts on that loop: it removes what cuts collagen (sunscreen, not smoking), makes fibroblasts synthesise (retinoids, vitamin C, estrogen), or wounds the dermis in a controlled way so the repair lays down new fibres under tension (lasers, needles, heat, biostimulators).</p>
        `,
      },
      {
        id: 'how-fast',
        category: 'concept',
        title: 'How fast it goes: 1% a year, 1–2% a year after menopause, and the cutometer\'s curve',
        tldr: 'Forearm biopsies from 148 people aged 15 to 93 show skin collagen falling roughly linearly through adult life, lower in women at every age; after menopause, collagen content and skin thickness fall a further 1–2% a year in step with bone and correlate with years since the last period, not with age; women on long-term estrogen had 48% more collagen than untreated women of the same age. On the cutometer, elasticity of the face falls steadily from 20 to 75 and the face changes more than the arm or back.',
        bodyHtml: `
          <p>The famous "1% a year" is a real measurement: in forearm biopsies from 148 people aged 15 to 93, skin collagen fell roughly linearly through adult life and was lower in women than in men at every age, with skin thickness following it (<a href="https://pubmed.ncbi.nlm.nih.gov/1220811/" rel="noopener nofollow" target="_blank">forearm biopsy study</a>). Menopause adds a second slope. In postmenopausal women, skin collagen content, skin thickness, the metacarpal bone index and forearm bone mineral all declined "between 1–2% per year after the menopause", correlating with years since menopause rather than chronological age and with one another, which led the authors to a single connective-tissue cause for thinning skin and thinning bone (<a href="https://pubmed.ncbi.nlm.nih.gov/3120067/" rel="noopener nofollow" target="_blank">skin collagen, thickness and bone after menopause</a>); in a second series the untreated women\'s collagen declined "in relation to menopausal age but not to chronological age" (<a href="https://pubmed.ncbi.nlm.nih.gov/3978054/" rel="noopener nofollow" target="_blank">long-term effects of the menopause</a>); and in 32 women biopsied at surgery, type I and type III collagen fell after menopause and correlated inversely with years of postmenopause (r = 0.76 and 0.73) (<a href="https://pubmed.ncbi.nlm.nih.gov/10656502/" rel="noopener nofollow" target="_blank">hypoestrogenism and skin collagen</a>). The counterfactual exists: 26 women treated with estrogen and testosterone implants for two to ten years had 48% more skin collagen than 29 untreated women matched for age (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1549492/" rel="noopener nofollow" target="_blank">sex hormones and skin collagen, BMJ 1983</a>). The mechanical curve follows the chemistry: in 96 healthy women aged 20 to 75, the cutometer\'s elasticity parameters fell steadily with age, the face changing more than the upper arm or back, and biological elasticity of the face fell most — enough for the authors to derive a "skin age" from it (<a href="https://pubmed.ncbi.nlm.nih.gov/19159383/" rel="noopener nofollow" target="_blank">cutometer study, 96 women</a>). What sun adds is graded in the next section; what an individual can expect is that the loss is slow and linear until menopause, steps down for five to ten years, and is fastest on the face, which is why the face is where the treatments are measured.</p>
        `,
      },
      {
        id: 'why-hard',
        category: 'concept',
        title: 'Why firmness is the hardest thing to buy back: nothing in a jar reaches the dermis, biopsies are rare, and "tightening" is sold as collagen',
        tldr: 'The dermis sits under a barrier that stops molecules larger than about 500 daltons, and collagen is 300,000 — so no collagen cream adds collagen. The treatments that provably do are graded by biopsy and ultrasound, and there are few such trials because biopsies are unpopular; most of the market is graded by photographs and cutometers, which move with hydration for a day. And a "tightening" claim is a laxity claim, not a collagen claim: the sagging guide grades lifting, this page grades what the dermis is made of.',
        bodyHtml: `
          <p>Three reasons the shelf disappoints. The first is chemistry: the stratum corneum admits small, moderately lipophilic molecules and excludes proteins; a collagen molecule of around 300 kilodaltons, or elastin, or a growth factor, sits on the surface and hydrates it. The molecules that do get through and provably act on fibroblasts are small — retinoic acid, ascorbic acid, glycolic acid, estradiol — which is why they are the ones with biopsy trials below. The second is measurement. A biopsy stained for new collagen, an ultrasound of dermal thickness or a quantitative PCR of procollagen mRNA is the only evidence that collagen has been made; a cutometer reading improves for a day with a moisturiser, and a photograph improves with lighting. The trials with biopsies are small — 29 people for tretinoin (<a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">tretinoin biopsy trial</a>), 28 for the CO2 laser (<a href="https://pubmed.ncbi.nlm.nih.gov/15545540/" rel="noopener nofollow" target="_blank">CO2 laser biochemistry</a>), 41 for hormone therapy (<a href="https://pubmed.ncbi.nlm.nih.gov/10687834/" rel="noopener nofollow" target="_blank">hormone therapy biopsy trial</a>), ten for microneedling (<a href="https://pubmed.ncbi.nlm.nih.gov/26096653/" rel="noopener nofollow" target="_blank">microneedling histology</a>) — because nobody volunteers for punch biopsies, and the 1,721 people in the collagen-supplement meta-analysis were measured by cutometer and corneometer, never by biopsy (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10180699/" rel="noopener nofollow" target="_blank">oral collagen meta-analysis</a>). The third is vocabulary. "Tightening", "lifting" and "firming" are used interchangeably in marketing and measure different things: a device that shrinks and lifts (the <a href="/sagging-skin">sagging guide</a>) may add little collagen, a biostimulator that adds collagen may lift nothing, and a filler that restores volume (the <a href="/facial-volume-loss">volume guide</a>) firms the surface without touching the dermis. This page keeps to one question — does the dermis end up with more, better-organised collagen and more recoil — and grades on that.</p>
        `,
      },
    ],
  },
  {
    id: 'context',
    title: 'Which kind of loss do you have?',
    intro: 'Time, sun, estrogen, sugar and smoke, and a stretched envelope look alike in the mirror and answer to different things. Sort yours before you spend.',
    sections: [
      {
        id: 'type-intrinsic',
        category: 'context',
        title: 'Chronological loss: fine, dry, thin, slow to recoil, worst where the sun never reached',
        tldr: 'Skin that is smooth but thin and lax, with fine parallel lines when pinched, on sun-protected sites like the inner arm and the breast as much as the face, is intrinsic aging: fewer, slacker fibroblasts making a third less collagen inside a fragmented matrix. It answers to the collagen-builders that act on fibroblasts — retinoids, vitamin C, estrogen after menopause — and to the wounding procedures that restart synthesis.',
        focus: 'general',
        bodyHtml: `
          <p>The test is the inner upper arm or the abdomen: skin that no sun has reached and is still thin, crepey and slow to snap back has aged by the clock. Under it, fibroblasts from people over 80 make 56 ng/ml of type I procollagen where young ones make 82, attach to 58% instead of 78% of their surface, and have lost the spread that mechanical tension gives them (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1606623/" rel="noopener nofollow" target="_blank">aged fibroblast study</a>); their MMP-1 is raised and the fragmented collagen around them keeps it raised (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2631323/" rel="noopener nofollow" target="_blank">fragmentation loop</a>). It is slow — 1% a year (<a href="https://pubmed.ncbi.nlm.nih.gov/1220811/" rel="noopener nofollow" target="_blank">biopsy study</a>) — and it responds to the treatments that provoke fibroblasts rather than protect them: retinol raised procollagen I and glycosaminoglycans in the arms of 36 people with a mean age of 87 (<a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">retinol in the very old</a>), vitamin C raised collagen I and III transcription most in the postmenopausal women with the lowest dietary intake (<a href="https://pubmed.ncbi.nlm.nih.gov/11407971/" rel="noopener nofollow" target="_blank">vitamin C mRNA study</a>), and the mechanical treatments — needles, heat, lasers — put tension back by making the dermis rebuild. Poor sleep and low activity belong to this category: good sleepers had lower intrinsic-aging scores than poor sleepers in 60 women (<a href="https://pubmed.ncbi.nlm.nih.gov/25266053/" rel="noopener nofollow" target="_blank">sleep and skin aging</a>), and 16 weeks of training improved elasticity and dermal structure in sedentary middle-aged women (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10290068/" rel="noopener nofollow" target="_blank">exercise trial</a>). The home group grades all of it.</p>
        `,
      },
      {
        id: 'type-photo',
        category: 'context',
        title: 'Photoaged loss: coarse, leathery, yellowed, mottled — collagen chopped faster than it is made',
        tldr: 'Skin that is thick-looking but slack, coarsely creased, sallow, mottled with spots and threaded with capillaries, on the face, neck, chest, forearms and hands and not on the buttock, is photoaging: ultraviolet light switching on the collagenases that fragment collagen and replacing organised fibres with elastotic debris. Collagen formation is 56% lower in exposed forearm than in protected buttock skin of the same people. It answers to sunscreen first, then to tretinoin and the resurfacing lasers, which have the biopsy trials.',
        focus: 'protect',
        bodyHtml: `
          <p>Compare the outer forearm with the buttock: the difference is the sun. In 26 healthy people, collagen I formation was 56% lower in the papillary dermis of photodamaged forearm skin than in sun-protected skin, and the deficit correlated with how bad the photodamage looked (r = −0.58) (<a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">tretinoin and collagen formation, NEJM</a>). The mechanism was mapped in the 1990s: a single dose of ultraviolet light induces the matrix metalloproteinases that degrade collagen within hours, repeated exposure produces a dermis of fragmented collagen and elastotic material, and the imperfect repair accumulates into the "solar scar" that is photoaging (<a href="https://www.nejm.org/doi/full/10.1056/NEJM199711133372003" rel="noopener nofollow" target="_blank">pathophysiology of premature aging by UV, NEJM</a>). Smoke does the same by another route — heavy smokers were 4.7 times more likely to be prematurely wrinkled and sun and smoke together multiplied to 12 times (<a href="https://pubmed.ncbi.nlm.nih.gov/2014944/" rel="noopener nofollow" target="_blank">smoking and wrinkling study</a>). The response is different from intrinsic aging: protection comes first, because the destruction outpaces any builder — daily sunscreen kept hand-skin aging 24% lower over 4.5 years (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Nambour trial</a>) — and then the two treatments with biopsy-proven collagen in photodamaged skin: tretinoin, which restored collagen I formation by 80% (<a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">tretinoin biopsy trial</a>), and CO2 resurfacing, which drove procollagen production to 7.5–8.9 times baseline (<a href="https://pubmed.ncbi.nlm.nih.gov/15545540/" rel="noopener nofollow" target="_blank">CO2 laser biochemistry</a>). The <a href="/sun-damage">sun-damage guide</a> covers the spots, keratoses and cancers that share this skin.</p>
        `,
      },
      {
        id: 'type-menopause',
        category: 'context',
        title: 'Menopausal loss: the face that changed in eighteen months',
        tldr: 'Skin that thinned, dried and lost its bounce within a year or two of the last period — often with the jawline softening and the hands and neck crêping at the same time — is estrogen withdrawal: collagen and thickness falling 1–2% a year on top of the clock, tracking years since menopause. It answers to the same builders as everyone else\'s skin, and to one thing nobody else has: replacing the hormone, which preserves collagen on biopsy but has not been shown to change the face in the two large trials that looked.',
        focus: 'hormones',
        bodyHtml: `
          <p>The timeline is the diagnosis: a change that people describe as sudden, in the two or three years around the last period, when the same routine and the same sun stopped being enough. The biology is in the concept section — 1–2% a year of collagen and thickness, correlated with years since menopause and with bone (<a href="https://pubmed.ncbi.nlm.nih.gov/3120067/" rel="noopener nofollow" target="_blank">Brincat 1987</a>; <a href="https://www.tandfonline.com/doi/full/10.4161/derm.23872" rel="noopener nofollow" target="_blank">estrogens and aging skin review</a>). The evidence for replacing the hormone is split by what was measured: biopsies show more collagen (48% more in long-term implant users; +6.5% at six months in a placebo-controlled trial) and a meta-analysis of 15 studies in 1,589 women shows elasticity, thickness and collagen content improving (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1549492/" rel="noopener nofollow" target="_blank">BMJ 1983</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/10687834/" rel="noopener nofollow" target="_blank">2000 RCT</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/38230593/" rel="noopener nofollow" target="_blank">2023 meta-analysis</a>), while the 485-woman trial that graded the face found no difference in wrinkles, laxity or elasticity after 48 weeks of low-dose therapy (<a href="https://pubmed.ncbi.nlm.nih.gov/18625536/" rel="noopener nofollow" target="_blank">Phillips 2008</a>) and the KEEPS skin study found no effect on wrinkles or rigidity over four years (<a href="https://pubmed.ncbi.nlm.nih.gov/27393520/" rel="noopener nofollow" target="_blank">KEEPS skin study</a>). The hormones group grades both routes; the decision itself belongs to the <a href="/anti-aging-50s">50s guide</a> and a menopause clinician, and the rest of the toolkit — tretinoin at any age, the resurfacing and needling procedures, the boosters — works on menopausal skin exactly as on anyone\'s.</p>
        `,
      },
      {
        id: 'type-glycation',
        category: 'context',
        title: 'The accelerants: sugar, smoke, sleep and a sedentary decade',
        tldr: 'Not a type of skin but a rate: each 1 mmol/L of blood glucose added 0.4 years to perceived age in 602 non-diabetic adults, and diabetics looked 1.6 years older; sugars cross-link collagen into stiff, brittle fibres that resist the enzymes that would replace them; heavy smoking multiplied wrinkling risk 4.7-fold; poor sleepers scored worse on intrinsic aging and repaired their barrier 30% slower; and 16 weeks of resistance training thickened the dermis. Free to change, and the changes show within a year.',
        focus: 'protect',
        bodyHtml: `
          <p>Glycation is the chemistry of a sugar attaching to a collagen fibre and, over years, cross-linking it into an advanced glycation end-product that is stiffer, yellower and resistant to normal turnover; the mechanism is well established and the human dietary trials are thin (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0738081X10000428" rel="noopener nofollow" target="_blank">glycation review</a>). The observational evidence is good: in 602 people from the Leiden Longevity Study, perceived age from facial photographs rose 0.40 years per 1 mmol/L of non-fasting glucose among non-diabetics, from 59.6 years in the lowest glucose stratum to 61.2 in diabetics, after adjustment for age, smoking, body mass and photodamage (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3543736/" rel="noopener nofollow" target="_blank">glucose and perceived age</a>); and in 4,025 American women, a 50 g rise in carbohydrate intake raised the odds of a wrinkled appearance 1.36-fold while higher vitamin C intake lowered them (odds ratio 0.89) (<a href="https://pubmed.ncbi.nlm.nih.gov/17921406/" rel="noopener nofollow" target="_blank">NHANES diet and skin aging</a>). Smoke is the best-documented accelerant: 4.7 times the wrinkling for over 50 pack-years, 12 times with heavy sun on top (<a href="https://pubmed.ncbi.nlm.nih.gov/2014944/" rel="noopener nofollow" target="_blank">smoking study</a>), and the identical-twin comparisons the <a href="/wrinkles">wrinkles guide</a> cites. Sleep: among 60 women, good sleepers had significantly lower intrinsic-aging scores, lower baseline water loss and 30% better barrier recovery after tape-stripping (<a href="https://pubmed.ncbi.nlm.nih.gov/25266053/" rel="noopener nofollow" target="_blank">sleep quality and skin aging</a>). Movement: endurance exercise attenuated age-associated skin changes in humans and mice through a muscle-to-skin signal (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4531076/" rel="noopener nofollow" target="_blank">exercise and skin, Aging Cell</a>), and in 61 sedentary middle-aged Japanese women, 16 weeks of either aerobic or resistance training improved skin elasticity and upper dermal structure, with resistance training also increasing dermal thickness (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10290068/" rel="noopener nofollow" target="_blank">resistance training and skin</a>). None of these is a type you are stuck with; all are graded as a row in the home group.</p>
        `,
      },
      {
        id: 'type-weight',
        category: 'context',
        title: 'The stretched envelope: after weight loss, pregnancy or a GLP-1 medicine',
        tldr: 'Skin that has lost its firmness because what was under it has gone — after large or fast weight loss, after the GLP-1 medicines, after pregnancy — is a volume problem with a dermal problem on top. The dermis was stretched and its elastin damaged, and no collagen-builder re-shrinks an envelope; the sagging guide covers what does, and this page covers the dermal quality that decides how well it recovers.',
        focus: 'general',
        bodyHtml: `
          <p>A dermis stretched for years and then emptied does not return to its former size, and the faster and larger the loss, the less it recovers — the reason the loose face after rapid weight loss has entered the vocabulary. Two things are happening: the volume under the skin has gone, which the <a href="/facial-volume-loss">volume guide</a> treats with fat or filler, and the envelope has lost recoil, which the <a href="/sagging-skin">sagging guide</a> treats with heat, ultrasound, threads or surgery according to how much there is. Where this page helps is the quality of the envelope: younger, unphotodamaged, estrogen-replete, non-smoking dermis with a retinoid on it retracts better than old, sun-damaged, smoked dermis, and the biostimulators and boosters in the injectables group are the tools clinicians use to improve the skin before or alongside a lift. Losing weight slowly, keeping protein and resistance training in the plan so muscle is not lost with the fat, and starting the collagen-builders before the loss rather than after are the practical points; the <a href="/upper-arms">upper-arm guide</a> and the <a href="/neck">neck guide</a> cover the sites where the envelope shows most.</p>
        `,
      },
      {
        id: 'workup',
        category: 'context',
        title: 'The self-check: the pinch, the two sites, the timeline and the photograph',
        tldr: 'Pinch a fold of cheek and of inner upper arm and let go: skin that stands and settles slowly on both has aged by the clock; skin that is worse on the sun-exposed site than the protected one has photoaged; a change that arrived within two years of the last period is menopausal; a change that followed a weight loss is a stretched envelope. Photograph the face in the same light monthly, note smoking, sleep, sugar and activity honestly, and ask a clinic to measure a cutometer baseline before any course — it is the only way to know whether a treatment did anything.',
        focus: 'general',
        bodyHtml: `
          <p>Five minutes. <strong>The pinch:</strong> take a fold of skin on the cheekbone between finger and thumb, hold two seconds, release, and watch it. Young skin is flat before you have looked; thinned skin stands as a ridge and settles over a second or two and shows fine parallel lines as it goes. Repeat on the inner upper arm, where sun has never been. <strong>The two sites:</strong> if the arm is as slack as the face, the loss is chronological and the whole toolkit applies; if the face is much worse than the arm, it is photoaging, and protection comes before any builder. The same comparison of outer against inner forearm is the one the collagen biopsies were built on (<a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">tretinoin biopsy trial</a>). <strong>The timeline:</strong> a change in the two or three years around the last period is the menopausal cliff and puts the hormones group on the table; a change after a weight loss is the stretched envelope. <strong>The accelerants:</strong> write down cigarettes a day, hours of sleep, sugar and refined carbohydrate, and sessions of exercise a week — each has a trial or a cohort behind it in the home group. <strong>The photograph:</strong> face, neck and hands in the same window at the same time of day monthly, because the firmness treatments work over six to twelve months and memory does not. <strong>The measurement:</strong> clinics with a cutometer or a high-frequency ultrasound can record elasticity and dermal thickness before a course; the parameters that track age best are the ratio of elastic recovery to distension and gross elasticity, on the cheek, forearm and neck (<a href="https://pubmed.ncbi.nlm.nih.gov/21281361/" rel="noopener nofollow" target="_blank">cutometer parameter study</a>). A treatment that cannot move those numbers over a year has not built collagen, whatever the photographs say.</p>
        `,
      },
    ],
  },
  {
    id: 'home',
    title: 'At home: protect, then build',
    intro: 'Sunscreen keeps what you have; a retinoid, vitamin C and an acid have the biopsy and ultrasound trials; the supplement shelf moves a cutometer; the jar labelled collagen moves nothing.',
    sections: [
      {
        id: 'home-sunscreen',
        category: 'home',
        title: 'Daily broad-spectrum sunscreen: the only trial-proven way to keep the collagen you have',
        tldr: '903 adults randomised to daily sunscreen showed no detectable increase in skin aging on hand microtopography after 4.5 years — 24% less than discretionary users. The mechanism is the one that fragments collagen: a single UV exposure induces the collagenases within hours. And existing damage improves: 32 people applying SPF 30 daily for a year improved on every photoaging measure. Cheap, daily, and the precondition for every other row.',
        evidence: 'strong',
        focus: 'protect',
        note: 'Best for: every face on this page — the treatment that stops the loss the rest of the page is trying to reverse',
        sessions: 'Every morning, reapplied outdoors, for good',
        downtime: 'None',
        cost: '€10–30 / month',
        bodyHtml: `
          <p>The Nambour trial randomised 1,621 Queensland adults to daily broad-spectrum sunscreen or use at their discretion; among the 903 under 55 assessed for aging by blinded grading of silicone casts of the back of the hand, the daily group "showed no detectable increase in skin aging" after 4.5 years, 24% less than the discretionary group (relative odds 0.76, 95% CI 0.59–0.98), while 30 mg of β-carotene did nothing (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Nambour sunscreen trial</a>). The mechanism it interrupts is the collagen-cutting one: ultraviolet exposure induces matrix metalloproteinases that degrade dermal collagen, and repeated exposure leaves a dermis of fragmented fibres and elastotic debris (<a href="https://www.nejm.org/doi/full/10.1056/NEJM199711133372003" rel="noopener nofollow" target="_blank">UV pathophysiology, NEJM</a>). It also repairs: 32 people applying an SPF 30 to the face daily for a year improved on every photoaging measure from week 12, with texture, clarity and mottled pigmentation 40–52% better at week 52 (<a href="https://pubmed.ncbi.nlm.nih.gov/27749441/" rel="noopener nofollow" target="_blank">one-year sunscreen study</a>) — the skin's own repair catching up once the destruction stops. Strong, on one large randomised trial with a firmness-relevant endpoint and the whole photobiology behind it. The practical points: broad-spectrum, on every exposed site including neck, chest and hands, reapplied when outdoors, and treated as the base layer that makes the builders below worth using — a retinoid on unprotected skin is a collagen factory next to a demolition site. The <a href="/sun-damage">sun-damage guide</a> covers products and the ultraviolet-A that comes through glass.</p>
        `,
      },
      {
        id: 'home-tretinoin',
        category: 'home',
        title: 'Tretinoin (and retinol for the thin-skinned): the topical with biopsy-proven collagen',
        tldr: 'The reference trial: 29 people with photodamaged forearms applied 0.1% tretinoin or vehicle daily for 10–12 months, and immunostaining of biopsies showed collagen I formation up 80% with tretinoin against a 14% fall with vehicle. In 36 people with a mean age of 87, 0.4% retinol three times a week for 24 weeks reduced fine wrinkling (score change −1.64 against −0.08) and raised glycosaminoglycans and procollagen I on biopsy. Slow, cheap, prescription in most of Europe, and the one topical every other row is measured against.',
        evidence: 'strong',
        focus: 'collagen',
        note: 'Best for: everyone whose skin can tolerate it, from the thirties on — the nightly base of any firmness plan, and the maintenance after any procedure',
        sessions: 'Nightly, for years; judged at 6–12 months',
        downtime: 'Dryness, peeling and redness for 2–8 weeks; sun sensitivity',
        cost: '€10–30 / month (prescription); retinol €15–60',
        bodyHtml: `
          <p>The New England Journal trial is the one that made "collagen-building" a measurable claim. Twenty-nine patients with photodamaged skin applied 0.1% tretinoin cream (15) or vehicle (14) daily for 10 to 12 months; biopsies before and after were immunostained for new collagen I in the papillary dermis, and tretinoin "produced an 80 percent increase in collagen I formation, as compared with a 14 percent decrease in collagen formation with the use of vehicle alone" (p = 0.006), partly restoring a formation rate that photodamage had cut by 56% (<a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">restoration of collagen formation by tretinoin</a>). The over-the-counter retinoid has its own biopsy trial in the oldest skin ever studied: 36 residents of senior facilities, mean age 87, had 0.4% retinol or vehicle applied to one arm up to three times a week for 24 weeks; fine wrinkling scores changed −1.64 against −0.08 (p < 0.001), and in the biopsied subgroup retinol significantly increased glycosaminoglycan expression (p = 0.02) and procollagen I immunostaining (p = 0.049) (<a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">retinol in naturally aged skin</a>). Strong: the only topical class with collagen synthesis shown on human biopsy in controlled trials, at both the prescription and the shop strength. The <a href="/wrinkles">wrinkles guide</a> grades the concentrations and the irritation curve; for firmness the points are that the collagen is made over months, not weeks, that the dose that builds it is the dose the skin tolerates nightly, and that the ten-year users in the tretinoin literature are the ones with the thickened dermis. Not in pregnancy; sunscreen every morning; and a fortnight off before any peel or laser.</p>
        `,
      },
      {
        id: 'home-vitamin-c',
        category: 'home',
        title: 'Topical vitamin C: the cofactor, with collagen transcription on biopsy',
        tldr: 'Vitamin C is required by the enzymes that assemble collagen. Applied to one forearm against placebo on the other in postmenopausal women, it raised the mRNA of collagen I and III, their processing enzymes and the collagenase inhibitor TIMP-1 on biopsy — most in the women with the lowest dietary intake. A 5% cream for six months in a double-blind trial increased skin microrelief density, reduced deep furrows and showed elastic-fibre repair on electron microscopy. In 4,025 women, higher dietary vitamin C meant lower odds of a wrinkled appearance (0.89).',
        evidence: 'moderate',
        focus: 'collagen',
        note: 'Best for: the morning layer under sunscreen for anyone using a retinoid at night — the cheapest way to make the fibroblasts\' raw material available',
        sessions: 'Every morning',
        downtime: 'Stinging at 15–20%; none at 5–10%',
        cost: '€20–80 / month',
        bodyHtml: `
          <p>Without ascorbic acid the prolyl and lysyl hydroxylases cannot finish a collagen molecule, which is why scurvy is a collagen disease. The dermal question is whether skin that is not scorbutic makes more with more, and the Liège–Besançon group answered it with biopsies: a vitamin C preparation applied to one forearm and placebo to the other in postmenopausal women raised the mRNA of collagen types I and III "to a similar extent", along with the carboxy- and amino-procollagen proteinases, lysyl oxidase, decorin and the tissue inhibitor of matrix metalloproteinase 1, with no change in the collagenases themselves — and "the stimulating activity of topical vitamin C was most conspicuous in the women with the lowest dietary intake" (<a href="https://pubmed.ncbi.nlm.nih.gov/11407971/" rel="noopener nofollow" target="_blank">vitamin C and collagen mRNA</a>). The clinical trial from the same group randomised photoaged women double-blind to a 5% vitamin C cream or its excipient for six months on the neck and arms: significantly better global scores by dermatologist and by self-assessment, "a highly significant increase in the density of skin microrelief and a decrease of the deep furrows" on silicone replicas, and ultrastructural evidence of elastic-tissue repair on biopsy (<a href="https://pubmed.ncbi.nlm.nih.gov/12823436/" rel="noopener nofollow" target="_blank">5% vitamin C double-blind trial</a>). The dietary side is observational: among 4,025 American women aged 40–74, higher vitamin C intake was associated with lower odds of a wrinkled appearance (0.89) and of senile dryness (0.93) independent of age, sun and smoking (<a href="https://pubmed.ncbi.nlm.nih.gov/17921406/" rel="noopener nofollow" target="_blank">NHANES diet and skin</a>). Moderate: a biopsy-level mechanism and one six-month double-blind trial, both small. The chemistry problem is stability — L-ascorbic acid oxidises in weeks once opened — so 10–15% in airless opaque packaging, replaced when it yellows; the <a href="/wrinkles">wrinkles guide</a> has the formulation detail.</p>
        `,
      },
      {
        id: 'home-aha',
        category: 'home',
        title: 'Alpha-hydroxy acids at strength: 25% increase in skin thickness on the forearm',
        tldr: 'A 25% glycolic, lactic or citric acid lotion on one forearm against placebo on the other for six months increased skin thickness about 25%, with a thicker epidermis and papillary dermis, more acid mucopolysaccharides, better-quality elastic fibres and denser collagen on biopsy, without inflammation. At shop strength, 8% glycolic or lactic acid for 22 weeks improved photodamage by a grade in 76% and 71% against 40% on vehicle. Real dermal change at high concentration; texture at low.',
        evidence: 'moderate',
        focus: 'collagen',
        note: 'Best for: the sun-damaged, rough, thinned forearm, chest and face that cannot tolerate a nightly retinoid, or as its alternate-night partner',
        sessions: 'Nightly or alternate nights; judged at 6 months',
        downtime: 'Stinging; sun sensitivity',
        cost: '€10–40 / month',
        bodyHtml: `
          <p>The biopsy study is the reason the acids belong on this page rather than only in the exfoliant aisle. Patients applied a lotion containing 25% glycolic, lactic or citric acid to one forearm and a placebo lotion to the other for an average of six months, with skin thickness measured throughout: the acids "caused an approximate 25% increase in skin thickness", and biopsies showed a thicker epidermis, a thicker papillary dermis with more acid mucopolysaccharides, "improved quality of elastic fibers, and increased density of collagen", with no inflammation — "significant reversal of epidermal and dermal markers of photoaging" (<a href="https://pubmed.ncbi.nlm.nih.gov/8642081/" rel="noopener nofollow" target="_blank">alpha-hydroxy acid biopsy study</a>). At the strengths sold to consumers the effect is on the surface: 74 women aged 40–70 using 8% glycolic acid, 8% lactic acid or vehicle for 22 weeks improved by at least one photodamage grade in 76%, 71% and 40% respectively (<a href="https://pubmed.ncbi.nlm.nih.gov/8651713/" rel="noopener nofollow" target="_blank">8% acid trial</a>). Moderate: one uncontrolled-by-numbers pilot with excellent endpoints and one randomised trial with clinical ones. For firmness the strength matters — 25% is a prescription or professional concentration and a clinic peel series (the <a href="/chemical-peels">peel guide</a>) is how most people reach it — and the acid shares the retinoid's irritation budget, so the two alternate nights rather than stacking. Sunscreen is non-negotiable on acid-treated skin.</p>
        `,
      },
      {
        id: 'home-niacinamide-peptides',
        category: 'home',
        title: 'Niacinamide, signal peptides and growth-factor serums: elasticity on the cutometer, no biopsy',
        tldr: '5% niacinamide on one side of the face against vehicle on the other for 12 weeks in 50 women improved elasticity on cutometry along with fine lines, blotchiness and sallowness; palmitoyl pentapeptide at 3 ppm reduced wrinkles against its moisturiser base in 93 women; a cosmetic regimen of niacinamide, peptides and retinyl propionate matched 0.02% tretinoin for wrinkles. Pleasant, modest, measured by instruments that move with hydration, and never by biopsy.',
        evidence: 'emerging',
        focus: 'elasticity',
        note: 'Best for: the moisturiser layer for someone already on a retinoid and sunscreen — real small gains, priced as if they were prescriptions',
        sessions: 'Daily',
        downtime: 'None',
        cost: '€10–120 / month',
        bodyHtml: `
          <p>Niacinamide has the best trial of the three: 50 white women with facial photoaging applied 5% niacinamide to half the face and vehicle to the other twice daily for 12 weeks, double-blind and left-right randomised, with significant reductions in fine lines and wrinkles, hyperpigmented spots, red blotchiness and sallowness, and "elasticity (as measured via cutometry) was improved" (<a href="https://pubmed.ncbi.nlm.nih.gov/16029679/" rel="noopener nofollow" target="_blank">niacinamide split-face trial</a>). The signal peptide with data is palmitoyl pentapeptide (pal-KTTKS), designed to stimulate collagen production: 93 women aged 35–55 used a moisturiser with or without 3 ppm of it on opposite sides of the face for 12 weeks, double-blind, with significant improvement in wrinkles and fine lines by image analysis and expert grading (<a href="https://pubmed.ncbi.nlm.nih.gov/18492182/" rel="noopener nofollow" target="_blank">palmitoyl pentapeptide trial</a>) — a wrinkle endpoint, from the manufacturer, with no biopsy to show the collagen the peptide was designed to make. A niacinamide-peptide-retinyl propionate regimen matched 0.02% tretinoin in a randomised comparison, which is a fair statement of the class\'s ceiling (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2841824/" rel="noopener nofollow" target="_blank">regimen versus tretinoin</a>); growth-factor serums have a placebo-controlled 12-week wrinkle trial and a cautious systematic review, covered in the <a href="/wrinkles">wrinkles guide</a> (<a href="https://www.jaad.org/article/S0190-9622(18)31309-4/abstract" rel="noopener nofollow" target="_blank">growth-factor trial</a>). Emerging for firmness: instrument gains in industry trials, no dermal histology, and molecules whose size makes dermal delivery doubtful. Use them in the moisturiser you like; do not let them displace the retinoid.</p>
        `,
      },
      {
        id: 'home-oral-collagen',
        category: 'home',
        title: 'Oral collagen peptides: a cutometer effect in 1,721 people, and no biopsy anywhere',
        tldr: 'Two meta-analyses: 19 randomised double-blind trials in 1,125 people found hydrolysed collagen for around 90 days improved hydration, elasticity and wrinkles against placebo; 26 trials in 1,721 confirmed hydration and elasticity with "several biases" in the trials. In a crossover study of eight men, 15 g of vitamin C-enriched gelatin before exercise doubled a blood marker of collagen synthesis. Small, real instrument gains, mostly industry-funded, measured by cutometer and never by biopsy — the collagen guide has the full ledger.',
        evidence: 'moderate',
        focus: 'elasticity',
        note: 'Best for: the person who has sunscreen and a retinoid in place and wants a few percent more elasticity from a daily habit — 10 g of hydrolysed collagen with vitamin C, judged at three months',
        sessions: 'Daily for 8–12 weeks, then judged',
        downtime: 'None',
        cost: '€20–50 / month',
        bodyHtml: `
          <p>The pooled evidence is larger than for any topical on this page and measured by shallower instruments. The 2021 meta-analysis selected 19 randomised, double-blind, controlled trials of hydrolysed collagen in 1,125 participants aged 20–70 (95% women) and found favourable results against placebo for skin hydration, elasticity and wrinkles, confirmed for hydration and elasticity in subgroup analysis, concluding that "ingestion of hydrolyzed collagen for 90 days is effective" (<a href="https://pubmed.ncbi.nlm.nih.gov/33742704/" rel="noopener nofollow" target="_blank">2021 meta-analysis</a>) — with a published comment on the heterogeneity of the trials it pooled (<a href="https://pubmed.ncbi.nlm.nih.gov/34196407/" rel="noopener nofollow" target="_blank">heterogeneity comment</a>). The 2023 meta-analysis of 26 randomised trials in 1,721 people found hydration and elasticity significantly improved and "identified several biases in the included RCTs", calling for large independent trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10180699/" rel="noopener nofollow" target="_blank">2023 meta-analysis</a>). The mechanism has a human marker: eight men taking 15 g of vitamin C-enriched gelatin an hour before six minutes of rope-skipping, three times a day for three days, doubled the amino-terminal propeptide of collagen I in their blood, and their serum made engineered ligaments lay down more collagen (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5183725/" rel="noopener nofollow" target="_blank">gelatin and collagen synthesis</a>) — synthesis somewhere in the body, not shown to be skin. Moderate: consistent, replicated, small, funded by the companies that sell it, and never a biopsy. The <a href="/collagen">collagen guide</a> grades doses, forms and the joint and bone claims; for firmness the honest expectation is a cutometer change of a few percent at three months, kept only while it is taken, on top of — never instead of — the retinoid and the sunscreen.</p>
        `,
      },
      {
        id: 'home-supplements-other',
        category: 'home',
        title: 'The rest of the supplement shelf: oral hyaluronic acid, silicon, and the vitamins',
        tldr: '120 mg of oral hyaluronic acid for 12 weeks improved wrinkles, stratum corneum water and elasticity against placebo in 40 people and wrinkle volumes in 60; 10 mg of silicon as choline-stabilised orthosilicic acid for 20 weeks reduced forearm roughness where placebo let it rise and improved skin mechanical isotropy in 50 women; dietary vitamin C and linoleic acid tracked better skin in 4,025 women. One small trial each, none with a biopsy.',
        evidence: 'emerging',
        focus: 'elasticity',
        note: 'Best for: the supplement enthusiast who already takes collagen and wants the next marginal row — or nobody, if the budget is finite',
        sessions: 'Daily for 12–20 weeks if tried',
        downtime: 'None',
        cost: '€10–40 / month',
        bodyHtml: `
          <p>Oral hyaluronan has two placebo-controlled trials from the same Japanese manufacturer: 40 healthy Asian adults aged 35–64 taking 120 mg daily for 12 weeks improved significantly on wrinkle assessment, stratum corneum water content, transepidermal water loss and elasticity against placebo, with the differences present from week 8 (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8308347/" rel="noopener nofollow" target="_blank">oral hyaluronan 12-week trial</a>), and 60 people with crow\'s feet had lower wrinkle volumes on replicas than placebo after 8 weeks of the 300 kDa form (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5522662/" rel="noopener nofollow" target="_blank">oral hyaluronan wrinkle study</a>). Silicon has one: 50 women with photodamaged skin randomised to 10 mg of silicon daily as choline-stabilised orthosilicic acid or placebo for 20 weeks; forearm roughness parameters rose 6–11% on placebo and fell 8–19% on silicon, the difference significant for two of three, and shear-wave measurements suggested more isotropic skin mechanics, with nail and hair brittleness scores lower (<a href="https://pubmed.ncbi.nlm.nih.gov/16205932/" rel="noopener nofollow" target="_blank">orthosilicic acid trial</a>). Diet is observational: in 4,025 American women, higher vitamin C intake tracked fewer wrinkles and higher linoleic acid intake less senile dryness and atrophy, while more fat and carbohydrate tracked more of both (<a href="https://pubmed.ncbi.nlm.nih.gov/17921406/" rel="noopener nofollow" target="_blank">NHANES diet study</a>). Emerging: one or two small manufacturer trials per molecule, instrument endpoints, no biopsy, no replication by anyone independent. The <a href="/supplements">supplement guide</a> covers the wider shelf; for firmness the ranking is sunscreen, retinoid, then everything oral in the order collagen, then these, then nothing.</p>
        `,
      },
      {
        id: 'home-lifestyle',
        category: 'home',
        title: 'Not smoking, less sugar, enough sleep, and a resistance-training habit',
        tldr: 'The free row with the largest effect sizes: heavy smoking raised the odds of premature wrinkling 4.7-fold and sun plus smoke 12-fold; every 1 mmol/L of glucose added 0.4 years of perceived age in 602 non-diabetics; poor sleepers had worse intrinsic aging scores and 30% slower barrier repair; and 16 weeks of resistance or aerobic training improved elasticity and dermal structure in 61 sedentary women, with resistance training thickening the dermis. No trial can randomise a cigarette; the direction is not in doubt.',
        evidence: 'moderate',
        focus: 'protect',
        note: 'Best for: everyone, at every age — the four changes that decide how much collagen there is to protect in ten years',
        sessions: 'Daily; results in months to years',
        downtime: 'None',
        cost: 'Free',
        bodyHtml: `
          <p>Smoke is the cleanest case: in 132 adults, after controlling for age, sex and sun, wrinkling rose with pack-years, heavy smokers (over 50 pack-years) were 4.7 times more likely to be prematurely wrinkled, more than 50,000 lifetime hours of sun 3.1 times, and the two together multiplied to a prevalence ratio of 12 (<a href="https://pubmed.ncbi.nlm.nih.gov/2014944/" rel="noopener nofollow" target="_blank">smoking and premature wrinkling</a>); the identical-twin studies in the <a href="/wrinkles">wrinkles guide</a> show the difference on one face against its genetic copy (<a href="https://pubmed.ncbi.nlm.nih.gov/23924651/" rel="noopener nofollow" target="_blank">twin study</a>). Sugar: perceived age rose 0.40 years per 1 mmol/L of non-fasting glucose among 569 non-diabetics and was 1.6 years higher in diabetics, independent of age, smoking, weight and photodamage (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3543736/" rel="noopener nofollow" target="_blank">glucose and perceived age</a>), and glycation cross-links collagen into stiff, turnover-resistant fibres (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0738081X10000428" rel="noopener nofollow" target="_blank">glycation review</a>) — what no one has done is randomise a low-sugar diet and biopsy the skin. Sleep: 60 women sorted by the Pittsburgh index into poor and good sleepers; good sleepers had significantly lower intrinsic aging scores, lower baseline water loss, 30% better barrier recovery at 72 hours and better recovery from UV redness (<a href="https://pubmed.ncbi.nlm.nih.gov/25266053/" rel="noopener nofollow" target="_blank">sleep and skin aging</a>). Movement is the newest and best-designed: 61 healthy sedentary middle-aged Japanese women randomised to 16 weeks of aerobic or resistance training; both improved skin elasticity and upper dermal structure, resistance training also increased dermal thickness, and serum from the trained women switched on extracellular-matrix genes in cultured fibroblasts (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10290068/" rel="noopener nofollow" target="_blank">resistance training and skin</a>), consistent with the muscle-to-skin signalling shown earlier in humans and mice (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4531076/" rel="noopener nofollow" target="_blank">exercise and skin aging</a>). Moderate: cohort and twin evidence for the harms, one randomised trial for the exercise, all pointing the same way. Free, and the only row here whose effect compounds.</p>
        `,
      },
      {
        id: 'home-creams-collagen',
        category: 'home',
        title: 'Creams labelled collagen, elastin, "firming" or "lifting"',
        tldr: 'A collagen molecule is about 300,000 daltons and the skin barrier stops most molecules above 500; collagen and elastin in a cream hydrate the surface and go no deeper. No such cream has a biopsy, an ultrasound or a controlled cutometer trial showing dermal change. The firming a moisturiser gives is real and lasts a day — the water it holds — and the actives that do reach fibroblasts are the ones in the rows above, which the jar borrows its language from.',
        evidence: 'limited',
        focus: 'general',
        note: 'Best for: a pleasant moisturiser, priced as a moisturiser — nothing a €10 urea or glycerol cream does not do',
        sessions: 'Daily, as a moisturiser',
        downtime: 'None',
        cost: '€20–200 per jar',
        bodyHtml: `
          <p>The claim fails at the barrier. The stratum corneum admits small, moderately fat-soluble molecules and excludes proteins; collagen, elastin and the "hydrolysed collagen" in a cream are large, water-soluble and stay on top, where they hold water like any humectant. The trials that show dermal change all used molecules small enough to get in — retinoic acid, ascorbic acid, glycolic acid, estradiol — and the trials of collagen-labelled creams do not exist in the biopsy literature at all. What a good moisturiser does is not nothing: it repairs the barrier, holds water in the epidermis and makes crepey skin look smoother within hours, which is the effect people attribute to the collagen on the label; the <a href="/dry-skin">dry-skin guide</a> covers the chemistry that does it best and cheapest. The oral collagen row above is the one place a collagen product has controlled trials, because swallowed peptides reach the blood; the topical version does not reach the dermis, and a product priced at €150 for the word "collagen" is a moisturiser with a marketing department. Limited. Spend the difference on tretinoin and sunscreen, which together cost less than the jar.</p>
        `,
      },
      {
        id: 'home-devices',
        category: 'home',
        title: 'Home radiofrequency, microcurrent and LED masks',
        tldr: 'Home radiofrequency has manufacturer studies at a fraction of clinic energy and no biopsy; microcurrent moves fluid for an hour; home LED masks have one sham-controlled crow\'s-feet trial and deliver a fraction of the dose of the clinic panels that raised collagen density in a 136-person trial. Cheap per session, unmeasured on the dermis, and not a substitute for the retinoid they are usually sold to replace.',
        evidence: 'limited',
        focus: 'general',
        note: 'Best for: the person who enjoys the ritual and has already bought the sunscreen and the retinoid — a home LED panel at a documented dose is the one worth considering',
        sessions: 'Daily to weekly, as sold',
        downtime: 'None',
        cost: '€100–500 one-off',
        bodyHtml: `
          <p>The clinic evidence for red and near-infrared light is real: 136 volunteers randomised to 30 sessions of polychromatic or red light at about 9 J/cm² or to no treatment showed improved complexion and roughness and "ultrasonographically measured collagen density" against controls with blinded photo grading (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3926176/" rel="noopener nofollow" target="_blank">red-light collagen density trial</a>). The home question is dose: the masks sold for €150–400 deliver a fraction of the irradiance of the panels in that trial, the one sham-controlled home-mask trial measured crow\'s feet rather than collagen (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11835066/" rel="noopener nofollow" target="_blank">sham-controlled mask trial</a>), and the <a href="/red-light-therapy">red-light guide</a> explains how to tell a device that reaches the trial dose from one that does not. Home radiofrequency devices have manufacturer-run studies at energies far below the clinic devices in the clinic group (<a href="https://www.researchgate.net/publication/50393607_Home-use_TriPollar_RF_device_for_facial_skin_tightening_Clinical_study_results" rel="noopener nofollow" target="_blank">manufacturer study</a>), and microcurrent moves oedema for an hour; neither has a dermal endpoint. The <a href="/sagging-skin">sagging guide</a> grades the gadgets for lifting, with the same verdict. Limited for firmness: no biopsy, no ultrasound, no controlled cutometer trial for any home device, and a habit of being bought instead of the €15 retinoid that has all three.</p>
        `,
      },
    ],
  },
  {
    id: 'hormones',
    title: 'Menopause: replacing the hormone',
    intro: 'The one intervention with collagen on biopsy in a placebo-controlled trial — and two large trials that graded the face and found nothing. A decision about menopause that happens to include the skin.',
    sections: [
      {
        id: 'hrt-systemic',
        category: 'hormones',
        title: 'Systemic menopausal hormone therapy: collagen preserved on biopsy, the face unchanged in the large trials',
        tldr: '41 postmenopausal women randomised double-blind to cyclical estradiol or placebo for six months gained 6.49% upper-arm skin collagen on biopsy while placebo did not; 26 long-term implant users had 48% more collagen than 29 untreated women of the same age; a 2023 meta-analysis of 15 studies in 1,589 women found elasticity, thickness and collagen content improved. Against that, 485 women on 48 weeks of low-dose therapy showed no significant change in facial wrinkles, laxity or elasticity, and four years of estrogen in the KEEPS trial changed neither wrinkles nor rigidity. It preserves the dermis; it does not visibly restore a face.',
        evidence: 'moderate',
        focus: 'hormones',
        note: 'Best for: the woman within ten years of menopause who has symptoms, bone or other reasons to consider hormone therapy with a menopause clinician — firmer skin is a documented side benefit, never the indication',
        sessions: 'Daily; reviewed yearly',
        downtime: 'None',
        cost: '€10–40 / month',
        bodyHtml: `
          <p>The biopsy evidence is consistent. Twenty-six women treated with estrogen and testosterone implants for two to ten years had a mean skin collagen content 48% greater than 29 untreated women matched for age (p < 0.01) (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1549492/" rel="noopener nofollow" target="_blank">BMJ 1983</a>); four different replacement regimens all raised skin collagen in proportion to how low it started, "prophylactic in women who have higher skin collagen levels and both prophylactic and therapeutic in women with lower" (<a href="https://pubmed.ncbi.nlm.nih.gov/3601260/" rel="noopener nofollow" target="_blank">regimen study</a>); and in the placebo-controlled trial, 41 postmenopausal women randomised double-blind to cyclical estradiol valerate with cyproterone or placebo for six months, collagen content of the upper arm on biopsy "increased after 6 months of treatment only in the hormonal group (+6.49%)" with no change in elastic fibres or epidermis (<a href="https://pubmed.ncbi.nlm.nih.gov/10687834/" rel="noopener nofollow" target="_blank">2000 placebo-controlled biopsy trial</a>). A 24-woman pilot found hydration, elasticity and thickness improved on transdermal or oral regimens (<a href="https://pubmed.ncbi.nlm.nih.gov/11451620/" rel="noopener nofollow" target="_blank">2001 pilot</a>), a 40-woman double-blind trial found elasticity up at the jaw and thickness increased (<a href="https://pubmed.ncbi.nlm.nih.gov/17653959/" rel="noopener nofollow" target="_blank">2007 RCT</a>), and the 2023 meta-analysis of 15 studies in 1,589 women pooled significant gains in elasticity (standardised mean difference 0.28), thickness (1.27) and collagen content (2.01) (<a href="https://pubmed.ncbi.nlm.nih.gov/38230593/" rel="noopener nofollow" target="_blank">2023 meta-analysis</a>). The face is another matter. In 485 postmenopausal women randomised to 48 weeks of low-dose norethindrone-ethinyl estradiol or placebo, investigator grading of coarse and fine wrinkles, laxity and texture, replica wrinkle depth and timed elasticity all changed slightly in every group with "no statistically significant differences" from placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/18625536/" rel="noopener nofollow" target="_blank">Phillips 2008</a>); and in the KEEPS ancillary study, women within three years of menopause randomised to oral conjugated estrogens, transdermal estradiol or placebo for four years showed no difference in wrinkle or rigidity scores at any point — race, not hormones, predicted the change (<a href="https://pubmed.ncbi.nlm.nih.gov/27393520/" rel="noopener nofollow" target="_blank">KEEPS skin study</a>). Moderate, then, for collagen content; nothing for the mirror. The decision is about hot flushes, sleep, bone and cardiovascular timing, made with the Menopause Society\'s criteria (<a href="https://journals.lww.com/menopausejournal/fulltext/2022/07000/the_2022_hormone_therapy_position_statement_of_the.4.aspx" rel="noopener nofollow" target="_blank">2022 position statement</a>) and the <a href="/anti-aging-50s">50s guide</a>; the skin comes as a bonus, and the safety section says what the bonus does not justify.</p>
        `,
      },
      {
        id: 'hrt-topical',
        category: 'hormones',
        title: 'Topical estrogen on the face: thicker skin on ultrasound in one placebo-controlled trial, no approved product',
        tldr: '54 women aged 52–70 applied a conjugated-estrogen cream or placebo to the face nightly for 24 weeks under SPF 15: skin thickness on ultrasound rose from 1.56 to 1.68 mm against 1.52 to 1.59 with placebo (p = 0.013) and fine wrinkles improved; in an open study, 59 women on 0.01% estradiol or 0.3% estriol cream for six months had "markedly improved" elasticity and firmness with more type III collagen on ten biopsies, and one hormone (prolactin) rose. Promising, small, mostly uncontrolled, questions about absorption unanswered, and compounded off-label in Europe.',
        evidence: 'emerging',
        focus: 'hormones',
        note: 'Best for: a conversation with a menopause specialist for the woman who cannot or will not take systemic therapy — not a clinic-counter purchase',
        sessions: 'Nightly (compounded prescription)',
        downtime: 'None',
        cost: '€40–100 / month',
        bodyHtml: `
          <p>The controlled trial is French and old: 54 women aged 52 to 70 with moderate-to-severe facial aging were randomised double-blind to 1 g of a cream containing 0.625 mg of conjugated estrogens per gram or an identical placebo, applied nightly for 24 weeks with an SPF 15 every morning. Dermal-plus-epidermal thickness on B-scan ultrasound rose from 1.56 ± 0.20 mm to 1.68 ± 0.19 mm with estrogen against 1.52 to 1.59 mm with placebo (p = 0.013), fine wrinkles improved significantly at weeks 12 and 24, and roughness, laxity and pigmentation improved equally in both groups (<a href="https://pubmed.ncbi.nlm.nih.gov/7799828/" rel="noopener nofollow" target="_blank">conjugated-estrogen cream trial</a>). The Vienna study that the compounding pharmacies cite had no placebo: 59 preclimacteric women applied 0.01% estradiol or 0.3% estriol for six months; "elasticity and firmness of the skin had markedly improved", profilometric wrinkle depth fell significantly, and ten biopsies showed increased type III collagen labelling and more collagen fibres, with prolactin the only hormone that rose (<a href="https://pubmed.ncbi.nlm.nih.gov/8876303/" rel="noopener nofollow" target="_blank">topical estradiol and estriol study</a>). The 2025 review in JAAD Reviews concludes the evidence is promising but small, uncontrolled or short, with unresolved questions about systemic absorption and long-term breast and endometrial safety (<a href="https://www.jaadreviews.org/article/S2950-1989(25)00103-5/fulltext" rel="noopener nofollow" target="_blank">2025 review</a>). Emerging: one 54-woman placebo-controlled trial with an objective endpoint, one uncontrolled series with biopsies, and no facial estrogen product approved in the EU or UK — the estriol creams are compounded, off-label prescriptions, a conversation for a menopause specialist rather than a clinic counter, and the <a href="/anti-aging-50s">50s guide</a> covers it in that context.</p>
        `,
      },
    ],
  },
  {
    id: 'clinic',
    title: 'Clinic: heat, needles and light that provoke new collagen',
    intro: 'Controlled wounding of the dermis so the repair lays down new fibres — graded on the biopsies, which exist, and on their size, which is small.',
    sections: [
      {
        id: 'clinic-ablative',
        category: 'clinic',
        title: 'Ablative laser resurfacing (CO2 and erbium, full or fractional): the largest collagen response ever measured',
        tldr: 'In 28 adults aged 48–76 with photodamaged forearms, focal CO2 resurfacing drove type I and III procollagen messenger RNA to 7.5 and 8.9 times baseline by day 21 and kept them elevated for at least six months, through an orderly wound-healing sequence of cytokines, collagenases and new elastin. The most collagen any treatment on this page has produced, at the cost of the most downtime and the most risk; fractional delivery trades some of the effect for most of the safety.',
        evidence: 'strong',
        focus: 'collagen',
        note: 'Best for: the heavily photodamaged, lined, slack face that wants one large rebuild rather than years of small ones — from a laser dermatologist, fractionally, with the skin-type and site limits respected',
        sessions: 'Full ablative: once. Fractional: 1–3 sessions 2–3 months apart',
        downtime: 'Full: 7–14 days raw, pink for months. Fractional: 4–7 days',
        cost: '€1,500–4,000 full; €500–1,200 per fractional session',
        bodyHtml: `
          <p>The Michigan group used the CO2 laser as a probe of what maximal dermal remodelling looks like: 28 adults with photodamaged forearms had focal resurfacing and serial biopsies analysed by quantitative PCR and immunohistochemistry. Type I and type III procollagen messenger RNA "peaked at 7.5 and 8.9 times baseline levels, respectively, 21 days after treatment and remained elevated for at least 6 months", preceded by interleukin-1β, tumour necrosis factor-α and transforming growth factor-β1, accompanied by enormous transient rises in the matrix metalloproteinases that clear the damaged matrix (MMP-1 39,130-fold), and followed weeks later by tropoelastin and fibrillin — "a well-organized and highly reproducible wound healing response that results in marked alterations in dermal structure", offered as the yardstick against which other treatments should be compared (<a href="https://pubmed.ncbi.nlm.nih.gov/15545540/" rel="noopener nofollow" target="_blank">CO2 laser connective-tissue remodelling</a>). That is the strongest collagen evidence on this page and the reason ablative resurfacing sits at the top of the <a href="/wrinkles">wrinkles guide</a> and the <a href="/anti-aging-50s">50s guide</a>. The price is the wound: full-face ablation means a week or two of raw skin, months of redness, a real risk of permanent hypopigmentation and scarring, and a site restriction — the face heals, the neck, chest and hands heal slowly and scar, which the <a href="/aging-hands">hands guide</a> and <a href="/decolletage">décolletage guide</a> explain. Fractional CO2 and erbium devices deliver the same injury in microcolumns with intact skin between, healing in days and repeated two or three times for a fraction of the total effect; the <a href="/laser-ipl">laser guide</a> grades the devices. Strong, for the face, in the right hands, for the person whose photodamage has outrun everything topical.</p>
        `,
      },
      {
        id: 'clinic-nafl',
        category: 'clinic',
        title: 'Non-ablative fractional lasers (1,550, 1,540 and 1,927 nm): microscopic wounds under intact skin, with collagen on biopsy',
        tldr: 'The concept trial: microscopic columns of thermal injury 100 µm wide and 300 µm deep, re-epithelialised within a day; four periorbital treatments in 30 subjects shrank the skin 2.1% and improved the wrinkle score 18% at three months, with new mucin and undulating rete ridges on histology. On the hands, five sessions increased dermal collagen density on biopsy in ten patients and reduced solar elastosis in nine. Real collagen, a few days of redness, several sessions, and less of it than the ablative version.',
        evidence: 'moderate',
        focus: 'collagen',
        note: 'Best for: the moderately photodamaged face, neck, chest or hands that wants measurable rebuilding without a week off — three to five sessions, repeated yearly',
        sessions: '3–5 sessions 3–6 weeks apart; yearly maintenance',
        downtime: '2–4 days of redness and swelling',
        cost: '€300–800 / session',
        bodyHtml: `
          <p>Fractional photothermolysis was introduced in 2004 as "a new concept": a 1.5 µm laser making an array of microscopic treatment zones about 100 µm in diameter and 300 µm deep with untouched skin between them, so that re-epithelialisation "was complete within 1 day". On 15 forearms the histology at three months showed enhanced undulating rete ridges and new mucin in the superficial dermis; in 30 subjects given four periorbital treatments over two to three weeks, linear shrinkage of 2.1% was measured and the wrinkle score improved 18% (p < 0.001) at three months with minimal redness and swelling (<a href="https://pubmed.ncbi.nlm.nih.gov/15216537/" rel="noopener nofollow" target="_blank">fractional photothermolysis concept trial</a>). The collagen endpoint comes from the hand studies, where biopsies were easier to get: ten patients given five 1,550 nm sessions showed "increased density of dermal collagen" alongside 51–75% pigment and 25–50% texture improvement (<a href="https://pubmed.ncbi.nlm.nih.gov/18053047/" rel="noopener nofollow" target="_blank">1,550 nm hand study with biopsies</a>), and nine patients given five to six sessions showed increased collagen density, improved rete ridges, fewer atypical keratinocytes and less solar elastosis at six months (<a href="https://pubmed.ncbi.nlm.nih.gov/19177257/" rel="noopener nofollow" target="_blank">second 1,550 nm histology series</a>). Moderate: biopsy-level evidence in small series, a controlled concept trial, and a mechanism that is the ablative laser\'s at a fraction of the dose — and therefore a fraction of the collagen. It is the version that can be used off the face and in darker skin with care; the <a href="/laser-ipl">laser guide</a> covers the wavelengths (the 1,927 nm thulium for pigment, the 1,550 nm erbium for texture) and the settings.</p>
        `,
      },
      {
        id: 'clinic-microneedling',
        category: 'clinic',
        title: 'Microneedling (collagen induction therapy): six sessions, more collagen I, III and VII on biopsy',
        tldr: 'Ten patients with skin types III–IV had six microneedling sessions two weeks apart, with biopsies at baseline, one and three months: collagen types I, III and VII, newly synthesised collagen and tropoelastin all rose significantly, total elastin fell, and the photographs improved. The cheapest procedure with a histology series, safe in darker skin, and needing repeated courses to hold the gain.',
        evidence: 'moderate',
        focus: 'collagen',
        note: 'Best for: the thin, crepey, moderately lined face or neck in any skin type that wants a documented collagen response for the least money and downtime — courses of three to six, repeated',
        sessions: '3–6 sessions 2–4 weeks apart; repeat yearly',
        downtime: '1–3 days of redness',
        cost: '€150–400 / session',
        bodyHtml: `
          <p>The Egyptian histology series is the reason microneedling has a place among the collagen-builders rather than the exfoliants. Ten patients with Fitzpatrick skin types III and IV and Glogau class II–III wrinkles had six sessions at two-week intervals, with standardised photographs and punch biopsies at baseline and at one and three months, and histometry for epidermal thickness and quantitative immunohistochemistry for collagen types I, III and VII, newly synthesised collagen, total elastin and tropoelastin. Compared with baseline, "collagen types I, III, and VII, as well as newly synthesized collagen, together with tropoelastin showed a statistically significant increase (P < 0.05)", total elastin — the degraded elastotic material of photoaging — significantly decreased, and the clinical photographs improved in parallel; the authors note that "multiple sessions are usually needed to maintain the improvement achieved" (<a href="https://pubmed.ncbi.nlm.nih.gov/26096653/" rel="noopener nofollow" target="_blank">microneedling histology series</a>). The needles make thousands of dermal micro-wounds without removing the epidermis, which is why it heals in a day, carries little pigment risk in darker skin and can be used on the neck, chest and hands where ablative lasers cannot; the <a href="/microneedling">microneedling guide</a> grades it by indication (acne scars strong, general rejuvenation moderate) and covers needle depth, the PRP add-on and the home rollers that reach nothing. Moderate for firmness: one ten-patient biopsy series, consistent clinical trials in the microneedling guide, and a result that fades over a year without repetition. The best value on this page per unit of documented collagen.</p>
        `,
      },
      {
        id: 'clinic-rf-microneedling',
        category: 'clinic',
        title: 'Radiofrequency microneedling: heat delivered by the needle, one large open trial, and a fat-loss caution',
        tldr: 'One temperature-controlled pass through 100 subjects at seven centres: blinded graders identified the after-photograph correctly in 100% of cases, mean improvement was 25.6% on the wrinkle scale and 24.1% on the laxity scale at six months, with the best results at 66.7 °C and a measured volume of denatured collagen. Open-label, manufacturer-run, and with reports of facial fat loss at aggressive settings. More heat than plain needling, more collagen on the manufacturer\'s measurements, and no independent biopsy series to confirm it.',
        evidence: 'emerging',
        focus: 'collagen',
        note: 'Best for: the person choosing between plain needling and a device three times its price — worth it for scars and texture, unproven for firmness beyond plain needling, and never at the highest settings on a thin face',
        sessions: '3 sessions 4–6 weeks apart',
        downtime: '2–5 days of redness and swelling',
        cost: '€400–900 / session',
        bodyHtml: `
          <p>The device adds a radiofrequency pulse to each insulated needle so the dermis is heated to a set temperature at a set depth. The largest trial is open-label: 100 subjects with mild-to-severe face and neck wrinkles and laxity at seven centres had a single pass at 62–78 °C for three to five seconds; five blinded dermatologists and plastic surgeons graded randomised photographs of 53 subjects at three months and 42 at six, identifying the post-treatment image correctly in 100% of scored cases, with mean improvement of 25.6% on the Fitzpatrick wrinkle scale and 24.1% on the laxity scale at six months, a 100% response rate for wrinkles and 95% for laxity, transient redness, swelling and bruising, two temporary pinpoint depressions, and a subgroup analysis tying the best results to a target temperature of 66.7 °C and a measured "volume of denatured collagen" (<a href="https://pubmed.ncbi.nlm.nih.gov/23278964/" rel="noopener nofollow" target="_blank">fractional radiofrequency trial</a>). Emerging for firmness: a large but uncontrolled manufacturer trial with photographic endpoints and no independent histology of the kind plain needling has, and a safety signal — the <a href="/microneedling">microneedling guide</a> cites the 2026 reports of facial fat loss at aggressive settings and a comparison putting the laxity gain at about 37% of a facelift\'s. The <a href="/microneedling">microneedling guide</a> grades it strong for acne scars and moderate for wrinkles and texture; for the specific question of more collagen than plain needling, the answer is not yet measured. The <a href="/sagging-skin">sagging guide</a> covers the tightening claim.</p>
        `,
      },
      {
        id: 'clinic-rf-mono',
        category: 'clinic',
        title: 'Monopolar radiofrequency (Thermage and successors): bulk dermal heating with collagen on biopsy in six people',
        tldr: 'Six patients with skin types III–IV had six monopolar radiofrequency sessions at two-week intervals with biopsies at baseline, three and six months: collagen types I and III and newly synthesised collagen increased significantly at the end of treatment and three months later, total elastin fell, and blinded photographs improved. A 2025 randomised controlled study found long-term tightening with a modern device. Gentle, one or a few sessions, no downtime, and the smallest histology series on the page.',
        evidence: 'moderate',
        focus: 'collagen',
        note: 'Best for: thin, crepey, mildly lax skin — the face, neck, eyelids and body — in someone who wants no downtime and accepts a subtle result; the right depth for the dermis rather than the deeper tissue',
        sessions: '1–2 sessions 3–6 months apart; repeat yearly',
        downtime: 'None to a day of redness',
        cost: '€1,000–2,500 / session',
        bodyHtml: `
          <p>Monopolar radiofrequency passes current through the skin so that resistance heats the dermis uniformly at a controlled depth, denaturing some collagen at once and provoking new synthesis over months. The Philadelphia–Cairo histology study is small and quantitative: six individuals with skin types III–IV and Glogau I–II wrinkles had six sessions at two-week intervals, with biopsies at baseline and at three and six months analysed by computerised histometry and immunohistochemistry; "there was a statistically significant increase in the mean of collagen types I and III, and newly synthesized collagen, while the mean of total elastin was significantly decreased, at the end of treatment and 3 months posttreatment", blinded photographs were scored improved and satisfaction was high, and the authors concede the results "may not be as impressive as those obtained by ablative treatments" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6541915/" rel="noopener nofollow" target="_blank">monopolar radiofrequency histology</a>). The clinical trials are in the <a href="/sagging-skin">sagging guide</a>: a 2025 prospective randomised controlled study found long-term skin tightening with a modern device (<a href="https://pubmed.ncbi.nlm.nih.gov/39957006/" rel="noopener nofollow" target="_blank">2025 RCT</a>) and the original 20-patient study found two treatments improved laxity where one did not (<a href="https://pubmed.ncbi.nlm.nih.gov/15545529/" rel="noopener nofollow" target="_blank">2004 study</a>). Moderate: biopsy-proven collagen in the smallest series here, controlled clinical trials for the tightening endpoint, no downtime, and a result that is subtle and variable — the treatment for thin skin that wants dermal quality rather than a lift. The safety section covers the fat-loss and nerve cautions shared with the energy devices.</p>
        `,
      },
      {
        id: 'clinic-hifu',
        category: 'clinic',
        title: 'Microfocused ultrasound (Ultherapy and successors): coagulation points at depth, a thicker dermis on biopsy in eleven',
        tldr: 'Twenty-two Korean patients had a single intense focused ultrasound treatment and 11 were biopsied before and two months after: "greater dermal collagen with thickening of the dermis and straightening of elastic fibers in the reticular dermis", with 77% reporting much improvement at the nasolabial folds and 73% at the jawline. The randomised trials and meta-analyses in the sagging guide find measurable but modest lifting. One session a year, no downtime, unpredictable, and priced for the lift rather than the collagen.',
        evidence: 'moderate',
        focus: 'collagen',
        note: 'Best for: the mildly to moderately lax lower face and neck in someone who wants a single no-downtime session with a documented dermal response — with the expectation set at "modest" and a fifth of patients seeing little',
        sessions: '1 session; repeat at 12–18 months',
        downtime: 'None; tenderness for days',
        cost: '€1,000–3,000 / session',
        bodyHtml: `
          <p>Focused ultrasound deposits points of thermal coagulation at set depths — the deep dermis and the fibromuscular layer under it — while sparing the surface, and the tissue contracts and rebuilds around them. The histology comes from Seoul: 22 patients with facial laxity had one treatment, blinded clinicians rated photographs improved at the nasolabial folds and jawline in all patients, 77% reported much improvement of the folds and 73% of the jawline, and skin biopsies from 11 patients before and two months after "showed greater dermal collagen with thickening of the dermis and straightening of elastic fibers in the reticular dermis" (<a href="https://pubmed.ncbi.nlm.nih.gov/21806707/" rel="noopener nofollow" target="_blank">focused ultrasound histology study</a>). The clinical evidence is graded in the <a href="/sagging-skin">sagging guide</a>: a randomised trial with 3D imaging found clinically significant tightening in 70% at three months (<a href="https://link.springer.com/article/10.1007/s13555-023-01078-9" rel="noopener nofollow" target="_blank">RCT</a>), meta-analyses find measurable but modest lifting (<a href="https://pubmed.ncbi.nlm.nih.gov/32026164/" rel="noopener nofollow" target="_blank">meta-analysis</a>), and a retrospective series found a fifth improved and a sixth worse. Moderate: an 11-patient biopsy series showing exactly the change this page is about, controlled trials for the lifting endpoint, and a result that varies more between people than any other device here. For the pure firmness question it is an expensive way to buy a dermal response that microneedling produces for a fifth of the price; its argument is the depth, which no needle reaches, and the single session. The safety section covers the nerve and fat cautions.</p>
        `,
      },
      {
        id: 'clinic-led',
        category: 'clinic',
        title: 'Red and near-infrared light at clinic dose: collagen density on ultrasound in a 136-person randomised trial',
        tldr: 'The largest controlled trial with a collagen endpoint on this page: 136 volunteers randomised to 30 sessions of red (611–650 nm) or polychromatic light at about 9 J/cm² twice a week, or no treatment, with blinded photo grading, profilometry and ultrasound collagen density — all significantly improved against controls. A 76-patient sham-controlled split-face trial added biopsies showing more collagen and elastic fibres, elasticity up to 19% and wrinkles down to 36%. No heat, no downtime, and thirty sessions.',
        evidence: 'moderate',
        focus: 'collagen',
        note: 'Best for: the person who wants a documented dermal effect with zero risk and has the time for twice-weekly sessions — or a home panel that actually reaches the trial dose',
        sessions: '2 × weekly for 12–15 weeks (about 30 sessions); maintenance weekly',
        downtime: 'None',
        cost: '€40–90 / clinic session; €300–1,000 for a panel at trial dose',
        bodyHtml: `
          <p>Photobiomodulation is light absorbed by mitochondria rather than by heat, and its skin trials are, unusually, controlled. The German trial randomised 113 of 136 volunteers to twice-weekly sessions with one of two novel large-area light sources — 611–650 nm red or 570–850 nm polychromatic, normalised to about 9 J/cm² in the red band — and kept 23 as untreated controls; after 30 sessions the treated groups "experienced significantly improved skin complexion and skin feeling, profilometrically assessed skin roughness, and ultrasonographically measured collagen density", and blinded evaluation of photographs confirmed the improvement against control, with no advantage for the broader spectrum over red alone (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3926176/" rel="noopener nofollow" target="_blank">red-light collagen density trial</a>). The Korean trial is the one with biopsies: 76 patients with facial wrinkles randomised to 830 nm, 633 nm, both, or a sham light on one side of the face twice a week for four weeks, double-blinded, with three months\' follow-up; wrinkles fell up to 36% and elasticity rose up to 19% on the treated side, histology showed "a marked increase in the amount of collagen and elastic fibers", electron microscopy showed activated fibroblasts, and no adverse effects occurred (<a href="https://pubmed.ncbi.nlm.nih.gov/17566756/" rel="noopener nofollow" target="_blank">sham-controlled LED trial with biopsies</a>). Moderate: two controlled trials with objective dermal endpoints, consistent direction, small samples and industry proximity — "real and modest at proper doses", as the <a href="/red-light-therapy">red-light guide</a> puts it. The dose is the whole question: the trial irradiances are what clinic panels deliver and most masks do not, and the red-light guide has the arithmetic.</p>
        `,
      },
      {
        id: 'clinic-prp',
        category: 'clinic',
        title: 'Platelet-rich plasma injected alone: the one randomised trial found raters could not tell it from saline',
        tldr: 'Nineteen adults had 3 mL of their own platelet-rich plasma injected into one cheek and saline into the other, double-masked: two dermatologists found no difference in fine lines, pigmentation, roughness or sallowness at two weeks, three or six months, while at six months the participants rated the PRP side better for texture and wrinkles. Nominally, not significantly, better than salt water. With microneedling it has more to offer; alone it is an expensive placebo with a good story.',
        evidence: 'emerging',
        focus: 'elasticity',
        note: 'Best for: an add-on to microneedling or laser in a clinic that prepares it properly — not a standalone purchase for firmness',
        sessions: '3 sessions 4 weeks apart',
        downtime: '1–3 days of swelling and bruising',
        cost: '€300–600 / session',
        bodyHtml: `
          <p>The JAMA Dermatology trial is the only randomised, masked comparison of platelet-rich plasma against a control for facial photoaging, and it is sobering: 27 adults enrolled, 19 analysed, each receiving 3 mL of intradermal PRP in one cheek and 3 mL of saline in the other, with two masked dermatologists grading fine lines, mottled pigmentation, roughness and sallowness. The photoaging scores "showed no significant difference between PRP and normal saline" at two weeks, three months or six months on any subscore; at six months the participants, also masked, rated the PRP side significantly more improved for texture (2.00 against 1.21) and wrinkles (1.74 against 1.21); redness, swelling and bruising were near-universal after both; and the authors\' conclusion is that "both participants and raters found PRP to be nominally but not significantly superior to normal saline" (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6583756/" rel="noopener nofollow" target="_blank">PRP versus saline randomised trial</a>). The <a href="/regenerative-aesthetics">regenerative aesthetics guide</a> explains why no two preparations match, grades PRP with microneedling for acne scars and hair, and covers platelet-rich fibrin; the <a href="/sagging-skin">sagging guide</a> reaches the same verdict for laxity. Emerging for firmness: one small negative-to-neutral trial, split-face studies with needling that cannot separate the plasma from the needles, and no biopsy series showing collagen from PRP alone. A vial of your own blood is not dangerous; the €400 is the harm.</p>
        `,
      },
    ],
  },
  {
    id: 'inj',
    title: 'Injectables that stimulate collagen',
    intro: 'Particles and gels placed in the dermis so the body builds collagen around them — graded on the biopsies, the one placebo-controlled trial, and the absence of an eraser.',
    sections: [
      {
        id: 'inj-plla',
        category: 'inj',
        title: 'Poly-L-lactic acid (Sculptra and successors): collagen I on biopsy, and elasticity against saline at a year',
        tldr: '14 people had injectable poly-L-lactic acid and punch biopsies at 3, 6 and 12 months: collagen type I rose significantly at 3 and 6 months with collagen III alongside and no or mild inflammation. The placebo-controlled trial: 40 women randomised double-blind to three sessions of PLLA or saline into both cheeks; at 12 months elasticity and hydration were significantly higher in the PLLA group, with blinded ratings of radiance and smoothness up and pores, pigmentation and redness down, and no treatment-related adverse events. Slow, cumulative, cannot be dissolved, and the stimulator with the most objective data.',
        evidence: 'moderate',
        focus: 'collagen',
        note: 'Best for: the face that has thinned and deflated everywhere and wants a gradual, natural change over a year rather than a filler\'s instant one — from an injector who dilutes, places deep and massages',
        sessions: '2–3 sessions 4–6 weeks apart; repeat at 18–24 months',
        downtime: '2–5 days of swelling and bruising',
        cost: '€400–700 per vial; 1 vial per session',
        bodyHtml: `
          <p>The particle does not fill; it provokes. The histology comes from a 14-subject open study with punch biopsies at 3, 6 and 12 months analysed for collagen types I and III and inflammation: "quantitative and qualitative increases were observed for collagen types I and III at 3 and 6 months and were statistically significant for collagen type I at 3 and 6 months", with no or mild inflammation in every subject after baseline and technical problems clouding the 12-month samples (<a href="https://pubmed.ncbi.nlm.nih.gov/23464798/" rel="noopener nofollow" target="_blank">PLLA human tissue response study</a>). The controlled trial is unusual for the class: 40 healthy women randomised double-blind at multiple centres to three treatments four weeks apart of PLLA or saline into both sides of the face, followed to 12 months after the last with biophysical instruments, live ratings and blinded photograph grading; "at the 12-month follow-up, there was a statistically significant increase of skin elasticity and hydration in PLLA-treated subjects", blinded investigators rated radiance and smoothness up and pigmentation, erythema and pore size down, and no treatment-related adverse events occurred (<a href="https://pubmed.ncbi.nlm.nih.gov/30741790/" rel="noopener nofollow" target="_blank">PLLA versus saline skin-quality trial</a>). The volume trials are in the <a href="/sagging-skin">sagging guide</a> — randomised trials in the lower face lasting up to 25 months (<a href="https://www.jaad.org/article/S0190-9622(09)00962-1/abstract" rel="noopener nofollow" target="_blank">Narins 2010</a>) — and the <a href="/regenerative-aesthetics">regenerative guide</a> covers the class. Moderate: biopsy-proven collagen and a placebo-controlled cutometer result, both small, plus a mechanism that is slow, cumulative and irreversible. The nodule risk lives in technique — dilution, depth, massage — and the safety section explains why the first biostimulator anyone tries should be a small one.</p>
        `,
      },
      {
        id: 'inj-caha-dilute',
        category: 'inj',
        title: 'Diluted calcium hydroxylapatite as a stimulator: collagen I, III and elastin on biopsy, elasticity on the cutometer',
        tldr: 'Twenty subjects with lax neck and décolletage skin had diluted calcium hydroxylapatite at baseline and four months, with peri-auricular biopsies at baseline, four and seven months: collagen I expression up at four months and further at seven, collagen III up at four and still above baseline at seven, elastin and new vessels up at both — correlating with cutometer elasticity and ultrasound dermal thickness. Arm and abdominal series measured elasticity from 72 to 82 units and dermal thickness up 27%. Consistent objective series, no randomised trial, no eraser.',
        evidence: 'emerging',
        focus: 'collagen',
        note: 'Best for: crepey, thinned skin of the neck, chest, arms, abdomen and hands — the biostimulator with the most objective off-face data — after a filler-experienced injector has shown you their own before-and-afters',
        sessions: '2 sessions 4–8 weeks apart; repeat yearly',
        downtime: '2–5 days of swelling and bruising',
        cost: '€400–700 / session',
        bodyHtml: `
          <p>Calcium hydroxylapatite microspheres diluted one-to-two to one-to-six with saline and fanned subdermally provoke collagen and elastin around each sphere rather than filling. The biopsy study is Russian and specific: 20 subjects with laxity of the neck and décolletage received diluted product at baseline and four months, with a small deep deposit behind the ear for biopsy at baseline, four and seven months; immunohistochemistry showed "significant increases in collagen I expression at 4 months (P < 0.05) and 7 months (P < 0.00001)", collagen III up significantly at four months and still above baseline at seven, elastin and angiogenesis significantly up at both points, all correlating with cutometer elasticity and pliability and with ultrasound-measured dermal thickness (<a href="https://pubmed.ncbi.nlm.nih.gov/28095536/" rel="noopener nofollow" target="_blank">diluted CaHA biopsy study</a>). The body series the <a href="/sagging-skin">sagging guide</a> cites measured upper-arm elasticity rising from 72 to 82 cutometer units and abdominal dermal thickness up 27% at three months in ten women each (<a href="https://pubmed.ncbi.nlm.nih.gov/28915285/" rel="noopener nofollow" target="_blank">arm and abdomen series</a>), and a 15-woman split-hand study found both deep and subdermal techniques improved viscoelasticity and ultrasound dermal parameters over 24 weeks (<a href="https://pubmed.ncbi.nlm.nih.gov/32976172/" rel="noopener nofollow" target="_blank">hand study</a>). Emerging: the best objective endpoints of any biostimulator — biopsy, cutometer and ultrasound in the same subjects — in series of ten to twenty with no control group, and a product that cannot be dissolved if it lumps. The <a href="/upper-arms">upper-arm</a>, <a href="/neck">neck</a>, <a href="/decolletage">décolletage</a> and <a href="/aging-hands">hands</a> guides grade it site by site.</p>
        `,
      },
      {
        id: 'inj-pcl',
        category: 'inj',
        title: 'Polycaprolactone (Ellansé): collagen around the particle at 13 months, in two people',
        tldr: 'A polycaprolactone filler has one human histology report: two patients injected intradermally before a planned temple lift, biopsied 13 months later, showed collagen formation around intact PCL particles — matching the rabbit data. The fold trials exist; the firmness evidence is those two biopsies. A long-lasting stimulator with the thinnest dermal-quality data of the class.',
        evidence: 'emerging',
        focus: 'collagen',
        note: 'Best for: the person already choosing a long-duration biostimulator with an injector experienced in it — the durability is the argument, the collagen evidence is two biopsies',
        sessions: '1–2 sessions; repeat at 2–4 years',
        downtime: '2–5 days',
        cost: '€400–800 per syringe',
        bodyHtml: `
          <p>Polycaprolactone microspheres in a carboxymethylcellulose gel are sold on duration — two to four years by the manufacturer\'s grades — and on collagen stimulation like the other particles. The human evidence for the second claim is a pilot in two patients who were injected intradermally and, 13 months later, underwent the temple-lifting surgery they had already planned; histology of the excised tissue "revealed that the PCL-based dermal filler shows collagen formation around the PCL particles", with the particles still in their original state, supporting the earlier rabbit findings (<a href="https://pubmed.ncbi.nlm.nih.gov/25260139/" rel="noopener nofollow" target="_blank">polycaprolactone human histology pilot</a>). That is real neocollagenesis around a foreign body, in two people, without a control, a cutometer or a count — the kind of evidence every particle filler can show, and less than PLLA or diluted calcium hydroxylapatite have. Emerging. The fold and volume trials belong to the <a href="/fillers">filler guide</a>; for the firmness question it ranks below the two stimulators above on data and above them on how long it stays, which cuts both ways when the placement is wrong, since nothing dissolves it. The safety section applies in full.</p>
        `,
      },
      {
        id: 'inj-skinbooster',
        category: 'inj',
        title: 'Hyaluronic acid skin boosters (Restylane Vital, Profhilo and others): elasticity and roughness improve, a biopsy is missing',
        tldr: 'Nineteen women had three monthly sessions of a stabilised hyaluronic acid gel placed mid-dermally in the lower cheeks with elasticity, roughness, dermal thickness and density measured each visit: elasticity and surface roughness improved significantly to 12 weeks after the last session. The saline-controlled hand trial found hydration, elasticity and roughness better than the saline hand at three months and held to twelve; a 100-person split-hand trial agreed. The Profhilo systematic review pooled nine mostly uncontrolled studies in 278 people with improving cutometer parameters. Hydration and a little dermal quality, for six to twelve months, with no histology.',
        evidence: 'moderate',
        focus: 'elasticity',
        note: 'Best for: the dry, crepey, thin-skinned face, neck, chest or hands that wants a measurable surface change without volume — repeated yearly, and never sold as a lift',
        sessions: '2–3 sessions 4 weeks apart; repeat every 6–12 months',
        downtime: '1–3 days of bumps and bruising',
        cost: '€250–450 / session',
        bodyHtml: `
          <p>The booster is a thin, non-lifting hyaluronic acid deposited as droplets through the dermis to hydrate it and, the claim goes, remodel it. The face series measured what this page cares about: 19 women received three treatments four weeks apart of a stabilised non-animal hyaluronic acid gel into the lower cheeks, with elasticity, surface roughness, dermal thickness and density measured at each session and at 4 and 12 weeks after the last; "skin elasticity and surface roughness improved significantly" and satisfaction was high (<a href="https://pubmed.ncbi.nlm.nih.gov/18384619/" rel="noopener nofollow" target="_blank">facial skin booster series</a>). The controlled evidence is on the hands, where a split design is easy: 30 women given three monthly 1 mL sessions into one hand and saline into the other improved on the aesthetic scale in every case at three months, with hydration and elasticity significantly better than both baseline and the saline hand and roughness and waviness better than saline, held to 12 months (<a href="https://pubmed.ncbi.nlm.nih.gov/25738851/" rel="noopener nofollow" target="_blank">skin booster versus saline</a>), and a 100-subject Chinese split-hand trial over 15 months found clinically relevant differences in favour of treatment (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7318129/" rel="noopener nofollow" target="_blank">100-subject split-hand trial</a>). The Profhilo class has a systematic review of nine studies in 278 people showing improving viscoelasticity and elasticity parameters, most of the studies uncontrolled (<a href="https://pubmed.ncbi.nlm.nih.gov/41920062/" rel="noopener nofollow" target="_blank">systematic review</a>), and a 20-person randomised trial in which adding it to toxin gave no clinical or ultrasound advantage at three months (<a href="https://pubmed.ncbi.nlm.nih.gov/42063688/" rel="noopener nofollow" target="_blank">2026 RCT</a>). Moderate: controlled cutometer and corneometer results in 150 people, a consistent face series, no biopsy anywhere, and an effect that is more water than collagen and wears off in six to twelve months. The <a href="/fillers">filler guide</a> and the <a href="/sagging-skin">sagging guide</a> grade the products; the honest use is skin quality on thin, dry sites, priced as such.</p>
        `,
      },
      {
        id: 'inj-pn',
        category: 'inj',
        title: 'Polynucleotides (Rejuran, Plinest, Nucleofill): salmon-DNA fragments with a marketing budget ahead of the biopsies',
        tldr: 'A systematic review of nine low-to-moderate-quality studies in 219 patients reports improved texture and elasticity; a 30-person split-face randomised trial favoured polynucleotides over hyaluronic acid for elasticity; the cutometer trend in one series was not significant. Cell and animal work shows collagen synthesis via adenosine receptors; the human histology series is still to come. Real molecule, thin trials, and a 2024–26 boom.',
        evidence: 'emerging',
        focus: 'elasticity',
        note: 'Best for: the early adopter who wants a skin-quality injectable with plausible biology and accepts that the trials are small and industry-adjacent — never as a substitute for the retinoid or the needle',
        sessions: '3 sessions 2–4 weeks apart; repeat every 6–12 months',
        downtime: '1–3 days of bumps',
        cost: '€250–450 / session',
        bodyHtml: `
          <p>Polydeoxyribonucleotide fragments from salmon sperm, purified and injected as a gel, bind adenosine A2A receptors on fibroblasts and, in cell and animal work, increase collagen synthesis and angiogenesis. The human trials are summarised in the <a href="/regenerative-aesthetics">regenerative aesthetics guide</a> and the <a href="/sagging-skin">sagging guide</a>: a systematic review found nine studies totalling 219 patients, of low to moderate quality, reporting improved texture and elasticity (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11845969/" rel="noopener nofollow" target="_blank">systematic review</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/39645667/" rel="noopener nofollow" target="_blank">review</a>), and a 30-person split-face randomised trial favoured polynucleotides over hyaluronic acid for elasticity. Emerging: plausible biology, no placebo-controlled trial with a dermal endpoint, no human biopsy series of the kind PLLA and diluted calcium hydroxylapatite have, and a product boom that has outrun the literature by several years. For the firmness question it sits with the skin boosters — a surface-quality injectable, repeated, priced per session — and behind them on controlled data.</p>
        `,
      },
      {
        id: 'inj-exosomes',
        category: 'inj',
        title: 'Exosomes and "stem-cell" injectables',
        tldr: 'No approved exosome product exists for injection anywhere; the FDA issued a public safety notification after patients were harmed by unapproved exosome treatments; a 2024 review of the aesthetic literature found "a pervasive shortfall in methodological rigour" and no controlled injectable trials. Topical exosomes after procedures have small series. For firmness: nothing measured, and a regulator\'s warning.',
        evidence: 'limited',
        focus: 'general',
        note: 'Best for: no one, until a controlled trial with a dermal endpoint and an approved product exist',
        sessions: 'As sold, usually 3',
        downtime: '1–3 days',
        cost: '€300–800 / session',
        bodyHtml: `
          <p>Exosomes are extracellular vesicles shed by cells, sold in aesthetics as concentrated growth-factor messengers from stem-cell cultures, plants or platelets. The regulatory position is unambiguous: the FDA\'s public safety notification warns that there are no approved exosome products, that clinics offering them are marketing unapproved products, and that patients have suffered serious adverse events including sepsis after unapproved exosome injections (<a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">FDA exosome safety notification</a>). The scientific position is thinner still: a 2024 review of exosomes in aesthetic medicine found "a pervasive shortfall in methodological rigour" across the published studies, with no controlled injectable trials (<a href="https://link.springer.com/article/10.1007/s00266-024-04276-8" rel="noopener nofollow" target="_blank">2024 review</a>). "Stem-cell" creams contain no stem cells and lean on conditioned-medium studies, as the <a href="/wrinkles">wrinkles guide</a> notes, and the <a href="/regenerative-aesthetics">regenerative aesthetics guide</a> explains where the legal line falls in Europe. Limited for firmness: no biopsy, no cutometer trial, no product, and a warning. The plausible future use — topical exosomes after a fractional laser to speed healing — has small series and is not a firmness treatment.</p>
        `,
      },
      {
        id: 'inj-banking',
        category: 'inj',
        title: '"Collagen banking": biostimulators in your twenties and thirties as prevention',
        tldr: 'The pitch is that injecting a stimulator before the loss builds a reserve. No trial has tested a biostimulator in people without aging signs, none has followed anyone for the decades the claim covers, the placebo-controlled PLLA trial enrolled women who already had aging skin, and the stimulators cannot be removed if the face changes shape around them. The prevention with trials is sunscreen, not smoking and a retinoid; the "bank" is a marketing metaphor with a syringe attached.',
        evidence: 'limited',
        focus: 'general',
        note: 'Best for: nobody under 40 with a normal face — the 30s guide covers what prevention with evidence actually looks like',
        sessions: 'As sold',
        downtime: '2–5 days',
        cost: '€400–800 / session',
        bodyHtml: `
          <p>The metaphor borrows from bone, where peak mass in youth genuinely protects later — and the <a href="/anti-aging-30s">30s guide</a> covers the real version, which is calcium, vitamin D and loading. Skin has no equivalent trial. The biostimulator studies enrolled people with visible aging: the placebo-controlled PLLA trial recruited women with aging signs and measured them at 12 months (<a href="https://pubmed.ncbi.nlm.nih.gov/30741790/" rel="noopener nofollow" target="_blank">PLLA trial</a>), the calcium hydroxylapatite biopsies came from people with lax necks (<a href="https://pubmed.ncbi.nlm.nih.gov/28095536/" rel="noopener nofollow" target="_blank">CaHA biopsy study</a>), and no study has injected a stimulator into a 28-year-old and biopsied her at 48. What is known about early injectables is not reassuring: the <a href="/anti-aging-30s">30s guide</a> notes that "prejuvenation" rests on a single twin case report for toxin and on nothing for filler, with imaging showing filler persisting for up to 15 years and swelling to several times its volume. A stimulator placed in a face that will lose fat and bone over the next two decades cannot be moved when the anatomy under it changes. Limited: no evidence, a plausible-sounding story, and an irreversible product. The prevention that has randomised trials is daily sunscreen (24% less measured aging in 4.5 years) and a nightly retinoid (80% more collagen formation in a year), plus not smoking; anyone selling a "bank" should be asked which trial it is in.</p>
        `,
      },
    ],
  },
  {
    id: 'safety',
    title: 'Safety',
    intro: 'The hormone decision, the stimulators that cannot be removed, the devices that melt fat, the actives that burn, and how to read a "clinically proven" claim.',
    sections: [
      {
        id: 'safety-hrt',
        category: 'safety',
        title: 'Hormone therapy: the risks are about menopause, not skin — and the skin is not a reason',
        tldr: 'Systemic estrogen preserves collagen on biopsy, and the two large trials that graded the face found nothing; no guideline recommends it for skin. The decision is made on symptoms, bone, cardiovascular timing within ten years of menopause, breast and clot history, with transdermal routes for clot risk, by the Menopause Society\'s criteria and a menopause clinician. Topical facial estrogen is compounded, off-label, with unanswered absorption questions.',
        focus: 'hormones',
        bodyHtml: `
          <p>The skin evidence points two ways — collagen up on biopsy in small trials and a 1,589-woman meta-analysis, nothing on the face in the 485-woman and four-year KEEPS trials (<a href="https://pubmed.ncbi.nlm.nih.gov/38230593/" rel="noopener nofollow" target="_blank">meta-analysis</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/18625536/" rel="noopener nofollow" target="_blank">Phillips 2008</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/27393520/" rel="noopener nofollow" target="_blank">KEEPS</a>) — and the risk evidence points one way: the benefits and harms of menopausal hormone therapy are set out by the Menopause Society for whom, when and by which route, with the balance favourable for symptomatic women under 60 or within ten years of menopause and unfavourable for others, transdermal estradiol preferred where clot risk matters, and micronised progesterone for the uterus (<a href="https://journals.lww.com/menopausejournal/fulltext/2022/07000/the_2022_hormone_therapy_position_statement_of_the.4.aspx" rel="noopener nofollow" target="_blank">2022 position statement</a>). Nothing in that statement is about skin, and nobody should start hormones for firmness; the <a href="/anti-aging-50s">50s guide</a> and the <a href="/sagging-skin">sagging guide</a> both say so, and the woman who is a candidate on the proper grounds can count her dermis as a bonus. Topical estrogen on the face adds its own uncertainties: the compounded estriol creams are unlicensed, systemic absorption through facial skin has not been characterised, and the long-term breast and endometrial safety of years of application is unknown (<a href="https://www.jaadreviews.org/article/S2950-1989(25)00103-5/fulltext" rel="noopener nofollow" target="_blank">2025 review</a>) — a prescription from a menopause specialist who monitors, not a purchase.</p>
        `,
      },
      {
        id: 'safety-biostimulators',
        category: 'safety',
        title: 'Biostimulators and boosters: nodules, no eraser, and the unregulated',
        tldr: 'Poly-L-lactic acid, calcium hydroxylapatite and polycaprolactone cannot be dissolved; a nodule from a shallow placement or missed massage is a months-to-years problem treated with steroid injection or excision. Hyaluronic acid boosters can be dissolved. Polynucleotides and exosomes range from CE-marked devices to products with a regulator\'s warning. First stimulator: a small one, a reversible one, from an injector who shows their own results.',
        focus: 'general',
        bodyHtml: `
          <p>The particle stimulators stay until the body clears them, which for poly-L-lactic acid is a year or two, for calcium hydroxylapatite a year or more, and for polycaprolactone several years; a lump from product placed too superficially, insufficiently diluted or not massaged is felt for that long and is treated with intralesional corticosteroid or, rarely, cut out — there is no hyaluronidase for any of them. The controlled PLLA trial reported no treatment-related adverse events in 40 women with a diluted, deep, massaged protocol (<a href="https://pubmed.ncbi.nlm.nih.gov/30741790/" rel="noopener nofollow" target="_blank">PLLA trial</a>), which is the point: the safety of the class lives in technique. Hyaluronic acid boosters dissolve with hyaluronidase, which is the argument for trying a reversible product first. Vascular occlusion — the serious filler harm — is rarer with the diluted, subdermal, fanned techniques the stimulators use than with bolus fillers, and the <a href="/fillers">filler guide</a> covers the emergency protocol. The regulatory spread is wide: the stimulators and boosters above are CE-marked devices, polynucleotides are CE-marked in Europe with thin trials, and exosome injectables carry an FDA public safety notification after serious harms (<a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/public-safety-notification-exosome-products" rel="noopener nofollow" target="_blank">FDA notification</a>); the <a href="/regenerative-aesthetics">regenerative aesthetics guide</a> has the vetting checklist that matters more than the product.</p>
        `,
      },
      {
        id: 'safety-devices',
        category: 'safety',
        title: 'Energy devices: burns, fat loss, nerves and the gaunt face',
        tldr: 'Radiofrequency microneedling at aggressive settings has produced facial fat loss; focused ultrasound can bruise a nerve or dissolve fat in a thin face; monopolar radiofrequency and lasers burn when settings, cooling or skin type are wrong; ablative resurfacing scars off the face and leaves permanent pale patches in some. The collagen response the trials measured came from conservative protocols in small series — ask for the settings, the skin type, the site and the operator\'s own photographs.',
        focus: 'general',
        bodyHtml: `
          <p>Every device on this page works by injury, and the difference between collagen and harm is the dose. The <a href="/microneedling">microneedling guide</a> cites the 2026 reports of facial fat loss after aggressive radiofrequency microneedling — an energy device that heats the subcutaneous fat as well as the dermis on a thin face produces the gaunt look that the volume guide then has to treat. Focused ultrasound places coagulation points at 3 and 4.5 mm, where the facial nerve branches and the fat also live; temporary weakness and fat loss are the recognised complications, and the <a href="/sagging-skin">sagging guide</a> gives the numbers, including the retrospective series in which a sixth looked worse. Monopolar radiofrequency burns when cooling fails or the grounding pad is wrong; non-ablative and ablative lasers burn, blister and darken in darker skin or on a tan; and full ablative resurfacing carries permanent hypopigmentation and scarring risk that rises steeply off the face — the hands, neck and chest heal slowly, as the <a href="/aging-hands">hands guide</a> explains. The trials above measured collagen under conservative protocols — El-Domyati\'s six sessions of plain needling, the ultrasound study\'s single pass, the LED trial\'s 9 J/cm² — and the clinic that promises more with higher settings is promising harm. A test patch in skin of colour, no tan, a paused retinoid, an operator who does that device weekly, and their own photographs of a face like yours.</p>
        `,
      },
      {
        id: 'safety-actives',
        category: 'safety',
        title: 'Retinoids and acids: the irritation curve, the sun and pregnancy',
        tldr: 'The collagen in the tretinoin trial came from a year of nightly 0.1%, and the first two months of that are dry, red and peeling — the dose that builds collagen is the dose the skin can keep tolerating, reached by starting low and slowly. Retinoids and alpha-hydroxy acids both increase sun sensitivity, share one irritation budget and are paused before peels and lasers; tretinoin is not used in pregnancy or when trying to conceive.',
        focus: 'general',
        bodyHtml: `
          <p>The 80% increase in collagen formation was measured after 10 to 12 months of daily 0.1% tretinoin (<a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">tretinoin trial</a>), and the retinol trial in the very old used 0.4% only three times a week with study staff applying it (<a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">retinol trial</a>): the point of both is persistence, and persistence is what irritation ends. The <a href="/wrinkles">wrinkles guide</a> has the irritation curve — a pea, over moisturiser, twice a week for a month, then every other night, then nightly, with the strength raised only when the last one is boring. Sun sensitivity is real for both classes, which is one more reason the sunscreen row comes first. The 25% alpha-hydroxy acid that thickened the forearm dermis (<a href="https://pubmed.ncbi.nlm.nih.gov/8642081/" rel="noopener nofollow" target="_blank">AHA study</a>) is a professional strength that burns if left on, and even the 8% shop strengths compete with a retinoid for the same tolerance, so they alternate rather than stack. Oral retinoids are teratogens; topical tretinoin has little systemic absorption but is avoided in pregnancy and when trying to conceive by every guideline, and adapalene and retinol are treated the same way out of caution. Vitamin C stings at 15–20% and is harmless; niacinamide flushes some people at 10%; none of them is a reason to stop the retinoid.</p>
        `,
      },
      {
        id: 'safety-claims',
        category: 'safety',
        title: 'How to read "clinically proven to boost collagen"',
        tldr: 'Ask what was measured: a biopsy stained for new collagen, a quantitative PCR of procollagen, an ultrasound of dermal thickness or density, or a cutometer read against a control — in that order of strength. A "consumer perception study" is a questionnaire; a before-and-after photograph is lighting; a cutometer without a control side or arm measures hydration for a day; "in vitro" means a dish. The rows on this page that reached the top of that ladder are tretinoin, the CO2 laser, estrogen, microneedling, radiofrequency, ultrasound, LED, PLLA and diluted calcium hydroxylapatite; everything else is measured lower, and the jar is measured nowhere.',
        focus: 'general',
        bodyHtml: `
          <p>The ladder, from the top. <strong>Biopsy immunostaining for new collagen</strong> — the tretinoin trial\'s endpoint (<a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">Griffiths 1993</a>), the hormone trial\'s (<a href="https://pubmed.ncbi.nlm.nih.gov/10687834/" rel="noopener nofollow" target="_blank">Sauerbronn 2000</a>), the microneedling, radiofrequency and ultrasound series\' (<a href="https://pubmed.ncbi.nlm.nih.gov/26096653/" rel="noopener nofollow" target="_blank">El-Domyati 2015</a>). <strong>Quantitative PCR of procollagen mRNA</strong> — the CO2 laser study (<a href="https://pubmed.ncbi.nlm.nih.gov/15545540/" rel="noopener nofollow" target="_blank">Orringer 2004</a>) and the vitamin C study (<a href="https://pubmed.ncbi.nlm.nih.gov/11407971/" rel="noopener nofollow" target="_blank">Nusgens 2001</a>): synthesis switched on, not necessarily fibres laid down. <strong>Ultrasound thickness or density</strong> — the estrogen cream trial (<a href="https://pubmed.ncbi.nlm.nih.gov/7799828/" rel="noopener nofollow" target="_blank">Creidi 1994</a>) and the LED trial (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3926176/" rel="noopener nofollow" target="_blank">Wunsch 2014</a>). <strong>Cutometer against a control</strong> — the oral collagen meta-analyses, the PLLA trial, the boosters: a real mechanical change, confounded by hydration unless the control is the other side of the same face or a saline injection. <strong>Cutometer without a control, photographs, questionnaires, "consumer perception", in vitro fibroblast studies</strong>: the floor, where most of the shelf lives. Two further questions: who paid — the oral collagen reviewers flagged "several biases" in industry trials (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10180699/" rel="noopener nofollow" target="_blank">2023 meta-analysis</a>) — and how long: collagen takes months, and a 28-day "clinical study" measured water. Anything that cannot answer "measured how, against what, by whom, for how long" is not a collagen claim; it is a moisturiser claim in a laboratory coat.</p>
        `,
      },
    ],
  },
  {
    id: 'faq',
    title: 'Frequently asked questions',
    intro: 'The questions people ask about firmness, answered from the trials above.',
    sections: [
      {
        id: 'faq-rebuild-or-slow',
        category: 'faq',
        title: 'Can collagen be rebuilt, or only protected?',
        tldr: 'Both — protect it daily, rebuild it slowly.',
        bodyHtml: `
          <p>Both, at different speeds. Protection is the cheapest and largest: daily sunscreen kept measured skin aging 24% lower over 4.5 years in 903 people (<a href="https://pubmed.ncbi.nlm.nih.gov/23732711/" rel="noopener nofollow" target="_blank">Nambour trial</a>), and not smoking removes a 4.7-fold risk (<a href="https://pubmed.ncbi.nlm.nih.gov/2014944/" rel="noopener nofollow" target="_blank">smoking study</a>). Rebuilding is documented on biopsy for tretinoin (collagen formation +80% in a year), CO2 resurfacing (procollagen 7.5–8.9× for six months), estrogen after menopause (+6.5% in six months), and in small series for needling, heat, ultrasound, light and the particle stimulators. None of it is fast, and none of it holds without the protection.</p>
        `,
      },
      {
        id: 'faq-creams',
        category: 'faq',
        title: 'Do collagen creams work?',
        tldr: 'No cream adds dermal collagen; retinoids do.',
        bodyHtml: `
          <p>Collagen in a cream is a 300,000-dalton protein on a barrier that admits molecules a few hundred daltons across; it hydrates the surface and goes no further, and no such cream has a biopsy, ultrasound or controlled cutometer trial. The topicals that reach fibroblasts are small molecules with biopsy trials: tretinoin and retinol (<a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">tretinoin</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/17515510/" rel="noopener nofollow" target="_blank">retinol</a>), vitamin C (<a href="https://pubmed.ncbi.nlm.nih.gov/11407971/" rel="noopener nofollow" target="_blank">vitamin C</a>) and alpha-hydroxy acids at strength (<a href="https://pubmed.ncbi.nlm.nih.gov/8642081/" rel="noopener nofollow" target="_blank">AHA</a>). Buy those, and a €10 moisturiser.</p>
        `,
      },
      {
        id: 'faq-drink-collagen',
        category: 'faq',
        title: 'Does drinking collagen firm skin?',
        tldr: 'A little, on a cutometer, while you take it.',
        bodyHtml: `
          <p>Across 26 randomised trials in 1,721 people, hydrolysed collagen improved hydration and elasticity significantly, with the reviewers noting industry bias and heterogeneity (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10180699/" rel="noopener nofollow" target="_blank">2023 meta-analysis</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/33742704/" rel="noopener nofollow" target="_blank">2021 meta-analysis</a>). The effect is a few percent on a suction probe at three months, has never been shown on a biopsy, and stops when the powder does. The <a href="/collagen">collagen guide</a> has the doses; take it after the sunscreen and the retinoid, not instead.</p>
        `,
      },
      {
        id: 'faq-hrt-skin',
        category: 'faq',
        title: 'Will hormone therapy give me my skin back?',
        tldr: 'Preserves collagen; the face trials were negative.',
        bodyHtml: `
          <p>On biopsy, yes: +6.5% collagen in six months against placebo (<a href="https://pubmed.ncbi.nlm.nih.gov/10687834/" rel="noopener nofollow" target="_blank">2000 RCT</a>), 48% more in long-term users than untreated women (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1549492/" rel="noopener nofollow" target="_blank">BMJ 1983</a>). In the mirror, the two large trials that graded the face found no change in wrinkles, laxity or rigidity after 48 weeks and four years (<a href="https://pubmed.ncbi.nlm.nih.gov/18625536/" rel="noopener nofollow" target="_blank">Phillips 2008</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/27393520/" rel="noopener nofollow" target="_blank">KEEPS</a>). Take it for symptoms and bone if you are a candidate, with a menopause clinician; count the dermis as a bonus; keep the retinoid.</p>
        `,
      },
      {
        id: 'faq-sugar',
        category: 'faq',
        title: 'Does sugar really age skin?',
        tldr: 'Real chemistry, thin trials, worth cutting.',
        bodyHtml: `
          <p>Glycation cross-links collagen into stiff, brittle fibres that resist turnover — established chemistry (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0738081X10000428" rel="noopener nofollow" target="_blank">review</a>) — and in 602 people perceived age rose 0.4 years per 1 mmol/L of glucose, with diabetics looking 1.6 years older (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3543736/" rel="noopener nofollow" target="_blank">Leiden study</a>). Nobody has randomised a low-sugar diet and biopsied the skin. The direction is not in doubt, the size is, and the change is free.</p>
        `,
      },
      {
        id: 'faq-how-long',
        category: 'faq',
        title: 'How long until skin is measurably firmer?',
        tldr: 'Months to a year; judge at six.',
        bodyHtml: `
          <p>Collagen is made slowly. The tretinoin biopsies were taken after 10–12 months (<a href="https://pubmed.ncbi.nlm.nih.gov/8336752/" rel="noopener nofollow" target="_blank">tretinoin trial</a>), the CO2 laser\'s procollagen peaked at three weeks and stayed up six months (<a href="https://pubmed.ncbi.nlm.nih.gov/15545540/" rel="noopener nofollow" target="_blank">laser study</a>), the PLLA trial\'s elasticity gain was measured at 12 months (<a href="https://pubmed.ncbi.nlm.nih.gov/30741790/" rel="noopener nofollow" target="_blank">PLLA trial</a>), the oral collagen effect appeared at about 90 days, and the LED trial took 30 sessions over 15 weeks. A change in a fortnight is water; judge the builders at six months on the same photograph in the same light.</p>
        `,
      },
      {
        id: 'faq-which-device',
        category: 'faq',
        title: 'Which clinic treatment builds the most collagen?',
        tldr: 'Ablative laser most; needling the best value.',
        bodyHtml: `
          <p>By the numbers, CO2 resurfacing — procollagen 7.5–8.9 times baseline for six months in 28 people (<a href="https://pubmed.ncbi.nlm.nih.gov/15545540/" rel="noopener nofollow" target="_blank">CO2 study</a>) — at the cost of a raw week and the most risk. Fractional lasers deliver a fraction of that injury and collagen with days of downtime; microneedling raised collagen I, III and VII in six sessions for a fifth of the price (<a href="https://pubmed.ncbi.nlm.nih.gov/26096653/" rel="noopener nofollow" target="_blank">microneedling histology</a>); radiofrequency and ultrasound have six- and eleven-person biopsy series; red light has the largest controlled trial but needs thirty sessions. For most faces the sequence is needling or fractional courses yearly, and the ablative laser once, later, for the photodamage that has outrun them.</p>
        `,
      },
      {
        id: 'faq-bone-broth',
        category: 'faq',
        title: 'Bone broth, gelatin, or a collagen powder?',
        tldr: 'Gelatin with vitamin C raised a synthesis marker; no skin trial.',
        bodyHtml: `
          <p>Gelatin is collagen; the powders are the same protein chopped smaller. In eight men, 15 g of vitamin C-enriched gelatin before exercise doubled a blood marker of collagen synthesis and their serum made engineered ligaments stronger (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5183725/" rel="noopener nofollow" target="_blank">gelatin study</a>) — synthesis somewhere, not shown to be skin. The skin trials used hydrolysed powders at about 10 g (<a href="https://pubmed.ncbi.nlm.nih.gov/33742704/" rel="noopener nofollow" target="_blank">meta-analysis</a>). Broth has no trial and an unmeasured, variable collagen content; if you like it, drink it with something containing vitamin C, and expect the powder\'s result at best.</p>
        `,
      },
      {
        id: 'faq-cost-ladder',
        category: 'faq',
        title: 'What does it all cost?',
        tldr: 'Free to €4,000.',
        bodyHtml: `
          <p>Typical European clinic list prices, which vary and should be confirmed in writing. <strong>Free:</strong> not smoking, less sugar, sleep, and resistance training — the row with the largest effect sizes. <strong>€20–60 a month:</strong> sunscreen and a prescription retinoid, the two rows with randomised trials and biopsies, plus vitamin C in the morning. <strong>€20–50 a month:</strong> a collagen powder, if you want a few cutometer percent on top. <strong>€150–400 a session:</strong> microneedling courses, LED at clinic dose, a peel series. <strong>€300–900 a session:</strong> fractional lasers, radiofrequency microneedling, PLLA, diluted calcium hydroxylapatite, boosters, polynucleotides. <strong>€1,000–4,000:</strong> monopolar radiofrequency, focused ultrasound, ablative resurfacing. And the things not to buy at any price: the collagen jar, the exosome vial, and the "bank".</p>
        `,
      },
    ],
  },
];

export const focusLabels: Record<FocusArea, string> = {
  collagen: 'New collagen on biopsy',
  elasticity: 'Recoil on the cutometer',
  protect: 'Slows the loss',
  hormones: 'Menopause & hormones',
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

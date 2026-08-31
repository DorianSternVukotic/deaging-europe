/**
 * Shared evidence vocabulary for every guide (collagen today, future guides), the
 * EvidenceRow component and the homepage ledger. Guide data modules re-export
 * the type so their pages can keep importing from their own module.
 */
export type Evidence = 'strong' | 'moderate' | 'emerging' | 'limited';

/** Tiers in display order, strongest first. */
export const EVIDENCE_TIERS: readonly Evidence[] = ['strong', 'moderate', 'emerging', 'limited'];

export const evidenceLabels: Record<Evidence, string> = {
  strong: 'Strong evidence',
  moderate: 'Moderate evidence',
  emerging: 'Emerging evidence',
  limited: 'Limited evidence',
};

/** Saturated tier colours — read better than the muted brand tones at small sizes. */
export const evidenceColor: Record<Evidence, string> = {
  strong: '#16a34a',
  moderate: '#e0a106',
  emerging: '#e0673a',
  limited: '#8c8079',
};

/** How many graded sections fall in each tier (ungraded sections excluded). */
export function countByTier(sections: ReadonlyArray<{ evidence?: Evidence }>): Record<Evidence, number> {
  const counts: Record<Evidence, number> = { strong: 0, moderate: 0, emerging: 0, limited: 0 };
  for (const s of sections) if (s.evidence) counts[s.evidence]++;
  return counts;
}

/** Full-read time of a set of sections' HTML bodies at ~220 wpm. */
export function readingMinutesFor(sections: ReadonlyArray<{ bodyHtml: string }>): number {
  const words = sections
    .map((s) => s.bodyHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(/\s+/).length)
    .reduce((a, b) => a + b, 0);
  return Math.max(1, Math.round(words / 220));
}

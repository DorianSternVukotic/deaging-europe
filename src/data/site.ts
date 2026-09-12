/**
 * Site-level constants the layout, the SEO head and the structured data share.
 * One place for the name, the default share image and the logo so the
 * Organization / WebSite / Article schema and the Open Graph tags agree.
 */

export const SITE_NAME = 'DeAging Europe';
export const SITE_DESCRIPTION = 'Evidence-based anti-aging information and products for Europe.';

/** Open Graph locale codes need a region; the site is written in British English. */
export const OG_LOCALE: Record<string, string> = { en: 'en_GB' };

/** The share image every page falls back to (public/og-default.png, 1200×630). */
export const DEFAULT_OG_IMAGE = {
  src: '/og-default.png',
  width: 1200,
  height: 630,
  alt: 'DeAging Europe — anti-aging treatments graded by clinical evidence',
};

/** The square wordmark used as the Organization / publisher logo (public/logo.png). */
export const LOGO = { src: '/logo.png', width: 1024, height: 1024 };

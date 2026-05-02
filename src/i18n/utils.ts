import { ui, DEFAULT_LOCALE, LOCALES, type Locale } from './ui';

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

export function t(locale: Locale, key: string): string {
  return ui[locale]?.[key] ?? ui[DEFAULT_LOCALE][key] ?? key;
}

export function localePath(locale: Locale, path: string = ''): string {
  const cleaned = path.replace(/^\/+/, '');
  if (locale === DEFAULT_LOCALE) {
    return cleaned ? `/${cleaned}` : '/';
  }
  return cleaned ? `/${locale}/${cleaned}` : `/${locale}`;
}

export function getLocaleFromParams(lang: string | undefined): Locale {
  return isLocale(lang) ? lang : DEFAULT_LOCALE;
}

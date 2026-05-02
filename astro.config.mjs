import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL ?? 'https://deagingeurope.example';

export default defineConfig({
  site,
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bg', 'de', 'fr', 'it', 'es'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          bg: 'bg-BG',
          de: 'de-DE',
          fr: 'fr-FR',
          it: 'it-IT',
          es: 'es-ES',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

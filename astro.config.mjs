// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alangotzo.github.io',
  base: '/zzed-dev',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
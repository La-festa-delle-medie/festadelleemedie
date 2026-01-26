// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://la-festa-delle-medie.github.io',
  base: '/festadelleemedie',
  vite: {
    plugins: [tailwindcss()]
  }
});
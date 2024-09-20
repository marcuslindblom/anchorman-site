// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://marcuslindblom.github.io',
  base: 'anchorman-site',
  integrations: [svelte()],
  vite: {
    ssr: {
      noExternal: ['@strifeapp/strife', '@strifeapp/image', '@strifeapp/picture']
    }
  },
});
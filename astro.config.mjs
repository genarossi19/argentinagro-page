// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      "import.meta.env.PUBLIC_SUPABASE_URL": JSON.stringify(
        process.env.PUBLIC_SUPABASE_URL
      ),
      "import.meta.env.PUBLIC_SUPABASE_ANON_KEY": JSON.stringify(
        process.env.PUBLIC_SUPABASE_ANON_KEY
      ),
    },
  },
  integrations: [    tailwind({
    applyBaseStyles: false,
  }),
, react()],
  output: 'server',
});
// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://frabjous-manatee-ae12d4.netlify.app",
  integrations: [preact()]
});
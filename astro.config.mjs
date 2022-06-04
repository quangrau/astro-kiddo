import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  // adapter: netlify(),
  // site: 'https://astro-kiddo.netlify.app'
  integrations: [
    astroImageTools,
  ]
});

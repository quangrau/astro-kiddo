import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
  includeSourceFormat: false,
  sizes: "(min-width: 300px) 1000px, 100vw",
  decoding: "auto",
});
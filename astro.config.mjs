// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://sonngo.pages.dev",
  trailingSlash: "ignore",
  // The blog used to live at /notes.
  redirects: { "/notes": "/blog", "/notes/[slug]": "/blog/[slug]" },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

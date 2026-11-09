# sonngo.pages.dev

Personal website of Son Ngo, Applied AI Scientist. Built with [Astro](https://astro.build), Tailwind CSS v4 and MDX.

## Develop

Requires Node 22.23.4 or newer (`nvm use` reads `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + static build into dist/
npm run deploy   # build, then publish dist/ to Cloudflare Pages (project "sonngo")
```

## Where content lives

| What | File |
| --- | --- |
| Name, headline, email, links, SEO description | `src/data/site.ts` |
| Experience timeline | `src/data/experience.ts` |
| Headline stats, research, education, awards, toolkit | `src/data/profile.ts` |
| Case studies (`/work/<slug>`) | `src/content/work/*.mdx` |
| Notes (`/notes/<slug>`, RSS) | `src/content/notes/*.md(x)` |
| Resume PDF | `public/SonNgo_Resume.pdf` |
| Social share image | `public/og.png` |

Notes with `draft: true` only appear in `npm run dev`. Case studies accept an optional `cover` image
(path relative to the MDX file) and `coverAlt`.

## Hosting

The site is live at https://sonngo.pages.dev (Cloudflare Pages, project `sonngo`).
The old address, https://ngoson2004.github.io, is a forwarding page in the
`Ngoson2004.github.io` repo that sends every path to the same path on the new site.

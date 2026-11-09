// Single source of truth for identity, links and SEO defaults.
// Edit this file (and the other files in src/data) to update the site.

export const site = {
  name: "Son Ngo",
  role: "Applied AI Scientist",
  url: "https://sonngo.pages.dev",
  email: "theson2004@outlook.com",
  resume: "/SonNgo_Resume.pdf",
  location: "Melbourne, Australia",

  // Hero
  headline: "I build AI agents for safety-critical, regulation-heavy work.",
  subhead:
    "Applied AI Scientist at Starbound Space Solutions. PhD researcher at Monash University, exploring generative AI for regulatory compliance.",

  // Used for <meta name="description"> and social cards.
  description:
    "Son Ngo is an Applied AI Scientist and PhD researcher at Monash University working on AI agent orchestration, knowledge representation and predictive machine learning.",

  firstName: "Son",
  lastName: "Ngo",
  // The four words spread across the home hero.
  wordmark: ["Son", "Ngo", "Applied AI", "Scientist"],
  // Hero caption, bottom right of the slideshow.
  tagline: "Agents for safety-critical work.",
  // The big opening statement under the hero (starts with the name).
  statement:
    "Son Ngo, an applied AI scientist and PhD researcher in Melbourne, building AI agents and machine-learning systems for safety-critical, regulation-heavy work.",
  intro:
    "I build AI agents and machine-learning systems for safety-critical, regulation-heavy work, and I bring research rigour to production code.",

  links: {
    github: "https://github.com/Ngoson2004",
    linkedin: "https://www.linkedin.com/in/son-ngo-2272b3215/",
  },
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const;

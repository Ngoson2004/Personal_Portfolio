// Headline numbers, research, education, awards and skills.
// Every figure here comes from the resume. Do not add numbers you cannot back up.

export const stats = [
  {
    value: "1st",
    label: "Founder Mode Track, Agentic AI Build Week",
    detail: "South East Asia's largest buildathon",
  },
  {
    value: "Top 13",
    label: "of 370+ teams, AI-for-drug-discovery challenge",
    detail: "Multi-task GNN, CSIRO",
  },
  {
    value: "98%",
    label: "of engineering implications captured from space mission requirements",
    detail: "AI-assisted requirements derivation, Starbound",
  },
  {
    value: "+35 pts",
    label: "meter-reading accuracy over the BLIP baseline",
    detail: "87% on 500 held-out factory images",
  },
] as const;

export const research = {
  degree: "Doctor of Philosophy",
  institution: "Monash University",
  start: "Jul 2026",
  topic: "Generative AI for Regulatory Compliance in Safety-critical Domains",
  summary:
    "My research explores generative-AI methods that help engineers meet regulatory requirements in safety-critical domains, starting with the Australian space sector. The project is part of the National Industry PhD Program.",
  interests: [
    "AI agent orchestration",
    "Knowledge representation",
    "Requirements engineering",
    "Predictive machine learning",
  ],
};

export const education = [
  {
    degree: "Doctor of Philosophy",
    school: "Monash University",
    dates: "Jul 2026 - Present",
    note: "National Industry PhD Program",
  },
  {
    degree: "Bachelor of Computer Science (Artificial Intelligence), Professional Degree",
    school: "Swinburne University of Technology",
    dates: "Aug 2022 - May 2026",
    note: "GPA 3.6, top 15% of cohort, scholarship for high academic achievement",
  },
];

export const awards = [
  {
    title: "Winner, Founder Mode Track",
    org: "Agentic AI Build Week, GenAI Fund",
    note: "Awarded around US$160K at the largest buildathon in South East Asia: 2,000+ builders, 10+ enterprise partners and 500+ agentic AI projects across Asia-Pacific.",
    href: "/work/syncnapse",
  },
  {
    title: "Golden Key International Honour Society",
    org: "Member",
    note: "Recognises the top 15% of students across all disciplines.",
  },
  {
    title: "Deep Learning and Machine Learning Specialisations",
    org: "8 courses",
    note: "Foundations of machine learning and deep learning.",
  },
];

// Toolkit for the About page. `icon` is a Simple Icons slug; tools without one show a `mark` monogram.
export const tools = [
  {
    group: "Agents & LLMs",
    items: [
      { name: "Claude Code", icon: "claude" },
      { name: "ElevenLabs", icon: "elevenlabs" },
      { name: "FastMCP", icon: "modelcontextprotocol" },
      { name: "OpenAI Agents SDK", mark: "OA" },
      { name: "Azure Foundry", mark: "Az" },
    ],
  },
  {
    group: "Machine learning",
    items: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "Chemprop", mark: "Cp" },
      { name: "RDKit", mark: "RD" },
    ],
  },
  {
    group: "Backend & infrastructure",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Prisma", icon: "prisma" },
      { name: "NestJS", icon: "nestjs" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Convex", icon: "convex" },
    ],
  },
  {
    group: "Languages",
    items: [
      { name: "Python", icon: "python" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Linux", icon: "linux" },
      { name: "SQL", mark: "SQL" },
      { name: "C#", mark: "C#" },
    ],
  },
] as const;

export const methods = [
  "AI agent orchestration",
  "Knowledge graphs",
  "Embeddings",
  "Graph neural networks",
  "Multimodal models",
  "Metric learning",
  "Computer vision",
  "SLURM & HPC",
  "CI/CD",
  "Cloud computing",
];

// What I do, shown on the home page.
export const services = [
  { title: "AI agent orchestration", note: "Multi-agent systems that plan, call tools and hand work to humans for review." },
  { title: "Knowledge representation", note: "Turning standards, briefs and conversations into structured, traceable knowledge." },
  { title: "Requirements engineering", note: "Deriving engineering requirements from regulations, with ReqIF exports engineers can trust." },
  { title: "Predictive machine learning", note: "Graph neural networks, multimodal and vision models, trained and evaluated at scale." },
];

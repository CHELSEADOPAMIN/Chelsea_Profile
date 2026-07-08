export type ProjectLinkKind = "website" | "github" | "demo";

export type ProjectEntry = {
  title: string;
  period: string;
  role: string;
  type: string;
  tone: "blue" | "green" | "coral" | "gold" | "indigo";
  summary: string;
  highlights: string[];
  stack: string[];
  links: Partial<Record<ProjectLinkKind, string>>;
};

export const projects: ProjectEntry[] = [
  {
    title: "Splendor Online",
    period: "Jul 2026",
    role: "Creator",
    type: "Web Board Game",
    tone: "gold",
    summary:
      "A browser-based remake of the board game Splendor. This is an early first version, with more features and polish planned in future updates.",
    highlights: [
      "Implemented the core Splendor rules: gem tokens, card development, and noble tiles.",
      "Built the full game loop playable directly in the browser with no install.",
      "Actively iterating - upcoming versions will add smarter opponents and better UX."
    ],
    stack: ["React", "Vite", "TypeScript", "Vercel"],
    links: {
      website: "https://splendorrrrr.vercel.app/"
    }
  },
  {
    title: "Codex Pets Generator",
    period: "Jun 2026",
    role: "Creator",
    type: "AI Character Tool",
    tone: "indigo",
    summary:
      "A fast web generator for developers to make their own Codex pet after OpenAI released eight official pets for Codex.",
    highlights: [
      "Turned the Codex pet idea into a self-serve flow: upload your face and get a pet that looks like you.",
      "Designed the experience to run in about one minute with no setup and no CLI.",
      "Positioned it as a faster, web-first alternative to the Hatch Pet skill."
    ],
    stack: ["Next.js", "Vercel", "OpenAI", "Image Generation", "Codex"],
    links: {
      website: "https://codexpet-character.vercel.app/"
    }
  },
  {
    title: "Qrent",
    period: "Feb 2025 - Present",
    role: "Software Engineer",
    type: "Production Platform",
    tone: "blue",
    summary:
      "A housing rental platform with AI-assisted renter workflows, type-safe APIs, and a Notion-backed content system for the marketing team.",
    highlights: [
      "Integrated Gemini to analyze property features and generate suitability scores.",
      "Built cover-letter and parent-guarantee-letter generation with assistant-ui.",
      "Shared typed Prisma schemas across a pnpm monorepo for frontend and backend packages."
    ],
    stack: ["Next.js 15", "React 19", "tRPC", "Prisma", "MySQL", "Docker"],
    links: {
      website: "https://www.qrent.rent/"
    }
  },
  {
    title: "ADHD Timebox Agent",
    period: "Dec 2025",
    role: "AI Engineer",
    type: "Agentic Productivity",
    tone: "green",
    summary:
      "A multi-agent productivity assistant that helps ADHD users break tasks into timeboxes, monitor focus, and sync plans with Google Calendar.",
    highlights: [
      "Designed four CrewAI agents behind a FastAPI service for multi-turn planning.",
      "Used a finite-state machine with session locking to prevent context loss.",
      "Built a distraction detector that compares the active window title with the current task."
    ],
    stack: ["Python", "FastAPI", "CrewAI", "Gemini API", "Google Calendar"],
    links: {
      website:"https://landing-page-for-adhd-timebox.onrender.com/"
    }
  },
  {
    title: "AI-Powered Rehab Platform",
    period: "Nov 2025",
    role: "Full-Stack Engineer",
    type: "Hackathon MVP",
    tone: "coral",
    summary:
      "A peer support platform for physical therapy patients, using AI to identify drop-off risk and recommend compatible support groups.",
    highlights: [
      "Built an Active Care Engine that analyzes patient adherence, pain trends, and sentiment.",
      "Automated intervention emails with Vercel Cron, Gemini 2.5 Pro, and Resend.",
      "Delivered a globalized interface across 10+ languages with next-intl."
    ],
    stack: ["Next.js", "React 19", "Gemini 2.5 Pro", "Resend", "Recharts", "next-intl"],
    links: {
      website: "https://heal.a2a.ing"
    }
  },
  {
    title: "Whiteboard-to-Confluence Converter",
    period: "May - Aug 2025",
    role: "Product Owner & Lead Developer",
    type: "Atlassian Client Project",
    tone: "gold",
    summary:
      "An Atlassian Forge app that converts messy whiteboard notes into structured Confluence pages with validated AI output.",
    highlights: [
      "Orchestrated OpenAI GPT-4o and Gemini through Vercel AI SDK with model fallback.",
      "Added Zod validation and multilingual moderation across 180+ safety keywords.",
      "Covered regressions with Vitest integration tests and Playwright E2E tests."
    ],
    stack: ["Node.js", "Express", "Drizzle", "PostgreSQL", "Upstash Redis", "Playwright"],
    links: {
      website:"https://github.com/CHELSEADOPAMIN/AI-Whiteboard-to-Confluence-Converter"
    }
  },
  {
    title: "UNSW AISoc Tools",
    period: "Feb - Dec 2025",
    role: "Software Engineer",
    type: "Society Platform",
    tone: "indigo",
    summary:
      "Internal and public tools for UNSW Artificial Intelligence Society, including merch infrastructure and Discord-connected operations.",
    highlights: [
      "Built Discord OAuth2 authentication and role-based access control.",
      "Combined PostgreSQL and MongoDB for transactional merch data and flexible product attributes.",
      "Used Pydantic AI to turn natural language Discord inputs into meeting minutes and tasks."
    ],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "MongoDB", "Pydantic AI", "Docker"],
    links: {
      website: "https://unswaisoc.com/#/merch",
      demo: "https://t.unswaisoc.com/"
    }
  }
];

export const projectStats = {
  total: projects.length,
  aiFocused: projects.filter((project) =>
    [project.summary, ...project.highlights, ...project.stack].some((item) =>
      /ai|gemini|openai|crewai|pydantic|llm/i.test(item)
    )
  ).length
};

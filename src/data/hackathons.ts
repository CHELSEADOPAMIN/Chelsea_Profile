import type { RibbonBadgeType } from "@/components/ribbon-badge";

export type HackathonEntry = {
  title: string;
  image: string;
  imageSrc?: string;
  imageAlt?: string;
  badge: RibbonBadgeType | null;
  award: string;
  description: string;
  descriptionAlt?: string;
  date: string;
  location: string;
  links: {
    github?: string;
    website?: string;
    devpost?: string;
  };
};

export const hackathons: HackathonEntry[] = [
  {
    title: "Hack2Heal Hackathon",
    image: "hack2heal",
    imageSrc: "/hackathons/hack2heal-image.png",
    imageAlt: "Team Bread at UNSW Founders with the Hack2Heal Founder's Choice Award",
    badge: "WINNER",
    award: "Founder’s Choice Award · Team Bread",
    description:
      "Built Healing Together, an AI-powered rehab community platform that helps patients stay motivated and connected throughout recovery. The idea grew from a messy whiteboard into a meaningful MVP in 48 intense, creative hours.",
    descriptionAlt:
      "",
    date: "Nov 2025",
    location: "Sydney",
    links: {
      website: "https://heal.a2a.ing"
    }
  },
  {
    title: "Tutor10x x Edflow EdTech Hackathon",
    image: "tutor10x",
    imageSrc: "/hackathons/tutor10X-image.png",
    imageAlt: "Tutor10x and Edflow four-hour software engineer hackathon poster",
    badge: "FINALIST",
    award: "Finalist · 4-hour Software Engineer Hackathon",
    description:
      "Architected a fast-paced EdTech hackathon for Tutor10x client Edflow, challenging teams to build a proof-of-concept AI quiz system for Year 12 Business Studies in just four hours.",
    descriptionAlt:
      "The prototype brief focused on NESA-aligned quiz generation for teachers and instant feedback for students, simulating real-world delivery pressure with tangible AI education outcomes.",
    date: "Nov 2025",
    location: "Tutor10x / Edflow",
    links: {
      website: "https://www.linkedin.com/company/tutor10x/",
      devpost: "https://www.linkedin.com/company/edflowai/"
    }
  },
  {
    title: "Cursor Curated Sydney",
    image: "cursor-curated",
    imageSrc: "/hackathons/cursor-curated-image.png",
    badge: "WINNER",
    award: "Award Winner · Philosophy AI",
    description:
      "Built Philosophy AI during a 1.5-hour Cursor sprint hosted by Dovetail. You speak your mind, and AI Socrates, Aristotle, and Schopenhauer respond with their own philosophical takes.",
    descriptionAlt:
      "A fast, playful prototype shipped in an electric room of builders using Cursor to turn small ideas into working demos.",
    date: "Dec 2025",
    location: "Sydney",
    links: {
      website: "https://www.linkedin.com/company/cursorai/",
      devpost: "https://www.linkedin.com/company/heydovetail/"
    }
  },
  {
    title: "Gemini 3 Online Hackathon",
    image: "gemini3",
    badge: null,
    award: "Online AI Sprint · Gemini 3",
    description:
      "A remote hackathon entry built around Gemini 3, framed as an online sprint where the focus is the shipped prototype, demo flow, and AI workflow design rather than an in-person event photo.",
    descriptionAlt:
      "线上 hackathon 可以先用 Gemini 风格封面展示，之后再补 demo 截图、GitHub、提交页或 LinkedIn post 作为证明材料。",
    date: "TBD",
    location: "Online",
    links: {
      website:"https://landing-page-for-adhd-timebox.onrender.com/"
    }
  },
  {
    title: "Lyrathon",
    image: "lyrathon",
    badge: null,
    award: "Built project · No placement",
    description:
      "Built and shipped a hackathon project for Lyrathon, focusing on turning the idea into a working web experience with a live demo available online.",
    descriptionAlt:
      "No ranking listed yet, so this card highlights the shipped project and demo link instead of an award result.",
    date: "TBD",
    location: "Online",
    links: {
      website: "https://job.a2a.ing/"
    }
  },
  
];

export const hackathonStats = {
  total: hackathons.length,
  wins: hackathons.filter((entry) => entry.badge === "WINNER").length
};

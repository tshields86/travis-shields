import type { IconName } from "@/components/ui/Icon";

/** A single icon link on a card (live site, GitHub, App Store, npm, …). */
export interface ProjectLink {
  icon: IconName;
  href: string;
  label: string;
}

export interface WorkItem {
  role: string;
  name: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
}

export interface SkillCategory {
  title: string;
  blurb: string;
  items: string[];
  featured?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Metric {
  value: string;
  label: string;
}

/** Canonical off-site profiles, reused across hero, contact and footer. */
export const social = {
  github: "https://github.com/tshields86",
  linkedin: "https://www.linkedin.com/in/trshields",
  email: "travis.shields@gmail.com",
} as const;

/** Scrolling metric band. */
export const metrics: Metric[] = [
  { value: "50%", label: "faster iteration" },
  { value: "140%", label: "NPS lift" },
  { value: "$150K", label: "cost cut" },
  { value: "30%", label: "faster loads" },
  { value: "85%", label: "faster reindex" },
];

/** About section stat row. */
export const aboutStats: Stat[] = [
  { value: "50%", label: "Faster iteration cycles through platform modernization" },
  { value: "10+", label: "Years of engineering experience across enterprise platforms" },
  { value: "$150K", label: "Annual operational cost eliminated" },
];

/** Skills & Technologies — Leadership is slot 1 and featured. */
export const skillCategories: SkillCategory[] = [
  {
    title: "Leadership & Strategy",
    blurb: "Building teams and roadmaps that reliably deliver.",
    featured: true,
    items: [
      "Engineering Leadership",
      "Team Development",
      "Technical Roadmapping",
      "Cross-Functional Collaboration",
      "Agile/Scrum",
      "Mentoring & Coaching",
    ],
  },
  {
    title: "Tools & AI",
    blurb: "Agentic workflows and the tooling built into how the team ships.",
    items: [
      "Claude Code",
      "GitHub Copilot",
      "AI-Accelerated Development",
      "Docker",
      "GitHub Actions",
      "Datadog",
    ],
  },
  {
    title: "Platform & Architecture",
    blurb: "Modernizing brittle legacy stacks at enterprise scale.",
    items: [
      "Platform Modernization",
      "Microservices",
      "Micro-Frontends",
      "Design Systems",
      "CI/CD Pipelines",
      "Cloud Infrastructure (AWS, GCP)",
    ],
  },
  {
    title: "Frontend Technologies",
    blurb: "Fast, accessible, componentized interfaces.",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Storybook"],
  },
  {
    title: "Backend & Data",
    blurb: "The services and data behind the product.",
    items: ["Node.js", "GraphQL", "RESTful APIs", "NoSQL/SQL", "AWS Lambda", "Elasticsearch"],
  },
  {
    title: "Experimentation & Analytics",
    blurb: "Data-driven optimization as the default.",
    items: [
      "A/B Testing Frameworks",
      "Eppo Platform",
      "Data-Driven Optimization",
      "RUM & Performance Monitoring",
      "Amplitude",
      "Conversion Optimization",
    ],
  },
];

/** Professional Work (03). Descriptions/pills are the approved verbatim copy. */
export const professionalWork: WorkItem[] = [
  {
    role: "Director of Engineering",
    name: "Vimeo Marketing Platform",
    description:
      "Transformed Vimeo's marketing web group into a strategic engineering org. Decoupled from a legacy PHP monolith to standalone Next.js servers with ISR, migrated CI/CD to GitHub Actions, and established an experimentation framework with Eppo.",
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Builder.io",
      "Storybook",
      "GitHub Actions",
      "Datadog",
      "Eppo",
      "Smartling",
      "Bynder",
      "GCP",
    ],
    links: [{ icon: "external", href: "https://www.vimeo.com/", label: "Visit Vimeo" }],
  },
  {
    role: "Software Engineering Manager",
    name: "WeWork Employee Platforms",
    description:
      "Managed eight engineers building internal apps and microservices. Led a micro-frontend proof-of-concept that eliminated cross-team dependencies, and launched a check-in management tool that drove a 140% increase in Net Promoter Scores.",
    tech: ["React", "TypeScript", "Ruby on Rails", "Microservices", "Micro-Frontends", "AWS"],
    links: [],
  },
  {
    role: "Lead Software Engineer",
    name: "MSG.com",
    description:
      "Led engineering on Madison Square Garden's primary web property. Built Lambda@Edge adaptive image resizing that cut page load times by 30%, and overhauled Elasticsearch indexing from PHP to Node.js Lambdas reducing rebuild time by 85%.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "Elasticsearch", "PHP", "Docker", "AWS"],
    links: [{ icon: "external", href: "https://www.msg.com/", label: "Visit MSG.com" }],
  },
  {
    role: "Lead Software Engineer",
    name: "Knicks.com",
    description:
      "Led a comprehensive sitewide redesign and built custom modules integrating NBA APIs for real-time stats and game scores. Built the All-Star voting platform that helped Kristaps Porziņģis make the 2018 All-Star game, voted best campaign in the league.",
    tech: ["JavaScript", "React", "Contentful", "NBA Stats API"],
    links: [{ icon: "external", href: "https://www.nba.com/knicks/", label: "Visit Knicks.com" }],
  },
];

/** Side Projects (04) — all 7, Yodafy stays as the lone 7th card. */
export const sideProjects: Project[] = [
  {
    name: "PollPotato",
    description: "Ask a question, share one link, watch the group vote in real time.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Drizzle", "Neon", "Cloudflare"],
    links: [
      { icon: "external", href: "https://www.pollpotato.com", label: "Live" },
      { icon: "github", href: "https://github.com/tshields86/poll-potato", label: "GitHub" },
    ],
  },
  {
    name: "Serpent Surge",
    description: "Roguelike Snake with wave progression, power-ups and a CRT glow.",
    tech: ["TypeScript", "Canvas", "Vite", "Firebase", "Capacitor", "PWA"],
    links: [
      { icon: "external", href: "https://serpentsurge.vercel.app/", label: "Live" },
      {
        icon: "appStore",
        href: "https://apps.apple.com/us/app/serpent-surge/id6761081725",
        label: "App Store",
      },
      { icon: "github", href: "https://github.com/tshields86/serpent-surge", label: "GitHub" },
    ],
  },
  {
    name: "BBQCopilot",
    description: "AI cook plans, prep guides and live timelines for the smoker.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Claude API"],
    links: [
      { icon: "external", href: "https://www.bbqcopilot.com/", label: "Live" },
      { icon: "github", href: "https://github.com/tshields86/bbqcopilot", label: "GitHub" },
    ],
  },
  {
    name: "Breezlist",
    description: "Offline-capable, real-time collaborative lists with smart autocomplete.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind", "PWA", "Vite"],
    links: [
      { icon: "external", href: "https://www.breezlist.com/", label: "Live" },
      { icon: "github", href: "https://github.com/tshields86/breezlist", label: "GitHub" },
    ],
  },
  {
    name: "git-sense",
    description: "CLI that turns a repo's history into narrative summaries with Claude.",
    tech: ["TypeScript", "Node.js", "Claude API", "Octokit", "Commander"],
    links: [
      { icon: "external", href: "https://www.npmjs.com/package/git-sense", label: "npm" },
      { icon: "github", href: "https://github.com/tshields86/git-sense", label: "GitHub" },
    ],
  },
  {
    name: "DStructures.js",
    description: "Zero-dependency, type-safe data structures. 600+ tests.",
    tech: ["TypeScript", "Vitest", "tsup", "TypeDoc"],
    links: [
      { icon: "external", href: "https://www.npmjs.com/package/dstructures.js", label: "npm" },
      { icon: "github", href: "https://github.com/tshields86/DStructures.js", label: "GitHub" },
    ],
  },
  {
    name: "Yodafy",
    description: "Transforms song lyrics into Yoda's speech pattern with Claude AI.",
    tech: ["Next.js", "TypeScript", "Claude API", "Upstash", "Vercel"],
    links: [
      { icon: "external", href: "https://yodafy.vercel.app", label: "Live" },
      { icon: "github", href: "https://github.com/tshields86/yodafy", label: "GitHub" },
    ],
  },
];

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Project {
  name: string;
  role: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

const professionalWork: Project[] = [
  {
    name: 'Vimeo Marketing Platform',
    role: 'Director of Engineering',
    description:
      'Transformed Vimeo\'s marketing web group into a strategic engineering org. Decoupled from a legacy PHP monolith to standalone Next.js servers with ISR, migrated CI/CD to GitHub Actions, and established an experimentation framework with Eppo.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Builder.io', 'Storybook', 'GitHub Actions', 'Datadog', 'Eppo', 'Smartling', 'Bynder', 'GCP'],
    link: 'https://www.vimeo.com/',
  },
  {
    name: 'WeWork Employee Platforms',
    role: 'Software Engineering Manager',
    description:
      'Managed eight engineers building internal apps and microservices. Led a micro-frontend proof-of-concept that eliminated cross-team dependencies, and launched a check-in management tool that drove a 140% increase in Net Promoter Scores.',
    tech: ['React', 'TypeScript', 'Ruby on Rails', 'Microservices', 'Micro-Frontends', 'AWS'],
  },
  {
    name: 'MSG.com',
    role: 'Lead Software Engineer',
    description:
      'Led engineering on Madison Square Garden\'s primary web property. Built Lambda@Edge adaptive image resizing that cut page load times by 30%, and overhauled Elasticsearch indexing from PHP to Node.js Lambdas reducing rebuild time by 85%.',
    tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'Elasticsearch', 'PHP', 'Docker', 'AWS'],
    link: 'https://www.msg.com/',
  },
  {
    name: 'Knicks.com',
    role: 'Lead Software Engineer',
    description:
      'Led a comprehensive sitewide redesign and built custom modules integrating NBA APIs for real-time stats and game scores. Built the All-Star voting platform that helped Kristaps Porziņģis make the 2018 All-Star game, voted best campaign in the league.',
    tech: ['JavaScript', 'React', 'Contentful', 'NBA Stats API'],
    link: 'https://www.nba.com/knicks/',
  },
];

const sideProjects: Project[] = [
  {
    name: 'BBQCopilot',
    role: 'Creator',
    description:
      'AI-powered BBQ app that generates equipment-specific recipes, prep guides, and real-time cook timelines with streaming AI recipe generation and natural language input parsing.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'Claude API'],
    link: 'https://www.bbqcopilot.com/',
    github: 'https://github.com/tshields86/bbqcopilot',
  },
  {
    name: 'Breezlist',
    role: 'Creator',
    description:
      'Mobile-first PWA for creating, sharing, and collaborating on lists in real-time. Features smart item autocomplete powered by user history and offline-capable PWA support with Workbox.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PWA', 'Vite'],
    link: 'https://www.breezlist.com/',
    github: 'https://github.com/tshields86/breezlist',
  },
  {
    name: 'DStructures.js',
    role: 'Creator',
    description:
      'Zero-dependency TypeScript library providing type-safe, generic data structures and algorithms — linked lists, heaps, graphs, hash maps, and more. 600+ tests with 90%+ coverage thresholds.',
    tech: ['TypeScript', 'Vitest', 'tsup', 'TypeDoc'],
    link: 'https://www.npmjs.com/package/dstructures.js',
    github: 'https://github.com/tshields86/DStructures.js',
  },
  {
    name: 'git-sense',
    role: 'Creator',
    description:
      'CLI tool that connects to GitHub and uses Claude to generate narrative summaries, contributor analyses, changelogs, and natural-language Q&A from a repo\'s commit and PR history.',
    tech: ['TypeScript', 'Node.js', 'Claude API', 'Octokit', 'Commander.js'],
    link: 'https://www.npmjs.com/package/git-sense',
    github: 'https://github.com/tshields86/git-sense',
  },
  {
    name: 'Yodafy',
    role: 'Creator',
    description:
      'A web app that transforms song lyrics into Yoda\'s speech pattern using Claude AI, with a rate-limited API and Star Wars-themed UI. Because a little Yoda in your life, everyone needs.',
    tech: ['Next.js', 'TypeScript', 'Claude API', 'Upstash Redis', 'Vercel'],
    link: 'https://yodafy.vercel.app',
    github: 'https://github.com/tshields86/yodafy',
  },
];

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
    >
      <span className="inline-block text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full mb-3">
        {project.role}
      </span>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold">{project.name}</h3>
        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label={`View ${project.name} on GitHub`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label={`Visit ${project.name}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="text-blue-600 dark:text-blue-400 font-mono text-sm mb-2">
              &gt; projects.map()
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Things I&apos;ve Built
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional platforms and personal projects that showcase my engineering journey
            </p>
          </div>

          {/* Professional Work */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="text-blue-600 dark:text-blue-400">{'// '}</span>
              Professional Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {professionalWork.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} isInView={isInView} />
              ))}
            </div>
          </div>

          {/* Side Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="text-blue-600 dark:text-blue-400">{'// '}</span>
              Side Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sideProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} isInView={isInView} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

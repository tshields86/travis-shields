'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  'Leadership & Strategy': [
    'Engineering Leadership',
    'Team Development',
    'Technical Roadmapping',
    'Cross-Functional Collaboration',
    'Agile/Scrum',
    'Mentoring & Coaching',
  ],
  'Platform & Architecture': [
    'Platform Modernization',
    'Microservices',
    'Micro-Frontends',
    'Design Systems',
    'CI/CD Pipelines',
    'Cloud Infrastructure (AWS, GCP)',
  ],
  'Frontend Technologies': [
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Redux',
  ],
  'Backend & Data': [
    'Node.js',
    'GraphQL',
    'RESTful APIs',
    'PostgreSQL',
    'MongoDB',
    'Redis',
  ],
  'Tools & Platforms': [
    'Docker',
    'GitHub Actions',
    'Builder.io',
    'Storybook',
    'Jest',
    'Datadog',
  ],
  'Experimentation & Analytics': [
    'A/B Testing Frameworks',
    'Experimentation Platforms',
    'Data-Driven Optimization',
    'RUM & Performance Monitoring',
    'Analytics Integration',
    'Conversion Optimization',
  ],
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <p className="text-blue-600 dark:text-blue-400 font-mono text-sm mb-2">
              &gt; Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern platforms and leading high-performing teams
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

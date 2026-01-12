'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-blue-600 dark:text-blue-400 font-mono text-sm mb-2">
              &gt; About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Building Teams, Platforms & Impact
            </h2>
          </div>

          {/* Story Content */}
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              As <strong>Director of Engineering at Vimeo</strong>, I lead transformational
              technical initiatives that modernize enterprise web platforms and build
              high-performing engineering teams. I specialize in platform architecture,
              marketing technology, experimentation frameworks, design systems, and{' '}
              <strong>AI-accelerated engineering</strong> that deliver measurable business impact.
            </p>

            <p>
              At Vimeo, I led a major platform overhaul: migrating from a monolith PHP backend
              serving a static site to a standalone <strong>Next.js server</strong> with Incremental
              Static Regeneration (ISR). I modernized the frontend from Page Router to App Router and converted
              the codebase to a monorepo with <strong>GitHub Actions</strong> CI/CD, achieving 50% faster iteration
              cycles and enabling independent deployments. I established a unified experimentation
              framework with <strong>Eppo</strong>, empowering teams to self-serve A/B tests. I
              sponsored the <strong>Chroma design system</strong> unifying Figma, Storybook, and
              Builder.io, and eliminated $150K in annual operational costs by migrating WordPress to Builder.io.
            </p>

            <p>
              My leadership approach centers on <strong>developing technical leaders</strong> who own
              architecture and decision-making autonomously. I've mentored engineers to win Director's
              Cut awards for transformational work. I've also pioneered{' '}
              <strong>AI-accelerated development workflows</strong> using GitHub Copilot and Claude
              Code, boosting engineer velocity and paving the way for agentic coding initiatives.
            </p>

            <p>
              With <strong>10+ years of engineering experience</strong>, I previously led teams at{' '}
              <strong>WeWork</strong>, where I drove a 140% NPS increase through microservice
              architecture, and <strong>The Madison Square Garden Company</strong>, where I served
              as principal developer for Knicks.com and engineered Lambda@Edge optimizations that
              reduced page load times by 30%.
            </p>

            <p>
              I'm committed to fostering cultures of ownership, excellence, and continuous innovation
              where engineers thrive and deliver extraordinary results.
            </p>
          </div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Faster iteration cycles through platform modernization
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                10+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Years of engineering experience across enterprise platforms
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                $150K
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Annual savings through platform consolidation
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

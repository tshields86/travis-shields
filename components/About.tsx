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
              marketing technology, experimentation frameworks, and design systems that deliver
              measurable business impact.
            </p>

            <p>
              At Vimeo, I architected and led the migration of the marketing website from a legacy PHP monolith to a
              modern, scalable web stack based on <strong>Next.js, React, and Tailwind CSS</strong>,
              enabling 50% faster iteration cycles. I established a unified experimentation framework
              integrating Eppo platform, empowering Marketing and Growth teams to self-serve A/B tests
              and optimize conversion independently. I also sponsored the development of Vimeo's marketing
              design system, achieving complete parity across Figma, Storybook, and Builder.io.
            </p>

            <p>
              My leadership approach centers on <strong>developing technical leaders</strong> who own
              architecture, delivery, and decision-making autonomously. I've mentored engineers to win
              awards for transformational work on platform decoupling, CI/CD modernization, and design
              system delivery.
            </p>

            <p>
              Previously at <strong>WeWork</strong> and{' '}
              <strong>The Madison Square Garden Company</strong>, I led engineering teams and built
              high-traffic web applications serving millions of users. I bring deep expertise in
              JavaScript, TypeScript, Node.js, React, Next.js, GraphQL, microservices, and cloud
              infrastructure, combined with strategic thinking in technical roadmap planning and
              cross-functional collaboration.
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
                8+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Years leading high-performing engineering teams
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                Platform
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Scale architecture & experimentation frameworks
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

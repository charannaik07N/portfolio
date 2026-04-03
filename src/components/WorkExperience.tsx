import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CalendarDays, ExternalLink, Sparkles } from 'lucide-react';

type Experience = {
  role: string;
  company: string;
  duration: string;
  current?: boolean;
  bullets: string[];
  impact: string;
  tags: string[];
  githubUrl?: string;
};

const experiences: Experience[] = [
  {
    role: 'Frontend Developer Intern',
    company: 'Prodesk IT',
    duration: 'Present',
    current: true,
    bullets: [
      'Developing responsive React interfaces for product workflows and user-facing pages.',
      'Integrating backend APIs to support seamless end-to-end feature delivery.',
      'Improving performance, accessibility, and visual consistency across the UI.',
      'Collaborating with product and development teams to ship iterative UI improvements.'
    ],
    impact: 'Helped improve UI responsiveness and delivery speed for active product workflows.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'API Integration'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Edunet Foundation',
    duration: '2 months',
    bullets: [
      'Built interactive web applications with clean, maintainable frontend structure.',
      'Improved UI/UX quality through better spacing, hierarchy, and accessibility practices.',
      'Translated designs into functional interfaces using HTML, CSS, and JavaScript.',
      'Supported responsive feature delivery across desktop and mobile layouts.'
    ],
    impact: 'Contributed to accessible learning-focused interfaces that were easier to navigate and use.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Accessibility'],
  },
  {
    role: 'Freelance Frontend Developer',
    company: 'Independent Client Work',
    duration: 'Project-based',
    bullets: [
      'Delivered 5+ client projects across business websites and product landing pages.',
      'Built responsive websites and e-commerce interfaces optimized for mobile and desktop.',
      'Created reusable frontend components to improve scalability and future maintenance.',
      'Ensured clear handoff, maintainable code structure, and polished visual execution.'
    ],
    impact: 'Delivered 5+ production-ready projects that improved client presence and engagement.',
    tags: ['React', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    role: 'Co-Founder & Frontend Developer',
    company: 'LasyWorks',
    duration: 'Ongoing',
    bullets: [
      'Leading frontend development and UI design for product-facing experiences.',
      'Building scalable layouts and reusable sections to support long-term growth.',
      'Partnering on product direction, implementation decisions, and visual polish.',
      'Maintaining strong performance, responsiveness, and user experience across screens.'
    ],
    impact: 'Helped establish the frontend foundation for a growing product brand and design system.',
    tags: ['Frontend Strategy', 'UI Design', 'React', 'Scalable UI'],
    githubUrl: 'https://github.com/LasyWorks',
  },
];

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`group relative rounded-2xl border p-6 md:p-7 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)] ${
        experience.current
          ? 'border-blue-200/80 bg-gradient-to-br from-blue-50/80 via-white to-white dark:border-blue-800/70 dark:from-blue-950/20 dark:via-gray-900 dark:to-gray-900'
          : 'border-border bg-background'
      }`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-blue-500/[0.03] group-hover:to-cyan-500/[0.05]" />

      <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:gap-6">
        <div className="flex items-start gap-4 md:w-72 md:flex-shrink-0">
          <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
            <Briefcase className="h-5 w-5" />
            {experience.current && (
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 ring-4 ring-white dark:ring-gray-900" />
            )}
          </div>

          <div className="md:hidden">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              <CalendarDays className="h-3.5 w-3.5" />
              {experience.duration}
            </div>
            {experience.current && (
              <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" />
                Current Role
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 space-y-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {experience.role}
                </h3>
                {experience.current && (
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                    Current Role
                  </span>
                )}
              </div>
              <p className="mt-1 text-lg font-medium text-blue-600 dark:text-blue-400">
                {experience.company}
              </p>
            </div>

            <div className="hidden shrink-0 items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground md:inline-flex">
              <CalendarDays className="h-4 w-4" />
              {experience.duration}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              What I did
            </h4>
            <ul className="mt-3 space-y-3">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted-foreground md:text-[15px]">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-blue-200/70 bg-blue-50/60 p-4 dark:border-blue-900/50 dark:bg-blue-950/20">
            <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">Impact</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{experience.impact}</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-foreground transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700 dark:group-hover:border-blue-800 dark:group-hover:bg-blue-950/30 dark:group-hover:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {experience.githubUrl && (
            <a
              href={experience.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <ExternalLink className="h-4 w-4" />
              GitHub link
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function WorkExperience() {
  return (
    <section id="work-experience" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-8 top-12 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute right-8 bottom-12 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl dark:bg-cyan-500/10" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm dark:border-blue-900 dark:bg-blue-950/20 dark:text-blue-300"
          >
            <Sparkles className="h-4 w-4" />
            Work Experience
          </motion.div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300 md:text-5xl">
            Professional Journey
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            A concise timeline of frontend delivery, client work, and product-focused development experience.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-6 top-4 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-blue-600 via-cyan-500 to-transparent lg:block" />

          <div className="space-y-6 md:space-y-8 lg:pl-14">
            {experiences.map((experience, index) => (
              <div key={`${experience.company}-${experience.role}`} className="relative">
                <div className="absolute left-0 top-8 hidden h-5 w-5 rounded-full border-4 border-background bg-blue-600 shadow-lg lg:block" />
                <ExperienceCard experience={experience} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
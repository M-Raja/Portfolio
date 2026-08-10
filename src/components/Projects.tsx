import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, Hourglass } from 'lucide-react';
import project1 from '@/assets/project-3.jpg';
import project2 from '@/assets/project-4.jpg';

type Status = 'completed' | 'development';

const projects: {
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  status: Status;
}[] = [
  {
    category: 'Security Operations',
    title: 'Incident Detection & Investigation',
    description:
      'Analyzed Windows logs to detect suspicious login patterns and brute-force attempts using SIEM. Built investigation timelines and documented incident response workflows.',
    tags: ['SIEM', 'Windows Logs', 'Incident Response'],
    image: project1,
    link: 'https://github.com/M-Raja?tab=repositories',
    status: 'development',
  },
  {
    category: 'Cloud Security',
    title: 'Misconfiguration Detection & Response',
    description:
      'Identified AWS misconfigurations including public storage and over-permissive IAM policies. Used CloudTrail and CloudWatch to analyze risks and recommend fixes.',
    tags: ['AWS', 'CloudTrail', 'IAM'],
    image: project2,
    link: 'https://github.com/M-Raja?tab=repositories',
    status: 'development',
  },
];

const statusTabs: { id: Status; label: string; emptyMessage: string }[] = [
  { id: 'completed', label: 'Completed', emptyMessage: 'No completed projects yet.' },
  {
    id: 'development',
    label: 'Development',
    emptyMessage: 'Currently in the workshop, check back soon.',
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<Status>('completed');
  const filtered = projects.filter((p) => p.status === activeTab);
  const activeMeta = statusTabs.find((t) => t.id === activeTab)!;

  return (
    <section id="projects" className="relative py-28 sm:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold tracking-tighter text-4xl sm:text-5xl text-slate-900"
          >
            PROJECTS
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            href="https://github.com/M-Raja?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white text-slate-900 text-sm font-semibold px-5 py-3 hover:border-[#0B60B0]/50 hover:text-[#0B60B0] transition-colors w-fit shadow-sm"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4 text-[#0B60B0]" />
          </motion.a>
        </div>

        {/* Status pill tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1 rounded-full bg-white border border-slate-200 shadow-sm p-1.5 mb-10"
        >
          {statusTabs.map((tab) => {
            const count = projects.filter((p) => p.status === tab.id).length;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  active ? 'text-[#0B60B0]' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="projectTabActiveBg"
                    className="absolute inset-0 rounded-full bg-[#EAF2FB]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
                {active && (
                  <span className="relative z-10 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-[#0B60B0] text-white text-[11px] font-bold">
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filtered.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:border-[#0B60B0]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1116]/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 border border-slate-200 text-[11px] uppercase tracking-widest text-[#0B60B0] font-semibold">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-7">
                    <h3 className="font-display font-bold text-xl text-slate-900 mb-3 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 text-slate-900 text-sm font-semibold px-5 py-3 hover:border-[#0B60B0]/50 hover:text-[#0B60B0] transition-colors w-full justify-center"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white/60 py-20 px-6 text-center"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#EAF2FB] mb-4">
                <Hourglass className="h-5 w-5 text-[#0B60B0]" />
              </span>
              <p className="text-slate-500 text-sm">{activeMeta.emptyMessage}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

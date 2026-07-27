import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type Platform = {
  name: string;
  logo: string;
  href: string;
  metricLabel: string;
  value: number;
  color: string;
  detail: string;
};

const maxValue = 60;

const platforms: Platform[] = [
  {
    name: 'TryHackMe',
    logo: '/thm-logo.svg',
    href: 'https://tryhackme.com/',
    metricLabel: 'Rooms Completed',
    value: 0,
    color: '#212C42',
    detail: 'Top 8% Worldwide',
  },
  {
    name: 'LetsDefend',
    logo: '/letsdefend-icon.png',
    href: 'https://letsdefend.io/',
    metricLabel: 'SOC Investigations',
    value: 0,
    color: '#6366f1',
    detail: 'Blue-team simulations',
  },
  {
    name: 'picoCTF',
    logo: '/picoctf-icon.png',
    href: 'https://picoctf.org/',
    metricLabel: 'Challenges Solved',
    value: 0,
    color: '#C41230',
    detail: 'Binary, web & crypto',
  },
];

const Practice = () => {
  return (
    <section id="practice" className="relative py-28 sm:py-32 bg-white overflow-hidden">
      {/* Faint grid overlay */}
      <div className="absolute inset-0 bg-grid-faint opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0B60B0]" />
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-widest">
                Continuous Learning
              </span>
            </div>

            <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-4xl sm:text-5xl md:text-6xl text-slate-900 mb-6">
              HANDS-ON
              <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #0B60B0' }}>
                PRACTICE
              </span>
              <span className="text-[#0B60B0]">.</span>
            </h2>

            <p className="text-slate-600 leading-relaxed max-w-md mb-10">
              Beyond the job, I sharpen my skills daily on hands-on security labs and CTF
              platforms, simulating real attacks and defenses to stay ahead of evolving threats.
            </p>

            <div className="flex items-center gap-10">
              <div>
                <p className="font-display font-bold text-4xl text-slate-900">
                  {platforms.reduce((sum, p) => sum + p.value, 0)}+
                </p>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">
                  Challenges Completed
                </p>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <p className="font-display font-bold text-4xl text-slate-900">{platforms.length}</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">
                  Active Platforms
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column: bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8"
          >
            <div className="space-y-10">
              {platforms.map((platform, i) => {
                const percent = Math.min((platform.value / maxValue) * 100, 100);
                const labelPos = Math.min(Math.max(percent, 9), 91);
                return (
                  <div key={platform.name}>
                    <a
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 mb-6"
                    >
                      <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 p-1.5 flex-shrink-0 overflow-hidden">
                        <img
                          src={platform.logo}
                          alt={`${platform.name} logo`}
                          className="max-w-full max-h-full w-auto h-auto object-contain"
                        />
                      </span>
                      <span>
                        <span className="flex items-center gap-1.5 font-display font-semibold text-slate-900 text-sm sm:text-base">
                          {platform.name}
                          <ExternalLink className="h-3 w-3 text-slate-400 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                        </span>
                        <span className="block text-[11px] text-slate-500">{platform.detail}</span>
                      </span>
                    </a>

                    {/* Minimal line-scrubber progress */}
                    <div className="relative h-8 mt-6">
                      {/* floating value callout above the handle */}
                      <motion.div
                        className="absolute bottom-full mb-2 -translate-x-1/2 text-center whitespace-nowrap"
                        initial={{ left: '9%', opacity: 0 }}
                        whileInView={{ left: `${labelPos}%`, opacity: 1 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <span className="block font-display font-bold text-lg leading-none" style={{ color: platform.color }}>
                          {platform.value}
                        </span>
                        <span className="block text-[9px] uppercase tracking-widest text-slate-400 mt-1">
                          {platform.metricLabel}
                        </span>
                      </motion.div>

                      {/* base track */}
                      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-slate-200" />

                      {/* traveled segment */}
                      <motion.div
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-px"
                        style={{ background: platform.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percent}%` }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      />

                      {/* start tick */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-2.5 bg-slate-300" />
                      {/* end tick */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-2.5 bg-slate-300" />

                      {/* handle */}
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-0.5 h-4 rounded-full"
                        style={{ background: platform.color }}
                        initial={{ left: '0%' }}
                        whileInView={{ left: `${percent}%` }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Practice;

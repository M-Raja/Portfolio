import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, Briefcase, GraduationCap, Heart, type LucideIcon } from 'lucide-react';

const workExperience = [
  {
    title: 'Associate Technical Engineer',
    company: 'Kyndryl India · Full-time',
    logo: '/kyndryl-badge.png',
    logoFit: 'cover' as const,
    location: 'Chennai, Tamil Nadu, IND · On-site',
    duration: 'Aug 2023 – Jun 2025',
    team: 'Infrastructure Operations (Mainframe & Cloud Services)',
    achievements: [
      'Monitored and triaged alerts in a 24×7 NOC/SOC environment, managing 100+ monthly incidents via ServiceNow & BMC Remedy with 100% SLA compliance (ITIL).',
      'Performed Root Cause Analysis (RCA) on operational and security alerts, cutting recurring incidents by 20% through preventive fixes.',
      'Automated monitoring and batch workflows using Bash, Control-M, and IBM Tivoli OPC, reducing manual effort by 30%.',
      'Supported IBM Mainframe and cloud production systems, including DR and failover testing, to ensure uptime, compliance, and audit readiness.',
      'Collaborated cross-functionally on enterprise projects for APMM and Naturgy, covering data center migrations and service reliability.',
    ],
  },
];

const education = [
  {
    title: 'BCA · Computer Programming, Specific Applications',
    company: 'SRM Institute of Science and Technology',
    logo: '/srm-logo.png',
    logoZoom: true,
    location: 'Chennai, IND',
    duration: '2020 – 2023',
    achievements: [
      'Proficient in Python, Web Technologies, and Database Management Systems (DBMS).',
      'Strong understanding of Cybersecurity, Computer Networks, Cloud Computing, and Artificial Intelligence (AI).',
      'Passionate about problem-solving and applying technology to build secure, real-world solutions.',
    ],
  },
  {
    title: 'High School',
    company: 'Santhome HSS, Chennai',
    logo: '/santhome-logo.png',
    logoZoom: true,
    location: 'Chennai, IND',
    duration: '2018 – 2020',
    achievements: [
      'Completed High School with a major in Computer Science, Maths, Physics, and Chemistry.',
    ],
  },
];

const volunteering = [
  {
    title: 'Campus Ambassador',
    company: 'TechLearn.live',
    logo: '/techlearn-logo.png',
    logoFit: 'cover' as const,
    location: 'Remote',
    duration: 'Jul 2021 – Sep 2021',
    team: 'Community Engagement (Social Media & Creative Design)',
    achievements: [
      'Supported social media management and community outreach initiatives to promote educational programs and events.',
      'Designed posters, promotional materials, and digital content using Canva to increase engagement and brand visibility.',
      'Collaborated with the team to create communication campaigns and support community engagement activities.',
      'Strengthened skills in social media marketing, visual design, communication, teamwork, and event promotion.',
    ],
  },
];

type TimelineEntry = {
  title: string;
  company: string;
  logo?: string;
  logoFit?: 'contain' | 'cover';
  logoZoom?: boolean;
  location: string;
  duration: string;
  team?: string;
  achievements: string[];
};

const TimelineGroup = ({
  icon: Icon,
  label,
  toggleLabel,
  ribbon,
  notch,
  iconColor,
  entries,
}: {
  icon: LucideIcon;
  label: string;
  toggleLabel?: string;
  ribbon: string;
  notch: string;
  iconColor: string;
  entries: TimelineEntry[];
}) => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggle = (i: number) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div>
      <div className="flex items-center gap-2.5 mb-6">
        <Icon className="h-[18px] w-[18px] flex-shrink-0" style={{ color: iconColor }} strokeWidth={2.25} />
        <h3 className="font-display font-bold text-lg text-slate-900 tracking-tight">{label}</h3>
        <div className="flex-1 h-px bg-slate-200 ml-1" />
      </div>

      <div className="relative pl-14">
        <div className="absolute left-5 top-5 bottom-5 w-px overflow-hidden">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
            className="w-full h-full bg-slate-300"
          />
        </div>

        {entries.map((entry, i) => {
          return (
          <motion.div
            key={entry.title + entry.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative mb-5 last:mb-0"
          >
            <span
              className="absolute -left-14 top-0 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden ring-4 ring-white bg-white shadow-sm transition-transform duration-300 group-hover:scale-110"
              style={{ boxShadow: '0 0 0 1px rgba(15,23,42,0.06)' }}
            >
              {entry.logo && (
                <img
                  src={entry.logo}
                  alt={`${entry.company} logo`}
                  className={
                    entry.logoFit === 'cover'
                      ? 'w-full h-full object-cover'
                      : `w-full h-full object-contain ${entry.logoZoom ? 'p-0.5' : 'p-1.5'}`
                  }
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              )}
            </span>

            <div className="relative overflow-hidden rounded-xl bg-slate-50 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5">
              <div className="relative h-[6px] w-full overflow-hidden" style={{ background: ribbon }}>
                <div
                  className="absolute top-0 h-full w-2.5"
                  style={{ right: '22%', background: notch, transform: 'skewX(-18deg)' }}
                />
              </div>

              <div className="p-4 sm:p-5">
                <h4 className="font-display font-semibold text-slate-900 leading-snug mb-1">{entry.title}</h4>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-[#0B60B0]">{entry.company}</span>
                </div>
                <div className="flex items-center gap-3.5 text-xs text-slate-500 mb-3 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    {entry.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" />
                    {entry.location}
                  </span>
                </div>

                {entry.achievements.length > 0 && (
                  toggleLabel ? (
                    <div>
                      <button
                        onClick={() => toggle(i)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0B60B0] transition-colors"
                      >
                        {toggleLabel}
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded[i] ? 'rotate-180' : ''}`} />
                      </button>
                      {entry.team && (
                        <p className="text-xs text-slate-600 mt-1.5">
                          <span className="font-semibold text-[#0B60B0]">Team:</span> {entry.team}
                        </p>
                      )}
                      <AnimatePresence initial={false}>
                        {expanded[i] && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden space-y-2 mt-3"
                          >
                            {entry.achievements.map((line, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: j * 0.05 }}
                                className="text-sm text-slate-600 leading-relaxed flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-[6px] flex-shrink-0" />
                                <span>{line}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <p className="text-sm text-slate-600 leading-relaxed">{entry.achievements[0]}</p>
                  )
                )}
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 sm:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#0B60B0]/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#0B60B0]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display font-bold tracking-tighter text-4xl sm:text-5xl text-slate-900">
            WORK{' '}
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #0B60B0' }}>
              EXPERIENCE
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <TimelineGroup
            icon={Briefcase}
            label="Work Experience"
            toggleLabel="Responsibilities"
            ribbon="linear-gradient(90deg, #1e293b, #000000)"
            notch="rgba(255,255,255,0.85)"
            iconColor="#0B60B0"
            entries={workExperience}
          />
          <div className="space-y-10">
            <TimelineGroup
              icon={GraduationCap}
              label="Education"
              toggleLabel="Highlights"
              ribbon="linear-gradient(90deg, #1e293b, #000000)"
              notch="rgba(255,255,255,0.85)"
              iconColor="#0B60B0"
              entries={education}
            />
            <TimelineGroup
              icon={Heart}
              label="Volunteering"
              toggleLabel="Contributions"
              ribbon="linear-gradient(90deg, #1e293b, #000000)"
              notch="rgba(255,255,255,0.85)"
              iconColor="#0B60B0"
              entries={volunteering}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

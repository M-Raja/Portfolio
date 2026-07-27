import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from 'framer-motion';
import { BadgeCheck, Clock3, Calendar } from 'lucide-react';

type Cert = {
  title: string;
  issuer: string;
  status: 'verified' | 'progress';
  issued: string;
  expires?: string;
  credentialId?: string;
  logo: string;
};

const certifications: Cert[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    status: 'verified',
    issued: 'Nov 2025',
    expires: 'Nov 2028',
    credentialId: '9786a4ddaed54f26820c88aa30e0dfec',
    logo: '/aws-badge.png',
  },
  {
    title: 'Network Security Fundamentals',
    issuer: 'Palo Alto Networks',
    status: 'verified',
    issued: 'Apr 2026',
    credentialId: 'C415998',
    logo: '/paloalto-logo.png',
  },
  {
    title: 'Automation – Cloud Computing',
    issuer: 'Kyndryl',
    status: 'verified',
    issued: 'Mar 2024',
    logo: '/kyndryl-icon.png',
  },
  {
    title: 'Cyber Security & Ethical Hacking (Advanced)',
    issuer: 'HCL GUVI',
    status: 'verified',
    issued: 'May 2022',
    logo: '/guvi-logo-clean.png',
  },
];

const CertCard = ({ cert, index }: { cert: Cert; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVerified = cert.status === 'verified';

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 25,
  });

  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(11,96,176,0.14), transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0B60B0]/30 transition-shadow duration-300 p-4 sm:p-5 overflow-hidden will-change-transform"
      >
        {/* Cursor-following glare */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: glareBackground }}
        />

        <div className="relative z-10 flex items-start gap-3.5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center flex-shrink-0">
            <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-semibold text-sm sm:text-[15px] text-slate-900 leading-snug">
                {cert.title}
              </h3>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[9px] font-semibold uppercase tracking-wider whitespace-nowrap flex-shrink-0 ${
                  isVerified ? 'bg-[#EAF2FB] text-[#0B60B0]' : 'bg-amber-50 text-amber-600'
                }`}
              >
                {isVerified ? (
                  <BadgeCheck className="h-3 w-3" />
                ) : (
                  <Clock3 className="h-3 w-3" />
                )}
                {isVerified ? 'Verified' : 'In Progress'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#0B60B0] font-medium mt-1">{cert.issuer}</p>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between gap-2 mt-3.5 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500">
            <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
            <span>
              Issued {cert.issued}
              {cert.expires ? ` · Expires ${cert.expires}` : ''}
            </span>
          </div>
          {cert.credentialId && (
            <p className="text-[10px] font-mono text-slate-400 truncate max-w-[40%]">
              ID: {cert.credentialId}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-28 sm:py-32 bg-white overflow-hidden">
      {/* Faint grid overlay for continuity with Hero */}
      <div className="absolute inset-0 bg-grid-faint opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#0B60B0]" />
            <span className="text-sm font-semibold text-slate-600 uppercase tracking-widest">
              Credentials
            </span>
          </div>
          <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-4xl sm:text-5xl md:text-6xl text-slate-900">
            CERTIFIED
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #0B60B0' }}>
              &amp; VERIFIED.
            </span>
          </h2>
          <p className="text-slate-600 mt-6 leading-relaxed">
            Licenses &amp; certifications earned across cloud security, network security, and
            security automation, with verified credentials straight from LinkedIn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

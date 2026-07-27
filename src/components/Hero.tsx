import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, MapPin, Mail } from 'lucide-react';
import { CONTACT_EMAIL, MAILTO_HREF } from '@/lib/contact';

const Hero = () => {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24 pb-16 lg:pb-0"
    >
      {/* Faint grid overlay */}
      <div className="absolute inset-0 bg-grid-faint" />

      {/* Giant ghost typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display font-extrabold text-slate-900 opacity-[0.035] text-[20vw] leading-none tracking-tighter whitespace-nowrap">
          SECURE
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-start">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:pt-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0B60B0]" />
            <span className="text-sm font-semibold text-slate-600 uppercase tracking-widest">
              Security Analyst
            </span>
          </div>

          <h1 className="font-display font-bold tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] mb-8">
            <span className="block text-slate-900">COMMITTED</span>
            <span className="block">
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '2px #0B60B0' }}
              >
                TO SECURE
              </span>
              <span className="text-[#0B60B0]">.</span>
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md mb-10">
            Securing the digital world through better infrastructure, sharper detection,
            and a safer tomorrow.
          </p>

          <motion.button
            onClick={() => scrollToId('experience')}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1878D6] to-[#0B60B0] text-white font-semibold text-sm px-8 py-4 shadow-[0_14px_30px_-10px_rgba(11,96,176,0.55)] transition-shadow duration-300 hover:shadow-[0_18px_36px_-10px_rgba(11,96,176,0.65)]"
          >
            Explore My Work
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4 text-[#0B60B0]" />
            </span>
          </motion.button>
        </motion.div>

        {/* Right column: ID card on a flat lanyard strap, pinned to the top */}
        <div className="relative flex flex-col items-center self-start">
          {/* Decorative minimal HUD schematic, subtle engineering-readout accent behind the card */}
          <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none select-none z-0">
            {/* Rotating dial rings */}
            <motion.svg
              width="440"
              height="440"
              viewBox="0 0 440 440"
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
              className="absolute opacity-[0.08]"
            >
              <circle cx="220" cy="220" r="200" stroke="#0B60B0" strokeWidth="1" fill="none" strokeDasharray="2 7" />
              <circle cx="220" cy="220" r="158" stroke="#0B60B0" strokeWidth="1" fill="none" />
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 15 * Math.PI) / 180;
                const outer = 200;
                const inner = i % 6 === 0 ? 182 : 191;
                return (
                  <line
                    key={i}
                    x1={220 + outer * Math.cos(angle)}
                    y1={220 + outer * Math.sin(angle)}
                    x2={220 + inner * Math.cos(angle)}
                    y2={220 + inner * Math.sin(angle)}
                    stroke="#0B60B0"
                    strokeWidth={i % 6 === 0 ? 1.5 : 1}
                  />
                );
              })}
            </motion.svg>

            {/* Static schematic frame: corner brackets, arc labels, readouts, pill row */}
            <div className="relative w-[300px] h-[470px]">
              <span className="absolute -top-1 -left-1 w-4 h-4 border-l border-t border-[#0B60B0]/25" />
              <span className="absolute -top-1 -right-1 w-4 h-4 border-r border-t border-[#0B60B0]/25" />
              <span className="absolute -bottom-1 -left-1 w-4 h-4 border-l border-b border-[#0B60B0]/25" />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 border-r border-b border-[#0B60B0]/25" />

              {/* Top arc tick labels */}
              <div className="absolute top-6 left-0 right-0 flex items-center justify-between px-1 font-mono text-[9px] tracking-widest text-[#0B60B0]/30">
                <span>SEC · 01.0</span>
                <span>IDX 100.0</span>
              </div>
              <div className="absolute top-9 left-0 right-0 h-px bg-[#0B60B0]/10" />

              {/* Mid-height data readouts, flanking the card */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-6 font-mono text-[9px] tracking-wider text-[#0B60B0]/30 leading-relaxed">
                <p>CVE&nbsp; 042</p>
                <p>SOC&nbsp; 128</p>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-6 font-mono text-[9px] tracking-wider text-[#0B60B0]/30 leading-relaxed text-right">
                <p>IR&nbsp;&nbsp;&nbsp;016</p>
                <p>TI&nbsp;&nbsp;&nbsp;054</p>
              </div>

              {/* Bottom pill row */}
              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                {['SOC', 'IR', 'TI', 'DF'].map((label) => (
                  <span
                    key={label}
                    className="px-2 py-0.5 rounded-full border border-[#0B60B0]/20 text-[8px] font-mono tracking-widest text-[#0B60B0]/35"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <span className="absolute top-[16%] right-[10%] w-1.5 h-1.5 rounded-full bg-[#0B60B0] opacity-20 animate-pulse" />
            <span className="absolute bottom-[18%] left-[12%] w-1 h-1 rounded-full bg-[#0B60B0] opacity-20 animate-pulse" style={{ animationDelay: '1.2s' }} />
          </div>

          {/* Strap + card sway together, like a real badge on a lanyard */}
          <motion.div
            animate={{ rotateZ: [-2, 2, -2] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 flex flex-col items-center"
            style={{ transformOrigin: 'top center' }}
          >
            {/* Flat fabric lanyard strap */}
            <div
              className="relative w-7 sm:w-8 lg:w-9 h-24 sm:h-28 lg:h-32 flex-shrink-0 rounded-sm"
              style={{
                background: 'linear-gradient(90deg, #0a0a0c 0%, #232328 42%, #2c2c32 50%, #232328 58%, #0a0a0c 100%)',
                boxShadow: '0 8px 20px -8px rgba(0,0,0,0.5)',
              }}
            >
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] bg-white/10" />
            </div>

            {/* Rectangular loop where the strap folds over the D-ring */}
            <div
              className="relative w-9 sm:w-10 h-2.5 -mt-0.5 rounded-[2px] flex-shrink-0"
              style={{ background: 'linear-gradient(180deg, #16161a, #050506)', boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            />

            {/* D-ring */}
            <div className="relative w-5 h-4 -mt-px flex-shrink-0">
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: '2px 2px 50% 50%',
                  border: '3px solid #1c1c20',
                  boxShadow: '0 2px 3px rgba(0,0,0,0.4)',
                }}
              />
            </div>

            {/* Trigger-snap hook clasp */}
            <svg
              width="22"
              height="34"
              viewBox="0 0 22 34"
              className="relative -mt-px flex-shrink-0"
              style={{ filter: 'drop-shadow(0 3px 4px rgba(0,0,0,0.4))' }}
            >
              <defs>
                <linearGradient id="hookMetal" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3a3a40" />
                  <stop offset="45%" stopColor="#1c1c20" />
                  <stop offset="100%" stopColor="#0a0a0c" />
                </linearGradient>
              </defs>
              <rect x="5" y="0" width="12" height="12" rx="4" fill="url(#hookMetal)" />
              <rect x="8" y="3" width="6" height="6" rx="3" fill="#f5f5f5" fillOpacity="0.08" />
              <path
                d="M11 10 C 11 10, 20 10, 20 19 C 20 26, 13 27, 9 24"
                fill="none"
                stroke="url(#hookMetal)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M11 12 C 11 12, 15 13, 15 18"
                fill="none"
                stroke="#0a0a0c"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>

            {/* Card: draggable, with a punched slot the hook passes through */}
            <motion.div
              drag
              dragElastic={0.2}
              dragConstraints={{ top: -30, bottom: 30, left: -30, right: 30 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              whileTap={{ cursor: 'grabbing' }}
              className="relative -mt-6 cursor-grab"
            >
              <div
                className="relative z-10 w-[190px] sm:w-[220px] lg:w-[240px] rounded-[22px] sm:rounded-[26px] bg-white overflow-hidden"
                style={{ boxShadow: '0 30px 60px -18px rgba(15,23,42,0.35)' }}
              >
                {/* Punched slot */}
                <div
                  className="absolute left-1/2 top-[14px] sm:top-4 -translate-x-1/2 w-8 h-3 rounded-full bg-white z-20"
                  style={{ boxShadow: 'inset 0 1.5px 3px rgba(0,0,0,0.3)' }}
                />

                {/* Gradient header band */}
                <div
                  className="relative h-16 sm:h-[74px] lg:h-20 w-full"
                  style={{ background: 'linear-gradient(135deg, #4DA3E8 0%, #1878D6 45%, #0B60B0 75%, #073a6e 100%)' }}
                >
                  <span
                    className="absolute left-3.5 sm:left-4 top-1/2 font-display font-bold text-white text-[11px] sm:text-xs tracking-[0.2em] whitespace-nowrap"
                    style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
                  >
                    Root
                  </span>
                </div>

                <div className="px-5 sm:px-6 pb-5 sm:pb-6 flex flex-col items-center text-center">
                  {/* Avatar, centered and overlapping the band seam */}
                  <div className="relative -mt-9 sm:-mt-10 lg:-mt-11 mb-3">
                    <div
                      className="w-[72px] h-[72px] sm:w-20 sm:h-20 lg:w-[88px] lg:h-[88px] rounded-full overflow-hidden bg-slate-100"
                      style={{ boxShadow: '0 0 0 4px #ffffff, 0 10px 20px -8px rgba(15,23,42,0.4)' }}
                    >
                      <img
                        src="/raja-photo.png"
                        alt="Raja M"
                        className="w-full h-full object-cover object-[50%_15%]"
                        draggable={false}
                      />
                    </div>
                    <span
                      className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center w-6 h-6 sm:w-[26px] sm:h-[26px] rounded-full ring-[3px] ring-white"
                      style={{ background: 'linear-gradient(135deg, #4DA3E8, #1878D6, #0B60B0)' }}
                    >
                      <ShieldCheck className="h-3 w-3 sm:h-[13px] sm:w-[13px] text-white" strokeWidth={2.5} />
                    </span>
                  </div>

                  <p className="font-display font-bold text-slate-900 text-lg sm:text-xl leading-tight">
                    Raja M.
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-semibold text-[#0B60B0] uppercase tracking-widest mt-1 mb-4 sm:mb-5">
                    Security Analyst
                  </p>

                  <div className="w-full space-y-2 sm:space-y-2.5 pt-4 sm:pt-5 border-t border-slate-100">
                    <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-slate-500">
                      <MapPin className="h-3 w-3 flex-shrink-0" />
                      Chennai, Tamil Nadu, IN
                    </div>
                    <a
                      href={MAILTO_HREF}
                      className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-slate-500 hover:text-[#0B60B0] transition-colors truncate"
                    >
                      <Mail className="h-3 w-3 flex-shrink-0" />
                      {CONTACT_EMAIL}
                    </a>
                    <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-widest pt-1">
                      ID · 0X4F2A
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

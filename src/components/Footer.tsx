import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT_EMAIL, MAILTO_HREF } from '@/lib/contact';

const menuLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Projects', id: 'projects' },
  { label: 'Practice', id: 'practice' },
  { label: 'Blog', id: 'blog' },
  { label: 'Contact', id: 'contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/M-Raja', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/m-raja-/', icon: Linkedin },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToId = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer id="contact" className="relative pt-32 pb-10 border-t border-slate-200 bg-white overflow-hidden">
      {/* Giant background text */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none select-none translate-y-1/4">
        <span className="font-display font-extrabold text-slate-900 opacity-[0.04] text-[25vw] leading-none tracking-tighter whitespace-nowrap">
          CONTACT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold tracking-tighter text-4xl sm:text-5xl md:text-6xl text-slate-900 mb-6 leading-[0.95]">
              HOW CAN<br />I HELP?
            </h2>
            <p className="text-slate-600 leading-relaxed max-w-md mb-8">
              Whether you want to discuss a project, explore collaboration opportunities, or
              simply connect with a fellow security professional, I'd love to hear from you.
              Let's build something secure together.
            </p>
            <a
              href={MAILTO_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1878D6] to-[#0B60B0] text-white font-semibold text-sm px-7 py-4 shadow-[0_10px_30px_-8px_rgba(11,96,176,0.5)] hover:scale-105 transition-transform duration-300"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-8 md:justify-self-end"
          >
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-5">Menu</p>
              <ul className="space-y-3">
                {menuLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToId(link.id)}
                      className="text-slate-600 hover:text-[#0B60B0] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-5">Socials</p>
              <ul className="space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#0B60B0] transition-colors group"
                    >
                      {social.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p>© {currentYear} Raja M. All rights reserved.</p>
          <p>Built with passion and love.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

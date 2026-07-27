import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  User,
  Briefcase,
  Award,
  Terminal,
  FolderGit2,
  Home,
  LayoutGrid,
  PenLine,
  type LucideIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MAILTO_HREF } from '@/lib/contact';

type NavItem = { id: string; label: string; desc: string; icon: LucideIcon };
type NavGroup = { label: string; items: NavItem[] };

const navGroups: NavGroup[] = [
  {
    label: 'Profile',
    items: [
      { id: 'about', label: 'About', desc: 'Who I am', icon: User },
      { id: 'experience', label: 'Experience', desc: 'Where I\u2019ve worked', icon: Briefcase },
      { id: 'certifications', label: 'Certifications', desc: 'Credentials earned', icon: Award },
    ],
  },
  {
    label: 'Work',
    items: [
      { id: 'projects', label: 'Projects', desc: 'Things I\u2019ve built', icon: FolderGit2 },
      { id: 'practice', label: 'Practice', desc: 'Labs & CTFs', icon: Terminal },
      { id: 'blog', label: 'Blog', desc: 'Writing & notes', icon: PenLine },
    ],
  },
];

const navSocials = [
  { label: 'GitHub', href: 'https://github.com/M-Raja', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/m-raja-/', icon: Linkedin },
  { label: 'Email', href: MAILTO_HREF, icon: Mail },
];

// Everything reachable from the "More" popover on mobile/tablet
const moreItems: NavItem[] = [
  { id: 'certifications', label: 'Certs', desc: 'Credentials earned', icon: Award },
  { id: 'projects', label: 'Projects', desc: 'Things I\u2019ve built', icon: FolderGit2 },
  { id: 'practice', label: 'Practice', desc: 'Labs & CTFs', icon: Terminal },
  { id: 'blog', label: 'Blog', desc: 'Writing & notes', icon: PenLine },
];
const moreSectionIds = new Set(moreItems.map((i) => i.id));

type BottomTab = {
  id: string;
  label: string;
  icon: LucideIcon;
  targetId?: string;
};

// Home stays dead-center of the five tabs
const bottomTabs: BottomTab[] = [
  { id: 'about', label: 'About', icon: User, targetId: 'about' },
  { id: 'experience', label: 'Experience', icon: Briefcase, targetId: 'experience' },
  { id: 'home', label: 'Home', icon: Home, targetId: 'home' },
  { id: 'contact', label: 'Contact', icon: Mail, targetId: 'contact' },
  { id: 'more', label: 'More', icon: LayoutGrid },
];

const sectionIds = ['home', 'about', 'experience', 'certifications', 'projects', 'practice', 'blog', 'contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // While a smooth scroll triggered by a tab click is in flight, the natural
  // scroll-spy would briefly light up every section it passes through. Lock
  // the highlight on the intended target until the page actually arrives.
  const pendingTarget = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = id;
        }
      }

      if (pendingTarget.current) {
        if (current === pendingTarget.current) {
          pendingTarget.current = null;
        } else {
          return;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenGroup(null);
        setMoreOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const openNow = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenGroup(label);
  };

  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenGroup(null), 150);
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      pendingTarget.current = id;
      setActiveSection(id);
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpenGroup(null);
    setMoreOpen(false);
  };

  const scrollToTop = () => {
    pendingTarget.current = 'home';
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isTabActive = (tab: BottomTab) => {
    if (tab.id === 'more') return moreSectionIds.has(activeSection);
    return activeSection === tab.targetId;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-16 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-white/85 backdrop-blur-md border-b border-slate-200' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center font-display text-xl font-bold text-slate-900 tracking-tight">
            M RAJA
            <motion.span
              className="inline-block w-[3px] h-4 ml-1 bg-[#0B60B0]"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
            />
          </button>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => openNow(group.label)}
                onMouseLeave={closeSoon}
              >
                <button
                  onClick={() => openNow(group.label)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors duration-200 ${
                    openGroup === group.label ? 'text-[#0B60B0] bg-[#EAF2FB]' : 'text-slate-600 hover:text-[#0B60B0]'
                  }`}
                >
                  {group.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openGroup === group.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openGroup === group.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-full pt-2 w-60"
                    >
                      <div className="rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 p-2 overflow-hidden">
                        {group.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => scrollToId(item.id)}
                            className="group w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-150 hover:bg-[#EAF2FB]"
                          >
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-50 text-slate-500 flex-shrink-0 transition-colors duration-150 group-hover:bg-white group-hover:text-[#0B60B0]">
                              <item.icon className="h-4 w-4" strokeWidth={2} />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-slate-900 group-hover:text-[#0B60B0]">
                                {item.label}
                              </span>
                              <span className="block text-xs text-slate-500">{item.desc}</span>
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <button
              onClick={() => scrollToId('contact')}
              className="ml-1 rounded-full bg-slate-900 px-5 py-2 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-black"
            >
              Contact
            </button>
          </nav>

          {/* Social icons — desktop */}
          <div className="hidden lg:flex items-center gap-2">
            {navSocials.map((social) => {
              const isMail = social.href.startsWith('mailto:');
              return (
                <a
                  key={social.label}
                  href={social.href}
                  {...(!isMail && { target: '_blank', rel: 'noopener noreferrer' })}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 transition-all duration-300 hover:border-[#0B60B0]/50 hover:text-[#0B60B0] hover:-translate-y-0.5"
                >
                  <social.icon className="h-3.5 w-3.5" strokeWidth={2} />
                </a>
              );
            })}
          </div>

          {/* Social icons — mobile/tablet: always one tap away, no need to scroll to the footer */}
          <div className="flex lg:hidden items-center gap-1.5">
            {navSocials
              .filter((social) => social.label !== 'GitHub')
              .map((social) => {
                const isMail = social.href.startsWith('mailto:');
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    {...(!isMail && { target: '_blank', rel: 'noopener noreferrer' })}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 active:scale-95 active:bg-[#EAF2FB] active:text-[#0B60B0] active:border-[#0B60B0]/40 transition-all duration-150"
                  >
                    <social.icon className="h-4 w-4" strokeWidth={2} />
                  </a>
                );
              })}
          </div>
        </div>
      </header>

      {/* Mobile / tablet floating bottom nav */}
      <nav className="lg:hidden fixed bottom-4 left-0 w-full z-50 px-5">
        <div className="relative mx-auto max-w-sm">
          <div className="relative rounded-[28px] bg-white/95 backdrop-blur-xl border border-slate-100 shadow-[0_18px_44px_-14px_rgba(15,23,42,0.3)] px-2 pt-2 pb-2.5">
            {/* top hairline sheen */}
            <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

            <div className="flex items-start justify-between px-1">
              {bottomTabs.map((tab) => {
                const isMore = tab.id === 'more';
                // While the fan menu is open, only the More/Close tab may show as active
                // so exactly one pill is ever highlighted at a time.
                const active = moreOpen ? isMore : isTabActive(tab);
                const Icon = isMore && moreOpen ? X : tab.icon;
                const label = isMore && moreOpen ? 'Close' : tab.label;

                return (
                  <button
                    key={tab.id}
                    onClick={() => (tab.targetId ? scrollToId(tab.targetId) : setMoreOpen((v) => !v))}
                    aria-label={label}
                    className="flex-1 flex flex-col items-center gap-1 py-1.5"
                  >
                    <Icon
                      className="h-[22px] w-[22px]"
                      strokeWidth={active ? 2.4 : 2}
                      style={{ color: active ? '#0B60B0' : '#94A3B8' }}
                    />
                    <AnimatePresence mode="wait">
                      {active && (
                        <motion.span
                          initial={{ opacity: 0, y: -2 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -2 }}
                          transition={{ duration: 0.15 }}
                          className="text-[10px] font-semibold leading-none whitespace-nowrap"
                          style={{ color: '#0B60B0' }}
                        >
                          {label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {/* decorative home-indicator bar */}
            <div className="flex justify-center pt-2">
              <span className="w-9 h-1 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>

        {/* Minimal "More" popover */}
        <AnimatePresence>
          {moreOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transformOrigin: 'bottom center',
                width: 208,
                bottom: 78,
                left: 'calc(50% - 104px)',
              }}
              className="absolute z-40 rounded-2xl bg-white border border-slate-100 shadow-[0_16px_36px_-14px_rgba(15,23,42,0.25)] p-1.5"
            >
              <div className="grid grid-cols-2 gap-1">
                {moreItems.map((item) => {
                  const itemActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToId(item.id)}
                      className="flex flex-col items-center gap-1.5 rounded-xl py-2.5 transition-colors duration-150 hover:bg-slate-50"
                    >
                      <item.icon
                        className="h-[18px] w-[18px]"
                        strokeWidth={2}
                        style={{ color: itemActive ? '#0B60B0' : '#64748B' }}
                      />
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wide"
                        style={{ color: itemActive ? '#0B60B0' : '#64748B' }}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* backdrop for the "More" popover */}
      <AnimatePresence>
        {moreOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMoreOpen(false)}
            className="lg:hidden fixed inset-0 z-30 bg-slate-900/10"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

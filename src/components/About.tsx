import React from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  FileSearch,
  type LucideIcon,
} from 'lucide-react';

type SkillItem = {
  name: string;
  img?: string;
  Icon?: LucideIcon;
  fill?: boolean;
  zoom?: boolean;
};

type SkillGroup = {
  label: string;
  items: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    label: 'Devices & Platforms',
    items: [
      { name: 'Windows', img: '/tools/windows-new.png', fill: true },
      { name: 'Linux', img: '/tools/linux-new.png', fill: true },
      { name: 'macOS', img: '/tools/apple.svg', zoom: true },
      { name: 'Hardware & Software Troubleshoot', Icon: Wrench },
      { name: 'Remote Desktop (RDP)', img: '/tools/rdp.png', zoom: true },
      { name: 'AnyDesk', img: '/tools/anydesk.svg' },
    ],
  },
  {
    label: 'Networking & Directory',
    items: [
      { name: 'Wireshark', img: '/tools/wireshark-new.png', fill: true },
      { name: 'Cisco VPN & Jabber', img: '/tools/cisco-new.png', fill: true },
      { name: 'PuTTY', img: '/tools/putty-new.png', fill: true },
      { name: 'Active Directory', img: '/tools/activedirectory.png', zoom: true },
    ],
  },
  {
    label: 'ITSM & Ticketing',
    items: [
      { name: 'ServiceNow', img: '/tools/servicenow-new.png', fill: true },
      { name: 'BMC Remedy', img: '/tools/bmcsoftware.svg', zoom: true },
      { name: 'ITIL Processes', img: '/tools/itil.png', zoom: true },
    ],
  },
  {
    label: 'Productivity & Collaboration',
    items: [
      { name: 'Outlook', img: '/tools/outlook-new.png', zoom: true },
      { name: 'Word', img: '/tools/word-new.png', fill: true },
      { name: 'Excel', img: '/tools/excel-new.png', zoom: true },
      { name: 'Teams', img: '/tools/teams-new.png', zoom: true },
      { name: 'Gmail', img: '/tools/gmail-new.png' },
      { name: 'Google Sheets', img: '/tools/sheets-new.png', zoom: true },
    ],
  },
  {
    label: 'Security & Monitoring',
    items: [
      { name: 'Splunk', img: '/tools/splunk-new.png', fill: true },
      { name: 'Wazuh', img: '/tools/wazuh.png', fill: true },
      { name: 'CrowdStrike EDR', img: '/tools/crowdstrike.png', zoom: true },
      { name: 'Antivirus', img: '/tools/antivirus-new.png' },
      { name: 'Log Analysis', Icon: FileSearch },
    ],
  },
  {
    label: 'Cloud & Scripting',
    items: [
      { name: 'AWS', img: '/tools/aws-new.png', zoom: true },
      { name: 'PowerShell', img: '/tools/powershell-new.png', zoom: true },
      { name: 'Bash', img: '/tools/bash-new.png', zoom: true },
      { name: 'Python', img: '/tools/python-new.png', zoom: true },
      { name: 'Java', img: '/tools/java-new.png', zoom: true },
    ],
  },
  {
    label: 'Frameworks & Standards',
    items: [
      { name: 'MITRE ATT&CK', img: '/tools/mitre.svg', zoom: true },
      { name: 'OWASP Top 10', img: '/tools/owasp.svg' },
      { name: 'NIST CSF', img: '/tools/nist.svg', zoom: true },
      { name: 'ISO 27001', img: '/tools/iso.svg', fill: true },
      { name: 'CVE', img: '/tools/cve.svg', zoom: true },
    ],
  },
];

const SkillPill = ({ item, delay }: { item: SkillItem; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ delay, duration: 0.4 }}
    className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 shadow-sm pl-1.5 pr-3 py-1.5 transition-all duration-300 hover:border-[#0B60B0]/40 hover:shadow-[0_8px_16px_-8px_rgba(11,96,176,0.3)] hover:-translate-y-0.5"
  >
    <span
      className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden ${
        item.fill ? '' : 'bg-slate-50 border border-slate-100 p-1'
      }`}
    >
      {item.img ? (
        <img
          src={item.img}
          alt={item.name}
          className={`w-full h-full ${
            item.fill ? 'object-cover' : `object-contain ${item.zoom ? 'scale-[1.7]' : ''}`
          }`}
          draggable={false}
        />
      ) : item.Icon ? (
        <item.Icon className="w-3.5 h-3.5 text-slate-400" strokeWidth={1.75} />
      ) : null}
    </span>
    <span className="font-display font-semibold text-slate-800 text-xs whitespace-nowrap">
      {item.name}
    </span>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="relative py-28 sm:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display font-bold tracking-tighter leading-[0.95] text-4xl sm:text-5xl md:text-6xl text-slate-900 mb-8">
              DEFENDING WITH<br />PURPOSE.
            </h2>

            <div className="space-y-5 text-slate-600 leading-relaxed max-w-lg">
              <p>
                I'm Raja, a cybersecurity professional specializing in{' '}
                <span className="text-[#0B60B0] font-semibold">Security Analysis</span> and{' '}
                <span className="text-[#0B60B0] font-semibold">Security Operations (SecOps)</span>, with
                hands-on experience in monitoring, incident handling, and strengthening security
                posture across enterprise environments.
              </p>
              <p>
                Currently working as an Associate Technical Engineer at{' '}
                <span className="text-slate-900 font-semibold">Kyndryl</span>, I support production
                systems through automation, system reliability, and incident management,
                sharpening my expertise in alert triage, root cause analysis, and responding
                effectively to security events across infrastructure and cloud environments.
              </p>
            </div>

            <div className="flex items-center gap-10 mt-12">
              <div>
                <p className="font-display font-bold text-4xl text-slate-900">2+</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <p className="font-display font-bold text-4xl text-slate-900">4</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">Certifications</p>
              </div>
            </div>
          </motion.div>

          {/* Right column: toolkit */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 sm:p-7 lg:-mt-8"
          >
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-5">
              My Toolkit
            </p>

            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B60B0]" />
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item, i) => (
                      <SkillPill key={item.name} item={item} delay={(i % 8) * 0.04} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

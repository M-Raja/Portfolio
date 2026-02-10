import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award, ExternalLink, Heart, ChevronDown, Cloud, Terminal, Boxes, ShieldCheck, Shield, Users, Activity, AlertTriangle, Code, Search, Server, Zap } from 'lucide-react';

const Experience = () => {
  const [expandedExperiences, setExpandedExperiences] = useState<{ [key: number]: boolean }>({});
  const [expandedVolunteering, setExpandedVolunteering] = useState<{ [key: number]: boolean }>({});
  const [failedLogos, setFailedLogos] = useState<{ [key: number]: boolean }>({});

  const toggleExperience = (index: number) => {
    setExpandedExperiences(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleVolunteering = (index: number) => {
    setExpandedVolunteering(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const experiences = [
    {
      title: 'Associate Technical Engineer',
      company: 'Kyndryl India',
      logo: '/kyndryl-logo.png',
      location: 'Chennai,IND',
      duration: '2023 - 2025',
      achievements: [
        'Managing Linux, Cloud, and Network-based tasks to ensure system security.',
        'Performing vulnerability assessments and implementing security controls to mitigate risks.',
        'Collaborating with teams to optimize and ensure secure batch processing workflows.',
        'Assisting in threat analysis and security hardening to enhance system resilience.',
        'Actively troubleshoots and resolves batch processing issues, collaborating with cross-functional teams for enhanced operational efficiency.',
      ],
    },
  ];
  const education = [
    {
      degree: 'Bachelor of Computer Application',
      institution: 'SRM Institute of Science and Technology',
      logo: '/srm-logo.png',
      location: 'Chennai, IND',
      duration: '2020 - 2023',
      achievements: [
        'An undergraduate program that deals with the subjects and topics related to computer science, computer application, and its services. The main aim of this program is to create quality professionals and research fellows who can work in every sector of the world by implementing the technology of computer systems and software.',
      ],
    },
    {
      degree: 'High School',
      institution: 'Santhome HSS, Chennai',
      logo: '/santhome-logo.png',
      location: 'Chennai, IND',
      duration: '2018 - 2020',
      achievements: [
        'Completed my High School with Major in Computer Science , Maths , Physics and Chemistry..',
      ],
    },
  ];

  const volunteering = [
    {
      title: 'Cybersecurity Community Member',
      organization: 'EC-Council',
      location: 'Remote',
      duration: 'Nov 2025 - Present',
      logo: '/ec-council-logo.png',
      achievements: [
        'Actively engaged with global cybersecurity professionals through the EC-Council Cybersecurity Community.',
        'Responsible for contributing to discussions on ethical hacking, detection engineering, and emerging threat trends.',
        'Collaborating in community initiatives focused on real-world attacks, cloud security, and MITRE ATT&CK-based defense techniques.',
        'Committed to continuous skill development, knowledge sharing, and advancing cybersecurity awareness across the community.',
      ],
    },
    {
      title: 'Campus Ambassador',
      organization: 'TechLearn.live',
      location: 'Remote',
      duration: 'Jul 2021 - Sep 2021',
      logo: '/techlearn-logo.png',
      achievements: [
        'Contributed to Social Media Management, Communication, and Poster Design.',
        'Crafted compelling messages, designed eye-catching posters, and engaged in meaningful volunteering experiences.',
        'Developed skills in Social Media strategies, clear communication, effective poster design, and impactful volunteering.',
        'Proficient in using Canva for creating visually appealing and professional designs.',
      ],
    },
  ];

  // Provider logo mapping
  const providerLogos: { [key: string]: string } = {
    'GUVI': '/guvi-logo.png',
    'Cybrary': '/cybrary-logo.png',
    'AWS': '/aws-logo.png',
    'GitHub': '/github-logo.png',
    'Azure': '/azure-logo.png',
    'Microsoft': '/microsoft-logo.png',
    'Google': '/google-logo.png',
    'IBM': '/ibm-logo.png',
    'RedHat': '/redhat-logo.png',
    'Terraform': '/terraform-logo.png',
    'NVIDIA': '/nvidia-logo.png',
    'Kyndryl': '/Kyndryl-Logo-Design-Concept-PNG-thumb.png',
  };

  const certifications = [
    // 2025
    { name: 'AWS Cloud Practitioner', issuer: 'AWS', year: '2025', status: 'verify', logo: '/aws.jpeg', link: 'https://www.credly.com/badges/7b7794ff-83be-443d-8741-e92e69170d39/public_url' },
    { name: 'Scripting and Programming', issuer: 'Cybrary', year: '2025', status: 'verify', logo: '/Cyber.png', link: 'https://drive.google.com/file/d/1YXqmAOkHVYCJGSmsOoAZ5ZF0dMbQC2Xp/view?usp=sharing' },
    { name: 'Computer network', issuer: 'Cybrary', year: '2025', status: 'verify', logo: '/Cyber.png', link: 'https://drive.google.com/file/d/1TH74dyjJqAhL0TePuFf9N1XzSbLMjIqQ/view' },
    // 2024
    { name: 'Automation - Cloud Computing', issuer: 'Kyndryl', year: '2024', status: 'verify', logo: '/kyndryl.jpeg', link: 'https://drive.google.com/file/d/1b4s59opV9J2E3u4j1q6PSXXEmldr3GJ7/view' },
    // 2022
    { name: 'Cyber Security & Ethical Hacking', issuer: 'GUVI', year: '2022', status: 'verify', logo: '/guvi.png', link: 'https://drive.google.com/file/d/1GIwq0obcwnJVvztgbdZnjwxCWUp1qDSV/view?usp=sharing' },
    { name: 'Ethical Hacking Essentials (EHE)', issuer: 'Cybrary', year: '2022', status: 'verify', logo: '/download (1).png', link: 'https://drive.google.com/file/d/1INBIxs7V2Ulc1w04nEhcii5bZaBUn8CS/view?usp=sharing' },
  ].map(cert => ({
    ...cert,
    logo: (cert as any).logo || providerLogos[cert.issuer] || null
  }));

  // Initialize all sections as expanded by default
  useEffect(() => {
    // Expand all experience sections
    const initialExperiences: { [key: number]: boolean } = {};
    experiences.forEach((_, index) => {
      initialExperiences[index] = true;
    });
    setExpandedExperiences(initialExperiences);

    // Expand all volunteering sections
    const initialVolunteering: { [key: number]: boolean } = {};
    volunteering.forEach((_, index) => {
      initialVolunteering[index] = true;
    });
    setExpandedVolunteering(initialVolunteering);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  


  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Technical <span className="text-gradient-cyber">Skills</span>
            </h2>
            <div className="w-24 h-0.5 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:flex lg:flex-wrap justify-center gap-2 sm:gap-2.5 px-4 sm:px-6 lg:px-0 max-w-6xl mx-auto">
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <Activity className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">SIEM Monitoring</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">Incident Management</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <AlertTriangle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">Alert Triage</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <Shield className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">SOC</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <Shield className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">EDR & Defender</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">Network Security</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <AlertTriangle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">MITRE ATT&CK</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <Award className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">OWASP Top 10</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <Shield className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">Threat Analysis</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <Cloud className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">AWS Security</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <Code className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">Python</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <Terminal className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">Bash & PowerShell</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">Automation</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <Search className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">Vulnerability Assessment</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <AlertTriangle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">CVE Analysis</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <Server className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">Linux & Windows</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <Boxes className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">ServiceNow & BMC</span>
            </div>
            <div className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-200 cursor-pointer w-full justify-center sm:w-auto">
              <Award className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover:text-white transition-colors flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium text-foreground group-hover:text-white transition-colors whitespace-nowrap truncate">NIST CSF & ISO 27001</span>
            </div>
          </div>
        </div>

        <div id="professional-experience" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-gradient-cyber">Experience</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Work Experience with Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Calendar className="h-5 w-5 text-primary" strokeWidth={3} />
              <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
              <div className="flex-1 h-0.5 bg-primary ml-2"></div>
            </div>
            <div className="relative pl-10">
              {/* Continuous Timeline Line */}
              <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-black" style={{ transform: 'translateX(-1px)' }}></div>
              
              {/* Dot at the start of the line */}
              <div className="absolute left-[18px] top-0 z-10" style={{ transform: 'translateX(-10px)' }}>
                <div className="relative w-5 h-5">
                  <div className="absolute inset-0 w-5 h-5 bg-black/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-5 h-5 bg-black rounded-full border-4 border-background shadow-lg"></div>
                </div>
              </div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-10 last:mb-0">
                  {/* Content Card */}
                  <div className="bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    {/* Kyndryl Orange Top Border */}
                    {exp.company === 'Kyndryl India' && (
                      <div className="absolute top-0 left-0 right-0 h-2 bg-[#FF462D] rounded-t-lg z-10 overflow-hidden">
                        {/* White diagonal slash in the middle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-white transform rotate-45"></div>
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-foreground mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2.5 mb-3">
                      {exp.logo && (
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-8 h-8 object-contain flex-shrink-0"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                      <p className="text-sm text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {exp.location}
                      </span>
                    </div>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div>
                        <button
                          onClick={() => toggleExperience(index)}
                          className="flex items-center gap-2 w-full text-left mb-2 hover:opacity-80 transition-opacity"
                        >
                          <span className="text-sm font-semibold text-foreground">Responsibilities</span>
                          <ChevronDown 
                            className={`h-4 w-4 text-primary transition-transform duration-200 ${
                              expandedExperiences[index] ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        {expandedExperiences[index] && (
                          <ul className="space-y-2.5">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-foreground flex items-start gap-2.5">
                                <span className="text-primary mt-1.5 font-bold">•</span>
                                <span className="leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Calendar className="h-5 w-5 text-primary" strokeWidth={3} />
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
                <div className="flex-1 h-0.5 bg-primary ml-2"></div>
              </div>
              <div className="relative pl-10">
                {/* Continuous Timeline Line */}
                <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-black" style={{ transform: 'translateX(-1px)' }}></div>
                
                {/* Dot at the start of the line */}
                <div className="absolute left-[18px] top-0 z-10" style={{ transform: 'translateX(-11px)' }}>
                  <div className="relative w-5 h-5">
                    <div className="absolute inset-0 w-5 h-5 bg-black/20 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-5 h-5 bg-black rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                </div>
                
                {education.map((edu, index) => (
                  <div key={index} className="relative mb-10 last:mb-0">
                    {/* Content Card */}
                    <div className="bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    {/* SRM Top Border - Blue with Gold Slash */}
                    {edu.institution.includes('SRM') && (
                      <div className="absolute top-0 left-0 right-0 h-2 bg-[#003d82] rounded-t-lg z-10 overflow-hidden" style={{ marginTop: 0 }}>
                        {/* Gold diagonal slash in the middle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-[#E4B316] transform rotate-45"></div>
                      </div>
                    )}
                    {/* Santhome Top Border - Blue with White Slash */}
                    {edu.institution.includes('Santhome') && (
                      <div className="absolute top-0 left-0 right-0 h-2 bg-[#003d82] rounded-t-lg z-10 overflow-hidden" style={{ marginTop: 0 }}>
                        {/* White diagonal slash in the middle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-white transform rotate-45"></div>
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
                    <div className="flex items-center gap-2.5 mb-3">
                      {edu.logo && (
                        <img 
                          src={edu.logo} 
                          alt={`${edu.institution} logo`}
                          className="w-8 h-8 object-contain flex-shrink-0"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                      <p className="text-sm text-primary font-medium">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {edu.location}
                      </span>
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Volunteering */}
            {volunteering.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <Heart className="h-5 w-5 text-primary" strokeWidth={3} />
                  <h3 className="text-2xl font-bold text-foreground">Volunteering</h3>
                  <div className="flex-1 h-0.5 bg-primary ml-2"></div>
                </div>
                <div className="relative pl-10">
                  {/* Continuous Timeline Line */}
                  <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-black" style={{ transform: 'translateX(-1px)' }}></div>
                  
                  {/* Dot at the start of the line */}
                  <div className="absolute left-[18px] top-0 z-10" style={{ transform: 'translateX(-11px)' }}>
                    <div className="relative w-5 h-5">
                      <div className="absolute inset-0 w-5 h-5 bg-black/20 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-5 h-5 bg-black rounded-full border-4 border-background shadow-lg"></div>
                    </div>
                  </div>
                  
                  {volunteering.map((vol, index) => (
                    <div key={index} className="relative mb-10 last:mb-0">
                      {/* Content Card */}
                      <div className="bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                      {/* EC-Council Red Top Border */}
                      {vol.organization === 'EC-Council' && (
                        <div className="absolute top-0 left-0 right-0 h-2 bg-[#ED1F24] rounded-t-lg z-10 overflow-hidden" style={{ marginTop: 0 }}>
                          {/* White diagonal slash in the middle */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-white transform rotate-45"></div>
                        </div>
                      )}
                      {/* TechLearn Blue Top Border */}
                      {vol.organization === 'TechLearn.live' && (
                        <div className="absolute top-0 left-0 right-0 h-2 bg-[#0066CC] rounded-t-lg z-10 overflow-hidden" style={{ marginTop: 0 }}>
                          {/* White diagonal slash in the middle */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-white transform rotate-45"></div>
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-foreground mb-1">{vol.title}</h3>
                      <div className="flex items-center gap-2.5 mb-3">
                        {vol.logo && (
                          <img 
                            src={vol.logo} 
                            alt={`${vol.organization} logo`}
                            className="w-8 h-8 object-contain flex-shrink-0"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        )}
                        <p className="text-sm text-primary font-medium">{vol.organization}</p>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-primary" />
                          {vol.duration}
                        </span>
                        {vol.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-primary" />
                            {vol.location}
                          </span>
                        )}
                      </div>
                      {vol.achievements && vol.achievements.length > 0 && (
                        <div>
                          <button
                            onClick={() => toggleVolunteering(index)}
                            className="flex items-center gap-2 w-full text-left mb-2 hover:opacity-80 transition-opacity"
                          >
                            <span className="text-sm font-semibold text-foreground">Contributions</span>
                            <ChevronDown 
                              className={`h-4 w-4 text-primary transition-transform duration-200 ${
                                expandedVolunteering[index] ? 'transform rotate-180' : ''
                              }`}
                            />
                          </button>
                          {expandedVolunteering[index] && (
                            <ul className="space-y-2.5">
                              {vol.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-foreground flex items-start gap-2.5">
                                  <span className="text-primary mt-1.5 font-bold">•</span>
                                  <span className="leading-relaxed">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Certifications - Separate Section */}
        <div className="mt-24">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-primary" strokeWidth={3} />
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>
            <div className="w-24 h-0.5 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col h-full">
                  {/* Logo and Certification Name */}
                  <div className="mb-3 flex items-center gap-3">
                    {cert.logo && !failedLogos[index] && (
                      <img 
                        src={cert.logo} 
                        alt={`${cert.issuer} logo`}
                        className="h-10 w-10 object-contain flex-shrink-0"
                        loading="lazy"
                        onError={() => {
                          setFailedLogos(prev => ({ ...prev, [index]: true }));
                        }}
                      />
                    )}
                    <h4 className="text-sm font-black text-black line-clamp-2 flex-1">{cert.name}</h4>
                  </div>
                  
                  {/* Date and Status */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 text-xs text-foreground">
                      <Calendar className="h-3.5 w-3.5" strokeWidth={2.5} />
                      <span className="font-bold">{cert.year}</span>
                    </div>
                    {cert.status === 'ongoing' ? (
                      <span className="text-xs font-medium text-primary">Ongoing</span>
                    ) : (
                      <span className="text-xs font-medium text-primary flex items-center gap-1">
                        Verify <ExternalLink className="h-3 w-3" />
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { ExternalLink, Github, Shield, Zap, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-3.png';
import project2 from '@/assets/project-4.png';
import project3 from '@/assets/project-8.png';

const Projects = () => {
  const projects = [
    {
      title: 'WebShield Scanner – Web Security Testing Platform',
      description: 'Built and deployed a web-based vulnerability scanner for comprehensive web application security assessment.',
      image: project1,
      status: 'Ongoing',
      category: 'Security Testing',
            technologies: ['Python', 'Node.js', 'FastAPI', 'OWASP ZAP', 'Nmap', 'GitHub Actions'],

      features: [
        'OWASP Top 10 vulnerability testing',
        'SSL/TLS certificate validation',
        'HTTP security header analysis',
        'Server fingerprinting capabilities',
        'Automated vulnerability scanning',
        'Custom exploit development',
        'Detailed reporting system',
        'Integration with CI/CD pipelines',
      ],
      github: 'https://github.com/mraja/pentest-framework',
      demo: 'https://defender-core-eta.vercel.app/',
      icon: Shield,
    },
    {
      title: 'Network Vulnerability Scanner & Assessment – Security Automation ',
      description: 'Built a Python-based network vulnerability scanner with automated discovery, Nmap-powered enumeration, custom misconfiguration checks, and reporting.',
      image: project3,
      status: 'Completed',
      category: 'Security Monitoring',
      technologies: ['Python', 'Nmap Integration', 'Port Scanning', 'Vulnerability Assessment', 'Reporting'],
      features: [
        'Real-time threat visualization',
        'Risk assessment metrics',
        'Automated alert system',
        'Compliance reporting',
      ],
      github: 'https://github.com/M-Raja/cybersec-network-scanner',
      demo: 'https://github.com/M-Raja/cybersec-network-scanner',
      icon: Zap,
    },
    {
      title: ' Cybersecurity Awareness & Phishing Simulation Platform',
      description: 'Phishing simulation platform with real-time dashboards and automated workflows to test campaigns and measure employee susceptibility.',
      image: project2,
      status: 'Ongoing',
      category: 'Threat Intelligence',
      technologies: ['Python', 'Node.js', 'FastAPI', 'OWASP ZAP', 'Nmap', 'GoPhish', 'SMTP/IMAP', 'SQLite'],
      features: [
        'Multi-source threat feeds',
        'ML-powered threat detection',
        'IOC correlation engine',
        'Automated threat hunting',
      ],
      github: 'https://github.com/mraja/threat-intel',  
      demo: 'https://threatacademy.vercel.app/',
      icon: Search,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Ongoing':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient-cyber">Projects</span>
          </h2>
          <p className="text-sm text-black max-w-2xl mx-auto mt-0">
            Explore some of my key cybersecurity projects that demonstrate expertise in various security domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="relative overflow-hidden rounded-[24px] bg-white pb-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* top image */}
              <div className="relative h-40 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 text-right text-white text-xs leading-tight drop-shadow">
                  <div className="font-semibold">{project.title}</div>
                  <div className="font-semibold">{project.category}</div>
                </div>
              </div>

              {/* middle dark panel */}
              <div className="relative mx-3 -mt-6 mb-3 rounded-2xl bg-white text-foreground border border-border shadow-[0_6px_16px_rgba(0,0,0,0.05)]">
                <CardContent className="px-5 pt-5 pb-6">
                  <div className="mb-2">
                    <div className="text-base font-semibold">{project.title}</div>
                    <div className="text-sm text-muted-foreground">{project.description}</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} className="px-3 py-1 text-[10px] rounded-full border bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium">{project.status}</span>
                    <a
                      href={project.demo || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs underline text-primary hover:text-primary/80"
                    >
                      View <ExternalLink className="inline h-3.5 w-3.5" />
                    </a>
                  </div>
                </CardContent>
              </div>
              
            </Card>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/M-Raja?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium rounded-md px-4 py-2 text-base transition-cyber"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { Globe, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-3.png';
import project2 from '@/assets/project-4.png';
import project3 from '@/assets/project-8.png';

const Projects = () => {
  const projects = [
    {
      title: 'Defender Core',
      description: 'Comprehensive penetration testing framework with automated vulnerability scanning, exploit detection, and security assessment capabilities.',
      image: project1,
      tag: 'Penetration Testing',
      tagColor: 'bg-red-100 text-red-700 border-red-300',
      github: 'https://github.com/mraja/pentest-framework',
      demo: 'https://defender-core-eta.vercel.app/',
    },
    {
      title: 'Threat Intelligence Platform',
      description: 'Advanced threat intelligence and analysis platform for tracking security threats, malware analysis, and real-time threat detection.',
      image: project2,
      tag: 'Threat Intelligence',
      tagColor: 'bg-blue-100 text-blue-700 border-blue-300',
      github: 'https://github.com/mraja/threat-intel',
      demo: 'https://threatacademy.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient-cyber">Projects</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Project Image */}
              <div className="w-full h-64 bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                
                {/* Project Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Tag */}
                <div className="mb-6">
                  <Badge className={`px-3 py-1 text-xs font-medium rounded ${project.tagColor}`}>
                    {project.tag}
                  </Badge>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  {project.demo && (
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-gray-300 bg-white text-black hover:bg-gray-50"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Globe className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      asChild
                      className="flex-1 bg-black text-white hover:bg-gray-800"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <Button
            asChild
            className="bg-black text-white hover:bg-gray-800 px-6 py-2"
          >
            <a href="https://github.com/M-Raja?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

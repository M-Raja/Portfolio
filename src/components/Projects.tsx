import React from 'react';
import { Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-3.png';
import project2 from '@/assets/project-4.png';

const Projects = () => {
  const projects = [
    {
      title: 'Security Operations Incident Detection and Investigation',
      description: 'Analyzed Windows logs to detect suspicious login patterns and bruteforce attempts using SIEM. Built investigation timelines and documented incident response workflows.',
      image: project1,
      tag: 'Security Operations',
      tagColor: 'bg-blue-100 text-blue-700 border-blue-300',
    },
    {
      title: 'Cloud Security Misconfiguration Detection and Response',
      description: 'Identified AWS misconfigurations including public storage and over-permissive IAM policies. Used CloudTrail and CloudWatch to analyze risks and recommend fixes.',
      image: project2,
      tag: 'Cloud Security',
      tagColor: 'bg-green-100 text-green-700 border-green-300',
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
                <h3 className="text-xl font-bold text-black mb-4">{project.title}</h3>
                
                {/* Project Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Tag and GitHub Button */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <Badge className={`px-3 py-1 text-xs font-medium rounded ${project.tagColor} ${project.tag === 'Security Operations' ? 'hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300' : 'hover:bg-green-100 hover:text-green-700 hover:border-green-300'}`}>
                    {project.tag}
                  </Badge>
                  <Button
                    asChild
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    <a href="https://github.com/M-Raja?tab=repositories" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
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

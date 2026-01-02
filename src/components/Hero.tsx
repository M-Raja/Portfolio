import React from 'react';
import { Download, Mail, Github, Linkedin, InstagramIcon, Code, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const fullText = "Cybersecurity Engineer | SecOps ";
  const nameFull = "Raja M";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sketch Board Grid Background */}
      <div className="absolute inset-0 z-0 sketch-board-grid bg-background"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Cybersecurity Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-light opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {/* Text Content */}
        <div className="w-full max-w-3xl text-center space-y-6">
          {/* Complete Sentence - One Line */}
          <div className="fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-center mb-12 space-y-8">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-foreground font-normal" style={{ fontFamily: 'var(--font-mono)' }}>
                Hi, this is
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground flex items-center justify-center gap-2" style={{ fontFamily: 'var(--font-mono)' }}>
                Raja <Code className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-black" /> M
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-foreground font-normal" style={{ fontFamily: 'var(--font-mono)' }}>
                a {fullText}
              </p>
            </div>
          </div>
          <br/>
          {/* CTA Button - Above Icons */}
          <div className="fade-in flex justify-center items-center mb-16" style={{ animationDelay: '0.7s' }}>
            <Button asChild size="lg" className="flex-wrap bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold text-base uppercase tracking-wide shadow-lg hover:shadow-xl transition-all">
              <a href="/M%20Raja%20_%20SecOps%20Engineer.pdf" download="M Raja _ SecOps Engineer.pdf">
                <Download className="mr-2 h-5 w-5" />
                Hire me
              </a>
            </Button>
          </div>
         
         <br/>
          {/* Social Media Icons - Circular White Backgrounds */}
          <div className="fade-in flex items-center justify-center space-x-3 mb-24" style={{ animationDelay: '0.9s' }}>
            <a href="mailto:raja.madhavann@gmail.com" aria-label="Email" className="rounded-full bg-white p-3 shadow-md hover:scale-110 hover:shadow-lg transition-transform">
              <Mail className="h-5 w-5 text-red-500" />
            </a>
            <a href="https://github.com/M-Raja" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="rounded-full bg-white p-3 shadow-md hover:scale-110 hover:shadow-lg transition-transform">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/m-raja-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="rounded-full bg-white p-3 shadow-md hover:scale-110 hover:shadow-lg transition-transform">
              <Linkedin className="h-5 w-5 text-[#0A66C2]" />
            </a>
            <a href="https://www.instagram.com/___raja.m__/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="rounded-full bg-white p-3 shadow-md hover:scale-110 hover:shadow-lg transition-transform">
              <InstagramIcon className="h-5 w-5 text-pink-500" />
            </a>
            <a href="https://cyberblogz.hashnode.dev/" target="_blank" rel="noopener noreferrer" aria-label="Hashnode"
              className="rounded-full bg-white p-3 shadow-md hover:scale-110 hover:shadow-lg transition-transform">
              <BookOpen className="h-5 w-5 text-[#2962FF]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
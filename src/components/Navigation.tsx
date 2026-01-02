import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ArrowUp, FolderKanban, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    // For About section, scroll to the heading instead of the section
    const targetId = sectionId === 'about' ? 'about-heading' : sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      setActiveSection(sectionId); // Set active state immediately
      const offset = 64; // Account for fixed navbar (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Account for navbar height
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id);
        return element ? {
          id: item.id,
          top: element.offsetTop,
          bottom: element.offsetTop + element.offsetHeight
        } : null;
      }).filter(Boolean) as Array<{ id: string; top: number; bottom: number }>;

      // Find the current section based on scroll position
      let currentSection = navItems[0].id; // Default to first section
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].top - 100) {
          currentSection = sections[i].id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ScrollToTopButton component
  const ScrollToTopButton = () => {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setVisible(window.scrollY > 200);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return visible ? (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all border border-white/80 focus:outline-none"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    ) : null;
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Left Side */}
            <div className="hidden md:flex items-center space-x-2 flex-1">
              <Shield className="h-8 w-8 text-primary" />
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex justify-center flex-1">
              <div className="flex space-x-8">
                {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-sm font-medium transition-cyber hover:text-primary ${
                        activeSection === item.id 
                          ? 'text-primary border-b-2 border-primary' 
                          : 'text-black'
                      }`}
                    >
                      {item.label}
                    </button>
                ))}
              </div>
            </div>

            {/* Projects and Blogs Buttons - Right Side */}
            <div className="hidden md:flex items-center justify-end space-x-2 flex-1">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-cyber"
                onClick={() => {
                  scrollToSection('projects');
                }}
              >
                <FolderKanban className="mr-2 h-4 w-4" />
                Projects
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-cyber"
                asChild
              >
                <a href="https://cyberblogz.hashnode.dev/" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Blogs
                </a>
              </Button>
            </div>

            {/* Mobile Logo */}
            <div className="md:hidden flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2">
                {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-cyber ${
                        activeSection === item.id 
                          ? 'text-primary bg-primary/10' 
                          : 'text-black hover:text-primary hover:bg-muted'
                      }`}
                    >
                      {item.label}
                    </button>
                ))}
              </div>
              {/* Projects and Blogs Buttons - Mobile */}
              <div className="flex justify-center items-center gap-3 mt-4 mb-2">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground transition-cyber"
                  onClick={() => {
                    scrollToSection('projects');
                  }}
                >
                  <FolderKanban className="mr-2 h-4 w-4" />
                  Projects
                </Button>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground transition-cyber"
                  asChild
                >
                  <a href="https://medium.com/@raja-m" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Blogs
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <ScrollToTopButton />
    </>
  );
};

export default Navigation;
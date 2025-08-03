'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/lib/data';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout>();

  const scrollToProject = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    
    const scrollAmount = direction === 'left' ? -400 : 400;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const autoScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth;

    if (isAtEnd) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      scrollToProject('right');
    }
  };

  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollIntervalRef.current = setInterval(autoScroll, 3000);
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isAutoScrolling]);

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out some of my recent work. These projects showcase my skills and experience
            in building web applications with modern technologies.
          </p>
        </div>

        <div className="relative">
          <div 
            className="flex space-x-6 py-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {projects.map((project) => (
              <Card 
                key={project.id}
                onClick={() => window.open(project.liveUrl, '_blank')}
                className={cn(
                  "flex-shrink-0 w-full md:w-[500px] snap-center hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:-translate-y-1",
                  activeProject === project.id ? "ring-2 ring-primary" : ""
                )}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="gap-2"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                    {project.githubUrl && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="gap-2"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} />
                        View Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 block">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scrollToProject('right')} 
              aria-label="Scroll right"
              onMouseEnter={handleMouseEnter}
            >
              <ArrowRight size={20} />
            </Button>
          </div>
          
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 block">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scrollToProject('left')} 
              aria-label="Scroll left"
              onMouseEnter={handleMouseEnter}
            >
              <ArrowLeft size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import LetterGlitch from '../letter-glitch';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* LetterGlitch Background */}
      <div className="absolute inset-0 -z-10">
        <LetterGlitch
          glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
        <div className="absolute inset-0 bg-background/80 " />
      </div>

      <div className="container px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={cn(
              "space-y-6 transform transition-all duration-700 ease-out"
            )}
          >
            <div className="space-y-2">
              <h2 className="text-xl text-primary font-medium">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Prathamesh Mishra
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                Full Stack Developer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              I build exceptional digital experiences with modern technologies.
              Specializing in React, Next.js, Node.js, Express.js and more.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                size="lg" 
                className="gap-2" 
                onClick={() => window.open('https://res.cloudinary.com/db1nsxnit/image/upload/v1745254364/Prathamesh_Mishra_wfspfq.pdf', '_blank')}
                >
                <Download size={18} />
                Download Resume
                </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToProjects}
                className="gap-2"
              >
                View Projects
                <ArrowDown size={18} />
              </Button>
            </div>
          </div>

          <div 
            className={cn(
              "relative transform transition-all duration-700 delay-300 ease-out rounded-3xl overflow-hidden aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <Image
              src="https://res.cloudinary.com/db1nsxnit/image/upload/v1743251988/profilel_zqa4ac.png"
              alt="Prathamesh Mishra"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-3xl"
              priority
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10"></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToProjects}
            className="h-10 w-10 rounded-full"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}
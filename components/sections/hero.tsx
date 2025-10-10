'use client';

import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import LetterGlitch from '../letter-glitch';
import RotatingText from '../RotatingText';

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
    <section id="home" className="relative min-h-[100svh] md:min-h-screen flex items-center justify-center py-10 md:py-20 overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div 
            className={cn(
              "space-y-4 md:space-y-6 transform transition-all duration-700 ease-out"
            )}
          >
            <div className="space-y-2">
              <h2 className="text-xl text-primary font-medium">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Prathamesh Mishra
              </h1>
              <div className="flex items-center gap-2 text-2xl md:text-3xl text-muted-foreground font-light">
                <span>A</span>
                <RotatingText
                  texts={['Full Stack Developer','MERN Stack', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-primary/10 text-primary overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              I build exceptional digital experiences with modern technologies.
              Specializing in React, Next.js, Node.js, Express.js and more.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
              <Button 
                size="lg" 
                className="gap-2" 
                onClick={() => window.open('/Prathamesh.pdf', '_blank')}
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
              "relative transform transition-all duration-700 delay-300 ease-out h-[300px] md:h-[500px] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <Image
              src="/profile.png"
              alt="Prathamesh Mishra"
              fill
              className="object-contain"
              priority
            />
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

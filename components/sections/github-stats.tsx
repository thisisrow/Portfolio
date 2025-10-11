'use client';

import { useEffect, useState } from 'react';
import { Github, Code, GitBranch, BookMarked } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { githubData } from '@/lib/data';
import { cn } from '@/lib/utils';
import GlassSurface from '@/components/ui/GlassSurface';
import '@/components/ui/GlassSurface.css';
import Silk from '@/components/ui/Silk';
import Image from 'next/image';

export function GithubStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('github');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setAnimate(true);
    }
  }, [isVisible]);

  return (
    <section id="github" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Silk
          speed={5}
          scale={1}
          color="#5227FF"
          noiseIntensity={0.2}
          rotation={0}
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Stats</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into my coding activity and technology expertise based on my GitHub profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatsCard 
            icon={<Github className="h-8 w-8" />}
            title="Repositories"
            value={githubData.totalRepos.toString()}
            animate={animate}
            delay={0}
          />
          <StatsCard 
            icon={<Code className="h-8 w-8" />}
            title="Languages"
            value={githubData.topLanguages.length.toString()}
            animate={animate}
            delay={100}
          />
          <StatsCard 
            icon={<GitBranch className="h-8 w-8" />}
            title="Commits"
            value={githubData.totalCommits.toString()}
            animate={animate}
            delay={200}
          />
          <StatsCard 
            icon={<BookMarked className="h-8 w-8" />}
            title="Tech Stack"
            value={githubData.topTechnologies.length.toString()}
            animate={animate}
            delay={300}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlassSurface
            className={cn(
              "transform transition-all duration-700",
              animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <div className="p-6 w-full">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Language Distribution</h3>
              </div>

              <div className="mt-4 space-y-4">
                {githubData.topLanguages.map((lang, index) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{lang.name}</span>
                      <span className="text-muted-foreground">{lang.percentage ?? 0}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ 
                          width: `${lang.percentage ?? 0}%`,
                          backgroundColor: lang.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-center">
                <div className="relative w-full max-w-md h-48">
                  <Image
                    className="rounded-lg shadow-md"
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=thisisrow&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
                    alt="Top Languages"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </GlassSurface>

          <div className="space-y-8">
            <GlassSurface
              className={cn(
                "transform transition-all duration-700 delay-200",
                animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
            >
              <div className="p-6 w-full">
                <div className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Frequently Used Technologies</h3>
                </div>
                <div className="mt-4 space-y-4">
                  {githubData.frequentlyUsedLanguages.map((lang) => (
                    <div key={lang.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <span className={`language-icon ${lang.icon}`}>{getLanguageIcon(lang.icon)}</span>
                          {lang.name}
                        </span>
                        <span className="text-muted-foreground">{lang.proficiency ?? 0}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${lang.proficiency ?? 0}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassSurface>

            <GlassSurface
              className={cn(
                "transform transition-all duration-700 delay-300",
                animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
            >
              <div className="p-6 w-full">
                <div className="flex items-center gap-2">
                  <BookMarked className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Tech Stack</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {githubData.topTechnologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-2">Currently Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    {githubData.learning.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </GlassSurface>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsCard({ 
  icon, 
  title, 
  value, 
  animate, 
  delay = 0 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  animate: boolean;
  delay?: number;
}) {
  return (
    <GlassSurface
      className={cn(
        "transform transition-all duration-500",
        animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-6 flex items-center justify-between w-full">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-3xl font-bold mt-1">{value}</h3>
        </div>
        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
    </GlassSurface>
  );
}

function getLanguageIcon(icon: string) {
  switch (icon) {
    case 'js':
      return 'JS';
    case 'ts':
      return 'TS';
    case 'react':
      return 'R';
    case 'node':
      return 'N';
    case 'html':
      return 'H';
    default:
      return icon.slice(0, 1).toUpperCase();
  }
}

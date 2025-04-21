'use client';

import { useEffect, useState } from 'react';
import { Github, Code, GitBranch, BookMarked } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { githubData } from '@/lib/data';
import { cn } from '@/lib/utils';

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
    <section id="github" className="py-20">
      <div className="container px-4">
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
          <Card className={cn(
            "transform transition-all duration-700",
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Language Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {githubData.topLanguages.map((lang, index) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{lang.name}</span>
                      <span className="text-muted-foreground">{lang.percentage}%</span>
                    </div>
                    <Progress 
                      value={lang.percentage} 
                      className="h-2"
                      style={{ 
                        "--progress-color": lang.color 
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className={cn(
            "space-y-8 transform transition-all duration-700 delay-200",
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5" />
                  Frequently Used Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {githubData.frequentlyUsedLanguages.map((lang) => (
                    <div key={lang.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <span className={`language-icon ${lang.icon}`}>{getLanguageIcon(lang.icon)}</span>
                          {lang.name}
                        </span>
                        <span className="text-muted-foreground">{lang.proficiency}%</span>
                      </div>
                      <Progress value={lang.proficiency} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookMarked className="h-5 w-5" />
                  Tech Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
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
              </CardContent>
            </Card>
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
    <Card className={cn(
      "transform transition-all duration-500",
      animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    )}
    style={{ transitionDelay: `${delay}ms` }}
    >
      <CardContent className="p-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-3xl font-bold mt-1">{value}</h3>
        </div>
        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
          {icon}
        </div>
      </CardContent>
    </Card>
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
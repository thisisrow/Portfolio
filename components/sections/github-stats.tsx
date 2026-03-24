"use client";
import { useState } from "react";
import Image from "next/image";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

type Tech = { name: string; img: string };
type Category = {
  label: string;
  icon: string;
  accentClass: string;
  activeClass: string;
  techs: Tech[];
};

const categories: Category[] = [
  {
    label: "Frontend", icon: "code", accentClass: "text-sky-600",
    activeClass: "bg-sky-500 text-white border-sky-500",
    techs: [
      { name: "React.js", img: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", img: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "Angular", img: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: "TanStack", img: `${SI}/reactquery/FF4154` },
      { name: "PHP", img: `${DEVICON}/php/php-original.svg` },
    ],
  },
  {
    label: "Mobile", icon: "phone_iphone", accentClass: "text-emerald-600",
    activeClass: "bg-emerald-500 text-white border-emerald-500",
    techs: [
      { name: "React Native", img: `${DEVICON}/react/react-original.svg` },
      { name: "Flutter", img: `${DEVICON}/flutter/flutter-original.svg` },
    ],
  },
  {
    label: "Backend", icon: "dns", accentClass: "text-violet-600",
    activeClass: "bg-violet-500 text-white border-violet-500",
    techs: [
      { name: "Node.js", img: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Express.js", img: `${DEVICON}/express/express-original.svg` },
    ],
  },
  {
    label: "Database", icon: "storage", accentClass: "text-orange-600",
    activeClass: "bg-orange-500 text-white border-orange-500",
    techs: [
      { name: "PostgreSQL", img: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", img: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", img: `${DEVICON}/redis/redis-original.svg` },
      { name: "Cassandra", img: `${SI}/apachecassandra/1287B1` },
      { name: "CockroachDB", img: `${SI}/cockroachlabs/6933FF` },
      { name: "Oracle", img: `${DEVICON}/oracle/oracle-original.svg` },
    ],
  },
  {
    label: "Cloud", icon: "cloud", accentClass: "text-amber-600",
    activeClass: "bg-amber-500 text-white border-amber-500",
    techs: [
      { name: "AWS", img: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Vercel", img: `${SI}/vercel/000000` },
      { name: "Render", img: `${SI}/render/46E3B7` },
      { name: "Railway", img: `${SI}/railway/0B0D0E` },
    ],
  },
  {
    label: "DevOps", icon: "settings_suggest", accentClass: "text-cyan-600",
    activeClass: "bg-cyan-500 text-white border-cyan-500",
    techs: [
      { name: "Docker", img: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", img: `${DEVICON}/kubernetes/kubernetes-plain.svg` },
      { name: "GitHub Actions", img: `${SI}/githubactions/2088FF` },
      { name: "Nginx", img: `${DEVICON}/nginx/nginx-original.svg` },
      { name: "PM2", img: `${SI}/pm2/2B037A` },
    ],
  },
  {
    label: "Testing", icon: "labs", accentClass: "text-rose-600",
    activeClass: "bg-rose-500 text-white border-rose-500",
    techs: [
      { name: "SonarQube", img: `${DEVICON}/sonarqube/sonarqube-original-wordmark.svg` },
      { name: "Jest", img: `${DEVICON}/jest/jest-plain.svg` },
      { name: "Postman", img: `${DEVICON}/postman/postman-original.svg` },
    ],
  },
];

// Flatten all for marquee rows
const allTechs = categories.flatMap((c) => c.techs);
const mid = Math.ceil(allTechs.length / 2);
const row1 = allTechs.slice(0, mid);
const row2 = allTechs.slice(mid);

function MarqueeCard({ tech }: { tech: Tech }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm shrink-0 w-[72px] h-[72px] p-2">
      <Image
        src={tech.img}
        alt={tech.name}
        width={28}
        height={28}
        unoptimized
        className="object-contain"
      />
      <span className="text-[8px] font-semibold text-center text-slate-600 dark:text-slate-400 leading-tight w-full line-clamp-1">
        {tech.name}
      </span>
    </div>
  );
}

export function GithubStats() {
  const [activeTab, setActiveTab] = useState(0);
  const active = categories[activeTab];

  return (
    <section className="py-12 overflow-hidden bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-5">
          <span className="material-symbols-rounded text-sm">terminal</span>
          Built With The Best
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-tight">
          Our <span className="gradient-text">Technology Stack</span>
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We choose the right tool for the right job — industry-grade, battle-tested technologies
          that power production apps at&nbsp;scale.
        </p>
      </div>

      {/* ── Marquee rows ── */}
      <div className="space-y-3 mb-16">
        {/* Row 1 — scrolling left */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
          <div className="flex flex-nowrap gap-3 w-max animate-[marquee_30s_linear_infinite]">
            {[...row1, ...row1, ...row1].map((t, i) => <MarqueeCard key={`r1-${i}`} tech={t} />)}
          </div>
        </div>
        {/* Row 2 — scrolling right */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
          <div className="flex flex-nowrap gap-3 w-max animate-[marquee-reverse_35s_linear_infinite]">
            {[...row2, ...row2, ...row2].map((t, i) => <MarqueeCard key={`r2-${i}`} tech={t} />)}
          </div>
        </div>
      </div>

      {/* ── Tabbed categories ── */}
      <div className="max-w-5xl mx-auto px-6">
        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 ${i === activeTab
                ? `${cat.activeClass} shadow-md shadow-black/10`
                : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 hover:border-primary/40 hover:text-primary"
                }`}
            >
              <span className="material-symbols-rounded text-[15px]">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active category tech cards */}
        <div className="flex flex-wrap justify-center gap-5 min-h-[140px] transition-all">
          {active.techs.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-4 hover:scale-120 transition-all w-28 h-28 p-4"
            >
              <Image
                src={tech.img}
                alt={tech.name}
                width={40}
                height={40}
                unoptimized
                className="object-contain"
              />
              <span className="text-[11px] font-semibold text-center text-slate-700 dark:text-slate-300 leading-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

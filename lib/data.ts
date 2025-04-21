export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl?: string;
  technologies: string[];
}

export interface GitHubData {
  topLanguages: {
    name: string;
    percentage: number;
    color: string;
  }[];
  totalCommits: number;
  totalRepos: number;
  topTechnologies: string[];
  frequentlyUsedLanguages: {
    name: string;
    icon: string;
    proficiency: number;
  }[];
  learning: string[];
}

export const projects: Project[] = [
  {
    id: "palghar-city",
    title: "Palghar City",
    description: "A comprehensive city information portal with local businesses, services, and community resources.",
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    liveUrl: "https://www.palgharcity48.com/",
    githubUrl: "https://github.com/yourusername/palghar-city",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"]
  },
  {
    id: "job-portal",
    title: "MERN Job Portal",
    description: "A full-stack job portal application allowing users to post and apply for jobs with advanced filtering.",
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    liveUrl: "https://mern-stack-job-portal-app.vercel.app/",
    githubUrl: "https://github.com/yourusername/mern-job-portal",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Redux"]
  },
  {
    id: "splash-zone",
    title: "Splash Zone Explorer",
    description: "An interactive water park explorer application for visitors to navigate attractions and plan their visit.",
    imageUrl: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg",
    liveUrl: "https://preview--splash-zone-explorer-app.lovable.app/",
    githubUrl: "https://github.com/yourusername/splash-zone-explorer",
    technologies: ["React", "TypeScript", "Leaflet Maps", "CSS", "Firebase"]
  },
  {
    id: "note-app",
    title: "Note Taking App",
    description: "A minimalist note-taking application with markdown support, tags, and search functionality.",
    imageUrl: "https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg",
    liveUrl: "https://note-six-snowy.vercel.app/",
    githubUrl: "https://github.com/yourusername/note-app",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"]
  }
];

export const githubData: GitHubData = {
  topLanguages: [
    { name: "JavaScript", percentage: 40, color: "#f1e05a" },
    { name: "TypeScript", percentage: 25, color: "#2b7489" },
    { name: "HTML", percentage: 15, color: "#e34c26" },
    { name: "CSS", percentage: 12, color: "#563d7c" },
  ],
  totalCommits: 288,
  totalRepos: 27,
  topTechnologies: [
    "React", "Next.js","React Native", "Node.js", "Express", "MongoDB", "MySQL","PostgreSQL", "Tailwind CSS", "Bootstrap","RESTful API", "Redux","Axios",
  ],
  frequentlyUsedLanguages: [
    { name: "JavaScript", icon: "js", proficiency: 85 },
    { name: "TypeScript", icon: "ts", proficiency: 70 },
    { name: "React", icon: "react", proficiency: 90 },
    { name: "Node.js", icon: "node", proficiency: 80 },
    { name: "HTML/CSS", icon: "html", proficiency: 90 }
  ],
  learning: ["Python"]
};

export const contactInfo = {
  email: "prathameshmishra2020@gmail.com",
  phone: "+91 8010710484",
  location: "Virar East - Mumbai, Maharashtra, India",
  socialLinks: {
    github: "https://github.com/thisisrow",
    linkedin: "www.linkedin.com/in/prathamesh-mishra-a83357260",
    twitter: "https://x.com/Prathamesh22341?t=Iww-kVGIUWPVi6jZFcAi-A&s=08 "
  }
};
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
    title: "PalgharCity48",
    description: "A comprehensive city information portal with local businesses, services, and community resources.",
    imageUrl: "https://res.cloudinary.com/db1nsxnit/image/upload/v1745250770/palgharcity48_uleppe.png",
    liveUrl: "https://www.palgharcity48.com/",
    githubUrl: "https://github.com/thisisrow/Booking",
    technologies: ['Vite+React', 'TypeScript', 'Tailwind', 'Razorpay', 'GoDaddy', 'Git', 'GitHub', 'Vercel']
  },
  {
    id: "sushirmala-foundation",
    title: "Sushirmala Foundation",
    description: "A non-profit organization website showcasing their mission, product, and community joining.",
    imageUrl: "https://res.cloudinary.com/db1nsxnit/image/upload/v1745251438/sushirmala-foundation_vpfulq.png",
    liveUrl: "https://www.sushirmalafoundation.org/",
    githubUrl: "https://github.com/thisisrow/NGO",
    technologies: ['Vite+React', 'JavaScript', 'Bootstrap', 'Namecheap', 'Git', 'GitHub', 'Vercel']
  },
  {
    id: "vaity",
    title: "Water Park Booking",
    description: "A water park booking website with a user-friendly interface for easy reservations and information.",
    imageUrl: "https://res.cloudinary.com/db1nsxnit/image/upload/v1745251436/vaity_ois67x.png",
    liveUrl: "https://vaity.vercel.app/",
    githubUrl: "https://github.com/thisisrow/Vaity",
    technologies: ["Next.js", "Tailwind", "Razorpay", "Git", "GitHub", "Vercel"]
  },
  {
    id: "note-app",
    title: "Note Taking App",
    description: "A minimalist note-taking application with markdown support, tags, and search functionality.",
    imageUrl: "https://res.cloudinary.com/db1nsxnit/image/upload/v1745251691/note_uivlzv.png",
    liveUrl: "https://note-six-snowy.vercel.app/",
    githubUrl: "https://github.com/thisisrow/Note",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"]
  },
  {
    id: "job-portal",
    title: "AI Job Portal",
    description: "Uses AI to rank resumes according to job requirements and recommend jobs to job seekers and job seekers to recruiters for specific jobs.",
    imageUrl: "https://res.cloudinary.com/db1nsxnit/image/upload/v1745251839/job-portel_cnb9gt.png",
    liveUrl: "https://mern-stack-job-portal-app.vercel.app/",
    githubUrl: "https://github.com/thisisrow/MERN-STACK-JOB-PORTAL-APP",
    technologies: ["ChatGpt API","React.js","JavaScript", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Git", "GitHub", "Vercel"]
  },
  {
    id: "modern-ui-ux",
    title: "Modern UI/UX",
    description: "A modern UI/UX design project showcasing various design patterns and components.",
    imageUrl: "https://res.cloudinary.com/db1nsxnit/image/upload/v1745252582/ui-ux_zhgjct.png",
    liveUrl: "https://modern-ui-ux-ebon.vercel.app/",
    githubUrl: "https://github.com/thisisrow/Modern_UI_UX",
    technologies: ["React", "JavaScript", "Tailwind CSS","react-just-parallax", "Git", "GitHub"]
  },
  {
    id: "knowJoy",
    title: "KnowJoy",
    description: "This website is designed to provide entertainment, knowledge, and health/wellness information.",
    imageUrl: "https://res.cloudinary.com/db1nsxnit/image/upload/v1745253360/Screenshot_2025-04-21_220535_ftmmka.png",
    liveUrl: "https://multi-feacture.vercel.app/",
    githubUrl: "https://github.com/thisisrow/KnowJoy",
    technologies: ["React", "JavaScript", "Bootstrap","Git", "GitHub"]
  },{
    id: "vcet-nss",
    title: "Vcet-NSS",
    description: "The NSS Mobile application manages attendance, working hours, volunteers, and certificates.",
    imageUrl: "https://res.cloudinary.com/db1nsxnit/image/upload/v1745253282/nss_vtlqay.png",
    liveUrl: "https://nss--edyjvj4ycn.expo.app",
    githubUrl: "https://github.com/thisisrow/Vcet-NSS",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "MongoDB", "Express.js","Git", "GitHub"]
  },{
    id:"scoreCard",
    title: "Score Card",
    description: "A web application for managing and displaying  the scores of college matches.",
    imageUrl: "https://res.cloudinary.com/db1nsxnit/image/upload/v1745254297/Screenshot_2025-04-21_222119_uhxmb6.png",
    liveUrl: "https://score-card-eight.vercel.app/",
    githubUrl: "https://github.com/thisisrow/ScoreCard",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "MongoDB", "Express.js","Git", "GitHub"]
  },
];

export const githubData: GitHubData = {
  topLanguages: [
    { name: "JavaScript", percentage: 48, color: "#f1e05a" },
    { name: "TypeScript", percentage:37, color: "#2b7489" },
    { name: "HTML", percentage: 2, color: "#e34c26" },
    { name: "CSS", percentage: 6, color: "#563d7c" },
    {name:"Java", percentage: 5, color: "#b07219"},
  ],
  totalCommits: 572,
  totalRepos: 54,
  topTechnologies: [
    "React", "Next.js","React Native", "Node.js", "Express", "MongoDB", "MySQL","PostgreSQL", "Tailwind CSS", "Bootstrap","RESTful API", "Redux","Axios",
  ],
  frequentlyUsedLanguages: [
    { name: "JavaScript", icon: "js", proficiency: 85 },
    { name: "TypeScript", icon: "ts", proficiency: 70 },
    { name: "React", icon: "react", proficiency: 90 },
    { name: "Node.js", icon: "node", proficiency: 80 },
    { name: "HTML/CSS", icon: "html", proficiency: 90 },
    {name :"Next.js" , icon: "next", proficiency: 60},
  ],
  learning: ["Python"]
};

export const contactInfo = {
  email: "prathameshmishra2020@gmail.com",
  phone: "+91 8010710484",
  location: "Virar East - Mumbai, Maharashtra, India",
  socialLinks: {
    github: "https://github.com/thisisrow",
    linkedin: "https://www.linkedin.com/in/prathamesh-mishra-a83357260",
    twitter: "https://x.com/Prathamesh22341?t=Iww-kVGIUWPVi6jZFcAi-A&s=08 "
  }
};
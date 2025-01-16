import { meta, shopify, starbucks, tesla,Sushirmala_Logo } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    bootstrap,
    mysql,
    jquery,
    vite,
    postman,
    vercel

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: jquery,
        name: "jQuery",
        type: "Frontend",
    },
    {
        imageUrl: vite,
        name: "Vite",
        type: "Frontend",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "API Testing",
    },
    {
        imageUrl: vercel,
        name: "Vercel",
        type: "Deployment",
    },
    
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Web development",
        company_name: "Sushirmala Foundation",
        icon: Sushirmala_Logo,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    /*{
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },*/
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/thisisrow',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/prathamesh-mishra-a83357260',
    }
];

export const projects = [
    
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Real-Time Cryptocurrency Price Monitoring & Alerting System',
        description: 'This application enables users to monitor real-time cryptocurrency prices and receive alerts based on price fluctuations. The backend is optimized with a caching mechanism to ensure efficient and fast responses. The application interacts with a cryptocurrency API (CoinGecko API) to retrieve price data.',
        link: 'https://github.com/thisisrow/Task2',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'NGO',
        description: 'Developed a website for an NGO to facilitate the online display and sale of their products. The platform allows users to browse and purchase items, promoting the NGO initiatives, while transactions are handled through offline payment methods to simplify operations.',
        link: 'https://github.com/thisisrow/NGO',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Vcet-NSS',
        description: 'Developed a comprehensive full-stack Android application designed to streamline NSS operations. The app enables efficient tracking and notifying of volunteer attendance, management of events, and facilitates interactive discussions by allowing members to create and share posts on various topics. It serves as a centralized platform to enhance collaboration among NSS members.',
        link: 'https://github.com/thisisrow/Vcet-NSS',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Modern UI/UX',
        description: 'Conceptualized and designed a visually appealing and intuitive frontend interface inspired by modern design principles. The theme emphasizes user engagement, ease of navigation, and a sleek aesthetic, making it ideal for dynamic web and mobile applications.',
        link: 'https://github.com/thisisrow/Modern_UI_UX',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: ' ScoreCard',
        description: 'Created a robust full-stack application to provide real-time updates on college sports. The platform offers features to display live scores, manage player details, handle registrations, organize teams and sports events, and process fee transactions. This application enhances the overall management and visibility of college sports activities.',
        link: 'https://github.com/thisisrow/ScoreCard',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: ' KnowJoy',
        description: 'Developed an engaging entertainment website catering to diverse interests. The platform includes a variety of fun and interactive content such as jokes, riddles, and cocktail recipes, among other features. It is designed to provide users with a joyful and relaxing browsing experience.',
        link: 'https://github.com/thisisrow/KnowJoy',
    }
];
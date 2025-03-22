import { Github, Mail, Linkedin, Twitter, ExternalLink, Code } from "lucide-react";

export const personalInfo = {
  name: "Ezekiel Funom Gwamna",
  title: "Full Stack Software Engineer",
  email: "ezekiel@example.com",
  phone: "+1 (234) 567-890",
  location: "New York, United States",
  shortBio: "I build responsive, scalable web applications with modern technologies. Passionate about creating clean, efficient, and user-friendly software solutions.",
  resumeUrl: "/src/assets/resume.pdf",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/ezekielgwamna",
      icon: Github
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ezekielgwamna",
      icon: Linkedin
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ezekielgwamna",
      icon: Twitter
    },
    {
      name: "Email",
      url: "mailto:ezekiel@example.com",
      icon: Mail
    }
  ]
};

export const about = {
  description: [
    "I'm a passionate Full Stack Software Engineer with 5+ years of experience building web applications and digital solutions. My journey in technology began at the University of Technology, where I earned my Bachelor's degree in Computer Science.",
    "Throughout my career, I've worked with various teams and clients, from startups to enterprises, helping them bring their digital products to life. I specialize in React.js, Node.js, and cloud technologies, with a focus on creating scalable and maintainable solutions."
  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2018"
  },
  experience: {
    position: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "2020-Present"
  },
  interests: ["Open Source", "Cloud Computing", "AI"]
};

export type Skill = {
  name: string;
  percentage: number;
};

export const skills = {
  frontend: [
    { name: "React.js", percentage: 90 },
    { name: "JavaScript (ES6+)", percentage: 95 },
    { name: "CSS/SASS", percentage: 85 },
    { name: "TypeScript", percentage: 80 }
  ],
  backend: [
    { name: "Node.js", percentage: 85 },
    { name: "Express.js", percentage: 90 },
    { name: "MongoDB", percentage: 80 },
    { name: "SQL/PostgreSQL", percentage: 75 }
  ],
  artificialIntelligence: [
    { name: "Machine Learning", percentage: 85 },
    { name: "Natural Language Processing", percentage: 80 },
    { name: "Computer Vision", percentage: 75 },
    { name: "Deep Learning", percentage: 70 }
  ],
  devTools: [
    "Git & GitHub",
    "Command Line",
    "AWS",
    "VS Code",
    "Webpack"
  ],
  libraries: [
    "Redux",
    "Next.js",
    "Tailwind CSS",
    "Material UI",
    "Jest",
    "GraphQL"
  ],
  softSkills: [
    "Team Collaboration",
    "Time Management",
    "Communication",
    "Problem Solving",
    "Leadership"
  ]
};

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  sourceUrl: string;
};

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    category: "React, Node.js, MongoDB",
    description: "A fully responsive e-commerce platform with user authentication, product catalog, shopping cart, and payment processing.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    demoUrl: "https://project1.example.com",
    sourceUrl: "https://github.com/ezekielgwamna/ecommerce"
  },
  {
    title: "Task Management App",
    category: "React, Redux, Firebase",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Redux", "Firebase", "React DnD"],
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    demoUrl: "https://project2.example.com",
    sourceUrl: "https://github.com/ezekielgwamna/taskmanager"
  },
  {
    title: "Finance Dashboard",
    category: "React, D3.js, Express",
    description: "An interactive financial dashboard with data visualization, budget tracking, and expense analysis tools.",
    technologies: ["React", "D3.js", "Express", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80",
    demoUrl: "https://project3.example.com",
    sourceUrl: "https://github.com/ezekielgwamna/finance-dashboard"
  }
];

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

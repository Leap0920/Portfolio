import { Project, Certificate, Skill, Experience } from './types';

export const PORTFOLIO_OWNER = "Carlo C. Baclao";
export const INTRO_TEXT = "Curious and sociable individual with a passion for software engineering. I enjoy learning new technologies and applying them to solve real-world problems. My goal is to become a proficient software engineer and contribute to innovative projects that make a positive impact.";

export const SKILLS: Skill[] = [
  { name: 'JavaScript', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'C++', category: 'Language' },
  { name: 'Dart', category: 'Language' },
  { name: 'PHP', category: 'Language' },
  { name: 'SQL', category: 'Language' },
  { name: 'React', category: 'Framework' },
  { name: 'Flutter', category: 'Framework' },
  { name: 'Tailwind CSS', category: 'Framework' },
  { name: 'Bootstrap', category: 'Framework' },
  { name: 'Git & GitHub', category: 'Tool' },
  { name: 'Firebase', category: 'Tool' },
  { name: 'Canva', category: 'Tool' },
  { name: 'Agile Management', category: 'Soft Skill' },
  { name: 'Project Management', category: 'Soft Skill' },
  { name: 'Problem Solving', category: 'Soft Skill' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    type: 'education',
    role: 'Bachelor of Science in Information Technology',
    company: 'Quezon City University',
    duration: '2023 - Present',
    description: [
      'Specializing in Software Engineering.',
      'Focused on full-stack development and system architecture.'
    ]
  },
  {
    id: 2,
    type: 'work',
    role: 'Data Encoder',
    company: 'State Lab Clinics and Diagnostic Center',
    duration: 'April 2022 – July 2022',
    description: [
      'Accurately encoded and updated patient information and laboratory results into the management system.',
      'Managed and organized digital and physical files, maintaining strict confidentiality in compliance with data privacy standards.'
    ]
  },
  {
    id: 3,
    type: 'education',
    role: 'Information Technology',
    company: 'Asian Institute of Computer Studies',
    duration: '2021 - 2023',
    description: [
      'Gained foundational knowledge in programming, computer hardware, and networking.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'LECUISINE',
    description: 'A responsive culinary showcase website designed to highlight gourmet dishes and recipes. Features a modern, appetizing UI built with semantic HTML, CSS, and JavaScript for an immersive browsing experience.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    repoUrl: 'https://github.com/Leap0920/LECUISINE',
    demoUrl: 'https://leap0920.github.io/LECUISINE/'
  },
  {
    id: 2,
    title: 'Attendance Management',
    description: 'A robust system for tracking and managing attendance records. Designed to streamline administrative tasks, featuring database integration for reliable data storage and retrieval.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'Database Management'],
    repoUrl: 'https://github.com/Leap0920/Attendance-Management'
  },
  {
    id: 3,
    title: 'JDM Culture Website',
    description: 'A high-octane landing page dedicated to Japanese Domestic Market car enthusiasts. Utilizes modern web design principles to create a visually engaging platform for car culture.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
    repoUrl: 'https://github.com/Leap0920/JDM-website',
    demoUrl: 'https://leap0920.github.io/JDM-website/'
  },
  {
    id: 4,
    title: 'Accounting and Finance System',
    description: 'A comprehensive financial management solution handling bookkeeping, transaction tracking, and reporting. Built with a focus on data accuracy and secure backend processing.',
    tags: ['PHP', 'MySQL', 'System Architecture', 'FinTech'],
    repoUrl: 'https://github.com/Leap0920/Accounting-and-finance'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: "Professional Diploma in Agile Product Management",
    issuer: 'Udemy'
  },
  {
    id: 2,
    title: "Professional Certificate in Project Management",
    issuer: 'Udemy'
  },
  {
    id: 3,
    title: "Introduction to Software Engineering",
    issuer: 'Udemy'
  },
  {
    id: 4,
    title: "Git, GitHub, GitHub Fundamentals",
    issuer: 'Udemy'
  },
  {
    id: 5,
    title: "AI Tools for UX/UI Designers and Web Designers",
    issuer: 'Udemy'
  },
  {
    id: 6,
    title: "Social Media Graphics Design and Video Editing in Canva",
    issuer: 'Udemy'
  },
  {
    id: 7,
    title: "Dart & Flutter | The Complete Flutter Development Course",
    issuer: 'Udemy'
  },
  {
    id: 8,
    title: "Build A Chat Application With Firebase, Flutter and Provider",
    issuer: 'Udemy'
  },
  {
    id: 9,
    title: "Web3 / Blockchain Project Manager Certification Course",
    issuer: 'Udemy'
  },
  {
    id: 10,
    title: "Mastering C++ Language - C++ Programming For Beginners",
    issuer: 'Udemy'
  },
  {
    id: 11,
    title: "Build 13 Projects with PHP MySQL Bootstrap and PDO",
    issuer: 'Udemy'
  },
  {
    id: 12,
    title: "JavaScript Fundamentals to Advanced: Full Stack Development",
    issuer: 'Udemy'
  },
  {
    id: 13,
    title: "Introduction to Cybersecurity",
    issuer: 'Cisco'
  },
  {
    id: 14,
    title: "Responsive Web Design",
    issuer: 'FreeCodeCamp'
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/leap0920",
  linkedin: "https://linkedin.com/in/baclao-carlo-22936435a/",
  twitter: "https://twitter.com",
  email: "mailto:baclao.carlo.cometa@gmail.com"
};
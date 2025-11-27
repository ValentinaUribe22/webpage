import { Job, Project, SkillData } from './types';

export const PERSONAL_INFO = {
  name: "Alex Sterling",
  title: "Senior Frontend Engineer & UX Specialist",
  about: `I am a passionate Senior Frontend Engineer with over 8 years of experience building high-performance web applications. I specialize in the React ecosystem, TypeScript, and modern CSS frameworks like Tailwind. My philosophy is that code should be as beautiful as the design it implements. I bridge the gap between complex backend logic and intuitive user experiences.`,
  email: "alex.sterling@example.com",
  location: "San Francisco, CA",
  socials: {
    github: "github.com/alexsterling",
    linkedin: "linkedin.com/in/alexsterling",
    twitter: "twitter.com/alex_dev"
  }
};

export const EXPERIENCE: Job[] = [
  {
    id: '1',
    role: "Senior Frontend Engineer",
    company: "TechNova Solutions",
    period: "2021 - Present",
    description: "Leading the frontend migration from a legacy monolithic architecture to a micro-frontend ecosystem using React and Next.js. Improved site performance metrics by 40% and established a comprehensive design system used across 5 different product lines.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"]
  },
  {
    id: '2',
    role: "Software Engineer",
    company: "Creative Pulse",
    period: "2018 - 2021",
    description: "Developed and maintained high-traffic e-commerce platforms for major retail clients. Implemented real-time inventory tracking and dynamic pricing visualization tools. Mentored junior developers in React best practices.",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL", "Docker"]
  },
  {
    id: '3',
    role: "Junior Web Developer",
    company: "StartUp Inc.",
    period: "2016 - 2018",
    description: "Collaborated with designers to implement responsive landing pages and marketing materials. optimized asset delivery pipelines reducing load times by 2 seconds.",
    technologies: ["JavaScript", "HTML5", "SASS", "Gulp", "jQuery"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "EcoDash",
    description: "A real-time dashboard for monitoring energy consumption in smart homes. Features interactive data visualization and predictive analytics using machine learning models.",
    image: "https://picsum.photos/600/400?random=1",
    tags: ["React", "D3.js", "Firebase", "IoT"]
  },
  {
    id: 'p2',
    title: "Nebula Chat",
    description: "An encrypted messaging application focused on privacy and speed. Utilizes WebSockets for instant delivery and end-to-end encryption for all messages.",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["TypeScript", "Socket.io", "Redis", "CryptoAPI"]
  },
  {
    id: 'p3',
    title: "TaskFlow",
    description: "A collaborative project management tool designed for remote teams. Includes drag-and-drop kanban boards, time tracking, and automated reporting.",
    image: "https://picsum.photos/600/400?random=3",
    tags: ["Vue.js", "Supabase", "Tailwind", "Netlify"]
  }
];

export const SKILLS_DATA: SkillData[] = [
  { subject: 'React/Next.js', A: 95, fullMark: 100 },
  { subject: 'TypeScript', A: 90, fullMark: 100 },
  { subject: 'UI/UX Design', A: 85, fullMark: 100 },
  { subject: 'Node.js', A: 75, fullMark: 100 },
  { subject: 'Cloud (AWS)', A: 70, fullMark: 100 },
  { subject: 'GraphQL', A: 80, fullMark: 100 },
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant representing ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.title}.
Your goal is to answer questions about Alex's professional background, skills, and experience in a professional, friendly, and concise manner.

Here is Alex's resume data:

SUMMARY: ${PERSONAL_INFO.about}

EXPERIENCE:
${EXPERIENCE.map(job => `- ${job.role} at ${job.company} (${job.period}): ${job.description} (Tech: ${job.technologies.join(', ')})`).join('\n')}

PROJECTS:
${PROJECTS.map(proj => `- ${proj.title}: ${proj.description} (Tech: ${proj.tags.join(', ')})`).join('\n')}

SKILLS:
${SKILLS_DATA.map(s => `${s.subject} (${s.A}/100)`).join(', ')}

CONTACT:
Email: ${PERSONAL_INFO.email}
Socials: ${Object.entries(PERSONAL_INFO.socials).map(([k, v]) => `${k}: ${v}`).join(', ')}

Guidelines:
- Keep answers relatively short (under 3 paragraphs) unless asked for details.
- Be enthusiastic but professional.
- If asked about something not in the resume, polititely say you don't have that information but emphasize a related skill if applicable.
- Do not make up facts not present in this data.
`;

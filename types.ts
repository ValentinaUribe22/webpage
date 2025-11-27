export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  image: string;
  tags: string[];
}

export interface SkillData {
  subject: string;
  A: number; // Proficiency level (0-100)
  fullMark: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}
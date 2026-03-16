export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
}

export interface Skill {
  id: string;
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  techStack: string[];
  conceptsDemonstrated?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

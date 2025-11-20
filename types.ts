import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date?: string;
  url?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Language' | 'Framework' | 'Tool' | 'Soft Skill';
  icon?: React.ReactNode;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
  type: 'work' | 'education';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
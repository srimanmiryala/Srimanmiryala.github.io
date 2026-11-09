export interface Project {
  id: string;
  title: string;
  category: 'systems' | 'aiml' | 'fullstack';
  badge: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  caseStudy: {
    problemStatement: string;
    architectureOverview: string;
    engineeringDecisions: { title: string; description: string }[];
    metrics: string;
  };
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; proficiency: number; context: string }[];
}

export interface AlgorithmicStat {
  platform: string;
  badge: string;
  metric: string;
  rating: string;
  handle: string;
  url: string;
  description: string;
}

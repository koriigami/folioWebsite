export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  isWIP: boolean;
  isPasswordProtected: boolean;
  password?: string;
  category: 'design' | 'product' | 'both';
  year: number;
  role: string;
  duration: string;
  team?: string;
  outcome?: string;
  images?: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'sample-project-1',
    title: 'Sample Project 1',
    description: 'A beautiful product design case study showcasing user research and iterative design process.',
    longDescription: `
# Project Overview
This project aimed to redesign the user experience for a complex enterprise application.

## Challenge
Users were struggling with navigation and finding key features buried in menus.

## Solution
We conducted user interviews, created personas, and redesigned the information architecture.

## Results
- 40% reduction in time to complete key tasks
- 25% increase in user satisfaction scores
- 15% increase in daily active users
    `,
    image: 'https://picsum.photos/seed/project1/800/600',
    tags: ['UX Design', 'User Research', 'Figma', 'Prototyping'],
    isWIP: false,
    isPasswordProtected: false,
    category: 'design',
    year: 2024,
    role: 'Lead Product Designer',
    duration: '3 months',
    team: 'Design team of 3',
    outcome: 'Successfully launched to 10k+ users',
    images: [
      'https://picsum.photos/seed/project1-1/800/600',
      'https://picsum.photos/seed/project1-2/800/600',
      'https://picsum.photos/seed/project1-3/800/600'
    ]
  },
  {
    id: '2',
    slug: 'sample-project-2',
    title: 'Sample Project 2',
    description: 'Product management case study focusing on feature prioritization and roadmap planning.',
    longDescription: `
# Product Strategy
Led the product strategy for a new mobile application from concept to launch.

## Research & Discovery
Conducted market research and competitive analysis to identify opportunities.

## Execution
Built cross-functional alignment and managed the product roadmap through multiple sprints.

## Impact
Achieved product-market fit within 6 months of launch.
    `,
    image: 'https://picsum.photos/seed/project2/800/600',
    tags: ['Product Strategy', 'Roadmapping', 'Analytics', 'Agile'],
    isWIP: false,
    isPasswordProtected: true,
    password: 'demo123',
    category: 'product',
    year: 2023,
    role: 'Product Manager',
    duration: '6 months',
    outcome: '5k+ downloads in first month'
  },
  {
    id: '3',
    slug: 'work-in-progress',
    title: 'Upcoming Project',
    description: 'An exciting new project currently in development. Stay tuned for updates!',
    longDescription: 'This project is currently in progress. More details coming soon!',
    image: 'https://picsum.photos/seed/wip/800/600',
    tags: ['Design System', 'React', 'TypeScript'],
    isWIP: true,
    isPasswordProtected: false,
    category: 'both',
    year: 2024,
    role: 'Product Designer & PM',
    duration: 'Ongoing'
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(project => project.category === category || project.category === 'both')
}

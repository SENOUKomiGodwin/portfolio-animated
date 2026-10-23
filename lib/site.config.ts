import { siteData } from '@/content/site-data';

export const siteConfig = {
  name: siteData.fullName,
  brand: siteData.brand,
  title: siteData.role,
  location: siteData.location,
  email: siteData.email,
  github: siteData.github,
  linkedin: siteData.linkedin,
  url: 'https://your-domain.com',
  locale: 'fr-FR',

  accentColor: '#00ff41', // Vert terminal
  accentColorDark: '#00cc33',

  skills: siteData.skills,

  projects: siteData.projects.map((project) => ({
    id: project.slug,
    title: project.slug.charAt(0).toUpperCase() + project.slug.slice(1),
    description: project.description,
    features: project.features,
    stack: project.stack,
    deployment: project.demo ? 'Vercel' : null,
    demo: project.demo,
    code: project.code,
    type: project.type || 'Projet',
    role: project.note || undefined,
  })),
};

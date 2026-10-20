export const siteConfig = {
  name: 'SENOU Komi Godwin',
  brand: 'Win_ner</>',
  title: 'Fullstack Developer',
  location: 'Lomé, Togo',
  email: 'godwinsenou@icloud.com',
  github: 'https://github.com/SENOUKomiGodwin',
  linkedin: null, // [À REMPLIR]
  url: 'https://your-domain.com',
  locale: 'fr-FR',

  accentColor: '#00ff41', // Vert terminal
  accentColorDark: '#00cc33',

  skills: {
    languages: ['Python', 'JavaScript', 'HTML', 'CSS'],
    frameworks: ['Laravel', 'React', 'Next.js', 'NestJS', 'Tailwind CSS', 'Bootstrap'],
    databases: ['MySQL', 'PostgreSQL', 'SQLite'],
    tools: ['Git', 'GitHub'],
  },

  projects: [
    {
      id: 'agritogo',
      title: 'AgriTogo',
      description: 'Site vitrine pour une initiative de promotion des produits agricoles togolais : présentation de l\'organisation, catalogue de produits locaux, actualités du secteur, formulaire de contact.',
      features: 'Mode sombre, formulaire de contact connecté à Formspree, site responsive.',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'Formspree'],
      deployment: 'Vercel',
      demo: 'https://get-agri-togo.vercel.app/',
      code: 'https://github.com/SENOUKomiGodwin/brief_AgriTogo',
      type: 'Projet réalisé à partir d\'un brief',
    },
    {
      id: 'edupaie',
      title: 'EduPaie',
      description: 'Application desktop de gestion des paiements scolaires pour les petites écoles : enregistrement des élèves et de leurs paiements, calcul automatique du solde restant dû, génération de reçus numérotés.',
      features: 'Architecture en 3 couches strictement séparées (SQLite, services, PySide6). Tests, script de seed, documentation utilisateur, installeur Windows.',
      stack: ['Python', 'PySide6', 'SQLite'],
      deployment: null,
      demo: null,
      code: 'https://github.com/SENOUKomiGodwin/Edupaie',
      type: 'Application desktop',
    },
    {
      id: 'bidapp',
      title: 'Bid App',
      description: 'Application web de services de proximité avec pages pressing, lavage auto, entretien, suivi de commande et interface d\'administration.',
      features: 'Contribution à un projet d\'équipe.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      deployment: null,
      demo: null,
      code: 'https://github.com/SENOUKomiGodwin/bid--app',
      type: 'Contribution',
      role: '[À REMPLIR]', // Détails du rôle dans CONTENU-A-REMPLACER.md
    },
  ],
};

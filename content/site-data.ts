export interface Project {
  slug: string;
  description: string;
  features: string[];
  stack: string[];
  type?: string;
  demo: string | null;
  code: string;
  note?: string;
}

export interface SiteData {
  fullName: string;
  brand: string;
  role: string;
  location: string;
  availability: string;
  email: string;
  emailSubject: string;
  emailBody: string;
  github: string;
  linkedin: string | null;
  whatsapp: string;
  whatsappMessage: string;
  skills: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    tools: string[];
  };
  projects: Project[];
  bio: string;
}

export const siteData: SiteData = {
  fullName: "SENOU Komi Godwin",
  brand: "Win_ner</>",
  role: "Fullstack Developer",
  location: "Lomé, Togo",
  availability: "Disponible pour des missions freelance et des opportunités à temps plein.",
  email: "godwinsenou@icloud.com",
  emailSubject: "Contact depuis votre portfolio",
  emailBody: "Bonjour Godwin,\n\n",
  github: "https://github.com/SENOUKomiGodwin",
  linkedin: "https://www.linkedin.com/in/komi-godwin-senou",
  whatsapp: "22897836468",
  whatsappMessage: "Bonjour Godwin, je vous contacte depuis votre portfolio.",
  skills: {
    languages: ["Python", "JavaScript", "HTML", "CSS"],
    frameworks: ["Laravel", "React", "Next.js", "NestJS", "Tailwind CSS", "Bootstrap"],
    databases: ["MySQL", "PostgreSQL", "SQLite"],
    tools: ["Git", "GitHub", "VS Code", "Figma"],
  },
  projects: [
    {
      slug: "agritogo",
      description: "Site vitrine pour une initiative de promotion des produits agricoles togolais : présentation de l'organisation, catalogue de produits locaux (transformés, céréales, tubercules, condiments), actualités du secteur et formulaire de contact.",
      features: ["Mode sombre", "Formulaire de contact connecté à Formspree", "Site responsive"],
      stack: ["HTML5", "CSS3", "JavaScript", "Formspree"],
      type: "Projet réalisé à partir d'un brief",
      demo: "https://get-agri-togo.vercel.app/",
      code: "https://github.com/SENOUKomiGodwin/brief_AgriTogo",
    },
    {
      slug: "edupaie",
      description: "Application desktop de gestion des paiements scolaires pour les petites écoles : enregistrement des élèves et de leurs paiements, calcul automatique du solde restant dû, génération de reçus numérotés. Devise : Franc CFA (FCFA).",
      features: ["Architecture en 3 couches séparées : données, services, interface", "Tests inclus", "Script de remplissage de la base", "Documentation utilisateur", "Installeur Windows"],
      stack: ["Python", "PySide6", "SQLite"],
      demo: null,
      code: "https://github.com/SENOUKomiGodwin/Edupaie",
    },
    {
      slug: "bidapp",
      description: "Application web de services de proximité, avec des pages pressing, lavage auto, entretien, suivi de commande et une interface d'administration.",
      features: [],
      stack: ["HTML", "CSS", "JavaScript"],
      type: "Contribution à un projet d'équipe (fork)",
      demo: null,
      code: "https://github.com/SENOUKomiGodwin/bid--app",
      note: "Ne jamais présenter ce projet comme entièrement le mien. Mon rôle précis est [À REMPLIR].",
    },
  ],
  bio: "Développeur fullstack basé à Lomé, Togo. Je développe des applications web et desktop. Mes projets incluent des sites vitrines en HTML/CSS/JavaScript, des applications desktop en Python/PySide6, et des contributions à des projets d'équipe.",
};

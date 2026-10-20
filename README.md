# Win_ner</> - Portfolio

Portfolio de SENOU Komi Godwin, Fullstack Developer basé à Lomé, Togo.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP + ScrollTrigger, Framer Motion
- **Smooth Scroll**: Lenis
- **Fonts**: Geist, Geist Mono, JetBrains Mono (via @fontsource)

## Fonctionnalités

- Preloader animé (une fois par session)
- Hero avec animation lettre par lettre et chevrons clignotants
- Marquee réactif
- Section horizontale des projets (pin + scrub)
- Révélations au scroll variées
- Curseur personnalisé (desktop)
- Boutons magnétiques
- Logo animé
- Pages détaillées pour chaque projet
- Mode sombre par défaut

## Démarrage en local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser le build de production
npm start
```

## Configuration

Modifier `lib/site.config.ts` pour mettre à jour :
- Votre nom et informations
- Liens sociaux
- Projets
- Compétences

## Contenu à remplir

Voir `CONTENU-A-REMPLACER.md` pour les informations manquantes :
- LinkedIn
- Rôle détaillé dans Bid App
- Parcours et expériences
- Formspree form ID
- Domaine
- Captures d'écran des projets

## Déploiement sur Vercel

1. Connecter le repo GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Cliquer sur "Deploy"

## Structure du projet

```
app/
├── layout.tsx          # Layout racine
├── page.tsx            # Page d'accueil
├── projets/            # Pages projets
│   ├── page.tsx        # Liste des projets
│   └── [id]/page.tsx   # Page détaillée
├── a-propos/page.tsx   # Page À propos
├── contact/page.tsx    # Page Contact
├── robots.txt          # SEO
└── sitemap.ts          # Sitemap

components/
├── providers.tsx       # Lenis smooth scroll
├── preloader.tsx       # Preloader animé
├── hero.tsx            # Hero animé
├── marquee.tsx         # Marquee
├── nav.tsx             # Navigation
├── custom-cursor.tsx   # Curseur personnalisé
├── magnetic-button.tsx # Boutons magnétiques
├── horizontal-scroll.tsx # Section horizontale
├── scroll-reveal.tsx   # Révélations au scroll
├── text-reveal.tsx     # Révélation texte
├── image-reveal.tsx    # Révélation image
├── parallax-image.tsx  # Parallaxe image
├── divider-line.tsx    # Lignes animées
└── project-hover-preview.tsx # Aperçu au survol

lib/
└── site.config.ts      # Configuration du site
```

## Performance

- Respect de `prefers-reduced-motion`
- Animation uniquement de `transform` et `opacity`
- 60 fps
- Responsive 360px à 1920px

# CLAUDE.md - CirculaRoulette SNCF

## Projet

Quiz interactif sur l'économie circulaire pour les Journées Nationales du Recyclage 2026 (SNCF).
Roue à 8 catégories → question aléatoire → explication pédagogique → rejouer.

## Commandes

```bash
npm run dev       # Serveur de dev (Vite)
npm run build     # Build production → dist/
npm run preview   # Preview du build
```

Déployé sur Netlify. Intégrable en iframe (auto-resize via postMessage).

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS v4 (imports via `@tailwindcss/vite`)
- Motion (framer-motion) pour les animations
- Lucide React pour les icônes

## Structure

```
src/
├── main.tsx                          # Point d'entrée React
├── app/
│   ├── App.tsx                       # Composant principal, gestion d'état
│   ├── components/
│   │   ├── Wheel.tsx                 # Roue animée (8 sections de 45°)
│   │   ├── Quiz.tsx                  # Affichage question, validation, explication
│   │   └── ui/utils.ts              # Helper cn() (clsx + tailwind-merge)
│   └── data/
│       └── quizData.ts              # Toutes les questions et catégories
├── imports/                          # SVG de fond de la roue
└── styles/
    ├── index.css                     # CSS principal (imports)
    ├── fonts.css                     # Polices custom
    ├── tailwind.css                  # Imports Tailwind
    └── theme.css                     # Variables de thème
```

## Catégories

5 actives avec questions :
- "ça va où ?" — Tri et recyclage des déchets
- "j'agis !!" — Actions circulaires, seconde main
- "challenge !!!" — Faits et chiffres
- "bon plan" — Astuces, bonus réparation
- "ma conso" — Habitudes de consommation

2 spéciales (pas de questions) :
- "et ça repart !" — Relance la roue (apparaît 2 fois sur la roue)
- "mystère !!" — Sélectionne une catégorie aléatoire parmi les actives

1 en construction :
- "on en parle !?" — Placeholder, pas encore de questions

## Format des questions (quizData.ts)

```typescript
interface Question {
  id: number;
  question: string;
  options: string[];          // Préfixées "A) ", "B) ", "C) "...
  correctAnswer: number;      // Index (0-based) ou number[] pour réponses multiples
  hint?: string;              // Indice, peut contenir un lien markdown [texte](url)
  explanation: string;        // Explication pédagogique, supporte \n et liens markdown
  source: string;             // Source/thème de la question
}

export const quizDataByCategory: Record<string, Question[]>
```

## Palette SNCF

- Bleu clair : `#a4c8e1`
- Vert clair : `#a1d6ca`
- Bleu SNCF : `#0084d4`
- Vert éco : `#00b388`
- Bleu marine : `#00205b`
- Bleu foncé : `#003865`
- Vert foncé : `#154734`

## Conventions

- Langue du code : anglais pour les noms de variables/fonctions, français pour le contenu utilisateur
- Les explications dans quizData.ts utilisent des liens markdown `[texte](url)` parsés dans Quiz.tsx
- Le composant Quiz.tsx gère 3 modes : réponse unique, réponses multiples, question de discussion (options vides)
- La roue est responsive : 340px mobile / 500px desktop
- Jeu concours via formulaire Tally : https://tally.so/r/EklWLq

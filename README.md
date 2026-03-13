# CirculaRoulette SNCF - Quiz Économie Circulaire

Application React interactive de quiz sur l'économie circulaire pour les **Journées Nationales du Recyclage 2026**, en partenariat SNCF.

## Description

CirculaRoulette est une version numérique interactive de la roue physique CirculaRoulette. Elle permet aux utilisateurs de :
- Faire tourner une roue à 8 catégories
- Répondre à des questions sur l'économie circulaire
- Découvrir des explications pédagogiques après chaque réponse
- Participer à un jeu concours pour gagner des lots éco-responsables

## Fonctionnalités

- 73+ questions réparties sur 8 catégories
- Interface responsive (mobile & desktop)
- Animations fluides avec Motion
- Design accessible avec couleurs SNCF
- Éco-conception et optimisation des performances
- Intégrable en iframe dans un site Wagtail (auto-resize)

## Palette SNCF

- Couleurs claires : #a4c8e1, #a1d6ca
- Couleurs normales : #0084d4, #00b388
- Couleurs sombres : #00205b, #003865, #154734

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Déploiement

Sur Netlify :
- Build command : `npm run build`
- Publish directory : `dist`

## Intégration iframe

Voir [IFRAME_INTEGRATION.md](./IFRAME_INTEGRATION.md) pour l'intégration Wagtail avec auto-resize.

## Technologies

- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- Motion (animations)
- Lucide React (icônes)

## Jeu concours

Formulaire jeu concours : https://quefairedemesdechets.ademe.fr/jeu-concours-entrain-pour-le-climat/

# Benin BTP Control — Frontend

Fondation frontend du site BBC, construite avec React, Vite, SCSS, Framer Motion et React Router.

## Prérequis

- Node.js 22+
- npm 10+
- Docker + Docker Compose pour l'exécution conteneurisée

## Installation locale

Depuis `frontend/` :

```bash
npm install
```

Copier `.env.example` vers `.env` et ajuster les variables si nécessaire.

## Développement local

Depuis `frontend/` :

```bash
npm run dev
```

Application disponible par défaut sur `http://localhost:5173`.

## Qualité et build

```bash
npm run lint
npm run build
npm run preview
```

## Docker — développement

Depuis la racine du projet :

```bash
docker compose -f docker/compose.yaml up --build
```

Le montage du dossier `frontend/` conserve le hot reload et un volume Docker séparé protège `node_modules`.

## Docker — production

Depuis la racine du projet :

```bash
docker compose -f docker/compose.prod.yaml up --build -d
```

La SPA est servie par Nginx sur `http://localhost:8080`.
Le fallback `/index.html` permet aux routes React de fonctionner après actualisation.

## Structure du projet

```text
bbc/
├── docker/
│   ├── compose.yaml
│   ├── compose.prod.yaml
│   └── nginx.conf
├── frontend/
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .dockerignore
└── .gitignore
```

## Variables d'environnement

Les variables frontend Vite sont préfixées par `VITE_` et sont intégrées au bundle client. Elles ne doivent donc jamais contenir de secret.

- `VITE_SITE_URL`
- `VITE_API_URL`

## Direction de cette étape

Le contenu de la page d'accueil est volontairement provisoire. L'identité visuelle et les contenus métier définitifs seront intégrés dans les étapes suivantes.
## Direction visuelle

La navigation principale reste fixe en haut de l’écran pour conserver un accès permanent au menu. La couleur d’accent utilise un vert citron doux (`#B7D334`) choisi pour dialoguer avec le bleu du logo BBC sans reprendre l’orange de la référence visuelle.


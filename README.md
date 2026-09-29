# Benin BTP Control — Frontend

Fondation React/Vite du site BBC, structurée autour d'une expérience de bureau de contrôle technique : missions, compétences, agences, groupe, réalisations et demande de devis.

## Structure

- `frontend/` — application React, SCSS, Framer Motion
- `docker/` — Compose et Nginx

## Lancement local

```bash
cd frontend
npm install
npm run dev
```

## Qualité et build

```bash
cd frontend
npm run lint
npm run build
```

## Docker

Depuis la racine :

```bash
docker compose -f docker/compose.yaml up --build
```

Production :

```bash
docker compose -f docker/compose.prod.yaml up --build -d
```

## Architecture métier

La navigation est pilotée par `frontend/src/constants/navigation.js` et les données de présentation par `frontend/src/data/siteData.js`. Les pages de missions, compétences, agences et groupe sont générées depuis ces données afin de pouvoir remplacer les informations provisoires par les données officielles BBC sans refaire les composants.

La direction UX s'inspire des conventions de navigation et de présentation des bureaux de contrôle technique professionnels, sans reprendre les textes, visuels ou données propriétaires d'un site tiers.

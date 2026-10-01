export const competenceItems = [
  { label: 'Normes de construction', slug: 'normes-de-construction' },
  { label: 'Performance énergétique', slug: 'performance-energetique' },
  { label: 'Sécurité sur chantier', slug: 'securite-sur-chantier' },
  { label: 'Sécurité incendie', slug: 'securite-incendie' },
  { label: 'Immeubles de grande hauteur', slug: 'immeubles-grande-hauteur' },
  { label: 'Thermique', slug: 'thermique' },
  { label: 'Acoustique', slug: 'acoustique' },
  { label: 'Électricité', slug: 'electricite' },
  { label: 'Parasismique', slug: 'parasismique' },
  { label: 'Grues et moyens de levage', slug: 'grues-levage' },
  { label: 'Ascenseurs', slug: 'ascenseurs' },
]

export const missionItems = [
  { label: 'Contrôle construction', slug: 'controle-construction' },
  { label: 'Vérifications ERP', slug: 'verifications-erp' },
  { label: 'Énergie, environnement et acoustique', slug: 'energie-environnement-acoustique' },
  { label: 'Vérifications exploitation', slug: 'verifications-exploitation' },
  { label: 'Coordination SPS', slug: 'coordination-sps' },
  { label: 'Évènementiel', slug: 'evenementiel' },
  { label: 'Diagnostic PEMD', slug: 'diagnostic-pemd' },
  { label: 'Toutes les missions', slug: '' },
]

// Implantations provisoires : à remplacer par le réseau réel de BBC.
// Elles alimentent le menu, le pied de page, l'accueil et l'index /agences.
export const agencyItems = [
  { label: 'Cotonou', slug: 'cotonou' },
  { label: 'Abomey-Calavi', slug: 'abomey-calavi' },
  { label: 'Porto-Novo', slug: 'porto-novo' },
  { label: 'Bohicon', slug: 'bohicon' },
  { label: 'Parakou', slug: 'parakou' },
]

export const groupItems = [
  { label: 'Notre histoire', slug: 'histoire' },
  { label: 'Équipe', slug: 'equipe' },
  { label: 'Agréments', slug: 'agrements' },
  { label: 'Recrutement', slug: 'recrutement' },
  { label: 'Actualités', slug: 'actualites' },
]

export const primaryNavigation = [
  { label: 'Accueil', path: '/' },
  { label: 'Missions', path: '/missions', items: missionItems },
  { label: 'Compétences', path: '/competences', items: competenceItems },
  { label: 'Agences', path: '/agences', items: agencyItems },
  { label: 'Groupe', path: '/groupe', items: groupItems },
  { label: 'Réalisations', path: '/realisations' },
  { label: 'Contact', path: '/contact' },
]

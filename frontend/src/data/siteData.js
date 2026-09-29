import { agencyItems, competenceItems, groupItems, missionItems } from '../constants/navigation'

export const siteData = {
  identity: {
    name: 'Benin BTP Control',
    shortName: 'BBC',
    descriptor: 'Bureau de contrôle technique des bâtiments',
    tagline: 'La maîtrise technique au service de vos projets.',
  },
  missions: missionItems.filter((item) => item.slug),
  competences: competenceItems,
  agencies: agencyItems,
  group: groupItems,
  featuredMission: [
    {
      number: '01',
      title: 'Contrôle construction',
      text: 'Contrôles de conception et de réalisation pour accompagner la maîtrise des risques techniques de vos ouvrages.',
      slug: 'controle-construction',
    },
    {
      number: '02',
      title: 'Coordination SPS',
      text: 'Prévention des risques liés à la sécurité et à la protection de la santé sur les opérations.',
      slug: 'coordination-sps',
    },
    {
      number: '03',
      title: 'Installations en exploitation',
      text: 'Vérifications périodiques et accompagnement réglementaire des installations concernées.',
      slug: 'verifications-exploitation',
    },
    {
      number: '04',
      title: 'Énergie et environnement',
      text: 'Approche technique de la performance énergétique, thermique, acoustique et environnementale.',
      slug: 'energie-environnement-acoustique',
    },
  ],
  stats: [
    { value: '—', label: 'Collaborateurs' },
    { value: '—', label: 'Projets accompagnés' },
    { value: '—', label: 'Années d’expertise' },
    { value: '—', label: 'Chantiers contrôlés' },
  ],
}

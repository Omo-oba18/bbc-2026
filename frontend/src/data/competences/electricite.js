import heroImage from '../../assets/images/competences/electricite/electricite-hero.jpg'
import reference01 from '../../assets/images/competences/electricite/reference-01.jpg'
import reference02 from '../../assets/images/competences/electricite/reference-02.jpg'
import reference03 from '../../assets/images/competences/electricite/reference-03.jpg'
import reference04 from '../../assets/images/competences/electricite/reference-04.jpg'
import reference05 from '../../assets/images/competences/electricite/reference-05.jpg'
import reference06 from '../../assets/images/competences/electricite/reference-06.jpg'
import reference07 from '../../assets/images/competences/electricite/reference-07.jpg'
import reference08 from '../../assets/images/competences/electricite/reference-08.jpg'
import reference09 from '../../assets/images/competences/electricite/reference-09.jpg'

/**
 * Contenu de la compétence « Électricité ».
 *
 * Angle : la protection des personnes et la continuité de service, de la
 * livraison du courant jusqu'au dernier appareil. Textes provisoires ; le
 * référentiel applicable au Bénin sera précisé par BBC.
 */
export const electricite = {
  slug: 'electricite',

  hero: {
    title: 'Installations électriques',
    lead: 'Une installation sûre ne se voit pas — c’est précisément le problème',
    text: 'Tout fonctionne : les prises délivrent du courant, les lampes s’allument. Rien ne distingue, à l’usage, une installation protégée d’une installation qui ne l’est pas. La différence apparaît le jour du défaut — et ce jour-là, elle se compte en vies et en départs de feu.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Poste de transformation électrique et son appareillage' },
  },

  process: {
    title: 'Trois questions auxquelles une installation doit répondre.',
    steps: [
      { title: 'Protéger les personnes', text: 'Mise à la terre, dispositifs différentiels et continuité des masses, pour qu’un défaut ne traverse personne.' },
      { title: 'Protéger l’ouvrage', text: 'Sections, protections contre les surintensités et les surtensions, pour qu’un défaut ne devienne pas un incendie.' },
      { title: 'Rester exploitable', text: 'Repérage, accessibilité et sélectivité, pour qu’une panne se localise sans tout mettre à l’arrêt.' },
    ],
  },

  references: {
    eyebrow: 'Nos domaines',
    title: 'De la livraison au dernier appareil',
    note: 'Domaines donnés à titre indicatif. Le référentiel applicable au Bénin sera renseigné à partir des données officielles de BBC.',
    items: [
      { image: reference01, title: 'Armoires et tableaux', location: 'Répartition', text: 'Organisation des départs, sélectivité des protections et tenue aux courts-circuits.' },
      { image: reference02, title: 'Câblage et repérage', location: 'Maintenabilité', text: 'Identification des circuits : ce qui permet d’intervenir sans couper tout le bâtiment.' },
      { image: reference03, title: 'Installations en cours', location: 'Cheminements', text: 'Passages de câbles, distances aux autres réseaux et protection mécanique des conducteurs.' },
      { image: reference04, title: 'Comptage et coupure', location: 'Accessibilité', text: 'Organes de coupure atteignables en urgence, signalés et dégagés en permanence.' },
      { image: reference05, title: 'Protection contre la foudre', location: 'Surtensions', text: 'Prises de terre, liaisons équipotentielles et parafoudres sur les arrivées sensibles.' },
      { image: reference06, title: 'Raccordement et alimentation', location: 'Livraison', text: 'Point de livraison, dimensionnement de l’arrivée et conditions de secours éventuel.' },
      { image: reference07, title: 'Production photovoltaïque', location: 'Injection', text: 'Sécurité côté courant continu, coupure d’urgence et coordination avec le réseau.' },
      { image: reference08, title: 'Appareillage de puissance', location: 'Isolement', text: 'Distances, enveloppes et conditions d’accès aux parties sous tension.' },
      { image: reference09, title: 'Locaux techniques', location: 'Continuité de service', text: 'Alimentations secourues, refroidissement et séparation des circuits critiques.' },
    ],
  },

  statement: {
    title: 'Le courant ne pardonne pas l’à-peu-près, mais il attend longtemps',
    paragraphs: [
      'Une terre mal réalisée, une section insuffisante, un différentiel absent : rien n’empêche l’installation de fonctionner pendant des années. Le défaut se constitue en silence, et se révèle d’un coup.',
      'C’est pourquoi le contrôle porte sur ce qui ne se manifeste jamais à l’usage :',
    ],
    bullets: [
      'La valeur réelle de la prise de terre, mesurée et non supposée.',
      'La continuité des masses métalliques, jusqu’aux éléments qu’on oublie de relier.',
      'La cohérence entre la section des conducteurs et le calibre qui les protège.',
      'Le fonctionnement effectif des différentiels, qui vieillissent comme le reste.',
    ],
    closing: 'Ce qui ne se voit pas se mesure.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Tout marchait', quote: 'L’installation fonctionnait sans incident depuis l’ouverture. Le contrôle a montré que la protection des personnes n’était pas assurée sur plusieurs circuits.', author: 'Exploitant', role: 'Témoignage à renseigner' },
      { theme: 'Repérer pour intervenir', quote: 'Les circuits n’étaient identifiés nulle part. La moindre intervention obligeait à couper tout un niveau.', author: 'Responsable de maintenance', role: 'Témoignage à renseigner' },
      { theme: 'Mesuré sur place', quote: 'La valeur de terre annoncée au dossier et celle mesurée sur site n’avaient rien à voir. C’est la mesure qui a tranché.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
    ],
  },
}

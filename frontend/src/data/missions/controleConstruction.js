import heroImage from '../../assets/images/missions/controle-construction/controle-construction-hero.webp'
import reference01 from '../../assets/images/missions/controle-construction/reference-01.webp'
import reference02 from '../../assets/images/missions/controle-construction/reference-02.webp'
import reference03 from '../../assets/images/missions/controle-construction/reference-03.webp'
import reference04 from '../../assets/images/missions/controle-construction/reference-04.webp'
import reference05 from '../../assets/images/missions/controle-construction/reference-05.webp'
import reference06 from '../../assets/images/missions/controle-construction/reference-06.webp'
import reference07 from '../../assets/images/missions/controle-construction/reference-07.webp'
import reference08 from '../../assets/images/missions/controle-construction/reference-08.webp'
import reference09 from '../../assets/images/missions/controle-construction/reference-09.webp'

/**
 * Contenu de la page mission « Contrôle construction ».
 * Les textes, chiffres et références sont provisoires : ils seront remplacés
 * par les données officielles BBC sans toucher au composant de page.
 */
export const controleConstruction = {
  slug: 'controle-construction',

  hero: {
    title: 'Contrôle technique construction',
    lead: 'Pour les maîtres d’ouvrage qui veulent avant tout un chantier qui se passe bien',
    text: 'Entre les premières esquisses et la réception, un ouvrage traverse des centaines de décisions techniques. Difficile de tout garder en tête — et pourtant c’est là que se joue la maîtrise du risque de sinistre. BBC intervient aux étapes structurantes pour sécuriser la conformité de votre projet.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Ingénieurs de contrôle technique en visite sur un chantier' },
  },

  process: {
    title: 'À chaque étape structurante, un ingénieur BBC examine les plans et contrôle votre chantier.',
    steps: [
      { title: 'Rapport initial', text: 'Analyse du dossier de conception et identification des points techniques à sécuriser (RICT).' },
      { title: 'Contrôles réguliers', text: 'Examen des plans d’exécution et visites de chantier tout au long des travaux.' },
      { title: 'Rapports finaux', text: 'Synthèse des avis émis et vérifications réglementaires avant mise en service (RFCT, RVRAT).' },
    ],
  },

  references: {
    eyebrow: 'Nos références',
    title: 'Des opérations menées dans les règles de l’art',
    note: 'Typologies d’ouvrages données à titre indicatif — les opérations réelles et leurs visuels seront renseignés par BBC.',
    items: [
      { image: reference01, title: 'Immeuble de bureaux R+8', location: 'Cotonou', text: 'Contrôle de conception et d’exécution : structure béton armé, sécurité incendie, installations électriques.' },
      { image: reference02, title: 'Résidence collective 120 logements', location: 'Abomey-Calavi', text: 'Mission de contrôle sur l’ensemble des phases, de l’avant-projet jusqu’à la réception des ouvrages.' },
      { image: reference03, title: 'Tour tertiaire et parking', location: 'Cotonou', text: 'Contrôle des structures, des façades et des équipements techniques de l’ensemble immobilier.' },
      { image: reference04, title: 'Siège administratif', location: 'Porto-Novo', text: 'Contrôle technique complet et vérifications réglementaires après travaux avant mise en service.' },
      { image: reference05, title: 'Programme mixte en construction', location: 'Cotonou', text: 'Suivi des phases gros œuvre et second œuvre, avec avis sur les dispositions parasismiques.' },
      { image: reference06, title: 'Centre commercial', location: 'Sèmè-Podji', text: 'Vérifications ERP : dégagements, désenfumage, protection incendie et accessibilité du public.' },
      { image: reference07, title: 'Résidence en front de mer', location: 'Grand-Popo', text: 'Contrôle des fondations en milieu humide, de l’enveloppe et de la tenue des ouvrages exposés.' },
      { image: reference08, title: 'Équipement public', location: 'Parakou', text: 'Contrôle des structures, de la sécurité d’usage et des installations techniques du bâtiment.' },
      { image: reference09, title: 'Complexe sportif', location: 'Bohicon', text: 'Contrôle des gradins, des structures de couverture et des conditions d’évacuation du public.' },
    ],
  },

  statement: {
    title: 'Contrôler aujourd’hui vaut mieux que réparer demain',
    paragraphs: [
      'On l’oublie facilement : les normes de construction existent d’abord pour éviter les sinistres, les malfaçons et les accidents.',
      'De petites choses simples à corriger pendant la phase de conception deviennent complexes et coûteuses à reprendre une fois la construction terminée.',
      'Que ce soit pour rester serein, par exigence de qualité ou pour rendre votre investissement pérenne, faites appel à un bureau de contrôle impliqué dans votre projet.',
    ],
  },


  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Gagner du temps', quote: 'La différence tient à un chargé d’affaires suffisamment autonome pour donner une réponse immédiate en réunion de chantier : on ne perd pas trois semaines à chaque arbitrage.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
      { theme: 'Anticiper les reprises', quote: 'Les observations arrivent pendant la conception, quand elles coûtent encore une ligne de plan et pas une démolition. C’est tout l’intérêt d’un contrôle engagé tôt.', author: 'Architecte', role: 'Témoignage à renseigner' },
      { theme: 'Sécuriser la réception', quote: 'Les rapports sont lisibles et exploitables directement par les entreprises. La réception se prépare sereinement, sans découverte de dernière minute.', author: 'Conducteur d’opération', role: 'Témoignage à renseigner' },
    ],
  },


}

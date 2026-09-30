import heroImage from '../../assets/images/missions/evenementiel/evenementiel-hero.jpg'
import reference01 from '../../assets/images/missions/evenementiel/reference-01.jpg'
import reference02 from '../../assets/images/missions/evenementiel/reference-02.jpg'
import reference03 from '../../assets/images/missions/evenementiel/reference-03.jpg'
import reference04 from '../../assets/images/missions/evenementiel/reference-04.jpg'
import reference05 from '../../assets/images/missions/evenementiel/reference-05.jpg'
import reference06 from '../../assets/images/missions/evenementiel/reference-06.jpg'
import reference07 from '../../assets/images/missions/evenementiel/reference-07.jpg'
import reference08 from '../../assets/images/missions/evenementiel/reference-08.jpg'
import reference09 from '../../assets/images/missions/evenementiel/reference-09.jpg'

/**
 * Contenu de la page mission « Contrôle évènementiel ».
 *
 * Cette page n'a pas de section témoignages : elle est composée section par
 * section dans EvenementielPage, sans passer par le gabarit ServicePage.
 * Son bloc manifeste n'a pas de paragraphes, seulement une liste.
 *
 * Textes et typologies d'évènements provisoires.
 */
export const evenementiel = {
  slug: 'evenementiel',

  hero: {
    title: 'Contrôle évènementiel',
    lead: 'Pour les organisateurs qui veulent avant tout que leur évènement se passe bien',
    text: 'Quand on organise un évènement, il y a tellement de choses à gérer qu’il devient difficile de garder un œil sur tous les détails. C’est pourtant là que se joue le risque d’accident, sur des installations montées en quelques jours.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Scène de concert équipée de ses structures et de ses projecteurs' },
  },

  process: {
    title: 'Dans le rush final du montage, un spécialiste BBC reste sur place et lève les doutes avec vos techniciens.',
    steps: [
      { title: 'Vérifications électriques', text: 'Installations temporaires, groupes électrogènes et raccordements contrôlés avant ouverture.' },
      { title: 'Échafaudages, tribunes et chapiteaux', text: 'Structures, ancrages et lestages vérifiés avant l’accueil du public.' },
      { title: 'Moyens de levage', text: 'Ponts, palans et accroches scéniques contrôlés avant la mise en charge.' },
    ],
  },

  references: {
    eyebrow: 'Nos références',
    title: 'Des évènements vérifiés dans le détail',
    note: 'Pour les conférences, expositions, festivals, salons, évènements sportifs, tournages, spectacles et bien d’autres. Typologies données à titre indicatif — les évènements réels seront renseignés par BBC.',
    items: [
      { image: reference01, title: 'Festival de musique', location: 'Cotonou', text: 'Contrôle des scènes, des barrières de sécurité et des cheminements d’évacuation du public.' },
      { image: reference02, title: 'Concert en plein air', location: 'Abomey-Calavi', text: 'Vérification des structures scéniques et de leur tenue au vent avant ouverture des portes.' },
      { image: reference03, title: 'Scène sous structure couverte', location: 'Porto-Novo', text: 'Contrôle des ancrages, des lestages et de la reprise des charges suspendues.' },
      { image: reference04, title: 'Spectacle chorégraphique', location: 'Cotonou', text: 'Vérification du plancher scénique, des accroches et des équipements motorisés.' },
      { image: reference05, title: 'Concert symphonique', location: 'Ouidah', text: 'Contrôle de l’installation électrique temporaire et de l’éclairage de sécurité.' },
      { image: reference06, title: 'Conférence', location: 'Cotonou', text: 'Calcul de l’effectif admissible et vérification des dégagements de la salle.' },
      { image: reference07, title: 'Représentation théâtrale', location: 'Porto-Novo', text: 'Vérification des perches motorisées, des rideaux et des équipements de scène.' },
      { image: reference08, title: 'Spectacle en plein air', location: 'Grand-Popo', text: 'Contrôle des gradins démontables, des accès et du balisage des circulations.' },
      { image: reference09, title: 'Grand rassemblement', location: 'Parakou', text: 'Vérification des installations provisoires sur un site accueillant une forte affluence.' },
    ],
  },

  statement: {
    title: 'Un évènement se monte en quelques jours et se remplit en quelques minutes',
    bullets: [
      'Installations électriques temporaires, du groupe électrogène au dernier raccordement.',
      'Chapiteaux, tentes et structures à couverture souple : ancrages, lestages, tenue au vent.',
      'Échafaudages, scènes extérieures et tribunes mobiles télescopiques.',
      'Parcours acrobatiques, tyroliennes et lignes de vie avant mise en service.',
      'Équipements scéniques : perches motorisées, ponts et moyens de levage.',
    ],
    closing: 'Tout est vérifié avant que le public n’entre.',
  },
}

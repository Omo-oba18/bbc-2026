import heroImage from '../../assets/images/competences/securite-sur-chantier/securite-sur-chantier-hero.jpg'
import reference01 from '../../assets/images/competences/securite-sur-chantier/reference-01.jpg'
import reference02 from '../../assets/images/competences/securite-sur-chantier/reference-02.jpg'
import reference03 from '../../assets/images/competences/securite-sur-chantier/reference-03.jpg'
import reference04 from '../../assets/images/competences/securite-sur-chantier/reference-04.jpg'
import reference05 from '../../assets/images/competences/securite-sur-chantier/reference-05.jpg'
import reference06 from '../../assets/images/competences/securite-sur-chantier/reference-06.jpg'
import reference07 from '../../assets/images/competences/securite-sur-chantier/reference-07.jpg'
import reference08 from '../../assets/images/competences/securite-sur-chantier/reference-08.jpg'
import reference09 from '../../assets/images/competences/securite-sur-chantier/reference-09.jpg'

/**
 * Contenu de la compétence « Sécurité sur chantier ».
 *
 * Cette page traite les risques techniques : ce que les équipes savent
 * regarder en arrivant sur site. L'organisation contractuelle de la
 * prévention — plan de coordination, registre-journal, dossier
 * d'interventions — relève de la mission « Coordination SPS ».
 * Garder cette frontière : les deux pages se recouvraient auparavant.
 *
 * Le champ `location` des cartes porte ici le danger encouru, non un lieu.
 *
 * Textes provisoires.
 */
export const securiteSurChantier = {
  slug: 'securite-sur-chantier',

  hero: {
    title: 'Les risques techniques d’un chantier',
    lead: 'Chute de hauteur, levage, fouilles, point chaud : là où se produisent réellement les accidents',
    text: 'La sécurité d’un chantier n’est pas un sujet unique. C’est une série de risques distincts, chacun avec ses règles, ses protections et sa façon de mal tourner. Cette compétence, c’est ce que nos équipes savent regarder en arrivant sur site — l’organisation contractuelle de la prévention, elle, relève de la mission Coordination SPS.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Équipe de chantier équipée de casques et de gilets lors d’une inspection' },
  },

  process: {
    title: 'Chaque famille de risques a ses points de contrôle, ses protections et sa façon de mal tourner.',
    steps: [
      { title: 'Identifier', text: 'Repérer, sur les plans comme sur le terrain, les situations qui exposent réellement les intervenants.' },
      { title: 'Prescrire', text: 'Proposer la protection collective adaptée avant de se rabattre sur l’équipement individuel.' },
      { title: 'Vérifier', text: 'Constater sur place que la disposition prévue est en place, complète, et qu’elle tient dans la durée.' },
    ],
  },

  references: {
    eyebrow: 'Nos domaines',
    title: 'Les familles de risques que nous traitons',
    note: 'Chaque situation appelle ses propres points de contrôle. Les opérations réelles et leurs visuels seront renseignés par BBC.',
    items: [
      { image: reference01, title: 'Levage et manutention', location: 'Chute de charge', text: 'Élingues, zones d’évolution et interdiction de survol du personnel vérifiées avant manœuvre.' },
      { image: reference02, title: 'Travail en hauteur', location: 'Chute de personne', text: 'Protections de rives, points d’ancrage et moyens d’accès contrôlés avant toute intervention.' },
      { image: reference03, title: 'Échafaudages', location: 'Effondrement', text: 'Montage, stabilité, planchers et garde-corps examinés à chaque phase d’avancement.' },
      { image: reference04, title: 'Fouilles et réseaux', location: 'Ensevelissement', text: 'Blindages, pentes de talus et repérage des réseaux existants avant ouverture de la tranchée.' },
      { image: reference05, title: 'Travaux par point chaud', location: 'Incendie', text: 'Éloignement des matières combustibles, moyens d’extinction et surveillance après intervention.' },
      { image: reference06, title: 'Ouvrages de grande portée', location: 'Instabilité provisoire', text: 'Étaiements, phases de coulage et stabilité des éléments avant assemblage définitif.' },
      { image: reference07, title: 'Circulation d’engins', location: 'Collision', text: 'Séparation des flux, champ de visibilité des conducteurs et balisage des zones d’évolution.' },
      { image: reference08, title: 'Co-activité', location: 'Interférence', text: 'Phasage des interventions lorsque plusieurs entreprises occupent le même volume au même moment.' },
      { image: reference09, title: 'Démolition et dépose', location: 'Effondrement', text: 'Ordre de dépose, zones d’exclusion et contrôle de la stabilité résiduelle de l’ouvrage.' },
    ],
  },

  statement: {
    title: 'La protection collective avant l’équipement individuel',
    paragraphs: [
      'Un garde-corps protège tout le monde, tout le temps, sans rien demander à personne. Un harnais ne protège que celui qui le porte, s’il le porte correctement, et s’il est accroché.',
      'C’est pourquoi l’ordre compte — on ne commence pas par la fin :',
    ],
    bullets: [
      'Supprimer le risque : peut-on assembler au sol plutôt qu’en hauteur ?',
      'Protéger collectivement : garde-corps, filets, blindages, balisage des zones.',
      'Équiper individuellement : harnais, casque, protections auditives, masques.',
      'Former et informer : chacun doit savoir ce qui l’expose sur ce chantier précis.',
    ],
    closing: 'Dans cet ordre, et pas dans l’autre.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Des réponses utilisables', quote: 'On ne nous dit pas seulement que ce n’est pas conforme. On nous dit ce qu’il faut poser, où, et à quel moment du planning ça s’insère.', author: 'Conducteur de travaux', role: 'Témoignage à renseigner' },
      { theme: 'Au bon moment', quote: 'Les observations arrivent pendant le montage de l’échafaudage, pas une fois qu’il est fini et que toutes les équipes travaillent dessus.', author: 'Chef de chantier', role: 'Témoignage à renseigner' },
      { theme: 'Ce qu’on ne voit plus', quote: 'Les situations les plus dangereuses ne sont pas celles qu’on redoute : ce sont celles qu’on côtoie tous les jours et qu’on a fini par ne plus voir.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
    ],
  },
}

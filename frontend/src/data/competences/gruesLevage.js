import heroImage from '../../assets/images/competences/grues-levage/grues-levage-hero.webp'
import reference01 from '../../assets/images/competences/grues-levage/reference-01.webp'
import reference02 from '../../assets/images/competences/grues-levage/reference-02.webp'
import reference03 from '../../assets/images/competences/grues-levage/reference-03.webp'
import reference04 from '../../assets/images/competences/grues-levage/reference-04.webp'
import reference05 from '../../assets/images/competences/grues-levage/reference-05.webp'
import reference06 from '../../assets/images/competences/grues-levage/reference-06.webp'
import reference07 from '../../assets/images/competences/grues-levage/reference-07.webp'
import reference08 from '../../assets/images/competences/grues-levage/reference-08.webp'
import reference09 from '../../assets/images/competences/grues-levage/reference-09.webp'

/**
 * Contenu de la compétence « Grues et moyens de levage ».
 *
 * Angle : l'implantation et les phases critiques plutôt que la machine seule.
 * Textes provisoires ; les périodicités de vérification applicables au Bénin
 * seront précisées par BBC.
 */
export const gruesLevage = {
  slug: 'grues-levage',

  hero: {
    title: 'Grues et moyens de levage',
    lead: 'Une charge qui tombe ne prévient pas, et rien sur son trajet ne la ralentit',
    text: 'Le levage concentre les risques majeurs d’un chantier : des masses considérables déplacées au-dessus de zones occupées, par des appareils montés pour l’occasion et démontés quelques mois plus tard. Les deux moments les plus dangereux de la vie d’une grue sont précisément son montage et son démontage.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Partie tournante d’une grue à tour se détachant sur le ciel' },
  },

  process: {
    title: 'Trois moments, trois façons de mal tourner.',
    steps: [
      { title: 'Au montage', text: 'La phase la plus accidentogène : l’appareil n’est pas encore l’ensemble stable qu’il sera en service.' },
      { title: 'En service', text: 'Ancrages, lestage, zones d’évolution et interférences avec les autres appareils comme avec le voisinage.' },
      { title: 'Au démontage', text: 'Même risque qu’au montage, sur un chantier devenu encombré et avec des équipes souvent pressées.' },
    ],
  },

  references: {
    eyebrow: 'Nos domaines',
    title: 'Ce qui s’examine autour d’un appareil',
    note: 'Domaines donnés à titre indicatif. Les périodicités de vérification applicables au Bénin seront renseignées à partir des données officielles de BBC.',
    items: [
      { image: reference01, title: 'Grues à tour sur chantier', location: 'Co-activité', text: 'Coexistence de plusieurs appareils et des équipes travaillant sous leur zone d’évolution.' },
      { image: reference02, title: 'Interférences de flèches', location: 'Survol', text: 'Zones de recouvrement entre appareils voisins et ordre de priorité convenu entre grutiers.' },
      { image: reference03, title: 'Levage d’ouvrage d’art', location: 'Charges exceptionnelles', text: 'Opérations de pose sous circulation, avec appareils en tandem et plan de levage dédié.' },
      { image: reference04, title: 'Grues mobiles', location: 'Mise en station', text: 'Calage, portance du sol sous les stabilisateurs et courbes de charge selon le déport.' },
      { image: reference05, title: 'Accès et structure', location: 'Vérifications', text: 'Échelles, paliers de repos et état des assemblages de la structure porteuse.' },
      { image: reference06, title: 'Appareils fixes et portiques', location: 'Exploitation', text: 'Ponts roulants et portiques en service continu, et leurs vérifications périodiques.' },
      { image: reference07, title: 'Montage et démontage', location: 'Phases critiques', text: 'Séquence d’assemblage, conditions de vent admissibles et zone d’exclusion au sol.' },
      { image: reference08, title: 'Implantation sur site', location: 'Ancrages et lestage', text: 'Fondations de la grue, ancrages au bâtiment et contreventement en cours d’élévation.' },
      { image: reference09, title: 'Appareils vieillissants', location: 'État de conservation', text: 'Corrosion, jeux dans les articulations et usure des organes de sécurité.' },
    ],
  },

  statement: {
    title: 'Un appareil conforme mal implanté reste un appareil dangereux',
    paragraphs: [
      'La vérification d’une grue ne s’arrête pas à ses certificats. Un appareil impeccable devient un danger si sa zone d’évolution survole une école, si son lestage a été calculé pour un sol qui n’est pas celui du site, ou si sa flèche croise celle du voisin.',
      'Ce qui s’examine tient donc autant au site qu’à la machine :',
    ],
    bullets: [
      'La portance du sol sous les appuis, et sa tenue après plusieurs jours de pluie.',
      'Les ancrages au bâtiment, quand la grue s’élève au fur et à mesure de l’ouvrage.',
      'Les interférences de flèches entre appareils, et l’ordre de priorité réellement appliqué.',
      'Le survol des zones occupées, des voies publiques et des parcelles voisines.',
    ],
    closing: 'La machine est rarement en cause. L’implantation l’est souvent.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Avant la première charge', quote: 'La vérification de mise en service a relevé un défaut de calage qui ne se serait vu qu’au premier levage à pleine portée.', author: 'Conducteur de travaux', role: 'Témoignage à renseigner' },
      { theme: 'Deux grues, un ciel', quote: 'Les zones de survol se recouvraient sur un tiers du chantier. L’ordre de priorité a été écrit avant le démarrage, pas après le premier incident.', author: 'Chef de chantier', role: 'Témoignage à renseigner' },
      { theme: 'Le sol compte', quote: 'On raisonnait sur la machine. On a compris que le vrai sujet était ce qu’il y avait dessous.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
    ],
  },
}

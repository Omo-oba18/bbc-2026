import heroImage from '../../assets/images/competences/thermique/thermique-hero.jpg'
import reference01 from '../../assets/images/competences/thermique/reference-01.jpg'
import reference02 from '../../assets/images/competences/thermique/reference-02.jpg'
import reference03 from '../../assets/images/competences/thermique/reference-03.jpg'
import reference04 from '../../assets/images/competences/thermique/reference-04.jpg'
import reference05 from '../../assets/images/competences/thermique/reference-05.jpg'
import reference06 from '../../assets/images/competences/thermique/reference-06.jpg'
import reference07 from '../../assets/images/competences/thermique/reference-07.jpg'
import reference08 from '../../assets/images/competences/thermique/reference-08.jpg'
import reference09 from '../../assets/images/competences/thermique/reference-09.jpg'

/**
 * Contenu de la compétence « Thermique ».
 *
 * Angle : la physique du bâtiment en climat chaud — apports solaires, inertie,
 * ventilation, confort d'été. La compétence « Performance énergétique » traite,
 * elle, la performance globale et ses attestations. Garder cette frontière.
 *
 * Textes provisoires.
 */
export const thermique = {
  slug: 'thermique',

  hero: {
    title: 'Thermique et confort d’été',
    lead: 'Sous ce climat, l’enjeu n’est pas de garder la chaleur mais de l’empêcher d’entrer',
    text: 'La thermique du bâtiment s’est longtemps pensée pour des climats froids : isoler pour retenir. Ici le raisonnement s’inverse. Ce qui pèse, c’est ce que le soleil dépose sur l’enveloppe toute la journée, et ce que le bâtiment en restitue la nuit. Cette compétence traite ces apports — avant même de parler de climatisation.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Façade vitrée recevant les reflets du soleil en fin de journée' },
  },

  process: {
    title: 'Avant de refroidir un bâtiment, il faut cesser de le chauffer.',
    steps: [
      { title: 'Empêcher l’apport', text: 'Orientation, masques, protections solaires et traitement des baies : ce qui n’entre pas n’est pas à évacuer.' },
      { title: 'Amortir ce qui entre', text: 'Inertie, déphasage et espaces tampons, pour décaler le pic de chaleur hors des heures d’occupation.' },
      { title: 'Évacuer le reste', text: 'Ventilation traversante et nocturne, avant de dimensionner un équipement de rafraîchissement.' },
    ],
  },

  references: {
    eyebrow: 'Nos domaines',
    title: 'Là où se gagne le confort d’été',
    note: 'Domaines donnés à titre indicatif. Les données climatiques de référence et les exigences applicables au Bénin seront renseignées par BBC.',
    items: [
      { image: reference01, title: 'Masques et végétation', location: 'Apports évités', text: 'Ombrage porté sur les façades exposées, aux heures où il change réellement quelque chose.' },
      { image: reference02, title: 'Débords et balcons', location: 'Protection solaire', text: 'Profondeur des avancées calée sur la course du soleil plutôt que sur le dessin de façade.' },
      { image: reference03, title: 'Orientation et volumétrie', location: 'Exposition', text: 'Répartition des surfaces vitrées selon les orientations, avant toute correction technique.' },
      { image: reference04, title: 'Vitrages', location: 'Facteur solaire', text: 'Compromis entre apport lumineux souhaité et apport thermique subi sur chaque façade.' },
      { image: reference05, title: 'Inertie et espaces tampons', location: 'Déphasage', text: 'Masse capable d’absorber le pic de chaleur et de le restituer en dehors de l’occupation.' },
      { image: reference06, title: 'Logements collectifs', location: 'Confort d’été', text: 'Traversant, protections et ventilation nocturne dans des logements occupés en continu.' },
      { image: reference07, title: 'Enveloppes mixtes', location: 'Matériaux', text: 'Comportement des assemblages hétérogènes et continuité des performances aux jonctions.' },
      { image: reference08, title: 'Réhabilitation', location: 'Existant', text: 'Amélioration du confort sans reprendre l’ouvrage, en agissant d’abord sur l’enveloppe.' },
      { image: reference09, title: 'Loggias et prolongements', location: 'Ventilation', text: 'Espaces extérieurs abrités qui rafraîchissent l’air avant qu’il n’entre dans le logement.' },
    ],
  },

  statement: {
    title: 'Un bâtiment qui a chaud, on ne le refroidit pas : on le corrige',
    paragraphs: [
      'Quand les apports n’ont pas été traités à la conception, la climatisation devient la seule issue. Elle tourne alors en permanence, sur une facture qui ne baissera plus.',
      'Les leviers se prennent dans cet ordre, du moins cher au plus cher :',
    ],
    bullets: [
      'L’orientation et la forme, qui ne coûtent rien si on les décide assez tôt.',
      'Les protections solaires, débords et masques, qui coûtent une fois.',
      'L’inertie et la ventilation nocturne, qui ne consomment rien ensuite.',
      'La climatisation, qui coûte à l’installation puis chaque jour de son existence.',
    ],
    closing: 'Le dernier levier paie les trois premiers qu’on n’a pas pris.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Avant les équipements', quote: 'On venait chercher un dimensionnement de climatisation. On est repartis avec des protections solaires et une puissance installée nettement plus faible.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
      { theme: 'La nuit compte', quote: 'Personne ne nous avait parlé de la ventilation nocturne. C’est pourtant ce qui fait qu’un logement est vivable au petit matin.', author: 'Promoteur immobilier', role: 'Témoignage à renseigner' },
      { theme: 'Une question de forme', quote: 'Les arbitrages les plus efficaces se sont pris sur le plan masse, pas sur les matériaux. Et ils n’ont rien coûté.', author: 'Architecte', role: 'Témoignage à renseigner' },
    ],
  },
}

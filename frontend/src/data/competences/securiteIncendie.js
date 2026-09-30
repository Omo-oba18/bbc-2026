import heroImage from '../../assets/images/competences/securite-incendie/securite-incendie-hero.jpg'
import reference01 from '../../assets/images/competences/securite-incendie/reference-01.jpg'
import reference02 from '../../assets/images/competences/securite-incendie/reference-02.jpg'
import reference03 from '../../assets/images/competences/securite-incendie/reference-03.jpg'
import reference04 from '../../assets/images/competences/securite-incendie/reference-04.jpg'
import reference05 from '../../assets/images/competences/securite-incendie/reference-05.jpg'
import reference06 from '../../assets/images/competences/securite-incendie/reference-06.jpg'
import reference07 from '../../assets/images/competences/securite-incendie/reference-07.jpg'
import reference08 from '../../assets/images/competences/securite-incendie/reference-08.jpg'
import reference09 from '../../assets/images/competences/securite-incendie/reference-09.jpg'

/**
 * Contenu de la compétence « Sécurité incendie ».
 *
 * Angle : la discipline technique — contenir, évacuer, intervenir. La mission
 * « Vérifications ERP » traite, elle, la conformité d'un établissement et son
 * passage en commission. Garder cette frontière.
 *
 * Textes provisoires. Le référentiel applicable au Bénin sera précisé par BBC.
 */
export const securiteIncendie = {
  slug: 'securite-incendie',

  hero: {
    title: 'Sécurité incendie',
    lead: 'Contenir le feu, évacuer les personnes, permettre l’intervention des secours',
    text: 'Un incendie ne se traite pas par un dispositif isolé mais par une chaîne : limiter le départ, contenir la propagation, permettre à chacun de sortir, donner aux secours les moyens d’agir. Chaque maillon a ses règles — et la chaîne vaut ce que vaut son maillon le plus faible.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Escalier hélicoïdal vu en plongée depuis le dernier niveau' },
  },

  process: {
    title: 'La chaîne se tient dans cet ordre : contenir, évacuer, intervenir.',
    steps: [
      { title: 'Contenir', text: 'Résistance au feu des structures, compartimentage et comportement des matériaux mis en œuvre.' },
      { title: 'Évacuer', text: 'Dégagements, éclairage de sécurité et temps réellement nécessaire pour vider les locaux.' },
      { title: 'Intervenir', text: 'Accès des secours, moyens d’extinction et désenfumage des volumes concernés.' },
    ],
  },

  references: {
    eyebrow: 'Nos domaines',
    title: 'Les maillons de la chaîne incendie',
    note: 'Domaines donnés à titre indicatif. Le référentiel applicable au Bénin sera renseigné à partir des données officielles de BBC.',
    items: [
      { image: reference01, title: 'Extinction automatique', location: 'Sprinkleurs', text: 'Couverture des zones protégées, réserve d’eau et déclenchement des têtes.' },
      { image: reference02, title: 'Moyens de première intervention', location: 'Robinets armés', text: 'Implantation, pression disponible et accessibilité permanente des dispositifs.' },
      { image: reference03, title: 'Éclairage de sécurité', location: 'Balisage', text: 'Autonomie, implantation et visibilité des cheminements quand l’alimentation tombe.' },
      { image: reference04, title: 'Détection automatique', location: 'Alarme', text: 'Type de détecteurs, densité d’implantation et report vers le tableau de signalisation.' },
      { image: reference05, title: 'Escaliers protégés', location: 'Évacuation', text: 'Encloisonnement, désenfumage de la cage et continuité jusqu’à l’extérieur.' },
      { image: reference06, title: 'Circulations et dégagements', location: 'Cheminements', text: 'Largeurs, distances à parcourir et absence d’obstacle sur les parcours d’évacuation.' },
      { image: reference07, title: 'Atriums et grands volumes', location: 'Désenfumage', text: 'Extraction des fumées et maintien d’une hauteur d’air libre au niveau des occupants.' },
      { image: reference08, title: 'Parcs de stationnement', location: 'Compartimentage', text: 'Recoupement des niveaux, ventilation et isolement vis-à-vis des locaux occupés.' },
      { image: reference09, title: 'Stabilité au feu', location: 'Structure', text: 'Durée pendant laquelle l’ossature doit tenir, et protection des éléments porteurs.' },
    ],
  },

  statement: {
    title: 'Ce qui tue dans un incendie, c’est rarement la flamme',
    paragraphs: [
      'C’est la fumée. Elle se propage plus vite que le feu, elle aveugle, elle désoriente et elle asphyxie. Un occupant dispose de quelques minutes, pas de quelques dizaines.',
      'Tout le dispositif se règle sur ce délai :',
    ],
    bullets: [
      'Le compartimentage, pour que la fumée reste dans le volume où elle est née.',
      'Le désenfumage, pour garder une hauteur d’air respirable au-dessus des cheminements.',
      'L’éclairage de sécurité, pour que la sortie reste visible quand tout le reste s’éteint.',
      'La stabilité au feu, pour que l’ouvrage tienne plus longtemps que l’évacuation ne dure.',
    ],
    closing: 'Tout se mesure en minutes.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Ce qu’on ne voit plus', quote: 'Les défauts les plus graves deviennent invisibles une fois les finitions posées. Une traversée de gaine mal rebouchée annule le compartimentage de tout un niveau.', author: 'Maître d’œuvre', role: 'Témoignage à renseigner' },
      { theme: 'Pendant les travaux', quote: 'Le risque incendie ne commence pas à la livraison. Sur le chantier, on soude au-dessus de matériaux combustibles et personne n’y pense.', author: 'Conducteur de travaux', role: 'Témoignage à renseigner' },
      { theme: 'Des minutes, pas des principes', quote: 'On nous a expliqué le raisonnement en temps d’évacuation plutôt qu’en liste d’obligations. C’est beaucoup plus parlant pour arbitrer.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
    ],
  },
}

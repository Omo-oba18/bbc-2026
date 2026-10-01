import heroImage from '../../assets/images/missions/diagnostic-pemd/diagnostic-pemd-hero.webp'
import reference01 from '../../assets/images/missions/diagnostic-pemd/reference-01.webp'
import reference02 from '../../assets/images/missions/diagnostic-pemd/reference-02.webp'
import reference03 from '../../assets/images/missions/diagnostic-pemd/reference-03.webp'
import reference04 from '../../assets/images/missions/diagnostic-pemd/reference-04.webp'
import reference05 from '../../assets/images/missions/diagnostic-pemd/reference-05.webp'
import reference06 from '../../assets/images/missions/diagnostic-pemd/reference-06.webp'
import reference07 from '../../assets/images/missions/diagnostic-pemd/reference-07.webp'
import reference08 from '../../assets/images/missions/diagnostic-pemd/reference-08.webp'
import reference09 from '../../assets/images/missions/diagnostic-pemd/reference-09.webp'

/**
 * Contenu de la page mission « Diagnostic PEMD ».
 *
 * La source affiche ici deux lignes d'accroche et change le titre du bloc
 * « Pourquoi nous choisir ». Ces deux écarts sont absorbés par le contenu :
 * le sigle est développé en tête de paragraphe, et le message sur le cycle
 * de vie des matériaux est porté par le bloc manifeste.
 *
 * Textes et typologies d'opérations provisoires.
 */
export const diagnosticPemd = {
  slug: 'diagnostic-pemd',

  hero: {
    title: 'Diagnostic PEMD',
    lead: 'Pour vos démolitions d’ampleur ou celles impliquant des substances dangereuses',
    text: 'PEMD, pour produits, équipements, matériaux et déchets. L’objectif : identifier, avant d’abattre, tout ce que le bâtiment contient encore de valorisable — pour le réemployer, le réutiliser ou le recycler plutôt que de l’envoyer en décharge. Le diagnostic se réalise en amont, avant la demande d’autorisation de démolir ou la passation des marchés.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Gravats et blocs de béton issus d’une démolition, en attente de tri' },
  },

  process: {
    title: 'Un spécialiste BBC visite votre chantier et vous aide à trouver des solutions.',
    steps: [
      { title: 'Audit sur site', text: 'Recensement des produits, équipements et matériaux présents, avec estimation des quantités.' },
      { title: 'Réunion de restitution', text: 'Présentation des filières de valorisation mobilisables et des arbitrages à rendre.' },
      { title: 'Rapport et récolement', text: 'Remise du diagnostic, puis constat de ce qui a réellement été réemployé ou recyclé.' },
    ],
  },

  references: {
    eyebrow: 'Nos références',
    title: 'Des opérations où la matière a été valorisée',
    note: 'Typologies d’ouvrages données à titre indicatif — les opérations réelles et leurs visuels seront renseignés par BBC.',
    items: [
      { image: reference01, title: 'Démolition mécanisée', location: 'Cotonou', text: 'Dépose sélective avant abattage, avec tri des métaux, des bois et des inertes.' },
      { image: reference02, title: 'Démolition en centre-ville', location: 'Porto-Novo', text: 'Opération en tissu dense : évacuation phasée et protection des mitoyens.' },
      { image: reference03, title: 'Ancien bâtiment industriel', location: 'Sèmè-Podji', text: 'Recensement des charpentes, des menuiseries et des équipements récupérables.' },
      { image: reference04, title: 'Îlot en déconstruction', location: 'Abomey-Calavi', text: 'Déconstruction phasée avec stockage sur site des matériaux destinés au réemploi.' },
      { image: reference05, title: 'Ancien groupe scolaire', location: 'Parakou', text: 'Inventaire du mobilier, des huisseries et des équipements techniques réemployables.' },
      { image: reference06, title: 'Complexe industriel', location: 'Cotonou', text: 'Estimation des tonnages et identification des filières de valorisation disponibles.' },
      { image: reference07, title: 'Bâtiment tertiaire', location: 'Cotonou', text: 'Dépose des cloisons, faux plafonds et équipements avant restructuration.' },
      { image: reference08, title: 'Immeuble de bureaux', location: 'Ouidah', text: 'Diagnostic préalable à une rénovation significative de l’enveloppe et des lots techniques.' },
      { image: reference09, title: 'Entrepôt en maçonnerie', location: 'Bohicon', text: 'Réemploi des matériaux de structure sur place, dans le cadre d’une reconversion.' },
    ],
  },

  statement: {
    title: 'Ce qui sort d’une démolition n’est pas forcément un déchet',
    paragraphs: [
      'Le diagnostic concerne les opérations de démolition et de rénovation significative : il recense, avant les travaux, ce que l’ouvrage contient encore de valorisable.',
      'Le but est d’allonger le cycle de vie des matériaux et des équipements issus des bâtiments — réemploi sur place, réutilisation ailleurs, recyclage en dernier recours.',
    ],
    bullets: [
      'Recensement des produits, équipements et matériaux présents dans l’ouvrage.',
      'Estimation des quantités et identification des filières de valorisation mobilisables.',
      'Repérage des substances dangereuses, à isoler et à traiter séparément.',
      'Récolement après travaux : ce qui a réellement été réemployé, réutilisé ou recyclé.',
    ],
    closing: 'Ce qui est trié en amont ne finit pas en décharge.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Un service en plus', quote: 'Le diagnostic nous a fait découvrir ce que le bâtiment contenait encore de récupérable. On pensait tout évacuer, une bonne part est repartie ailleurs.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
      { theme: 'Avant les marchés', quote: 'Avoir l’inventaire avant de consulter les entreprises change les offres reçues : elles chiffrent la dépose sélective, pas seulement l’évacuation.', author: 'Conducteur d’opération', role: 'Témoignage à renseigner' },
      { theme: 'Les substances à isoler', quote: 'Le repérage en amont évite la mauvaise surprise en cours de chantier, celle qui arrête tout le temps de trouver une filière.', author: 'Entreprise de démolition', role: 'Témoignage à renseigner' },
    ],
  },
}

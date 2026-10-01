import heroImage from '../../assets/images/missions/energie-environnement-acoustique/energie-environnement-acoustique-hero.webp'
import reference01 from '../../assets/images/missions/energie-environnement-acoustique/reference-01.webp'
import reference02 from '../../assets/images/missions/energie-environnement-acoustique/reference-02.webp'
import reference03 from '../../assets/images/missions/energie-environnement-acoustique/reference-03.webp'
import reference04 from '../../assets/images/missions/energie-environnement-acoustique/reference-04.webp'
import reference05 from '../../assets/images/missions/energie-environnement-acoustique/reference-05.webp'
import reference06 from '../../assets/images/missions/energie-environnement-acoustique/reference-06.webp'
import reference07 from '../../assets/images/missions/energie-environnement-acoustique/reference-07.webp'
import reference08 from '../../assets/images/missions/energie-environnement-acoustique/reference-08.webp'
import reference09 from '../../assets/images/missions/energie-environnement-acoustique/reference-09.webp'

/**
 * Contenu de la page mission « Énergie, environnement et acoustique ».
 *
 * Cette mission couvre les trois volets. Le volet énergie seul est traité
 * en détail par la compétence « Performance énergétique » : garder les deux
 * pages distinctes, celle-ci reste au niveau de la mission globale.
 *
 * Textes et typologies d'ouvrages provisoires.
 */
export const energieEnvironnementAcoustique = {
  slug: 'energie-environnement-acoustique',

  hero: {
    title: 'Énergie, environnement et acoustique',
    lead: 'Pour les maîtres d’ouvrage qui visent le meilleur niveau sans perdre le contrôle des coûts',
    text: 'Le but de cette mission : sécuriser l’obtention de vos attestations réglementaires et vous mettre en conformité au regard des exigences énergétiques, environnementales et acoustiques — les trois ensemble, pas l’une après l’autre.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Salle de spectacle vide, volume conçu pour ses qualités acoustiques' },
  },

  process: {
    title: 'Votre spécialiste BBC vous accompagne sur les trois volets de la mission.',
    steps: [
      { title: 'Environnement et matériaux', text: 'Repérage des matériaux à risque et des contraintes environnementales du site avant travaux.' },
      { title: 'Performances énergétiques', text: 'Vérification de la cohérence entre l’étude thermique et les dispositions réellement mises en œuvre.' },
      { title: 'Qualité acoustique', text: 'Mesures d’isolement et contrôle du confort sonore des locaux avant réception de l’ouvrage.' },
    ],
  },

  references: {
    eyebrow: 'Nos références',
    title: 'Exemples de missions énergie, environnement et acoustique',
    note: 'Typologies d’ouvrages données à titre indicatif — les opérations réelles et leurs visuels seront renseignés par BBC.',
    items: [
      { image: reference01, title: 'Théâtre municipal', location: 'Cotonou', text: 'Étude du temps de réverbération et des isolements entre la salle et les locaux attenants.' },
      { image: reference02, title: 'Médiathèque', location: 'Porto-Novo', text: 'Traitement acoustique des espaces de lecture et contrôle du confort thermique d’été.' },
      { image: reference03, title: 'Centre culturel', location: 'Ouidah', text: 'Conciliation des exigences d’isolation thermique et d’isolement au bruit sur l’enveloppe.' },
      { image: reference04, title: 'Centre de loisirs', location: 'Abomey-Calavi', text: 'Vérification de la ventilation, de la qualité de l’air intérieur et des niveaux sonores.' },
      { image: reference05, title: 'Siège consulaire', location: 'Cotonou', text: 'Accompagnement sur les attestations réglementaires et les mesures de réception.' },
      { image: reference06, title: 'Musée', location: 'Cotonou', text: 'Maîtrise des ambiances : éclairage naturel, stabilité hygrothermique et silence des salles.' },
      { image: reference07, title: 'Résidence collective', location: 'Sèmè-Podji', text: 'Isolement entre logements, bruits d’équipements et performances de l’enveloppe.' },
      { image: reference08, title: 'Programme mixte', location: 'Cotonou', text: 'Séparation acoustique entre commerces en rez-de-chaussée et logements des étages.' },
      { image: reference09, title: 'Groupe scolaire', location: 'Parakou', text: 'Confort acoustique des salles de classe et repérage des matériaux avant réhabilitation.' },
    ],
  },

  statement: {
    title: 'Trois exigences qui se décident ensemble, pas l’une après l’autre',
    paragraphs: [
      'Isoler pour la thermique, c’est souvent isoler pour l’acoustique aussi — mais pas toujours avec les mêmes matériaux ni les mêmes épaisseurs.',
      'Ventiler pour la qualité de l’air, c’est percer l’enveloppe : donc créer des ponts thermiques et ouvrir des chemins au bruit. Traitées séparément, ces exigences se contredisent et se corrigent au prix de reprises.',
    ],
    bullets: [
      'Arbitrer entre isolation thermique et isolation acoustique quand les deux ne désignent pas la même solution.',
      'Vérifier que les dispositifs de ventilation ne dégradent ni l’étanchéité à l’air ni l’isolement au bruit.',
      'Repérer les matériaux à risque avant démolition et organiser leur traitement.',
      'Mesurer, et pas seulement calculer : les performances se constatent sur l’ouvrage fini.',
    ],
    closing: 'Un seul interlocuteur pour les trois.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Qualité de dialogue', quote: 'On a compris qu’une entreprise générale comme la nôtre attend des propositions et un dialogue, pas qu’on lui impose une solution unique.', author: 'Chargé d’affaires', role: 'Témoignage à renseigner' },
      { theme: 'Les trois d’un coup', quote: 'Avant, on avait trois interlocuteurs qui se renvoyaient les arbitrages. Là, les contradictions entre thermique et acoustique se tranchent dans la même réunion.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
      { theme: 'Mesuré, pas estimé', quote: 'Les mesures à la réception confirment ou non ce qui était annoncé. C’est la seule façon de savoir où on en est vraiment.', author: 'Architecte', role: 'Témoignage à renseigner' },
    ],
  },
}

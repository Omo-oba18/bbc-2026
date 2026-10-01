import heroImage from '../../assets/images/missions/coordination-sps/coordination-sps-hero.webp'
import reference01 from '../../assets/images/missions/coordination-sps/reference-01.webp'
import reference02 from '../../assets/images/missions/coordination-sps/reference-02.webp'
import reference03 from '../../assets/images/missions/coordination-sps/reference-03.webp'
import reference04 from '../../assets/images/missions/coordination-sps/reference-04.webp'
import reference05 from '../../assets/images/missions/coordination-sps/reference-05.webp'
import reference06 from '../../assets/images/missions/coordination-sps/reference-06.webp'
import reference07 from '../../assets/images/missions/coordination-sps/reference-07.webp'
import reference08 from '../../assets/images/missions/coordination-sps/reference-08.webp'
import reference09 from '../../assets/images/missions/coordination-sps/reference-09.webp'

/**
 * Contenu de la page mission « Coordination SPS ».
 *
 * Angle volontairement contractuel et documentaire — quand la mission
 * s'impose, quels documents elle produit, ce qu'ils engagent — pour ne pas
 * recouvrir la compétence « Sécurité sur chantier », qui traite des risques
 * techniques sur le terrain.
 *
 * Textes et typologies d'opérations provisoires.
 */
export const coordinationSps = {
  slug: 'coordination-sps',

  hero: {
    title: 'Coordination SPS',
    lead: 'Pour les maîtres d’ouvrage qui veulent éviter les accidents et être couverts',
    text: 'Dès que plusieurs entreprises interviennent sur une même opération, leurs travaux se croisent — et c’est là que naissent les accidents. La coordination SPS organise cette cohabitation et laisse une trace écrite de chaque décision.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Chantier urbain de grande ampleur mobilisant plusieurs entreprises simultanément' },
  },

  process: {
    title: 'Une mission encadrée, des documents qui font foi.',
    steps: [
      { title: 'Avant — le plan de coordination', text: 'Il fixe les règles communes à toutes les entreprises appelées à intervenir sur l’opération.' },
      { title: 'Pendant — le registre-journal', text: 'Chaque visite, observation et décision y est consignée, à date, et reste opposable.' },
      { title: 'Après — le dossier d’interventions', text: 'Il accompagne l’ouvrage pour toute sa vie et protège ceux qui y interviendront plus tard.' },
    ],
  },

  references: {
    eyebrow: 'Nos références',
    title: 'Des opérations où plusieurs entreprises se croisent',
    note: 'Typologies d’opérations données à titre indicatif — les chantiers réels et leurs visuels seront renseignés par BBC.',
    items: [
      { image: reference01, title: 'Réhabilitation en site occupé', location: 'Cotonou', text: 'Phasage des interventions et protection des occupants pendant toute la durée des travaux.' },
      { image: reference02, title: 'Rénovation lourde', location: 'Porto-Novo', text: 'Coordination des dépose, reprise en sous-œuvre et remise en état sur un bâtiment existant.' },
      { image: reference03, title: 'Ouvrage d’art', location: 'Cotonou', text: 'Encadrement des opérations de levage et des travaux en hauteur sur structure métallique.' },
      { image: reference04, title: 'Réseaux enterrés', location: 'Sèmè-Podji', text: 'Prévention des risques liés aux fouilles profondes, aux blindages et aux réseaux existants.' },
      { image: reference05, title: 'Démolition et dépose', location: 'Cotonou', text: 'Repérage préalable, évacuation des matériaux et protection des intervenants successifs.' },
      { image: reference06, title: 'Terrassement', location: 'Abomey-Calavi', text: 'Plan de circulation des engins et séparation stricte des flux piétons et machines.' },
      { image: reference07, title: 'Ouvrage enterré', location: 'Parakou', text: 'Coordination des interventions en espace confiné et des manœuvres de mise en place.' },
      { image: reference08, title: 'Extension industrielle', location: 'Sèmè-Podji', text: 'Travaux menés en site en activité, avec maintien de la production et accès dédiés.' },
      { image: reference09, title: 'Ouvrage public', location: 'Ouidah', text: 'Chantier ouvert sur l’espace public, avec protection des usagers et des riverains.' },
    ],
  },

  statement: {
    title: 'La sécurité ne se délègue pas, elle s’organise et elle se prouve',
    paragraphs: [
      'Le maître d’ouvrage reste responsable des opérations qu’il engage. Désigner un coordinateur ne transfère pas cette responsabilité : cela lui donne les moyens de l’assumer, et la trace écrite qui l’atteste.',
      'La mission s’impose dès que plusieurs entreprises interviennent sur un même chantier. Ce qu’elle produit ne se résume pas à des visites :',
    ],
    bullets: [
      'Un plan de coordination opposable à toutes les entreprises, rédigé avant le démarrage.',
      'Un registre-journal daté, où figurent les observations faites et les suites données.',
      'Des visites inopinées, qui constatent l’application réelle des dispositions prévues.',
      'Un dossier remis à la livraison, pour les interventions ultérieures sur l’ouvrage.',
    ],
    closing: 'Des documents, pas seulement des intentions.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Disponibilité', quote: 'Je peux appeler mon contact à tout moment pour lui demander un avis. On travaille main dans la main, c’est constructif et efficace.', author: 'Architecte', role: 'Témoignage à renseigner' },
      { theme: 'Une trace écrite', quote: 'Chaque observation est datée et consignée. Le jour où une question se pose, on sait exactement ce qui a été dit, à qui, et quand.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
      { theme: 'Avant le premier coup de pelle', quote: 'Le plan de coordination était prêt avant l’ouverture du chantier. Les entreprises sont arrivées en connaissant les règles, pas en les découvrant.', author: 'Conducteur d’opération', role: 'Témoignage à renseigner' },
    ],
  },
}

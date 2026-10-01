import heroImage from '../../assets/images/competences/ascenseurs/ascenseurs-hero.jpg'
import reference01 from '../../assets/images/competences/ascenseurs/reference-01.jpg'
import reference02 from '../../assets/images/competences/ascenseurs/reference-02.jpg'
import reference03 from '../../assets/images/competences/ascenseurs/reference-03.jpg'
import reference04 from '../../assets/images/competences/ascenseurs/reference-04.jpg'
import reference05 from '../../assets/images/competences/ascenseurs/reference-05.jpg'
import reference06 from '../../assets/images/competences/ascenseurs/reference-06.jpg'
import reference07 from '../../assets/images/competences/ascenseurs/reference-07.jpg'
import reference08 from '../../assets/images/competences/ascenseurs/reference-08.jpg'
import reference09 from '../../assets/images/competences/ascenseurs/reference-09.jpg'

/**
 * Contenu de la compétence « Ascenseurs ».
 *
 * Angle : les seuls équipements du bâtiment qui transportent des personnes,
 * et dont le risque principal pèse sur ceux qui les entretiennent.
 * Le périmètre couvre aussi escaliers mécaniques et trottoirs roulants.
 *
 * Textes provisoires ; les périodicités de vérification applicables au Bénin
 * seront précisées par BBC.
 */
export const ascenseurs = {
  slug: 'ascenseurs',

  hero: {
    title: 'Ascenseurs et appareils élévateurs',
    lead: 'Les seuls équipements d’un bâtiment qui transportent des personnes',
    text: 'Un ascenseur n’est pas un équipement technique parmi d’autres. Il enferme des usagers dans un volume suspendu, il fonctionne sans surveillance, et il reste en service des décennies — souvent bien au-delà de la génération technique qui l’a vu naître. C’est ce qui justifie un régime de vérifications qui lui est propre.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Boutons d’appel d’étage dans la cabine d’un ascenseur' },
  },

  process: {
    title: 'Trois temps, trois niveaux d’exigence.',
    steps: [
      { title: 'À l’installation', text: 'Conformité de l’appareil, mais aussi de la gaine, du local des machines et des conditions d’accès.' },
      { title: 'En exploitation', text: 'Vérifications périodiques, réalité de l’entretien et suite donnée aux observations successives.' },
      { title: 'Sur un parc existant', text: 'Diagnostic des appareils anciens et hiérarchisation des mises à niveau selon le risque.' },
    ],
  },

  references: {
    eyebrow: 'Nos domaines',
    title: 'Appareils de transport de personnes',
    note: 'Domaines donnés à titre indicatif. Les périodicités de vérification applicables au Bénin seront renseignées à partir des données officielles de BBC.',
    items: [
      { image: reference01, title: 'Portes palières', location: 'Sécurité d’accès', text: 'Verrouillage, détection d’obstacle et résistance des portes aux sollicitations courantes.' },
      { image: reference02, title: 'Escaliers mécaniques', location: 'Flux continus', text: 'Peignes, mains courantes synchronisées et dispositifs d’arrêt accessibles aux deux extrémités.' },
      { image: reference03, title: 'Appareils en galerie', location: 'Forte fréquentation', text: 'Usage intensif et public non averti, y compris enfants et personnes encombrées.' },
      { image: reference04, title: 'Atriums et grands volumes', location: 'Appareils panoramiques', text: 'Gaines vitrées, protection des parois et comportement en cas de désenfumage du volume.' },
      { image: reference05, title: 'Appareils en service', location: 'Usagers', text: 'Conditions réelles d’exploitation, qui diffèrent souvent de celles prévues à la conception.' },
      { image: reference06, title: 'Trottoirs roulants', location: 'Longues distances', text: 'Pentes, vitesses et zones d’embarquement sur des appareils parcourus sans attention.' },
      { image: reference07, title: 'Batteries d’ascenseurs', location: 'Desserte', text: 'Gestion des appels, temps d’attente et secours mutuel entre appareils d’un même groupe.' },
      { image: reference08, title: 'Appareils anciens', location: 'Mise à niveau', text: 'Organes d’origine encore en service et écart avec les dispositifs de sécurité attendus aujourd’hui.' },
      { image: reference09, title: 'Accès et dégagements', location: 'Évacuation', text: 'Articulation avec les escaliers, car un ascenseur ne sert pas à évacuer un bâtiment.' },
    ],
  },

  statement: {
    title: 'Les accidents d’ascenseur touchent surtout ceux qui les entretiennent',
    paragraphs: [
      'L’usager est protégé par des dispositifs redondants. Le technicien, lui, intervient dans la gaine, sur des organes en mouvement, parfois depuis le toit de la cabine.',
      'C’est pourquoi le contrôle porte autant sur les conditions d’intervention que sur l’appareil lui-même :',
    ],
    bullets: [
      'Les espaces de sécurité en fond de cuvette et en tête de gaine, qui empêchent l’écrasement.',
      'L’accès au local des machines, trop souvent encombré ou devenu impraticable avec le temps.',
      'Les dispositifs de secours : déverrouillage, alarme, éclairage et liaison avec l’extérieur.',
      'La précision d’arrêt et le nivellement, première cause de chute à l’embarquement.',
    ],
    closing: 'Un appareil qui transporte des personnes se vérifie comme tel.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Le local des machines', quote: 'Il servait de réserve depuis des années. Le technicien ne pouvait plus y accéder normalement, et personne n’avait relevé le problème.', author: 'Gestionnaire d’immeuble', role: 'Témoignage à renseigner' },
      { theme: 'Un parc hétérogène', quote: 'Nos appareils dataient de quatre époques différentes. Le diagnostic a permis de hiérarchiser les reprises au lieu de tout traiter en même temps.', author: 'Bailleur', role: 'Témoignage à renseigner' },
      { theme: 'Ce que l’entretien ne voit plus', quote: 'Les visites d’entretien se succédaient sans rien signaler. Le regard extérieur a relevé des points que l’habitude avait effacés.', author: 'Exploitant', role: 'Témoignage à renseigner' },
    ],
  },
}

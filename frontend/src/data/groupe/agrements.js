import { competenceItems } from '../../constants/navigation'

/**
 * /groupe/agrements
 *
 * Page sensible : un agrément détenu est une affirmation juridique
 * vérifiable. Annoncer une autorisation qu'on ne détient pas n'est pas une
 * approximation commerciale, c'est une fausse déclaration. Aucun statut
 * n'est donc affirmé ici.
 *
 * Chaque domaine porte `statut: null` et s'affiche « À confirmer ». Les
 * valeurs réelles viendront du backend : il suffira de renseigner ce champ,
 * sans toucher ni au composant ni à la mise en page. Un statut renseigné
 * s'affiche en pastille verte, un statut absent en gris — la distinction est
 * visuelle autant que textuelle.
 *
 * La liste des domaines est dérivée de competenceItems plutôt que recopiée :
 * une compétence ajoutée au menu apparaît ici d'office en « à confirmer »,
 * ce qui est le défaut sûr. Elle ne peut pas se désynchroniser.
 *
 * Contenu tenu distinct de groupeIndex, qui expose déjà le principe de
 * l'agrément par domaine. Ici on va plus loin : comment le document se lit,
 * comment le vérifier, et ce qu'il ne garantit pas.
 */

/** Ce que couvrirait l'autorisation, domaine par domaine. */
const portees = {
  'normes-de-construction': 'Conformité de l’ouvrage aux règles de construction qui lui sont applicables.',
  'performance-energetique': 'Consommations, enveloppe et équipements au regard des exigences énergétiques.',
  'securite-sur-chantier': 'Prévention des risques pendant l’exécution des travaux.',
  'securite-incendie': 'Résistance au feu, désenfumage, évacuation et moyens de secours.',
  'immeubles-grande-hauteur': 'Dispositions propres aux immeubles dont la hauteur impose un régime particulier.',
  thermique: 'Comportement thermique de l’enveloppe et des installations.',
  acoustique: 'Isolement acoustique entre locaux et vis-à-vis de l’extérieur.',
  electricite: 'Installations électriques, de leur conception à leur mise en service.',
  parasismique: 'Comportement de la structure sous sollicitation sismique.',
  'grues-levage': 'Appareils de levage, leur installation et leurs vérifications périodiques.',
  ascenseurs: 'Installations d’ascenseurs et leur maintien en conformité.',
}

export const agrements = {
  hero: {
    eyebrow: 'Le groupe',
    title: 'Agréments',
    accent: 'Ce que nous sommes autorisés à signer.',
    lead: 'Une autorisation d’exercer se délivre domaine par domaine. Cette page dit comment elle se lit, comment la vérifier, et ce qu’elle ne garantit pas.',
  },

  portee: {
    eyebrow: 'Périmètre',
    title: 'Les domaines et leur statut',
    lead: 'Les domaines sur lesquels nous intervenons, et l’état de l’autorisation correspondante. Tant qu’un statut n’est pas établi sur pièces, il reste marqué à confirmer.',
    items: competenceItems.map((item) => ({
      label: item.label,
      text: portees[item.slug],
      to: `/competences/${item.slug}`,
      statut: null,
    })),
    note: 'Ces statuts seront renseignés à partir des titres délivrés à l’entreprise. Aucun n’est présumé acquis.',
  },

  cadre: {
    intro: [
      'Un agrément autorise. Il ne classe pas, et il ne dit rien de la qualité d’un rapport.',
      'Il porte sur une personne morale et sur une période. L’une et l’autre se vérifient.',
    ],
    title: 'Ce qu’un agrément ne dit pas',
    paragraphs: [
      'Détenir une autorisation signifie avoir démontré, à un moment donné, qu’on disposait des moyens d’exercer un domaine. C’est un seuil d’entrée, pas une distinction : tous ceux qui exercent régulièrement l’ont.',
      'Ce qui sépare un bureau d’un autre se trouve ailleurs — dans la précision de ses observations, dans le délai où elles vous parviennent, et dans sa façon de maintenir une réserve quand elle dérange. Rien de cela ne figure sur le document.',
    ],
    closing: 'Un seuil, pas un classement',
  },

  sections: [
    {
      title: 'Comment se lit une autorisation',
      blocks: [
        { type: 'sub', text: 'Les quatre mentions qui comptent' },
        { type: 'p', text: 'L’entité nommée, les domaines couverts, l’autorité qui délivre et la période de validité. Les quatre figurent sur le même document, et aucun ne se déduit des trois autres : un titre valide sur un domaine ne dit rien du domaine voisin.' },

        { type: 'sub', text: 'Une entité, pas une personne' },
        { type: 'p', text: 'Une autorisation est délivrée à une structure, non à un ingénieur. Elle ne suit donc pas quelqu’un qui change d’employeur, et un bureau ne devient pas autorisé en recrutant un salarié qui l’était ailleurs. La compétence se transfère ; le titre, non.' },

        { type: 'sub', text: 'Une durée, pas un acquis' },
        { type: 'p', text: 'Un titre expire. Celui qu’on vous présente doit être en cours à la date de votre mission, et non celui d’un cycle précédent. C’est la vérification la plus simple à faire, et la plus souvent omise.' },
      ],
    },

    {
      title: 'Vérifiez-le vous-même',
      blocks: [
        { type: 'p', text: 'Vous n’avez pas à nous croire sur parole, et c’est sain. Demandez le document, lisez les domaines qu’il énumère, et comparez-les à ce que votre opération engage réellement.' },
        { type: 'list', items: [
          'Demandez le titre lui-même, pas sa mention sur une plaquette.',
          'Vérifiez que le domaine en jeu y figure nommément.',
          'Vérifiez la période de validité à la date de votre mission.',
          'Demandez aussi l’attestation d’assurance : c’est un autre document, pour un autre objet.',
        ] },
        { type: 'note', text: 'Faites cette vérification auprès de tout bureau que vous consultez, nous compris.' },
      ],
    },

    {
      title: 'Si le domaine n’est pas couvert',
      blocks: [
        { type: 'p', text: 'Il arrive qu’une opération engage un domaine qu’un bureau ne détient pas. La seule réponse tenable est de le dire, et de ne pas signer la partie concernée.' },
        { type: 'p', text: 'Un avis rendu hors de ce qu’on est autorisé à couvrir n’a aucune valeur, mais il produit un effet : il rassure à tort et laisse le risque chez celui qui l’a demandé. C’est plus dangereux qu’une absence d’avis, parce que personne ne cherche à combler un vide qu’il ignore.' },
        { type: 'links', items: [
          { to: '/competences', label: 'Nos compétences', text: 'Le détail de chaque domaine, et ce qu’il recouvre.' },
          { to: '/contact', label: 'Nous consulter', text: 'Dites-nous votre opération, nous vous dirons ce que nous pouvons couvrir.' },
        ] },
      ],
    },
  ],
}

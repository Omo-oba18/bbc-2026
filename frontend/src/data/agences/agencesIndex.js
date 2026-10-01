/**
 * Index des agences.
 *
 * Cette page n'existe pas sur le site de référence. Les implantations sont
 * provisoires et explicitement signalées comme telles : une agence est un fait
 * sur l'entreprise, pas un savoir-faire qu'on peut rédiger. Elles seront
 * remplacées par le réseau réel de BBC.
 *
 * Volontairement sans visuels : une photographie de rue légendée du nom d'une
 * ville affirmerait quelque chose d'invérifiable.
 */
export const agencesIndex = {
  hero: {
    eyebrow: 'Nos agences',
    title: 'Un réseau au plus près de vos chantiers',
    lead: 'Un contrôle technique se joue sur le terrain. La distance entre nos équipes et votre opération décide du délai entre une question posée et une réponse utilisable.',
  },

  sections: [
    {
      title: 'Nos implantations',
      blocks: [
        { type: 'p', text: 'Chaque implantation couvre une zone d’intervention et dispose d’interlocuteurs qui connaissent le contexte local — sols, climat, filières d’approvisionnement et pratiques des entreprises de la région.' },
        { type: 'links', items: [
          { to: '/agences/cotonou', label: 'Cotonou', text: 'Siège. Littoral, zone portuaire et agglomération.' },
          { to: '/agences/abomey-calavi', label: 'Abomey-Calavi', text: 'Périphérie nord de l’agglomération et opérations de logement.' },
          { to: '/agences/porto-novo', label: 'Porto-Novo', text: 'Est du pays, équipements publics et bâti existant.' },
          { to: '/agences/bohicon', label: 'Bohicon', text: 'Centre, axe routier et opérations industrielles.' },
          { to: '/agences/parakou', label: 'Parakou', text: 'Nord, zones à forte amplitude thermique.' },
        ] },
        { type: 'note', text: 'Implantations provisoires. La liste réelle des agences, leurs coordonnées, leurs responsables et leurs zones d’intervention seront renseignés à partir des données officielles de BBC. Les pages de détail restent à construire.' },
      ],
    },

    {
      title: 'Ce que change la proximité',
      blocks: [
        { type: 'sub', text: 'Le délai de réponse' },
        { type: 'p', text: 'Un ferraillage s’examine avant le coulage, pas après. Quand la question se pose en réunion de chantier, la réponse doit arriver dans la journée — pas la semaine suivante, quand le béton a pris.' },

        { type: 'sub', text: 'La connaissance du contexte' },
        { type: 'p', text: 'Les sols, le régime des pluies, l’amplitude thermique et les matériaux réellement disponibles varient d’une région à l’autre. Une prescription juste sur le papier peut être inapplicable à deux cents kilomètres de là.' },

        { type: 'sub', text: 'La fréquence des visites' },
        { type: 'p', text: 'Un contrôle vaut par son rythme autant que par son contenu. Une équipe proche passe plus souvent, et passe parfois sans prévenir — ce qui change ce qu’elle constate.' },
      ],
    },

    {
      title: 'Trouver le bon interlocuteur',
      blocks: [
        { type: 'p', text: 'Vous n’avez pas besoin de savoir quelle agence vous concerne ni quelle mission s’applique à votre projet. Décrivez l’opération — sa nature, sa localisation, son calendrier — et nous orientons vers l’équipe compétente.' },
        { type: 'links', items: [
          { to: '/contact', label: 'Décrire votre projet', text: 'Quelques informations suffisent pour identifier l’agence et le périmètre.' },
          { to: '/missions', label: 'Voir les missions', text: 'Ce que nous nous engageons à produire, selon le moment de l’opération.' },
        ] },
      ],
    },
  ],
}

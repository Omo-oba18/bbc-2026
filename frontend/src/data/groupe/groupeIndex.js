/**
 * Index du groupe.
 *
 * Cette page n'existe pas sur le site de référence. Elle ne contient aucun
 * fait sur BBC — ni date de création, ni effectif, ni agrément détenu : ce
 * sont des affirmations vérifiables que seule l'entreprise peut fournir, et
 * les chiffres de siteData restent d'ailleurs à l'état de tirets.
 *
 * Ce qui est écrit ici relève du métier lui-même : pourquoi l'indépendance
 * conditionne la valeur d'un avis, ce qu'est un agrément, ce qu'engage un
 * contrôle. C'est universel et vérifiable.
 *
 * Sans visuels, pour la même raison que l'index des agences : une photo
 * d'équipe empruntée affirmerait quelque chose de faux.
 */
export const groupeIndex = {
  hero: {
    eyebrow: 'Le groupe',
    title: 'Ce qui donne du poids à un avis technique',
    lead: 'Un contrôle ne vaut que par l’indépendance de celui qui l’exerce et par les compétences qu’il peut engager. Cette section rassemble ce qui fonde la position de BBC.',
  },

  sections: [
    {
      title: 'Ce que vous trouverez ici',
      blocks: [
        { type: 'p', text: 'Cinq entrées, qui répondent à des questions différentes.' },
        { type: 'links', items: [
          { to: '/groupe/histoire', label: 'Notre histoire', text: 'D’où vient l’entreprise et comment elle s’est constituée.' },
          { to: '/groupe/equipe', label: 'Équipe', text: 'Qui intervient sur vos opérations, et avec quelles qualifications.' },
          { to: '/groupe/agrements', label: 'Agréments', text: 'Les autorisations au titre desquelles nous exerçons.' },
          { to: '/groupe/recrutement', label: 'Recrutement', text: 'Les postes ouverts et ce que suppose le métier.' },
          { to: '/groupe/actualites', label: 'Actualités', text: 'Évolutions du référentiel et vie de l’entreprise.' },
        ] },
        { type: 'note', text: 'Le contenu de ces cinq pages — histoire, effectifs, qualifications, agréments détenus et actualités — sera renseigné à partir des données officielles de BBC. Rien n’est affirmé ici à leur sujet.' },
      ],
    },

    {
      title: 'Ce qui fonde un bureau de contrôle',
      blocks: [
        { type: 'sub', text: 'L’indépendance' },
        { type: 'p', text: 'Un bureau de contrôle ne conçoit pas et ne construit pas. C’est précisément ce qui lui permet de porter un avis sur le travail des autres sans se prononcer sur le sien.' },
        { type: 'p', text: 'Cette séparation n’est pas une précaution de forme. Elle est la condition de validité de l’avis : un contrôleur qui aurait participé aux études se trouverait à valider ses propres hypothèses, et son avis ne vaudrait plus rien pour personne — ni pour le maître d’ouvrage, ni pour l’assureur.' },

        { type: 'sub', text: 'Les agréments' },
        { type: 'p', text: 'Exercer le contrôle technique suppose d’y être autorisé, et cette autorisation se décline par domaine : solidité des ouvrages, sécurité des personnes, puis les volets complémentaires selon la nature des opérations.' },
        { type: 'p', text: 'Un bureau n’est donc pas habilité globalement. Il l’est sur un périmètre précis, et ce périmètre détermine ce qu’il peut signer. C’est la première chose à vérifier avant de confier une mission.' },

        { type: 'sub', text: 'La responsabilité engagée' },
        { type: 'p', text: 'Un avis de contrôle n’est pas une opinion qu’on peut reprendre. Il engage celui qui le formule, et il l’engage dans la durée — bien après la réception de l’ouvrage.' },
        { type: 'p', text: 'C’est cette exposition qui distingue un contrôle d’une relecture bienveillante. Elle explique aussi pourquoi un bureau refuse parfois de valider ce qui l’arrangerait commercialement.' },
      ],
    },

    {
      title: 'Nous rejoindre',
      blocks: [
        { type: 'p', text: 'Le métier demande des ingénieurs et des techniciens capables de tenir deux exigences à la fois : la rigueur du référentiel, et la capacité à proposer une solution praticable à une entreprise qui attend sur le chantier. Savoir dire non ne suffit pas ; il faut savoir dire par quoi remplacer.' },
        { type: 'links', items: [
          { to: '/groupe/recrutement', label: 'Postes ouverts', text: 'Les profils recherchés et les conditions d’exercice.' },
          { to: '/contact', label: 'Nous écrire', text: 'Candidature spontanée, ou question sur l’entreprise.' },
        ] },
      ],
    },
  ],
}

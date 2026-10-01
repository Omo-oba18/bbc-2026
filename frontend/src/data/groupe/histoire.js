/**
 * /groupe/histoire
 *
 * Une page d'histoire est faite de faits datés, et aucun de ceux de BBC ne
 * m'est connu : ni la date de constitution, ni celle du premier agrément, ni
 * les ouvertures d'implantations. Rien n'est donc daté ici.
 *
 * Ce qui est écrit relève de deux registres vérifiables :
 *   — les jalons que traverse tout bureau de contrôle, dans leur ordre
 *     logique, avec `date: null` tant que la valeur réelle n'est pas fournie ;
 *   — la genèse du métier lui-même, qui ne dépend d'aucune donnée interne.
 *
 * Les cinq dates à fournir pour achever la page sont exactement les cinq
 * `date: null` ci-dessous. Rien d'autre n'est à compléter.
 *
 * Contenu tenu distinct de groupeIndex, qui traite déjà l'indépendance, les
 * agréments et la responsabilité engagée : on n'y revient pas.
 */
export const histoire = {
  hero: {
    eyebrow: 'Le groupe',
    title: 'Notre histoire',
    lead: 'Un bureau de contrôle ne se juge pas à son ancienneté, mais à ce qu’il a appris en exerçant. Cette page dit ce que raconte la trajectoire d’un bureau, et par quelles étapes elle passe.',
  },

  chronologie: {
    title: 'Les jalons qui comptent',
    lead: 'La trajectoire d’un bureau de contrôle tient à cinq étapes, qui se présentent dans cet ordre. Les dates propres à BBC seront publiées dès qu’elles seront établies sur pièces.',
    jalons: [
      {
        date: null,
        title: 'La constitution du bureau',
        text: 'Avant la première mission, il faut une structure, une assurance à la hauteur des avis qu’elle signera, et le dépôt des premières demandes d’autorisation d’exercer.',
      },
      {
        date: null,
        title: 'Le premier domaine ouvert',
        text: 'Un bureau ne démarre pas sur tous les fronts. Le domaine ouvert en premier détermine les opérations qu’il peut accompagner, et c’est en l’exerçant qu’il constitue le dossier des suivants.',
      },
      {
        date: null,
        title: 'L’élargissement aux domaines complémentaires',
        text: 'Chaque extension se demande, se justifie et s’instruit. Elle suppose des moyens humains qualifiés sur le domaine visé, et non la seule intention de l’ajouter au catalogue.',
      },
      {
        date: null,
        title: 'Les premières implantations hors du siège',
        text: 'Un contrôle se fait sur place. Ouvrir une implantation, c’est choisir d’être présent au rythme du chantier plutôt qu’à celui des déplacements.',
      },
      {
        date: null,
        title: 'La montée en effectif',
        text: 'Un bureau ne grandit pas plus vite que sa capacité à recruter des ingénieurs et des techniciens prêts à engager un avis sous leur propre nom.',
      },
    ],
    note: 'Aucune date n’est affichée tant qu’elle n’est pas confirmée par les documents de l’entreprise. Un repère évidé signale une date encore absente.',
  },

  sections: [
    {
      title: 'D’où vient ce métier',
      blocks: [
        { type: 'p', text: 'Un ouvrage ne signale pas qu’il est mal fait. Il tient, parfois longtemps, puis cède — et quand il cède, les causes remontent à des décisions prises des années plus tôt : un ferraillage que plus personne ne peut voir, une hypothèse de calcul que personne n’a reprise, une reprise d’étanchéité faite à la va-vite un vendredi soir.' },
        { type: 'p', text: 'Le contrôle technique est né de ce décalage. Si le défaut ne se découvre qu’à la rupture, alors la vérification doit avoir lieu pendant que l’ouvrage se fait : sur les plans tant qu’ils sont modifiables, sur le chantier tant que le béton n’est pas coulé.' },
        { type: 'p', text: 'C’est la raison d’être du métier, et elle est courte : déplacer la découverte du défaut avant qu’il ne coûte cher. Les visites, les rapports et les avis ne sont que les moyens de ce déplacement.' },
      ],
    },

    {
      title: 'Ce qu’un bureau accumule',
      blocks: [
        { type: 'sub', text: 'Une mémoire de cas' },
        { type: 'p', text: 'Un contrôleur qui a vu cent chantiers ne lit pas un plan comme celui qui en a vu dix. Il reconnaît les configurations qui ont mal tourné ailleurs et les signale avant qu’on les reproduise. Cette mémoire ne s’achète pas et ne se rattrape pas : elle se constitue opération par opération.' },

        { type: 'sub', text: 'Des domaines, un par un' },
        { type: 'p', text: 'L’étendue réelle d’un bureau se mesure aux domaines qu’il peut traiter lui-même, sans sous-traiter l’essentiel. Elle s’élargit par paliers, et chaque palier demande d’abord les compétences, ensuite seulement l’annonce.' },

        { type: 'sub', text: 'Une capacité à être là' },
        { type: 'p', text: 'Un avis rendu depuis un bureau lointain arrive souvent après que la question s’est posée sur le chantier — et une question sans réponse se tranche sans le contrôleur. La proximité fait donc partie du service autant que la compétence technique.' },
      ],
    },

    {
      title: 'Pourquoi un bureau établi au Bénin',
      blocks: [
        { type: 'p', text: 'Les règles de l’art ne se transposent pas telles quelles d’un pays à l’autre. Les matériaux réellement disponibles, les pratiques des entreprises qui exécutent, le climat et les sols du lieu où l’on construit changent ce qu’il est raisonnable de prescrire.' },
        { type: 'p', text: 'Un bureau installé sur place connaît ces écarts parce qu’il les rencontre sur ses propres opérations. Il sait quelle prescription sera suivie et laquelle restera lettre morte faute de moyens de la tenir. Cette différence décide de l’utilité réelle d’un rapport : une exigence intenable n’est pas une exigence, c’est une ligne que tout le monde contournera.' },
        { type: 'p', text: 'C’est le terrain sur lequel BBC exerce.' },
      ],
    },

    {
      title: 'Situer l’entreprise aujourd’hui',
      blocks: [
        { type: 'p', text: 'Trois pages répondent aux questions qu’on se pose avant de confier une mission.' },
        { type: 'links', items: [
          { to: '/groupe/agrements', label: 'Agréments', text: 'Les domaines sur lesquels nous sommes autorisés à intervenir.' },
          { to: '/groupe/equipe', label: 'Équipe', text: 'Les qualifications de ceux qui signent les avis.' },
          { to: '/agences', label: 'Implantations', text: 'Depuis où nous nous déplaçons.' },
        ] },
      ],
    },
  ],
}

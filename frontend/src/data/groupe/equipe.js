/**
 * /groupe/equipe
 *
 * Les profils réels de BBC ne me sont pas fournis : ni noms, ni photos, ni
 * qualifications individuelles. La page n'en invente aucun et n'affiche
 * aucun effectif — siteData laisse d'ailleurs ce compteur à un tiret.
 *
 * Elle est donc bâtie sur les rôles plutôt que sur les personnes. C'est
 * exact, et c'est ce que le visiteur cherche d'abord : à qui il parlera,
 * et ce qui autorise cette personne à se prononcer. La présentation
 * nominative viendra s'ajouter sans rien déplacer de ce qui est écrit.
 *
 * Contenu tenu distinct de groupeIndex (indépendance, agréments,
 * responsabilité du bureau) et de histoire (mémoire de cas, domaines).
 */
export const equipe = {
  hero: {
    eyebrow: 'Le groupe',
    title: 'Équipe',
    lead: 'Avant de savoir qui nous sommes, vous voulez savoir à qui vous parlerez et ce qui l’autorise à se prononcer sur votre opération. Cette page répond à ces deux questions.',
  },

  fonctions: {
    title: 'Qui intervient sur votre opération',
    lead: 'Quatre fonctions se partagent le suivi d’un dossier. Vous n’aurez pas affaire aux quatre de la même façon, mais toutes engagent la réponse qui vous sera rendue.',
    roles: [
      {
        title: 'Le chargé d’affaires',
        text: 'Votre interlocuteur sur la durée de l’opération. Il connaît le dossier, suit les échéances et sait quel spécialiste mobiliser lorsqu’une question sort de son domaine.',
      },
      {
        title: 'Le contrôleur technique',
        text: 'Celui qui examine les pièces et se rend sur le chantier. Il rédige les avis et les signe : ce sont ses constats qui figurent au rapport, sous son nom.',
      },
      {
        title: 'Le référent de domaine',
        text: 'Sur les sujets qui demandent une spécialité — incendie, structure, levage, acoustique — l’avis est préparé par celui qui exerce ce domaine, et non par un généraliste qui s’en approcherait.',
      },
      {
        title: 'La direction technique',
        text: 'Elle tranche les positions difficiles et veille à ce que deux opérations comparables reçoivent la même réponse. Sans cet arbitrage, la doctrine d’un bureau varierait avec celui qui l’applique.',
      },
    ],
    note: 'La présentation nominative de l’équipe, avec la qualification de chacun, sera publiée à partir des dossiers de l’entreprise. Aucun effectif n’est avancé ici.',
  },

  sections: [
    {
      title: 'Ce que suppose la qualification',
      blocks: [
        { type: 'sub', text: 'Deux savoirs, pas un' },
        { type: 'p', text: 'Contrôler demande de connaître le référentiel et de connaître le chantier. Le premier s’apprend dans les textes. Le second s’acquiert en voyant comment une prescription se traduit — ou ne se traduit pas — en gestes d’exécution, avec les moyens dont l’entreprise dispose ce jour-là.' },
        { type: 'p', text: 'Qui ne maîtriserait que les textes produirait des rapports exacts et inapplicables. Qui ne connaîtrait que le chantier rendrait des avis commodes et indéfendables. Le métier tient dans la tenue simultanée des deux.' },

        { type: 'sub', text: 'Le domaine avant l’ancienneté' },
        { type: 'p', text: 'Ce qui autorise quelqu’un à se prononcer n’est pas le nombre d’années qu’il a derrière lui, mais le domaine dans lequel il a été formé et qu’il pratique. Un ingénieur chevronné en structure n’est pas pour autant fondé à statuer sur un désenfumage.' },
        { type: 'p', text: 'C’est la raison pour laquelle un dossier passe entre plusieurs mains dès qu’il engage plusieurs spécialités, et pourquoi vous verrez parfois plus d’un nom sur un même rapport.' },
      ],
    },

    {
      title: 'Une équipe qui se compose par opération',
      blocks: [
        { type: 'p', text: 'Il n’y a pas d’équipe type. Un entrepôt de plain-pied, un immeuble de logements et un établissement recevant du public n’appellent pas les mêmes compétences, ni dans les mêmes proportions.' },
        { type: 'p', text: 'La composition se décide au moment où l’opération est cadrée, à partir des domaines qu’elle met en jeu. C’est aussi à ce moment que se voit un sujet qui dépasserait ce que nous pouvons traiter nous-mêmes — et il vaut mieux l’annoncer à ce moment-là qu’au premier rapport.' },
        { type: 'note', text: 'Si une opération engage un domaine que nous ne couvrons pas, nous le disons au cadrage plutôt que de l’apprendre en cours de mission.' },
      ],
    },

    {
      title: 'Travailler avec nous',
      blocks: [
        { type: 'p', text: 'Le métier se transmet mal par la seule formation initiale : il demande d’accompagner quelqu’un sur des chantiers réels avant de signer seul. C’est long, et c’est la raison pour laquelle un bureau recrute en pensant à plusieurs années.' },
        { type: 'links', items: [
          { to: '/groupe/recrutement', label: 'Recrutement', text: 'Ce que nous demandons, et ce que le poste demande en retour.' },
          { to: '/groupe/agrements', label: 'Agréments', text: 'Les domaines que ces qualifications nous permettent de couvrir.' },
        ] },
      ],
    },
  ],
}

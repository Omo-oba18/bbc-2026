/**
 * Contenu éditorial de la page d'index /missions.
 *
 * Article de fond : aucun visuel, une colonne de texte structurée.
 * Il ne passe pas par ServicePage mais par ArticleHero + ArticleBody.
 *
 * ATTENTION — les désignations de missions par lettres (L, S, PS, F, TH, PH,
 * HAND…) sont la notation usuelle de la profession. Leur caractère
 * obligatoire, les seuils qui les déclenchent et les textes qui les encadrent
 * dépendent du cadre applicable : ils doivent être confirmés par BBC avant
 * mise en ligne. Rien n'est affirmé ici sur la réglementation béninoise.
 */
export const missionsIndex = {
  hero: {
    eyebrow: 'Nos missions',
    title: 'Missions du bureau de contrôle : ce qu’il faut savoir',
    lead: 'À quoi sert un bureau de contrôle technique, à quel moment il intervient, quelles missions sont attendues sur une opération et lesquelles se choisissent. Un repère pour situer le besoin de votre projet.',
  },

  sections: [
    {
      title: 'Qu’est-ce qu’une mission de contrôle technique ?',
      blocks: [
        { type: 'sub', text: 'Définition' },
        { type: 'p', text: 'Le contrôle technique est une mission d’examen indépendante, confiée à un tiers qui ne conçoit pas et ne construit pas. Son rôle n’est pas de refaire le travail de la maîtrise d’œuvre ni de piloter les entreprises, mais de porter un avis sur les choix techniques retenus et sur leur mise en œuvre.' },
        { type: 'p', text: 'Cette indépendance est ce qui donne sa valeur à l’avis. Un bureau de contrôle qui participerait à la conception se prononcerait sur son propre travail.' },

        { type: 'sub', text: 'À quoi sert-elle concrètement ?' },
        { type: 'p', text: 'L’objectif n’est pas administratif : il est de réduire la probabilité qu’un ouvrage se révèle défaillant, dangereux ou non conforme une fois livré.' },
        { type: 'list', items: [
          'Réduire l’aléa technique, en détectant les dispositions insuffisantes avant qu’elles ne soient construites.',
          'Protéger les personnes qui occuperont, exploiteront ou entretiendront l’ouvrage.',
          'Préserver la valeur de l’investissement, en évitant les reprises lourdes après réception.',
          'Objectiver les arbitrages entre intervenants, en s’appuyant sur un avis extérieur et argumenté.',
          'Constituer une trace écrite des points examinés et des suites qui leur ont été données.',
        ] },

        { type: 'sub', text: 'Comment se déroule-t-elle ?' },
        { type: 'p', text: 'Une mission de contrôle suit l’opération de bout en bout. Elle ne se réduit pas à une visite finale : l’essentiel se joue avant que le premier mètre cube ne soit coulé.' },
        { type: 'list', items: [
          'En conception : examen des hypothèses, des notes de calcul et des dispositions constructives retenues.',
          'En exécution : analyse des plans d’exécution et visites de chantier aux étapes structurantes.',
          'À la réception : synthèse des avis émis et vérifications avant mise en service de l’ouvrage.',
        ] },
      ],
    },

    {
      title: 'Le rôle du contrôleur, phase par phase',
      blocks: [
        { type: 'sub', text: 'À la conception' },
        { type: 'p', text: 'C’est la phase où une observation coûte le moins cher : elle se corrige sur un plan. Le contrôleur examine la cohérence entre le programme, les hypothèses de calcul et les dispositions prévues — descente de charges, fondations, stabilité, sécurité des personnes, performances visées.' },

        { type: 'sub', text: 'Pendant les travaux' },
        { type: 'p', text: 'Les plans d’exécution des entreprises sont examinés au fil de leur production. Des visites de chantier permettent de constater ce qui est réellement mis en œuvre : ferraillage avant coulage, dispositions de sécurité, mise en place des équipements techniques.' },
        { type: 'p', text: 'Un écart relevé à ce stade se traite encore sans démolition. C’est la raison pour laquelle le rythme des visites compte autant que leur contenu.' },

        { type: 'sub', text: 'À la réception et après' },
        { type: 'p', text: 'Le contrôleur remet la synthèse des avis formulés pendant l’opération et procède aux vérifications attendues avant la mise en service. Certaines installations appellent ensuite des vérifications périodiques, qui relèvent d’une mission distincte.' },
      ],
    },

    {
      title: 'Les missions socles d’une opération',
      blocks: [
        { type: 'p', text: 'Deux domaines constituent le socle de presque toute opération de bâtiment : la tenue de l’ouvrage, et la sécurité de ceux qui l’occuperont. Dans la notation usuelle de la profession, ils correspondent aux missions L et S.' },

        { type: 'sub', text: 'Solidité des ouvrages — mission L' },
        { type: 'p', text: 'Elle porte sur la stabilité et la résistance de la structure et des éléments d’équipement qui en sont indissociables : fondations, ossature, planchers, façades porteuses, charpentes. C’est le cœur du risque de sinistre majeur.' },

        { type: 'sub', text: 'Sécurité des personnes — mission S' },
        { type: 'p', text: 'Elle couvre ce qui protège les occupants dans l’usage courant du bâtiment : garde-corps, dégagements, escaliers, installations électriques, dispositions de sécurité incendie selon la nature de l’ouvrage.' },

        { type: 'note', text: 'Les désignations par lettres sont la notation usuelle du métier. Le caractère obligatoire d’une mission, les seuils qui la déclenchent et les textes qui l’encadrent dépendent du cadre applicable à votre opération : ces éléments seront précisés par BBC.' },
      ],
    },

    {
      title: 'Les missions complémentaires',
      blocks: [
        { type: 'p', text: 'Au-delà du socle, une opération peut appeler des examens spécifiques selon sa nature, son usage, son site ou les performances visées. Ils se choisissent au cas par cas.' },
        { type: 'list', items: [
          'Comportement au séisme, pour les ouvrages implantés en zone exposée.',
          'Sécurité incendie, dès que l’ouvrage reçoit du public ou dépasse certaines hauteurs.',
          'Accessibilité, pour l’usage du bâtiment par les personnes à mobilité réduite.',
          'Performance thermique et énergétique de l’enveloppe et des équipements.',
          'Isolation acoustique, entre locaux et vis-à-vis des bruits extérieurs.',
          'Fonctionnement des installations techniques, une fois l’ouvrage en service.',
          'Ouvrages avoisinants, lorsque les travaux peuvent affecter le bâti mitoyen.',
          'Solidité des existants, pour les opérations de réhabilitation et d’extension.',
        ] },
        { type: 'p', text: 'Ces examens ne s’ajoutent pas mécaniquement : le périmètre se cale sur le projet, son site et son usage. Un entrepôt logistique et une clinique n’appellent pas le même assemblage.' },
      ],
    },

    {
      title: 'Les missions que BBC conduit',
      blocks: [
        { type: 'p', text: 'Chaque mission fait l’objet d’une page dédiée, avec son déroulé, ses livrables et des exemples d’opérations.' },
        { type: 'links', items: [
          { to: '/missions/controle-construction', label: 'Contrôle construction', text: 'Contrôles de conception et d’exécution, de l’avant-projet à la réception.' },
          { to: '/missions/verifications-erp', label: 'Vérifications ERP', text: 'Conformité des établissements recevant du public, jusqu’à la commission.' },
          { to: '/missions/verifications-exploitation', label: 'Vérifications exploitation', text: 'Contrôles périodiques des installations en service.' },
          { to: '/missions/energie-environnement-acoustique', label: 'Énergie, environnement, acoustique', text: 'Les trois volets traités ensemble, là où ils se contredisent.' },
          { to: '/missions/coordination-sps', label: 'Coordination SPS', text: 'Organisation de la sécurité entre les entreprises d’un même chantier.' },
          { to: '/missions/evenementiel', label: 'Contrôle évènementiel', text: 'Installations temporaires vérifiées avant l’accueil du public.' },
          { to: '/missions/diagnostic-pemd', label: 'Diagnostic PEMD', text: 'Ce qui est réemployable avant démolition ou rénovation lourde.' },
        ] },
      ],
    },

    {
      title: 'Selon votre rôle dans l’opération',
      blocks: [
        { type: 'sub', text: 'Vous êtes maître d’ouvrage' },
        { type: 'p', text: 'Vous portez la responsabilité de l’opération sans nécessairement en maîtriser chaque aspect technique. Le bureau de contrôle vous donne un avis indépendant sur ce qui vous est proposé, et une trace de ce qui a été examiné.' },

        { type: 'sub', text: 'Vous êtes architecte ou maître d’œuvre' },
        { type: 'p', text: 'Vous cherchez un interlocuteur qui comprenne l’intention du projet plutôt qu’un simple guichet de conformité. Les arbitrages se discutent, et une solution refusée doit s’accompagner d’une alternative praticable.' },

        { type: 'sub', text: 'Vous êtes entreprise' },
        { type: 'p', text: 'Ce qui vous coûte, c’est l’attente. Un avis rendu en réunion de chantier plutôt que trois semaines plus tard change la conduite d’une opération.' },

        { type: 'sub', text: 'Vous exploitez un établissement' },
        { type: 'p', text: 'Vos obligations se répètent dans le temps, sur des installations qui vieillissent pendant que votre activité continue. Les interventions se calent sur vos horaires, pas l’inverse.' },
      ],
    },

    {
      title: 'Ce qui change avec BBC',
      blocks: [
        { type: 'list', items: [
          'Le même interlocuteur du début à la fin : votre dossier n’est pas redécouvert à chaque échange.',
          'Des réponses formulées pour être utilisables sur le chantier, pas seulement exactes.',
          'Une présence sur le terrain, y compris lors de visites non annoncées.',
          'Des rapports lisibles par les entreprises, avec les écarts classés par priorité.',
          'Des équipes implantées localement, qui connaissent le contexte de construction.',
        ] },
        { type: 'note', text: 'Les informations de cette page sont provisoires. Les références réglementaires applicables au Bénin, les agréments de BBC et le détail de ses missions seront renseignés à partir des données officielles de l’entreprise.' },
      ],
    },
  ],
}

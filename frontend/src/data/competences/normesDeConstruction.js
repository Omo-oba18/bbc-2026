import heroImage from '../../assets/images/competences/normes-de-construction/normes-de-construction-hero.jpg'
import reference01 from '../../assets/images/competences/normes-de-construction/reference-01.jpg'
import reference02 from '../../assets/images/competences/normes-de-construction/reference-02.jpg'
import reference03 from '../../assets/images/competences/normes-de-construction/reference-03.jpg'
import reference04 from '../../assets/images/competences/normes-de-construction/reference-04.jpg'
import reference05 from '../../assets/images/competences/normes-de-construction/reference-05.jpg'
import reference06 from '../../assets/images/competences/normes-de-construction/reference-06.jpg'
import reference07 from '../../assets/images/competences/normes-de-construction/reference-07.jpg'
import reference08 from '../../assets/images/competences/normes-de-construction/reference-08.jpg'
import reference09 from '../../assets/images/competences/normes-de-construction/reference-09.jpg'

/**
 * Contenu de la compétence « Normes de construction ».
 *
 * Angle : la connaissance du référentiel et sa traduction en dispositions
 * vérifiables. À distinguer de la mission « Contrôle construction », qui est
 * l'intervention contractuelle sur une opération donnée.
 *
 * Le référentiel applicable au Bénin sera précisé par BBC. Rien n'est affirmé
 * ici sur des textes ou des seuils particuliers.
 */
export const normesDeConstruction = {
  slug: 'normes-de-construction',

  hero: {
    title: 'Normes de construction',
    lead: 'Savoir quel référentiel s’applique, et ce qu’il impose concrètement sur le chantier',
    text: 'Un ouvrage n’est pas conforme parce qu’on l’a voulu ainsi. Il l’est parce que chaque disposition — un enrobage, une section, un ancrage — répond à une exigence identifiée. Cette compétence, c’est la connaissance du référentiel applicable et sa traduction en choix constructifs vérifiables.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Structure béton d’un bâtiment, poteaux et planchers apparents' },
  },

  process: {
    title: 'Une exigence écrite ne vaut que si elle se retrouve dans l’ouvrage.',
    steps: [
      { title: 'Identifier le référentiel', text: 'Déterminer quels textes et quelles règles de l’art s’appliquent à l’ouvrage et à son usage.' },
      { title: 'Traduire en dispositions', text: 'Vérifier que les choix de conception répondent à l’exigence, et non à son approximation.' },
      { title: 'Constater sur l’ouvrage', text: 'Contrôler sur site que ce qui est mis en œuvre correspond à ce qui a été prescrit.' },
    ],
  },

  references: {
    eyebrow: 'Nos domaines',
    title: 'Là où la règle se joue concrètement',
    note: 'Domaines donnés à titre indicatif. Le référentiel applicable au Bénin et les agréments de BBC seront renseignés à partir des données officielles de l’entreprise.',
    items: [
      { image: reference01, title: 'Ferraillage et enrobage', location: 'Durabilité', text: 'Sections, recouvrements et épaisseur d’enrobage vérifiés avant coulage.' },
      { image: reference02, title: 'Coffrage et étaiement', location: 'Stabilité provisoire', text: 'Résistance des coffrages et maintien des étais jusqu’au durcissement du béton.' },
      { image: reference03, title: 'Reprises de bétonnage', location: 'Continuité', text: 'Traitement des interfaces entre phases, pour éviter la ligne de faiblesse.' },
      { image: reference04, title: 'Éléments préfabriqués', location: 'Assemblage', text: 'Contrôle des ancrages, des appuis et des tolérances de pose.' },
      { image: reference05, title: 'Charpente métallique', location: 'Assemblages', text: 'Boulonnage, soudures et protection contre la corrosion et l’action du feu.' },
      { image: reference06, title: 'Soutènement de fouille', location: 'Poussée des terres', text: 'Dimensionnement des blindages et suivi des déformations pendant les travaux.' },
      { image: reference07, title: 'Fondations profondes', location: 'Portance', text: 'Contrôle des profondeurs atteintes et de la qualité d’exécution des pieux.' },
      { image: reference08, title: 'Planchers', location: 'Flèche et vibration', text: 'Épaisseurs, armatures et conditions d’appui, y compris en planchers collaborants.' },
      { image: reference09, title: 'Ouvrages de grande portée', location: 'Phasage', text: 'Stabilité des éléments à chaque étape, avant assemblage définitif.' },
    ],
  },

  statement: {
    title: 'Une norme ne dit pas comment construire, elle dit ce que l’ouvrage doit tenir',
    paragraphs: [
      'La nuance change tout. Un texte fixe une performance à atteindre — une résistance, une durée, un comportement au feu. Il laisse ouverte la façon d’y parvenir.',
      'D’où deux erreurs symétriques, également coûteuses :',
    ],
    bullets: [
      'Appliquer une solution type sans vérifier qu’elle convient au cas présent.',
      'Retenir une disposition sans pouvoir démontrer qu’elle atteint la performance exigée.',
      'Confondre la règle de l’art et le texte réglementaire, qui n’ont ni la même portée ni la même force.',
      'Travailler avec une version périmée du référentiel, parce qu’elle a suffi au projet précédent.',
    ],
    closing: 'Entre les deux, il y a la justification.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Le texte et le terrain', quote: 'On nous dit quelle exigence est en cause, pas seulement que ce n’est pas conforme. Ça change complètement la discussion avec l’entreprise.', author: 'Maître d’œuvre', role: 'Témoignage à renseigner' },
      { theme: 'Avant le coulage', quote: 'Le contrôle du ferraillage se fait quand on peut encore reprendre. Une fois le béton en place, la même observation coûte cent fois plus.', author: 'Conducteur de travaux', role: 'Témoignage à renseigner' },
      { theme: 'Des règles qui bougent', quote: 'Les référentiels évoluent. Avoir quelqu’un dont c’est le métier de suivre ça nous évite de construire avec une version dépassée.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
    ],
  },
}

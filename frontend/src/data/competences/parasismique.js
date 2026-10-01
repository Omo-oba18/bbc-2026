import heroImage from '../../assets/images/competences/parasismique/parasismique-hero.jpg'
import reference01 from '../../assets/images/competences/parasismique/reference-01.jpg'
import reference02 from '../../assets/images/competences/parasismique/reference-02.jpg'
import reference03 from '../../assets/images/competences/parasismique/reference-03.jpg'
import reference04 from '../../assets/images/competences/parasismique/reference-04.jpg'
import reference05 from '../../assets/images/competences/parasismique/reference-05.jpg'
import reference06 from '../../assets/images/competences/parasismique/reference-06.jpg'
import reference07 from '../../assets/images/competences/parasismique/reference-07.jpg'
import reference08 from '../../assets/images/competences/parasismique/reference-08.jpg'
import reference09 from '../../assets/images/competences/parasismique/reference-09.jpg'

/**
 * Contenu de la compétence « Parasismique ».
 *
 * Angle : la conception avant le calcul — la forme, la continuité du chemin
 * des efforts, la capacité à se déformer sans rompre.
 *
 * Textes provisoires. Le zonage sismique applicable et les exigences qui en
 * découlent seront précisés par BBC : rien n'est affirmé ici.
 */
export const parasismique = {
  slug: 'parasismique',

  hero: {
    title: 'Conception parasismique',
    lead: 'Un séisme ne crée pas les défauts d’un bâtiment, il les révèle',
    text: 'La résistance au séisme ne s’ajoute pas à un projet : elle se décide avec sa forme. Une géométrie régulière, un contreventement continu du dernier niveau jusqu’aux fondations, des liaisons capables de se déformer sans rompre. Ce qu’on tente de rattraper ensuite par le calcul coûte toujours plus que ce qui se réglait sur le plan.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Bâtiment porté par des poteaux de béton laissant le rez-de-chaussée ouvert' },
  },

  process: {
    title: 'Trois principes, dans l’ordre où ils se décident.',
    steps: [
      { title: 'La forme avant le calcul', text: 'Régularité en plan et en élévation : une géométrie simple se comporte de façon prévisible.' },
      { title: 'Un chemin continu des efforts', text: 'Du dernier niveau jusqu’au sol, sans interruption ni report improvisé en cours de projet.' },
      { title: 'Se déformer sans rompre', text: 'Dispositions constructives qui permettent d’absorber l’énergie plutôt que de la subir.' },
    ],
  },

  references: {
    eyebrow: 'Nos domaines',
    title: 'Ce qui décide du comportement d’un ouvrage',
    note: 'Domaines donnés à titre indicatif. Le zonage sismique applicable au Bénin et les exigences qui en découlent seront renseignés à partir des données officielles de BBC.',
    items: [
      { image: reference01, title: 'Régularité en plan', location: 'Symétrie', text: 'Répartition équilibrée des masses et des raideurs, pour éviter la mise en torsion de l’ouvrage.' },
      { image: reference02, title: 'Contreventement', location: 'Efforts horizontaux', text: 'Voiles et palées descendant jusqu’aux fondations, sans report sur des éléments fléchis.' },
      { image: reference03, title: 'Renforcement d’ossature', location: 'Confinement', text: 'Armatures transversales dans les zones critiques, là où la rotule plastique est attendue.' },
      { image: reference04, title: 'Fondations et soutènement', location: 'Liaison au sol', text: 'Solidarisation des points d’appui et comportement du sol sous sollicitation cyclique.' },
      { image: reference05, title: 'Maçonneries chaînées', location: 'Chaînages', text: 'Ceintures horizontales et verticales qui tiennent les panneaux au lieu de les laisser s’ouvrir.' },
      { image: reference06, title: 'Trame et préfabrication', location: 'Assemblages', text: 'Liaisons entre éléments préfabriqués, qui conditionnent le comportement d’ensemble.' },
      { image: reference07, title: 'Façades et remplissages', location: 'Éléments non structuraux', text: 'Panneaux et vitrages qui rigidifient involontairement une ossature prévue souple.' },
      { image: reference08, title: 'Bâti existant', location: 'Vulnérabilité', text: 'Diagnostic des ouvrages conçus avant toute exigence, et renforcements envisageables.' },
      { image: reference09, title: 'Régularité en élévation', location: 'Continuité', text: 'Absence de rupture brutale de raideur entre niveaux successifs sur toute la hauteur.' },
    ],
  },

  statement: {
    title: 'L’étage souple est le défaut le plus répandu, et le plus coûteux',
    paragraphs: [
      'Un rez-de-chaussée ouvert — commerces, parking, hall vitré — sous des niveaux rigidement cloisonnés : toute la déformation se concentre sur le seul étage qui porte tout le reste.',
      'Les autres irrégularités obéissent au même mécanisme. Une discontinuité concentre, et ce qui concentre rompt :',
    ],
    bullets: [
      'Une trame porteuse interrompue, reportée sur des poutres de transfert.',
      'Un plan en L ou en T, qui met l’ouvrage en torsion autour de son angle rentrant.',
      'Des remplissages en maçonnerie qui rigidifient une ossature conçue pour fléchir.',
      'Deux corps de bâtiment accolés sans joint, qui s’entrechoquent au lieu de bouger ensemble.',
    ],
    closing: 'Ce qui concentre rompt.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Sur le plan masse', quote: 'Les arbitrages décisifs se sont pris sur la forme du bâtiment, bien avant la note de calcul. Et ils n’ont rien coûté à ce stade.', author: 'Architecte', role: 'Témoignage à renseigner' },
      { theme: 'Le rez-de-chaussée', quote: 'On voulait un hall entièrement vitré sur toute la façade. On a compris ce que ça impliquait pour les niveaux au-dessus.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
      { theme: 'Les détails tiennent tout', quote: 'La note de calcul était juste. Ce sont les dispositions d’armatures en zone critique qui ne suivaient pas.', author: 'Bureau d’études structure', role: 'Témoignage à renseigner' },
    ],
  },
}

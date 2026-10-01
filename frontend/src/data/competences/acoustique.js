import heroImage from '../../assets/images/competences/acoustique/acoustique-hero.webp'
import reference01 from '../../assets/images/competences/acoustique/reference-01.webp'
import reference02 from '../../assets/images/competences/acoustique/reference-02.webp'
import reference03 from '../../assets/images/competences/acoustique/reference-03.webp'
import reference04 from '../../assets/images/competences/acoustique/reference-04.webp'
import reference05 from '../../assets/images/competences/acoustique/reference-05.webp'
import reference06 from '../../assets/images/competences/acoustique/reference-06.webp'
import reference07 from '../../assets/images/competences/acoustique/reference-07.webp'
import reference08 from '../../assets/images/competences/acoustique/reference-08.webp'
import reference09 from '../../assets/images/competences/acoustique/reference-09.webp'

/**
 * Contenu de la compétence « Acoustique ».
 *
 * Angle : la discipline elle-même — isoler n'est pas corriger, et un son
 * emprunte toujours plus d'un chemin. La mission « Énergie, environnement et
 * acoustique » traite les trois volets ensemble et leurs contradictions.
 *
 * Textes provisoires.
 */
export const acoustique = {
  slug: 'acoustique',

  hero: {
    title: 'Acoustique du bâtiment',
    lead: 'Isoler d’un côté, corriger de l’autre — ce ne sont pas les mêmes moyens',
    text: 'On confond souvent deux choses. Isoler, c’est empêcher le son de passer d’un local à l’autre : affaire de masse, d’étanchéité et de désolidarisation. Corriger, c’est rendre un local écoutable : affaire d’absorption et de géométrie. Un local parfaitement isolé peut rester inutilisable.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Studio d’enregistrement aux parois traitées pour l’absorption acoustique' },
  },

  process: {
    title: 'Un son emprunte toujours plus d’un chemin.',
    steps: [
      { title: 'Par l’air', text: 'Transmission directe à travers parois, portes et gaines : ce qui se traite par la masse et l’étanchéité.' },
      { title: 'Par la structure', text: 'Bruits d’impact et vibrations qui contournent la paroi : ce qui se traite par la désolidarisation.' },
      { title: 'Par les équipements', text: 'Ventilation, pompes, ascenseurs : des sources installées à demeure, qui fonctionnent aussi la nuit.' },
    ],
  },

  references: {
    eyebrow: 'Nos domaines',
    title: 'Chaque local a son exigence propre',
    note: 'Domaines donnés à titre indicatif. Les niveaux exigés selon les usages seront renseignés à partir des données officielles de BBC.',
    items: [
      { image: reference01, title: 'Piscines couvertes', location: 'Réverbération', text: 'Surfaces dures et grands volumes : l’absorption se place là où elle reste efficace et durable.' },
      { image: reference02, title: 'Bibliothèques', location: 'Bruit de fond', text: 'Niveau résiduel des équipements, dans des locaux où le silence fait partie de l’usage.' },
      { image: reference03, title: 'Salles de classe', location: 'Intelligibilité', text: 'Durée de réverbération réglée pour que la parole reste compréhensible au fond de la salle.' },
      { image: reference04, title: 'Salles de formation', location: 'Correction', text: 'Traitement des parois parallèles et des échos tardifs qui brouillent le discours.' },
      { image: reference05, title: 'Studios et régies', location: 'Isolement renforcé', text: 'Boîte dans la boîte, sas d’accès et désolidarisation complète des parois.' },
      { image: reference06, title: 'Locaux nus', location: 'Volume et matériaux', text: 'Comportement d’un local avant aménagement, qui détermine le traitement à prévoir.' },
      { image: reference07, title: 'Chambres d’hôtel', location: 'Isolement entre locaux', text: 'Cloisons séparatives, portes palières et transmissions par les gaines communes.' },
      { image: reference08, title: 'Espaces de travail partagés', location: 'Bruit d’activité', text: 'Décroissance spatiale du bruit et distance au-delà de laquelle une conversation cesse de gêner.' },
      { image: reference09, title: 'Logements', location: 'Bruits d’impact', text: 'Chapes désolidarisées et traitement des liaisons qui transmettent les pas d’un niveau à l’autre.' },
    ],
  },

  statement: {
    title: 'Le défaut acoustique ne se voit pas, il s’entend — une fois les gens installés',
    paragraphs: [
      'C’est ce qui le rend redoutable. Aucune réserve à la réception, aucun constat visuel possible : la plainte arrive après l’emménagement, quand la reprise suppose de rouvrir des ouvrages terminés.',
      'Les causes les plus fréquentes sont connues, et toutes évitables à la conception :',
    ],
    bullets: [
      'Une gaine technique qui traverse deux logements et les met acoustiquement en communication.',
      'Une chape coulée au contact du mur, qui transmet chaque pas à la pièce voisine.',
      'Un équipement fixé en dur sur la paroi d’un local sensible.',
      'Une porte performante dont le seuil est resté ouvert, ce qui annule tout le reste.',
    ],
    closing: 'La masse, l’étanchéité, la désolidarisation — dans cet ordre.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Trop tard pour reprendre', quote: 'Les premières plaintes sont arrivées trois mois après la livraison. À ce moment-là, corriger supposait de rouvrir des logements occupés.', author: 'Bailleur', role: 'Témoignage à renseigner' },
      { theme: 'Le détail qui annule tout', quote: 'Une seule gaine mal traitée ruinait la performance de toute une cloison. On ne l’aurait jamais trouvée sans mesure.', author: 'Maître d’œuvre', role: 'Témoignage à renseigner' },
      { theme: 'Mesurer, pas supposer', quote: 'Les valeurs annoncées par les fournisseurs valent en laboratoire. Sur l’ouvrage fini, c’est la mesure qui tranche.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
    ],
  },
}

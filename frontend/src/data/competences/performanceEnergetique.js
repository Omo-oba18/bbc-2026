import heroImage from '../../assets/images/competences/performance-energetique/performance-energetique-hero.webp'
import reference01 from '../../assets/images/competences/performance-energetique/reference-01.webp'
import reference02 from '../../assets/images/competences/performance-energetique/reference-02.webp'
import reference03 from '../../assets/images/competences/performance-energetique/reference-03.webp'
import reference04 from '../../assets/images/competences/performance-energetique/reference-04.webp'
import reference05 from '../../assets/images/competences/performance-energetique/reference-05.webp'
import reference06 from '../../assets/images/competences/performance-energetique/reference-06.webp'
import reference07 from '../../assets/images/competences/performance-energetique/reference-07.webp'
import reference08 from '../../assets/images/competences/performance-energetique/reference-08.webp'
import reference09 from '../../assets/images/competences/performance-energetique/reference-09.webp'

/**
 * Contenu de la page compétence « Performance énergétique ».
 * Textes et typologies d'ouvrages provisoires, à remplacer par les données
 * officielles BBC sans toucher au gabarit ServicePage.
 */
export const performanceEnergetique = {
  slug: 'performance-energetique',

  hero: {
    title: 'Performance énergétique et confort thermique',
    lead: 'Pour les maîtres d’ouvrage qui veulent des performances tenues, pas seulement annoncées',
    text: 'L’objectif de cette compétence : sécuriser vos attestations réglementaires et vérifier que l’enveloppe, la ventilation et les équipements délivrent réellement les performances prévues à la conception.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Résidence collective contemporaine vue depuis ses abords' },
  },

  process: {
    title: 'Votre spécialiste BBC vous accompagne',
    steps: [
      { title: 'Étude thermique', text: 'Vérification des hypothèses de calcul et cohérence avec les performances visées sur l’ouvrage.' },
      { title: 'Contrôle des performances', text: 'Confrontation des performances annoncées aux dispositions réellement mises en œuvre sur site.' },
      { title: 'Attestations réglementaires', text: 'Constitution des justificatifs attendus en fin de travaux et avant mise en service.' },
    ],
  },

  references: {
    eyebrow: 'Nos références',
    title: 'Exemples d’opérations suivies en performance énergétique',
    note: 'Typologies d’ouvrages données à titre indicatif — les opérations réelles et leurs visuels seront renseignés par BBC.',
    items: [
      { image: reference01, title: 'Réhabilitation de logements collectifs', location: 'Cotonou', text: 'Reprise de l’enveloppe et des menuiseries, avec vérification des performances après travaux.' },
      { image: reference02, title: 'Résidence individuelle basse consommation', location: 'Abomey-Calavi', text: 'Contrôle de l’isolation, de la ventilation et de la production d’énergie en toiture.' },
      { image: reference03, title: 'Établissement d’enseignement', location: 'Porto-Novo', text: 'Étude des apports solaires, de la ventilation naturelle et du confort d’été des salles.' },
      { image: reference04, title: 'Centre de formation', location: 'Parakou', text: 'Vérification de l’enveloppe vitrée et des équipements de rafraîchissement sur l’ensemble du site.' },
      { image: reference05, title: 'Bâtiment administratif', location: 'Cotonou', text: 'Contrôle des performances thermiques et accompagnement sur les attestations de fin de travaux.' },
      { image: reference06, title: 'Immeuble tertiaire', location: 'Cotonou', text: 'Analyse des façades vitrées, des protections solaires et des consommations prévisionnelles.' },
      { image: reference07, title: 'Campagne de thermographie', location: 'Sèmè-Podji', text: 'Relevés infrarouges sur l’enveloppe d’un parc existant pour localiser les déperditions.' },
      { image: reference08, title: 'Espace commercial couvert', location: 'Cotonou', text: 'Étude de l’éclairage naturel, du désenfumage et du confort thermique sous verrière.' },
      { image: reference09, title: 'Espace d’accueil hôtelier', location: 'Grand-Popo', text: 'Contrôle des installations de climatisation et des dispositions d’isolation des locaux.' },
    ],
  },

  statement: {
    title: 'La performance énergétique est à la croisée de la technique et du réglementaire',
    paragraphs: [
      'Votre opération avance, et vous découvrez qu’un volet réglementaire encadre chacun de vos choix techniques : c’est le lot de la performance énergétique.',
      'Tenir cette conformité en interne suppose de suivre plusieurs disciplines à la fois. Ce que la compétence recouvre, concrètement :',
    ],
    bullets: [
      'Connaître les textes applicables et leurs mises à jour pour identifier les obligations réelles d’un ouvrage.',
      'Vérifier la cohérence entre l’étude thermique, les plans d’exécution et ce qui est effectivement posé.',
      'Arbitrer entre les solutions d’isolation, de ventilation et de production adaptées au climat local.',
      'Rassembler les justificatifs attendus pour les attestations de fin de travaux.',
    ],
    closing: 'Bref, ça fait beaucoup.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Un référent technique', quote: 'Avoir un référent qui suit le dossier de bout en bout change tout : on échange sur les solutions proposées par les autres intervenants sans repartir de zéro à chaque réunion.', author: 'Promoteur immobilier', role: 'Témoignage à renseigner' },
      { theme: 'Des performances tenues', quote: 'L’écart entre ce qui est calculé et ce qui est posé, c’est là que tout se joue. Le contrôle sur site remet les deux en face l’un de l’autre.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
      { theme: 'Des attestations sécurisées', quote: 'Les justificatifs sont préparés au fil du chantier plutôt que rassemblés dans l’urgence à la réception. La mise en service ne prend pas de retard.', author: 'Conducteur d’opération', role: 'Témoignage à renseigner' },
    ],
  },
}

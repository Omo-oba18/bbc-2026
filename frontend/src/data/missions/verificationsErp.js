import heroImage from '../../assets/images/missions/verifications-erp/verifications-erp-hero.webp'
import reference01 from '../../assets/images/missions/verifications-erp/reference-01.webp'
import reference02 from '../../assets/images/missions/verifications-erp/reference-02.webp'
import reference03 from '../../assets/images/missions/verifications-erp/reference-03.webp'
import reference04 from '../../assets/images/missions/verifications-erp/reference-04.webp'
import reference05 from '../../assets/images/missions/verifications-erp/reference-05.webp'
import reference06 from '../../assets/images/missions/verifications-erp/reference-06.webp'
import reference07 from '../../assets/images/missions/verifications-erp/reference-07.webp'
import reference08 from '../../assets/images/missions/verifications-erp/reference-08.webp'
import reference09 from '../../assets/images/missions/verifications-erp/reference-09.webp'

/**
 * Contenu de la page mission « Vérifications ERP ».
 * Textes et typologies d'établissements provisoires, à remplacer par les
 * données officielles BBC sans toucher au gabarit ServicePage.
 */
export const verificationsErp = {
  slug: 'verifications-erp',

  hero: {
    title: 'Votre établissement aux normes ERP',
    lead: 'Pour celles et ceux qui veulent être aux normes sans y passer des années',
    text: 'Les obligations qui pèsent sur un établissement recevant du public forment un ensemble dense, où chaque catégorie et chaque type appellent des règles différentes. BBC fait le tri et vous sert de guide jusqu’à l’avis favorable.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Étude de plans d’aménagement sur un poste de travail' },
  },

  process: {
    title: 'Votre spécialiste BBC vous accompagne :',
    steps: [
      { title: 'Évaluation des textes applicables', text: 'Identification de la catégorie, du type et des obligations qui concernent réellement votre établissement.' },
      { title: 'Suivi des travaux correctifs', text: 'Accompagnement sur les mises en conformité à engager et vérification de leur bonne exécution.' },
      { title: 'Présence en commission', text: 'Nous vous accompagnons devant la commission de sécurité et portons les éléments techniques.' },
    ],
  },

  references: {
    eyebrow: 'Nos références',
    title: 'Des établissements recevant du public aux normes',
    note: 'Typologies d’établissements données à titre indicatif — les opérations réelles et leurs visuels seront renseignés par BBC.',
    items: [
      { image: reference01, title: 'Salle de spectacle', location: 'Cotonou', text: 'Vérification des dégagements, du désenfumage et des conditions d’évacuation du public.' },
      { image: reference02, title: 'Salle omnisports', location: 'Abomey-Calavi', text: 'Contrôle des gradins, des issues de secours et du dimensionnement des circulations.' },
      { image: reference03, title: 'Centre de conférences', location: 'Cotonou', text: 'Analyse des effectifs admissibles et des dispositions de sécurité incendie par niveau.' },
      { image: reference04, title: 'Palais des congrès', location: 'Porto-Novo', text: 'Vérification périodique des installations techniques et du registre de sécurité.' },
      { image: reference05, title: 'Galerie commerciale', location: 'Cotonou', text: 'Contrôle des espaces communs, de l’accessibilité et des moyens de secours mutualisés.' },
      { image: reference06, title: 'Équipement culturel', location: 'Ouidah', text: 'Accompagnement sur un bâtiment existant : mise en conformité progressive et phasée.' },
      { image: reference07, title: 'Complexe hôtelier', location: 'Cotonou', text: 'Vérification des locaux à sommeil, de l’alarme et des dispositifs d’évacuation.' },
      { image: reference08, title: 'Salle polyvalente', location: 'Parakou', text: 'Détermination de l’effectif, contrôle de l’éclairage de sécurité et des sorties.' },
      { image: reference09, title: 'Établissement scolaire', location: 'Bohicon', text: 'Vérification des conditions d’accueil des élèves et des exercices d’évacuation.' },
    ],
  },

  statement: {
    title: 'Les normes ERP sont à la croisée de la technique et du juridique',
    paragraphs: [
      'Votre établissement existe déjà, et vous découvrez qu’une série d’obligations s’y applique du seul fait qu’il reçoit du public.',
      'Internaliser cette conformité suppose des compétences nombreuses et pointues. Quelques exemples de ce que la mission implique :',
    ],
    bullets: [
      'Déterminer la catégorie et le type de l’établissement, dont découle tout le reste.',
      'Calculer l’effectif admissible et en déduire le nombre et la largeur des dégagements.',
      'Connaître les textes applicables, leurs mises à jour, et savoir lesquels concernent votre site.',
      'Choisir les moyens de secours adaptés et tenir le registre de sécurité à jour.',
      'Préparer le passage devant la commission de sécurité et lever ses observations.',
    ],
    closing: 'Bref, ça fait beaucoup.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Mon hôtel aux normes ERP', quote: 'C’est un vrai défi d’être en conformité avec des réglementations qui changent tout le temps. Avoir un référent technique qui suit le dossier, c’est ce qui permet d’y arriver.', author: 'Direction régionale', role: 'Témoignage à renseigner' },
      { theme: 'Le passage en commission', quote: 'Arriver devant la commission avec quelqu’un qui connaît le dossier et porte les éléments techniques, ça change complètement la nature de l’échange.', author: 'Exploitant d’ERP', role: 'Témoignage à renseigner' },
      { theme: 'Un bâtiment existant', quote: 'On pensait devoir tout reprendre. En réalité, une part des écarts se traitait par phases, sans fermer l’établissement.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
    ],
  },
}

import heroImage from '../../assets/images/competences/securite-sur-chantier/securite-sur-chantier-hero.jpg'
import reference01 from '../../assets/images/competences/securite-sur-chantier/reference-01.jpg'
import reference02 from '../../assets/images/competences/securite-sur-chantier/reference-02.jpg'
import reference03 from '../../assets/images/competences/securite-sur-chantier/reference-03.jpg'
import reference04 from '../../assets/images/competences/securite-sur-chantier/reference-04.jpg'
import reference05 from '../../assets/images/competences/securite-sur-chantier/reference-05.jpg'
import reference06 from '../../assets/images/competences/securite-sur-chantier/reference-06.jpg'
import reference07 from '../../assets/images/competences/securite-sur-chantier/reference-07.jpg'
import reference08 from '../../assets/images/competences/securite-sur-chantier/reference-08.jpg'
import reference09 from '../../assets/images/competences/securite-sur-chantier/reference-09.jpg'

/**
 * Contenu de la page compétence « Sécurité sur chantier ».
 * Textes et typologies d'ouvrages provisoires, à remplacer par les données
 * officielles BBC sans toucher au gabarit ServicePage.
 */
export const securiteSurChantier = {
  slug: 'securite-sur-chantier',

  hero: {
    title: 'Sécurité et coordination sur vos chantiers',
    lead: 'Pour les maîtres d’ouvrage qui veulent éviter les accidents et être couverts',
    text: 'Le maître d’ouvrage reste responsable des opérations qu’il engage. La coordination sécurité organise la cohabitation des entreprises sur site, encadre les situations à risque et réduit concrètement la probabilité d’accident.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Équipe de chantier équipée de casques et de gilets lors d’une visite de sécurité' },
  },

  process: {
    title: 'Votre spécialiste BBC coordonne la sécurité et l’hygiène entre les entreprises de votre chantier.',
    steps: [
      { title: 'Coordination en amont', text: 'Organisation des interventions et rédaction du plan général de coordination avant le démarrage.' },
      { title: 'Contrôles sur chantier', text: 'Visites régulières et inopinées pour vérifier les dispositions de sécurité réellement appliquées.' },
      { title: 'Dossier de fin d’opération', text: 'Constitution du dossier des interventions ultérieures, remis à la livraison de l’ouvrage.' },
    ],
  },

  references: {
    eyebrow: 'Nos références',
    title: 'Des opérations menées en toute sécurité',
    note: 'Typologies d’ouvrages données à titre indicatif — les opérations réelles et leurs visuels seront renseignés par BBC.',
    items: [
      { image: reference01, title: 'Clinique spécialisée', location: 'Cotonou', text: 'Coordination entre les corps d’état sur un site en activité, avec phasage des interventions.' },
      { image: reference02, title: 'Immeuble de bureaux', location: 'Cotonou', text: 'Suivi des dispositions collectives de protection et des accès pendant toute la durée des travaux.' },
      { image: reference03, title: 'Campus universitaire', location: 'Abomey-Calavi', text: 'Coordination sur un site fréquenté, avec séparation stricte des flux chantier et usagers.' },
      { image: reference04, title: 'Hôtel en front de mer', location: 'Cotonou', text: 'Encadrement des travaux en hauteur et des interventions sur façade exposée.' },
      { image: reference05, title: 'Domaine résidentiel', location: 'Grand-Popo', text: 'Coordination de plusieurs entreprises intervenant simultanément sur un même périmètre.' },
      { image: reference06, title: 'Complexe hôtelier', location: 'Ouidah', text: 'Plan de circulation, zones de stockage et prévention des risques liés aux engins de levage.' },
      { image: reference07, title: 'Résidence collective', location: 'Cotonou', text: 'Contrôles inopinés sur les protections de rives, les échafaudages et les accès provisoires.' },
      { image: reference08, title: 'Centre d’imagerie médicale', location: 'Porto-Novo', text: 'Coordination des lots techniques en milieu sensible, avec contraintes d’hygiène renforcées.' },
      { image: reference09, title: 'Espace aquatique', location: 'Grand-Popo', text: 'Prévention des risques liés aux ouvrages enterrés, aux réseaux et aux travaux en fouille.' },
    ],
  },

  statement: {
    title: 'Un coordinateur sécurité disponible et impliqué',
    paragraphs: [
      'Oui, la coordination sécurité est une obligation. Pourquoi ? Parce que le BTP a toujours été une activité à forte accidentologie, et que la cohabitation de plusieurs entreprises sur un même site multiplie les situations à risque.',
      'Le risque zéro n’existe pas, mais il se réduit vraiment. Avec un coordinateur qui connaît votre chantier, le visite régulièrement et passe aussi de manière inopinée, vous vous assurez que les dispositions prévues sont réellement tenues.',
      'C’est du temps gagné sur les arrêts de chantier, et une responsabilité mieux couverte pour le maître d’ouvrage.',
    ],
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Bonne communication', quote: 'Contrairement à beaucoup de contrôleurs qui ne se mettent pas à notre portée, avec un jargon juridique et technique complexe, ici on nous vulgarise et on synthétise les choix possibles. La réponse est compréhensible par tout le monde.', author: 'Promoteur immobilier', role: 'Témoignage à renseigner' },
      { theme: 'Présence sur le terrain', quote: 'Les visites inopinées changent la donne : les équipes savent que les dispositions seront vérifiées, et elles les appliquent sans qu’on ait à le rappeler à chaque réunion.', author: 'Conducteur de travaux', role: 'Témoignage à renseigner' },
      { theme: 'Responsabilité couverte', quote: 'Savoir que le volet sécurité est suivi par quelqu’un dont c’est le métier, et tracé dans les documents, c’est une inquiétude de moins sur une opération.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
    ],
  },
}

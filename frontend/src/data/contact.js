import { missionItems } from '../constants/navigation'

/**
 * Données et configuration de la page de contact.
 *
 * `endpoint` : adresse à laquelle le formulaire enverra la demande. Tant
 * qu'elle vaut null, le formulaire valide la saisie mais n'envoie rien, et le
 * dit au visiteur au lieu de faire semblant. Renseigner cette seule valeur
 * suffit à mettre l'envoi en service.
 *
 * `coordonnees` : chaque entrée dont la valeur vaut null s'affiche comme
 * restant à renseigner. Aucun numéro ni aucune adresse n'est inventé ici —
 * un visiteur pourrait les composer.
 */
export const contact = {
  endpoint: null,

  hero: {
    eyebrow: 'Devis gratuit',
    title: 'Parlons de votre projet',
    lead: 'Décrivez votre opération en quelques lignes. Nous identifions le périmètre de contrôle qu’elle appelle et revenons vers vous avec une proposition chiffrée.',
  },

  coordonnees: [
    { label: 'Téléphone', valeur: null },
    { label: 'Courriel', valeur: null },
    { label: 'Siège', valeur: null },
    { label: 'Horaires', valeur: null },
  ],

  suite: {
    title: 'Ce qui se passe ensuite',
    etapes: [
      'Nous accusons réception et identifions l’agence concernée par votre opération.',
      'Un ingénieur vous rappelle pour préciser le périmètre et les étapes d’intervention.',
      'Vous recevez une proposition chiffrée, détaillant ce qui est couvert et ce qui ne l’est pas.',
    ],
  },

  aide: {
    title: 'Ce qui nous aide à répondre vite',
    points: [
      'La nature de l’ouvrage et sa surface approximative.',
      'Le stade du projet : esquisse, permis déposé, travaux engagés.',
      'La date à laquelle vous avez besoin de notre intervention.',
      'Les contraintes particulières : site occupé, substances à traiter, délais serrés.',
    ],
  },

  champs: {
    besoins: [
      { value: '', label: 'Je ne sais pas encore' },
      ...missionItems.filter((m) => m.slug).map((m) => ({ value: m.slug, label: m.label })),
    ],
    echeances: ['Dès que possible', 'Dans le mois', 'Dans le trimestre', 'Plus tard', 'Non déterminée'],
  },
}

import atout01 from '../../assets/images/common/atout-01.jpg'
import atout02 from '../../assets/images/common/atout-02.jpg'
import atout03 from '../../assets/images/common/atout-03.jpg'
import atout04 from '../../assets/images/common/atout-04.jpg'

/**
 * Blocs repris à l'identique sur toutes les pages mission et compétence.
 * Les modifier ici les met à jour partout.
 */

export const atouts = {
  title: 'Pourquoi nous choisir ?',
  items: [
    { image: atout01, title: 'Taille humaine', text: 'Vous gardez le même interlocuteur du début à la fin. Une équipe qui connaît votre dossier, pas un standard qui le découvre.' },
    { image: atout02, title: 'Expertise', text: 'Des ingénieurs et techniciens formés aux référentiels en vigueur, sur l’ensemble des lots techniques d’un ouvrage.' },
    { image: atout03, title: 'Réactivité', text: 'Une question, un doute sur une disposition, un arbitrage à rendre vite : vous obtenez une réponse utilisable sur le chantier.' },
    { image: atout04, title: 'Proximité', text: 'Des équipes présentes sur le terrain, qui se déplacent et échangent directement avec la maîtrise d’œuvre et les entreprises.' },
  ],
}

export const steps = {
  title: 'Être aux normes, simplement…',
  items: [
    { title: 'Parlez-nous de votre projet', text: 'Typologie d’ouvrage, surface, calendrier, contraintes : quelques informations suffisent pour cadrer le besoin.' },
    { title: 'Nous cadrons la mission', text: 'Nous précisons ensemble le périmètre des contrôles et les étapes d’intervention adaptées à l’opération.' },
    { title: 'Nous intervenons à chaque étape', text: 'Examen des pièces, visites sur site et avis techniques transmis au fil de l’avancement des travaux.' },
    { title: 'Vous recevez vos rapports', text: 'Les rapports réglementaires vous sont remis aux échéances prévues, jusqu’à la mise en service de l’ouvrage.' },
  ],
}

export const testimonialCaption =
  'Témoignages à renseigner — emplacements prêts pour les retours clients BBC.'

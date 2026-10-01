import heroImage from '../../assets/images/competences/immeubles-grande-hauteur/immeubles-grande-hauteur-hero.webp'
import reference01 from '../../assets/images/competences/immeubles-grande-hauteur/reference-01.webp'
import reference02 from '../../assets/images/competences/immeubles-grande-hauteur/reference-02.webp'
import reference03 from '../../assets/images/competences/immeubles-grande-hauteur/reference-03.webp'
import reference04 from '../../assets/images/competences/immeubles-grande-hauteur/reference-04.webp'
import reference05 from '../../assets/images/competences/immeubles-grande-hauteur/reference-05.webp'
import reference06 from '../../assets/images/competences/immeubles-grande-hauteur/reference-06.webp'
import reference07 from '../../assets/images/competences/immeubles-grande-hauteur/reference-07.webp'
import reference08 from '../../assets/images/competences/immeubles-grande-hauteur/reference-08.webp'
import reference09 from '../../assets/images/competences/immeubles-grande-hauteur/reference-09.webp'

/**
 * Contenu de la compétence « Immeubles de grande hauteur ».
 *
 * Angle : ce qui bascule au-delà d'un certain seuil — évacuation différée,
 * intervention des secours par l'intérieur, vent dimensionnant. À ne pas
 * confondre avec la compétence « Sécurité incendie », qui traite la chaîne
 * incendie du bâtiment courant.
 *
 * Textes provisoires. Les seuils de hauteur applicables au Bénin et les
 * agréments de BBC seront précisés par l'entreprise.
 */
export const immeublesGrandeHauteur = {
  slug: 'immeubles-grande-hauteur',

  hero: {
    title: 'Immeubles de grande hauteur',
    lead: 'Au-delà d’un certain seuil, les règles changent de nature — pas seulement d’intensité',
    text: 'Un immeuble de grande hauteur n’est pas un bâtiment ordinaire en plus grand. Passé une certaine cote, l’évacuation générale devient impraticable, les secours ne peuvent plus intervenir depuis l’extérieur, et le vent cesse d’être une charge secondaire. Tout le raisonnement de conception bascule.',
    cta: { label: 'Devis gratuit', to: '/contact' },
    image: { src: heroImage, alt: 'Tour vue en contre-plongée depuis son pied' },
  },

  process: {
    title: 'Trois basculements, qui commandent tout le reste.',
    steps: [
      { title: 'On n’évacue plus tout le monde', text: 'L’évacuation devient différée et partielle : les occupants se replient par niveaux, pas vers la rue.' },
      { title: 'Les secours entrent par l’intérieur', text: 'Colonnes sèches, ascenseurs prioritaires et accès pompiers deviennent des organes de l’ouvrage.' },
      { title: 'Le vent devient dimensionnant', text: 'Il gouverne la stabilité, la tenue des façades et le confort ressenti dans les étages hauts.' },
    ],
  },

  references: {
    eyebrow: 'Nos domaines',
    title: 'Ce que la hauteur impose',
    note: 'Domaines donnés à titre indicatif. Les seuils de hauteur applicables au Bénin seront renseignés à partir des données officielles de BBC.',
    items: [
      { image: reference01, title: 'Façades et murs-rideaux', location: 'Enveloppe', text: 'Tenue au vent, fixations, et comportement des vitrages sur toute la hauteur.' },
      { image: reference02, title: 'Tours de logements', location: 'Évacuation différée', text: 'Mise à l’abri par niveaux, et capacité des escaliers à recevoir les flux successifs.' },
      { image: reference03, title: 'Noyau et circulations verticales', location: 'Ascenseurs', text: 'Encloisonnement, mise en surpression et disponibilité des ascenseurs de secours.' },
      { image: reference04, title: 'Contreventement', location: 'Stabilité', text: 'Reprise des efforts horizontaux et régularité de la géométrie sur l’élévation.' },
      { image: reference05, title: 'Effets du vent en altitude', location: 'Confort', text: 'Accélérations ressenties dans les niveaux hauts et comportement dynamique de l’ouvrage.' },
      { image: reference06, title: 'Compartimentage par niveau', location: 'Propagation', text: 'Étanchéité des planchers, traversées de gaines et recoupement des façades.' },
      { image: reference07, title: 'Chantier en élévation', location: 'Levage', text: 'Grues à ancrage évolutif, protections de rives et acheminement des charges en hauteur.' },
      { image: reference08, title: 'Insertion urbaine', location: 'Accès des secours', text: 'Voies engins, aires de mise en station et distance aux bâtiments voisins.' },
      { image: reference09, title: 'Opérations en cours', location: 'Phasage', text: 'Stabilité de l’ouvrage à chaque étape, avant que le contreventement ne soit complet.' },
    ],
  },

  statement: {
    title: 'Plus c’est haut, plus le temps compte',
    paragraphs: [
      'Au trentième étage, la sortie est à plusieurs minutes de descente — si l’escalier reste praticable, et si chacun peut l’emprunter. Pour une partie des occupants, ce n’est pas le cas.',
      'D’où un principe inverse de celui des bâtiments courants : on ne fait pas sortir, on met à l’abri là où l’on se trouve.',
    ],
    bullets: [
      'Chaque niveau forme un compartiment autonome, capable de tenir seul.',
      'Les escaliers sont encloisonnés, désenfumés et maintenus en surpression.',
      'Des ascenseurs restent utilisables par les secours quand les autres sont neutralisés.',
      'Les réseaux d’extinction montent avec le bâtiment et restent alimentés en toute circonstance.',
    ],
    closing: 'On protège sur place avant de faire descendre.',
  },

  testimonials: {
    eyebrow: 'Ils témoignent',
    items: [
      { theme: 'Un autre raisonnement', quote: 'On a compris que ce n’était pas le même métier. Les réflexes du bâtiment courant ne se transposent pas, ils se remplacent.', author: 'Maître d’ouvrage', role: 'Témoignage à renseigner' },
      { theme: 'Tôt, très tôt', quote: 'La position du noyau et des escaliers se décide au tout début. Après, on ne déplace plus rien sans refaire le projet.', author: 'Architecte', role: 'Témoignage à renseigner' },
      { theme: 'Le vent', quote: 'On pensait au vent pour la structure. On n’avait pas anticipé qu’il déciderait aussi du confort ressenti dans les derniers étages.', author: 'Promoteur immobilier', role: 'Témoignage à renseigner' },
    ],
  },
}

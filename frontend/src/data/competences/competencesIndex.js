import normesImage from '../../assets/images/competences/normes-de-construction/normes-de-construction-hero.webp'
import parasismiqueImage from '../../assets/images/competences/parasismique/parasismique-hero.webp'
import incendieImage from '../../assets/images/competences/securite-incendie/securite-incendie-hero.webp'
import chantierImage from '../../assets/images/competences/securite-sur-chantier/securite-sur-chantier-hero.webp'
import ighImage from '../../assets/images/competences/immeubles-grande-hauteur/immeubles-grande-hauteur-hero.webp'
import thermiqueImage from '../../assets/images/competences/thermique/thermique-hero.webp'
import energieImage from '../../assets/images/competences/performance-energetique/performance-energetique-hero.webp'
import acoustiqueImage from '../../assets/images/competences/acoustique/acoustique-hero.webp'
import electriciteImage from '../../assets/images/competences/electricite/electricite-hero.webp'
import levageImage from '../../assets/images/competences/grues-levage/grues-levage-hero.webp'
import ascenseursImage from '../../assets/images/competences/ascenseurs/ascenseurs-hero.webp'

/**
 * Index des compétences.
 *
 * Cette page n'existe pas sur le site de référence : elle est conçue pour
 * mener aux onze pages sans les noyer dans du texte. La grille réutilise
 * ReferenceGrid avec des cartes cliquables, et son champ d'accent porte ici
 * la famille de la compétence — le regroupement passe sans section en plus.
 */
export const competencesIndex = {
  hero: {
    eyebrow: 'Nos compétences',
    title: 'Les domaines techniques que BBC couvre',
    lead: 'Une mission dit quand nous intervenons et ce que nous remettons. Une compétence dit ce que nous savons examiner. Les onze domaines ci-dessous se combinent différemment selon la nature de votre opération.',
  },

  grid: {
    title: 'Onze domaines, quatre familles',
    note: 'Chaque domaine fait l’objet d’une page détaillant son périmètre, ses points de contrôle et des exemples d’application.',
    items: [
      { image: normesImage, to: '/competences/normes-de-construction', title: 'Normes de construction', location: 'Tenue de l’ouvrage', text: 'Identifier le référentiel applicable et le traduire en dispositions vérifiables.' },
      { image: parasismiqueImage, to: '/competences/parasismique', title: 'Parasismique', location: 'Tenue de l’ouvrage', text: 'Régularité, continuité du chemin des efforts et capacité à se déformer sans rompre.' },
      { image: incendieImage, to: '/competences/securite-incendie', title: 'Sécurité incendie', location: 'Sécurité des personnes', text: 'Contenir le feu, évacuer les occupants, permettre l’intervention des secours.' },
      { image: chantierImage, to: '/competences/securite-sur-chantier', title: 'Sécurité sur chantier', location: 'Sécurité des personnes', text: 'Les familles de risques d’un chantier, de la chute de hauteur aux fouilles.' },
      { image: ighImage, to: '/competences/immeubles-grande-hauteur', title: 'Immeubles de grande hauteur', location: 'Sécurité des personnes', text: 'Ce qui bascule au-delà d’un certain seuil, et qui change de nature plutôt que d’intensité.' },
      { image: thermiqueImage, to: '/competences/thermique', title: 'Thermique', location: 'Confort et performance', text: 'Apports solaires, inertie et ventilation : le confort d’été sous climat chaud.' },
      { image: energieImage, to: '/competences/performance-energetique', title: 'Performance énergétique', location: 'Confort et performance', text: 'Performances tenues sur l’ouvrage fini, et attestations réglementaires sécurisées.' },
      { image: acoustiqueImage, to: '/competences/acoustique', title: 'Acoustique', location: 'Confort et performance', text: 'Isoler entre locaux, corriger à l’intérieur : deux objectifs, deux familles de moyens.' },
      { image: electriciteImage, to: '/competences/electricite', title: 'Électricité', location: 'Équipements techniques', text: 'Protection des personnes, protection de l’ouvrage et exploitabilité de l’installation.' },
      { image: levageImage, to: '/competences/grues-levage', title: 'Grues et moyens de levage', location: 'Équipements techniques', text: 'Implantation, phases de montage et interférences entre appareils.' },
      { image: ascenseursImage, to: '/competences/ascenseurs', title: 'Ascenseurs', location: 'Équipements techniques', text: 'Les seuls équipements du bâtiment qui transportent des personnes.' },
    ],
  },

  sections: [
    {
      title: 'Comment ces domaines s’articulent',
      blocks: [
        { type: 'sub', text: 'Tenue de l’ouvrage' },
        { type: 'p', text: 'Ce qui empêche le bâtiment de se rompre, sous son propre poids comme sous les sollicitations qu’il subira. C’est le socle : aucun autre domaine ne compense une structure insuffisante.' },

        { type: 'sub', text: 'Sécurité des personnes' },
        { type: 'p', text: 'Ce qui protège les occupants, les intervenants et les secours — pendant la construction comme pendant toute la vie de l’ouvrage. Les exigences y sont rarement négociables.' },

        { type: 'sub', text: 'Confort et performance' },
        { type: 'p', text: 'Ce qui rend le bâtiment vivable et économe. Ces trois domaines se contredisent régulièrement entre eux : isoler pour la chaleur n’isole pas du bruit, ventiler perce l’enveloppe. Les arbitrages se prennent ensemble.' },

        { type: 'sub', text: 'Équipements techniques' },
        { type: 'p', text: 'Ce qui est installé dans l’ouvrage et continue de vivre après sa livraison. Ces domaines appellent des vérifications périodiques, bien au-delà de la réception.' },
      ],
    },
    {
      title: 'Compétence ou mission ?',
      blocks: [
        { type: 'p', text: 'Les deux notions se recoupent sans se confondre. Une compétence désigne un domaine d’examen : ce que nos équipes savent regarder. Une mission désigne un engagement contractuel sur une opération : à quel moment nous intervenons, sur quel périmètre, et quels documents nous remettons.' },
        { type: 'p', text: 'Une même mission mobilise plusieurs compétences, et une même compétence sert sur plusieurs missions. Si vous cherchez plutôt ce que nous nous engageons à produire :' },
        { type: 'links', items: [
          { to: '/missions', label: 'Voir les missions', text: 'Les sept missions de BBC, leur déroulé et leurs livrables.' },
          { to: '/contact', label: 'Décrire votre projet', text: 'Nous identifions avec vous les domaines que votre opération appelle.' },
        ] },
      ],
    },
  ],
}

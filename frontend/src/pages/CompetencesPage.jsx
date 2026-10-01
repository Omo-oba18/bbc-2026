import { QuoteTab } from '../components/sections/QuoteTab'
import { ArticleHero } from '../components/sections/ArticleHero'
import { ReferenceGrid } from '../components/sections/ReferenceGrid'
import { ArticleBody } from '../components/sections/ArticleBody'
import { competencesIndex } from '../data/competences/competencesIndex'

/**
 * Index des compétences : un en-tête éditorial, la grille des onze domaines
 * en cartes cliquables, puis le texte qui explique comment ils s'articulent.
 */
export function CompetencesPage() {
  return (
    <>
      <QuoteTab />
      <ArticleHero {...competencesIndex.hero} />
      <ReferenceGrid {...competencesIndex.grid} />
      <ArticleBody sections={competencesIndex.sections} />
    </>
  )
}

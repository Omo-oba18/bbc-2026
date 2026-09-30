import { QuoteTab } from '../components/sections/QuoteTab'
import { ArticleHero } from '../components/sections/ArticleHero'
import { ArticleBody } from '../components/sections/ArticleBody'
import { missionsIndex } from '../data/missions/missionsIndex'

/**
 * Index éditorial des missions. Page de texte : ni grille de références,
 * ni témoignages. Elle compose ses propres sections.
 */
export function MissionsPage() {
  return (
    <>
      <QuoteTab />
      <ArticleHero {...missionsIndex.hero} />
      <ArticleBody sections={missionsIndex.sections} />
    </>
  )
}

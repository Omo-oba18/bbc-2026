import { QuoteTab } from '../components/sections/QuoteTab'
import { ArticleHero } from '../components/sections/ArticleHero'
import { StatementBlock } from '../components/sections/StatementBlock'
import { Timeline } from '../components/sections/Timeline'
import { ArticleBody } from '../components/sections/ArticleBody'
import { histoire } from '../data/groupe/histoire'

/**
 * /groupe/histoire. Sans visuels, comme le reste de la section Groupe :
 * une photo d'archive empruntée raconterait un passé qui n'est pas le nôtre.
 */
export function HistoirePage() {
  return (
    <>
      <QuoteTab />
      <ArticleHero {...histoire.hero} />
      <StatementBlock {...histoire.motivations} />
      <Timeline {...histoire.chronologie} />
      <ArticleBody sections={histoire.sections} />
    </>
  )
}

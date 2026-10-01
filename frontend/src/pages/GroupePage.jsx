import { QuoteTab } from '../components/sections/QuoteTab'
import { ArticleHero } from '../components/sections/ArticleHero'
import { ArticleBody } from '../components/sections/ArticleBody'
import { groupeIndex } from '../data/groupe/groupeIndex'

/**
 * Index du groupe. Page de texte, sans visuels : une photo d'équipe
 * empruntée affirmerait quelque chose de faux.
 */
export function GroupePage() {
  return (
    <>
      <QuoteTab />
      <ArticleHero {...groupeIndex.hero} />
      <ArticleBody sections={groupeIndex.sections} />
    </>
  )
}

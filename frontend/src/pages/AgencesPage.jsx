import { QuoteTab } from '../components/sections/QuoteTab'
import { ArticleHero } from '../components/sections/ArticleHero'
import { ArticleBody } from '../components/sections/ArticleBody'
import { agencesIndex } from '../data/agences/agencesIndex'

/**
 * Index des agences. Page de texte, sans visuels : une photographie légendée
 * du nom d'une ville affirmerait quelque chose d'invérifiable.
 */
export function AgencesPage() {
  return (
    <>
      <QuoteTab />
      <ArticleHero {...agencesIndex.hero} />
      <ArticleBody sections={agencesIndex.sections} />
    </>
  )
}

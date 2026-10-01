import { QuoteTab } from '../components/sections/QuoteTab'
import { ArticleHero } from '../components/sections/ArticleHero'
import { StatusList } from '../components/sections/StatusList'
import { StatementBlock } from '../components/sections/StatementBlock'
import { ArticleBody } from '../components/sections/ArticleBody'
import { agrements } from '../data/groupe/agrements'

/**
 * /groupe/agrements. Les statuts sont volontairement vides : ils seront
 * renseignés depuis le backend. Aucun agrément n'est affirmé par défaut.
 */
export function AgrementsPage() {
  return (
    <>
      <QuoteTab />
      <ArticleHero {...agrements.hero} />
      <StatusList {...agrements.portee} />
      <StatementBlock {...agrements.cadre} />
      <ArticleBody sections={agrements.sections} />
    </>
  )
}

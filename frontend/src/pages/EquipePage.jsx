import { QuoteTab } from '../components/sections/QuoteTab'
import { ArticleHero } from '../components/sections/ArticleHero'
import { RoleGrid } from '../components/sections/RoleGrid'
import { ArticleBody } from '../components/sections/ArticleBody'
import { equipe } from '../data/groupe/equipe'

/**
 * /groupe/equipe. Sans portraits : faute des profils réels, des visages
 * empruntés présenteraient comme nôtres des gens qui ne le sont pas.
 */
export function EquipePage() {
  return (
    <>
      <QuoteTab />
      <ArticleHero {...equipe.hero} />
      <RoleGrid {...equipe.fonctions} />
      <ArticleBody sections={equipe.sections} />
    </>
  )
}

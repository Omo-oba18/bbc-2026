import { QuoteTab } from '../components/sections/QuoteTab'
import { HeroSection } from '../components/sections/HeroSection'
import { ProcessBand } from '../components/sections/ProcessBand'
import { ReferenceGrid } from '../components/sections/ReferenceGrid'
import { StatementBlock } from '../components/sections/StatementBlock'
import { AtoutGrid } from '../components/sections/AtoutGrid'
import { StepGrid } from '../components/sections/StepGrid'
import { evenementiel } from '../data/missions/evenementiel'

/**
 * Cette page ne passe pas par le gabarit ServicePage : elle n'a pas de
 * section témoignages. Elle compose donc ses sections une à une.
 */
export function EvenementielPage() {
  return (
    <>
      <QuoteTab />
      <HeroSection {...evenementiel.hero} />
      <ProcessBand {...evenementiel.process} />
      <ReferenceGrid {...evenementiel.references} />
      <StatementBlock {...evenementiel.statement} />
      <AtoutGrid />
      <StepGrid />
    </>
  )
}

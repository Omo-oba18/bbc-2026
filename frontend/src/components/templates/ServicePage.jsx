import { QuoteTab } from '../sections/QuoteTab'
import { HeroSection } from '../sections/HeroSection'
import { ProcessBand } from '../sections/ProcessBand'
import { ReferenceGrid } from '../sections/ReferenceGrid'
import { StatementBlock } from '../sections/StatementBlock'
import { AtoutGrid } from '../sections/AtoutGrid'
import { TestimonialCarousel } from '../sections/TestimonialCarousel'
import { StepGrid } from '../sections/StepGrid'

/**
 * Agencement type des pages mission et compétence.
 *
 * Ce composant n'assemble que des sections : il ne porte ni balisage ni style.
 * Une page qui n'a pas ces sections, ou pas dans cet ordre, compose directement
 * les composants de components/sections sans passer par ce gabarit.
 *
 * Les blocs AtoutGrid et StepGrid sont identiques sur tout le site : ils vont
 * chercher leur contenu dans data/shared/pageBlocks et ne prennent rien de `page`.
 */
export function ServicePage({ page }) {
  return (
    <>
      <QuoteTab />
      <HeroSection {...page.hero} />
      <ProcessBand {...page.process} />
      <ReferenceGrid {...page.references} />
      <StatementBlock {...page.statement} />
      <AtoutGrid />
      <TestimonialCarousel {...page.testimonials} />
      <StepGrid />
    </>
  )
}

import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionHeading } from './SectionHeading'
import { useReveal } from './useReveal'
import { steps } from '../../data/shared/pageBlocks'
import styles from './StepGrid.module.scss'

/** Bloc « Être aux normes, simplement… » — identique sur tout le site. */
export function StepGrid() {
  const reveal = useReveal()

  return (
    <section className={styles.steps}>
      <Container>
        <SectionHeading title={steps.title} />
        <ol className={styles.stepGrid}>
          {steps.items.map((item, index) => (
            <motion.li key={item.title} className={styles.stepCard} {...reveal(index * 0.05)}>
              <span className={styles.stepNumber}>{index + 1}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

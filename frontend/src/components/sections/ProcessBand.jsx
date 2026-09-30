import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { useReveal } from './useReveal'
import styles from './ProcessBand.module.scss'

export function ProcessBand({ title, steps }) {
  const reveal = useReveal()

  return (
    <section className={styles.process}>
      <Container>
        <h2 className={styles.processTitle}>{title}</h2>
        <ul className={styles.processGrid}>
          {steps.map((step, index) => (
            <motion.li key={step.title} className={styles.processCard} {...reveal(index * 0.06)}>
              <span className={styles.check} aria-hidden="true" />
              <div>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

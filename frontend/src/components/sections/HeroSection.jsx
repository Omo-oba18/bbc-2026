import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Container } from '../layout/Container'
import { useReveal } from './useReveal'
import styles from './HeroSection.module.scss'

export function HeroSection({ title, lead, text, cta, image }) {
  const reveal = useReveal()

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroGrid}>
          <motion.div className={styles.heroCopy} {...reveal()}>
            <h1>{title}</h1>
            <p className={styles.heroLead}>
              <span aria-hidden="true" />
              {lead}
            </p>
            <p className={styles.heroText}>{text}</p>
            <Button to={cta.to}>{cta.label}</Button>
          </motion.div>
          <motion.figure className={styles.heroVisual} {...reveal(0.12)}>
            <img src={image.src} alt={image.alt} width="1240" height="830" />
          </motion.figure>
        </div>
      </Container>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionHeading } from './SectionHeading'
import { useReveal } from './useReveal'
import { atouts } from '../../data/shared/pageBlocks'
import styles from './AtoutGrid.module.scss'

/** Bloc « Pourquoi nous choisir » — identique sur tout le site, son contenu vient de pageBlocks. */
export function AtoutGrid() {
  const reveal = useReveal()

  return (
    <section className={styles.atouts}>
      <Container>
        <SectionHeading title={atouts.title} />
        <ul className={styles.atoutGrid}>
          {atouts.items.map((item, index) => (
            <motion.li key={item.title} className={styles.atoutCard} {...reveal(index * 0.05)}>
              <div className={styles.atoutImage}>
                <img src={item.image} alt="" loading="lazy" width="620" height="440" />
              </div>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

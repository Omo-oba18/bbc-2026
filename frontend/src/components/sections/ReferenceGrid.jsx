import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionHeading } from './SectionHeading'
import { SectionNote } from './SectionNote'
import { useReveal } from './useReveal'
import styles from './ReferenceGrid.module.scss'

export function ReferenceGrid({ eyebrow, title, note, items }) {
  const reveal = useReveal()

  return (
    <section className={styles.references}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ul className={styles.referenceGrid}>
          {items.map((item, index) => (
            <motion.li key={item.title} className={styles.referenceCard} {...reveal((index % 3) * 0.06)}>
              <div className={styles.referenceImage}>
                <img src={item.image} alt="" loading="lazy" width="880" height="620" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className={styles.referenceLocation}>{item.location}</span>
            </motion.li>
          ))}
        </ul>
        {note && <SectionNote>{note}</SectionNote>}
      </Container>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionNote } from './SectionNote'
import { useReveal } from './useReveal'
import styles from './Timeline.module.scss'

/**
 * Chronologie verticale.
 *
 * Un jalon dont la date vaut `null` affiche qu'elle reste à renseigner, au
 * lieu d'une date inventée : même règle que les compteurs de siteData et les
 * coordonnées de contact. Le libellé et le texte du jalon, eux, décrivent une
 * étape que traverse tout bureau de contrôle — ils ne datent rien.
 */
export function Timeline({ title, lead, jalons, note }) {
  const reveal = useReveal()

  return (
    <section className={styles.timeline}>
      <Container>
        <div className={styles.column}>
          <h2 className={styles.title}>{title}</h2>
          {lead && <p className={styles.lead}>{lead}</p>}

          <ol className={styles.rail}>
            {jalons.map((jalon, index) => (
              <motion.li
                key={jalon.title}
                className={[styles.jalon, jalon.date ? '' : styles.pending].join(' ').trim()}
                {...reveal(index * 0.06)}
              >
                <span className={styles.marker} aria-hidden="true" />
                <span className={styles.date}>{jalon.date ?? 'Date à renseigner'}</span>
                <strong className={styles.jalonTitle}>{jalon.title}</strong>
                <p>{jalon.text}</p>
              </motion.li>
            ))}
          </ol>

          {note && <SectionNote>{note}</SectionNote>}
        </div>
      </Container>
    </section>
  )
}

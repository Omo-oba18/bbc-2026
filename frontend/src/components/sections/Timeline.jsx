import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionHeading } from './SectionHeading'
import { SectionNote } from './SectionNote'
import { useReveal } from './useReveal'
import styles from './Timeline.module.scss'

/**
 * Chronologie en grille de cartes : une date en tête, puis l'étape.
 *
 * Un jalon dont la date vaut `null` affiche qu'elle reste à renseigner, au
 * lieu d'une date inventée : même règle que les compteurs de siteData et les
 * coordonnées de contact. Le libellé et le texte du jalon, eux, décrivent une
 * étape que traverse tout bureau de contrôle — ils ne datent rien.
 *
 * Sans visuel dans les cartes : une photo d'archive empruntée illustrerait un
 * passé qui n'est pas le nôtre.
 */
export function Timeline({ eyebrow, title, lead, jalons, note }) {
  const reveal = useReveal()

  return (
    <section className={styles.timeline}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        {lead && <p className={styles.lead}>{lead}</p>}

        <ol className={styles.grid}>
          {jalons.map((jalon, index) => (
            <motion.li
              key={jalon.title}
              className={[styles.card, jalon.date ? '' : styles.pending].join(' ').trim()}
              {...reveal((index % 3) * 0.06)}
            >
              <span className={styles.date}>{jalon.date ?? 'Date à renseigner'}</span>
              <strong className={styles.cardTitle}>{jalon.title}</strong>
              <p>{jalon.text}</p>
            </motion.li>
          ))}
        </ol>

        {note && <SectionNote>{note}</SectionNote>}
      </Container>
    </section>
  )
}

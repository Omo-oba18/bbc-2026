import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { SectionHeading } from './SectionHeading'
import { SectionNote } from './SectionNote'
import { useReveal } from './useReveal'
import styles from './ReferenceGrid.module.scss'

/**
 * Grille d'illustrations : image, titre, texte et mot-clé d'accent.
 *
 * Le champ `location` porte selon la page une ville, un danger encouru ou une
 * famille — c'est un qualificatif, pas forcément un lieu.
 *
 * Une carte dont la donnée fournit `to` devient cliquable : c'est ce qui
 * permet d'utiliser la même grille comme index de pages.
 */
function CardBody({ item }) {
  return (
    <>
      <div className={styles.referenceImage}>
        <img src={item.image} alt="" loading="lazy" width="880" height="620" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      {item.location && <span className={styles.referenceLocation}>{item.location}</span>}
    </>
  )
}

export function ReferenceGrid({ eyebrow, title, note, items }) {
  const reveal = useReveal()

  return (
    <section className={styles.references}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ul className={styles.referenceGrid}>
          {items.map((item, index) => (
            <motion.li key={item.title} className={styles.referenceCard} {...reveal((index % 3) * 0.06)}>
              {item.to ? (
                <Link to={item.to} className={styles.referenceLink}>
                  <CardBody item={item} />
                </Link>
              ) : (
                <CardBody item={item} />
              )}
            </motion.li>
          ))}
        </ul>
        {note && <SectionNote>{note}</SectionNote>}
      </Container>
    </section>
  )
}

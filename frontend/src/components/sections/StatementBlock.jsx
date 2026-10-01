import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { useReveal } from './useReveal'
import styles from './StatementBlock.module.scss'

/**
 * `intro` est facultatif : des puces posées avant le titre, comme sur la page
 * histoire. Absent, le rendu des pages métier ne change pas.
 */
export function StatementBlock({ title, paragraphs = [], bullets, closing, intro }) {
  const reveal = useReveal()

  return (
    <section className={styles.statement}>
      <Container>
        <motion.div className={styles.statementInner} {...reveal()}>
          {intro?.length > 0 && (
            <ul className={`${styles.statementList} ${styles.statementIntro}`}>
              {intro.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          )}
          <h2>{title}</h2>
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          {bullets?.length > 0 && (
            <ul className={styles.statementList}>
              {bullets.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          )}
          {closing && <strong className={styles.statementClosing}>{closing}</strong>}
        </motion.div>
      </Container>
    </section>
  )
}

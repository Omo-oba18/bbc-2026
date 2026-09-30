import { Container } from '../layout/Container'
import styles from './ArticleHero.module.scss'

/** En-tête des pages éditoriales : un titre, éventuellement un chapô. Pas de visuel. */
export function ArticleHero({ eyebrow, title, lead }) {
  return (
    <section className={styles.articleHero}>
      <Container>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
      </Container>
    </section>
  )
}

import { Container } from '../layout/Container'
import styles from './ArticleHero.module.scss'

/**
 * En-tête des pages éditoriales : un titre, éventuellement un chapô. Pas de visuel.
 *
 * `accent` est facultatif : une accroche courte posée à droite du titre, sur
 * les pages qui en demandent une. Absente, le rendu ne change pas d'un iota.
 */
export function ArticleHero({ eyebrow, title, lead, accent }) {
  return (
    <section className={styles.articleHero}>
      <Container>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <div className={accent ? styles.withAccent : undefined}>
          <h1>{title}</h1>
          {accent && <p className={styles.accent}>{accent}</p>}
        </div>
        {lead && <p className={styles.lead}>{lead}</p>}
      </Container>
    </section>
  )
}

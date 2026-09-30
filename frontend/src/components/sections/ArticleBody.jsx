import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import styles from './ArticleBody.module.scss'

/**
 * Corps d'un article : une suite de sections, chacune faite de blocs.
 * Types de blocs : « sub » (intertitre), « p », « list », « links », « note ».
 */
function Block({ block }) {
  switch (block.type) {
    case 'sub':
      return <h3 className={styles.sub}>{block.text}</h3>
    case 'p':
      return <p>{block.text}</p>
    case 'list':
      return (
        <ul className={styles.list}>
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )
    case 'links':
      return (
        <ul className={styles.links}>
          {block.items.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>
                <strong>{item.label}</strong>
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      )
    case 'note':
      return <p className={styles.note}>{block.text}</p>
    default:
      return null
  }
}

export function ArticleBody({ sections }) {
  return (
    <div className={styles.article}>
      <Container>
        <div className={styles.column}>
          {sections.map((section) => (
            <section key={section.title} className={styles.section}>
              <h2>{section.title}</h2>
              {section.blocks.map((block, index) => (
                <Block key={`${block.type}-${index}`} block={block} />
              ))}
            </section>
          ))}
        </div>
      </Container>
    </div>
  )
}

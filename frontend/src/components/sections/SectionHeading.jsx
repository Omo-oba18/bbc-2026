import styles from './SectionHeading.module.scss'

/** Titre centré d'une section, avec son sur-titre optionnel. */
export function SectionHeading({ eyebrow, title }) {
  return (
    <div className={styles.centeredHeading}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      {title && <h2>{title}</h2>}
    </div>
  )
}

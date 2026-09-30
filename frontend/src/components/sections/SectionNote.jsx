import styles from './SectionNote.module.scss'

/** Mention discrète sous une section : données provisoires, emplacements à renseigner. */
export function SectionNote({ children }) {
  return <p className={styles.referenceNote}>{children}</p>
}

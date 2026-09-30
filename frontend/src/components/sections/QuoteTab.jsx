import { Link } from 'react-router-dom'
import styles from './QuoteTab.module.scss'

/** Onglet « Devis gratuit » fixé au bord droit, masqué sous le format bureau. */
export function QuoteTab() {
  return <Link className={styles.quoteTab} to="/contact">Devis gratuit</Link>
}

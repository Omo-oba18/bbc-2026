import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '../layout/Container'
import { SectionHeading } from './SectionHeading'
import { SectionNote } from './SectionNote'
import { useReveal } from './useReveal'
import styles from './StatusList.module.scss'

/**
 * Liste de domaines avec leur statut.
 *
 * Un statut qui vaut `null` s'affiche « À confirmer » et se distingue
 * typographiquement d'un statut renseigné : affirmer une autorisation qu'on
 * ne détient pas n'est pas une approximation, c'est une fausse déclaration.
 * Les valeurs réelles viendront du backend sans rien changer ici.
 */
function Ligne({ item }) {
  return (
    <>
      <span className={styles.corps}>
        <strong>{item.label}</strong>
        <span className={styles.texte}>{item.text}</span>
      </span>
      <span className={item.statut ? styles.statut : `${styles.statut} ${styles.attente}`}>
        {item.statut ?? 'À confirmer'}
      </span>
    </>
  )
}

export function StatusList({ eyebrow, title, lead, items, note }) {
  const reveal = useReveal()

  return (
    <section className={styles.statuts}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        {lead && <p className={styles.lead}>{lead}</p>}

        <ul className={styles.liste}>
          {items.map((item, index) => (
            <motion.li key={item.label} className={styles.ligne} {...reveal(Math.min(index, 5) * 0.04)}>
              {item.to ? (
                <Link to={item.to} className={styles.lien}>
                  <Ligne item={item} />
                </Link>
              ) : (
                <Ligne item={item} />
              )}
            </motion.li>
          ))}
        </ul>

        {note && <SectionNote>{note}</SectionNote>}
      </Container>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionNote } from './SectionNote'
import { useReveal } from './useReveal'
import styles from './RoleGrid.module.scss'

/**
 * Grille de fonctions : qui fait quoi, sans photo ni nom.
 *
 * Une page d'équipe se bâtit d'ordinaire sur des personnes. Faute des
 * profils réels, elle se bâtit ici sur les rôles — ce qui reste exact et
 * reste utile au visiteur, qui veut d'abord savoir à qui il parlera.
 */
export function RoleGrid({ title, lead, roles, note }) {
  const reveal = useReveal()

  return (
    <section className={styles.roles}>
      <Container>
        <div className={styles.column}>
          <h2 className={styles.title}>{title}</h2>
          {lead && <p className={styles.lead}>{lead}</p>}

          <ul className={styles.grid}>
            {roles.map((role, index) => (
              <motion.li key={role.title} className={styles.card} {...reveal((index % 2) * 0.06)}>
                <strong>{role.title}</strong>
                <p>{role.text}</p>
              </motion.li>
            ))}
          </ul>

          {note && <SectionNote>{note}</SectionNote>}
        </div>
      </Container>
    </section>
  )
}

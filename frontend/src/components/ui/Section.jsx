import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '../layout/Container'
import styles from './Section.module.scss'

export function Section({ children, eyebrow, title, description, className = '' }) {
  const shouldReduceMotion = useReducedMotion()
  const content = (
    <Container>
      {(eyebrow || title || description) && (
        <div className={styles.heading}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>
      )}
      {children}
    </Container>
  )

  if (shouldReduceMotion) return <section className={`${styles.section} ${className}`.trim()}>{content}</section>

  return (
    <motion.section
      className={`${styles.section} ${className}`.trim()}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {content}
    </motion.section>
  )
}

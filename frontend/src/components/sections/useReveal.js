import { useReducedMotion } from 'framer-motion'

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

/**
 * Animation d'apparition partagée par toutes les sections.
 * Rend une fonction `reveal(delay)` à étaler sur un composant motion.
 * Respecte prefers-reduced-motion : sans animation, aucune variante n'est posée.
 */
export function useReveal() {
  const reduceMotion = useReducedMotion()

  return (delay = 0) => ({
    initial: reduceMotion ? false : 'hidden',
    whileInView: reduceMotion ? undefined : 'visible',
    viewport: { once: true, amount: 0.18 },
    variants: revealVariants,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  })
}

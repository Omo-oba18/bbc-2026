import { motion, useReducedMotion } from 'framer-motion'

export function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) return <>{children}</>

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

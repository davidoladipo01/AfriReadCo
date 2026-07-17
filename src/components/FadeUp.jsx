import { motion } from 'framer-motion'

/**
 * Reveals content once as it enters the viewport with a restrained upward fade.
 */
function FadeUp({ children, delay = 0, className, as = 'div' }) {
  const MotionComponent = motion[as]

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </MotionComponent>
  )
}

export default FadeUp

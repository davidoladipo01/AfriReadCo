import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

/**
 * Reveals each direct child once in sequence when the container enters view.
 */
function StaggerContainer({ children, className, as = 'div' }) {
  const MotionComponent = motion[as]

  return (
    <MotionComponent
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
          <motion.div variants={itemVariants} key={child.key ?? index}>
            {child}
          </motion.div>
        ))
        : <motion.div variants={itemVariants}>{children}</motion.div>}
    </MotionComponent>
  )
}

export default StaggerContainer

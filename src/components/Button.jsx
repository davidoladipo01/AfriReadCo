import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion.create(Link)

function Button({ to, text = "Sign In", className="btn btn-dark inline-block mt-6 rounded-xl shadow-md button" }) {

    if (to) {
    return (
        <MotionLink to={to} className={className} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
        {text}
        </MotionLink>
    );
  }
  return (
      <motion.button className={className} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
        {text}
      </motion.button>
  )
}

export default Button

// src/components/common/AnimatedSection.jsx

import React from 'react'
import { motion } from 'framer-motion'

export const AnimatedSection = ({ children, id }) => (
  console.log('animatedSection', children, id),
  (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="py-20"
    >
      {children}
    </motion.section>
  )
)

export const AnimatedText = ({ text }) => {
  console.log('animatedText', text)
  return (
    <span>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

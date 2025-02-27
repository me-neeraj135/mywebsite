import React from 'react'
import { motion } from 'framer-motion'

const SkillBar = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm">{skill.level}%</span>
      </div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1 }}
        className="h-2 bg-blue-500 rounded-full"
      />
    </div>
  )
}

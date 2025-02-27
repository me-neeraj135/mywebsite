import React from 'react'
import { motion } from 'framer-motion'
import { Img } from 'react-image'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="rounded-xl overflow-hidden shadow-lg dark:shadow-gray-800"
    >
      <div className="relative h-48">
        <Img
          src={project.url}
          alt={project.name}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-4 bg-white dark:bg-gray-800">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}

export default ProjectCard

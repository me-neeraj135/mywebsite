// src/components/sections/Projects.jsx
import React from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatedSection } from '../common/AnimatedText'
import ProjectCard from '../ui/ProjectCard'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <AnimatedSection id="projects  ">
      <h2 className="text-3xl font-bold mb-12 text-center dark:text-[#1E2939]">
        {t('projects.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8   container mx-auto  px-4 sm:px-6 lg:px-8">
        {t('projects.list', { returnObjects: true }).map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </AnimatedSection>
  )
}

export default Projects

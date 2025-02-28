import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { AnimatedSection, AnimatedText } from '../common/AnimatedText'
import {
  CodeBracketIcon,
  CpuChipIcon,
  ServerIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { useTheme } from '../../context/ThemeContext'
import { LifebuoyIcon } from '@heroicons/react/24/solid'

const SkillBar = ({ name, level, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </motion.div>
  )
}

const SkillTag = ({ name, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm"
    >
      {icon}
      <span className="ml-2 text-gray-700 dark:text-gray-300">{name}</span>
    </motion.div>
  )
}

const Skills = () => {
  const { t } = useTranslation()
  const { darkMode } = useTheme()

  // Get skills category
  const frontEnd = t('skills.categories', { returnObjects: true })?.find(
    (category) => category.name === 'Frontend',
  )
  if (!frontEnd) return null

  const backEnd = t('skills.categories', { returnObjects: true })?.find(
    (category) => category.name === 'Backend',
  )
  if (!backEnd) return null

  const databases = t('skills.categories', { returnObjects: true })?.find(
    (category) => category.name === 'Databases',
  )
  // Check if databases is undefined before rendering
  if (!databases) return null

  const softSkills = t('skills.categories', { returnObjects: true })?.find(
    (category) => category.name === 'Soft-Skills',
  )
  if (!softSkills) return null

  const devOps = t('skills.categories', { returnObjects: true })?.find(
    (category) => category.name === 'DevOps',
  )
  if (!devOps) return null
  return (
    <AnimatedSection id="skills">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-[#1E2939] mb-12 text-center">
          {t('skills.title')}
        </h2>

        <div>
          {/* Technical Skills */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container mx-auto  px-4 sm:px-6 lg:px-8">
            {/* Frontend Skills */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center mb-4">
                  <CpuChipIcon className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {frontEnd.name}
                  </h3>
                </div>

                {/* Skills List - Flex wrap for spacing & new line */}
                <div className="flex flex-wrap gap-3">
                  {frontEnd.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center mb-4">
                  <CpuChipIcon className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {backEnd.name}
                  </h3>
                </div>

                {/* Skills List - Flex wrap for spacing & new line */}
                <div className="flex flex-wrap gap-3">
                  {backEnd.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Databases Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center mb-4">
                  <CpuChipIcon className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {databases.name}
                  </h3>
                </div>

                {/* Skills List - Flex wrap for spacing & new line */}
                <div className="flex flex-wrap gap-3">
                  {databases.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center mb-4">
                  <UserGroupIcon className="w-8 h-8 text-purple-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {softSkills.name}
                  </h3>
                </div>

                {/* Skills List - Flex wrap for spacing & new line */}
                <div className="flex flex-wrap gap-3">
                  {softSkills.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/*  devOps*/}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Skills

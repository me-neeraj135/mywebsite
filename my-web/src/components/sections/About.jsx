// src/components/sections/About.jsx
import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { AnimatedSection, AnimatedText } from '../common/AnimatedText'
import {
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

const technologies = [
  { name: 'React', icon: <CodeBracketIcon className="w-6 h-6" /> },
  { name: 'Node.js', icon: <CommandLineIcon className="w-6 h-6" /> },
  { name: 'AWS', icon: <GlobeAltIcon className="w-6 h-6" /> },
  { name: 'Docker', icon: <CpuChipIcon className="w-6 h-6" /> },
]
const About = () => {
  const { t } = useTranslation()

  console.log(t('about.title'))

  return (
    <AnimatedSection id="about">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-[#1E2939]  mb-12 text-center">
          {t('about.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container mx-auto  px-4 sm:px-6 lg:px-8">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-[#1E2939] ">
              {t('about.description1')}
            </p>
            <p className="text-lg text-gray-600 dark:text-[#1E2939] ">
              {t('about.description2')}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  {tech.icon}
                  <span className="text-gray-700 dark:text-gray-200 font-medium">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills & Experience */}
          <div className="space-y-8">
            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t('about.experienceTitle')}
              </h3>
              <div className="space-y-4">
                {t('about.experiences', { returnObjects: true }).map(
                  (exp, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-blue-500 pl-4"
                    >
                      <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                        {exp.position}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        {exp.duration}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t('about.educationTitle')}
              </h3>
              <div className="space-y-4">
                {t('about.education', { returnObjects: true }).map(
                  (edu, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 dark:text-blue-300">
                            🎓
                          </span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {edu.university}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          {edu.duration}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default About

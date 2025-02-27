import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="flex space-x-2">
      {['en', 'es', 'ar'].map((lang) => (
        <motion.button
          key={lang}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`px-3 py-1 rounded-md ${
            i18n.language === lang
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700'
          }`}
          onClick={() => changeLanguage(lang)}
        >
          {lang.toUpperCase()}
        </motion.button>
      ))}
    </div>
  )
}

export default LanguageSwitcher

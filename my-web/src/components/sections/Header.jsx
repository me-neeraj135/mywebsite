import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ThemeContext } from '../../context/ThemeContext'
import LanguageSwitcher from '../common/LanguageSwitcher'
import ThemeToggle from '../common/ThemeToggle'

const Header = ({ changeLanguage }) => {
  const { t } = useTranslation()
  const { darkMode } = useContext(ThemeContext)

  return (
    <header
      className={`sticky top-0 z-50 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      } shadow-sm`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            {t('header.title')}
          </motion.h1>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher changeLanguage={changeLanguage} />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

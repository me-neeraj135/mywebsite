// src/components/sections/Footer.jsx
import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import {
  GlobeAltIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import SocialIcons from '../common/SocialIcons'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-white font-semibold mb-4">
              {t('footer.aboutTitle')}
            </h3>
            <p className="text-sm mb-4">{t('footer.aboutText')}</p>
            <SocialIcons />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">
              {t('footer.linksTitle')}
            </h3>
            <ul className="space-y-2">
              {t('footer.links', { returnObjects: true }).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-4">
              {t('footer.contactTitle')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                <a
                  href={`mailto:${t('footer.contact.email')}`}
                  className="text-sm hover:text-blue-400"
                >
                  {t('footer.contact.email')}
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2" />
                <a
                  href={`tel:${t('footer.contact.phone')}`}
                  className="text-sm hover:text-blue-400"
                >
                  {t('footer.contact.phone')}
                </a>
              </div>
              <div className="flex items-center">
                <GlobeAltIcon className="w-5 h-5 mr-2" />
                <span className="text-sm">{t('footer.contact.location')}</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-white font-semibold mb-4">
              {t('footer.newsletterTitle')}
            </h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder={t('footer.newsletterPlaceholder')}
                className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                {t('footer.newsletterButton')}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <span className="text-sm">
              © {currentYear} {t('footer.copyright')}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center text-sm hover:text-blue-400 transition-colors"
          >
            <ChevronUpIcon className="w-5 h-5 mr-1" />
            {t('footer.backToTop')}
          </button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

// components/common/ThemeToggle.jsx
import React, { useContext } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
// import ThemeContext from '../../context/ThemeContext'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = () => {
  // const { darkMode, setDarkMode } = useContext(ThemeContext)
  const { darkMode, setDarkMode } = useTheme()

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
    >
      {darkMode ? (
        <SunIcon className="w-6 h-6 text-yellow-400" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-600" />
      )}
    </button>
  )
}
export default ThemeToggle

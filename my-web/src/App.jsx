import React from 'react'

import { AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from '../src/context/ThemeContext'
import { PageWrapper } from './components/layout/PageWrapper'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
// import Experience from './components/sections/Experience'
import ContactForm from './components/sections/Contact'
import Footer from './components/sections/Footer'
function App() {
  return (
    <ThemeProvider>
      <PageWrapper>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* <Experience /> */}
          <ContactForm />
        </main>
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  )
}
export default App

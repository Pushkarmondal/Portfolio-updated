'use client'

import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CustomCursor />
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </motion.div>
  )
}


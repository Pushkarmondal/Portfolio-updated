'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import AnimatedText from './AnimatedText'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <AnimatedText
          text="DevOps & Cloud Engineer"
          className="text-6xl font-bold mb-4"
        />
        <AnimatedText
          text="Transforming ideas into scalable, efficient infrastructure"
          className="text-xl mb-8"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={800}
            offset={-70} // Adjust this value based on your header height
          >
            <motion.button
              className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Explore My Work
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


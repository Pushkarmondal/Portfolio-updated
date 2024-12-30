'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  return (
    <motion.header
      className="bg-black text-white py-4 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          DevOps Portfolio
        </motion.div>
        <ul className="flex space-x-4">
          {['Home', 'Tech Stack', 'Projects', 'Contact'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}


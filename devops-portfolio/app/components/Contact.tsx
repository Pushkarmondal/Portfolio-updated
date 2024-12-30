'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  const contacts = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      link: 'https://www.linkedin.com/in/pushkar-mondal/',
      color: 'hover:text-blue-500',
    },
    {
      name: 'GitHub',
      icon: Github,
      link: 'https://github.com/Pushkarmondal',
      color: 'hover:text-purple-500',
    },
    {
      name: 'Email',
      icon: Mail,
      link: 'mailto:nishitm060@gmail.com',
      color: 'hover:text-red-500',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-black">
      <motion.h2 
        className="text-6xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>
      <motion.div
        className="flex justify-center items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.name}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white transition-colors ${contact.color}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <contact.icon className="w-10 h-10" />
            <span className="sr-only">{contact.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}


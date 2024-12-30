'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const wordAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const words = text.split(' ')

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ staggerChildren: 0.1 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={wordAnimation}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}


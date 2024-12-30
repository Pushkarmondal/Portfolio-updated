'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Globe, FileText } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { useState } from 'react'

const projects = [
  {
    title: 'CRONDA Cleanup Dashboard',
    description: 'A specialized tool for managing AWS S3 buckets efficiently, leveraging AWS S3, Python, Boto3, Flask, and Tailwind CSS.',
    tags: ['AWS S3', 'Python', 'Boto3', 'Flask', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/Pushkarmondal/Cronda',
    },
  },
  {
    title: 'K8s Backup using Velero',
    description: 'Implemented Kubernetes disaster recovery and backup solution using Velero, ensuring data persistence and system reliability.',
    tags: ['Kubernetes', 'Velero', 'Disaster Recovery'],
    links: {
      documentation: 'https://helix-fifth-e92.notion.site/Project-2-Kubernetes-Disaster-Recovery-and-backup-using-Velero-16bcd6945f1080d38cfaf459183eccd8',
    },
  },
  {
    title: 'CI/CD Pipeline Simulation',
    description: 'Interactive simulation demonstrating the flow of code from commit to deployment, showcasing key stages like Build, Test, Scan, Deploy, and Monitoring.',
    tags: ['CI/CD', 'DevOps', 'Automation'],
    links: {
      demo: 'https://niyeqmt0ypwjwch0.vercel.app/',
    },
  },
  {
    title: 'MERN Stack Docker Application',
    description: 'Developed a containerized MERN stack application using Docker and Docker Compose for seamless deployment and scaling.',
    tags: ['Docker', 'MERN', 'MongoDB'],
    links: {
      github: 'https://github.com/Pushkarmondal/MERN_docker-compose',
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <motion.h2 
        className="text-6xl font-bold text-center mb-16 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="rounded-xl overflow-hidden bg-[#1a1a1a] p-6 transform-gpu"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {project.links.github && (
          <motion.a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-[#2a2a2a] px-4 py-2 rounded-lg hover:bg-[#3a3a3a] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View Code
          </motion.a>
        )}
        {project.links.demo && (
          <motion.a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe className="w-5 h-5" />
            Live Demo
          </motion.a>
        )}
        {project.links.documentation && (
          <motion.a
            href={project.links.documentation}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText className="w-5 h-5" />
            Documentation
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}


'use client'

import { motion } from 'framer-motion'
import { FaAws, FaDocker, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiKubernetes, SiTerraform, SiPrometheus, SiGrafana, SiGitlab, SiJenkins, SiArgo, SiHelm } from 'react-icons/si'

const technologies = [
  { name: 'AWS', icon: FaAws },
  { name: 'Terraform', icon: SiTerraform },
  { name: 'Docker', icon: FaDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'Helm', icon: SiHelm },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Prometheus', icon: SiPrometheus },
  { name: 'Grafana', icon: SiGrafana },
  { name: 'GitLab CI/CD', icon: SiGitlab },
  { name: 'Jenkins', icon: SiJenkins },
  { name: 'Argo CD', icon: SiArgo },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-black">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto px-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <tech.icon className="text-6xl mb-2 text-blue-500" />
            <span className="text-lg font-semibold text-white">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


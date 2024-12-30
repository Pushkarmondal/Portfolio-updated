'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    "Built a Full CI/CD Pipeline: I created an automated pipeline using GitHub Actions that took care of everything from building and testing the code to deploying it. This meant fewer manual steps and a lot more time saved for everyone involved.",
    "Infrastructure as Code: Using Terraform, I provisioned infrastructure on AWS. I set up VPCs and ECS clusters and ensured everything was reusable, scalable, and organized for staging and production environments.",
    "Cloud Deployments on AWS ECS Fargate Spot: Deployed containerized applications to AWS ECS Fargate Spot, which not only ensured smooth performance but also significantly cut down costs—always a win!",
    "Containerization: Containerized the apps with Docker, created optimized images, and managed them on Docker Hub for easy access and deployment."
  ]

  return (
    <section id="experience" className="py-20 bg-black">
      <motion.h2 
        className="text-6xl font-bold text-center mb-16 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      <motion.div
        ref={ref}
        className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-white">DevOps Engineer Intern at PearlThoughts </h3>
        <p className="mb-6 text-gray-300">
          During my internship as a DevOps Engineer, I had the opportunity to dive deep into modern DevOps practices and play a key role in improving the team's management of their infrastructure and deployments.
        </p>
        <h4 className="text-xl font-semibold mb-4 text-white">🌟 What I Worked On</h4>
        <ul className="list-disc list-inside space-y-4 text-gray-300">
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {exp}
            </motion.li>
          ))}
        </ul>
        <h4 className="text-xl font-semibold mt-8 mb-4 text-white">Why It Was Awesome</h4>
        <ul className="list-disc list-inside space-y-4 text-gray-300">
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Automated deployments became a breeze—no more worrying about missed steps or downtime during updates.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Costs for running the infrastructure were reduced by about 70% thanks to the smart use of ECS Fargate Spot.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            I got to work closely with developers to make sure everything ran smoothly and met their needs. Collaboration was a big part of the job, and it made the entire process way more efficient.
          </motion.li>
        </ul>
        <motion.p
          className="mt-6 text-gray-300"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          This experience was a huge learning curve, and I loved every bit of it. From troubleshooting Terraform scripts to seeing deployments go live in seconds, it was rewarding to see my work have such a tangible impact.
        </motion.p>
      </motion.div>
    </section>
  )
}


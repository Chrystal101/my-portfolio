'use client'

import { motion } from 'framer-motion'
import { Code, Database, Zap, GraduationCap } from 'lucide-react'

export function About() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I&apos;m a recent graduate with a strong passion for software development and a solid foundation in computer science. 
            I love building applications that solve real-world problems and create meaningful user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">My Journey</h3>
            <p className="text-gray-400 mb-6">
              I recently graduated with a degree in Computer Science, where I developed a strong foundation in 
              algorithms, data structures, and software engineering principles. During my academic journey, 
              I completed several internships that gave me hands-on experience with modern web technologies.
            </p>
            <p className="text-gray-400 mb-6">
              My passion lies in creating user-friendly, performant applications that make a difference. 
              I believe in writing clean, maintainable code and staying up-to-date with the latest 
              technologies and best practices in the industry.
            </p>
            <p className="text-gray-400">
              I&apos;m excited to start my professional career and contribute to innovative projects that 
              challenge me to grow as a software engineer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="text-center p-6 bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h4 className="font-semibold mb-2 text-white">Education</h4>
              <p className="text-sm text-gray-400">
                Computer Science Degree, Strong Academic Foundation
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-900/50 to-green-800/50 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <Code className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h4 className="font-semibold mb-2 text-white">Frontend Development</h4>
              <p className="text-sm text-gray-400">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <Database className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h4 className="font-semibold mb-2 text-white">Backend Development</h4>
              <p className="text-sm text-gray-400">
                Node.js, Express, PostgreSQL, MongoDB
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-900/50 to-orange-800/50 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <Zap className="w-12 h-12 mx-auto mb-4 text-orange-400" />
              <h4 className="font-semibold mb-2 text-white">Internship Experience</h4>
              <p className="text-sm text-gray-400">
                Real-world projects, Team collaboration
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
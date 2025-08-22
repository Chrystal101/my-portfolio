'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 75 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
    ]
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'Node.js', level: 70 },
      { name: 'Express', level: 65 },
      { name: 'PostgreSQL', level: 60 },
      { name: 'MongoDB', level: 55 },
      { name: 'REST APIs', level: 75 },
    ]
  },
  {
    category: 'Academic & Tools',
    items: [
      { name: 'Data Structures', level: 90 },
      { name: 'Algorithms', level: 85 },
      { name: 'Git', level: 80 },
      { name: 'Docker', level: 50 },
      { name: 'Testing', level: 70 },
    ]
  }
]

export function Skills() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Skills & Technologies</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I&apos;ve developed these skills through academic coursework, personal projects, and internship experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: groupIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-6 shadow-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center text-white">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full shadow-lg shadow-blue-500/25"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Academic & Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Object-Oriented Programming', 'Software Engineering', 'Database Design', 'System Design',
              'Machine Learning', 'Computer Networks', 'Operating Systems', 'Web Security',
              'Agile/Scrum', 'Problem Solving', 'Team Collaboration', 'Technical Writing',
              'Python', 'Java', 'C++', 'SQL', 'GraphQL', 'Redux', 'Jest', 'Webpack'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 border border-blue-500/30 rounded-full text-sm font-medium hover:border-blue-400/50 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Academic Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-6 rounded-lg shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <h4 className="font-semibold mb-2 text-white">Dean&apos;s List</h4>
              <p className="text-gray-400 text-sm">
                3 consecutive years for maintaining GPA above 3.8
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 p-6 rounded-lg shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <h4 className="font-semibold mb-2 text-white">Senior Project Award</h4>
              <p className="text-gray-400 text-sm">
                Best capstone project in Computer Science department
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 p-6 rounded-lg shadow-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <h4 className="font-semibold mb-2 text-white">Technical Competitions</h4>
              <p className="text-gray-400 text-sm">
                Participated in hackathons and coding competitions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
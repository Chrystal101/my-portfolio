'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, GraduationCap, Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Tech Company Inc.',
    location: 'San Francisco, CA',
    period: 'Summer 2023',
    description: [
      'Developed full-stack features using React, Node.js, and PostgreSQL',
      'Collaborated with senior developers on a team of 8 engineers',
      'Implemented RESTful APIs and improved application performance by 25%',
      'Participated in code reviews and agile development processes'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Git', 'Jira'],
    type: 'internship'
  },
  {
    title: 'Frontend Development Intern',
    company: 'StartupXYZ',
    location: 'Toronto, ON',
    period: 'Spring 2023',
    description: [
      'Built responsive user interfaces using React and TypeScript',
      'Integrated third-party APIs and implemented state management',
      'Optimized component performance and improved user experience',
      'Worked closely with UX/UI designers to implement pixel-perfect designs'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Figma'],
    type: 'internship'
  },
  {
    title: 'Web Development Intern',
    company: 'Digital Agency',
    location: 'Vancouver, BC',
    period: 'Summer 2022',
    description: [
      'Created responsive websites for various client projects',
      'Implemented modern CSS frameworks and design systems',
      'Collaborated with designers to ensure pixel-perfect implementations',
      'Maintained and improved existing client websites'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'Git'],
    type: 'internship'
  }
]

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of [Your University]',
    location: 'Toronto, ON',
    period: '2020 - 2024',
    gpa: '3.8/4.0',
    description: [
      'Relevant Coursework: Data Structures & Algorithms, Software Engineering, Database Systems',
      'Web Development, Machine Learning, Computer Networks',
      'Senior Project: Built a full-stack e-commerce platform using React and Node.js',
      'Dean\'s List: 3 consecutive years for academic excellence'
    ],
    achievements: ['Dean\'s List', 'Senior Project Award', 'Computer Science Society Member']
  }
]

export function Experience() {
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
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Education & Experience</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey and professional internship experiences that have shaped my software development skills.
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-white"
          >
            <GraduationCap className="w-8 h-8 text-blue-400" />
            Education
          </motion.h3>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-8 rounded-lg mb-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-semibold mb-2 text-white">{edu.degree}</h4>
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <Building size={16} />
                      <span>{edu.school}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-blue-500/25">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold mb-3 text-white">Relevant Coursework & Achievements:</h5>
                  <ul className="space-y-2">
                    {edu.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <motion.span
                      key={achievement}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: achievementIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-blue-900/50 text-blue-300 border border-blue-500/30 rounded-full text-sm hover:border-blue-400/50 transition-all duration-300"
                    >
                      {achievement}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Internship Experience Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-white"
          >
            <Briefcase className="w-8 h-8 text-green-400" />
            Internship Experience
          </motion.h3>

          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex-row gap-8 items-start`}
              >
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 p-6 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-2 text-white">{experience.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <Building size={16} />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                    <ul className="space-y-3 mb-6">
                      {experience.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2"
                        >
                          <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-green-900/50 text-green-300 border border-green-500/30 rounded-full text-sm hover:border-green-400/50 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
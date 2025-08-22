'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe, Award } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform built as my senior capstone project. Features include user authentication, product management, shopping cart, and payment processing with Stripe integration.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    live: 'https://ecommerce-platform.vercel.app',
    featured: true,
    type: 'academic'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built during internship.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    github: 'https://github.com/yourusername/task-manager',
    live: 'https://task-manager.vercel.app',
    featured: true,
    type: 'internship'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather and forecasts using OpenWeatherMap API with beautiful charts and responsive design.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'Chart.js', 'OpenWeatherMap API', 'CSS3'],
    github: 'https://github.com/yourusername/weather-dashboard',
    live: 'https://weather-dashboard.vercel.app',
    featured: false,
    type: 'personal'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and dark mode support.',
    image: '/api/placeholder/400/250',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://your-portfolio.vercel.app',
    featured: false,
    type: 'personal'
  },
  {
    title: 'Blog Platform',
    description: 'A headless CMS blog platform with markdown support, SEO optimization, and admin dashboard for content management.',
    image: '/api/placeholder/400/250',
    technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL', 'Vercel'],
    github: 'https://github.com/yourusername/blog-platform',
    live: 'https://blog-platform.vercel.app',
    featured: false,
    type: 'personal'
  },
  {
    title: 'Data Structures Visualizer',
    description: 'Interactive web application to visualize common data structures and algorithms. Built for educational purposes.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'D3.js', 'TypeScript', 'CSS3'],
    github: 'https://github.com/yourusername/data-structures-viz',
    live: 'https://data-structures-viz.vercel.app',
    featured: false,
    type: 'academic'
  }
]

export function Projects() {
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
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on during my academic journey, internships, and personal learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg shadow-lg overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 ${
                project.featured ? 'ring-2 ring-blue-500/50 shadow-blue-500/25' : ''
              }`}
            >
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                <Globe className="w-16 h-16 text-gray-500" />
                {project.type === 'academic' && (
                  <div className="absolute top-2 right-2">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                )}
                {project.type === 'internship' && (
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 bg-green-900/50 text-green-300 border border-green-500/30 text-xs rounded-full">
                      Internship
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-blue-900/50 text-blue-300 border border-blue-500/30 text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 border border-gray-600/50 text-xs rounded hover:border-gray-500/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 border border-gray-600/50 rounded hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Project Categories</h3>
            <div className="flex justify-center gap-4">
              <span className="flex items-center gap-2 px-4 py-2 bg-yellow-900/50 text-yellow-300 border border-yellow-500/30 rounded-full text-sm">
                <Award size={16} />
                Academic Projects
              </span>
              <span className="px-4 py-2 bg-green-900/50 text-green-300 border border-green-500/30 rounded-full text-sm">
                Internship Projects
              </span>
              <span className="px-4 py-2 bg-blue-900/50 text-blue-300 border border-blue-500/30 rounded-full text-sm">
                Personal Projects
              </span>
            </div>
          </div>
          
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-600 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-800 hover:border-gray-500 transition-all duration-300 shadow-lg"
          >
            <Github size={20} />
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
} 
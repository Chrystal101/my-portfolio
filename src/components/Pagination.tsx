'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function Pagination() {
  const [currentSection, setCurrentSection] = useState(0)
  
  const sections = [
    { id: 'hero', name: 'Hero', color: 'bg-blue-400' },
    { id: 'about', name: 'About', color: 'bg-purple-400' },
    { id: 'skills', name: 'Skills', color: 'bg-cyan-400' },
    { id: 'experience', name: 'Experience', color: 'bg-gray-500' },
    { id: 'projects', name: 'Projects', color: 'bg-gray-600' },
    { id: 'contact', name: 'Contact', color: 'bg-gray-700' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50"
    >
      <div className="flex flex-col gap-4 items-center">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            whileHover={{ scale: 1.2, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group relative"
          >
            {/* Dot */}
            <div
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentSection === index 
                  ? 'bg-white shadow-lg shadow-white/50 scale-125' 
                  : section.color
              }`}
            />
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {section.name}
            </motion.div>
            
            {/* Active indicator line */}
            {currentSection === index && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
} 
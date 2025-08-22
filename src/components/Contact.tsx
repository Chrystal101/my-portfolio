'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, GraduationCap, Briefcase } from 'lucide-react'

export function Contact() {
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
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I&apos;m actively seeking full-time opportunities and excited to discuss how I can contribute to your team!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-400">your.email@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-900/50 to-green-800/50 rounded-lg flex items-center justify-center border border-green-500/20">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-lg flex items-center justify-center border border-purple-500/20">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-gray-400">Toronto, ON, Canada</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-white">Available for:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-2 px-3 py-1 bg-blue-900/50 text-blue-300 border border-blue-500/30 rounded-full text-sm hover:border-blue-400/50 transition-all duration-300">
                  <Briefcase size={14} />
                  Full-time positions
                </span>
                <span className="flex items-center gap-2 px-3 py-1 bg-green-900/50 text-green-300 border border-green-500/30 rounded-full text-sm hover:border-green-400/50 transition-all duration-300">
                  <GraduationCap size={14} />
                  New grad programs
                </span>
                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 border border-purple-500/30 rounded-full text-sm hover:border-purple-400/50 transition-all duration-300">
                  Remote opportunities
                </span>
                <span className="px-3 py-1 bg-orange-900/50 text-orange-300 border border-orange-500/30 rounded-full text-sm hover:border-orange-400/50 transition-all duration-300">
                  Relocation ready
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-white">Interested in:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-600/50 rounded-full text-sm hover:border-gray-500/50 transition-all duration-300">
                  Frontend Development
                </span>
                <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-600/50 rounded-full text-sm hover:border-gray-500/50 transition-all duration-300">
                  Full Stack Development
                </span>
                <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-600/50 rounded-full text-sm hover:border-gray-500/50 transition-all duration-300">
                  React/Next.js
                </span>
                <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-600/50 rounded-full text-sm hover:border-gray-500/50 transition-all duration-300">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-gray-800/50 text-gray-300 border border-gray-600/50 rounded-full text-sm hover:border-gray-500/50 transition-all duration-300">
                  Cloud Technologies
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Job opportunity, collaboration, or question"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300"
                  placeholder="Tell me about the opportunity or how we can work together..."
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
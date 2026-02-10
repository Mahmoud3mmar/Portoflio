'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin, Github, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#222222] text-[#d5d5d5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#aaaaaa] hover:text-[#007ced] transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-3 sm:mb-4">
            Let's Connect
          </h1>
          <p className="text-[#aaaaaa] text-base sm:text-lg leading-relaxed max-w-2xl">
            I'm currently open to discussing new opportunities, creative collaborations, or engineering challenges. 
            My focus remains on building high-performance systems with clean, maintainable architecture.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          {/* Email Card */}
          <motion.a
            href="mailto:mahmoud.ammar560@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block bg-[#333333] border border-[#444444] rounded-lg p-4 sm:p-6 hover:shadow-lg hover:border-[#007ced] transition-all duration-300 group"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-[#444444] rounded-lg group-hover:bg-[#007ced] transition-colors flex-shrink-0">
                <Mail size={20} className="text-[#d5d5d5] sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#aaaaaa] mb-2">Email</h3>
                <p className="text-[#f5f5f5] text-base sm:text-lg font-medium break-words">mahmoud.ammar560@gmail.com</p>
                <p className="text-[#aaaaaa] text-sm mt-2">Send me an email anytime</p>
              </div>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/in/mahmoud-ammar-539713193/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block bg-[#333333] border border-[#444444] rounded-lg p-4 sm:p-6 hover:shadow-lg hover:border-[#007ced] transition-all duration-300 group"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-[#444444] rounded-lg group-hover:bg-[#007ced] transition-colors flex-shrink-0">
                <Linkedin size={20} className="text-[#d5d5d5] sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#aaaaaa] mb-2">LinkedIn</h3>
                <p className="text-[#f5f5f5] text-base sm:text-lg font-medium">Mahmoud Ammar</p>
                <p className="text-[#aaaaaa] text-sm mt-2">Connect with me professionally</p>
              </div>
            </div>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href="https://github.com/Mahmoud3mmar"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="block bg-[#333333] border border-[#444444] rounded-lg p-4 sm:p-6 hover:shadow-lg hover:border-[#007ced] transition-all duration-300 group"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-[#444444] rounded-lg group-hover:bg-[#007ced] transition-colors flex-shrink-0">
                <Github size={20} className="text-[#d5d5d5] sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#aaaaaa] mb-2">GitHub</h3>
                <p className="text-[#f5f5f5] text-base sm:text-lg font-medium">Mahmoud3mmar</p>
                <p className="text-[#aaaaaa] text-sm mt-2">Check out my code and projects</p>
              </div>
            </div>
          </motion.a>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="block bg-[#333333] border border-[#444444] rounded-lg p-4 sm:p-6"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 bg-[#444444] rounded-lg flex-shrink-0">
                <MapPin size={20} className="text-[#d5d5d5] sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#aaaaaa] mb-2">Location</h3>
                <p className="text-[#f5f5f5] text-base sm:text-lg font-medium">Giza, Egypt</p>
                <p className="text-[#aaaaaa] text-sm mt-2">Available for remote opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 sm:pt-12 border-t border-[#444444] text-center"
        >
          <p className="text-[#aaaaaa] text-xs">
            © {new Date().getFullYear()} Mahmoud Ammar. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  )
}

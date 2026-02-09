'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin, Github, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#222222] text-[#d5d5d5]">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
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
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4">
            Let's Connect
          </h1>
          <p className="text-[#aaaaaa] text-lg leading-relaxed max-w-2xl">
            I'm currently open to discussing new opportunities, creative collaborations, or engineering challenges. 
            My focus remains on building high-performance systems with clean, maintainable architecture.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="space-y-6 mb-16">
          {/* Email Card */}
          <motion.a
            href="mailto:mahmoud.ammar560@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block bg-[#333333] border border-[#444444] rounded-lg p-6 hover:shadow-lg hover:border-[#007ced] transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#444444] rounded-lg group-hover:bg-[#007ced] transition-colors">
                <Mail size={24} className="text-[#d5d5d5]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#aaaaaa] mb-2">Email</h3>
                <p className="text-[#f5f5f5] text-lg font-medium">mahmoud.ammar560@gmail.com</p>
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
            className="block bg-[#333333] border border-[#444444] rounded-lg p-6 hover:shadow-lg hover:border-[#007ced] transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#444444] rounded-lg group-hover:bg-[#007ced] transition-colors">
                <Linkedin size={24} className="text-[#d5d5d5]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#aaaaaa] mb-2">LinkedIn</h3>
                <p className="text-[#f5f5f5] text-lg font-medium">Mahmoud Ammar</p>
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
            className="block bg-[#333333] border border-[#444444] rounded-lg p-6 hover:shadow-lg hover:border-[#007ced] transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#444444] rounded-lg group-hover:bg-[#007ced] transition-colors">
                <Github size={24} className="text-[#d5d5d5]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#aaaaaa] mb-2">GitHub</h3>
                <p className="text-[#f5f5f5] text-lg font-medium">Mahmoud3mmar</p>
                <p className="text-[#aaaaaa] text-sm mt-2">Check out my code and projects</p>
              </div>
            </div>
          </motion.a>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="block bg-[#333333] border border-[#444444] rounded-lg p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#444444] rounded-lg">
                <MapPin size={24} className="text-[#d5d5d5]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#aaaaaa] mb-2">Location</h3>
                <p className="text-[#f5f5f5] text-lg font-medium">Giza, Egypt</p>
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
          className="pt-12 border-t border-[#444444] text-center"
        >
          <p className="text-[#aaaaaa] text-xs">
            © {new Date().getFullYear()} Mahmoud Ammar. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  )
}

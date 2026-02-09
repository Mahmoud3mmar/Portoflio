'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const DigitalResumeHomeStyled = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Name and Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
              Mahmoud Ammar
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-medium">
              Backend Software Engineer
            </p>
          </motion.div>

          {/* Value Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed"
          >
            Backend Engineer crafting scalable systems using Domain-Driven Design, Repository pattern, and Clean Architecture. I deliver production-grade backends across race management, booking, nutrition, and ed-tech domains.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('about')}
              className="text-lg px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white"
            >
              View Profile
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('/MahmoudAmmar-Resume.pdf', '_blank')}
              className="text-lg px-8 py-3 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center gap-6 text-slate-600 dark:text-slate-400"
          >
            <a
              href="https://github.com/Mahmoud3mmar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud-ammar-539713193/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:mahmoud.ammar560@gmail.com"
              className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default DigitalResumeHomeStyled

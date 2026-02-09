'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin, MapPin, Calendar, Briefcase } from 'lucide-react'

const Profile = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const rotatingTexts = ['Software Engineer', 'Backend Developer']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-6 bg-[#222222] text-[#d5d5d5]">
      <div className="max-w-[1320px] w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20"
        >
          {/* Profile Photo Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full max-w-[440px] flex justify-center"
          >
            <div className="relative w-[340px] h-[340px] lg:w-[410px] lg:h-[410px] rounded-[1000px] border-[17.6px] border-[#444444] shadow-[0_0_25px_0_rgba(0,0,0,0.8)] overflow-hidden bg-[#444444]">
              <div 
                className="absolute inset-[-18px] bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/profile.jpg')" }}
              />
            </div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full max-w-[616px] text-left"
          >
            <div className="pl-0 md:pl-6">
              {/* Animated Text Rotation */}
              <div className="h-[29px] mb-2">
                <motion.h4 
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#aaaaaa] text-base font-light"
                >
                  {rotatingTexts[currentTextIndex]}
                </motion.h4>
              </div>

              {/* Name */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-[#f5f5f5] text-5xl lg:text-[48px] font-semibold leading-tight mb-5"
              >
                Mahmoud Ammar
              </motion.h1>

              {/* Bio */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-[#d5d5d5] text-sm leading-[24.5px] max-w-[561px] mb-8"
              >
                Software Engineer focused on building scalable, reliable systems using Domain-Driven Design, Repository pattern, and Clean Architecture. I deliver production-grade backends across race management, booking, nutrition, and ed-tech domains.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <button 
                  onClick={() => window.open('/MahmoudAmmar-Resume.pdf', '_blank')}
                  className="inline-block px-[29.4px] py-[11.2px] bg-[#333333] text-white text-sm border-[1.6px] border-[#007ced] rounded-[30px] shadow-[0_10px_10px_-8px_rgba(0,0,0,0.78)] hover:bg-[#007ced] transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={16} />
                  Download CV
                </button>
                <a href="/contact" className="inline-block px-[29.4px] py-[11.2px] bg-[#333333] text-white text-sm border-[1.6px] border-[#d5d5d5] rounded-[30px] shadow-[0_10px_10px_-8px_rgba(0,0,0,0.78)] hover:bg-[#d5d5d5] hover:text-[#222222] transition-all duration-300 flex items-center gap-2">
                  <Mail size={16} />
                  Contact
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="mt-6 flex gap-4"
              >
                <a 
                  href="https://github.com/Mahmoud3mmar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-[#333333] rounded-full hover:bg-[#007ced] transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mahmoud-ammar-539713193/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-[#333333] rounded-full hover:bg-[#007ced] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:mahmoud.ammar560@gmail.com"
                  className="p-2 bg-[#333333] rounded-full hover:bg-[#007ced] transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </motion.div>

              {/* Additional Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-4 text-sm text-[#aaaaaa]"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Giza, Egypt</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={16} />
                  <span>Available for hire</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>2+ years experience</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Profile

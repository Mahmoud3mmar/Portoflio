'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'

const ResumeFooter = () => {
  const contactInfo = {
    email: 'mahmoud.ammar560@gmail.com',
    phone: '+1 (555) 123-4567',
    location: 'Giza, Egypt',
    github: 'https://github.com/Mahmoud3mmar',
    linkedin: 'https://www.linkedin.com/in/mahmoud-ammar-539713193/'
  }

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={20} />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={20} />
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Connect With Me
            </h3>
            <div className="flex flex-col space-y-4">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover:text-primary transition-all duration-200 group"
              >
                <Github size={20} className="group-hover:rotate-12 transition-transform" />
                <span>GitHub</span>
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover:text-primary transition-all duration-200 group"
              >
                <Linkedin size={20} className="group-hover:rotate-12 transition-transform" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <p className="text-foreground font-medium mb-2">
                Let's build something great together
              </p>
              <p className="text-muted-foreground text-sm">
                Available for freelance opportunities and interesting projects
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t text-center"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mahmoud Ammar. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default ResumeFooter

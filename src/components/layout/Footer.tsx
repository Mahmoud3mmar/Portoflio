import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ]

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-6 mb-4"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-muted-foreground"
          >
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

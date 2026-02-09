'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Problem-solving engineer with a passion for building impactful solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border rounded-lg p-8">
            <p className="text-foreground leading-relaxed text-lg">
              I'm a software engineer who focuses on creating reliable, scalable products with clean code. 
              My approach combines technical excellence with practical problem-solving to deliver solutions that make a real impact. 
              I thrive on challenges that require deep thinking and innovative approaches.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Engineering Mindset</h4>
                <p className="text-muted-foreground">Systematic approach to complex problems</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Impact Driven</h4>
                <p className="text-muted-foreground">Focus on results and user value</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Continuous Learning</h4>
                <p className="text-muted-foreground">Always evolving with technology</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const TechnicalExperience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      location: 'Giza, Egypt',
      period: '2022 - Present',
      achievements: [
        'Led development of microservices architecture serving 1M+ users',
        'Reduced API response time by 40% through optimization',
        'Mentored team of 5 junior developers'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      achievements: [
        'Built and launched 3 major products from scratch',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Collaborated with cross-functional teams to deliver features'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven track record of delivering impactful solutions and driving technical excellence
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-1">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalExperience

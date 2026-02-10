'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Calendar } from 'lucide-react'

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  achievements: string[]
  index: number
  companyLogo?: string
}

const ExperienceCard = ({ title, company, period, achievements, index, companyLogo }: ExperienceCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()
  const isEven = index % 2 === 0

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isInView, controls])

  const variants = {
    hidden: {
      x: isEven ? -100 : 100,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: index * 0.15
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="group relative bg-[#333333] border border-[#444444] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex flex-col md:flex-row md:justify-between mb-2">
        <h3 className="text-lg font-bold text-[#f5f5f5]">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-[#aaaaaa]">
          <Calendar size={16} />
          <span>{period}</span>
        </div>
      </div>
      <div className="flex items-center gap-3 mb-4">
        {companyLogo && (
          <img 
            src={companyLogo} 
            alt={`${company} logo`} 
            className="w-8 h-8 object-contain"
          />
        )}
        <p className="text-md font-medium text-[#007ced] italic">{company}</p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#444444]"></div>
        <ul className="list-none space-y-3 text-[#aaaaaa] leading-relaxed ml-6">
          {achievements.map((achievement, achIndex) => (
            <li key={achIndex} className="flex gap-3">
              <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0 relative z-10"></span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default ExperienceCard

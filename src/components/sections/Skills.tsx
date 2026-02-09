'use client'

import { motion } from 'framer-motion'
import { 
  Database, 
  Cloud, 
  Code, 
  Palette, 
  Server, 
  Globe, 
  Cpu, 
  Terminal, 
  GitBranch,
  Layers,
  Wrench
} from 'lucide-react'

const Skills = () => {
  const skills = {
    backend: [
      { name: 'Node.js', icon: Server },
      { name: 'Python', icon: Code },
      { name: 'PostgreSQL', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'Redis', icon: Database }
    ],
    frontend: [
      { name: 'React', icon: Layers },
      { name: 'Next.js', icon: Globe },
      { name: 'TypeScript', icon: Code },
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'Vue.js', icon: Globe }
    ],
    databases: [
      { name: 'PostgreSQL', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'Redis', icon: Database },
      { name: 'MySQL', icon: Database }
    ],
    cloud: [
      { name: 'AWS', icon: Cloud },
      { name: 'Vercel', icon: Cloud },
      { name: 'Docker', icon: Cpu },
      { name: 'Kubernetes', icon: Server }
    ],
    tools: [
      { name: 'Git', icon: GitBranch },
      { name: 'VS Code', icon: Code },
      { name: 'Figma', icon: Palette },
      { name: 'Postman', icon: Terminal }
    ]
  }

  type SkillItem = { name: string; icon: any }

  const SkillCategory = ({ title, skills, icon: Icon }: { title: string; skills: SkillItem[]; icon: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => {
          const SkillIcon = skill.icon
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card border rounded-lg p-4 text-center hover:shadow-md transition-all duration-200"
            >
              <SkillIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies I work with to build modern applications
          </p>
        </motion.div>

        <div className="space-y-16">
          <SkillCategory title="Backend" skills={skills.backend} icon={Server} />
          <SkillCategory title="Frontend" skills={skills.frontend} icon={Layers} />
          <SkillCategory title="Databases" skills={skills.databases} icon={Database} />
          <SkillCategory title="Cloud & DevOps" skills={skills.cloud} icon={Cloud} />
          <SkillCategory title="Tools" skills={skills.tools} icon={Wrench} />
        </div>
      </div> 
    </section>
  )
}

export default Skills

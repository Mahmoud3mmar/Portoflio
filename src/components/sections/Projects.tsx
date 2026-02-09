'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      githubUrl: 'https://github.com/yourusername/taskmanager',
      liveUrl: 'https://taskmanager-demo.com',
      featured: false
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with advanced analytics',
      tech: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com/yourusername/analytics',
      liveUrl: 'https://analytics-demo.com',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Applications I've built to solve real-world problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              {/* Project Preview */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative">
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                <div className="flex items-center justify-center h-full">
                  <Eye className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

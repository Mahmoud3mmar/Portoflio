'use client'

import { useEffect, useRef } from 'react'
import Profile from '@/components/sections/Profile'
import ExperienceCard from '@/components/sections/ExperienceCard'

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-5')
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 }
    )

    const animatedElements = document.querySelectorAll('[data-animation-on-scroll]')
    animatedElements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-5')
      el.classList.add('transition-all', 'duration-700', 'ease-out')
      observerRef.current?.observe(el)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])
  return (
    <div className="min-h-screen bg-[#222222] text-[#d5d5d5] transition-colors duration-200 font-display overflow-x-hidden">
      <Profile />
      
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 lg:py-24">
        <header className="mb-16 border-b border-[#444444] pb-8 relative" data-animation-on-scroll="">
          <div className="flex flex-wrap gap-4 text-sm font-medium justify-center">
            <div className="relative">
              <a className="flex items-center gap-1 hover:text-[#007ced] transition-colors text-[#aaaaaa]" href="/experience">
                <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: 'FILL 0, wght 400, GRAD 0, opsz 24', display: 'inline-block', lineHeight: 1}}>work</span>
                Projects
              </a>
              {/* Glowing Hand-Drawn Arrow Indicator */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none w-max">
                <span className="text-[#007ced] text-[11px] font-bold uppercase tracking-[0.2em] mb-1 whitespace-nowrap glow-text" style={{
                  animation: 'glow 2s ease-in-out infinite',
                  textShadow: '0 0 10px rgba(0, 124, 237, 0.8), 0 0 20px rgba(0, 124, 237, 0.4)'
                }}>
                  Latest Projects
                </span>
                <svg 
                  width="40" 
                  height="35" 
                  viewBox="0 0 40 35"
                  className="glow-arrow -ml-1"
                  style={{
                    filter: 'drop-shadow(0 0 4px rgba(0, 124, 237, 0.6)) drop-shadow(0 0 8px rgba(0, 124, 237, 0.3))',
                    animation: 'arrowBounce 2s ease-in-out infinite'
                  }}
                >
                  {/* Hand-drawn style curved arrow */}
                  <defs>
                    <marker
                      id="arrowhead-glow"
                      markerWidth="8"
                      markerHeight="8"
                      refX="7"
                      refY="4"
                      orient="auto"
                    >
                      <path d="M 0 1 L 8 4 L 0 7 L 2 4 Z" fill="#007ced" />
                    </marker>
                  </defs>
                  {/* Curved hand-drawn arrow path pointing down */}
                  <path
                    d="M 18 3 Q 20 10, 20 18 Q 20 25, 20 30"
                    stroke="#007ced"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead-glow)"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: '60',
                      strokeDashoffset: '60',
                      animation: 'drawArrow 3s ease-in-out infinite'
                    }}
                  />
                </svg>
              </div>
            </div>
            <a className="flex items-center gap-1 hover:text-[#007ced] transition-colors text-[#aaaaaa]" href="https://github.com/Mahmoud3mmar" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: 'FILL 0, wght 400, GRAD 0, opsz 24', display: 'inline-block', lineHeight: 1}}>code</span>
              GitHub
            </a>
            <a className="flex items-center gap-1 hover:text-[#007ced] transition-colors text-[#aaaaaa]" href="https://www.linkedin.com/in/mahmoud-ammar-539713193/" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: 'FILL 0, wght 400, GRAD 0, opsz 24', display: 'inline-block', lineHeight: 1}}>link</span>
              LinkedIn
            </a>
            <a className="flex items-center gap-1 hover:text-[#007ced] transition-colors text-[#aaaaaa]" href="mailto:mahmoud.ammar560@gmail.com">
              <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: 'FILL 0, wght 400, GRAD 0, opsz 24', display: 'inline-block', lineHeight: 1}}>mail</span>
              Email
            </a>
          </div>
        </header>

        <style jsx>{`
          @keyframes glow {
            0%, 100% {
              opacity: 0.8;
              text-shadow: 0 0 10px rgba(0, 124, 237, 0.8), 0 0 20px rgba(0, 124, 237, 0.4);
            }
            50% {
              opacity: 1;
              text-shadow: 0 0 15px rgba(0, 124, 237, 1), 0 0 30px rgba(0, 124, 237, 0.6), 0 0 40px rgba(0, 124, 237, 0.3);
            }
          }
          
          @keyframes arrowBounce {
            0%, 100% {
              transform: translateY(0);
              filter: drop-shadow(0 0 4px rgba(0, 124, 237, 0.6)) drop-shadow(0 0 8px rgba(0, 124, 237, 0.3));
            }
            50% {
              transform: translateY(3px);
              filter: drop-shadow(0 0 6px rgba(0, 124, 237, 0.8)) drop-shadow(0 0 12px rgba(0, 124, 237, 0.5)) drop-shadow(0 0 20px rgba(0, 124, 237, 0.3));
            }
          }
          
          @keyframes drawArrow {
            0% {
              stroke-dashoffset: 60;
              opacity: 0.3;
            }
            50% {
              stroke-dashoffset: 0;
              opacity: 1;
            }
            100% {
              stroke-dashoffset: 60;
              opacity: 0.3;
            }
          }
        `}</style>

        <main className="space-y-16">
          <section className="space-y-4 pb-16 border-b border-[#444444]" data-animation-on-scroll="">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#aaaaaa]">Education</h2>
            <div className="bg-[#333333] border border-[#444444] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-lg font-bold text-[#f5f5f5]">Bachelor of Science in Computer Science</h3>
                <div className="flex items-center gap-2 text-sm text-[#aaaaaa]">
                  <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: 'FILL 0, wght 400, GRAD 0, opsz 24', display: 'inline-block', lineHeight: 1}}>calendar_today</span>
                  <span>2019 — 2023</span>
                </div>
              </div>
              <p className="text-md font-medium text-[#007ced] mb-4 italic">MSA UNIVERSITY</p>
              <div className="space-y-4 text-[#d5d5d5] leading-relaxed">
                <div>
                  <p className="font-medium mb-2 text-[#f5f5f5]">Dual Degree Program: UK (Greenwich) and Egypt Campus</p>
                </div>
                <div>
                  <p className="font-medium mb-2 text-[#f5f5f5]">Graduation Project: Enhancing Accessibility in Audiobooks through Voice Cloning Technology</p>
                  <p className="text-sm text-[#aaaaaa]">Grade: A</p>
                </div>
                <div>
                  <ul className="list-none space-y-2 text-sm ml-4 text-[#d5d5d5]">
                    <li className="flex gap-3">
                      <span className="text-[#d5d5d5] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#444444] shrink-0"></span>
                      Implemented a machine learning solution aimed at enhancing accessibility for audiobook narrators through voice cloning technology
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#d5d5d5] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#444444] shrink-0"></span>
                      Achieved a distinguished Mean Opinion Score (MOS) of 4.2 out of 5, offering significant time savings of up to 70% for content creation endeavors
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#d5d5d5] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#444444] shrink-0"></span>
                      Published academic paper under IEEE provision at ICCI24 conference
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

            <section className="space-y-8 pb-16 border-b border-[#444444]" data-animation-on-scroll="">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#aaaaaa]">Experience</h2>
              <div className="space-y-12">
                <ExperienceCard
                  index={0}
                  title="Backend Software Engineer"
                  company="APES Solutions"
                  period="Jan 2025 — Present"
                  companyLogo="/assets/companies/apessolutions.jpg"
                  achievements={[
                    "Implemented advanced architectural patterns including Domain-Driven Design (DDD), Repository pattern, and Clean Architecture across multiple projects, resulting in maintainable, clean, and testable codebases",
                    "Collaborated with frontend, DevOps, and product teams to deliver end-to-end solutions, participated in code reviews, and upheld high code quality standards",
                    "Developed and maintained scalable backend systems for production applications including race management platforms, nutrition systems, and booking platforms"
                  ]}
                />
                <ExperienceCard
                  index={1}
                  title="Backend Developer"
                  company="XpertCoder Software Solutions"
                  period="Jul 2024 — Jun 2025"
                  companyLogo="/assets/companies/XpertSoftware.jpg"
                  achievements={[
                    "Proposed technical solutions for complex business challenges",
                    "Collaborated with product teams to translate business requirements into technical specifications, delivering custom solutions that exceeded expectations and deadlines",
                    "Developed custom reporting and analytics modules that provided clients with actionable insights"
                  ]}
                />
                <ExperienceCard
                  index={2}
                  title="Backend Developer"
                  company="Tecno Blocks"
                  period="Jan 2024 — Jun 2024"
                  companyLogo="/assets/companies/technoblock.jpg"
                  achievements={[
                    "Developed and maintained robust backend infrastructures for diverse web applications",
                    "Collaborated with stakeholders to analyze business requirements and deliver tailored technical solutions aligned with client objectives",
                    "Coordinated with frontend developers and project managers to ensure seamless integration and successful delivery"
                  ]}
                />
                <ExperienceCard
                  index={3}
                  title="Backend Developer (Internship)"
                  company="ROUTE"
                  period="Nov 2023 — Mar 2024"
                  companyLogo="/assets/companies/route.jpg"
                  achievements={[
                    "Applied theoretical knowledge to practical development by contributing to innovative software solutions",
                    "Collaborated with senior developers to understand enterprise-level workflows and methodologies"
                  ]}
                />
                <ExperienceCard
                  index={4}
                  title="IT Intern"
                  company="E-finance"
                  period="Sep 2022 — Oct 2022"
                  companyLogo="/assets/companies/efinance.jpg"
                  achievements={[
                    "Completed intensive fintech training at E-Finance, gaining comprehensive insights into IT operations and cloud infrastructure management",
                    "Contributed to innovative solutions that enhanced user experience and streamlined business operations"
                  ]}
                />
              </div>
            </section>

            <section className="space-y-8 pb-16" data-animation-on-scroll="">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#aaaaaa]">Technical Proficiency</h2>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-sm mb-3 text-[#f5f5f5]">Languages & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">JavaScript</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">TypeScript</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">Python</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">Node.js</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">Express</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">Nest.js</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">React</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">RESTful APIs</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">GraphQL</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">TanStack Query</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">React Hook Form</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">Zod</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">Redux</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-sm mb-3 text-[#f5f5f5]">Databases & ORM</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">SQL</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">PostgreSQL</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">Sequelize</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">TypeORM</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">NoSQL</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">Mongoose</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">Redis</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-sm mb-3 text-[#f5f5f5]">DevOps & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">Docker</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">CI/CD</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">S3</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">GitHub</span>
                    <span className="px-3 py-1 bg-[#333333] text-[#d5d5d5] rounded-full text-xs font-medium border border-[#444444]">Jest</span>
                  </div>
                </div>
              </div>
            </section>

            <footer className="pt-16 border-t border-[#444444] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#aaaaaa] font-medium" data-animation-on-scroll="">
              <p className="text-[#aaaaaa]">© {new Date().getFullYear()} Mahmoud Ammar. All rights reserved.</p>
              <div className="flex gap-4">
                <a className="hover:text-[#007ced] transition-colors text-[#aaaaaa]" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Back to Top</a>
                <span className="text-[#aaaaaa]">•</span>
                <span className="text-[#aaaaaa]">Giza, Egypt</span>
              </div>
            </footer>
        </main>
      </div>
    </div>
  )
}

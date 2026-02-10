'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Experience() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [activeCarousel, setActiveCarousel] = useState<{[key: string]: number}>({
    'cairo-runners': 0,
    'spark-booking': 0,
    'slash': 0,
    'plan-b': 0
  })
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [imageLoading, setImageLoading] = useState<{[key: string]: boolean}>({})

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    document.body.style.overflow = 'auto'
  }

  const scrollToImage = (carouselId: string, index: number) => {
    const carousel = document.getElementById(`carousel-${carouselId}`)
    if (carousel) {
      const isMobile = window.innerWidth < 640
      const imageWidth = isMobile ? 280 : 450 // Responsive width
      const gap = isMobile ? 12 : 16
      carousel.scrollTo({
        left: index * (imageWidth + gap),
        behavior: 'smooth'
      })
      setActiveCarousel(prev => ({ ...prev, [carouselId]: index }))
    }
  }

  const nextImage = (carouselId: string, totalImages: number) => {
    const currentIndex = activeCarousel[carouselId] || 0
    const nextIndex = (currentIndex + 1) % totalImages
    scrollToImage(carouselId, nextIndex)
  }

  const prevImage = (carouselId: string, totalImages: number) => {
    const currentIndex = activeCarousel[carouselId] || 0
    const prevIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1
    scrollToImage(carouselId, prevIndex)
  }

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add staggered delay based on index
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100')
              entry.target.classList.remove('opacity-0', 'translate-y-8', 'scale-95')
            }, index * 100) // 100ms delay between each element
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const animatedElements = document.querySelectorAll('[data-animation-on-scroll]')
    animatedElements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-8', 'scale-95')
      el.classList.add('transition-all', 'duration-700', 'ease-out')
      observerRef.current?.observe(el)
    })

    const scrollContainer = document.querySelector('.custom-scrollbar')
    if (scrollContainer) {
      const handleWheel = (evt: Event) => {
        const wheelEvent = evt as WheelEvent
        if (wheelEvent.deltaY !== 0) {
          evt.preventDefault()
          ;(scrollContainer as HTMLElement).scrollLeft += wheelEvent.deltaY
        }
      }
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <div className="bg-[#222222] text-[#d5d5d5] font-display min-h-screen w-full overflow-x-hidden">
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-[#007ced] transition-all duration-300 p-2 hover:scale-110 hover:rotate-90 z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-7xl max-h-[90vh] overflow-auto animate-scaleIn">
            <img 
              src={lightboxImage} 
              alt="Full size preview" 
              className="w-full h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <main className="w-full">
        <div className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-40" id="experience-fragment">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6" data-animation-on-scroll="">
              <a className="text-[#aaaaaa] text-xs sm:text-sm font-medium hover:text-[#007ced] transition-colors" href="/">Portfolio</a>
              <span className="material-symbols-outlined text-xs sm:text-sm text-[#444444]" style={{fontVariationSettings: 'FILL 0, wght 400, GRAD 0, opsz 24', display: 'inline-block', lineHeight: 1}}>chevron_right</span>
              <span className="text-[#d5d5d5] text-xs sm:text-sm font-medium">Projects</span>
            </div>

            {/* Title */}
            <div className="mb-8 sm:mb-12 border-b border-[#444444] pb-6 sm:pb-8" data-animation-on-scroll="">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4 text-[#f5f5f5]">Featured Projects</h1>
              <p className="text-[#aaaaaa] text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                A showcase of technical projects demonstrating backend architecture, system design, and engineering excellence.
              </p>
            </div>

            {/* Experience Timeline */}
            <section className="space-y-8 sm:space-y-12 md:space-y-16">
              {/* Cairo Runners Project */}
              <div className="flex flex-col sm:grid sm:grid-cols-[40px_1fr] gap-4 sm:gap-x-6 group hover:translate-x-2 transition-all duration-500" data-animation-on-scroll="">
                <div className="flex flex-col items-center">
                  <div className="bg-[#007ced] text-white p-2 rounded-full group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#007ced]/50 transition-all duration-300">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: 'FILL 0, wght 400, GRAD 0, opsz 24', display: 'inline-block', lineHeight: 1}}>directions_run</span>
                  </div>
                  <div className="w-[1px] bg-[#444444] grow mt-2"></div>
                </div>
                <div className="pb-4">
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f5f5f5]">Cairo Runners - Race Management Platform</h3>
                    <span className="text-[#007ced] text-xs font-bold uppercase tracking-wider px-2 py-1 bg-[#007ced]/10 rounded">[Production]</span>
                  </div>
                  <p className="text-[#007ced] font-semibold mb-4 text-sm uppercase tracking-wider">Race & Event Management System</p>
                  <div className="text-[#d5d5d5] space-y-4 mb-6 leading-relaxed max-w-3xl">
                    <p>A comprehensive race and event management system designed for organizing running events, marathons, and athletic competitions.</p>
                    <ul className="list-none space-y-2 text-xs sm:text-sm">
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Race Management:</strong> Complete race lifecycle management including event creation, scheduling, location tracking with GPS coordinates, and bus stop coordination for participant transportation.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Registration System:</strong> Advanced participant registration with race number assignment, t-shirt sizing, emergency contact management, and running club affiliations.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Ticket Management:</strong> Flexible ticketing system with capacity control, numbering systems, and multiple ticket types to accommodate different participant categories.</span>
                      </li>
                    </ul>
                    
                    {/* Project Images Carousel */}
                    <div className="mt-4">
                      <div className="relative group">
                        {/* Carousel Container */}
                        <div 
                          id="carousel-cairo-runners"
                          className="flex overflow-x-auto gap-3 sm:gap-4 pb-3 snap-x snap-mandatory hide-scrollbar scroll-smooth"
                          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                          <div className="flex-none w-[85vw] sm:w-[350px] md:w-[450px] snap-start">
                            <div 
                              className="relative overflow-hidden rounded-lg border border-[#444444] shadow-md hover:shadow-xl transition-all duration-300 bg-[#2a2a2a] cursor-pointer group"
                              onClick={() => openLightbox('/assets/projects/cairo-runners/cairo-runners.png')}
                            >
                              <img src="/assets/projects/cairo-runners/cairo-runners.png" alt="Cairo Runners Platform Screenshot" className="w-full h-auto object-contain" loading="lazy" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">NestJS</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">TypeScript</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">PostgreSQL</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">TypeORM</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Redis</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Firebase</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">AWS</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Docker</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Swagger</span>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-3 mt-4">
                      <a 
                        href="https://www.cairorunners.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#007ced] to-[#0066cc] hover:from-[#0066cc] hover:to-[#005bb5] text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#007ced]/40"
                      >
                        <span>Visit Live Site</span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spark Booking System Project */}
              <div className="flex flex-col sm:grid sm:grid-cols-[40px_1fr] gap-4 sm:gap-x-6 group hover:translate-x-2 transition-all duration-500" data-animation-on-scroll="">
                <div className="flex flex-col items-center">
                  <div className="bg-[#007ced] text-white p-2 rounded-full group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#007ced]/50 transition-all duration-300">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: 'FILL 0, wght 400, GRAD 0, opsz 24', display: 'inline-block', lineHeight: 1}}>event_available</span>
                  </div>
                  <div className="w-[1px] bg-[#444444] grow mt-2"></div>
                </div>
                <div className="pb-4">
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f5f5f5]">Spark Booking System - Multi-Service Entertaining Platform</h3>
                    <span className="text-[#007ced] text-xs font-bold uppercase tracking-wider px-2 py-1 bg-[#007ced]/10 rounded">[Production]</span>
                  </div>
                  <p className="text-[#007ced] font-semibold mb-4 text-sm uppercase tracking-wider">Multi-Tenant Booking Platform</p>
                  <div className="text-[#d5d5d5] space-y-4 mb-6 leading-relaxed max-w-3xl">
                    <p>A sophisticated multi-tenancy platform supports managing your spaces and ease the reserving flow.</p>
                    <ul className="list-none space-y-2 text-xs sm:text-sm">
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>API Versioning:</strong> Implemented backward-compatible API versioning system allowing seamless feature updates while maintaining client compatibility.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Dynamic Pricing:</strong> Space-specific pricing, and ticket-based pricing for experiences.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Multi-tenant Architecture:</strong> Comprehensive tenant management supporting multiple business types (SaaS).</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Advanced Features:</strong> Real-time slot availability, comprehensive audit logging, and integrated payment processing.</span>
                      </li>
                    </ul>
                    
                    {/* Project Images Carousel */}
                    <div className="mt-4">
                      <div className="relative group">
                        {/* Navigation Arrows */}
                        <button
                          onClick={() => prevImage('spark-booking', 2)}
                          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-[#007ced] hover:bg-[#0066cc] text-white p-1.5 sm:p-2 rounded-full shadow-lg opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300"
                          aria-label="Previous image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => nextImage('spark-booking', 2)}
                          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-[#007ced] hover:bg-[#0066cc] text-white p-1.5 sm:p-2 rounded-full shadow-lg opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300"
                          aria-label="Next image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Carousel Container */}
                        <div 
                          id="carousel-spark-booking"
                          className="flex overflow-x-auto gap-3 sm:gap-4 pb-3 snap-x snap-mandatory hide-scrollbar scroll-smooth"
                          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                          <div className="flex-none w-[85vw] sm:w-[350px] md:w-[450px] snap-start">
                            <div 
                              className="relative overflow-hidden rounded-lg border border-[#444444] shadow-md hover:shadow-xl transition-all duration-300 bg-[#2a2a2a] cursor-pointer group"
                              onClick={() => openLightbox('/assets/projects/spark-booking/1758010933041.jpg')}
                            >
                              <img src="/assets/projects/spark-booking/1758010933041.jpg" alt="Spark Booking System Screenshot 1" className="w-full h-auto object-contain" loading="lazy" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex-none w-[85vw] sm:w-[350px] md:w-[450px] snap-start">
                            <div 
                              className="relative overflow-hidden rounded-lg border border-[#444444] shadow-md hover:shadow-xl transition-all duration-300 bg-[#2a2a2a] cursor-pointer group"
                              onClick={() => openLightbox('/assets/projects/spark-booking/1765373388481.jpg')}
                            >
                              <img src="/assets/projects/spark-booking/1765373388481.jpg" alt="Spark Booking System Screenshot 2" className="w-full h-auto object-contain" loading="lazy" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Indicators */}
                        <div className="flex justify-center gap-1.5 sm:gap-2 mt-3">
                          {[0, 1].map((index) => (
                            <button
                              key={index}
                              onClick={() => scrollToImage('spark-booking', index)}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                activeCarousel['spark-booking'] === index 
                                  ? 'w-6 bg-[#007ced]' 
                                  : 'w-1.5 bg-[#444444] hover:bg-[#666666]'
                              }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">NestJS</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">TypeScript</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">PostgreSQL</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">TypeORM</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Redis</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Bull Queue</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">AWS</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Sentry</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Google Maps API</span>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-3 mt-4">
                      <a 
                        href="https://apps.apple.com/iq/app/spark-entertainment/id6739362680" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#007ced] to-[#0066cc] hover:from-[#0066cc] hover:to-[#005bb5] text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#007ced]/40"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <span className="relative overflow-hidden inline-block">
                          <span className="block transition-transform duration-300 group-hover:translate-y-[-100%]">Get on App Store</span>
                          <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:translate-y-[-100%]">Explore the App</span>
                        </span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Anubis Martial Arts Platform Project */}
              <div className="flex flex-col sm:grid sm:grid-cols-[40px_1fr] gap-4 sm:gap-x-6 group hover:translate-x-2 transition-all duration-500" data-animation-on-scroll="">
                <div className="flex flex-col items-center">
                  <div className="bg-[#007ced] text-white p-2 rounded-full group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#007ced]/50 transition-all duration-300">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: 'FILL 0, wght 400, GRAD 0, opsz 24', display: 'inline-block', lineHeight: 1}}>sports_martial_arts</span>
                  </div>
                  <div className="w-[1px] bg-[#444444] grow mt-2"></div>
                </div>
                <div className="pb-4">
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f5f5f5]">Anubis - Martial Arts Academy Management Platform</h3>
                    <span className="text-[#007ced] text-xs font-bold uppercase tracking-wider px-2 py-1 bg-[#007ced]/10 rounded">[Production]</span>
                  </div>
                  <p className="text-[#007ced] font-semibold mb-4 text-sm uppercase tracking-wider">Subscription & Academy Management System</p>
                  <div className="text-[#d5d5d5] space-y-4 mb-6 leading-relaxed max-w-3xl">
                    <p>A comprehensive subscription and package management system designed for organizing fitness packages, coaching services, and subscription-based business operations.</p>
                    <ul className="list-none space-y-2 text-xs sm:text-sm">
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Membership & Subscription System:</strong> Advanced student membership management with flexible subscription plans, payment processing through Paymob integration, membership renewals, class package purchases.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Recurring Sessions:</strong> Efficiently schedule repeating sessions (daily, weekly, monthly).</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>QR Code Integration:</strong> Automatically generate unique QR codes for each session, enabling members to check in via mobile app with validation against package restrictions.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Admin Dashboard:</strong> React-based administrative interface with comprehensive management tools for packages, subscriptions, users, coaches, products, transactions, and system configuration with real-time analytics and reporting.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Mobile API:</strong> Dedicated mobile API endpoints for user authentication, package browsing, subscription management, payment processing, QR code check-ins, and push notifications with Firebase integration.</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">NestJS</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">TypeScript</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">PostgreSQL</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">TypeORM</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Redis</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">React</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Firebase</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">AWS</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Docker</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Nx Monorepo</span>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-3 mt-4">
                      <button 
                        disabled
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#333333] text-[#888888] rounded-lg text-sm font-semibold cursor-not-allowed border border-[#444444]"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Coming Soon</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* DFN Nutrition Platform Project */}
              <div className="flex flex-col sm:grid sm:grid-cols-[40px_1fr] gap-4 sm:gap-x-6 group hover:translate-x-2 transition-all duration-500" data-animation-on-scroll="">
                <div className="flex flex-col items-center">
                  <div className="bg-[#007ced] text-white p-2 rounded-full group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#007ced]/50 transition-all duration-300">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: 'FILL 0, wght 400, GRAD 0, opsz 24', display: 'inline-block', lineHeight: 1}}>restaurant</span>
                  </div>
                  <div className="w-[1px] bg-[#444444] grow mt-2"></div>
                </div>
                <div className="pb-4">
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f5f5f5]">DFN - Nutrition & Meal Planning Platform</h3>
                    <span className="text-[#007ced] text-xs font-bold uppercase tracking-wider px-2 py-1 bg-[#007ced]/10 rounded">[Production]</span>
                  </div>
                  <p className="text-[#007ced] font-semibold mb-4 text-sm uppercase tracking-wider">AI-Powered Nutrition System</p>
                  <div className="text-[#d5d5d5] space-y-4 mb-6 leading-relaxed max-w-3xl">
                    <p>An intelligent nutrition and meal planning system that generates personalized dietary plans using advanced algorithms and nutritional science for one of the finest coaches in the middle east.</p>
                    <ul className="list-none space-y-2 text-xs sm:text-sm">
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>AI-Powered Meal Engine:</strong> Sophisticated meal generation algorithms using constraint-based optimization to create nutritionally balanced meal plans based on user goals (normal, shredding, etc.).</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Nutritional Calculations:</strong> Advanced BMR, TDEE, and macro-nutrient calculators with support for custom dietary restrictions and ingredient exclusions.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Meal Plan Management:</strong> Comprehensive meal planning with breakfast, lunch, dinner, and snack distribution, featuring ingredient alternatives and recipe integration.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Subscription Management:</strong> User subscription packages based on users' country with meal plan limits, nutritional tracking, and progress monitoring.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Ingredient Database:</strong> Extensive ingredient library with nutritional information, allergen tracking, and alternative ingredient suggestions.</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">NestJS</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">TypeScript</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">PostgreSQL</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">TypeORM</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Redis</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Bull Queue</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">AWS</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Docker</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">ExcelJS</span>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-3 mt-4">
                      <a 
                        href="https://dfn-eg.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#007ced] to-[#0066cc] hover:from-[#0066cc] hover:to-[#005bb5] text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#007ced]/40"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <span className="relative overflow-hidden inline-block">
                          <span className="block transition-transform duration-300 group-hover:translate-y-[-100%]">Get on App Store</span>
                          <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:translate-y-[-100%]">Explore the App</span>
                        </span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan-B Medical Course Platform Project */}
              <div className="flex flex-col sm:grid sm:grid-cols-[40px_1fr] gap-4 sm:gap-x-6 group hover:translate-x-2 transition-all duration-500" data-animation-on-scroll="">
                <div className="flex flex-col items-center">
                  <div className="bg-[#007ced] text-white p-2 rounded-full group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#007ced]/50 transition-all duration-300">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: 'FILL 0, wght 400, GRAD 0, opsz 24', display: 'inline-block', lineHeight: 1}}>school</span>
                  </div>
                  <div className="w-[1px] bg-[#444444] grow mt-2"></div>
                </div>
                <div className="pb-4">
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f5f5f5]">Plan-B - Medical Online Course Platform</h3>
                    <span className="text-[#007ced] text-xs font-bold uppercase tracking-wider px-2 py-1 bg-[#007ced]/10 rounded">[Production]</span>
                  </div>
                  <p className="text-[#007ced] font-semibold mb-4 text-sm uppercase tracking-wider">Medical Education Platform</p>
                  <div className="text-[#d5d5d5] space-y-4 mb-6 leading-relaxed max-w-3xl">
                    <p>An online platform delivering medical education through a diverse catalog of courses and specialized training programs in collaboration with local hospitals.</p>
                    <ul className="list-none space-y-2 text-xs sm:text-sm">
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Authentication and Role-Based Access:</strong> Implemented secure authentication mechanisms and role-based access control to protect sensitive data.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Video Uploading:</strong> Streamlined the process for uploading instructional videos, enhancing content delivery and providing a seamless user experience.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Rating System:</strong> Integrated a rating and review system for courses and instructors, allowing users to provide feedback and evaluate educational quality.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Payment Integration:</strong> Integrated with the Fawry payment system for secure and efficient transaction processing.</span>
                      </li>
                    </ul>
                    
                    {/* Project Images Carousel */}
                    <div className="mt-4">
                      <div className="relative group">
                        {/* Navigation Arrows */}
                        <button
                          onClick={() => prevImage('plan-b', 4)}
                          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-[#007ced] hover:bg-[#0066cc] text-white p-1.5 sm:p-2 rounded-full shadow-lg opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300"
                          aria-label="Previous image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => nextImage('plan-b', 4)}
                          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-[#007ced] hover:bg-[#0066cc] text-white p-1.5 sm:p-2 rounded-full shadow-lg opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300"
                          aria-label="Next image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Carousel Container */}
                        <div 
                          id="carousel-plan-b"
                          className="flex overflow-x-auto gap-3 sm:gap-4 pb-3 snap-x snap-mandatory hide-scrollbar scroll-smooth"
                          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                          <div className="flex-none w-[85vw] sm:w-[350px] md:w-[450px] snap-start">
                            <div 
                              className="relative overflow-hidden rounded-lg border border-[#444444] shadow-md hover:shadow-xl transition-all duration-300 bg-[#2a2a2a] cursor-pointer group"
                              onClick={() => openLightbox('/assets/projects/plan-b/Screenshot 2026-02-09 225519.png')}
                            >
                              <img src="/assets/projects/plan-b/Screenshot 2026-02-09 225519.png" alt="Plan-B Medical Platform Screenshot 1" className="w-full h-auto object-contain" loading="lazy" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex-none w-[85vw] sm:w-[350px] md:w-[450px] snap-start">
                            <div 
                              className="relative overflow-hidden rounded-lg border border-[#444444] shadow-md hover:shadow-xl transition-all duration-300 bg-[#2a2a2a] cursor-pointer group"
                              onClick={() => openLightbox('/assets/projects/plan-b/Screenshot 2026-02-09 225542.png')}
                            >
                              <img src="/assets/projects/plan-b/Screenshot 2026-02-09 225542.png" alt="Plan-B Medical Platform Screenshot 2" className="w-full h-auto object-contain" loading="lazy" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex-none w-[85vw] sm:w-[350px] md:w-[450px] snap-start">
                            <div 
                              className="relative overflow-hidden rounded-lg border border-[#444444] shadow-md hover:shadow-xl transition-all duration-300 bg-[#2a2a2a] cursor-pointer group"
                              onClick={() => openLightbox('/assets/projects/plan-b/Screenshot 2026-02-09 225634.png')}
                            >
                              <img src="/assets/projects/plan-b/Screenshot 2026-02-09 225634.png" alt="Plan-B Medical Platform Screenshot 3" className="w-full h-auto object-contain" loading="lazy" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex-none w-[85vw] sm:w-[350px] md:w-[450px] snap-start">
                            <div 
                              className="relative overflow-hidden rounded-lg border border-[#444444] shadow-md hover:shadow-xl transition-all duration-300 bg-[#2a2a2a] cursor-pointer group"
                              onClick={() => openLightbox('/assets/projects/plan-b/Screenshot 2026-02-09 225803.png')}
                            >
                              <img src="/assets/projects/plan-b/Screenshot 2026-02-09 225803.png" alt="Plan-B Medical Platform Screenshot 4" className="w-full h-auto object-contain" loading="lazy" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Indicators */}
                        <div className="flex justify-center gap-1.5 sm:gap-2 mt-3">
                          {[0, 1, 2, 3].map((index) => (
                            <button
                              key={index}
                              onClick={() => scrollToImage('plan-b', index)}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                activeCarousel['plan-b'] === index 
                                  ? 'w-6 bg-[#007ced]' 
                                  : 'w-1.5 bg-[#444444] hover:bg-[#666666]'
                              }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">NestJS</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">TypeScript</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">MongoDB</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Mongoose</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Passport.js</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Fawry</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Cloudinary</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">S3</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Nodemailer</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Swagger</span>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-3 mt-4">
                      <a 
                        href="https://planp-learning.com/en/training" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#007ced] to-[#0066cc] hover:from-[#0066cc] hover:to-[#005bb5] text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#007ced]/40"
                      >
                        <span>Start Learning</span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slash E-Commerce Platform Project */}
              <div className="flex flex-col sm:grid sm:grid-cols-[40px_1fr] gap-4 sm:gap-x-6 group hover:translate-x-2 transition-all duration-500" data-animation-on-scroll="">
                <div className="flex flex-col items-center">
                  <div className="bg-[#007ced] text-white p-2 rounded-full group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#007ced]/50 transition-all duration-300">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: 'FILL 0, wght 400, GRAD 0, opsz 24', display: 'inline-block', lineHeight: 1}}>shopping_cart</span>
                  </div>
                  <div className="w-[1px] bg-[#444444] grow mt-2"></div>
                </div>
                <div className="pb-4">
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f5f5f5]">Slash - Refined Local E-Commerce Platform</h3>
                    <span className="text-[#007ced] text-xs font-bold uppercase tracking-wider px-2 py-1 bg-[#007ced]/10 rounded">[Production]</span>
                  </div>
                  <p className="text-[#007ced] font-semibold mb-4 text-sm uppercase tracking-wider">E-commerce Platform for Local Brands and Influencers Marketing</p>
                  <div className="text-[#d5d5d5] space-y-4 mb-6 leading-relaxed max-w-3xl">
                    <ul className="list-none space-y-2 text-xs sm:text-sm">
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Database Architecture Optimization:</strong> Redesigned and refactored over 20% of the database schema to enhance query performance and accommodate new feature requirements, resulting in 50% faster data retrieval and improved system scalability.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Intelligent Matchmaking System:</strong> Developed and implemented an advanced algorithm-based matchmaking process that pairs brands with optimal influencers using comprehensive metrics based on engagement rates.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Social Media Integration:</strong> Seamlessly integrated TikTok APIs to enable influencers and brands to showcase their authentic identity, content style, and audience engagement metrics.</span>
                      </li>
                    </ul>
                    
                    {/* Project Images Carousel */}
                    <div className="mt-4">
                      <div className="relative group">
                        {/* Navigation Arrows */}
                        <button
                          onClick={() => prevImage('slash', 4)}
                          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-[#007ced] hover:bg-[#0066cc] text-white p-1.5 sm:p-2 rounded-full shadow-lg opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300"
                          aria-label="Previous image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => nextImage('slash', 4)}
                          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-[#007ced] hover:bg-[#0066cc] text-white p-1.5 sm:p-2 rounded-full shadow-lg opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300"
                          aria-label="Next image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Carousel Container */}
                        <div 
                          id="carousel-slash"
                          className="flex overflow-x-auto gap-3 sm:gap-4 pb-3 snap-x snap-mandatory hide-scrollbar scroll-smooth"
                          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                          <div className="flex-none w-[85vw] sm:w-[350px] md:w-[450px] snap-start">
                            <div 
                              className="relative overflow-hidden rounded-lg border border-[#444444] shadow-md hover:shadow-xl transition-all duration-300 bg-[#2a2a2a] cursor-pointer group"
                              onClick={() => openLightbox('/assets/projects/slash-ecommerce/unnamed.webp')}
                            >
                              <img src="/assets/projects/slash-ecommerce/unnamed.webp" alt="Slash E-Commerce Platform Screenshot 1" className="w-full h-auto object-contain" loading="lazy" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex-none w-[85vw] sm:w-[350px] md:w-[450px] snap-start">
                            <div 
                              className="relative overflow-hidden rounded-lg border border-[#444444] shadow-md hover:shadow-xl transition-all duration-300 bg-[#2a2a2a] cursor-pointer group"
                              onClick={() => openLightbox('/assets/projects/slash-ecommerce/unnamed2.webp')}
                            >
                              <img src="/assets/projects/slash-ecommerce/unnamed2.webp" alt="Slash E-Commerce Platform Screenshot 2" className="w-full h-auto object-contain" loading="lazy" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex-none w-[85vw] sm:w-[350px] md:w-[450px] snap-start">
                            <div 
                              className="relative overflow-hidden rounded-lg border border-[#444444] shadow-md hover:shadow-xl transition-all duration-300 bg-[#2a2a2a] cursor-pointer group"
                              onClick={() => openLightbox('/assets/projects/slash-ecommerce/unnamed3.webp')}
                            >
                              <img src="/assets/projects/slash-ecommerce/unnamed3.webp" alt="Slash E-Commerce Platform Screenshot 3" className="w-full h-auto object-contain" loading="lazy" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex-none w-[85vw] sm:w-[350px] md:w-[450px] snap-start">
                            <div 
                              className="relative overflow-hidden rounded-lg border border-[#444444] shadow-md hover:shadow-xl transition-all duration-300 bg-[#2a2a2a] cursor-pointer group"
                              onClick={() => openLightbox('/assets/projects/slash-ecommerce/unnamed4.webp')}
                            >
                              <img src="/assets/projects/slash-ecommerce/unnamed4.webp" alt="Slash E-Commerce Platform Screenshot 4" className="w-full h-auto object-contain" loading="lazy" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Indicators */}
                        <div className="flex justify-center gap-1.5 sm:gap-2 mt-3">
                          {[0, 1, 2, 3].map((index) => (
                            <button
                              key={index}
                              onClick={() => scrollToImage('slash', index)}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                activeCarousel['slash'] === index 
                                  ? 'w-6 bg-[#007ced]' 
                                  : 'w-1.5 bg-[#444444] hover:bg-[#666666]'
                              }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">TypeScript</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">NestJS</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Swagger</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">MongoDB</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">TikTok API</span>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-3 mt-4">
                      <a 
                        href="https://apps.apple.com/sa/app/slash-hub/id6463633495" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#007ced] to-[#0066cc] hover:from-[#0066cc] hover:to-[#005bb5] text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#007ced]/40"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <span className="relative overflow-hidden inline-block">
                          <span className="block transition-transform duration-300 group-hover:translate-y-[-100%]">Get on App Store</span>
                          <span className="block absolute top-full left-0 transition-transform duration-300 group-hover:translate-y-[-100%]">Explore the App</span>
                        </span>
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Easy-Book Salon Platform Project */}
              <div className="flex flex-col sm:grid sm:grid-cols-[40px_1fr] gap-4 sm:gap-x-6 group hover:translate-x-2 transition-all duration-500" data-animation-on-scroll="">
                <div className="flex flex-col items-center">
                  <div className="bg-[#007ced] text-white p-2 rounded-full group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#007ced]/50 transition-all duration-300">
                    <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: 'FILL 0, wght 400, GRAD 0, opsz 24', display: 'inline-block', lineHeight: 1}}>content_cut</span>
                  </div>
                  <div className="w-[1px] bg-[#444444] grow mt-2"></div>
                </div>
                <div className="pb-4">
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#f5f5f5]">Easy-Book - Salon Booking Platform</h3>
                    <span className="text-[#007ced] text-xs font-bold uppercase tracking-wider px-2 py-1 bg-[#007ced]/10 rounded">[Production]</span>
                  </div>
                  <p className="text-[#007ced] font-semibold mb-4 text-sm uppercase tracking-wider">Multi-Branch Salon Management System</p>
                  <div className="text-[#d5d5d5] space-y-4 mb-6 leading-relaxed max-w-3xl">
                    <p>A comprehensive salon booking platform developed specifically for a client in Saudi Arabia. The platform simplifies the process of managing salon services, appointments, and staff scheduling across multiple branches.</p>
                    <ul className="list-none space-y-2 text-xs sm:text-sm">
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Appointment Scheduling:</strong> Streamlined booking system for clients to reserve services across different branches.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Branch and Service Management:</strong> Administrators can create and update branches, services, and working hours, ensuring a flexible and customizable experience.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Audit Logging:</strong> Tracks all major actions (such as payments, reservations, updates) with detailed logs, ensuring full transparency for the business.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Review System:</strong> Allows customers to leave reviews for service providers.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Localization:</strong> Full support for Arabic and English interfaces to meet local market needs.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#007ced] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#007ced] shrink-0"></span>
                        <span><strong>Financial Reports:</strong> Generate detailed financial reports, including revenue, service sales, and payment tracking.</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">NestJS</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">PostgreSQL</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">TypeORM</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">TypeScript</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Cloudinary</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Firebase</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Redis</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Localization</span>
                      <span className="px-2 py-0.5 bg-[#333333] text-[#d5d5d5] rounded text-xs font-medium border border-[#444444]">Swagger</span>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-3 mt-4">
                      <button 
                        disabled
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#333333] text-[#888888] rounded-lg text-sm font-semibold cursor-not-allowed border border-[#444444]"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Internal Tool</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>
      </main>

      <footer className="mt-12 sm:mt-16 lg:mt-20 py-8 sm:py-12 border-t border-[#444444] bg-[#1a1a1a] px-4 sm:px-6 lg:px-40">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-xs sm:text-sm text-[#aaaaaa]">
            © {new Date().getFullYear()} Mahmoud Ammar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}












"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full opacity-10 blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`fade-in ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
            <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">Welcome</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Dhuna Chavda
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Senior UI/UX Designer crafting intuitive, human-centered experiences that balance form and function.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all transform hover:scale-105 shadow-lg">
                View My Work
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                Let's Talk
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className={`scale-in ${isVisible ? "scale-100" : "scale-95"} transition-transform duration-1000`}>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-primary/20 shadow-2xl">
              <img src="/professional-designer-portrait-modern-minimalist.jpg" alt="Dhuna Chavda" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <p className="text-sm text-muted-foreground">Scroll to explore</p>
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

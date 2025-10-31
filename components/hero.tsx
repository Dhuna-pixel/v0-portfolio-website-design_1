"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Primary animated blob - top right */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full opacity-30 blur-3xl animate-blob"></div>

        {/* Secondary animated blob - bottom left */}
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full opacity-20 blur-3xl animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Tertiary blob - center */}
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/50 rounded-full opacity-20 blur-3xl animate-blob"
          style={{ animationDelay: "4s", transform: "translate(-50%, -50%)" }}
        ></div>

        {/* Additional accent blob for depth */}
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/30 rounded-full opacity-15 blur-3xl animate-blob"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Mouse-following gradient overlay */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: "all 0.3s ease-out",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`${isVisible ? "slide-up" : "opacity-0"} space-y-8`}>
            <div>
              <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-4 animate-pulse">
                Welcome to my portfolio
              </p>
              <h1 className="font-serif text-6xl md:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-shift">
                  Dhuna Chavda
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Senior UI/UX Designer • Crafting experiences that balance beauty, function, and human connection
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <button className="relative group px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transform hover:scale-105">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                Let's Connect
              </button>
            </div>

            {/* Scroll indicator */}
            <div className="pt-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Scroll to explore</p>
              <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
            </div>
          </div>

          {/* Right side - Animated showcase */}
          <div className={`${isVisible ? "scale-in" : "opacity-0"} relative`}>
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 glass"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/40 rounded-full blur-3xl animate-blob"></div>
                <div
                  className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/40 rounded-full blur-3xl animate-blob"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>

              {/* Placeholder image with neon border */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-primary/50 shadow-2xl">
                <img src="/professional-ui-ux-designer.jpg" alt="Dhuna Chavda" className="w-full h-full object-cover" />
              </div>

              {/* Floating cards around image */}
              <div
                className="absolute -top-6 -right-6 px-6 py-4 glass rounded-2xl slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-sm font-semibold text-primary">10+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div
                className="absolute -bottom-6 -left-6 px-6 py-4 glass rounded-2xl slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <p className="text-sm font-semibold text-secondary">50+</p>
                <p className="text-xs text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </section>
  )
}

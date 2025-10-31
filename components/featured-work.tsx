"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "SaasFlow Platform",
    description: "A comprehensive SaaS platform redesign focusing on user onboarding and data visualization",
    category: "Product Design",
    image: "/modern-saas-dashboard.png",
    tags: ["Design System", "UX Research", "Prototyping"],
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "End-to-end mobile banking experience with emphasis on security and simplicity",
    category: "Mobile Design",
    image: "/banking-app-mobile-interface.jpg",
    tags: ["Mobile UX", "Accessibility", "Animations"],
  },
  {
    id: 3,
    title: "E-Commerce Transformation",
    description: "Complete e-commerce platform redesign resulting in 45% increase in conversion",
    category: "Web Design",
    image: "/e-commerce-store-interface.jpg",
    tags: ["Conversion Optimization", "User Testing", "Analytics"],
  },
]

export default function FeaturedWork() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="work" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">Featured Work</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Selected Projects</h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-xl mb-6 bg-muted aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">{project.category}</p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-secondary text-foreground rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

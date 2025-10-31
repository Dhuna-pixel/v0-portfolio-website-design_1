"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "SaasFlow Platform",
    description: "Comprehensive SaaS platform redesign with advanced analytics",
    category: "Product Design",
    image: "/modern-saas-dashboard.jpg",
    tags: ["Design System", "UX Research", "Prototyping"],
    color: "from-primary/50 to-primary/10",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "End-to-end mobile experience with security at the forefront",
    category: "Mobile Design",
    image: "/banking-app-mobile.jpg",
    tags: ["Mobile UX", "Accessibility", "Animations"],
    color: "from-secondary/50 to-secondary/10",
  },
  {
    id: 3,
    title: "E-Commerce Transformation",
    description: "Complete platform redesign achieving 45% conversion increase",
    category: "Web Design",
    image: "/ecommerce-store.jpg",
    tags: ["Conversion Optimization", "User Testing", "Analytics"],
    color: "from-primary/50 to-secondary/50",
  },
]

export default function FeaturedWork() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredProjects = selectedCategory ? projects.filter((p) => p.category === selectedCategory) : projects

  return (
    <section id="work" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-4 animate-pulse">
            Featured Work
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-8">Selected Projects</h2>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "border border-primary/30 text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              All Work
            </button>
            {["Product Design", "Mobile Design", "Web Design"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/50"
                    : "border border-primary/30 text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-max">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transform transition-all duration-500 ${
                hoveredId === project.id ? "scale-105" : ""
              } ${index === 1 ? "lg:row-span-2" : ""}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`relative overflow-hidden rounded-2xl h-full glass border border-primary/20 group-hover:border-primary/50 transition-all ${
                  index === 1 ? "aspect-video lg:aspect-square" : "aspect-video"
                }`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Image */}
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    View Project
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-primary/30 text-muted-foreground"
                  >
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

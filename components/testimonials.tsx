const testimonials = [
  {
    quote:
      "Dhuna transformed our product's user experience. Her strategic approach and attention to detail resulted in a 40% improvement in user satisfaction.",
    author: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    image: "/professional-woman-portrait.png",
  },
  {
    quote:
      "Working with Dhuna was a game-changer. She brings both creative vision and practical problem-solving skills to every project.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    image: "/professional-man-portrait.png",
  },
  {
    quote:
      "The design system Dhuna created has become the backbone of our entire digital product suite. Truly exceptional work.",
    author: "Emma Watson",
    role: "Design Director, Creative Studios",
    image: "/creative-professional-woman.png",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">Social Proof</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">What Others Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary fill-primary" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed flex-grow italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

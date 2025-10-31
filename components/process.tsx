export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understanding user needs, business goals, and market landscape through research and stakeholder interviews.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Defining clear objectives, creating user personas, and establishing the design direction and framework.",
    },
    {
      number: "03",
      title: "Design",
      description: "Crafting high-fidelity designs, creating prototypes, and building comprehensive design systems.",
    },
    {
      number: "04",
      title: "Testing",
      description: "Conducting user testing, gathering feedback, and iterating on designs based on real user insights.",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">My Approach</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Design Process</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 h-full flex flex-col">
                <div className="text-5xl font-serif font-bold text-primary/20 group-hover:text-primary/40 transition-colors mb-4">
                  {step.number}
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

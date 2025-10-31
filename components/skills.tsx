export default function Skills() {
  const skillCategories = [
    {
      title: "Design",
      skills: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "User Research", "Interaction Design"],
    },
    {
      title: "Tools",
      skills: ["Figma", "Adobe XD", "Sketch", "Framer", "Webflow", "Protopie"],
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Communication", "Problem Solving", "Collaboration", "Strategic Thinking", "Mentoring"],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">Expertise</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Tools</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-8 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <h3 className="font-serif text-2xl font-bold text-primary mb-6 group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-accent transition-colors"></div>
                    <p className="text-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

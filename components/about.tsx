export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden bg-muted shadow-xl">
              <img src="/workspace-design-process-sketches.jpg" alt="Design workspace" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 slide-up">
            <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">About Me</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Designing with Purpose</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 8 years of experience in UI/UX design, I've dedicated my career to creating digital experiences
              that resonate with users. My approach combines meticulous research, thoughtful design, and a deep
              understanding of human behavior.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I believe great design is invisible—it feels natural and intuitive. Every pixel, interaction, and
              transition is purposeful, creating experiences that delight users while solving real problems.
            </p>
            <div className="flex gap-4 flex-wrap">
              <div className="flex-1 min-w-[200px] p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors">
                <p className="text-3xl font-bold text-primary mb-2">50+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="flex-1 min-w-[200px] p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors">
                <p className="text-3xl font-bold text-primary mb-2">8+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

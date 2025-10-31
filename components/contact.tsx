"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">Get In Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Create Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a href="mailto:hello@dhuna.design" className="text-primary hover:text-accent transition-colors">
                  hello@dhuna.design
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-primary hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {["Linkedin", "Twitter", "Dribbble", "Behance"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      {platform[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground placeholder-muted-foreground"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground placeholder-muted-foreground"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-6 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground placeholder-muted-foreground resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-colors font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Linkedin, Twitter, Dribbble, Bean as Behance } from "lucide-react"

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

  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com",
      color: "hover:text-blue-400",
    },
    {
      name: "Dribbble",
      icon: Dribbble,
      url: "https://dribbble.com",
      color: "hover:text-pink-500",
    },
    {
      name: "Behance",
      icon: Behance,
      url: "https://behance.net",
      color: "hover:text-blue-500",
    },
  ]

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
                <div className="flex gap-6">
                  {socialPlatforms.map((platform) => {
                    const Icon = platform.icon
                    return (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={platform.name}
                        className={`text-primary transition-all duration-300 hover:scale-110 ${platform.color}`}
                      >
                        <Icon size={24} strokeWidth={1.5} />
                      </a>
                    )
                  })}
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

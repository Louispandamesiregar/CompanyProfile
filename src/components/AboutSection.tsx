import * as React from "react"
import { companyInfo } from "@/data/content"

export function AboutSection() {
  const { about } = companyInfo

  return (
    <section id="about" className="py-20 bg-muted/30 scroll-m-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {about.title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            {about.description}
          </p>
        </div>
      </div>
    </section>
  )
}

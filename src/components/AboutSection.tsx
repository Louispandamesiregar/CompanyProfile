"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import { Target } from "lucide-react"

export function AboutSection() {
  const { content } = useLanguage()
  const { about, misi } = content.companyInfo

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-card/50 scroll-m-16 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {about.title}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              {about.description}
            </p>
          </div>
          
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {misi.title}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full" />
            <ul className="space-y-4">
              {misi.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Target className="w-6 h-6 text-secondary dark:text-teal-400 mr-3 shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

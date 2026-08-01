"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"

export function AboutSection() {
  const { content } = useLanguage()
  const { about, visi, misi } = content.companyInfo

  return (
    <section id="about" className="pt-16 md:pt-24 pb-8 md:pb-12 bg-white scroll-m-16 border-t border-border/40">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Kolom Kiri: Tentang Kami & Visi */}
          <div className="space-y-10">
            {/* Tentang Kami */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                {about.title}
              </h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed text-justify">
                {about.description}
              </p>
            </div>

            {/* Visi */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-semibold text-foreground mb-4">
                {visi.title}
              </h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed italic border-l-4 border-slate-200 pl-4 py-1 text-justify">
                &ldquo;{visi.description}&rdquo;
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Misi */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              {misi.title}
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-base md:text-lg text-foreground leading-relaxed text-justify">
              {misi.items.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

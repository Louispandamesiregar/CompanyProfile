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
              <div className="space-y-4">
                {visi.items?.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shadow-inner">
                      {index + 1}
                    </div>
                    <p className="text-base md:text-lg text-foreground leading-relaxed pt-0.5 text-justify">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
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

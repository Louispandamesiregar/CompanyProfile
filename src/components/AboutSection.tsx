"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"

export function AboutSection() {
  const { content } = useLanguage()
  const { about, visi, misi } = content.companyInfo

  return (
    <section id="about" className="pt-16 md:pt-24 pb-16 md:pb-32 bg-white scroll-m-16 border-t border-border/40 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        
        {/* Kontainer Relatif untuk Overlapping */}
        <div className="relative w-full flex flex-col lg:flex-row">
          
          {/* KOTAK KIRI (Tentang Kami) */}
          <div className="w-full lg:w-7/12 bg-white border border-gray-200 p-8 md:p-12 lg:p-16 z-10 shadow-sm animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
              {about.title}
            </h2>
            <div className="w-16 h-1 bg-primary mb-8"></div>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed text-justify">
              {about.description}
            </p>
          </div>

          {/* KOTAK KANAN (Visi & Misi - Overlapping) */}
          <div className="w-full lg:w-7/12 bg-slate-50 p-8 md:p-12 lg:p-16 z-20 shadow-2xl animate-fade-in-up mt-8 lg:-ml-32 lg:mt-32 border border-slate-100" style={{ animationDelay: '0.2s' }}>
            
            {/* Grid 2 Kolom untuk Visi dan Misi agar berjajar kiri-kanan */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-8">
              
              {/* Kolom Kiri: Visi */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">
                  {visi.title}
                </h3>
                <div className="w-10 h-1 bg-primary mb-6"></div>
                <div className="space-y-4">
                  {visi.items?.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="font-bold text-primary/80 mt-0.5">{index + 1}.</span>
                      <p className="text-sm md:text-base text-foreground/90 leading-relaxed text-justify">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kolom Kanan: Misi */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4 uppercase tracking-tight">
                  {misi.title}
                </h3>
                <div className="w-10 h-1 bg-primary mb-6"></div>
                <ul className="space-y-4 text-sm md:text-base text-foreground/90 leading-relaxed text-justify">
                  {misi.items.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary/60 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

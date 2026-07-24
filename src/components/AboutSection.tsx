"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import { Target } from "lucide-react"

export function AboutSection() {
  const { content } = useLanguage()
  const { about, misi } = content.companyInfo

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50#0a1116] scroll-m-16 relative border-y border-border/50">
      {/* Decorative dots removed for performance */}
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Tentang Kami (Bento Box 1 - Left) */}
          <div className="lg:col-span-5 relative group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="h-full bg-gradient-to-br from-[#1C323E] to-teal-900 rounded-3xl p-10 md:p-12 shadow-2xl overflow-hidden relative flex flex-col justify-center border border-white/10">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                <Target className="w-64 h-64 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-md">
                  {about.title}
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
                <p className="text-lg md:text-xl text-teal-50 font-medium leading-relaxed drop-shadow-sm">
                  {about.description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Misi Kami (Bento Grid - Right) */}
          <div className="lg:col-span-7 space-y-6 lg:pl-8 lg:py-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center space-x-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#35627A]">
                {misi.title}
              </h2>
              <div className="flex-1 h-px bg-border/80" />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {misi.items.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-lg border border-border/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(20,184,166,0.15)] hover:border-teal-400/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-teal-100:bg-teal-900/50 transition-transform duration-300">
                    <Target className="w-6 h-6 text-[#35627A]" />
                  </div>
                  <p className="text-muted-foreground font-medium leading-relaxed group-hover:text-foreground transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"

export function ClientMarquee() {
  const { content } = useLanguage()
  const { clients } = content

  if (!clients.items || clients.items.length === 0) {
    return null
  }

  // Duplicate items for seamless infinite scroll
  const scrollItems = [...clients.items, ...clients.items, ...clients.items]

  return (
    <section className="pt-8 md:pt-10 pb-10 bg-blue-50/60 overflow-hidden border-y border-blue-100/50">
      <div className="container mx-auto px-4 text-center mb-10">
        <h3 className="text-sm md:text-base font-bold tracking-widest uppercase text-primary/80 mb-2">
          {clients.subtitle}
        </h3>
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
          {clients.title}
        </h2>
      </div>

      <div className="relative w-full flex items-center">
        {/* Left and Right Fade for smooth entrance/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#f4f7fb] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#f4f7fb] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
          {scrollItems.map((client, idx) => (
            <div 
              key={`${client.id}-${idx}`} 
              className="mx-8 md:mx-12 flex flex-col items-center justify-center group cursor-default transition-all duration-300 hover:scale-110"
            >
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-white shadow-sm group-hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: client.color }}
              >
                <span className="font-black text-xl md:text-2xl tracking-tighter drop-shadow-sm">{client.logoText}</span>
              </div>
              <span className="mt-4 text-xs md:text-sm font-bold text-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 text-center max-w-[120px] leading-tight">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

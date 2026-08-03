"use client"

import React from "react"
import { Truck, Globe, Building2, Clock } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function FeaturesBar() {
  const { language } = useLanguage()
  const features = language === 'id' ? [
    {
      icon: Truck,
      title: "Armada",
      subtitle: "Lengkap",
    },
    {
      icon: Globe,
      title: "Jangkauan",
      subtitle: "Nasional",
    },
    {
      icon: Building2,
      title: "Layanan",
      subtitle: "Corporate",
    },
    {
      icon: Clock,
      title: "Fast",
      subtitle: "Response",
    },
  ] : [
    {
      icon: Truck,
      title: "Complete",
      subtitle: "Fleet",
    },
    {
      icon: Globe,
      title: "National",
      subtitle: "Reach",
    },
    {
      icon: Building2,
      title: "Corporate",
      subtitle: "Service",
    },
    {
      icon: Clock,
      title: "Fast",
      subtitle: "Response",
    },
  ];

  return (
    <div className="w-full relative z-30 -mt-12 md:-mt-16 px-4">
      <div className="container mx-auto max-w-[1600px] bg-white rounded-3xl shadow-xl shadow-black/5 border border-slate-100/50 overflow-hidden relative backdrop-blur-xl">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 py-4 md:py-6 relative z-10">
          {features.map((feat, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 py-6 px-4 md:px-8 hover:bg-slate-50/50 rounded-2xl transition-all duration-300 group cursor-default">
              <div className="p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                <feat.icon className="w-8 h-8 md:w-9 md:h-9 shrink-0" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <span className="text-foreground font-bold text-lg md:text-xl tracking-tight leading-tight">{feat.title}</span>
                <span className="text-muted-foreground font-medium text-sm md:text-base">{feat.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

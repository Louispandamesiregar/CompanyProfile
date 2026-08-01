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
    <div className="w-full bg-white relative z-20 overflow-hidden">
      {/* Subtle top border gradient instead of harsh shadow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 py-4 md:py-6">
          {features.map((feat, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 py-6 px-4 md:px-8 rounded-3xl hover:bg-slate-50 transition-all duration-300 group cursor-default">
              <div className="p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feat.icon className="w-8 h-8 md:w-9 md:h-9 shrink-0" strokeWidth={1.25} />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <span className="text-foreground font-bold text-lg md:text-xl tracking-tight leading-tight">{feat.title}</span>
                <span className="text-muted-foreground font-medium text-sm md:text-base">{feat.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  )
}

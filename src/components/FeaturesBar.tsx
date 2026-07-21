"use client"

import React from "react"
import { Truck, Map, Users, Zap } from "lucide-react"
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
      icon: Map,
      title: "Jangkauan",
      subtitle: "Nasional",
    },
    {
      icon: Users,
      title: "Layanan",
      subtitle: "Corporate",
    },
    {
      icon: Zap,
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
      icon: Map,
      title: "National",
      subtitle: "Reach",
    },
    {
      icon: Users,
      title: "Corporate",
      subtitle: "Service",
    },
    {
      icon: Zap,
      title: "Fast",
      subtitle: "Response",
    },
  ];

  return (
    <div className="w-full bg-background border-b shadow-sm relative z-20">
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
          {features.map((feat, i) => (
            <div key={i} className="flex items-center justify-center gap-3 py-6 md:py-8 px-4 hover:bg-muted/20 transition-colors group cursor-default">
              <feat.icon className="w-9 h-9 md:w-11 md:h-11 text-teal-600 dark:text-teal-400 shrink-0 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
              <div className="flex flex-col">
                <span className="text-[#35627A] dark:text-primary-foreground font-bold leading-tight text-base md:text-lg tracking-tight">{feat.title}</span>
                <span className="text-[#35627A] dark:text-primary-foreground font-bold leading-tight text-base md:text-lg tracking-tight">{feat.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

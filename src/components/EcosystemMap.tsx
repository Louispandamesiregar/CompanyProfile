"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import { MapPin } from "lucide-react"

// Dummy Locations Data
const LOCATIONS = [
  {
    id: "jakarta",
    name: "Jakarta",
    top: "40%",
    left: "45%",
    businesses: ["Nawasena Alkes", "PT Bumi Karya Mandiri"]
  },
  {
    id: "tangerang",
    name: "Tangerang",
    top: "45%",
    left: "25%",
    businesses: ["Nawasena ATK"]
  },
  {
    id: "depok",
    name: "Depok",
    top: "65%",
    left: "50%",
    businesses: ["Faenzone & Warmindo"]
  },
  {
    id: "bekasi",
    name: "Bekasi",
    top: "45%",
    left: "75%",
    businesses: ["Koling", "Nawasena Printing"]
  }
]

export function EcosystemMap() {
  const { language } = useLanguage()
  const [activeLocation, setActiveLocation] = React.useState<string | null>(null)

  return (
    <div className="w-full mt-24 mb-12">
      <div className="text-center mb-10 space-y-4">
        <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-foreground uppercase">
          {language === 'id' ? 'Sebaran Bisnis Kami' : 'Our Business Distribution'}
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {language === 'id' 
            ? 'Jaringan operasional PT Nawasena Jaya Group yang saling terintegrasi untuk memberikan pelayanan terbaik dan terjangkau di berbagai wilayah.'
            : 'The integrated operational network of PT Nawasena Jaya Group to provide the best and accessible services across regions.'}
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden border bg-card/30 shadow-2xl backdrop-blur-sm group">
        
        {/* Stylized Map Background (Grid / Abstract lines) */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80" />
        
        {/* Map Nodes */}
        {LOCATIONS.map((loc) => {
          const isActive = activeLocation === loc.id
          
          return (
            <div 
              key={loc.id}
              className="absolute z-10 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: loc.top, left: loc.left }}
              onMouseEnter={() => setActiveLocation(loc.id)}
              onMouseLeave={() => setActiveLocation(null)}
            >
              {/* Glowing Pulse Effect */}
              <div className="relative flex h-6 w-6 items-center justify-center cursor-pointer">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-primary shadow-[0_0_15px_rgba(var(--primary),0.8)]"></span>
              </div>
              
              {/* City Label */}
              <span className={`mt-2 font-bold text-sm md:text-base transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                {loc.name}
              </span>

              {/* Hover Popup Card */}
              <div 
                className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 md:w-56 p-4 rounded-xl shadow-2xl backdrop-blur-md bg-background/95 border border-primary/20 transition-all duration-300 pointer-events-none ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background/95 border-l border-t border-primary/20 rotate-45" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3 border-b pb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-bold text-sm uppercase tracking-wider">{loc.name}</span>
                  </div>
                  <ul className="space-y-2">
                    {loc.businesses.map((biz, idx) => (
                      <li key={idx} className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        {biz}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

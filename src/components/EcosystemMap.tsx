"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import { MapPin, Building2, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Dummy Locations Data mapped to specific Sister Company IDs
const LOCATIONS = [
  {
    id: "jakarta",
    name: "Jakarta",
    top: "42%",
    left: "32%",
    businesses: [{ id: 1, name: "Nawasena Alkes" }]
  },
  {
    id: "tangerang",
    name: "Tangerang",
    top: "44%",
    left: "26%",
    businesses: [{ id: 2, name: "Nawasena ATK" }]
  },
  {
    id: "depok",
    name: "Depok",
    top: "52%",
    left: "31%",
    businesses: [{ id: 3, name: "Faenzone & Warmindo" }]
  },
  {
    id: "bekasi",
    name: "Bekasi",
    top: "45%",
    left: "38%",
    businesses: [{ id: 4, name: "Koling" }]
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
        
        {/* Background Image of Map */}
        <div className="absolute inset-0 opacity-80 dark:opacity-60 mix-blend-multiply dark:mix-blend-screen pointer-events-none">
          <Image src="/java-map.png" alt="Java Map" fill className="object-contain scale-[1.3] md:scale-150 origin-center" priority />
        </div>
        
        {/* Stylized Map Background (Grid / Abstract lines) */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-5" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-background/95" />
        
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
              {/* Icon Map Marker */}
              <Link href={`/companies/${loc.businesses[0].id}`} className="relative flex flex-col items-center justify-center cursor-pointer group z-20">
                <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-card rounded-full shadow-xl border-[3px] border-teal-500 group-hover:scale-110 group-hover:bg-teal-500 transition-all duration-300">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-30"></span>
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-teal-600 dark:text-teal-400 group-hover:text-white transition-colors" />
                </div>
              </Link>
              
              {/* City Label */}
              <span className={`mt-2 font-bold text-sm md:text-base transition-colors ${isActive ? 'text-teal-600 dark:text-teal-400' : 'text-muted-foreground'}`}>
                {loc.name}
              </span>

              {/* Hover Popup Card */}
              <div 
                className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 md:w-56 p-4 rounded-xl shadow-2xl backdrop-blur-md bg-background/95 border border-primary/20 transition-all duration-300 z-30 ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background/95 border-l border-t border-primary/20 rotate-45" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3 border-b pb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-bold text-sm uppercase tracking-wider">{loc.name}</span>
                  </div>
                  <ul className="space-y-3">
                    {loc.businesses.map((biz, idx) => (
                      <li key={idx}>
                        <Link 
                          href={`/companies/${biz.id}`}
                          className="text-sm font-semibold text-foreground/90 hover:text-primary transition-colors flex items-center justify-between group/link p-2 -mx-2 rounded-md hover:bg-muted/50"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/link:bg-primary transition-colors" />
                            {biz.name}
                          </div>
                          <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                        </Link>
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

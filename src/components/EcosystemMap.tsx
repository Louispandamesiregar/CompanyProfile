"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import dynamic from 'next/dynamic'

// Dynamically import the MapClient with SSR disabled
const MapClient = dynamic(() => import('./MapClient'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-[1440px] mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border bg-muted flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <span className="text-muted-foreground font-medium animate-pulse">Memuat Peta Interaktif...</span>
      </div>
    </div>
  )
})

export function EcosystemMap() {
  const { language } = useLanguage()

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

      <div className="relative w-full max-w-[1440px] mx-auto">
        <MapClient />
      </div>
    </div>
  )
}

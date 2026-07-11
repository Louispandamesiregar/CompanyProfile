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
    <div className="w-full mt-8 mb-4">
      <div className="relative w-full max-w-[1440px] mx-auto">
        <MapClient />
      </div>
    </div>
  )
}

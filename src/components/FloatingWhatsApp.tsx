"use client"

import React, { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Munculkan tombol setelah pengunjung scroll sedikit (opsional, tapi bagus untuk UX)
  // Atau bisa langsung muncul. Kita buat langsung muncul saja tapi dengan delay animasi masuk.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Balon Chat (Tooltip) */}
      <div 
        className={`mr-4 bg-white dark:bg-card text-foreground px-4 py-3 rounded-2xl shadow-xl border border-border/50 text-sm font-medium transition-all duration-300 origin-right ${
          isHovered ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-4 pointer-events-none"
        }`}
      >
        <span className="block mb-0.5">Butuh bantuan?</span>
        <span className="text-teal-600 dark:text-teal-400 font-bold">Silakan chat kami di sini</span>
        
        {/* Segitiga panah menunjuk ke tombol */}
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-card border-t border-r border-border/50 rotate-45 rounded-sm"></div>
      </div>

      {/* Tombol WhatsApp Utama */}
      <a
        href="https://wa.me/6281388398303"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#35627A] to-teal-600 rounded-full text-white shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(20,184,166,0.4)] hover:scale-110 transition-all duration-300 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat via WhatsApp"
      >
        {/* Efek Ping (denyut) di belakang tombol */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-40"></span>
        
        {/* Ikon WhatsApp */}
        <FaWhatsapp className="w-8 h-8 relative z-10 drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
      </a>
      
    </div>
  )
}

"use client"

import * as React from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function PromoModal() {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    // Only show on mobile screens (lg:hidden corresponds to <1024px)
    const isMobile = window.matchMedia("(max-width: 1024px)").matches
    if (isMobile) {
      // Check if we already showed it this session (optional, currently uses sessionStorage so it shows once per session)
      const hasSeenPromo = sessionStorage.getItem("hasSeenPromo")
      
      if (!hasSeenPromo) {
        // Delay a bit before showing to allow initial rendering
        const timer = setTimeout(() => {
          setIsOpen(true)
          sessionStorage.setItem("hasSeenPromo", "true")
        }, 1500)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center lg:hidden">
          {/* Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
            className="relative w-[85%] max-w-sm max-h-[85vh] z-10 flex flex-col items-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20"
              aria-label="Close promo banner"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Banner Image Container */}
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-transparent">
              <Image
                src="/banner.webp"
                alt="Promo Banner"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 85vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

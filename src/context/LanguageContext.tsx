"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { contentID, contentEN } from "@/data/content"

export type Language = "id" | "en"
export type ContentType = typeof contentID

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  content: ContentType
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("id")
  const [mounted, setMounted] = useState(false)

  // Initialize from localStorage if available
  useEffect(() => {
    const initTimer = setTimeout(() => setMounted(true), 0)
    const stored = localStorage.getItem("language") as Language | null
    if (stored === "id" || stored === "en") {
      setLanguage(stored)
    }
    return () => clearTimeout(initTimer)
  }, [])
    if (stored === "id" || stored === "en") {
      setLanguage(stored)
    }
  }, [])

  // Save to localStorage on change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
    }
  }, [language, mounted])

  const toggleLanguage = () => {
    setLanguage(prev => prev === "id" ? "en" : "id")
  }

  // Prevent hydration mismatch by using default content on server render
  const value = {
    language: mounted ? language : "id",
    setLanguage,
    content: mounted && language === "en" ? contentEN : contentID,
    toggleLanguage
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

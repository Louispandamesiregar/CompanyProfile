"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { buttonVariants } from "@/components/ui/button"

export function CompanyDetailClient({ id }: { id: string }) {
  const { language, content } = useLanguage()
  const companyId = parseInt(id)
  
  const company = content.sisterCompanies.items.find((c: any) => c.id === companyId)
  
  if (!company) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-50 dark:bg-background relative">
        {/* Background Dot Pattern for Content Section */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
        
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] min-h-[380px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1C323E] to-teal-900">
          {/* Decorative glowing blobs */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
          
          <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <Link 
                href="/" 
                className="inline-flex items-center text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all mb-6 px-4 py-2 rounded-full shadow-lg"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === 'id' ? 'Kembali ke Peta Ekosistem' : 'Back to Ecosystem Map'}
              </Link>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white drop-shadow-md">
                {company.name}
              </h1>
              <p className="text-xl md:text-2xl text-teal-300 font-bold mt-4 tracking-[0.2em] uppercase drop-shadow-sm">
                {company.shortDesc}
              </p>
            </div>
            
            {/* Glassmorphism Floating Card */}
            <div className="w-48 h-48 md:w-64 md:h-64 relative bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl shadow-[0_0_50px_rgba(20,184,166,0.3)] flex items-center justify-center p-8 shrink-0 animate-[bounce_6s_ease-in-out_infinite] hover:scale-105 transition-transform duration-500">
               {company.image ? (
                <Image 
                  src="/demo.jpg" // Using dummy image safely
                  alt={company.name} 
                  fill 
                  className="object-contain p-6 drop-shadow-2xl" 
                />
              ) : (
                <span className="text-5xl font-black text-white drop-shadow-lg">{company.logoText}</span>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 md:py-32 container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
          <div className="bg-card/80 backdrop-blur-lg border-t-4 border-t-teal-500 shadow-2xl rounded-3xl p-8 md:p-14 relative overflow-hidden">
            {/* Watermark Quote Icon */}
            <div className="absolute -top-10 -right-10 text-muted/20 opacity-50 rotate-12 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24" fill="currentColor"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.999v2C17.999 16 17 17 16 17s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-3 text-foreground">
                <span className="w-10 h-1.5 bg-gradient-to-r from-[#35627A] to-teal-500 rounded-full"></span>
                {language === 'id' ? 'Profil Perusahaan' : 'Company Profile'}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-medium">
                {company.fullDesc}
              </p>

              <div className="pt-10 border-t border-border/50 flex flex-col sm:flex-row items-center gap-5">
                <a 
                  href={company.website !== "#" ? company.website : "/"} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "default", size: "lg", className: "w-full sm:w-auto font-bold shadow-xl shadow-primary/20 bg-gradient-to-r from-[#35627A] to-teal-600 hover:opacity-90 hover:scale-105 transition-all text-white group h-14 px-8 text-base" })}
                >
                  {language === 'id' ? 'Kunjungi Situs Web' : 'Visit Website'}
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <Link 
                  href="/#contact" 
                  className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto font-bold border-2 hover:bg-muted h-14 px-8 text-base" })}
                >
                  {language === 'id' ? 'Hubungi Grup' : 'Contact Group'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

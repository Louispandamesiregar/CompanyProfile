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
      <main className="flex-1 bg-background">1
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] min-h-[350px] w-full flex items-center justify-center overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background/50" />
          
          <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <Link 
                href="/" 
                className="inline-flex items-center text-sm font-bold text-foreground/80 bg-background/50 hover:bg-background border backdrop-blur-md transition-all mb-6 px-4 py-2 rounded-full shadow-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {language === 'id' ? 'Kembali ke Peta Ekosistem' : 'Back to Ecosystem Map'}
              </Link>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                {company.name}
              </h1>
              <p className="text-xl text-primary font-semibold mt-4">
                {company.shortDesc}
              </p>
            </div>
            
            <div className="w-40 h-40 md:w-56 md:h-56 relative bg-white rounded-3xl shadow-2xl flex items-center justify-center p-6 shrink-0 rotate-3 hover:rotate-0 transition-transform duration-500">
               {company.image ? (
                <Image 
                  src="/demo.jpg" // Using dummy image safely
                  alt={company.name} 
                  fill 
                  className="object-contain p-4 drop-shadow-xl" 
                />
              ) : (
                <span className="text-4xl font-black text-primary">{company.logoText}</span>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="bg-card border shadow-xl rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              {language === 'id' ? 'Profil Perusahaan' : 'Company Profile'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {company.fullDesc}
            </p>

            <div className="pt-8 border-t flex flex-col sm:flex-row items-center gap-4">
              <a 
                href={company.website !== "#" ? company.website : "/"} 
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "default", size: "lg", className: "w-full sm:w-auto font-bold shadow-lg group" })}
              >
                {language === 'id' ? 'Kunjungi Situs Web' : 'Visit Website'}
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <Link 
                href="/#contact" 
                className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto font-bold" })}
              >
                {language === 'id' ? 'Hubungi Grup' : 'Contact Group'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

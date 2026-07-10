"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { buttonVariants } from "@/components/ui/button"

export function ServiceDetailClient({ id }: { id: string }) {
  const { language, content } = useLanguage()
  const serviceId = parseInt(id)
  
  const service = content.services.items.find((s: any) => s.id === serviceId)
  
  if (!service) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
          <Image 
            src="/demo.jpg" 
            alt={service.title} 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
          
          <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
            <Link 
              href="/#services" 
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'id' ? 'Kembali ke Layanan' : 'Back to Services'}
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl"
                style={{ backgroundColor: service.color }}
              >
                <service.icon className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-foreground">
                {service.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Description */}
            <div className="md:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary rounded-full"></span>
                  {language === 'id' ? 'Tentang Layanan Ini' : 'About This Service'}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Gallery (using the remaining images) */}
              {service.images.length > 1 && (
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {service.images.slice(1, 3).map((img: string, idx: number) => (
                    <div key={idx} className="relative h-48 rounded-xl overflow-hidden shadow-md">
                      <Image src="/demo.jpg" alt={`Gallery ${idx}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Benefits Sidebar */}
            <div className="md:col-span-5">
              <div className="bg-card border shadow-xl rounded-3xl p-8 sticky top-28">
                <h3 className="text-xl font-bold mb-6 border-b pb-4">
                  {language === 'id' ? 'Keunggulan Kami' : 'Our Advantages'}
                </h3>
                <ul className="space-y-4">
                  {service.benefits?.map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 
                        className="w-5 h-5 mr-3 shrink-0 mt-0.5" 
                        style={{ color: service.color }}
                      />
                      <span className="text-muted-foreground font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t">
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === 'id' 
                      ? 'Tertarik dengan layanan ini? Hubungi tim kami sekarang untuk penawaran terbaik.' 
                      : 'Interested in this service? Contact our team now for the best offer.'}
                  </p>
                  <Link 
                    href="/#contact" 
                    className={buttonVariants({ variant: "default", size: "lg", className: "w-full font-bold shadow-lg" })}
                  >
                    {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import cddBoxImg from "@/assets/fleet/cdd-box.webp";
import cdeBoxImg from "@/assets/fleet/cde-box.webp";
import engkelboxImg from "@/assets/engkel_box.webp";
import boxImg from "@/assets/box.webp";
import atk1DetailImg from "@/assets/atk1.webp";
import { buttonVariants } from "@/components/ui/button"

export function ServiceDetailClient({ id }: { id: string }) {
  const { language, content } = useLanguage()
  const serviceId = parseInt(id)
  
  const service = content.services.items.find((s: any) => s.id === serviceId)
  const { clients } = content
  const serviceClients = clients.items.filter((c: any) => c.serviceIds.includes(serviceId))

  
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
            src={service.images?.[0] || engkelboxImg} 
            alt={service.title} 
            fill 
            sizes="100vw"
            className="object-cover" 
            priority
          />
          
          <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm font-bold text-black bg-white/40 hover:bg-white/60 border border-white/50 backdrop-blur-md transition-all mb-6 px-4 py-2 rounded-full shadow-lg"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
            </Link>
            
            <div className="mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-foreground">
                {service.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 w-full container mx-auto px-6 md:px-12 max-w-5xl">
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
                {serviceId === 2 && (
                  <div className="mt-8 relative w-full h-64 md:h-96 rounded-none overflow-hidden shadow-md">
                    <Image src={atk1DetailImg} alt="Pengadaan ATK" fill className="object-cover" />
                  </div>
                )}
              </div>

              {/* Extra Images (replaces old gallery) */}
              {service.images.length > 1 && (
                <div className="flex flex-col gap-8 mt-8">
                  {service.images.slice(1).map((img: any, idx: number) => (
                    <div key={idx} className="relative w-full h-64 md:h-96 rounded-none overflow-hidden shadow-md">
                      <Image src={img} alt={`${service.title} Image ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
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
                  <a 
                    href="https://wa.me/6281388398303" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "default", size: "lg", className: "w-full font-bold shadow-lg" })}
                  >
                    {language === 'id' ? 'Hubungi Kami via WhatsApp' : 'Contact Us via WhatsApp'}
                  </a>
                </div>
              </div>
            </div>
            </div>
        </section>

        {/* Trusted By Section - Redesigned */}
        {serviceClients.length > 0 && (
          <section className="w-full bg-slate-50 border-y border-slate-200 py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
                  {language === 'id' ? 'Dipercaya Oleh' : 'Trusted By'}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mt-3 font-medium">
                  {language === 'id' 
                    ? 'Mitra unggulan yang telah mengandalkan layanan kami' 
                    : 'Premier partners who rely on our services'}
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {serviceClients.map((client: any) => (
                  <div 
                    key={client.id}
                    className="flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group w-[150px] md:w-[200px]"
                  >
                    <div 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-white shadow-inner mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                      style={{ backgroundColor: client.color }}
                    >
                      <span className="font-black text-xl md:text-2xl tracking-tighter drop-shadow-md">{client.logoText}</span>
                    </div>
                    <span className="text-sm md:text-base font-bold text-center text-foreground/80 leading-tight">
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}

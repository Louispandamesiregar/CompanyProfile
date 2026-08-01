"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Truck, Globe, Building2, Clock } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { buttonVariants, Button } from "./ui/button"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"

export function HeroSection() {
  const { content, language } = useLanguage()
  const { heroSlides } = content.companyInfo
  const { badges } = content
  const [plugin] = React.useState(() => Autoplay({ delay: 5000, stopOnInteraction: true }))
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const features = language === 'id' ? [
    { icon: Truck, title: "Armada", subtitle: "Lengkap" },
    { icon: Globe, title: "Jangkauan", subtitle: "Nasional" },
    { icon: Building2, title: "Layanan", subtitle: "Corporate" },
    { icon: Clock, title: "Fast", subtitle: "Response" },
  ] : [
    { icon: Truck, title: "Complete", subtitle: "Fleet" },
    { icon: Globe, title: "National", subtitle: "Reach" },
    { icon: Building2, title: "Corporate", subtitle: "Service" },
    { icon: Clock, title: "Fast", subtitle: "Response" },
  ];

  React.useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="w-full relative bg-background">
      <Carousel setApi={setApi} plugins={[plugin]} className="w-full group" opts={{ loop: true, duration: 40 }}>
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[75vh] md:h-[550px] lg:h-[600px] w-full overflow-hidden">
                {/* Full width background image */}
                <Image 
                  src={slide.image}
                  alt={slide.headline}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                
                {/* Corporate Gradient Overlay for Text Readability - Lighter for better image visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/40 to-transparent" />

                {/* Content Container */}
                <div className="absolute inset-0 flex items-center pt-8 md:pt-12">
                  <div className="container mx-auto px-6 md:px-12 w-full">
                    <div className="w-full md:w-1/2 flex flex-col gap-6 animate-in slide-in-from-left-8 duration-700">
                      <div className="inline-block px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-bold tracking-widest uppercase rounded-sm w-max mb-2">
                        {slide.id === 1 ? badges.slide1 : slide.id === 2 ? badges.slide2 : badges.slide3}
                      </div>
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-primary-foreground leading-[1.1]">
                        {slide.headline}
                      </h1>
                      <p className="text-primary-foreground/90 text-sm md:text-xl font-medium max-w-lg">
                        {language === 'id' ? 'Kami menghadirkan solusi pengadaan ATK, Alat Kesehatan, dan layanan pengiriman barang dengan pelayanan cepat, ramah, dan profesional.' : 'We provide procurement solutions for Office Supplies, Medical Equipment, and freight forwarding services with fast, friendly, and professional service.'}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-3">
                        <Link 
                          href={slide.link}
                          className={buttonVariants({ size: "default", className: "bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-6 shadow-lg md:px-8 md:h-11" })}
                        >
                          {slide.cta}
                        </Link>
                      </div>
                    </div>

                    {/* Embedded Features (Full Width Row) */}
                    <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full animate-in slide-in-from-bottom-8 duration-700 delay-150">
                      {features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 md:gap-4">
                          <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors">
                            <feat.icon className="w-6 h-6 md:w-7 md:h-7 shrink-0" strokeWidth={1.5} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-white font-bold text-base md:text-lg leading-tight tracking-tight">{feat.title}</span>
                            <span className="text-white/80 font-medium text-xs md:text-sm">{feat.subtitle}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Controls (Visible on hover) */}
        <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CarouselPrevious className="h-12 w-12 border-2 border-primary-foreground/30 bg-primary/20 hover:bg-primary/60 text-primary-foreground backdrop-blur-sm" />
        </div>
        <div className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CarouselNext className="h-12 w-12 border-2 border-primary-foreground/30 bg-primary/20 hover:bg-primary/60 text-primary-foreground backdrop-blur-sm" />
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-secondary" : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}

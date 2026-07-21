"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
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
              <div className="relative h-[65vh] md:h-[600px] w-full overflow-hidden">
                {/* Full width background image */}
                <Image 
                  src={slide.image}
                  alt={slide.headline}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                
                {/* Corporate Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />

                {/* Content Container */}
                <div className="absolute inset-0 flex items-center pb-24 md:pb-16">
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
                        <Link 
                          href="#contact"
                          className={buttonVariants({ variant: "outline", size: "default", className: "bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-6 md:px-8 md:h-11" })}
                        >
                          {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
                        </Link>
                      </div>
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

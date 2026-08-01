"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { CheckCircle2, ChevronRight } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
function ServiceCarousel({ service, index }: { service: any, index: number }) {
  const direction = index % 2 === 0 ? "ltr" : "rtl"

  return (
    <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
      <Carousel
        opts={{ loop: true, direction, duration: 40 }}
        dir={direction}
        className="w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {service.images?.map((img: string, imgIdx: number) => (
            <CarouselItem key={imgIdx} className="relative h-[300px] md:h-[400px] w-full pl-0">
              <Image 
                src={img}
                alt={`${service.title} ${imgIdx + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay inside each item so it covers the image */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export function ServicesSection() {
  const { content, language } = useLanguage()
  const services = content.services.items

  return (
    <section id="services" className="pt-12 md:pt-16 pb-12 md:pb-16 bg-gradient-to-b from-card/50 to-background scroll-m-20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-[1440px]">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground uppercase">
            {content.services.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0
            
            return (
              <div key={service.id} className={`flex flex-col gap-8 md:gap-10 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Image Side with Autoplay Carousel */}
                <ServiceCarousel service={service} index={index} />

                {/* Text Side */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-14 h-14 min-w-[56px] min-h-[56px] flex-none rounded-xl text-white flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: service.color }}
                    >
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">{service.title}</h3>
                  </div>
                  
                  <ul className="space-y-5">
                    {service.items?.map((item: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 
                          className="w-6 h-6 mr-4 shrink-0 mt-0.5" 
                          style={{ color: service.color }}
                        />
                        <span className="text-lg text-foreground leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <Link href={`/services/${service.id}`} className={buttonVariants({ size: "lg", className: "group font-bold bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:bg-primary/90 transition-all border-0" })}>
                      {language === 'id' ? 'Selengkapnya' : 'Learn More'}
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

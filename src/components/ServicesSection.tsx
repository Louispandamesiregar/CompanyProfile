"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { ChevronRight } from "lucide-react"
import { MdCheckCircle } from "react-icons/md"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
function ServiceCarousel({ service, index }: { service: any, index: number }) {
  const direction = index % 2 === 0 ? "ltr" : "rtl"

  return (
    <div className="w-full md:w-[45%] lg:w-[500px] shrink-0 relative h-[250px] md:h-[300px] rounded-none overflow-hidden shadow-2xl group">
      <Carousel
        opts={{ loop: true, direction, duration: 40 }}
        dir={direction}
        className="w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {service.images?.map((img: string, imgIdx: number) => (
            <CarouselItem key={imgIdx} className="relative h-[250px] md:h-[300px] w-full pl-0">
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
    <section id="services" className="pt-8 md:pt-12 pb-8 md:pb-12 bg-slate-50/50 scroll-m-20 relative overflow-hidden">
      {/* Subtle Dotted Background Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#94a3b8 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
        }}
      />
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px] relative z-10">
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
              <div key={service.id} className={`flex flex-col gap-4 md:gap-6 lg:gap-8 items-center justify-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Image Side with Autoplay Carousel */}
                <ServiceCarousel service={service} index={index} />

                {/* Text Side */}
                <div className="w-full md:w-[50%] lg:w-[500px] space-y-6">
                  <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-6 text-slate-800">{service.title}</h3>
                  
                  <ul className="space-y-4 list-disc pl-6 marker:text-primary/60">
                    {service.items?.map((item: string, i: number) => (
                      <li key={i} className="text-base md:text-lg text-foreground/80 leading-relaxed font-normal">
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <Link href={`/services/${service.id}`} className={buttonVariants({ variant: "outline", size: "lg", className: "group font-bold bg-transparent text-primary border-2 border-primary/20 hover:border-primary hover:bg-primary/5 shadow-none transition-all" })}>
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

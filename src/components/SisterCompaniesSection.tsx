"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"
import { EcosystemMap } from "./EcosystemMap"

export function SisterCompaniesSection() {
  const { content } = useLanguage()
  const loopingCompanies = React.useMemo(() => [...content.sisterCompanies.items, ...content.sisterCompanies.items], [content.sisterCompanies.items])

  const [plugin] = React.useState(() => Autoplay({ delay: 3000, stopOnInteraction: false }))
  const [api, setApi] = React.useState<CarouselApi>()
  const [activeTab, setActiveTab] = React.useState<'carousel' | 'map'>('carousel')
  const { language } = useLanguage()

  const tweenNode = React.useCallback(
    (api: CarouselApi, engine: any, slideProgress: number, index: number) => {
      if (!api) return
      const slideNodes = api.slideNodes()
      if (!slideNodes || !slideNodes[index]) return
      
      const slideNode = slideNodes[index]
      const innerNode = slideNode.querySelector('.embla__slide__inner') as HTMLElement
      if (!innerNode) return

      const distance = slideProgress
      const rotateY = Math.min(Math.max(distance * 80, -60), 60) 
      const scale = Math.max(0.75, 1 - Math.abs(distance * 0.5))
      const opacity = Math.max(0.3, 1 - Math.abs(distance * 0.8))
      const zIndex = Math.round(100 - Math.abs(distance * 100))

      innerNode.style.transform = `rotateY(${rotateY}deg) scale(${scale})`
      innerNode.style.opacity = opacity.toString()
      innerNode.style.zIndex = zIndex.toString()
    },
    []
  )

  const onScroll = React.useCallback(() => {
    if (!api) return
    
    const engine = api.internalEngine()
    const scrollProgress = api.scrollProgress()
    
    api.scrollSnapList().forEach((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress
      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      tweenNode(api, engine, diffToTarget, index)
    })
  }, [api, tweenNode])

  React.useEffect(() => {
    if (!api) return
    
    // Initialize 3D transforms on mount (no longer sets state, so it's safe)
    onScroll()
    
    api.on("scroll", onScroll)
    api.on("reInit", onScroll)
  }, [api, onScroll])

  return (
    <section id="group" className="py-24 md:py-32 bg-slate-50 dark:bg-[#0a1116] scroll-m-20 overflow-hidden relative border-y border-border/50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-40 dark:opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <div className="absolute -left-40 top-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen pointer-events-none -translate-y-1/2" />
      <div className="absolute -right-40 top-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <h3 className="text-sm font-bold tracking-[0.3em] text-[#35627A] dark:text-teal-400 uppercase drop-shadow-sm">
            {content.sisterCompanies.subtitle}
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground drop-shadow-sm">
            {content.sisterCompanies.title}
          </h2>
        </div>

        <div className="flex justify-center mb-12 relative z-10">
          <div className="inline-flex bg-white dark:bg-white/5 p-1.5 rounded-2xl border border-border/60 shadow-lg backdrop-blur-md">
            <button 
              onClick={() => setActiveTab('carousel')}
              className={`px-8 py-3 rounded-xl text-sm font-extrabold transition-all duration-300 ${activeTab === 'carousel' ? 'bg-gradient-to-r from-[#35627A] to-teal-600 text-white shadow-[0_10px_20px_rgba(20,184,166,0.2)] scale-105' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
            >
              {language === 'id' ? 'Mode Etalase' : 'Showcase Mode'}
            </button>
            <button 
              onClick={() => setActiveTab('map')}
              className={`px-8 py-3 rounded-xl text-sm font-extrabold transition-all duration-300 ${activeTab === 'map' ? 'bg-gradient-to-r from-[#35627A] to-teal-600 text-white shadow-[0_10px_20px_rgba(20,184,166,0.2)] scale-105' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
            >
              {language === 'id' ? 'Mode Peta' : 'Map Mode'}
            </button>
          </div>
        </div>

        {/* Carousel Mode (Always mounted, toggled via CSS) */}
        <div className={`relative px-4 md:px-12 perspective-[1200px] animate-in fade-in zoom-in-95 duration-500 ${activeTab === 'carousel' ? 'block' : 'hidden'}`}>
          <Carousel
            setApi={setApi}
            plugins={[plugin]}
              opts={{
                align: "center",
                loop: true,
                duration: 40,
              }}
              className="w-full max-w-[1440px] mx-auto"
            >
              <CarouselContent className="transform-style-3d py-8">
                {loopingCompanies.map((company, index) => {
                  return (
                    <CarouselItem 
                      key={`${company.id}-${index}`} 
                      className="basis-2/3 md:basis-1/3"
                    >
                      <div
                        className="embla__slide__inner h-full relative"
                        style={{ transform: 'rotateY(0deg) scale(0.75)', opacity: 0.3, zIndex: 0 }}
                      >
                        <Link href={`/companies/${company.id}`} className="flex flex-col items-center justify-center p-6 h-full gap-5 group cursor-pointer bg-white dark:bg-white/5 backdrop-blur-xl rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-border/50 hover:border-teal-400/50 hover:shadow-[0_20px_50px_rgba(20,184,166,0.15)] transition-all duration-500">
                        <div className="h-40 md:h-48 w-full max-w-[280px] flex flex-col items-center justify-center relative transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                          {company.image ? (
                            <Image 
                              src={company.image} 
                              alt={company.name} 
                              fill 
                              className="object-contain p-2 drop-shadow-xl" 
                            />
                          ) : (
                            <span className="text-3xl font-black text-foreground drop-shadow-md text-center">
                              {company.name}
                            </span>
                          )}
                        </div>
                        <div className="text-center mt-2 relative z-10 w-full">
                          <h4 className="font-extrabold text-xl md:text-2xl text-foreground group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors drop-shadow-sm">{company.name}</h4>
                          <p className="text-sm md:text-base text-muted-foreground font-semibold mt-2 tracking-wide uppercase">
                            {company.shortDesc}
                          </p>
                        </div>
                        </Link>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              {/* Navigation buttons can be added here if needed */}
            </Carousel>
          </div>

        {/* Map Mode (Always mounted, toggled via CSS) */}
        <div className={`w-full relative z-10 px-4 md:px-12 animate-in fade-in zoom-in-95 duration-500 ${activeTab === 'map' ? 'block' : 'hidden'}`}>
          <EcosystemMap isActive={activeTab === 'map'} />
        </div>
      </div>
    </section>
  )
}

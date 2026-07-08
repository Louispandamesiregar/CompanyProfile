"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"

export function SisterCompaniesSection() {
  const { content } = useLanguage()
  const loopingCompanies = React.useMemo(() => [...content.sisterCompanies.items, ...content.sisterCompanies.items], [content.sisterCompanies.items])

  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))
  const [api, setApi] = React.useState<CarouselApi>()
  const [tweenValues, setTweenValues] = React.useState<number[]>([])

  const onScroll = React.useCallback(() => {
    if (!api) return
    
    const engine = api.internalEngine()
    const scrollProgress = api.scrollProgress()
    const slideProgress = api.scrollSnapList().map((scrollSnap, index) => {
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
      return diffToTarget
    })
    
    setTweenValues(slideProgress)
  }, [api])

  React.useEffect(() => {
    if (!api) return
    onScroll()
    api.on("scroll", onScroll)
    api.on("reInit", onScroll)
  }, [api, onScroll])

  return (
    <section id="group" className="py-24 bg-gradient-to-b from-background to-card/50 scroll-m-20 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <h3 className="text-sm font-bold tracking-[0.2em] bg-gradient-to-r from-[#35627A] to-teal-600 dark:from-teal-400 dark:to-cyan-200 bg-clip-text text-transparent uppercase drop-shadow-sm">
            {content.sisterCompanies.subtitle}
          </h3>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-foreground">
            {content.sisterCompanies.title}
          </h2>
        </div>

        <div className="relative px-4 md:px-12 perspective-[1200px]">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="transform-style-3d py-8">
              {loopingCompanies.map((company, index) => {
                // Calculate 3D values safely bounded
                const distance = tweenValues[index] || 0
                
                // Limit maximum rotation to 60 degrees either way
                const rotateY = Math.min(Math.max(distance * 80, -60), 60) 
                
                // Prevent scale from going negative (minimum 0.75)
                const scale = Math.max(0.75, 1 - Math.abs(distance * 0.5))
                
                // Prevent opacity from going below 0.3
                const opacity = Math.max(0.3, 1 - Math.abs(distance * 0.8))
                
                const zIndex = Math.round(100 - Math.abs(distance * 100))

                return (
                  <CarouselItem 
                    key={`${company.id}-${index}`} 
                    className="basis-2/3 md:basis-1/3"
                  >
                    <div
                      style={{
                        transform: `rotateY(${rotateY}deg) scale(${scale})`,
                        opacity: opacity,
                        zIndex: zIndex
                      }}
                      className="h-full relative transition-all duration-75"
                    >
                      <div className="flex flex-col items-center justify-center p-6 h-full gap-4 group cursor-pointer bg-gradient-to-br from-white/10 to-white/0 dark:from-white/5 dark:to-transparent backdrop-blur-md rounded-3xl shadow-xl border border-white/20 dark:border-white/10">
                      <div className="h-32 md:h-40 w-full max-w-[240px] flex flex-col items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:scale-110">
                        {company.image ? (
                          <Image 
                            src={company.image} 
                            alt={company.name} 
                            fill 
                            className="object-contain drop-shadow-xl" 
                          />
                        ) : (
                          <span className="text-2xl font-bold text-primary text-center">
                            {company.name}
                          </span>
                        )}
                      </div>
                      <div className="text-center mt-4">
                        <h4 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">{company.name}</h4>
                        <p className="text-sm text-muted-foreground font-medium mt-2">
                          {company.shortDesc}
                        </p>
                      </div>
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            {/* Navigation buttons can be added here if needed */}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

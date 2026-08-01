"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { X, MapPin } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"

export function SisterCompaniesSection() {
  const { content, language } = useLanguage()
  // Double the items to ensure Embla has enough slides to loop (6 items total instead of 9 for better performance)
  const loopingCompanies = React.useMemo(() => [...content.sisterCompanies.items, ...content.sisterCompanies.items], [content.sisterCompanies.items])

  const [plugin] = React.useState(() => Autoplay({ delay: 3000, stopOnInteraction: false }))
  const [api, setApi] = React.useState<CarouselApi>()

  // State for the currently expanded company (null = none expanded)
  const [expandedCompanyId, setExpandedCompanyId] = React.useState<number | null>(null)
  const detailPanelRef = React.useRef<HTMLDivElement>(null)

  // Get the currently expanded company data
  const expandedCompany = React.useMemo(() => {
    if (expandedCompanyId === null) return null
    return content.sisterCompanies.items.find((c: any) => c.id === expandedCompanyId) ?? null
  }, [expandedCompanyId, content.sisterCompanies.items])

  // Pause/resume autoplay based on expanded state
  React.useEffect(() => {
    if (!plugin || !api) return
    if (expandedCompanyId !== null) {
      plugin.stop()
    } else {
      plugin.play()
    }
  }, [expandedCompanyId, plugin, api])

  // Scroll to detail panel when company is expanded
  React.useEffect(() => {
    if (expandedCompanyId !== null && detailPanelRef.current) {
      // Small delay so the DOM can render the expanded panel first
      const timer = setTimeout(() => {
        detailPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [expandedCompanyId])

  const handleCardClick = React.useCallback((companyId: number) => {
    setExpandedCompanyId(prev => prev === companyId ? null : companyId)
  }, [])

  const tweenNode = React.useCallback(
    (api: CarouselApi, engine: any, slideProgress: number, index: number) => {
      if (!api) return
      const slideNodes = api.slideNodes()
      if (!slideNodes || !slideNodes[index]) return
      
      const slideNode = slideNodes[index]
      const innerNode = slideNode.querySelector('.embla__slide__inner') as HTMLElement
      if (!innerNode) return

      const distance = slideProgress
      // Removed rotateY because 3D rotation + Box Shadows causes severe GPU lag on mobile devices.
      // A pure Scale + Opacity tween (like Apple Music cover flow) is 10x lighter and smoother.
      const scale = Math.max(0.75, 1 - Math.abs(distance * 0.25))
      const opacity = Math.max(0.4, 1 - Math.abs(distance * 0.6))
      const zIndex = Math.round(100 - Math.abs(distance * 100))

      // will-change is removed to prevent allocating permanent GPU layers per slide which causes heavy VRAM usage on mobile
      innerNode.style.transform = `scale(${scale})`
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
    <section id="group" className="pt-12 md:pt-16 pb-12 md:pb-16 bg-slate-50 scroll-m-20 overflow-hidden relative border-y border-border/50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -left-40 top-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] rounded-full mix-blend-multiply pointer-events-none -translate-y-1/2" />
      <div className="absolute -right-40 top-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(29,78,216,0.15)_0%,transparent_70%)] rounded-full mix-blend-multiply pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <h3 className="text-sm font-bold tracking-[0.3em] text-primary uppercase drop-shadow-sm">
            {content.sisterCompanies.subtitle}
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground drop-shadow-sm">
            {content.sisterCompanies.title}
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative px-4 md:px-12 perspective-[1200px] animate-in fade-in zoom-in-95 duration-500">
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
                  const isExpanded = expandedCompanyId === company.id
                  return (
                    <CarouselItem 
                      key={`${company.id}-${index}`} 
                      className="basis-2/3 md:basis-1/3"
                    >
                      <div
                        className="embla__slide__inner h-full relative"
                        style={{ transform: 'scale(0.75)', opacity: 0.4, zIndex: 0 }}
                      >
                        {/* Removed backdrop-blur-xl because it causes massive GPU lag during scroll */}
                        <button
                          onClick={() => handleCardClick(company.id)}
                          className={`flex flex-col items-center justify-center p-6 h-full w-full gap-5 group cursor-pointer bg-white rounded-3xl shadow-xl border transition-all duration-300 text-left ${
                            isExpanded
                              ? 'border-primary shadow-[0_20px_50px_rgba(37,99,235,0.25)] ring-2 ring-primary/30'
                              : 'border-border/50 hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]'
                          }`}
                        >
                        <div className="h-40 md:h-48 w-full max-w-[280px] flex flex-col items-center justify-center relative transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                          {company.image ? (
                            <Image 
                              src={company.image} 
                              alt={company.name} 
                              fill 
                              className="object-contain p-2" 
                            />
                          ) : (
                            <span className="text-3xl font-black text-foreground text-center">
                              {company.name}
                            </span>
                          )}
                        </div>
                        <div className="text-center mt-2 relative z-10 w-full">
                          <h4 className={`font-extrabold text-xl md:text-2xl transition-colors ${
                            isExpanded
                              ? 'text-primary'
                              : 'text-foreground group-hover:text-primary'
                          }`}>{company.name}</h4>
                          <p className="text-sm md:text-base text-muted-foreground font-semibold mt-2 tracking-wide uppercase">
                            {company.shortDesc}
                          </p>
                        </div>
                        {/* Expand indicator */}
                        <div className={`flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                          isExpanded
                            ? 'text-primary'
                            : 'text-muted-foreground/60 group-hover:text-blue-500'
                        }`}>
                          <span>{isExpanded ? (language === 'id' ? 'Tutup' : 'Close') : (language === 'id' ? 'Lihat Detail' : 'View Detail')}</span>
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        </button>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              {/* Navigation buttons can be added here if needed */}
            </Carousel>

          {/* Expandable Detail Panel — Accordion below carousel */}
          <div
            ref={detailPanelRef}
            className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
              expandedCompany ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
            }`}
          >
            {expandedCompany && (
              <div className="relative w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="relative bg-white rounded-3xl shadow-2xl border border-primary/30 overflow-hidden">
                  {/* Card top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-secondary" />
                  

                  <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center relative z-10">
                    {/* Company Logo / Image / Gallery */}
                    {expandedCompany.gallery && expandedCompany.gallery.length > 0 ? (
                      <div className="flex flex-wrap gap-3 md:gap-4 shrink-0 max-w-[280px] md:max-w-[420px] justify-center md:justify-start">
                        {expandedCompany.gallery.map((img: any, idx: number) => (
                          <div key={idx} className="w-20 h-20 md:w-28 md:h-28 relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl md:rounded-2xl border border-border/50 shadow-md flex items-center justify-center p-2 hover:scale-105 transition-transform">
                            <Image
                              src={img}
                              alt={`${expandedCompany.name} asset ${idx + 1}`}
                              fill
                              className="object-contain p-2 md:p-3"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="w-32 h-32 md:w-44 md:h-44 relative shrink-0 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-border/50 shadow-lg flex items-center justify-center p-4">
                        {expandedCompany.image ? (
                          <Image
                            src={expandedCompany.image}
                            alt={expandedCompany.name}
                            fill
                            className="object-contain p-4"
                          />
                        ) : (
                          <span className="text-4xl font-black text-foreground">
                            {expandedCompany.logoText}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Company Details */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
                          {expandedCompany.name}
                        </h3>
                        <span className="inline-flex items-center self-center md:self-auto px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
                          {expandedCompany.shortDesc}
                        </span>
                      </div>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                        {expandedCompany.fullDesc}
                      </p>
                      {expandedCompany.address && (
                        <div className="flex items-start gap-2 justify-center md:justify-start text-sm text-muted-foreground/80 font-medium">
                          <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                          <span>{expandedCompany.address}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setExpandedCompanyId(null)}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-red-50:bg-red-950/50 text-muted-foreground hover:text-red-500 transition-all duration-200 shadow-sm border border-border/50 hover:border-red-300/50 z-20"
                    aria-label={language === 'id' ? 'Tutup detail' : 'Close detail'}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

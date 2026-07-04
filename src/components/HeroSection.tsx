import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { companyInfo } from "@/data/content"
import { buttonVariants } from "./ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HeroSection() {
  const { heroSlides } = companyInfo

  return (
    <section className="w-full relative bg-background">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[80vh] md:h-[550px] w-full overflow-hidden bg-primary/95">
                {/* Aesthetic Soft Mesh Gradient Background */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-400/40 rounded-full mix-blend-screen filter blur-[100px] animate-pulse-slow pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-sky-300/40 rounded-full mix-blend-screen filter blur-[100px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[20%] right-[30%] w-[45%] h-[45%] bg-purple-400/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '4s' }} />
                
                {/* Right Side: Image container overlapping */}
                <div className="absolute right-0 md:right-8 lg:right-16 top-16 md:top-8 bottom-0 md:bottom-8 w-full md:w-[60%] lg:w-[50%] h-[50%] md:h-auto overflow-hidden rounded-tl-3xl md:rounded-3xl shadow-2xl">
                  <Image 
                    src={slide.image}
                    alt="Hero slide"
                    fill
                    className="object-cover"
                    priority={slide.id === 1}
                  />
                  {/* Subtle overlay to ensure text readability if it overlaps heavily */}
                  <div className="absolute inset-0 bg-black/20 md:bg-transparent" />
                </div>

                {/* Left Side: Overlapping Text */}
                <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-8 md:pl-24 pb-12 md:pb-0 z-10 pointer-events-none">
                  <div className="w-full md:w-[80%] lg:w-[70%]">
                    <h1 
                      className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold uppercase tracking-tighter whitespace-pre-line leading-[0.95] text-white drop-shadow-xl animate-fade-in-up"
                    >
                      {slide.headline}
                    </h1>
                    <div className="mt-8 animate-fade-in-up pointer-events-auto" style={{ animationDelay: '0.2s' }}>
                      <Link 
                        href={slide.link}
                        className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary font-semibold px-8 transition-colors backdrop-blur-sm" })}
                      >
                        {slide.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Controls */}
        <div className="absolute top-1/2 left-2 md:left-6 -translate-y-1/2 z-20">
          <CarouselPrevious className="static translate-y-0 h-10 w-10 border-none bg-white/20 hover:bg-white/40 text-white backdrop-blur-md" />
        </div>
        <div className="absolute top-1/2 right-2 md:right-6 -translate-y-1/2 z-20">
          <CarouselNext className="static translate-y-0 h-10 w-10 border-none bg-white/20 hover:bg-white/40 text-white backdrop-blur-md" />
        </div>
      </Carousel>
    </section>
  )
}

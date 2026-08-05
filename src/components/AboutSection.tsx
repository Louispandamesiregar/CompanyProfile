"use client"

import * as React from "react"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import boxDeretImg from "@/assets/Box_deret.webp"
import { motion } from "framer-motion"

export function AboutSection() {
  const { content } = useLanguage()
  const { about, visi, misi } = content.companyInfo

  return (
    <section id="about" className="pt-8 md:pt-12 pb-8 md:pb-12 bg-white scroll-m-16 border-t border-border/40 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px] relative">
        
        {/* Kontainer Relatif untuk Overlapping */}
        <div className="relative w-full flex flex-col lg:flex-row">
          
          {/* KOTAK KIRI (Tentang Kami) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full lg:w-7/12 h-fit relative p-8 md:p-12 lg:p-16 lg:pr-40 z-10 shadow-sm rounded-none overflow-hidden bg-slate-900"
          >
            {/* Latar Belakang Gambar (Tanpa Blur agar Kontras) */}
            <Image 
              src={boxDeretImg}
              alt="Latar Belakang Tentang Kami"
              fill
              className="object-cover z-0 opacity-70 mix-blend-luminosity"
            />
            {/* Overlay Gelap Dasar */}
            <div className="absolute inset-0 bg-slate-900/30 z-0"></div>
            
            {/* Overlay Biru Miring (Slanted Polygon) */}
            <div className="absolute inset-0 bg-primary/95 z-0" style={{ clipPath: 'polygon(0 0, 85% 0, 55% 100%, 0 100%)' }}></div>
            
            {/* Garis Aksen Miring */}
            <div className="absolute inset-0 bg-primary/60 z-0" style={{ clipPath: 'polygon(85% 0, 87% 0, 57% 100%, 55% 100%)' }}></div>
            
            {/* Konten Text */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">
                {about.title}
              </h2>
              <div className="w-16 h-1 bg-white mb-6"></div>
              <p className="text-base md:text-lg text-white/95 leading-normal text-justify">
                {about.description}
              </p>
            </div>
          </motion.div>

          {/* KOTAK KANAN (Visi & Misi - Overlapping) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full lg:w-7/12 bg-slate-50 p-8 md:p-12 lg:p-16 z-20 shadow-2xl mt-8 lg:-ml-32 lg:mt-24 border border-slate-100 rounded-none relative"
          >
            
            {/* Layer Ornamen Geometris (Hanya untuk estetika latar belakang) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Motif Garis-garis diagonal di pojok kanan atas */}
              <div className="absolute -top-12 -right-12 w-48 h-48 opacity-[0.05] rotate-12" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)' }}></div>
              {/* Ornamen Lingkaran Geometris di kiri bawah */}
              <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border-[30px] border-primary/[0.04]"></div>
              {/* Motif Dot Grid Samar di area tengah yang memudar di pinggir */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(37,99,235,0.05)_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"></div>
            </div>

            {/* Grid 2 Kolom untuk Visi dan Misi agar berjajar kiri-kanan */}
            <div className="grid md:grid-cols-2 gap-10 md:gap-8 relative z-10">
              
              {/* Kolom Kiri: Visi */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 uppercase tracking-tight">
                  {visi.title}
                </h3>
                <div className="w-10 h-1 bg-primary mb-4"></div>
                <div className="space-y-3">
                  {visi.items?.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="font-bold text-primary/80 mt-0.5">{index + 1}.</span>
                      <p className="text-sm md:text-base text-foreground/90 leading-snug text-justify">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kolom Kanan: Misi */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 uppercase tracking-tight">
                  {misi.title}
                </h3>
                <div className="w-10 h-1 bg-primary mb-4"></div>
                <ul className="space-y-3 text-sm md:text-base text-foreground/90 leading-snug text-justify">
                  {misi.items.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary/60 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

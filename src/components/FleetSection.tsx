"use client"

import * as React from "react"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import { Truck, Package, Maximize, ArrowRight, CheckCircle2 } from "lucide-react"
import blindVanImg from "../../public/fleet/blind-van.png"
import cdeBoxImg from "../../public/fleet/cde-box.png"
import cddBoxImg from "../../public/fleet/cdd-box.png"
import trontonWingboxImg from "../../public/fleet/tronton-wingbox.png"

const FLEET_DATA = [
  {
    id: "blind-van",
    name: "Blind Van",
    image: blindVanImg,
    capacity: "700 kg",
    dimensions: "P: 2.1m | L: 1.4m | T: 1.3m",
    idealFor: "Pengiriman cepat dalam kota, paket kecil, dan dokumen bernilai tinggi.",
    features: ["Bebas ganjil genap", "Akses jalan sempit", "Tertutup aman"]
  },
  {
    id: "cde-box",
    name: "Engkel Box (CDE)",
    image: cdeBoxImg,
    capacity: "2.000 kg - 2.500 kg",
    dimensions: "P: 3.1m | L: 1.7m | T: 1.7m",
    idealFor: "Pengiriman kargo sedang, pindahan kantor, dan suplai barang retail.",
    features: ["Akses perumahan", "Bebas hujan & panas", "Kapasitas 6 CBM"]
  },
  {
    id: "cdd-box",
    name: "Double Box (CDD)",
    image: cddBoxImg,
    capacity: "4.000 kg - 5.000 kg",
    dimensions: "P: 4.2m | L: 2.0m | T: 2.0m",
    idealFor: "Distribusi barang industri, logistik antar kota, dan muatan palet.",
    features: ["Kapasitas muat besar", "Stabil antar kota", "Muat 12 CBM"]
  },
  {
    id: "tronton-wingbox",
    name: "Tronton Wingbox",
    image: trontonWingboxImg,
    capacity: "18.000 kg - 25.000 kg",
    dimensions: "P: 9.5m | L: 2.45m | T: 2.5m",
    idealFor: "Kargo berat antar provinsi, distribusi pabrik, dan muatan curah.",
    features: ["Bongkar muat 3 sisi", "Ekstra aman", "Muat 45 CBM"]
  }
]

export function FleetSection() {
  const [activeId, setActiveId] = React.useState(FLEET_DATA[0].id)
  const activeFleet = FLEET_DATA.find(f => f.id === activeId) || FLEET_DATA[0]
  const { language } = useLanguage()

  return (
    <section className="py-24 bg-white dark:bg-background relative overflow-hidden border-t border-border/50">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent dark:from-white/[0.02] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <h3 className="text-sm font-bold tracking-[0.3em] text-[#35627A] dark:text-teal-400 uppercase drop-shadow-sm">
            {language === 'id' ? 'Kapasitas Armada' : 'Fleet Capacity'}
          </h3>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground drop-shadow-sm">
            {language === 'id' ? 'Armada Logistik Kami' : 'Our Logistics Fleet'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {language === 'id' 
              ? 'Dukungan armada lengkap dengan berbagai kapasitas muatan untuk memastikan pengiriman barang Anda tiba dengan aman dan tepat waktu ke seluruh pelosok Nusantara.'
              : 'Comprehensive fleet support with various payload capacities to ensure your goods arrive safely and on time across the archipelago.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: List/Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {FLEET_DATA.map((fleet) => (
              <button
                key={fleet.id}
                onClick={() => setActiveId(fleet.id)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                  activeId === fleet.id 
                    ? 'bg-gradient-to-r from-[#35627A] to-teal-700 text-white shadow-xl shadow-teal-900/20 scale-[1.02]' 
                    : 'bg-card border border-border/50 hover:border-teal-500/30 hover:bg-muted text-foreground'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${activeId === fleet.id ? 'bg-white/20' : 'bg-muted-foreground/10 group-hover:bg-teal-500/10'}`}>
                    <Truck className={`w-6 h-6 transition-colors ${activeId === fleet.id ? 'text-white' : 'text-muted-foreground group-hover:text-teal-600'}`} />
                  </div>
                  <span className={`font-bold text-lg transition-colors ${activeId === fleet.id ? 'text-white' : ''}`}>
                    {fleet.name}
                  </span>
                </div>
                <ArrowRight className={`w-5 h-5 transition-all duration-300 ${activeId === fleet.id ? 'opacity-100 translate-x-0 text-white' : 'opacity-0 -translate-x-4 text-teal-600 group-hover:opacity-100 group-hover:translate-x-0'}`} />
              </button>
            ))}
          </div>

          {/* Right Column: Display */}
          <div className="lg:col-span-8">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-white/5 dark:to-transparent border border-border/50 rounded-3xl p-8 md:p-12 h-full flex flex-col relative overflow-hidden shadow-2xl">
              
              <div className="flex-1 flex flex-col lg:flex-row items-center gap-8 relative z-10">
                {/* 3D Image */}
                <div className="w-full lg:w-1/2 flex justify-center relative min-h-[250px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(20,184,166,0.15)_0%,transparent_70%)] rounded-full" />
                  <div className="relative w-full aspect-[4/3] max-w-[400px]">
                    <Image
                      key={activeFleet.id}
                      src={activeFleet.image}
                      alt={activeFleet.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain drop-shadow-2xl animate-in slide-in-from-right-8 fade-in duration-500"
                      priority
                    />
                  </div>
                </div>

                {/* Specs */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-100">
                    <h3 className="text-3xl font-black text-foreground mb-2">{activeFleet.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{activeFleet.idealFor}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in slide-in-from-bottom-4 fade-in duration-500 delay-200">
                    <div className="bg-white dark:bg-white/5 p-4 rounded-2xl border border-border/50 shadow-sm">
                      <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 mb-1">
                        <Package className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Kapasitas</span>
                      </div>
                      <div className="font-bold text-foreground">{activeFleet.capacity}</div>
                    </div>
                    
                    <div className="bg-white dark:bg-white/5 p-4 rounded-2xl border border-border/50 shadow-sm">
                      <div className="flex items-center gap-2 text-[#35627A] dark:text-cyan-400 mb-1">
                        <Maximize className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Dimensi</span>
                      </div>
                      <div className="font-bold text-foreground text-sm">{activeFleet.dimensions}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50 animate-in slide-in-from-bottom-4 fade-in duration-500 delay-300">
                    <ul className="space-y-3">
                      {activeFleet.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-foreground font-medium">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

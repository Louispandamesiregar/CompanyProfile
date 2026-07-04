import * as React from "react"
import { services } from "@/data/content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { ArrowRight } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background scroll-m-20">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">Solusi Bisnis <br/><span className="text-primary">Terintegrasi</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kami menghadirkan berbagai solusi digital komprehensif yang dirancang khusus untuk memenuhi kebutuhan bisnis Anda di era modern.
            </p>
          </div>
          <div className="hidden md:flex">
            <a href="#contact" className="text-primary font-bold hover:underline flex items-center gap-2">
              Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.id} className="group flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 border-border bg-card relative overflow-hidden rounded-xl">
                {/* Decorative Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                
                <CardHeader className="pt-8 px-8 relative z-10">
                  <div 
                    className="w-14 h-14 rounded-full text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 shadow-sm mb-6"
                    style={{ backgroundColor: service.color }}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8 flex-1 flex flex-col justify-between">
                  <CardDescription className="text-base text-foreground/70 leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center text-sm font-bold text-primary group-hover:gap-2 transition-all">
                    Selengkapnya <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

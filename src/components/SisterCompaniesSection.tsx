import * as React from "react"
import Image from "next/image"
import { sisterCompanies } from "@/data/content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card"
import { buttonVariants, Button } from "./ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

export function SisterCompaniesSection() {
  return (
    <section id="group" className="py-24 bg-muted/10 border-t border-b scroll-m-20">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center space-y-6 mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">Grup <span className="text-primary">Perusahaan</span></h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ekosistem layanan terintegrasi dari grup perusahaan kami, hadir untuk melengkapi setiap kebutuhan operasional dan visual bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sisterCompanies.map((company) => (
            <Card key={company.id} className="group/card flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 border-border bg-card relative overflow-hidden rounded-xl">
              <CardHeader className="flex flex-col gap-4 relative z-10 pt-8 px-8">
                <div className="w-16 h-16 rounded-xl bg-secondary/30 flex items-center justify-center text-primary font-bold text-2xl shrink-0 group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-colors duration-500 shadow-sm">
                  {company.logoText}
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold mb-2">{company.name}</CardTitle>
                  <CardDescription className="text-sm font-semibold text-primary">{company.shortDesc}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1 px-8">
                <p className="text-foreground/70 leading-relaxed line-clamp-3">
                  {company.fullDesc}
                </p>
              </CardContent>
              <CardFooter className="px-8 pb-8 pt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-colors border">
                      Lihat Detail <ArrowRight className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-xl border-none shadow-2xl">
                    {company.image && (
                      <div className="relative w-full h-48 sm:h-64 bg-muted">
                        <Image 
                          src={company.image} 
                          alt={company.name} 
                          fill 
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute bottom-6 left-6 flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                            {company.logoText}
                          </div>
                          <div>
                            <DialogTitle className="text-2xl font-bold text-white mb-1">{company.name}</DialogTitle>
                            <DialogDescription className="text-white/80 font-medium">
                              {company.shortDesc}
                            </DialogDescription>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="p-8">
                      <p className="text-foreground/80 leading-relaxed text-base mb-8">
                        {company.fullDesc}
                      </p>
                      <a 
                        href={company.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={buttonVariants({ size: "lg", className: "w-full gap-2 font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" })}
                      >
                        Kunjungi Website <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

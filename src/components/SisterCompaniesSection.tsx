import * as React from "react"
import Image from "next/image"
import { sisterCompanies } from "@/data/content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card"
import { buttonVariants, Button } from "./ui/button"
import { ExternalLink } from "lucide-react"
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
    <section id="group" className="py-20 bg-muted/30 scroll-m-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sister Companies</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Grup perusahaan kami yang tergabung untuk memberikan ekosistem layanan yang lebih luas dan terintegrasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sisterCompanies.map((company) => (
            <Card key={company.id} className="group/card flex flex-col hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 relative overflow-hidden">
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <CardHeader className="flex flex-row items-center gap-4 relative z-10">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl shrink-0 group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-colors duration-300 shadow-sm">
                  {company.logoText}
                </div>
                <div>
                  <CardTitle className="text-xl">{company.name}</CardTitle>
                  <CardDescription className="line-clamp-1">{company.shortDesc}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground line-clamp-3">
                  {company.fullDesc}
                </p>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger render={<Button variant="outline" className="w-full" />}>
                    Detail
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl shrink-0">
                          {company.logoText}
                        </div>
                        <div>
                          <DialogTitle className="text-2xl">{company.name}</DialogTitle>
                          <DialogDescription className="mt-1">
                            {company.shortDesc}
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>
                    {company.image && (
                      <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden my-4 border">
                        <Image 
                          src={company.image} 
                          alt={company.name} 
                          fill 
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="py-2">
                      <p className="text-foreground leading-relaxed">
                        {company.fullDesc}
                      </p>
                    </div>
                    <div className="flex justify-end pt-4 border-t mt-4">
                      <a href={company.website} target="_blank" rel="noopener noreferrer" className={buttonVariants({ className: "gap-2" })}>
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

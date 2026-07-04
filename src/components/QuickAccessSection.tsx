import * as React from "react"
import Link from "next/link"
import { FaLaptopCode, FaBullhorn, FaUserTie, FaBuilding, FaShieldAlt, FaHeadset } from "react-icons/fa"
import { Card, CardContent } from "./ui/card"

export function QuickAccessSection() {
  const quickLinks = [
    { name: "Web Development", icon: FaLaptopCode, href: "#services", color: "#4285F4" },
    { name: "Digital Marketing", icon: FaBullhorn, href: "#services", color: "#EA4335" },
    { name: "IT Consultant", icon: FaUserTie, href: "#services", color: "#FF9800" },
    { name: "Company Profile", icon: FaBuilding, href: "#group", color: "#34A853" },
    { name: "Secure Solutions", icon: FaShieldAlt, href: "#services", color: "#9C27B0" },
    { name: "Customer Support", icon: FaHeadset, href: "#contact", color: "#25D366" },
  ]

  return (
    <section className="w-full relative -mt-16 md:-mt-24 z-30 px-4 md:px-8 max-w-7xl mx-auto">
      <Card className="shadow-2xl border-none overflow-hidden rounded-xl bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90">
        <CardContent className="p-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
            {quickLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex flex-col items-center justify-center p-6 gap-4 hover:bg-muted transition-colors group cursor-pointer text-center"
                >
                  <div 
                    className="w-12 h-12 rounded-full text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shadow-sm"
                    style={{ backgroundColor: link.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-card-foreground/80 group-hover:text-primary transition-colors">
                    {link.name}
                  </span>
                </Link>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

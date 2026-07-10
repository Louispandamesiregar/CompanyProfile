import * as React from "react"
import Link from "next/link"
import { FaTruck, FaBriefcase, FaStethoscope, FaPrint, FaHeadset } from "react-icons/fa"

export function QuickAccessSection() {
  const featuredProducts = [
    { name: "Armada CDE/CDD", icon: FaTruck, href: "#services", color: "#4285F4" },
    { name: "Kertas & ATK", icon: FaBriefcase, href: "#services", color: "#EA4335" },
    { name: "Alat Kesehatan", icon: FaStethoscope, href: "#services", color: "#34A853" },
    { name: "Tinta & Toner", icon: FaPrint, href: "#services", color: "#FBBC05" },
  ]

  return (
    <section className="w-full relative -mt-8 md:-mt-12 z-30 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        {featuredProducts.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 bg-card/95 hover:bg-card px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50 backdrop-blur supports-[backdrop-filter]:bg-card/80 group"
            >
              <div 
                className="w-10 h-10 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: link.color }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-foreground/90 group-hover:text-primary transition-colors">
                {link.name}
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

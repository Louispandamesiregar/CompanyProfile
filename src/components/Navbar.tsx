"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search, Globe, ChevronDown, User } from "lucide-react"
import { companyInfo } from "@/data/content"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null)

  const navLinks = [
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services", hasDropdown: true },
    { name: "Sister Companies", href: "#group" },
    { name: "Insight & Promo", href: "#promo" },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-sm">
      {/* Top Utility Bar */}
      <div className="hidden md:flex w-full bg-primary text-primary-foreground h-9 items-center justify-between px-8 text-xs font-medium tracking-wide">
        <div className="flex gap-6">
          <Link href="#" className="hover:opacity-80 transition-opacity">Individu</Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">Bisnis</Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">Prioritas</Link>
        </div>
        <div className="flex gap-6 items-center">
          <Link href="#" className="hover:opacity-80 transition-opacity">Karir</Link>
          <Link href="#contact" className="hover:opacity-80 transition-opacity">Hubungi Kami</Link>
          <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
            <Globe className="w-3 h-3" />
            <span>ID</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-extrabold text-2xl tracking-tighter text-primary flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-bl-lg rounded-tr-lg flex items-center justify-center">
                <span className="text-primary-foreground text-sm">NX</span>
              </div>
              {companyInfo.logoText}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setActiveMenu(link.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary rounded-md group-hover:bg-muted"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-transform group-hover:rotate-180" />}
                  </Link>

                  {/* Mega Menu Dropdown (Mockup) */}
                  {link.hasDropdown && activeMenu === link.name && (
                    <div className="absolute top-full left-0 w-[600px] bg-card text-card-foreground border shadow-xl rounded-b-xl p-6 grid grid-cols-2 gap-6 animate-in slide-in-from-top-2">
                      <div>
                        <h4 className="font-bold text-primary mb-4 border-b pb-2">Digital Solutions</h4>
                        <ul className="space-y-3">
                          <li><Link href="#services" className="text-sm hover:text-primary transition-colors block">Web Development</Link></li>
                          <li><Link href="#services" className="text-sm hover:text-primary transition-colors block">Mobile Apps</Link></li>
                          <li><Link href="#services" className="text-sm hover:text-primary transition-colors block">UI/UX Design</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-4 border-b pb-2">Business Growth</h4>
                        <ul className="space-y-3">
                          <li><Link href="#services" className="text-sm hover:text-primary transition-colors block">Digital Marketing</Link></li>
                          <li><Link href="#services" className="text-sm hover:text-primary transition-colors block">Data Analytics</Link></li>
                          <li><Link href="#services" className="text-sm hover:text-primary transition-colors block">IT Consulting</Link></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex text-foreground/70 hover:text-primary">
              <Search className="w-5 h-5" />
            </Button>
            <ThemeToggle />
            <Button className="hidden md:flex gap-2 rounded-full px-6 font-semibold shadow-md hover:shadow-lg transition-all">
              <User className="w-4 h-4" />
              Client Login
            </Button>

            {/* Mobile Nav Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="flex flex-col gap-6 pt-12 px-6 bg-background">
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={closeMenu}
                        className="text-lg font-semibold text-foreground/80 hover:text-primary border-b pb-2 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-col gap-4 pb-8">
                    <Button className="w-full justify-start gap-2" size="lg">
                      <User className="w-5 h-5" />
                      Client Login
                    </Button>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
                      <span>Language</span>
                      <div className="flex gap-2 font-semibold">
                        <span className="text-primary">ID</span> | <span>EN</span>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

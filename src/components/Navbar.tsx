"use client"

import * as React from "react"
import Link from "next/link"
import { Globe, Menu, Search, ChevronDown, User } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null)
  const { language, toggleLanguage, content } = useLanguage()
  const { navLinks, companyInfo } = content
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-sm">
      {/* Main Navbar */}
      <div className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-extrabold text-2xl tracking-tighter flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-[#35627A] to-teal-600 dark:from-teal-400 dark:to-cyan-200 rounded-bl-lg rounded-tr-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white dark:text-[#1C323E] text-sm font-black">NJ</span>
              </div>
              <span className="bg-gradient-to-r from-[#35627A] to-teal-600 dark:from-teal-400 dark:to-cyan-200 bg-clip-text text-transparent drop-shadow-sm">
                {companyInfo.logoText}
              </span>
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

                  {/* Mega Menu Dropdown */}
                  {link.hasDropdown && activeMenu === link.name && (
                    <div className="absolute top-full left-0 w-[500px] bg-card text-card-foreground border shadow-xl rounded-b-xl p-6 grid grid-cols-2 gap-6 animate-in slide-in-from-top-2">
                      <div>
                        <h4 className="font-bold text-primary mb-4 border-b pb-2">{language === 'id' ? 'Pengadaan' : 'Procurement'}</h4>
                        <ul className="space-y-3">
                          <li><Link href="#services" className="text-sm hover:text-primary transition-colors block">{language === 'id' ? 'Alat Tulis Kantor (ATK)' : 'Office Supplies (ATK)'}</Link></li>
                          <li><Link href="#services" className="text-sm hover:text-primary transition-colors block">{language === 'id' ? 'Alat Kesehatan (Alkes)' : 'Medical Equipment'}</Link></li>
                          <li><Link href="#services" className="text-sm hover:text-primary transition-colors block">{language === 'id' ? 'Tinta & Perlengkapan Printer' : 'Ink & Printer Accessories'}</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-4 border-b pb-2">{language === 'id' ? 'Distribusi' : 'Distribution'}</h4>
                        <ul className="space-y-3">
                          <li><Link href="#services" className="text-sm hover:text-primary transition-colors block">{language === 'id' ? 'Pengiriman Barang (Box)' : 'Freight Forwarding (Box)'}</Link></li>
                          <li><Link href="#services" className="text-sm hover:text-primary transition-colors block">{language === 'id' ? 'Jalur Darat (Jawa)' : 'Land Route (Java)'}</Link></li>
                          <li><Link href="#services" className="text-sm hover:text-primary transition-colors block">{language === 'id' ? 'Jalur Laut (Luar Pulau)' : 'Sea Route (Other Islands)'}</Link></li>
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
            <Button variant="ghost" size="icon" className="flex text-foreground/70 hover:text-primary">
              <Search className="w-5 h-5" />
            </Button>
            <div 
              onClick={toggleLanguage}
              className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity text-foreground/70 hover:text-primary"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-semibold">{language.toUpperCase()}</span>
            </div>

            <ThemeToggle />
            <Button className="hidden md:flex gap-2 rounded-full px-6 font-semibold shadow-md hover:shadow-lg transition-all">
              <User className="w-4 h-4" />
              Client Login
            </Button>

            {/* Mobile Nav Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger render={<Button variant="ghost" size="icon" className="text-foreground" />}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
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
                      <div className="flex gap-2 font-semibold cursor-pointer" onClick={toggleLanguage}>
                        <span className={language === 'id' ? 'text-primary' : 'hover:text-primary transition-colors'}>ID</span> | 
                        <span className={language === 'en' ? 'text-primary' : 'hover:text-primary transition-colors'}>EN</span>
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

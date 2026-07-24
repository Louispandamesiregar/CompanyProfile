"use client"

import * as React from "react"
import Link from "next/link"
import { useLanguage } from "@/context/LanguageContext"
import { Phone, Mail, MapPin } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

export function Footer() {
  const { content, language } = useLanguage()
  const { companyInfo, footer } = content
  const year = new Date().getFullYear()

  return (
    <footer className="bg-card text-card-foreground border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <Link href="/" className="font-extrabold text-2xl tracking-tighter flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-[#35627A] to-teal-600 rounded-bl-lg rounded-tr-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white#1C323E] text-sm font-black">NJ</span>
              </div>
              <span className="bg-gradient-to-r from-[#35627A] to-teal-600 bg-clip-text text-transparent drop-shadow-sm">
                {companyInfo.logoText}
              </span>
            </Link>
            <p className="text-sm text-card-foreground/70 leading-relaxed pr-4">
              {footer.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{footer.quickLinksTitle}</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">{language === 'id' ? 'Tentang Kami' : 'About Us'}</Link></li>
              <li><Link href="#services" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">{language === 'id' ? 'Solusi & Layanan' : 'Solutions & Services'}</Link></li>
              <li><Link href="#contact" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">{language === 'id' ? 'Hubungi Kami' : 'Contact Us'}</Link></li>
            </ul>
          </div>

          {/* Column 3: Layanan Kami */}
          <div>
            <h4 className="font-bold text-lg mb-6">{language === 'id' ? 'Layanan Kami' : 'Our Services'}</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">{language === 'id' ? 'Pengiriman Barang' : 'Freight Forwarding'}</Link></li>
              <li><Link href="#services" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">{language === 'id' ? 'Pengadaan ATK' : 'Office Supplies'}</Link></li>
              <li><Link href="#services" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">{language === 'id' ? 'Pengadaan Alkes' : 'Medical Equipment'}</Link></li>
              <li><Link href="#services" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">{language === 'id' ? 'Tinta & Printer' : 'Ink & Printers'}</Link></li>
            </ul>
          </div>

          {/* Column 4: Hubungi Kami */}
          <div>
            <h4 className="font-bold text-lg mb-6">{footer.contactTitle}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-card-foreground/70 leading-relaxed">{companyInfo.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-card-foreground/70">{companyInfo.contact.contacts[0].whatsapp}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-card-foreground/70">{companyInfo.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12 py-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-card-foreground/60 font-medium">
            &copy; {year} {footer.copyright}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#" className="text-xs text-card-foreground/60 hover:text-primary transition-colors">{language === 'id' ? 'Syarat & Ketentuan' : 'Terms & Conditions'}</Link>
            <Link href="#" className="text-xs text-card-foreground/60 hover:text-primary transition-colors">{language === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}</Link>
            <Link href="#" className="text-xs text-card-foreground/60 hover:text-primary transition-colors">{language === 'id' ? 'Peta Situs' : 'Sitemap'}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

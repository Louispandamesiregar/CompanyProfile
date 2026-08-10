"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"
import { useRouter } from "next/navigation"
import { Phone, Mail, MapPin } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import njgLogoFooter from "@/assets/Logo_NJG.webp"

export function Footer() {
  const { content, language } = useLanguage()
  const { companyInfo, footer } = content
  const router = useRouter()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white text-foreground border-t border-border">
      <div className="container mx-auto px-6 md:px-12 py-10 max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <Link href="/" className="font-extrabold text-xl md:text-2xl tracking-tighter flex items-center gap-1 md:gap-2 group">
              <div className="relative w-16 h-8 md:w-24 md:h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shrink-0">
                <Image src={njgLogoFooter} alt="Nawasena Jaya Group" fill className="object-contain" />
              </div>
              <span className="bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent drop-shadow-sm ml-1">
                {companyInfo.logoText}
              </span>
            </Link>
            <p className="text-[15px] text-muted-foreground leading-relaxed pr-4">
              {footer.description}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/njg_trans" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-muted-foreground">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{footer.quickLinksTitle}</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/#about" 
                  onClick={(e) => { e.preventDefault(); router.push('/#about'); }}
                  className="text-[15px] text-muted-foreground hover:text-primary transition-colors"
                >
                  {language === 'id' ? 'Tentang Kami' : 'About Us'}
                </a>
              </li>
              <li>
                <a 
                  href="/#services" 
                  onClick={(e) => { e.preventDefault(); router.push('/#services'); }}
                  className="text-[15px] text-muted-foreground hover:text-primary transition-colors"
                >
                  {language === 'id' ? 'Solusi & Layanan' : 'Solutions & Services'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Layanan Kami */}
          <div>
            <h4 className="font-bold text-lg mb-6">{language === 'id' ? 'Layanan Kami' : 'Our Services'}</h4>
            <ul className="space-y-4">
              <li><Link href="/services/1" className="text-[15px] text-muted-foreground hover:text-primary transition-colors">{language === 'id' ? 'Pengiriman Barang' : 'Freight Forwarding'}</Link></li>
              <li><Link href="/services/2" className="text-[15px] text-muted-foreground hover:text-primary transition-colors">{language === 'id' ? 'Pengadaan ATK' : 'Office Supplies'}</Link></li>
              <li><Link href="/services/3" className="text-[15px] text-muted-foreground hover:text-primary transition-colors">{language === 'id' ? 'Pengadaan Alkes' : 'Medical Equipment'}</Link></li>
              <li><Link href="/services/4" className="text-[15px] text-muted-foreground hover:text-primary transition-colors">{language === 'id' ? 'Tinta & Printer' : 'Ink & Printers'}</Link></li>
            </ul>
          </div>

          {/* Column 4: Hubungi Kami */}
          <div>
            <h4 className="font-bold text-lg mb-6">{footer.contactTitle}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/TBCoP7Cm9VJTt5rz6" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[15px] text-card-foreground/70 leading-relaxed hover:text-primary transition-colors cursor-pointer"
                >
                  {companyInfo.contact.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-muted-foreground shrink-0" />
                <span className="text-[15px] text-card-foreground/70">{companyInfo.contact.contacts[0].whatsapp}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground shrink-0" />
                <span className="text-[15px] text-card-foreground/70">{companyInfo.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 py-6 max-w-[1600px] flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-card-foreground/60 font-medium text-center">
            &copy; {year} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

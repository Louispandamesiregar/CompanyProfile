import * as React from "react"
import Link from "next/link"
import { companyInfo } from "@/data/content"
import { Phone, Mail, MapPin } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-card text-card-foreground border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <Link href="/" className="font-extrabold text-2xl tracking-tighter text-primary flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-bl-lg rounded-tr-lg flex items-center justify-center">
                <span className="text-primary-foreground text-sm">NX</span>
              </div>
              {companyInfo.logoText}
            </Link>
            <p className="text-sm text-card-foreground/70 leading-relaxed pr-4">
              Partner digital terpercaya Anda untuk transformasi bisnis yang lebih baik, efisien, dan modern.
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
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="#services" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">Solusi & Layanan</Link></li>
              <li><Link href="#group" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">Grup Perusahaan</Link></li>
              <li><Link href="#" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">Karir</Link></li>
              <li><Link href="#" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">Berita & Insight</Link></li>
            </ul>
          </div>

          {/* Column 3: Solusi Kami */}
          <div>
            <h4 className="font-bold text-lg mb-6">Solusi Kami</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="#services" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">Mobile Applications</Link></li>
              <li><Link href="#services" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link href="#services" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">Data Analytics</Link></li>
              <li><Link href="#services" className="text-sm text-card-foreground/70 hover:text-primary transition-colors">IT Consulting</Link></li>
            </ul>
          </div>

          {/* Column 4: Hubungi Kami */}
          <div>
            <h4 className="font-bold text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-card-foreground/70 leading-relaxed">{companyInfo.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-card-foreground/70">{companyInfo.contact.whatsapp}</span>
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
            &copy; {year} {companyInfo.name}. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#" className="text-xs text-card-foreground/60 hover:text-primary transition-colors">Syarat & Ketentuan</Link>
            <Link href="#" className="text-xs text-card-foreground/60 hover:text-primary transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="text-xs text-card-foreground/60 hover:text-primary transition-colors">Peta Situs</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

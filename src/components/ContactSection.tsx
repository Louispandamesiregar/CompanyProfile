import * as React from "react"
import { companyInfo } from "@/data/content"
import { ArrowRight } from "lucide-react"
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram } from "react-icons/fa"

export function ContactSection() {
  const { contact } = companyInfo
  
  // Format WhatsApp number (remove '+' or leading '0' and ensure country code format)
  const waNumber = contact.whatsapp.replace(/\D/g, '')

  return (
    <section id="contact" className="py-24 bg-background scroll-m-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Big Typography */}
          <div className="flex-1 space-y-8 text-center lg:text-left relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground leading-[1.1] relative z-10">
              Mari <br className="hidden lg:block"/> Berkolaborasi
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto lg:mx-0 rounded-full relative z-10" />
            <p className="text-muted-foreground text-xl md:text-2xl max-w-xl mx-auto lg:mx-0 relative z-10 font-light">
              {contact.description}
            </p>
          </div>
          
          {/* Right: Sleek Contact List */}
          <div className="flex-1 w-full space-y-3">
            <a 
              href={`https://wa.me/${waNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center p-4 bg-transparent hover:bg-muted/40 rounded-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shadow-sm">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <div className="ml-4 flex-1 text-left">
                <h3 className="font-semibold text-xl mb-0.5 text-foreground transition-colors">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">{contact.whatsapp}</p>
              </div>
              <div className="text-green-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
            
            <a 
              href={`mailto:${contact.email}`} 
              className="group flex items-center p-4 bg-transparent hover:bg-muted/40 rounded-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#4285F4] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shadow-sm">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div className="ml-4 flex-1 text-left">
                <h3 className="font-semibold text-xl mb-0.5 text-foreground transition-colors">Email</h3>
                <p className="text-muted-foreground text-sm">{contact.email}</p>
              </div>
              <div className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>

            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center p-4 bg-transparent hover:bg-muted/40 rounded-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#333333] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shadow-sm">
                <FaInstagram className="w-6 h-6" />
              </div>
              <div className="ml-4 flex-1 text-left">
                <h3 className="font-semibold text-xl mb-0.5 text-foreground transition-colors">Instagram</h3>
                <p className="text-muted-foreground text-sm">@nexgenagency</p>
              </div>
              <div className="text-[#333333] opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
            
            <div className="group flex items-center p-4 bg-transparent hover:bg-muted/40 rounded-2xl transition-all duration-300 cursor-default">
              <div className="w-12 h-12 rounded-full bg-[#EA4335] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shadow-sm">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <div className="ml-4 flex-1 text-left">
                <h3 className="font-semibold text-xl mb-0.5 text-foreground transition-colors">Alamat</h3>
                <p className="text-muted-foreground text-sm leading-snug">{contact.address}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

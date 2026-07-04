import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { QuickAccessSection } from "@/components/QuickAccessSection"
import { AboutSection } from "@/components/AboutSection"
import { ServicesSection } from "@/components/ServicesSection"
import { SisterCompaniesSection } from "@/components/SisterCompaniesSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <QuickAccessSection />
        <div className="pt-24 pb-12 bg-background">
          <AboutSection />
        </div>
        <ServicesSection />
        <SisterCompaniesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

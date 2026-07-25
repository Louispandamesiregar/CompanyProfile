import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { FeaturesBar } from "@/components/FeaturesBar"
import { ServicesSection } from "@/components/ServicesSection"
import { FleetSection } from "@/components/FleetSection"
import { SisterCompaniesSection } from "@/components/SisterCompaniesSection"
import { ClientMarquee } from "@/components/ClientMarquee"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesBar />
        <AboutSection />
        <ClientMarquee />
        <ServicesSection />
        <FleetSection />
        <SisterCompaniesSection />
      </main>
      <Footer />
    </>
  )
}

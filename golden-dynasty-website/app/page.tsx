import Header from "@/components/global/header"
import Footer from "@/components/global/footer"
import HeroCarousel from "@/components/home/hero-carousel"
import CTABanner from "@/components/home/cta-banner"
import AboutSection from "@/components/home/about-section"
import QualityAssurance from "@/components/home/quality-assurance"
import ServicesOverview from "@/components/home/services-overview"
import SocialDevelopment from "@/components/home/social-development"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <CTABanner />
        <AboutSection />
        <QualityAssurance />
        <ServicesOverview />
        <SocialDevelopment />
      </main>
      <Footer />
    </div>
  )
}

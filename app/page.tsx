import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { StudyFeaturesSection } from "@/components/study-features-section"
import { TestingSuiteSection } from "@/components/testing-suite-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid-pattern">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <StudyFeaturesSection />
        <TestingSuiteSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  )
}

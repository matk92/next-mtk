import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ExploreSection } from "@/components/explore-section"
import { Footer } from "@/components/footer"
import { StarField } from "@/components/star-field"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <StarField />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ExploreSection />
      <Footer />
    </main>
  )
}

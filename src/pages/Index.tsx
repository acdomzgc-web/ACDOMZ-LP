import { HeroSection } from '@/components/sections/HeroSection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaSection } from '@/components/sections/CtaSection'

export default function Index() {
  return (
    <div className="w-full">
      <HeroSection />
      <ExpertiseSection />
      <PortfolioSection />
      <PricingSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}

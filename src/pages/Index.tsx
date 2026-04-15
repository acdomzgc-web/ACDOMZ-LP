import { HeroSection } from '@/components/sections/HeroSection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { TransformationSection } from '@/components/sections/TransformationSection'
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
      <TransformationSection />
      <PricingSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}

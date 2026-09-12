import { HeroSection } from '@/components/sections/HeroSection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { Marquee } from '@/components/motion/Marquee'

const MARQUEE_ITEMS_1 = [
  'Landing Pages',
  'Sistemas Web',
  'Entrega em 3 a 5 Dias',
  'Sem Mensalidade',
  'Código 100% Seu',
  'React & Next.js',
  'Alta Conversão',
  'Zhera Studio',
]

const MARQUEE_ITEMS_2 = [
  '+85% Conversão Média',
  '+50 Projetos Entregues',
  'Arquitetura Limpa',
  'Automação com IA',
  'Mobile-First',
  'SSL & Performance Max',
  'Curitiba — PR',
  'Atendimento Brasil',
]

export default function Index() {
  return (
    <div className="w-full">
      <HeroSection />

      {/* Marquee 1 contínuo logo após o Hero trazendo autoridade e dinamismo */}
      <Marquee items={MARQUEE_ITEMS_1} speed={28} direction="left" />

      <ExpertiseSection />

      <PortfolioSection />

      {/* Marquee 2 em direção inversa para ritmo visual entre Portfolio e Pricing */}
      <Marquee
        items={MARQUEE_ITEMS_2}
        speed={32}
        direction="right"
        className="bg-[#121212] border-[#262626]"
      />

      <PricingSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}

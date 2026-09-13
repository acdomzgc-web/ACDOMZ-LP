import { Button } from '@/components/ui/button'
import { MessageCircle, CreditCard, Mail } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'

// Seção escura (#0A0A0A)
// Usa a Imagem 3: fundo preto com 'Z' branca
import logoWhiteOnDark from '@/assets/zhera-logo-aedcd.jpg'

export function CtaSection() {
  return (
    <section className="py-24 bg-[#0A0A0A] text-[#FFFFFF] relative border-b border-[#262626] overflow-hidden">
      {/* Detalhe de fundo monocromático e sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <Reveal direction="up" distance={24}>
          <div className="max-w-4xl border border-[#262626] bg-[#121212] p-8 sm:p-12 md:p-16 mx-auto text-center transition-all duration-300 hover:border-[#404040]">
            {/* Logo Zhera: Imagem 3 sobre fundo escuro */}
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-10 w-10 bg-black border border-[#262626] flex items-center justify-center p-1.5 shrink-0 transition-transform duration-300 hover:scale-105 hover:border-[#FFFFFF]">
                <img src={logoWhiteOnDark} alt="Zhera" className="h-full w-full object-contain" />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] mb-4 tracking-tight leading-[1.1]">
              Site Pronto em 3 a 5 Dias.
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] mb-8 max-w-xl mx-auto leading-relaxed">
              A partir de R$ 997 em pagamento único. Converse diretamente no WhatsApp e inicie seu
              projeto com a Zhera hoje mesmo.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F4F4F2] font-extrabold text-xs uppercase tracking-wider gap-2 h-12 px-7 border border-[#FFFFFF] transition-all duration-200 hover:-translate-y-0.5"
                asChild
              >
                <a href="https://wa.me/5541987322926" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" /> (41) 98732-2926
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[#262626] text-[#FFFFFF] hover:bg-[#1F1F1F] hover:border-[#FFFFFF] font-extrabold text-xs uppercase tracking-wider gap-2 h-12 px-7 transition-all duration-200"
                asChild
              >
                <a href="#planos">
                  <CreditCard className="w-4 h-4" /> Ver Planos e Preços
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto text-[#A3A3A3] hover:text-[#FFFFFF] hover:bg-[#171717] font-mono text-xs gap-2 h-12 px-6 transition-colors break-all"
                asChild
              >
                <a href="mailto:carlos.eduardo.model@gmail.com">
                  <Mail className="w-4 h-4 shrink-0" /> carlos.eduardo.model@gmail.com
                </a>
              </Button>
            </div>

            <div className="mt-10 pt-6 border-t border-[#1F1F1F] flex flex-wrap justify-center items-center gap-6 font-mono text-xs text-[#737373]">
              <span className="text-[#FFFFFF]">
                <AnimatedCounter value={85} prefix="+" suffix="%" /> conversão
              </span>
              <span>&middot;</span>
              <span className="text-[#FFFFFF]">
                <AnimatedCounter value={50} prefix="+" /> projetos entregues
              </span>
              <span>&middot;</span>
              <span className="text-[#A3A3A3]">Entrega em 3 a 5 dias</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

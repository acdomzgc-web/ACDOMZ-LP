import { Button } from '@/components/ui/button'
import { MessageCircle, CreditCard, Mail } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(194,178,143,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(194,178,143,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Pronto para Transformar Seu Negócio?
        </h2>
        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
          Pare de perder oportunidades com sistemas lentos e sites genéricos. Dê o próximo passo em
          direção à excelência digital com a ACDOMZ.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white gap-2 h-14 px-8 rounded-full"
            asChild
          >
            <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
              <MessageCircle className="w-5 h-5" /> Falar com Especialista
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 gap-2 h-14 px-8 rounded-full"
            asChild
          >
            <a href="#planos">
              <CreditCard className="w-5 h-5" /> Escolher um Plano
            </a>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="w-full sm:w-auto text-white/80 hover:text-white hover:bg-white/5 gap-2 h-14 px-8 rounded-full"
            asChild
          >
            <a href="mailto:contato@acdomz.com.br">
              <Mail className="w-5 h-5" /> Proposta Customizada
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

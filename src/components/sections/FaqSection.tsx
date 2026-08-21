import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Qual o tempo médio de entrega dos projetos?',
    a: 'O tempo médio de entrega é de 3 a 7 dias úteis, dependendo da complexidade e do plano escolhido (STARTER, MEDIUM, EXPERT ou PREMIUM).',
  },
  {
    q: 'Existe alguma mensalidade ou taxa recorrente?',
    a: 'Não. Todos os nossos planos são em pagamento único (setup completo). Você paga uma única vez pela criação do site e o projeto é seu, sem cobranças mensais surpresa.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Aceitamos o pagamento via PIX e transferência, garantindo agilidade, transparência e segurança na negociação.',
  },
  {
    q: 'Como funciona a hospedagem e o domínio?',
    a: 'Todos os planos incluem domínio gratuito (nomesite.goskip.app), certificado SSL e exportação para GitHub. Caso queira utilizar seu domínio próprio (.com, .com.br), ajudamos você a configurar sem custo extra.',
  },
  {
    q: 'O site será responsivo para celulares?',
    a: 'Sim. A otimização para múltiplos dispositivos (Smartphones, Tablets e Computadores) é um padrão rigoroso em todos os nossos planos, garantindo uma navegação impecável.',
  },
  {
    q: 'Quais são as limitações técnicas dos projetos?',
    a: 'Nossos projetos são focados em landing pages de alta conversão, portfólios e sites institucionais modernos. Não contemplam painéis ERP internos complexos ou processamento financeiro nativo (o site atua como integrador com WhatsApp e checkouts externos).',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">
            Dúvidas Frequentes
          </h2>
          <h3 className="text-3xl font-bold text-primary">Respondendo suas perguntas</h3>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-secondary py-5 text-base sm:text-lg transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

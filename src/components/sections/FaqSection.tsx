import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Qual o tempo médio de entrega dos projetos?',
    a: 'O tempo médio de entrega é de 3 a 5 dias, dependendo da complexidade e do plano escolhido (SETUP 1, 2 ou 3).',
  },
  {
    q: 'Por que a Recorrência Mensal é importante?',
    a: 'A Recorrência Mensal é o motor que mantém sua presença digital ativa e eficiente. Ela cobre hospedagem, atualizações constantes contra vulnerabilidades, backups diários/semanais e suporte técnico contínuo.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Aceitamos o pagamento via PIX, garantindo agilidade e segurança na negociação.',
  },
  {
    q: 'Quais são as limitações técnicas dos projetos?',
    a: 'Nossos projetos não contemplam notificações push em tempo real, sistemas de autenticação (login/área de membros), gestão interna de dados (ERP/estoque) ou processamento financeiro interno (o site atua apenas como redirecionador para checkout externo).',
  },
  {
    q: 'O site será responsivo para celulares?',
    a: 'Sim. A otimização para múltiplos dispositivos (PC, Mobile e Tablet) é um padrão em todos os nossos planos, garantindo uma navegação perfeita sem custo adicional.',
  },
  {
    q: 'O que acontece se eu optar pelo pagamento único sem recorrência?',
    a: 'Ao optar por não aderir à mensalidade, você torna-se totalmente responsável pelos custos de hospedagem, domínio, atualizações do sistema, backups periódicos, segurança e perde o suporte contínuo da nossa equipe.',
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

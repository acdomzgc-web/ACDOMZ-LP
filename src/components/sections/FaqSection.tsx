import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Qual o tempo médio de entrega dos projetos?',
    a: 'O tempo varia conforme a complexidade. Uma Landing Page (Nível 1) leva cerca de 7 a 14 dias. Um sistema web customizado (Nível 4) pode levar de 4 a 8 semanas.',
  },
  {
    q: 'Vocês oferecem manutenção após o lançamento?',
    a: 'Sim! Nos planos de assinatura, a manutenção, hospedagem e suporte estão totalmente inclusos para garantir que seu sistema opere perfeitamente.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Aceitamos PIX, boleto e cartão de crédito. Você pode optar pelo pagamento único (com 50% de entrada e 50% na entrega) ou pelo plano de assinatura mensal.',
  },
  {
    q: 'Vocês fazem integrações com outros sistemas?',
    a: 'Absolutamente. Desde ferramentas simples como RD Station e WhatsApp, até ERPs complexos via APIs RESTful.',
  },
  {
    q: 'O código fonte será meu?',
    a: 'Nos planos de pagamento único (Níveis 4 e 5), o código é 100% de sua propriedade. Nos planos de assinatura, a licença de uso é atrelada à mensalidade.',
  },
  {
    q: 'Preciso ter o design pronto?',
    a: 'Não. Nossa equipe cuida de toda a jornada, desde a ideação, UX/UI Design, até o desenvolvimento final.',
  },
  {
    q: 'O site será responsivo para celulares?',
    a: 'Garantimos 100% de responsividade. O acesso móvel é prioritário em nossos desenvolvimentos (Mobile First).',
  },
  {
    q: 'Como é feito o alinhamento durante o projeto?',
    a: 'Temos reuniões de checkpoints semanais e um canal direto no WhatsApp/Slack com os gestores de projeto.',
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
            <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
              <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent py-4 text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

// FAQ em fundo claro (#F4F4F2)
// Usa a Imagem 1: fundo branco, 'Z' preta
import logoDarkOnLight from '@/assets/zhera-logo-white-964be.png'

const faqs = [
  {
    q: 'Qual o tempo de entrega do site na Zhera?',
    a: 'Entrega rápida em 3 a 5 dias úteis com todos os dados e materiais em mãos. Projetos mais complexos do plano PREMIUM podem levar até 7 dias úteis.',
  },
  {
    q: 'Existe cobrança de mensalidade?',
    a: 'Não. O desenvolvimento é 100% em pagamento único. O código, os arquivos e o deploy são de sua propriedade. Caso queira suporte e atualizações contínuas, disponibilizamos a manutenção mensal opcional a partir de R$ 47/mês.',
  },
  {
    q: 'Como funciona o pagamento do setup?',
    a: 'Pagamento facilitado via PIX ou transferência com emissão de nota e termos claros de entrega.',
  },
  {
    q: 'Como funciona a hospedagem e domínio do projeto?',
    a: 'Todos os planos já incluem certificado SSL, favicon e subdomínio gratuito (nomesite.goskip.app). Caso você já possua ou queira registrar domínio próprio (.com, .com.br), configuramos os apontamentos sem custos adicionais.',
  },
  {
    q: 'O site funciona bem em celulares e tablets?',
    a: 'Sim. Todo o design é concebido mobile-first, com carregamento rápido e legibilidade garantida em smartphones, tablets e desktops.',
  },
  {
    q: 'Quais tipos de soluções a Zhera desenvolve?',
    a: 'Desenvolvemos landing pages de alta conversão, sites institucionais modernos, páginas para infoprodutores e sistemas web com integração a WhatsApp e checkouts externos.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-[#F4F4F2] text-[#0A0A0A] border-b border-[#E5E5E5]">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 border border-[#0A0A0A] bg-[#FFFFFF] px-3 py-1 mb-4">
            <div className="h-4 w-4 bg-[#FFFFFF] flex items-center justify-center shrink-0">
              <img src={logoDarkOnLight} alt="Zhera" className="h-full w-full object-contain" />
            </div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A]">
              05 &middot; FAQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] mb-3 tracking-tight leading-[1.1]">
            Dúvidas Frequentes
          </h2>
          <p className="text-base text-[#525252]">
            Respostas diretas sobre prazos, escopos e propriedade do seu projeto na Zhera.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full border-t border-[#0A0A0A]">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#0A0A0A] py-1">
              <AccordionTrigger className="text-left font-extrabold text-[#0A0A0A] hover:no-underline py-5 text-base sm:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#404040] leading-relaxed text-sm sm:text-base pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

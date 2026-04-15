import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const plans = [
  {
    level: 'Nível 1',
    name: 'Landing Page Essencial',
    desc: 'Presença digital básica focada em conversão única.',
    single: 'R$ 497',
    sub: 'R$ 297 + R$ 97/mês',
    features: [
      'Design Responsivo',
      'Formulário de Contato',
      'Otimização SEO Básica',
      'Hospedagem Inclusa (Plano Assinatura)',
    ],
  },
  {
    level: 'Nível 2',
    name: 'Site Comercial Completo',
    desc: 'Para empresas que precisam de múltiplas páginas e autoridade.',
    single: 'R$ 997',
    sub: 'R$ 697 + R$ 197/mês',
    features: ['Até 5 Páginas', 'Blog Integrado', 'Integração WhatsApp', 'Painel de Gestão Básico'],
  },
  {
    level: 'Nível 3',
    name: 'E-commerce & Automações',
    desc: 'Venda online com carrinho, pagamentos e gestão de estoque.',
    single: 'R$ 1.497',
    sub: 'R$ 997 + R$ 297/mês',
    features: [
      'Catálogo Ilimitado',
      'Checkout Transparente',
      'Cálculo de Frete',
      'Automação de E-mails',
    ],
    highlight: true,
  },
  {
    level: 'Nível 4',
    name: 'Sistema Web Customizado',
    desc: 'Aplicações robustas sob medida para processos internos.',
    single: 'R$ 2.497',
    sub: 'R$ 1.997 + R$ 497/mês',
    features: [
      'Regras de Negócio Customizadas',
      'Banco de Dados Dedicado',
      'Painel Admin Avançado',
      'Integração de APIs',
    ],
  },
  {
    level: 'Nível 5',
    name: 'Plataforma Enterprise',
    desc: 'Arquitetura de alto desempenho para escalar sem limites.',
    single: 'R$ 3.997',
    sub: 'R$ 2.997 + R$ 797/mês',
    features: [
      'Microserviços',
      'Alta Disponibilidade',
      'App Mobile Complementar',
      'Suporte Dedicado 24/7',
    ],
  },
]

export function PricingSection() {
  return (
    <section id="planos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">
            Investimento Transparente
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Soluções na Medida do Seu Crescimento
          </h3>
          <p className="text-lg text-muted-foreground">
            Escolha entre pagamento único ou modelo de assinatura com suporte contínuo garantido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 max-w-[1400px] mx-auto">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={cn(
                'relative flex flex-col hover:-translate-y-2 hover:shadow-elevation transition-all duration-300 border-border/60',
                plan.highlight ? 'border-accent shadow-lg md:scale-105 z-10' : '',
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                  Mais Escolhido
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className="text-sm font-semibold text-secondary mb-2">{plan.level}</div>
                <CardTitle className="text-xl h-14 flex items-center justify-center">
                  {plan.name}
                </CardTitle>
                <CardDescription className="h-10">{plan.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 text-center">
                <div className="mb-6 pb-6 border-b border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">Pagamento Único</p>
                  <p className="text-2xl font-bold text-primary">{plan.single}</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-1">
                    Ou Assinatura (Setup + Mensal)
                  </p>
                  <p className="text-xl font-bold text-primary">{plan.sub}</p>
                </div>
                <ul className="space-y-3 text-sm text-left">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={cn('w-full', plan.highlight ? 'bg-accent hover:bg-accent/90' : '')}
                  variant={plan.highlight ? 'default' : 'outline'}
                  asChild
                >
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
                    Selecionar Plano
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

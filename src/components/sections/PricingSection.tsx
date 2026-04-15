import { Check, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
      'Hospedagem Inclusa',
    ],
  },
  {
    level: 'Nível 2',
    name: 'Site Comercial Completo',
    desc: 'Para empresas que precisam de múltiplas páginas e autoridade.',
    single: 'R$ 997',
    sub: 'R$ 697 + R$ 197/mês',
    features: ['Até 5 Páginas', 'Blog Integrado', 'Integração WhatsApp', 'Painel de Gestão'],
    highlight: true,
  },
  {
    level: 'Nível 3',
    name: 'E-commerce / Sistemas',
    desc: 'Soluções customizadas com integrações avançadas e vendas.',
    single: 'R$ 1.497',
    sub: 'R$ 997 + R$ 297/mês',
    features: [
      'Funcionalidades Sob Medida',
      'Checkout Transparente',
      'Banco de Dados Dedicado',
      'Painel Admin Avançado',
    ],
  },
]

export function PricingSection() {
  return (
    <section id="planos" className="py-24 bg-background relative overflow-hidden">
      {/* Ambient background glow for Dark Mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-3">
            Investimento Transparente
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            Soluções na Medida do Seu Crescimento
          </h3>
          <p className="text-lg text-muted-foreground">
            Escolha entre pagamento único ou modelo de assinatura com suporte contínuo garantido.
            Adaptável à sua visão de negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={cn(
                'group relative flex flex-col p-6 sm:p-8 rounded-[2rem] bg-card/60 backdrop-blur-xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl',
                plan.highlight
                  ? 'border-secondary shadow-[0_20px_50px_-15px_rgba(194,178,143,0.2)] md:-translate-y-4 md:scale-105 bg-gradient-to-b from-card/90 via-card/80 to-secondary/10 z-20 ring-1 ring-secondary'
                  : 'border-border/50 shadow-subtle hover:border-secondary/40',
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-[0_0_20px_rgba(194,178,143,0.4)]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Recomendado
                </div>
              )}

              <div className="text-center pb-6 border-b border-border/50">
                <div
                  className={cn(
                    'text-sm font-bold mb-3 tracking-wide',
                    plan.highlight ? 'text-secondary' : 'text-secondary',
                  )}
                >
                  {plan.level}
                </div>
                <h4 className="text-xl font-bold text-foreground h-14 flex items-center justify-center leading-tight">
                  {plan.name}
                </h4>
                <p className="text-sm text-muted-foreground mt-2 h-10 line-clamp-2">{plan.desc}</p>
              </div>

              <div className="flex-1 py-6 flex flex-col gap-6">
                <div className="text-center">
                  <p
                    className={cn(
                      'text-xs uppercase tracking-wider mb-2 font-bold text-muted-foreground',
                    )}
                  >
                    Pagamento Único
                  </p>
                  <p className="text-3xl font-bold text-foreground transition-colors group-hover:text-secondary">
                    {plan.single}
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border/50" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground group-hover:bg-transparent transition-colors">
                      Ou Assinatura
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xl font-bold text-foreground">{plan.sub}</p>
                  <p className="text-xs text-muted-foreground mt-1">Setup + Mensalidade</p>
                </div>

                <ul className="space-y-4 text-sm mt-4">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="rounded-full bg-secondary/10 p-1 mt-0.5">
                        <Check className="w-3 h-3 text-secondary shrink-0" />
                      </div>
                      <span className="text-muted-foreground font-medium leading-tight">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-auto">
                <Button
                  className={cn(
                    'w-full rounded-xl h-12 min-h-[44px] text-sm font-bold transition-all duration-300',
                    plan.highlight
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-[0_0_20px_rgba(194,178,143,0.3)]'
                      : 'bg-card text-foreground border-border hover:bg-secondary hover:text-secondary-foreground',
                  )}
                  variant={plan.highlight ? 'default' : 'outline'}
                  asChild
                >
                  <a href="https://wa.me/5541987322926" target="_blank" rel="noreferrer">
                    Selecionar Plano
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

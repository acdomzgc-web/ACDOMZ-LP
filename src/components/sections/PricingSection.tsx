import { useEffect, useState } from 'react'
import { Check, Sparkles, Crown, Info, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import { getPlans, type Plan } from '@/services/plans'
import { useRealtime } from '@/hooks/use-realtime'
import { buildPlanWhatsAppUrl } from '@/lib/whatsapp'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function PlanCard({ plan }: { plan: Plan }) {
  const isRecommended = plan.name.toUpperCase().includes('MEDIUM')
  const isPremium = plan.name.toUpperCase().includes('PREMIUM')
  const whatsappUrl = buildPlanWhatsAppUrl(plan.name)

  return (
    <div
      className={cn(
        'group relative flex flex-col p-6 rounded-[2rem] bg-card/60 backdrop-blur-xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex-1',
        isRecommended &&
          'border-secondary shadow-[0_20px_50px_-15px_rgba(194,178,143,0.25)] lg:-translate-y-3 lg:scale-105 scale-[1.02] bg-gradient-to-b from-card/95 via-card/85 to-secondary/10 z-20 ring-1 ring-secondary',
        isPremium &&
          'border-amber-400/50 shadow-[0_20px_50px_-15px_rgba(251,191,36,0.2)] bg-gradient-to-b from-card/95 via-card/85 to-amber-500/10 z-10 ring-1 ring-amber-400/40 hover:border-amber-400',
        !isRecommended && !isPremium && 'border-border/50 shadow-subtle hover:border-secondary/40',
      )}
    >
      {/* Badge Recomendado */}
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-[0_0_20px_rgba(194,178,143,0.4)] whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5" />
          Recomendado
        </div>
      )}

      {/* Badge Topo de linha */}
      {isPremium && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black px-4 py-1.5 text-xs font-black uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-[0_0_20px_rgba(251,191,36,0.45)] whitespace-nowrap">
          <Crown className="w-3.5 h-3.5 text-black fill-black" />
          Topo de linha
        </div>
      )}

      {/* Header: Nome + Tagline */}
      <div className="text-center pb-5 border-b border-border/50 shrink-0">
        <h4 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h4>
        <p className="text-xs font-semibold text-secondary min-h-[2.5rem] flex items-center justify-center px-1 leading-snug">
          {plan.tagline || plan.description}
        </p>
      </div>

      {/* Preço Único */}
      <div className="flex-1 py-6 flex flex-col gap-6">
        <div className="text-center min-h-[5.5rem] flex flex-col justify-center shrink-0 items-center">
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">
            Pagamento Único
          </p>
          <p
            className={cn(
              'text-3xl xl:text-4xl font-black transition-colors tracking-tighter break-words px-1 w-full',
              isPremium
                ? 'text-amber-400 group-hover:text-amber-300'
                : 'text-foreground group-hover:text-secondary',
            )}
          >
            {plan.price_one_time}
          </p>
          <p className="text-xs text-muted-foreground mt-1 font-medium">Sem mensalidades</p>
        </div>

        {/* Lista de Recursos */}
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-3">
              O que está incluso:
            </p>
            <ul className="space-y-2.5 text-sm">
              {plan.features.map((feat, j) => (
                <li key={j} className="flex items-start gap-2.5">
                  <div
                    className={cn(
                      'rounded-full p-1 shrink-0 mt-0.5',
                      isPremium
                        ? 'bg-amber-400/15 text-amber-400'
                        : 'bg-secondary/10 text-secondary',
                    )}
                  >
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-muted-foreground font-medium text-xs sm:text-sm leading-tight">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-5 mt-auto shrink-0 border-t border-border/50">
        <Button
          className={cn(
            'w-full rounded-xl h-12 min-h-[48px] text-sm sm:text-base font-bold transition-all duration-300',
            isRecommended &&
              'bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-[0_0_20px_rgba(194,178,143,0.3)]',
            isPremium &&
              'bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 hover:shadow-[0_0_20px_rgba(251,191,36,0.35)]',
            !isRecommended &&
              !isPremium &&
              'bg-card text-foreground border-border hover:bg-secondary hover:text-secondary-foreground',
          )}
          variant={isRecommended || isPremium ? 'default' : 'outline'}
          asChild
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Escolher {plan.name}
          </a>
        </Button>
      </div>
    </div>
  )
}

export function PricingSection() {
  const [plans, setPlans] = useState<Plan[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPlans = async () => {
    try {
      const data = await getPlans()
      setPlans(data)
    } catch (error) {
      console.error('Error fetching plans:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPlans()
  }, [])

  useRealtime('plans', () => {
    fetchPlans()
  })

  return (
    <section id="planos" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-3">
            Investimento Transparente
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            Planos Sob Medida Para o Seu Negócio
          </h3>
          <p className="text-lg text-muted-foreground">
            Desenvolvimento completo em pagamento único, sem mensalidades ou taxas ocultas. Tenha um
            site de alta performance e alto padrão com total propriedade do seu projeto.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col p-6 rounded-[2rem] border border-border/50 gap-6 h-full min-h-[560px]"
              >
                <Skeleton className="h-8 w-3/4 mx-auto shrink-0" />
                <Skeleton className="h-10 w-full shrink-0" />
                <Skeleton className="h-16 w-32 mx-auto shrink-0" />
                <Skeleton className="h-full w-full flex-1" />
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Grid de 4 Cards lado a lado */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-6 max-w-7xl mx-auto items-stretch">
              {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>

            {/* NOTA ÚNICA abaixo dos 4 cards */}
            <div className="mt-8 max-w-5xl mx-auto">
              <div className="bg-secondary/10 border border-secondary/25 rounded-2xl p-5 sm:p-6 backdrop-blur-sm flex items-start gap-4 shadow-sm">
                <div className="p-2.5 bg-secondary/20 rounded-xl text-secondary shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">
                    Incluso em todos os planos
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Todos os planos incluem nome do site, favicon, certificado SSL e domínio
                    gratuito (nomesite.goskip.app). Domínio próprio (.com, .com.br) fica por conta
                    do cliente — te ajudamos a configurar sem custo extra.
                  </p>
                </div>
              </div>
            </div>

            {/* Resumo Comparativo com 4 Planos */}
            <div className="mt-20 max-w-6xl mx-auto overflow-x-auto pb-4">
              <div className="min-w-[900px]">
                <h4 className="text-2xl font-bold text-center mb-8">Resumo Comparativo</h4>
                <div className="rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="w-[240px] font-bold text-foreground">
                          Aspecto
                        </TableHead>
                        <TableHead className="font-bold text-center text-foreground">
                          STARTER
                        </TableHead>
                        <TableHead className="font-bold text-center text-foreground">
                          MEDIUM
                        </TableHead>
                        <TableHead className="font-bold text-center text-foreground">
                          EXPERT
                        </TableHead>
                        <TableHead className="font-bold text-center text-amber-400">
                          PREMIUM
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        [
                          'Investimento (Único)',
                          'R$ 997,00',
                          'R$ 1.497,00',
                          'R$ 2.997,00',
                          'R$ 4.997,00',
                        ],
                        ['Cobrança Mensal', 'Nenhuma', 'Nenhuma', 'Nenhuma', 'Nenhuma'],
                        [
                          'Estrutura / Dobras',
                          '3 a 5 páginas',
                          '5 a 10 dobras',
                          '10 dobras',
                          'Experiência Completa Sob Medida',
                        ],
                        [
                          'Fotos Inclusas',
                          'Até 5 otimizadas',
                          '10 fotos',
                          'Fotos ilimitadas',
                          'Fotos ilimitadas + Direção de Arte',
                        ],
                        ['WhatsApp + FAQ', 'Não', 'Sim (Direto)', 'Sim (Direto)', 'Sim (Direto)'],
                        [
                          'Chatbot com IA',
                          'Não',
                          'Não',
                          'Sim (Personalizado)',
                          'Sim (Personalizado)',
                        ],
                        [
                          'Infoprodutos',
                          'Não',
                          'Não',
                          'Sim (Alta Conversão)',
                          'Sim (Alta Conversão)',
                        ],
                        [
                          '3D / WebGL / Motion',
                          'Não',
                          'Não',
                          'Não',
                          'Sim (Three.js, GSAP, Motion 3D)',
                        ],
                        [
                          'Stack de Tecnologia',
                          'React / Tailwind',
                          'React / Tailwind',
                          'React / Tailwind / IA',
                          'Next.js / GSAP / Three.js / WebGL',
                        ],
                        [
                          'SEO + Meta Descrição',
                          'Básico',
                          'Avançado',
                          'Avançado',
                          'Avançado + Performance Max',
                        ],
                        [
                          'Domínio Gratuito',
                          'goskip.app',
                          'goskip.app',
                          'goskip.app',
                          'goskip.app',
                        ],
                        ['Certificado SSL + Favicon', 'Incluso', 'Incluso', 'Incluso', 'Incluso'],
                        ['GitHub Export', 'Incluso', 'Incluso', 'Incluso', 'Incluso'],
                      ].map((row, i) => (
                        <TableRow key={i} className="hover:bg-muted/30">
                          <TableCell className="font-medium text-foreground">{row[0]}</TableCell>
                          <TableCell className="text-center text-muted-foreground">
                            {row[1]}
                          </TableCell>
                          <TableCell className="text-center text-muted-foreground">
                            {row[2]}
                          </TableCell>
                          <TableCell className="text-center text-muted-foreground">
                            {row[3]}
                          </TableCell>
                          <TableCell className="text-center text-amber-400 font-semibold">
                            {row[4]}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>

            {/* Guia de Escolha dos 4 Planos */}
            <div className="mt-12 max-w-5xl mx-auto">
              <div className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <HelpCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="text-lg font-bold">Guia de Escolha Rápido</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-bold text-foreground flex items-center gap-2 mb-1">
                      STARTER <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      Presença digital essencial. Ideal para quem precisa de uma vitrine
                      profissional no ar rapidamente com investimento enxuto.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-foreground flex items-center gap-2 mb-1">
                      MEDIUM <ArrowRight className="w-3 h-3 text-secondary" />
                      <span className="text-[10px] font-bold text-secondary bg-secondary/15 px-1.5 py-0.5 rounded">
                        Mais Popular
                      </span>
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      Geração de leads e contato direto. Ideal para empresas e profissionais que
                      usam WhatsApp e FAQ para converter visitantes em clientes.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-foreground flex items-center gap-2 mb-1">
                      EXPERT <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      Site completo com IA. Perfeito para automatizar o atendimento inicial,
                      qualificar potenciais clientes e vender infoprodutos 24/7.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-foreground flex items-center gap-2 mb-1">
                      PREMIUM <ArrowRight className="w-3 h-3 text-amber-400" />
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-400/15 px-1.5 py-0.5 rounded">
                        Topo de Linha
                      </span>
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      Experiência cinematográfica de marca com movimento 3D, WebGL e motion design
                      exclusivo feito sob medida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

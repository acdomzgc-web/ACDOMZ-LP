import { useEffect, useState } from 'react'
import {
  Check,
  Sparkles,
  AlertTriangle,
  Server,
  Headset,
  ShieldX,
  HelpCircle,
  ArrowRight,
} from 'lucide-react'
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
  const isHighlighted = plan.name.toUpperCase().includes('MEDIUM')
  const whatsappUrl = buildPlanWhatsAppUrl(plan.name)

  return (
    <div
      className={cn(
        'group relative flex flex-col p-6 sm:p-8 rounded-[2rem] bg-card/60 backdrop-blur-xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex-1',
        isHighlighted
          ? 'border-secondary shadow-[0_20px_50px_-15px_rgba(194,178,143,0.2)] lg:-translate-y-4 lg:scale-105 scale-[1.02] bg-gradient-to-b from-card/90 via-card/80 to-secondary/10 z-20 ring-1 ring-secondary'
          : 'border-border/50 shadow-subtle hover:border-secondary/40',
      )}
    >
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-[0_0_20px_rgba(194,178,143,0.4)] whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5" />
          Recomendado
        </div>
      )}

      <div className="text-center pb-6 border-b border-border/50 shrink-0">
        <h4 className="text-2xl font-bold text-foreground mb-3">{plan.name}</h4>
        <p className="text-sm text-muted-foreground min-h-[4rem] flex items-center justify-center">
          {plan.description}
        </p>
      </div>

      <div className="flex-1 py-8 flex flex-col gap-8">
        <div className="text-center min-h-[7rem] flex flex-col justify-center shrink-0 items-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
            Setup Inicial
          </p>
          <p className="text-3xl lg:text-4xl font-black text-foreground transition-colors group-hover:text-secondary tracking-tighter break-words px-2 w-full">
            {plan.price_sub_setup}
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-sm text-muted-foreground font-medium">
              + {plan.price_sub_monthly}
            </span>
            <span className="text-[10px] font-bold border border-secondary/50 text-secondary bg-secondary/10 rounded px-1.5 py-0.5 tracking-wider">
              RECORRÊNCIA
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 flex-1">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-4">
              O que está incluso:
            </p>
            <ul className="space-y-3 text-sm">
              {plan.features.map((feat, j) => (
                <li key={j} className="flex items-start gap-3">
                  <div className="rounded-full bg-secondary/10 p-1 shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-muted-foreground font-medium leading-tight">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-6 mt-auto shrink-0 border-t border-border/50">
        <Button
          className={cn(
            'w-full rounded-xl h-14 min-h-[56px] text-base font-bold transition-all duration-300 mt-2',
            isHighlighted
              ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-[0_0_20px_rgba(194,178,143,0.3)]'
              : 'bg-card text-foreground border-border hover:bg-secondary hover:text-secondary-foreground',
          )}
          variant={isHighlighted ? 'default' : 'outline'}
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-3">
            Investimento Transparente
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
            Planos Sob Medida Para o Seu Negócio
          </h3>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma estrutura de investimento flexível, com setup inicial claro e recorrência
            para suporte contínuo, hospedagem e segurança de ponta.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto items-stretch">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col p-6 sm:p-8 rounded-[2rem] border border-border/50 gap-6 h-full min-h-[600px]"
              >
                <Skeleton className="h-8 w-3/4 mx-auto shrink-0" />
                <Skeleton className="h-16 w-full shrink-0" />
                <Skeleton className="h-20 w-32 mx-auto shrink-0" />
                <Skeleton className="h-full w-full flex-1" />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto items-stretch">
              {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>

            <div className="mt-20 max-w-[1200px] mx-auto overflow-x-auto pb-4">
              <div className="min-w-[800px]">
                <h4 className="text-2xl font-bold text-center mb-8">Resumo Comparativo</h4>
                <div className="rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="w-[250px] font-bold text-foreground">
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
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        ['Páginas', '3 a 5', '5 a 10', '10 dobras'],
                        ['Fotos / Vídeos', '5 Fotos / Não', '10 Fotos / Não', 'Ilimitadas / Não'],
                        ['Domínio', 'goskip.app', 'goskip.app', 'Personalizado'],
                        ['Banco de Dados', 'Não', 'Não', 'Sim (Supabase Pro)'],
                        ['Integrações', '0', 'Até 2', '3+ Avançadas'],
                        ['WhatsApp Flutuante', 'Não', 'Sim (Direto)', 'Sim (Msg Automática)'],
                        ['Chatbot / IA', 'Não / Não', 'Não / Não', 'IA GPT-4 / Claude'],
                        ['FAQ / Vitrine', 'Não / Não', 'Sim / Não', 'Sim / Sim'],
                        ['Dashboard', 'Não', 'Não', 'Sim (Gráficos)'],
                        [
                          'Favicon / SEO / Meta Desc. / GitHub',
                          'Sim / Básico / Sim / Sim',
                          'Não / Avançado / Sim / Sim',
                          'Sim / Avançado / Sim / Sim',
                        ],
                        ['Preço Setup', 'R$ 497,00', 'R$ 997,00', 'R$ 1.497,00'],
                        ['Recorrência', 'R$ 97,00/mês', 'R$ 147,00/mês', 'R$ 197,00/mês'],
                        ['Ajustes / Mês', '2 por mês', '4 por mês (1/sem)', 'Ilimitados'],
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
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
              <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                  <AlertTriangle className="w-32 h-32 text-destructive" />
                </div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <h4 className="text-lg font-bold text-destructive">
                    Pagamento Único sem Recorrência
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4 relative z-10 font-medium leading-relaxed">
                  Ao optar por não aderir à mensalidade, o cliente torna-se totalmente responsável
                  por:
                </p>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Server className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    Custos e gestão de hospedagem e domínio próprio.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ShieldX className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    Atualizações do sistema, backups periódicos e segurança.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Headset className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    Perda do suporte contínuo e evoluções aplicadas pela ACDOMZ Tech.
                  </li>
                </ul>
              </div>

              <div className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <HelpCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="text-lg font-bold">Guia de Escolha (Benefícios Progressivos)</h4>
                </div>
                <div className="space-y-5">
                  <div>
                    <h5 className="text-sm font-bold text-foreground flex items-center gap-2 mb-1">
                      STARTER <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      Sua necessidade é informativa, com baixo volume de conteúdo e sem exigência de
                      automações ou domínio próprio imediato.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-foreground flex items-center gap-2 mb-1">
                      MEDIUM <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      Você busca crescimento, deseja um domínio próprio (.com.br) e quer utilizar o
                      WhatsApp e o FAQ como ferramentas ativas de conversão de leads.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-foreground flex items-center gap-2 mb-1">
                      EXPERT <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      Você precisa de um site mais detalhado e completo em termos de conteúdo e
                      páginas. A principal diferença é a inclusão do chatbot com IA integrado.
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

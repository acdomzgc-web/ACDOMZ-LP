import { useEffect, useState } from 'react'
import { Check, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Skeleton } from '@/components/ui/skeleton'
import { getPlans, type Plan } from '@/services/plans'
import { useRealtime } from '@/hooks/use-realtime'

function PlanCard({ plan, mode }: { plan: Plan; mode: 'subscription' | 'onetime' }) {
  const isHighlighted = plan.name.toUpperCase() === 'MEDIUM'

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

      <div className="text-center pb-6 border-b border-border/50">
        <h4 className="text-xl font-bold text-foreground mb-3">{plan.name}</h4>
        <p className="text-sm text-muted-foreground h-16">{plan.description}</p>
      </div>

      <div className="flex-1 py-6 flex flex-col gap-6">
        <div className="text-center h-20 flex flex-col justify-center">
          {mode === 'onetime' ? (
            <p className="text-3xl font-bold text-foreground transition-colors group-hover:text-secondary">
              {plan.price_one_time}
            </p>
          ) : (
            <>
              <p className="text-3xl font-bold text-foreground transition-colors group-hover:text-secondary">
                {plan.price_sub_setup}
              </p>
              <p className="text-sm text-muted-foreground font-medium mt-1">
                + {plan.price_sub_monthly}
              </p>
            </>
          )}
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-4">
            Incluso:
          </p>
          <ul className="space-y-3 text-sm">
            {plan.features.map((feat, j) => (
              <li key={j} className="flex items-start gap-3">
                <div className="rounded-full bg-secondary/10 p-1 shrink-0">
                  <Check className="w-3 h-3 text-secondary" />
                </div>
                <span className="text-muted-foreground font-medium leading-tight">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2">
          <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-4">
            {mode === 'onetime' ? 'Condições (Único):' : 'Condições (Assinatura):'}
          </p>
          <ul className="space-y-3 text-sm">
            {(mode === 'onetime' ? plan.one_time_benefits : plan.subscription_benefits).map(
              (benefit, j) => (
                <li key={j} className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground font-medium leading-tight">{benefit}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      <div className="pt-6 mt-auto">
        <Button
          className={cn(
            'w-full rounded-xl h-14 min-h-[56px] text-base font-bold transition-all duration-300',
            isHighlighted
              ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-[0_0_20px_rgba(194,178,143,0.3)]'
              : 'bg-card text-foreground border-border hover:bg-secondary hover:text-secondary-foreground',
          )}
          variant={isHighlighted ? 'default' : 'outline'}
          asChild
        >
          <a href="https://wa.me/5541987322926" target="_blank" rel="noreferrer">
            Selecionar Plano
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
            Soluções na Medida do Seu Crescimento
          </h3>
          <p className="text-lg text-muted-foreground">
            Escolha entre pagamento único ou modelo de assinatura com suporte contínuo garantido.
            Adaptável à sua visão de negócio.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] mx-auto items-stretch">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col p-6 sm:p-8 rounded-[2rem] border border-border/50 gap-6 h-[800px]"
              >
                <Skeleton className="h-8 w-3/4 mx-auto" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-20 w-32 mx-auto" />
                <Skeleton className="h-full w-full" />
              </div>
            ))}
          </div>
        ) : (
          <Tabs defaultValue="subscription" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-card/60 backdrop-blur-md border border-border/50 h-auto p-1.5 max-w-[500px] w-full rounded-full grid grid-cols-2">
                <TabsTrigger
                  value="subscription"
                  className="rounded-full py-3 text-base font-medium"
                >
                  Assinatura Mensal
                </TabsTrigger>
                <TabsTrigger value="onetime" className="rounded-full py-3 text-base font-medium">
                  Pagamento Único
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="subscription" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] mx-auto items-stretch">
                {plans.map((plan) => (
                  <PlanCard key={plan.id} plan={plan} mode="subscription" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="onetime" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] mx-auto items-stretch">
                {plans.map((plan) => (
                  <PlanCard key={plan.id} plan={plan} mode="onetime" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </section>
  )
}

import { TrendingUp, Users, ShoppingCart, HeartPulse, Building2 } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BeforeAfterSlider } from '@/components/ui/before-after-slider'
import { cn } from '@/lib/utils'

const cases = [
  {
    title: 'Condomínio Alpha',
    niche: 'Real Estate',
    type: 'Portal Interativo',
    metric: '+40% Engajamento',
    icon: Building2,
    description:
      'Transformação do portal de comunicação desatualizado para uma plataforma interativa e moderna.',
    before: 'https://img.usecurling.com/p/800/600?q=old%20website%20messy&color=gray',
    after: 'https://img.usecurling.com/p/800/600?q=modern%20dashboard%20clean&color=blue',
    colSpan: 'lg:col-span-2',
  },
  {
    title: 'E-commerce Moda X',
    niche: 'Varejo',
    type: 'Loja Virtual',
    metric: '+60% Vendas',
    icon: ShoppingCart,
    description: 'Redesign completo com foco em conversão, mobile-first e checkout otimizado.',
    before: 'https://img.usecurling.com/p/600/600?q=cluttered%20store&color=gray',
    after: 'https://img.usecurling.com/p/600/600?q=minimalist%20fashion%20ecommerce&color=pink',
    colSpan: 'lg:col-span-1',
  },
  {
    title: 'Clínica Saúde Total',
    niche: 'Saúde',
    type: 'Sistema Integrado',
    metric: '+50% Agendamentos',
    icon: HeartPulse,
    description: 'Sistema de agendamento integrado com portal do paciente rápido e intuitivo.',
    before: 'https://img.usecurling.com/p/1200/500?q=complex%20form&color=gray',
    after: 'https://img.usecurling.com/p/1200/500?q=simple%20calendar%20app&color=green',
    colSpan: 'lg:col-span-3',
  },
]

export function TransformationSection() {
  return (
    <section
      id="cases"
      className="py-24 bg-[#041d33] dark:bg-background text-white relative overflow-hidden transition-colors duration-500"
    >
      {/* Subtle depth effect background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:30px_30px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-3">
            Transformação Real
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            O Antes e Depois do Sucesso
          </h3>
          <p className="text-lg text-white/70 dark:text-muted-foreground max-w-2xl mx-auto">
            Explore nossa galeria de casos reais. Arraste o divisor para ver como evoluímos a
            presença digital e os resultados de diferentes nichos de mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((item, index) => (
            <Card
              key={index}
              className={cn(
                'group overflow-hidden flex flex-col bg-white/5 dark:bg-card/40 backdrop-blur-md border-white/10 dark:border-border/50 text-white dark:text-foreground transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(194,178,143,0.15)] hover:border-secondary/50',
                item.colSpan,
              )}
            >
              <div className="p-6 border-b border-white/10 dark:border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex gap-2 mb-3">
                    <Badge
                      variant="outline"
                      className="border-secondary text-secondary font-medium"
                    >
                      {item.niche}
                    </Badge>
                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      {item.type}
                    </Badge>
                  </div>
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                </div>
                <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full self-start sm:self-auto border border-secondary/20 shrink-0 transition-colors group-hover:bg-secondary/20">
                  <item.icon className="w-5 h-5 text-secondary" />
                  <span className="font-bold text-secondary">{item.metric}</span>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-black/20 dark:bg-muted/10 relative flex-1">
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                  className="rounded-xl overflow-hidden shadow-2xl border border-white/10 dark:border-border/50"
                />
              </div>

              <div className="p-6 bg-white/5 dark:bg-transparent">
                <p className="text-white/70 dark:text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

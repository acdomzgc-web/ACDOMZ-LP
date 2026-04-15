import { ShoppingCart, HeartPulse, Building2, Rocket, Utensils, ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const cases = [
  {
    title: 'Condomínio Alpha',
    niche: 'Real Estate',
    type: 'Portal Interativo',
    metric: '+40% Engajamento',
    icon: Building2,
    description:
      'Plataforma interativa e moderna com gestão de comunicados e reservas em tempo real.',
    image: 'https://img.usecurling.com/p/800/600?q=modern%20dashboard%20clean&color=blue&dpr=2',
    colSpan: 'lg:col-span-2',
  },
  {
    title: 'E-commerce Moda X',
    niche: 'Varejo',
    type: 'Loja Virtual',
    metric: '+60% Vendas',
    icon: ShoppingCart,
    description: 'Redesign focado em conversão, mobile-first e checkout fluido em uma página.',
    image:
      'https://img.usecurling.com/p/600/600?q=minimalist%20fashion%20ecommerce&color=pink&dpr=2',
    colSpan: 'lg:col-span-1',
  },
  {
    title: 'Clínica Saúde Total',
    niche: 'Saúde',
    type: 'Sistema Integrado',
    metric: '+50% Agendamentos',
    icon: HeartPulse,
    description: 'Sistema de agendamento integrado com portal do paciente rápido e intuitivo.',
    image:
      'https://img.usecurling.com/p/800/600?q=medical%20dashboard%20calendar&color=green&dpr=2',
    colSpan: 'lg:col-span-1',
  },
  {
    title: 'Startup Tech',
    niche: 'SaaS',
    type: 'Dashboard Financeiro',
    metric: '+85% Retenção',
    icon: Rocket,
    description:
      'Interface de dados complexos simplificada com visualização de métricas de alta performance.',
    image: 'https://img.usecurling.com/p/800/600?q=saas%20analytics%20dashboard&color=purple&dpr=2',
    colSpan: 'lg:col-span-1',
  },
  {
    title: 'Franquia Alimentícia',
    niche: 'Food Service',
    type: 'App de Pedidos',
    metric: '3x Mais Pedidos',
    icon: Utensils,
    description: 'Aplicativo de delivery próprio com programa de fidelidade automatizado.',
    image:
      'https://img.usecurling.com/p/800/600?q=food%20delivery%20mobile%20app&color=orange&dpr=2',
    colSpan: 'lg:col-span-1',
  },
]

export function TransformationSection() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-background relative overflow-hidden transition-colors duration-500 border-t border-border/50"
    >
      {/* Technological background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-secondary/10 via-background to-background opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-3 drop-shadow-sm">
            Resultados Comprovados
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            Portfólio
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa galeria de excelência digital. Interfaces premium e sistemas robustos
            construídos para escalar e converter em diversos setores da indústria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1400px] mx-auto">
          {cases.map((item, index) => (
            <Card
              key={index}
              className={cn(
                'group overflow-hidden flex flex-col bg-card border-border/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(6,41,69,0.15)] dark:hover:shadow-[0_20px_50px_-15px_rgba(194,178,143,0.15)] hover:border-secondary/40',
                item.colSpan,
              )}
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-80 overflow-hidden bg-muted flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl shadow-2xl group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700 ease-out relative z-0 border border-border/50"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-background/90 backdrop-blur-md rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-secondary" />
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-card relative z-20">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="border-secondary/50 text-secondary-foreground bg-secondary/10 font-bold"
                    >
                      {item.niche}
                    </Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 shadow-none">
                      {item.type}
                    </Badge>
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-3">{item.title}</h4>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border/50 mt-auto">
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Impacto
                    </p>
                    <p className="font-bold text-foreground">{item.metric}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

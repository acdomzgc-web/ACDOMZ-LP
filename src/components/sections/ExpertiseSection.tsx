import { Card, CardContent } from '@/components/ui/card'
import { Briefcase, Zap, Star, ShieldCheck, Cpu } from 'lucide-react'

export function ExpertiseSection() {
  const metrics = [
    {
      value: '+50',
      label: 'projetos entregues com sucesso',
      icon: <Briefcase className="w-6 h-6 text-accent" />,
    },
    {
      value: '1 semana',
      label: 'Tempo médio de entrega (com todos os dados em mãos)',
      icon: <Zap className="w-6 h-6 text-accent" />,
    },
    {
      value: '100%',
      label: 'de satisfação dos clientes',
      icon: <Star className="w-6 h-6 text-accent" />,
    },
  ]

  const partners = ['GitHub', 'Supabase', 'SkipCloud', 'Adapta', '+25 IA do mercado']

  return (
    <section id="expertise" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">
            Garantia de Resultados
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Autoridade e Confiança
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Não desenvolvemos soluções genéricas. Construímos extensões digitais da sua visão única
            — alinhadas à sua cultura, ao seu mercado e aos seus objetivos estratégicos. Com contato
            direto e consultivo, entendemos profundamente sua essência antes de criar, garantindo
            100% de satisfação, qualidade impecável, velocidade comprovada e eficiência máxima.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20 relative z-10">
          {metrics.map((metric, i) => (
            <Card
              key={i}
              className={cn(
                'border-border/50 bg-card/80 dark:bg-card/40 backdrop-blur-md hover:shadow-xl hover:-translate-y-1 hover:border-secondary transition-all duration-300 group',
                i === 2 ? 'sm:col-span-2 md:col-span-1' : '',
              )}
            >
              <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full justify-center">
                <div className="mb-6 p-4 rounded-2xl bg-secondary/10 group-hover:bg-secondary/20 group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <h4 className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight drop-shadow-sm">
                  {metric.value}
                </h4>
                <p className="text-muted-foreground font-medium text-sm md:text-base">
                  {metric.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partners Display */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            Parcerias e Tecnologias
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-border/50 bg-card/80 backdrop-blur-md shadow-sm hover:border-secondary hover:shadow-md transition-all duration-300 group cursor-default"
              >
                {partner.includes('IA') ? (
                  <Cpu className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                ) : (
                  <ShieldCheck className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                )}
                <span className="font-semibold text-foreground text-sm sm:text-base">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

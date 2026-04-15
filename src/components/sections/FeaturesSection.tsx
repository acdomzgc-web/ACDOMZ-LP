import { Card, CardContent } from '@/components/ui/card'
import {
  Zap,
  DollarSign,
  RefreshCw,
  Briefcase,
  Globe,
  LifeBuoy,
  Users,
  Code,
  ShieldCheck,
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Velocidade de Entrega',
    desc: 'Processos ágeis que garantem seu projeto no ar em tempo recorde.',
  },
  {
    icon: DollarSign,
    title: 'Preço Competitivo',
    desc: 'Soluções premium com o melhor custo-benefício do mercado.',
  },
  {
    icon: RefreshCw,
    title: 'Flexibilidade',
    desc: 'Arquitetura modular que permite adaptações conforme seu negócio muda.',
  },
  {
    icon: Briefcase,
    title: 'Portfólio Comprovado',
    desc: 'Dezenas de cases de sucesso em diversos nichos de atuação.',
  },
  {
    icon: Globe,
    title: 'Expertise Multissetorial',
    desc: 'Visão de mercado ampla, do varejo à indústria.',
  },
  {
    icon: LifeBuoy,
    title: 'Suporte Contínuo',
    desc: 'Nossa equipe acompanha você mesmo após o lançamento.',
  },
  {
    icon: Users,
    title: 'Relacionamento Consultivo',
    desc: 'Atendimento próximo, entendendo a fundo suas dores.',
  },
  {
    icon: Code,
    title: 'Tecnologia Moderna',
    desc: 'Utilizamos o estado da arte: SKIP, React, Supabase.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparência Radical',
    desc: 'Sem surpresas no escopo ou no orçamento final.',
  },
]

export function FeaturesSection() {
  return (
    <section id="diferenciais" className="py-24 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">
            Por que a ACDOMZ?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Nossos Diferenciais</h3>
          <p className="text-lg text-muted-foreground">
            O que nos torna o parceiro ideal para a transformação digital da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {features.map((feat, i) => (
            <Card
              key={i}
              className="group hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 bg-card/40 backdrop-blur-md border-border/50 hover:border-secondary/60 hover:shadow-[0_10px_30px_-10px_rgba(6,41,69,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-[50px] group-hover:bg-secondary/10 transition-colors duration-500" />
              <CardContent className="p-5 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300 text-secondary shadow-sm">
                  <feat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {feat.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

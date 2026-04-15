import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { BeforeAfterSlider } from '@/components/ui/before-after-slider'
import { TrendingUp, Users, ShoppingCart } from 'lucide-react'

const cases = [
  {
    title: 'Condomínio Alpha',
    metric: '+40% Engajamento',
    icon: Users,
    description:
      'Transformação do portal de comunicação desatualizado para uma plataforma interativa e moderna.',
    before: 'https://img.usecurling.com/p/800/400?q=old%20website%20messy&color=gray',
    after: 'https://img.usecurling.com/p/800/400?q=modern%20dashboard%20clean&color=blue',
  },
  {
    title: 'E-commerce Moda X',
    metric: '+60% Vendas Online',
    icon: ShoppingCart,
    description: 'Redesign completo com foco em conversão, mobile-first e checkout otimizado.',
    before: 'https://img.usecurling.com/p/800/400?q=cluttered%20store&color=gray',
    after: 'https://img.usecurling.com/p/800/400?q=minimalist%20fashion%20ecommerce&color=pink',
  },
  {
    title: 'Clínica Saúde Total',
    metric: '+50% Agendamentos',
    icon: TrendingUp,
    description: 'Sistema de agendamento integrado com portal do paciente rápido e intuitivo.',
    before: 'https://img.usecurling.com/p/800/400?q=complex%20form&color=gray',
    after: 'https://img.usecurling.com/p/800/400?q=simple%20calendar%20app&color=green',
  },
]

export function TransformationSection() {
  return (
    <section
      id="cases"
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-3">
            Transformação Real
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">O Antes e Depois do Sucesso</h3>
          <p className="text-lg text-primary-foreground/70">
            Arraste o divisor para ver como evoluímos a presença digital e os resultados de nossos
            clientes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent>
              {cases.map((item, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-white/5 border-white/10 text-primary-foreground overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between border-b border-white/10">
                        <div>
                          <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                          <p className="text-primary-foreground/70 text-sm max-w-md">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 bg-accent/20 text-accent px-4 py-2 rounded-full border border-accent/30">
                          <item.icon className="w-5 h-5" />
                          <span className="font-bold text-lg">{item.metric}</span>
                        </div>
                      </div>
                      <div className="p-4 md:p-6">
                        <BeforeAfterSlider
                          beforeImage={item.before}
                          afterImage={item.after}
                          className="shadow-2xl border border-white/10"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white/10 border-white/20 hover:bg-white/20 hover:text-white" />
              <CarouselNext className="static translate-y-0 bg-white/10 border-white/20 hover:bg-white/20 hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

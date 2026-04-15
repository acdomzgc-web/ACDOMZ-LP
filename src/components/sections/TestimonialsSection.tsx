import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ana Paula S.',
    role: 'CEO, Startup Tech',
    text: 'A ACDOMZ mudou nossa perspectiva sobre desenvolvimento. A plataforma que criaram não apenas resolveu nossos problemas internos como encantou nossos clientes.',
    rating: 5,
    img: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=ana',
  },
  {
    name: 'Roberto C.',
    role: 'Diretor, Franquia Alimentícia',
    text: 'O nível de gestão estratégica que eles trazem para a mesa é surreal. O sistema web customizado reduziu nosso custo operacional em 30%.',
    rating: 5,
    img: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=roberto',
  },
  {
    name: 'Mariana L.',
    role: 'Fundadora, E-commerce Moda X',
    text: 'Entregaram antes do prazo e o suporte é incrível. Nossas vendas online saltaram logo no primeiro mês após o lançamento do novo site.',
    rating: 5,
    img: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=mariana',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#062945] text-white relative">
      {/* Decorative blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-3">
            Prova Social
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">O Que Dizem Nossos Clientes</h3>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel opts={{ align: 'start', loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((test, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white/5 border-white/10 h-full backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                    <CardContent className="p-6 flex flex-col h-full relative">
                      <Quote className="absolute top-4 right-4 w-8 h-8 text-secondary/20" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <p className="text-white/80 text-sm flex-1 mb-6 leading-relaxed italic">
                        "{test.text}"
                      </p>
                      <div className="flex items-center gap-3 mt-auto">
                        <img
                          src={test.img}
                          alt={test.name}
                          className="w-10 h-10 rounded-full border border-secondary/30"
                        />
                        <div>
                          <p className="font-bold text-sm text-white">{test.name}</p>
                          <p className="text-xs text-secondary/80">{test.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white/5 border-white/10 hover:bg-white/20 hover:text-white transition-all text-white/70" />
              <CarouselNext className="static translate-y-0 bg-white/5 border-white/10 hover:bg-white/20 hover:text-white transition-all text-white/70" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

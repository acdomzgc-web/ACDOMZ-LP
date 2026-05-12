import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import claraImg from '@/assets/icone-clara-freitas-f3f8e.png'
import davidImg from '@/assets/icone-david-fonseca-181e0.png'

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

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 h-full flex flex-col">
            <CardContent className="p-8 md:p-12 flex flex-col relative flex-1">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-secondary/20" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-white/90 text-lg md:text-xl flex-1 mb-10 leading-relaxed italic">
                "A entrega do site foi surpreendentemente rápida e totalmente personalizada,
                refletindo com precisão as necessidades e a identidade do studio. Com isso, nosso
                fluxo se tornou muito mais organizado e ágil, simplificando processos, otimizando o
                tempo da equipe e proporcionando uma experiência mais prática, fluida e profissional
                para nossos clientes."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={claraImg}
                  alt="Clara Freitas"
                  className="w-16 h-16 rounded-full border-2 border-secondary/30 object-cover"
                />
                <div>
                  <p className="font-bold text-lg text-white">Clara Freitas</p>
                  <p className="text-sm md:text-base text-secondary/80">
                    CEO da Eleve Pilates e Performance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 h-full flex flex-col">
            <CardContent className="p-8 md:p-12 flex flex-col relative flex-1">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-secondary/20" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-white/90 text-lg md:text-xl flex-1 mb-10 leading-relaxed italic">
                "A direção do Carlos Eduardo na criação do meu site profissional foi fundamental. Eu
                tinha um plano na cabeça, mas não sabia como sair do zero pra chegar no que tinha
                planejando. E no fim das contas nossa conversa foi tal clara e simples que ele
                conseguiu captar exatamente o que eu queria expor no site, só que de uma maneira
                muito mais elegante e profissional, algo que eu jamais faria sozinho ou com alguém
                que não tivesse a sensibilidade e cuidado que ele teve. Sempre muito cuidadoso em
                entender exatamente o que eu queria passar através de cada detalhe da página, desde
                as cores até um texto sobre meu trabalho."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={davidImg}
                  alt="David Fonseca"
                  className="w-16 h-16 rounded-full border-2 border-secondary/30 object-cover"
                />
                <div>
                  <p className="font-bold text-lg text-white">David Fonseca</p>
                  <p className="text-sm md:text-base text-secondary/80">CEO da Blessed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

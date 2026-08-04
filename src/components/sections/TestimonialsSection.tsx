import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import claraImg from '@/assets/icone-clara-freitas-f3f8e.png'
import davidImg from '@/assets/icone-david-fonseca-181e0.png'
import isaImg from '@/assets/plano-de-fundo-isa-bialy-4b954.png'
import pb from '@/lib/pocketbase/client'
import { useRealtime } from '@/hooks/use-realtime'
import { getTestimonials, Testimonial } from '@/services/testimonials'

const FALLBACK_IMAGES: Record<string, string> = {
  'Clara Freitas': claraImg,
  'David Fonseca': davidImg,
  'Dra. Isabela Bialy': isaImg,
}

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Clara Freitas',
    role: 'CEO da Eleve Pilates e Performance',
    content:
      'A entrega do site foi surpreendentemente rápida e totalmente personalizada, refletindo com precisão as necessidades e a identidade do studio. Com isso, nosso fluxo se tornou muito mais organizado e ágil, simplificando processos, otimizando o tempo da equipe e proporcionando uma experiência mais prática, fluida e profissional para nossos clientes.',
    order: 1,
  },
  {
    id: '2',
    name: 'David Fonseca',
    role: 'CEO da Blessed',
    content:
      'A direção do Carlos Eduardo na criação do meu site profissional foi fundamental. Eu tinha um plano na cabeça, mas não sabia como sair do zero pra chegar no que tinha planejando. E no fim das contas nossa conversa foi tal clara e simples que ele conseguiu captar exatamente o que eu queria expor no site, só que de uma maneira muito mais elegante e profissional, algo que eu jamais faria sozinho ou com alguém que não tivesse a sensibilidade e cuidado que ele teve. Sempre muito cuidadoso em entender exatamente o que eu queria passar através de cada detalhe da página, desde as cores até um texto sobre meu trabalho.',
    order: 2,
  },
  {
    id: '3',
    name: 'Dra. Isabela Bialy',
    role: 'Empresária Odontologia Digital',
    content:
      'Quero registrar meu sincero agradecimento ao Carlos Eduardo pelo trabalho excepcional realizado na criação do meu site. O resultado final traduz exatamente a imagem que eu desejava transmitir: um site elegante, sofisticado e alinhado à minha identidade profissional. Minha satisfação é imensa, e tenho plena convicção de que a qualidade do seu trabalho fará diferença para todos que tiverem a oportunidade de conhecê-lo.',
    order: 3,
  },
]

export function TestimonialsSection() {
  const [items, setItems] = useState<Testimonial[]>(FALLBACK_TESTIMONIALS)

  const loadData = useCallback(async () => {
    try {
      const data = await getTestimonials()
      if (data && data.length > 0) {
        setItems(data)
      }
    } catch {
      // keep fallback data
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  useRealtime('testimonials', () => {
    loadData()
  })

  const getAvatar = (item: Testimonial) => {
    if (item.avatar) {
      return pb.files.getURL(item, item.avatar)
    }
    return FALLBACK_IMAGES[item.name] || isaImg
  }

  return (
    <section className="py-24 bg-[#062945] text-white relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Card
              key={item.id || item.name}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full flex flex-col hover:border-secondary/30 group"
            >
              <CardContent className="p-8 flex flex-col relative flex-1">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary/20 group-hover:text-secondary/30 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-white/90 text-base md:text-lg flex-1 mb-8 leading-relaxed italic">
                  "{item.content}"
                </p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  <img
                    src={getAvatar(item)}
                    alt={item.name}
                    className="w-14 h-14 rounded-full border-2 border-secondary/40 object-cover shrink-0"
                  />
                  <div>
                    <p className="font-bold text-base text-white">{item.name}</p>
                    <p className="text-xs md:text-sm text-secondary/90 font-medium">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

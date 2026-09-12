import { useState, useEffect, useCallback } from 'react'
import pb from '@/lib/pocketbase/client'
import { useRealtime } from '@/hooks/use-realtime'
import { getTestimonials, Testimonial } from '@/services/testimonials'
import claraImg from '@/assets/icone-clara-freitas-f3f8e.png'
import davidImg from '@/assets/icone-david-fonseca-181e0.png'
import isaImg from '@/assets/isa-insta-ff725.jpg'

// Seção escura de depoimentos (#0A0A0A)
// Usa a Imagem 3: fundo preto com 'Z' branca
import logoWhiteOnDark from '@/assets/zhera-logo-aedcd.jpg'

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
      'A entrega do site foi surpreendentemente rápida e totalmente personalizada, refletindo com precisão as necessidades e a identidade do studio. Nosso fluxo se tornou muito mais organizado e ágil, com agendamentos diretos e experiência profissional para nossos alunos.',
    order: 1,
  },
  {
    id: '2',
    name: 'David Fonseca',
    role: 'CEO da Blessed',
    content:
      'A direção da Zhera na criação do meu site profissional foi fundamental. Conseguiram captar exatamente o que eu precisava expor de forma elegante, direta e profissional. Cuidado cirúrgico em cada detalhe da página.',
    order: 2,
  },
  {
    id: '3',
    name: 'Dra. Isabela Bialy',
    role: 'Odontologia Digital',
    content:
      'Trabalho excepcional realizado na criação do meu site. O resultado final traduz exatamente a autoridade e sofisticação que eu desejava transmitir para os meus pacientes de odontologia digital.',
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
      // keep fallback
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  useRealtime('testimonials', () => {
    loadData()
  })

  const getAvatar = (item: Testimonial) => {
    if (item.avatar && !item.avatar.startsWith('src/assets/')) {
      return pb.files.getURL(item, item.avatar)
    }
    return FALLBACK_IMAGES[item.name] || isaImg
  }

  return (
    <section className="py-24 bg-[#0A0A0A] text-[#FFFFFF] border-b border-[#262626]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 border border-[#262626] bg-[#121212] px-3 py-1 mb-4">
            <div className="h-4 w-4 bg-black flex items-center justify-center shrink-0">
              <img src={logoWhiteOnDark} alt="Zhera" className="h-full w-full object-contain" />
            </div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#A3A3A3]">
              04 &middot; Depoimentos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] mb-4 tracking-tight leading-[1.1]">
            Quem Confia na Zhera
          </h2>
          <p className="text-base text-[#A3A3A3] leading-relaxed">
            Feedbacks de fundadores e profissionais que colocaram seus projetos no ar conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
          {items.map((item, idx) => (
            <div
              key={item.id || item.name}
              className="bg-[#121212] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#262626] pb-4 mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">
                    Case 0{idx + 1}
                  </span>
                  <span className="font-mono text-xs text-[#FFFFFF]">Avaliação 5.0</span>
                </div>

                <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed mb-8">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#1F1F1F]">
                <img
                  src={getAvatar(item)}
                  alt={item.name}
                  className="w-11 h-11 border border-[#262626] object-cover shrink-0"
                />
                <div>
                  <p className="font-extrabold text-sm text-[#FFFFFF]">{item.name}</p>
                  <p className="font-mono text-xs text-[#737373]">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

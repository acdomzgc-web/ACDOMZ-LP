import { Briefcase, Zap, Star } from 'lucide-react'
import { Reveal } from '@/components/motion/Reveal'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'

// Seção clara com papel/suporte (#F4F4F2 e fundo branco)
// Usa a Imagem 1: fundo branco, 'Z' preta sobre fundos claros
import logoDarkOnLight from '@/assets/zhera-logo-white-964be.png'

export function ExpertiseSection() {
  const metrics = [
    {
      numeric: 50,
      prefix: '+',
      suffix: '',
      label: 'projetos entregues com sucesso',
      icon: <Briefcase className="w-5 h-5 text-[#0A0A0A]" />,
    },
    {
      customValue: '3 a 5 dias',
      label: 'tempo médio de entrega com dados completos',
      icon: <Zap className="w-5 h-5 text-[#0A0A0A]" />,
    },
    {
      numeric: 85,
      prefix: '+',
      suffix: '%',
      label: 'conversão média obtida em nossos sistemas',
      icon: <Star className="w-5 h-5 text-[#0A0A0A]" />,
    },
  ]

  const partners = ['GitHub', 'React', 'TypeScript', 'Tailwind CSS', 'PocketBase', 'OpenAI']

  return (
    <section
      id="expertise"
      className="py-24 bg-[#F4F4F2] text-[#0A0A0A] border-b border-[#E5E5E5] relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal direction="up" distance={20} className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 border border-[#0A0A0A] bg-[#FFFFFF] px-3 py-1 mb-4 transition-transform duration-200 hover:translate-x-1">
            <div className="h-4 w-4 bg-[#FFFFFF] flex items-center justify-center shrink-0">
              <img src={logoDarkOnLight} alt="Zhera" className="h-full w-full object-contain" />
            </div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A]">
              Prova e Autoridade
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A0A0A] mb-5 tracking-tight leading-[1.1]">
            Engenharia Direta. Resultados Medidos.
          </h2>
          <p className="text-base md:text-lg text-[#404040] leading-relaxed">
            Estrutura técnica desenhada para converter tráfego em vendas imediatas. Sem
            intermediários, sem atrasos e com código otimizado para velocidade máxima.
          </p>
        </Reveal>

        {/* Metrics Grid em estilo editorial seco com stagger */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-0 border border-[#0A0A0A] bg-[#FFFFFF] mb-16">
          {metrics.map((metric, i) => (
            <Reveal
              key={i}
              delay={i * 120}
              distance={16}
              className={`p-8 md:p-10 flex flex-col justify-between border-[#0A0A0A] transition-colors duration-200 hover:bg-[#FAF9F6] ${
                i > 0 ? 'border-t sm:border-t-0 sm:border-l' : ''
              } ${i === 2 ? 'sm:col-span-2 md:col-span-1 border-t md:border-t-0' : ''}`}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">
                  0{i + 1} &middot; Métrica
                </span>
                <div className="p-2 border border-[#0A0A0A] bg-[#F4F4F2] transition-transform duration-200 hover:rotate-6">
                  {metric.icon}
                </div>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#0A0A0A] mb-3 tracking-tight font-mono">
                  {metric.numeric !== undefined ? (
                    <AnimatedCounter
                      value={metric.numeric}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  ) : (
                    metric.customValue
                  )}
                </h3>
                <p className="text-sm font-medium text-[#525252]">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Parcerias e stack técnica com animação suave */}
        <Reveal
          direction="up"
          distance={16}
          delay={200}
          className="border-t border-[#D4D4D4] pt-10"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-5">
            Stack e Ferramentas Técnicas
          </p>
          <div className="flex flex-wrap gap-2">
            {partners.map((partner, i) => (
              <span
                key={i}
                className="font-mono text-xs font-semibold px-3 py-1.5 border border-[#0A0A0A] bg-[#FFFFFF] text-[#0A0A0A] transition-all duration-200 hover:bg-[#0A0A0A] hover:text-[#FFFFFF] cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

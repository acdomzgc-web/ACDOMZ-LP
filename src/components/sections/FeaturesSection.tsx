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

// Seção clara de diferenciais (#F4F4F2)
// Usa a Imagem 1: fundo branco, 'Z' preta
import logoDarkOnLight from '@/assets/zhera-logo-white-964be.png'

const features = [
  {
    icon: Zap,
    title: 'Velocidade de Entrega',
    desc: '3 a 5 dias úteis com material completo. Sem reuniões desnecessárias.',
  },
  {
    icon: DollarSign,
    title: 'Preço Direto',
    desc: 'Pagamento único a partir de R$ 997. Sem mensalidade obrigatória.',
  },
  {
    icon: RefreshCw,
    title: 'Flexibilidade de Código',
    desc: 'Arquitetura limpa em React. O projeto pertence integralmente a você.',
  },
  {
    icon: Briefcase,
    title: 'Portfólio Comprovado',
    desc: '+50 projetos em produção com métricas reais de conversão.',
  },
  {
    icon: Globe,
    title: 'Foco em Conversão',
    desc: 'Cada dobra e botão direciona o lead para fechar no WhatsApp.',
  },
  {
    icon: LifeBuoy,
    title: 'Suporte Opcional',
    desc: 'Planos de manutenção mensal a partir de R$ 47/mês, apenas se você quiser.',
  },
  {
    icon: Users,
    title: 'Comunicação Direta',
    desc: 'Contato transparente com os desenvolvedores responsáveis pela entrega.',
  },
  {
    icon: Code,
    title: 'IA Aplicada',
    desc: 'Automação inteligente de atendimento onde realmente gera valor.',
  },
  {
    icon: ShieldCheck,
    title: 'Contrato Seguro',
    desc: 'Escopo claro e transparente sem cobranças adicionais pós-fechamento.',
  },
]

import { Reveal } from '@/components/motion/Reveal'

export function FeaturesSection() {
  return (
    <section
      id="diferenciais"
      className="py-24 bg-[#F4F4F2] text-[#0A0A0A] border-b border-[#E5E5E5] relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal direction="up" distance={20} className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 border border-[#0A0A0A] bg-[#FFFFFF] px-3 py-1 mb-4 transition-transform duration-200 hover:translate-x-1">
            <div className="h-4 w-4 bg-[#FFFFFF] flex items-center justify-center shrink-0">
              <img src={logoDarkOnLight} alt="Zhera" className="h-full w-full object-contain" />
            </div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0A0A0A]">
              Por que a Zhera?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0A0A] mb-4 tracking-tight leading-[1.1]">
            Diferenciais de Execução
          </h2>
          <p className="text-base text-[#525252] leading-relaxed">
            Menos promessas vazias, mais velocidade e entrega técnica comprovada.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#0A0A0A] bg-[#FFFFFF]">
          {features.map((feat, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 80 + Math.floor(i / 3) * 60}
              distance={16}
              className={`p-6 sm:p-8 border-[#0A0A0A] flex flex-col justify-between transition-colors duration-200 hover:bg-[#FAF9F6] group ${
                i % 3 !== 0 ? 'lg:border-l' : ''
              } ${i % 2 !== 0 ? 'sm:max-lg:border-l' : ''} ${
                i >= 3 ? 'lg:border-t' : ''
              } ${i >= 2 ? 'sm:max-lg:border-t' : ''} ${i >= 1 ? 'max-sm:border-t' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#737373] group-hover:text-[#0A0A0A] transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="p-2 border border-[#0A0A0A] bg-[#F4F4F2] text-[#0A0A0A] transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6">
                    <feat.icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-[#0A0A0A] mb-2 leading-tight">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">{feat.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

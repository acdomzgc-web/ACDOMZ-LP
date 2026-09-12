import { useEffect, useState } from 'react'
import { Check, ShieldCheck, Wrench, UserCheck, Headphones, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import { getPlans, type Plan } from '@/services/plans'
import { useRealtime } from '@/hooks/use-realtime'
import { buildPlanWhatsAppUrl, buildMaintenanceWhatsAppUrl } from '@/lib/whatsapp'
import { Reveal } from '@/components/motion/Reveal'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function PlanCard({ plan, index = 0 }: { plan: Plan; index?: number }) {
  const isRecommended = plan.name.toUpperCase().includes('MEDIUM')
  const isPremium = plan.name.toUpperCase().includes('PREMIUM')
  const whatsappUrl = buildPlanWhatsAppUrl(plan.name)

  return (
    <Reveal delay={index * 100} distance={20} className="flex flex-col flex-1 h-full">
      <div
        className={cn(
          'relative flex flex-col p-6 bg-[#121212] border transition-all duration-300 flex-1 h-full hover-lift group',
          isRecommended && 'border-[#FFFFFF] bg-[#171717] shadow-xl shadow-black/40',
          isPremium && 'border-[#FFFFFF] shadow-xl shadow-black/40',
          !isRecommended && !isPremium && 'border-[#262626] hover:border-[#737373]',
        )}
      >
        {/* Badge Recomendado */}
        {isRecommended && (
          <div className="absolute -top-3 left-6 bg-[#FFFFFF] text-[#0A0A0A] px-2.5 py-0.5 font-mono text-[10px] font-extrabold uppercase tracking-widest border border-[#FFFFFF] flex items-center gap-1.5 shadow-md">
            <span className="inline-block w-1.5 h-1.5 bg-[#0A0A0A] animate-pulse-subtle" />
            Recomendado
          </div>
        )}

        {/* Badge Topo de linha */}
        {isPremium && (
          <div className="absolute -top-3 left-6 bg-[#FFFFFF] text-[#0A0A0A] px-2.5 py-0.5 font-mono text-[10px] font-extrabold uppercase tracking-widest border border-[#FFFFFF] flex items-center gap-1.5 shadow-md">
            <span className="inline-block w-1.5 h-1.5 bg-[#0A0A0A]" />
            Topo de Linha
          </div>
        )}

        {/* Header: Nome + Tagline */}
        <div className="pb-5 border-b border-[#262626] shrink-0">
          <h4 className="text-2xl font-extrabold text-[#FFFFFF] mb-1 tracking-tight">
            {plan.name}
          </h4>
          <p className="text-xs text-[#A3A3A3] min-h-[2.5rem] flex items-center leading-snug">
            {plan.tagline || plan.description}
          </p>
        </div>

        {/* Preço Único */}
        <div className="flex-1 py-6 flex flex-col gap-6">
          <div className="min-h-[5rem] flex flex-col justify-center shrink-0">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#737373] mb-1">
              Pagamento Único
            </p>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] tracking-tight font-mono">
              {plan.price_one_time}
            </p>
            <p className="text-xs font-mono text-[#737373] mt-1">Sem mensalidades</p>
          </div>

          {/* Lista de Recursos */}
          <div className="flex flex-col gap-3 flex-1">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#737373]">
              Escopo Incluso:
            </p>
            <ul className="space-y-2.5 text-xs text-[#D4D4D4]">
              {plan.features.map((feat, j) => (
                <li key={j} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#FFFFFF] shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                  <span className="leading-tight">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button com micro-interação */}
        <div className="pt-5 mt-auto shrink-0 border-t border-[#262626]">
          <Button
            className={cn(
              'w-full h-11 text-xs font-extrabold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5',
              isRecommended
                ? 'bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F4F4F2] border border-[#FFFFFF]'
                : 'bg-transparent text-[#FFFFFF] border border-[#262626] hover:bg-[#1F1F1F] hover:border-[#FFFFFF]',
            )}
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Escolher {plan.name}
            </a>
          </Button>
        </div>
      </div>
    </Reveal>
  )
}

export function PricingSection() {
  const [plans, setPlans] = useState<Plan[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPlans = async () => {
    try {
      const data = await getPlans()
      setPlans(data)
    } catch (error) {
      console.error('Error fetching plans:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPlans()
  }, [])

  useRealtime('plans', () => {
    fetchPlans()
  })

  return (
    <section
      id="planos"
      className="py-24 bg-[#0A0A0A] text-[#FFFFFF] border-b border-[#262626] relative"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <Reveal direction="up" distance={20} className="max-w-3xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[#737373] mb-3">
            03 &middot; Investimento e Escopo
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] mb-4 tracking-tight leading-[1.1]">
            Planos Sob Medida
          </h2>
          <p className="text-base text-[#A3A3A3] leading-relaxed">
            Desenvolvimento completo em pagamento único. Sem taxas ocultas e com total propriedade
            do seu código e do seu deploy.
          </p>
        </Reveal>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col p-6 border border-[#262626] bg-[#121212] gap-6 h-full min-h-[560px]"
              >
                <Skeleton className="h-8 w-3/4 mx-auto shrink-0 bg-[#262626]" />
                <Skeleton className="h-10 w-full shrink-0 bg-[#262626]" />
                <Skeleton className="h-16 w-32 mx-auto shrink-0 bg-[#262626]" />
                <Skeleton className="h-full w-full flex-1 bg-[#262626]" />
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Grid de 4 Cards lado a lado com animação suave e hover lift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
              {plans.map((plan, i) => (
                <PlanCard key={plan.id} plan={plan} index={i} />
              ))}
            </div>

            {/* NOTA ÚNICA abaixo dos 4 cards */}
            <Reveal direction="up" distance={16} delay={200} className="mt-8 max-w-5xl mx-auto">
              <div className="border border-[#262626] bg-[#121212] p-5 sm:p-6 flex items-start gap-4 transition-colors hover:border-[#404040]">
                <div className="p-2 border border-[#262626] bg-[#0A0A0A] text-[#FFFFFF] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFFFFF] mb-1">
                    Incluso em todos os planos
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    Todos os planos incluem nome do site, favicon, certificado SSL e domínio
                    gratuito (nomesite.goskip.app). Domínio próprio (.com, .com.br) fica por conta
                    do cliente — te ajudamos a configurar sem custo extra.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Bloco de Manutenção Mensal Opcional com 2 Modalidades de Contratação */}
            <Reveal
              direction="up"
              distance={20}
              delay={250}
              className="mt-16 max-w-5xl mx-auto border border-[#262626] bg-[#121212] p-6 sm:p-8 md:p-10 transition-colors hover:border-[#404040]"
            >
              {/* Cabeçalho do Bloco */}
              <div className="max-w-2xl mx-auto text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#262626] bg-[#0A0A0A] text-[#FFFFFF] font-mono text-xs uppercase tracking-widest mb-3">
                  <Wrench className="w-3.5 h-3.5" />
                  Manutenção Mensal Opcional
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight mb-2">
                  Você escolhe como quer gerenciar o seu projeto
                </h3>
                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                  Nossos planos continuam 100% pagamento único para desenvolvimento. Se você quiser
                  tranquilidade total pós-entrega, oferecemos suporte contínuo com valores mensais
                  acessíveis.
                </p>
              </div>

              {/* As Duas Modalidades: Você assume tudo vs A Zhera cuida de tudo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Opção 1: Cliente assume tudo */}
                <div className="border border-[#262626] bg-[#0A0A0A] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 border border-[#262626] bg-[#171717] text-[#FFFFFF]">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#737373] block">
                          Modalidade 1
                        </span>
                        <h4 className="text-sm sm:text-base font-extrabold text-[#FFFFFF]">
                          Você assume tudo (Sem recorrência)
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs text-[#A3A3A3] mb-4 leading-relaxed">
                      Pagamento único de setup e nada mais. O código, os arquivos e o deploy são
                      100% seus. Você gerencia alterações de conteúdo, fotos e configurações por
                      conta própria.
                    </p>
                    <ul className="space-y-2 font-mono text-xs text-[#D4D4D4]">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#FFFFFF] shrink-0" />
                        <span>Total autonomia e liberdade sobre o site</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#FFFFFF] shrink-0" />
                        <span>Zero mensalidades ou compromissos recorrentes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#FFFFFF] shrink-0" />
                        <span>Código entregue limpo e pronto para produção</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#1F1F1F] font-mono text-xs text-[#737373]">
                    Incluso no valor do setup de cada plano
                  </div>
                </div>

                {/* Opção 2: Zhera cuida de tudo */}
                <div className="border border-[#FFFFFF] bg-[#171717] p-6 flex flex-col justify-between relative">
                  <div className="absolute -top-3 right-6 bg-[#FFFFFF] text-[#0A0A0A] font-mono text-[10px] font-extrabold uppercase px-2.5 py-0.5 border border-[#FFFFFF]">
                    Mais Tranquilidade
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 border border-[#FFFFFF] bg-[#0A0A0A] text-[#FFFFFF]">
                        <Headphones className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#A3A3A3] block">
                          Modalidade 2
                        </span>
                        <h4 className="text-sm sm:text-base font-extrabold text-[#FFFFFF]">
                          A Zhera cuida de tudo para você
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs text-[#D4D4D4] mb-4 leading-relaxed">
                      Nós assumimos a sustentação, atualizações periódicas de textos, fotos,
                      monitoramento de estabilidade, segurança e suporte prioritário no WhatsApp sem
                      dor de cabeça.
                    </p>
                    <ul className="space-y-2 font-mono text-xs text-[#FFFFFF]">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#FFFFFF] shrink-0" />
                        <span>Ajustes de texto, fotos, contatos e banners</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#FFFFFF] shrink-0" />
                        <span>Monitoramento de uptime, SSL e segurança</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#FFFFFF] shrink-0" />
                        <span>Suporte prioritário direto via WhatsApp</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#262626] font-mono text-xs text-[#A3A3A3]">
                    Opcional &middot; contrate apenas se fizer sentido para você
                  </div>
                </div>
              </div>

              {/* Grade com os 4 Valores de Manutenção Mensal por Plano */}
              <div>
                <div className="text-center mb-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-[#737373]">
                    Valores de Manutenção Mensal Opcional por Plano
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      name: 'STARTER',
                      price:
                        plans.find((p) => p.name.toUpperCase().includes('STARTER'))
                          ?.maintenance_monthly_price || 'R$ 47/mês',
                      isRecommended: false,
                      isPremium: false,
                      description: 'Ajustes pontuais e monitoramento essencial',
                    },
                    {
                      name: 'MEDIUM',
                      price:
                        plans.find((p) => p.name.toUpperCase().includes('MEDIUM'))
                          ?.maintenance_monthly_price || 'R$ 67/mês',
                      isRecommended: true,
                      isPremium: false,
                      description: 'Suporte a leads, WhatsApp e atualizações',
                    },
                    {
                      name: 'EXPERT',
                      price:
                        plans.find((p) => p.name.toUpperCase().includes('EXPERT'))
                          ?.maintenance_monthly_price || 'R$ 87/mês',
                      isRecommended: false,
                      isPremium: false,
                      description: 'Monitoramento de IA, integrações e dados',
                    },
                    {
                      name: 'PREMIUM',
                      price:
                        plans.find((p) => p.name.toUpperCase().includes('PREMIUM'))
                          ?.maintenance_monthly_price || 'R$ 97/mês',
                      isRecommended: false,
                      isPremium: true,
                      description: 'Sustentação 3D, WebGL e performance máxima',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        'p-5 flex flex-col justify-between bg-[#0A0A0A] border text-center transition-all duration-200 hover:-translate-y-1',
                        item.isRecommended
                          ? 'border-[#FFFFFF] shadow-md shadow-black/30'
                          : 'border-[#262626] hover:border-[#737373]',
                      )}
                    >
                      <div>
                        <div className="flex items-center justify-center gap-2 mb-2 font-mono">
                          <span className="text-xs font-bold text-[#FFFFFF]">{item.name}</span>
                          {item.isRecommended && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 bg-[#FFFFFF] text-[#0A0A0A] uppercase">
                              Recomendado
                            </span>
                          )}
                          {item.isPremium && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 bg-[#262626] text-[#FFFFFF] uppercase">
                              Topo
                            </span>
                          )}
                        </div>
                        <p className="text-2xl font-extrabold tracking-tight my-2 font-mono text-[#FFFFFF]">
                          {item.price}
                        </p>
                        <p className="text-xs text-[#A3A3A3] leading-snug">{item.description}</p>
                      </div>
                      <div className="mt-5 pt-3 border-t border-[#1F1F1F]">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full text-xs font-mono uppercase tracking-wider h-9 border border-[#262626] hover:bg-[#FFFFFF] hover:text-[#0A0A0A]"
                          asChild
                        >
                          <a
                            href={buildMaintenanceWhatsAppUrl(item.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5"
                          >
                            Contratar com Suporte
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Resumo Comparativo com 4 Planos */}
            <Reveal
              direction="up"
              distance={20}
              delay={150}
              className="mt-20 max-w-6xl mx-auto overflow-x-auto pb-4"
            >
              <div className="min-w-[900px]">
                <h3 className="text-xl sm:text-2xl font-extrabold text-center mb-8 uppercase font-mono tracking-tight text-[#FFFFFF]">
                  Resumo Comparativo de Escopo
                </h3>
                <div className="border border-[#262626] bg-[#121212] overflow-hidden">
                  <Table>
                    <TableHeader className="bg-[#0A0A0A] border-b border-[#262626]">
                      <TableRow className="border-b border-[#262626] hover:bg-transparent">
                        <TableHead className="w-[240px] font-mono text-xs uppercase tracking-wider text-[#FFFFFF]">
                          Aspecto
                        </TableHead>
                        <TableHead className="font-mono text-xs uppercase tracking-wider text-center text-[#FFFFFF]">
                          STARTER
                        </TableHead>
                        <TableHead className="font-mono text-xs uppercase tracking-wider text-center text-[#FFFFFF]">
                          MEDIUM
                        </TableHead>
                        <TableHead className="font-mono text-xs uppercase tracking-wider text-center text-[#FFFFFF]">
                          EXPERT
                        </TableHead>
                        <TableHead className="font-mono text-xs uppercase tracking-wider text-center text-[#FFFFFF]">
                          PREMIUM
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        [
                          'Investimento (Único)',
                          'R$ 997,00',
                          'R$ 1.497,00',
                          'R$ 2.997,00',
                          'R$ 4.997,00',
                        ],
                        ['Cobrança Mensal', 'Nenhuma', 'Nenhuma', 'Nenhuma', 'Nenhuma'],
                        [
                          'Estrutura / Dobras',
                          '3 a 5 páginas',
                          '5 a 10 dobras',
                          '10 dobras',
                          'Experiência Completa Sob Medida',
                        ],
                        [
                          'Fotos Inclusas',
                          'Até 5 otimizadas',
                          '10 fotos',
                          'Fotos ilimitadas',
                          'Fotos ilimitadas + Direção de Arte',
                        ],
                        ['WhatsApp + FAQ', 'Não', 'Sim (Direto)', 'Sim (Direto)', 'Sim (Direto)'],
                        [
                          'Chatbot com IA',
                          'Não',
                          'Não',
                          'Sim (Personalizado)',
                          'Sim (Personalizado)',
                        ],
                        [
                          'Infoprodutos',
                          'Não',
                          'Não',
                          'Sim (Alta Conversão)',
                          'Sim (Alta Conversão)',
                        ],
                        [
                          '3D / WebGL / Motion',
                          'Não',
                          'Não',
                          'Não',
                          'Sim (Three.js, GSAP, Motion 3D)',
                        ],
                        [
                          'Stack de Tecnologia',
                          'React / Tailwind',
                          'React / Tailwind',
                          'React / Tailwind / IA',
                          'Next.js / GSAP / Three.js / WebGL',
                        ],
                        [
                          'SEO + Meta Descrição',
                          'Básico',
                          'Avançado',
                          'Avançado',
                          'Avançado + Performance Max',
                        ],
                        [
                          'Domínio Gratuito',
                          'goskip.app',
                          'goskip.app',
                          'goskip.app',
                          'goskip.app',
                        ],
                        ['Certificado SSL + Favicon', 'Incluso', 'Incluso', 'Incluso', 'Incluso'],
                        ['GitHub Export', 'Incluso', 'Incluso', 'Incluso', 'Incluso'],
                      ].map((row, i) => (
                        <TableRow key={i} className="border-b border-[#1F1F1F] hover:bg-[#171717]">
                          <TableCell className="font-mono text-xs text-[#FFFFFF]">
                            {row[0]}
                          </TableCell>
                          <TableCell className="font-mono text-xs text-center text-[#A3A3A3]">
                            {row[1]}
                          </TableCell>
                          <TableCell className="font-mono text-xs text-center text-[#FFFFFF] font-semibold">
                            {row[2]}
                          </TableCell>
                          <TableCell className="font-mono text-xs text-center text-[#A3A3A3]">
                            {row[3]}
                          </TableCell>
                          <TableCell className="font-mono text-xs text-center text-[#FFFFFF] font-bold">
                            {row[4]}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Reveal>

            {/* Guia de Escolha dos 4 Planos */}
            <Reveal
              direction="up"
              distance={20}
              delay={150}
              className="mt-12 max-w-5xl mx-auto border border-[#262626] bg-[#121212] p-6 sm:p-8 transition-colors hover:border-[#404040]"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FFFFFF]">
                  Guia de Decisão Rápida
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-b md:border-b-0 md:border-r border-[#262626] pb-4 md:pb-0 md:pr-6">
                  <h5 className="font-mono text-xs font-bold text-[#FFFFFF] uppercase tracking-wider mb-1">
                    STARTER (R$ 997)
                  </h5>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed">
                    Presença digital essencial. Vitrine rápida no ar para validação com investimento
                    enxuto.
                  </p>
                </div>
                <div className="border-b md:border-b-0 pb-4 md:pb-0">
                  <h5 className="font-mono text-xs font-bold text-[#FFFFFF] uppercase tracking-wider mb-1">
                    MEDIUM (R$ 1.497) &middot; Mais Escolhido
                  </h5>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed">
                    Geração de leads via WhatsApp e FAQ estruturada. Recomendado para negócios que
                    vivem de prospecção direta.
                  </p>
                </div>
                <div className="border-t border-[#262626] pt-4 md:border-r md:pr-6">
                  <h5 className="font-mono text-xs font-bold text-[#FFFFFF] uppercase tracking-wider mb-1">
                    EXPERT (R$ 2.997)
                  </h5>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed">
                    Landing page com IA para atendimento automático e suporte a infoprodutos de alta
                    conversão.
                  </p>
                </div>
                <div className="border-t border-[#262626] pt-4">
                  <h5 className="font-mono text-xs font-bold text-[#FFFFFF] uppercase tracking-wider mb-1">
                    PREMIUM (R$ 4.997) &middot; Topo
                  </h5>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed">
                    Experiência visual sob medida com motion 3D, WebGL e direção de arte completa
                    para liderança de nicho.
                  </p>
                </div>
              </div>
            </Reveal>
          </>
        )}
      </div>
    </section>
  )
}

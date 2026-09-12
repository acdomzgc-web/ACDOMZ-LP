import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronRight,
  Mail,
  Phone,
  Sparkles,
  Terminal,
  Activity,
  CheckCircle2,
  Shield,
  Zap,
} from 'lucide-react'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'

// Logo oficial Zhera Imagem 3 (fundo preto com Z branco) para fundo escuro do Hero
import logoWhiteOnDark from '@/assets/zhera-logo-aedcd.jpg'

import macbookImg from '@/assets/macbook-air-acdomz.goskip.app-e38d5.png'
import tabletImg from '@/assets/galaxy-tab-s7-acdomz.goskip.app-6ff31.png'
import phoneImg from '@/assets/iphone-14-plus-acdomz.goskip.app-752fc.png'

// Ticker de frases de deploy/status em tempo real estilo terminal editorial
const TERMINAL_LOGS = [
  'ARCH // Clean-architecture Next.js 15 & React 19 compilado',
  'PERF // Core Web Vitals 99/100 · LCP 0.6s · CLS 0.00',
  'STACK // PocketBase Cloud + Tailwind CSS v3 + Motion System',
  'DEPO // +85% conversão com arquitetura mobile-first',
  'DELIVERY // Ciclo de sprint fechado em 4 dias corridos',
  'OWNERSHIP // Sem mensalidade · Código 100% sob seu domínio',
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile' | 'terminal'>('desktop')
  const [logIndex, setLogIndex] = useState(0)
  const [activeMetricHover, setActiveMetricHover] = useState<number | null>(null)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)

    // Detecção de prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      // Parallax sutil no hero baseado na posição do mouse em relação ao centro
      const hero = heroRef.current
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      // Se fora da tela não computar
      if (rect.bottom < 0 || rect.top > window.innerHeight) return

      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Rotação suave do ticker técnico a cada 3.8s
  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % TERMINAL_LOGS.length)
    }, 3800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0A0A0A] text-[#FFFFFF] border-b border-[#262626]"
    >
      {/* 1. Camada de Grid Técnico Editorial (64px) */}
      <div
        className="technical-grid-bg absolute inset-0 pointer-events-none opacity-40 z-0"
        aria-hidden="true"
      />

      {/* 2. Grid de pontos sutis combinados para profundidade seca */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 30%, #383838 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* 3. Watermark Gigantesca "Z" da marca em baixa opacidade (marca d'água monumental) */}
      <div
        className="absolute -right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none z-0 font-extrabold tracking-tighter opacity-[0.035] leading-none text-[#FFFFFF] text-[380px] sm:text-[540px] lg:text-[720px] transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 0.4}px, calc(-50% + ${mousePos.y * 0.4}px), 0)`,
        }}
        aria-hidden="true"
      >
        Z
      </div>

      {/* 4. Marcadores de Canto Editoriais (Crosshairs técnicos nos quatro cantos da seção) */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-[#404040] select-none pointer-events-none hidden sm:flex items-center gap-1.5 z-10">
        <span className="text-[#FFFFFF]/30">+</span>
        <span>SYS.ZH-01 // COORD 25.4284° S, 49.2733° W</span>
      </div>
      <div className="absolute top-4 right-4 font-mono text-[10px] text-[#404040] select-none pointer-events-none hidden sm:flex items-center gap-1.5 z-10">
        <span>EDITION 2026.04</span>
        <span className="text-[#FFFFFF]/30">+</span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Ticker técnico no topo do Hero: estilo terminal / telemetria viva */}
        <div
          className="mb-8 border-b border-[#1F1F1F] pb-3 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#737373] transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translate3d(0, 0, 0)' : 'translate3d(0, -10px, 0)',
            transitionDelay: '60ms',
          }}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#FFFFFF] font-bold uppercase tracking-wider bg-[#141414] border border-[#262626] px-2 py-0.5">
              <span className="w-1.5 h-1.5 bg-[#FFFFFF] animate-pulse-subtle" />
              LIVE DEPLOY
            </span>
            <div className="h-4 overflow-hidden relative min-w-[240px] sm:min-w-[340px]">
              <span
                key={logIndex}
                className="block animate-fade-in text-[#A3A3A3] truncate text-[11px]"
              >
                {TERMINAL_LOGS[logIndex]}
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[#525252]">
            <span>UPTIME 99.98%</span>
            <span>&middot;</span>
            <span className="text-[#A3A3A3]">LATENCY 12ms</span>
            <span>&middot;</span>
            <span className="text-[#FFFFFF]">CURITIBA // BR</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* COLUNA ESQUERDA: Tipografia editorial de alto impacto + Prova + CTAs */}
          <div className="lg:col-span-7">
            {/* Badge de Autoridade com índice de seção editorial */}
            <div
              className="inline-flex items-center gap-3 border border-[#262626] bg-[#0E0E0E] px-3.5 py-2 mb-6 transition-all duration-700 hover:border-[#FFFFFF] group"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translate3d(0, 0, 0)' : 'translate3d(0, 16px, 0)',
                transitionDelay: '120ms',
              }}
            >
              <div className="h-6 w-6 bg-black flex items-center justify-center p-0.5 shrink-0 border border-[#1F1F1F] group-hover:border-[#FFFFFF] transition-colors">
                <img src={logoWhiteOnDark} alt="Zhera" className="h-full w-full object-contain" />
              </div>
              <div className="h-3.5 w-px bg-[#262626]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3] flex items-center gap-2">
                <span className="text-[#FFFFFF] font-bold">01 //</span>
                <span>Zhera Studio &middot; Curitiba</span>
                <span className="inline-block w-1.5 h-1.5 bg-[#FFFFFF] animate-pulse-subtle" />
              </span>
            </div>

            {/* Título Monumental: Contraste editorial forte com texto vazado e itálico elegante */}
            <h1
              className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold tracking-tight text-[#FFFFFF] mb-6 leading-[1.02] transition-all duration-700"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                transitionDelay: '220ms',
              }}
            >
              <span className="block">
                Sites que <span className="text-stroke-mono-strong">Vendem.</span>
              </span>
              <span className="relative inline-block mt-1 sm:mt-2">
                <span className="italic font-serif font-normal text-[#F4F4F2] mr-2">Sistemas</span>
                <span className="relative inline-block">
                  que Crescem.
                  {/* Linha técnica com marcadores nos cantos */}
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FFFFFF]" />
                  <span className="absolute -bottom-1.5 left-0 w-1 h-2 bg-[#FFFFFF]" />
                  <span className="absolute -bottom-1.5 right-0 w-1 h-2 bg-[#FFFFFF]" />
                </span>
              </span>
            </h1>

            {/* Subtítulo: copy preservada com refinamento visual de leitura */}
            <p
              className="text-base sm:text-xl text-[#B3B3B3] mb-8 leading-relaxed max-w-2xl font-normal transition-all duration-700"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                transitionDelay: '340ms',
              }}
            >
              Site pronto em{' '}
              <strong className="text-[#FFFFFF] font-semibold underline decoration-[#525252] underline-offset-4">
                3 a 5 dias
              </strong>
              , a partir de <strong className="text-[#FFFFFF] font-semibold">R$&nbsp;997</strong>.
              Desenvolvimento de alto padrão, sem mensalidades e com total propriedade do seu
              código.
            </p>

            {/* Tríptico de Provas / Métricas em caixas técnicas com hover invertido */}
            <div
              className="grid grid-cols-3 gap-2 sm:gap-3 mb-9 transition-all duration-700"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                transitionDelay: '460ms',
              }}
            >
              {/* Card 1: +85% conversão */}
              <div
                onMouseEnter={() => setActiveMetricHover(0)}
                onMouseLeave={() => setActiveMetricHover(null)}
                className={`p-3 sm:p-4 border transition-all duration-300 relative ${
                  activeMetricHover === 0
                    ? 'bg-[#FFFFFF] text-[#0A0A0A] border-[#FFFFFF]'
                    : 'bg-[#101010] text-[#FFFFFF] border-[#262626] hover:border-[#525252]'
                }`}
              >
                <div className="flex items-center justify-between mb-1 text-[10px] font-mono tracking-wider uppercase opacity-70">
                  <span>METRIC // 01</span>
                  <Zap className="w-3 h-3" />
                </div>
                <div className="text-xl sm:text-3xl font-extrabold font-mono tracking-tight">
                  <AnimatedCounter value={85} prefix="+" suffix="%" />
                </div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider font-mono mt-1 opacity-80">
                  Conversão
                </div>
              </div>

              {/* Card 2: +50 projetos */}
              <div
                onMouseEnter={() => setActiveMetricHover(1)}
                onMouseLeave={() => setActiveMetricHover(null)}
                className={`p-3 sm:p-4 border transition-all duration-300 relative ${
                  activeMetricHover === 1
                    ? 'bg-[#FFFFFF] text-[#0A0A0A] border-[#FFFFFF]'
                    : 'bg-[#101010] text-[#FFFFFF] border-[#262626] hover:border-[#525252]'
                }`}
              >
                <div className="flex items-center justify-between mb-1 text-[10px] font-mono tracking-wider uppercase opacity-70">
                  <span>METRIC // 02</span>
                  <CheckCircle2 className="w-3 h-3" />
                </div>
                <div className="text-xl sm:text-3xl font-extrabold font-mono tracking-tight">
                  <AnimatedCounter value={50} prefix="+" />
                </div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider font-mono mt-1 opacity-80">
                  Projetos Entregues
                </div>
              </div>

              {/* Card 3: 3-5 dias */}
              <div
                onMouseEnter={() => setActiveMetricHover(2)}
                onMouseLeave={() => setActiveMetricHover(null)}
                className={`p-3 sm:p-4 border transition-all duration-300 relative ${
                  activeMetricHover === 2
                    ? 'bg-[#FFFFFF] text-[#0A0A0A] border-[#FFFFFF]'
                    : 'bg-[#101010] text-[#FFFFFF] border-[#262626] hover:border-[#525252]'
                }`}
              >
                <div className="flex items-center justify-between mb-1 text-[10px] font-mono tracking-wider uppercase opacity-70">
                  <span>METRIC // 03</span>
                  <Activity className="w-3 h-3" />
                </div>
                <div className="text-xl sm:text-3xl font-extrabold font-mono tracking-tight">
                  3 a 5
                </div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider font-mono mt-1 opacity-80">
                  Dias p/ Entrega
                </div>
              </div>
            </div>

            {/* CTAs: Botão principal de alto impacto editorial com micro-interação elaborada */}
            <div
              className="flex flex-col sm:flex-row gap-3 transition-all duration-700"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                transitionDelay: '560ms',
              }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F4F4F2] h-14 px-8 text-xs font-extrabold uppercase tracking-widest border border-[#FFFFFF] w-full sm:w-auto transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                asChild
              >
                <a
                  href="https://wa.me/5541987322926"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Falar com Especialista
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group h-14 px-8 text-xs font-extrabold uppercase tracking-widest gap-2.5 border-[#333333] bg-[#0E0E0E] hover:bg-[#FFFFFF] hover:text-[#0A0A0A] hover:border-[#FFFFFF] text-[#FFFFFF] w-full sm:w-auto transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                asChild
              >
                <a href="#cases" className="flex items-center justify-center gap-2">
                  <span>Ver Portfólio</span>
                  <ChevronRight className="w-4 h-4 text-[#737373] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0A0A0A]" />
                </a>
              </Button>
            </div>

            {/* Micro-prova de garantia e contato rápido */}
            <div
              className="mt-8 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-mono text-[#737373] border-t border-[#1C1C1C] pt-6 transition-all duration-700"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                transitionDelay: '680ms',
              }}
            >
              <div className="flex items-center gap-2 text-[#A3A3A3]">
                <Shield className="w-3.5 h-3.5 text-[#FFFFFF]" />
                <span>Zero mensalidades &middot; Código proprietário</span>
              </div>
              <span className="hidden sm:inline-block text-[#262626]">/</span>
              <a
                href="https://wa.me/5541987322926"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFFFFF] transition-colors flex items-center gap-2 group"
              >
                <Phone className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span>(41) 98732-2926</span>
              </a>
              <span className="hidden sm:inline-block text-[#262626]">/</span>
              <a
                href="mailto:acdomz.gc@gmail.com"
                className="hover:text-[#FFFFFF] transition-colors flex items-center gap-2 group"
              >
                <Mail className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span>acdomz.gc@gmail.com</span>
              </a>
            </div>
          </div>

          {/* COLUNA DIREITA: Display Tecnológico Multicamadas com Parallax & Mockups Cinematográficos */}
          <div
            className="lg:col-span-5 relative mt-6 lg:mt-0 w-full transition-all duration-1000 ease-out"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? `translate3d(${mousePos.x * -1}px, ${mousePos.y * -1}px, 0)`
                : 'translate3d(30px, 0, 0)',
              transitionDelay: '300ms',
            }}
          >
            {/* Moldura técnica externa com cantos de mira e linhas de corte */}
            <div className="relative border border-[#2E2E2E] bg-[#111111] p-4 sm:p-6 transition-all duration-300 hover:border-[#525252]">
              {/* Marcadores decorativos nos 4 cantos do card */}
              <span className="absolute -top-1 -left-1 w-2 h-2 bg-[#FFFFFF]" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#FFFFFF]" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#FFFFFF]" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#FFFFFF]" />

              {/* Barra de cabeçalho do showcase: Tabs Desktop / Mobile / Terminal */}
              <div className="flex items-center justify-between border-b border-[#262626] pb-3 mb-4">
                <div className="flex items-center gap-1.5 font-mono text-[11px]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('desktop')}
                    className={`px-2.5 py-1 uppercase tracking-wider transition-colors border ${
                      activeTab === 'desktop'
                        ? 'bg-[#FFFFFF] text-[#0A0A0A] border-[#FFFFFF] font-bold'
                        : 'bg-[#171717] text-[#888888] border-[#262626] hover:text-[#FFFFFF]'
                    }`}
                  >
                    Display 01
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('mobile')}
                    className={`px-2.5 py-1 uppercase tracking-wider transition-colors border ${
                      activeTab === 'mobile'
                        ? 'bg-[#FFFFFF] text-[#0A0A0A] border-[#FFFFFF] font-bold'
                        : 'bg-[#171717] text-[#888888] border-[#262626] hover:text-[#FFFFFF]'
                    }`}
                  >
                    Mobile Tab
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 uppercase tracking-wider transition-colors border flex items-center gap-1 ${
                      activeTab === 'terminal'
                        ? 'bg-[#FFFFFF] text-[#0A0A0A] border-[#FFFFFF] font-bold'
                        : 'bg-[#171717] text-[#888888] border-[#262626] hover:text-[#FFFFFF]'
                    }`}
                  >
                    <Terminal className="w-3 h-3" />
                    Stack
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-[#A3A3A3]">
                  <span className="inline-block w-2 h-2 bg-[#FFFFFF]" />
                  <span className="text-[#FFFFFF] font-bold">ZHERA // PROD</span>
                </div>
              </div>

              {/* Conteúdo Dinâmico do Showcase */}
              {activeTab === 'desktop' && (
                <div className="space-y-3">
                  {/* Mockup Principal: Macbook com moldura técnica e badge de conversão */}
                  <div className="relative group/device border border-[#262626] bg-[#0A0A0A] p-2 transition-all duration-300 hover:border-[#525252]">
                    <div className="relative overflow-hidden bg-[#000000]">
                      <img
                        src={macbookImg}
                        alt="Plataforma Zhera no Macbook"
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover/device:scale-[1.025]"
                        loading="eager"
                      />

                      {/* Tag de medição sobreposta no canto do mockup */}
                      <div className="absolute top-2 left-2 bg-[#0A0A0A]/90 border border-[#262626] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#FFFFFF] backdrop-blur-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#FFFFFF] animate-pulse-subtle" />
                        DESKTOP VIEWPORT
                      </div>

                      <div className="absolute bottom-2 right-2 bg-[#0A0A0A]/90 border border-[#262626] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#FFFFFF] backdrop-blur-sm flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#FFFFFF]" />
                        <AnimatedCounter value={85} prefix="+" suffix="% CONVERSÃO" />
                      </div>
                    </div>
                  </div>

                  {/* Sub-mockups Tablet & Smartphone em grid sincrônico */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-[#262626] bg-[#0A0A0A] p-1.5 overflow-hidden transition-all duration-300 hover:border-[#525252] group/tab">
                      <div className="text-[9px] font-mono uppercase text-[#737373] mb-1 px-1 flex items-center justify-between">
                        <span>TABLET</span>
                        <span className="text-[#FFFFFF]">100% RESPONSIVE</span>
                      </div>
                      <img
                        src={tabletImg}
                        alt="Plataforma Zhera no Tablet"
                        className="w-full h-auto object-contain transition-transform duration-500 group-tab:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <div className="border border-[#262626] bg-[#0A0A0A] p-1.5 overflow-hidden transition-all duration-300 hover:border-[#525252] group/ph">
                      <div className="text-[9px] font-mono uppercase text-[#737373] mb-1 px-1 flex items-center justify-between">
                        <span>MOBILE</span>
                        <span className="text-[#FFFFFF]">FAST TAP</span>
                      </div>
                      <img
                        src={phoneImg}
                        alt="Plataforma Zhera no Smartphone"
                        className="w-full h-auto object-contain transition-transform duration-500 group-ph:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'mobile' && (
                <div className="py-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-[#262626] bg-[#0A0A0A] p-3 text-center">
                      <div className="font-mono text-[10px] uppercase text-[#737373] mb-2">
                        Iphone 14 Plus
                      </div>
                      <img
                        src={phoneImg}
                        alt="Mobile View"
                        className="w-full h-auto object-contain mx-auto max-h-[260px]"
                      />
                    </div>
                    <div className="border border-[#262626] bg-[#0A0A0A] p-3 text-center">
                      <div className="font-mono text-[10px] uppercase text-[#737373] mb-2">
                        Galaxy Tab S7
                      </div>
                      <img
                        src={tabletImg}
                        alt="Tablet View"
                        className="w-full h-auto object-contain mx-auto max-h-[260px]"
                      />
                    </div>
                  </div>
                  <div className="p-3 border border-[#262626] bg-[#0A0A0A] font-mono text-xs text-[#A3A3A3] flex items-center justify-between">
                    <span>Performance mobile 98+</span>
                    <span className="text-[#FFFFFF] font-bold">TOUCH OPTIMIZED</span>
                  </div>
                </div>
              )}

              {activeTab === 'terminal' && (
                <div className="border border-[#262626] bg-[#0A0A0A] p-4 font-mono text-xs text-[#CCCCCC] space-y-2 min-h-[300px]">
                  <div className="flex items-center gap-2 text-[#737373] border-b border-[#1F1F1F] pb-2 mb-3">
                    <span className="w-2 h-2 bg-[#FFFFFF]" />
                    <span>zhera-cli --diagnostics</span>
                  </div>
                  <p className="text-[#888888]">// COMPILADO DE ALTA PERFORMANCE</p>
                  <p className="text-[#FFFFFF]">
                    ✔ Framework:{' '}
                    <span className="text-[#A3A3A3]">React 18 + Vite + TypeScript</span>
                  </p>
                  <p className="text-[#FFFFFF]">
                    ✔ Styling:{' '}
                    <span className="text-[#A3A3A3]">Tailwind Monocromático Editorial</span>
                  </p>
                  <p className="text-[#FFFFFF]">
                    ✔ Database / Auth:{' '}
                    <span className="text-[#A3A3A3]">PocketBase Cloud Dedicado</span>
                  </p>
                  <p className="text-[#FFFFFF]">
                    ✔ Performance:{' '}
                    <span className="text-[#A3A3A3]">TTFB &lt; 80ms &middot; 0 Mensalidade</span>
                  </p>
                  <p className="text-[#FFFFFF]">
                    ✔ SLAs:{' '}
                    <span className="text-[#A3A3A3]">Entrega entre 3 e 5 dias corridos</span>
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#1F1F1F] text-[11px] text-[#737373]">
                    $ system ready for deployment. WhatsApp direto: (41) 98732-2926
                  </div>
                </div>
              )}

              {/* Barra inferior de métricas integradas do preview */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[#262626] text-center font-mono">
                <div className="border border-[#1F1F1F] p-2 bg-[#0A0A0A] transition-all duration-200 hover:border-[#FFFFFF]">
                  <p className="text-base sm:text-lg font-bold text-[#FFFFFF]">
                    <AnimatedCounter value={50} prefix="+" />
                  </p>
                  <p className="text-[10px] uppercase text-[#737373]">Projetos</p>
                </div>
                <div className="border border-[#1F1F1F] p-2 bg-[#0A0A0A] transition-all duration-200 hover:border-[#FFFFFF]">
                  <p className="text-base sm:text-lg font-bold text-[#FFFFFF]">3-5d</p>
                  <p className="text-[10px] uppercase text-[#737373]">Entrega</p>
                </div>
                <div className="border border-[#1F1F1F] p-2 bg-[#0A0A0A] transition-all duration-200 hover:border-[#FFFFFF]">
                  <p className="text-base sm:text-lg font-bold text-[#FFFFFF]">
                    <AnimatedCounter value={85} prefix="+" suffix="%" />
                  </p>
                  <p className="text-[10px] uppercase text-[#737373]">Conversão</p>
                </div>
              </div>
            </div>

            {/* Marcador flutuante de rodapé no mockup com telemetria */}
            <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-[#525252] px-1">
              <span>DEVICE VIEW // MULTI-SURFACE</span>
              <span className="flex items-center gap-1.5 text-[#A3A3A3]">
                <span className="w-1 h-1 bg-[#FFFFFF]" />
                100% PROPRIETÁRIO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

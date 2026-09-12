import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Mail, Phone, Sparkles } from 'lucide-react'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'

// Logo oficial Zhera Imagem 3 (fundo preto com Z branco) para fundo escuro do Hero
import logoWhiteOnDark from '@/assets/zhera-logo-aedcd.jpg'

import macbookImg from '@/assets/macbook-air-acdomz.goskip.app-e38d5.png'
import tabletImg from '@/assets/galaxy-tab-s7-acdomz.goskip.app-6ff31.png'
import phoneImg from '@/assets/iphone-14-plus-acdomz.goskip.app-752fc.png'

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      // Parallax sutil no hero baseado na posição do mouse
      const x = (e.clientX / window.innerWidth - 0.5) * 12
      const y = (e.clientY / window.innerHeight - 0.5) * 12
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0A0A0A] text-[#FFFFFF] border-b border-[#262626]"
    >
      {/* Grade sutil e sutil gradiente monocromático de profundidade */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 30%, #262626 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#1C1C1C] to-transparent opacity-40 blur-3xl pointer-events-none -z-0" />

      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 max-w-2xl">
          {/* Logo Hero Zhera: entrada sequencial 1 */}
          <div
            className="inline-flex items-center gap-3 border border-[#262626] bg-[#0A0A0A] px-3.5 py-2 mb-8 transition-all duration-700 hover:border-[#FFFFFF]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translate3d(0, 0, 0)' : 'translate3d(0, 16px, 0)',
              transitionDelay: '100ms',
            }}
          >
            <div className="h-6 w-6 bg-black flex items-center justify-center p-0.5 shrink-0 border border-[#1F1F1F]">
              <img src={logoWhiteOnDark} alt="Zhera" className="h-full w-full object-contain" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3] flex items-center gap-2">
              <span>Zhera Studio &middot; Curitiba</span>
              <span className="inline-block w-1.5 h-1.5 bg-[#FFFFFF] animate-pulse-subtle" />
            </span>
          </div>

          {/* Título: entrada sequencial 2 */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#FFFFFF] mb-6 leading-[1.05] transition-all duration-700"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
              transitionDelay: '220ms',
            }}
          >
            Sites que Vendem. <br />
            <span className="relative inline-block">
              Sistemas que Crescem.
              <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFFFFF] via-[#A3A3A3] to-transparent opacity-60" />
            </span>
          </h1>

          {/* Subtítulo: entrada sequencial 3 */}
          <p
            className="text-base sm:text-lg text-[#A3A3A3] mb-4 leading-relaxed max-w-xl font-normal transition-all duration-700"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
              transitionDelay: '340ms',
            }}
          >
            Site pronto em 3 a 5 dias, a partir de R$ 997. Desenvolvimento de alto padrão, sem
            mensalidades e com total propriedade do seu código.
          </p>

          {/* Métricas rápidas com animação sequencial 4 */}
          <div
            className="text-xs sm:text-sm font-mono text-[#737373] mb-8 uppercase tracking-wider flex flex-wrap items-center gap-2 sm:gap-3 transition-all duration-700"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
              transitionDelay: '460ms',
            }}
          >
            <span className="text-[#FFFFFF] font-semibold flex items-center gap-1.5">
              <AnimatedCounter value={85} prefix="+" suffix="%" /> conversão
            </span>
            <span className="text-[#333333]">&middot;</span>
            <span className="text-[#FFFFFF] font-semibold">
              <AnimatedCounter value={50} prefix="+" /> projetos entregues
            </span>
            <span className="text-[#333333]">&middot;</span>
            <span className="text-[#A3A3A3]">Entrega em 3 a 5 dias</span>
          </div>

          {/* CTAs: entrada sequencial 5 */}
          <div
            className="flex flex-col sm:flex-row gap-3 transition-all duration-700"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
              transitionDelay: '580ms',
            }}
          >
            <Button
              size="lg"
              className="group bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F4F4F2] gap-2 h-12 px-7 text-xs font-extrabold uppercase tracking-wider border border-[#FFFFFF] w-full sm:w-auto transition-all duration-200 hover:-translate-y-0.5"
              asChild
            >
              <a href="https://wa.me/5541987322926" target="_blank" rel="noopener noreferrer">
                Falar com Especialista
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group h-12 px-7 text-xs font-extrabold uppercase tracking-wider gap-2 border-[#262626] bg-transparent hover:bg-[#171717] hover:border-[#FFFFFF] text-[#FFFFFF] w-full sm:w-auto transition-all duration-200"
              asChild
            >
              <a href="#cases">
                Ver Portfólio
                <ChevronRight className="w-4 h-4 text-[#737373] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#FFFFFF]" />
              </a>
            </Button>
          </div>

          {/* Contato direto no rodapé do Hero: entrada sequencial 6 */}
          <div
            className="mt-10 flex flex-wrap items-center gap-6 text-xs font-mono text-[#737373] border-t border-[#1F1F1F] pt-6 transition-all duration-700"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
              transitionDelay: '700ms',
            }}
          >
            <a
              href="mailto:acdomz.gc@gmail.com"
              className="hover:text-[#FFFFFF] transition-colors flex items-center gap-2 group"
            >
              <Mail className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />{' '}
              acdomz.gc@gmail.com
            </a>
            <span className="hidden sm:inline-block text-[#262626]">/</span>
            <a
              href="https://wa.me/5541987322926"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFFFFF] transition-colors flex items-center gap-2 group"
            >
              <Phone className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />{' '}
              (41) 98732-2926
            </a>
          </div>
        </div>

        {/* Coluna direita: mockups com parallax suave e elevação */}
        <div
          className="lg:col-span-5 relative mt-8 lg:mt-0 w-full transition-all duration-1000 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? `translate3d(${mousePos.x * -1}px, ${mousePos.y * -1}px, 0)`
              : 'translate3d(24px, 0, 0)',
            transitionDelay: '300ms',
          }}
        >
          <div className="border border-[#262626] bg-[#121212] p-4 sm:p-6 transition-colors duration-300 hover:border-[#404040]">
            <div className="flex items-center justify-between border-b border-[#262626] pb-3 mb-4 text-xs font-mono text-[#A3A3A3]">
              <span className="uppercase tracking-wider flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-[#FFFFFF]" />
                Preview de Plataforma
              </span>
              <span className="text-[#FFFFFF] font-bold flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#FFFFFF]" />
                <AnimatedCounter value={85} prefix="+" suffix="% conversão" />
              </span>
            </div>

            {/* Mockups com apresentação seca, editorial e hover suave */}
            <div className="relative group/device">
              <div className="relative z-10 w-full border border-[#262626] bg-[#0A0A0A] overflow-hidden transition-all duration-300 group-hover/device:border-[#404040]">
                <img
                  src={macbookImg}
                  alt="Plataforma Zhera no Macbook"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover/device:scale-[1.02]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="border border-[#262626] bg-[#0A0A0A] p-1 overflow-hidden transition-all duration-300 hover:border-[#404040]">
                  <img
                    src={tabletImg}
                    alt="Plataforma Zhera no Tablet"
                    className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="border border-[#262626] bg-[#0A0A0A] p-1 overflow-hidden transition-all duration-300 hover:border-[#404040]">
                  <img
                    src={phoneImg}
                    alt="Plataforma Zhera no Smartphone"
                    className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>

            {/* Contadores animados nos 3 blocos */}
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
        </div>
      </div>
    </section>
  )
}

import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Mail, Phone } from 'lucide-react'

// Logo oficial Zhera Imagem 3 (fundo preto com Z branco) para fundo escuro do Hero
import logoWhiteOnDark from '@/assets/zhera-logo-aedcd.jpg'

import macbookImg from '@/assets/macbook-air-acdomz.goskip.app-e38d5.png'
import tabletImg from '@/assets/galaxy-tab-s7-acdomz.goskip.app-6ff31.png'
import phoneImg from '@/assets/iphone-14-plus-acdomz.goskip.app-752fc.png'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0A0A0A] text-[#FFFFFF] border-b border-[#262626]"
    >
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 max-w-2xl">
          {/* Logo Hero Zhera: Imagem 3 (fundo preto com 'Z' branca) com área de proteção e regras estritas */}
          <div className="inline-flex items-center gap-3 border border-[#262626] bg-[#0A0A0A] px-3.5 py-2 mb-8">
            <div className="h-6 w-6 bg-black flex items-center justify-center p-0.5 shrink-0">
              <img src={logoWhiteOnDark} alt="Zhera" className="h-full w-full object-contain" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#A3A3A3]">
              Zhera Studio &middot; Curitiba
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#FFFFFF] mb-6 leading-[1.05]">
            Sites que Vendem. <br />
            Sistemas que Crescem.
          </h1>

          <p className="text-base sm:text-lg text-[#A3A3A3] mb-4 leading-relaxed max-w-xl font-normal">
            Site pronto em 3 a 5 dias, a partir de R$ 997. Desenvolvimento de alto padrão, sem
            mensalidades e com total propriedade do seu código.
          </p>

          <p className="text-xs sm:text-sm font-mono text-[#737373] mb-8 uppercase tracking-wider">
            +85% de conversão &middot; +50 projetos entregues &middot; Entrega em 3 a 5 dias
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F4F4F2] gap-2 h-12 px-7 text-xs font-extrabold uppercase tracking-wider border border-[#FFFFFF] w-full sm:w-auto"
              asChild
            >
              <a href="https://wa.me/5541987322926" target="_blank" rel="noopener noreferrer">
                Falar com Especialista
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 text-xs font-extrabold uppercase tracking-wider gap-2 border-[#262626] bg-transparent hover:bg-[#171717] text-[#FFFFFF] w-full sm:w-auto"
              asChild
            >
              <a href="#cases">
                Ver Portfólio
                <ChevronRight className="w-4 h-4 text-[#737373]" />
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-mono text-[#737373] border-t border-[#1F1F1F] pt-6">
            <a
              href="mailto:acdomz.gc@gmail.com"
              className="hover:text-[#FFFFFF] transition-colors flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" /> acdomz.gc@gmail.com
            </a>
            <span className="hidden sm:inline-block text-[#262626]">/</span>
            <a
              href="https://wa.me/5541987322926"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFFFFF] transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" /> (41) 98732-2926
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative mt-8 lg:mt-0 w-full">
          <div className="border border-[#262626] bg-[#121212] p-4 sm:p-6">
            <div className="flex items-center justify-between border-b border-[#262626] pb-3 mb-4 text-xs font-mono text-[#A3A3A3]">
              <span className="uppercase tracking-wider">Preview de Plataforma</span>
              <span className="text-[#FFFFFF] font-bold">+85% conversão</span>
            </div>

            {/* Mockups com apresentação seca e editorial */}
            <div className="relative">
              <div className="relative z-10 w-full border border-[#262626] bg-[#0A0A0A]">
                <img
                  src={macbookImg}
                  alt="Plataforma Zhera no Macbook"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="border border-[#262626] bg-[#0A0A0A] p-1">
                  <img
                    src={tabletImg}
                    alt="Plataforma Zhera no Tablet"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="border border-[#262626] bg-[#0A0A0A] p-1">
                  <img
                    src={phoneImg}
                    alt="Plataforma Zhera no Smartphone"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-[#262626] text-center font-mono">
              <div className="border border-[#1F1F1F] p-2 bg-[#0A0A0A]">
                <p className="text-base sm:text-lg font-bold text-[#FFFFFF]">+50</p>
                <p className="text-[10px] uppercase text-[#737373]">Projetos</p>
              </div>
              <div className="border border-[#1F1F1F] p-2 bg-[#0A0A0A]">
                <p className="text-base sm:text-lg font-bold text-[#FFFFFF]">3-5d</p>
                <p className="text-[10px] uppercase text-[#737373]">Entrega</p>
              </div>
              <div className="border border-[#1F1F1F] p-2 bg-[#0A0A0A]">
                <p className="text-base sm:text-lg font-bold text-[#FFFFFF]">+85%</p>
                <p className="text-[10px] uppercase text-[#737373]">Conversão</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

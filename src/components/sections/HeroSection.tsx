import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight, Mail, Phone } from 'lucide-react'

import macbookImg from '@/assets/macbook-air-acdomz.goskip.app-e38d5.png'
import tabletImg from '@/assets/galaxy-tab-s7-acdomz.goskip.app-6ff31.png'
import phoneImg from '@/assets/iphone-14-plus-acdomz.goskip.app-752fc.png'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background"
    >
      {/* Futuristic Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(194,178,143,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(194,178,143,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,41,69,0.8),rgba(0,0,0,0))] pointer-events-none" />

      {/* High-tech glowing elements */}
      <div className="absolute top-1/4 right-0 -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none">
        <div className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#0a487a]/40 via-primary/10 to-transparent blur-[100px]" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 opacity-50 pointer-events-none">
        <div className="w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-secondary/20 via-[#0a487a]/10 to-transparent blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <div className="max-w-2xl animate-fade-in-up z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border/50 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full animate-pulse bg-[#2eff00]" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-lg">
            Sites que Vendem. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary bg-[length:200%_auto] animate-gradient drop-shadow-sm">
              Sistemas que Crescem.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Transforme seu negócio com presença digital profissional, inovadora e funcional.
            Credibilidade que converte visitantes em clientes fiéis.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 h-14 min-h-[56px] px-8 text-base rounded-full shadow-[0_0_30px_rgba(194,178,143,0.3)] hover:shadow-[0_0_40px_rgba(194,178,143,0.5)] hover:scale-105 transition-all duration-300 ring-1 ring-secondary/50 w-full sm:w-auto"
              asChild
            >
              <a href="https://wa.me/5541987322926" target="_blank" rel="noopener noreferrer">
                Falar com Especialista
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 min-h-[56px] px-8 text-base rounded-full gap-2 border-border bg-card/30 backdrop-blur-md hover:bg-secondary/10 hover:border-secondary/50 text-foreground hover:text-secondary transition-all duration-300 w-full sm:w-auto shadow-sm"
              asChild
            >
              <a href="#portfolio">
                Ver Portfólio
                <ChevronRight className="w-5 h-5 opacity-70" />
              </a>
            </Button>
          </div>

          <div
            className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="mailto:acdomz.gc@gmail.com"
              className="hover:text-secondary transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> acdomz.gc@gmail.com
            </a>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-border" />
            <a
              href="https://wa.me/5541987322926"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> (41) 98732-2926
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in lg:ml-auto z-10 mt-16 lg:mt-0 w-full">
          <div className="relative group mx-auto max-w-[600px] lg:max-w-full z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-[100px] transition-all duration-500 opacity-40 pointer-events-none" />

            {/* Macbook (Center/Back) */}
            <div className="relative z-10 w-full animate-float">
              <img
                src={macbookImg}
                alt="Plataforma ACDOMZ no Macbook"
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-contain"
              />
            </div>

            {/* Tablet (Left/Bottom) */}
            <div
              className="absolute -left-4 sm:-left-12 -bottom-10 sm:-bottom-16 w-[45%] sm:w-[40%] z-20 animate-float"
              style={{ animationDelay: '0.2s' }}
            >
              <img
                src={tabletImg}
                alt="Plataforma ACDOMZ no Tablet"
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] object-contain hover:-translate-y-2 transition-transform duration-500"
              />
            </div>

            {/* Phone (Right/Bottom) */}
            <div
              className="absolute -right-2 sm:-right-8 -bottom-6 sm:-bottom-12 w-[25%] sm:w-[22%] z-30 animate-float"
              style={{ animationDelay: '0.4s' }}
            >
              <img
                src={phoneImg}
                alt="Plataforma ACDOMZ no Smartphone"
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] object-contain hover:-translate-y-2 transition-transform duration-500"
              />
            </div>

            {/* Floating Element 1 */}
            <div
              className="absolute -top-10 right-0 lg:-right-10 bg-card/80 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-border/50 flex items-center gap-4 animate-fade-in-up z-40 hidden sm:flex"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-lg shadow-[0_0_15px_rgba(194,178,143,0.2)]">
                +85%
              </div>
              <div>
                <p className="text-sm font-bold text-white">Conversão Média</p>
                <p className="text-xs text-muted-foreground">Em nossos sistemas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

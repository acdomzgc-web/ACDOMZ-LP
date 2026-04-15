import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(26,115,232,0.4),transparent_60%)] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="max-w-2xl animate-fade-in-up z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border/50 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            Engenharia de Software Premium
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary mb-6 leading-[1.1]">
            Sites que Vendem. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Sistemas que Crescem.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Transforme seu negócio com presença digital profissional, inovadora e funcional.
            Credibilidade que converte visitantes em clientes fiéis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 h-14 px-8 text-base rounded-full shadow-lg shadow-accent/20"
              asChild
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Falar com Especialista
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base rounded-full gap-2 hover:bg-secondary/20"
              asChild
            >
              <a href="#cases">
                Ver Portfólio
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-in lg:ml-auto z-10 mt-10 lg:mt-0">
          <div className="relative animate-float">
            <img
              src="https://img.usecurling.com/p/800/600?q=dashboard%20software%20analytics&color=blue"
              alt="Plataforma ACDOMZ"
              className="rounded-2xl shadow-elevation border border-border/60"
            />
            {/* Floating Element 1 */}
            <div
              className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-white p-4 rounded-xl shadow-xl border border-border/50 flex items-center gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg">
                +85%
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Conversão Média</p>
                <p className="text-xs text-muted-foreground">Em nossos sistemas</p>
              </div>
            </div>
            {/* Floating Element 2 */}
            <img
              src="https://img.usecurling.com/p/300/600?q=mobile%20app%20clean&color=gray"
              alt="Mobile App"
              className="absolute -top-8 -right-8 md:-top-12 md:-right-12 rounded-2xl shadow-xl border border-border/60 w-32 md:w-48 hidden sm:block animate-fade-in-up"
              style={{ animationDelay: '0.7s' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

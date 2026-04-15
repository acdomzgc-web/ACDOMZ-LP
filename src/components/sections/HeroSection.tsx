import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background"
    >
      {/* Futuristic Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,41,69,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,41,69,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(194,178,143,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(194,178,143,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(194,178,143,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,41,69,0.5),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 right-0 -translate-y-1/2 translate-x-1/3 opacity-30 dark:opacity-40 pointer-events-none">
        <div className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-secondary/40 via-primary/5 to-transparent blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 opacity-30 dark:opacity-40 pointer-events-none">
        <div className="w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/30 via-secondary/10 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <div className="max-w-2xl animate-fade-in-up z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border/50 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full animate-pulse bg-[#2eff00]" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1] drop-shadow-sm">
            Sites que Vendem. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#062945] dark:via-white to-secondary bg-[length:200%_auto] animate-gradient">
              Sistemas que Crescem.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground dark:text-muted-foreground/90 mb-8 leading-relaxed max-w-xl">
            Transforme seu negócio com presença digital profissional, inovadora e funcional.
            Credibilidade que converte visitantes em clientes fiéis.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 h-14 px-8 text-base rounded-full shadow-xl shadow-secondary/30 hover:scale-105 transition-all duration-300 ring-1 ring-secondary/50 w-full sm:w-auto"
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
              className="h-14 px-8 text-base rounded-full gap-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-secondary/10 hover:border-secondary/50 hover:text-primary dark:text-foreground dark:hover:text-secondary transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a href="#portfolio">
                Ver Portfólio
                <ChevronRight className="w-5 h-5 opacity-70" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-in lg:ml-auto z-10 mt-10 lg:mt-0">
          <div className="relative animate-float group">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
            <img
              src="https://img.usecurling.com/p/800/600?q=dashboard%20software%20analytics&color=blue&dpr=2"
              alt="Plataforma ACDOMZ"
              className="relative rounded-2xl shadow-2xl border border-border bg-card object-cover"
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

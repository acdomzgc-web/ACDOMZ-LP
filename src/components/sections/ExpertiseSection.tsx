import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">
            Nossa Autoridade
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            A Fusão entre Gestão Estratégica e Engenharia de Alto Padrão
          </h3>
          <p className="text-lg text-muted-foreground">
            Não entregamos apenas código. Entregamos soluções de negócios validadas por
            especialistas em gestão e desenvolvidas por engenheiros certificados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-secondary to-transparent -translate-y-1/2 z-0" />

          {/* Founder 1 */}
          <Card className="relative z-10 overflow-hidden group hover:shadow-elevation transition-all duration-300 border-border/50 bg-white/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 overflow-hidden">
                  <img
                    src="https://img.usecurling.com/ppl/medium?gender=male&seed=adir"
                    alt="Adir Ailson Model"
                    className="w-full h-full object-cover aspect-square sm:aspect-auto group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-primary mb-1">Adir Ailson Model</h4>
                  <p className="text-accent font-medium text-sm mb-4">
                    Especialista em Gestão e Operações
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Visão estratégica focada em resultados reais, otimização de processos e escala
                    de negócios digitais.
                  </p>
                  <Badge
                    variant="outline"
                    className="w-fit text-xs bg-secondary/10 text-primary border-secondary/30"
                  >
                    CRA/PR 14.172
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Founder 2 */}
          <Card className="relative z-10 overflow-hidden group hover:shadow-elevation transition-all duration-300 border-border/50 bg-white/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 overflow-hidden">
                  <img
                    src="https://img.usecurling.com/ppl/medium?gender=male&seed=carlos"
                    alt="Carlos Eduardo Model"
                    className="w-full h-full object-cover aspect-square sm:aspect-auto group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-primary mb-1">Carlos Eduardo Model</h4>
                  <p className="text-accent font-medium text-sm mb-4">
                    Engenheiro de Software e Inovação
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Arquitetura de sistemas robustos, tecnologias de ponta e performance de alto
                    nível para produtos digitais.
                  </p>
                  <Badge
                    variant="outline"
                    className="w-fit text-xs bg-secondary/10 text-primary border-secondary/30"
                  >
                    CREA/PR 222741/D
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

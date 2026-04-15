import { useEffect, useState, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getProjects, type ProjectRecord } from '@/services/projects'
import pb from '@/lib/pocketbase/client'
import { CheckCircle2, Building2, Target } from 'lucide-react'
import { useRealtime } from '@/hooks/use-realtime'
import { cn } from '@/lib/utils'

export function PortfolioSection() {
  const [projects, setProjects] = useState<ProjectRecord[]>([])
  const [loading, setLoading] = useState(true)

  const loadProjects = useCallback(async () => {
    try {
      const data = await getProjects()
      setProjects(data)
    } catch (error) {
      console.error('Failed to load projects', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadProjects()
  }, [loadProjects])

  useRealtime('projects', () => {
    loadProjects()
  })

  if (loading) {
    return (
      <section id="cases" className="py-24 bg-background relative">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse w-32 h-6 bg-muted mx-auto rounded mb-4" />
          <div className="animate-pulse w-64 h-10 bg-muted mx-auto rounded mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-card/50 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="cases"
      className="py-24 bg-background relative overflow-hidden border-t border-border/50"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">
            Nosso Portfólio
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Projetos Especializados
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Descubra como transformamos a visão de empresas em soluções digitais de alto impacto,
            garantindo autoridade e credibilidade nos seus respectivos mercados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-card/40 backdrop-blur-xl border-border/50 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(6,41,69,0.5)] transition-all duration-500 overflow-hidden flex flex-col group h-full"
            >
              <div
                className={cn(
                  'h-48 sm:h-56 w-full bg-muted relative overflow-hidden shrink-0 border-b border-border/50',
                  project.company === 'Acdomz' && project.image && 'bg-fixed bg-cover bg-center',
                )}
                style={
                  project.company === 'Acdomz' && project.image
                    ? {
                        backgroundImage: `url(${
                          project.image.startsWith('http')
                            ? project.image
                            : pb.files.getUrl(project as any, project.image)
                        })`,
                      }
                    : undefined
                }
              >
                {project.company !== 'Acdomz' && project.image ? (
                  <img
                    src={
                      project.image.startsWith('http')
                        ? project.image
                        : pb.files.getUrl(project as any, project.image)
                    }
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : !project.image ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
                    <img
                      src={`https://img.usecurling.com/p/600/400?q=${encodeURIComponent(project.niche.split(' ')[0] || 'technology')}&color=black`}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-500 mix-blend-overlay"
                    />
                  </div>
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
              </div>

              <CardContent className="p-6 md:p-8 flex flex-col flex-1 relative z-10 -mt-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 hover:bg-primary/30 text-primary border-primary/30 flex items-center gap-1.5 py-1"
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    {project.company}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-secondary/50 flex items-center gap-1.5 py-1 backdrop-blur-md text-[#ffffff]"
                  >
                    <Target className="w-3.5 h-3.5" />
                    {project.niche}
                  </Badge>
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-border/50">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
                    Destaques do Projeto
                  </p>
                  <ul className="space-y-3">
                    {project.features.split(';').map((feature, i) => {
                      const feat = feature.trim()
                      if (!feat) return null
                      return (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

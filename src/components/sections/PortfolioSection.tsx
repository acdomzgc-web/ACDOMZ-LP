import { useEffect, useState, useCallback } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { getProjects, type ProjectRecord } from '@/services/projects'
import pb from '@/lib/pocketbase/client'
import { Check, ArrowUpRight } from 'lucide-react'
import { useRealtime } from '@/hooks/use-realtime'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/motion/Reveal'
import blessedImg from '@/assets/design-sem-nome-8-2b3e6.png'
import lpPilatesImg from '@/assets/image-53904.png'
import acdomzGestaoImg from '@/assets/image-02184.png'
import lpStarsImg from '@/assets/lp-stars-c2f4f.png'
import sistemaAcdomzImg from '@/assets/sistema-acdomz-5dcda.png'
import lpOdontologiaImg from '@/assets/plano-de-fundo-isa-bialy-4b954.png'

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
      <section id="cases" className="py-24 bg-[#0A0A0A] text-[#FFFFFF] border-b border-[#262626]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="h-8 w-48 bg-[#171717] mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-[#121212] border border-[#262626]" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="cases"
      className="py-24 bg-[#0A0A0A] text-[#FFFFFF] border-b border-[#262626] relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal direction="up" distance={20} className="max-w-3xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[#737373] mb-3">
            02 &middot; Portfólio de Produção
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFFFFF] mb-4 tracking-tight leading-[1.1]">
            Projetos Entregues
          </h2>
          <p className="text-base text-[#A3A3A3] leading-relaxed">
            Casos reais em produção. Cada entrega é pensada com foco em conversão e experiência
            profissional.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 100} distance={20} className="h-full">
              <Card className="bg-[#121212] border border-[#262626] text-[#FFFFFF] rounded-none flex flex-col group h-full transition-all duration-300 hover:border-[#FFFFFF] hover:-translate-y-1.5">
                <div
                  className={cn(
                    'h-52 sm:h-56 w-full bg-[#0A0A0A] relative overflow-hidden shrink-0 border-b border-[#262626]',
                    project.company === 'Acdomz' &&
                      project.image &&
                      project.id !== 'x9e7fvaiai6sdbd' &&
                      'bg-fixed bg-cover bg-center',
                  )}
                  style={
                    project.company === 'Acdomz' &&
                    project.image &&
                    project.id !== 'x9e7fvaiai6sdbd'
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
                  {project.company === 'Blessed' ? (
                    <img
                      src={blessedImg}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : project.id === 's3ipzbqyx91n0j1' ? (
                    <img
                      src={lpPilatesImg}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : project.id === 'x9e7fvaiai6sdbd' ? (
                    <img
                      src={acdomzGestaoImg}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : project.title === 'LP Stars Treinamento' ||
                    project.company === 'Stars Treinamento' ? (
                    <img
                      src={lpStarsImg}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : project.title === 'LP Odontologia' ||
                    project.niche === 'Odontologia' ||
                    project.title.toLowerCase().includes('odontologia') ? (
                    <img
                      src={lpOdontologiaImg}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : project.title === 'Sistema gestão condominal' ||
                    project.title === 'Sistema ACDOMZ' ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A]">
                      <img
                        src={sistemaAcdomzImg}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60"
                      />
                    </div>
                  ) : project.company !== 'Acdomz' && project.image ? (
                    <img
                      src={
                        project.image.startsWith('http')
                          ? project.image
                          : pb.files.getUrl(project as any, project.image)
                      }
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : !project.image ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A]">
                      <img
                        src={`https://img.usecurling.com/p/600/400?q=${encodeURIComponent(project.niche.split(' ')[0] || 'technology')}&color=black`}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60"
                      />
                    </div>
                  ) : null}

                  {project.site_url && (
                    <a
                      href={project.site_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 z-20 flex items-center justify-center w-8 h-8 bg-[#0A0A0A] border border-[#262626] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#0A0A0A] transition-all duration-200 group-hover:border-[#FFFFFF]"
                      aria-label={`Visitar ${project.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>

                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-4 font-mono text-[11px]">
                    <span className="border border-[#262626] bg-[#0A0A0A] text-[#FFFFFF] px-2.5 py-1 uppercase transition-colors group-hover:border-[#FFFFFF]">
                      {project.company}
                    </span>
                    <span className="border border-[#1F1F1F] bg-transparent text-[#A3A3A3] px-2 py-1 uppercase">
                      {project.niche}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#FFFFFF] mb-2 leading-tight transition-colors group-hover:text-[#FFFFFF]">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-[#1F1F1F]">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#737373] mb-3">
                      Escopo Entregue
                    </p>
                    <ul className="space-y-2">
                      {(project.features || '').split(';').map((feature, i) => {
                        const feat = feature.trim()
                        if (!feat) return null
                        return (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#A3A3A3]">
                            <Check className="w-3.5 h-3.5 text-[#FFFFFF] mt-0.5 shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

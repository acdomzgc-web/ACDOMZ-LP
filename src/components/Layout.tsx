import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

// Assets oficiais da marca Zhera (regras obrigatórias: sem opacidade, sem gradiente, sem sombra, sem cantos arredondados, sem distorção)
import logoDarkOnLight from '@/assets/zhera-logo-white-964be.png' // Imagem 1: 'Z' preto sobre fundo branco / claro
import logoWhiteOnDark from '@/assets/zhera-logo-aedcd.jpg' // Imagem 3: 'Z' branco sobre fundo preto

const navLinks = [
  { name: 'Expertise', href: '#expertise' },
  { name: 'Cases', href: '#cases' },
  { name: 'Planos', href: '#planos' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'FAQ', href: '#faq' },
]

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.documentElement.classList.remove('scroll-smooth')
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-[#FFFFFF]">
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b',
          isScrolled
            ? 'bg-[#0A0A0A] border-[#262626] py-3.5'
            : 'bg-[#0A0A0A]/95 border-[#1F1F1F] py-4',
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-3 text-xl font-extrabold tracking-tight text-[#FFFFFF] group"
          >
            {/* Logo Zhera: Imagem 3 (fundo preto com Z branco) em header escuro */}
            <div className="h-9 w-9 bg-black border border-[#262626] flex items-center justify-center p-1.5 shrink-0">
              <img src={logoWhiteOnDark} alt="Zhera" className="h-full w-full object-contain" />
            </div>
            <span className="text-xl font-extrabold tracking-tight">Zhera</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-mono text-[#A3A3A3] hover:text-[#FFFFFF] transition-colors"
              >
                {link.name}
              </a>
            ))}

            <Button
              className="bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F4F4F2] font-extrabold text-xs tracking-wider uppercase px-5 h-10 border border-[#FFFFFF]"
              asChild
            >
              <a href="https://wa.me/5541987322926" target="_blank" rel="noopener noreferrer">
                Falar com Especialista
              </a>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-[#FFFFFF] hover:bg-[#171717] border border-[#262626]"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] sm:w-[380px] border-l border-[#262626] bg-[#0A0A0A] p-6 text-[#FFFFFF]"
            >
              <SheetTitle className="sr-only">Menu de Navegação Zhera</SheetTitle>

              {/* Logo no overlay mobile (escuro): Imagem 3 */}
              <div className="flex items-center gap-3 pb-6 border-b border-[#262626]">
                <div className="h-10 w-10 bg-black border border-[#262626] flex items-center justify-center p-1.5 shrink-0">
                  <img src={logoWhiteOnDark} alt="Zhera" className="h-full w-full object-contain" />
                </div>
                <span className="text-xl font-extrabold tracking-tight">Zhera</span>
              </div>

              <div className="flex flex-col gap-5 mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="text-lg font-extrabold text-[#FFFFFF] hover:text-[#A3A3A3] transition-colors uppercase tracking-tight py-2 border-b border-[#1A1A1A]"
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  <Button
                    className="bg-[#FFFFFF] text-[#0A0A0A] hover:bg-[#F4F4F2] mt-6 w-full h-12 text-sm font-extrabold uppercase tracking-wider"
                    asChild
                  >
                    <a href="https://wa.me/5541987322926" target="_blank" rel="noopener noreferrer">
                      Falar com Especialista
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer com suporte claro (#F4F4F2) ou seções claras usa Imagem 1 (fundo branco, 'Z' preta) */}
      <footer className="bg-[#0A0A0A] text-[#FFFFFF] py-16 border-t border-[#262626]">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <a
              href="#"
              className="flex items-center gap-3 text-2xl font-extrabold mb-4 text-[#FFFFFF]"
            >
              <div className="h-9 w-9 bg-black border border-[#262626] flex items-center justify-center p-1.5 shrink-0">
                <img src={logoWhiteOnDark} alt="Zhera" className="h-full w-full object-contain" />
              </div>
              <span>Zhera</span>
            </a>
            <p className="text-[#A3A3A3] max-w-sm text-sm leading-relaxed">
              Sites e sistemas de alta conversão. Código limpo, entrega rápida e investimento
              transparente sem mensalidades.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest mb-4 text-[#FFFFFF]">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A3A3A3] hover:text-[#FFFFFF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest mb-4 text-[#FFFFFF]">
              Contato Direto
            </h4>
            <div className="space-y-3 text-sm text-[#A3A3A3]">
              <a
                href="mailto:acdomz.gc@gmail.com"
                className="block hover:text-[#FFFFFF] transition-colors font-mono"
              >
                acdomz.gc@gmail.com
              </a>
              <a
                href="https://wa.me/5541987322926"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#FFFFFF] transition-colors font-mono"
              >
                (41) 98732-2926
              </a>
              <p className="text-xs text-[#737373] pt-2">
                Curitiba — PR / Atendimento para todo o Brasil
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#737373]">
          <p>© 2026 Zhera. Todos os direitos reservados.</p>
          <p>Sites que vendem. Sistemas que crescem.</p>
        </div>
      </footer>
    </div>
  )
}

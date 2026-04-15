import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet'
import { Menu, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

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
    <div className="flex flex-col min-h-screen">
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-border/50 shadow-sm py-3'
            : 'bg-transparent border-transparent py-5',
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-foreground">
            <Zap className="w-6 h-6 text-secondary fill-secondary" />
            ACDOMZ Tech
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}

            <Button
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-6 min-h-[44px]"
              asChild
            >
              <a href="https://wa.me/5541987322926" target="_blank" rel="noreferrer">
                Falar com Especialista
              </a>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="w-6 h-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] sm:w-[400px] border-border/50 bg-background/95 backdrop-blur-xl"
            >
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="text-xl font-bold text-foreground hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  <Button
                    className="bg-secondary text-secondary-foreground mt-4 w-full h-14 text-lg rounded-xl min-h-[44px]"
                    size="lg"
                    asChild
                  >
                    <a href="https://wa.me/5541987322926" target="_blank" rel="noreferrer">
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

      <footer className="bg-background text-slate-100 py-16 border-t border-border">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <div>
            <a href="#" className="flex items-center gap-2 text-2xl font-bold mb-4 text-foreground">
              <Zap className="w-6 h-6 text-secondary fill-secondary" /> ACDOMZ Tech
            </a>
            <p className="text-muted-foreground max-w-sm">
              Transformando visão estratégica em engenharia de software de alto padrão para empresas
              que buscam liderança no mercado digital.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Acesso Rápido</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Contato</h4>
            <div className="space-y-3 text-muted-foreground">
              <a
                href="mailto:acdomz.gc@gmail.com"
                className="block hover:text-secondary transition-colors"
              >
                acdomz.gc@gmail.com
              </a>
              <a href="tel:+5541987322926" className="block hover:text-secondary transition-colors">
                (41) 98732-2926
              </a>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-secondary hover:text-background transition-all"
                >
                  In
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-secondary hover:text-background transition-all"
                >
                  Ig
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm relative z-10">
          <p>© 2026 ACDOMZ Tech. Todos os direitos reservados.</p>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />
      </footer>
    </div>
  )
}

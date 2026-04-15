import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-white/80 backdrop-blur-md border-border/50 shadow-sm py-3'
            : 'bg-transparent border-transparent py-5',
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-primary">
            <Zap className="w-6 h-6 text-accent fill-accent" />
            ACDOMZ Tech
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6"
              asChild
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
                Falar com Especialista
              </a>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xl font-semibold text-primary hover:text-accent"
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="bg-accent text-accent-foreground mt-4" size="lg" asChild>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
                    Falar com Especialista
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-primary text-primary-foreground py-16 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <a href="#" className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Zap className="w-6 h-6 text-secondary fill-secondary" /> ACDOMZ Tech
            </a>
            <p className="text-primary-foreground/70 max-w-sm">
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
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Contato</h4>
            <div className="space-y-2 text-primary-foreground/70">
              <p>contato@acdomz.com.br</p>
              <p>+55 (11) 99999-9999</p>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
                >
                  In
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
                >
                  Ig
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/50 text-sm">
          <p>© 2026 ACDOMZ Tech. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

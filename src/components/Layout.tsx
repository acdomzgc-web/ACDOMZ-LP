import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Menu, Zap, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/components/theme-provider'

const navLinks = [
  { name: 'Expertise', href: '#expertise' },
  { name: 'Cases', href: '#cases' },
  { name: 'Planos', href: '#planos' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'FAQ', href: '#faq' },
]

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

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
            ? 'bg-background/80 backdrop-blur-md border-border/50 shadow-sm py-3'
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
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full mr-2 hover:bg-secondary/20 hover:text-secondary"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6"
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
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] border-border/50">
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

                <div className="flex items-center justify-between mt-4 border-t border-border pt-4">
                  <span className="font-medium text-muted-foreground">Alternar Tema</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="rounded-full"
                  >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </div>

                <SheetClose asChild>
                  <Button
                    className="bg-accent text-accent-foreground mt-4 w-full h-14 text-lg rounded-xl"
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

      <footer className="bg-slate-900 dark:bg-background text-slate-100 py-16 border-t border-slate-800 dark:border-border">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <a href="#" className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Zap className="w-6 h-6 text-secondary fill-secondary" /> ACDOMZ Tech
            </a>
            <p className="text-slate-300 dark:text-muted-foreground max-w-sm">
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
                    className="text-slate-300 dark:text-muted-foreground hover:text-secondary dark:hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Contato</h4>
            <div className="space-y-3 text-slate-300 dark:text-muted-foreground">
              <a
                href="mailto:acdomz.gc@gmail.com"
                className="block hover:text-secondary transition-colors"
              >
                acdomz.gc@gmail.com
              </a>
              <a href="tel:+5541987322926" className="block hover:text-secondary transition-colors">
                +55 (41) 98732-2926
              </a>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 dark:bg-card flex items-center justify-center hover:bg-secondary hover:text-slate-900 dark:hover:text-background transition-all"
                >
                  In
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 dark:bg-card flex items-center justify-center hover:bg-secondary hover:text-slate-900 dark:hover:text-background transition-all"
                >
                  Ig
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 dark:border-border text-center text-slate-400 dark:text-muted-foreground text-sm">
          <p>© 2026 ACDOMZ Tech. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

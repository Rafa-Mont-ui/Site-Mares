"use client"

import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Footer() {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 })
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })

  return (
    <footer className="py-24 px-6 bg-background border-t border-border relative z-10">
      <div className="container mx-auto">
        <div
          ref={ctaRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-balance">Venha participar do Movimento MARES !</h2>
          <Button size="lg" className="rounded-full">
            CLIQUE AQUI
          </Button>
        </div>

        <div
          ref={contentRef}
          className={`grid md:grid-cols-3 gap-12 pt-16 border-t border-border transition-all duration-1000 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full" />
              <span className="font-bold text-xl">MARES</span>
            </div>
            <p className="text-sm text-muted-foreground">Teste</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Estrategia</li>
              <li>Filosofia</li>
              <li>Missão</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>teste@mares.com.br</li>
              <li>+55 (41) 99999-9999</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

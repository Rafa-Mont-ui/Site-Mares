"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Process() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const { ref: cyclesRef, isVisible: cyclesVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 })

  const steps = [
    { title: "Descoberta", subtitle: "Descoberta de ideias e pesquisa" },
    { title: "Definição", subtitle: "Definição de foco e refinamento" },
    { title: "Desenvolvimento", subtitle: "Desenvolvimento de conceitos e propostas" },
    { title: "Entrega", subtitle: "Entrega de soluções e avaliação" },
  ]

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-6xl md:text-8xl font-bold text-muted-foreground/20">02</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-8 text-balance">Como trabalhamos</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl text-pretty leading-relaxed">
            Cada projeto é uma oportunidade para criar algo extraordinário. Nossa equipe trabalha em estreita colaboração com você para entender suas necessidades, criar soluções inovadoras e entregar resultados que superam expectativas.
          </p>
        </div>

        <div
          ref={stepsRef}
          className={`grid md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 ${
            stepsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative transition-all duration-700"
              style={{
                transitionDelay: stepsVisible ? `${index * 150}ms` : "0ms",
                opacity: stepsVisible ? 1 : 0,
                transform: stepsVisible ? "translateY(0)" : "translateY(48px)",
              }}
            >
              <div className="mb-4">
                <span className="text-4xl font-bold text-muted-foreground/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.subtitle}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border" />
              )}
            </div>
          ))}
        </div>

        <div
          ref={cyclesRef}
          className={`bg-muted/30 rounded-2xl p-8 md:p-12 transition-all duration-1000 ${
            cyclesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="flex items-start gap-4 mb-6">
            <span className="text-xs font-bold text-muted-foreground">Problema</span>
            <span className="text-xs font-bold text-muted-foreground">→</span>
            <span className="text-xs font-bold text-muted-foreground">Solução</span>
          </div>
          <h3 className="text-3xl font-bold mb-6">FAST CYCLES</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Obter feedback precoce do usuário e do cliente é crítico. Sem feedback, validar novas ideias de negócio e
            tomar decisões informadas sobre produtos torna-se caro e complicado, e dificulta o escalonamento de um produto.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mt-4">
            Mas isso não para aqui. Sabemos que construir protótipos precocemente faz uma grande diferença para o sucesso a longo prazo. Por isso, ciclos de validação são uma parte integral de nossos processos iterativos.
          </p>
        </div>
      </div>
    </section>
  )
}

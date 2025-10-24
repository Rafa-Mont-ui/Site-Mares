"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useParallax } from "@/hooks/use-parallax"
import { TiltCard, HoverGlow } from "@/components/interactive-elements"

export function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: grid1Ref, isVisible: grid1Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const { ref: grid2Ref, isVisible: grid2Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const { ref: grid3Ref, isVisible: grid3Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  
  // Parallax effects
  const backgroundRef = useParallax<HTMLDivElement>({ speed: 0.2, direction: 'up' })

  const services = [
    {
      title: "Estratégia",
      icon: "🎯",
      items: ["Consultoria de produto", "Validação de ideias", "Descoberta de produto", "Estratégia de negócio"],
      ref: grid1Ref,
      isVisible: grid1Visible,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Liderança",
      icon: "👑",
      items: [
        "Liderança de equipe",
        "Liderança de projeto",
        "Liderança de produto",
        "Liderança de negócio",
      ],
      ref: grid2Ref,
      isVisible: grid2Visible,
      gradient: "from-pink-500 to-red-600",
    },
    {
      title: "Planejamento",
      icon: "💻",
      items: [
        "Planejamento de arquitetura",
        "Planejamento de produto",
        "Planejamento de negócio",
        "Planejamento de marketing",
        "Planejamento de vendas",
      ],
      ref: grid3Ref,
      isVisible: grid3Visible,
      gradient: "from-green-500 to-teal-600",
    },
  ]

  return (
    <section className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      {/* Animated background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"
      />
      
      <div className="container mx-auto relative z-10">
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-6xl md:text-8xl font-bold text-muted-foreground/20">01</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-8 text-balance gradient-text">
            O que fazemos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl text-pretty leading-relaxed">
          Inspirada pela missão de ser oxigênio para líderes, criamos o conceito Liderança Oxigênio para ajudar profissionais a transformar suas jornadas de liderança e conectar seus propósitos. Aqui você encontra os links principais para participar do Movimento MARES, acessar conteúdos exclusivos e mergulhar nas minhas iniciativas de desenvolvimento de líderes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <TiltCard
              key={service.title}
              maxTilt={10}
              className="group"
            >
              <HoverGlow glowColor="rgba(255, 107, 53, 0.2)">
                <div
                  ref={service.ref}
                  className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 transition-all duration-1000 hover:bg-card/80 hover:border-primary/30 hover-lift ${
                    service.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Service icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li 
                        key={item} 
                        className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 flex items-center gap-2"
                        style={{ transitionDelay: `${itemIndex * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              </HoverGlow>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}

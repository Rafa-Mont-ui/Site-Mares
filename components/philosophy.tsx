"use client"

import { Lightbulb, Users, Rocket, Scale, Heart } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Philosophy() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLHeadingElement>()
  const { ref: value1Ref, isVisible: value1Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const { ref: value2Ref, isVisible: value2Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const { ref: value3Ref, isVisible: value3Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const { ref: value4Ref, isVisible: value4Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const { ref: value5Ref, isVisible: value5Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })

  const values = [
    {
      icon: Lightbulb,
      title: "Nosso momento",
      description:
        "Trabalhamos juntos — muito. Somos eficientes com seu tempo e recursos, e sabemos como integrar com clientes para entregar produtos bem-sucedidos.",
      ref: value1Ref,
      isVisible: value1Visible,
    },
    {
      icon: Users,
      title: "Equipe dedicada",
      description:
        'No mercado de hoje, a competição é feroz. Todo detalhe importa , sabemos como preencher os "i"s e cruzar os "t"s — duas vezes.',
      ref: value2Ref,
      isVisible: value2Visible,
    },
    {
      icon: Rocket,
      title: "Nossa oportunidade",
      description: "Somos apaixonados por fazer uma diferença neste mundo antes de nos mudarmos para Marte.",
      ref: value3Ref,
      isVisible: value3Visible,
    },
    {
      icon: Scale,
      title: "Compromisso",
      description:
        "Também sabemos que entregar um  produto completo às vezes requer tradeoffs, e isso está bem. Ainda assim, faremos seu produto ter sucesso.",
      ref: value4Ref,
      isVisible: value4Visible,
    },
    {
      icon: Heart,
        title: "Fazendo o que amamos",
      description: "Amaimos o que fazemos, e isso mostra em cada projeto que entregamos. A paixão impulsiona a qualidade.",
      ref: value5Ref,
      isVisible: value5Visible,
    },
  ]

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className={`text-4xl md:text-6xl font-bold mb-16 text-center transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Como pensamos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon

            return (
              <div
                key={value.title}
                ref={value.ref}
                className={`bg-background rounded-2xl p-8 border border-border transition-all duration-1000 ${
                  value.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

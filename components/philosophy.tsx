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
      title: "Our moment",
      description:
        "We've worked together — a lot. We're efficient with your time and resources, and we know how to integrate with clients to deliver successful products.",
      ref: value1Ref,
      isVisible: value1Visible,
    },
    {
      icon: Users,
      title: "Dedicated team",
      description:
        'In today\'s market, competition is fierce. Every detail matters, whether it\'s user-facing (UX/UI) or behind the curtain (code), we know to dot our "i"s and cross our "t"s — twice.',
      ref: value2Ref,
      isVisible: value2Visible,
    },
    {
      icon: Rocket,
      title: "Our opportunity",
      description: "We're passionate about making an impact in this world before we move to Mars.",
      ref: value3Ref,
      isVisible: value3Visible,
    },
    {
      icon: Scale,
      title: "We compromise too",
      description:
        "We also know that delivering an MVP or a full-blown product sometimes requires tradeoffs, and that's ok. We'll still make your product succeed.",
      ref: value4Ref,
      isVisible: value4Visible,
    },
    {
      icon: Heart,
      title: "Doing what we love",
      description: "We love what we do, and it shows in every project we deliver. Passion drives quality.",
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
          How we think
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

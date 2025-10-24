"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Process() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const { ref: cyclesRef, isVisible: cyclesVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 })

  const steps = [
    { title: "Discover", subtitle: "Ideas and research" },
    { title: "Define", subtitle: "Focus and refinement" },
    { title: "Develop", subtitle: "Concepts and proposals" },
    { title: "Deliver", subtitle: "Solution and evaluation" },
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
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-8 text-balance">How we work</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl text-pretty leading-relaxed">
            Successful products come from successful partnerships. We include our clients in each step of building their
            product, from beginning to end. This engagement keeps both sides involved and keeps the team spirit creative
            and committed.
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
            <span className="text-xs font-bold text-muted-foreground">PROBLEM</span>
            <span className="text-xs font-bold text-muted-foreground">→</span>
            <span className="text-xs font-bold text-muted-foreground">SOLUTION</span>
          </div>
          <h3 className="text-3xl font-bold mb-6">FAST CYCLES</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Getting early user and client feedback is critical. Without feedback, validating new business ideas and
            making informed product decisions becomes expensive and complicated and makes scaling a product more
            difficult than it needs to be.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mt-4">
            But it doesn't stop there. We know that building prototypes early on makes a massive difference for
            long-term success. Because of this, validation cycles are an integral part of our iterative processes.
          </p>
        </div>
      </div>
    </section>
  )
}

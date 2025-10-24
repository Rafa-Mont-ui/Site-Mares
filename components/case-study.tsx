"use client"

import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function CaseStudy() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <Card
          ref={ref}
          className={`relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 text-white p-12 md:p-16 lg:p-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div className="relative z-10">
            <div className="mb-4">
              <span className="text-sm font-medium opacity-80">COMING SOON</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Logair</h3>
            <p className="text-xl mb-8 opacity-90">A pilot's logbook made easy</p>
            <button className="inline-flex items-center gap-2 text-lg font-medium hover:gap-4 transition-all">
              View Case Study
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-0 bg-black/10" />
        </Card>
      </div>
    </section>
  )
}

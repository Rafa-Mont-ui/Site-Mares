"use client"

import { Button } from "@/components/ui/button"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useParallax } from "@/hooks/use-parallax"
import { useTextAnimation } from "@/hooks/use-text-animation"
import { FloatingElements } from "@/components/floating-elements"
import { useState, useEffect } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLHeadingElement>()
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal<HTMLParagraphElement>({
    threshold: 0.2,
  })
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.3,
  })
  
  // Parallax refs
  const backgroundRef = useParallax<HTMLDivElement>({ speed: 0.3, direction: 'up' })
  const floatingRef = useParallax<HTMLDivElement>({ speed: 0.5, direction: 'up', scale: true })
  
  // Text animation
  const { ref: animatedTitleRef } = useTextAnimation<HTMLHeadingElement>({
    delay: 0.5,
    duration: 0.8,
    stagger: 0.1,
    effect: 'split'
  })

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Animated Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <FloatingElements />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isLoaded ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-full animate-pulse" />
            <span className="font-bold text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              EXTRAORDINÁRIO
            </span>
          </div>
          <Button 
            variant="default" 
            size="sm" 
            className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105"
          >
            START A PROJECT
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 pt-24 pb-16 relative z-10">
        <div className="container mx-auto text-center">
          <h1
            ref={animatedTitleRef}
            className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-balance mb-8 transition-all duration-1000 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Construindo Soluções Digitais Extraordinárias
          </h1>
          
          <p
            ref={subtitleRef}
            className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance transition-all duration-1000 delay-300 ${
              subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Ajudamos empresas a projetar, desenvolver e posicionar seus produtos como soluções formidáveis que inspiram e transformam.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className={`flex flex-col sm:flex-row gap-4 justify-center mt-12 transition-all duration-1000 delay-500 ${
              ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Vamos Conversar
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
            >
              Ver Trabalhos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 cursor-pointer group">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
            Role para descobrir
          </span>
        </div>
      </div>

      {/* Scrolling Text */}
      <div className="overflow-hidden border-t border-border py-4 bg-muted/30 relative z-10">
        <div className="flex gap-8 animate-scroll whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-8 text-sm font-medium text-muted-foreground">
              <span>DESIGN & UX</span>
              <span>•</span>
              <span>DESENVOLVIMENTO</span>
              <span>•</span>
              <span>ESTRATÉGIA DIGITAL</span>
              <span>•</span>
              <span>CONSULTORIA</span>
              <span>•</span>
              <span>INOVAÇÃO</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
            <span className="font-bold text-xl text-blue-400">
              MARES
            </span>
          </div>
          <Button 
            variant="default" 
            size="sm" 
            className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105"
          >
            Vamos Conversar
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 pt-8 pb-4 relative z-10">
        <div className="container mx-auto text-center">
          <h1
            ref={animatedTitleRef}
            className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-balance mb-2 transition-all duration-1000 text-blue-400 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            MARES
          </h1>
          
          {/* GIF Placeholder */}
          <div className="mb-2 flex justify-center">
            <div className="relative w-56 h-40 md:w-72 md:h-52 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden border-2 border-blue-300 shadow-lg">
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-2xl">🎬</span>
                  </div>
                  <p className="text-blue-600 font-medium text-sm">GIF Placeholder</p>
                  <p className="text-blue-500 text-xs mt-1">Pode ser alterado no futuro</p>
                </div>
              </div>
              
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 w-8 h-8 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="absolute top-8 right-6 w-6 h-6 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-6 left-8 w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>
          
          <p
            ref={subtitleRef}
            className={`text-xl md:text-2xl text-white max-w-3xl mx-auto text-balance transition-all duration-1000 delay-300 ${
              subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Ajudamos empresas a projetar, desenvolver e posicionar seus profissionais com soluções formidáveis que inspiram e transformam.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className={`flex flex-col sm:flex-row gap-4 justify-center mt-3 transition-all duration-1000 delay-500 ${
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
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-1">
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
              <span>LIDERANÇA</span>
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

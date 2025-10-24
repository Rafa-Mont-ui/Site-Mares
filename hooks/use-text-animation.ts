"use client"

import { useEffect, useRef, useState } from "react"

interface UseTextAnimationOptions {
  delay?: number
  duration?: number
  stagger?: number
  effect?: 'fade' | 'slide' | 'scale' | 'typewriter' | 'split'
}

export function useTextAnimation<T extends HTMLElement>(options: UseTextAnimationOptions = {}) {
  const {
    delay = 0,
    duration = 0.6,
    stagger = 0.1,
    effect = 'fade',
  } = options

  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateText()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    const animateText = () => {
      const text = element.textContent || ''
      const words = text.split(' ')
      
      // Clear the element
      element.innerHTML = ''
      
      words.forEach((word, index) => {
        const span = document.createElement('span')
        span.textContent = word + ' '
        span.style.display = 'inline-block'
        span.style.opacity = '0'
        
        // Apply initial styles based on effect
        switch (effect) {
          case 'fade':
            span.style.opacity = '0'
            break
          case 'slide':
            span.style.opacity = '0'
            span.style.transform = 'translateY(30px)'
            break
          case 'scale':
            span.style.opacity = '0'
            span.style.transform = 'scale(0.8)'
            break
          case 'typewriter':
            span.style.opacity = '0'
            span.style.width = '0'
            span.style.overflow = 'hidden'
            span.style.whiteSpace = 'nowrap'
            break
          case 'split':
            span.style.opacity = '0'
            span.style.transform = 'translateY(20px) rotateX(90deg)'
            span.style.transformOrigin = 'bottom'
            break
        }
        
        element.appendChild(span)
        
        // Animate each word
        setTimeout(() => {
          span.style.transition = `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`
          
          switch (effect) {
            case 'fade':
              span.style.opacity = '1'
              break
            case 'slide':
              span.style.opacity = '1'
              span.style.transform = 'translateY(0)'
              break
            case 'scale':
              span.style.opacity = '1'
              span.style.transform = 'scale(1)'
              break
            case 'typewriter':
              span.style.opacity = '1'
              span.style.width = 'auto'
              break
            case 'split':
              span.style.opacity = '1'
              span.style.transform = 'translateY(0) rotateX(0deg)'
              break
          }
        }, delay * 1000 + index * stagger * 1000)
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [delay, duration, stagger, effect])

  return { ref, isVisible }
}

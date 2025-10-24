"use client"

import { useEffect, useRef } from "react"

interface UseParallaxOptions {
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  scale?: boolean
  rotation?: boolean
  opacity?: boolean
}

export function useParallax<T extends HTMLElement>(options: UseParallaxOptions = {}) {
  const {
    speed = 0.5,
    direction = 'up',
    scale = false,
    rotation = false,
    opacity = false,
  } = options

  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height
      
      // Calculate how much of the element is visible
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
      const visibilityRatio = Math.max(0, Math.min(1, visibleHeight / elementHeight))
      
      // Calculate scroll progress
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)))
      
      // Apply parallax transforms
      let transform = ''
      
      switch (direction) {
        case 'up':
          transform += `translateY(${scrollProgress * speed * 100}px) `
          break
        case 'down':
          transform += `translateY(${-scrollProgress * speed * 100}px) `
          break
        case 'left':
          transform += `translateX(${scrollProgress * speed * 100}px) `
          break
        case 'right':
          transform += `translateX(${-scrollProgress * speed * 100}px) `
          break
      }
      
      if (scale) {
        const scaleValue = 1 + (scrollProgress * 0.2)
        transform += `scale(${scaleValue}) `
      }
      
      if (rotation) {
        const rotationValue = scrollProgress * 10
        transform += `rotate(${rotationValue}deg) `
      }
      
      element.style.transform = transform.trim()
      
      if (opacity) {
        element.style.opacity = visibilityRatio.toString()
      }
    }

    // Throttle scroll events for performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll)
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [speed, direction, scale, rotation, opacity])

  return ref
}

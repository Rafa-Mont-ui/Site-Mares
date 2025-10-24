"use client"

import { useEffect, useRef } from "react"

interface FloatingElementProps {
  size: number
  color: string
  delay: number
  duration: number
  position: { x: number; y: number }
  className?: string
}

function FloatingElement({ size, color, delay, duration, position, className = "" }: FloatingElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const animate = () => {
      const time = Date.now() * 0.001
      const x = Math.sin(time + delay) * 20
      const y = Math.cos(time * 0.7 + delay) * 15
      const rotation = time * 30 + delay * 10
      const scale = 1 + Math.sin(time * 2 + delay) * 0.1

      element.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`
    }

    const interval = setInterval(animate, 16)
    return () => clearInterval(interval)
  }, [delay])

  return (
    <div
      ref={elementRef}
      className={`absolute rounded-full opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        left: `${position.x}%`,
        top: `${position.y}%`,
        boxShadow: `0 0 ${size}px ${color}40`,
        filter: 'blur(0.5px)',
      }}
      onClick={() => {
        // Ripple effect
        const ripple = document.createElement('div')
        ripple.className = 'absolute inset-0 rounded-full bg-white/30 animate-ping'
        elementRef.current?.appendChild(ripple)
        setTimeout(() => ripple.remove(), 600)
      }}
    />
  )
}

export function FloatingElements() {
  const elements = [
    {
      size: 80,
      color: 'linear-gradient(135deg, #ff6b35, #ff8c42)',
      delay: 0,
      position: { x: 15, y: 10 },
    },
    {
      size: 60,
      color: 'linear-gradient(135deg, #667eea, #764ba2)',
      delay: 1,
      position: { x: 75, y: 15 },
    },
    {
      size: 100,
      color: 'linear-gradient(135deg, #f093fb, #f5576c)',
      delay: 2,
      position: { x: 40, y: 35 },
    },
    {
      size: 70,
      color: 'linear-gradient(135deg, #4facfe, #00f2fe)',
      delay: 0.5,
      position: { x: 80, y: 45 },
    },
    {
      size: 90,
      color: 'linear-gradient(135deg, #a8edea, #fed6e3)',
      delay: 1.5,
      position: { x: 25, y: 50 },
    },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <FloatingElement
          key={index}
          size={element.size}
          color={element.color}
          delay={element.delay}
          duration={3 + index * 0.5}
          position={element.position}
          className="pointer-events-auto"
        />
      ))}
    </div>
  )
}

"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  baseSpeedX: number
  baseSpeedY: number
  color: string
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number | undefined>(undefined)
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles.current = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

      for (let i = 0; i < particleCount; i++) {
        const speedX = (Math.random() - 0.5) * 0.5
        const speedY = (Math.random() - 0.5) * 0.5

        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: speedX,
          speedY: speedY,
          baseSpeedX: speedX,
          baseSpeedY: speedY,
          color: "#1B4332",
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.current.forEach((particle, index) => {
        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        // Calculate distance to mouse
        const dx = mousePosition.current.x - particle.x
        const dy = mousePosition.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Interact with mouse
        if (distance < 100) {
          const angle = Math.atan2(dy, dx)
          particle.speedX -= Math.cos(angle) * 0.02
          particle.speedY -= Math.sin(angle) * 0.02
        }

        // Restore speed to base speed (damping)
        particle.speedX += (particle.baseSpeedX - particle.speedX) * 0.05
        particle.speedY += (particle.baseSpeedY - particle.speedY) * 0.05

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(27, 67, 50, ${particle.opacity})` // Primary color
        ctx.fill()

        // Connect nearby particles
        for (let j = index + 1; j < particles.current.length; j++) {
          const otherParticle = particles.current[j]
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(27, 67, 50, ${0.15 * (1 - distance / 100)})` // Slightly increased opacity for visibility on light bg
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    // Set up
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    handleResize()
    animate()

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface EntranceAnimationProps {
  onAnimationComplete: () => void
}

export default function EntranceAnimation({ onAnimationComplete }: EntranceAnimationProps) {
  const [animationStage, setAnimationStage] = useState(0)
  const [exitAnimation, setExitAnimation] = useState(false)

  useEffect(() => {
    // Stage 0: Initial delay
    const timer1 = setTimeout(() => {
      setAnimationStage(1)
    }, 200)

    // Stage 1: Logo appears
    const timer2 = setTimeout(() => {
      setAnimationStage(2)
    }, 1000)

    // Stage 2: Logo pulses
    const timer3 = setTimeout(() => {
      setAnimationStage(3)
    }, 1000)

    // Stage 3: Start exit animation
    const timer4 = setTimeout(() => {
      setExitAnimation(true)
    }, 2500)

    // Stage 4: Complete animation
    const timer5 = setTimeout(() => {
      onAnimationComplete()
    }, 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [onAnimationComplete])

  // Logo animation variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      filter: [
        "drop-shadow(0 0 0px rgba(255, 87, 34, 0.7))",
        "drop-shadow(0 0 20px rgba(255, 87, 34, 0.7))",
        "drop-shadow(0 0 0px rgba(255, 87, 34, 0.7))",
      ],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 0.5, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      filter: "drop-shadow(0 0 30px rgba(255, 87, 34, 0.9))",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  // Background animation variants
  const backgroundVariants = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  }

  return (
    <AnimatePresence>
      {!exitAnimation && (
        <motion.div
          variants={backgroundVariants}
          initial="hidden"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate={
              animationStage === 1
                ? "visible"
                : animationStage === 2
                  ? "pulse"
                  : animationStage === 3
                    ? "exit"
                    : "hidden"
            }
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <Image src="/images/logo-oliva.png" alt="Oliva Logo" fill className="object-contain" priority />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

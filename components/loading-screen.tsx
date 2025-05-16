"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [showLogo, setShowLogo] = useState(false)
  const [showText, setShowText] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 200)

    // Show logo after a short delay
    setTimeout(() => {
      setShowLogo(true)
    }, 500)

    // Show text after logo appears
    setTimeout(() => {
      setShowText(true)
    }, 1200)

    // Complete loading
    setTimeout(() => {
      setIsComplete(true)
      clearInterval(interval)
      setTimeout(() => {
        onLoadingComplete()
      }, 1000)
    }, 3000)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  // Bird animation variants
  const birdVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      x: 20,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Sun animation variants
  const sunVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      scale: 1.5,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Text animation variants
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Screen exit animation
  const screenVariants = {
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  }

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          key="loading-screen"
          variants={screenVariants}
          initial="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <div className="relative w-64 h-64 mb-8">
            {/* Sun/Circle */}
            <motion.div
              variants={sunVariants}
              initial="hidden"
              animate={showLogo ? "visible" : "hidden"}
              exit="exit"
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                <Image src="/images/sun.webp" alt="Oliva Logo Sun" fill className="object-contain" />
                <div className="absolute inset-0 animate-pulse-slow">
                  <Image src="/images/light.webp" alt="Oliva Logo Glow" fill className="object-contain opacity-70" />
                </div>
              </div>
            </motion.div>

            {/* Bird */}
            <motion.div
              variants={birdVariants}
              initial="hidden"
              animate={showLogo ? "visible" : "hidden"}
              exit="exit"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-40 h-40">
                <Image src="/images/bird.webp" alt="Oliva Logo Bird" fill className="object-contain" />
              </div>
            </motion.div>
          </div>

          {/* Text Logo */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={showText ? "visible" : "hidden"}
            exit="exit"
            className="relative h-16 w-48"
          >
            <Image src="/images/liva.webp" alt="Oliva" fill className="object-contain" />
          </motion.div>

          {/* Loading Bar */}
          <div className="w-64 h-1 bg-neutral-800 mt-8 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
          <p className="text-neutral-500 text-sm mt-2">Carregando... {Math.round(loadingProgress)}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

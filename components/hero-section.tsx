"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import InnovativeAnimation from "./innovative-animation"

interface HeroSectionProps {
  scrollToContent: () => void
}

export default function HeroSection({ scrollToContent }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    setIsLoaded(true)
    controls.start("visible")
  }, [controls])

  // Logo animation variants
  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  // Quote animation variants
  const quoteVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with diagonal lines */}
      <div className="absolute inset-0 diagonal-lines"></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-[-1]">
        <Image src="/images/wallpaper.webp" alt="Background" fill priority className="object-cover" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 z-10">
        {/* Wrapper div to center and constrain width */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Left side - Quote and Animation */}
            <motion.div
              variants={quoteVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="w-full md:w-5/10 flex flex-col"
            >
              <blockquote className="border-l-4 border-primary pl-4 md:pl-6 py-2 mt-16 mb-8">
                <p className="text-lg md:text-xl text-primary/90 italic">
                  "No que diz respeito ao empenho, ao compromisso, ao esforço, à dedicação, não existe meio-termo. Ou
                  você faz uma coisa bem-feita ou não faz."
                </p>
                <footer className="text-sm text-gray-400 mt-2">- Ayrton Senna</footer>
              </blockquote>

              <div className="mt-8 w-full">
                <InnovativeAnimation />
              </div>
            </motion.div>

            {/* Right side - Logo */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="w-full md:w-5/10 flex flex-col items-center"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  filter: [
                    "drop-shadow(0 0 5px rgba(255, 87, 34, 0.3))",
                    "drop-shadow(0 0 15px rgba(255, 87, 34, 0.7))",
                    "drop-shadow(0 0 5px rgba(255, 87, 34, 0.3))",
                  ],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="relative w-64 h-64 md:w-80 md:h-80"
              >
                <Image src="/images/logo-oliva.png" alt="Oliva Logo" fill className="object-contain" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToContent}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400">Scroll Down</span>
          <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}

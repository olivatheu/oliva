"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation, Variants } from "framer-motion"
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
  const logoVariants: Variants = {
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
  const quoteVariants: Variants = {
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
      <div className="absolute inset-0 diagonal-lines opacity-10"></div>

      {/* Overlay - removed dark overlay for light theme, added subtle gradient if needed */}
      {/* <div className="absolute inset-0 bg-black/80"></div> */}

      <div className="container mx-auto px-6 sm:px-8 z-10">
        {/* Wrapper div to center and constrain width */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side top - Quote */}
            <motion.div
              variants={quoteVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="w-full flex flex-col order-1 md:col-start-1 md:row-start-1"
            >
              <blockquote className="border-l-4 border-primary pl-4 md:pl-6 py-2 mt-14 md:mt-16 mb-4 md:mb-8">
                <p className="text-lg md:text-xl text-primary/90 italic">
                  "No que diz respeito ao empenho, ao compromisso, ao esforço, à dedicação, não existe meio-termo. Ou
                  você faz uma coisa bem-feita ou não faz."
                </p>
                <footer className="text-sm text-muted-foreground mt-2">- Ayrton Senna</footer>
              </blockquote>
            </motion.div>

            {/* Right side - Logo/GIF */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="w-full flex flex-col items-center order-2 md:col-start-2 md:row-start-1 md:row-span-2"
            >
              <motion.div
                className="relative w-60 h-80 md:w-64 md:h-96 my-0 md:my-0"
              >
                {/* Illuminated container with neon lights */}
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/30 via-emerald-500/30 to-teal-400/30 blur-[60px] rounded-full animate-pulse"></div>
                
                {/* Neon border/glow effect container */}
                <div className="absolute inset-[-10px] rounded-full border-2 border-transparent bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 opacity-40 blur-sm animate-spin-slow" style={{maskImage: 'linear-gradient(black, transparent)'}}></div>

                {/* Main Container for GIF */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-shadow duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 z-0"></div>
                    <Image
                        src="/images/gif1.gif"
                        alt="Oliva Animation"
                        fill
                        className="object-cover relative z-10"
                        unoptimized
                    />
                </div>
              </motion.div>
            </motion.div>

            {/* Left side bottom - Animation */}
            <motion.div
              variants={quoteVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="w-full flex flex-col order-3 md:col-start-1 md:row-start-2"
            >
              <div className="w-full mb-4 md:mb-0">
                <InnovativeAnimation />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToContent}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
        </div>
      </motion.div> */}
    </section>
  )
}

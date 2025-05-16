"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"
import { Lightbulb, Zap, Target, Sparkles } from "lucide-react"

export default function BrandAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Inovação",
      description: "Buscamos constantemente novas soluções e abordagens criativas para os desafios tecnológicos.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Precisão",
      description: "Comprometimento com a excelência técnica e atenção aos detalhes em cada projeto.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Eficiência",
      description: "Otimização de processos e recursos para entregar resultados de alto valor.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Criatividade",
      description: "Combinação de técnica e arte para criar soluções únicas e impactantes.",
    },
  ]

  return (
    <div ref={ref} className="py-16">
      <motion.div variants={containerVariants} initial="hidden" animate={controls} className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-white mb-4">
            <span className="text-gradient">Nossa Essência</span>
          </motion.h3>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto">
            A marca Oliva representa a união entre tecnologia e criatividade, simbolizada pelo pássaro que representa
            liberdade de pensamento e o sol que ilumina novos caminhos e possibilidades.
          </motion.p>
        </div>

        {/* Mobile layout - stacked */}
        <div className="md:hidden">
          <motion.div variants={logoVariants} className="flex justify-center mb-8">
            <div className="relative w-48 h-48">
              <motion.div
                animate={{
                  filter: [
                    "drop-shadow(0 0 0px rgba(255, 87, 34, 0.5))",
                    "drop-shadow(0 0 15px rgba(255, 87, 34, 0.7))",
                    "drop-shadow(0 0 0px rgba(255, 87, 34, 0.5))",
                  ],
                  scale: [1, 1.05, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute inset-0"
              >
                <Image src="/images/logo-oliva.png" alt="Oliva Logo" fill className="object-contain" />
              </motion.div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start bg-neutral-900/50 p-4 rounded-lg border border-neutral-800 hover:border-primary/30 transition-all duration-300"
              >
                <div className="bg-black/50 p-3 rounded-full mr-4 flex-shrink-0">{value.icon}</div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop layout - side by side */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          {/* Logo Animation */}
          <motion.div variants={logoVariants} className="flex justify-center">
            <div className="relative w-64 h-64">
              <motion.div
                animate={{
                  filter: [
                    "drop-shadow(0 0 0px rgba(255, 87, 34, 0.5))",
                    "drop-shadow(0 0 15px rgba(255, 87, 34, 0.7))",
                    "drop-shadow(0 0 0px rgba(255, 87, 34, 0.5))",
                  ],
                  scale: [1, 1.05, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute inset-0"
              >
                <Image src="/images/logo-oliva.png" alt="Oliva Logo" fill className="object-contain" />
              </motion.div>
            </div>
          </motion.div>

          {/* Values */}
          <div className="space-y-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start bg-neutral-900/50 p-4 rounded-lg border border-neutral-800 hover:border-primary/30 transition-all duration-300"
              >
                <div className="bg-black/50 p-3 rounded-full mr-4 flex-shrink-0">{value.icon}</div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

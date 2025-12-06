"use client"

import { useEffect, useRef } from "react"
import { m, useAnimation, useInView, Variants, LazyMotion, domAnimation } from "framer-motion"
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
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

  const logoVariants: Variants = {
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
    <LazyMotion features={domAnimation}>
      <div ref={ref} className="py-16">
        <m.div variants={containerVariants} initial="hidden" animate={controls} className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <m.h3 variants={itemVariants} className="text-2xl font-semibold text-foreground mb-4">
              <span className="text-gradient">Nossa Essência</span>
            </m.h3>
            <m.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
              A marca Oliva representa a união entre tecnologia e criatividade, simbolizada pelo pássaro que representa
              liberdade de pensamento e a busca por novos caminhos e possibilidades.
            </m.p>
          </div>

          {/* Mobile layout - stacked */}
          <div className="md:hidden">
            <m.div variants={logoVariants} className="flex justify-center mb-8">
              <div className="relative w-48 h-48">
                <m.div
                  animate={{
                    filter: [
                      "drop-shadow(0 0 0px rgba(230, 126, 34, 0.5))",
                      "drop-shadow(0 0 15px rgba(230, 126, 34, 0.7))",
                      "drop-shadow(0 0 0px rgba(230, 126, 34, 0.5))",
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
                  style={{ willChange: "transform, filter" }}
                  className="absolute inset-0"
                >
                  <Image src="/images/logo-oliva-m.webp" alt="Oliva Logo" fill className="object-contain" />
                </m.div>
              </div>
            </m.div>

            <div className="space-y-4">
              {values.map((value, index) => (
                <m.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start bg-card/50 p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="bg-secondary/50 p-3 rounded-full mr-4 flex-shrink-0">{value.icon}</div>
                  <div>
                    <h4 className="text-foreground font-medium text-lg mb-1">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>

          {/* Desktop layout - side by side */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
            {/* Logo Animation */}
            <m.div variants={logoVariants} className="flex justify-center">
              <div className="relative w-64 h-64">
                <m.div
                  animate={{
                    filter: [
                      "drop-shadow(0 0 0px rgba(230, 126, 34, 0.5))",
                      "drop-shadow(0 0 15px rgba(230, 126, 34, 0.7))",
                      "drop-shadow(0 0 0px rgba(230, 126, 34, 0.5))",
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
                  style={{ willChange: "transform, filter" }}
                  className="absolute inset-0"
                >
                  <Image src="/images/logo-oliva-m.webp" alt="Oliva Logo" fill className="object-contain" />
                </m.div>
              </div>
            </m.div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <m.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start bg-card/50 p-4 rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="bg-secondary/50 p-3 rounded-full mr-4 flex-shrink-0">{value.icon}</div>
                  <div>
                    <h4 className="text-foreground font-medium text-lg mb-1">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </LazyMotion>
  )
}

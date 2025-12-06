"use client"

import { useEffect, useRef, useState } from "react"
import { motion, Variants } from "framer-motion"
import { Cpu, Code, Database, Globe, Zap, Lightbulb } from "lucide-react"

export default function InnovativeAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIcon, setActiveIcon] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const icons = [
    {
      icon: <Code className="h-8 w-8" />,
      label: "Desenvolvimento",
      color: "#2D6A4F",
      description: "Transformamos conceitos em código limpo e performático, criando aplicações robustas e escaláveis.",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      label: "Inteligência Artificial",
      color: "#40916C",
      description: "Implementamos agentes inteligentes que otimizam processos e elevam a eficiência do seu negócio.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      label: "Banco de Dados",
      color: "#1B4332",
      description: "Estruturamos dados com segurança e agilidade, garantindo integridade e acesso rápido às informações.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      label: "Infraestrutura",
      color: "#52B788",
      description: "Construímos bases sólidas e seguras para suportar o crescimento contínuo das suas operações digitais.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      label: "Automação",
      color: "#74C69D",
      description: "Eliminamos tarefas repetitivas com fluxos inteligentes, liberando tempo para o que realmente importa.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      label: "Inovação",
      color: "#95D5B2",
      description: "Aplicamos tecnologias de ponta para manter seu negócio à frente no mercado competitivo.",
    },
  ]

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveIcon((prev) => (prev + 1) % icons.length)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isHovering, icons.length])

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const iconVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  }

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const lineVariants: Variants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  }

  const pulseVariants: Variants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  }

  return (
    <div
      ref={containerRef}
      className="bg-card/80 border border-border rounded-lg p-6 sm:p-8 shadow-xl overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.h3 variants={textVariants} className="text-xl font-semibold text-foreground mb-6 text-center">
          Damos asas às suas <span className="text-primary font-bold">ideias</span> e{" "}
          <span className="text-primary font-bold">construímos com propósito!</span>
        </motion.h3>

        {/* Icons Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 w-full max-w-md mx-auto mb-8">
          {icons.map((item, index) => (
            <motion.div
              key={index}
              variants={iconVariants}
              whileHover="hover"
              className="flex flex-col items-center"
              onMouseEnter={() => {
                setIsHovering(true)
                setActiveIcon(index)
              }}
              onMouseLeave={() => {
                setIsHovering(false)
              }}
            >
              <motion.div
                animate={activeIcon === index ? "pulse" : {}}
                variants={pulseVariants}
                className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-2 ${activeIcon === index ? "bg-primary/10" : "bg-secondary/20"
                  }`}
                style={{
                  borderColor: activeIcon === index ? item.color : "transparent",
                  borderWidth: "2px",
                  boxShadow: activeIcon === index ? `0 0 15px ${item.color}80, inset 0 0 10px ${item.color}40` : "none",
                }}
              >
                <div style={{ color: activeIcon === index ? item.color : "currentColor", filter: activeIcon === index ? `drop-shadow(0 0 5px ${item.color})` : "none" }} className={`${activeIcon === index ? "" : "text-muted-foreground"} transition-all duration-300`}>
                  {item.icon}
                </div>
              </motion.div>
              <motion.p
                variants={textVariants}
                className={`text-xs text-center ${activeIcon === index ? "font-medium" : "text-muted-foreground"
                  } transition-colors duration-300`}
                style={{ color: activeIcon === index ? item.color : undefined }}
              >
                {item.label}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Active Icon Description */}
        <motion.div
          key={activeIcon}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h4 className="text-lg font-medium text-foreground mb-2">{icons[activeIcon].label}</h4>
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 mx-auto mb-4"
            style={{ maxWidth: "200px" }}
          ></motion.div>
          <p className="text-muted-foreground text-sm max-w-xs mx-auto">
            {icons[activeIcon].description}
          </p>
        </motion.div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {icons.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full ${activeIcon === index ? "bg-primary" : "bg-muted"}`}
              animate={{
                scale: activeIcon === index ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: 1,
                repeat: activeIcon === index ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
              }}
              onClick={() => setActiveIcon(index)}
              style={{ cursor: "pointer" }}
            ></motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

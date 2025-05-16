"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Cpu, Workflow, Globe, Bot } from "lucide-react"
import SkillCard from "./skill-card"
import BrandAnimation from "./brand-animation"

const skills = [
  {
    title: "Automação de Processos",
    description: "Desenvolvimento de soluções para automação de processos internos e fluxos de trabalho.",
    icon: <Workflow className="h-10 w-10 text-primary" />,
    tools: ["N8N", "Python", "Webhooks", "API Integration"],
  },
  {
    title: "Desenvolvimento Web",
    description: "Criação de aplicações web modernas, responsivas e de alta performance.",
    icon: <Code className="h-10 w-10 text-primary" />,
    tools: ["Vue.js", "React", "Laravel", "Next.js"],
  },
  {
    title: "Infraestrutura Digital",
    description: "Configuração e otimização de infraestrutura digital para aplicações e serviços.",
    icon: <Cpu className="h-10 w-10 text-primary" />,
    tools: ["DNS", "VPS", "Domínios", "Servidores"],
  },
  {
    title: "Banco de Dados",
    description: "Modelagem, implementação e otimização de bancos de dados para aplicações.",
    icon: <Database className="h-10 w-10 text-primary" />,
    tools: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Aplicações No Code",
    description: "Criação de aplicações web e embarcadas rápidas para operações de marketing.",
    icon: <Globe className="h-10 w-10 text-primary" />,
    tools: ["Bubble", "ElementorPro", "FlutterFlow"],
  },
  {
    title: "Agentes IA",
    description: "Desenvolvimento de agentes inteligentes para automação e assistência.",
    icon: <Bot className="h-10 w-10 text-primary" />,
    tools: ["Chatbots", "Agentes IA", "Atendimento IA", "Marketing IA"],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="habilidades" className="py-20 bg-black relative">
      <div className="absolute inset-0 diagonal-lines opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary font-orbitron mb-4"
          >
            Habilidades
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Combinando tecnologia e criatividade para desenvolver soluções inovadoras em automação, desenvolvimento web
            e inteligência artificial.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              tools={skill.tools}
              index={index}
            />
          ))}
        </motion.div>

        {/* Brand Animation instead of Interactive Terminal */}
        <BrandAnimation />
      </div>
    </section>
  )
}

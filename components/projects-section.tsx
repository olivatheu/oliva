"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "./project-card"

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Automação de Processos Internos",
    description: "Sistema de automação para fluxos de trabalho internos, integrando múltiplas ferramentas e APIs.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Automação", "N8N", "API", "Webhook"],
    link: "#",
    github: "#",
    category: "automacao",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Dashboard interativo para visualização de dados e métricas de negócio em tempo real.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "Chart.js", "API", "Dashboard"],
    link: "#",
    github: "#",
    category: "web",
  },
  {
    id: 3,
    title: "Assistente Virtual IA",
    description: "Assistente virtual baseado em IA para atendimento ao cliente e automação de tarefas.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["IA", "Python", "NLP", "Chatbot"],
    link: "#",
    github: "#",
    category: "ia",
  },
  {
    id: 4,
    title: "E-commerce Personalizado",
    description: "Plataforma de e-commerce personalizada com integração de pagamentos e gestão de estoque.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Laravel", "MySQL", "API", "E-commerce"],
    link: "#",
    github: "#",
    category: "web",
  },
  {
    id: 5,
    title: "Otimização de Infraestrutura",
    description: "Projeto de otimização de infraestrutura digital, reduzindo custos e melhorando performance.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["VPS", "DNS", "Servidor", "Otimização"],
    link: "#",
    github: "#",
    category: "infra",
  },
  {
    id: 6,
    title: "SaaS IA para Análise de Dados",
    description: "Plataforma SaaS para análise de dados utilizando algoritmos de inteligência artificial.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["IA", "SaaS", "Python", "Análise de Dados"],
    link: "#",
    github: "#",
    category: "ia",
  },
]

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projetos" className="py-20 bg-neutral-950 relative">
      <div className="absolute inset-0 diagonal-lines opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary font-orbitron mb-4"
          >
            Projetos Recentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Conheça alguns dos projetos desenvolvidos recentemente, abrangendo diferentes áreas de atuação e
            tecnologias.
          </motion.p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12" onValueChange={setActiveTab}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center overflow-x-auto pb-2"
          >
          </motion.div>

          <TabsContent value={activeTab} className="mt-8">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  link={project.link}
                  github={project.github}
                  index={index}
                />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

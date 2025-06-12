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
    description: "Sistemas de automação para fluxos de trabalhos internos, integrando múltiplas ferramentas e APIs.",
    image: "/images/1.webp",
    tags: [ "Gestão", "Infraestrutura", "Monitoramento", "Provisionamento", "Organização", "Tratamento"],
    link: "#",
    github: "#",
    category: "automacao",
  },
  {
    id: 2,
    title: "Aplicações Web",
    description: "Desenvolvimento de aplicações web responsivas com foco em performance, escalabilidade e experiência do usuário.",
    image: "/images/2.webp",
    tags: ["Dashboards", "Páginas de Apresentação", "Páginas de Venda", "Sistemas"],
    link: "#",
    github: "#",
    category: "web",
  },
  {
    id: 3,
    title: "Agente Virtual IA",
    description: "Agente virtual baseado em IA para atendimento ao cliente e automação de tarefas.",
    image: "/images/3.webp",
    tags: ["Administração", "Contabilidade", "Controle", "Gestão", "Marketing"],
    link: "#",
    github: "#",
    category: "ia",
  },
  {
    id: 4,
    title: "E-commerces Personalizados",
    description: "Plataformas de e-commerce personalizadas com gestão de estoque e checkout.",
    image: "/images/4.webp",
    tags: ["PathTech e-comm", "M2 Embalagens"],
    link: "#",
    github: "#",
    category: "web",
  },
  {
    id: 5,
    title: "Otimização de Infraestrutura",
    description: "Análises de infraestruturas digitais, reduzindo custos e melhorando performance.",
    image: "/images/5.webp",
    tags: ["Automações", "APIs", "DNS", "VPS"],
    link: "#",
    github: "#",
    category: "infra",
  },
  {
    id: 6,
    title: "Análise de Dados",
    description: "Análise de dados utilizando algoritmos de inteligência artificial e machine learning.",
    image: "/images/6.webp",
    tags: ["Análise de Dados", "IA", "Machine Learning", "Python"],
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
      <div className="absolute inset-0 diagonal-lines opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary font-orbitron mb-4"
          >
            Projetos Relevantes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Conheça alguns dos projetos desenvolvidos, abrangendo diferentes áreas de atuação e
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

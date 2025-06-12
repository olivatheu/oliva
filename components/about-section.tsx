"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Briefcase, GraduationCap, Code } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  }

  return (
    <section id="sobre" className="py-20 bg-black relative">
      <div className="absolute inset-0 diagonal-lines opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-orbitron mb-4">Sobre Mim</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha trajetória, experiência e curiosidade por tecnologia.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Image and quick info */}
          <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start">
            <div className="relative w-64 h-64 md:w-100 md:h-100 mb-8 rounded-lg overflow-hidden border-4 border-primary/20">
              <Image src="/images/oliva.webp" alt="Matheus Oliva" fill className="object-cover" />
            </div>

            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              <div className="bg-neutral-900/80 p-4 rounded-lg border border-neutral-800 text-center">
                <Code className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="text-white font-medium">Desenvolvimento</h3>
                <p className="text-gray-400 text-sm">1+ ano</p>
              </div>
              <div className="bg-neutral-900/80 p-4 rounded-lg border border-neutral-800 text-center">
                <Briefcase className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="text-white font-medium">Projetos</h3>
                <p className="text-gray-400 text-sm">20+ concluídos</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Bio and experience */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Matheus Oliva</h3>
              <p className="text-gray-300 mb-4">
                Desenvolvedor Web Full Stack direcionado a automação de processos e soluções de IA, com foco em criar
                infraestruturas digitais eficientes e aplicações web de alta performance.
              </p>
              <p className="text-gray-300">
                Minha intenção está em combinar tecnologia e criatividade para resolver problemas complexos e otimizar
                fluxos de trabalho, sempre buscando as melhores práticas e tecnologias mais recentes.
              </p>
            </div>

            <Separator className="my-6 bg-neutral-800" />

            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Briefcase className="h-5 w-5 text-primary mr-2" />
                Experiência Profissional
              </h4>

              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h5 className="text-white font-medium">Desenvolvedor Web - Freelancer</h5>
                  <p className="text-primary/80 text-sm">2024 - Presente</p>
                  <p className="text-gray-400 mt-1">
                    Desenvolvimento de aplicações web, e-commerce e sistemas sob medida utilizando React.js, Vue.js, Laravel e
                    MySQL.
                  </p>
                </div>

                <div className="border-l-2 border-primary/30 pl-4">
                  <h5 className="text-white font-medium">Desenvolvedor Web - Aura Matrix</h5>
                  <p className="text-primary/80 text-sm">2025 - Presente</p>
                  <p className="text-gray-400 mt-1">
                    Desenvolvimento de soluções de automação de processos internos, criação de infraestrutura digital e
                    implementação de sistemas IA.
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-6 bg-neutral-800" />

            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 text-primary mr-2" />
                Formação
              </h4>

              <div className="border-l-2 border-primary/30 pl-4">
                <h5 className="text-white font-medium">Análise e Desenvolvimento de Sistemas</h5>
                <p className="text-primary/80 text-sm">UniFavip Wyden</p>
                <p className="text-gray-400 mt-1">
                  Tecnólogo em andamento com foco em desenvolvimento web, inteligência artificial e
                  sistemas distribuídos.
                </p>
              </div>
              <br />
              <div className="border-l-2 border-primary/30 pl-4">
                <h5 className="text-white font-medium">Bacharelado em Ciências Contábeis</h5>
                <p className="text-primary/80 text-sm">Fundação Visconde de Cairu</p>
                <p className="text-gray-400 mt-1">
                  Bacharelado em andamento, direcionado à Tecnologia da Informação,
                  com ênfase em otimização de processos, automação e geração de resultados.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

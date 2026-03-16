"use client"

import { useRef } from "react"
import { m, LazyMotion, domAnimation } from "framer-motion"
import Image from "next/image"
import { Briefcase, GraduationCap, Code, ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
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
    <LazyMotion features={domAnimation}>
      <section id="sobre" className="py-20 bg-background relative">
        <div className="absolute inset-0 diagonal-lines opacity-10 pointer-events-none"></div>
        {/* Decorative background elements */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <m.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Sobre Mim
            </m.h2>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              Conheça um pouco mais sobre minha <span className="text-primary font-bold bg-primary/10 px-1 rounded">trajetória</span>, <span className="text-primary font-bold bg-primary/10 px-1 rounded">experiência</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">curiosidade por tecnologia</span>.
            </m.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image and quick info */}
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="flex flex-col items-center lg:items-start"
            >
              {/* Bio for Desktop - Visible only on LG screens */}
              <m.div variants={itemVariants} className="hidden lg:block bg-card/30 backdrop-blur-sm p-6 rounded-2xl border border-border/50 mb-8 w-full max-w-md">
                <h3 className="text-2xl font-bold text-foreground mb-4">Matheus Oliva</h3>
                <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                  <span className="text-primary font-bold bg-primary/10 px-1 rounded">Desenvolvedor Web</span> direcionado a <span className="text-primary font-bold bg-primary/10 px-1 rounded">automação de processos</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">soluções de IA</span>, com foco em criar
                  <span className="text-primary font-bold bg-primary/10 px-1 rounded">infraestruturas digitais eficientes</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">aplicações web de alta performance</span>.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Minha intenção está em combinar <span className="text-primary font-bold bg-primary/10 px-1 rounded">tecnologia</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">criatividade</span> para <span className="text-primary font-bold bg-primary/10 px-1 rounded">resolver problemas complexos</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">otimizar fluxos de trabalho</span>.
                </p>
              </m.div>

              <m.div variants={itemVariants} className="relative w-64 h-64 md:w-80 md:h-80 mb-8 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image src="/images/img-maca.webp" alt="Matheus Oliva" fill className="object-cover" />
                </div>
              </m.div>

              <m.div variants={itemVariants} className="grid grid-cols-2 gap-6 w-full max-w-md">
                <m.div
                  whileHover={{ y: -5, borderColor: "rgba(var(--primary), 0.5)" }}
                  className="bg-card/50 backdrop-blur-sm p-5 rounded-xl border border-border text-center shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold text-md">Desenvolvimento</h3>
                  <p className="text-muted-foreground text-sm">Automações & IA</p>
                </m.div>
                <m.div
                  whileHover={{ y: -5, borderColor: "rgba(var(--secondary), 0.5)" }}
                  className="bg-card/50 backdrop-blur-sm p-5 rounded-xl border border-border text-center shadow-lg hover:shadow-secondary/10 transition-all duration-300"
                >
                  <div className="bg-secondary/10 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-foreground font-bold text-md">Projetos</h3>
                  <p className="text-muted-foreground text-sm">45+ Entregues</p>
                </m.div>
              </m.div>
            </m.div>

            {/* Right side - Bio and experience */}
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="space-y-8"
            >
              {/* Bio for Mobile - Hidden on LG screens */}
              <m.div variants={itemVariants} className="lg:hidden bg-card/30 backdrop-blur-sm p-6 rounded-2xl border border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-4">Matheus Oliva</h3>
                <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                  <span className="text-primary font-bold bg-primary/10 px-1 rounded">Desenvolvedor Web</span> direcionado a <span className="text-primary font-bold bg-primary/10 px-1 rounded">automação de processos</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">soluções de IA</span>, com foco em criar
                  <span className="text-primary font-bold bg-primary/10 px-1 rounded">infraestruturas digitais eficientes</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">aplicações web de alta performance</span>.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Minha intenção está em combinar <span className="text-primary font-bold bg-primary/10 px-1 rounded">tecnologia</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">criatividade</span> para <span className="text-primary font-bold bg-primary/10 px-1 rounded">resolver problemas complexos</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">otimizar fluxos de trabalho</span>.
                </p>
              </m.div>

              <m.div variants={itemVariants} className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                    <Briefcase className="h-5 w-5 text-primary mr-2" />
                    Experiência Profissional
                  </h4>

                  <div className="space-y-4 relative pl-2">
                    <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

                    {/* Vita Health Supplements */}
                    <div className="relative pl-8 group">
                      <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      </div>
                      <h5 className="text-foreground font-bold text-lg">Vita Health Supplements</h5>
                      <p className="text-primary font-medium text-sm mb-1">Fev 2026 - Presente</p>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        Atuação no desenvolvimento de <span className="text-primary font-bold bg-primary/10 px-1 rounded">aplicações web</span>, <span className="text-primary font-bold bg-primary/10 px-1 rounded">análise e auditoria de dados</span>. Responsável pela estruturação de <span className="text-primary font-bold bg-primary/10 px-1 rounded">páginas e funis de vendas</span>, integração de <span className="text-primary font-bold bg-primary/10 px-1 rounded">plataformas e ferramentas</span>, implementação de <span className="text-primary font-bold bg-primary/10 px-1 rounded">automações</span> e configuração de <span className="text-primary font-bold bg-primary/10 px-1 rounded">tracking e rastreamento de eventos</span> para otimização de campanhas e performance de conversão.
                      </p>
                    </div>

                    {/* Aura Matrix */}
                    <div className="relative pl-8 group">
                      <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-primary/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                      </div>
                      <h5 className="text-foreground font-bold text-lg">Jornada na Aura Matrix</h5>
                      <p className="text-primary/80 font-medium text-sm mb-4">Jan 2025 - Fev 2026</p>

                      <div className="space-y-6 border-l-2 border-primary/20 pl-6 ml-1 relative">
                        {/* Pleno II */}
                        <div className="relative group/item">
                          <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-primary/70 rounded-full ring-4 ring-background group-hover/item:scale-125 transition-transform"></div>
                          <h6 className="text-foreground font-bold text-base">Desenvolvedor Web Pleno II</h6>
                          <span className="text-xs text-muted-foreground block mb-1">Nov 2025 - Fev 2026</span>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Direcionado a <span className="text-primary font-bold bg-primary/10 px-1 rounded">demandas estratégicas</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">qualidade operacional</span>. Gestão de infraestrutura, automações de processos e otimização de performance.
                          </p>
                        </div>

                        {/* Pleno I */}
                        <div className="relative group/item">
                          <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-primary/50 rounded-full ring-4 ring-background group-hover/item:scale-125 transition-transform"></div>
                          <h6 className="text-foreground font-bold text-base">Desenvolvedor Web Pleno I</h6>
                          <span className="text-xs text-muted-foreground block mb-1">Jun 2025 - Out 2025</span>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Expansão para desenvolvimento web, <span className="text-primary font-bold bg-primary/10 px-1 rounded">integrações multiferramentas</span> e otimizando fluxos de trabalho com automações.
                          </p>
                        </div>

                        {/* Web Designer */}
                        <div className="relative group/item">
                          <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-primary/30 rounded-full ring-4 ring-background group-hover/item:scale-125 transition-transform"></div>
                          <h6 className="text-foreground font-bold text-base">Web Designer</h6>
                          <span className="text-xs text-muted-foreground block mb-1">Jan 2025 - Mai 2025</span>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Foco na criação de <span className="text-primary font-bold bg-primary/10 px-1 rounded">interfaces</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">layouts</span> intuitivos e de alta conversão.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Freelancer */}
                    <div className="relative pl-8 group">
                      <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-primary/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                      </div>
                      <h5 className="text-foreground font-bold text-lg">Desenvolvedor Web - Freelancer</h5>
                      <p className="text-primary/80 font-medium text-sm mb-1">2024 - Presente</p>
                      <p className="text-muted-foreground text-base leading-relaxed mb-3">
                        Atuação focada em <span className="text-primary font-bold bg-primary/10 px-1 rounded">desenvolvimento de aplicações web</span>, <span className="text-primary font-bold bg-primary/10 px-1 rounded">otimização de páginas</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">infraestruturas digitais</span>. Projetos envolvendo <span className="text-primary font-bold bg-primary/10 px-1 rounded">marketing de resposta direta</span>, MVPs para lançamentos e automações de recuperação de leads.
                      </p>
                      <div className="space-y-3 border-l-2 border-primary/20 pl-4 ml-1">
                        <div className="relative group/item">
                          <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-primary/50 rounded-full ring-3 ring-background"></div>
                          <h6 className="text-foreground font-semibold text-sm">Alpha Roads</h6>
                          <p className="text-muted-foreground text-xs leading-relaxed">
                            Nicho de <span className="text-primary font-bold bg-primary/10 px-1 rounded">renda extra</span>. Desenvolvimento e otimização de páginas, funis de vendas, operações de <span className="text-primary font-bold bg-primary/10 px-1 rounded">marketing digital</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">direct response</span>.
                          </p>
                        </div>
                        <div className="relative group/item">
                          <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-primary/50 rounded-full ring-3 ring-background"></div>
                          <h6 className="text-foreground font-semibold text-sm">Instituto St. Joseph</h6>
                          <p className="text-muted-foreground text-xs leading-relaxed">
                            Nicho de <span className="text-primary font-bold bg-primary/10 px-1 rounded">saúde, emagrecimento e estética</span>. Estruturação de páginas, infraestrutura digital e campanhas de <span className="text-primary font-bold bg-primary/10 px-1 rounded">direct response</span>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 text-primary mr-2" />
                    Formação
                  </h4>

                  <div className="space-y-4 relative pl-2">
                    <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

                    <div className="relative pl-8 group">
                      <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <h5 className="text-foreground font-bold text-lg">Análise e Desenvolvimento de Sistemas</h5>
                      <p className="text-primary font-medium text-sm mb-1">UniFavip Wyden</p>
                      <p className="text-muted-foreground">
                        Tecnólogo em andamento com foco em desenvolvimento web, inteligência artificial e sistemas distribuídos.
                      </p>
                    </div>

                    <div className="relative pl-8 group">
                      <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <h5 className="text-foreground font-bold text-lg">Bacharelado em Ciências Contábeis</h5>
                      <p className="text-primary font-medium text-sm mb-1">Fundação Visconde de Cairu</p>
                      <p className="text-muted-foreground">
                        Direcionado à Tecnologia da Informação, com ênfase em otimização de processos e automação.
                      </p>
                    </div>
                  </div>
                </div>
              </m.div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}

"use client"

import { useState } from "react"
import { m, LazyMotion, domAnimation } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "./project-card"
import { Button } from "@/components/ui/button"

// Services data focused on Marketing & Infoproducts
const services = [
    {
        id: 1,
        title: "Validação de Ofertas & MVPs",
        description: "Desenvolvimento ágil de aplicações web e MVPs para validar suas ofertas de infoprodutos com rapidez e precisão.",
        image: "/images/2.webp",
        tags: ["Infoprodutos", "MVP", "Lançamentos", "Alta Conversão"],
        link: "#",
        github: "#",
        category: "marketing",
    },
    {
        id: 2,
        title: "Áreas de Membros & Comunidades",
        description: "Plataformas exclusivas para fortalecer sua marca, criar comunidades engajadas e aumentar o LTV com receitas recorrentes.",
        image: "/images/3.webp",
        tags: ["LTV", "Comunidade", "Membership", "Branding"],
        link: "#",
        github: "#",
        category: "marketing",
    },
    {
        id: 3,
        title: "Automação & Recuperação",
        description: "Sistemas inteligentes para recuperar leads perdidos e automatizar processos, maximizando o faturamento do seu negócio.",
        image: "/images/1.webp",
        tags: ["Automação", "Recuperação de Vendas", "Leads", "Faturamento"],
        link: "#",
        github: "#",
        category: "automacao",
    },
    {
        id: 4,
        title: "Apps de Recorrência",
        description: "Idealização e construção de aplicativos focados em retenção e recorrência para escalar seus ganhos no longo prazo.",
        image: "/images/4.webp",
        tags: ["Apps", "Recorrência", "Scale-up", "Mobile"],
        link: "#",
        github: "#",
        category: "marketing",
    },
    {
        id: 5,
        title: "Infraestrutura de Alta Performance",
        description: "Otimização de servidores e infraestrutura para suportar picos de tráfego em lançamentos sem quedas.",
        image: "/images/5.webp",
        tags: ["Performance", "Lançamentos", "Escalabilidade"],
        link: "#",
        github: "#",
        category: "infra",
    },
    {
        id: 6,
        title: "Análise de Dados",
        description: "Visualização de dados estratégicos para tomada de decisão baseada em métricas reais do seu negócio.",
        image: "/images/6.webp",
        tags: ["Dados", "Métricas", "Estratégia"],
        link: "#",
        github: "#",
        category: "dados",
    },
]

export default function ServicesSection() {
    const [activeTab, setActiveTab] = useState("all")

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.6,
            },
        },
    }

    const filteredServices = activeTab === "all" ? services : services.filter((service) => service.category === activeTab)

    return (
        <LazyMotion features={domAnimation}>
            <section id="servicos" className="py-24 bg-background relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 diagonal-lines opacity-5 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <m.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="inline-block mb-4"
                        >
                            <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                                Soluções Especializadas
                            </span>
                        </m.div>

                        <m.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                        >
                            Serviços Prestados
                        </m.h2>

                        <m.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed"
                        >
                            Focamos no <span className="text-primary font-bold bg-primary/10 px-1 rounded">core do seu negócio</span>. Desenvolvemos soluções tecnológicas estratégicas para
                            <span className="text-primary font-bold bg-primary/10 px-1 rounded"> infoprodutos</span>, <span className="text-primary font-bold bg-primary/10 px-1 rounded">lançamentos</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">escala</span>.
                        </m.p>
                    </div>

                    <Tabs defaultValue="all" className="w-full mb-16" onValueChange={setActiveTab}>
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            className="flex justify-center overflow-x-auto pb-4 mb-8"
                        >
                            <TabsList className="bg-card/50 backdrop-blur-sm border border-border p-1 rounded-full">
                                <TabsTrigger value="all" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Todos</TabsTrigger>
                                <TabsTrigger value="marketing" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Marketing & Vendas</TabsTrigger>
                                <TabsTrigger value="automacao" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Automação</TabsTrigger>
                                <TabsTrigger value="infra" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Infraestrutura</TabsTrigger>
                            </TabsList>
                        </m.div>

                        <TabsContent value={activeTab} className="mt-0">
                            <m.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {filteredServices.map((service, index) => (
                                    <ProjectCard
                                        key={service.id}
                                        id={service.id}
                                        title={service.title}
                                        description={service.description}
                                        image={service.image}
                                        tags={service.tags}
                                        link={service.link}
                                        github={service.github}
                                        index={index}
                                    />
                                ))}
                            </m.div>
                        </TabsContent>
                    </Tabs>

                    {/* Enhanced CTA Section */}
                    <m.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative mt-20"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl -z-10 rounded-full opacity-50"></div>

                        <div className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-3xl p-6 md:p-12 text-center shadow-2xl shadow-primary/5 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Pronto para escalar sua operação?
                            </h3>
                            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
                                Não perca mais tempo com processos manuais ou tecnologias que limitam seu crescimento.
                                Vamos construir a solução ideal para o seu próximo nível.
                            </p>

                            <m.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ willChange: "transform" }}
                                className="inline-block max-w-full"
                            >
                                <Button
                                    size="lg"
                                    onClick={() => document.getElementById('contatos')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto whitespace-normal text-center rounded-full shadow-[0_0_20px_rgba(79,209,197,0.4)] hover:shadow-[0_0_30px_rgba(79,209,197,0.6)] transition-all duration-300 animate-pulse-slow relative overflow-hidden max-w-full"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2 flex-wrap">
                                        Análise de Solução Personalizada
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                                </Button>
                            </m.div>
                        </div>
                    </m.div>
                </div>
            </section >
        </LazyMotion>
    )
}

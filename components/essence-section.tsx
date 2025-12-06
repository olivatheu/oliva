"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Lightbulb, Target, Zap, Sparkles } from "lucide-react"

const features = [
    {
        icon: Lightbulb,
        title: "Inovação",
        description: "Buscamos constantemente novas soluções e abordagens criativas para os desafios tecnológicos.",
    },
    {
        icon: Target,
        title: "Precisão",
        description: "Comprometimento com a excelência técnica e atenção aos detalhes em cada projeto.",
    },
    {
        icon: Zap,
        title: "Eficiência",
        description: "Otimização de processos e recursos para entregar resultados de alto valor.",
    },
    {
        icon: Sparkles,
        title: "Criatividade",
        description: "Combinação de técnica e arte para criar soluções únicas e impactantes.",
    },
]

export default function EssenceSection() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background Wallpaper */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0"
            >
                {/* Desktop Wallpaper */}
                <div className="hidden md:block absolute inset-0">
                    <Image
                        src="/images/wallpaper-oliva-branco-h-1.webp"
                        alt="Background Wallpaper Desktop"
                        fill
                        className="object-cover"
                        priority={false}
                    />
                </div>
                {/* Mobile Wallpaper */}
                <div className="block md:hidden absolute inset-0">
                    <Image
                        src="/images/wallpaper-oliva-branco-mob-1.webp"
                        alt="Background Wallpaper Mobile"
                        fill
                        className="object-cover object-left"
                        priority={false}
                    />
                </div>
            </motion.div>

            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80 z-0 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Nossa Essência</h2>
                    <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
                        A marca Oliva representa a união entre <span className="text-primary font-bold bg-primary/10 px-1 rounded">tecnologia</span> e <span className="text-primary font-bold bg-primary/10 px-1 rounded">criatividade</span>, simbolizada pelo
                        pássaro que representa <span className="text-primary font-bold bg-primary/10 px-1 rounded">liberdade de pensamento</span> e a luz que ilumina <span className="text-primary font-bold bg-primary/10 px-1 rounded">novos caminhos</span> e
                        possibilidades.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left Side - Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-5/12 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-[#4FD1C5]/20 blur-[100px] rounded-full"></div>
                            <Image
                                src="/images/logo-oliva-m.webp"
                                alt="Oliva Logo"
                                fill
                                className="object-contain relative z-10 drop-shadow-xl"
                            />
                        </div>
                    </motion.div>

                    {/* Right Side - Cards */}
                    <div className="w-full lg:w-6/12 flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-card/80 backdrop-blur-sm border border-border hover:border-secondary/50 p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5 flex items-start gap-4"
                            >
                                <div className="bg-primary/5 p-3 rounded-lg group-hover:bg-secondary/10 transition-colors duration-300">
                                    <feature.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-foreground font-bold text-lg mb-1">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

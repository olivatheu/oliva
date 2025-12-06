"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const phoneNumber = "5571993126257"

    const message = `Nome: ${formData.name}
Email: ${formData.email}
Assunto: ${formData.subject}
Mensagem: ${formData.message}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(whatsappURL, "_blank")

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

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
        duration: 0.5,
      },
    },
  }

  return (
    <section id="contatos" className="py-20 bg-background relative">
      <div className="absolute inset-0 diagonal-lines opacity-10 pointer-events-none"></div>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Entre em Contato
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Tem um <span className="text-primary font-bold bg-primary/10 px-1 rounded">projeto em mente</span> ou quer conversar sobre uma possível <span className="text-primary font-bold bg-primary/10 px-1 rounded">colaboração</span>? Entre em contato e vamos
            <span className="text-primary font-bold bg-primary/10 px-1 rounded">transformar suas ideias em realidade</span>.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nome
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="bg-background/50 border-input focus:border-primary focus:ring-primary/20 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@exemplo.com"
                        required
                        className="bg-background/50 border-input focus:border-primary focus:ring-primary/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Assunto da mensagem"
                      required
                      className="bg-background/50 border-input focus:border-primary focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Sua mensagem..."
                      rows={5}
                      required
                      className="bg-background/50 border-input focus:border-primary focus:ring-primary/20 resize-none transition-all duration-300"
                    />
                  </div>
                  <div className="w-full flex justify-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(79,209,197,0.4)] hover:shadow-[0_0_30px_rgba(79,209,197,0.6)] transition-all duration-300 animate-pulse-slow relative overflow-hidden w-full md:w-auto"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Iniciar Conversa
                            <ArrowRight className="w-5 h-5 ml-1" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-6">Informações de Contato</h3>

              <div className="space-y-8">
                <motion.div whileHover={{ x: 5 }} className="flex items-start group">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-1">Email</h4>
                    <a
                      href="mailto:contato@matheusoliva.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-lg break-all"
                    >
                      contato@olivamatheus.com.br
                    </a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start group">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-1">Localização</h4>
                    <p className="text-muted-foreground text-lg">Salvador - BA, Brasil</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start group">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-1">Telefone</h4>
                    <a href="tel:+5571993126257" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                      +55 (71) 99312-6257
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

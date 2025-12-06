"use client"

import { useEffect, useState, useRef } from "react"
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, MessageSquare } from "lucide-react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"

import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"
import AntigravityPreloader from "@/components/antigravity-preloader"
import EssenceSection from "@/components/essence-section"

export default function Home() {
  const [showEntranceAnimation, setShowEntranceAnimation] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Set isLoaded after a short delay to ensure smooth transitions
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleAnimationComplete = () => {
    setShowEntranceAnimation(false)
  }

  const scrollToContent = () => {
    if (mainRef.current) {
      const navbarHeight = 80 // Approximate navbar height
      const targetPosition = mainRef.current.offsetTop - navbarHeight
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <AnimatePresence>
        {showEntranceAnimation && (
          <AntigravityPreloader key="preloader" onComplete={handleAnimationComplete} />
        )}
      </AnimatePresence>

      {!showEntranceAnimation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="min-h-screen overflow-hidden"
        >
          <ParticleBackground />
          <Navbar />

          <HeroSection scrollToContent={scrollToContent} />

          <main ref={mainRef} className="relative z-10">
            <EssenceSection />
            <ServicesSection />
            <AboutSection />
            <ContactSection />
          </main>

          <Footer />

          <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
            <motion.a
              href="https://github.com/olivatheu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-secondary/20 border border-border p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(230,126,34,0.5)]"
              aria-label="GitHub"
              whileHover={{ rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5 text-primary" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/olivatheu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-secondary/20 border border-border p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(230,126,34,0.5)]"
              aria-label="LinkedIn"
              whileHover={{ rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </motion.a>
            <motion.a
              href="https://wa.me/5571993126257"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-secondary/20 border border-border p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(230,126,34,0.5)]"
              aria-label="WhatsApp"
              whileHover={{ rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageSquare className="h-5 w-5 text-primary" />
            </motion.a>
          </div>
        </motion.div >
      )
      }
    </>
  )
}

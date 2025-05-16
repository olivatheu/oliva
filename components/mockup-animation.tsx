"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import CodeTypingEffect from "./code-typing-effect"

export default function MockupAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  const codeSnippet = `
function Oliva() {
  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    // Fetch projects data
    fetchProjects().then(data => {
      setProjects(data)
    })
  }, [])
  
  return (
    <div className="portfolio">
      <Header />
      <Projects data={projects} />
      <Contact />
    </div>
  )
}
  `.trim()

  useEffect(() => {
    setIsVisible(true)

    const timer = setTimeout(() => {
      setShowCode(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      })
    }
  }, [isVisible, controls])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div className="relative">
        <Image
          src="/images/wallpaper.webp"
          alt="Laptop Mockup"
          width={800}
          height={500}
          className="w-full h-auto rounded-lg shadow-2xl"
        />

        {/* Screen overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showCode ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="absolute inset-[12%] top-[8%] bg-black/90 rounded overflow-hidden flex items-center justify-center">
            <div className="w-full max-w-md p-4">
              {showCode && (
                <CodeTypingEffect text={codeSnippet} speed={20} className="text-xs sm:text-sm text-gray-300" />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

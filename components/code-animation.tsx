"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function CodeAnimation() {
  const [currentStep, setCurrentStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Code snippets to display
  const codeSnippets = [
    {
      language: "typescript",
      code: `interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}`,
    },
    {
      language: "typescript",
      code: `function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Fetch projects data
    async function loadProjects() {
      setIsLoading(true);
      const data = await fetchProjects();
      setProjects(data);
      setIsLoading(false);
    }
    
    loadProjects();
  }, []);`,
    },
    {
      language: "typescript",
      code: `  return (
    <main className="portfolio">
      <Header />
      
      <section className="hero">
        <h1>Oliva</h1>
        <p>Transformando ideias em soluções digitais</p>
      </section>
      
      {isLoading ? (
        <Loader />
      ) : (
        <ProjectGrid projects={projects} />
      )}
      
      <Contact />
    </main>
  );
}`,
    },
  ]

  useEffect(() => {
    // Cycle through code snippets
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % codeSnippets.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Line animation variants
  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      x: 20,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  }

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  // Format code with syntax highlighting
  const formatCode = (code: string) => {
    const lines = code.split("\n")
    return lines.map((line, i) => {
      // Simple syntax highlighting
      const highlightedLine = line
        .replace(/(interface|function|const|let|var|return|async|await)/g, '<span class="text-purple-400">$1</span>')
        .replace(/(useState|useEffect|useRef)/g, '<span class="text-yellow-400">$1</span>')
        .replace(/(\{|\}|$$|$$|\[|\]|<|>)/g, '<span class="text-gray-400">$1</span>')
        .replace(/("|'|`)(.*?)("|'|`)/g, '<span class="text-green-400">$1$2$3</span>')
        .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')

      return (
        <motion.div
          key={i}
          custom={i}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="code-line"
        >
          <span className="text-gray-500 mr-4">{i + 1}</span>
          <span dangerouslySetInnerHTML={{ __html: highlightedLine }} />
        </motion.div>
      )
    })
  }

  return (
    <div className="relative bg-neutral-900/90 rounded-lg border border-neutral-800 shadow-xl overflow-hidden">
      {/* Code editor header */}
      <div className="bg-neutral-800 px-4 py-2 flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm text-gray-400 font-mono">portfolio.tsx</div>
      </div>

      {/* Code content */}
      <div
        ref={containerRef}
        className="p-4 font-mono text-sm text-gray-300 overflow-x-auto"
        style={{ minHeight: "300px", maxHeight: "400px" }}
      >
        <motion.div
          key={currentStep}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-1"
        >
          {formatCode(codeSnippets[currentStep].code)}
        </motion.div>
      </div>

      {/* Cursor animation */}
      <div className="absolute bottom-4 right-4">
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          className="w-2 h-5 bg-primary"
        ></motion.div>
      </div>
    </div>
  )
}

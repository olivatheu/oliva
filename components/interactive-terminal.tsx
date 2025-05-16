"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Terminal } from "lucide-react"
import CodeTypingEffect from "./code-typing-effect"

interface Command {
  command: string
  response: string[]
  delay?: number
}

const commands: Command[] = [
  {
    command: "npm install",
    response: [
      "Installing dependencies...",
      "added 1274 packages, and audited 1275 packages in 3s",
      "found 0 vulnerabilities",
    ],
    delay: 2000,
  },
  {
    command: "npm run build",
    response: [
      "Creating an optimized production build...",
      "> Using Tailwind CSS",
      "> Compiling...",
      "> Successfully compiled.",
      "✓ Done in 4.2s",
    ],
    delay: 3000,
  },
  {
    command: "npm run start",
    response: ["Starting the application...", "> Ready in 0.8s", "> Listening on http://localhost:3000"],
    delay: 1500,
  },
]

export default function InteractiveTerminal() {
  const [activeCommandIndex, setActiveCommandIndex] = useState(0)
  const [showResponse, setShowResponse] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeCommandIndex < commands.length) {
      const command = commands[activeCommandIndex]

      // Show response after command is typed
      const responseTimeout = setTimeout(
        () => {
          setShowResponse(true)

          // Scroll to bottom
          if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
          }

          // Move to next command after response and delay
          const nextCommandTimeout = setTimeout(() => {
            if (activeCommandIndex < commands.length - 1) {
              setActiveCommandIndex((prev) => prev + 1)
              setShowResponse(false)
            } else {
              setIsComplete(true)
            }
          }, command.delay || 2000)

          return () => clearTimeout(nextCommandTimeout)
        },
        command.command.length * 50 + 500,
      )

      return () => clearTimeout(responseTimeout)
    }
  }, [activeCommandIndex])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden shadow-xl w-full max-w-2xl mx-auto"
    >
      <div className="bg-neutral-800 px-4 py-2 flex items-center">
        <Terminal className="h-4 w-4 text-primary mr-2" />
        <span className="text-sm text-white">Terminal</span>
        <div className="flex ml-auto space-x-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
        </div>
      </div>

      <div ref={terminalRef} className="p-4 h-64 overflow-y-auto font-mono text-sm text-gray-300 space-y-2">
        {commands.slice(0, activeCommandIndex + 1).map((cmd, index) => (
          <div key={index} className="space-y-1">
            <div className="flex">
              <span className="text-green-500 mr-2">$</span>
              {index === activeCommandIndex ? <CodeTypingEffect text={cmd.command} /> : <span>{cmd.command}</span>}
            </div>

            {(index < activeCommandIndex || showResponse) && (
              <div className="pl-4 text-gray-400 space-y-1">
                {cmd.response.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            )}
          </div>
        ))}

        {isComplete && (
          <div className="flex mt-4">
            <span className="text-green-500 mr-2">$</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-gray-400"
            ></motion.span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

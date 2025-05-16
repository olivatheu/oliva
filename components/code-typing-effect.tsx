"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CodeTypingEffectProps {
  text: string
  speed?: number
  className?: string
}

export default function CodeTypingEffect({ text, speed = 50, className = "" }: CodeTypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed])

  return (
    <div className={`font-mono ${className}`}>
      <span>{displayedText}</span>
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-primary ml-1"
        ></motion.span>
      )}
    </div>
  )
}

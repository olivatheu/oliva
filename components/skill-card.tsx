"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface SkillCardProps {
  title: string
  description: string
  icon: React.ReactNode
  tools: string[]
  index: number
}

export default function SkillCard({ title, description, icon, tools, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        className={`bg-neutral-900/80 border-neutral-800 transition-all duration-300 h-full overflow-hidden ${
          isHovered ? "border-primary/50 shadow-lg shadow-primary/10" : ""
        }`}
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
            <motion.div animate={isHovered ? { rotate: 360 } : { rotate: 0 }} transition={{ duration: 0.5 }}>
              {icon}
            </motion.div>
          </div>
          <CardDescription className="text-gray-400 mt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mt-2">
            {tools.map((tool, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 + index * 0.1 }}
                className={`px-3 py-1 bg-black/50 text-primary/90 text-xs rounded-full border border-primary/20 transition-all ${
                  isHovered ? "border-primary/40 bg-black/70" : ""
                }`}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

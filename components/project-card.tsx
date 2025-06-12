"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

interface ProjectCardProps {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github: string
  index: number
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  tags,
  link,
  github,
  index,
}: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className={`bg-neutral-900/80 border border-neutral-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 ${isHovered ? "border-primary/50 shadow-lg shadow-primary/10" : ""
          }`}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={800}
            height={300}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : ""
              }`}
          />

          <Dialog open={showDetails} onOpenChange={setShowDetails}>
            <DialogTrigger asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/60 flex items-center justify-center"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black/50 border-primary/50 text-white hover:bg-black/70"
                  onClick={(e) => {
                    e.preventDefault()
                    setShowDetails(true)
                  }}
                >
                  <Info className="h-4 w-4 mr-2" />
                  Detalhes
                </Button>
              </motion.div>
            </DialogTrigger>

            <DialogContent className="max-w-l w-[95vw] max-h-[85vh] p-0 bg-neutral-900 border border-neutral-800 overflow-y-auto sm:rounded-lg rounded-t-2xl">
              <DialogTitle className="sr-only">{title}</DialogTitle>

              <div className="relative w-full">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-2xl font-bold text-white">{title}</h2>
                </div>
              </div>

              <div className="px-4 pb-6 pt-4 sm:p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Descrição</h3>
                <p className="text-gray-300 mb-6">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-black/50 text-primary/90 border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4 flex-grow">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Badge
                  variant="outline"
                  className={`bg-black/50 text-primary/90 border-primary/20 transition-all ${isHovered ? "border-primary/40 bg-black/70" : ""
                    }`}
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

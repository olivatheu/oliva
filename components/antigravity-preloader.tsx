"use client"

import React, { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

interface AntigravityPreloaderProps {
  onComplete?: () => void
}

const AntigravityPreloader: React.FC<AntigravityPreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<"drop" | "impact" | "unite">("drop")
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Generate random values once on mount to avoid hydration mismatches
  // Reduced particle count for better performance, especially on mobile
  const sparks = useMemo(() => {
    const count = isMobile ? 15 : 30
    return [...Array(count)].map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * (isMobile ? 200 : 300),
      y: Math.random() * -200 - 20,
      scale: Math.random() * (isMobile ? 1.5 : 2),
      duration: 0.5 + Math.random() * 0.5,
    }))
  }, [isMobile])

  const dust = useMemo(() => {
    return [...Array(3)].map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 100,
      duration: 2 + Math.random(),
      delay: Math.random() * 0.5,
    }))
  }, [])

  useEffect(() => {
    const dropTime = 1000
    const impactTime = 400
    const uniteTime = 2000
    const holdTime = 1000

    const t1 = setTimeout(() => setStage("impact"), dropTime)
    const t2 = setTimeout(() => setStage("unite"), dropTime + impactTime)
    const t3 = setTimeout(() => onComplete && onComplete(), dropTime + impactTime + uniteTime + holdTime)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "radial-gradient(circle at center, #E6F0F9 0%, #CEDBE9 100%)",
        zIndex: 9999,
      }}
    >
      <div
        className="relative flex justify-center items-center"
        style={{
          width: isMobile ? "300px" : "400px",
          height: isMobile ? "225px" : "300px",
        }}
      >
        {/* Impact Sparks */}
        <AnimatePresence>
          {stage === "impact" && (
            <>
              {sparks.map((spark) => (
                <motion.div
                  key={`spark-${spark.id}`}
                  initial={{ x: 0, y: 15, scale: 0, opacity: 1 }}
                  animate={{
                    x: spark.x,
                    y: spark.y,
                    scale: spark.scale,
                    opacity: 0,
                  }}
                  transition={{
                    duration: spark.duration,
                    ease: "easeOut",
                  }}
                  style={{
                    position: "absolute",
                    width: "4px",
                    height: "4px",
                    background: "#E67E22",
                    borderRadius: "50%",
                    // Removed heavy box-shadow for mobile performance
                    boxShadow: isMobile ? "none" : "0 0 15px #E67E22",
                    zIndex: 3,
                    willChange: "transform, opacity",
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Bird */}
        <motion.img
          src="/bird1.webp"
          alt="Bird"
          initial={{ y: -800, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y:
              stage === "drop"
                ? 0
                : stage === "impact"
                  ? 15
                  : stage === "unite"
                    ? [15, -60, 0]
                    : 0,
            x: 0,
            opacity: 1,
            scale: stage === "impact" ? [1, 1.2, 0.9] : 1,
            rotate: 0,
            // Simplified filter for mobile
            filter:
              stage === "impact"
                ? isMobile
                  ? "brightness(1.2)"
                  : "drop-shadow(0 0 20px rgba(230, 126, 34, 0.8)) brightness(1.2)"
                : isMobile
                  ? "brightness(1)"
                  : "drop-shadow(0 0 10px rgba(230, 126, 34, 0.3)) brightness(1)",
          }}
          transition={{
            y: {
              duration:
                stage === "drop"
                  ? 0.8
                  : stage === "impact"
                    ? 0.2
                    : stage === "unite"
                      ? 2.0
                      : 0,
              times: stage === "unite" ? [0, 0.4, 1] : undefined,
              ease: stage === "drop" ? "circIn" : "easeInOut",
            },
            scale: { duration: 0.3 },
            filter: { duration: 0.2 },
          }}
          style={{
            width: isMobile ? "260px" : "350px",
            maxWidth: "80vw",
            position: "absolute",
            zIndex: 2,
            transformOrigin: "bottom center",
            willChange: "transform, opacity",
          }}
        />

        {/* Text "Oliva" */}
        <motion.img
          src="/oliva.webp"
          alt="Oliva"
          initial={{ y: 200, x: 0, opacity: 0, scale: 0.8 }}
          animate={{
            y: stage === "unite" ? 0 : 200,
            x: 0,
            opacity: stage === "unite" ? 1 : 0,
            scale: stage === "unite" ? 1 : 0.8,
          }}
          transition={{
            duration: 2.0,
            ease: "easeOut",
            delay: stage === "unite" ? 0 : 0,
          }}
          style={{
            width: isMobile ? "260px" : "350px",
            maxWidth: "80vw",
            position: "absolute",
            zIndex: 1,
            // Simplified filter
            filter: isMobile ? "none" : "drop-shadow(0 0 5px rgba(0, 0, 0, 0.1))",
            willChange: "transform, opacity",
          }}
        />

        {/* Antigravity Particles */}
        <AnimatePresence>
          {stage === "unite" && (
            <>
              {dust.map((d) => (
                <motion.div
                  key={`dust-${d.id}`}
                  initial={{ y: 50, opacity: 0, x: d.x }}
                  animate={{ y: -100, opacity: [0, 0.5, 0] }}
                  transition={{
                    duration: d.duration,
                    repeat: Infinity,
                    delay: d.delay,
                  }}
                  style={{
                    position: "absolute",
                    width: "3px",
                    height: "3px",
                    background: "#E67E22",
                    borderRadius: "50%",
                    zIndex: 0,
                    willChange: "transform, opacity",
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default AntigravityPreloader

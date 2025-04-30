"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if this is the first visit or a new tab by using sessionStorage
    const hasVisited = sessionStorage.getItem("hasVisitedBefore")

    // Only show splash screen if this is the first visit in this session
    if (!hasVisited) {
      setIsVisible(true)
      // Set the flag in sessionStorage
      sessionStorage.setItem("hasVisitedBefore", "true")

      // Hide splash screen after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="relative"
          >
            <motion.div
              className="text-5xl md:text-7xl font-bold text-white flex items-center"
              animate={{
                textShadow: [
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                  "0 0 30px rgba(59, 130, 246, 0.8)",
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: 0 }}
            >
              <span className="text-blue-500 mr-2">LUVO</span>
              <span>Kyotanabe Lab</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-8 left-0 right-0 text-center text-blue-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              AIの可能性を探求する場所
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

"use client"

import { useEffect, useRef } from "react"

interface WaveAnimationProps {
  color?: string
  height?: number
  amplitude?: number
  frequency?: number
  speed?: number
  className?: string
}

export default function WaveAnimation({
  color = "rgba(59, 130, 246, 0.3)",
  height = 100,
  amplitude = 20,
  frequency = 0.01,
  speed = 0.05,
  className = "",
}: WaveAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const offsetRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = height
    }

    const drawWave = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()

      // 波の開始点
      ctx.moveTo(0, canvas.height / 2)

      // 波を描画
      for (let x = 0; x < canvas.width; x++) {
        const y = Math.sin((x + offsetRef.current) * frequency) * amplitude + canvas.height / 2
        ctx.lineTo(x, y)
      }

      // 波の下部を閉じる
      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()

      // 波を塗りつぶす
      ctx.fillStyle = color
      ctx.fill()

      // オフセットを更新して波を動かす
      offsetRef.current += speed

      animationRef.current = requestAnimationFrame(drawWave)
    }

    window.addEventListener("resize", handleResize)
    handleResize()
    drawWave()

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [color, height, amplitude, frequency, speed])

  return <canvas ref={canvasRef} className={`absolute bottom-0 left-0 w-full ${className}`} />
}

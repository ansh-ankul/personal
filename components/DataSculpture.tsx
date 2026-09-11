"use client"

import { useEffect, useRef, useState } from "react"

type Point = { x: number; y: number; z: number }
type ProjectedPoint = Point & { radius: number; opacity: number }

const TAU = Math.PI * 2
const POINTS: Point[] = []

// Evenly spaced, deterministic particles trace a gently folded torus.
for (let ring = 0; ring < 80; ring += 1) {
  for (let strand = 0; strand < 30; strand += 1) {
    const u = (ring / 80) * TAU
    const v = (strand / 30) * TAU + u * 2
    const tube = 0.265 + Math.sin(u * 3) * 0.035
    const radius = 0.655 + Math.cos(v) * tube
    POINTS.push({
      x: Math.cos(u) * radius,
      y: Math.sin(u) * radius,
      z: Math.sin(v) * tube + Math.sin(u * 3) * 0.055,
    })
  }
}

function project(
  point: Point,
  size: number,
  spin: number,
  pointerX: number,
  pointerY: number,
  output: ProjectedPoint
) {
  const tiltX = 0.86 + pointerY * 0.2
  const tiltY = -0.3 + spin
  const tiltZ = -0.48 + pointerX * 0.16

  const y = point.y * Math.cos(tiltX) - point.z * Math.sin(tiltX)
  const z = point.y * Math.sin(tiltX) + point.z * Math.cos(tiltX)
  const x = point.x * Math.cos(tiltY) + z * Math.sin(tiltY)
  const depth = -point.x * Math.sin(tiltY) + z * Math.cos(tiltY)
  const perspective = 3.4 / (3.4 - depth)
  const scale = size * 0.445 * perspective

  output.x = size / 2 + (x * Math.cos(tiltZ) - y * Math.sin(tiltZ)) * scale
  output.y = size / 2 + (x * Math.sin(tiltZ) + y * Math.cos(tiltZ)) * scale
  output.z = depth
  output.radius = (size / 460) * (0.78 + perspective * 0.35)
  output.opacity = 0.3 + ((depth + 1) / 2) * 0.64
}

const FALLBACK = POINTS.filter((_, index) => index % 2 === 0)
  .map((point) => {
    const projected = { x: 0, y: 0, z: 0, radius: 0, opacity: 0 }
    project(point, 460, 0, 0, 0, projected)
    return projected
  })
  .sort((a, b) => a.z - b.z)

export default function DataSculpture() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const setPlayingRef = useRef<((playing: boolean) => void) | null>(null)
  const [paused, setPaused] = useState(true)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!container || !canvas || !context) return

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const projected = POINTS.map(() => ({ x: 0, y: 0, z: 0, radius: 0, opacity: 0 }))
    const ordered = projected.slice()
    let frame: number | null = null
    let size = 0
    let width = 0
    let height = 0
    let spin = 0
    let playing = false
    let visible = true
    let lastTime = 0
    let lastPaint = 0
    let pointerX = 0
    let pointerY = 0
    let targetX = 0
    let targetY = 0

    const draw = () => {
      if (!size) return
      context.clearRect(0, 0, width, height)
      for (let index = 0; index < POINTS.length; index += 1) {
        project(POINTS[index], size, spin, pointerX, pointerY, projected[index])
      }
      ordered.sort((a, b) => a.z - b.z)
      context.fillStyle = "#df5c37"
      for (const point of ordered) {
        context.globalAlpha = point.opacity
        context.beginPath()
        context.arc(
          point.x + (width - size) / 2,
          point.y + (height - size) / 2,
          point.radius,
          0,
          TAU
        )
        context.fill()
      }
      context.globalAlpha = 1
    }

    const tick = (time: number) => {
      frame = null
      if (!playing || !visible || document.hidden) return
      // A 30 fps cap keeps this decorative artwork inexpensive on mobile.
      if (!lastPaint || time - lastPaint >= 1000 / 30) {
        const delta = lastTime ? Math.min(time - lastTime, 70) : 0
        spin += delta * 0.000085
        pointerX += (targetX - pointerX) * 0.07
        pointerY += (targetY - pointerY) * 0.07
        lastTime = time
        lastPaint = time
        draw()
      }
      frame = window.requestAnimationFrame(tick)
    }

    const syncAnimation = () => {
      const shouldAnimate = playing && visible && !document.hidden
      if (shouldAnimate && frame === null) {
        lastTime = 0
        lastPaint = 0
        frame = window.requestAnimationFrame(tick)
      } else if (!shouldAnimate && frame !== null) {
        window.cancelAnimationFrame(frame)
        frame = null
      }
    }

    setPlayingRef.current = (value) => {
      playing = value
      syncAnimation()
    }

    const resize = () => {
      const bounds = container.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      size = Math.min(width, height)
      if (!size) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
      setReady(true)
    }

    const onPointerMove = (event: PointerEvent) => {
      if (!playing || event.pointerType === "touch") return
      const bounds = container.getBoundingClientRect()
      targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
      targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
    }
    const onPointerLeave = () => {
      targetX = 0
      targetY = 0
    }
    const onMotionPreferenceChange = () => setPaused(motionPreference.matches)

    const resizeObserver = new ResizeObserver(resize)
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        syncAnimation()
      },
      { threshold: 0.05 }
    )

    resizeObserver.observe(container)
    intersectionObserver.observe(container)
    container.addEventListener("pointermove", onPointerMove, { passive: true })
    container.addEventListener("pointerleave", onPointerLeave)
    document.addEventListener("visibilitychange", syncAnimation)
    motionPreference.addEventListener("change", onMotionPreferenceChange)
    resize()
    setPaused(motionPreference.matches)

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      container.removeEventListener("pointermove", onPointerMove)
      container.removeEventListener("pointerleave", onPointerLeave)
      document.removeEventListener("visibilitychange", syncAnimation)
      motionPreference.removeEventListener("change", onMotionPreferenceChange)
      setPlayingRef.current = null
    }
  }, [])

  useEffect(() => {
    setPlayingRef.current?.(!paused)
  }, [paused])

  return (
    <div ref={containerRef} className="data-sculpture">
      <svg
        className="data-sculpture-fallback"
        viewBox="0 0 460 460"
        aria-hidden="true"
        focusable="false"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", visibility: ready ? "hidden" : "visible" }}
      >
        {FALLBACK.map((point, index) => (
          <circle
            key={index}
            cx={point.x.toFixed(2)}
            cy={point.y.toFixed(2)}
            r={point.radius.toFixed(2)}
            fill="#df5c37"
            opacity={point.opacity.toFixed(2)}
          />
        ))}
      </svg>
      <canvas
        ref={canvasRef}
        className="data-sculpture-canvas"
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
      <button
        type="button"
        className="art-control"
        aria-label={paused ? "Play artwork animation" : "Pause artwork animation"}
        onClick={() => setPaused((value) => !value)}
        style={{ visibility: ready ? "visible" : "hidden" }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          {paused ? <path d="M3 1.5 10 6 3 10.5Z" /> : <path d="M2.5 1.5h2v9h-2zm5 0h2v9h-2z" />}
        </svg>
        <span>{paused ? "Play" : "Pause"}</span>
      </button>
    </div>
  )
}

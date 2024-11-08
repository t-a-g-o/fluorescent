"use client";;
import * as React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

export const Dock = React.forwardRef(({ children, ...props }, ref) => {
  const [hovered, setHovered] = React.useState(false)
  const mouseX = useMotionValue(null)
  const scale = useTransform(mouseX, [-100, 0, 100], [0.8, 1, 0.8])

  return (
    <div
      ref={ref}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        mouseX.set(event.clientX - rect.left)
      }}
      onMouseLeave={() => {
        setHovered(false)
        mouseX.set(null)
      }}
      onMouseEnter={() => {
        setHovered(true)
      }}
      className="flex h-16 items-end gap-4 rounded-2xl bg-gray-800 px-4 pb-3"
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          style={{
            scale: scale,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
})
Dock.displayName = "Dock"

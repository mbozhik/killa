'use client'

import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

const SPEED = 100
const CIRCLE_SIZE = 100

export default function App() {
  const [x, setX] = useState(0)
  const [speedX, setSpeedX] = useState(SPEED)
  const [y, setY] = useState(0)
  const [speedY, setSpeedY] = useState(SPEED)

  useEffect(() => {
    const handleResize = () => {
      setX(Math.min(x, document.documentElement.clientWidth - CIRCLE_SIZE))
      setY(Math.min(y, document.documentElement.clientHeight - CIRCLE_SIZE))
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [x, y])

  return (
    <section className="fixed -z-50 inset-0 overflow-hidden">
      <div className="absolute">
        <motion.div
          className="s-24 bg-purple-500"
          animate={{x: x, y: y}}
          transition={{ease: 'linear'}}
          onAnimationComplete={() => {
            let nextX = x + speedX
            let nextY = y + speedY

            if (nextX >= document.documentElement.clientWidth - CIRCLE_SIZE || nextX <= 0) {
              nextX = Math.max(0, Math.min(nextX, document.documentElement.clientWidth - CIRCLE_SIZE))
              setSpeedX(-speedX)
            }

            if (nextY >= document.documentElement.clientHeight - CIRCLE_SIZE || nextY <= 0) {
              nextY = Math.max(0, Math.min(nextY, document.documentElement.clientHeight - CIRCLE_SIZE))
              setSpeedY(-speedY)
            }

            setX(nextX)
            setY(nextY)
          }}
        />
      </div>
    </section>
  )
}

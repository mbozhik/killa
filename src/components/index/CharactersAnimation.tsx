'use client'

import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

import ScrollImage from '../../assets/scroll_animation/2.png'

const scrollContent = {
  1: {src: ScrollImage, position: ''},
}

const SPEED = 75
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
      {Object.keys(scrollContent).map((scrollNumber) => (
        <motion.img
          key={scrollNumber}
          src={scrollContent[scrollNumber].src.src}
          alt={`image ${scrollNumber}`}
          className={`s-40 absolute opacity-25`}
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
      ))}
    </section>
  )
}

'use client'

import {isMobile} from '@/lib/utils'

import React, {useState, useRef} from 'react'
import {motion, useScroll, useMotionValueEvent} from 'framer-motion'

import ScrollImage1 from '../../assets/scroll_animation/1.png'
import ScrollImage2 from '../../assets/scroll_animation/2.png'
import ScrollImage3 from '../../assets/scroll_animation/3.png'

const scrollContent = {
  1: {src: ScrollImage1, position: {x: 0, y: 0}, speed: {x: 37.5, y: 37.5}},
  2: {src: ScrollImage2, position: {x: 100, y: 200}, speed: {x: -50, y: -37.5}},
  3: {src: ScrollImage3, position: {x: 300, y: 150}, speed: {x: 62.5, y: -50}},
}

const CIRCLE_SIZE = 100

export default function App() {
  const {scrollY} = useScroll()
  const [hidden, setHidden] = useState(false)

  const sectionRef = useRef(null)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 1100) {
      sectionRef.current.classList.remove('opacity-0')

      setHidden(false)
    } else {
      setHidden(true)
    }
  })

  const [scrollImages, setScrollImages] = useState(scrollContent)

  return (
    !isMobile && (
      <motion.section
        ref={sectionRef}
        data-section="characters-index"
        className="opacity-0 fixed -z-50 inset-0 overflow-hidden"
        variants={{
          visible: {y: 0, opacity: 100},
          hidden: {y: '-100%', opacity: 0},
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{duration: 0.75, ease: 'easeInOut'}}
      >
        {Object.keys(scrollImages).map((index) => (
          <motion.img
            key={index}
            className="s-40 xl:s-28 absolute opacity-25"
            alt={`image ${index}`}
            src={scrollImages[index].src.src}
            animate={{x: scrollImages[index].position.x, y: scrollImages[index].position.y}}
            transition={{ease: 'linear'}}
            onAnimationComplete={() => {
              setScrollImages((prevState) => {
                const newState = {...prevState}
                let nextX = newState[index].position.x + newState[index].speed.x
                let nextY = newState[index].position.y + newState[index].speed.y

                if (nextX >= document.documentElement.clientWidth - CIRCLE_SIZE || nextX <= 0) {
                  nextX = Math.max(0, Math.min(nextX, document.documentElement.clientWidth - CIRCLE_SIZE))
                  newState[index].speed.x = -newState[index].speed.x
                }

                if (nextY >= document.documentElement.clientHeight - CIRCLE_SIZE || nextY <= 0) {
                  nextY = Math.max(0, Math.min(nextY, document.documentElement.clientHeight - CIRCLE_SIZE))
                  newState[index].speed.y = -newState[index].speed.y
                }

                newState[index].position.x = nextX
                newState[index].position.y = nextY

                return newState
              })
            }}
          />
        ))}
      </motion.section>
    )
  )
}

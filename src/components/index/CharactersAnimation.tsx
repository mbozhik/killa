'use client'

import {isMobile} from '@bozzhik/is-mobile'

import React, {useState} from 'react'
import {motion} from 'framer-motion'

import ScrollImage1 from '../../assets/characters_animation/1.png'
import ScrollImage2 from '../../assets/characters_animation/2.png'
import ScrollImage3 from '../../assets/characters_animation/3.png'
import ScrollImage4 from '../../assets/characters_animation/4.png'
import ScrollImage5 from '../../assets/characters_animation/5.png'
import ScrollImage6 from '../../assets/characters_animation/6.png'
import ScrollImage7 from '../../assets/characters_animation/7.png'
import ScrollImage8 from '../../assets/characters_animation/8.png'
import ScrollImage9 from '../../assets/characters_animation/9.png'
import ScrollImage10 from '../../assets/characters_animation/10.png'
import ScrollImage11 from '../../assets/characters_animation/11.png'
import ScrollImage12 from '../../assets/characters_animation/12.png'
import ScrollImage13 from '../../assets/characters_animation/13.png'
import ScrollImage14 from '../../assets/characters_animation/14.png'
import ScrollImage15 from '../../assets/characters_animation/15.png'
import ScrollImage16 from '../../assets/characters_animation/16.png'
import ScrollImage17 from '../../assets/characters_animation/17.png'

const scrollContent = {
  1: {src: ScrollImage1, position: {x: 0, y: 0}, speed: {x: 52.5, y: 52.5}},
  2: {src: ScrollImage2, position: {x: 100, y: 200}, speed: {x: -70, y: -52.5}},
  3: {src: ScrollImage3, position: {x: 300, y: 150}, speed: {x: 87.5, y: -70}},
  4: {src: ScrollImage4, position: {x: 50, y: 300}, speed: {x: 35, y: 56}},
  5: {src: ScrollImage5, position: {x: 200, y: 100}, speed: {x: -42, y: 84}},
  6: {src: ScrollImage6, position: {x: 150, y: 250}, speed: {x: 56, y: -35}},
  7: {src: ScrollImage7, position: {x: 400, y: 200}, speed: {x: 49, y: 28}},
  8: {src: ScrollImage8, position: {x: 250, y: 350}, speed: {x: -63, y: -42}},
  9: {src: ScrollImage9, position: {x: 350, y: 50}, speed: {x: 28, y: -49}},
  10: {src: ScrollImage10, position: {x: 100, y: 400}, speed: {x: 70, y: 35}},
  11: {src: ScrollImage11, position: {x: 500, y: 300}, speed: {x: -84, y: -63}},
  12: {src: ScrollImage12, position: {x: 400, y: 100}, speed: {x: 63, y: 42}},
  13: {src: ScrollImage13, position: {x: 50, y: 200}, speed: {x: -35, y: 70}},
  14: {src: ScrollImage14, position: {x: 250, y: 150}, speed: {x: 56, y: -35}},
  15: {src: ScrollImage15, position: {x: 350, y: 250}, speed: {x: 28, y: -49}},
  16: {src: ScrollImage16, position: {x: 200, y: 50}, speed: {x: 63, y: 42}},
  17: {src: ScrollImage17, position: {x: 150, y: 100}, speed: {x: 28, y: -49}},
}

const CIRCLE_SIZE = 100

export default function App() {
  const [scrollImages, setScrollImages] = useState(scrollContent)

  return (
    !isMobile && (
      <section data-section="index-characters" className="fixed -z-50 inset-0 overflow-hidden">
        {Object.keys(scrollImages).map((index) => (
          <motion.div
            key={index}
            className="s-40 xl:s-28 absolute opacity-25"
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
          >
            <motion.img className={`${Number(index) % 2 !== 0 ? 'animate-rotate-1' : 'animate-rotate-2'}`} src={scrollImages[index].src.src} alt={`killa nft ${index}`} />
          </motion.div>
        ))}
      </section>
    )
  )
}

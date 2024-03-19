'use client'

import Image from 'next/image'
import {useState} from 'react'
import {motion, useScroll, useMotionValueEvent} from 'framer-motion'

import ScrollImage1 from '../../assets/scroll_animation/1.png'
import ScrollImage2 from '../../assets/scroll_animation/2.png'
import ScrollImage3 from '../../assets/scroll_animation/3.png'

const scrollContent = {
  1: {src: ScrollImage1, wrapperStyles: 'justify-start', size: 'w-44'},
  2: {src: ScrollImage2, wrapperStyles: 'justify-end', size: 'w-60'},
  3: {src: ScrollImage3, wrapperStyles: 'justify-start', size: 'w-60', wrapperTransform: '-mt-52 ml-14'},
}

export default function ScrollAnimation() {
  const {scrollY} = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 1250) {
      setHidden(false)
    } else {
      setHidden(true)
    }
  })

  return (
    <section data-section="scroll-index" className="fixed inset-0 w-[95%] mx-auto -z-50 grid grid-cols-2 place-content-center">
      {Object.keys(scrollContent).map((index) => (
        <motion.div
          variants={{
            visible: {y: 0, opacity: 100},
            hidden: {y: '-100%', opacity: 0},
          }}
          animate={hidden ? 'hidden' : 'visible'}
          transition={{duration: 0.75, ease: 'easeInOut'}}
          className={`grid ${scrollContent[index].wrapperStyles} ${scrollContent[index].wrapperTransform}`}
          key={index}
        >
          <Image className={`animate-swing-${index} ${scrollContent[index].size}`} src={scrollContent[index].src} alt={`image ${index + 1}`} />
        </motion.div>
      ))}
    </section>
  )
}

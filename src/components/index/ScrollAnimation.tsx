'use client'

import {isMobile} from '@/lib/utils'

import Image from 'next/image'
import {useState, useRef} from 'react'
import {motion, useScroll, useMotionValueEvent} from 'framer-motion'

import ScrollImage1 from '../../assets/scroll_animation/1.png'
import ScrollImage2 from '../../assets/scroll_animation/2.png'
import ScrollImage3 from '../../assets/scroll_animation/3.png'

const scrollContent = {
  1: {src: ScrollImage1, wrapperStyles: 'justify-start', size: 'w-44 xl:w-32'},
  2: {src: ScrollImage2, wrapperStyles: 'justify-end', size: 'w-60 xl:w-44'},
  3: {src: ScrollImage3, wrapperStyles: 'justify-start', size: 'w-60 xl:w-44', wrapperTransform: '-mt-52 xl:-mt-40 ml-14 xl:ml-10'},
}

export default function ScrollAnimation() {
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

  return (
    !isMobile && (
      <section ref={sectionRef} data-section="scroll-index" className="opacity-0 fixed inset-0 w-[95%] mx-auto -z-50 grid grid-cols-2 place-content-center duration-[750ms]">
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
  )
}

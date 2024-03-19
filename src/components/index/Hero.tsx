'use client'

import Image from 'next/image'

import React, {useRef, useState} from 'react'
import {motion} from 'framer-motion'

import backgroundHeroImage from '../../assets/hero_background.png'
import charactersHeroImage from '../../assets/hero_characters.png'
import mobileHeroImage from '../../assets/hero_mobile.png'

import {isMobile} from '@/lib/utils'

export default function Hero() {
  return !isMobile ? <DesktopHero /> : <MobileHero />
}

function DesktopHero() {
  const ROTATION_RANGE = 25
  const HALF_ROTATION_RANGE = ROTATION_RANGE / 2

  const ref = useRef(null)

  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE

    const rY = mouseX / width - HALF_ROTATION_RANGE
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1

    setRotateX(rX)
    setRotateY(rY)
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <section id="#hero" data-section="index-hero" className="grid w-screen h-screen place-items-center">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX,
          rotateY,
        }}
        className="relative w-[70%] sm:w-[250%] sm:pt-24 xs:w-[200%]"
      >
        <Image
          style={{
            transform: 'translateZ(100px)',
            transformStyle: 'preserve-3d',
          }}
          src={charactersHeroImage}
          className="absolute"
          alt=""
        />
        <Image
          style={{
            transform: 'translateZ(50px)',
            transformStyle: 'preserve-3d',
          }}
          src={backgroundHeroImage}
          className="relative z-5"
          alt=""
        />
      </motion.div>
    </section>
  )
}

function MobileHero() {
  return (
    <section id="#hero" data-section="hero-index" className="grid w-screen h-screen place-items-center">
      <div className="relative w-[70%] sm:w-[250%] sm:pt-24 xs:w-[200%]">
        <Image className="animate-hero-mobile" src={mobileHeroImage} alt="" />
      </div>
    </section>
  )
}

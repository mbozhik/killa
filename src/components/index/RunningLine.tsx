'use client'

import {isMobile} from '@bozzhik/is-mobile'
import Image from 'next/image'
import miniLogoImage from '%%/mini-logo.svg'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css'

const slides = Array.from({length: 7}, (_, index) => (
  <SwiperSlide key={index}>
    <div className="flex items-center gap-7 sm:gap-3">
      <Image src={miniLogoImage} alt="" className="object-contain s-16 sm:s-12" />
      <h1 className="text-nowrap text-5xl font-semibold uppercase xl:text-4xl sm:text-xl sm:leading-none text-custom-primary">Launching on SUI</h1>
    </div>
  </SwiperSlide>
))

export default function RunningLine({className}: {className?: string}) {
  const swiperProps = {
    speed: !isMobile ? 1250 : 1000,
    slidesPerView: !isMobile ? 3 : 2,
    spaceBetween: !isMobile ? 150 : 50,
    loop: true,
    autoplay: {delay: 0, disableOnInteraction: false},
    centeredSlides: !isMobile,
    modules: [Autoplay],
  }

  return (
    <Swiper {...swiperProps} data-section="running-line-index" className={`w-full h-auto z-50 ${className}`}>
      {slides}
    </Swiper>
  )
}

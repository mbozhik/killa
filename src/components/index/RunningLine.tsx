'use client'

import {isMobile} from '@bozzhik/is-mobile'

import Image from 'next/image'
import miniLogoImage from '%%/mini-logo.svg'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'

import 'swiper/css'
interface Props {
  className?: string
}

const slidesNumber = 7
const slides = Array.from({length: slidesNumber}, (_, index) => (
  <SwiperSlide key={index}>
    <div className="flex items-center gap-7 sm:gap-3">
      <Image src={miniLogoImage} alt="" className="object-contain s-16 sm:s-12" />
      <h1 className="text-5xl font-semibold uppercase xl:text-4xl sm:text-xl sm:leading-none text-custom-primary">Based on base</h1>
    </div>
  </SwiperSlide>
))

export default function RunningLine({className}: Props) {
  const swiperProps = {
    datasection: 'running-line-index',
    className: `w-full h-auto z-50 ${className}`,
    loop: true,
    autoplay: {delay: 0, disableOnInteraction: false},
    modules: [Autoplay],
  }

  return (
    <Swiper {...swiperProps} slidesPerView={isMobile ? 2 : 3} spaceBetween={isMobile ? 70 : 10} speed={isMobile ? 1250 : 2000} centeredSlides={!isMobile}>
      {slides}
    </Swiper>
  )
}

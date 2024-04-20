'use client'

import {isMobile} from '@bozzhik/is-mobile'

import Image from 'next/image'
import miniLogoImage from '%%/mini-logo.svg'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'

import 'swiper/css'

export default function RunningLine() {
  const slidesNumber = 7
  const className = 'mt-[15vh]'

  const slides = Array.from({length: slidesNumber}, (_, index) => (
    <SwiperSlide key={index}>
      <div className="flex items-center gap-7 sm:gap-3">
        <Image src={miniLogoImage} alt="" className="object-contain s-16 sm:s-12" />
        <h1 className="text-5xl font-semibold uppercase xl:text-4xl sm:text-xl sm:leading-none text-custom-primary">Based on base</h1>
      </div>
    </SwiperSlide>
  ))

  return !isMobile ? (
    <Swiper data-section="running-line-index" className={`w-full h-auto ${className}`} slidesPerView={3} centeredSlides={true} spaceBetween={30} speed={2000} loop={true} autoplay={{delay: 0, disableOnInteraction: false}} modules={[Autoplay]}>
      {slides}
    </Swiper>
  ) : (
    <Swiper data-section="running-line-index" className={`w-full h-auto ${className}`} slidesPerView={2} spaceBetween={70} speed={1250} loop={true} autoplay={{delay: 0, disableOnInteraction: false}} modules={[Autoplay]}>
      {slides}
    </Swiper>
  )
}

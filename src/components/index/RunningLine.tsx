'use client'

import Image from 'next/image'
import miniLogoImage from '../../assets/mini-logo.svg'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'

import 'swiper/css'

export default function RunningLine() {
  const slidesNumber = 7

  const slides = Array.from({length: slidesNumber}, (_, index) => (
    <SwiperSlide key={index}>
      <div className="flex items-center sm:flex-col gap-7 sm:gap-3">
        <Image src={miniLogoImage} alt="" className="object-contain s-16" />
        <h1 className="text-5xl font-semibold text-center uppercase xl:text-4xl sm:text-xl text-custom-primary">Based on base</h1>
      </div>
    </SwiperSlide>
  ))

  return (
    <Swiper className="w-full h-auto mt-[17vh]" slidesPerView={3} spaceBetween={30} speed={2000} loop={true} autoplay={{delay: 0, disableOnInteraction: false}} modules={[Autoplay]}>
      {slides}
    </Swiper>
  )
}

'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'

import 'swiper/css'

export default function RunningLine() {
  return (
    <Swiper className="w-[20%] mx-auto h-20" slidesPerView={3} spaceBetween={30} speed={1000} loop={true} autoplay={{delay: 0, disableOnInteraction: false}} modules={[Autoplay]}>
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
      <SwiperSlide>4</SwiperSlide>
      <SwiperSlide>5</SwiperSlide>
      <SwiperSlide>6</SwiperSlide>
      <SwiperSlide>7</SwiperSlide>
    </Swiper>
  )
}

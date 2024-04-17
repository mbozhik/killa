'use client'

import {useState, useEffect} from 'react'

import Image from 'next/image'

import loaderImage from '../../assets/images/loader.gif'
import RunningLine from './RunningLine'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [opacity, setOpacity] = useState(true)

  useEffect(() => {
    const timerOpacity = setTimeout(() => {
      setOpacity(false)
    }, 2500)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2800)

    return () => {
      clearTimeout(timerOpacity)
      clearTimeout(timer)
    }
  }, [])

  const loaderStateClasses = `${!opacity && 'opacity-0'} ${!isLoading && 'hidden'}`

  return (
    <section data-section="LOADER" className={`absolute inset-0 z-50 grid w-screen h-screen bg-custom-f3 place-items-center duration-300 ${loaderStateClasses}`}>
      <div className="absolute inset-0 grid place-items-center">
        <Image src={loaderImage} className="animate-custom-ping w-[25%] sm:w-[55%]" alt="" />
      </div>

      <div className="absolute inset-0 sm:top-[13vh] grid place-items-center sm:place-content-start -z-10">
        <RunningLine />
      </div>
    </section>
  )
}

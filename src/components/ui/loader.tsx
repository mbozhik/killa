'use client'

import {useState, useEffect} from 'react'
import RunningLine from '#/index/RunningLine'

export default function Loader() {
  const [opacity, setOpacity] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timerOpacity = setTimeout(() => {
      setOpacity(false)
    }, 2000)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearTimeout(timerOpacity)
      clearTimeout(timer)
    }
  }, [])

  const loaderStateClasses = `${!opacity && 'opacity-0'} ${!isLoading && 'hidden'}`

  return (
    <section data-section="LOADER" className={`absolute inset-0 z-50 grid w-screen h-screen bg-custom-f3 place-items-center duration-300 ${loaderStateClasses}`}>
      <div className="absolute inset-0 grid place-items-center -z-10">
        <RunningLine />
      </div>
    </section>
  )
}

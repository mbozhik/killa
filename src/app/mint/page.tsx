import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import {NumberInput} from '@/components/ui/number-input'

import baseLogo from '../../assets/images/logo.png'
import charactersAnimation from '../../assets/images/loader.gif'

export default function MintPage() {
  const customHeight = 'h-[100svh] h-[100vh] sm:h-auto'
  const customPaddingBottom = 'sm:!mb-[10svh] sm:mb-[10vh]'
  const buttonStyles = 'px-8 py-2.5 text-white sm:text-sm sm:font-normal tracking-normal duration-200 rounded-md w-fit bg-custom-primary hover:bg-custom-primary/85'

  return (
    <section className={`grid justify-end items-center w-[70vw] sm:w-screen mx-auto sm:p-5 ${customPaddingBottom} ${customHeight}`}>
      <div className="justify-self-end grid grid-cols-2 sm:grid-cols-1 gap-10 items-center justify-center w-[50%] xl:w-[65%] sm:w-full p-3 sm:py-5 sm:gap-7 bg-white/50 backdrop-blur-sm rounded-xl">
        <div className="flex flex-col justify-center h-full gap-5 pl-2 sm:pl-0">
          <Image className="w-[40%]" src={baseLogo} alt="" />

          <div className="space-y-3 text-lg xl:text-base">
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro commodi veritatis omnis, quod?</p>
          </div>

          <Link href="/" target="_blank" className={cn(buttonStyles, 'sm:w-full sm:text-center')}>
            Learn More
          </Link>
        </div>

        <div className="flex flex-col w-full gap-5">
          <Image className="rounded-md" src={charactersAnimation} alt="" />

          <div className="space-y-3">
            <p className="text-lg">Select mint amount right now</p>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:gap-3">
              <NumberInput />
              <button className={cn(buttonStyles, 'w-full px-2')}>Connect Wallet</button>
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute sm:fixed inset-0 w-screen ${customHeight} overflow-hidden -z-10`}>
        <video className="object-cover w-full h-full" autoPlay muted loop>
          <source src="/mint-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}

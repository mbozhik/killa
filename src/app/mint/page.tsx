import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import {NumberInput} from '@/components/ui/number-input'

import baseLogo from '../../assets/images/logo.png'
import charactersAnimation from '../../assets/images/loader.gif'

export default function MintPage() {
  const mobileHeight = '!h-[100svh] h-[100vh]'
  const buttonStyles = 'px-8 py-2.5 text-white tracking-normal duration-200 rounded-md w-fit bg-custom-primary hover:bg-custom-primary/85'

  return (
    <section className={`grid place-items-center w-screen ${mobileHeight}`}>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-14 items-center justify-center w-[50%] p-10 bg-white/50 backdrop-blur-sm rounded-xl sm:gap-7 xl:py-14 sm:px-5 sm:pt-5 sm:pb-7">
        <div className="flex flex-col justify-center h-full gap-7">
          <Image className="w-[40%]" src={baseLogo} alt="" />

          <div className="space-y-3 text-lg">
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam porro commodi veritatis omnis, quod, inventore tempore dignissimos?</p>
          </div>

          <Link href="/" target="_blank" className={cn(buttonStyles, '')}>
            Learn More
          </Link>
        </div>

        <div className="flex flex-col w-full gap-7">
          <Image className="rounded-md" src={charactersAnimation} alt="" />

          <div className="space-y-3">
            <p className="text-lg">Connect your wallet and select mint amount</p>

            <div className="grid grid-cols-2 gap-2">
              <NumberInput />
              <button className={cn(buttonStyles, 'w-full')}>Connect Wallet</button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden -z-10">
        <video autoPlay muted loop>
          <source src="/mint-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}

import Image from 'next/image'

import HeroImage from '../../assets/hero.png'

export default function Hero() {
  return (
    <section data-section="index-hero" className="grid w-screen h-screen place-items-center">
      <div className="-mt-7 ml-5 h-[75%]">
        <Image quality={100} className="object-contain w-full h-full" src={HeroImage} priority alt="" />
      </div>
    </section>
  )
}

import Image from 'next/image'
import baseLogo from '../../assets/images/base.svg'

export default function Base() {
  return (
    <section data-section="base-index" className="mt-[15vh] mb-[7vh]">
      <div className="flex sm:flex-col sm:gap-7 justify-between items-center px-16 py-20 xl:py-14 sm:px-5 sm:pt-5 sm:pb-7 w-[60%] mx-auto sm:w-[90%] bg-white/40 rounded-xl backdrop-blur-md">
        <div className="flex flex-col justify-between gap-3 sm:gap-5 sm:text-center sm:items-center sm:w-full">
          <mark className="px-3 py-1 sm:py-1.5 text-xl text-white uppercase sm:text-lg w-fit bg-custom-primary sm:w-full sm:rounded-md">Blockchain</mark>

          <h1 className="text-8xl xl:text-7xl sm:text-5xl font-semibold tracking-[-0.015em] uppercase">
            Based <br />
            on Base
          </h1>
        </div>

        <Image className="w-[25%] xl:w-[22%] sm:w-[50%] animate-rotate-base" src={baseLogo} alt="" />
      </div>
    </section>
  )
}

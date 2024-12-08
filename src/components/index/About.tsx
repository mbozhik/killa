import Image from 'next/image'

import AboutGridImage1 from '%%/about/1.jpg'
import AboutGridImage2 from '%%/about/2.jpg'
import AboutGridImage3 from '%%/about/3.jpg'
import AboutGridImage4 from '%%/about/4.jpg'

export default function About() {
  const aboutContent = {
    imagesStyles: 'w-[25vh] sm:w-[22.5vh] rounded-2xl border-8 sm:border-2 border-white bg-custom-f3 hover:rotate-[0deg] hover:scale-125 duration-300 sm:scale-100 sm:translate-x-0 sm:rotate-0',
    images: [
      {image: AboutGridImage1, styles: 'scale-125 rotate-[5deg]'},
      {image: AboutGridImage2, styles: 'translate-y-1/4'},
      {image: AboutGridImage3, styles: 'scale-125 rotate-[-10deg] -translate-y-1/4 -translate-x-1/6 sm:translate-y-0'},
      {image: AboutGridImage4, styles: '-translate-x-1/4  rotate-[2.5deg] sm:translate-y-1/4'},
    ],
    text: {
      title: 'Collection',
      description: ["We welcome you to SUI’s most elite alliance and creative playground. The Killa Club will be home to 2,222 retro, soulful bunnies running a muck on SUI. Our goal and core vision at Killa Club is to make blockchain and NFT's fun again, while simultaneously pushing the limits of your typical NFT collection.", 'Nestled on Web3’s fastest growing blockchain, we aim to establish and build a bustling community of on-chain misfits at Killa Club. Members of the Hunter’s Circle will be at the forefront of every innovation and development across our decentralized abode on SUI - Beautiful art first - cool sh*t later.'],
    },
  }

  return (
    <section id="about" data-section="about-us-index" className="grid w-screen mt-[15vh] sm:mt-[7vh] h-auto place-items-center">
      <div className="flex flex-col justify-center gap-10">
        <div className="flex gap-2 mx-auto sm:gap-3 pl-28 sm:pl-0 sm:flex-wrap sm:justify-center">
          {aboutContent.images.map((imageData, index) => (
            <Image key={index} src={imageData.image} className={`${aboutContent.imagesStyles} ${imageData.styles}`} alt={`Image ${index + 1}`} />
          ))}
        </div>

        <h1 className="uppercase mt-24 sm:mt-10 text-9xl xl:text-7xl sm:text-4xl w-[70%] sm:w-full sm:text-left sm:ml-5 mx-auto leading-[0.95] font-black text-center text-custom-primary">{aboutContent.text.title}</h1>

        <div className="w-[60%] sm:w-[85%] sm:text-left sm:-mt-5 sm:ml-5 mx-auto space-y-3 sm:space-y-5 text-2xl xl:text-xl sm:text-base xl:tracking-normal text-justify">
          {aboutContent.text.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

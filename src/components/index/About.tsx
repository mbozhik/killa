import Image from 'next/image'

import AboutGridImage1 from '../../assets/about/1.png'
import AboutGridImage2 from '../../assets/about/2.png'
import AboutGridImage3 from '../../assets/about/3.png'
import AboutGridImage4 from '../../assets/about/4.png'

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
      title: 'ABOUT OUR NFT COLLECTION',
      description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.'],
    },
  }

  return (
    <section id="about" data-section="about-us-main" className="grid w-screen mt-[15vh] sm:mt-[7vh] h-auto place-items-center">
      <div className="flex flex-col justify-center gap-10">
        <div className="flex gap-2 mx-auto sm:gap-3 pl-28 sm:pl-0 sm:flex-wrap sm:justify-center">
          {aboutContent.images.map((imageData, index) => (
            <Image key={index} src={imageData.image} className={`${aboutContent.imagesStyles} ${imageData.styles}`} alt={`Image ${index + 1}`} />
          ))}
        </div>

        <h1 className="mt-24 sm:mt-10 text-9xl xl:text-7xl sm:text-4xl w-[70%] sm:w-full sm:text-left sm:ml-5 mx-auto leading-[0.95] font-black text-center text-custom-primary">{aboutContent.text.title}</h1>

        <div className="w-[60%] sm:w-[85%] sm:text-left sm:-mt-5 sm:ml-5 mx-auto space-y-3 sm:space-y-5 text-2xl xl:text-xl sm:text-lg xl:tracking-normal text-justify">
          {aboutContent.text.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

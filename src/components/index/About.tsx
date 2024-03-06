import Image from 'next/image'

import AboutGridImage1 from '../../assets/about/1.png'
import AboutGridImage2 from '../../assets/about/2.png'
import AboutGridImage3 from '../../assets/about/3.png'
import AboutGridImage4 from '../../assets/about/4.png'

export default function About() {
  const aboutContent = {
    imagesStyles: 'w-[25vh] rounded-2xl border-8 border-white bg-custom-f3 hover:rotate-[0deg] hover:scale-125 duration-300',
    images: [
      {image: AboutGridImage1, styles: 'scale-125 rotate-[5deg]'},
      {image: AboutGridImage2, styles: 'translate-y-1/4'},
      {image: AboutGridImage3, styles: 'scale-125 rotate-[-10deg] -translate-y-1/4 -translate-x-1/6'},
      {image: AboutGridImage4, styles: '-translate-x-1/4  rotate-[2.5deg]'},
    ],
    text: {
      title: 'ABOUT OUR NFT COLLECTION',
      description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.'],
    },
  }

  return (
    <section data-section="about-us-main" className="grid w-screen mt-[15vh] h-auto place-items-center">
      <div className="flex flex-col justify-center gap-10">
        <div className="flex gap-2 mx-auto pl-28">
          {aboutContent.images.map((imageData, index) => (
            <Image key={index} src={imageData.image} className={`${aboutContent.imagesStyles} ${imageData.styles}`} alt={`Image ${index + 1}`} />
          ))}
        </div>

        <h1 className="mt-24 text-[125px] w-[70%] mx-auto leading-[0.95] font-black text-center text-custom-primary">{aboutContent.text.title}</h1>

        <div className="w-[60%] font-medium mx-auto space-y-3 text-2xl text-justify">
          {aboutContent.text.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

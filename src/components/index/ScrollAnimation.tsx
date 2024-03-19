'use client'

import {motion, useScroll} from 'framer-motion'
import Image from 'next/image'

import ScrollImage1 from '../../assets/scroll_animation/1.png'
import ScrollImage2 from '../../assets/scroll_animation/2.png'
import ScrollImage3 from '../../assets/scroll_animation/3.png'

export default function ScrollAnimation() {
  const aboutContent = {
    imagesStyles: 'w-[70%] absolute inset-0 mx-auto',
    images: [
      {image: ScrollImage1, styles: 'absolute inset-0 mx-auto'},
      {image: ScrollImage2, styles: 'absolute inset-0 mx-auto'},
      {image: ScrollImage3, styles: 'absolute inset-0 mx-auto'},
    ],
  }

  const {scrollYProgress} = useScroll()

  return (
    <section data-section="scroll-index" className="fixed inset-0 w-full -z-50">
      {aboutContent.images.map((imageData, index) => (
        <motion.div key={index} className={aboutContent.imagesStyles} style={{opacity: scrollYProgress}}>
          <Image src={imageData.image} alt={`Image ${index + 1}`} />
        </motion.div>
      ))}
    </section>
  )
}

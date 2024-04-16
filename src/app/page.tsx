import Loader from '@/components/index/Loader'
import Hero from '@/components/index/Hero'
import CharactersAnimation from '@/components/index/CharactersAnimation'
import About from '@/components/index/About'
import Faq from '@/components/index/Faq'
import RunningLine from '@/components/index/RunningLine'
import Footer from '@/components/index/Footer'

export default function Index() {
  return (
    <>
      <Loader />
      <Hero />
      <CharactersAnimation />
      <About />
      <RunningLine classes="mt-[17vh]" />
      <Faq />
      <Footer />
    </>
  )
}

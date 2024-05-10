import Header from '@/components/Header/Header'
import Hero from '@/components/index/Hero'
import CharactersAnimation from '@/components/index/CharactersAnimation'
import About from '@/components/index/About'
import Faq from '@/components/index/Faq'
import RunningLine from '@/components/index/RunningLine'
import Footer from '@/components/index/Footer'

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <CharactersAnimation />
      <About />
      <RunningLine className="mt-[15vh]" />
      <Faq />
      <Footer />
    </>
  )
}

import Header from '@/components/Header/Header'
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
      <Header />
      {process.env.NODE_ENV === 'production' && <Loader />}
      <Hero />
      <CharactersAnimation />
      <About />
      <RunningLine />
      <Faq />
      <Footer />
    </>
  )
}

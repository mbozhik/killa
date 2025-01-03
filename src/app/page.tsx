import Header from '#/Header/Header'
import Hero from '#/index/Hero'
import CharactersAnimation from '#/index/CharactersAnimation'
import About from '#/index/About'
import Manifesto from '#/index/Manifesto'
import RunningLine from '#/index/RunningLine'
import Faq from '#/index/Faq'
import Footer from '#/index/Footer'

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <CharactersAnimation />

      <About />
      <Manifesto />
      <RunningLine className="mt-[15vh]" />
      <Faq />

      {/* <Launch /> */}

      <Footer />
    </>
  )
}

import Header from '#/Header/Header'
import Hero from '#/index/Hero'
import CharactersAnimation from '#/index/CharactersAnimation'
import About from '#/index/About'
import RunningLine from '#/index/RunningLine'
import Faq from '#/index/Faq'

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <CharactersAnimation />

      <About />
      <RunningLine className="mt-[15vh]" />
      <Faq />

      {/* 
      <Launch />
      
      <Footer /> */}
    </>
  )
}

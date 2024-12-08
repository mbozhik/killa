import Header from '#/Header/Header'
import Hero from '#/index/Hero'
import CharactersAnimation from '#/index/CharactersAnimation'
import About from '#/index/About'

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <CharactersAnimation />

      <About />

      {/* 
      <Launch />
      <About />
      <RunningLine className="mt-[15vh]" />
      <Faq />
      <Footer /> */}
    </>
  )
}

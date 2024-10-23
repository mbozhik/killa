import Header from '@/components/Header/Header'
import Hero from '@/components/index/Hero'
import CharactersAnimation from '@/components/index/CharactersAnimation'
import Launch from '@/components/index/Launch'

export default function Index() {
  return (
    <>
      <Header />
      <Hero />
      <CharactersAnimation />

      {/* 
      <Launch />
      <About />
      <RunningLine className="mt-[15vh]" />
      <Faq />
      <Footer /> */}
    </>
  )
}

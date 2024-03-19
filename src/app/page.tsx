import Hero from '@/components/index/Hero'
import ScrollAnimation from '@/components/index/ScrollAnimation'
import About from '@/components/index/About'
import Faq from '@/components/index/Faq'

export default function Index() {
  return (
    <main className="sm:overflow-x-hidden">
      <Hero />
      <ScrollAnimation />
      <About />
      <Faq />
    </main>
  )
}

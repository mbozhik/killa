import Hero from '@/components/index/Hero'
import About from '@/components/index/About'
import Faq from '@/components/index/Faq'

export default function Index() {
  return (
    <main className="sm:overflow-x-hidden">
      <Hero />
      <About />
      <Faq />
    </main>
  )
}

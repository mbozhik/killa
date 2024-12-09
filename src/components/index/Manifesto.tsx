import {cn} from '@/lib/utils'
import Link from 'next/link'

export default function Manifesto() {
  const link = 'https://killa-club-manifesto.gitbook.io/killaclub'

  return (
    <section id="manifesto" className="w-[59.5%] mx-auto mt-14">
      <Link className={cn('block text-center bg-custom-primary text-white py-2.5 rounded-lg uppercase text-xl w-full', 'animate-buttonheartbeat')} href={link} target="_blank">
        Manifesto
      </Link>
    </section>
  )
}

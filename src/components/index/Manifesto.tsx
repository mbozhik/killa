import Link from 'next/link'

export default function Manifesto() {
  const link = 'https://killa-club-manifesto.gitbook.io/killaclub'

  return (
    <section id="manifesto" className="w-[59.5%] mx-auto mt-14">
      <Link className="block text-center bg-custom-primary text-white py-2.5 rounded-lg uppercase text-xl w-full" href={link} target="_blank">
        Manifesto
      </Link>
    </section>
  )
}

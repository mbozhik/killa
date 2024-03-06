import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-[70%] mx-auto flex justify-between items-center">
      <h1 className="leading-none">
        KILLA <br /> CLUB
      </h1>
      <nav className="flex gap-2">
        <Link href="/">HOME</Link>
        <Link href="/about-us/">ABOUT US</Link>
        <Link href="/faq/">FAQ</Link>
      </nav>
    </header>
  )
}

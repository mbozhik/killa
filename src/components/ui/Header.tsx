import Link from 'next/link'

export default function Header() {
  const linkHoverStyles = 'duration-200 hover:opacity-80'

  const linkData = [
    {href: '/', text: 'HOME'},
    {href: '/about-us/', text: 'ABOUT US'},
    {href: '/faq/', text: 'FAQ'},
  ]

  return (
    <header className="absolute w-screen top-10">
      <div className="w-[75%] mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-black leading-none">
          KILLA <br /> CLUB.
        </h1>
        <nav className="flex gap-5 text-xl font-semibold tracking-tight">
          {linkData.map((link, index) => (
            <Link key={index} className={linkHoverStyles} href={link.href}>
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

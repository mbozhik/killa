import Image from 'next/image'
import Link from 'next/link'
import HeaderSocials from './HeaderSocials'

import logoImage from '../../../assets/logo.png'

export const navElemStyles = 'text-xl font-medium tracking-tight sm:text-lg'

export default function Header() {
  const linkData = [
    {href: '/#about', text: 'About us'},
    {href: '/#faq', text: 'Faq'},
  ]

  return (
    <header className="absolute z-50 w-screen top-10 sm:top-5">
      <div className="flex sm:flex-col sm:gap-5 items-center justify-between w-[75%] sm:w-full mx-auto">
        <Link href="/" className="w-36 sm:w-28">
          <Image quality={100} src={logoImage} alt="" className="object-contain s-full" />
        </Link>

        <nav className={`flex gap-5 sm:justify-around sm:w-[90%] ${navElemStyles}`}>
          {linkData.map((link, index) => (
            <Link key={index} className="uppercase duration-200 hover:opacity-80" href={link.href}>
              {link.text}
            </Link>
          ))}

          <HeaderSocials />
        </nav>
      </div>
    </header>
  )
}

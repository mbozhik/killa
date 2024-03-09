import Image from 'next/image'
import Link from 'next/link'

import logoImage from '../../../assets/logo.png'
import HeaderSocials from './HeaderSocials'

export const linkHoverStyles = 'duration-200 hover:opacity-80'

export default function Header() {
  const linkData = [
    {href: '#about', text: 'ABOUT US'},
    {href: '#faq', text: 'FAQ'},
  ]

  return (
    <header className="absolute w-screen top-10 sm:top-5 z-50">
      <div className="flex sm:flex-col sm:gap-5 items-center justify-between w-[75%] sm:w-full mx-auto">
        <div className="w-36 sm:w-28">
          <Image quality={100} src={logoImage} alt="" className="object-contain s-full" />
        </div>

        <nav className="flex gap-5 text-xl font-semibold tracking-tight sm:justify-around sm:text-lg sm:w-[90%]">
          {linkData.map((link, index) => (
            <Link key={index} className={linkHoverStyles} href={link.href}>
              {link.text}
            </Link>
          ))}

          <HeaderSocials />
        </nav>
      </div>
    </header>
  )
}

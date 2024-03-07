import Image from 'next/image'
import Link from 'next/link'

import logoImage from '../../assets/logo.png'
import HeaderSocials from './HeaderSocials'

export const linkHoverStyles = 'duration-200 hover:opacity-80'

export default function Header() {
  const linkData = [
    {href: '#about', text: 'ABOUT US'},
    {href: '#faq', text: 'FAQ'},
  ]

  return (
    <header className="absolute w-screen top-10">
      <div className="flex items-center justify-between w-[75%] mx-auto">
        <div className="w-36">
          <Image quality={100} src={logoImage} alt="" className="object-contain s-full" />
        </div>

        <nav className="flex gap-5 text-xl font-semibold tracking-tight">
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

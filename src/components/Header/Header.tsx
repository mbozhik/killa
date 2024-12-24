import logoImage from '%%/logo.png'
import XLogo from '%%/header/x.svg'
import DiscordLogo from '%%/header/discord.svg'

import Image from 'next/image'
import Link from 'next/link'

export const linkClasses = 'text-xl font-medium tracking-tight sm:text-lg uppercase duration-200 hover:opacity-70'

export default function Header() {
  const linkData = {
    nav: [
      {href: '#about', text: 'Collection'},
      {href: '#manifesto', text: 'Manifesto'},
      {href: '#faq', text: 'Faq'},
    ],
    socials: [
      {href: 'https://x.com/killaclubsui', logo: XLogo},
      {href: 'https://discord.gg/killaclub', logo: DiscordLogo},
    ],
  }

  return (
    <header className="absolute z-20 w-screen top-10 sm:top-5">
      <div className="flex sm:flex-col sm:gap-3 items-center justify-between w-[75%] sm:w-full mx-auto">
        <div className="flex justify-between items-center sm:w-[90%]">
          <Link href="/" className="w-36 sm:w-20">
            <Image quality={100} src={logoImage} alt="" className="object-contain s-full" />
          </Link>

          <div className="hidden sm:flex gap-2 items-center">
            {linkData.socials.map((link, index) => (
              <Link href={link.href} className="flex gap-1.5 items-center group" key={index}>
                <Image quality={100} src={link.logo} className="group-hover:opacity-70 duration-200 object-contain s-6" alt="Socials Killa Club" />
              </Link>
            ))}
          </div>
        </div>

        <nav className="flex sm:flex-wrap items-center gap-8 sam-ga sm:justify-around sm:w-[95%]">
          <div className="space-x-4">
            {linkData.nav.map((link, index) => (
              <Link key={index} className={linkClasses} href={link.href}>
                {link.text}
              </Link>
            ))}
          </div>

          <div className="sm:hidden flex gap-2 items-center">
            {linkData.socials.map((link, index) => (
              <Link href={link.href} className="flex gap-1.5 items-center group" key={index}>
                <Image quality={100} src={link.logo} className="group-hover:opacity-70 duration-200 object-contain s-6" alt="Socials Killa Club" />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

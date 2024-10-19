import {cn} from '@/lib/utils'

import Image from 'next/image'
import Link from 'next/link'

import HeaderSocials from './HeaderSocials'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '#/ui/tooltip'

import logoImage from '%%/logo.png'
import logoOpenSea from '%%/header/open_sea.svg'

export const linkClasses = 'text-xl font-medium tracking-tight sm:text-lg uppercase duration-200 hover:opacity-70'

export default function Header() {
  const linkData = [
    {href: '#about', text: 'About'},
    {href: '#faq', text: 'Faq'},
    {href: '#', text: 'OpenSea', logo: logoOpenSea},
  ]

  return (
    <header className="absolute z-20 w-screen top-10 sm:top-5">
      <div className="flex sm:flex-col sm:gap-5 items-center justify-between w-[75%] sm:w-full mx-auto">
        <Link href="/" className="w-36 sm:w-28">
          <Image quality={100} src={logoImage} alt="" className="object-contain s-full" />
        </Link>

        {/* <nav className="flex gap-5 sm:justify-around sm:w-[90%]">
          <h1 className={cn(linkClasses, 'animate-pulse')}>Coming soon..</h1>

          {linkData.slice(0, 2).map((link, index) => (
            <Link key={index} className={linkClasses} href={link.href}>
              {link.text}
            </Link>
          ))}
          <HeaderSocials />
          {linkData.slice(2, 3).map((link, index) => (
            <div className="flex gap-1.5 items-center" key={index}>
              <Image quality={100} src={link.logo} alt="" className="object-contain s-5" />

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link className={linkClasses} href={link.href}>
                      {link.text}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Coming soon...</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </nav> */}
      </div>
    </header>
  )
}

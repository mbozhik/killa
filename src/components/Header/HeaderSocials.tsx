import Image from 'next/image'
import Link from 'next/link'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '#/ui/dropdown-menu'

import xLogo from '%%/socials/x.svg'
// import instLogo from '%%/socials/inst.svg'
import discordLogo from '%%/socials/discord.svg'

import {linkClasses} from './Header'

export default function HeaderSocials() {
  const socialsData = [
    {title: 'Twitter', logo: xLogo, link: 'https://twitter.com/test'},
    // {title: 'Instagram', logo: instLogo, link: 'https://instagram.com/test'},
    {title: 'Discord', logo: discordLogo, link: '/discord/'},
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`border-none outline-none ${linkClasses}`}>SOCIALS</DropdownMenuTrigger>
      <DropdownMenuContent className="sm:mt-1 sm:mr-2">
        {socialsData.map((social, index) => (
          <Link key={index} target="_blank" href={social.link}>
            <DropdownMenuItem className="flex gap-2">
              <Image className="w-5" quality={100} src={social.logo} alt="" />
              {social.title}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'

import xLogo from '../../../assets/socials/x.svg'
import instLogo from '../../../assets/socials/inst.svg'
import discordLogo from '../../../assets/socials/discord.svg'

import {navElemStyles} from './Header'

export default function HeaderSocials() {
  const socialsData = [
    {title: 'Twitter', logo: xLogo, link: 'https://twitter.com/test'},
    {title: 'Instagram', logo: instLogo, link: 'https://instagram.com/test'},
    {title: 'Discord', logo: discordLogo, link: '/discord/'},
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`duration-200 border-none outline-none hover:opacity-80 ${navElemStyles}`}>SOCIALS</DropdownMenuTrigger>
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

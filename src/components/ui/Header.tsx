import Image from 'next/image'

import logoImage from '../../assets/logo.png'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header className="absolute w-screen top-10">
      <div className="flex items-center justify-between w-[75%] mx-auto">
        <div className="w-36">
          <Image quality={100} src={logoImage} alt="" className="object-contain s-full" />
        </div>

        <HeaderSocials />
      </div>
    </header>
  )
}

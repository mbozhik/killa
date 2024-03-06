import Image from 'next/image'
import Link from 'next/link'

import logoImage from '../../assets/logo.png'

export default function Header() {
  return (
    <header className="absolute w-screen top-10">
      <div className="flex items-center justify-between w-[75%] mx-auto">
        <div className="w-36">
          <Image quality={100} src={logoImage} alt="" className="object-contain s-full" />
        </div>
        <h1 className="text-xl font-semibold tracking-tight">Socials</h1>
      </div>
    </header>
  )
}

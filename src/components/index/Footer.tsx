import Link from 'next/link'

const EMAIL = 'killaclubinc@gmail.com'

export default function Footer() {
  return (
    <footer className="w-[90%] mx-auto">
      <hr className=" block border-custom-primary border-[1.5px]" />
      <div className="flex justify-between mt-2 mb-3 text-lg tracking-normal uppercase sm:my-3 sm:items-center sm:gap-1 sm:flex-col xl:text-sm text-custom-primary">
        <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
        <span>©️ ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  )
}

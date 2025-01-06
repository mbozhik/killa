import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-[55%] sm:w-[97%] mx-auto h-auto">
      <div className="flex justify-between mt-3 mb-4 text-lg tracking-normal uppercase sm:my-3 sm:items-center sm:gap-0 sm:flex-col xl:text-sm text-custom-primary">
        <div className="flex gap-1.5">
          <span>
            ©️ 2024 <em className="underline not-italic underline-offset-[1.5px]">Killa Club Inc</em>.
          </span>
          <span>All Rights Reserved.</span>
        </div>

        <Link className="hover:underline hover:underline-offset-[1.5px]" href="mailto:killaclubinc@gmail.com" target="_blank">
          <span>killaclubinc@gmail.com</span>
        </Link>
      </div>
    </footer>
  )
}

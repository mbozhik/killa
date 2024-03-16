import Link from 'next/link'

export default function Index() {
  return (
    <main className="sm:overflow-x-hidden">
      <section className="grid w-screen h-screen place-items-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl uppercase animate-pulse">Coming soon..</h1>
          <Link href="/" className="text-sm underline hover:no-underline">
            Back to main page
          </Link>
        </div>
      </section>
    </main>
  )
}

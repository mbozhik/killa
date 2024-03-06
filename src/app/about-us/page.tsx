export default function AboutUs() {
  const aboutContent = {
    text: {
      title: 'ABOUT OUR NFT COLLECTION',
      description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.'],
    },
  }

  return (
    <main className="">
      <section data-section="aboutus-main" className="grid w-screen h-screen place-items-center">
        <div className="flex flex-col justify-center gap-10">
          <h1 className="text-4xl font-black text-center text-custom-primary">{aboutContent.text.title}</h1>

          <div className="w-[45%] mx-auto space-y-3 text-xl text-justify">
            {aboutContent.text.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

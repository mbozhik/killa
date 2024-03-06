export default function FAQ() {
  const faqContent = {
    text: {
      title: 'FAQ',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    },
  }

  return (
    <main className="">
      <section data-section="faq-main" className="grid w-screen h-screen place-items-center">
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-black text-center text-custom-primary">{faqContent.text.title}</h1>

          <div className="w-[60%] font-medium mx-auto text-xl text-center">{faqContent.text.description}</div>
        </div>
      </section>
    </main>
  )
}

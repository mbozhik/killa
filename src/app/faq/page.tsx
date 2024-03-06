import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/Accordion'

export default function FAQ() {
  const faqContent = {
    text: {
      title: 'FAQ',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    },
    accordionData: [
      {
        id: 'item-1',
        question: 'Is it accessible?',
        answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
      {
        id: 'item-2',
        question: 'Is it styled?',
        answer: 'Yes. It comes with default styles that matches the other components aesthetic.',
      },
      {
        id: 'item-3',
        question: 'Is it animated?',
        answer: 'Yes. Its animated by default, but you can disable it if you prefer.',
      },
    ],
  }

  return (
    <main className="pt-20">
      <section data-section="faq-main" className="grid w-screen mt-[15vh] h-auto place-items-center">
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-[125px] leading-none font-black text-center text-custom-primary">{faqContent.text.title}</h1>

          <div className="w-[60%] font-medium mx-auto text-xl text-center">{faqContent.text.description}</div>

          <Accordion type="multiple" className="flex flex-col gap-3 mt-5">
            {faqContent.accordionData.map((item, index) => (
              <AccordionItem key={index} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  )
}

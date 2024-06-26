import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'

export default function Faq() {
  const faqContent = {
    text: {
      title: 'FAQ',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem </br> accusantium doloremque laudantium, totam rem aperiam.',
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
    <section id="faq" data-section="faq-index" className="grid mt-[15vh] mb-[25vh] w-[60%] sm:w-[95%] mx-auto h-auto place-items-center">
      <div className="flex flex-col justify-center w-full gap-5">
        <h1 className="font-black leading-none text-center sm:text-left sm:ml-5 text-9xl xl:text-7xl sm:text-4xl text-custom-primary">{faqContent.text.title}</h1>

        <div className="text-2xl text-center sm:text-left sm:ml-5 xl:text-xl sm:text-base xl:tracking-normal" dangerouslySetInnerHTML={{__html: faqContent.text.description}}></div>

        <Accordion type="multiple" className="flex flex-col w-full gap-3 mx-auto mt-5">
          {faqContent.accordionData.map((item, index) => (
            <AccordionItem value={item.id} key={index}>
              <AccordionTrigger className="sm:mx-5 sm:text-base">{item.question}</AccordionTrigger>
              <AccordionContent className="sm:mx-5 sm:text-base">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

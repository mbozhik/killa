import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'

export default function Faq() {
  const faqContent = {
    text: {
      title: 'FAQ',
      description: 'What is the total supply of the collection? The Killa Club will be home to 2,222 retro, soulful bunnies running a muck on SUI.',
    },
    accordionData: [
      {
        id: 'item-1',
        question: 'When will the mint take place, and what will the mint price be?',
        answer: 'These details are [REDACTED] for now. Follow our X account (https://x.com/killaclubsui) and join our discord to be notified when we announce this!',
      },
      {
        id: 'item-2',
        question: 'How can I get on the whitelist?',
        answer: "Visit our X account (https://x.com/killaclubsui) and follow the hints for access to the Hunter's Circle.",
      },
      {
        id: 'item-3',
        question: 'What are the future plans for the project?',
        answer: "Beautiful art first - cool sh*t later. That is the mantra at the Killa Club - although Killa Club is an art project first, we plan on establishing an on-chain foundation through our community base. $BUNZ token for the Killa Club ecosystem, incubator style support for SUI projects, intellectual property (IP) using our brand kit and aesthetic, ecosystem airdrops, on-chain gaming dApps... the pipeline is limitless! For more information on the Killa Club's vision and direction for the collection, please read our Manifesto in the next FAQ.",
      },
      {
        id: 'item-4',
        question: 'Where can I read the whitepaper?',
        answer: 'Come check out the Killa Club Manifesto here, where you can dive into our project: https://killa-club-manifesto.gitbook.io/killaclub',
      },
    ],
  }

  return (
    <section id="faq" data-section="faq-index" className="grid mt-[15vh] mb-[25vh] w-[60%] sm:w-[95%] mx-auto h-auto place-items-center">
      <div className="flex flex-col justify-center w-full gap-5">
        <h1 className="font-black leading-none text-center sm:text-left sm:ml-5 text-9xl xl:text-7xl sm:text-4xl text-custom-primary">{faqContent.text.title}</h1>

        <div className="text-2xl text-center sm:text-left sm:ml-5 xl:text-xl sm:text-base xl:tracking-normal mx-auto max-w-[45ch]" dangerouslySetInnerHTML={{__html: faqContent.text.description}}></div>

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

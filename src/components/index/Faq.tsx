import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'

const parseAnswer = (answer: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const parts = answer.split(urlRegex)

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a key={index} href={part} className="faq-link" target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      )
    }
    return <span key={index}>{part}</span>
  })
}

export default function Faq() {
  const faqContent = {
    title: 'FAQ',
    accordionData: [
      {
        id: '1',
        question: 'What is the total supply of the collection?',
        answer: 'The Killa Club will be home to 2,222 retro, soulful bunnies running amok on SUI.',
      },
      {
        id: '2',
        question: 'When will the mint take place, and what will the mint price be?',
        answer: 'The mint will go live on January 6, 2025. The mint price will be 14 SUI for the whitelist phase, and 18 SUI for the public phase. Follow our X account (https://x.com/killaclubsui) to stay up to date with all the details surrounding our upcoming launch!',
      },
      {
        id: '3',
        question: 'How can I get on the whitelist?',
        answer: "Join our Discord and visit our X account (https://x.com/killaclubsui) to follow the hints for access to the Hunter's Circle.",
      },
      {
        id: '4',
        question: 'What are the future plans for the project?',
        answer: `Beautiful art first - cool sh*t later. That is the mantra at the Killa Club - although Killa Club is an art project first, we plan on establishing an on-chain foundation through our community base. $BUNZ token for the Killa Club ecosystem, incubator style support for SUI projects, intellectual property (IP) using our brand kit and aesthetic, ecosystem airdrops, on-chain gaming dApps... the pipeline is limitless! For more information on the Killa Club's vision and direction for the collection, please read our Manifesto in the next FAQ.`,
      },
      {
        id: '5',
        question: 'Where can I read the whitepaper?',
        answer: 'Come check out the Killa Club Manifesto here, where you can dive into our project: https://killa-club-manifesto.gitbook.io/killaclub',
      },
    ],
  }

  return (
    <section id="faq" data-section="faq-index" className="grid mt-[15vh] mb-[25vh] sm:mb-[15vh] w-[55%] sm:w-[97%] mx-auto h-auto place-items-center">
      <div className="flex flex-col justify-center w-full gap-5">
        <h1 className="font-black leading-none text-center text-9xl xl:text-7xl sm:text-4xl text-custom-primary">{faqContent.title}</h1>

        <Accordion type="multiple" className="flex flex-col w-full gap-3.5 mx-auto mt-5">
          {faqContent.accordionData.map((item, index) => (
            <AccordionItem value={item.id} key={index}>
              <AccordionTrigger className="sm:mx-3 sm:text-lg sm:text-left sm:!leading-[1.35]">{item.question}</AccordionTrigger>
              <AccordionContent className="sm:mx-3 sm:text-base sm:text-left sm:!leading-[1.3] max-w-[80ch]">{parseAnswer(item.answer)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

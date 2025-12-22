import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/react/shadcn/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FeatureFAQProps {
  faqs: FAQItem[];
}

export const Faqs = ({ faqs }: FeatureFAQProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex w-full flex-col items-center justify-center gap-3"
    >
      {faqs.map((item, index) => (
        <AccordionItem
          value={index.toString()}
          key={index}
          className="m-0 w-full rounded-xl px-4 py-2 shadow-sm ring ring-black/20"
        >
          <AccordionTrigger className="flex flex-1 justify-between p-2 text-left text-xl font-semibold transition-all hover:cursor-pointer hover:no-underline md:text-2xl">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-md mt-2 text-neutral-600 md:text-xl">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

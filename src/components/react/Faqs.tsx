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
          className="bg-muted m-0 w-full rounded-xl px-4 py-2"
        >
          <AccordionTrigger className="flex flex-1 justify-between text-left font-semibold transition-all hover:cursor-pointer hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground mt-2">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

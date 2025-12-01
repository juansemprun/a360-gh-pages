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
  title?: string;
  faqs: FAQItem[];
}

export const FeatureFAQ = ({ title = 'FAQs', faqs }: FeatureFAQProps) => {
  return (
    <section className="pt-32">
      <div className="container-custom">
        <h2 className="font-clash-display-bold mb-10 text-center text-4xl text-gray-700 md:text-6xl">
          {title}
        </h2>
        <div className="border-border bg-background z-20 mx-auto max-w-2xl rounded-2xl border p-3">
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
                <AccordionTrigger className="flex flex-1 justify-between text-left font-semibold transition-all hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground mt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

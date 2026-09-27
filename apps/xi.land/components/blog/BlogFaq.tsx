import { PropsWithChildren } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'pkg.accordion';

export const BlogFaq = ({ children }: PropsWithChildren) => (
  <Accordion type="single" collapsible className="my-6 w-full">
    {children}
  </Accordion>
);

export const BlogFaqItem = ({ question, children }: PropsWithChildren<{ question: string }>) => (
  <AccordionItem value={question}>
    <AccordionTrigger className="font-nevermind py-6 text-[18px] font-medium text-gray-100 hover:text-brand-80 hover:no-underline sm:text-[20px]">
      {question}
    </AccordionTrigger>
    <AccordionContent className="pb-6 text-[16px] text-gray-700 [&>p:last-child]:mb-0">
      {children}
    </AccordionContent>
  </AccordionItem>
);

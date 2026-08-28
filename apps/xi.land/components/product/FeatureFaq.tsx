import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'pkg.accordion';

import type { FeatureFaqItemT } from './types';

type FeatureFaqPropsT = {
  items: readonly FeatureFaqItemT[];
};

export const FeatureFaq = ({ items }: FeatureFaqPropsT) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="font-nevermind w-full px-4 py-8 sm:py-[52px] md:px-6 lg:pt-20 lg:pb-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-[52px] lg:grid lg:grid-cols-[1fr_2fr] lg:gap-x-[100px] lg:gap-y-0">
        <h2 className="text-2xl font-medium leading-[29px] sm:max-w-[488px] sm:text-[32px] sm:leading-[48px] lg:min-w-0 lg:max-w-none lg:self-start lg:text-[40px] lg:leading-[40px]">
          Частые вопросы
        </h2>
        <div className="relative w-full min-w-0">
          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            {items.map((item, key) => (
              <AccordionItem key={item.title} value={`item-${key + 1}`}>
                <AccordionTrigger className="py-[32px] font-manrope text-[20px] font-semibold text-gray-100 hover:text-brand-80 hover:no-underline sm:text-[24px] sm:font-bold">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-[14px] text-gray-60 sm:text-[16px]">
                  <p>{item.text}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

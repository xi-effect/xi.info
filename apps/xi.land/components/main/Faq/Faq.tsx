import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'pkg.accordion';
import { contentFaq } from './content';
import { FaqIcon } from './FaqIcons';

export const Faq = () => {
  return (
    <section className="relative  w-full px-4 py-8 sm:px-[32px] sm:pt-[48px] sm:pb-[56px] lg:px-[160px] lg:pb-[246px] lg:pt-[80px] flex flex-col gap-[52px] lg:gap-[100x] xl:gap-[168px] lg:grid lg:grid-cols-[400px_1fr] xl:grid-cols-[488px_1fr] ">
      <h2 className="text-2xl font-bold sm:text-[40px] lg:text-[64px] leading-[29px] sm:leading-[48px] lg:leading-[64px] lg:min-w-[400px] sm:max-w-[488px] ">
        Часто задаваемые вопросы
      </h2>
      <div className="relative 0">
        <Accordion type="single" collapsible className="w-full " defaultValue="item-1">
          {contentFaq.map((item, key) => (
            <AccordionItem key={key} value={`item-${key + 1}`}>
              <AccordionTrigger className="text-[20px] sm:text-[24px] py-[32px] text-gray-100 font-semibold sm:font-bold">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col text-balance text-gray-60 text-[14px] sm:text-[16px]">
                <p key={key} dangerouslySetInnerHTML={{ __html: item.texts }}></p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <FaqIcon />
    </section>
  );
};

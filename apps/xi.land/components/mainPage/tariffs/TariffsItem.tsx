import { Button } from '@xipkg/button';
import { Check } from '@xipkg/icons';
import Link from 'next/link';

type TariffsItemPropsT = {
  title: string;
  description: string;
  features: string[];
  price: { amount: string; unit?: string };
  buttonLabel: string;
  containerClassName?: string;
  buttonClassName?: string;
  titleClassName?: string;
};

export const TariffsItem = ({
  title,
  description,
  features,
  price,
  buttonLabel,
  containerClassName,
  buttonClassName,
  titleClassName,
}: TariffsItemPropsT) => (
  <div
    className={`p-6 sm:p-16 md:p-6 gap-y-6 sm:gap-y-8 md:gap-y-0 xl:p-8 3xl:p-16 rounded-[32px] bg-brand-0 flex flex-col justify-between h-full ${containerClassName}`}
  >
    <div className="flex flex-col gap-8 md:gap-6 lg:gap-8">
      <div className="flex flex-col gap-2">
        <h3
          className={`text-h5 sm:text-h2 md:text-h6 lg:text-h4 font-medium 3xl:text-h2 ${titleClassName}`}
        >
          {title}
        </h3>
        <p className="text-l-base sm:text-xl-base md:text-s-base lg:text-[18px] xl:text-l-base 3xl:text-xl-base text-gray-90">
          {description}
        </p>
      </div>
      <ul className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-x-2 sm:text-l-base md:text-s-base lg:text-m-base 3xl:text-l-base text-gray-90"
          >
            <Check size="m" className="md:w-4 md:h-4 3xl:w-5 3xl:h-5 fill-gray-60" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex flex-col pt-12 md:pt-8 3xl:pt-12 gap-6 md:gap-4 lg:gap-6">
      <h4 className="text-h5 sm:text-h1 font-medium md:text-h5 lg:text-h3 3xl:text-h1">
        {price.amount}
        {price.unit && (
          <span className="text-gray-80 font-normal text-l-base sm:text-h5">{price.unit}</span>
        )}
      </h4>
      <Button
        asChild
        className={`rounded-3xl sm:h-14 md:h-10 lg:h-12 md:text-s-base lg:text-m-base 3xl:text-l-base 3xl:h-14 sm:rounded-[56px] sm:text-l-base ${buttonClassName}`}
      >
        <Link href="#">{buttonLabel}</Link>
      </Button>
    </div>
  </div>
);

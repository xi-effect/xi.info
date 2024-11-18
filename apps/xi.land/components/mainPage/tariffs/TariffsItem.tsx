import { Button } from '@xipkg/button';
import { Check } from '@xipkg/icons';

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
    className={`p-6 xs:p-16 md:p-6 gap-y-8 xl:p-8 2xl:p-16 rounded-[32px] bg-brand-0 flex flex-col justify-between h-full ${containerClassName}`}
  >
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className={`text-h5 xs:text-h2 md:text-h3 lg:text-h2 ${titleClassName}`}>{title}</h3>
        <p className="text-l-base xs:text-xl-base md:text-m-base lg:text-xl-base text-gray-90">
          {description}
        </p>
      </div>
      <ul>
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-x-2 xs:text-l-base md:text-m-base lg:text-l-base text-gray-90"
          >
            <Check className="xs:w-5 xs:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 fill-gray-60" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex flex-col pt-12 gap-6 xs:mt-0">
      <h4 className="text-h5 xs:text-h1 md:text-h3 lg:text-h2 2xl:text-h1">
        {price.amount}
        {price.unit && <span className="text-gray-80 text-base xs:text-h5">{price.unit}</span>}
      </h4>
      <Button
        className={`rounded-3xl xs:h-14 md:h-12 md:text-m-base lg:text-l-base lg:h-14 xs:rounded-[56px] xs:text-l-base ${buttonClassName}`}
      >
        {buttonLabel}
      </Button>
    </div>
  </div>
);

type CardPricingPropsT = {
  id: string;
  name: string;
  btn_name: string;
  price: number | null;
  onClickBtn?: () => void;
  highlight?: boolean;
  description?: string;
  billing?: string;
  features?: string[];
};

export type { CardPricingPropsT };

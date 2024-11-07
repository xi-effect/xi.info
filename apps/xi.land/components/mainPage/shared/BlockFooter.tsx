import { Button } from '@xipkg/button';
import { motion } from 'framer-motion';

type BlockFooterPropsT = {
  primaryBtnCn?: string;
  primaryBtnText: string;
  secondaryBtnText: string;
};

export const BlockFooter = ({
  primaryBtnText,
  secondaryBtnText,
  primaryBtnCn,
}: BlockFooterPropsT) => (
  <motion.div
    initial={{ y: 60, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.2 }}
    className="flex flex-col gap-2 xs:flex-wrap xs:flex-row justify-center xs:gap-8"
  >
    <Button
      size="l"
      className={`${primaryBtnCn} h-12 md:h-14 xs:text-xl-base xs:h-[72px] lg:h-[72px] xs:rounded-2xl xs:px-9 rounded-lg  2xl:h-[84px] xl:rounded-3xl 2xl:text-[30px] 2xl:px-12`}
    >
      {primaryBtnText}
    </Button>
    <Button
      variant="secondary"
      className="text-l-base xs:text-xl-base md:h-14 rounded-lg xs:h-[72px] lg:h-[72px] xs:rounded-2xl xs:px-9 2xl:h-[84px] xl:rounded-3xl 2xl:text-[30px] 2xl:px-12"
    >
      {secondaryBtnText}
    </Button>
  </motion.div>
);

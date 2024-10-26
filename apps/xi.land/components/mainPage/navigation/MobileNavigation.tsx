import { Button } from '@xipkg/button';

export const MobileNavigation = () => (
  <Button className="bg-brand-80 rounded-full flex items-center p-0 lg:hidden">
    <div className="w-8 px-1 h-8 m-2 flex flex-col gap-1 justify-center">
      <span className="w-full h-[3px] bg-gray-0" />
      <span className="w-full h-[3px] bg-gray-0" />
      <span className="w-full h-[3px] bg-gray-0" />
    </div>
  </Button>
);

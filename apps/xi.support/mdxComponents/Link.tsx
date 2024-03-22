/* eslint-disable react/prop-types */
import { Link as LinkPkg } from '@xipkg/link';

const Link = ({ href, children }) => (
  <LinkPkg className="text-[16px] 2xl:text-[20px]" theme="brand" variant="always" href={href}>
    {children}
  </LinkPkg>
  );

export default Link;

import { Link as LinkPkg } from '@xipkg/link';

const Link = ({ href, children }) => (
  <LinkPkg className="text-[16px]" theme="brand" variant="always" href={href} target="_blank">
    {children}
  </LinkPkg>
);

export default Link;

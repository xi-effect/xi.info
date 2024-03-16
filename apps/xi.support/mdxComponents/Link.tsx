import { Link as LinkPkg } from '@xipkg/link';

const Link = ({ href, children }) => {
  return (
    <LinkPkg className="text-[20px]" theme="brand" variant="always" href={href}>
      {children}
    </LinkPkg>
  );
};

export default Link;

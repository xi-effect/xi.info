import { Link } from '@xipkg/link';

const AnchorHeading = ({ id, children }) => {
  return (
    <h2 className='mdx-h3' id={id}>
      <Link className='mdx-h3' variant="hover" href={`#${id}`}>
        {children}
      </Link>
    </h2>
  );
};

export default AnchorHeading;

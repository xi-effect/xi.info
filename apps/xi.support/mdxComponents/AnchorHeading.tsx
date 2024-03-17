import { Link } from '@xipkg/link';

const AnchorHeading = ({ id, children }) => {
  return (
    <h2 className='my-4' id={id}>
      <Link className='font-bold text-gray-100 text-[20px] 2xl:text-[24px]' variant="hover" href={`#${id}`}>
        {children}
      </Link>
    </h2>
  );
};

export default AnchorHeading;

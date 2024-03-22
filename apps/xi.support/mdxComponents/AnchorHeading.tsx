/* eslint-disable react/prop-types */
import { Link } from '@xipkg/link';

const classNames = {
  h1: 'my-4 font-bold text-gray-100 text-[32px] 2xl:text-[36px]',
  h2: 'my-4 font-bold text-gray-100 text-[24px] 2xl:text-[28px]',
  h3: 'my-4 font-bold text-gray-100 text-[20px] 2xl:text-[24px]',
};

const AnchorHeading = ({ type = 'h1', id, children }) => (
  <h2 className="my-4" id={id}>
    <Link className={classNames[type]} variant="hover" href={`#${id}`}>
      {children}
    </Link>
  </h2>
);

export default AnchorHeading;

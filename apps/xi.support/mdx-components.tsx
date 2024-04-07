import type { MDXComponents } from 'mdx/types';
import { PropsWithChildren } from 'react';

const H1 = ({ children }: PropsWithChildren) => (
  <h1 className="my-4 font-bold text-gray-100 text-[32px] 2xl:text-[36px]">{children}</h1>
);

const H2 = ({ children }: PropsWithChildren) => (
  <h2 className="my-4 font-bold text-gray-100 text-[24px] 2xl:text-[28px]">{children}</h2>
);

const H3 = ({ children }: PropsWithChildren) => (
  <h3 className="my-4 font-bold text-gray-100 text-[20px] 2xl:text-[24px]">{children}</h3>
);

const P = ({ children }: PropsWithChildren) => <p className="my-4 text-gray-100">{children}</p>;

const Li = ({ children }: PropsWithChildren) => (
  <li className="my-1 text-gray-100 text-[16px] 2xl:text-[20px]">{children}</li>
);

const Ul = ({ children }: PropsWithChildren) => (
  <ul className="my-4 text-gray-100 text-[16px] 2xl:text-[20px] list-disc list-inside">
    {children}
  </ul>
);

const Ol = ({ children }: PropsWithChildren) => (
  <ol className="my-4 text-gray-100 text-[16px] 2xl:text-[20px] list-decimal list-inside">
    {children}
  </ol>
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    li: Li,
    p: P,
    ul: Ul,
    ol: Ol,
    ...components,
  };
}

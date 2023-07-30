import type { MDXComponents } from 'mdx/types';
import { FC, PropsWithChildren } from 'react';

const H2: FC<PropsWithChildren> = ({ children }) => <h2 className="mdx-h2">{children}</h2>;

const P: FC<PropsWithChildren> = ({ children }) => <p className="mdx-p">{children}</p>;

const Li: FC<PropsWithChildren> = ({ children }) => <li className="mdx-li">{children}</li>;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: H2,
    p: P,
    li: Li,
    ...components,
  };
}

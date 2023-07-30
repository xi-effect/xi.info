import type { MDXComponents } from 'mdx/types';
import { PropsWithChildren } from 'react';

const H2 = ({ children }: PropsWithChildren) => <h2 className="mdx-h2">{children}</h2>;

const P = ({ children }: PropsWithChildren) => <p className="mdx-p">{children}</p>;

const Li = ({ children }: PropsWithChildren) => <li className="mdx-li">{children}</li>;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: H2,
    p: P,
    li: Li,
    ...components,
  };
}

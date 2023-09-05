import type { MDXComponents } from 'mdx/types';
import { PropsWithChildren } from 'react';

const H1 = ({ children }: PropsWithChildren) => <h1 className="mdx-h1">{children}</h1>;

const H2 = ({ children }: PropsWithChildren) => <h2 className="mdx-h2">{children}</h2>;

const H3 = ({ children }: PropsWithChildren) => <h3 className="mdx-h3">{children}</h3>;

const P = ({ children }: PropsWithChildren) => <p className="mdx-p">{children}</p>;

const Li = ({ children }: PropsWithChildren) => <li className="mdx-li">{children}</li>;

const Ul = ({ children }: PropsWithChildren) => <ul className="mdx-ul">{children}</ul>;


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    li: Li,
    ul: Ul,
    ...components,
  };
}

import type { MDXComponents } from 'mdx/types';
import { PropsWithChildren } from 'react';

const H1 = ({ children }: PropsWithChildren) => (
  <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8 first:mt-0">{children}</h1>
);

const H2 = ({ children }: PropsWithChildren) => (
  <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-6">{children}</h2>
);

const H3 = ({ children }: PropsWithChildren) => (
  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">{children}</h3>
);

const P = ({ children }: PropsWithChildren) => (
  <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
);

const Li = ({ children }: PropsWithChildren) => (
  <li className="text-gray-700 mb-2 leading-relaxed">{children}</li>
);

const Ul = ({ children }: PropsWithChildren) => (
  <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
);

const Ol = ({ children }: PropsWithChildren) => (
  <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
);

const Strong = ({ children }: PropsWithChildren) => (
  <strong className="font-semibold text-gray-900">{children}</strong>
);

const Em = ({ children }: PropsWithChildren) => (
  <em className="italic text-gray-800">{children}</em>
);

const Blockquote = ({ children }: PropsWithChildren) => (
  <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic text-gray-600">
    {children}
  </blockquote>
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    li: Li,
    ul: Ul,
    ol: Ol,
    strong: Strong,
    em: Em,
    blockquote: Blockquote,
    ...components,
  };
}

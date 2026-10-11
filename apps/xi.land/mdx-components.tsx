import type { MDXComponents } from 'mdx/types';
import type { AnchorHTMLAttributes } from 'react';
import { PropsWithChildren } from 'react';

import { BlogFaq, BlogFaqItem } from 'components/blog';

const H1 = ({ children }: PropsWithChildren) => (
  <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8 first:mt-0">{children}</h1>
);

const HeadingAnchor = ({ id }: { id: string }) => (
  <a
    href={`#${id}`}
    aria-label="Ссылка на этот раздел"
    className="ml-2 text-brand-80 no-underline opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
  >
    <span aria-hidden="true">#</span>
  </a>
);

const H2 = ({ children, id }: PropsWithChildren<{ id?: string }>) => (
  <h2
    id={id}
    className="group scroll-mt-28 text-2xl font-semibold text-gray-900 mb-4 mt-6 md:scroll-mt-32"
  >
    {children}
    {id ? <HeadingAnchor id={id} /> : null}
  </h2>
);

const H3 = ({ children, id }: PropsWithChildren<{ id?: string }>) => (
  <h3
    id={id}
    className="group scroll-mt-28 text-xl font-semibold text-gray-900 mb-3 mt-4 md:scroll-mt-32"
  >
    {children}
    {id ? <HeadingAnchor id={id} /> : null}
  </h3>
);

const Hr = () => <hr className="my-12 border-t border-gray-300 md:my-16" />;

const P = ({ children }: PropsWithChildren) => (
  <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
);

const Li = ({ children }: PropsWithChildren) => (
  <li className="text-gray-700 leading-relaxed [&>p]:my-0">{children}</li>
);

const Ul = ({ children }: PropsWithChildren) => (
  <ul className="mb-4 list-disc space-y-2 pl-6">{children}</ul>
);

const Ol = ({ children }: PropsWithChildren) => (
  <ol className="mb-4 list-decimal space-y-2 pl-6">{children}</ol>
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

const Table = ({ children }: PropsWithChildren) => (
  <div className="overflow-x-auto my-6">
    <table className="min-w-full border-collapse border border-gray-300">{children}</table>
  </div>
);

const Thead = ({ children }: PropsWithChildren) => <thead className="bg-gray-50">{children}</thead>;

const Tbody = ({ children }: PropsWithChildren) => <tbody className="bg-white">{children}</tbody>;

const Tr = ({ children }: PropsWithChildren) => (
  <tr className="border-b border-gray-200">{children}</tr>
);

const Th = ({ children }: PropsWithChildren) => (
  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900 bg-gray-100">
    {children}
  </th>
);

const Td = ({ children }: PropsWithChildren) => (
  <td className="border border-gray-300 px-4 py-3 text-gray-700">{children}</td>
);

const A = ({ href, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a href={href} className="text-brand-80 underline underline-offset-4" {...props}>
    {children}
  </a>
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
    table: Table,
    thead: Thead,
    tbody: Tbody,
    tr: Tr,
    th: Th,
    td: Td,
    a: A,
    hr: Hr,
    Faq: BlogFaq,
    FaqItem: BlogFaqItem,
    ...components,
  };
}

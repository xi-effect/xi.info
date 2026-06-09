type BlogJsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export const BlogJsonLd = ({ data }: BlogJsonLdProps) => {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item) => (
        <script
          key={JSON.stringify(item)}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
};

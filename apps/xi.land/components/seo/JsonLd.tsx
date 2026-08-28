type JsonLdPropsT = {
  data: unknown;
};

export const JsonLd = ({ data }: JsonLdPropsT) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);

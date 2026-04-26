import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Статический JSON для `output: 'export'` (без динамики Request) — см. fumadocs static search
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'russian',
});

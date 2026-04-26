'use client';

import { useDocsSearch } from 'fumadocs-core/search/client';
import { create } from '@orama/orama';
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
} from 'fumadocs-ui/components/dialog/search';
import type { SharedProps } from 'fumadocs-ui/contexts/search';

/**
 * Прод: индекс в `out/fumadocs-search.json` (копия после билда, см. scripts/emit-fumadocs-search.mjs),
 * т.к. `/api/*` на nginx у статики часто 404. Дев: route handler `app/api/search`.
 * @see https://www.fumadocs.dev/docs/headless/search/orama#internationalization
 */
function initOrama() {
  return create({
    schema: { _: 'string' },
    language: 'russian',
  });
}

const searchIndexFrom =
  process.env.NEXT_PUBLIC_FUMADOCS_SEARCH_INDEX ||
  (process.env.NODE_ENV === 'development' ? '/api/search' : '/fumadocs-search.json');

export default function DocsSearchDialog(props: SharedProps) {
  // Без `locale`: для одноязычного индекса fumadocs хранит БД в Map под ключом "".
  const { search, setSearch, query } = useDocsSearch({
    type: 'static',
    initOrama,
    from: searchIndexFrom,
  });

  return (
    <SearchDialog search={search} onSearchChange={setSearch} isLoading={query.isLoading} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== 'empty' ? query.data : null} />
      </SearchDialogContent>
    </SearchDialog>
  );
}

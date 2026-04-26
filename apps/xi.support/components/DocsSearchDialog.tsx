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
 * Статический поиск: индекс с сервера с language: 'russian' (см. app/api/search).
 * Клиент Orama должен использовать тот же language, иначе русские запросы не матчатся.
 * @see https://www.fumadocs.dev/docs/headless/search/orama#internationalization
 */
function initOrama() {
  return create({
    schema: { _: 'string' },
    language: 'russian',
  });
}

export default function DocsSearchDialog(props: SharedProps) {
  // Без `locale`: для одноязычного индекса fumadocs хранит БД в Map под ключом "".
  // Передача locale: "ru" из useI18n ломала поиск — .get("ru") → undefined, всегда 0 результатов.
  const { search, setSearch, query } = useDocsSearch({
    type: 'static',
    initOrama,
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

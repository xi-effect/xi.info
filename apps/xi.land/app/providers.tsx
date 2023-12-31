'use client';

import { getInitColorSchemeScript } from '@mui/material/styles';
import { ThemeProvider } from 'next-themes';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@xipkg/mui';
import React from 'react';

export function Providers(props) {
  const options = { key: 'mui', prepend: true };
  const { children } = props;

  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: options.prepend ? `@layer emotion {${styles}}` : styles,
        }}
      />
    );
  });

  const activeTheme = theme();

  return (
    <>
      {getInitColorSchemeScript()}
      <ThemeProvider enableSystem={false} forcedTheme="light" attribute="data-mui-color-scheme">
        <CacheProvider value={cache}>
          <CssVarsProvider theme={activeTheme}>
            <CssBaseline />
            {children}
          </CssVarsProvider>
        </CacheProvider>
      </ThemeProvider>
    </>
  );
}

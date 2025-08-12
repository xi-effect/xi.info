export default function Head() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://mc.yandex.ru" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* Дополнительные мета-теги для SEO */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      {/* Геолокация */}
      <meta name="geo.region" content="RU" />
      <meta name="geo.placename" content="Россия" />

      {/* Язык контента */}
      <meta name="language" content="Russian" />
      <meta name="content-language" content="ru" />

      {/* Автор и права */}
      <meta name="author" content="Sovlium Team" />
      <meta name="copyright" content="Sovlium" />

      {/* Мобильная оптимизация */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Sovlium" />

      {/* Предзагрузка критических ресурсов */}
      <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
      <link rel="preload" href="/web-app-manifest-512x512.png" as="image" type="image/png" />
    </>
  );
}

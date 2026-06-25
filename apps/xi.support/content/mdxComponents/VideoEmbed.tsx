const DEFAULT_HD = 5;

type VideoEmbedProps = {
  oid: number;
  id: number;
  hash: string;
  title?: string;
  caption?: string;
  /** Стартовое качество VK: 1–360p, 2–480p, 3–720p, 4–1080p; 5 — максимум, если доступен */
  hd?: number;
  autoplay?: boolean;
};

const buildEmbedSrc = ({
  oid,
  id,
  hash,
  hd = DEFAULT_HD,
  autoplay = false,
}: Pick<VideoEmbedProps, 'oid' | 'id' | 'hash' | 'hd' | 'autoplay'>) => {
  const url = new URL('https://vkvideo.ru/video_ext.php');
  url.searchParams.set('oid', String(oid));
  url.searchParams.set('id', String(id));
  url.searchParams.set('hash', hash);
  url.searchParams.set('hd', String(hd));
  if (autoplay) {
    url.searchParams.set('autoplay', '1');
  }
  return url.toString();
};

const buildWatchUrl = (oid: number, id: number) => `https://vkvideo.ru/video${oid}_${id}`;

const VideoEmbed = ({
  oid,
  id,
  hash,
  title = 'Видео',
  caption,
  hd = DEFAULT_HD,
  autoplay = false,
}: VideoEmbedProps) => {
  const embedSrc = buildEmbedSrc({ oid, id, hash, hd, autoplay });
  const watchUrl = buildWatchUrl(oid, id);

  return (
    <figure className="my-6">
      <div className="relative aspect-video w-full overflow-hidden rounded-[12px] bg-gray-10 md:rounded-[24px]">
        <iframe
          src={embedSrc}
          title={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock"
          allowFullScreen
        />
      </div>
      <figcaption className="text-fd-muted-foreground mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-sm">
        {caption ? <span>{caption}</span> : <span />}
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fd-primary shrink-0 hover:underline"
        >
          Открыть в VK Video
        </a>
      </figcaption>
    </figure>
  );
};

export default VideoEmbed;

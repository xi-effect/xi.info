type VideoEmbedProps = {
  src: string;
  title?: string;
};

const VideoEmbed = ({ src, title = 'Видео' }: VideoEmbedProps) => (
  <div className="relative my-6 aspect-video w-full overflow-hidden rounded-[12px] bg-gray-10 md:rounded-[24px]">
    <iframe
      src={src}
      title={title}
      className="absolute inset-0 h-full w-full border-0"
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock"
      allowFullScreen
    />
  </div>
);

export default VideoEmbed;

import { Video } from "@/features/dictionary/types";

type VideoPlayerProps = {
  video: Video;
};

export default function VideoPlayer({ video }: VideoPlayerProps) {
  if (video.provider === "youtube" && video.videoId) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${video.videoId}`}
        title={video.title}
        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share
          "
        allowFullScreen
        className="aspect-video w-full rounded-lg"
      />
    );
  }
  if (video.provider === "aparat" && video.videoId) {
    return (
      <iframe
        src={`https://www.aparat.com/video/video/embed/videohash/${video.videoId}/vt/frame`}
        title={video.title}
        allowFullScreen
        className="aspect-video w-full rounded-lg"
      />
    );
  }
  if (video.provider === "self-hosted" && video.videoUrl) {
    return (
      <video
        src={video.videoUrl}
        controls
        preload="metadata"
        className="aspect-video w-full rounded-lg"
      >
        مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
      </video>
    );
  }

  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-(--color-bg-secondary)">
      <p className="text-sm text-(--color-text-muted)">Video nicht verfügbar</p>
    </div>
  );
}

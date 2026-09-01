import VideoPlayer from "@/components/shared/videoPlayer/VideoPlayer";
import { Video } from "@/features/dictionary/types";

type VideoCardProps = {
  video: Video;
};

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="flex flex-col gap-3">
      <VideoPlayer video={video} />

      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-(--color-text-primary)">
          {video.title}
        </h3>

        <p className="text-sm leading-6 text-(--color-text-secondary)">
          {video.description}
        </p>
      </div>
    </article>
  );
}
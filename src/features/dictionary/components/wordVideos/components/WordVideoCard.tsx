import VideoPlayer from "@/components/shared/videoPlayer/VideoPlayer";
import { Video } from "@/features/dictionary/types";

type VideoCardProps = {
  video: Video;
};

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="flex min-h-0 w-full flex-col gap-3">
      <div className="min-h-0 flex-1 overflow-hidden rounded-lg">
        <VideoPlayer video={video} />
      </div>

      <div className="flex shrink-0 flex-col gap-1">
        <h3 className="text-sm font-semibold text-(--color-text-primary)">
          {video.title}
        </h3>

        <p className="text-xs leading-5 text-(--color-text-secondary)">
          {video.description}
        </p>
      </div>
    </article>
  );
}
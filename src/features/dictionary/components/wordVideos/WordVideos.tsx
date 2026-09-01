"use client";

import { useDictionaryWord } from "@/hooks/DictionaryWord/dictionaryWordHook";
import { Video as VideoIcon } from "lucide-react";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import VideoCard from "./components/WordVideoCard";
import { Video } from "../../types";

export default function WordVideos() {
  const { dictionaryWord } = useDictionaryWord();

  const videos = dictionaryWord.videos ?? [];

  if (!videos.length) {
    return null;
  }

  return (
    <section className="flex flex-col gap-5 rounded-lg border border-(--color-border) px-6 py-8">
      <SectionTitle
        title="Videos"
        icon={VideoIcon}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {videos.map((video: Video) => (
          <VideoCard
            key={video.id}
            video={video}
          />
        ))}
      </div>
    </section>
  );
}
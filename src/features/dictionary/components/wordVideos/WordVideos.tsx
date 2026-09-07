"use client";

import { useState } from "react";
import { useDictionaryWord } from "@/hooks/DictionaryWord/dictionaryWordHook";
import { Video as VideoIcon } from "lucide-react";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import VideoCard from "./components/WordVideoCard";
import { Video } from "../../types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function WordVideos() {
  const { dictionaryWord } = useDictionaryWord();

  const videos = dictionaryWord.videos ?? [];

  if (!videos.length) {
    return null;
  }

  return (
    <section className="flex h-full min-h-0 flex-col gap-5 rounded-lg border border-(--color-border) p-6  bg-(--color-white)">
      <SectionTitle
        title="Videos"
        icon={VideoIcon}
      />

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="flex min-h-0 flex-1 flex-col"
      >
        <CarouselContent className="flex min-h-0 flex-1">
          {videos.map((video: Video) => (
            <CarouselItem
              key={video.id}
              className="flex min-h-0"
            >
              <VideoCard video={video} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
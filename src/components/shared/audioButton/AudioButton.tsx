"use client";

import { Volume2 } from "lucide-react";

type AudioButtonProps = {
  audioUrl?: string | null;
  label?: string;
};

export default function AudioButton({
  audioUrl,
  label = "Audio anhören",
}: AudioButtonProps) {
  const playAudio = () => {
    if (!audioUrl) return;

    const audio = new Audio(audioUrl);

    audio.addEventListener("error", () => {
      console.error("Audio failed to load:", {
        url: audioUrl,
        error: audio.error,
      });
    });

    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
  };

  return (
    <button
      type="button"
      aria-label={label}
      onClick={playAudio}
      disabled={!audioUrl}
      className="
        flex
        size-9
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-(--color-border)
        bg-white
        text-(--color-text-secondary)
        shadow-sm
        transition-all
        duration-200
        hover:border-(--color-brand)
        hover:bg-(--color-brand)
        hover:text-white
        hover:shadow-md
        active:scale-95
        disabled:cursor-not-allowed
        disabled:border-(--color-border)
        disabled:bg-(--color-bg-secondary)
        disabled:text-(--color-text-muted)
        disabled:shadow-none
      "
    >
      <Volume2
        size={17}
        strokeWidth={1.8}
      />
    </button>
  );
}

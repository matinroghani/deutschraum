"use client";

import AudioButton from "@/components/shared/audioButton/AudioButton";
import { useDictionaryWord } from "@/hooks/DictionaryWord/dictionaryWordHook";

export default function Heading() {
  const { dictionaryWord } = useDictionaryWord();

  return (
    <div className="flex items-center gap-3 pb-3 border-b border-(--color-border)">
      <h1 className="text-3xl font-bold tracking-tight text-(--color-text-primary)">
        {dictionaryWord.word}
      </h1>

      <AudioButton
        audioUrl={dictionaryWord.audio.pronunciationUrl}
        label={`Aussprache von ${dictionaryWord.word} anhören`}
      />
    </div>
  );
}

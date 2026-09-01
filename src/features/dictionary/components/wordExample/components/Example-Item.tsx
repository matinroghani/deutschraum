import AudioButton from "@/components/shared/audioButton/AudioButton";
import { Example } from "@/features/dictionary/types";
import { Volume2 } from "lucide-react";

type ExampleItemProps = {
  example: Example;
};

export default function ExampleItem({ example }: ExampleItemProps) {
  return (
    <div className="flex items-start gap-3 border-b border-(--color-border) py-3 last:border-b-0 last:pb-0">
      <AudioButton
      audioUrl={example.audioUrl}
      label="Beispielsaty anhören"
      />

      <div className="flex min-w-0 flex-col gap-1">
        <p className="text-base font-medium leading-7 text-(--color-text-primary)">
          {example.german}
        </p>

        <p className="[font-family:var(--font-yekan)] text-sm leading-7 text-(--color-text-secondary)">
          {example.persian}
        </p>
      </div>
    </div>
  );
}

"use client"

import WordLevel from "@/components/shared/wordLevel/WordLevel";
import { useDictionaryWord } from "@/hooks/DictionaryWord/dictionaryWordHook";

export default function Metadata() {
  const { dictionaryWord } = useDictionaryWord();

  const baseInfosConfig = [
    {
      id: "article",
      label: "Artikel",
      value: dictionaryWord.article,
    },
    {
      id: "pronunciation",
      label: "Aussprache",
      value: dictionaryWord.pronunciation.ipa,
    },
    {
      id: "wordType",
      label: "Wortart",
      value: dictionaryWord.wordType,
    },
  ];

  const articleColor: Record<string, string> = {
    der: "text-blue-500",
    die: "text-red-500",
    das: "text-emerald-500",
  };

  return (
    <div className="flex flex-wrap items-center gap-y-3">
      {baseInfosConfig.map((item, index) => {
        const isLast = index === baseInfosConfig.length - 1;

        return (
          <div key={item.id} className="flex items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm text-(--color-text-secondary)">
                {item.label}:
              </span>

              <span
                className={`
                  text-sm
                  font-medium
                  ${
                    item.id === "article"
                      ? (articleColor[item.value ?? ""] ??
                        "text-(--color-text-primary)")
                      : "text-(--color-text-primary)"
                  }
                `}
              >
                {item.value ?? "—"}
              </span>
            </div>

            {!isLast && (
              <div className="mx-5 h-4 w-px bg-(--color-border)" />
            )}
          </div>
        );
      })}

      <div className="ml-1">
        <WordLevel level={dictionaryWord.level} />
      </div>
    </div>
  );
}
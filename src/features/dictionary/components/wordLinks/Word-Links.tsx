"use client";

import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import { Link as LinkIcon } from "lucide-react";
import WordLinkItems from "./components/WordLink-Items";
import { useDictionaryWord } from "@/hooks/DictionaryWord/dictionaryWordHook";
import { BetterUnderstanding } from "../../types";

export default function WordLinks() {
  const { dictionaryWord } = useDictionaryWord();

  const links: BetterUnderstanding[] = dictionaryWord.betterUnderstanding;

  return (
    <section
      className="
        flex
        flex-col
        gap-5
        rounded-2xl
        border
        border-(--color-border)
        bg-(--color-white)
        px-5
        py-6
        sm:px-6
        sm:py-7
      "
    >
      <SectionTitle
        title="Links, zum besseren Verstehen!"
        icon={LinkIcon}
      />

      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <WordLinkItems
            key={link.id}
            link={link}
          />
        ))}
      </div>
    </section>
  );
}
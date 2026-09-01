"use client";

import { useDictionaryWord } from "@/hooks/DictionaryWord/dictionaryWordHook";
import { Definition, Example } from "../../types";
import { BookA } from "lucide-react";
import ExampleItem from "./components/Example-Item";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

export default function WordExample() {
  const { dictionaryWord } = useDictionaryWord();

  const examples: Example[] = dictionaryWord.definitions.flatMap(
    (definition: Definition) => definition.examples ?? [],
  );

  return (
    <section className="flex flex-col gap-2 rounded-lg border border-(--color-border) px-6 py-8">
      <SectionTitle title="Beispiele" icon={BookA} />

      <div className="flex flex-col">
        {examples.map((example) => (
          <ExampleItem
            key={example.id}
            example={example}
          />
        ))}
      </div>
    </section>
  );
}

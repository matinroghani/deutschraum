"use client";

import { useDictionaryWord } from "@/hooks/DictionaryWord/dictionaryWordHook";
import DefinitionCard from "./components/DefinitionCard";
import { Definition } from "../../types";

export default function WordDefinition() {
  const { dictionaryWord } = useDictionaryWord();

  const definitions: Definition[] = dictionaryWord.definitions ?? [];

  if (!definitions.length) {
    return <div>Keine Definition gefunden</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <DefinitionCard
        title="Deutsch Definition"
        definitions={definitions.map((definition) => definition.german)}
      />

      <DefinitionCard
        title="توضیح فارسی"
        definitions={definitions.map((definition) => definition.persian)}
      />
    </div>
  );
}

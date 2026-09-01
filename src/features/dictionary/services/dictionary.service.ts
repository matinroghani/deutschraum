import { Root } from "@/features/dictionary/types";

export function searchDictionaryService(
  words: Root[],
  searchValue: string,
): Root[] {
  const query = searchValue.trim().toLowerCase();

  if (!query) {
    return words;
  }

  return words.filter(
    (item) =>
      item.word.toLowerCase().includes(query) ||
      item.definitions.some((definition) =>
        definition.persian.includes(searchValue.trim()),
      ),
  );
}

export function getDictionaryWordService(
  words: Root[],
  wordId: string,
): Root | undefined {
  return words.find((word) => word.id === wordId);
}

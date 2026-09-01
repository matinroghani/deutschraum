"use client";

import { useContext } from "react";

import { DictionaryWordContext } from "@/features/dictionary/context/DictionaryContext";

export function useDictionaryWord() {
  const context = useContext(DictionaryWordContext);

  if (!context) {
    throw new Error(
      "useDictionaryWord must be used inside DictionaryWordProvider",
    );
  }

  return context;
}
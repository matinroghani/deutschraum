"use client";

import { createContext, type ReactNode } from "react";
import { Root } from "../types";

type DictionaryWordContextValue = {
  dictionaryWord: Root;
};

export const DictionaryWordContext =
  createContext<DictionaryWordContextValue | null>(null);

type DictionaryWordProviderProps = {
  dictionaryWord: Root;
  children: ReactNode;
};

export function DictionaryWordProvider({
  dictionaryWord,
  children,
}: DictionaryWordProviderProps) {
  return (
    <DictionaryWordContext.Provider value={{ dictionaryWord }}>
      {children}
    </DictionaryWordContext.Provider>
  );
}

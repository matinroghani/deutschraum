"use client";

import { dictionaryMock } from "@/mocks/dictionary";
import { searchDictionaryService } from "@/features/dictionary/services/dictionary.service";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { Search, X, AlertCircle } from "lucide-react";

export default function SearchBox() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDictionarySearch = async () => {
    setError(null);

    const trimmedValue = searchValue.trim();

    if (!trimmedValue) {
      setError("Bitte geben Sie einen Suchbegriff ein.");
      return;
    }

    setIsLoading(true);

    try {
      const result = searchDictionaryService(
        dictionaryMock,
        trimmedValue,
      );

      if (!result || result.length === 0) {
        setError(`Keine Ergebnisse für "${trimmedValue}" gefunden.`);
        return;
      }

      const exactMatch = result.find(
        (item) =>
          item.word.toLowerCase() === trimmedValue.toLowerCase(),
      );

      const selectedWord = exactMatch ?? result[0];

      if (!selectedWord) {
        setError("Ein unerwarteter Fehler ist aufgetreten.");
        return;
      }

      startTransition(() => {
        router.push(`/dictionary/${selectedWord.id}`);
      });
    } catch (error) {
      console.error("Search error:", error);
      setError(
        "Ein Fehler ist bei der Suche aufgetreten. Bitte versuchen Sie es später erneut.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchValue(e.target.value);

    if (error) {
      clearError();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleDictionarySearch();
    }

    if (e.key === "Escape") {
      setSearchValue("");
      clearError();
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="search"
          placeholder="Wörter, Grammatik, Redewendungen ..."
          value={searchValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          aria-invalid={!!error}
          aria-describedby={error ? "search-error" : undefined}
          className={`
            w-full
            rounded-lg
            border
            bg-(--color-surface)
            py-2.5
            pl-4
            pr-11
            text-sm
            text-(--color-text)
            outline-none
            transition-colors
            duration-200
            placeholder:text-(--color-text-muted)

            ${
              error
                ? "border-red-400 focus:border-red-500"
                : "border-(--color-border) focus:border-(--color-border-focus)"
            }

            ${isLoading ? "opacity-70" : ""}
          `}
        />

        <button
          type="button"
          onClick={handleDictionarySearch}
          disabled={isLoading}
          aria-label="Suchen"
          className="
            absolute
            right-2
            top-1/2
            flex
            h-8
            w-8
            -translate-y-1/2
            items-center
            justify-center
            rounded-md
            text-(--color-text-secondary)
            transition-colors
            hover:bg-(--color-bg-secondary)
            hover:text-(--color-text)
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {isLoading ? (
            <span
              className="
                h-4
                w-4
                animate-spin
                rounded-full
                border-2
                border-(--color-border)
                border-t-(--color-brand)
              "
            />
          ) : (
            <Search className="h-4 w-4" />
          )}
        </button>
      </div>

      {error && (
        <div
          id="search-error"
          className="
            mt-2
            flex
            items-center
            gap-2
            text-sm
            text-red-500
          "
          role="alert"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />

          <span>{error}</span>

          <button
            type="button"
            onClick={clearError}
            className="
              ml-auto
              rounded
              p-0.5
              text-red-400
              transition-colors
              hover:text-red-600
            "
            aria-label="Fehlermeldung schließen"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
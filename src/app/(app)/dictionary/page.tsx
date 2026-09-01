import BreadCreumb from "@/components/shared/breadCrumb/BreadCreumb";
import { Search, Sparkles } from "lucide-react";

export default function Dictionary() {
  return (
    <div className="flex flex-col gap-5">
      <BreadCreumb />

      {/* Results Section */}
      <section className="rounded-lg border border-(--color-border) bg-(--color-surface) shadow-sm transition-all duration-200 hover:shadow-md">
        <div className="flex min-h-[280px] flex-col items-center justify-center px-6 py-12">
          <div className="relative">
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-5 h-5 text-(--color-brand) animate-pulse" />
            </div>
            <div className="rounded-full bg-(--color-brand-soft) p-4">
              <Search className="w-8 h-8 text-(--color-brand)" />
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-(--color-text-secondary) font-medium">
              Geben Sie ein Wort ein
            </p>
            <p className="mt-1 text-sm text-(--color-text-muted)">
              Tippen Sie etwas, um vollständige Informationen zu sehen.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {["Hallo", "Danke", "Liebe", "Schön", "Frieden"].map((word) => (
              <button
                key={word}
                className="rounded-full bg-(--color-bg-secondary) px-3.5 py-1.5 text-sm text-(--color-text-secondary) transition-all duration-200 hover:bg-(--color-brand-soft) hover:text-(--color-brand)"
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SidebarGoal() {
  return (
    <div
      className="
        relative
        min-w-0
        overflow-hidden
        rounded-xl
        border
        border-white/[0.06]
        bg-white/[0.035]
        p-5
        shadow-[0_6px_24px_rgba(0,0,0,0.14)]
        backdrop-blur-lg
      "
    >
      {/* Glass highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      <div className="flex min-w-0 items-start gap-3">
        <div className="group relative mt-0.5 size-9 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/[0.05] p-0.5">
          <div className="relative size-full overflow-hidden rounded-full">
            <Image
              src="/images/main/Flag_of_Germany.svg"
              alt="Deutschlandfahne"
              fill
              className="
                object-cover
                transition-transform
                duration-500
                ease-out
                group-hover:scale-110
              "
            />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <span className="block text-sm font-semibold leading-5 text-[var(--color-nav-icon-active)]">
            Dein Ziel
          </span>

          <p className="mt-1 text-xs leading-5 text-white/55">
            Deutsch sicher im Alltag, Studium und Beruf nutzen.
          </p>
        </div>
      </div>

      <Link
        href="/dashboard/goals"
        className="
          group
          mt-4
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-lg
          bg-gradient-to-l
          from-[#a98243]
          via-[var(--color-brand)]
          to-[#e0c47f]
          px-3
          py-3
          text-xs
          font-semibold
          text-[var(--color-nav-bg)]
          shadow-[0_4px_14px_rgba(201,164,92,0.14)]
          transition-all
          duration-200
          hover:brightness-110
          hover:shadow-[0_6px_18px_rgba(201,164,92,0.18)]
          active:scale-[0.98]
        "
      >
        Ziele festlegen

        <ArrowRight
          size={15}
          strokeWidth={2.5}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}
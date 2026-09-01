import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative shrink-0">
        <Image
          src="/images/logos/main-logo.png"
          alt="Deutschraum"
          width={48}
          height={48}
          className="object-contain"
          priority
        />
      </div>

      <div className="flex min-w-0 flex-col leading-none">
        <h2 className="text-base font-bold tracking-tight text-[var(--color-brand-soft)]">
          Deutschraum
        </h2>

        <span className="text-xs mt-0.5 font-medium tracking-wide text-[var(--color-nav-text-muted)]">
          Lerne, Verstehe, Sprich
        </span>
      </div>
    </div>
  );
}
import { Bell } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotificationButton() {
  return (
    <Link
      href="#"
      className="
        relative
        inline-flex
        items-center
        justify-center
        rounded-full
        p-2
        text-(--color-text)
        transition-colors
        duration-200
        hover:bg-(--color-bg-secondary)
      "
    >
      <Bell
        size={20}
        strokeWidth={1.8}
        className="transition-transform duration-200"
      />

      <span
        className="
          absolute
          -right-0.5
          -top-0.5
          flex
          min-h-4
          min-w-4
          items-center
          justify-center
          rounded-full
          bg-(--color-brand-hover)
          px-1
          text-[10px]
          font-semibold
          leading-none
          text-(--color-surface)
        "
      >
        3
      </span>
    </Link>
  );
}

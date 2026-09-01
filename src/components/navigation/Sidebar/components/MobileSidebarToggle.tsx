"use client";

import { useSidebar } from "@/hooks/sidebar/sidebarHook";
import { Menu, X } from "lucide-react";
export default function MobileSidebarToggle() {

  const {isOpen, toggleSidebar} = useSidebar()

  return (
    <button
      type="button"
      onClick={toggleSidebar}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="
      inline-flex
      size-10
      items-center
      justify-center
      rounded-lg
      text-[var(--color-nav-text-muted)]
      transition-colors
      hover:bg-[var(--color-nav-hover)]
      hover:text-[var(--color-nav-text)]
      lg:hidden
      "
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  );
}

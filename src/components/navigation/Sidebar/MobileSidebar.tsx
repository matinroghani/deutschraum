"use client"
import { useSidebar } from "@/hooks/sidebar/sidebarHook";
import SidebarContent from "./SidebarContent";

export default function MobileSidebar() {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <>
      <div
        className={`
          fixed
          inset-0
          z-40
          bg-black/40
          transition-opacity
          duration-300
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      <aside
        className={`
          fixed
          inset-y-0
          right-0
          z-50
          flex
          w-72
          flex-col
          justify-between
          overflow-hidden
          bg-[var(--color-nav-bg)]
          px-[var(--spacing-sidebar-x)]
          py-[var(--spacing-sidebar-y)]
          shadow-[-8px_0_30px_rgba(0,0,0,0.2)]
          transition-transform
          duration-300
          ease-out
          ${
            isOpen
              ? "translate-x-0"
              : "pointer-events-none translate-x-full"
          }
          lg:hidden
        `}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
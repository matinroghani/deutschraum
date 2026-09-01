"use client";

import { sidebarItems } from "@/mocks/navigation/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarItem() {
  const pathname = usePathname();

  return (
    <nav>
      {sidebarItems.map((group, index) => (
        <div key={group.id}>
          {index > 0 && (
            <div className="my-4 h-px bg-[var(--color-nav-text-muted)]" />
          )}

          <ul className="flex flex-col gap-2">
            {group.items.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`
                      flex
                      items-center
                      gap-3
                      rounded-lg
                      px-3
                      py-2.5
                      font-medium
                      transition-colors
                      duration-200

                      ${
                        isActive
                          ? `
                            border-l-2
                            border-[var(--color-brand)]
                            bg-[var(--color-nav-active-bg)]
                            text-[var(--color-nav-icon-active)]
                          `
                          : `
                            text-[var(--color-nav-text-muted)]
                            hover:bg-[var(--color-nav-hover)]
                            hover:text-[var(--color-nav-text)]
                          `
                      }
                    `}
                  >
                    <Icon
                      className={`
                        h-5
                        w-5
                        shrink-0
                        ${
                          isActive
                            ? "text-[var(--color-nav-icon-active)]"
                            : "text-[var(--color-nav-icon)]"
                        }
                      `}
                    />

                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

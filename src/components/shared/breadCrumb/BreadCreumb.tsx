"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const breadcrumbLabels: Record<string, string> = {
  dashboard: "Startseite",
  dictionary: "Wörterbuch",
  learning: "Lernen",
  practice: "Übung",
  progress: "Fortschritt",
  profile: "Profil",
  settings: "Einstellungen",
  culture: "Kultur",
  intern: "Ausbildung",
};

export default function BreadCrumb() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => segment !== "dashboard");

  const items = segments.map((segment, index) => ({
    label: breadcrumbLabels[segment] ?? segment,
    href: `/dashboard/${segments.slice(0, index + 1).join("/")}`,
  }));

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-sm">
        <li>
          <Link
            href="/dashboard"
            className="
              text-(--color-text-secondary)
              transition-colors
              hover:text-(--color-text-primary)
            "
          >
            app
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-1.5">
              <ChevronRight
                size={15}
                strokeWidth={1.75}
                className="text-(--color-text-muted)"
                aria-hidden="true"
              />

              {isLast ? (
                <span
                  aria-current="page"
                  className="
                    font-medium
                    text-(--color-text-primary)
                  "
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="
                    text-(--color-text-secondary)
                    transition-colors
                    hover:text-(--color-text-primary)
                  "
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

import { BetterUnderstanding } from "@/features/dictionary/types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

type WordLinkItemProps = {
  link: BetterUnderstanding;
};

export default function WordLinkItems({ link }: WordLinkItemProps) {
  return (
    <Link
      href={link.href}
      className="
        group
        flex
        items-start
        justify-between
        gap-4
        rounded-xl
        border
        border-(--color-border)
        bg-(--color-white)
        p-4
        transition-all
        duration-200
        hover:border-(--color-blue-400)
        hover:bg-(--color-surface)
        hover:shadow-sm
      "
    >
      <div className="min-w-0">
        <h3
          className="
            text-lg
            font-bold
            text-(--color-text-primary)
            transition-colors
            duration-200
            group-hover:text-(--color-blue-500)
          "
        >
          {link.title}
        </h3>

        <p
          className="
            mt-1.5
            text-sm
            leading-6
            text-(--color-text-secondary)
          "
        >
          {link.description}
        </p>
      </div>

      <span
        className="
          mt-0.5
          flex
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-(--color-surface)
          p-2
          text-(--color-text-secondary)
          transition-all
          duration-200
          group-hover:bg-(--color-blue-500)
          group-hover:text-(--color-white)
        "
      >
        <ExternalLink
          size={18}
          strokeWidth={2}
        />
      </span>
    </Link>
  );
}
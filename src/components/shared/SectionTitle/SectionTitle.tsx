import { LucideIcon } from "lucide-react";

type SectionTitleProps = {
  title: string;
  icon?: LucideIcon;
};

export default function SectionTitle({
  title,
  icon: Icon,
}: SectionTitleProps) {
  return (
    <div className="flex items-center gap-2.5">
      {Icon && (
        <Icon
          className="shrink-0 text-(--color-text-secondary)"
          size={20}
          strokeWidth={2}
        />
      )}

      <p className="text-lg font-bold leading-7 text-(--color-text-primary)">
        {title}
      </p>
    </div>
  );
}
